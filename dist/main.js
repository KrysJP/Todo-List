/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/styles.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".noselect {\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Old versions of Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome, Edge, Opera and Firefox */\n}\n\n* {\n    margin: 0;\n    font-family: \"Nunito\", sans-serif;\n    box-sizing: border-box;\n    color: var(--primary);\n}\nhtml {\n    --primary: rgb(59, 59, 59);\n    --secondary: rgb(238, 238, 238);\n}\nbody {\n    background: var(--secondary);\n    display: flex;\n    min-height: 100vh;\n    overflow-x: hidden;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n}\n\ninput,\ntextarea {\n    outline: none;\n    padding: 0;\n}\nh4 {\n    font-weight: normal;\n}\n\n.heading-container {\n    width: 100vw;\n    height: 150px;\n    background: var(--primary);\n    display: flex;\n    align-items: center;\n    padding-left: 50px;\n    box-sizing: border-box;\n    flex-shrink: 0;\n}\n.heading-title {\n    color: white;\n    font-size: 4.5rem;\n}\n\n.middle-container {\n    display: flex;\n    width: 100vw;\n    flex-grow: 1;\n}\n\n.projects-container {\n    border-right: 5px solid var(--primary);\n    width: 670px;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    padding: 40px 80px;\n    gap: 5px;\n}\n.projects-heading {\n    font-size: 2.2rem;\n    margin-bottom: 10px;\n    display: flex;\n    justify-content: space-between;\n}\n.projects-add {\n    width: 50px;\n    height: 50px;\n    font-size: 2.5rem;\n}\n.projects-add:hover {\n    cursor: pointer;\n}\n\n.project {\n    box-sizing: border-box;\n    border-radius: 10px;\n    padding: 0 25px;\n    font-size: 1.8rem;\n    font-weight: normal;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 370px;\n}\n.project:hover {\n    background-color: rgb(201, 201, 201);\n}\n\n.project-title {\n    font-size: 3rem;\n    overflow-x: hidden;\n    width: 900px;\n}\n\n.projects-add,\n.remove,\n.edit,\n.complete,\n.tasks-add {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: black;\n    border: none;\n    background: none;\n}\n\n.projects-add,\n.tasks-add {\n    color: var(--primary) !important;\n}\n\n.remove {\n    height: 30px;\n    width: 30px;\n    font-size: 2.5rem;\n    transform: rotate(45deg);\n    opacity: 0;\n}\n.remove:hover,\n.edit:hover,\n.complete:hover {\n    cursor: pointer;\n    opacity: 0.7 !important;\n}\n.tasks-add:hover {\n    cursor: pointer;\n}\n\n.tasks-and-title-container {\n    width: 100%;\n    box-sizing: border-box;\n    padding-left: 40px;\n    padding-top: 40px;\n}\n\n.task {\n    width: 80%;\n    display: flex;\n    height: 50px;\n    padding: 40px 20px;\n    align-items: center;\n    justify-content: space-between;\n    margin-left: 30px;\n    border-bottom: 2px solid rgb(200, 200, 200);\n}\n.task:hover {\n    background: rgb(220, 220, 220);\n    cursor: pointer;\n}\n.task-half {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n.task-title {\n    font-size: 1.5rem;\n    font-weight: normal;\n    width: 700px;\n    overflow-x: hidden;\n}\n\n.edit {\n    height: 30px;\n    width: 30px;\n    font-size: 2rem;\n    opacity: 0;\n}\n\n.complete {\n    border-radius: 50%;\n    font-size: 3rem;\n    color: black;\n    opacity: 50%;\n}\n.complete:hover {\n    color: green;\n    opacity: 1;\n}\n\n.project-title-div {\n    width: 80%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 20px;\n}\n\n.tasks-add {\n    font-size: 3rem;\n}\n\n.project-title-input {\n    font-size: 3rem;\n    background: none;\n    border: none;\n    font-weight: bold;\n    width: 80%;\n}\n\n.tasks-container {\n    display: flex;\n    flex-direction: column;\n    padding-top: 20px;\n}\n\n/* modal stuff */\n.modal-bg {\n    display: none;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    background: rgb(0, 0, 0, 0.5);\n    top: 0;\n}\n\n.edit-task-modal {\n    display: flex;\n    width: 600px;\n    height: 550px;\n    background: var(--secondary);\n    border-radius: 40px;\n    box-sizing: border-box;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    padding: 40px 0;\n    position: relative;\n    border: 5px solid var(--primary);\n}\n\n.project-tab-name {\n    overflow-x: hidden;\n    width: 80%;\n}\n\n.modal-save {\n    width: 60px;\n    height: 60px;\n    border-radius: 10px;\n    margin-top: 20px;\n    background: rgb(0, 255, 0, 0.2);\n    font-size: 2rem;\n    color: rgb(14, 90, 14);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: bold;\n}\n.modal-save:hover {\n    cursor: pointer;\n    background: rgb(0, 255, 0, 0.4);\n}\n\n.modal-title {\n    font-size: 3rem;\n    width: 500px;\n    overflow-x: hidden;\n    display: flex;\n    justify-content: center;\n    height: 66px;\n    overflow: overlay;\n}\n.modal-date {\n    font-size: 1.5rem;\n    background: var(--secondary);\n    border: none;\n    margin-top: 20px;\n}\n.modal-date:hover {\n    cursor: pointer;\n}\n.modal-description {\n    width: 500px;\n    height: 200px;\n    border-radius: 20px;\n    padding: 20px;\n    font-size: 1.2rem;\n    border: none;\n    resize: none;\n}\n\n.task-date {\n    font-size: 1.1rem;\n    margin-right: 20px;\n}\n\n.modal-title-input {\n    background: none;\n    border: none;\n    font-weight: bold;\n    font-size: 3rem;\n    width: 500px;\n    height: 66px;\n    text-align: center;\n}\n", "",{"version":3,"sources":["webpack://./styles/styles.css"],"names":[],"mappings":"AAEA;IACI,2BAA2B,EAAE,eAAe;IAC5C,yBAAyB,EAAE,WAAW;IACtC,wBAAwB,EAAE,mBAAmB;IAC7C,sBAAsB,EAAE,4BAA4B;IACpD,qBAAqB,EAAE,2BAA2B;IAClD,iBAAiB,EAAE;gFACyD;AAChF;;AAEA;IACI,SAAS;IACT,iCAAiC;IACjC,sBAAsB;IACtB,qBAAqB;AACzB;AACA;IACI,0BAA0B;IAC1B,+BAA+B;AACnC;AACA;IACI,4BAA4B;IAC5B,aAAa;IACb,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,aAAa;IACb,UAAU;AACd;AACA;IACI,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,0BAA0B;IAC1B,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,sBAAsB;IACtB,cAAc;AAClB;AACA;IACI,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,sCAAsC;IACtC,YAAY;IACZ,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,QAAQ;AACZ;AACA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,oCAAoC;AACxC;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,YAAY;AAChB;;AAEA;;;;;IAKI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,gBAAgB;AACpB;;AAEA;;IAEI,gCAAgC;AACpC;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,wBAAwB;IACxB,UAAU;AACd;AACA;;;IAGI,eAAe;IACf,uBAAuB;AAC3B;AACA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,8BAA8B;IAC9B,iBAAiB;IACjB,2CAA2C;AAC/C;AACA;IACI,8BAA8B;IAC9B,eAAe;AACnB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,eAAe;IACf,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,YAAY;AAChB;AACA;IACI,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,UAAU;IACV,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA,gBAAgB;AAChB;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,MAAM;AACV;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,4BAA4B;IAC5B,mBAAmB;IACnB,sBAAsB;IACtB,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,eAAe;IACf,kBAAkB;IAClB,gCAAgC;AACpC;;AAEA;IACI,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;IAChB,+BAA+B;IAC/B,eAAe;IACf,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;AACrB;AACA;IACI,eAAe;IACf,+BAA+B;AACnC;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,iBAAiB;IACjB,4BAA4B;IAC5B,YAAY;IACZ,gBAAgB;AACpB;AACA;IACI,eAAe;AACnB;AACA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,iBAAiB;IACjB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,kBAAkB;AACtB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap\");\n\n.noselect {\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Old versions of Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome, Edge, Opera and Firefox */\n}\n\n* {\n    margin: 0;\n    font-family: \"Nunito\", sans-serif;\n    box-sizing: border-box;\n    color: var(--primary);\n}\nhtml {\n    --primary: rgb(59, 59, 59);\n    --secondary: rgb(238, 238, 238);\n}\nbody {\n    background: var(--secondary);\n    display: flex;\n    min-height: 100vh;\n    overflow-x: hidden;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n}\n\ninput,\ntextarea {\n    outline: none;\n    padding: 0;\n}\nh4 {\n    font-weight: normal;\n}\n\n.heading-container {\n    width: 100vw;\n    height: 150px;\n    background: var(--primary);\n    display: flex;\n    align-items: center;\n    padding-left: 50px;\n    box-sizing: border-box;\n    flex-shrink: 0;\n}\n.heading-title {\n    color: white;\n    font-size: 4.5rem;\n}\n\n.middle-container {\n    display: flex;\n    width: 100vw;\n    flex-grow: 1;\n}\n\n.projects-container {\n    border-right: 5px solid var(--primary);\n    width: 670px;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    padding: 40px 80px;\n    gap: 5px;\n}\n.projects-heading {\n    font-size: 2.2rem;\n    margin-bottom: 10px;\n    display: flex;\n    justify-content: space-between;\n}\n.projects-add {\n    width: 50px;\n    height: 50px;\n    font-size: 2.5rem;\n}\n.projects-add:hover {\n    cursor: pointer;\n}\n\n.project {\n    box-sizing: border-box;\n    border-radius: 10px;\n    padding: 0 25px;\n    font-size: 1.8rem;\n    font-weight: normal;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 370px;\n}\n.project:hover {\n    background-color: rgb(201, 201, 201);\n}\n\n.project-title {\n    font-size: 3rem;\n    overflow-x: hidden;\n    width: 900px;\n}\n\n.projects-add,\n.remove,\n.edit,\n.complete,\n.tasks-add {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: black;\n    border: none;\n    background: none;\n}\n\n.projects-add,\n.tasks-add {\n    color: var(--primary) !important;\n}\n\n.remove {\n    height: 30px;\n    width: 30px;\n    font-size: 2.5rem;\n    transform: rotate(45deg);\n    opacity: 0;\n}\n.remove:hover,\n.edit:hover,\n.complete:hover {\n    cursor: pointer;\n    opacity: 0.7 !important;\n}\n.tasks-add:hover {\n    cursor: pointer;\n}\n\n.tasks-and-title-container {\n    width: 100%;\n    box-sizing: border-box;\n    padding-left: 40px;\n    padding-top: 40px;\n}\n\n.task {\n    width: 80%;\n    display: flex;\n    height: 50px;\n    padding: 40px 20px;\n    align-items: center;\n    justify-content: space-between;\n    margin-left: 30px;\n    border-bottom: 2px solid rgb(200, 200, 200);\n}\n.task:hover {\n    background: rgb(220, 220, 220);\n    cursor: pointer;\n}\n.task-half {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n.task-title {\n    font-size: 1.5rem;\n    font-weight: normal;\n    width: 700px;\n    overflow-x: hidden;\n}\n\n.edit {\n    height: 30px;\n    width: 30px;\n    font-size: 2rem;\n    opacity: 0;\n}\n\n.complete {\n    border-radius: 50%;\n    font-size: 3rem;\n    color: black;\n    opacity: 50%;\n}\n.complete:hover {\n    color: green;\n    opacity: 1;\n}\n\n.project-title-div {\n    width: 80%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 20px;\n}\n\n.tasks-add {\n    font-size: 3rem;\n}\n\n.project-title-input {\n    font-size: 3rem;\n    background: none;\n    border: none;\n    font-weight: bold;\n    width: 80%;\n}\n\n.tasks-container {\n    display: flex;\n    flex-direction: column;\n    padding-top: 20px;\n}\n\n/* modal stuff */\n.modal-bg {\n    display: none;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    background: rgb(0, 0, 0, 0.5);\n    top: 0;\n}\n\n.edit-task-modal {\n    display: flex;\n    width: 600px;\n    height: 550px;\n    background: var(--secondary);\n    border-radius: 40px;\n    box-sizing: border-box;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    padding: 40px 0;\n    position: relative;\n    border: 5px solid var(--primary);\n}\n\n.project-tab-name {\n    overflow-x: hidden;\n    width: 80%;\n}\n\n.modal-save {\n    width: 60px;\n    height: 60px;\n    border-radius: 10px;\n    margin-top: 20px;\n    background: rgb(0, 255, 0, 0.2);\n    font-size: 2rem;\n    color: rgb(14, 90, 14);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: bold;\n}\n.modal-save:hover {\n    cursor: pointer;\n    background: rgb(0, 255, 0, 0.4);\n}\n\n.modal-title {\n    font-size: 3rem;\n    width: 500px;\n    overflow-x: hidden;\n    display: flex;\n    justify-content: center;\n    height: 66px;\n    overflow: overlay;\n}\n.modal-date {\n    font-size: 1.5rem;\n    background: var(--secondary);\n    border: none;\n    margin-top: 20px;\n}\n.modal-date:hover {\n    cursor: pointer;\n}\n.modal-description {\n    width: 500px;\n    height: 200px;\n    border-radius: 20px;\n    padding: 20px;\n    font-size: 1.2rem;\n    border: none;\n    resize: none;\n}\n\n.task-date {\n    font-size: 1.1rem;\n    margin-right: 20px;\n}\n\n.modal-title-input {\n    background: none;\n    border: none;\n    font-weight: bold;\n    font-size: 3rem;\n    width: 500px;\n    height: 66px;\n    text-align: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom-stuff.js":
/*!**************************!*\
  !*** ./src/dom-stuff.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageCreation": () => (/* binding */ PageCreation),
