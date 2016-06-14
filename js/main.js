/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	__webpack_require__(1);
	__webpack_require__(2);
	// require('./ya_map.js');


/***/ },
/* 1 */
/***/ function(module, exports) {

	var btn = document.querySelector('.menu-toggle');
	var navList = document.querySelector('.nav-list');
	var pageHeader = document.querySelector('.page-header');
	var pageHeaderMain = document.querySelector('.page-header__main-block');
	var titlePhone = document.querySelector('.page-header__title--with-phone');
	var pageTitle = document.querySelector('.page-header__title');

	hideMenu();

	function hideMenu() {
	  pageHeader.classList.remove('page-header--no-js');
	  navList.classList.remove('nav-list--no-js');
	  pageHeader.classList.add('page-header--js');
	  navList.classList.add('nav-list--js');
	  if (titlePhone) {
	    titlePhone.classList.remove('page-header__title--with-phone--no-js');
	  } else {
	    pageTitle.classList.remove('page-header__title--no-js');
	  }

	  btn.classList.toggle('menu-toggle--menu-opened');
	  navList.classList.toggle('nav-list--menu-opened');
	  pageHeaderMain.classList.toggle('page-header__main-block--menu-opened');

	  btn.addEventListener('click', function() {
	    btn.classList.toggle('menu-toggle--menu-opened');
	    navList.classList.toggle('nav-list--menu-opened');
	    pageHeaderMain.classList.toggle('page-header__main-block--menu-opened');
	    if (titlePhone) {
	      titlePhone.classList.toggle('page-header__title--with-phone--menu-opened')
	    } else {
	      pageTitle.classList.toggle('page-header__title--menu-opened');
	    }
	  });
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	var priceTable = document.querySelector('.price-section__options-table');
	var tableSlider = document.querySelectorAll('.price-section .slider-toggle__toggle-item');
	var mentions = document.querySelector('.price-section__options-table');
	var mentions = document.querySelector('.mention-section__mentions-wrapper');
	var mentionsSlider = document.querySelectorAll('.mention-section .slider-toggle__toggle-item');
	var TABLET_WIDTH = "(min-width: 700px)";
	var INIT_SLIDER_POSITION = 1;
	var INIT_SLIDER_CONTENT_SHIFT = 33.3333;

	for (var i = 0; i < tableSlider.length; i++) {
	  toggleSlider(tableSlider[i], i, tableSlider, priceTable);
	}

	for (var i = 0; i < mentionsSlider.length; i++) {
	  toggleSlider(mentionsSlider[i], i, mentionsSlider, mentions);
	}


	mqSliderWatch(priceTable, tableSlider);
	mqSliderWatch(mentions, mentionsSlider);

	function toggleSlider(sliderElem, i, sliderArr, content) {
	  sliderElem.addEventListener('click', function() {
	    if (!this.classList.contains('slider-toggle__toggle-item--active')) {
	      dumpSliderElem(sliderArr);
	    }
	    this.classList.add('slider-toggle__toggle-item--active');
	    content.style.transform = 'translateX(-' + i * (100 / sliderArr.length) + '%)';
	  });
	};

	function mqSliderWatch(content, slider) {
	  var mqTablet = window.matchMedia(TABLET_WIDTH);
	  mqTablet.addListener(function() {
	    if (mqTablet.matches) {
	      content.style.transform = 'translateX(-' + 0 + '%)';
	    } else {
	      content.style.transform = 'translateX(-' + INIT_SLIDER_CONTENT_SHIFT + '%)';
	      dumpSliderElem(slider);
	      slider[INIT_SLIDER_POSITION].classList.add('slider-toggle__toggle-item--active');
	    }
	  });
	};

	function dumpSliderElem(sliderArr) {
	  for (var i = 0; i < sliderArr.length; i++) {
	    sliderArr[i].classList.remove('slider-toggle__toggle-item--active');
	  }
	};


/***/ }
/******/ ]);