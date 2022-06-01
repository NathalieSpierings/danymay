window.wpbingo = window.wpbingo || {};

wpbingo.Sections = function Sections() {
  this.constructors = {};
  this.instances = [];

  $(document)
    .on('shopify:section:load', this._onSectionLoad.bind(this))
    .on('shopify:section:unload', this._onSectionUnload.bind(this))
    .on('shopify:section:select', this._onSelect.bind(this))
    .on('shopify:section:deselect', this._onDeselect.bind(this))
    .on('shopify:block:select', this._onBlockSelect.bind(this))
    .on('shopify:block:deselect', this._onBlockDeselect.bind(this));
};

wpbingo.Sections.prototype = _.assignIn({}, wpbingo.Sections.prototype, {
  _createInstance: function(container, constructor) {
    var $container = $(container);
    var id = $container.attr('data-section-id');
    var type = $container.attr('data-section-type');
    constructor = constructor || this.constructors[type];
    if (_.isUndefined(constructor)) {
      return;
    }
    var instance = _.assignIn(new constructor(container), {
      id: id,
      type: type,
      container: container
    });
    this.instances.push(instance);
  },

  _onSectionLoad: function(evt) {
    var container = $('[data-section-id]', evt.target)[0];
    if (container) {
      this._createInstance(container);
    }
  },

  _onSectionUnload: function(evt) {
    this.instances = _.filter(this.instances, function(instance) {
      var isEventInstance = instance.id === evt.originalEvent.detail.sectionId;
      if (isEventInstance) {
        if (_.isFunction(instance.onUnload)) {
          instance.onUnload(evt);
        }
      }
      return !isEventInstance;
    });
  },

  _onSelect: function(evt) {
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.originalEvent.detail.sectionId;
    });
    if (!_.isUndefined(instance) && _.isFunction(instance.onSelect)) {
      instance.onSelect(evt);
    }
  },

  _onDeselect: function(evt) {
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.originalEvent.detail.sectionId;
    });
    if (!_.isUndefined(instance) && _.isFunction(instance.onDeselect)) {
      instance.onDeselect(evt);
    }
  },

  _onBlockSelect: function(evt) {
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.originalEvent.detail.sectionId;
    });
    if (!_.isUndefined(instance) && _.isFunction(instance.onBlockSelect)) {
      instance.onBlockSelect(evt);
    }
  },

  _onBlockDeselect: function(evt) {
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.originalEvent.detail.sectionId;
    });
    if (!_.isUndefined(instance) && _.isFunction(instance.onBlockDeselect)) {
      instance.onBlockDeselect(evt);
    }
  },

  register: function(type, constructor) {
    this.constructors[type] = constructor;
    $('[data-section-type=' + type + ']').each(
      function(index, container) {
        this._createInstance(container, constructor);
      }.bind(this)
    );
  }
});

wpbingo.LibraryLoader = (function() {
  var types = {
    link: 'link',
    script: 'script'
  };
  var status = {
    requested: 'requested',
    loaded: 'loaded'
  };
  var cloudCdn = 'https://cdn.shopify.com/shopifycloud/';
  var libraries = {
    youtubeSdk: {
      tagId: 'youtube-sdk',
      src: 'https://www.youtube.com/iframe_api',
      type: types.script
    },
    plyrShopifyStyles: {
      tagId: 'plyr-shopify-styles',
      src: cloudCdn + 'shopify-plyr/v1.0/shopify-plyr.css',
      type: types.link
    },
    modelViewerUiStyles: {
      tagId: 'shopify-model-viewer-ui-styles',
      src: cloudCdn + 'model-viewer-ui/assets/v1.0/model-viewer-ui.css',
      type: types.link
    }
  };

  function load(libraryName, callback) {
    var library = libraries[libraryName];
    if (!library) return;
    if (library.status === status.requested) return;
    callback = callback || function() {};
    if (library.status === status.loaded) {
      callback();
      return;
    }
    library.status = status.requested;
    var tag;
    switch (library.type) {
      case types.script:
        tag = createScriptTag(library, callback);
        break;
      case types.link:
        tag = createLinkTag(library, callback);
        break;
    }
    tag.id = library.tagId;
    library.element = tag;
    var firstScriptTag = document.getElementsByTagName(library.type)[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  function createScriptTag(library, callback) {
    var tag = document.createElement('script');
    tag.src = library.src;
    tag.addEventListener('load', function() {
      library.status = status.loaded;
      callback();
    });
    return tag;
  }

  function createLinkTag(library, callback) {
    var tag = document.createElement('link');
    tag.href = library.src;
    tag.rel = 'stylesheet';
    tag.type = 'text/css';
    tag.addEventListener('load', function() {
      library.status = status.loaded;
      callback();
    });
    return tag;
  }

  return {
    load: load
  };
})();

wpbingo.Disclosure = (function() {
  var selectors = {
    disclosureInput: '[data-disclosure-input]',
    disclosureOptions: '[data-disclosure-option]'
  };

  function Disclosure($disclosure) {
    this.$container = $disclosure;
    this.cache = {};
    this._cacheSelectors();
    this._connectOptions();
  }

  Disclosure.prototype = _.assignIn({}, Disclosure.prototype, {
    _cacheSelectors: function() {
      this.cache = {
        $disclosureInput: this.$container.find(selectors.disclosureInput),
        $disclosureOptions: this.$container.find(selectors.disclosureOptions)
      };
    },

    _connectOptions: function() {
      this.cache.$disclosureOptions.on(
        'click',
        function(evt) {
          evt.preventDefault();
          this._submitForm($(evt.currentTarget).data('value'));
        }.bind(this)
      );
    },

    _submitForm: function(value) {
      this.cache.$disclosureInput.val(value);
      this.$container.parents('form').submit();
    },

    unload: function() {
      this.cache.$disclosureOptions.off();
      this.$container.off();
    }
  });

  return Disclosure;
})();

wpbingo.Currency = (function() {
  var moneyFormat = '${{amount}}';
  function formatMoney(cents, format) {
    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }
    var value = '';
    var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    var formatString = format || moneyFormat;

    function formatWithDelimiters(number, precision, thousands, decimal) {
      thousands = thousands || ',';
      decimal = decimal || '.';
      if (isNaN(number) || number === null) {
        return 0;
      }
      number = (number / 100.0).toFixed(precision);
      var parts = number.split('.');
      var dollarsAmount = parts[0].replace(
        /(\d)(?=(\d\d\d)+(?!\d))/g,
        '$1' + thousands
      );
      var centsAmount = parts[1] ? decimal + parts[1] : '';
      return dollarsAmount + centsAmount;
    }

    switch (formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
      case 'amount_no_decimals_with_space_separator':
        value = formatWithDelimiters(cents, 0, ' ');
        break;
      case 'amount_with_apostrophe_separator':
        value = formatWithDelimiters(cents, 2, "'");
        break;
    }
    return formatString.replace(placeholderRegex, value);
  }
  return {
    formatMoney: formatMoney
  };
})();

wpbingo.collectionPages = (function() {
  var bwpFilter = '.js-page-collection',
	wpbingoCollectionProduct = '#JsCollectionProduct',
	wpbingoFilterContentProduct = '.js-collection-content-product',
	wpbingoFilterSidebar = '.collection-sidebar',
	wpbingoFilterTitle = '.wpbingo-breadcrumbs__inner',	
	wpbingoFacetsContainer = '.active-facets-desktop',
    bwpChangeView = '.js-change-view',
	canbeloaded = true,
    bwpSortBy = '.js-sortby';

  var ajaxFilterParams,
    ajaxFilterGetCollectionUrl,
    ajaxFilterCreateUrl,
    ajaxFilterChangeView,
	ajaxFilterCategory,
	ajaxBreadcrumbsCategory,
	ajaxFilterLoadMore,
	ajaxFilterInfinity,
    ajaxFilterPaging;

	var init = function() {
		if ($(bwpFilter)) {
			var History = window.History;
			History.Adapter.bind(window, 'statechange', function() {
			History.getState();
		  });
		}
		ajaxFilterParams();
		ajaxFilterChangeView();
		ajaxFilterCategory();
		ajaxBreadcrumbsCategory();
		ajaxFilterLoadMore();
		ajaxFilterInfinity();
		ajaxFilterPaging();
	};
	ajaxFilterParams = function() {
		Shopify.queryParams = {};
		if (location.search.length) {
		  for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
			aKeyValue = aCouples[i].split('=');
			if (aKeyValue.length > 1) {
			  Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
			}
		  }
		}
	};
	ajaxFilterGetCollectionUrl = function(collection, url) {
		var str = url;
		var indexCollection = str.indexOf(collection);
		if(indexCollection < 0)
			return '';
		str = str.slice(indexCollection + collection.length, str.length);
		var indexSlash = str.indexOf('/') > -1 ? str.indexOf('/') : str.length;
		str = str.slice(0, indexSlash).toLowerCase();
		return str.replace('=', '');
	};
	ajaxFilterCreateUrl = function(baseLink) {
		var newQuery = $.param(Shopify.queryParams).replace(/%2B/g, '+');
		var collectionHandle = ajaxFilterGetCollectionUrl('/collections/', location.pathname);
		var pathName = '/collections/' + collectionHandle;
		var arrayUrl = location.pathname.split('/');
		if (arrayUrl.length >= 4) {
			var currentTagName = arrayUrl[3].split('?').shift();
			if (currentTagName != '') {
				newQuery = newQuery + '+' + currentTagName;
			}
		}
		if (baseLink) {
			if (newQuery != '')
				return baseLink + '?' + newQuery;
			else
				return baseLink;
		}
		return pathName + '?' + newQuery;
	};
	ajaxFilterChangeView = function() {
		cViewCollection = wpbingo.getCookie('wpbingo_view_collection');
		if(cViewCollection){
			$(wpbingoCollectionProduct).removeAttr('class');
			$(wpbingoCollectionProduct).addClass(cViewCollection);
			$(bwpChangeView).removeClass('active');
			$('[data-view='+cViewCollection+']').addClass('active');
		}
		$(bwpFilter).on('click', bwpChangeView, function(e) {
			e.preventDefault();
			if (!$(this).hasClass('active')) {
				wpbingo.setCookie("wpbingo_view_collection", $(this).data('view'), 30);
				$(bwpChangeView).removeClass('active');
				$(this).addClass('active');
				$(wpbingoCollectionProduct).removeAttr('class');
				$(wpbingoCollectionProduct).addClass($(this).data('view'));
			}
		});
		$(wpbingoCollectionProduct).removeClass('load_collection');
	};
	ajaxFilterPaging = function() {
		$(bwpFilter).on('click', '.js-collection-pagination a', function(e) {
			e.preventDefault();
			var pageURL = $(this).attr('href').match(/page=\d+/g);
			if (pageURL) {
				Shopify.queryParams.page = parseInt(pageURL[0].match(/\d+/g));
				var searchParams = ( window.history.state && window.history.state.searchParams ) ? window.history.state.searchParams : '';
				var newurl = ajaxFilterCreateUrl();
				history.pushState({ searchParams }, '', `${newurl}${searchParams && '&'.concat(searchParams)}`);
				$.ajax({
					type: 'get',
					url: `${newurl}${searchParams && '&'.concat(searchParams)}`,
					success: function(data) {
						$(wpbingoFilterContentProduct).replaceWith($(data).find(wpbingoFilterContentProduct));
						wpbingo.click_atribute_image();
						SPR.initRatingHandler ();
						SPR.initDomEls ();
						SPR.loadProducts ();
						SPR.loadBadges ();
						wpbingo.countdown();
					},
					error: function(xhr, text) {
						console.log(text);
					}
				});
				$('body,html').animate({
					scrollTop: $('.header').height()
				}, 600);
			}
		});
	};
	ajaxFilterLoadMore = function() {
		$(bwpFilter).on('click', '.js-collection-loadmore a', function(e) {
			e.preventDefault();
			var pageURL = $(this).attr('href').match(/page=\d+/g);
			$(this).addClass('active');
			if (pageURL) {
				Shopify.queryParams.page = parseInt(pageURL[0].match(/\d+/g));
				var searchParams = ( window.history.state && window.history.state.searchParams ) ? window.history.state.searchParams : '';
				var newurl = ajaxFilterCreateUrl();
				$.ajax({
					type: 'get',
					url: `${newurl}${searchParams && '&'.concat(searchParams)}`,
					success: function(data) {
						$(".products__row",wpbingoFilterContentProduct).append($(data).find(".products__row").html());
						$('.js-collection-loadmore').first().remove();
						SPR.registerCallbacks();
						SPR.initRatingHandler();
						SPR.initDomEls();
						SPR.loadProducts();
						SPR.loadBadges();
                      	wpbingo.countdown();
						wpbingo.click_atribute_image();
						$(this).removeClass('active');
					},
					error: function(xhr, text) {
						console.log(text);
					}
				});
			}
		});
	};
	ajaxFilterInfinity = function() {
		if( $( ".js-collection-infinity").length > 0 ){
			$(window).scroll(function(){
				if ( $(document).scrollTop() > ( $(document).height() - 2000 ) && canbeloaded==true && $( ".js-collection-infinity").length > 0 ){
					$( ".js-collection-infinity a").addClass("active");
					var pageURL = $("a",".js-collection-infinity").attr('href').match(/page=\d+/g);
					if (pageURL) {
						Shopify.queryParams.page = parseInt(pageURL[0].match(/\d+/g));
						var searchParams = ( window.history.state && window.history.state.searchParams ) ? window.history.state.searchParams : '';
						var newurl = ajaxFilterCreateUrl();
						$.ajax({
							type: 'get',
							url: `${newurl}${searchParams && '&'.concat(searchParams)}`,
							beforeSend: function( xhr ){
								$('.js-collection-infinity').first().remove();
								canbeloaded = false;
							},
							success: function(data) {
								canbeloaded = true;
								$(".products__row",wpbingoFilterContentProduct).append($(data).find(".products__row").html());
								SPR.initRatingHandler();
								SPR.initDomEls();
								SPR.loadProducts();
								SPR.loadBadges();
								wpbingo.click_atribute_image();
                             	 wpbingo.countdown();
							},
							error: function(xhr, text) {
								console.log(text);
							}
						});
					}
				}
			});
		}
	};
	slickBreadcrumbs = function($element) {
		var nav = $element.data('nav'),
			infinite = $element.data('infinite'),
			columns = $element.data("columns"),
			column1440 = $element.data("column1440"),
			column1 = $element.data("column1"),
			column2 = $element.data("column2"),
			column3 = $element.data("column3"),
			column4 = $element.data("column4");
		var config = {
			swipeToSlide: true,
			arrows: nav,
			slidesToShow: columns,
			slidesToScroll: columns,
			responsive: [
				{
					breakpoint: 1441,
					settings: {
						slidesToShow: column1440,
						slidesToScroll: column1440,
					}
				},
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: column1,
						slidesToScroll: column1,
					}
				},				
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: column2,
						slidesToScroll: column2,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: column3,
						slidesToScroll: column3,
						vertical: false,
						verticalSwiping : false,
					}
				},
				{
					breakpoint: 480,			  
					settings: {
						slidesToShow: column4,
						slidesToScroll: column4,
						vertical: false,
						verticalSwiping : false,
					}
				}
			]
		};
		$element.slick(config);
		if($(".slick-arrow",$element).length > 0){
			var $prev = $(".slick-prev",$element).clone();
			$(".slick-prev",$element).remove();
			if($element.parent().find(".slick-prev").length == 0){
				$prev.prependTo($element.parent());
			}
			$prev.on( "click", function() {
				$element.slick('slickPrev');
			});
			var $next =  $(".slick-next",$element).clone();
			$(".slick-next",$element).remove();
			if($element.parent().find(".slick-next").length == 0){
				$next.appendTo($element.parent());
			}
			$next.on( "click", function() {
				$element.slick('slickNext');
			});
		}
	};	
	ajaxFilterCategory = function($element) {
		if($element){
			var $categories = $element;
		}else{
			var $categories = $('.sidebar-categories');
		}
		if ( $('.wpbingo-breadcrumbs').hasClass('have-collection') ) {
			var $collection = true;
		}
		$($categories).on('click', 'a', function(e){
			e.preventDefault();
			var pageURL = $(this).attr('href');
			var newTitle = $(".name",$(this)).text();
			History.pushState({
			  param: Shopify.queryParams
			}, pageURL, pageURL);	
			delete Shopify.queryParams.page;
			$("#pre-loading").addClass('load-product');
			$('#pre-loading .pre-loading__bar').css({"width":"40%"});
			$.ajax({
				type: 'get',
				url: pageURL,
				success: function(data) {
					document.title = newTitle;			
					$(wpbingoFilterContentProduct).replaceWith($(data).find(wpbingoFilterContentProduct));
					$(wpbingoFilterSidebar).replaceWith($(data).find(wpbingoFilterSidebar));
					$(wpbingoFilterTitle).replaceWith($(data).find(wpbingoFilterTitle));
					$(wpbingoFacetsContainer).replaceWith($(data).find(wpbingoFacetsContainer));
					$('.wpbingo-breadcrumbs__image').replaceWith($(data).find('.wpbingo-breadcrumbs__image'));
					if ( $collection ) {
						slickBreadcrumbs( $('.wpbingo-breadcrumbs__image .js-carousel') );
					}			
					ajaxFilterCategory();
					ajaxBreadcrumbsCategory( $('.wpbingo-breadcrumbs .bwp_slider-carousel') );
					wpbingo.click_atribute_image();
					wpbingo.hideLoading();
					SPR.initRatingHandler ();
					SPR.initDomEls ();
					SPR.loadProducts ();
					SPR.loadBadges ();
                  	wpbingo.countdown();
					ajaxFilterChangeView();
					initButtons();
					$('#pre-loading .pre-loading__bar').css({"width":"100%"});
					setTimeout(function() { 
						$('#pre-loading .pre-loading__bar').css({"width":"0"});
						$("#pre-loading").removeClass('load-product');
					}, 500);
				},
				error: function(xhr, text) {
					console.log(text);
				}
			});			
			$('body,html').animate({
				scrollTop: $('.header').height() + $('.wpbingo-breadcrumbs').height()
			}, 600);
		});
	};	
	ajaxBreadcrumbsCategory = function($element) {
		if($element){
			var $categories = $element;
		}else{
			var $categories = $('.wpbingo-breadcrumbs .bwp_slider-carousel');
		}
		if ( $('.wpbingo-breadcrumbs').hasClass('have-collection') ) {
			var $collection = true;
		}
		$($categories).on('click', 'a', function(e){
			e.preventDefault();
			var pageURL = $(this).attr('href');
			var newTitle = $("h2",$(this)).text();
			History.pushState({
			  param: Shopify.queryParams
			}, pageURL, pageURL);	
			delete Shopify.queryParams.page;
			$("#pre-loading").addClass('load-product');
			$('#pre-loading .pre-loading__bar').css({"width":"40%"});
			$.ajax({
				type: 'get',
				url: pageURL,
				success: function(data) {
					document.title = newTitle;			
					$(wpbingoFilterContentProduct).replaceWith($(data).find(wpbingoFilterContentProduct));
					$(wpbingoFilterSidebar).replaceWith($(data).find(wpbingoFilterSidebar));
					$(wpbingoFilterTitle).replaceWith($(data).find(wpbingoFilterTitle));
					$(wpbingoFacetsContainer).replaceWith($(data).find(wpbingoFacetsContainer));
					$('.wpbingo-breadcrumbs__image').replaceWith($(data).find('.wpbingo-breadcrumbs__image'));
					ajaxFilterCategory( $('.sidebar-categories') );
					ajaxBreadcrumbsCategory();
					wpbingo.click_atribute_image();
					wpbingo.hideLoading();
					SPR.initRatingHandler ();
					SPR.initDomEls ();
					SPR.loadProducts ();
					SPR.loadBadges ();
                 	wpbingo.countdown();
					initButtons();
					if ( $collection ) {
						slickBreadcrumbs( $('.wpbingo-breadcrumbs__image .js-carousel') );
					}
					ajaxFilterChangeView();
					$('#pre-loading .pre-loading__bar').css({"width":"100%"});
					setTimeout(function() { 
						$('#pre-loading .pre-loading__bar').css({"width":"0"});
						$("#pre-loading").removeClass('load-product');
					}, 500);
				},
				error: function(xhr, text) {
					console.log(text);
				}
			});			
			$('body,html').animate({
				scrollTop: $('.header').height() + $('.wpbingo-breadcrumbs').height()
			}, 600);
		});
	};	
	return init;
})();