/* harmony export */   "ProjectManagement": () => (/* binding */ ProjectManagement),
/* harmony export */   "TaskManagement": () => (/* binding */ TaskManagement),
/* harmony export */   "clearContainer": () => (/* binding */ clearContainer)
/* harmony export */ });
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ "./styles/styles.css");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



// responsible for creating each part of the page
class PageCreation {
    constructor(content) {
        this.contentName = content;
        this.content = document.querySelector(content);
    }

    // wrapping function
    create(projectTitle = "") {
        this.content.append(
            this.heading(),
            this.middle(projectTitle),
            this.modal()
        );
    }

    heading() {
        var div = document.createElement("div");
        var title = document.createElement("h1");

        div.classList.add("heading-container");
        title.classList.add("heading-title");

        title.textContent = "Todo List";

        div.appendChild(title);

        return div;
    }

    // includes projects and tasks (under heading, above footer)
    middle() {
        var bigDiv = document.createElement("div");

        bigDiv.classList.add("middle-container");

        bigDiv.append(this.projects(), this.tasks());

        return bigDiv;
    }
    projects() {
        var div = document.createElement("div");
        var heading = document.createElement("h2");
        var addButton = document.createElement("button");

        heading.textContent = "Projects";
        addButton.textContent = "+";
        addButton.addEventListener("click", _index_js__WEBPACK_IMPORTED_MODULE_1__.addProject);

        div.classList.add("projects-container");
        heading.classList.add("projects-heading");
        addButton.classList.add("projects-add");

        heading.append(addButton);
        div.append(heading);

        return div;
    }
    tasks() {
        var bigDiv = document.createElement("div");
        var tasksDiv = document.createElement("div");

        bigDiv.classList.add("tasks-and-title-container");
        tasksDiv.classList.add("tasks-container");

        this.projectTitleDiv(bigDiv);

        bigDiv.append(tasksDiv);

        return bigDiv;
    }
    projectTitleDiv(div) {
        var titleDiv = document.createElement("div");
        var theTitle = document.createElement("h3");
        var addButton = document.createElement("button");
        theTitle.classList.add("project-title");
        addButton.classList.add("tasks-add");
        addButton.textContent = "+";
        titleDiv.classList.add("project-title-div");

        addButton.addEventListener("click", _index_js__WEBPACK_IMPORTED_MODULE_1__.addTask);

        titleDiv.append(theTitle, addButton);

        div.append(titleDiv);
    }

    modal() {
        // dark background
        var bg = document.createElement("div");
        bg.classList.add("modal-bg");

        // modal itself
        var modal = document.createElement("div");
        modal.classList.add("edit-task-modal");

        // modal innards
        var title = document.createElement("h2");
        title.classList.add("modal-title");

        var date = document.createElement("input");
        date.type = "date";
        date.classList.add("modal-date");

        var description = document.createElement("textarea");
        description.classList.add("modal-description");
        description.placeholder = "description...";

        var save = document.createElement("div");
        save.classList.add("modal-save", "material-icons", "noselect");
        save.textContent = "edit";

        // closing modal via clicking bg or pressing escape
        bg.addEventListener("click", () => {
            bg.style.display = "none";
        });
        // clicking modal doesn't close modal
        modal.addEventListener("click", (event) => {
            event.stopPropagation();
        });
        title.addEventListener("click", () => {
            TaskManagement.editModalTitle();
        });

        // removing weird text in modal after adding EL
        modal.textContent = "";

        // putting everything together
        modal.append(title, date, description, save);
        bg.append(modal);

        return bg;
    }
}

var ProjectManagement = (function () {
    // adding a project
    function add(containerName, project, id) {
        var container = document.querySelector(containerName);

        var div = document.createElement("div");
        var projectTitleInProjectsTab = document.createElement("h4");
        var remove = document.createElement("button");
        div.classList.add("project", "noselect");
        remove.classList.add("noselect", "remove");
        projectTitleInProjectsTab.classList.add("project-tab-name");

        // individual project title functionality
        var projectTitle = document.querySelector(".project-title");

        eventListeners(project, div, remove, id, projectTitle);

        projectTitleInProjectsTab.textContent = project.name;
        remove.textContent = "+";

        div.append(projectTitleInProjectsTab);
        // so that main cannot be removed
        if (id !== 0) {
            div.append(remove);
        }

        container.append(div);

        // settings the div's id
        div.id = "project" + String(id);

        return div;
    }
    function remove(id) {
        var project = document.querySelector("#project" + String(id));
        project.parentNode.removeChild(project);
    }

    function reveal(button) {
        button.style.opacity = 0.5;
    }
    function hide(button) {
        button.style.opacity = 0;
    }

    function eventListeners(project, div, remove, id) {
        // to have the remove button show up when hovered over only
        div.addEventListener("mouseover", () => {
            reveal(remove);
            project.highlight();
        });
        div.addEventListener("mouseout", () => {
            hide(remove);
            if (project.selected === false) {
                project.unhighlight();
            }
        });

        // removing after clicking the remove button
        remove.addEventListener("click", (event) => {
            (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.removeProject)(id);
            event.stopPropagation();
        });

        // making it stay highlighted
        div.addEventListener("click", () => {
            (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.switchProject)(id);
        });
    }

    function editProjectTitle(project) {
        if (project.id === 0) {
            return;
        }
        // needed elements
        var projectTitleDiv = document.querySelector(".project-title-div");
        var projectTitle = document.querySelector(".project-title");

        // removing the project title
        projectTitleDiv.removeChild(projectTitle);

        // creating the input box
        var inputBox = document.createElement("input");
        inputBox.type = "text";
        inputBox.setAttribute("required", "");
        inputBox.value = project.name;
        inputBox.classList.add("project-title-input");

        // enter key event listener
        inputBox.addEventListener("keypress", function (e) {
            if (e.key == "Enter") {
                setProjectTitle(project, projectTitleDiv, inputBox);
            }
        });

        // replacing the title
        projectTitleDiv.insertBefore(
            inputBox,
            document.querySelector(".tasks-add")
        );
        // so it is selected automatically
        inputBox.select();
    }

    function setProjectTitle(project, projectTitleDiv, inputBox) {
        // length check
        var fine = true;
        var separatedName = inputBox.value.match(/[\w]+/g);
        separatedName.every((word) => {
            if (word.length > _index_js__WEBPACK_IMPORTED_MODULE_1__.projectTitleWordLength) {
                fine = false;
                return false;
            }
            return true;
        });
        if (!fine) {
            alert(
                `Max word length for project names is ${_index_js__WEBPACK_IMPORTED_MODULE_1__.projectTitleWordLength} chararacters`
            );
            return;
        }
        var value = inputBox.value;
        // setting new project name
        project.name = value;

        // removing inputBox
        projectTitleDiv.removeChild(inputBox);

        // inserting heading with new name
        var newTitle = document.createElement("h3");
        newTitle.textContent = value;
        newTitle.classList.add("project-title");
        projectTitleDiv.insertBefore(
            newTitle,
            document.querySelector(".tasks-add")
        );
        newTitle.addEventListener("click", () => {
            editProjectTitle(project);
        });

        // editing project in project tab
        var domProject = document.querySelector(
            "#project" + String(project.id)
        );
        domProject.children[0].textContent = value;

        // save
        (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.populateStorage)();
    }

    function removeProjectTitleEventListener() {
        var element = document.querySelector(".project-title");
        // clone and replace
        var newElement = element.cloneNode(true);
        element.parentNode.replaceChild(newElement, element);
    }

    // this gives the project title the INITIAL event listener, because default project is main and main does not require the event listener
    function replaceProjectTitle(project) {
        var projectTitle = document.querySelector(".project-title");
        var newProjectTitle = projectTitle.cloneNode(true);
        newProjectTitle.addEventListener("click", () => {
            editProjectTitle(project);
        });
        projectTitle.parentNode.replaceChild(newProjectTitle, projectTitle);
    }

    return {
        add,
        remove,
        removeProjectTitleEventListener,
        replaceProjectTitle,
    };
})();

