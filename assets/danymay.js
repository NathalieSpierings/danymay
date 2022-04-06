$(function(){

    'use strict'
  
    menu();
    
    // Sticky header & scroll to top
    $('.content__container').scroll(function() { 
      if ($(this).scrollTop() > 50) {
        $('.header').addClass("onscroll animated fadeInDown");
        $('.scrolltop:hidden').stop(true, true).fadeIn();
      } else {
        $('.header').removeClass("onscroll animated fadeInDown");
        $('.scrolltop').stop(true, true).fadeOut();
      }
    });
    $('.scroll').click(function () {	
      $('.content__container').animate({ scrollTop: $('header').offset().top}, "1000");
      return false;
    }); 
    
  
  });  
  
  
  function menu(){
      current = -1;
  
      var $burger = $('.menu-burger'),
          $headerMenu = $('.header__menu'),
          $pageContainer = $('.page__container'),
          $firstLevelItems = $('.menu > ul > li'),
          $firstLevelLinks = $('.menu > ul > li').children('a'),			
          $LinkWithSubmenu = $('a.has-submenu'),
          submenus = $('.submenu');
  
      // Add level up link for mobile navigation
      $.each(submenus, function(i, val){	 
          var link = $(this).closest('li').find('a').first();
          var text = link.text();		
          $(this).prepend('<li><a href="javascript:" class="level-up">'+ text + '</a></li>');
      });
  
      var $levelUpLinks = $('.level-up');
      $levelUpLinks.on('click', function (e) { 
          var $item = $(this).closest('li.menu-item');
          $item.find('.submenu:first').removeClass('shown');		
          $item.removeClass('shown');
      });
  
      $firstLevelLinks.on("click", function (e) {   
          var $self = $(this);
                  
          if (current !== -1) {
              $('header').removeClass("open");
              $firstLevelItems.eq(current).removeClass("shown");
              $firstLevelItems.eq(current).find('.submenu:first').removeClass("shown");			
          }
  
          var $item = $(e.currentTarget).parent('li'),
              idx = $item.index();
  
          if (current === idx) {
              $item.removeClass('shown');
              $item.find('.submenu:first').removeClass('shown');
              current = -1;
          } 
          else {			
              $item.addClass('shown');
              $item.find('.submenu:first').addClass("shown");
              current = idx;
  
              // Show content			
              $item.find('.megamenu__content').css({ display: 'flex' }).animate({ opacity: 1 }, 300);
              
              if($self.hasClass('has-submenu')){
                  $('header').addClass("open");
              }
          }
      });
  
      $LinkWithSubmenu.on('click', function (e) { 
          $(this).closest('li.menu-item').find('.submenu:first').addClass('shown');
      });
  
  
      $burger.on('click', function(){
          $headerMenu.addClass('shown');
          $('html').addClass('menu-shown');
      });
  
      $('[data-dismiss="menu"]').on('click', function(){
          $headerMenu.removeClass('shown');
          $('html').removeClass('menu-shown');
      });
      
      $('.header__overlay').on('click', function(){
          $firstLevelItems.removeClass("shown");
          $firstLevelItems.find('.submenu:first').removeClass("shown");	
          $('header').removeClass('open');
      });
  }