wpbingo.Variants = (function() {
  function Variants(options) {
    this.$container = options.$container;
    this.product = options.product;
    this.productSelectOption = options.productSelectOption;
    this.singleOptionSelector = options.singleOptionSelector;
    this.originalSelectorId = options.originalSelectorId;
    this.enableHistoryState = options.enableHistoryState;
    this.currentVariant = this._getVariantFromOptions();
    $(this.singleOptionSelector, this.$container).on(
      'change',
      this._onSelectChange.bind(this)
	 
    );
  }

  Variants.prototype = _.assignIn({}, Variants.prototype, {
    _getCurrentOptions: function() {
      var currentOptions = _.map(
        $(this.singleOptionSelector, this.$container),
        function(element) {
          var $element = $(element);
          var type = $element.attr('type');
          var currentOption = {};
          if (type === 'radio' || type === 'checkbox') {
            if ($element[0].checked) {
              currentOption.value = $element.val();
              currentOption.index = $element.data('index');
              return currentOption;
            } else {
              return false;
            }
          } else {
            currentOption.value = $element.val();
            currentOption.index = $element.data('index');
            return currentOption;
          }
        }
      );
      currentOptions = _.compact(currentOptions);
      return currentOptions;
    },

    _getVariantFromOptions: function() {
      var selectedValues = this._getCurrentOptions();
      var variants = this.product.variants;
      var found = _.find(variants, function(variant) {
        return selectedValues.every(function(values) {
          return _.isEqual(variant[values.index], values.value);
        });
      });

      return found;
    },

    _onSelectChange: function() {
      var variant = this._getVariantFromOptions();

      if ($('[data-single-option-button]', this.$container).length) {
        this._updateVariantsButton();
        if (!variant || !variant.available) {
          this._updateVariantsButtonDisabed();
          return;
        }
      }

      this.$container.trigger({
        type: 'variantChange',
        variant: variant
      });

      if (!variant) return;

      this._updateMasterSelect(variant);
      this._updateMedia(variant);
      this._updatePrice(variant);
	  this._updateQuantity(variant);
	  this._updateOption(variant);
	  this._updatePricesticky(variant);
      this._updateSKU(variant);
      this.currentVariant = variant;
      if (this.enableHistoryState) {
        this._updateHistoryState(variant);
      }
    },

    _updateVariantsButtonDisabed: function() {
      for (var i = 2; i <= 3; i++) {
        if ($(this.productSelectOption + i, this.$container).length) {
          var isUpdate = false;
          $(this.productSelectOption + i + ' ' + this.singleOptionSelector, this.$container).each(function() {
            var $element = $(this);
            var type = $element.attr('type');
            if (type === 'radio' || type === 'checkbox') {
              if (this.checked && $element.hasClass('disabled')) {
                $element.prop('checked', false);
                isUpdate = true;
                return false;
              }
            }
          });
          $(this.productSelectOption + i + ' ' + this.singleOptionSelector, this.$container).each(function() {
            var $element = $(this);
            var type = $element.attr('type');
            if (isUpdate && (type === 'radio' || type === 'checkbox') && !$element.hasClass('disabled')) {
              $element.prop('checked', true);
              isUpdate = false;
              $element.trigger('change');
              return false;
            }
          });
        }
      }
    },

    _updateVariantsButton: function() {
      var selectedValues = this._getCurrentOptions();
      var variants = this.product.variants;
      for (var i = 2; i <= 3; i++) {
        if ($(this.productSelectOption + i, this.$container).length) {
          $(this.productSelectOption + i + ' ' + this.singleOptionSelector, this.$container).each(function() {
            var $self = $(this);
            var optionValue = $self.val();
            var foundIndex;
            if (i === 2) {
              foundIndex = _.findIndex(variants, function(variant) {
                return variant.option1 === selectedValues[0].value &&
                  variant.option2 === optionValue &&
                  variant.available === true;
              });
            } else if (i === 3) {
              foundIndex = _.findIndex(variants, function(variant) {
                return variant.option1 === selectedValues[0].value &&
                variant.option2 === selectedValues[1].value &&
                  variant.option3 === optionValue &&
                  variant.available === true;
              });
            }
            if (foundIndex !== -1) {
              $self.removeAttr('disabled', 'disabled').removeClass('disabled');
              $self.next('label').removeClass('disabled');
            } else {
              $self.attr('disabled', 'disabled').addClass('disabled');
              $self.next('label').addClass('disabled');
            }
          });
        }
      }
    },

    _updateMedia: function(variant) {
		var variantMedia = variant.featured_media || {};
		var currentVariantMedia = this.currentVariant.featured_media || {};
		var isMatchingPreviewImage = false;
		if (variantMedia.preview_image && currentVariantMedia.preview_image) {
			isMatchingPreviewImage = variantMedia.preview_image.src === currentVariantMedia.preview_image.src;
		}
		if (!variant.featured_media || isMatchingPreviewImage) return;
		this.$container.trigger({
			type: 'variantMediaChange',
			variant: variant
		});
		
    },

    _updatePrice: function(variant) {
		if (
			variant.price === this.currentVariant.price &&
			variant.compare_at_price === this.currentVariant.compare_at_price
		){
			return;
		}
		this.$container.trigger({
			type: 'variantPriceChange',
			variant: variant
		});
    },
	
	_updateQuantity: function(){
		setTimeout(function(){ $( "#variant-inventory" ).load(window.location.href + " #variant-inventory" ); }, 10);
	},
	
	_updateOption: function(){ 
		setTimeout(function(){ $( "#option-selector" ).load(window.location.href + " #option-selector" ); }, 10);
	},
	
	_updatePricesticky: function(){ 
		setTimeout(function(){ $( "#price-sticky" ).load(window.location.href + " #price-sticky" ); }, 10);
	},
	
    _updateSKU: function(variant) {
		if (variant.sku === this.currentVariant.sku) {
			return;
		}
		this.$container.trigger({
			type: 'variantSKUChange',
			variant: variant
		});
    },

    _updateHistoryState: function(variant) {
		if (!history.replaceState || !variant) {
			return;
		}
		var newurl =
			window.location.protocol +
			'//' +
			window.location.host +
			window.location.pathname +
			'?variant=' +
			variant.id;
		window.history.replaceState({path: newurl},'',newurl
		);
    },

    _updateMasterSelect: function(variant) {
		$(this.originalSelectorId, this.$container).val(variant.id);
    }
  });

  return Variants;
})();

wpbingo.ProductModel = (function() {
  var modelJsonSections = {};
  var models = {};
  var xrButtons = {};
  var selectors = {
    productMediaGroup: '.js-product-media-group',
    productMediaGroupWrapper: '.js-product-single-media',
    xrButton: '[data-shopify-xr]',
    xrButtonSingle: '[data-shopify-xr-single]'
  };

  var classes = {
    viewInSpaceDisabled: 'product-single__view-in-space--disabled'
  };

  function init(modelViewerContainers, sectionId) {
    modelJsonSections[sectionId] = {
      loaded: false
    };

    modelViewerContainers.each(function(index) {
      var $modelViewerContainer = $(this);
      var mediaId = $modelViewerContainer.data('media-id');
      var $modelViewerElement = $(
        $modelViewerContainer.find('model-viewer')[0]
      );
      var modelId = $modelViewerElement.data('model-id');

      if (index === 0) {
        var $xrButton = $modelViewerContainer
          .closest(selectors.productMediaGroupWrapper)
          .find(selectors.xrButtonSingle);

        xrButtons[sectionId] = {
          $element: $xrButton,
          defaultId: modelId
        };
      }

      models[mediaId] = {
        modelId: modelId,
        sectionId: sectionId,
        $container: $modelViewerContainer,
        $element: $modelViewerElement
      };
    });

    window.Shopify.loadFeatures([
      {
        name: 'shopify-xr',
        version: '1.0',
        onLoad: setupShopifyXr
      }
    ]);

    if (models.length < 1) return;
    window.Shopify.loadFeatures([
      {
        name: 'model-viewer-ui',
        version: '1.0',
        onLoad: setupModelViewerUi
      }
    ]);
    wpbingo.LibraryLoader.load('modelViewerUiStyles');
  }

  function setupShopifyXr(errors) {
    if (errors) return;
    if (!window.ShopifyXR) {
      document.addEventListener('shopify_xr_initialized', function(event) {
        if (event.detail.shopifyXREnabled) {
          setupShopifyXr();
        } else {
          $(selectors.xrButton).addClass(classes.viewInSpaceDisabled);
        }
      });
      return;
    }

    for (var sectionId in modelJsonSections) {
      if (modelJsonSections.hasOwnProperty(sectionId)) {
        var modelSection = modelJsonSections[sectionId];
        if (modelSection.loaded) continue;
        var $modelJson = $('#ModelJson-' + sectionId);
        window.ShopifyXR.addModels(JSON.parse($modelJson.html()));
        modelSection.loaded = true;
      }
    }
    window.ShopifyXR.setupXRElements();
  }

  function setupModelViewerUi(errors) {
    if (errors) return;
    for (var key in models) {
      if (models.hasOwnProperty(key)) {
        var model = models[key];
        if (!model.modelViewerUi) {
          model.modelViewerUi = new Shopify.ModelViewerUI(model.$element);
        }
        setupModelViewerListeners(model);
      }
    }
  }

  function setupModelViewerListeners(model) {
    var xrButton = xrButtons[model.sectionId];
    var $productMediaGroup = model.$container.closest(
      selectors.productMediaGroup
    );

    model.$element
      .on('shopify_model_viewer_ui_toggle_play', function() {
        wpbingo.updateSlickSwipe($productMediaGroup, false);
      })
      .on('shopify_model_viewer_ui_toggle_pause', function() {
        wpbingo.updateSlickSwipe($productMediaGroup, true);
      });

    model.$container.on('mediaVisible', function() {
      xrButton.$element.attr('data-shopify-model3d-id', model.modelId);
      model.modelViewerUi.play();
    });

    model.$container
      .on('mediaHidden', function() {
        xrButton.$element.attr('data-shopify-model3d-id', xrButton.defaultId);
        model.modelViewerUi.pause();
      })
      .on('xrLaunch', function() {
        model.modelViewerUi.pause();
      });
  }

  function removeSectionModels(sectionId) {
    for (var key in models) {
      if (models.hasOwnProperty(key)) {
        var model = models[key];
        if (model.sectionId === sectionId) {
          models[key].modelViewerUi.destroy();
          delete models[key];
        }
      }
    }
    delete modelJsonSections[sectionId];
  }

  return {
    init: init,
    removeSectionModels: removeSectionModels
  };
})();

function onYouTubeIframeAPIReady() {
  wpbingo.ProductVideo.loadVideos(wpbingo.ProductVideo.hosts.youtube);
}

wpbingo.ProductVideo = (function() {
  var videos = {};
  var hosts = {
    html5: 'html5',
    youtube: 'youtube'
  };
  var selectors = {
    productMediaWrapper: '.js-product-media',
    productMediaGroup: '.js-product-media-group',
  };
  var attributes = {
    enableVideoLooping: 'enable-video-looping',
    videoId: 'video-id'
  };

  function init(videoContainer, sectionId) {
    if (!videoContainer.length) {
      return;
    }
    var videoElement = videoContainer.find('iframe, video')[0];
    var mediaId = videoContainer.data('mediaId');
    if (!videoElement) {
      return;
    }
    videos[mediaId] = {
      mediaId: mediaId,
      sectionId: sectionId,
      host: hostFromVideoElement(videoElement),
      container: videoContainer,
      element: videoElement,
      ready: function() {
        createPlayer(this);
      }
    };
    var video = videos[mediaId];
    switch (video.host) {
      case hosts.html5:
        window.Shopify.loadFeatures([
          {
            name: 'video-ui',
            version: '1.1',
            onLoad: setupPlyrVideos
          }
        ]);
        wpbingo.LibraryLoader.load('plyrShopifyStyles');
        break;
      case hosts.youtube:
        wpbingo.LibraryLoader.load('youtubeSdk');
        break;
    }
  }

  function setupPlyrVideos(errors) {
    if (errors) {
      fallbackToNativeVideo();
      return;
    }
    loadVideos(hosts.html5);
  }

  function createPlayer(video) {
    if (video.player) {
      return;
    }
    var productMediaWrapper = video.container.closest(
      selectors.productMediaWrapper
    );
    var enableLooping = productMediaWrapper.data(attributes.enableVideoLooping);
    switch (video.host) {
      case hosts.html5:
        video.player = new Shopify.Plyr(video.element, {
          loop: { active: enableLooping }
        });
        var $productMediaGroup = $(video.container).closest(
          selectors.productMediaGroup
        );
        video.player.on('seeking', function() {
          wpbingo.updateSlickSwipe($productMediaGroup, false);
        });
        video.player.on('seeked', function() {
          wpbingo.updateSlickSwipe($productMediaGroup, true);
        });
        break;
      case hosts.youtube:
        var videoId = productMediaWrapper.data(attributes.videoId);
        video.player = new YT.Player(video.element, {
          videoId: videoId,
          events: {
            onStateChange: function(event) {
              if (event.data === 0 && enableLooping) event.target.seekTo(0);
            }
          }
        });
        break;
    }

    productMediaWrapper.on('mediaHidden xrLaunch', function() {
      if (!video.player) return;
      if (video.host === hosts.html5) {
        video.player.pause();
      }
      if (video.host === hosts.youtube && video.player.pauseVideo) {
        video.player.pauseVideo();
      }
    });

    productMediaWrapper.on('mediaVisible', function() {
      if (!video.player) return;
      if (video.host === hosts.html5) {
        video.player.play();
      }
      if (video.host === hosts.youtube && video.player.playVideo) {
        video.player.playVideo();
      }
    });
  }

  function hostFromVideoElement(video) {
    if (video.tagName === 'VIDEO') {
      return hosts.html5;
    }
    if (video.tagName === 'IFRAME') {
      if (
        /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
          video.src
        )
      ) {
        return hosts.youtube;
      }
    }
    return null;
  }

  function loadVideos(host) {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var video = videos[key];
        if (video.host === host) {
          video.ready();
        }
      }
    }
  }

  function fallbackToNativeVideo() {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var video = videos[key];
        if (video.nativeVideo) continue;
        if (video.host === hosts.html5) {
          video.element.setAttribute('controls', 'controls');
          video.nativeVideo = true;
        }
      }
    }
  }

  function removeSectionVideos(sectionId) {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var video = videos[key];
        if (video.sectionId === sectionId) {
          if (video.player) video.player.destroy();
          delete videos[key];
        }
      }
    }
  }

  return {
    init: init,
    hosts: hosts,
    loadVideos: loadVideos,
    removeSectionVideos: removeSectionVideos
  };
})();