var TaskManagement = (function () {
    function add(containerName, task) {
        var container = document.querySelector(containerName);

        var div = document.createElement("div");
        var left = document.createElement("div");
        var right = document.createElement("div");
        var title = document.createElement("h4");
        var complete = document.createElement("button");
        var remove = document.createElement("button");
        var date = document.createElement("p");

        remove.textContent = "+";
        complete.innerHTML = "&#10004;";
        date.textContent = task.date;

        // adding all classes
        addClasses(div, remove, complete, title, left, right, date);

        eventListeners(div, complete, remove, task);

        title.textContent = task.title;

        left.append(complete, title);
        right.append(date, remove);
        div.append(left, right);
        container.append(div);

        div.id = "task" + String(task.id);

        changeDateColor(task, date);

        return div;
    }

    // changing colour depending on date
    function changeDateColor(task, dateElement) {
        var currentDate = new Date();
        if (task.dateObject) {
            // if on the day
            if (currentDate.toDateString() === task.dateObject.toDateString()) {
                dateElement.style.color = "darkorange";
            }
            // if past
            else if (currentDate > task.dateObject) {
                dateElement.style.color = "red";
            }
            // if due
            else {
                dateElement.style.color = "var(--primary)";
            }
        }
    }

    function mouseover(button) {
        button.style.opacity = 0.5;
    }
    function mouseout(button) {
        button.style.opacity = 0;
    }

    function remove(id) {
        var task = document.querySelector("#task" + String(id));
        task.parentNode.removeChild(task);
    }

    function load(project) {
        var projectTitle = document.querySelector(".project-title");

        projectTitle.textContent = project.name;
        project.tasks.forEach((task) => {
            add(".tasks-container", task, task.id);
        });
    }

    function eventListeners(div, complete, remove, task) {
        // to have the remove button show up when hovered over only
        div.addEventListener("mouseover", () => {
            mouseover(remove);
        });
        div.addEventListener("mouseout", () => {
            mouseout(remove);
        });
        div.addEventListener("click", () => {
            openModal(task);
        });

        remove.addEventListener("click", (e) => {
            (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.removeTask)(task.id);
            e.stopPropagation();
        });

        // complete and edit event listeners ***
        complete.addEventListener("click", (e) => {
            // temporary until actual completion functionality is added
            (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.removeTask)(task.id);
            e.stopPropagation();
        });
    }

    function addClasses(div, remove, complete, title, left, right, date) {
        div.classList.add("task", "noselect");
        remove.classList.add("remove", "noselect");
        complete.classList.add("complete", "noselect");
        title.classList.add("task-title");
        left.classList.add("task-half");
        right.classList.add("task-half");
        date.classList.add("task-date");
    }

    function openModal(task) {
        // making it appear
        var modalBg = document.querySelector(".modal-bg");
        modalBg.style.display = "flex";
        replaceSaveButton(task);

        document.querySelector(".modal-title").textContent = task.title;
        if (task.storedDate === "") {
            document.querySelector(".modal-date").value = null;
        } else {
            document.querySelector(".modal-date").value = task.storedDate;
        }
        document.querySelector(".modal-description").value = task.description;
    }

    function editModalTitle() {
        // needed elements
        var modal = document.querySelector(".edit-task-modal");
        var modalTitle = document.querySelector(".modal-title");

        // saving title
        var value = modalTitle.textContent;
        // removing the modal title
        modal.removeChild(modalTitle);

        // creating the input box
        var inputBox = document.createElement("input");
        inputBox.type = "text";
        inputBox.setAttribute("required", "");
        inputBox.value = value;
        inputBox.classList.add("modal-title-input");

        // enter key event listener
        inputBox.addEventListener("keypress", function (e) {
            if (e.key == "Enter") {
                setModalTitle(modal, inputBox);
            }
        });

        // replacing the title
        modal.insertBefore(inputBox, document.querySelector(".modal-date"));
        // so it is selected automatically
        inputBox.select();
    }
    function setModalTitle(modal, inputBox) {
        var fine = true;
        var separatedTitle = inputBox.value.match(/[\w]+/g);
        separatedTitle.every((word) => {
            if (word.length > _index_js__WEBPACK_IMPORTED_MODULE_1__.taskTitleLength) {
                fine = false;
                return false;
            }
        });
        if (!fine) {
            alert(
                `Max word length for task titles is ${_index_js__WEBPACK_IMPORTED_MODULE_1__.taskTitleLength} chararacters`
            );
            return;
        }
        var value = inputBox.value;

        // removing inputBox
        modal.removeChild(inputBox);

        // inserting heading with new name
        var newTitle = document.createElement("h3");
        newTitle.textContent = value;
        newTitle.classList.add("modal-title");
        modal.insertBefore(newTitle, document.querySelector(".modal-date"));
        newTitle.addEventListener("click", () => {
            editModalTitle();
        });
    }
    // this gives the save button the event listener to actually save the changes to the title
    function replaceSaveButton(task) {
        var saveButton = document.querySelector(".modal-save");
        var newSaveButton = saveButton.cloneNode(true);
        newSaveButton.addEventListener("click", () => {
            setTaskDetails(task);
        });
        saveButton.parentNode.replaceChild(newSaveButton, saveButton);
    }

    function setTaskDetails(task) {
        if (!document.querySelector(".modal-title")) {
            setModalTitle(
                document.querySelector(".edit-task-modal"),
                document.querySelector(".modal-title-input")
            );
        }
        // saving to the object
        task.title = document.querySelector(".modal-title").textContent;
        task.storedDate = document.querySelector(".modal-date").value;
        task.description = document.querySelector(".modal-description").value;

        // changing the task in task list
        var taskListTask = document.querySelector("#task" + String(task.id));
        taskListTask.children[0].children[1].textContent = task.title;
        taskListTask.children[1].children[0].textContent = task.date;

        // closing the modal
        document.querySelector(".modal-bg").style.display = "none";

        // updating color of date
        changeDateColor(task, taskListTask.children[1].children[0]);

        // save to storage
        (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.populateStorage)();
    }

    return { add, remove, load, editModalTitle };
})();

// removes all of an element's
function clearContainer(element) {
    while (element.lastChild) {
        element.removeChild(element.lastChild);
    }
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "removeTask": () => (/* binding */ removeTask),
/* harmony export */   "switchProject": () => (/* binding */ switchProject),
/* harmony export */   "populateStorage": () => (/* binding */ populateStorage),
/* harmony export */   "taskTitleLength": () => (/* binding */ taskTitleLength),
/* harmony export */   "projectTitleWordLength": () => (/* binding */ projectTitleWordLength)
/* harmony export */ });
/* harmony import */ var _dom_stuff_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-stuff.js */ "./src/dom-stuff.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");




window.currentProjectId = 0;
var projects = [];

// constants
var taskTitleLength = 11;
var projectTitleWordLength = 10;

var page = new _dom_stuff_js__WEBPACK_IMPORTED_MODULE_0__.PageCreation("#content");
page.create();

// testing if storage is populated
if (!localStorage.getItem("projects")) {
    // creating the default project
    projects.push(new _projects_js__WEBPACK_IMPORTED_MODULE_1__["default"]("General", 0));
    populateStorage(window.currentProjectId, projects);
} else {
    projects = setStyles();
}

// adding the methods back
// projects
projects.forEach((project) => {
    project.unhighlight = function () {
        var domProject = document.querySelector("#project" + String(this.id));
        domProject.style["background"] = "rgb(238, 238, 238)";
    };
    project.highlight = function () {
        var domProject = document.querySelector("#project" + String(this.id));
        domProject.style["background"] = "rgb(201, 201, 201)";
    };
});

// tasks
projects.forEach((project) => {
    project.tasks.forEach((task) => {
        Object.defineProperty(task, "date", {
            get: function () {
                if (this.storedDate === "") {
                    return "no date";
                }
                var dateObject = new Date(this.storedDate);
                return dateObject.toLocaleDateString();
            },
        });

        Object.defineProperty(task, "dateObject", {
            get: function () {
                if (this.storedDate === "") {
                    return false;
                }
                var dateObject = new Date(this.storedDate);
                return dateObject;
            },
        });
    });
});

// loading projects
projects.forEach((project) => {
    _dom_stuff_js__WEBPACK_IMPORTED_MODULE_0__.ProjectManagement.add(".projects-container", project, project.id);
});

switchProject(window.currentProjectId);

// localStorage stuff
function populateStorage() {
    localStorage.setItem(
        "currentProjectId",
        JSON.stringify(window.currentProjectId)
    );
    localStorage.setItem("projects", JSON.stringify(projects));
}

function setStyles() {
    var currentProjectIdData = localStorage.getItem("currentProjectId");
    window.currentProjectId = JSON.parse(currentProjectIdData);
    var projectsData = localStorage.getItem("projects");
    projects = JSON.parse(projectsData);
    return projects;
}

// adding a project to the list
function addProject() {
    var name = prompt("Enter Project name");
    if (name === "" || name === null) {
        return;
    }
    var fine = true;
    var separatedName = name.match(/[\w]+/g);
    separatedName.every((word) => {
        if (word.length > projectTitleWordLength) {
            fine = false;
            return false;
        }
    });
    if (!fine) {
        alert(
            `Max word length for project names is ${projectTitleWordLength} chararacters`
        );
        return;
    }

    var id = 0;
    while (projects.some((project) => project.id === id)) {
        id++;
    }

    projects.push(new _projects_js__WEBPACK_IMPORTED_MODULE_1__["default"](name, id));
    // adding it to the DOM
    _dom_stuff_js__WEBPACK_IMPORTED_MODULE_0__.ProjectManagement.add(
        ".projects-container",
        projects[projects.length - 1],
        id
    );

    populateStorage();
}

// removing a project from the DOM and projects list
function removeProject(id) {
    var index = findProjectIndex(projects, id);

    // checking if it was selected
    var isSelected = projects[index].selected;

    // removing from the DOM
    _dom_stuff_js__WEBPACK_IMPORTED_MODULE_0__.ProjectManagement.remove(id);

    // removing from projects list
    projects.splice(index, 1);

    // switching to the project after removal if it was selected
    if (isSelected) {
        switchProject(projects[index - 1].id);
    }
    populateStorage();
}

function switchProject(id) {
    // changing the current project
    window.currentProjectId = id;

    var index = findProjectIndex(projects, id);

    // replacing the event listener on the project title
    _dom_stuff_js__WEBPACK_IMPORTED_MODULE_0__.ProjectManagement.replaceProjectTitle(projects[index]);

    // highlighting current task and unhighlighting the rest
    projects[index].highlight();
    projects[index].selected = true;
    projects.forEach((project) => {
        if (project.id !== id) {
            project.unhighlight();
            project.selected = false;
        }
    });

    // clearing all the tasks
    var tasksContainer = document.querySelector(".tasks-container");
    (0,_dom_stuff_js__WEBPACK_IMPORTED_MODULE_0__.clearContainer)(tasksContainer);

    // loading all project's tasks
    _dom_stuff_js__WEBPACK_IMPORTED_MODULE_0__.TaskManagement.load(projects[index]);

    // removing event listener on title if main
    if (id === 0) {
        _dom_stuff_js__WEBPACK_IMPORTED_MODULE_0__.ProjectManagement.removeProjectTitleEventListener();
    }
    populateStorage();
}