// PRODUCT SECTION
wpbingo.Product = (function() {
	function Product(container) {
		var $window = $(window);
		var $container = (this.$container = $(container));
		var sectionId = $container.attr('data-section-id');
		this.settings = {
			productPageLoad: false,
			preloadImage: false,
			enableHistoryState: $container.data('enable-history-state'),
			namespace: '.productSection',
			sectionId: sectionId
		};
		this.selectors = {
			productMediaGroup: '.js-product-media-group',
			productMediaGroupItem: '.js-product-media-item',
			productMediaWrapper: '.js-product-media',
			productMediaTypeModel: '[data-product-media-type-model]',
			productMediaTypeVideo: '[data-product-media-type-video]',
			productThumbnails: '.js-product-thumbnails',
			buyTogether: '.buy-together-products',
			productThumbnail: '[data-product-thumbnail]',
			productImageZoom: '[data-mfp-src]',
			meta: '.product-single__meta',
			productWrapper: '.product-single',
			productSelectOption: '.js-product-select-option--',
			originalSelectorId: '.js-product-select',
			singleOptionSelector: '.js-single-option-selector',
			slickDots: '[data-slick-dots]',
			slickNext: '[data-slick-next]',
			slickPrevious: '[data-slick-previous]',
			variantColor: '[data-color]',
		};
		this.classes = {
			hide: 'd-none',
			priceContainerUnitAvailable: 'price-container--unit-available',
			productInventoryInStock: 'product-avaiable__text--instock',
			productInventoryOutStock: 'product-avaiable__text--outstock',
		};
		this.slickMediaSettings = {
		  slide: this.selectors.productMediaGroupItem,
		  rows: 0,
		  accessibility: true,
		  arrows: true,
		  appendDots: this.selectors.slickDots,
		  prevArrow: this.selectors.slickPrevious,
		  nextArrow: this.selectors.slickNext,
		  dots: true,
		  infinite: $(this.selectors.productMediaGroup).data('infinite') ? true : false,
		  draggable: $(this.selectors.productMediaGroup).data('draggable') ? true : false,
		  adaptiveHeight: true,
		  customPaging: function(slick, index) {
			var slideA11yString = wpbingo.strings.productSlideLabel
			  .replace('[slide_number]', index + 1)
			  .replace('[slide_max]', slick.slideCount);

			var mediaA11yString = $(
			  '[data-slick-index="' + index + '"]',
			  this.$container
			).data('slick-media-label');

			var ariaCurrent = index === 0 ? ' aria-current="true"' : '';
			return (
			  '<a href="javascript:void(0)' +
			  '" aria-label="' +
			  slideA11yString +
			  ' ' +
			  mediaA11yString +
			  '" aria-controls="slick-slide0' +
			  index +
			  '"' +
			  ariaCurrent +
			  '></a>'
			);
		  }.bind(this)
		};

		if (!$('#ProductJson-' + sectionId).html()) {
		  return;
		}
		this.productSingleObject = JSON.parse(
		  document.getElementById('ProductJson-' + sectionId).innerHTML
		);

		this.zoomType = $container.data('image-zoom-type');
		this.isStackedLayout = $container.data('stacked-layout');
		this.isNothumLayout = $container.data('nothum');
		this.focusableElements = [
		  'iframe',
		  'input',
		  'button',
		  'video',
		  '[tabindex="0"]'
		].join(',');

		this.slickThumbsSettings = {
			slidesToShow: $(this.selectors.productThumbnails).data('columns'),
			slidesToScroll: 1,
			rows: 0,
			accessibility: true,
			arrows: true,
			dots: false,
			infinite: false,
			focusOnSelect: true,
			adaptiveHeight: true,
			vertical: $(this.selectors.productThumbnails).data('vertical') ? true : false,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 4,
						vertical: false,
					}
				},
			]
		};

		if (!this.isStackedLayout && !this.isNothumLayout && $(this.selectors.productMediaGroup, this.$container) && $(this.selectors.productThumbnails, this.$container)) {
			this.slickMediaSettings.asNavFor = this.selectors.productThumbnails + '-' + sectionId;
			this.slickThumbsSettings.asNavFor = this.selectors.productMediaGroup + '-' + sectionId;
		}

		this.view_gallery_product();
		this.event_buy_together();
		this.event_group_product();
		this.initBreakpoints();
		this.initProductVariant();
		this.initModelViewerLibraries();
		this.initShopifyXrLaunch();
		this.initProductVideo();
		this.initStickyProductMeta();
		var $element = $(".product-single");
		var _data = $element.data();
		$('.product-single__video img').css("width",$(".product-single__thumbnail img").width());
		$('.product-single__video img').css("height",($(".product-single__thumbnail img").height() - 2.5));
		$window
		  .on('load' + this.settings.namespace, wpbingo.initStickyProductMeta)
		  .on(
			'resize' + this.settings.namespace,
			wpbingo.debounce(this.initStickyProductMeta, 150).bind(this)
		  );
	}

  Product.prototype = _.assignIn({}, Product.prototype, {
    initBreakpoints: function() {
		var self = this;
		if (!self.isStackedLayout) {
			self.createMediaCarousel();
			self.createThumbnailCarousel();
		} else {
			enquire.register(wpbingo.variables.mediaMobile, {
				match: function() {
					self.createMediaCarousel();
				},
				unmatch: function() {
					self.destroyMediaCarousel();
				}
			});
		}
    },
    initProductVariant: function() {
		var options = {
			$container: this.$container,
			enableHistoryState: this.settings.enableHistoryState || false,
			productSelectOption: this. selectors.productSelectOption,
			singleOptionSelector: this.selectors.singleOptionSelector,
			originalSelectorId: this.selectors.originalSelectorId + '--' + this.settings.sectionId,
			product: this.productSingleObject
		};
		this.variants = new wpbingo.Variants(options);
		this.$container.on('variantChange' + this.settings.namespace,this.productPage.bind(this));
		this.$container.on('variantMediaChange' + this.settings.namespace,this.showVariantMedia.bind(this));
    },
    initModelViewerLibraries: function() {
      if (!this.$container.data('has-model')) return;
      var $modelViewerElements = $(
        this.selectors.productMediaTypeModel,
        this.$container
      );
      wpbingo.ProductModel.init($modelViewerElements, this.settings.sectionId);
    },

    initShopifyXrLaunch: function() {
      $(document).on(
        'shopify_xr_launch',
        function() {
          var $currentMedia = $(
            this.selectors.productMediaWrapper +
              ':not(.' +
              this.classes.hide +
              ')',
            this.$container
          );
          $currentMedia.trigger('xrLaunch');
        }.bind(this)
      );
    },

    initProductVideo: function() {
      var sectionId = this.settings.sectionId;

      $(this.selectors.productMediaTypeVideo, this.$container).each(function() {
        var $videoContainer = $(this);
        wpbingo.ProductVideo.init($videoContainer, sectionId);
      });
    },

    trapCarouselFocus: function($slider, removeFocusTrap) {
      if (!$slider) return;

      $slider
        .find('.slick-slide:not(.slick-active)')
        .find(this.focusableElements)
        .attr('tabindex', removeFocusTrap ? '0' : '-1');

      $slider
        .find('.slick-active')
        .find(this.focusableElements)
        .attr('tabindex', '0');
    },

    updateCarouselDotsA11y: function(nextSlide) {
      var $dotLinks = $(this.selectors.slickDots).find('a');
      $dotLinks
        .removeAttr('aria-current')
        .eq(nextSlide)
        .attr('aria-current', 'true');
    },
	view_gallery_product: function() {
		$element = $(".product-single");
		$(".mfp-image",$element).bind("click", function(e) {
			e.preventDefault();
			var items = [];
			var $number = $(this).data("number");
			var gallery = [];
			var $j = 0;
			var $i = 0;
			$('.js-product-media-item','.js-product-media-group').each(function(){
				if($("img",$(this)).data("image") == true){
					var $href = $("img",$(this)).data("src");
					if($href){
						gallery[$j] = {"href":$href};
						$j++;
					}
				}
			});
			if(gallery){
				$.each( gallery, function( key, value ){
					if( value ){
						items[$i] = {"src":value.href,w: $(".mfp-image",$element).width() * 3,h: $(".mfp-image",$element).height() * 3};
						$i++;
					}
				});
				var pswpElement = document.querySelectorAll('.pswp')[0];
				var options = {
					index: $number,
					closeOnScroll: false,
					history: false,
					shareEl: false,
				};
				var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
				gallery.init();
			}
		});
    },
	event_buy_together: function() {
		$(document).on('change', '#buy_together_form .item-product input[type="checkbox"]', function (e) {
			var $this = $(this);
			if( $this.closest('.item-product').hasClass('active') ){
				$this.closest('.item-product').removeClass('active');
			}else{
				$this.closest('.item-product').addClass('active');
			}
			var $thisWrap = $this.closest('.item-products-wrap');
			var $thisWpbingoWrap = $thisWrap.closest('.buy-together-products');
			var $thisProductsBtWrap = $thisWpbingoWrap.find('.item-products-wrap');
			var total_items = 0;
			var total_price = 0;
			$thisWrap.find('.item-product').each(function () {
				var this_product_id = $(this).attr('data-product_id');
				if ( $(this).hasClass('active') ) {
					$('input[type="hidden"]',$(this)).prop('disabled', false);
					$('input[type="number"]',$(this)).prop('disabled', false);
					if( $('select',$(this)).length > 0 ){
						var this_price = $('select',$(this)).find(':selected').data('price');
						$('select',$(this)).prop('disabled', false);
					}else{
						var this_price = $('input[type="checkbox"]',$(this)).attr('data-price');
					}
					if (!isNaN(this_price)) {
						total_price = Number(total_price) + Number(this_price);
					}
					Number(total_items++);
					$thisProductsBtWrap.find('.item-product-inner[data-product_id="' + this_product_id + '"]').removeClass('buy-together-hidden');
				}
				else {
					$thisProductsBtWrap.find('.item-product-inner[data-product_id="' + this_product_id + '"]:not(.buy-together-content)').addClass('buy-together-hidden');
					$('input[type="hidden"]',$(this)).prop('disabled', true);
					$('input[type="number"]',$(this)).prop('disabled', true);
					if( $('select',$(this)).length > 0 ){
						$('select',$(this)).prop('disabled', true);
					}
				}
			});
			$thisWpbingoWrap.find('.for-items-text span').html(total_items);
			$thisWpbingoWrap.find('.total-price-html').html(wpbingo.Currency.formatMoney(total_price));
		});
		$(document).on('change', '#buy_together_form .item-product select', function (e) {
			var $this = $(this);
			var $thisWrap = $this.closest('.item-products-wrap');
			var $thisWpbingoWrap = $thisWrap.closest('.buy-together-products');
			var total_items = 0;
			var total_price = 0;
			var this_product_id = $(this).closest('.item-product').attr('data-product_id');
			$thisWrap.find('.item-product').each(function () {
				if ( $(this).hasClass('active') ) {
					if( $('select',$(this)).length > 0 ){
						var this_price = $('select',$(this)).find(':selected').data('price');
						$('.item-product-inner[data-product_id="' + this_product_id + '"] .buy-together-price').html(wpbingo.Currency.formatMoney(this_price));
					}else{
						var this_price = $('input[type="checkbox"]',$(this)).attr('data-price');
					}
					if (!isNaN(this_price)) {
						total_price = Number(total_price) + Number(this_price);
					}
					Number(total_items++);
				}
			});
			$thisWpbingoWrap.find('.total-price-html').html(wpbingo.Currency.formatMoney(total_price));
		});		
		$('#buy_together_form .buy-together-add-all-to-cart').on('click',function(e){
			e.preventDefault();
			$(this).removeClass('added');
			$(this).addClass('active');
			let addToCartForm = document.querySelector('#buy_together_form');
			let formData = new FormData(addToCartForm);
			var params = {
				type: 'POST',
				url: '/cart/add.js',
				data: formData,
				processData: false,
				contentType: false,
				dataType: 'json',
				success: function(line_item) {
					$('.buy-together-add-all-to-cart').removeClass('active');
					$('.buy-together-add-all-to-cart').addClass('added');
					setTimeout(function() {
						$('.buy-together-add-all-to-cart').removeClass('added');
					}, 3000);
					ajaxCart.load();
				},
				error: function(XMLHttpRequest, textStatus) {
					if (typeof errorCallback === 'function') {
						errorCallback(XMLHttpRequest, textStatus);
					} else {
						ShopifyAPI.onError(XMLHttpRequest, textStatus);
					}
				}
			};
			jQuery.ajax(params);
		});
    },
	
	event_group_product: function() {
		$('#group_table_product .add-group-to-cart').on('click',function(e){
			e.preventDefault();
			$(this).removeClass('added');
			$(this).addClass('active');
			let addToCartForm = document.querySelector('#group_table_product');
			let formData = new FormData(addToCartForm);
			var params = {
				type: 'POST',
				url: '/cart/add.js',
				data: formData,
				processData: false,
				contentType: false,
				dataType: 'json',
				success: function(line_item) {
					$('#group_table_product .add-group-to-cart').removeClass('active');
					$('#group_table_product .add-group-to-cart').addClass('added');
					setTimeout(function() {
						$('#group_table_product .add-group-to-cart').removeClass('added');
					}, 3000);
					ajaxCart.load();
				},
				error: function(XMLHttpRequest, textStatus) {
					if (typeof errorCallback === 'function') {
						errorCallback(XMLHttpRequest, textStatus);
					} else {
						ShopifyAPI.onError(XMLHttpRequest, textStatus);
					}
				}
			};
			jQuery.ajax(params);
		});
    },
	
    translateCarouselDots: function(totalSlides, nextSlide, dotStyle) {
      if (totalSlides <= dotStyle.max) {
        return;
      }
      var calculatedTranslateDistance = 0;
      var maxTranslateDistance = (totalSlides - dotStyle.max) * dotStyle.width;
      if (nextSlide >= dotStyle.max - 1) {
        calculatedTranslateDistance =
          (nextSlide + 2 - dotStyle.max) * dotStyle.width;
        calculatedTranslateDistance =
          maxTranslateDistance < calculatedTranslateDistance
            ? maxTranslateDistance
            : calculatedTranslateDistance;
      }
      $(this.selectors.slickDots)
        .find('ul')
        .css('transform', 'translateX(-' + calculatedTranslateDistance + 'px)');
    },

    triggerMediaChangeEvent: function(mediaId) {
      var $otherMedia = $(this.selectors.productMediaWrapper, this.$container);
      $otherMedia.trigger('mediaHidden');

      var $newMedia = $(
        this.selectors.productMediaWrapper,
        this.$container
      ).filter('[data-media-id="' + mediaId + '"]');
      $newMedia.trigger('mediaVisible');
    },

    showVariantMedia: function(evt) {
      var variant = evt.variant;
      var variantMediaId =
        this.settings.sectionId + '-' + variant.featured_media.id;
      var $newMedia = $(
        this.selectors.productMediaWrapper +
          '[data-media-id="' +
          variantMediaId +
          '"]'
      );
      this.triggerMediaChangeEvent(variantMediaId);

      var mediaIndex;

      if (!wpbingo.variables.isMobile && this.isStackedLayout) {
        mediaIndex = $newMedia.closest('.slick-slide').index();
        if (mediaIndex !== 0 || wpbingo.variables.productPageLoad) {
          if (wpbingo.variables.productPageSticky) {
            $('html, body').animate(
              {
                scrollTop: $newMedia.offset().top
              },
              250
            );
          } else {
            var currentScroll = $(document).scrollTop();
            $newMedia
              .closest(
                $(this.selectors.productMediaGroupItem, this.$container)
              )
              .prependTo(
                $(this.selectors.productMediaGroup, this.$container)
              );
            $(document).scrollTop(currentScroll);
          }
        }
      } else {
        mediaIndex = $newMedia.closest('.slick-slide').data('slick-index');
        if (_.isUndefined(mediaIndex)) {
          return;
        }
        if (mediaIndex !== 0 || wpbingo.variables.productPageLoad) {
          $(this.selectors.productMediaGroup, this.$container).slick(
            'slickGoTo',
            mediaIndex
          );
        }
      }

      if (!wpbingo.variables.productPageLoad) {
        wpbingo.variables.productPageLoad = true;
      }
    },

    setFeaturedMedia: function() {
      var mediaId = $(this.selectors.productMediaGroup, this.$container)
        .find('.slick-slide.slick-current.slick-active ' + this.selectors.productMediaWrapper)
        .attr('data-media-id');
      this.triggerMediaChangeEvent(mediaId);
    },

    createMediaCarousel: function() {
		if ( $(this.selectors.productMediaGroupItem).length < 2 || !$(this.selectors.productMediaGroup, this.$container) || this.isCarouselActive ) {
			return; }
		this.isCarouselActive = true;
		var dotStyle = {
			max: 9,
			width: 20
		};
		var focusTrapped = false;
		$(this.selectors.productMediaGroupItem, this.$container).on(
			'focusin',
			function() {
				if (focusTrapped) {
					return;
				}
				this.trapCarouselFocus($(this.selectors.productMediaGroup));
				focusTrapped = true;
			}.bind(this)
		);

		$(this.selectors.productMediaGroup, this.$container)
        .slick(this.slickMediaSettings)
        .on(
			'beforeChange',
			function(event, slick, currentSlide, nextSlide) {
				this.updateCarouselDotsA11y(nextSlide);
				this.translateCarouselDots(slick.slideCount, nextSlide, dotStyle);
			}.bind(this)
        )
    },

    destroyMediaCarousel: function() {
		if ( !$(this.selectors.productMediaGroup, this.$container).length ||
			!this.isCarouselActive ) {
			return;
		}
		this.trapCarouselFocus(
			$(this.selectors.productMediaGroup, this.$container),
			true
		);
		$(this.selectors.productMediaGroup, this.$container).slick('unslick');
		this.isCarouselActive = false;
    },

    createThumbnailCarousel: function() {
		if (
			$(this.selectors.productMediaGroupItem).length < 2 ||
			!$(this.selectors.productMediaGroup, this.$container)
		){
			return;
		}

		$(this.selectors.productThumbnails, this.$container)
		.slick(this.slickThumbsSettings);
    },

    initStickyProductMeta: function() {
		var $meta = $(this.selectors.meta, this.$container);
		var $wrapper = $(this.selectors.productWrapper, this.$container);
		if (
			!$meta.length ||
			$(this.selectors.productMediaWrapper, this.$container).length < 2
		){
			return;
		}
		$meta.trigger('detach.ScrollToFixed');
		if (wpbingo.variables.isMobile) {
			return;
		}
		var productCopyHeight = $meta.outerHeight();
		var productMediaGroupHeight = $(
			this.selectors.productMediaGroup,
			this.$container
		).height();
		var calcLimit = $wrapper.offset().top + $wrapper.height();
		calcLimit -= productCopyHeight;
		if (
			productCopyHeight < productMediaGroupHeight &&
			productCopyHeight < $(window).height()
		){
			wpbingo.variables.productPageSticky = true;
			$meta.scrollToFixed({
			limit: calcLimit
			});
		} else {
			wpbingo.variables.productPageSticky = false;
		}
    },

    getBaseUnit: function(variant) {
		return variant.unit_price_measurement.reference_value === 1
        ? variant.unit_price_measurement.reference_unit
        : variant.unit_price_measurement.reference_value +
            variant.unit_price_measurement.reference_unit;
    },

    productPage: function(evt) {
		var moneyFormat = wpbingo.strings.moneyFormat;
		var variant = evt.variant;
		var translations = wpbingo.strings;
		var selectors = {
			addToCart: '.btn--add-to-cart',
			addToCartText: '.btn--add-to-cart .btn__text',
			quantityElements: '.js-quantity-selector',
			shopifyPaymentButton: '.shopify-payment-button',
			priceContainer: '[data-price-container]',
			productPrice: '.js-product-price',
			priceA11y: '.js-product-price-a11y',
			comparePrice: '.js-product-compare-price',
			comparePriceA11y: '.js-product-compare-price-a11y',
			comparePriceWrapper: '.product-single__price--wrapper',
			productAvailable: '.js-product-avaiable',
			productAvailableText: '.js-product-avaiable-text',
			unitPrice: '[data-unit-price]',
			unitPriceBaseUnit: '[data-unit-price-base-unit]',
			SKU: '.js-variant-sku'
		};

      if (variant) {
        $(selectors.priceContainer, this.$container).removeClass(this.classes.hide);
        $(selectors.productAvailable, this.$container).removeClass(this.classes.hide);
        $(selectors.productPrice, this.$container).attr('aria-hidden', 'false');
        $(selectors.priceA11y, this.$container).attr('aria-hidden', 'false');

        if (variant.available) {
          $(selectors.addToCart, this.$container)
            .removeClass('disabled')
            .prop('disabled', false);
          $(selectors.addToCartText, this.$container).html(translations.addToCart);
          $(selectors.productAvailableText)
            .removeClass(this.classes.productInventoryOutStock)
            .addClass(this.classes.productInventoryInStock)
            .html(wpbingo.strings.inStock);
          $(selectors.quantityElements, this.$container).removeClass(this.classes.hide);
          $(selectors.shopifyPaymentButton, this.$container).removeClass(this.classes.hide);
        } else {
          $(selectors.addToCart, this.$container)
            .addClass('disabled')
            .prop('disabled', true);
          $(selectors.addToCartText, this.$container).html(translations.soldOut);
          $(selectors.productAvailableText)
            .removeClass(this.classes.productInventoryInStock)
            .addClass(this.classes.productInventoryOutStock)
            .html(wpbingo.strings.outStock);
          $(selectors.quantityElements, this.$container).addClass(this.classes.hide);
          $(selectors.shopifyPaymentButton, this.$container).addClass(this.classes.hide);
        }

        $(selectors.productPrice, this.$container)
          .html(wpbingo.Currency.formatMoney(variant.price, moneyFormat))
          .removeClass(this.classes.hide);
        if (variant.compare_at_price > variant.price) {
          $(selectors.comparePrice, this.$container).html(
            wpbingo.Currency.formatMoney(variant.compare_at_price, moneyFormat)
          );
          $(selectors.comparePriceWrapper, this.$container).removeClass(this.classes.hide);
          $(selectors.productPrice, this.$container).addClass('on-sale');
          $(selectors.comparePriceWrapper, this.$container).attr('aria-hidden', 'false');
          $(selectors.comparePriceA11y, this.$container).attr('aria-hidden', 'false');
        } else {
          $(selectors.comparePriceWrapper, this.$container)
            .addClass(this.classes.hide)
            .attr('aria-hidden', 'true');
          $(selectors.productPrice, this.$container).removeClass('on-sale');
          $(selectors.comparePrice, this.$container).html('');
          $(selectors.comparePriceA11y, this.$container).attr('aria-hidden', 'true');
        }

        if (variant.unit_price) {
          var $unitPrice = $(selectors.unitPrice, this.$container);
          var $unitPriceBaseUnit = $(
            selectors.unitPriceBaseUnit,
            this.$container
          );
          $unitPrice.html(wpbingo.Currency.formatMoney(variant.unit_price, moneyFormat));
          $unitPriceBaseUnit.html(this.getBaseUnit(variant));
          $(selectors.priceContainer, this.$container).addClass(this.classes.priceContainerUnitAvailable);
        }
        $(selectors.SKU).html(variant.sku != '' ? variant.sku : 'N/A');
      } else {
        $(selectors.addToCart, this.$container)
          .addClass('disabled')
          .prop('disabled', true);
        $(selectors.addToCartText, this.$container).html(translations.unavailable);
        $(selectors.quantityElements, this.$container).addClass(this.classes.hide);
        $(selectors.shopifyPaymentButton, this.$container).addClass(this.classes.hide);
        $(selectors.priceContainer, this.$container).addClass(this.classes.hide);
        $(selectors.productAvailable, this.$container).addClass(this.classes.hide);
        $(selectors.productPrice, this.$container).attr('aria-hidden', 'true');
        $(selectors.priceA11y, this.$container).attr('aria-hidden', 'true');
        $(selectors.comparePriceWrapper, this.$container).attr('aria-hidden', 'true');
        $(selectors.comparePriceA11y, this.$container).attr('aria-hidden', 'true');
      }
    },

    onUnload: function() {
      this.$container.off(this.settings.namespace);
      wpbingo.ProductModel.removeSectionModels(this.settings.sectionId);
      wpbingo.ProductVideo.removeSectionVideos(this.settings.sectionId);
      if (this.isStackedLayout) {
        this.destroyMediaCarousel();
      }
    }
  });
  return Product;
})();

wpbingo.ProductRecommendations = (function() {
  function ProductRecommendations(container) {
    this.$container = $(container);

    var self = this;
    var baseUrl = this.$container.data('baseUrl');
    var productId = this.$container.data('productId');
    var recommendationsSectionUrl =
      baseUrl +
      '?section_id=product-recommendations&product_id=' +
      productId +
      '&limit=6';

    $.get(recommendationsSectionUrl).then(function(section) {
      var recommendationsMarkup = $(section).html();
      if (recommendationsMarkup.trim() !== '') {
        self.$container.html(recommendationsMarkup);
		var $element = $(".js-product-recommendations",self.$container);
		$element.slick({
			slidesToShow: $element.data('columns'),
			autoplay : $element.data('autoplay'),
			autoplaySpeed: $element.data('autoplayspeed'),
			arrows : $element.data('nav'),
			infinite : $element.data('infinite'),
			slidesToScroll : $element.data("slidestoscroll") ? $element.data("columns") : 1,
			responsive: [
				{
				  breakpoint: 1441,
				  settings: {
					slidesToShow: $element.data("column1440") ? $element.data("column1440") : $element.data("column"),
					slidesToScroll: $element.data("column1440") ? $element.data("column1440") : $element.data("column"),
				  }
				},
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: $element.data("column1"),
					slidesToScroll: $element.data("column1"),
				  }
				},				
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: $element.data("column2"),
					slidesToScroll: $element.data("column2"),
				  }
				},
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: $element.data("column3"),
					slidesToScroll: $element.data("column3"),
				  }
				},
				{
				  breakpoint: 480,			  
				  settings: {
					slidesToShow: $element.data("column4"),
					slidesToScroll: $element.data("column4"),
				  }
				}
			]	
		});
		initButtons();
		wpbingo.countdown();
		wpbingo.click_atribute_image();
      }
    });
  }
	
  return ProductRecommendations;
})();

// HEADER SECTION
wpbingo.HeaderSection = (function() {
  var selectors = {
    disclosureLocale: '[data-disclosure-locale]',
    disclosureCurrency: '[data-disclosure-currency]',
    searchOptions: '.js-header-search-options',
    searchMobileToggle: '.js-header-search-toggle',
    menuMobileToggle : '.js-menu-mobile',
    menuMobileChildToggle: '.js-mm-nav-item'
  };

  function Header(container) {
    this.$container = $(container);
    this.cache = {};
    this.cacheSelectors();
    var $body = $('body');

    if (this.cache.$localeDisclosure.length) {
      this.localeDisclosure = new wpbingo.Disclosure(
        this.cache.$localeDisclosure
      );
    }

    if (this.cache.$currencyDisclosure.length) {
      this.currencyDisclosure = new wpbingo.Disclosure(
        this.cache.$currencyDisclosure
      );
    }

    this.cache.$searchOptions.on('click', function(evt) {
      evt.preventDefault();
      var $this = $(this),
        $form = $this.closest('form');
      $form.find('.js-header-search-options').removeClass('active');
      $this.addClass('active');
      $form.find('.dropdown-toggle').text($this.text());
      $form.find('.js-search-type').val($this.data('type'));
    });

    this.cache.$searchMobileToggle.on('click', function(evt) {
      evt.preventDefault();
      $body.toggleClass('modal-search--open');
    });

    this.cache.$menuMobileToggle.on('click', function(evt) {
      evt.preventDefault();
      $body.toggleClass('menu-mobile--open');
    });

    this.cache.$menuMobileChildToggle.on('click', function(evt) {
      evt.preventDefault();
      var $this = $(this);
      if ($this.hasClass('mm-nav__prev')) {
        $this.closest('.active--hidden').removeClass('active--hidden');
      } else {
        $this.parents('.mm-nav__links').addClass('active--hidden');
      }
      $this.closest('.menu-mobile__nav-item').toggleClass('active');
    });
  }

  Header.prototype = _.assignIn({}, Header.prototype, {
    cacheSelectors: function() {
      this.cache = {
        $localeDisclosure: this.$container.find(selectors.disclosureLocale),
        $currencyDisclosure: this.$container.find(selectors.disclosureCurrency),
        $searchOptions: this.$container.find(selectors.searchOptions),
        $searchMobileToggle: this.$container.find(selectors.searchMobileToggle),
        $menuMobileToggle: this.$container.find(selectors.menuMobileToggle),
        $menuMobileChildToggle: this.$container.find(selectors.menuMobileChildToggle)
      };
    },

    onUnload: function() {
      if (this.cache.$localeDisclosure.length) {
        this.localeDisclosure.unload();
      }

      if (this.cache.$currencyDisclosure.length) {
        this.currencyDisclosure.unload();
      }
    }
  });

  return Header;
})();

wpbingo.LoginRegister = (function() {
  var selectors = {
    loginForm: '.js-login-form',
    recoverPasswordForm: '.js-recover-password',
    recoverPasswordToggle: '.js-forget-password',
    recoverPasswordSuccess: '.js-recover-password-success'
  };

  function LoginRegister(container) {
    this.$container = $(container);
    this.cache = {};
    this.classes = {
      hidden: 'd-none'
    };
    this.cacheSelectors();
    this.initializeEvents();
    this.resetPasswordSuccess();
  }

  LoginRegister.prototype = _.assignIn({}, LoginRegister.prototype, {
    cacheSelectors: function() {
      this.cache = {
        $loginForm: this.$container.find(selectors.loginForm),
        $recoverPasswordForm: this.$container.find(selectors.recoverPasswordForm),
        $recoverPasswordToggle: this.$container.find(selectors.recoverPasswordToggle),
        $recoverPasswordSuccess: this.$container.find(selectors.recoverPasswordSuccess)
      };
    },

    initializeEvents: function() {
      if (this.cache.$recoverPasswordToggle.length) {
        this.cache.$recoverPasswordToggle.on('click', function(e) {
          e.preventDefault();
          var isShow = this.cache.$loginForm.hasClass(this.classes.hidden) ? false : true;
          this.displayRecoverPasswordForm(isShow);
        }.bind(this));
      }

      if (window.location.hash === '#recover') {
        this.displayRecoverPasswordForm(true);
      }
    },

    displayRecoverPasswordForm: function(isShow) {
      if (isShow) {
        this.cache.$loginForm.addClass(this.classes.hidden);
        this.cache.$recoverPasswordForm.removeClass(this.classes.hidden);
      } else {
        this.cache.$loginForm.removeClass(this.classes.hidden);
        this.cache.$recoverPasswordForm.addClass(this.classes.hidden);
      }
    },

    resetPasswordSuccess: function() {
      if (typeof(window.resetPassword) != 'undefined' && window.resetPassword) {
        this.cache.$recoverPasswordSuccess.removeClass(this.classes.hidden);
      }
    }
  });

  return LoginRegister;
})();

wpbingo.Search = (function() {
  var selectors = {
    search: '[data-search]',
    searchPagination: '.search-pagination a'
  };

  function Search(container) {
    var ajaxCartSearch = function() {
      if (typeof ajaxCart != 'undefined') {
        ajaxCart.init({
          formSelector: '.search-results [data-product-form]'
        });
      }
    };

    var searchResultData = function(container, url) {
      $.get(url, function(data) {
        container.html(data);
        ajaxCartSearch();
      });
    }

    var getSearchResult = function(searchs) {
      searchs.each(function() {
        var $this = $(this);
        $.get($this.data('url'), function(data) {
          $this.html(data);
          ajaxCartSearch();
        });
      });
    };

    this.$container = $(container);
    this.cache = {};
    this.cacheSelectors();

    if (this.cache.$search.length) {
      getSearchResult(this.cache.$search);
    }

    this.$container.on('click', selectors.searchPagination, function(e) {
      e.preventDefault();
      var $searchContainer = $(this).parents(selectors.search);
      var searchURL = $(this).attr('href');
      searchResultData($searchContainer, searchURL);
    });
  }

  Search.prototype = _.assignIn({}, Search.prototype, {
    cacheSelectors: function() {
      this.cache = {
        $search: this.$container.find(selectors.search)
      };
    }
  });

  return Search;
})();