function addTask() {
    var title = prompt("Enter Task Name");
    if (title === "" || title === null) {
        return;
    }
    var fine = true;
    var separatedTitle = title.match(/[\w]+/g);
    separatedTitle.every((word) => {
        if (word.length > taskTitleLength) {
            fine = false;
            return false;
        }
    });
    if (!fine) {
        alert(
            `Max word length for task titles is ${taskTitleLength} chararacters`
        );
        return;
    }

    var projectIndex = findProjectIndex(projects, window.currentProjectId);
    var id = 0;
    // keep incrementing id until no tasks share the id
    // therefore id will always be unique to the projects
    while (
        projects.some((project) => {
            return project.tasks.some((task) => {
                return task.id == id;
            });
        })
    ) {
        id++;
    }

    // adding the task to the project
    projects[projectIndex].tasks.push(new _tasks_js__WEBPACK_IMPORTED_MODULE_2__["default"](title, id));

    _dom_stuff_js__WEBPACK_IMPORTED_MODULE_0__.TaskManagement.add(
        ".tasks-container",
        projects[projectIndex].tasks[projects[projectIndex].tasks.length - 1]
    );

    // save
    populateStorage();
}
function removeTask(id) {
    _dom_stuff_js__WEBPACK_IMPORTED_MODULE_0__.TaskManagement.remove(id);
    projects.forEach((project) => {
        project.tasks.forEach((task) => {
            if (task.id == id) {
                project.tasks = project.tasks.filter(
                    (filterTask) => task !== filterTask
                );
            }
        });
    });
    populateStorage();
}