wpbingo.QuickView = (function() {
	var selectors = {
		body: 'body',
		quickView: '[data-quickview]',
		quickViewTemplate: '#quickview-template',
		quickViewBtn: '.js-btn-quickview',
		quickViewContainer: '[data-quickview-container]',
		quickViewClose: '[data-quickview-close]',
		quickViewImages: '[data-quickview-images]',
		quickViewReview: '[data-quickview-review]',
		quickViewReview: '[data-quickview-review]',
		quickviewVariant: '.js-quickview-option-selector',
		originalSelectorId: '[data-quickview-variant]',
		quickViewProductPrice: '.js-qv-product-price',
		quickViewProductPriceCompare: '.js-qv-product-price-compare',
		quickViewQty: '[data-quickview-quantity]',
		quickViewSKU: '[data-quickview-sku]',
		quickViewAvaiable: '.product-avaiable',
		quickViewAvaiableInStock: '.product-avaiable--instock',
		quickViewAvaiableOutStock: '.product-avaiable--outstock',
		quickViewProductDetailsURL: '.js-qv-product-details'
	};
	function QuickView(container) {
		this.$container = $(container);
		this.cache = {};
		this.productVariants = [];
		this.currentVariant = {};
		this.cacheSelectors();
		this.initializeEvents();
	}
	QuickView.prototype = _.assignIn({}, QuickView.prototype, {
		cacheSelectors: function() {
			this.cache = {
				$body: $('body'),
				$quickViewContainer: this.$container.find(selectors.quickViewContainer)
			};
		},

		initializeEvents: function() {
			var $this = this;
			$(selectors.body).on('click', selectors.quickViewBtn, function(e) {
				e.preventDefault();
				var productHandle = $(this).data('handle');
				$.getJSON('/products/' + productHandle + '.js', function(product) {
					if (product.available) {
					$this.firstAvailableVariant(product.variants, $this);
					} else {
						$this.currentVariant = product.variants[0];
					}
					$this.buildQuickView(product);
					$this.createImageCarousel();
					$this.renderReview();
					$this.show();
				});
			});
			$(selectors.body).on('click', selectors.quickViewClose, function(e) {
				e.preventDefault();
				$this.hide();
			});
			$(selectors.quickViewContainer).on('change', selectors.quickviewVariant, function(e) {
				$this.onVariantChange();
			});
		},

		firstAvailableVariant: function(variants, global) {
			global.productVariants = variants;
			for (var i = 0; i < variants.length; i++) {
				var variant = variants[i];
				if (variant.available) {
					global.currentVariant = variant;
					break;
				}
			}
		},
		buildQuickView: function(product) {
			var moneyFormat = wpbingo.strings.moneyFormat;
			var currentVariant = this.currentVariant;
			var source = $(selectors.quickViewTemplate).html();
			var template = Handlebars.compile(source);
			var images = '';
			var price = '';
			var external='';
			var qvObject = {
				id: product.id
			};
			if (typeof product.media !== 'undefined') {
				images += '<div class="quickview-images__list slick-carousel" data-quickview-images>'
				for (var i = 0; i < product.media.length; i++) {
					var media = product.media[i];
					if (media.media_type === 'image') {
						images += '<div class="slick-carousel__item"><div class="quickview-images__item" data-media-id=' +
							media.id + '><img class="img-fluid" alt="' +
							product.title + '" src="' +
							media.src + '" /></div></div>';
					}
				}
				images += '</div>'
			}			
			qvObject.variantID = currentVariant.id;
			qvObject.sku = currentVariant.sku !== null && currentVariant.sku !== '' ? currentVariant.sku : 'N/A';
			qvObject.images = images;
			qvObject.title = product.title;
			qvObject.url = product.url;
			price += '<div class="price-container">';
			var productCompareClass = product.compare_at_price !== null ? '' : 'd-none';
			price += '<div class="js-qv-product-price-compare product-single__price--compare-at ' + productCompareClass + '">' + wpbingo.Currency.formatMoney(product.compare_at_price, moneyFormat) + '</div>';
			price += '<div class="js-qv-product-price product-single__price">' + wpbingo.Currency.formatMoney(product.price, moneyFormat) + '</div>';
			price += '</div">';
			qvObject.price = price;
			qvObject.vendor = product.vendor;
			qvObject.type = product.type;
			qvObject.metafields = this.buildMetafields(product);
			qvObject.variants = this.buildVariant(product);
			$(selectors.quickViewContainer).html(template(qvObject));
			// AFTER BUILD HTML
			this.updateMedia(currentVariant);
			this.updateSKU(currentVariant);
			this.updateProductAvaiable(currentVariant);
			this.updateDetailsLink(currentVariant);
			$('#form-simple-addtocart .btn--add-to-cart').on('click',function(e){
				e.preventDefault();
				$(this).removeClass('added');
				$(this).addClass('active');
				let addToCartForm = document.querySelector('#form-simple-addtocart');
				let formData = new FormData(addToCartForm);
				var params = {
					type: 'POST',
					url: '/cart/add.js',
					data: formData,
					processData: false,
					contentType: false,
					dataType: 'json',
					success: function(line_item) {
						$('#form-simple-addtocart .btn--add-to-cart').removeClass('active');
						$('#form-simple-addtocart .btn--add-to-cart').addClass('added');
						setTimeout(function() {
							$('#form-simple-addtocart .btn--add-to-cart').removeClass('added');
						}, 3000);
						ajaxCart.load();
					},
					error: function(XMLHttpRequest, textStatus) {
						if (typeof errorCallback === 'function') {
							errorCallback(XMLHttpRequest, textStatus);
						} else {
							ShopifyAPI.onError(XMLHttpRequest, textStatus);
						}
					}
				};
				jQuery.ajax(params);
			});
		},
		convertToSlug: function(str) {
			return str.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
		},
		buildMetafields: function(product) {
			var metaUrl = '/admin/products/'+product.id+'/metafields.json';
			$.getJSON(metaUrl, function(data) {
				var html = '';
				for (var i = 0; i < data.metafields.length; i++) {
					if(data.metafields[i].key == 'external'){
						var value = data.metafields[i].value;
						$('.product-quickview__buttons').remove();
						html += '<a href="'+ value +'">'+ wpbingo.strings.external +'</a>';
						$(".product-quickview__buttons_external").html(html);
					}
					if(data.metafields[i].key == 'shortdesc'){
						var value = data.metafields[i].value;
						$(".product-quickview .product-quickview__description").html(value);
					}
					if(data.metafields[i].key == 'countdowns'){
						var countdowns = data.metafields[i].value;
						html += '<div class="countdown" data-countdown="'+ countdowns +'"></div>';
						$(".countdown-quickview").html(html);
						wpbingo.countdown();
					}
					if(data.metafields[i].key == 'group_product'){
						var value = data.metafields[i].value;
						const group_id = value.split(',');
						$('.product-quickview .product-quickview__variants').remove();
						$('#form-simple-addtocart').remove();
						html += '<form method="post" id="group_table_product" action="/cart/add"  enctype="multipart/form-data" novalidate="novalidate"><input type="hidden" name="form_type" value="product"><div class="group_table"></div><div class="product-group__add-to-cart product-single__buttons"><button type="submit" class="add-group-to-cart">'+ wpbingo.strings.add_to_cart +'</button></div></form>';
						$(".group-quickview").html(html);
						var group = '';
						for (const id of group_id) {
							var Url = '/admin/products/'+id;
							$.getJSON(Url, function(data) {
								group+= '<div data-product_id="'+ id +'" class="item-product-group">';
									group+= '<div class="product-content">';
										group+= '<div class="product-thumb">';
											group+= '<a href="/product/'+ data.product.handle +'"><img class="featured-banner__img" src="'+ data.product.image.src +'" alt="'+ data.product.image.alt +'" /></a>';
										group += '</div>';
										group += '<div class="product-info">';
											group += '<h3 class="product-title"><a href="/product/'+ data.product.handle +'">'+ data.product.title +'</a></h3>';
											if(data.product.variants.length > 1){
												group+= '<select name="items[][id]" class="js-product-btp--'+ id +' product-single__variants">'
												for (var i = 0; i < data.product.variants.length; i++) {
													group+= '<option data-price="'+ data.product.variants[i].price +'" value="'+ data.product.variants[i].id +'"> '+ data.product.variants[i].title +' - '+ wpbingo.Currency.formatMoney(data.product.variants[i].price) +' </option>';
												}
												group+= '</select>';
											}else{
												group += '<div class="product-price">'+ wpbingo.Currency.formatMoney(data.product.variants[0].price) +'</div><input name="items[][id]" type="hidden" value="'+ data.product.variants[0].id +'">';
											}
										group += '</div>';
									group += '</div>';
									group+= '<div class="quantity-content">';
										group += '<button type="button" class="js-qty-adjust wpbingo-qty__adjust wpbingo-qty__adjust--minus"><i class="feather-minus"></i></button>';
										group += '<input type="text" name="items[][quantity]" class="js-qty-number wpbingo-qty__number" value="1" min="0" aria-label="quantity" pattern="[0-9]*">';
										group += '<button type="button" class="js-qty-adjust wpbingo-qty__adjust wpbingo-qty__adjust--plus"><i class="feather-plus"></i></button>';
									group += '</div>';
								group += '</div>';
								$(".group-quickview .group_table").html(group);
							});
						}
						$('#group_table_product .add-group-to-cart').on('click',function(e){
							e.preventDefault();
							$(this).removeClass('added');
							$(this).addClass('active');
							let addToCartForm = document.querySelector('#group_table_product');
							let formData = new FormData(addToCartForm);
							var params = {
								type: 'POST',
								url: '/cart/add.js',
								data: formData,
								processData: false,
								contentType: false,
								dataType: 'json',
								success: function(line_item) {
									$('#group_table_product .add-group-to-cart').removeClass('active');
									$('#group_table_product .add-group-to-cart').addClass('added');
									setTimeout(function() {
										$('#group_table_product .add-group-to-cart').removeClass('added');
									}, 3000);
									ajaxCart.load();
								},
								error: function(XMLHttpRequest, textStatus) {
									if (typeof errorCallback === 'function') {
										errorCallback(XMLHttpRequest, textStatus);
									} else {
										ShopifyAPI.onError(XMLHttpRequest, textStatus);
									}
								}
							};
							jQuery.ajax(params);
						});
					}
				}
			});
		},		
		buildVariant: function(product) {
			var result = '';
			var currentVariant = this.currentVariant;
			if (product.options[0].name !== 'Title') {
				var options = product.options;
				for (var i = 0; i < options.length; i ++) {
					var option = options[i];
					var optionIndex = i + 1;
					var type = '';
					var info_size = '';
					var size = wpbingo.settings.size_option;
					if (wpbingo.settings.filter_name_1 === option.name) {
						type = wpbingo.settings.select_filter_1;
					}else if (wpbingo.settings.filter_name_2 === option.name) {
						type = wpbingo.settings.select_filter_2;
					}else if (wpbingo.settings.filter_name_3 === option.name) {
						type = wpbingo.settings.select_filter_3;
					}
					if (type === 'label') {
						info_size = 'height:'+ wpbingo.settings.size_option +'px;line-height:'+ ( wpbingo.settings.size_option - 2) +'px;';
					}else{
						info_size = 'width:'+ wpbingo.settings.size_option +'px;height:'+ wpbingo.settings.size_option +'px;';
					}
					result += '<div class="variants-wrapper product-form__item '+ type +'" data-quickview-variant-option="' + optionIndex + '">';
					result += '<label class="variants__label">' + option.name + '</label>';
					result += '<div class="variants__options">';
					if (wpbingo.settings.quickViewVariantType === 'select') {
						result += '<select class="js-quickview-option-selector product-form__input" data-id="quickViewOptionSelector-' + optionIndex + '" data-index="option' + optionIndex + '">';
						for (var j = 0; j < option.values.length; j ++) {
							var value = option.values[j];
							result += '<option value="' + _.escape(value) + '" ';
							result += currentVariant.options[i] === value ? 'selected="selected"' : '';
							result += '>' + value + '</option>';
						}
						result += '</select>';
					} else if (wpbingo.settings.quickViewVariantType === 'radio') {
						for (var j = 0; j < option.values.length; j ++) {
							var value = option.values[j];
							var isDisable = true;
							var colorAttribute = '';
							// CHECK Product option is available or disabled
							for (var k = 0; k < this.productVariants.length; k ++) {
								var variantCondition = this.productVariants[k];
								if (variantCondition.available) {
									if (i == 0 && variantCondition.option1 === value) {
										isDisable = false;
										break;
									} else if (i == 1 && variantCondition.option2 === value && variantCondition.option1 == currentVariant.option1) {
										isDisable = false;
										break;
									} else if (i == 2 && variantCondition.option3 === value && variantCondition.option2 == currentVariant.option2 && variantCondition.option1 == currentVariant.option1) {
										isDisable = false;
										break;
									}
								}
							}
							// RENDER Product option button
							result += '<div class="single-option-selector">';
							result += '<input type="radio" data-single-option-button';
							result += currentVariant.options[i] === value ? ' checked ' : ' ';
							if (isDisable) {
								result += 'disabled="disabled"';
							}
							result += 'value="' + _.escape(value) + '" data-index="option' + optionIndex + '" name="option' + option.position + '" ';
							result += 'class="js-quickview-option-selector';
							if (isDisable) {
								result += ' disabled';
							}
							result += '" id="quickview-product-option-' + i + '-' + value.toLowerCase() + '">';
							result += '<label class="' + value + '" style="'+ info_size +'" data-toggle="tooltip" title="' + value + '" for="quickview-product-option-' + i + '-' + value.toLowerCase() + '" ' + colorAttribute;
							if (isDisable) {
								result += ' class="disabled"';
							}
							result += '>' + value + '<span class="d-none"></span></label>';
							result += '</div>';
						}
					}
					result += '</div>';
					result += '</div>';
				}
			}
			return result;
		},
		createImageCarousel: function() {
			$(selectors.quickView).find(selectors.quickViewImages).slick({
				infinite: false,
				rows: 0
			});
		},
		renderReview: function() {
			if (window.SPR && wpbingo.settings.enableReview) {
				if ($(selectors.quickView).find(selectors.quickViewReview).length) {
					return window.SPR.registerCallbacks(), window.SPR.initRatingHandler(), window.SPR.initDomEls(), window.SPR.loadProducts(), window.SPR.loadBadges();
				};
			}
		},
		getCurrentOptions: function() {
			var currentOptions = _.map(
				$(selectors.quickviewVariant, selectors.quickViewContainer), function(element) {
					var $element = $(element);
					var type = $element.attr('type');
					var currentOption = {};
					if (type === 'radio' || type === 'checkbox') {
						if ($element[0].checked) {
							currentOption.value = $element.val();
							currentOption.index = $element.data('index');
							return currentOption;
						} else {
							return false;
						}
					} else {
						currentOption.value = $element.val();
						currentOption.index = $element.data('index');
						return currentOption;
					}
				}
			);
			currentOptions = _.compact(currentOptions);
			return currentOptions;
		},
		getVariantFromOptions: function() {
			var selectedValues = this.getCurrentOptions();
			var variants = this.productVariants;
			var found = _.find(variants, function(variant) {
				return selectedValues.every(function(values) {
					return _.isEqual(variant[values.index], values.value);
				});
			});
			return found;
		},
		updateVariantsButton: function () {
			var selectedValues = this.getCurrentOptions();
			var variants = this.productVariants;
			for (var i = 2; i <= 3; i++) {
				if ($('[data-quickview-variant-option="' + i + '"]', selectors.quickViewContainer).length) {
					$('[data-quickview-variant-option="' + i + '"] ' + selectors.quickviewVariant, selectors.quickViewContainer).each(function() {
						var $self = $(this);
						var optionValue = $self.val();
						var foundIndex;
						if (i === 2) {
							foundIndex = _.findIndex(variants, function(variant) {
								return variant.option1 === selectedValues[0].value &&
								variant.option2 === optionValue &&
								variant.available === true;
							});
						} else if (i === 3) {
							foundIndex = _.findIndex(variants, function(variant) {
								return variant.option1 === selectedValues[0].value &&
								variant.option2 === selectedValues[1].value &&
								variant.option3 === optionValue &&
								variant.available === true;
							});
						}
						if (foundIndex !== -1) {
							$self.removeAttr('disabled', 'disabled').removeClass('disabled');
							$self.next('label').removeClass('disabled');
						} else {
							$self.attr('disabled', 'disabled').addClass('disabled');
							$self.next('label').addClass('disabled');
						}
					});
				}
			}
		},
		updateVariantsButtonDisabed: function() {
			for (var i = 2; i <= 3; i++) {
				if ($('[data-quickview-variant-option="' + i + '"]', selectors.quickViewContainer).length) {
					var isUpdate = false;
					$('[data-quickview-variant-option="' + i + '"] ' + selectors.quickviewVariant, selectors.quickViewContainer).each(function() {
						var $element = $(this);
						var type = $element.attr('type');
						if (type === 'radio' || type === 'checkbox') {
							if (this.checked && $element.hasClass('disabled')) {
								$element.prop('checked', false);
								isUpdate = true;
								return false;
							}
						}
					});
					$('[data-quickview-variant-option="' + i + '"] ' + selectors.quickviewVariant, selectors.quickViewContainer).each(function() {
						var $element = $(this);
						var type = $element.attr('type');
						if (isUpdate && (type === 'radio' || type === 'checkbox') && !$element.hasClass('disabled')) {
							$element.prop('checked', true);
							isUpdate = false;
							$element.trigger('change');
							return false;
						}
					});
				}
			}
		},
		updateMasterSelect: function(variant) {
			if (variant) {
				$(selectors.originalSelectorId, selectors.quickViewContainer).val(variant.id);
			}
		},
		updateMedia: function(variant) {
			if (variant && variant.featured_media && variant.featured_media.id) {
				$(selectors.quickViewImages, selectors.quickViewContainer).find('.quickview-images__item').each(function() {
					var imageID = $(this).data('media-id');
					if (variant.featured_media.id == imageID) {
						var slickIndex = $(this).closest('.slick-carousel__item').data('slick-index');
						if (slickIndex !== undefined && slickIndex !== null) {
							$(selectors.quickViewImages, selectors.quickViewContainer).slick('slickGoTo', slickIndex);
						}
					}
				});
			}
		},

		updatePrice: function(variant) {
			var moneyFormat = wpbingo.strings.moneyFormat;
			if (!variant) {
				$(selectors.quickViewProductPrice, selectors.quickViewContainer).addClass('d-none');
				$(selectors.quickViewProductPriceCompare, selectors.quickViewContainer).addClass('d-none');
			} else {
				$(selectors.quickViewProductPrice, selectors.quickViewContainer).removeClass('d-none');
				$(selectors.quickViewProductPriceCompare, selectors.quickViewContainer).removeClass('d-none');
				$(selectors.quickViewProductPrice, selectors.quickViewContainer).html(
					wpbingo.Currency.formatMoney(variant.price, moneyFormat)
				);
				if (variant.compare_at_price > variant.price) {
					$(selectors.quickViewProductPriceCompare, selectors.quickViewContainer).html(
						wpbingo.Currency.formatMoney(variant.compare_at_price, moneyFormat)
					).removeClass('d-none');
					$(selectors.quickViewProductPrice, selectors.quickViewContainer).addClass('on-sale');
				} else {
					$(selectors.quickViewProductPriceCompare, selectors.quickViewContainer).addClass('d-none');
					$(selectors.quickViewProductPrice, selectors.quickViewContainer).removeClass('on-sale');
				}
			}
		},

		updateSKU: function(variant) {
			var sku = variant && variant.sku !== null && variant.sku !== '' ? variant.sku : 'N/A';
			$(selectors.quickViewSKU, selectors.quickViewContainer).html(sku);
		},

		updateProductAvaiable: function(variant) {
			var classActive = 'product-avaiable--active';
			var translations = wpbingo.strings;
			$(selectors.quickViewAvaiable, selectors.quickViewContainer).removeClass(classActive);
			if (variant) {
				if (variant.available) {
					$(selectors.quickViewQty, selectors.quickViewContainer).removeClass('d-none');
					$(selectors.quickViewAvaiableInStock, selectors.quickViewContainer).addClass(classActive);
				} else {
					$(selectors.quickViewQty, selectors.quickViewContainer).addClass('d-none');
					$(selectors.quickViewAvaiableOutStock, selectors.quickViewContainer).addClass(classActive);
				}
				// Button add to cart
				if (variant.available) {
					$(selectors.quickViewContainer).find('.btn--add-to-cart')
						.removeClass('disabled')
						.prop('disabled', false);
					$(selectors.quickViewContainer).find('.btn--add-to-cart .btn__text').html(translations.addToCart);
				} else {
					$(selectors.quickViewContainer).find('.btn--add-to-cart')
						.addClass('disabled')
						.prop('disabled', true);
					$(selectors.quickViewContainer).find('.btn--add-to-cart .btn__text').html(translations.soldOut);
				}
			} else {
				$(selectors.quickViewQty, selectors.quickViewContainer).addClass('d-none');
				$(selectors.quickViewContainer).find('.btn--add-to-cart')
					.addClass('disabled')
					.prop('disabled', true);
				$(selectors.quickViewContainer).find('.btn--add-to-cart .btn__text').html(translations.unavailable);
			}
		},

		updateDetailsLink: function(variant) {
			if (variant) {
				var productURL = $(selectors.quickViewProductDetailsURL, selectors.quickViewContainer).data('url') + '?variant=' + variant.id;
				$(selectors.quickViewProductDetailsURL, selectors.quickViewContainer).removeClass('d-none').attr('href', productURL);
			} else {
				$(selectors.quickViewProductDetailsURL, selectors.quickViewContainer).addClass('d-none');
			}
		},

		onVariantChange: function() {
			var variant = this.getVariantFromOptions();
			if ($('[data-single-option-button]', selectors.quickViewContainer).length) {
				this.updateVariantsButton();
				if (!variant || !variant.available) {
					this.updateVariantsButtonDisabed();
					return;
				}
			}
			this.updateMasterSelect(variant);
			this.updateMedia(variant);
			this.updatePrice(variant);
			this.updateSKU(variant);
			this.updateProductAvaiable(variant);
			this.updateDetailsLink(variant);
			this.currentVariant = variant;
		},
		show: function() {
			$(selectors.body).addClass('quickview-active');
			$(selectors.quickView).addClass('show');
		},
		hide: function() {
			$(selectors.quickViewContainer).html();
			$(selectors.body).removeClass('quickview-active');
			$(selectors.quickView).removeClass('show');
		}
	});
	return QuickView;
})();

if (typeof ShopifyAPI === 'undefined') {
	ShopifyAPI = {};
}

ShopifyAPI.attributeToString = function(attribute) {
	if (typeof attribute !== 'string') {
		attribute += '';
		if (attribute === 'undefined') {
			attribute = '';
		}
	}
	return jQuery.trim(attribute);
}

ShopifyAPI.onCartUpdate = function() {
	// When cart update
};

ShopifyAPI.updateCartNote = function(note, callback) {
	var params = {
		type: 'POST',
		url: '/cart/update.js',
		data: 'note=' + ShopifyAPI.attributeToString(note),
		dataType: 'json',
		success: function(cart) {
			if (typeof callback === 'function') {
				callback(cart);
			} else {
				ShopifyAPI.onCartUpdate(cart);
			}
		},
		error: function(XMLHttpRequest, textStatus) {
			ShopifyAPI.onError(XMLHttpRequest, textStatus);
		}
	};
	jQuery.ajax(params);
};

ShopifyAPI.onError = function(XMLHttpRequest) {
	var data = eval('(' + XMLHttpRequest.responseText + ')');
	if (data.message) {
		alert(data.message + '(' + data.status + '): ' + data.description);
	}
};

ShopifyAPI.addItemFromForm = function(form, callback, errorCallback) {
	var formData = new FormData(form);
	var params = {
		type: 'POST',
		url: '/cart/add.js',
		data: formData,
		processData: false,
		contentType: false,
		dataType: 'json',
		success: function(line_item) {
			if (typeof callback === 'function') {
				callback(line_item, form);
			} else {
				ShopifyAPI.onItemAdded(line_item, form);
			}
		},
		error: function(XMLHttpRequest, textStatus) {
			if (typeof errorCallback === 'function') {
				errorCallback(XMLHttpRequest, textStatus);
			} else {
				ShopifyAPI.onError(XMLHttpRequest, textStatus);
			}
		}
	};
	jQuery.ajax(params);
};

ShopifyAPI.getCart = function(callback, added) {
  jQuery.getJSON('/cart.js', function(cart) {
    if (typeof callback === 'function') {
      callback(cart, added);
    } else {
      ShopifyAPI.onCartUpdate(cart);
    }
  });
};

ShopifyAPI.changeItem = function(line, quantity, callback) {
  var params = {
    type: 'POST',
    url: '/cart/change.js',
    data: 'quantity=' + quantity + '&line=' + line,
    dataType: 'json',
    success: function(cart) {
      if (typeof callback === 'function') {
        callback(cart);
      } else {
        ShopifyAPI.onCartUpdate(cart);
      }
    },
    error: function(XMLHttpRequest, textStatus) {
      ShopifyAPI.onError(XMLHttpRequest, textStatus);
    }
  };
  jQuery.ajax(params);
};

var ajaxCart = (function(module, $) {
  'use strict';

  // Public functions
  var init, loadCart;

  // Private general variables
  var settings, isUpdating, $body;

  // Private plugin variables
  var $formContainer,
    $addToCart,
    $cartCountSelector,
    $cartCostSelector,
    $cartContainer;

  // Private functions
  var initializeEvents,
    updateCountPrice,
    formOverride,
    itemAddedCallback,
    itemErrorCallback,
    cartModalAdded,
	updateModalRecommendations,
    cartUpdateCallback,
    buildCart,
    cartCallback,
    adjustCart,
    adjustCartCallback,
    validateQty;

  /*============================================================================
    Initialise the plugin and define global options
  ==============================================================================*/
  init = function(options) {
    // Default settings
    settings = {
      formSelector: '[data-product-form]',
      cartContainer: '[data-cart-container]',
      addToCartSelector: 'button[type="submit"]',
      cartCountSelector: '[data-cart-count]',
      cartCostSelector: '[data-cart-cost]',
      cartRemoveSelector: '[data-cart-remove]',
      headerCartSelector: '.js-header-cart',
      cartModalSelector: '.js-cart-modal',
      cartModalCloseSelector: '.js-cart-modal-close',
      moneyFormat: '${{amount}}',
      disableAjaxCart: false,
      cartTemplate: '#ajaxcart-template',
      cartModalHeaderTemplate: '#ajaxcart-header-template'
    };

    if (wpbingo.strings.moneyFormat !== undefined) {
      settings.moneyFormat = wpbingo.strings.moneyFormat;
    }

    // Override defaults with arguments
    $.extend(settings, options);

    // Select DOM elements
    $formContainer = $(settings.formSelector);
    $cartContainer = $(settings.cartContainer);
    $addToCart = $formContainer.find(settings.addToCartSelector);
    $cartCountSelector = $(settings.cartCountSelector);
    $cartCostSelector = $(settings.cartCostSelector);

    $body = $('body');
    isUpdating = false;
    initializeEvents();
    if (!settings.disableAjaxCart && $addToCart.length) {
      formOverride();
    }
    adjustCart();
  };

  initializeEvents = function() {
    $body.on('click', settings.cartModalCloseSelector, function() {
      $(settings.cartModalSelector).fadeOut(400, function() {
        $(this).remove();
      });
    });
    $body.on('click', settings.headerCartSelector, function(e) {
      if (wpbingo.settings.cartType == 'modal' && $(window).width() > 767) {
        e.preventDefault();
        return;
      }
    });
    $body.on('click', settings.cartRemoveSelector, function(e) {
		if (isUpdating) {
			return;
		}
		var $el = $(this),
			line = $el.data('line');
		if (line) {
			isUpdating = true;
			setTimeout(function() {
				ShopifyAPI.changeItem(line, 0, adjustCartCallback);
			}, 250);
		}
    });
    $body.on('change', '.ajaxcart__note-input', function() {
		var newNote = $(this).val();
		$(".ajaxcart__info .save-ajaxcart__note").on( "click", function() {
			ShopifyAPI.updateCartNote(newNote, function() {});
		});
    });
	$body.on('change', '.discount_code_input', function() {
		var newDiscount = $(this).val();
		$(".ajaxcart__info .save-discount_code_input").on( "click", function() {
			wpbingo.setCookie('wpbingo_discount', newDiscount, 30);
		});
    });	
  };

  loadCart = function() {
    $body.addClass('ajaxcart--is-loading');
    ShopifyAPI.getCart(cartUpdateCallback);	
  };

  updateCountPrice = function(cart) {
    if ($cartCountSelector) {
      $cartCountSelector.html(cart.item_count);
    }
	if ($cartCostSelector) {
		$cartCostSelector.html(
			wpbingo.Currency.formatMoney(cart.total_price, settings.moneyFormat)
		);
	}
	$(".cart-modal-totalprice span").html(
		wpbingo.Currency.formatMoney(cart.total_price, settings.moneyFormat)
	);
	$(".cart-modal-totalcount span").html(cart.item_count);
  };

  formOverride = function() {
    $body.on('submit', settings.formSelector, function(evt) {
      evt.preventDefault();
     $('.btn--add-to-cart',$(this)).attr('disabled', 'disabled').prepend('<span class="spinner-border spinner-border-sm"></span>');
       $('.btn--add-to-cart',$(this)).removeClass('is-added').addClass('is-adding');
      $('.ajaxcart-toast').toast('hide');
      ShopifyAPI.addItemFromForm(
        evt.target,
        itemAddedCallback,
        itemErrorCallback
      );
    });
  };

  itemAddedCallback = function(lineItem) {
  $('.form-addtocart .btn--add-to-cart').removeAttr('disabled').find('.spinner-border').remove();
    $('.form-addtocart .btn--add-to-cart').removeClass('is-adding').addClass('is-added');
    if (wpbingo.settings.cartType == 'modal') {
      cartModalAdded(lineItem);
    }
    ShopifyAPI.getCart(cartUpdateCallback, true);
  };

  itemErrorCallback = function(XMLHttpRequest) {
    var data = eval('(' + XMLHttpRequest.responseText + ')');
    $addToCart.removeAttr('disabled').find('.spinner-border').remove();
    $addToCart.removeClass('is-adding is-added');

    if (data.message) {
      if (data.status === 422) {
        var $toast = $('.ajaxcart-toast');
        $toast.find('.toast-body').html(data.description);
        $toast.toast('show');
      }
    }
  };

  cartModalAdded = function(lineItem) {
    var data = {},
      image = '//cdn.shopify.com/s/assets/admin/no-image-medium-cc9732cb976dd349a0df1d39816fbcc7.gif',
      source = $(settings.cartModalHeaderTemplate).html(),
      template = Handlebars.compile(source);
    if (lineItem.image != null) {
      image = lineItem.image;
    }
	updateModalRecommendations(lineItem);
    data = {
		name: lineItem.title,
		image: image,
		final_line_price: wpbingo.Currency.formatMoney(
			lineItem.final_line_price,
			settings.moneyFormat
		),
		final_price: wpbingo.Currency.formatMoney(
			lineItem.final_price,
			settings.moneyFormat
		),
		quantity : lineItem.quantity
    }
    $body.append(template(data));
    $('.js-cart-modal').fadeIn(400);
  };

	updateModalRecommendations = function(lineItem) {
		var baseUrl = routes.product_recommendations_url;
		var productId = lineItem.product_id;
		var recommendationsSectionUrl = baseUrl + '?section_id=product-recommendations&product_id=' + productId +'&limit=6';
		$.get(recommendationsSectionUrl).then(function(section) {
			var recommendationsMarkup = $(section).html();
			$(".cart-modal-recommendations").html(recommendationsMarkup);
			var $element = $(".js-product-recommendations",$(".cart-modal-recommendations"));
			$element.slick({
				slidesToShow: $element.data('columns'),
				autoplay : $element.data('autoplay'),
				autoplaySpeed: $element.data('autoplayspeed'),
				arrows : $element.data('nav'),
				infinite : $element.data('infinite'),
				slidesToScroll : $element.data("slidestoscroll") ? $element.data("columns") : 1,
				responsive: [
					{
					  breakpoint: 1441,
					  settings: {
						slidesToShow: $element.data("column1440") ? $element.data("column1440") : $element.data("column"),
						slidesToScroll: $element.data("column1440") ? $element.data("column1440") : $element.data("column"),
					  }
					},
					{
					  breakpoint: 1200,
					  settings: {
						slidesToShow: $element.data("column1"),
						slidesToScroll: $element.data("column1"),
					  }
					},				
					{
					  breakpoint: 1024,
					  settings: {
						slidesToShow: $element.data("column2"),
						slidesToScroll: $element.data("column2"),
					  }
					},
					{
					  breakpoint: 768,
					  settings: {
						slidesToShow: $element.data("column3"),
						slidesToScroll: $element.data("column3"),
					  }
					},
					{
					  breakpoint: 480,			  
					  settings: {
						slidesToShow: $element.data("column4"),
						slidesToScroll: $element.data("column4"),
					  }
					}
				]
				
			});		
		});
	};

  cartUpdateCallback = function(cart, added) {
    updateCountPrice(cart);
    buildCart(cart);

    if (added) {
      $body.trigger('drawer.open');
    }
  };

  buildCart = function(cart) {
    $cartContainer.empty();

    // Show empty cart
    if (cart.item_count === 0) {
      $cartContainer.append(
        '<p class="cart-empty-message">' +
          wpbingo.strings.cartEmpty +
          '</p>\n' +
          '<p class="cookie-message">' +
          wpbingo.strings.cartCookies +
          '</p>'
      );
      cartCallback(cart);
      return;
    }

    var items = [],
      item = {},
      data = {},
      source = $(settings.cartTemplate).html();

    var template = Handlebars.compile(source);

    $.each(cart.items, function(index, cartItem) {
      var prodImg;
      var unitPrice = null;
      if (cartItem.image !== null) {
        prodImg = cartItem.image
          .replace(/(\.[^.]*)$/, '_small$1')
          .replace('http:', '');
      } else {
        prodImg =
          '//cdn.shopify.com/s/assets/admin/no-image-medium-cc9732cb976dd349a0df1d39816fbcc7.gif';
      }

      if (cartItem.properties !== null) {
        $.each(cartItem.properties, function(key, value) {
          if (key.charAt(0) === '_' || !value) {
            delete cartItem.properties[key];
          }
        });
      }

      if (cartItem.properties !== null) {
        $.each(cartItem.properties, function(key, value) {
          if (key.charAt(0) === '_' || !value) {
            delete cartItem.properties[key];
          }
        });
      }

      if (cartItem.line_level_discount_allocations.length !== 0) {
        for (var discount in cartItem.line_level_discount_allocations) {
          var amount =
            cartItem.line_level_discount_allocations[discount].amount;

          cartItem.line_level_discount_allocations[
            discount
          ].formattedAmount = wpbingo.Currency.formatMoney(
            amount,
            settings.moneyFormat
          );
        }
      }

      if (cart.cart_level_discount_applications.length !== 0) {
        for (var cartDiscount in cart.cart_level_discount_applications) {
          var cartAmount =
            cart.cart_level_discount_applications[cartDiscount]
              .total_allocated_amount;

          cart.cart_level_discount_applications[
            cartDiscount
          ].formattedAmount = wpbingo.Currency.formatMoney(
            cartAmount,
            settings.moneyFormat
          );
        }
      }

      if (cartItem.unit_price_measurement) {
        unitPrice = {
          addRefererenceValue:
            cartItem.unit_price_measurement.reference_value !== 1,
          price: wpbingo.Currency.formatMoney(
            cartItem.unit_price,
            settings.moneyFormat
          ),
          reference_value: cartItem.unit_price_measurement.reference_value,
          reference_unit: cartItem.unit_price_measurement.reference_unit
        };
      }

      // Create item's data object and add to 'items' array
      item = {
        key: cartItem.key,
        line: index + 1, // Shopify uses a 1+ index in the API
        url: cartItem.url,
        img: prodImg,
        name: cartItem.product_title,
        variation: cartItem.variant_title,
        properties: cartItem.properties,
        itemAdd: cartItem.quantity + 1,
        itemMinus: cartItem.quantity - 1,
        itemQty: cartItem.quantity,
        price: wpbingo.Currency.formatMoney(
          cartItem.original_line_price,
          settings.moneyFormat
        ),
        discountedPrice: wpbingo.Currency.formatMoney(
          cartItem.final_line_price,
          settings.moneyFormat
        ),
        discounts: cartItem.line_level_discount_allocations,
        discountsApplied:cartItem.line_level_discount_allocations.length === 0 ? false : true,
        vendor: cartItem.vendor,
        unitPrice: unitPrice
      };

      items.push(item);
    });

    // Gather all cart data and add to DOM
    data = {
		items: items,
		note: cart.note,
		totalPrice: wpbingo.Currency.formatMoney(
			cart.total_price,
			settings.moneyFormat
		),
		cartDiscounts: cart.cart_level_discount_applications,
		cartDiscountsApplied:cart.cart_level_discount_applications.length === 0 ? false : true
    };
    $cartContainer.append(template(data));
    cartCallback(cart);
	if( data.note ) {
		$(".cart-table .cart-note__input textarea").val(data.note);
	}
	var discount_code = wpbingo.getCookie('wpbingo_discount');
	if( discount_code ) {
		$(".cart-table .discount_code_input").val(discount_code);
		$(".js-drawer .discount_code_input").val(discount_code);
	}
  };

  cartCallback = function(cart) {
    $body.removeClass('ajaxcart--is-loading');

    if (window.Shopify && Shopify.StorefrontExpressButtons) {
      Shopify.StorefrontExpressButtons.initialize();
    }

    $body.trigger('drawer.footer');
  };

  adjustCart = function() {
    $body.on('click', '.ajaxcart__qty-adjust', function() {
      if (isUpdating) {
        return;
      }
      var $el = $(this),
        line = $el.data('line'),
        $qtySelector = $el.siblings('.ajaxcart__qty-num'),
        qty = parseInt($qtySelector.val().replace(/\D/g, ''));

      qty = validateQty(qty);

      if ($el.hasClass('ajaxcart__qty--plus')) {
        qty += 1;
      } else {
        qty -= 1;
        if (qty <= 0) qty = 0;
      }

      if (line) {
        updateQuantity(line, qty);
      } else {
        $qtySelector.val(qty);
      }
    });

    $body.on('change', '.ajaxcart__qty-num', function() {
      if (isUpdating) {
        return;
      }
      var $el = $(this),
        line = $el.data('line'),
        qty = parseInt($el.val().replace(/\D/g, ''));

      qty = validateQty(qty);

      if (line) {
        updateQuantity(line, qty);
      }
    });

    $body.on('submit', 'form.ajaxcart', function(evt) {
      if (isUpdating) {
        evt.preventDefault();
      }
    });

    $body.on('focus', '.ajaxcart__qty-adjust', function() {
      var $el = $(this);
      setTimeout(function() {
        $el.select();
      }, 50);
    });

    function updateQuantity(line, qty) {
      isUpdating = true;

      var $row = $('.ajaxcart__product[data-line="' + line + '"]').addClass(
        'is-loading'
      );

      if (qty === 0) {
        $row.parent().addClass('is-removed');
      }

      setTimeout(function() {
        ShopifyAPI.changeItem(line, qty, adjustCartCallback);
      }, 250);
    }
  };

  adjustCartCallback = function(cart) {
    updateCountPrice(cart);
    setTimeout(function() {
      ShopifyAPI.getCart(buildCart);
      isUpdating = false;
    }, 150);
  };

  validateQty = function(qty) {
    if (parseFloat(qty) === parseInt(qty) && !isNaN(qty)) {
      // We have a valid number!
    } else {
      qty = 1;
    }
    return qty;
  };

  module = {
    init: init,
    load: loadCart
  };

  return module;

})(ajaxCart || {}, jQuery);