function findProjectIndex(projects, id) {
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].id === id) {
            return i;
        }
    }
}


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project {
    constructor(name, id) {
        this.name = name;
        this.tasks = [];
        this.id = id;
        this.selected = false;
    }

    unhighlight() {
        var domProject = document.querySelector("#project" + String(this.id));
        domProject.style["background"] = "rgb(238, 238, 238)";
    }
    highlight() {
        var domProject = document.querySelector("#project" + String(this.id));
        domProject.style["background"] = "rgb(201, 201, 201)";
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Task {
    constructor(title, id) {
        this.title = title;
        this.id = id;
        this.description = "";
        this.storedDate = "";
    }

    get date() {
        if (this.storedDate === "") {
            return "no date";
        }
        var dateObject = new Date(this.storedDate);
        return dateObject.toLocaleDateString();
    }

    get dateObject() {
        if (this.storedDate === "") {
            return false;
        }
        var dateObject = new Date(this.storedDate);
        return dateObject;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFlBQVksd0RBQWE7QUFDekI7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxZQUFZLHdEQUFhO0FBQ3pCLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNkRBQXNCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx3REFBd0QsNkRBQXNCLEVBQUU7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDBEQUFlO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQztBQUN0Qzs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsWUFBWSxxREFBVTtBQUN0QjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxREFBVTtBQUN0QjtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixzREFBZTtBQUM3QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHNEQUFzRCxzREFBZSxFQUFFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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Ozs7Ozs7QUNsQnZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7O1VDekJwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3R5bGVzL3N0eWxlcy5jc3M/NmJjNiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20tc3R1ZmYuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bzp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm5vc2VsZWN0IHtcXG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEtvbnF1ZXJvciBIVE1MICovXFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWQgYnkgQ2hyb21lLCBFZGdlLCBPcGVyYSBhbmQgRmlyZWZveCAqL1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuaHRtbCB7XFxuICAgIC0tcHJpbWFyeTogcmdiKDU5LCA1OSwgNTkpO1xcbiAgICAtLXNlY29uZGFyeTogcmdiKDIzOCwgMjM4LCAyMzgpO1xcbn1cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbmg0IHtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLmhlYWRpbmctY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmbGV4LXNocmluazogMDtcXG59XFxuLmhlYWRpbmctdGl0bGUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xcbn1cXG5cXG4ubWlkZGxlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdmFyKC0tcHJpbWFyeSk7XFxuICAgIHdpZHRoOiA2NzBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogNDBweCA4MHB4O1xcbiAgICBnYXA6IDVweDtcXG59XFxuLnByb2plY3RzLWhlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDIuMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ucHJvamVjdHMtYWRkIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcbi5wcm9qZWN0cy1hZGQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMCAyNXB4O1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMzcwcHg7XFxufVxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwgMjAxLCAyMDEpO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICB3aWR0aDogOTAwcHg7XFxufVxcblxcbi5wcm9qZWN0cy1hZGQsXFxuLnJlbW92ZSxcXG4uZWRpdCxcXG4uY29tcGxldGUsXFxuLnRhc2tzLWFkZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLnByb2plY3RzLWFkZCxcXG4udGFza3MtYWRkIHtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5yZW1vdmUge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG4ucmVtb3ZlOmhvdmVyLFxcbi5lZGl0OmhvdmVyLFxcbi5jb21wbGV0ZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMC43ICFpbXBvcnRhbnQ7XFxufVxcbi50YXNrcy1hZGQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrcy1hbmQtdGl0bGUtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxufVxcblxcbi50YXNrIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMjAwLCAyMDAsIDIwMCk7XFxufVxcbi50YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIyMCwgMjIwLCAyMjApO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YXNrLWhhbGYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcbi50YXNrLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIHdpZHRoOiA3MDBweDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4uZWRpdCB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmNvbXBsZXRlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogNTAlO1xcbn1cXG4uY29tcGxldGU6aG92ZXIge1xcbiAgICBjb2xvcjogZ3JlZW47XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlLWRpdiB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnRhc2tzLWFkZCB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUtaW5wdXQge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbi50YXNrcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuXFxuLyogbW9kYWwgc3R1ZmYgKi9cXG4ubW9kYWwtYmcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwLCAwLjUpO1xcbiAgICB0b3A6IDA7XFxufVxcblxcbi5lZGl0LXRhc2stbW9kYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGhlaWdodDogNTUwcHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogNDBweCAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4ucHJvamVjdC10YWItbmFtZSB7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLm1vZGFsLXNhdmUge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjU1LCAwLCAwLjIpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiByZ2IoMTQsIDkwLCAxNCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLm1vZGFsLXNhdmU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHJnYigwLCAyNTUsIDAsIDAuNCk7XFxufVxcblxcbi5tb2RhbC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDY2cHg7XFxuICAgIG92ZXJmbG93OiBvdmVybGF5O1xcbn1cXG4ubW9kYWwtZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5tb2RhbC1kYXRlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubW9kYWwtZGVzY3JpcHRpb24ge1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnRhc2stZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5tb2RhbC10aXRsZS1pbnB1dCB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDY2cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSwyQkFBMkIsRUFBRSxlQUFlO0lBQzVDLHlCQUF5QixFQUFFLFdBQVc7SUFDdEMsd0JBQXdCLEVBQUUsbUJBQW1CO0lBQzdDLHNCQUFzQixFQUFFLDRCQUE0QjtJQUNwRCxxQkFBcUIsRUFBRSwyQkFBMkI7SUFDbEQsaUJBQWlCLEVBQUU7Z0ZBQ3lEO0FBQ2hGOztBQUVBO0lBQ0ksU0FBUztJQUNULGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGFBQWE7SUFDYixVQUFVO0FBQ2Q7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0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aUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7SUFDZiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4ubm9zZWxlY3Qge1xcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXFxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXFxuICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRlZCBieSBDaHJvbWUsIEVkZ2UsIE9wZXJhIGFuZCBGaXJlZm94ICovXFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5odG1sIHtcXG4gICAgLS1wcmltYXJ5OiByZ2IoNTksIDU5LCA1OSk7XFxuICAgIC0tc2Vjb25kYXJ5OiByZ2IoMjM4LCAyMzgsIDIzOCk7XFxufVxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuaDQge1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4uaGVhZGluZy1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG4uaGVhZGluZy10aXRsZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiA0LjVyZW07XFxufVxcblxcbi5taWRkbGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcXG4gICAgd2lkdGg6IDY3MHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiA0MHB4IDgwcHg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG4ucHJvamVjdHMtaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5wcm9qZWN0cy1hZGQge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuLnByb2plY3RzLWFkZDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAwIDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAzNzBweDtcXG59XFxuLnByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCAyMDEsIDIwMSk7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIHdpZHRoOiA5MDBweDtcXG59XFxuXFxuLnByb2plY3RzLWFkZCxcXG4ucmVtb3ZlLFxcbi5lZGl0LFxcbi5jb21wbGV0ZSxcXG4udGFza3MtYWRkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdHMtYWRkLFxcbi50YXNrcy1hZGQge1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSkgIWltcG9ydGFudDtcXG59XFxuXFxuLnJlbW92ZSB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbi5yZW1vdmU6aG92ZXIsXFxuLmVkaXQ6aG92ZXIsXFxuLmNvbXBsZXRlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvcGFjaXR5OiAwLjcgIWltcG9ydGFudDtcXG59XFxuLnRhc2tzLWFkZDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2tzLWFuZC10aXRsZS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHggMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyMDAsIDIwMCwgMjAwKTtcXG59XFxuLnRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjIwLCAyMjAsIDIyMCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRhc2staGFsZiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuLnRhc2stdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgd2lkdGg6IDcwMHB4O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5lZGl0IHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uY29tcGxldGUge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBvcGFjaXR5OiA1MCU7XFxufVxcbi5jb21wbGV0ZTpob3ZlciB7XFxuICAgIGNvbG9yOiBncmVlbjtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUtZGl2IHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4udGFza3MtYWRkIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZS1pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLnRhc2tzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbn1cXG5cXG4vKiBtb2RhbCBzdHVmZiAqL1xcbi5tb2RhbC1iZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDAsIDAuNSk7XFxuICAgIHRvcDogMDtcXG59XFxuXFxuLmVkaXQtdGFzay1tb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgaGVpZ2h0OiA1NTBweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA0MHB4IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi5wcm9qZWN0LXRhYi1uYW1lIHtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4ubW9kYWwtc2F2ZSB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigwLCAyNTUsIDAsIDAuMik7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHJnYigxNCwgOTAsIDE0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ubW9kYWwtc2F2ZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDI1NSwgMCwgMC40KTtcXG59XFxuXFxuLm1vZGFsLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogNjZweDtcXG4gICAgb3ZlcmZsb3c6IG92ZXJsYXk7XFxufVxcbi5tb2RhbC1kYXRlIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuLm1vZGFsLWRhdGU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tb2RhbC1kZXNjcmlwdGlvbiB7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4udGFzay1kYXRlIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuLm1vZGFsLXRpdGxlLWlucHV0IHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGhlaWdodDogNjZweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3R5bGVzL3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7XG4gICAgYWRkUHJvamVjdCxcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIGFkZFRhc2ssXG4gICAgcmVtb3ZlVGFzayxcbiAgICBzd2l0Y2hQcm9qZWN0LFxuICAgIHBvcHVsYXRlU3RvcmFnZSxcbiAgICB0YXNrVGl0bGVMZW5ndGgsXG4gICAgcHJvamVjdFRpdGxlV29yZExlbmd0aCxcbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuLy8gcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIGVhY2ggcGFydCBvZiB0aGUgcGFnZVxuY2xhc3MgUGFnZUNyZWF0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZW50KSB7XG4gICAgICAgIHRoaXMuY29udGVudE5hbWUgPSBjb250ZW50O1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRlbnQpO1xuICAgIH1cblxuICAgIC8vIHdyYXBwaW5nIGZ1bmN0aW9uXG4gICAgY3JlYXRlKHByb2plY3RUaXRsZSA9IFwiXCIpIHtcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZChcbiAgICAgICAgICAgIHRoaXMuaGVhZGluZygpLFxuICAgICAgICAgICAgdGhpcy5taWRkbGUocHJvamVjdFRpdGxlKSxcbiAgICAgICAgICAgIHRoaXMubW9kYWwoKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGhlYWRpbmcoKSB7XG4gICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJoZWFkaW5nLWNvbnRhaW5lclwiKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImhlYWRpbmctdGl0bGVcIik7XG5cbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlRvZG8gTGlzdFwiO1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG5cbiAgICAvLyBpbmNsdWRlcyBwcm9qZWN0cyBhbmQgdGFza3MgKHVuZGVyIGhlYWRpbmcsIGFib3ZlIGZvb3RlcilcbiAgICBtaWRkbGUoKSB7XG4gICAgICAgIHZhciBiaWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIGJpZ0Rpdi5jbGFzc0xpc3QuYWRkKFwibWlkZGxlLWNvbnRhaW5lclwiKTtcblxuICAgICAgICBiaWdEaXYuYXBwZW5kKHRoaXMucHJvamVjdHMoKSwgdGhpcy50YXNrcygpKTtcblxuICAgICAgICByZXR1cm4gYmlnRGl2O1xuICAgIH1cbiAgICBwcm9qZWN0cygpIHtcbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICB2YXIgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICAgICAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIitcIjtcbiAgICAgICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0KTtcblxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLWNvbnRhaW5lclwiKTtcbiAgICAgICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtaGVhZGluZ1wiKTtcbiAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1hZGRcIik7XG5cbiAgICAgICAgaGVhZGluZy5hcHBlbmQoYWRkQnV0dG9uKTtcbiAgICAgICAgZGl2LmFwcGVuZChoZWFkaW5nKTtcblxuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cbiAgICB0YXNrcygpIHtcbiAgICAgICAgdmFyIGJpZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciB0YXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgYmlnRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrcy1hbmQtdGl0bGUtY29udGFpbmVyXCIpO1xuICAgICAgICB0YXNrc0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza3MtY29udGFpbmVyXCIpO1xuXG4gICAgICAgIHRoaXMucHJvamVjdFRpdGxlRGl2KGJpZ0Rpdik7XG5cbiAgICAgICAgYmlnRGl2LmFwcGVuZCh0YXNrc0Rpdik7XG5cbiAgICAgICAgcmV0dXJuIGJpZ0RpdjtcbiAgICB9XG4gICAgcHJvamVjdFRpdGxlRGl2KGRpdikge1xuICAgICAgICB2YXIgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgdGhlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIHZhciBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0aGVUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZVwiKTtcbiAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrcy1hZGRcIik7XG4gICAgICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiK1wiO1xuICAgICAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZS1kaXZcIik7XG5cbiAgICAgICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrKTtcblxuICAgICAgICB0aXRsZURpdi5hcHBlbmQodGhlVGl0bGUsIGFkZEJ1dHRvbik7XG5cbiAgICAgICAgZGl2LmFwcGVuZCh0aXRsZURpdik7XG4gICAgfVxuXG4gICAgbW9kYWwoKSB7XG4gICAgICAgIC8vIGRhcmsgYmFja2dyb3VuZFxuICAgICAgICB2YXIgYmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBiZy5jbGFzc0xpc3QuYWRkKFwibW9kYWwtYmdcIik7XG5cbiAgICAgICAgLy8gbW9kYWwgaXRzZWxmXG4gICAgICAgIHZhciBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJlZGl0LXRhc2stbW9kYWxcIik7XG5cbiAgICAgICAgLy8gbW9kYWwgaW5uYXJkc1xuICAgICAgICB2YXIgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC10aXRsZVwiKTtcblxuICAgICAgICB2YXIgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgZGF0ZS50eXBlID0gXCJkYXRlXCI7XG4gICAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWRhdGVcIik7XG5cbiAgICAgICAgdmFyIGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwibW9kYWwtZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJkZXNjcmlwdGlvbi4uLlwiO1xuXG4gICAgICAgIHZhciBzYXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2F2ZS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtc2F2ZVwiLCBcIm1hdGVyaWFsLWljb25zXCIsIFwibm9zZWxlY3RcIik7XG4gICAgICAgIHNhdmUudGV4dENvbnRlbnQgPSBcImVkaXRcIjtcblxuICAgICAgICAvLyBjbG9zaW5nIG1vZGFsIHZpYSBjbGlja2luZyBiZyBvciBwcmVzc2luZyBlc2NhcGVcbiAgICAgICAgYmcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGJnLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNsaWNraW5nIG1vZGFsIGRvZXNuJ3QgY2xvc2UgbW9kYWxcbiAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgVGFza01hbmFnZW1lbnQuZWRpdE1vZGFsVGl0bGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcmVtb3Zpbmcgd2VpcmQgdGV4dCBpbiBtb2RhbCBhZnRlciBhZGRpbmcgRUxcbiAgICAgICAgbW9kYWwudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgICAgIC8vIHB1dHRpbmcgZXZlcnl0aGluZyB0b2dldGhlclxuICAgICAgICBtb2RhbC5hcHBlbmQodGl0bGUsIGRhdGUsIGRlc2NyaXB0aW9uLCBzYXZlKTtcbiAgICAgICAgYmcuYXBwZW5kKG1vZGFsKTtcblxuICAgICAgICByZXR1cm4gYmc7XG4gICAgfVxufVxuXG52YXIgUHJvamVjdE1hbmFnZW1lbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8vIGFkZGluZyBhIHByb2plY3RcbiAgICBmdW5jdGlvbiBhZGQoY29udGFpbmVyTmFtZSwgcHJvamVjdCwgaWQpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyTmFtZSk7XG5cbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciBwcm9qZWN0VGl0bGVJblByb2plY3RzVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgICAgICB2YXIgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIsIFwibm9zZWxlY3RcIik7XG4gICAgICAgIHJlbW92ZS5jbGFzc0xpc3QuYWRkKFwibm9zZWxlY3RcIiwgXCJyZW1vdmVcIik7XG4gICAgICAgIHByb2plY3RUaXRsZUluUHJvamVjdHNUYWIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGFiLW5hbWVcIik7XG5cbiAgICAgICAgLy8gaW5kaXZpZHVhbCBwcm9qZWN0IHRpdGxlIGZ1bmN0aW9uYWxpdHlcbiAgICAgICAgdmFyIHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKTtcblxuICAgICAgICBldmVudExpc3RlbmVycyhwcm9qZWN0LCBkaXYsIHJlbW92ZSwgaWQsIHByb2plY3RUaXRsZSk7XG5cbiAgICAgICAgcHJvamVjdFRpdGxlSW5Qcm9qZWN0c1RhYi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgcmVtb3ZlLnRleHRDb250ZW50ID0gXCIrXCI7XG5cbiAgICAgICAgZGl2LmFwcGVuZChwcm9qZWN0VGl0bGVJblByb2plY3RzVGFiKTtcbiAgICAgICAgLy8gc28gdGhhdCBtYWluIGNhbm5vdCBiZSByZW1vdmVkXG4gICAgICAgIGlmIChpZCAhPT0gMCkge1xuICAgICAgICAgICAgZGl2LmFwcGVuZChyZW1vdmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChkaXYpO1xuXG4gICAgICAgIC8vIHNldHRpbmdzIHRoZSBkaXYncyBpZFxuICAgICAgICBkaXYuaWQgPSBcInByb2plY3RcIiArIFN0cmluZyhpZCk7XG5cbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlKGlkKSB7XG4gICAgICAgIHZhciBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0XCIgKyBTdHJpbmcoaWQpKTtcbiAgICAgICAgcHJvamVjdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHByb2plY3QpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJldmVhbChidXR0b24pIHtcbiAgICAgICAgYnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAwLjU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhpZGUoYnV0dG9uKSB7XG4gICAgICAgIGJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBldmVudExpc3RlbmVycyhwcm9qZWN0LCBkaXYsIHJlbW92ZSwgaWQpIHtcbiAgICAgICAgLy8gdG8gaGF2ZSB0aGUgcmVtb3ZlIGJ1dHRvbiBzaG93IHVwIHdoZW4gaG92ZXJlZCBvdmVyIG9ubHlcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcmV2ZWFsKHJlbW92ZSk7XG4gICAgICAgICAgICBwcm9qZWN0LmhpZ2hsaWdodCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBoaWRlKHJlbW92ZSk7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5zZWxlY3RlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnVuaGlnaGxpZ2h0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHJlbW92aW5nIGFmdGVyIGNsaWNraW5nIHRoZSByZW1vdmUgYnV0dG9uXG4gICAgICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICByZW1vdmVQcm9qZWN0KGlkKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBtYWtpbmcgaXQgc3RheSBoaWdobGlnaHRlZFxuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaFByb2plY3QoaWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlZGl0UHJvamVjdFRpdGxlKHByb2plY3QpIHtcbiAgICAgICAgaWYgKHByb2plY3QuaWQgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBuZWVkZWQgZWxlbWVudHNcbiAgICAgICAgdmFyIHByb2plY3RUaXRsZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZS1kaXZcIik7XG4gICAgICAgIHZhciBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGVcIik7XG5cbiAgICAgICAgLy8gcmVtb3ZpbmcgdGhlIHByb2plY3QgdGl0bGVcbiAgICAgICAgcHJvamVjdFRpdGxlRGl2LnJlbW92ZUNoaWxkKHByb2plY3RUaXRsZSk7XG5cbiAgICAgICAgLy8gY3JlYXRpbmcgdGhlIGlucHV0IGJveFxuICAgICAgICB2YXIgaW5wdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGlucHV0Qm94LnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgaW5wdXRCb3guc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gICAgICAgIGlucHV0Qm94LnZhbHVlID0gcHJvamVjdC5uYW1lO1xuICAgICAgICBpbnB1dEJveC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZS1pbnB1dFwiKTtcblxuICAgICAgICAvLyBlbnRlciBrZXkgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgaW5wdXRCb3guYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgc2V0UHJvamVjdFRpdGxlKHByb2plY3QsIHByb2plY3RUaXRsZURpdiwgaW5wdXRCb3gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyByZXBsYWNpbmcgdGhlIHRpdGxlXG4gICAgICAgIHByb2plY3RUaXRsZURpdi5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICBpbnB1dEJveCxcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtYWRkXCIpXG4gICAgICAgICk7XG4gICAgICAgIC8vIHNvIGl0IGlzIHNlbGVjdGVkIGF1dG9tYXRpY2FsbHlcbiAgICAgICAgaW5wdXRCb3guc2VsZWN0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0UHJvamVjdFRpdGxlKHByb2plY3QsIHByb2plY3RUaXRsZURpdiwgaW5wdXRCb3gpIHtcbiAgICAgICAgLy8gbGVuZ3RoIGNoZWNrXG4gICAgICAgIHZhciBmaW5lID0gdHJ1ZTtcbiAgICAgICAgdmFyIHNlcGFyYXRlZE5hbWUgPSBpbnB1dEJveC52YWx1ZS5tYXRjaCgvW1xcd10rL2cpO1xuICAgICAgICBzZXBhcmF0ZWROYW1lLmV2ZXJ5KCh3b3JkKSA9PiB7XG4gICAgICAgICAgICBpZiAod29yZC5sZW5ndGggPiBwcm9qZWN0VGl0bGVXb3JkTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZmluZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFmaW5lKSB7XG4gICAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgICAgICBgTWF4IHdvcmQgbGVuZ3RoIGZvciBwcm9qZWN0IG5hbWVzIGlzICR7cHJvamVjdFRpdGxlV29yZExlbmd0aH0gY2hhcmFyYWN0ZXJzYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBpbnB1dEJveC52YWx1ZTtcbiAgICAgICAgLy8gc2V0dGluZyBuZXcgcHJvamVjdCBuYW1lXG4gICAgICAgIHByb2plY3QubmFtZSA9IHZhbHVlO1xuXG4gICAgICAgIC8vIHJlbW92aW5nIGlucHV0Qm94XG4gICAgICAgIHByb2plY3RUaXRsZURpdi5yZW1vdmVDaGlsZChpbnB1dEJveCk7XG5cbiAgICAgICAgLy8gaW5zZXJ0aW5nIGhlYWRpbmcgd2l0aCBuZXcgbmFtZVxuICAgICAgICB2YXIgbmV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIG5ld1RpdGxlLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICAgIG5ld1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRpdGxlXCIpO1xuICAgICAgICBwcm9qZWN0VGl0bGVEaXYuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgbmV3VGl0bGUsXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWFkZFwiKVxuICAgICAgICApO1xuICAgICAgICBuZXdUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZWRpdFByb2plY3RUaXRsZShwcm9qZWN0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZWRpdGluZyBwcm9qZWN0IGluIHByb2plY3QgdGFiXG4gICAgICAgIHZhciBkb21Qcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiI3Byb2plY3RcIiArIFN0cmluZyhwcm9qZWN0LmlkKVxuICAgICAgICApO1xuICAgICAgICBkb21Qcm9qZWN0LmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gdmFsdWU7XG5cbiAgICAgICAgLy8gc2F2ZVxuICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0VGl0bGVFdmVudExpc3RlbmVyKCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKTtcbiAgICAgICAgLy8gY2xvbmUgYW5kIHJlcGxhY2VcbiAgICAgICAgdmFyIG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdFbGVtZW50LCBlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyB0aGlzIGdpdmVzIHRoZSBwcm9qZWN0IHRpdGxlIHRoZSBJTklUSUFMIGV2ZW50IGxpc3RlbmVyLCBiZWNhdXNlIGRlZmF1bHQgcHJvamVjdCBpcyBtYWluIGFuZCBtYWluIGRvZXMgbm90IHJlcXVpcmUgdGhlIGV2ZW50IGxpc3RlbmVyXG4gICAgZnVuY3Rpb24gcmVwbGFjZVByb2plY3RUaXRsZShwcm9qZWN0KSB7XG4gICAgICAgIHZhciBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGVcIik7XG4gICAgICAgIHZhciBuZXdQcm9qZWN0VGl0bGUgPSBwcm9qZWN0VGl0bGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBuZXdQcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0VGl0bGUocHJvamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBwcm9qZWN0VGl0bGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3UHJvamVjdFRpdGxlLCBwcm9qZWN0VGl0bGUpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZCxcbiAgICAgICAgcmVtb3ZlLFxuICAgICAgICByZW1vdmVQcm9qZWN0VGl0bGVFdmVudExpc3RlbmVyLFxuICAgICAgICByZXBsYWNlUHJvamVjdFRpdGxlLFxuICAgIH07XG59KSgpO1xuXG52YXIgVGFza01hbmFnZW1lbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGFkZChjb250YWluZXJOYW1lLCB0YXNrKSB7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lck5hbWUpO1xuXG4gICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICAgICAgdmFyIGNvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgdmFyIHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHZhciBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICAgICAgcmVtb3ZlLnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgICAgIGNvbXBsZXRlLmlubmVySFRNTCA9IFwiJiMxMDAwNDtcIjtcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZGF0ZTtcblxuICAgICAgICAvLyBhZGRpbmcgYWxsIGNsYXNzZXNcbiAgICAgICAgYWRkQ2xhc3NlcyhkaXYsIHJlbW92ZSwgY29tcGxldGUsIHRpdGxlLCBsZWZ0LCByaWdodCwgZGF0ZSk7XG5cbiAgICAgICAgZXZlbnRMaXN0ZW5lcnMoZGl2LCBjb21wbGV0ZSwgcmVtb3ZlLCB0YXNrKTtcblxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cbiAgICAgICAgbGVmdC5hcHBlbmQoY29tcGxldGUsIHRpdGxlKTtcbiAgICAgICAgcmlnaHQuYXBwZW5kKGRhdGUsIHJlbW92ZSk7XG4gICAgICAgIGRpdi5hcHBlbmQobGVmdCwgcmlnaHQpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKGRpdik7XG5cbiAgICAgICAgZGl2LmlkID0gXCJ0YXNrXCIgKyBTdHJpbmcodGFzay5pZCk7XG5cbiAgICAgICAgY2hhbmdlRGF0ZUNvbG9yKHRhc2ssIGRhdGUpO1xuXG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuXG4gICAgLy8gY2hhbmdpbmcgY29sb3VyIGRlcGVuZGluZyBvbiBkYXRlXG4gICAgZnVuY3Rpb24gY2hhbmdlRGF0ZUNvbG9yKHRhc2ssIGRhdGVFbGVtZW50KSB7XG4gICAgICAgIHZhciBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGlmICh0YXNrLmRhdGVPYmplY3QpIHtcbiAgICAgICAgICAgIC8vIGlmIG9uIHRoZSBkYXlcbiAgICAgICAgICAgIGlmIChjdXJyZW50RGF0ZS50b0RhdGVTdHJpbmcoKSA9PT0gdGFzay5kYXRlT2JqZWN0LnRvRGF0ZVN0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgZGF0ZUVsZW1lbnQuc3R5bGUuY29sb3IgPSBcImRhcmtvcmFuZ2VcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIHBhc3RcbiAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnREYXRlID4gdGFzay5kYXRlT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgZGF0ZUVsZW1lbnQuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgZHVlXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRlRWxlbWVudC5zdHlsZS5jb2xvciA9IFwidmFyKC0tcHJpbWFyeSlcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdXNlb3ZlcihidXR0b24pIHtcbiAgICAgICAgYnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAwLjU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1vdXNlb3V0KGJ1dHRvbikge1xuICAgICAgICBidXR0b24uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlKGlkKSB7XG4gICAgICAgIHZhciB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrXCIgKyBTdHJpbmcoaWQpKTtcbiAgICAgICAgdGFzay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhc2spO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWQocHJvamVjdCkge1xuICAgICAgICB2YXIgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpO1xuXG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBhZGQoXCIudGFza3MtY29udGFpbmVyXCIsIHRhc2ssIHRhc2suaWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBldmVudExpc3RlbmVycyhkaXYsIGNvbXBsZXRlLCByZW1vdmUsIHRhc2spIHtcbiAgICAgICAgLy8gdG8gaGF2ZSB0aGUgcmVtb3ZlIGJ1dHRvbiBzaG93IHVwIHdoZW4gaG92ZXJlZCBvdmVyIG9ubHlcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbW91c2VvdmVyKHJlbW92ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICAgICAgICAgIG1vdXNlb3V0KHJlbW92ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIG9wZW5Nb2RhbCh0YXNrKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlVGFzayh0YXNrLmlkKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNvbXBsZXRlIGFuZCBlZGl0IGV2ZW50IGxpc3RlbmVycyAqKipcbiAgICAgICAgY29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyB0ZW1wb3JhcnkgdW50aWwgYWN0dWFsIGNvbXBsZXRpb24gZnVuY3Rpb25hbGl0eSBpcyBhZGRlZFxuICAgICAgICAgICAgcmVtb3ZlVGFzayh0YXNrLmlkKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZENsYXNzZXMoZGl2LCByZW1vdmUsIGNvbXBsZXRlLCB0aXRsZSwgbGVmdCwgcmlnaHQsIGRhdGUpIHtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIsIFwibm9zZWxlY3RcIik7XG4gICAgICAgIHJlbW92ZS5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlXCIsIFwibm9zZWxlY3RcIik7XG4gICAgICAgIGNvbXBsZXRlLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiLCBcIm5vc2VsZWN0XCIpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGFzay10aXRsZVwiKTtcbiAgICAgICAgbGVmdC5jbGFzc0xpc3QuYWRkKFwidGFzay1oYWxmXCIpO1xuICAgICAgICByaWdodC5jbGFzc0xpc3QuYWRkKFwidGFzay1oYWxmXCIpO1xuICAgICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRhdGVcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb3Blbk1vZGFsKHRhc2spIHtcbiAgICAgICAgLy8gbWFraW5nIGl0IGFwcGVhclxuICAgICAgICB2YXIgbW9kYWxCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtYmdcIik7XG4gICAgICAgIG1vZGFsQmcuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICByZXBsYWNlU2F2ZUJ1dHRvbih0YXNrKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLXRpdGxlXCIpLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICAgICAgaWYgKHRhc2suc3RvcmVkRGF0ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1kYXRlXCIpLnZhbHVlID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtZGF0ZVwiKS52YWx1ZSA9IHRhc2suc3RvcmVkRGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWRlc2NyaXB0aW9uXCIpLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlZGl0TW9kYWxUaXRsZSgpIHtcbiAgICAgICAgLy8gbmVlZGVkIGVsZW1lbnRzXG4gICAgICAgIHZhciBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10YXNrLW1vZGFsXCIpO1xuICAgICAgICB2YXIgbW9kYWxUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtdGl0bGVcIik7XG5cbiAgICAgICAgLy8gc2F2aW5nIHRpdGxlXG4gICAgICAgIHZhciB2YWx1ZSA9IG1vZGFsVGl0bGUudGV4dENvbnRlbnQ7XG4gICAgICAgIC8vIHJlbW92aW5nIHRoZSBtb2RhbCB0aXRsZVxuICAgICAgICBtb2RhbC5yZW1vdmVDaGlsZChtb2RhbFRpdGxlKTtcblxuICAgICAgICAvLyBjcmVhdGluZyB0aGUgaW5wdXQgYm94XG4gICAgICAgIHZhciBpbnB1dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXRCb3gudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICBpbnB1dEJveC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgICAgICAgaW5wdXRCb3gudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaW5wdXRCb3guY2xhc3NMaXN0LmFkZChcIm1vZGFsLXRpdGxlLWlucHV0XCIpO1xuXG4gICAgICAgIC8vIGVudGVyIGtleSBldmVudCBsaXN0ZW5lclxuICAgICAgICBpbnB1dEJveC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgICAgICBzZXRNb2RhbFRpdGxlKG1vZGFsLCBpbnB1dEJveCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHJlcGxhY2luZyB0aGUgdGl0bGVcbiAgICAgICAgbW9kYWwuaW5zZXJ0QmVmb3JlKGlucHV0Qm94LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWRhdGVcIikpO1xuICAgICAgICAvLyBzbyBpdCBpcyBzZWxlY3RlZCBhdXRvbWF0aWNhbGx5XG4gICAgICAgIGlucHV0Qm94LnNlbGVjdCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRNb2RhbFRpdGxlKG1vZGFsLCBpbnB1dEJveCkge1xuICAgICAgICB2YXIgZmluZSA9IHRydWU7XG4gICAgICAgIHZhciBzZXBhcmF0ZWRUaXRsZSA9IGlucHV0Qm94LnZhbHVlLm1hdGNoKC9bXFx3XSsvZyk7XG4gICAgICAgIHNlcGFyYXRlZFRpdGxlLmV2ZXJ5KCh3b3JkKSA9PiB7XG4gICAgICAgICAgICBpZiAod29yZC5sZW5ndGggPiB0YXNrVGl0bGVMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmaW5lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFmaW5lKSB7XG4gICAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgICAgICBgTWF4IHdvcmQgbGVuZ3RoIGZvciB0YXNrIHRpdGxlcyBpcyAke3Rhc2tUaXRsZUxlbmd0aH0gY2hhcmFyYWN0ZXJzYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBpbnB1dEJveC52YWx1ZTtcblxuICAgICAgICAvLyByZW1vdmluZyBpbnB1dEJveFxuICAgICAgICBtb2RhbC5yZW1vdmVDaGlsZChpbnB1dEJveCk7XG5cbiAgICAgICAgLy8gaW5zZXJ0aW5nIGhlYWRpbmcgd2l0aCBuZXcgbmFtZVxuICAgICAgICB2YXIgbmV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIG5ld1RpdGxlLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICAgIG5ld1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC10aXRsZVwiKTtcbiAgICAgICAgbW9kYWwuaW5zZXJ0QmVmb3JlKG5ld1RpdGxlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWRhdGVcIikpO1xuICAgICAgICBuZXdUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZWRpdE1vZGFsVGl0bGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIHRoaXMgZ2l2ZXMgdGhlIHNhdmUgYnV0dG9uIHRoZSBldmVudCBsaXN0ZW5lciB0byBhY3R1YWxseSBzYXZlIHRoZSBjaGFuZ2VzIHRvIHRoZSB0aXRsZVxuICAgIGZ1bmN0aW9uIHJlcGxhY2VTYXZlQnV0dG9uKHRhc2spIHtcbiAgICAgICAgdmFyIHNhdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLXNhdmVcIik7XG4gICAgICAgIHZhciBuZXdTYXZlQnV0dG9uID0gc2F2ZUJ1dHRvbi5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIG5ld1NhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHNldFRhc2tEZXRhaWxzKHRhc2spO1xuICAgICAgICB9KTtcbiAgICAgICAgc2F2ZUJ1dHRvbi5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdTYXZlQnV0dG9uLCBzYXZlQnV0dG9uKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRUYXNrRGV0YWlscyh0YXNrKSB7XG4gICAgICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC10aXRsZVwiKSkge1xuICAgICAgICAgICAgc2V0TW9kYWxUaXRsZShcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtdGFzay1tb2RhbFwiKSxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLXRpdGxlLWlucHV0XCIpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNhdmluZyB0byB0aGUgb2JqZWN0XG4gICAgICAgIHRhc2sudGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLXRpdGxlXCIpLnRleHRDb250ZW50O1xuICAgICAgICB0YXNrLnN0b3JlZERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWRhdGVcIikudmFsdWU7XG4gICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuXG4gICAgICAgIC8vIGNoYW5naW5nIHRoZSB0YXNrIGluIHRhc2sgbGlzdFxuICAgICAgICB2YXIgdGFza0xpc3RUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrXCIgKyBTdHJpbmcodGFzay5pZCkpO1xuICAgICAgICB0YXNrTGlzdFRhc2suY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgICB0YXNrTGlzdFRhc2suY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSB0YXNrLmRhdGU7XG5cbiAgICAgICAgLy8gY2xvc2luZyB0aGUgbW9kYWxcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1iZ1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAgICAgLy8gdXBkYXRpbmcgY29sb3Igb2YgZGF0ZVxuICAgICAgICBjaGFuZ2VEYXRlQ29sb3IodGFzaywgdGFza0xpc3RUYXNrLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdKTtcblxuICAgICAgICAvLyBzYXZlIHRvIHN0b3JhZ2VcbiAgICAgICAgcG9wdWxhdGVTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRkLCByZW1vdmUsIGxvYWQsIGVkaXRNb2RhbFRpdGxlIH07XG59KSgpO1xuXG4vLyByZW1vdmVzIGFsbCBvZiBhbiBlbGVtZW50J3NcbmZ1bmN0aW9uIGNsZWFyQ29udGFpbmVyKGVsZW1lbnQpIHtcbiAgICB3aGlsZSAoZWxlbWVudC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBQYWdlQ3JlYXRpb24sIFByb2plY3RNYW5hZ2VtZW50LCBUYXNrTWFuYWdlbWVudCwgY2xlYXJDb250YWluZXIgfTtcbiIsImltcG9ydCB7XG4gICAgUGFnZUNyZWF0aW9uLFxuICAgIFByb2plY3RNYW5hZ2VtZW50LFxuICAgIFRhc2tNYW5hZ2VtZW50LFxuICAgIGNsZWFyQ29udGFpbmVyLFxufSBmcm9tIFwiLi9kb20tc3R1ZmYuanNcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrcy5qc1wiO1xuXG53aW5kb3cuY3VycmVudFByb2plY3RJZCA9IDA7XG52YXIgcHJvamVjdHMgPSBbXTtcblxuLy8gY29uc3RhbnRzXG52YXIgdGFza1RpdGxlTGVuZ3RoID0gMTE7XG52YXIgcHJvamVjdFRpdGxlV29yZExlbmd0aCA9IDEwO1xuXG52YXIgcGFnZSA9IG5ldyBQYWdlQ3JlYXRpb24oXCIjY29udGVudFwiKTtcbnBhZ2UuY3JlYXRlKCk7XG5cbi8vIHRlc3RpbmcgaWYgc3RvcmFnZSBpcyBwb3B1bGF0ZWRcbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkge1xuICAgIC8vIGNyZWF0aW5nIHRoZSBkZWZhdWx0IHByb2plY3RcbiAgICBwcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KFwiR2VuZXJhbFwiLCAwKSk7XG4gICAgcG9wdWxhdGVTdG9yYWdlKHdpbmRvdy5jdXJyZW50UHJvamVjdElkLCBwcm9qZWN0cyk7XG59IGVsc2Uge1xuICAgIHByb2plY3RzID0gc2V0U3R5bGVzKCk7XG59XG5cbi8vIGFkZGluZyB0aGUgbWV0aG9kcyBiYWNrXG4vLyBwcm9qZWN0c1xucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3QudW5oaWdobGlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkb21Qcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0XCIgKyBTdHJpbmcodGhpcy5pZCkpO1xuICAgICAgICBkb21Qcm9qZWN0LnN0eWxlW1wiYmFja2dyb3VuZFwiXSA9IFwicmdiKDIzOCwgMjM4LCAyMzgpXCI7XG4gICAgfTtcbiAgICBwcm9qZWN0LmhpZ2hsaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRvbVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RcIiArIFN0cmluZyh0aGlzLmlkKSk7XG4gICAgICAgIGRvbVByb2plY3Quc3R5bGVbXCJiYWNrZ3JvdW5kXCJdID0gXCJyZ2IoMjAxLCAyMDEsIDIwMSlcIjtcbiAgICB9O1xufSk7XG5cbi8vIHRhc2tzXG5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXNrLCBcImRhdGVcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RvcmVkRGF0ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJubyBkYXRlXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBkYXRlT2JqZWN0ID0gbmV3IERhdGUodGhpcy5zdG9yZWREYXRlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZU9iamVjdC50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXNrLCBcImRhdGVPYmplY3RcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RvcmVkRGF0ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBkYXRlT2JqZWN0ID0gbmV3IERhdGUodGhpcy5zdG9yZWREYXRlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZU9iamVjdDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5cbi8vIGxvYWRpbmcgcHJvamVjdHNcbnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBQcm9qZWN0TWFuYWdlbWVudC5hZGQoXCIucHJvamVjdHMtY29udGFpbmVyXCIsIHByb2plY3QsIHByb2plY3QuaWQpO1xufSk7XG5cbnN3aXRjaFByb2plY3Qod2luZG93LmN1cnJlbnRQcm9qZWN0SWQpO1xuXG4vLyBsb2NhbFN0b3JhZ2Ugc3R1ZmZcbmZ1bmN0aW9uIHBvcHVsYXRlU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgXCJjdXJyZW50UHJvamVjdElkXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5jdXJyZW50UHJvamVjdElkKVxuICAgICk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5mdW5jdGlvbiBzZXRTdHlsZXMoKSB7XG4gICAgdmFyIGN1cnJlbnRQcm9qZWN0SWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50UHJvamVjdElkXCIpO1xuICAgIHdpbmRvdy5jdXJyZW50UHJvamVjdElkID0gSlNPTi5wYXJzZShjdXJyZW50UHJvamVjdElkRGF0YSk7XG4gICAgdmFyIHByb2plY3RzRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIik7XG4gICAgcHJvamVjdHMgPSBKU09OLnBhcnNlKHByb2plY3RzRGF0YSk7XG4gICAgcmV0dXJuIHByb2plY3RzO1xufVxuXG4vLyBhZGRpbmcgYSBwcm9qZWN0IHRvIHRoZSBsaXN0XG5mdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICAgIHZhciBuYW1lID0gcHJvbXB0KFwiRW50ZXIgUHJvamVjdCBuYW1lXCIpO1xuICAgIGlmIChuYW1lID09PSBcIlwiIHx8IG5hbWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZmluZSA9IHRydWU7XG4gICAgdmFyIHNlcGFyYXRlZE5hbWUgPSBuYW1lLm1hdGNoKC9bXFx3XSsvZyk7XG4gICAgc2VwYXJhdGVkTmFtZS5ldmVyeSgod29yZCkgPT4ge1xuICAgICAgICBpZiAod29yZC5sZW5ndGggPiBwcm9qZWN0VGl0bGVXb3JkTGVuZ3RoKSB7XG4gICAgICAgICAgICBmaW5lID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIWZpbmUpIHtcbiAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICBgTWF4IHdvcmQgbGVuZ3RoIGZvciBwcm9qZWN0IG5hbWVzIGlzICR7cHJvamVjdFRpdGxlV29yZExlbmd0aH0gY2hhcmFyYWN0ZXJzYFxuICAgICAgICApO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGlkID0gMDtcbiAgICB3aGlsZSAocHJvamVjdHMuc29tZSgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gaWQpKSB7XG4gICAgICAgIGlkKys7XG4gICAgfVxuXG4gICAgcHJvamVjdHMucHVzaChuZXcgUHJvamVjdChuYW1lLCBpZCkpO1xuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgRE9NXG4gICAgUHJvamVjdE1hbmFnZW1lbnQuYWRkKFxuICAgICAgICBcIi5wcm9qZWN0cy1jb250YWluZXJcIixcbiAgICAgICAgcHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV0sXG4gICAgICAgIGlkXG4gICAgKTtcblxuICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xufVxuXG4vLyByZW1vdmluZyBhIHByb2plY3QgZnJvbSB0aGUgRE9NIGFuZCBwcm9qZWN0cyBsaXN0XG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0KGlkKSB7XG4gICAgdmFyIGluZGV4ID0gZmluZFByb2plY3RJbmRleChwcm9qZWN0cywgaWQpO1xuXG4gICAgLy8gY2hlY2tpbmcgaWYgaXQgd2FzIHNlbGVjdGVkXG4gICAgdmFyIGlzU2VsZWN0ZWQgPSBwcm9qZWN0c1tpbmRleF0uc2VsZWN0ZWQ7XG5cbiAgICAvLyByZW1vdmluZyBmcm9tIHRoZSBET01cbiAgICBQcm9qZWN0TWFuYWdlbWVudC5yZW1vdmUoaWQpO1xuXG4gICAgLy8gcmVtb3ZpbmcgZnJvbSBwcm9qZWN0cyBsaXN0XG4gICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIC8vIHN3aXRjaGluZyB0byB0aGUgcHJvamVjdCBhZnRlciByZW1vdmFsIGlmIGl0IHdhcyBzZWxlY3RlZFxuICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICAgIHN3aXRjaFByb2plY3QocHJvamVjdHNbaW5kZXggLSAxXS5pZCk7XG4gICAgfVxuICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hQcm9qZWN0KGlkKSB7XG4gICAgLy8gY2hhbmdpbmcgdGhlIGN1cnJlbnQgcHJvamVjdFxuICAgIHdpbmRvdy5jdXJyZW50UHJvamVjdElkID0gaWQ7XG5cbiAgICB2YXIgaW5kZXggPSBmaW5kUHJvamVjdEluZGV4KHByb2plY3RzLCBpZCk7XG5cbiAgICAvLyByZXBsYWNpbmcgdGhlIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSBwcm9qZWN0IHRpdGxlXG4gICAgUHJvamVjdE1hbmFnZW1lbnQucmVwbGFjZVByb2plY3RUaXRsZShwcm9qZWN0c1tpbmRleF0pO1xuXG4gICAgLy8gaGlnaGxpZ2h0aW5nIGN1cnJlbnQgdGFzayBhbmQgdW5oaWdobGlnaHRpbmcgdGhlIHJlc3RcbiAgICBwcm9qZWN0c1tpbmRleF0uaGlnaGxpZ2h0KCk7XG4gICAgcHJvamVjdHNbaW5kZXhdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0LmlkICE9PSBpZCkge1xuICAgICAgICAgICAgcHJvamVjdC51bmhpZ2hsaWdodCgpO1xuICAgICAgICAgICAgcHJvamVjdC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBjbGVhcmluZyBhbGwgdGhlIHRhc2tzXG4gICAgdmFyIHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1jb250YWluZXJcIik7XG4gICAgY2xlYXJDb250YWluZXIodGFza3NDb250YWluZXIpO1xuXG4gICAgLy8gbG9hZGluZyBhbGwgcHJvamVjdCdzIHRhc2tzXG4gICAgVGFza01hbmFnZW1lbnQubG9hZChwcm9qZWN0c1tpbmRleF0pO1xuXG4gICAgLy8gcmVtb3ZpbmcgZXZlbnQgbGlzdGVuZXIgb24gdGl0bGUgaWYgbWFpblxuICAgIGlmIChpZCA9PT0gMCkge1xuICAgICAgICBQcm9qZWN0TWFuYWdlbWVudC5yZW1vdmVQcm9qZWN0VGl0bGVFdmVudExpc3RlbmVyKCk7XG4gICAgfVxuICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrKCkge1xuICAgIHZhciB0aXRsZSA9IHByb21wdChcIkVudGVyIFRhc2sgTmFtZVwiKTtcbiAgICBpZiAodGl0bGUgPT09IFwiXCIgfHwgdGl0bGUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZmluZSA9IHRydWU7XG4gICAgdmFyIHNlcGFyYXRlZFRpdGxlID0gdGl0bGUubWF0Y2goL1tcXHddKy9nKTtcbiAgICBzZXBhcmF0ZWRUaXRsZS5ldmVyeSgod29yZCkgPT4ge1xuICAgICAgICBpZiAod29yZC5sZW5ndGggPiB0YXNrVGl0bGVMZW5ndGgpIHtcbiAgICAgICAgICAgIGZpbmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghZmluZSkge1xuICAgICAgICBhbGVydChcbiAgICAgICAgICAgIGBNYXggd29yZCBsZW5ndGggZm9yIHRhc2sgdGl0bGVzIGlzICR7dGFza1RpdGxlTGVuZ3RofSBjaGFyYXJhY3RlcnNgXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvamVjdEluZGV4ID0gZmluZFByb2plY3RJbmRleChwcm9qZWN0cywgd2luZG93LmN1cnJlbnRQcm9qZWN0SWQpO1xuICAgIHZhciBpZCA9IDA7XG4gICAgLy8ga2VlcCBpbmNyZW1lbnRpbmcgaWQgdW50aWwgbm8gdGFza3Mgc2hhcmUgdGhlIGlkXG4gICAgLy8gdGhlcmVmb3JlIGlkIHdpbGwgYWx3YXlzIGJlIHVuaXF1ZSB0byB0aGUgcHJvamVjdHNcbiAgICB3aGlsZSAoXG4gICAgICAgIHByb2plY3RzLnNvbWUoKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0LnRhc2tzLnNvbWUoKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFzay5pZCA9PSBpZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICkge1xuICAgICAgICBpZCsrO1xuICAgIH1cblxuICAgIC8vIGFkZGluZyB0aGUgdGFzayB0byB0aGUgcHJvamVjdFxuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3MucHVzaChuZXcgVGFzayh0aXRsZSwgaWQpKTtcblxuICAgIFRhc2tNYW5hZ2VtZW50LmFkZChcbiAgICAgICAgXCIudGFza3MtY29udGFpbmVyXCIsXG4gICAgICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5sZW5ndGggLSAxXVxuICAgICk7XG5cbiAgICAvLyBzYXZlXG4gICAgcG9wdWxhdGVTdG9yYWdlKCk7XG59XG5mdW5jdGlvbiByZW1vdmVUYXNrKGlkKSB7XG4gICAgVGFza01hbmFnZW1lbnQucmVtb3ZlKGlkKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2suaWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnRhc2tzID0gcHJvamVjdC50YXNrcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIChmaWx0ZXJUYXNrKSA9PiB0YXNrICE9PSBmaWx0ZXJUYXNrXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcG9wdWxhdGVTdG9yYWdlKCk7XG59XG5cbmV4cG9ydCB7XG4gICAgYWRkUHJvamVjdCxcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIGFkZFRhc2ssXG4gICAgcmVtb3ZlVGFzayxcbiAgICBzd2l0Y2hQcm9qZWN0LFxuICAgIHBvcHVsYXRlU3RvcmFnZSxcbiAgICB0YXNrVGl0bGVMZW5ndGgsXG4gICAgcHJvamVjdFRpdGxlV29yZExlbmd0aCxcbn07XG5cbmZ1bmN0aW9uIGZpbmRQcm9qZWN0SW5kZXgocHJvamVjdHMsIGlkKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJvamVjdHNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGlkKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdW5oaWdobGlnaHQoKSB7XG4gICAgICAgIHZhciBkb21Qcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0XCIgKyBTdHJpbmcodGhpcy5pZCkpO1xuICAgICAgICBkb21Qcm9qZWN0LnN0eWxlW1wiYmFja2dyb3VuZFwiXSA9IFwicmdiKDIzOCwgMjM4LCAyMzgpXCI7XG4gICAgfVxuICAgIGhpZ2hsaWdodCgpIHtcbiAgICAgICAgdmFyIGRvbVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RcIiArIFN0cmluZyh0aGlzLmlkKSk7XG4gICAgICAgIGRvbVByb2plY3Quc3R5bGVbXCJiYWNrZ3JvdW5kXCJdID0gXCJyZ2IoMjAxLCAyMDEsIDIwMSlcIjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgaWQpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIlwiO1xuICAgICAgICB0aGlzLnN0b3JlZERhdGUgPSBcIlwiO1xuICAgIH1cblxuICAgIGdldCBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5zdG9yZWREYXRlID09PSBcIlwiKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJubyBkYXRlXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRhdGVPYmplY3QgPSBuZXcgRGF0ZSh0aGlzLnN0b3JlZERhdGUpO1xuICAgICAgICByZXR1cm4gZGF0ZU9iamVjdC50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgICB9XG5cbiAgICBnZXQgZGF0ZU9iamVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RvcmVkRGF0ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkYXRlT2JqZWN0ID0gbmV3IERhdGUodGhpcy5zdG9yZWREYXRlKTtcbiAgICAgICAgcmV0dXJuIGRhdGVPYmplY3Q7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9