wpbingo.drawerCart = (function(module) {
  var $body, $drawer, drawerCloseSelector, headerCartSelector, drawerIsOpen;

  var init, drawerOpen, drawerClose, drawerFooter;

  var classes = {
    open: 'drawer--open'
  };

  init = function() {
    $body = $('body');
    $drawer = $('.js-drawer');
    drawerCloseSelector = '.js-drawer-close';
    headerCartSelector = '.js-header-cart';
    drawerIsOpen = false;

    $body.on('drawer.open', function(evt) {
      drawerOpen(evt);
    });

    $body.on('drawer.close', function(evt) {
      drawerClose(evt);
    });

    $body.on('drawer.footer', function() {
      drawerFooter();
    });

    $body.on('click', headerCartSelector, function(evt) {
      evt.preventDefault();
      $body.trigger('drawer.open', evt);
    });

    $body.on('click', drawerCloseSelector, function(evt) {
      evt.preventDefault();
      $body.trigger('drawer.close', evt);
    });
  };

  drawerOpen = function(evt) {
    if (drawerIsOpen) {
      if (evt) {
        evt.preventDefault();
      }
      return;
    }

    if (evt) {
      evt.preventDefault();
    }

    $body.addClass(classes.open);
    drawerIsOpen = true;
  };

  drawerClose = function(evt) {
    if (!drawerIsOpen) {
      return;
    }

    if (evt.keyCode !== 27) {
      evt.preventDefault();
    }

    $body.removeClass(classes.open);
    drawerIsOpen = false;
  };

  drawerFooter = function() {
    if (!$drawer.hasClass('drawer--has-fixed-footer')) {
      return;
    }

    var $cartFooter = $('.ajaxcart__footer').removeAttr('style');
    var $cartInner = $('.ajaxcart__inner').removeAttr('style');
    var cartFooterHeight = $cartFooter.outerHeight();
    $cartInner.css('bottom', cartFooterHeight);
    $cartFooter.css('height', cartFooterHeight);
	$('.drawer__inner #shipping-calculator').css('height', cartFooterHeight);
	$(".ajaxcart__info .button_note").on( "click", function() {
		if($('.ajaxcart__info .ajaxcart__note').hasClass('active')){
			$('.ajaxcart__info .ajaxcart__note').removeClass('active');	
		}else{
			$('.ajaxcart__info .ajaxcart__note').addClass('active');		
		}
	});
	$(".ajaxcart__info .button_discount").on( "click", function() {
		if($('.ajaxcart__info .discount_code').hasClass('active')){
			$('.ajaxcart__info .discount_code').removeClass('active');	
		}else{
			$('.ajaxcart__info .discount_code').addClass('active');		
		}
	});
	$(".ajaxcart__info .button_shiping").on( "click", function() {
		if($('.drawer__inner #shipping-calculator').hasClass('active')){
			$('.drawer__inner #shipping-calculator').removeClass('active');	
		}else{
			$('.drawer__inner #shipping-calculator').addClass('active');		
		}
	});
	$(".ajaxcart__info .close-ajaxcart__info").on( "click", function() {
		if($('.ajaxcart__info .ajaxcart__info_content >div').hasClass('active')){
			$('.ajaxcart__info .ajaxcart__info_content >div').removeClass('active');
		}
	});
	$(".ajaxcart__info .save").on( "click", function() {
		if($('.ajaxcart__info .ajaxcart__info_content >div').hasClass('active')){
			$('.ajaxcart__info .ajaxcart__info_content >div').removeClass('active');
		}
	});
	$(".drawer__inner #shipping-calculator .close-ajaxcart__info").on( "click", function() {
		if($('.drawer__inner #shipping-calculator').hasClass('active')){	
			$('.drawer__inner #shipping-calculator').removeClass('active');
		}
	});
	Shopify.Cart.ShippingCalculator.show( {
	  submitButton: window.strings.shippingCalcSubmitButton,
	  submitButtonDisabled: window.strings.shippingCalcSubmitButtonDisabled,
	  customerIsLoggedIn: window.strings.shippingCalcCustomerIsLoggedIn,
	  moneyFormat: window.strings.shippingCalcMoneyFormat,
	  CalculateMessSuccess: window.strings.CalculateMessSuccess,
	  CalculateMessPrice: window.strings.CalculateMessPrice,
	  CalculateMessError: window.strings.CalculateMessError
	});
  };

  module = {
    init: init
  }

  return module;
})();

wpbingo.variables = {
  productPageLoad: false,
  productPageSticky: true,
  mediaTablet: 'screen and (max-width: 1024px)',
  mediaMobile: 'screen and (max-width: 767px)',
  isTablet: false,
  isMobile: false
};

wpbingo.initializeEvents = function() {
  var $body = $('body'),
    passwordToggle = '.js-password-toggle',
    tooltip = '[data-toggle="tooltip"]',
    scrollToTop = '.js-scroll-to-top',
    collectionSidebarToggle = '.js-sidebar-toggle';

  var classes = {
    passwordShow: 'password-toggle--show'
  };

  $(tooltip).tooltip();

  $body.on('click', passwordToggle, function(e) {
    e.preventDefault();
    var $this = $(this);
    var $passwordField = $this.siblings('.form-control');
    var isShow = $this.hasClass(classes.passwordShow) ? true : false;
    if (isShow) {
      $this.removeClass(classes.passwordShow);
      $passwordField.attr('type', 'password');
    } else {
      $this.addClass(classes.passwordShow);
      $passwordField.attr('type', 'text');
    }
  });

  $body.on('click', scrollToTop, function(e) {
    e.preventDefault();
    $('body, html').stop().animate({ scrollTop: 0 }, '500');
  });

  $body.on('click', collectionSidebarToggle,function(evt) {
    evt.preventDefault();
    $body.toggleClass('collection-sidebar--open');
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() >= 200) {
      $(scrollToTop).fadeIn();
    } else {
      $(scrollToTop).fadeOut();
    }
  });
};

wpbingo.setBreakpoints = function() {
	enquire.register(wpbingo.variables.mediaTablet, {
		match: function() {
			wpbingo.variables.isTablet = true;
		},
		unmatch: function() {
			wpbingo.variables.isTablet = false;
		}
	});
	enquire.register(wpbingo.variables.mediaMobile, {
		match: function() {
			wpbingo.variables.isMobile = true;
		},
		unmatch: function() {
			wpbingo.variables.isMobile = false;
		}
	});
};

wpbingo.updateSlickSwipe = function(element, allowSwipe){
  if (!element.hasClass('slick-initialized')) {
    return;
  }
  var slickOptions = {
    accessibility: allowSwipe,
    draggable: allowSwipe,
    swipe: allowSwipe,
    touchMove: allowSwipe
  };
  element.slick('slickSetOption', slickOptions, false);
};

wpbingo.showLoading = function () {
	$('body').append(wpbingo.loading != undefined && wpbingo.loading != '' ? wpbingo.loading : '');
};

wpbingo.hideLoading = function() {
	$('.wpbingo-loading').remove();
};

wpbingo.cartInit = function() {
  var $body = $('body');
  if (!wpbingo.cookiesEnabled()) {
    $body.addClass('cart--no-cookies');
  }
  if (wpbingo.settings.cartType == 'modal' || wpbingo.settings.cartType == 'drawer') {
    ajaxCart.init();
    ajaxCart.load();

    if (wpbingo.settings.cartType == 'drawer') {
      wpbingo.drawerCart.init();
    }
  }
};

wpbingo.cookiesEnabled = function() {
  var cookieEnabled = navigator.cookieEnabled;

  if (!cookieEnabled){
    document.cookie = 'webcookie';
    cookieEnabled = (document.cookie.indexOf('webcookie') !== -1);
  }
  return cookieEnabled;
};

wpbingo.setCookie = function(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = 'expires=' + d.toGMTString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
};

wpbingo.getCookie = function(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(';');
  for(var i = 0; i < cookieArray.length; i++) {
    var cookieItem = cookieArray[i];
    while (cookieItem.charAt(0) === ' ') {
      cookieItem = cookieItem.substring(1);
    }
    if (cookieItem.indexOf(name) === 0) {
      return cookieItem.substring(name.length, cookieItem.length);
    }
  }
  return '';
};

wpbingo.cookieConsent = function() {
  var cConsent = wpbingo.getCookie('cookie_consent'),
    cConsentSelector = $('.cookie-consent'),
    cConsentDismiss = '.cookie-consent-dismiss';
  if (cConsent == 'true') {
    cConsentSelector.remove();
  } else {
    setTimeout(function() {
      cConsentSelector.addClass('active');
    }, 1500);
    if (cConsent == '') wpbingo.setCookie('cookie_consent', false, 365);
  }

  $('body').on('click', cConsentDismiss, function(e) {
    e.preventDefault();
    cConsentSelector.remove();
    wpbingo.setCookie('cookie_consent', true, 365);
  });
};

wpbingo.slideshow = function() {
  var slideshow = '.js-wpbingo-slideshow',
    fade = $(slideshow).data('fade'),
    autoplay = $(slideshow).data('autoplay'),
    autoplayInterval = $(slideshow).data('autoplayinterval'),
    autoplayNavigation = $(slideshow).data('navigation'),
    autoplayPagination = $(slideshow).data('pagination');

  var config = {
    fade: true,
    rows: 0,
    arrows: autoplayNavigation,
    autoplay: autoplay,
    autoplaySpeed: autoplayInterval
  };

  (fade === undefined || fade == null) ? true : config.fade = fade;
  (autoplayInterval === undefined || autoplayInterval == null) ? true : config.autoplaySpeed = autoplayInterval;
  (autoplayPagination === undefined || autoplayPagination == null || autoplayPagination != true) ? config.dots = false : config.dots = true;

  $(slideshow).slick(config);
};

wpbingo.slickCarousel = function() {
	var bwpCarousel = '.js-carousel';
	$(bwpCarousel).each(function() {
		var $element = $(this),
			nav = $element.data('nav'),
			dots = $element.data('dots'),
			center = $element.data('center'),
			infinite = $element.data('infinite'),
			autoplay = $element.data('autoplay'),
			autoplaySpeed = $element.data('autoplayspeed'),
			slidesToScroll = $element.data("slidestoscroll") ? $element.data("columns") : 1,
			columns = $element.data("columns"),
			column1440 = $element.data("column1440"),
			column1 = $element.data("column1"),
			column2 = $element.data("column2"),
			column3 = $element.data("column3"),
			column4 = $element.data("column4"),
			rows = $element.data('rows');
		var config = {
			swipeToSlide: true,
			arrows: nav,
			slidesToShow: columns,
			slidesToScroll: columns,
			responsive: [
				{
					breakpoint: 1441,
					settings: {
						slidesToShow: column1440,
						slidesToScroll: column1440,
					}
				},
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: column1,
						slidesToScroll: column1,
					}
				},				
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: column2,
						slidesToScroll: column2,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: column3,
						slidesToScroll: column3,
						vertical: false,
						verticalSwiping : false,
					}
				},
				{
					breakpoint: 480,			  
					settings: {
						slidesToShow: column4,
						slidesToScroll: column4,
						vertical: false,
						verticalSwiping : false,
					}
				}
			]
		};
		(center === undefined || center == null || center != true) ? config.centerMode = false : config.centerMode = true;
		(dots === undefined || dots == null || dots != true) ? config.dots = false : config.dots = true;
		(infinite === undefined || infinite == null || infinite != true) ? config.infinite = false : config.infinite = true;
		if (autoplay) {
			config.autoplay = autoplay;
			config.autoplaySpeed = autoplaySpeed;
		}
		if (rows !== undefined && rows != null && rows != 1) {
			config.rows = rows;
			config.slidesPerRow = columnone;
			config.slidesToShow = 1,
			config.responsive = [
				{
					breakpoint: 1025,
					settings: {
						slidesPerRow: columntwo,
						slidesToShow: 1
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesPerRow: columnthree,
						slidesToShow: 1
					}
				}
			]
		} else {
			config.rows = 0;
		}
		$element.slick(config);
		if($(".slick-arrow",$element).length > 0){
			var $prev = $(".slick-prev",$element).clone();
			$(".slick-prev",$element).remove();
			if($element.parent().find(".slick-prev").length == 0){
				$prev.prependTo($element.parent());
			}
			$prev.on( "click", function() {
				$element.slick('slickPrev');
			});
			var $next =  $(".slick-next",$element).clone();
			$(".slick-next",$element).remove();
			if($element.parent().find(".slick-next").length == 0){
				$next.appendTo($element.parent());
			}
			$next.on( "click", function() {
				$element.slick('slickNext');
			});
		}
	});
	$('.product-tabs__nav-link').on('shown.bs.tab', function() {
		var productTabs = $(this).closest('.product-tabs');
		if (productTabs.find(bwpCarousel).length > 0) {
			productTabs.find(bwpCarousel).slick('setPosition');
		}
	});
};

wpbingo.countdown = function() {
  var countdown = '[data-countdown]';
  $(countdown).each(function() {
    var $this = $(this),
		finalDate = $(this).data('countdown'),
		date_final = new Date(finalDate),
		seconds_final = date_final.getTime(),
		date = Date.now();
		parent = $this.closest('.product-card');
	if(seconds_final > date){
		$this.countdown(finalDate, function(event) {
		  var strTime = '<div class="countdown__item"><span>%D</span><span>' + wpbingo.strings.countdownDays + '</span></div>' +
			'<div class="countdown__item"><span>%H</span><span>' + wpbingo.strings.countdownHours + '</span></div>' +
			'<div class="countdown__item"><span>%M</span><span>' + wpbingo.strings.countdownMinutes + '</span></div>' +
			'<div class="countdown__item"><span>%S</span><span>' + wpbingo.strings.countdownSeconds + '</span></div>';
		  $this.html(event.strftime(strTime));
		})
		.on('finish.countdown', function() {
		  $this.html(wpbingo.strings.countdownFinish);
		});
	}else{
		$('.countdown-product',parent).remove();
		$('.product-page .countdown-single').remove();
		$('.product-quickview .countdown-quickview').remove();
	}
  });
};
wpbingo.active_form_login = function() {
	$(".header-account .login-account").on( "click", function(e) {
		e.preventDefault();
		var $element = $(this).closest('.header-account');
		if($element.hasClass('active')){
			$element.removeClass('active');
		}else{
			$element.addClass('active');
		}
	});
	$(".header-account .remove-form-login-register").on( "click", function(e) {
		e.preventDefault();
		var $element = $(this).closest('.header-account');
		if($element.hasClass('active')){
			$element.removeClass('active');
		}
	});
};
wpbingo.set_video_section = function() {
	if( $( ".wpbingo-section--video").length > 0 ){
		$('.wpbingo-section--video iframe').css("width",( $(window).width()));
		$('.wpbingo-section--video iframe').css("height",( $(window).width()*9/16));
      	if( $(window).width() <= 991 ){
      		$('.wpbingo-section--video iframe').css("width",( $(window).height()*16/9));
			$('.wpbingo-section--video iframe').css("height",( $(window).height()));
          	console.log($('.wpbingo-section--video').height());
     	}
	}
};
wpbingo.click_atribute_image = function(){
	var moneyFormat = wpbingo.strings.moneyFormat;
	$('.wpb-variants-swatch').each(function() {
		var $element = $(this);	
		$('.swatch-content',$element).each(function(index) {
			var $parent = $(this);
			$(".swatch-items",$parent).on( "click", function() {
				if(!$(this).hasClass("active")){	
					$(".swatch-items",$parent).removeClass("active");
					$(this).addClass("active");
					var variants_value = wpbingo.get_variant_value($element);
					var productHandle = $element.data('handle');
					$.getJSON('/products/' + productHandle + '.js', function(product) {
						if(product.variants){
							wpbingo.updateVariantsButton($element,product);
							$.each( product.variants, function( index, variant ){
								if (variant.available) {
									if(variant.title == variants_value){
										var $current =  $parent.closest(".product-card");
										$(".variant-price",$current).html(wpbingo.Currency.formatMoney(variant.price, moneyFormat));
										$(".product-card__form input",$current).val(variant.id);
										if(variant.featured_media){
											$(".product-card__image img",$current).last().attr("src", variant.featured_media.preview_image.src);
										}
									}
								}
							});
						}
					});
				}
			});
		});
	});
}
wpbingo.get_variant_value = function($element){
	var arr = [];
	$('.swatch-content',$element).each(function(index) {
		var value = $(".swatch-items.active label",$(this)).data("variant");
		if(value === null){
			value = "null";
		}
		arr[index] = value;
	});				
	variants_value = arr.join(' / ');
	return variants_value;
}
wpbingo.updateVariantsButton = function($element,$product) {
  var selectedValues = wpbingo.getCurrentOptions($element);
  var variants = $product.variants;
  for (var i = 2; i <= 3; i++) {
	if ($(".swatch-content-"+i+"",$element).length) {
		var $container = $(".swatch-content-"+i+"",$element);
		$("label", $container).each(function() {
			var $self = $(this);
			var optionValue = $self.data("variant");
			var foundIndex;
			if (i === 2) {
			  foundIndex = _.findIndex(variants, function(variant) {
				return variant.option1 === selectedValues[0].value &&
				  variant.option2 === optionValue &&
				  variant.available === true;
			  });
			} else if (i === 3) {
			  foundIndex = _.findIndex(variants, function(variant) {
				return variant.option1 === selectedValues[0].value &&
				variant.option2 === selectedValues[1].value &&
				  variant.option3 === optionValue &&
				  variant.available === true;
			  });
			}
			if (foundIndex !== -1) {
			  $self.closest(".swatch-items").removeClass('disabled');
			} else {
			  $self.closest(".swatch-items").addClass('disabled');
			}			
		});	
	}
  }
}
wpbingo.getCurrentOptions =  function($element) {
	var currentOptions = [];
	$('.swatch-content',$element).each(function(index) {
		var currentOption = {};
		currentOption.index = $(".swatch-items.active label",$(this)).data("index");
		var $variant = $(".swatch-items.active label",$(this)).data("variant");
		if($variant === null){
			$variant = "null";
		}		
		currentOption.value = $variant;
		currentOptions[index] = currentOption;
	});
	return _.compact(currentOptions);
}
wpbingo.sticky_product = function(){
	var $parent = $(".product-page");
	if( $(".sticky-cart-single",$parent).length > 0 ){
		var bwp_width = $( window ).width();
		$( window ).scroll(function() {
			var scroll_top = $( window ).scrollTop();
			var offset_top = $(".product-single__buttons",$parent).offset().top;
			var distance   = (offset_top - scroll_top);
			if ( distance <= 0) {
				$('.sticky-cart-single',$parent).addClass('sticky');
			}else{
				$('.sticky-cart-single',$parent).removeClass('sticky');
			}
		});
	}
}
wpbingo.sticky_header = function(){
	if($(".bwp-header").data("sticky_header")){
		var current_scroll = 0;
		var bwp_width = $( window ).width();
		$( window ).scroll(function() {
			var next_scroll = $(this).scrollTop();
			if ( next_scroll > 200) {
				$('.bwp-header').addClass('sticky');
			} else if ( next_scroll <=200 ) {
				$('.bwp-header').removeClass('sticky');
			}
			current_scroll = next_scroll;  
		});
	}
}
wpbingo.click_button = function(){
	$(".search-toggle").on( "click", function() {
		if($(".content-search-toggle").hasClass('active')){
			$(".content-search-toggle").removeClass('active');	
		}else{
			$(".content-search-toggle").addClass('active');		
		}
	});
	$(".close-search-toggle").on( "click", function() {
		if($(".content-search-toggle").hasClass('active')){
			$(".content-search-toggle").removeClass('active');	
		}else{
			$(".content-search-toggle").addClass('active');		
		}
	});
	$(".title-size-guide").on( "click", function() {
		if($('.size-guide').hasClass('active')){
			$('.size-guide').removeClass('active');	
		}else{
			$('.size-guide').addClass('active');		
		}
	});
}
wpbingo.sticky_prevnext = function(){
	var $parent = $(".product-page");
	if( $(".prev_next_buttons_product",$parent).length > 0 ){
		var bwp_width = $( window ).width();
		$( window ).scroll(function() {
			var scroll_top = $( window ).scrollTop();
			var offset_top = $(".product-single__buttons",$parent).offset().top;
			var distance   = (offset_top - scroll_top);
			if ( distance <= 0) {
				$('.prev_next_buttons_product',$parent).addClass('active');
			}else{
				$('.prev_next_buttons_product',$parent).removeClass('active');
			}
		});
	}
}

wpbingo.newsletter = function() {
  var alertNewsletter;

  $('.js-wpbingo-newsletter').each(function() {
    var $form = $(this);
    $form.on('submit', function(event) {
      event.preventDefault();
      $('.js-alert-newsletter').remove();
      $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize(),
        cache: false,
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function(data) {
          if (data.result === 'success') {
            $form.prepend(alertNewsletter(wpbingo.strings.newsletterSuccess ,'success'));
            $('.js-input-newsletter').val('');
          } else {
            $form.prepend(alertNewsletter(data.msg.replace('0 - ', '') ,'danger'));
          }
        },
        error: function(err) {
          $form.prepend(alertNewsletter(err ,'danger'));
        }
      });
    });
  });

  alertNewsletter = function(message, type) {
    var alert = '<div class="js-alert-newsletter alert alert--mailchimp alert-' + type + '">' + message + '</div>';
    return alert;
  };

  var newsletterPopup = '.js-newsletter-popup',
    newsletterPopupClose = '.js-newsletter-popup-close',
    newsletterPopupSubmit = '.js-newsletter-popup-submit',
    cNewsletter = '',
    classNameNewsletterActive = 'newsletter-popup--active';

  if ($(newsletterPopup).find('.js-newsletter-popup-success').length > 0) {
    wpbingo.setCookie('wpbingo_newsletter_popup', 1, 30);
  }

  cNewsletter = wpbingo.getCookie('wpbingo_newsletter_popup');

  if (cNewsletter == 1) $(newsletterPopup).remove();

  if (cNewsletter != 1 && !($('.shopify-challenge__container').length > 0)) {
    setTimeout(function() {
      $(newsletterPopup).addClass(classNameNewsletterActive);
    }, 5000);
  }

  $(newsletterPopupClose).on('click', function() {
    if ($(newsletterPopup).find('.alert--mailchimp').length > 0) {
      wpbingo.setCookie('wpbingo_newsletter_popup', 1, 30);
    } else {
      wpbingo.setCookie('wpbingo_newsletter_popup', 1, 1);
    }
    $(newsletterPopup).removeClass(classNameNewsletterActive);
  });

  $(newsletterPopupSubmit).on('click', function() {
    wpbingo.setCookie('wpbingo_newsletter_popup', 1, 30);
  });
};

wpbingo.customNumberInput = function() {
  var $body = $('body'),
    qtyAdjust = '.js-qty-adjust',
    qtyNumber = '.js-qty-number';

  var validateQty;

  $body.on('click', qtyAdjust, function() {
    var $el = $(this),
      $qtySelector = $el.siblings(qtyNumber),
      qty = parseInt($qtySelector.val().replace(/\D/g, ''));

    qty = validateQty(qty);

    if ($el.hasClass('wpbingo-qty__adjust--plus')) {
      qty += 1;
    } else {
      qty -= 1;
      if (qty <= 0) qty = 0;
      if (qty <= 0 && $qtySelector.attr('min') == '1') qty = 1;
    }

    $qtySelector.val(qty);
  });

  $body.on('focus', qtyAdjust, function() {
    var $el = $(this);
    setTimeout(function() {
      $el.select();
    }, 50);
  });

  validateQty = function(qty) {
    if (parseFloat(qty) === parseInt(qty) && !isNaN(qty)) {
      // We have a valid number!
    } else {
      qty = 1;
    }
    return qty;
  };
};

wpbingo.preLoading = function() {
	if (wpbingo.settings.enablePreLoading) {
		var counter = 0,
			preLoading = '#pre-loading',
			preLoadingBar = '.pre-loading__bar',
			items = new Array();
		function getImages(element) {
			$(element).find('*:not(script)').each(function() {
				var url = '';
				if ($(this).css('background-image') != '' && $(this).css('background-image').indexOf('none') == -1 &&
				$(this).css('background-image').indexOf('-gradient') == -1) {
					url = $(this).css('background-image');
					if(url.indexOf('url') != -1) {
						var temp = url.match(/url\((.*?)\)/);
						url = temp[1].replace(/\"/g, '');
					}
				} else if ($(this).get(0).nodeName.toLowerCase() == 'img' && typeof($(this).attr('src')) != 'undefined') {
					url = $(this).attr('src');
				}
				if (url.length > 0) {
					items.push(url);
				}
				items.push(url);
			});
		}
		function runPreLoading() {
			counter++;
			var per = Math.round((counter / items.length) * 100);
			$(preLoadingBar).stop().animate({
				width: per + '%'
			}, 200, 'linear');
			if(counter >= items.length) {
				counter = items.length;
				$(preLoadingBar).stop().animate({
					width: '100%'
				}, 200, 'linear', function() {
						$(preLoadingBar).css("width", 0);
				}); 
			}
		}
		function preLoadingImage(url) {
			var imgPreLoading = new Image();
			$(imgPreLoading).on('load', function() {
				runPreLoading();
			}).on('error', function() {
				runPreLoading();
			}).attr('src', url);
		}
		function preLoadingStart() {
			for (var i = 0; i < items.length; i++) {
				preLoadingImage(items[i]);
			}
		}
		getImages('body');
		preLoadingStart();
	}
};

wpbingo.init = function() {
	wpbingo.preLoading();
	wpbingo.initializeEvents();
	wpbingo.setBreakpoints();
	wpbingo.cartInit();
	wpbingo.collectionPages();
	wpbingo.slideshow();
	wpbingo.slickCarousel();
	wpbingo.countdown();
	wpbingo.sticky_product();
	wpbingo.sticky_header();
	wpbingo.click_button();
	wpbingo.click_atribute_image();
	wpbingo.active_form_login();
  	wpbingo.set_video_section();
	wpbingo.sticky_prevnext();
	wpbingo.cookieConsent();
	wpbingo.newsletter();
	wpbingo.customNumberInput();
	if (wpbingo.settings.enableQuickView) {
		new wpbingo.QuickView('.js-quickview');
	}
	if ($('body').hasClass('template-product') ) {
		var $element = $(".product-single");
		var _data = $element.data();
		if(_data.layout_thumb !="slider"){
			$('.product-media__wrapper--video iframe').css("width",$(".product-single__main-media .mfp-image").width());
			$('.product-media__wrapper--video iframe').css("height",$(".product-single__main-media .mfp-image").height());
			$('.js-product-media-item model-viewer').css("width",$(".js-product-media").width());
			$('.js-product-media-item model-viewer').css("height",$(".mfp-image").height());
		}
	}
};

//wishlist
const LOCAL_STORAGE_WISHLIST_KEY = 'shopify-wishlist';
const LOCAL_STORAGE_DELIMITER = ',';
const BUTTON_ACTIVE_CLASS = 'active';
const GRID_LOADED_CLASS = 'loaded';

const selectors = {
  button: '[button-wishlist]',
  grid: '[grid-wishlist]',
  productCard: '.product-wishlist',
};

document.addEventListener('DOMContentLoaded', () => {
	initButtons();
	initGrid();
});

document.addEventListener('shopify-wishlist:updated', (event) => {
  initGrid();
});

const fetchProductCardHTML = (handle) => {
  const productTileTemplateUrl = `/products/${handle}?view=wishlist`;
  return fetch(productTileTemplateUrl)
  .then((res) => res.text())
  .then((res) => {
    const text = res;
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(text, 'text/html');
    const productCard = htmlDocument.documentElement.querySelector(selectors.productCard);
    return productCard.outerHTML;
  })
  .catch((err) => console.error(`[Shopify Wishlist] Failed to load content for handle: ${handle}`, err));
};

const setupGrid = async (grid) => {
	const wishlist = getWishlist();
	const requests = wishlist.map(fetchProductCardHTML);
	const responses = await Promise.all(requests);
	const wishlistProductCards = responses.join('');
	grid.innerHTML = wishlistProductCards;
	grid.classList.add(GRID_LOADED_CLASS);
	initButtons();
	wpbingo.countdown();
	wpbingo.click_atribute_image();
	const event = new CustomEvent('shopify-wishlist:init-product-grid', {
		detail: { wishlist: wishlist }
	});
	document.dispatchEvent(event);
};

const setupButtons = (buttons) => {
	buttons.forEach((button) => {
		const productHandle = button.dataset.productHandle || false;
		if (!productHandle) return console.error('[Shopify Wishlist] Missing `data-product-handle` attribute. Failed to update the wishlist.');
		if (wishlistContains(productHandle)) button.classList.add(BUTTON_ACTIVE_CLASS);
		
		button.addEventListener('click', () => {
			const timeWishlist = setTimeout(loadWishlist, 1000);
			updateWishlist(productHandle);
			button.classList.add('load-wishlist');
			function loadWishlist() {
				button.classList.remove('load-wishlist');
				button.classList.toggle(BUTTON_ACTIVE_CLASS);
			}
		});
	});
};

const initGrid = () => {
  const grid = document.querySelector(selectors.grid) || false;
  if (grid) setupGrid(grid);
  wpbingo.countdown();
};

const initButtons = () => {
  const buttons = document.querySelectorAll(selectors.button) || [];
  if (buttons.length) setupButtons(buttons);
  else return;
  const event = new CustomEvent('shopify-wishlist:init-buttons', {
    detail: { wishlist: getWishlist() }
  });
  document.dispatchEvent(event);
};

const getWishlist = () => {
  const wishlist = localStorage.getItem(LOCAL_STORAGE_WISHLIST_KEY) || false;
  if (wishlist) return wishlist.split(LOCAL_STORAGE_DELIMITER);
  return [];
};

const setWishlist = (array) => {
  const wishlist = array.join(LOCAL_STORAGE_DELIMITER);
  if (array.length) localStorage.setItem(LOCAL_STORAGE_WISHLIST_KEY, wishlist);
  else localStorage.removeItem(LOCAL_STORAGE_WISHLIST_KEY);

  const event = new CustomEvent('shopify-wishlist:updated', {
    detail: { wishlist: array }
  });
  document.dispatchEvent(event);

  return wishlist;
};

const updateWishlist = (handle) => {
  const wishlist = getWishlist();
  const indexInWishlist = wishlist.indexOf(handle);
  if (indexInWishlist === -1) wishlist.push(handle);
  else wishlist.splice(indexInWishlist, 1);
  return setWishlist(wishlist);
};

const wishlistContains = (handle) => {
  const wishlist = getWishlist();
  return wishlist.includes(handle);
};

const resetWishlist = () => {
  return setWishlist([]);
};

$(document).ready(function() {
	wpbingo.init();
	var sections = new wpbingo.Sections();
	sections.register('product-template', wpbingo.Product);
	sections.register('header-section', wpbingo.HeaderSection);
	sections.register('product-recommendations', wpbingo.ProductRecommendations);
	sections.register('login-register', wpbingo.LoginRegister);
	sections.register('search', wpbingo.Search);
	if ($('body').hasClass('template-product') ) {
		var $element = $(".product-single");
		var _data = $element.data();
		if(_data.layout_thumb =="slider"){
			$('.product-media__wrapper--video iframe').css("width",$(".product-single__main-media #slick-slide11 .mfp-image").width());
			$('.product-media__wrapper--video iframe').css("height",$(".product-single__main-media #slick-slide11 .mfp-image").height());
			$('.js-product-media-item model-viewer').css("width",$(".product-single__main-media #slick-slide11 .mfp-image").width());
			$('.js-product-media-item model-viewer').css("height",$(".product-single__main-media #slick-slide11 .mfp-image").height());
		}
	}
});