(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["examples-app"],{

/***/ "../packages/@shopify/draggable/index.js":
/*!***********************************************!*\
  !*** ../packages/@shopify/draggable/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "../node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : (0, _typeof3.default)(exports)) === 'object' && ( false ? undefined : (0, _typeof3.default)(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(window, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
          /******/
        }
        /******/
      };
      /******/
      /******/ // define __esModule on exports
      /******/__webpack_require__.r = function (exports) {
        /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
          /******/
        }
        /******/Object.defineProperty(exports, '__esModule', { value: true });
        /******/
      };
      /******/
      /******/ // create a fake namespace object
      /******/ // mode & 1: value is a module id, require it
      /******/ // mode & 2: merge all properties of value into the ns
      /******/ // mode & 4: return value when already ns object
      /******/ // mode & 8|1: behave like require
      /******/__webpack_require__.t = function (value, mode) {
        /******/if (mode & 1) value = __webpack_require__(value);
        /******/if (mode & 8) return value;
        /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object' && value && value.__esModule) return value;
        /******/var ns = Object.create(null);
        /******/__webpack_require__.r(ns);
        /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        /******/if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        } /******/return ns;
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = "./src/index.js");
      /******/
    }(
    /************************************************************************/
    /******/{

      /***/"./src/Draggable/DragEvent/DragEvent.js":
      /*!**********************************************!*\
        !*** ./src/Draggable/DragEvent/DragEvent.js ***!
        \**********************************************/
      /*! no static exports found */
      /***/function srcDraggableDragEventDragEventJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.DragStopEvent = exports.DragPressureEvent = exports.DragOutContainerEvent = exports.DragOverContainerEvent = exports.DragOutEvent = exports.DragOverEvent = exports.DragMoveEvent = exports.DragStartEvent = exports.DragEvent = undefined;\n\nvar _AbstractEvent = __webpack_require__(/*! shared/AbstractEvent */ \"./src/shared/AbstractEvent/index.js\");\n\nvar _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Base drag event\n * @class DragEvent\n * @module DragEvent\n * @extends AbstractEvent\n */\nclass DragEvent extends _AbstractEvent2.default {\n\n  /**\n   * Draggables source element\n   * @property source\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get source() {\n    return this.data.source;\n  }\n\n  /**\n   * Draggables original source element\n   * @property originalSource\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get originalSource() {\n    return this.data.originalSource;\n  }\n\n  /**\n   * Draggables mirror element\n   * @property mirror\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get mirror() {\n    return this.data.mirror;\n  }\n\n  /**\n   * Draggables source container element\n   * @property sourceContainer\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get sourceContainer() {\n    return this.data.sourceContainer;\n  }\n\n  /**\n   * Sensor event\n   * @property sensorEvent\n   * @type {SensorEvent}\n   * @readonly\n   */\n  get sensorEvent() {\n    return this.data.sensorEvent;\n  }\n\n  /**\n   * Original event that triggered sensor event\n   * @property originalEvent\n   * @type {Event}\n   * @readonly\n   */\n  get originalEvent() {\n    if (this.sensorEvent) {\n      return this.sensorEvent.originalEvent;\n    }\n\n    return null;\n  }\n}\n\nexports.DragEvent = DragEvent; /**\n                                * Drag start event\n                                * @class DragStartEvent\n                                * @module DragStartEvent\n                                * @extends DragEvent\n                                */\n\nDragEvent.type = 'drag';\nclass DragStartEvent extends DragEvent {}\n\nexports.DragStartEvent = DragStartEvent; /**\n                                          * Drag move event\n                                          * @class DragMoveEvent\n                                          * @module DragMoveEvent\n                                          * @extends DragEvent\n                                          */\n\nDragStartEvent.type = 'drag:start';\nDragStartEvent.cancelable = true;\nclass DragMoveEvent extends DragEvent {}\n\nexports.DragMoveEvent = DragMoveEvent; /**\n                                        * Drag over event\n                                        * @class DragOverEvent\n                                        * @module DragOverEvent\n                                        * @extends DragEvent\n                                        */\n\nDragMoveEvent.type = 'drag:move';\nclass DragOverEvent extends DragEvent {\n\n  /**\n   * Draggable container you are over\n   * @property overContainer\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get overContainer() {\n    return this.data.overContainer;\n  }\n\n  /**\n   * Draggable element you are over\n   * @property over\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get over() {\n    return this.data.over;\n  }\n}\n\nexports.DragOverEvent = DragOverEvent; /**\n                                        * Drag out event\n                                        * @class DragOutEvent\n                                        * @module DragOutEvent\n                                        * @extends DragEvent\n                                        */\n\nDragOverEvent.type = 'drag:over';\nDragOverEvent.cancelable = true;\nclass DragOutEvent extends DragEvent {\n\n  /**\n   * Draggable container you are over\n   * @property overContainer\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get overContainer() {\n    return this.data.overContainer;\n  }\n\n  /**\n   * Draggable element you left\n   * @property over\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get over() {\n    return this.data.over;\n  }\n}\n\nexports.DragOutEvent = DragOutEvent; /**\n                                      * Drag over container event\n                                      * @class DragOverContainerEvent\n                                      * @module DragOverContainerEvent\n                                      * @extends DragEvent\n                                      */\n\nDragOutEvent.type = 'drag:out';\nclass DragOverContainerEvent extends DragEvent {\n\n  /**\n   * Draggable container you are over\n   * @property overContainer\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get overContainer() {\n    return this.data.overContainer;\n  }\n}\n\nexports.DragOverContainerEvent = DragOverContainerEvent; /**\n                                                          * Drag out container event\n                                                          * @class DragOutContainerEvent\n                                                          * @module DragOutContainerEvent\n                                                          * @extends DragEvent\n                                                          */\n\nDragOverContainerEvent.type = 'drag:over:container';\nclass DragOutContainerEvent extends DragEvent {\n\n  /**\n   * Draggable container you left\n   * @property overContainer\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get overContainer() {\n    return this.data.overContainer;\n  }\n}\n\nexports.DragOutContainerEvent = DragOutContainerEvent; /**\n                                                        * Drag pressure event\n                                                        * @class DragPressureEvent\n                                                        * @module DragPressureEvent\n                                                        * @extends DragEvent\n                                                        */\n\nDragOutContainerEvent.type = 'drag:out:container';\nclass DragPressureEvent extends DragEvent {\n\n  /**\n   * Pressure applied on draggable element\n   * @property pressure\n   * @type {Number}\n   * @readonly\n   */\n  get pressure() {\n    return this.data.pressure;\n  }\n}\n\nexports.DragPressureEvent = DragPressureEvent; /**\n                                                * Drag stop event\n                                                * @class DragStopEvent\n                                                * @module DragStopEvent\n                                                * @extends DragEvent\n                                                */\n\nDragPressureEvent.type = 'drag:pressure';\nclass DragStopEvent extends DragEvent {}\nexports.DragStopEvent = DragStopEvent;\nDragStopEvent.type = 'drag:stop';\n\n//# sourceURL=webpack://Draggable/./src/Draggable/DragEvent/DragEvent.js?");

        /***/
      },

      /***/"./src/Draggable/DragEvent/index.js":
      /*!******************************************!*\
        !*** ./src/Draggable/DragEvent/index.js ***!
        \******************************************/
      /*! no static exports found */
      /***/function srcDraggableDragEventIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _DragEvent = __webpack_require__(/*! ./DragEvent */ \"./src/Draggable/DragEvent/DragEvent.js\");\n\nObject.keys(_DragEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _DragEvent[key];\n    }\n  });\n});\n\n//# sourceURL=webpack://Draggable/./src/Draggable/DragEvent/index.js?");

        /***/
      },

      /***/"./src/Draggable/Draggable.js":
      /*!************************************!*\
        !*** ./src/Draggable/Draggable.js ***!
        \************************************/
      /*! no static exports found */
      /***/function srcDraggableDraggableJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.defaultOptions = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _utils = __webpack_require__(/*! shared/utils */ \"./src/shared/utils/index.js\");\n\nvar _Plugins = __webpack_require__(/*! ./Plugins */ \"./src/Draggable/Plugins/index.js\");\n\nvar _Emitter = __webpack_require__(/*! ./Emitter */ \"./src/Draggable/Emitter/index.js\");\n\nvar _Emitter2 = _interopRequireDefault(_Emitter);\n\nvar _Sensors = __webpack_require__(/*! ./Sensors */ \"./src/Draggable/Sensors/index.js\");\n\nvar _DraggableEvent = __webpack_require__(/*! ./DraggableEvent */ \"./src/Draggable/DraggableEvent/index.js\");\n\nvar _DragEvent = __webpack_require__(/*! ./DragEvent */ \"./src/Draggable/DragEvent/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onDragStart = Symbol('onDragStart');\nconst onDragMove = Symbol('onDragMove');\nconst onDragStop = Symbol('onDragStop');\nconst onDragPressure = Symbol('onDragPressure');\n\n/**\n * @const {Object} defaultAnnouncements\n * @const {Function} defaultAnnouncements['drag:start']\n * @const {Function} defaultAnnouncements['drag:stop']\n */\nconst defaultAnnouncements = {\n  'drag:start': event => `Picked up ${event.source.textContent.trim() || event.source.id || 'draggable element'}`,\n  'drag:stop': event => `Released ${event.source.textContent.trim() || event.source.id || 'draggable element'}`\n};\n\nconst defaultClasses = {\n  'container:dragging': 'draggable-container--is-dragging',\n  'source:dragging': 'draggable-source--is-dragging',\n  'source:placed': 'draggable-source--placed',\n  'container:placed': 'draggable-container--placed',\n  'body:dragging': 'draggable--is-dragging',\n  'draggable:over': 'draggable--over',\n  'container:over': 'draggable-container--over',\n  'source:original': 'draggable--original',\n  mirror: 'draggable-mirror'\n};\n\nconst defaultOptions = exports.defaultOptions = {\n  draggable: '.draggable-source',\n  handle: null,\n  delay: 100,\n  placedTimeout: 800,\n  plugins: [],\n  sensors: []\n};\n\n/**\n * This is the core draggable library that does the heavy lifting\n * @class Draggable\n * @module Draggable\n */\nclass Draggable {\n\n  /**\n   * Draggable constructor.\n   * @constructs Draggable\n   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Draggable containers\n   * @param {Object} options - Options for draggable\n   */\n  constructor(containers = [document.body], options = {}) {\n    /**\n     * Draggable containers\n     * @property containers\n     * @type {HTMLElement[]}\n     */\n    if (containers instanceof NodeList || containers instanceof Array) {\n      this.containers = [...containers];\n    } else if (containers instanceof HTMLElement) {\n      this.containers = [containers];\n    } else {\n      throw new Error('Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`');\n    }\n\n    this.options = _extends({}, defaultOptions, options, {\n      classes: _extends({}, defaultClasses, options.classes || {}),\n      announcements: _extends({}, defaultAnnouncements, options.announcements || {})\n    });\n\n    /**\n     * Draggables event emitter\n     * @property emitter\n     * @type {Emitter}\n     */\n    this.emitter = new _Emitter2.default();\n\n    /**\n     * Current drag state\n     * @property dragging\n     * @type {Boolean}\n     */\n    this.dragging = false;\n\n    /**\n     * Active plugins\n     * @property plugins\n     * @type {Plugin[]}\n     */\n    this.plugins = [];\n\n    /**\n     * Active sensors\n     * @property sensors\n     * @type {Sensor[]}\n     */\n    this.sensors = [];\n\n    this[onDragStart] = this[onDragStart].bind(this);\n    this[onDragMove] = this[onDragMove].bind(this);\n    this[onDragStop] = this[onDragStop].bind(this);\n    this[onDragPressure] = this[onDragPressure].bind(this);\n\n    document.addEventListener('drag:start', this[onDragStart], true);\n    document.addEventListener('drag:move', this[onDragMove], true);\n    document.addEventListener('drag:stop', this[onDragStop], true);\n    document.addEventListener('drag:pressure', this[onDragPressure], true);\n\n    const defaultPlugins = Object.values(Draggable.Plugins).map(Plugin => Plugin);\n    const defaultSensors = [_Sensors.MouseSensor, _Sensors.TouchSensor];\n\n    this.addPlugin(...[...defaultPlugins, ...this.options.plugins]);\n    this.addSensor(...[...defaultSensors, ...this.options.sensors]);\n\n    const draggableInitializedEvent = new _DraggableEvent.DraggableInitializedEvent({\n      draggable: this\n    });\n\n    this.on('mirror:created', ({ mirror }) => this.mirror = mirror);\n    this.on('mirror:destroy', () => this.mirror = null);\n\n    this.trigger(draggableInitializedEvent);\n  }\n\n  /**\n   * Destroys Draggable instance. This removes all internal event listeners and\n   * deactivates sensors and plugins\n   */\n\n  /**\n   * Default plugins draggable uses\n   * @static\n   * @property {Object} Plugins\n   * @property {Announcement} Plugins.Announcement\n   * @property {Focusable} Plugins.Focusable\n   * @property {Mirror} Plugins.Mirror\n   * @property {Scrollable} Plugins.Scrollable\n   * @type {Object}\n   */\n  destroy() {\n    document.removeEventListener('drag:start', this[onDragStart], true);\n    document.removeEventListener('drag:move', this[onDragMove], true);\n    document.removeEventListener('drag:stop', this[onDragStop], true);\n    document.removeEventListener('drag:pressure', this[onDragPressure], true);\n\n    const draggableDestroyEvent = new _DraggableEvent.DraggableDestroyEvent({\n      draggable: this\n    });\n\n    this.trigger(draggableDestroyEvent);\n\n    this.removePlugin(...this.plugins.map(plugin => plugin.constructor));\n    this.removeSensor(...this.sensors.map(sensor => sensor.constructor));\n  }\n\n  /**\n   * Adds plugin to this draggable instance. This will end up calling the attach method of the plugin\n   * @param {...typeof Plugin} plugins - Plugins that you want attached to draggable\n   * @return {Draggable}\n   * @example draggable.addPlugin(CustomA11yPlugin, CustomMirrorPlugin)\n   */\n  addPlugin(...plugins) {\n    const activePlugins = plugins.map(Plugin => new Plugin(this));\n\n    activePlugins.forEach(plugin => plugin.attach());\n    this.plugins = [...this.plugins, ...activePlugins];\n\n    return this;\n  }\n\n  /**\n   * Removes plugins that are already attached to this draggable instance. This will end up calling\n   * the detach method of the plugin\n   * @param {...typeof Plugin} plugins - Plugins that you want detached from draggable\n   * @return {Draggable}\n   * @example draggable.removePlugin(MirrorPlugin, CustomMirrorPlugin)\n   */\n  removePlugin(...plugins) {\n    const removedPlugins = this.plugins.filter(plugin => plugins.includes(plugin.constructor));\n\n    removedPlugins.forEach(plugin => plugin.detach());\n    this.plugins = this.plugins.filter(plugin => !plugins.includes(plugin.constructor));\n\n    return this;\n  }\n\n  /**\n   * Adds sensors to this draggable instance. This will end up calling the attach method of the sensor\n   * @param {...typeof Sensor} sensors - Sensors that you want attached to draggable\n   * @return {Draggable}\n   * @example draggable.addSensor(ForceTouchSensor, CustomSensor)\n   */\n  addSensor(...sensors) {\n    const activeSensors = sensors.map(Sensor => new Sensor(this.containers, this.options));\n\n    activeSensors.forEach(sensor => sensor.attach());\n    this.sensors = [...this.sensors, ...activeSensors];\n\n    return this;\n  }\n\n  /**\n   * Removes sensors that are already attached to this draggable instance. This will end up calling\n   * the detach method of the sensor\n   * @param {...typeof Sensor} sensors - Sensors that you want attached to draggable\n   * @return {Draggable}\n   * @example draggable.removeSensor(TouchSensor, DragSensor)\n   */\n  removeSensor(...sensors) {\n    const removedSensors = this.sensors.filter(sensor => sensors.includes(sensor.constructor));\n\n    removedSensors.forEach(sensor => sensor.detach());\n    this.sensors = this.sensors.filter(sensor => !sensors.includes(sensor.constructor));\n\n    return this;\n  }\n\n  /**\n   * Adds container to this draggable instance\n   * @param {...HTMLElement} containers - Containers you want to add to draggable\n   * @return {Draggable}\n   * @example draggable.addContainer(document.body)\n   */\n  addContainer(...containers) {\n    this.containers = [...this.containers, ...containers];\n    this.sensors.forEach(sensor => sensor.addContainer(...containers));\n    return this;\n  }\n\n  /**\n   * Removes container from this draggable instance\n   * @param {...HTMLElement} containers - Containers you want to remove from draggable\n   * @return {Draggable}\n   * @example draggable.removeContainer(document.body)\n   */\n  removeContainer(...containers) {\n    this.containers = this.containers.filter(container => !containers.includes(container));\n    this.sensors.forEach(sensor => sensor.removeContainer(...containers));\n    return this;\n  }\n\n  /**\n   * Adds listener for draggable events\n   * @param {String} type - Event name\n   * @param {...Function} callbacks - Event callbacks\n   * @return {Draggable}\n   * @example draggable.on('drag:start', (dragEvent) => dragEvent.cancel());\n   */\n  on(type, ...callbacks) {\n    this.emitter.on(type, ...callbacks);\n    return this;\n  }\n\n  /**\n   * Removes listener from draggable\n   * @param {String} type - Event name\n   * @param {Function} callback - Event callback\n   * @return {Draggable}\n   * @example draggable.off('drag:start', handlerFunction);\n   */\n  off(type, callback) {\n    this.emitter.off(type, callback);\n    return this;\n  }\n\n  /**\n   * Triggers draggable event\n   * @param {AbstractEvent} event - Event instance\n   * @return {Draggable}\n   * @example draggable.trigger(event);\n   */\n  trigger(event) {\n    this.emitter.trigger(event);\n    return this;\n  }\n\n  /**\n   * Returns class name for class identifier\n   * @param {String} name - Name of class identifier\n   * @return {String|null}\n   */\n  getClassNameFor(name) {\n    return this.options.classes[name];\n  }\n\n  /**\n   * Returns true if this draggable instance is currently dragging\n   * @return {Boolean}\n   */\n  isDragging() {\n    return Boolean(this.dragging);\n  }\n\n  /**\n   * Returns all draggable elements\n   * @return {HTMLElement[]}\n   */\n  getDraggableElements() {\n    return this.containers.reduce((current, container) => {\n      return [...current, ...this.getDraggableElementsForContainer(container)];\n    }, []);\n  }\n\n  /**\n   * Returns draggable elements for a given container, excluding the mirror and\n   * original source element if present\n   * @param {HTMLElement} container\n   * @return {HTMLElement[]}\n   */\n  getDraggableElementsForContainer(container) {\n    const allDraggableElements = container.querySelectorAll(this.options.draggable);\n\n    return [...allDraggableElements].filter(childElement => {\n      return childElement !== this.originalSource && childElement !== this.mirror;\n    });\n  }\n\n  /**\n   * Drag start handler\n   * @private\n   * @param {Event} event - DOM Drag event\n   */\n  [onDragStart](event) {\n    const sensorEvent = getSensorEvent(event);\n    const { target, container } = sensorEvent;\n\n    if (!this.containers.includes(container)) {\n      return;\n    }\n\n    if (this.options.handle && target && !(0, _utils.closest)(target, this.options.handle)) {\n      sensorEvent.cancel();\n      return;\n    }\n\n    // Find draggable source element\n    this.originalSource = (0, _utils.closest)(target, this.options.draggable);\n    this.sourceContainer = container;\n\n    if (!this.originalSource) {\n      sensorEvent.cancel();\n      return;\n    }\n\n    if (this.lastPlacedSource && this.lastPlacedContainer) {\n      clearTimeout(this.placedTimeoutID);\n      this.lastPlacedSource.classList.remove(this.getClassNameFor('source:placed'));\n      this.lastPlacedContainer.classList.remove(this.getClassNameFor('container:placed'));\n    }\n\n    this.source = this.originalSource.cloneNode(true);\n    this.originalSource.parentNode.insertBefore(this.source, this.originalSource);\n    this.originalSource.style.display = 'none';\n\n    const dragEvent = new _DragEvent.DragStartEvent({\n      source: this.source,\n      originalSource: this.originalSource,\n      sourceContainer: container,\n      sensorEvent\n    });\n\n    this.trigger(dragEvent);\n\n    this.dragging = !dragEvent.canceled();\n\n    if (dragEvent.canceled()) {\n      this.source.parentNode.removeChild(this.source);\n      this.originalSource.style.display = null;\n      return;\n    }\n\n    this.originalSource.classList.add(this.getClassNameFor('source:original'));\n    this.source.classList.add(this.getClassNameFor('source:dragging'));\n    this.sourceContainer.classList.add(this.getClassNameFor('container:dragging'));\n    document.body.classList.add(this.getClassNameFor('body:dragging'));\n    applyUserSelect(document.body, 'none');\n\n    requestAnimationFrame(() => {\n      const oldSensorEvent = getSensorEvent(event);\n      const newSensorEvent = oldSensorEvent.clone({ target: this.source });\n\n      this[onDragMove](_extends({}, event, {\n        detail: newSensorEvent\n      }));\n    });\n  }\n\n  /**\n   * Drag move handler\n   * @private\n   * @param {Event} event - DOM Drag event\n   */\n  [onDragMove](event) {\n    if (!this.dragging) {\n      return;\n    }\n\n    const sensorEvent = getSensorEvent(event);\n    const { container } = sensorEvent;\n    let target = sensorEvent.target;\n\n    const dragMoveEvent = new _DragEvent.DragMoveEvent({\n      source: this.source,\n      originalSource: this.originalSource,\n      sourceContainer: container,\n      sensorEvent\n    });\n\n    this.trigger(dragMoveEvent);\n\n    if (dragMoveEvent.canceled()) {\n      sensorEvent.cancel();\n    }\n\n    target = (0, _utils.closest)(target, this.options.draggable);\n    const withinCorrectContainer = (0, _utils.closest)(sensorEvent.target, this.containers);\n    const overContainer = sensorEvent.overContainer || withinCorrectContainer;\n    const isLeavingContainer = this.currentOverContainer && overContainer !== this.currentOverContainer;\n    const isLeavingDraggable = this.currentOver && target !== this.currentOver;\n    const isOverContainer = overContainer && this.currentOverContainer !== overContainer;\n    const isOverDraggable = withinCorrectContainer && target && this.currentOver !== target;\n\n    if (isLeavingDraggable) {\n      const dragOutEvent = new _DragEvent.DragOutEvent({\n        source: this.source,\n        originalSource: this.originalSource,\n        sourceContainer: container,\n        sensorEvent,\n        over: this.currentOver\n      });\n\n      this.currentOver.classList.remove(this.getClassNameFor('draggable:over'));\n      this.currentOver = null;\n\n      this.trigger(dragOutEvent);\n    }\n\n    if (isLeavingContainer) {\n      const dragOutContainerEvent = new _DragEvent.DragOutContainerEvent({\n        source: this.source,\n        originalSource: this.originalSource,\n        sourceContainer: container,\n        sensorEvent,\n        overContainer: this.currentOverContainer\n      });\n\n      this.currentOverContainer.classList.remove(this.getClassNameFor('container:over'));\n      this.currentOverContainer = null;\n\n      this.trigger(dragOutContainerEvent);\n    }\n\n    if (isOverContainer) {\n      overContainer.classList.add(this.getClassNameFor('container:over'));\n\n      const dragOverContainerEvent = new _DragEvent.DragOverContainerEvent({\n        source: this.source,\n        originalSource: this.originalSource,\n        sourceContainer: container,\n        sensorEvent,\n        overContainer\n      });\n\n      this.currentOverContainer = overContainer;\n\n      this.trigger(dragOverContainerEvent);\n    }\n\n    if (isOverDraggable) {\n      target.classList.add(this.getClassNameFor('draggable:over'));\n\n      const dragOverEvent = new _DragEvent.DragOverEvent({\n        source: this.source,\n        originalSource: this.originalSource,\n        sourceContainer: container,\n        sensorEvent,\n        overContainer,\n        over: target\n      });\n\n      this.currentOver = target;\n\n      this.trigger(dragOverEvent);\n    }\n  }\n\n  /**\n   * Drag stop handler\n   * @private\n   * @param {Event} event - DOM Drag event\n   */\n  [onDragStop](event) {\n    if (!this.dragging) {\n      return;\n    }\n\n    this.dragging = false;\n\n    const dragStopEvent = new _DragEvent.DragStopEvent({\n      source: this.source,\n      originalSource: this.originalSource,\n      sensorEvent: event.sensorEvent,\n      sourceContainer: this.sourceContainer\n    });\n\n    this.trigger(dragStopEvent);\n\n    this.source.parentNode.insertBefore(this.originalSource, this.source);\n    this.source.parentNode.removeChild(this.source);\n    this.originalSource.style.display = '';\n\n    this.source.classList.remove(this.getClassNameFor('source:dragging'));\n    this.originalSource.classList.remove(this.getClassNameFor('source:original'));\n    this.originalSource.classList.add(this.getClassNameFor('source:placed'));\n    this.sourceContainer.classList.add(this.getClassNameFor('container:placed'));\n    this.sourceContainer.classList.remove(this.getClassNameFor('container:dragging'));\n    document.body.classList.remove(this.getClassNameFor('body:dragging'));\n    applyUserSelect(document.body, '');\n\n    if (this.currentOver) {\n      this.currentOver.classList.remove(this.getClassNameFor('draggable:over'));\n    }\n\n    if (this.currentOverContainer) {\n      this.currentOverContainer.classList.remove(this.getClassNameFor('container:over'));\n    }\n\n    this.lastPlacedSource = this.originalSource;\n    this.lastPlacedContainer = this.sourceContainer;\n\n    this.placedTimeoutID = setTimeout(() => {\n      if (this.lastPlacedSource) {\n        this.lastPlacedSource.classList.remove(this.getClassNameFor('source:placed'));\n      }\n\n      if (this.lastPlacedContainer) {\n        this.lastPlacedContainer.classList.remove(this.getClassNameFor('container:placed'));\n      }\n\n      this.lastPlacedSource = null;\n      this.lastPlacedContainer = null;\n    }, this.options.placedTimeout);\n\n    this.source = null;\n    this.originalSource = null;\n    this.currentOverContainer = null;\n    this.currentOver = null;\n    this.sourceContainer = null;\n  }\n\n  /**\n   * Drag pressure handler\n   * @private\n   * @param {Event} event - DOM Drag event\n   */\n  [onDragPressure](event) {\n    if (!this.dragging) {\n      return;\n    }\n\n    const sensorEvent = getSensorEvent(event);\n    const source = this.source || (0, _utils.closest)(sensorEvent.originalEvent.target, this.options.draggable);\n\n    const dragPressureEvent = new _DragEvent.DragPressureEvent({\n      sensorEvent,\n      source,\n      pressure: sensorEvent.pressure\n    });\n\n    this.trigger(dragPressureEvent);\n  }\n}\n\nexports.default = Draggable;\nDraggable.Plugins = { Announcement: _Plugins.Announcement, Focusable: _Plugins.Focusable, Mirror: _Plugins.Mirror, Scrollable: _Plugins.Scrollable };\nfunction getSensorEvent(event) {\n  return event.detail;\n}\n\nfunction applyUserSelect(element, value) {\n  element.style.webkitUserSelect = value;\n  element.style.mozUserSelect = value;\n  element.style.msUserSelect = value;\n  element.style.oUserSelect = value;\n  element.style.userSelect = value;\n}\n\n//# sourceURL=webpack://Draggable/./src/Draggable/Draggable.js?");

        /***/
      },

      /***/"./src/Draggable/DraggableEvent/DraggableEvent.js":
      /*!********************************************************!*\
        !*** ./src/Draggable/DraggableEvent/DraggableEvent.js ***!
        \********************************************************/
      /*! no static exports found */
      /***/function srcDraggableDraggableEventDraggableEventJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.DraggableDestroyEvent = exports.DraggableInitializedEvent = exports.DraggableEvent = undefined;\n\nvar _AbstractEvent = __webpack_require__(/*! shared/AbstractEvent */ \"./src/shared/AbstractEvent/index.js\");\n\nvar _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Base draggable event\n * @class DraggableEvent\n * @module DraggableEvent\n * @extends AbstractEvent\n */\nclass DraggableEvent extends _AbstractEvent2.default {\n\n  /**\n   * Draggable instance\n   * @property draggable\n   * @type {Draggable}\n   * @readonly\n   */\n  get draggable() {\n    return this.data.draggable;\n  }\n}\n\nexports.DraggableEvent = DraggableEvent; /**\n                                          * Draggable initialized event\n                                          * @class DraggableInitializedEvent\n                                          * @module DraggableInitializedEvent\n                                          * @extends DraggableEvent\n                                          */\n\nDraggableEvent.type = 'draggable';\nclass DraggableInitializedEvent extends DraggableEvent {}\n\nexports.DraggableInitializedEvent = DraggableInitializedEvent; /**\n                                                                * Draggable destory event\n                                                                * @class DraggableInitializedEvent\n                                                                * @module DraggableDestroyEvent\n                                                                * @extends DraggableDestroyEvent\n                                                                */\n\nDraggableInitializedEvent.type = 'draggable:initialize';\nclass DraggableDestroyEvent extends DraggableEvent {}\nexports.DraggableDestroyEvent = DraggableDestroyEvent;\nDraggableDestroyEvent.type = 'draggable:destroy';\n\n//# sourceURL=webpack://Draggable/./src/Draggable/DraggableEvent/DraggableEvent.js?");

        /***/
      },

      /***/"./src/Draggable/DraggableEvent/index.js":
      /*!***********************************************!*\
        !*** ./src/Draggable/DraggableEvent/index.js ***!
        \***********************************************/
      /*! no static exports found */
      /***/function srcDraggableDraggableEventIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _DraggableEvent = __webpack_require__(/*! ./DraggableEvent */ \"./src/Draggable/DraggableEvent/DraggableEvent.js\");\n\nObject.keys(_DraggableEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _DraggableEvent[key];\n    }\n  });\n});\n\n//# sourceURL=webpack://Draggable/./src/Draggable/DraggableEvent/index.js?");

        /***/
      },

      /***/"./src/Draggable/Emitter/Emitter.js":
      /*!******************************************!*\
        !*** ./src/Draggable/Emitter/Emitter.js ***!
        \******************************************/
      /*! no static exports found */
      /***/function srcDraggableEmitterEmitterJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/**\n * The Emitter is a simple emitter class that provides you with `on()`, `off()` and `trigger()` methods\n * @class Emitter\n * @module Emitter\n */\nclass Emitter {\n  constructor() {\n    this.callbacks = {};\n  }\n\n  /**\n   * Registers callbacks by event name\n   * @param {String} type\n   * @param {...Function} callbacks\n   */\n  on(type, ...callbacks) {\n    if (!this.callbacks[type]) {\n      this.callbacks[type] = [];\n    }\n\n    this.callbacks[type].push(...callbacks);\n\n    return this;\n  }\n\n  /**\n   * Unregisters callbacks by event name\n   * @param {String} type\n   * @param {Function} callback\n   */\n  off(type, callback) {\n    if (!this.callbacks[type]) {\n      return null;\n    }\n\n    const copy = this.callbacks[type].slice(0);\n\n    for (let i = 0; i < copy.length; i++) {\n      if (callback === copy[i]) {\n        this.callbacks[type].splice(i, 1);\n      }\n    }\n\n    return this;\n  }\n\n  /**\n   * Triggers event callbacks by event object\n   * @param {AbstractEvent} event\n   */\n  trigger(event) {\n    if (!this.callbacks[event.type]) {\n      return null;\n    }\n\n    const callbacks = [...this.callbacks[event.type]];\n    const caughtErrors = [];\n\n    for (let i = callbacks.length - 1; i >= 0; i--) {\n      const callback = callbacks[i];\n\n      try {\n        callback(event);\n      } catch (error) {\n        caughtErrors.push(error);\n      }\n    }\n\n    if (caughtErrors.length) {\n      /* eslint-disable no-console */\n      console.error(`Draggable caught errors while triggering '${event.type}'`, caughtErrors);\n      /* eslint-disable no-console */\n    }\n\n    return this;\n  }\n}\nexports.default = Emitter;\n\n//# sourceURL=webpack://Draggable/./src/Draggable/Emitter/Emitter.js?");

        /***/
      },

      /***/"./src/Draggable/Emitter/index.js":
      /*!****************************************!*\
        !*** ./src/Draggable/Emitter/index.js ***!
        \****************************************/
      /*! no static exports found */
      /***/function srcDraggableEmitterIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Emitter = __webpack_require__(/*! ./Emitter */ \"./src/Draggable/Emitter/Emitter.js\");\n\nvar _Emitter2 = _interopRequireDefault(_Emitter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Emitter2.default;\n\n//# sourceURL=webpack://Draggable/./src/Draggable/Emitter/index.js?");

        /***/
      },

      /***/"./src/Draggable/Plugins/Announcement/Announcement.js":
      /*!************************************************************!*\
        !*** ./src/Draggable/Plugins/Announcement/Announcement.js ***!
        \************************************************************/
      /*! no static exports found */
      /***/function srcDraggablePluginsAnnouncementAnnouncementJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.defaultOptions = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _AbstractPlugin = __webpack_require__(/*! shared/AbstractPlugin */ \"./src/shared/AbstractPlugin/index.js\");\n\nvar _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onInitialize = Symbol('onInitialize');\nconst onDestroy = Symbol('onDestroy');\nconst announceEvent = Symbol('announceEvent');\nconst announceMessage = Symbol('announceMessage');\n\nconst ARIA_RELEVANT = 'aria-relevant';\nconst ARIA_ATOMIC = 'aria-atomic';\nconst ARIA_LIVE = 'aria-live';\nconst ROLE = 'role';\n\n/**\n * Announcement default options\n * @property {Object} defaultOptions\n * @property {Number} defaultOptions.expire\n * @type {Object}\n */\nconst defaultOptions = exports.defaultOptions = {\n  expire: 7000\n};\n\n/**\n * Announcement plugin\n * @class Announcement\n * @module Announcement\n * @extends AbstractPlugin\n */\nclass Announcement extends _AbstractPlugin2.default {\n  /**\n   * Announcement constructor.\n   * @constructs Announcement\n   * @param {Draggable} draggable - Draggable instance\n   */\n  constructor(draggable) {\n    super(draggable);\n\n    /**\n     * Plugin options\n     * @property options\n     * @type {Object}\n     */\n    this.options = _extends({}, defaultOptions, this.getOptions());\n\n    /**\n     * Original draggable trigger method. Hack until we have onAll or on('all')\n     * @property originalTriggerMethod\n     * @type {Function}\n     */\n    this.originalTriggerMethod = this.draggable.trigger;\n\n    this[onInitialize] = this[onInitialize].bind(this);\n    this[onDestroy] = this[onDestroy].bind(this);\n  }\n\n  /**\n   * Attaches listeners to draggable\n   */\n  attach() {\n    this.draggable.on('draggable:initialize', this[onInitialize]);\n  }\n\n  /**\n   * Detaches listeners from draggable\n   */\n  detach() {\n    this.draggable.off('draggable:destroy', this[onDestroy]);\n  }\n\n  /**\n   * Returns passed in options\n   */\n  getOptions() {\n    return this.draggable.options.announcements || {};\n  }\n\n  /**\n   * Announces event\n   * @private\n   * @param {AbstractEvent} event\n   */\n  [announceEvent](event) {\n    const message = this.options[event.type];\n\n    if (message && typeof message === 'string') {\n      this[announceMessage](message);\n    }\n\n    if (message && typeof message === 'function') {\n      this[announceMessage](message(event));\n    }\n  }\n\n  /**\n   * Announces message to screen reader\n   * @private\n   * @param {String} message\n   */\n  [announceMessage](message) {\n    announce(message, { expire: this.options.expire });\n  }\n\n  /**\n   * Initialize hander\n   * @private\n   */\n  [onInitialize]() {\n    // Hack until there is an api for listening for all events\n    this.draggable.trigger = event => {\n      try {\n        this[announceEvent](event);\n      } finally {\n        // Ensure that original trigger is called\n        this.originalTriggerMethod.call(this.draggable, event);\n      }\n    };\n  }\n\n  /**\n   * Destroy hander\n   * @private\n   */\n  [onDestroy]() {\n    this.draggable.trigger = this.originalTriggerMethod;\n  }\n}\n\nexports.default = Announcement; /**\n                                 * @const {HTMLElement} liveRegion\n                                 */\n\nconst liveRegion = createRegion();\n\n/**\n * Announces message via live region\n * @param {String} message\n * @param {Object} options\n * @param {Number} options.expire\n */\nfunction announce(message, { expire }) {\n  const element = document.createElement('div');\n\n  element.innerHTML = message;\n  liveRegion.appendChild(element);\n\n  return setTimeout(() => {\n    liveRegion.removeChild(element);\n  }, expire);\n}\n\n/**\n * Creates region element\n * @return {HTMLElement}\n */\nfunction createRegion() {\n  const element = document.createElement('div');\n\n  element.setAttribute('id', 'draggable-live-region');\n  element.setAttribute(ARIA_RELEVANT, 'additions');\n  element.setAttribute(ARIA_ATOMIC, 'true');\n  element.setAttribute(ARIA_LIVE, 'assertive');\n  element.setAttribute(ROLE, 'log');\n\n  element.style.position = 'fixed';\n  element.style.width = '1px';\n  element.style.height = '1px';\n  element.style.top = '-1px';\n  element.style.overflow = 'hidden';\n\n  return element;\n}\n\n// Append live region element as early as possible\ndocument.addEventListener('DOMContentLoaded', () => {\n  document.body.appendChild(liveRegion);\n});\n\n//# sourceURL=webpack://Draggable/./src/Draggable/Plugins/Announcement/Announcement.js?");

        /***/
      },

      /***/"./src/Draggable/Plugins/Announcement/index.js":
      /*!*****************************************************!*\
        !*** ./src/Draggable/Plugins/Announcement/index.js ***!
        \*****************************************************/
      /*! no static exports found */
      /***/function srcDraggablePluginsAnnouncementIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.defaultOptions = undefined;\n\nvar _Announcement = __webpack_require__(/*! ./Announcement */ \"./src/Draggable/Plugins/Announcement/Announcement.js\");\n\nvar _Announcement2 = _interopRequireDefault(_Announcement);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Announcement2.default;\nexports.defaultOptions = _Announcement.defaultOptions;\n\n//# sourceURL=webpack://Draggable/./src/Draggable/Plugins/Announcement/index.js?");

        /***/
      },

      /***/"./src/Draggable/Plugins/Focusable/Focusable.js":
      /*!******************************************************!*\
        !*** ./src/Draggable/Plugins/Focusable/Focusable.js ***!
        \******************************************************/
      /*! no static exports found */
      /***/function srcDraggablePluginsFocusableFocusableJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _AbstractPlugin = __webpack_require__(/*! shared/AbstractPlugin */ \"./src/shared/AbstractPlugin/index.js\");\n\nvar _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onInitialize = Symbol('onInitialize');\nconst onDestroy = Symbol('onDestroy');\n\n/**\n * Focusable default options\n * @property {Object} defaultOptions\n * @type {Object}\n */\nconst defaultOptions = {};\n\n/**\n * Focusable plugin\n * @class Focusable\n * @module Focusable\n * @extends AbstractPlugin\n */\nclass Focusable extends _AbstractPlugin2.default {\n  /**\n   * Focusable constructor.\n   * @constructs Focusable\n   * @param {Draggable} draggable - Draggable instance\n   */\n  constructor(draggable) {\n    super(draggable);\n\n    /**\n     * Focusable options\n     * @property {Object} options\n     * @type {Object}\n     */\n    this.options = _extends({}, defaultOptions, this.getOptions());\n\n    this[onInitialize] = this[onInitialize].bind(this);\n    this[onDestroy] = this[onDestroy].bind(this);\n  }\n\n  /**\n   * Attaches listeners to draggable\n   */\n  attach() {\n    this.draggable.on('draggable:initialize', this[onInitialize]).on('draggable:destroy', this[onDestroy]);\n  }\n\n  /**\n   * Detaches listeners from draggable\n   */\n  detach() {\n    this.draggable.off('draggable:initialize', this[onInitialize]).off('draggable:destroy', this[onDestroy]);\n  }\n\n  /**\n   * Returns options passed through draggable\n   * @return {Object}\n   */\n  getOptions() {\n    return this.draggable.options.focusable || {};\n  }\n\n  /**\n   * Returns draggable containers and elements\n   * @return {HTMLElement[]}\n   */\n  getElements() {\n    return [...this.draggable.containers, ...this.draggable.getDraggableElements()];\n  }\n\n  /**\n   * Intialize handler\n   * @private\n   */\n  [onInitialize]() {\n    // Can wait until the next best frame is available\n    requestAnimationFrame(() => {\n      this.getElements().forEach(element => decorateElement(element));\n    });\n  }\n\n  /**\n   * Destroy handler\n   * @private\n   */\n  [onDestroy]() {\n    // Can wait until the next best frame is available\n    requestAnimationFrame(() => {\n      this.getElements().forEach(element => stripElement(element));\n    });\n  }\n}\n\nexports.default = Focusable; /**\n                              * Keeps track of all the elements that are missing tabindex attributes\n                              * so they can be reset when draggable gets destroyed\n                              * @const {HTMLElement[]} elementsWithMissingTabIndex\n                              */\n\nconst elementsWithMissingTabIndex = [];\n\n/**\n * Decorates element with tabindex attributes\n * @param {HTMLElement} element\n * @return {Object}\n * @private\n */\nfunction decorateElement(element) {\n  const hasMissingTabIndex = Boolean(!element.getAttribute('tabindex') && element.tabIndex === -1);\n\n  if (hasMissingTabIndex) {\n    elementsWithMissingTabIndex.push(element);\n    element.tabIndex = 0;\n  }\n}\n\n/**\n * Removes elements tabindex attributes\n * @param {HTMLElement} element\n * @private\n */\nfunction stripElement(element) {\n  const tabIndexElementPosition = elementsWithMissingTabIndex.indexOf(element);\n\n  if (tabIndexElementPosition !== -1) {\n    element.tabIndex = -1;\n    elementsWithMissingTabIndex.splice(tabIndexElementPosition, 1);\n  }\n}\n\n//# sourceURL=webpack://Draggable/./src/Draggable/Plugins/Focusable/Focusable.js?");

        /***/
      },

      /***/"./src/Draggable/Plugins/Focusable/index.js":
      /*!**************************************************!*\
        !*** ./src/Draggable/Plugins/Focusable/index.js ***!
        \**************************************************/
      /*! no static exports found */
      /***/function srcDraggablePluginsFocusableIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Focusable = __webpack_require__(/*! ./Focusable */ \"./src/Draggable/Plugins/Focusable/Focusable.js\");\n\nvar _Focusable2 = _interopRequireDefault(_Focusable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Focusable2.default;\n\n//# sourceURL=webpack://Draggable/./src/Draggable/Plugins/Focusable/index.js?");

        /***/
      },

      /***/"./src/Draggable/Plugins/Mirror/Mirror.js":
      /*!************************************************!*\
        !*** ./src/Draggable/Plugins/Mirror/Mirror.js ***!
        \************************************************/
      /*! no static exports found */
      /***/function srcDraggablePluginsMirrorMirrorJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.defaultOptions = exports.getAppendableContainer = exports.onScroll = exports.onMirrorMove = exports.onMirrorCreated = exports.onDragStop = exports.onDragMove = exports.onDragStart = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _AbstractPlugin = __webpack_require__(/*! shared/AbstractPlugin */ \"./src/shared/AbstractPlugin/index.js\");\n\nvar _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);\n\nvar _MirrorEvent = __webpack_require__(/*! ./MirrorEvent */ \"./src/Draggable/Plugins/Mirror/MirrorEvent/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nconst onDragStart = exports.onDragStart = Symbol('onDragStart');\nconst onDragMove = exports.onDragMove = Symbol('onDragMove');\nconst onDragStop = exports.onDragStop = Symbol('onDragStop');\nconst onMirrorCreated = exports.onMirrorCreated = Symbol('onMirrorCreated');\nconst onMirrorMove = exports.onMirrorMove = Symbol('onMirrorMove');\nconst onScroll = exports.onScroll = Symbol('onScroll');\nconst getAppendableContainer = exports.getAppendableContainer = Symbol('getAppendableContainer');\n\n/**\n * Mirror default options\n * @property {Object} defaultOptions\n * @property {Boolean} defaultOptions.constrainDimensions\n * @property {Boolean} defaultOptions.xAxis\n * @property {Boolean} defaultOptions.yAxis\n * @property {null} defaultOptions.cursorOffsetX\n * @property {null} defaultOptions.cursorOffsetY\n * @type {Object}\n */\nconst defaultOptions = exports.defaultOptions = {\n  constrainDimensions: false,\n  xAxis: true,\n  yAxis: true,\n  cursorOffsetX: null,\n  cursorOffsetY: null\n};\n\n/**\n * Mirror plugin which controls the mirror positioning while dragging\n * @class Mirror\n * @module Mirror\n * @extends AbstractPlugin\n */\nclass Mirror extends _AbstractPlugin2.default {\n  /**\n   * Mirror constructor.\n   * @constructs Mirror\n   * @param {Draggable} draggable - Draggable instance\n   */\n  constructor(draggable) {\n    super(draggable);\n\n    /**\n     * Mirror options\n     * @property {Object} options\n     * @property {Boolean} options.constrainDimensions\n     * @property {Boolean} options.xAxis\n     * @property {Boolean} options.yAxis\n     * @property {Number|null} options.cursorOffsetX\n     * @property {Number|null} options.cursorOffsetY\n     * @property {String|HTMLElement|Function} options.appendTo\n     * @type {Object}\n     */\n    this.options = _extends({}, defaultOptions, this.getOptions());\n\n    /**\n     * Scroll offset for touch devices because the mirror is positioned fixed\n     * @property {Object} scrollOffset\n     * @property {Number} scrollOffset.x\n     * @property {Number} scrollOffset.y\n     */\n    this.scrollOffset = { x: 0, y: 0 };\n\n    /**\n     * Initial scroll offset for touch devices because the mirror is positioned fixed\n     * @property {Object} scrollOffset\n     * @property {Number} scrollOffset.x\n     * @property {Number} scrollOffset.y\n     */\n    this.initialScrollOffset = {\n      x: window.scrollX,\n      y: window.scrollY\n    };\n\n    this[onDragStart] = this[onDragStart].bind(this);\n    this[onDragMove] = this[onDragMove].bind(this);\n    this[onDragStop] = this[onDragStop].bind(this);\n    this[onMirrorCreated] = this[onMirrorCreated].bind(this);\n    this[onMirrorMove] = this[onMirrorMove].bind(this);\n    this[onScroll] = this[onScroll].bind(this);\n  }\n\n  /**\n   * Attaches plugins event listeners\n   */\n  attach() {\n    this.draggable.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]).on('mirror:created', this[onMirrorCreated]).on('mirror:move', this[onMirrorMove]);\n  }\n\n  /**\n   * Detaches plugins event listeners\n   */\n  detach() {\n    this.draggable.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]).off('mirror:created', this[onMirrorCreated]).off('mirror:move', this[onMirrorMove]);\n  }\n\n  /**\n   * Returns options passed through draggable\n   * @return {Object}\n   */\n  getOptions() {\n    return this.draggable.options.mirror || {};\n  }\n\n  [onDragStart](dragEvent) {\n    if (dragEvent.canceled()) {\n      return;\n    }\n\n    if ('ontouchstart' in window) {\n      document.addEventListener('scroll', this[onScroll], true);\n    }\n\n    this.initialScrollOffset = {\n      x: window.scrollX,\n      y: window.scrollY\n    };\n\n    const { source, originalSource, sourceContainer, sensorEvent } = dragEvent;\n\n    const mirrorCreateEvent = new _MirrorEvent.MirrorCreateEvent({\n      source,\n      originalSource,\n      sourceContainer,\n      sensorEvent,\n      dragEvent\n    });\n\n    this.draggable.trigger(mirrorCreateEvent);\n\n    if (isNativeDragEvent(sensorEvent) || mirrorCreateEvent.canceled()) {\n      return;\n    }\n\n    const appendableContainer = this[getAppendableContainer](source) || sourceContainer;\n    this.mirror = source.cloneNode(true);\n\n    const mirrorCreatedEvent = new _MirrorEvent.MirrorCreatedEvent({\n      source,\n      originalSource,\n      sourceContainer,\n      sensorEvent,\n      dragEvent,\n      mirror: this.mirror\n    });\n\n    const mirrorAttachedEvent = new _MirrorEvent.MirrorAttachedEvent({\n      source,\n      originalSource,\n      sourceContainer,\n      sensorEvent,\n      dragEvent,\n      mirror: this.mirror\n    });\n\n    this.draggable.trigger(mirrorCreatedEvent);\n    appendableContainer.appendChild(this.mirror);\n    this.draggable.trigger(mirrorAttachedEvent);\n  }\n\n  [onDragMove](dragEvent) {\n    if (!this.mirror || dragEvent.canceled()) {\n      return;\n    }\n\n    const { source, originalSource, sourceContainer, sensorEvent } = dragEvent;\n\n    const mirrorMoveEvent = new _MirrorEvent.MirrorMoveEvent({\n      source,\n      originalSource,\n      sourceContainer,\n      sensorEvent,\n      dragEvent,\n      mirror: this.mirror\n    });\n\n    this.draggable.trigger(mirrorMoveEvent);\n  }\n\n  [onDragStop](dragEvent) {\n    if ('ontouchstart' in window) {\n      document.removeEventListener('scroll', this[onScroll], true);\n    }\n\n    this.initialScrollOffset = { x: 0, y: 0 };\n    this.scrollOffset = { x: 0, y: 0 };\n\n    if (!this.mirror) {\n      return;\n    }\n\n    const { source, sourceContainer, sensorEvent } = dragEvent;\n\n    const mirrorDestroyEvent = new _MirrorEvent.MirrorDestroyEvent({\n      source,\n      mirror: this.mirror,\n      sourceContainer,\n      sensorEvent,\n      dragEvent\n    });\n\n    this.draggable.trigger(mirrorDestroyEvent);\n\n    if (!mirrorDestroyEvent.canceled()) {\n      this.mirror.parentNode.removeChild(this.mirror);\n    }\n  }\n\n  [onScroll]() {\n    this.scrollOffset = {\n      x: window.scrollX - this.initialScrollOffset.x,\n      y: window.scrollY - this.initialScrollOffset.y\n    };\n  }\n\n  /**\n   * Mirror created handler\n   * @param {MirrorCreatedEvent} mirrorEvent\n   * @return {Promise}\n   * @private\n   */\n  [onMirrorCreated]({ mirror, source, sensorEvent }) {\n    const mirrorClass = this.draggable.getClassNameFor('mirror');\n\n    const setState = (_ref) => {\n      let { mirrorOffset, initialX, initialY } = _ref,\n          args = _objectWithoutProperties(_ref, ['mirrorOffset', 'initialX', 'initialY']);\n\n      this.mirrorOffset = mirrorOffset;\n      this.initialX = initialX;\n      this.initialY = initialY;\n      return _extends({ mirrorOffset, initialX, initialY }, args);\n    };\n\n    const initialState = {\n      mirror,\n      source,\n      sensorEvent,\n      mirrorClass,\n      scrollOffset: this.scrollOffset,\n      options: this.options\n    };\n\n    return Promise.resolve(initialState)\n    // Fix reflow here\n    .then(computeMirrorDimensions).then(calculateMirrorOffset).then(resetMirror).then(addMirrorClasses).then(positionMirror({ initial: true })).then(removeMirrorID).then(setState);\n  }\n\n  /**\n   * Mirror move handler\n   * @param {MirrorMoveEvent} mirrorEvent\n   * @return {Promise|null}\n   * @private\n   */\n  [onMirrorMove](mirrorEvent) {\n    if (mirrorEvent.canceled()) {\n      return null;\n    }\n\n    const initialState = {\n      mirror: mirrorEvent.mirror,\n      sensorEvent: mirrorEvent.sensorEvent,\n      mirrorOffset: this.mirrorOffset,\n      options: this.options,\n      initialX: this.initialX,\n      initialY: this.initialY,\n      scrollOffset: this.scrollOffset\n    };\n\n    return Promise.resolve(initialState).then(positionMirror({ raf: true }));\n  }\n\n  /**\n   * Returns appendable container for mirror based on the appendTo option\n   * @private\n   * @param {Object} options\n   * @param {HTMLElement} options.source - Current source\n   * @return {HTMLElement}\n   */\n  [getAppendableContainer](source) {\n    const appendTo = this.options.appendTo;\n\n    if (typeof appendTo === 'string') {\n      return document.querySelector(appendTo);\n    } else if (appendTo instanceof HTMLElement) {\n      return appendTo;\n    } else if (typeof appendTo === 'function') {\n      return appendTo(source);\n    } else {\n      return source.parentNode;\n    }\n  }\n}\n\nexports.default = Mirror; /**\n                           * Computes mirror dimensions based on the source element\n                           * Adds sourceRect to state\n                           * @param {Object} state\n                           * @param {HTMLElement} state.source\n                           * @return {Promise}\n                           * @private\n                           */\n\nfunction computeMirrorDimensions(_ref2) {\n  let { source } = _ref2,\n      args = _objectWithoutProperties(_ref2, ['source']);\n\n  return withPromise(resolve => {\n    const sourceRect = source.getBoundingClientRect();\n    resolve(_extends({ source, sourceRect }, args));\n  });\n}\n\n/**\n * Calculates mirror offset\n * Adds mirrorOffset to state\n * @param {Object} state\n * @param {SensorEvent} state.sensorEvent\n * @param {DOMRect} state.sourceRect\n * @return {Promise}\n * @private\n */\nfunction calculateMirrorOffset(_ref3) {\n  let { sensorEvent, sourceRect, options } = _ref3,\n      args = _objectWithoutProperties(_ref3, ['sensorEvent', 'sourceRect', 'options']);\n\n  return withPromise(resolve => {\n    const top = options.cursorOffsetY === null ? sensorEvent.clientY - sourceRect.top : options.cursorOffsetY;\n    const left = options.cursorOffsetX === null ? sensorEvent.clientX - sourceRect.left : options.cursorOffsetX;\n\n    const mirrorOffset = { top, left };\n\n    resolve(_extends({ sensorEvent, sourceRect, mirrorOffset, options }, args));\n  });\n}\n\n/**\n * Applys mirror styles\n * @param {Object} state\n * @param {HTMLElement} state.mirror\n * @param {HTMLElement} state.source\n * @param {Object} state.options\n * @return {Promise}\n * @private\n */\nfunction resetMirror(_ref4) {\n  let { mirror, source, options } = _ref4,\n      args = _objectWithoutProperties(_ref4, ['mirror', 'source', 'options']);\n\n  return withPromise(resolve => {\n    let offsetHeight;\n    let offsetWidth;\n\n    if (options.constrainDimensions) {\n      const computedSourceStyles = getComputedStyle(source);\n      offsetHeight = computedSourceStyles.getPropertyValue('height');\n      offsetWidth = computedSourceStyles.getPropertyValue('width');\n    }\n\n    mirror.style.position = 'fixed';\n    mirror.style.pointerEvents = 'none';\n    mirror.style.top = 0;\n    mirror.style.left = 0;\n    mirror.style.margin = 0;\n\n    if (options.constrainDimensions) {\n      mirror.style.height = offsetHeight;\n      mirror.style.width = offsetWidth;\n    }\n\n    resolve(_extends({ mirror, source, options }, args));\n  });\n}\n\n/**\n * Applys mirror class on mirror element\n * @param {Object} state\n * @param {HTMLElement} state.mirror\n * @param {String} state.mirrorClass\n * @return {Promise}\n * @private\n */\nfunction addMirrorClasses(_ref5) {\n  let { mirror, mirrorClass } = _ref5,\n      args = _objectWithoutProperties(_ref5, ['mirror', 'mirrorClass']);\n\n  return withPromise(resolve => {\n    mirror.classList.add(mirrorClass);\n    resolve(_extends({ mirror, mirrorClass }, args));\n  });\n}\n\n/**\n * Removes source ID from cloned mirror element\n * @param {Object} state\n * @param {HTMLElement} state.mirror\n * @return {Promise}\n * @private\n */\nfunction removeMirrorID(_ref6) {\n  let { mirror } = _ref6,\n      args = _objectWithoutProperties(_ref6, ['mirror']);\n\n  return withPromise(resolve => {\n    mirror.removeAttribute('id');\n    delete mirror.id;\n    resolve(_extends({ mirror }, args));\n  });\n}\n\n/**\n * Positions mirror with translate3d\n * @param {Object} state\n * @param {HTMLElement} state.mirror\n * @param {SensorEvent} state.sensorEvent\n * @param {Object} state.mirrorOffset\n * @param {Number} state.initialY\n * @param {Number} state.initialX\n * @param {Object} state.options\n * @return {Promise}\n * @private\n */\nfunction positionMirror({ withFrame = false, initial = false } = {}) {\n  return (_ref7) => {\n    let { mirror, sensorEvent, mirrorOffset, initialY, initialX, scrollOffset, options } = _ref7,\n        args = _objectWithoutProperties(_ref7, ['mirror', 'sensorEvent', 'mirrorOffset', 'initialY', 'initialX', 'scrollOffset', 'options']);\n\n    return withPromise(resolve => {\n      const result = _extends({\n        mirror,\n        sensorEvent,\n        mirrorOffset,\n        options\n      }, args);\n\n      if (mirrorOffset) {\n        const x = sensorEvent.clientX - mirrorOffset.left - scrollOffset.x;\n        const y = sensorEvent.clientY - mirrorOffset.top - scrollOffset.y;\n\n        if (options.xAxis && options.yAxis || initial) {\n          mirror.style.transform = `translate3d(${x}px, ${y}px, 0)`;\n        } else if (options.xAxis && !options.yAxis) {\n          mirror.style.transform = `translate3d(${x}px, ${initialY}px, 0)`;\n        } else if (options.yAxis && !options.xAxis) {\n          mirror.style.transform = `translate3d(${initialX}px, ${y}px, 0)`;\n        }\n\n        if (initial) {\n          result.initialX = x;\n          result.initialY = y;\n        }\n      }\n\n      resolve(result);\n    }, { frame: withFrame });\n  };\n}\n\n/**\n * Wraps functions in promise with potential animation frame option\n * @param {Function} callback\n * @param {Object} options\n * @param {Boolean} options.raf\n * @return {Promise}\n * @private\n */\nfunction withPromise(callback, { raf = false } = {}) {\n  return new Promise((resolve, reject) => {\n    if (raf) {\n      requestAnimationFrame(() => {\n        callback(resolve, reject);\n      });\n    } else {\n      callback(resolve, reject);\n    }\n  });\n}\n\n/**\n * Returns true if the sensor event was triggered by a native browser drag event\n * @param {SensorEvent} sensorEvent\n */\nfunction isNativeDragEvent(sensorEvent) {\n  return (/^drag/.test(sensorEvent.originalEvent.type)\n  );\n}\n\n//# sourceURL=webpack://Draggable/./src/Draggable/Plugins/Mirror/Mirror.js?");

        /***/
      },

      /***/"./src/Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.js":
      /*!*****************************************************************!*\
        !*** ./src/Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.js ***!
        \*****************************************************************/
      /*! no static exports found */
      /***/function srcDraggablePluginsMirrorMirrorEventMirrorEventJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.MirrorDestroyEvent = exports.MirrorMoveEvent = exports.MirrorAttachedEvent = exports.MirrorCreatedEvent = exports.MirrorCreateEvent = exports.MirrorEvent = undefined;\n\nvar _AbstractEvent = __webpack_require__(/*! shared/AbstractEvent */ \"./src/shared/AbstractEvent/index.js\");\n\nvar _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Base mirror event\n * @class MirrorEvent\n * @module MirrorEvent\n * @extends AbstractEvent\n */\nclass MirrorEvent extends _AbstractEvent2.default {\n  /**\n   * Draggables source element\n   * @property source\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get source() {\n    return this.data.source;\n  }\n\n  /**\n   * Draggables original source element\n   * @property originalSource\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get originalSource() {\n    return this.data.originalSource;\n  }\n\n  /**\n   * Draggables source container element\n   * @property sourceContainer\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get sourceContainer() {\n    return this.data.sourceContainer;\n  }\n\n  /**\n   * Sensor event\n   * @property sensorEvent\n   * @type {SensorEvent}\n   * @readonly\n   */\n  get sensorEvent() {\n    return this.data.sensorEvent;\n  }\n\n  /**\n   * Drag event\n   * @property dragEvent\n   * @type {DragEvent}\n   * @readonly\n   */\n  get dragEvent() {\n    return this.data.dragEvent;\n  }\n\n  /**\n   * Original event that triggered sensor event\n   * @property originalEvent\n   * @type {Event}\n   * @readonly\n   */\n  get originalEvent() {\n    if (this.sensorEvent) {\n      return this.sensorEvent.originalEvent;\n    }\n\n    return null;\n  }\n}\n\nexports.MirrorEvent = MirrorEvent; /**\n                                    * Mirror create event\n                                    * @class MirrorCreateEvent\n                                    * @module MirrorCreateEvent\n                                    * @extends MirrorEvent\n                                    */\n\nclass MirrorCreateEvent extends MirrorEvent {}\n\nexports.MirrorCreateEvent = MirrorCreateEvent; /**\n                                                * Mirror created event\n                                                * @class MirrorCreatedEvent\n                                                * @module MirrorCreatedEvent\n                                                * @extends MirrorEvent\n                                                */\n\nMirrorCreateEvent.type = 'mirror:create';\nclass MirrorCreatedEvent extends MirrorEvent {\n\n  /**\n   * Draggables mirror element\n   * @property mirror\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get mirror() {\n    return this.data.mirror;\n  }\n}\n\nexports.MirrorCreatedEvent = MirrorCreatedEvent; /**\n                                                  * Mirror attached event\n                                                  * @class MirrorAttachedEvent\n                                                  * @module MirrorAttachedEvent\n                                                  * @extends MirrorEvent\n                                                  */\n\nMirrorCreatedEvent.type = 'mirror:created';\nclass MirrorAttachedEvent extends MirrorEvent {\n\n  /**\n   * Draggables mirror element\n   * @property mirror\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get mirror() {\n    return this.data.mirror;\n  }\n}\n\nexports.MirrorAttachedEvent = MirrorAttachedEvent; /**\n                                                    * Mirror move event\n                                                    * @class MirrorMoveEvent\n                                                    * @module MirrorMoveEvent\n                                                    * @extends MirrorEvent\n                                                    */\n\nMirrorAttachedEvent.type = 'mirror:attached';\nclass MirrorMoveEvent extends MirrorEvent {\n\n  /**\n   * Draggables mirror element\n   * @property mirror\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get mirror() {\n    return this.data.mirror;\n  }\n}\n\nexports.MirrorMoveEvent = MirrorMoveEvent; /**\n                                            * Mirror destroy event\n                                            * @class MirrorDestroyEvent\n                                            * @module MirrorDestroyEvent\n                                            * @extends MirrorEvent\n                                            */\n\nMirrorMoveEvent.type = 'mirror:move';\nMirrorMoveEvent.cancelable = true;\nclass MirrorDestroyEvent extends MirrorEvent {\n\n  /**\n   * Draggables mirror element\n   * @property mirror\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get mirror() {\n    return this.data.mirror;\n  }\n}\nexports.MirrorDestroyEvent = MirrorDestroyEvent;\nMirrorDestroyEvent.type = 'mirror:destroy';\nMirrorDestroyEvent.cancelable = true;\n\n//# sourceURL=webpack://Draggable/./src/Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.js?");

        /***/
      },

      /***/"./src/Draggable/Plugins/Mirror/MirrorEvent/index.js":
      /*!***********************************************************!*\
        !*** ./src/Draggable/Plugins/Mirror/MirrorEvent/index.js ***!
        \***********************************************************/
      /*! no static exports found */
      /***/function srcDraggablePluginsMirrorMirrorEventIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _MirrorEvent = __webpack_require__(/*! ./MirrorEvent */ \"./src/Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.js\");\n\nObject.keys(_MirrorEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _MirrorEvent[key];\n    }\n  });\n});\n\n//# sourceURL=webpack://Draggable/./src/Draggable/Plugins/Mirror/MirrorEvent/index.js?");

        /***/
      },

      /***/"./src/Draggable/Plugins/Mirror/index.js":
      /*!***********************************************!*\
        !*** ./src/Draggable/Plugins/Mirror/index.js ***!
        \***********************************************/
      /*! no static exports found */
      /***/function srcDraggablePluginsMirrorIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.defaultOptions = undefined;\n\nvar _Mirror = __webpack_require__(/*! ./Mirror */ \"./src/Draggable/Plugins/Mirror/Mirror.js\");\n\nvar _Mirror2 = _interopRequireDefault(_Mirror);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Mirror2.default;\nexports.defaultOptions = _Mirror.defaultOptions;\n\n//# sourceURL=webpack://Draggable/./src/Draggable/Plugins/Mirror/index.js?");

        /***/
      },

      /***/"./src/Draggable/Plugins/Scrollable/Scrollable.js":
      /*!********************************************************!*\
        !*** ./src/Draggable/Plugins/Scrollable/Scrollable.js ***!
        \********************************************************/
      /*! no static exports found */
      /***/function srcDraggablePluginsScrollableScrollableJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.defaultOptions = exports.scroll = exports.onDragStop = exports.onDragMove = exports.onDragStart = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _AbstractPlugin = __webpack_require__(/*! shared/AbstractPlugin */ \"./src/shared/AbstractPlugin/index.js\");\n\nvar _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);\n\nvar _utils = __webpack_require__(/*! shared/utils */ \"./src/shared/utils/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onDragStart = exports.onDragStart = Symbol('onDragStart');\nconst onDragMove = exports.onDragMove = Symbol('onDragMove');\nconst onDragStop = exports.onDragStop = Symbol('onDragStop');\nconst scroll = exports.scroll = Symbol('scroll');\n\n/**\n * Scrollable default options\n * @property {Object} defaultOptions\n * @property {Number} defaultOptions.speed\n * @property {Number} defaultOptions.sensitivity\n * @property {HTMLElement[]} defaultOptions.scrollableElements\n * @type {Object}\n */\nconst defaultOptions = exports.defaultOptions = {\n  speed: 6,\n  sensitivity: 50,\n  scrollableElements: []\n};\n\n/**\n * Scrollable plugin which scrolls the closest scrollable parent\n * @class Scrollable\n * @module Scrollable\n * @extends AbstractPlugin\n */\nclass Scrollable extends _AbstractPlugin2.default {\n  /**\n   * Scrollable constructor.\n   * @constructs Scrollable\n   * @param {Draggable} draggable - Draggable instance\n   */\n  constructor(draggable) {\n    super(draggable);\n\n    /**\n     * Scrollable options\n     * @property {Object} options\n     * @property {Number} options.speed\n     * @property {Number} options.sensitivity\n     * @property {HTMLElement[]} options.scrollableElements\n     * @type {Object}\n     */\n    this.options = _extends({}, defaultOptions, this.getOptions());\n\n    /**\n     * Keeps current mouse position\n     * @property {Object} currentMousePosition\n     * @property {Number} currentMousePosition.clientX\n     * @property {Number} currentMousePosition.clientY\n     * @type {Object|null}\n     */\n    this.currentMousePosition = null;\n\n    /**\n     * Scroll animation frame\n     * @property scrollAnimationFrame\n     * @type {Number|null}\n     */\n    this.scrollAnimationFrame = null;\n\n    /**\n     * Closest scrollable element\n     * @property scrollableElement\n     * @type {HTMLElement|null}\n     */\n    this.scrollableElement = null;\n\n    /**\n     * Animation frame looking for the closest scrollable element\n     * @property findScrollableElementFrame\n     * @type {Number|null}\n     */\n    this.findScrollableElementFrame = null;\n\n    this[onDragStart] = this[onDragStart].bind(this);\n    this[onDragMove] = this[onDragMove].bind(this);\n    this[onDragStop] = this[onDragStop].bind(this);\n    this[scroll] = this[scroll].bind(this);\n  }\n\n  /**\n   * Attaches plugins event listeners\n   */\n  attach() {\n    this.draggable.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);\n  }\n\n  /**\n   * Detaches plugins event listeners\n   */\n  detach() {\n    this.draggable.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);\n  }\n\n  /**\n   * Returns options passed through draggable\n   * @return {Object}\n   */\n  getOptions() {\n    return this.draggable.options.scrollable || {};\n  }\n\n  /**\n   * Returns closest scrollable elements by element\n   * @param {HTMLElement} target\n   * @return {HTMLElement}\n   */\n  getScrollableElement(target) {\n    if (this.hasDefinedScrollableElements()) {\n      return (0, _utils.closest)(target, this.options.scrollableElements) || document.documentElement;\n    } else {\n      return closestScrollableElement(target);\n    }\n  }\n\n  /**\n   * Returns true if at least one scrollable element have been defined via options\n   * @param {HTMLElement} target\n   * @return {Boolean}\n   */\n  hasDefinedScrollableElements() {\n    return Boolean(this.options.scrollableElements.length !== 0);\n  }\n\n  /**\n   * Drag start handler. Finds closest scrollable parent in separate frame\n   * @param {DragStartEvent} dragEvent\n   * @private\n   */\n  [onDragStart](dragEvent) {\n    this.findScrollableElementFrame = requestAnimationFrame(() => {\n      this.scrollableElement = this.getScrollableElement(dragEvent.source);\n    });\n  }\n\n  /**\n   * Drag move handler. Remembers mouse position and initiates scrolling\n   * @param {DragMoveEvent} dragEvent\n   * @private\n   */\n  [onDragMove](dragEvent) {\n    this.findScrollableElementFrame = requestAnimationFrame(() => {\n      this.scrollableElement = this.getScrollableElement(dragEvent.sensorEvent.target);\n    });\n\n    if (!this.scrollableElement) {\n      return;\n    }\n\n    const sensorEvent = dragEvent.sensorEvent;\n    const scrollOffset = { x: 0, y: 0 };\n\n    if ('ontouchstart' in window) {\n      scrollOffset.y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;\n      scrollOffset.x = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;\n    }\n\n    this.currentMousePosition = {\n      clientX: sensorEvent.clientX - scrollOffset.x,\n      clientY: sensorEvent.clientY - scrollOffset.y\n    };\n\n    this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);\n  }\n\n  /**\n   * Drag stop handler. Cancels scroll animations and resets state\n   * @private\n   */\n  [onDragStop]() {\n    cancelAnimationFrame(this.scrollAnimationFrame);\n    cancelAnimationFrame(this.findScrollableElementFrame);\n\n    this.scrollableElement = null;\n    this.scrollAnimationFrame = null;\n    this.findScrollableElementFrame = null;\n    this.currentMousePosition = null;\n  }\n\n  /**\n   * Scroll function that does the heavylifting\n   * @private\n   */\n  [scroll]() {\n    if (!this.scrollableElement || !this.currentMousePosition) {\n      return;\n    }\n\n    cancelAnimationFrame(this.scrollAnimationFrame);\n\n    const { speed, sensitivity } = this.options;\n\n    const rect = this.scrollableElement.getBoundingClientRect();\n    const bottomCutOff = rect.bottom > window.innerHeight;\n    const topCutOff = rect.top < 0;\n    const cutOff = topCutOff || bottomCutOff;\n\n    const documentScrollingElement = getDocumentScrollingElement();\n    const scrollableElement = this.scrollableElement;\n    const clientX = this.currentMousePosition.clientX;\n    const clientY = this.currentMousePosition.clientY;\n\n    if (scrollableElement !== document.body && scrollableElement !== document.documentElement && !cutOff) {\n      const { offsetHeight, offsetWidth } = scrollableElement;\n\n      if (rect.top + offsetHeight - clientY < sensitivity) {\n        scrollableElement.scrollTop += speed;\n      } else if (clientY - rect.top < sensitivity) {\n        scrollableElement.scrollTop -= speed;\n      }\n\n      if (rect.left + offsetWidth - clientX < sensitivity) {\n        scrollableElement.scrollLeft += speed;\n      } else if (clientX - rect.left < sensitivity) {\n        scrollableElement.scrollLeft -= speed;\n      }\n    } else {\n      const { innerHeight, innerWidth } = window;\n\n      if (clientY < sensitivity) {\n        documentScrollingElement.scrollTop -= speed;\n      } else if (innerHeight - clientY < sensitivity) {\n        documentScrollingElement.scrollTop += speed;\n      }\n\n      if (clientX < sensitivity) {\n        documentScrollingElement.scrollLeft -= speed;\n      } else if (innerWidth - clientX < sensitivity) {\n        documentScrollingElement.scrollLeft += speed;\n      }\n    }\n\n    this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);\n  }\n}\n\nexports.default = Scrollable; /**\n                               * Returns true if the passed element has overflow\n                               * @param {HTMLElement} element\n                               * @return {Boolean}\n                               * @private\n                               */\n\nfunction hasOverflow(element) {\n  const overflowRegex = /(auto|scroll)/;\n  const computedStyles = getComputedStyle(element, null);\n\n  const overflow = computedStyles.getPropertyValue('overflow') + computedStyles.getPropertyValue('overflow-y') + computedStyles.getPropertyValue('overflow-x');\n\n  return overflowRegex.test(overflow);\n}\n\n/**\n * Returns true if the passed element is statically positioned\n * @param {HTMLElement} element\n * @return {Boolean}\n * @private\n */\nfunction isStaticallyPositioned(element) {\n  const position = getComputedStyle(element).getPropertyValue('position');\n  return position === 'static';\n}\n\n/**\n * Finds closest scrollable element\n * @param {HTMLElement} element\n * @return {HTMLElement}\n * @private\n */\nfunction closestScrollableElement(element) {\n  if (!element) {\n    return getDocumentScrollingElement();\n  }\n\n  const position = getComputedStyle(element).getPropertyValue('position');\n  const excludeStaticParents = position === 'absolute';\n\n  const scrollableElement = (0, _utils.closest)(element, parent => {\n    if (excludeStaticParents && isStaticallyPositioned(parent)) {\n      return false;\n    }\n    return hasOverflow(parent);\n  });\n\n  if (position === 'fixed' || !scrollableElement) {\n    return getDocumentScrollingElement();\n  } else {\n    return scrollableElement;\n  }\n}\n\n/**\n * Returns element that scrolls document\n * @return {HTMLElement}\n * @private\n */\nfunction getDocumentScrollingElement() {\n  return document.scrollingElement || document.documentElement;\n}\n\n//# sourceURL=webpack://Draggable/./src/Draggable/Plugins/Scrollable/Scrollable.js?");

        /***/
      },

      /***/"./src/Draggable/Plugins/Scrollable/index.js":
      /*!***************************************************!*\
        !*** ./src/Draggable/Plugins/Scrollable/index.js ***!
        \***************************************************/
      /*! no static exports found */
      /***/function srcDraggablePluginsScrollableIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.defaultOptions = undefined;\n\nvar _Scrollable = __webpack_require__(/*! ./Scrollable */ \"./src/Draggable/Plugins/Scrollable/Scrollable.js\");\n\nvar _Scrollable2 = _interopRequireDefault(_Scrollable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Scrollable2.default;\nexports.defaultOptions = _Scrollable.defaultOptions;\n\n//# sourceURL=webpack://Draggable/./src/Draggable/Plugins/Scrollable/index.js?");

        /***/
      },

      /***/"./src/Draggable/Plugins/index.js":
      /*!****************************************!*\
        !*** ./src/Draggable/Plugins/index.js ***!
        \****************************************/
      /*! no static exports found */
      /***/function srcDraggablePluginsIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Announcement = __webpack_require__(/*! ./Announcement */ \"./src/Draggable/Plugins/Announcement/index.js\");\n\nObject.defineProperty(exports, 'Announcement', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_Announcement).default;\n  }\n});\nObject.defineProperty(exports, 'defaultAnnouncementOptions', {\n  enumerable: true,\n  get: function () {\n    return _Announcement.defaultOptions;\n  }\n});\n\nvar _Focusable = __webpack_require__(/*! ./Focusable */ \"./src/Draggable/Plugins/Focusable/index.js\");\n\nObject.defineProperty(exports, 'Focusable', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_Focusable).default;\n  }\n});\n\nvar _Mirror = __webpack_require__(/*! ./Mirror */ \"./src/Draggable/Plugins/Mirror/index.js\");\n\nObject.defineProperty(exports, 'Mirror', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_Mirror).default;\n  }\n});\nObject.defineProperty(exports, 'defaultMirrorOptions', {\n  enumerable: true,\n  get: function () {\n    return _Mirror.defaultOptions;\n  }\n});\n\nvar _Scrollable = __webpack_require__(/*! ./Scrollable */ \"./src/Draggable/Plugins/Scrollable/index.js\");\n\nObject.defineProperty(exports, 'Scrollable', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_Scrollable).default;\n  }\n});\nObject.defineProperty(exports, 'defaultScrollableOptions', {\n  enumerable: true,\n  get: function () {\n    return _Scrollable.defaultOptions;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://Draggable/./src/Draggable/Plugins/index.js?");

        /***/
      },

      /***/"./src/Draggable/Sensors/DragSensor/DragSensor.js":
      /*!********************************************************!*\
        !*** ./src/Draggable/Sensors/DragSensor/DragSensor.js ***!
        \********************************************************/
      /*! no static exports found */
      /***/function srcDraggableSensorsDragSensorDragSensorJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _utils = __webpack_require__(/*! shared/utils */ \"./src/shared/utils/index.js\");\n\nvar _Sensor = __webpack_require__(/*! ../Sensor */ \"./src/Draggable/Sensors/Sensor/index.js\");\n\nvar _Sensor2 = _interopRequireDefault(_Sensor);\n\nvar _SensorEvent = __webpack_require__(/*! ../SensorEvent */ \"./src/Draggable/Sensors/SensorEvent/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onMouseDown = Symbol('onMouseDown');\nconst onMouseUp = Symbol('onMouseUp');\nconst onDragStart = Symbol('onDragStart');\nconst onDragOver = Symbol('onDragOver');\nconst onDragEnd = Symbol('onDragEnd');\nconst onDrop = Symbol('onDrop');\nconst reset = Symbol('reset');\n\n/**\n * This sensor picks up native browser drag events and dictates drag operations\n * @class DragSensor\n * @module DragSensor\n * @extends Sensor\n */\nclass DragSensor extends _Sensor2.default {\n  /**\n   * DragSensor constructor.\n   * @constructs DragSensor\n   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers\n   * @param {Object} options - Options\n   */\n  constructor(containers = [], options = {}) {\n    super(containers, options);\n\n    /**\n     * Mouse down timer which will end up setting the draggable attribute, unless canceled\n     * @property mouseDownTimeout\n     * @type {Number}\n     */\n    this.mouseDownTimeout = null;\n\n    /**\n     * Draggable element needs to be remembered to unset the draggable attribute after drag operation has completed\n     * @property draggableElement\n     * @type {HTMLElement}\n     */\n    this.draggableElement = null;\n\n    /**\n     * Native draggable element could be links or images, their draggable state will be disabled during drag operation\n     * @property nativeDraggableElement\n     * @type {HTMLElement}\n     */\n    this.nativeDraggableElement = null;\n\n    this[onMouseDown] = this[onMouseDown].bind(this);\n    this[onMouseUp] = this[onMouseUp].bind(this);\n    this[onDragStart] = this[onDragStart].bind(this);\n    this[onDragOver] = this[onDragOver].bind(this);\n    this[onDragEnd] = this[onDragEnd].bind(this);\n    this[onDrop] = this[onDrop].bind(this);\n  }\n\n  /**\n   * Attaches sensors event listeners to the DOM\n   */\n  attach() {\n    document.addEventListener('mousedown', this[onMouseDown], true);\n  }\n\n  /**\n   * Detaches sensors event listeners to the DOM\n   */\n  detach() {\n    document.removeEventListener('mousedown', this[onMouseDown], true);\n  }\n\n  /**\n   * Drag start handler\n   * @private\n   * @param {Event} event - Drag start event\n   */\n  [onDragStart](event) {\n    // Need for firefox. \"text\" key is needed for IE\n    event.dataTransfer.setData('text', '');\n    event.dataTransfer.effectAllowed = this.options.type;\n\n    const target = document.elementFromPoint(event.clientX, event.clientY);\n    this.currentContainer = (0, _utils.closest)(event.target, this.containers);\n\n    if (!this.currentContainer) {\n      return;\n    }\n\n    const dragStartEvent = new _SensorEvent.DragStartSensorEvent({\n      clientX: event.clientX,\n      clientY: event.clientY,\n      target,\n      container: this.currentContainer,\n      originalEvent: event\n    });\n\n    // Workaround\n    setTimeout(() => {\n      this.trigger(this.currentContainer, dragStartEvent);\n\n      if (dragStartEvent.canceled()) {\n        this.dragging = false;\n      } else {\n        this.dragging = true;\n      }\n    }, 0);\n  }\n\n  /**\n   * Drag over handler\n   * @private\n   * @param {Event} event - Drag over event\n   */\n  [onDragOver](event) {\n    if (!this.dragging) {\n      return;\n    }\n\n    const target = document.elementFromPoint(event.clientX, event.clientY);\n    const container = this.currentContainer;\n\n    const dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({\n      clientX: event.clientX,\n      clientY: event.clientY,\n      target,\n      container,\n      originalEvent: event\n    });\n\n    this.trigger(container, dragMoveEvent);\n\n    if (!dragMoveEvent.canceled()) {\n      event.preventDefault();\n      event.dataTransfer.dropEffect = this.options.type;\n    }\n  }\n\n  /**\n   * Drag end handler\n   * @private\n   * @param {Event} event - Drag end event\n   */\n  [onDragEnd](event) {\n    if (!this.dragging) {\n      return;\n    }\n\n    document.removeEventListener('mouseup', this[onMouseUp], true);\n\n    const target = document.elementFromPoint(event.clientX, event.clientY);\n    const container = this.currentContainer;\n\n    const dragStopEvent = new _SensorEvent.DragStopSensorEvent({\n      clientX: event.clientX,\n      clientY: event.clientY,\n      target,\n      container,\n      originalEvent: event\n    });\n\n    this.trigger(container, dragStopEvent);\n\n    this.dragging = false;\n\n    this[reset]();\n  }\n\n  /**\n   * Drop handler\n   * @private\n   * @param {Event} event - Drop event\n   */\n  [onDrop](event) {\n    // eslint-disable-line class-methods-use-this\n    event.preventDefault();\n  }\n\n  /**\n   * Mouse down handler\n   * @private\n   * @param {Event} event - Mouse down event\n   */\n  [onMouseDown](event) {\n    // Firefox bug for inputs within draggables https://bugzilla.mozilla.org/show_bug.cgi?id=739071\n    if (event.target && (event.target.form || event.target.contenteditable)) {\n      return;\n    }\n\n    const nativeDraggableElement = (0, _utils.closest)(event.target, element => element.draggable);\n\n    if (nativeDraggableElement) {\n      nativeDraggableElement.draggable = false;\n      this.nativeDraggableElement = nativeDraggableElement;\n    }\n\n    document.addEventListener('mouseup', this[onMouseUp], true);\n    document.addEventListener('dragstart', this[onDragStart], false);\n    document.addEventListener('dragover', this[onDragOver], false);\n    document.addEventListener('dragend', this[onDragEnd], false);\n    document.addEventListener('drop', this[onDrop], false);\n\n    const target = (0, _utils.closest)(event.target, this.options.draggable);\n\n    if (!target) {\n      return;\n    }\n\n    this.mouseDownTimeout = setTimeout(() => {\n      target.draggable = true;\n      this.draggableElement = target;\n    }, this.options.delay);\n  }\n\n  /**\n   * Mouse up handler\n   * @private\n   * @param {Event} event - Mouse up event\n   */\n  [onMouseUp]() {\n    this[reset]();\n  }\n\n  /**\n   * Mouse up handler\n   * @private\n   * @param {Event} event - Mouse up event\n   */\n  [reset]() {\n    clearTimeout(this.mouseDownTimeout);\n\n    document.removeEventListener('mouseup', this[onMouseUp], true);\n    document.removeEventListener('dragstart', this[onDragStart], false);\n    document.removeEventListener('dragover', this[onDragOver], false);\n    document.removeEventListener('dragend', this[onDragEnd], false);\n    document.removeEventListener('drop', this[onDrop], false);\n\n    if (this.nativeDraggableElement) {\n      this.nativeDraggableElement.draggable = true;\n      this.nativeDraggableElement = null;\n    }\n\n    if (this.draggableElement) {\n      this.draggableElement.draggable = false;\n      this.draggableElement = null;\n    }\n  }\n}\nexports.default = DragSensor;\n\n//# sourceURL=webpack://Draggable/./src/Draggable/Sensors/DragSensor/DragSensor.js?");

        /***/
      },

      /***/"./src/Draggable/Sensors/DragSensor/index.js":
      /*!***************************************************!*\
        !*** ./src/Draggable/Sensors/DragSensor/index.js ***!
        \***************************************************/
      /*! no static exports found */
      /***/function srcDraggableSensorsDragSensorIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _DragSensor = __webpack_require__(/*! ./DragSensor */ \"./src/Draggable/Sensors/DragSensor/DragSensor.js\");\n\nvar _DragSensor2 = _interopRequireDefault(_DragSensor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _DragSensor2.default;\n\n//# sourceURL=webpack://Draggable/./src/Draggable/Sensors/DragSensor/index.js?");

        /***/
      },

      /***/"./src/Draggable/Sensors/ForceTouchSensor/ForceTouchSensor.js":
      /*!********************************************************************!*\
        !*** ./src/Draggable/Sensors/ForceTouchSensor/ForceTouchSensor.js ***!
        \********************************************************************/
      /*! no static exports found */
      /***/function srcDraggableSensorsForceTouchSensorForceTouchSensorJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Sensor = __webpack_require__(/*! ../Sensor */ \"./src/Draggable/Sensors/Sensor/index.js\");\n\nvar _Sensor2 = _interopRequireDefault(_Sensor);\n\nvar _SensorEvent = __webpack_require__(/*! ../SensorEvent */ \"./src/Draggable/Sensors/SensorEvent/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onMouseForceWillBegin = Symbol('onMouseForceWillBegin');\nconst onMouseForceDown = Symbol('onMouseForceDown');\nconst onMouseDown = Symbol('onMouseDown');\nconst onMouseForceChange = Symbol('onMouseForceChange');\nconst onMouseMove = Symbol('onMouseMove');\nconst onMouseUp = Symbol('onMouseUp');\nconst onMouseForceGlobalChange = Symbol('onMouseForceGlobalChange');\n\n/**\n * This sensor picks up native force touch events and dictates drag operations\n * @class ForceTouchSensor\n * @module ForceTouchSensor\n * @extends Sensor\n */\nclass ForceTouchSensor extends _Sensor2.default {\n  /**\n   * ForceTouchSensor constructor.\n   * @constructs ForceTouchSensor\n   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers\n   * @param {Object} options - Options\n   */\n  constructor(containers = [], options = {}) {\n    super(containers, options);\n\n    /**\n     * Draggable element needs to be remembered to unset the draggable attribute after drag operation has completed\n     * @property mightDrag\n     * @type {Boolean}\n     */\n    this.mightDrag = false;\n\n    this[onMouseForceWillBegin] = this[onMouseForceWillBegin].bind(this);\n    this[onMouseForceDown] = this[onMouseForceDown].bind(this);\n    this[onMouseDown] = this[onMouseDown].bind(this);\n    this[onMouseForceChange] = this[onMouseForceChange].bind(this);\n    this[onMouseMove] = this[onMouseMove].bind(this);\n    this[onMouseUp] = this[onMouseUp].bind(this);\n  }\n\n  /**\n   * Attaches sensors event listeners to the DOM\n   */\n  attach() {\n    for (const container of this.containers) {\n      container.addEventListener('webkitmouseforcewillbegin', this[onMouseForceWillBegin], false);\n      container.addEventListener('webkitmouseforcedown', this[onMouseForceDown], false);\n      container.addEventListener('mousedown', this[onMouseDown], true);\n      container.addEventListener('webkitmouseforcechanged', this[onMouseForceChange], false);\n    }\n\n    document.addEventListener('mousemove', this[onMouseMove]);\n    document.addEventListener('mouseup', this[onMouseUp]);\n  }\n\n  /**\n   * Detaches sensors event listeners to the DOM\n   */\n  detach() {\n    for (const container of this.containers) {\n      container.removeEventListener('webkitmouseforcewillbegin', this[onMouseForceWillBegin], false);\n      container.removeEventListener('webkitmouseforcedown', this[onMouseForceDown], false);\n      container.removeEventListener('mousedown', this[onMouseDown], true);\n      container.removeEventListener('webkitmouseforcechanged', this[onMouseForceChange], false);\n    }\n\n    document.removeEventListener('mousemove', this[onMouseMove]);\n    document.removeEventListener('mouseup', this[onMouseUp]);\n  }\n\n  /**\n   * Mouse force will begin handler\n   * @private\n   * @param {Event} event - Mouse force will begin event\n   */\n  [onMouseForceWillBegin](event) {\n    event.preventDefault();\n    this.mightDrag = true;\n  }\n\n  /**\n   * Mouse force down handler\n   * @private\n   * @param {Event} event - Mouse force down event\n   */\n  [onMouseForceDown](event) {\n    if (this.dragging) {\n      return;\n    }\n\n    const target = document.elementFromPoint(event.clientX, event.clientY);\n    const container = event.currentTarget;\n\n    const dragStartEvent = new _SensorEvent.DragStartSensorEvent({\n      clientX: event.clientX,\n      clientY: event.clientY,\n      target,\n      container,\n      originalEvent: event\n    });\n\n    this.trigger(container, dragStartEvent);\n\n    this.currentContainer = container;\n    this.dragging = !dragStartEvent.canceled();\n    this.mightDrag = false;\n  }\n\n  /**\n   * Mouse up handler\n   * @private\n   * @param {Event} event - Mouse up event\n   */\n  [onMouseUp](event) {\n    if (!this.dragging) {\n      return;\n    }\n\n    const dragStopEvent = new _SensorEvent.DragStopSensorEvent({\n      clientX: event.clientX,\n      clientY: event.clientY,\n      target: null,\n      container: this.currentContainer,\n      originalEvent: event\n    });\n\n    this.trigger(this.currentContainer, dragStopEvent);\n\n    this.currentContainer = null;\n    this.dragging = false;\n    this.mightDrag = false;\n  }\n\n  /**\n   * Mouse down handler\n   * @private\n   * @param {Event} event - Mouse down event\n   */\n  [onMouseDown](event) {\n    if (!this.mightDrag) {\n      return;\n    }\n\n    // Need workaround for real click\n    // Cancel potential drag events\n    event.stopPropagation();\n    event.stopImmediatePropagation();\n    event.preventDefault();\n  }\n\n  /**\n   * Mouse move handler\n   * @private\n   * @param {Event} event - Mouse force will begin event\n   */\n  [onMouseMove](event) {\n    if (!this.dragging) {\n      return;\n    }\n\n    const target = document.elementFromPoint(event.clientX, event.clientY);\n\n    const dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({\n      clientX: event.clientX,\n      clientY: event.clientY,\n      target,\n      container: this.currentContainer,\n      originalEvent: event\n    });\n\n    this.trigger(this.currentContainer, dragMoveEvent);\n  }\n\n  /**\n   * Mouse force change handler\n   * @private\n   * @param {Event} event - Mouse force change event\n   */\n  [onMouseForceChange](event) {\n    if (this.dragging) {\n      return;\n    }\n\n    const target = event.target;\n    const container = event.currentTarget;\n\n    const dragPressureEvent = new _SensorEvent.DragPressureSensorEvent({\n      pressure: event.webkitForce,\n      clientX: event.clientX,\n      clientY: event.clientY,\n      target,\n      container,\n      originalEvent: event\n    });\n\n    this.trigger(container, dragPressureEvent);\n  }\n\n  /**\n   * Mouse force global change handler\n   * @private\n   * @param {Event} event - Mouse force global change event\n   */\n  [onMouseForceGlobalChange](event) {\n    if (!this.dragging) {\n      return;\n    }\n\n    const target = event.target;\n\n    const dragPressureEvent = new _SensorEvent.DragPressureSensorEvent({\n      pressure: event.webkitForce,\n      clientX: event.clientX,\n      clientY: event.clientY,\n      target,\n      container: this.currentContainer,\n      originalEvent: event\n    });\n\n    this.trigger(this.currentContainer, dragPressureEvent);\n  }\n}\nexports.default = ForceTouchSensor;\n\n//# sourceURL=webpack://Draggable/./src/Draggable/Sensors/ForceTouchSensor/ForceTouchSensor.js?");

        /***/
      },

      /***/"./src/Draggable/Sensors/ForceTouchSensor/index.js":
      /*!*********************************************************!*\
        !*** ./src/Draggable/Sensors/ForceTouchSensor/index.js ***!
        \*********************************************************/
      /*! no static exports found */
      /***/function srcDraggableSensorsForceTouchSensorIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _ForceTouchSensor = __webpack_require__(/*! ./ForceTouchSensor */ \"./src/Draggable/Sensors/ForceTouchSensor/ForceTouchSensor.js\");\n\nvar _ForceTouchSensor2 = _interopRequireDefault(_ForceTouchSensor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _ForceTouchSensor2.default;\n\n//# sourceURL=webpack://Draggable/./src/Draggable/Sensors/ForceTouchSensor/index.js?");

        /***/
      },

      /***/"./src/Draggable/Sensors/MouseSensor/MouseSensor.js":
      /*!**********************************************************!*\
        !*** ./src/Draggable/Sensors/MouseSensor/MouseSensor.js ***!
        \**********************************************************/
      /*! no static exports found */
      /***/function srcDraggableSensorsMouseSensorMouseSensorJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _utils = __webpack_require__(/*! shared/utils */ \"./src/shared/utils/index.js\");\n\nvar _Sensor = __webpack_require__(/*! ../Sensor */ \"./src/Draggable/Sensors/Sensor/index.js\");\n\nvar _Sensor2 = _interopRequireDefault(_Sensor);\n\nvar _SensorEvent = __webpack_require__(/*! ../SensorEvent */ \"./src/Draggable/Sensors/SensorEvent/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onContextMenuWhileDragging = Symbol('onContextMenuWhileDragging');\nconst onMouseDown = Symbol('onMouseDown');\nconst onMouseMove = Symbol('onMouseMove');\nconst onMouseUp = Symbol('onMouseUp');\n\n/**\n * This sensor picks up native browser mouse events and dictates drag operations\n * @class MouseSensor\n * @module MouseSensor\n * @extends Sensor\n */\nclass MouseSensor extends _Sensor2.default {\n  /**\n   * MouseSensor constructor.\n   * @constructs MouseSensor\n   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers\n   * @param {Object} options - Options\n   */\n  constructor(containers = [], options = {}) {\n    super(containers, options);\n\n    /**\n     * Indicates if mouse button is still down\n     * @property mouseDown\n     * @type {Boolean}\n     */\n    this.mouseDown = false;\n\n    /**\n     * Mouse down timer which will end up triggering the drag start operation\n     * @property mouseDownTimeout\n     * @type {Number}\n     */\n    this.mouseDownTimeout = null;\n\n    /**\n     * Indicates if context menu has been opened during drag operation\n     * @property openedContextMenu\n     * @type {Boolean}\n     */\n    this.openedContextMenu = false;\n\n    this[onContextMenuWhileDragging] = this[onContextMenuWhileDragging].bind(this);\n    this[onMouseDown] = this[onMouseDown].bind(this);\n    this[onMouseMove] = this[onMouseMove].bind(this);\n    this[onMouseUp] = this[onMouseUp].bind(this);\n  }\n\n  /**\n   * Attaches sensors event listeners to the DOM\n   */\n  attach() {\n    document.addEventListener('mousedown', this[onMouseDown], true);\n  }\n\n  /**\n   * Detaches sensors event listeners to the DOM\n   */\n  detach() {\n    document.removeEventListener('mousedown', this[onMouseDown], true);\n  }\n\n  /**\n   * Mouse down handler\n   * @private\n   * @param {Event} event - Mouse down event\n   */\n  [onMouseDown](event) {\n    if (event.button !== 0 || event.ctrlKey || event.metaKey) {\n      return;\n    }\n\n    document.addEventListener('mouseup', this[onMouseUp]);\n\n    const target = document.elementFromPoint(event.clientX, event.clientY);\n    const container = (0, _utils.closest)(target, this.containers);\n\n    if (!container) {\n      return;\n    }\n\n    document.addEventListener('dragstart', preventNativeDragStart);\n\n    this.mouseDown = true;\n\n    clearTimeout(this.mouseDownTimeout);\n    this.mouseDownTimeout = setTimeout(() => {\n      if (!this.mouseDown) {\n        return;\n      }\n\n      const dragStartEvent = new _SensorEvent.DragStartSensorEvent({\n        clientX: event.clientX,\n        clientY: event.clientY,\n        target,\n        container,\n        originalEvent: event\n      });\n\n      this.trigger(container, dragStartEvent);\n\n      this.currentContainer = container;\n      this.dragging = !dragStartEvent.canceled();\n\n      if (this.dragging) {\n        document.addEventListener('contextmenu', this[onContextMenuWhileDragging]);\n        document.addEventListener('mousemove', this[onMouseMove]);\n      }\n    }, this.options.delay);\n  }\n\n  /**\n   * Mouse move handler\n   * @private\n   * @param {Event} event - Mouse move event\n   */\n  [onMouseMove](event) {\n    if (!this.dragging) {\n      return;\n    }\n\n    const target = document.elementFromPoint(event.clientX, event.clientY);\n\n    const dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({\n      clientX: event.clientX,\n      clientY: event.clientY,\n      target,\n      container: this.currentContainer,\n      originalEvent: event\n    });\n\n    this.trigger(this.currentContainer, dragMoveEvent);\n  }\n\n  /**\n   * Mouse up handler\n   * @private\n   * @param {Event} event - Mouse up event\n   */\n  [onMouseUp](event) {\n    this.mouseDown = Boolean(this.openedContextMenu);\n\n    if (this.openedContextMenu) {\n      this.openedContextMenu = false;\n      return;\n    }\n\n    document.removeEventListener('mouseup', this[onMouseUp]);\n    document.removeEventListener('dragstart', preventNativeDragStart);\n\n    if (!this.dragging) {\n      return;\n    }\n\n    const target = document.elementFromPoint(event.clientX, event.clientY);\n\n    const dragStopEvent = new _SensorEvent.DragStopSensorEvent({\n      clientX: event.clientX,\n      clientY: event.clientY,\n      target,\n      container: this.currentContainer,\n      originalEvent: event\n    });\n\n    this.trigger(this.currentContainer, dragStopEvent);\n\n    document.removeEventListener('contextmenu', this[onContextMenuWhileDragging]);\n    document.removeEventListener('mousemove', this[onMouseMove]);\n\n    this.currentContainer = null;\n    this.dragging = false;\n  }\n\n  /**\n   * Context menu handler\n   * @private\n   * @param {Event} event - Context menu event\n   */\n  [onContextMenuWhileDragging](event) {\n    event.preventDefault();\n    this.openedContextMenu = true;\n  }\n}\n\nexports.default = MouseSensor;\nfunction preventNativeDragStart(event) {\n  event.preventDefault();\n}\n\n//# sourceURL=webpack://Draggable/./src/Draggable/Sensors/MouseSensor/MouseSensor.js?");

        /***/
      },

      /***/"./src/Draggable/Sensors/MouseSensor/index.js":
      /*!****************************************************!*\
        !*** ./src/Draggable/Sensors/MouseSensor/index.js ***!
        \****************************************************/
      /*! no static exports found */
      /***/function srcDraggableSensorsMouseSensorIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _MouseSensor = __webpack_require__(/*! ./MouseSensor */ \"./src/Draggable/Sensors/MouseSensor/MouseSensor.js\");\n\nvar _MouseSensor2 = _interopRequireDefault(_MouseSensor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _MouseSensor2.default;\n\n//# sourceURL=webpack://Draggable/./src/Draggable/Sensors/MouseSensor/index.js?");

        /***/
      },

      /***/"./src/Draggable/Sensors/Sensor/Sensor.js":
      /*!************************************************!*\
        !*** ./src/Draggable/Sensors/Sensor/Sensor.js ***!
        \************************************************/
      /*! no static exports found */
      /***/function srcDraggableSensorsSensorSensorJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n/**\n * Base sensor class. Extend from this class to create a new or custom sensor\n * @class Sensor\n * @module Sensor\n */\nclass Sensor {\n  /**\n   * Sensor constructor.\n   * @constructs Sensor\n   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers\n   * @param {Object} options - Options\n   */\n  constructor(containers = [], options = {}) {\n    /**\n     * Current containers\n     * @property containers\n     * @type {HTMLElement[]}\n     */\n    this.containers = [...containers];\n\n    /**\n     * Current options\n     * @property options\n     * @type {Object}\n     */\n    this.options = _extends({}, options);\n\n    /**\n     * Current drag state\n     * @property dragging\n     * @type {Boolean}\n     */\n    this.dragging = false;\n\n    /**\n     * Current container\n     * @property currentContainer\n     * @type {HTMLElement}\n     */\n    this.currentContainer = null;\n  }\n\n  /**\n   * Attaches sensors event listeners to the DOM\n   * @return {Sensor}\n   */\n  attach() {\n    return this;\n  }\n\n  /**\n   * Detaches sensors event listeners to the DOM\n   * @return {Sensor}\n   */\n  detach() {\n    return this;\n  }\n\n  /**\n   * Adds container to this sensor instance\n   * @param {...HTMLElement} containers - Containers you want to add to this sensor\n   * @example draggable.addContainer(document.body)\n   */\n  addContainer(...containers) {\n    this.containers = [...this.containers, ...containers];\n  }\n\n  /**\n   * Removes container from this sensor instance\n   * @param {...HTMLElement} containers - Containers you want to remove from this sensor\n   * @example draggable.removeContainer(document.body)\n   */\n  removeContainer(...containers) {\n    this.containers = this.containers.filter(container => !containers.includes(container));\n  }\n\n  /**\n   * Triggers event on target element\n   * @param {HTMLElement} element - Element to trigger event on\n   * @param {SensorEvent} sensorEvent - Sensor event to trigger\n   */\n  trigger(element, sensorEvent) {\n    const event = document.createEvent('Event');\n    event.detail = sensorEvent;\n    event.initEvent(sensorEvent.type, true, true);\n    element.dispatchEvent(event);\n    this.lastEvent = sensorEvent;\n\n    return sensorEvent;\n  }\n}\nexports.default = Sensor;\n\n//# sourceURL=webpack://Draggable/./src/Draggable/Sensors/Sensor/Sensor.js?");

        /***/
      },

      /***/"./src/Draggable/Sensors/Sensor/index.js":
      /*!***********************************************!*\
        !*** ./src/Draggable/Sensors/Sensor/index.js ***!
        \***********************************************/
      /*! no static exports found */
      /***/function srcDraggableSensorsSensorIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Sensor = __webpack_require__(/*! ./Sensor */ \"./src/Draggable/Sensors/Sensor/Sensor.js\");\n\nvar _Sensor2 = _interopRequireDefault(_Sensor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Sensor2.default;\n\n//# sourceURL=webpack://Draggable/./src/Draggable/Sensors/Sensor/index.js?");

        /***/
      },

      /***/"./src/Draggable/Sensors/SensorEvent/SensorEvent.js":
      /*!**********************************************************!*\
        !*** ./src/Draggable/Sensors/SensorEvent/SensorEvent.js ***!
        \**********************************************************/
      /*! no static exports found */
      /***/function srcDraggableSensorsSensorEventSensorEventJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.DragPressureSensorEvent = exports.DragStopSensorEvent = exports.DragMoveSensorEvent = exports.DragStartSensorEvent = exports.SensorEvent = undefined;\n\nvar _AbstractEvent = __webpack_require__(/*! shared/AbstractEvent */ \"./src/shared/AbstractEvent/index.js\");\n\nvar _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Base sensor event\n * @class SensorEvent\n * @module SensorEvent\n * @extends AbstractEvent\n */\nclass SensorEvent extends _AbstractEvent2.default {\n  /**\n   * Original browser event that triggered a sensor\n   * @property originalEvent\n   * @type {Event}\n   * @readonly\n   */\n  get originalEvent() {\n    return this.data.originalEvent;\n  }\n\n  /**\n   * Normalized clientX for both touch and mouse events\n   * @property clientX\n   * @type {Number}\n   * @readonly\n   */\n  get clientX() {\n    return this.data.clientX;\n  }\n\n  /**\n   * Normalized clientY for both touch and mouse events\n   * @property clientY\n   * @type {Number}\n   * @readonly\n   */\n  get clientY() {\n    return this.data.clientY;\n  }\n\n  /**\n   * Normalized target for both touch and mouse events\n   * Returns the element that is behind cursor or touch pointer\n   * @property target\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get target() {\n    return this.data.target;\n  }\n\n  /**\n   * Container that initiated the sensor\n   * @property container\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get container() {\n    return this.data.container;\n  }\n\n  /**\n   * Trackpad pressure\n   * @property pressure\n   * @type {Number}\n   * @readonly\n   */\n  get pressure() {\n    return this.data.pressure;\n  }\n}\n\nexports.SensorEvent = SensorEvent; /**\n                                    * Drag start sensor event\n                                    * @class DragStartSensorEvent\n                                    * @module DragStartSensorEvent\n                                    * @extends SensorEvent\n                                    */\n\nclass DragStartSensorEvent extends SensorEvent {}\n\nexports.DragStartSensorEvent = DragStartSensorEvent; /**\n                                                      * Drag move sensor event\n                                                      * @class DragMoveSensorEvent\n                                                      * @module DragMoveSensorEvent\n                                                      * @extends SensorEvent\n                                                      */\n\nDragStartSensorEvent.type = 'drag:start';\nclass DragMoveSensorEvent extends SensorEvent {}\n\nexports.DragMoveSensorEvent = DragMoveSensorEvent; /**\n                                                    * Drag stop sensor event\n                                                    * @class DragStopSensorEvent\n                                                    * @module DragStopSensorEvent\n                                                    * @extends SensorEvent\n                                                    */\n\nDragMoveSensorEvent.type = 'drag:move';\nclass DragStopSensorEvent extends SensorEvent {}\n\nexports.DragStopSensorEvent = DragStopSensorEvent; /**\n                                                    * Drag pressure sensor event\n                                                    * @class DragPressureSensorEvent\n                                                    * @module DragPressureSensorEvent\n                                                    * @extends SensorEvent\n                                                    */\n\nDragStopSensorEvent.type = 'drag:stop';\nclass DragPressureSensorEvent extends SensorEvent {}\nexports.DragPressureSensorEvent = DragPressureSensorEvent;\nDragPressureSensorEvent.type = 'drag:pressure';\n\n//# sourceURL=webpack://Draggable/./src/Draggable/Sensors/SensorEvent/SensorEvent.js?");

        /***/
      },

      /***/"./src/Draggable/Sensors/SensorEvent/index.js":
      /*!****************************************************!*\
        !*** ./src/Draggable/Sensors/SensorEvent/index.js ***!
        \****************************************************/
      /*! no static exports found */
      /***/function srcDraggableSensorsSensorEventIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _SensorEvent = __webpack_require__(/*! ./SensorEvent */ \"./src/Draggable/Sensors/SensorEvent/SensorEvent.js\");\n\nObject.keys(_SensorEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _SensorEvent[key];\n    }\n  });\n});\n\n//# sourceURL=webpack://Draggable/./src/Draggable/Sensors/SensorEvent/index.js?");

        /***/
      },

      /***/"./src/Draggable/Sensors/TouchSensor/TouchSensor.js":
      /*!**********************************************************!*\
        !*** ./src/Draggable/Sensors/TouchSensor/TouchSensor.js ***!
        \**********************************************************/
      /*! no static exports found */
      /***/function srcDraggableSensorsTouchSensorTouchSensorJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _utils = __webpack_require__(/*! shared/utils */ \"./src/shared/utils/index.js\");\n\nvar _Sensor = __webpack_require__(/*! ../Sensor */ \"./src/Draggable/Sensors/Sensor/index.js\");\n\nvar _Sensor2 = _interopRequireDefault(_Sensor);\n\nvar _SensorEvent = __webpack_require__(/*! ../SensorEvent */ \"./src/Draggable/Sensors/SensorEvent/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onTouchStart = Symbol('onTouchStart');\nconst onTouchHold = Symbol('onTouchHold');\nconst onTouchEnd = Symbol('onTouchEnd');\nconst onTouchMove = Symbol('onTouchMove');\n\n/**\n * Prevents scrolling when set to true\n * @var {Boolean} preventScrolling\n */\nlet preventScrolling = false;\n\n// WebKit requires cancelable `touchmove` events to be added as early as possible\nwindow.addEventListener('touchmove', event => {\n  if (!preventScrolling) {\n    return;\n  }\n\n  // Prevent scrolling\n  event.preventDefault();\n}, { passive: false });\n\n/**\n * This sensor picks up native browser touch events and dictates drag operations\n * @class TouchSensor\n * @module TouchSensor\n * @extends Sensor\n */\nclass TouchSensor extends _Sensor2.default {\n  /**\n   * TouchSensor constructor.\n   * @constructs TouchSensor\n   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers\n   * @param {Object} options - Options\n   */\n  constructor(containers = [], options = {}) {\n    super(containers, options);\n\n    /**\n     * Closest scrollable container so accidental scroll can cancel long touch\n     * @property currentScrollableParent\n     * @type {HTMLElement}\n     */\n    this.currentScrollableParent = null;\n\n    /**\n     * TimeoutID for long touch\n     * @property tapTimeout\n     * @type {Number}\n     */\n    this.tapTimeout = null;\n\n    /**\n     * touchMoved indicates if touch has moved during tapTimeout\n     * @property touchMoved\n     * @type {Boolean}\n     */\n    this.touchMoved = false;\n\n    this[onTouchStart] = this[onTouchStart].bind(this);\n    this[onTouchHold] = this[onTouchHold].bind(this);\n    this[onTouchEnd] = this[onTouchEnd].bind(this);\n    this[onTouchMove] = this[onTouchMove].bind(this);\n  }\n\n  /**\n   * Attaches sensors event listeners to the DOM\n   */\n  attach() {\n    document.addEventListener('touchstart', this[onTouchStart]);\n  }\n\n  /**\n   * Detaches sensors event listeners to the DOM\n   */\n  detach() {\n    document.removeEventListener('touchstart', this[onTouchStart]);\n  }\n\n  /**\n   * Touch start handler\n   * @private\n   * @param {Event} event - Touch start event\n   */\n  [onTouchStart](event) {\n    const container = (0, _utils.closest)(event.target, this.containers);\n\n    if (!container) {\n      return;\n    }\n\n    document.addEventListener('touchmove', this[onTouchMove]);\n    document.addEventListener('touchend', this[onTouchEnd]);\n    document.addEventListener('touchcancel', this[onTouchEnd]);\n    container.addEventListener('contextmenu', onContextMenu);\n\n    this.currentContainer = container;\n    this.tapTimeout = setTimeout(this[onTouchHold](event, container), this.options.delay);\n  }\n\n  /**\n   * Touch hold handler\n   * @private\n   * @param {Event} event - Touch start event\n   * @param {HTMLElement} container - Container element\n   */\n  [onTouchHold](event, container) {\n    return () => {\n      if (this.touchMoved) {\n        return;\n      }\n\n      const touch = event.touches[0] || event.changedTouches[0];\n      const target = event.target;\n\n      const dragStartEvent = new _SensorEvent.DragStartSensorEvent({\n        clientX: touch.pageX,\n        clientY: touch.pageY,\n        target,\n        container,\n        originalEvent: event\n      });\n\n      this.trigger(container, dragStartEvent);\n\n      this.dragging = !dragStartEvent.canceled();\n      preventScrolling = this.dragging;\n    };\n  }\n\n  /**\n   * Touch move handler\n   * @private\n   * @param {Event} event - Touch move event\n   */\n  [onTouchMove](event) {\n    this.touchMoved = true;\n\n    if (!this.dragging) {\n      return;\n    }\n\n    const touch = event.touches[0] || event.changedTouches[0];\n    const target = document.elementFromPoint(touch.pageX - window.scrollX, touch.pageY - window.scrollY);\n\n    const dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({\n      clientX: touch.pageX,\n      clientY: touch.pageY,\n      target,\n      container: this.currentContainer,\n      originalEvent: event\n    });\n\n    this.trigger(this.currentContainer, dragMoveEvent);\n  }\n\n  /**\n   * Touch end handler\n   * @private\n   * @param {Event} event - Touch end event\n   */\n  [onTouchEnd](event) {\n    this.touchMoved = false;\n    preventScrolling = false;\n\n    document.removeEventListener('touchend', this[onTouchEnd]);\n    document.removeEventListener('touchcancel', this[onTouchEnd]);\n    document.removeEventListener('touchmove', this[onTouchMove]);\n\n    if (this.currentContainer) {\n      this.currentContainer.removeEventListener('contextmenu', onContextMenu);\n    }\n\n    clearTimeout(this.tapTimeout);\n\n    if (!this.dragging) {\n      return;\n    }\n\n    const touch = event.touches[0] || event.changedTouches[0];\n    const target = document.elementFromPoint(touch.pageX - window.scrollX, touch.pageY - window.scrollY);\n\n    event.preventDefault();\n\n    const dragStopEvent = new _SensorEvent.DragStopSensorEvent({\n      clientX: touch.pageX,\n      clientY: touch.pageY,\n      target,\n      container: this.currentContainer,\n      originalEvent: event\n    });\n\n    this.trigger(this.currentContainer, dragStopEvent);\n\n    this.currentContainer = null;\n    this.dragging = false;\n  }\n}\n\nexports.default = TouchSensor;\nfunction onContextMenu(event) {\n  event.preventDefault();\n  event.stopPropagation();\n}\n\n//# sourceURL=webpack://Draggable/./src/Draggable/Sensors/TouchSensor/TouchSensor.js?");

        /***/
      },

      /***/"./src/Draggable/Sensors/TouchSensor/index.js":
      /*!****************************************************!*\
        !*** ./src/Draggable/Sensors/TouchSensor/index.js ***!
        \****************************************************/
      /*! no static exports found */
      /***/function srcDraggableSensorsTouchSensorIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _TouchSensor = __webpack_require__(/*! ./TouchSensor */ \"./src/Draggable/Sensors/TouchSensor/TouchSensor.js\");\n\nvar _TouchSensor2 = _interopRequireDefault(_TouchSensor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _TouchSensor2.default;\n\n//# sourceURL=webpack://Draggable/./src/Draggable/Sensors/TouchSensor/index.js?");

        /***/
      },

      /***/"./src/Draggable/Sensors/index.js":
      /*!****************************************!*\
        !*** ./src/Draggable/Sensors/index.js ***!
        \****************************************/
      /*! no static exports found */
      /***/function srcDraggableSensorsIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Sensor = __webpack_require__(/*! ./Sensor */ \"./src/Draggable/Sensors/Sensor/index.js\");\n\nObject.defineProperty(exports, 'Sensor', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_Sensor).default;\n  }\n});\n\nvar _MouseSensor = __webpack_require__(/*! ./MouseSensor */ \"./src/Draggable/Sensors/MouseSensor/index.js\");\n\nObject.defineProperty(exports, 'MouseSensor', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_MouseSensor).default;\n  }\n});\n\nvar _TouchSensor = __webpack_require__(/*! ./TouchSensor */ \"./src/Draggable/Sensors/TouchSensor/index.js\");\n\nObject.defineProperty(exports, 'TouchSensor', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_TouchSensor).default;\n  }\n});\n\nvar _DragSensor = __webpack_require__(/*! ./DragSensor */ \"./src/Draggable/Sensors/DragSensor/index.js\");\n\nObject.defineProperty(exports, 'DragSensor', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_DragSensor).default;\n  }\n});\n\nvar _ForceTouchSensor = __webpack_require__(/*! ./ForceTouchSensor */ \"./src/Draggable/Sensors/ForceTouchSensor/index.js\");\n\nObject.defineProperty(exports, 'ForceTouchSensor', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_ForceTouchSensor).default;\n  }\n});\n\nvar _SensorEvent = __webpack_require__(/*! ./SensorEvent */ \"./src/Draggable/Sensors/SensorEvent/index.js\");\n\nObject.keys(_SensorEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _SensorEvent[key];\n    }\n  });\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://Draggable/./src/Draggable/Sensors/index.js?");

        /***/
      },

      /***/"./src/Draggable/index.js":
      /*!********************************!*\
        !*** ./src/Draggable/index.js ***!
        \********************************/
      /*! no static exports found */
      /***/function srcDraggableIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _DragEvent = __webpack_require__(/*! ./DragEvent */ \"./src/Draggable/DragEvent/index.js\");\n\nObject.keys(_DragEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _DragEvent[key];\n    }\n  });\n});\n\nvar _DraggableEvent = __webpack_require__(/*! ./DraggableEvent */ \"./src/Draggable/DraggableEvent/index.js\");\n\nObject.keys(_DraggableEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _DraggableEvent[key];\n    }\n  });\n});\n\nvar _Plugins = __webpack_require__(/*! ./Plugins */ \"./src/Draggable/Plugins/index.js\");\n\nObject.keys(_Plugins).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _Plugins[key];\n    }\n  });\n});\n\nvar _Sensors = __webpack_require__(/*! ./Sensors */ \"./src/Draggable/Sensors/index.js\");\n\nObject.keys(_Sensors).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _Sensors[key];\n    }\n  });\n});\n\nvar _Draggable = __webpack_require__(/*! ./Draggable */ \"./src/Draggable/Draggable.js\");\n\nvar _Draggable2 = _interopRequireDefault(_Draggable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Draggable2.default;\n\n//# sourceURL=webpack://Draggable/./src/Draggable/index.js?");

        /***/
      },

      /***/"./src/Droppable/Droppable.js":
      /*!************************************!*\
        !*** ./src/Droppable/Droppable.js ***!
        \************************************/
      /*! no static exports found */
      /***/function srcDroppableDroppableJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _utils = __webpack_require__(/*! shared/utils */ \"./src/shared/utils/index.js\");\n\nvar _Draggable = __webpack_require__(/*! ../Draggable */ \"./src/Draggable/index.js\");\n\nvar _Draggable2 = _interopRequireDefault(_Draggable);\n\nvar _DroppableEvent = __webpack_require__(/*! ./DroppableEvent */ \"./src/Droppable/DroppableEvent/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onDragStart = Symbol('onDragStart');\nconst onDragMove = Symbol('onDragMove');\nconst onDragStop = Symbol('onDragStop');\nconst dropInDropzone = Symbol('dropInDropZone');\nconst returnToOriginalDropzone = Symbol('returnToOriginalDropzone');\nconst closestDropzone = Symbol('closestDropzone');\nconst getDropzones = Symbol('getDropzones');\n\n/**\n * Returns an announcement message when the Draggable element is dropped into a dropzone element\n * @param {DroppableDroppedEvent} droppableEvent\n * @return {String}\n */\nfunction onDroppableDroppedDefaultAnnouncement({ dragEvent, dropzone }) {\n  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'draggable element';\n  const dropzoneText = dropzone.textContent.trim() || dropzone.id || 'droppable element';\n\n  return `Dropped ${sourceText} into ${dropzoneText}`;\n}\n\n/**\n * Returns an announcement message when the Draggable element has returned to its original dropzone element\n * @param {DroppableReturnedEvent} droppableEvent\n * @return {String}\n */\nfunction onDroppableReturnedDefaultAnnouncement({ dragEvent, dropzone }) {\n  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'draggable element';\n  const dropzoneText = dropzone.textContent.trim() || dropzone.id || 'droppable element';\n\n  return `Returned ${sourceText} from ${dropzoneText}`;\n}\n\n/**\n * @const {Object} defaultAnnouncements\n * @const {Function} defaultAnnouncements['droppable:dropped']\n * @const {Function} defaultAnnouncements['droppable:returned']\n */\nconst defaultAnnouncements = {\n  'droppable:dropped': onDroppableDroppedDefaultAnnouncement,\n  'droppable:returned': onDroppableReturnedDefaultAnnouncement\n};\n\nconst defaultClasses = {\n  'droppable:active': 'draggable-dropzone--active',\n  'droppable:occupied': 'draggable-dropzone--occupied'\n};\n\nconst defaultOptions = {\n  dropzone: '.draggable-droppable'\n};\n\n/**\n * Droppable is built on top of Draggable and allows dropping draggable elements\n * into dropzone element\n * @class Droppable\n * @module Droppable\n * @extends Draggable\n */\nclass Droppable extends _Draggable2.default {\n  /**\n   * Droppable constructor.\n   * @constructs Droppable\n   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Droppable containers\n   * @param {Object} options - Options for Droppable\n   */\n  constructor(containers = [], options = {}) {\n    super(containers, _extends({}, defaultOptions, options, {\n      classes: _extends({}, defaultClasses, options.classes || {}),\n      announcements: _extends({}, defaultAnnouncements, options.announcements || {})\n    }));\n\n    /**\n     * All dropzone elements on drag start\n     * @property dropzones\n     * @type {HTMLElement[]}\n     */\n    this.dropzones = null;\n\n    /**\n     * Last dropzone element that the source was dropped into\n     * @property lastDropzone\n     * @type {HTMLElement}\n     */\n    this.lastDropzone = null;\n\n    /**\n     * Initial dropzone element that the source was drag from\n     * @property initialDropzone\n     * @type {HTMLElement}\n     */\n    this.initialDropzone = null;\n\n    this[onDragStart] = this[onDragStart].bind(this);\n    this[onDragMove] = this[onDragMove].bind(this);\n    this[onDragStop] = this[onDragStop].bind(this);\n\n    this.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);\n  }\n\n  /**\n   * Destroys Droppable instance.\n   */\n  destroy() {\n    super.destroy();\n\n    this.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);\n  }\n\n  /**\n   * Drag start handler\n   * @private\n   * @param {DragStartEvent} event - Drag start event\n   */\n  [onDragStart](event) {\n    if (event.canceled()) {\n      return;\n    }\n\n    this.dropzones = [...this[getDropzones]()];\n    const dropzone = (0, _utils.closest)(event.sensorEvent.target, this.options.dropzone);\n\n    if (!dropzone) {\n      event.cancel();\n      return;\n    }\n\n    const droppableStartEvent = new _DroppableEvent.DroppableStartEvent({\n      dragEvent: event,\n      dropzone\n    });\n\n    this.trigger(droppableStartEvent);\n\n    if (droppableStartEvent.canceled()) {\n      event.cancel();\n      return;\n    }\n\n    this.initialDropzone = dropzone;\n\n    for (const dropzoneElement of this.dropzones) {\n      if (dropzoneElement.classList.contains(this.getClassNameFor('droppable:occupied'))) {\n        continue;\n      }\n\n      dropzoneElement.classList.add(this.getClassNameFor('droppable:active'));\n    }\n  }\n\n  /**\n   * Drag move handler\n   * @private\n   * @param {DragMoveEvent} event - Drag move event\n   */\n  [onDragMove](event) {\n    if (event.canceled()) {\n      return;\n    }\n\n    const dropzone = this[closestDropzone](event.sensorEvent.target);\n    const overEmptyDropzone = dropzone && !dropzone.classList.contains(this.getClassNameFor('droppable:occupied'));\n\n    if (overEmptyDropzone && this[dropInDropzone](event, dropzone)) {\n      this.lastDropzone = dropzone;\n    } else if ((!dropzone || dropzone === this.initialDropzone) && this.lastDropzone) {\n      this[returnToOriginalDropzone](event);\n      this.lastDropzone = null;\n    }\n  }\n\n  /**\n   * Drag stop handler\n   * @private\n   * @param {DragStopEvent} event - Drag stop event\n   */\n  [onDragStop](event) {\n    const droppableStopEvent = new _DroppableEvent.DroppableStopEvent({\n      dragEvent: event,\n      dropzone: this.lastDropzone || this.initialDropzone\n    });\n\n    this.trigger(droppableStopEvent);\n\n    const occupiedClass = this.getClassNameFor('droppable:occupied');\n\n    for (const dropzone of this.dropzones) {\n      dropzone.classList.remove(this.getClassNameFor('droppable:active'));\n    }\n\n    if (this.lastDropzone && this.lastDropzone !== this.initialDropzone) {\n      this.initialDropzone.classList.remove(occupiedClass);\n    }\n\n    this.dropzones = null;\n    this.lastDropzone = null;\n    this.initialDropzone = null;\n  }\n\n  /**\n   * Drops a draggable element into a dropzone element\n   * @private\n   * @param {DragMoveEvent} event - Drag move event\n   * @param {HTMLElement} dropzone - Dropzone element to drop draggable into\n   */\n  [dropInDropzone](event, dropzone) {\n    const droppableDroppedEvent = new _DroppableEvent.DroppableDroppedEvent({\n      dragEvent: event,\n      dropzone\n    });\n\n    this.trigger(droppableDroppedEvent);\n\n    if (droppableDroppedEvent.canceled()) {\n      return false;\n    }\n\n    const occupiedClass = this.getClassNameFor('droppable:occupied');\n\n    if (this.lastDropzone) {\n      this.lastDropzone.classList.remove(occupiedClass);\n    }\n\n    dropzone.appendChild(event.source);\n    dropzone.classList.add(occupiedClass);\n\n    return true;\n  }\n\n  /**\n   * Moves the previously dropped element back into its original dropzone\n   * @private\n   * @param {DragMoveEvent} event - Drag move event\n   */\n  [returnToOriginalDropzone](event) {\n    const droppableReturnedEvent = new _DroppableEvent.DroppableReturnedEvent({\n      dragEvent: event,\n      dropzone: this.lastDropzone\n    });\n\n    this.trigger(droppableReturnedEvent);\n\n    if (droppableReturnedEvent.canceled()) {\n      return;\n    }\n\n    this.initialDropzone.appendChild(event.source);\n    this.lastDropzone.classList.remove(this.getClassNameFor('droppable:occupied'));\n  }\n\n  /**\n   * Returns closest dropzone element for even target\n   * @private\n   * @param {HTMLElement} target - Event target\n   * @return {HTMLElement|null}\n   */\n  [closestDropzone](target) {\n    if (!this.dropzones) {\n      return null;\n    }\n\n    return (0, _utils.closest)(target, this.dropzones);\n  }\n\n  /**\n   * Returns all current dropzone elements for this draggable instance\n   * @private\n   * @return {NodeList|HTMLElement[]|Array}\n   */\n  [getDropzones]() {\n    const dropzone = this.options.dropzone;\n\n    if (typeof dropzone === 'string') {\n      return document.querySelectorAll(dropzone);\n    } else if (dropzone instanceof NodeList || dropzone instanceof Array) {\n      return dropzone;\n    } else if (typeof dropzone === 'function') {\n      return dropzone();\n    } else {\n      return [];\n    }\n  }\n}\nexports.default = Droppable;\n\n//# sourceURL=webpack://Draggable/./src/Droppable/Droppable.js?");

        /***/
      },

      /***/"./src/Droppable/DroppableEvent/DroppableEvent.js":
      /*!********************************************************!*\
        !*** ./src/Droppable/DroppableEvent/DroppableEvent.js ***!
        \********************************************************/
      /*! no static exports found */
      /***/function srcDroppableDroppableEventDroppableEventJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.DroppableStopEvent = exports.DroppableReturnedEvent = exports.DroppableDroppedEvent = exports.DroppableStartEvent = exports.DroppableEvent = undefined;\n\nvar _AbstractEvent = __webpack_require__(/*! shared/AbstractEvent */ \"./src/shared/AbstractEvent/index.js\");\n\nvar _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Base droppable event\n * @class DroppableEvent\n * @module DroppableEvent\n * @extends AbstractEvent\n */\nclass DroppableEvent extends _AbstractEvent2.default {\n\n  /**\n   * Original drag event that triggered this droppable event\n   * @property dragEvent\n   * @type {DragEvent}\n   * @readonly\n   */\n  get dragEvent() {\n    return this.data.dragEvent;\n  }\n}\n\nexports.DroppableEvent = DroppableEvent; /**\n                                          * Droppable start event\n                                          * @class DroppableStartEvent\n                                          * @module DroppableStartEvent\n                                          * @extends DroppableEvent\n                                          */\n\nDroppableEvent.type = 'droppable';\nclass DroppableStartEvent extends DroppableEvent {\n\n  /**\n   * The initial dropzone element of the currently dragging draggable element\n   * @property dropzone\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get dropzone() {\n    return this.data.dropzone;\n  }\n}\n\nexports.DroppableStartEvent = DroppableStartEvent; /**\n                                                    * Droppable dropped event\n                                                    * @class DroppableDroppedEvent\n                                                    * @module DroppableDroppedEvent\n                                                    * @extends DroppableEvent\n                                                    */\n\nDroppableStartEvent.type = 'droppable:start';\nDroppableStartEvent.cancelable = true;\nclass DroppableDroppedEvent extends DroppableEvent {\n\n  /**\n   * The dropzone element you dropped the draggable element into\n   * @property dropzone\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get dropzone() {\n    return this.data.dropzone;\n  }\n}\n\nexports.DroppableDroppedEvent = DroppableDroppedEvent; /**\n                                                        * Droppable returned event\n                                                        * @class DroppableReturnedEvent\n                                                        * @module DroppableReturnedEvent\n                                                        * @extends DroppableEvent\n                                                        */\n\nDroppableDroppedEvent.type = 'droppable:dropped';\nDroppableDroppedEvent.cancelable = true;\nclass DroppableReturnedEvent extends DroppableEvent {\n\n  /**\n   * The dropzone element you dragged away from\n   * @property dropzone\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get dropzone() {\n    return this.data.dropzone;\n  }\n}\n\nexports.DroppableReturnedEvent = DroppableReturnedEvent; /**\n                                                          * Droppable stop event\n                                                          * @class DroppableStopEvent\n                                                          * @module DroppableStopEvent\n                                                          * @extends DroppableEvent\n                                                          */\n\nDroppableReturnedEvent.type = 'droppable:returned';\nDroppableReturnedEvent.cancelable = true;\nclass DroppableStopEvent extends DroppableEvent {\n\n  /**\n   * The final dropzone element of the draggable element\n   * @property dropzone\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get dropzone() {\n    return this.data.dropzone;\n  }\n}\nexports.DroppableStopEvent = DroppableStopEvent;\nDroppableStopEvent.type = 'droppable:stop';\nDroppableStopEvent.cancelable = true;\n\n//# sourceURL=webpack://Draggable/./src/Droppable/DroppableEvent/DroppableEvent.js?");

        /***/
      },

      /***/"./src/Droppable/DroppableEvent/index.js":
      /*!***********************************************!*\
        !*** ./src/Droppable/DroppableEvent/index.js ***!
        \***********************************************/
      /*! no static exports found */
      /***/function srcDroppableDroppableEventIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _DroppableEvent = __webpack_require__(/*! ./DroppableEvent */ \"./src/Droppable/DroppableEvent/DroppableEvent.js\");\n\nObject.keys(_DroppableEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _DroppableEvent[key];\n    }\n  });\n});\n\n//# sourceURL=webpack://Draggable/./src/Droppable/DroppableEvent/index.js?");

        /***/
      },

      /***/"./src/Droppable/index.js":
      /*!********************************!*\
        !*** ./src/Droppable/index.js ***!
        \********************************/
      /*! no static exports found */
      /***/function srcDroppableIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _DroppableEvent = __webpack_require__(/*! ./DroppableEvent */ \"./src/Droppable/DroppableEvent/index.js\");\n\nObject.keys(_DroppableEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _DroppableEvent[key];\n    }\n  });\n});\n\nvar _Droppable = __webpack_require__(/*! ./Droppable */ \"./src/Droppable/Droppable.js\");\n\nvar _Droppable2 = _interopRequireDefault(_Droppable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Droppable2.default;\n\n//# sourceURL=webpack://Draggable/./src/Droppable/index.js?");

        /***/
      },

      /***/"./src/Plugins/Collidable/Collidable.js":
      /*!**********************************************!*\
        !*** ./src/Plugins/Collidable/Collidable.js ***!
        \**********************************************/
      /*! no static exports found */
      /***/function srcPluginsCollidableCollidableJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _AbstractPlugin = __webpack_require__(/*! shared/AbstractPlugin */ \"./src/shared/AbstractPlugin/index.js\");\n\nvar _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);\n\nvar _utils = __webpack_require__(/*! shared/utils */ \"./src/shared/utils/index.js\");\n\nvar _CollidableEvent = __webpack_require__(/*! ./CollidableEvent */ \"./src/Plugins/Collidable/CollidableEvent/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onDragMove = Symbol('onDragMove');\nconst onDragStop = Symbol('onDragStop');\nconst onRequestAnimationFrame = Symbol('onRequestAnimationFrame');\n\n/**\n * Collidable plugin which detects colliding elements while dragging\n * @class Collidable\n * @module Collidable\n * @extends AbstractPlugin\n */\nclass Collidable extends _AbstractPlugin2.default {\n  /**\n   * Collidable constructor.\n   * @constructs Collidable\n   * @param {Draggable} draggable - Draggable instance\n   */\n  constructor(draggable) {\n    super(draggable);\n\n    /**\n     * Keeps track of currently colliding elements\n     * @property {HTMLElement|null} currentlyCollidingElement\n     * @type {HTMLElement|null}\n     */\n    this.currentlyCollidingElement = null;\n\n    /**\n     * Keeps track of currently colliding elements\n     * @property {HTMLElement|null} lastCollidingElement\n     * @type {HTMLElement|null}\n     */\n    this.lastCollidingElement = null;\n\n    /**\n     * Animation frame for finding colliding elements\n     * @property {Number|null} currentAnimationFrame\n     * @type {Number|null}\n     */\n    this.currentAnimationFrame = null;\n\n    this[onDragMove] = this[onDragMove].bind(this);\n    this[onDragStop] = this[onDragStop].bind(this);\n    this[onRequestAnimationFrame] = this[onRequestAnimationFrame].bind(this);\n  }\n\n  /**\n   * Attaches plugins event listeners\n   */\n  attach() {\n    this.draggable.on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);\n  }\n\n  /**\n   * Detaches plugins event listeners\n   */\n  detach() {\n    this.draggable.off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);\n  }\n\n  /**\n   * Returns current collidables based on `collidables` option\n   * @return {HTMLElement[]}\n   */\n  getCollidables() {\n    const collidables = this.draggable.options.collidables;\n\n    if (typeof collidables === 'string') {\n      return Array.prototype.slice.call(document.querySelectorAll(collidables));\n    } else if (collidables instanceof NodeList || collidables instanceof Array) {\n      return Array.prototype.slice.call(collidables);\n    } else if (collidables instanceof HTMLElement) {\n      return [collidables];\n    } else if (typeof collidables === 'function') {\n      return collidables();\n    } else {\n      return [];\n    }\n  }\n\n  /**\n   * Drag move handler\n   * @private\n   * @param {DragMoveEvent} event - Drag move event\n   */\n  [onDragMove](event) {\n    const target = event.sensorEvent.target;\n\n    this.currentAnimationFrame = requestAnimationFrame(this[onRequestAnimationFrame](target));\n\n    if (this.currentlyCollidingElement) {\n      event.cancel();\n    }\n\n    const collidableInEvent = new _CollidableEvent.CollidableInEvent({\n      dragEvent: event,\n      collidingElement: this.currentlyCollidingElement\n    });\n\n    const collidableOutEvent = new _CollidableEvent.CollidableOutEvent({\n      dragEvent: event,\n      collidingElement: this.lastCollidingElement\n    });\n\n    const enteringCollidable = Boolean(this.currentlyCollidingElement && this.lastCollidingElement !== this.currentlyCollidingElement);\n    const leavingCollidable = Boolean(!this.currentlyCollidingElement && this.lastCollidingElement);\n\n    if (enteringCollidable) {\n      if (this.lastCollidingElement) {\n        this.draggable.trigger(collidableOutEvent);\n      }\n\n      this.draggable.trigger(collidableInEvent);\n    } else if (leavingCollidable) {\n      this.draggable.trigger(collidableOutEvent);\n    }\n\n    this.lastCollidingElement = this.currentlyCollidingElement;\n  }\n\n  /**\n   * Drag stop handler\n   * @private\n   * @param {DragStopEvent} event - Drag stop event\n   */\n  [onDragStop](event) {\n    const lastCollidingElement = this.currentlyCollidingElement || this.lastCollidingElement;\n    const collidableOutEvent = new _CollidableEvent.CollidableOutEvent({\n      dragEvent: event,\n      collidingElement: lastCollidingElement\n    });\n\n    if (lastCollidingElement) {\n      this.draggable.trigger(collidableOutEvent);\n    }\n\n    this.lastCollidingElement = null;\n    this.currentlyCollidingElement = null;\n  }\n\n  /**\n   * Animation frame function\n   * @private\n   * @param {HTMLElement} target - Current move target\n   * @return {Function}\n   */\n  [onRequestAnimationFrame](target) {\n    return () => {\n      const collidables = this.getCollidables();\n      this.currentlyCollidingElement = (0, _utils.closest)(target, element => collidables.includes(element));\n    };\n  }\n}\nexports.default = Collidable;\n\n//# sourceURL=webpack://Draggable/./src/Plugins/Collidable/Collidable.js?");

        /***/
      },

      /***/"./src/Plugins/Collidable/CollidableEvent/CollidableEvent.js":
      /*!*******************************************************************!*\
        !*** ./src/Plugins/Collidable/CollidableEvent/CollidableEvent.js ***!
        \*******************************************************************/
      /*! no static exports found */
      /***/function srcPluginsCollidableCollidableEventCollidableEventJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.CollidableOutEvent = exports.CollidableInEvent = exports.CollidableEvent = undefined;\n\nvar _AbstractEvent = __webpack_require__(/*! shared/AbstractEvent */ \"./src/shared/AbstractEvent/index.js\");\n\nvar _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Base collidable event\n * @class CollidableEvent\n * @module CollidableEvent\n * @extends AbstractEvent\n */\nclass CollidableEvent extends _AbstractEvent2.default {\n\n  /**\n   * Drag event that triggered this colliable event\n   * @property dragEvent\n   * @type {DragEvent}\n   * @readonly\n   */\n  get dragEvent() {\n    return this.data.dragEvent;\n  }\n}\n\nexports.CollidableEvent = CollidableEvent; /**\n                                            * Collidable in event\n                                            * @class CollidableInEvent\n                                            * @module CollidableInEvent\n                                            * @extends CollidableEvent\n                                            */\n\nCollidableEvent.type = 'collidable';\nclass CollidableInEvent extends CollidableEvent {\n\n  /**\n   * Element you are currently colliding with\n   * @property collidingElement\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get collidingElement() {\n    return this.data.collidingElement;\n  }\n}\n\nexports.CollidableInEvent = CollidableInEvent; /**\n                                                * Collidable out event\n                                                * @class CollidableOutEvent\n                                                * @module CollidableOutEvent\n                                                * @extends CollidableEvent\n                                                */\n\nCollidableInEvent.type = 'collidable:in';\nclass CollidableOutEvent extends CollidableEvent {\n\n  /**\n   * Element you were previously colliding with\n   * @property collidingElement\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get collidingElement() {\n    return this.data.collidingElement;\n  }\n}\nexports.CollidableOutEvent = CollidableOutEvent;\nCollidableOutEvent.type = 'collidable:out';\n\n//# sourceURL=webpack://Draggable/./src/Plugins/Collidable/CollidableEvent/CollidableEvent.js?");

        /***/
      },

      /***/"./src/Plugins/Collidable/CollidableEvent/index.js":
      /*!*********************************************************!*\
        !*** ./src/Plugins/Collidable/CollidableEvent/index.js ***!
        \*********************************************************/
      /*! no static exports found */
      /***/function srcPluginsCollidableCollidableEventIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _CollidableEvent = __webpack_require__(/*! ./CollidableEvent */ \"./src/Plugins/Collidable/CollidableEvent/CollidableEvent.js\");\n\nObject.keys(_CollidableEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _CollidableEvent[key];\n    }\n  });\n});\n\n//# sourceURL=webpack://Draggable/./src/Plugins/Collidable/CollidableEvent/index.js?");

        /***/
      },

      /***/"./src/Plugins/Collidable/index.js":
      /*!*****************************************!*\
        !*** ./src/Plugins/Collidable/index.js ***!
        \*****************************************/
      /*! no static exports found */
      /***/function srcPluginsCollidableIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _CollidableEvent = __webpack_require__(/*! ./CollidableEvent */ \"./src/Plugins/Collidable/CollidableEvent/index.js\");\n\nObject.keys(_CollidableEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _CollidableEvent[key];\n    }\n  });\n});\n\nvar _Collidable = __webpack_require__(/*! ./Collidable */ \"./src/Plugins/Collidable/Collidable.js\");\n\nvar _Collidable2 = _interopRequireDefault(_Collidable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Collidable2.default;\n\n//# sourceURL=webpack://Draggable/./src/Plugins/Collidable/index.js?");

        /***/
      },

      /***/"./src/Plugins/ResizeMirror/ResizeMirror.js":
      /*!**************************************************!*\
        !*** ./src/Plugins/ResizeMirror/ResizeMirror.js ***!
        \**************************************************/
      /*! no static exports found */
      /***/function srcPluginsResizeMirrorResizeMirrorJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.defaultOptions = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _AbstractPlugin = __webpack_require__(/*! shared/AbstractPlugin */ \"./src/shared/AbstractPlugin/index.js\");\n\nvar _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);\n\nvar _utils = __webpack_require__(/*! shared/utils */ \"./src/shared/utils/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onMirrorCreated = Symbol('onMirrorCreated');\nconst onMirrorDestroy = Symbol('onMirrorDestroy');\nconst onDragOver = Symbol('onDragOver');\nconst resize = Symbol('resize');\n\n/**\n * ResizeMirror default options\n * @property {Object} defaultOptions\n * @type {Object}\n */\nconst defaultOptions = exports.defaultOptions = {};\n\n/**\n * The ResizeMirror plugin resizes the mirror element to the dimensions of the draggable element that the mirror is hovering over\n * @class ResizeMirror\n * @module ResizeMirror\n * @extends AbstractPlugin\n */\nclass ResizeMirror extends _AbstractPlugin2.default {\n  /**\n   * ResizeMirror constructor.\n   * @constructs ResizeMirror\n   * @param {Draggable} draggable - Draggable instance\n   */\n  constructor(draggable) {\n    super(draggable);\n\n    /**\n     * ResizeMirror options\n     * @property {Object} options\n     * @type {Object}\n     */\n    this.options = _extends({}, defaultOptions, this.getOptions());\n\n    /**\n     * ResizeMirror remembers the last width when resizing the mirror\n     * to avoid additional writes to the DOM\n     * @property {number} lastWidth\n     */\n    this.lastWidth = 0;\n\n    /**\n     * ResizeMirror remembers the last height when resizing the mirror\n     * to avoid additional writes to the DOM\n     * @property {number} lastHeight\n     */\n    this.lastHeight = 0;\n\n    /**\n     * Keeps track of the mirror element\n     * @property {HTMLElement} mirror\n     */\n    this.mirror = null;\n\n    this[onMirrorCreated] = this[onMirrorCreated].bind(this);\n    this[onMirrorDestroy] = this[onMirrorDestroy].bind(this);\n    this[onDragOver] = this[onDragOver].bind(this);\n  }\n\n  /**\n   * Attaches plugins event listeners\n   */\n  attach() {\n    this.draggable.on('mirror:created', this[onMirrorCreated]).on('drag:over', this[onDragOver]).on('drag:over:container', this[onDragOver]);\n  }\n\n  /**\n   * Detaches plugins event listeners\n   */\n  detach() {\n    this.draggable.off('mirror:created', this[onMirrorCreated]).off('mirror:destroy', this[onMirrorDestroy]).off('drag:over', this[onDragOver]).off('drag:over:container', this[onDragOver]);\n  }\n\n  /**\n   * Returns options passed through draggable\n   * @return {Object}\n   */\n  getOptions() {\n    return this.draggable.options.resizeMirror || {};\n  }\n\n  /**\n   * Mirror created handler\n   * @param {MirrorCreatedEvent} mirrorEvent\n   * @private\n   */\n  [onMirrorCreated]({ mirror }) {\n    this.mirror = mirror;\n  }\n\n  /**\n   * Mirror destroy handler\n   * @param {MirrorDestroyEvent} mirrorEvent\n   * @private\n   */\n  [onMirrorDestroy]() {\n    this.mirror = null;\n  }\n\n  /**\n   * Drag over handler\n   * @param {DragOverEvent | DragOverContainer} dragEvent\n   * @private\n   */\n  [onDragOver](dragEvent) {\n    this[resize](dragEvent);\n  }\n\n  /**\n   * Resize function for\n   * @param {DragOverEvent | DragOverContainer} dragEvent\n   * @private\n   */\n  [resize]({ overContainer, over }) {\n    requestAnimationFrame(() => {\n      if (this.mirror.parentNode !== overContainer) {\n        overContainer.appendChild(this.mirror);\n      }\n\n      const overElement = over || this.draggable.getDraggableElementsForContainer(overContainer)[0];\n\n      if (!overElement) {\n        return;\n      }\n\n      (0, _utils.requestNextAnimationFrame)(() => {\n        const overRect = overElement.getBoundingClientRect();\n\n        if (this.lastHeight === overRect.height && this.lastWidth === overRect.width) {\n          return;\n        }\n\n        this.mirror.style.width = `${overRect.width}px`;\n        this.mirror.style.height = `${overRect.height}px`;\n\n        this.lastWidth = overRect.width;\n        this.lastHeight = overRect.height;\n      });\n    });\n  }\n}\nexports.default = ResizeMirror;\n\n//# sourceURL=webpack://Draggable/./src/Plugins/ResizeMirror/ResizeMirror.js?");

        /***/
      },

      /***/"./src/Plugins/ResizeMirror/index.js":
      /*!*******************************************!*\
        !*** ./src/Plugins/ResizeMirror/index.js ***!
        \*******************************************/
      /*! no static exports found */
      /***/function srcPluginsResizeMirrorIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.defaultOptions = undefined;\n\nvar _ResizeMirror = __webpack_require__(/*! ./ResizeMirror */ \"./src/Plugins/ResizeMirror/ResizeMirror.js\");\n\nvar _ResizeMirror2 = _interopRequireDefault(_ResizeMirror);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _ResizeMirror2.default;\nexports.defaultOptions = _ResizeMirror.defaultOptions;\n\n//# sourceURL=webpack://Draggable/./src/Plugins/ResizeMirror/index.js?");

        /***/
      },

      /***/"./src/Plugins/Snappable/Snappable.js":
      /*!********************************************!*\
        !*** ./src/Plugins/Snappable/Snappable.js ***!
        \********************************************/
      /*! no static exports found */
      /***/function srcPluginsSnappableSnappableJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _AbstractPlugin = __webpack_require__(/*! shared/AbstractPlugin */ \"./src/shared/AbstractPlugin/index.js\");\n\nvar _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);\n\nvar _SnappableEvent = __webpack_require__(/*! ./SnappableEvent */ \"./src/Plugins/Snappable/SnappableEvent/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onDragStart = Symbol('onDragStart');\nconst onDragStop = Symbol('onDragStop');\nconst onDragOver = Symbol('onDragOver');\nconst onDragOut = Symbol('onDragOut');\nconst onMirrorCreated = Symbol('onMirrorCreated');\nconst onMirrorDestroy = Symbol('onMirrorDestroy');\n\n/**\n * Snappable plugin which snaps draggable elements into place\n * @class Snappable\n * @module Snappable\n * @extends AbstractPlugin\n */\nclass Snappable extends _AbstractPlugin2.default {\n  /**\n   * Snappable constructor.\n   * @constructs Snappable\n   * @param {Draggable} draggable - Draggable instance\n   */\n  constructor(draggable) {\n    super(draggable);\n\n    /**\n     * Keeps track of the first source element\n     * @property {HTMLElement|null} firstSource\n     */\n    this.firstSource = null;\n\n    /**\n     * Keeps track of the mirror element\n     * @property {HTMLElement} mirror\n     */\n    this.mirror = null;\n\n    this[onDragStart] = this[onDragStart].bind(this);\n    this[onDragStop] = this[onDragStop].bind(this);\n    this[onDragOver] = this[onDragOver].bind(this);\n    this[onDragOut] = this[onDragOut].bind(this);\n    this[onMirrorCreated] = this[onMirrorCreated].bind(this);\n    this[onMirrorDestroy] = this[onMirrorDestroy].bind(this);\n  }\n\n  /**\n   * Attaches plugins event listeners\n   */\n  attach() {\n    this.draggable.on('drag:start', this[onDragStart]).on('drag:stop', this[onDragStop]).on('drag:over', this[onDragOver]).on('drag:out', this[onDragOut]).on('droppable:over', this[onDragOver]).on('droppable:out', this[onDragOut]).on('mirror:created', this[onMirrorCreated]).on('mirror:destroy', this[onMirrorDestroy]);\n  }\n\n  /**\n   * Detaches plugins event listeners\n   */\n  detach() {\n    this.draggable.off('drag:start', this[onDragStart]).off('drag:stop', this[onDragStop]).off('drag:over', this[onDragOver]).off('drag:out', this[onDragOut]).off('droppable:over', this[onDragOver]).off('droppable:out', this[onDragOut]).off('mirror:created', this[onMirrorCreated]).off('mirror:destroy', this[onMirrorDestroy]);\n  }\n\n  /**\n   * Drag start handler\n   * @private\n   * @param {DragStartEvent} event - Drag start event\n   */\n  [onDragStart](event) {\n    if (event.canceled()) {\n      return;\n    }\n\n    this.firstSource = event.source;\n  }\n\n  /**\n   * Drag stop handler\n   * @private\n   * @param {DragStopEvent} event - Drag stop event\n   */\n  [onDragStop]() {\n    this.firstSource = null;\n  }\n\n  /**\n   * Drag over handler\n   * @private\n   * @param {DragOverEvent|DroppableOverEvent} event - Drag over event\n   */\n  [onDragOver](event) {\n    if (event.canceled()) {\n      return;\n    }\n\n    const source = event.source || event.dragEvent.source;\n\n    if (source === this.firstSource) {\n      this.firstSource = null;\n      return;\n    }\n\n    const snapInEvent = new _SnappableEvent.SnapInEvent({\n      dragEvent: event,\n      snappable: event.over || event.droppable\n    });\n\n    this.draggable.trigger(snapInEvent);\n\n    if (snapInEvent.canceled()) {\n      return;\n    }\n\n    if (this.mirror) {\n      this.mirror.style.display = 'none';\n    }\n\n    source.classList.remove(this.draggable.getClassNameFor('source:dragging'));\n    source.classList.add(this.draggable.getClassNameFor('source:placed'));\n\n    // Need to cancel this in drag out\n    setTimeout(() => {\n      source.classList.remove(this.draggable.getClassNameFor('source:placed'));\n    }, this.draggable.options.placedTimeout);\n  }\n\n  /**\n   * Drag out handler\n   * @private\n   * @param {DragOutEvent|DroppableOutEvent} event - Drag out event\n   */\n  [onDragOut](event) {\n    if (event.canceled()) {\n      return;\n    }\n\n    const source = event.source || event.dragEvent.source;\n\n    const snapOutEvent = new _SnappableEvent.SnapOutEvent({\n      dragEvent: event,\n      snappable: event.over || event.droppable\n    });\n\n    this.draggable.trigger(snapOutEvent);\n\n    if (snapOutEvent.canceled()) {\n      return;\n    }\n\n    if (this.mirror) {\n      this.mirror.style.display = '';\n    }\n\n    source.classList.add(this.draggable.getClassNameFor('source:dragging'));\n  }\n\n  /**\n   * Mirror created handler\n   * @param {MirrorCreatedEvent} mirrorEvent\n   * @private\n   */\n  [onMirrorCreated]({ mirror }) {\n    this.mirror = mirror;\n  }\n\n  /**\n   * Mirror destroy handler\n   * @param {MirrorDestroyEvent} mirrorEvent\n   * @private\n   */\n  [onMirrorDestroy]() {\n    this.mirror = null;\n  }\n}\nexports.default = Snappable;\n\n//# sourceURL=webpack://Draggable/./src/Plugins/Snappable/Snappable.js?");

        /***/
      },

      /***/"./src/Plugins/Snappable/SnappableEvent/SnappableEvent.js":
      /*!****************************************************************!*\
        !*** ./src/Plugins/Snappable/SnappableEvent/SnappableEvent.js ***!
        \****************************************************************/
      /*! no static exports found */
      /***/function srcPluginsSnappableSnappableEventSnappableEventJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SnapOutEvent = exports.SnapInEvent = exports.SnapEvent = undefined;\n\nvar _AbstractEvent = __webpack_require__(/*! shared/AbstractEvent */ \"./src/shared/AbstractEvent/index.js\");\n\nvar _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Base snap event\n * @class SnapEvent\n * @module SnapEvent\n * @extends AbstractEvent\n */\nclass SnapEvent extends _AbstractEvent2.default {\n\n  /**\n   * Drag event that triggered this snap event\n   * @property dragEvent\n   * @type {DragEvent}\n   * @readonly\n   */\n  get dragEvent() {\n    return this.data.dragEvent;\n  }\n\n  /**\n   * Snappable element\n   * @property snappable\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get snappable() {\n    return this.data.snappable;\n  }\n}\n\nexports.SnapEvent = SnapEvent; /**\n                                * Snap in event\n                                * @class SnapInEvent\n                                * @module SnapInEvent\n                                * @extends SnapEvent\n                                */\n\nSnapEvent.type = 'snap';\nclass SnapInEvent extends SnapEvent {}\n\nexports.SnapInEvent = SnapInEvent; /**\n                                    * Snap out event\n                                    * @class SnapOutEvent\n                                    * @module SnapOutEvent\n                                    * @extends SnapEvent\n                                    */\n\nSnapInEvent.type = 'snap:in';\nSnapInEvent.cancelable = true;\nclass SnapOutEvent extends SnapEvent {}\nexports.SnapOutEvent = SnapOutEvent;\nSnapOutEvent.type = 'snap:out';\nSnapOutEvent.cancelable = true;\n\n//# sourceURL=webpack://Draggable/./src/Plugins/Snappable/SnappableEvent/SnappableEvent.js?");

        /***/
      },

      /***/"./src/Plugins/Snappable/SnappableEvent/index.js":
      /*!*******************************************************!*\
        !*** ./src/Plugins/Snappable/SnappableEvent/index.js ***!
        \*******************************************************/
      /*! no static exports found */
      /***/function srcPluginsSnappableSnappableEventIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _SnappableEvent = __webpack_require__(/*! ./SnappableEvent */ \"./src/Plugins/Snappable/SnappableEvent/SnappableEvent.js\");\n\nObject.keys(_SnappableEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _SnappableEvent[key];\n    }\n  });\n});\n\n//# sourceURL=webpack://Draggable/./src/Plugins/Snappable/SnappableEvent/index.js?");

        /***/
      },

      /***/"./src/Plugins/Snappable/index.js":
      /*!****************************************!*\
        !*** ./src/Plugins/Snappable/index.js ***!
        \****************************************/
      /*! no static exports found */
      /***/function srcPluginsSnappableIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _SnappableEvent = __webpack_require__(/*! ./SnappableEvent */ \"./src/Plugins/Snappable/SnappableEvent/index.js\");\n\nObject.keys(_SnappableEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _SnappableEvent[key];\n    }\n  });\n});\n\nvar _Snappable = __webpack_require__(/*! ./Snappable */ \"./src/Plugins/Snappable/Snappable.js\");\n\nvar _Snappable2 = _interopRequireDefault(_Snappable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Snappable2.default;\n\n//# sourceURL=webpack://Draggable/./src/Plugins/Snappable/index.js?");

        /***/
      },

      /***/"./src/Plugins/SwapAnimation/SwapAnimation.js":
      /*!****************************************************!*\
        !*** ./src/Plugins/SwapAnimation/SwapAnimation.js ***!
        \****************************************************/
      /*! no static exports found */
      /***/function srcPluginsSwapAnimationSwapAnimationJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.defaultOptions = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _AbstractPlugin = __webpack_require__(/*! shared/AbstractPlugin */ \"./src/shared/AbstractPlugin/index.js\");\n\nvar _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onSortableSorted = Symbol('onSortableSorted');\n\n/**\n * SwapAnimation default options\n * @property {Object} defaultOptions\n * @property {Number} defaultOptions.duration\n * @property {String} defaultOptions.easingFunction\n * @property {Boolean} defaultOptions.horizontal\n * @type {Object}\n */\nconst defaultOptions = exports.defaultOptions = {\n  duration: 150,\n  easingFunction: 'ease-in-out',\n  horizontal: false\n};\n\n/**\n * SwapAnimation plugin adds swap animations for sortable\n * @class SwapAnimation\n * @module SwapAnimation\n * @extends AbstractPlugin\n */\nclass SwapAnimation extends _AbstractPlugin2.default {\n  /**\n   * SwapAnimation constructor.\n   * @constructs SwapAnimation\n   * @param {Draggable} draggable - Draggable instance\n   */\n  constructor(draggable) {\n    super(draggable);\n\n    /**\n     * SwapAnimation options\n     * @property {Object} options\n     * @property {Number} defaultOptions.duration\n     * @property {String} defaultOptions.easingFunction\n     * @type {Object}\n     */\n    this.options = _extends({}, defaultOptions, this.getOptions());\n\n    /**\n     * Last animation frame\n     * @property {Number} lastAnimationFrame\n     * @type {Number}\n     */\n    this.lastAnimationFrame = null;\n\n    this[onSortableSorted] = this[onSortableSorted].bind(this);\n  }\n\n  /**\n   * Attaches plugins event listeners\n   */\n  attach() {\n    this.draggable.on('sortable:sorted', this[onSortableSorted]);\n  }\n\n  /**\n   * Detaches plugins event listeners\n   */\n  detach() {\n    this.draggable.off('sortable:sorted', this[onSortableSorted]);\n  }\n\n  /**\n   * Returns options passed through draggable\n   * @return {Object}\n   */\n  getOptions() {\n    return this.draggable.options.swapAnimation || {};\n  }\n\n  /**\n   * Sortable sorted handler\n   * @param {SortableSortedEvent} sortableEvent\n   * @private\n   */\n  [onSortableSorted]({ oldIndex, newIndex, dragEvent }) {\n    const { source, over } = dragEvent;\n\n    cancelAnimationFrame(this.lastAnimationFrame);\n\n    // Can be done in a separate frame\n    this.lastAnimationFrame = requestAnimationFrame(() => {\n      if (oldIndex >= newIndex) {\n        animate(source, over, this.options);\n      } else {\n        animate(over, source, this.options);\n      }\n    });\n  }\n}\n\nexports.default = SwapAnimation; /**\n                                  * Animates two elements\n                                  * @param {HTMLElement} from\n                                  * @param {HTMLElement} to\n                                  * @param {Object} options\n                                  * @param {Number} options.duration\n                                  * @param {String} options.easingFunction\n                                  * @param {String} options.horizontal\n                                  * @private\n                                  */\n\nfunction animate(from, to, { duration, easingFunction, horizontal }) {\n  for (const element of [from, to]) {\n    element.style.pointerEvents = 'none';\n  }\n\n  if (horizontal) {\n    const width = from.offsetWidth;\n    from.style.transform = `translate3d(${width}px, 0, 0)`;\n    to.style.transform = `translate3d(-${width}px, 0, 0)`;\n  } else {\n    const height = from.offsetHeight;\n    from.style.transform = `translate3d(0, ${height}px, 0)`;\n    to.style.transform = `translate3d(0, -${height}px, 0)`;\n  }\n\n  requestAnimationFrame(() => {\n    for (const element of [from, to]) {\n      element.addEventListener('transitionend', resetElementOnTransitionEnd);\n      element.style.transition = `transform ${duration}ms ${easingFunction}`;\n      element.style.transform = '';\n    }\n  });\n}\n\n/**\n * Resets animation style properties after animation has completed\n * @param {Event} event\n * @private\n */\nfunction resetElementOnTransitionEnd(event) {\n  event.target.style.transition = '';\n  event.target.style.pointerEvents = '';\n  event.target.removeEventListener('transitionend', resetElementOnTransitionEnd);\n}\n\n//# sourceURL=webpack://Draggable/./src/Plugins/SwapAnimation/SwapAnimation.js?");

        /***/
      },

      /***/"./src/Plugins/SwapAnimation/index.js":
      /*!********************************************!*\
        !*** ./src/Plugins/SwapAnimation/index.js ***!
        \********************************************/
      /*! no static exports found */
      /***/function srcPluginsSwapAnimationIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.defaultOptions = undefined;\n\nvar _SwapAnimation = __webpack_require__(/*! ./SwapAnimation */ \"./src/Plugins/SwapAnimation/SwapAnimation.js\");\n\nvar _SwapAnimation2 = _interopRequireDefault(_SwapAnimation);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _SwapAnimation2.default;\nexports.defaultOptions = _SwapAnimation.defaultOptions;\n\n//# sourceURL=webpack://Draggable/./src/Plugins/SwapAnimation/index.js?");

        /***/
      },

      /***/"./src/Plugins/index.js":
      /*!******************************!*\
        !*** ./src/Plugins/index.js ***!
        \******************************/
      /*! no static exports found */
      /***/function srcPluginsIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Collidable = __webpack_require__(/*! ./Collidable */ \"./src/Plugins/Collidable/index.js\");\n\nObject.defineProperty(exports, 'Collidable', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_Collidable).default;\n  }\n});\n\nvar _ResizeMirror = __webpack_require__(/*! ./ResizeMirror */ \"./src/Plugins/ResizeMirror/index.js\");\n\nObject.defineProperty(exports, 'ResizeMirror', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_ResizeMirror).default;\n  }\n});\nObject.defineProperty(exports, 'defaultResizeMirrorOptions', {\n  enumerable: true,\n  get: function () {\n    return _ResizeMirror.defaultOptions;\n  }\n});\n\nvar _Snappable = __webpack_require__(/*! ./Snappable */ \"./src/Plugins/Snappable/index.js\");\n\nObject.defineProperty(exports, 'Snappable', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_Snappable).default;\n  }\n});\n\nvar _SwapAnimation = __webpack_require__(/*! ./SwapAnimation */ \"./src/Plugins/SwapAnimation/index.js\");\n\nObject.defineProperty(exports, 'SwapAnimation', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_SwapAnimation).default;\n  }\n});\nObject.defineProperty(exports, 'defaultSwapAnimationOptions', {\n  enumerable: true,\n  get: function () {\n    return _SwapAnimation.defaultOptions;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://Draggable/./src/Plugins/index.js?");

        /***/
      },

      /***/"./src/Sortable/Sortable.js":
      /*!**********************************!*\
        !*** ./src/Sortable/Sortable.js ***!
        \**********************************/
      /*! no static exports found */
      /***/function srcSortableSortableJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _Draggable = __webpack_require__(/*! ../Draggable */ \"./src/Draggable/index.js\");\n\nvar _Draggable2 = _interopRequireDefault(_Draggable);\n\nvar _SortableEvent = __webpack_require__(/*! ./SortableEvent */ \"./src/Sortable/SortableEvent/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onDragStart = Symbol('onDragStart');\nconst onDragOverContainer = Symbol('onDragOverContainer');\nconst onDragOver = Symbol('onDragOver');\nconst onDragStop = Symbol('onDragStop');\n\n/**\n * Returns announcement message when a Draggable element has been sorted with another Draggable element\n * or moved into a new container\n * @param {SortableSortedEvent} sortableEvent\n * @return {String}\n */\nfunction onSortableSortedDefaultAnnouncement({ dragEvent }) {\n  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'sortable element';\n\n  if (dragEvent.over) {\n    const overText = dragEvent.over.textContent.trim() || dragEvent.over.id || 'sortable element';\n    const isFollowing = dragEvent.source.compareDocumentPosition(dragEvent.over) & Node.DOCUMENT_POSITION_FOLLOWING;\n\n    if (isFollowing) {\n      return `Placed ${sourceText} after ${overText}`;\n    } else {\n      return `Placed ${sourceText} before ${overText}`;\n    }\n  } else {\n    // need to figure out how to compute container name\n    return `Placed ${sourceText} into a different container`;\n  }\n}\n\n/**\n * @const {Object} defaultAnnouncements\n * @const {Function} defaultAnnouncements['sortable:sorted']\n */\nconst defaultAnnouncements = {\n  'sortable:sorted': onSortableSortedDefaultAnnouncement\n};\n\n/**\n * Sortable is built on top of Draggable and allows sorting of draggable elements. Sortable will keep\n * track of the original index and emits the new index as you drag over draggable elements.\n * @class Sortable\n * @module Sortable\n * @extends Draggable\n */\nclass Sortable extends _Draggable2.default {\n  /**\n   * Sortable constructor.\n   * @constructs Sortable\n   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Sortable containers\n   * @param {Object} options - Options for Sortable\n   */\n  constructor(containers = [], options = {}) {\n    super(containers, _extends({}, options, {\n      announcements: _extends({}, defaultAnnouncements, options.announcements || {})\n    }));\n\n    /**\n     * start index of source on drag start\n     * @property startIndex\n     * @type {Number}\n     */\n    this.startIndex = null;\n\n    /**\n     * start container on drag start\n     * @property startContainer\n     * @type {HTMLElement}\n     * @default null\n     */\n    this.startContainer = null;\n\n    this[onDragStart] = this[onDragStart].bind(this);\n    this[onDragOverContainer] = this[onDragOverContainer].bind(this);\n    this[onDragOver] = this[onDragOver].bind(this);\n    this[onDragStop] = this[onDragStop].bind(this);\n\n    this.on('drag:start', this[onDragStart]).on('drag:over:container', this[onDragOverContainer]).on('drag:over', this[onDragOver]).on('drag:stop', this[onDragStop]);\n  }\n\n  /**\n   * Destroys Sortable instance.\n   */\n  destroy() {\n    super.destroy();\n\n    this.off('drag:start', this[onDragStart]).off('drag:over:container', this[onDragOverContainer]).off('drag:over', this[onDragOver]).off('drag:stop', this[onDragStop]);\n  }\n\n  /**\n   * Returns true index of element within its container during drag operation, i.e. excluding mirror and original source\n   * @param {HTMLElement} element - An element\n   * @return {Number}\n   */\n  index(element) {\n    return this.getDraggableElementsForContainer(element.parentNode).indexOf(element);\n  }\n\n  /**\n   * Drag start handler\n   * @private\n   * @param {DragStartEvent} event - Drag start event\n   */\n  [onDragStart](event) {\n    this.startContainer = event.source.parentNode;\n    this.startIndex = this.index(event.source);\n\n    const sortableStartEvent = new _SortableEvent.SortableStartEvent({\n      dragEvent: event,\n      startIndex: this.startIndex,\n      startContainer: this.startContainer\n    });\n\n    this.trigger(sortableStartEvent);\n\n    if (sortableStartEvent.canceled()) {\n      event.cancel();\n    }\n  }\n\n  /**\n   * Drag over container handler\n   * @private\n   * @param {DragOverContainerEvent} event - Drag over container event\n   */\n  [onDragOverContainer](event) {\n    if (event.canceled()) {\n      return;\n    }\n\n    const { source, over, overContainer } = event;\n    const oldIndex = this.index(source);\n\n    const sortableSortEvent = new _SortableEvent.SortableSortEvent({\n      dragEvent: event,\n      currentIndex: oldIndex,\n      source,\n      over\n    });\n\n    this.trigger(sortableSortEvent);\n\n    if (sortableSortEvent.canceled()) {\n      return;\n    }\n\n    const children = this.getDraggableElementsForContainer(overContainer);\n    const moves = move({ source, over, overContainer, children });\n\n    if (!moves) {\n      return;\n    }\n\n    const { oldContainer, newContainer } = moves;\n    const newIndex = this.index(event.source);\n\n    const sortableSortedEvent = new _SortableEvent.SortableSortedEvent({\n      dragEvent: event,\n      oldIndex,\n      newIndex,\n      oldContainer,\n      newContainer\n    });\n\n    this.trigger(sortableSortedEvent);\n  }\n\n  /**\n   * Drag over handler\n   * @private\n   * @param {DragOverEvent} event - Drag over event\n   */\n  [onDragOver](event) {\n    if (event.over === event.originalSource || event.over === event.source) {\n      return;\n    }\n\n    const { source, over, overContainer } = event;\n    const oldIndex = this.index(source);\n\n    const sortableSortEvent = new _SortableEvent.SortableSortEvent({\n      dragEvent: event,\n      currentIndex: oldIndex,\n      source,\n      over\n    });\n\n    this.trigger(sortableSortEvent);\n\n    if (sortableSortEvent.canceled()) {\n      return;\n    }\n\n    const children = this.getDraggableElementsForContainer(overContainer);\n    const moves = move({ source, over, overContainer, children });\n\n    if (!moves) {\n      return;\n    }\n\n    const { oldContainer, newContainer } = moves;\n    const newIndex = this.index(source);\n\n    const sortableSortedEvent = new _SortableEvent.SortableSortedEvent({\n      dragEvent: event,\n      oldIndex,\n      newIndex,\n      oldContainer,\n      newContainer\n    });\n\n    this.trigger(sortableSortedEvent);\n  }\n\n  /**\n   * Drag stop handler\n   * @private\n   * @param {DragStopEvent} event - Drag stop event\n   */\n  [onDragStop](event) {\n    const sortableStopEvent = new _SortableEvent.SortableStopEvent({\n      dragEvent: event,\n      oldIndex: this.startIndex,\n      newIndex: this.index(event.source),\n      oldContainer: this.startContainer,\n      newContainer: event.source.parentNode\n    });\n\n    this.trigger(sortableStopEvent);\n\n    this.startIndex = null;\n    this.startContainer = null;\n  }\n}\n\nexports.default = Sortable;\nfunction index(element) {\n  return Array.prototype.indexOf.call(element.parentNode.children, element);\n}\n\nfunction move({ source, over, overContainer, children }) {\n  const emptyOverContainer = !children.length;\n  const differentContainer = source.parentNode !== overContainer;\n  const sameContainer = over && !differentContainer;\n\n  if (emptyOverContainer) {\n    return moveInsideEmptyContainer(source, overContainer);\n  } else if (sameContainer) {\n    return moveWithinContainer(source, over);\n  } else if (differentContainer) {\n    return moveOutsideContainer(source, over, overContainer);\n  } else {\n    return null;\n  }\n}\n\nfunction moveInsideEmptyContainer(source, overContainer) {\n  const oldContainer = source.parentNode;\n\n  overContainer.appendChild(source);\n\n  return { oldContainer, newContainer: overContainer };\n}\n\nfunction moveWithinContainer(source, over) {\n  const oldIndex = index(source);\n  const newIndex = index(over);\n\n  if (oldIndex < newIndex) {\n    source.parentNode.insertBefore(source, over.nextElementSibling);\n  } else {\n    source.parentNode.insertBefore(source, over);\n  }\n\n  return { oldContainer: source.parentNode, newContainer: source.parentNode };\n}\n\nfunction moveOutsideContainer(source, over, overContainer) {\n  const oldContainer = source.parentNode;\n\n  if (over) {\n    over.parentNode.insertBefore(source, over);\n  } else {\n    // need to figure out proper position\n    overContainer.appendChild(source);\n  }\n\n  return { oldContainer, newContainer: source.parentNode };\n}\n\n//# sourceURL=webpack://Draggable/./src/Sortable/Sortable.js?");

        /***/
      },

      /***/"./src/Sortable/SortableEvent/SortableEvent.js":
      /*!*****************************************************!*\
        !*** ./src/Sortable/SortableEvent/SortableEvent.js ***!
        \*****************************************************/
      /*! no static exports found */
      /***/function srcSortableSortableEventSortableEventJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SortableStopEvent = exports.SortableSortedEvent = exports.SortableSortEvent = exports.SortableStartEvent = exports.SortableEvent = undefined;\n\nvar _AbstractEvent = __webpack_require__(/*! shared/AbstractEvent */ \"./src/shared/AbstractEvent/index.js\");\n\nvar _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Base sortable event\n * @class SortableEvent\n * @module SortableEvent\n * @extends AbstractEvent\n */\nclass SortableEvent extends _AbstractEvent2.default {\n\n  /**\n   * Original drag event that triggered this sortable event\n   * @property dragEvent\n   * @type {DragEvent}\n   * @readonly\n   */\n  get dragEvent() {\n    return this.data.dragEvent;\n  }\n}\n\nexports.SortableEvent = SortableEvent; /**\n                                        * Sortable start event\n                                        * @class SortableStartEvent\n                                        * @module SortableStartEvent\n                                        * @extends SortableEvent\n                                        */\n\nSortableEvent.type = 'sortable';\nclass SortableStartEvent extends SortableEvent {\n\n  /**\n   * Start index of source on sortable start\n   * @property startIndex\n   * @type {Number}\n   * @readonly\n   */\n  get startIndex() {\n    return this.data.startIndex;\n  }\n\n  /**\n   * Start container on sortable start\n   * @property startContainer\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get startContainer() {\n    return this.data.startContainer;\n  }\n}\n\nexports.SortableStartEvent = SortableStartEvent; /**\n                                                  * Sortable sort event\n                                                  * @class SortableSortEvent\n                                                  * @module SortableSortEvent\n                                                  * @extends SortableEvent\n                                                  */\n\nSortableStartEvent.type = 'sortable:start';\nSortableStartEvent.cancelable = true;\nclass SortableSortEvent extends SortableEvent {\n\n  /**\n   * Index of current draggable element\n   * @property currentIndex\n   * @type {Number}\n   * @readonly\n   */\n  get currentIndex() {\n    return this.data.currentIndex;\n  }\n\n  /**\n   * Draggable element you are hovering over\n   * @property over\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get over() {\n    return this.data.oldIndex;\n  }\n\n  /**\n   * Draggable container element you are hovering over\n   * @property overContainer\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get overContainer() {\n    return this.data.newIndex;\n  }\n}\n\nexports.SortableSortEvent = SortableSortEvent; /**\n                                                * Sortable sorted event\n                                                * @class SortableSortedEvent\n                                                * @module SortableSortedEvent\n                                                * @extends SortableEvent\n                                                */\n\nSortableSortEvent.type = 'sortable:sort';\nSortableSortEvent.cancelable = true;\nclass SortableSortedEvent extends SortableEvent {\n\n  /**\n   * Index of last sorted event\n   * @property oldIndex\n   * @type {Number}\n   * @readonly\n   */\n  get oldIndex() {\n    return this.data.oldIndex;\n  }\n\n  /**\n   * New index of this sorted event\n   * @property newIndex\n   * @type {Number}\n   * @readonly\n   */\n  get newIndex() {\n    return this.data.newIndex;\n  }\n\n  /**\n   * Old container of draggable element\n   * @property oldContainer\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get oldContainer() {\n    return this.data.oldContainer;\n  }\n\n  /**\n   * New container of draggable element\n   * @property newContainer\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get newContainer() {\n    return this.data.newContainer;\n  }\n}\n\nexports.SortableSortedEvent = SortableSortedEvent; /**\n                                                    * Sortable stop event\n                                                    * @class SortableStopEvent\n                                                    * @module SortableStopEvent\n                                                    * @extends SortableEvent\n                                                    */\n\nSortableSortedEvent.type = 'sortable:sorted';\nclass SortableStopEvent extends SortableEvent {\n\n  /**\n   * Original index on sortable start\n   * @property oldIndex\n   * @type {Number}\n   * @readonly\n   */\n  get oldIndex() {\n    return this.data.oldIndex;\n  }\n\n  /**\n   * New index of draggable element\n   * @property newIndex\n   * @type {Number}\n   * @readonly\n   */\n  get newIndex() {\n    return this.data.newIndex;\n  }\n\n  /**\n   * Original container of draggable element\n   * @property oldContainer\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get oldContainer() {\n    return this.data.oldContainer;\n  }\n\n  /**\n   * New container of draggable element\n   * @property newContainer\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get newContainer() {\n    return this.data.newContainer;\n  }\n}\nexports.SortableStopEvent = SortableStopEvent;\nSortableStopEvent.type = 'sortable:stop';\n\n//# sourceURL=webpack://Draggable/./src/Sortable/SortableEvent/SortableEvent.js?");

        /***/
      },

      /***/"./src/Sortable/SortableEvent/index.js":
      /*!*********************************************!*\
        !*** ./src/Sortable/SortableEvent/index.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/function srcSortableSortableEventIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _SortableEvent = __webpack_require__(/*! ./SortableEvent */ \"./src/Sortable/SortableEvent/SortableEvent.js\");\n\nObject.keys(_SortableEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _SortableEvent[key];\n    }\n  });\n});\n\n//# sourceURL=webpack://Draggable/./src/Sortable/SortableEvent/index.js?");

        /***/
      },

      /***/"./src/Sortable/index.js":
      /*!*******************************!*\
        !*** ./src/Sortable/index.js ***!
        \*******************************/
      /*! no static exports found */
      /***/function srcSortableIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _SortableEvent = __webpack_require__(/*! ./SortableEvent */ \"./src/Sortable/SortableEvent/index.js\");\n\nObject.keys(_SortableEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _SortableEvent[key];\n    }\n  });\n});\n\nvar _Sortable = __webpack_require__(/*! ./Sortable */ \"./src/Sortable/Sortable.js\");\n\nvar _Sortable2 = _interopRequireDefault(_Sortable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Sortable2.default;\n\n//# sourceURL=webpack://Draggable/./src/Sortable/index.js?");

        /***/
      },

      /***/"./src/Swappable/Swappable.js":
      /*!************************************!*\
        !*** ./src/Swappable/Swappable.js ***!
        \************************************/
      /*! no static exports found */
      /***/function srcSwappableSwappableJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _Draggable = __webpack_require__(/*! ../Draggable */ \"./src/Draggable/index.js\");\n\nvar _Draggable2 = _interopRequireDefault(_Draggable);\n\nvar _SwappableEvent = __webpack_require__(/*! ./SwappableEvent */ \"./src/Swappable/SwappableEvent/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst onDragStart = Symbol('onDragStart');\nconst onDragOver = Symbol('onDragOver');\nconst onDragStop = Symbol('onDragStop');\n\n/**\n * Returns an announcement message when the Draggable element is swapped with another draggable element\n * @param {SwappableSwappedEvent} swappableEvent\n * @return {String}\n */\nfunction onSwappableSwappedDefaultAnnouncement({ dragEvent, swappedElement }) {\n  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'swappable element';\n  const overText = swappedElement.textContent.trim() || swappedElement.id || 'swappable element';\n\n  return `Swapped ${sourceText} with ${overText}`;\n}\n\n/**\n * @const {Object} defaultAnnouncements\n * @const {Function} defaultAnnouncements['swappabled:swapped']\n */\nconst defaultAnnouncements = {\n  'swappabled:swapped': onSwappableSwappedDefaultAnnouncement\n};\n\n/**\n * Swappable is built on top of Draggable and allows swapping of draggable elements.\n * Order is irrelevant to Swappable.\n * @class Swappable\n * @module Swappable\n * @extends Draggable\n */\nclass Swappable extends _Draggable2.default {\n  /**\n   * Swappable constructor.\n   * @constructs Swappable\n   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Swappable containers\n   * @param {Object} options - Options for Swappable\n   */\n  constructor(containers = [], options = {}) {\n    super(containers, _extends({}, options, {\n      announcements: _extends({}, defaultAnnouncements, options.announcements || {})\n    }));\n\n    /**\n     * Last draggable element that was dragged over\n     * @property lastOver\n     * @type {HTMLElement}\n     */\n    this.lastOver = null;\n\n    this[onDragStart] = this[onDragStart].bind(this);\n    this[onDragOver] = this[onDragOver].bind(this);\n    this[onDragStop] = this[onDragStop].bind(this);\n\n    this.on('drag:start', this[onDragStart]).on('drag:over', this[onDragOver]).on('drag:stop', this[onDragStop]);\n  }\n\n  /**\n   * Destroys Swappable instance.\n   */\n  destroy() {\n    super.destroy();\n\n    this.off('drag:start', this._onDragStart).off('drag:over', this._onDragOver).off('drag:stop', this._onDragStop);\n  }\n\n  /**\n   * Drag start handler\n   * @private\n   * @param {DragStartEvent} event - Drag start event\n   */\n  [onDragStart](event) {\n    const swappableStartEvent = new _SwappableEvent.SwappableStartEvent({\n      dragEvent: event\n    });\n\n    this.trigger(swappableStartEvent);\n\n    if (swappableStartEvent.canceled()) {\n      event.cancel();\n    }\n  }\n\n  /**\n   * Drag over handler\n   * @private\n   * @param {DragOverEvent} event - Drag over event\n   */\n  [onDragOver](event) {\n    if (event.over === event.originalSource || event.over === event.source || event.canceled()) {\n      return;\n    }\n\n    const swappableSwapEvent = new _SwappableEvent.SwappableSwapEvent({\n      dragEvent: event,\n      over: event.over,\n      overContainer: event.overContainer\n    });\n\n    this.trigger(swappableSwapEvent);\n\n    if (swappableSwapEvent.canceled()) {\n      return;\n    }\n\n    // swap originally swapped element back\n    if (this.lastOver && this.lastOver !== event.over) {\n      swap(this.lastOver, event.source);\n    }\n\n    if (this.lastOver === event.over) {\n      this.lastOver = null;\n    } else {\n      this.lastOver = event.over;\n    }\n\n    swap(event.source, event.over);\n\n    const swappableSwappedEvent = new _SwappableEvent.SwappableSwappedEvent({\n      dragEvent: event,\n      swappedElement: event.over\n    });\n\n    this.trigger(swappableSwappedEvent);\n  }\n\n  /**\n   * Drag stop handler\n   * @private\n   * @param {DragStopEvent} event - Drag stop event\n   */\n  [onDragStop](event) {\n    const swappableStopEvent = new _SwappableEvent.SwappableStopEvent({\n      dragEvent: event\n    });\n\n    this.trigger(swappableStopEvent);\n    this.lastOver = null;\n  }\n}\n\nexports.default = Swappable;\nfunction withTempElement(callback) {\n  const tmpElement = document.createElement('div');\n  callback(tmpElement);\n  tmpElement.parentNode.removeChild(tmpElement);\n}\n\nfunction swap(source, over) {\n  const overParent = over.parentNode;\n  const sourceParent = source.parentNode;\n\n  withTempElement(tmpElement => {\n    sourceParent.insertBefore(tmpElement, source);\n    overParent.insertBefore(source, over);\n    sourceParent.insertBefore(over, tmpElement);\n  });\n}\n\n//# sourceURL=webpack://Draggable/./src/Swappable/Swappable.js?");

        /***/
      },

      /***/"./src/Swappable/SwappableEvent/SwappableEvent.js":
      /*!********************************************************!*\
        !*** ./src/Swappable/SwappableEvent/SwappableEvent.js ***!
        \********************************************************/
      /*! no static exports found */
      /***/function srcSwappableSwappableEventSwappableEventJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SwappableStopEvent = exports.SwappableSwappedEvent = exports.SwappableSwapEvent = exports.SwappableStartEvent = exports.SwappableEvent = undefined;\n\nvar _AbstractEvent = __webpack_require__(/*! shared/AbstractEvent */ \"./src/shared/AbstractEvent/index.js\");\n\nvar _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Base swappable event\n * @class SwappableEvent\n * @module SwappableEvent\n * @extends AbstractEvent\n */\nclass SwappableEvent extends _AbstractEvent2.default {\n\n  /**\n   * Original drag event that triggered this swappable event\n   * @property dragEvent\n   * @type {DragEvent}\n   * @readonly\n   */\n  get dragEvent() {\n    return this.data.dragEvent;\n  }\n}\n\nexports.SwappableEvent = SwappableEvent; /**\n                                          * Swappable start event\n                                          * @class SwappableStartEvent\n                                          * @module SwappableStartEvent\n                                          * @extends SwappableEvent\n                                          */\n\nSwappableEvent.type = 'swappable';\nclass SwappableStartEvent extends SwappableEvent {}\n\nexports.SwappableStartEvent = SwappableStartEvent; /**\n                                                    * Swappable swap event\n                                                    * @class SwappableSwapEvent\n                                                    * @module SwappableSwapEvent\n                                                    * @extends SwappableEvent\n                                                    */\n\nSwappableStartEvent.type = 'swappable:start';\nSwappableStartEvent.cancelable = true;\nclass SwappableSwapEvent extends SwappableEvent {\n\n  /**\n   * Draggable element you are over\n   * @property over\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get over() {\n    return this.data.over;\n  }\n\n  /**\n   * Draggable container you are over\n   * @property overContainer\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get overContainer() {\n    return this.data.overContainer;\n  }\n}\n\nexports.SwappableSwapEvent = SwappableSwapEvent; /**\n                                                  * Swappable swapped event\n                                                  * @class SwappableSwappedEvent\n                                                  * @module SwappableSwappedEvent\n                                                  * @extends SwappableEvent\n                                                  */\n\nSwappableSwapEvent.type = 'swappable:swap';\nSwappableSwapEvent.cancelable = true;\nclass SwappableSwappedEvent extends SwappableEvent {\n\n  /**\n   * The draggable element that you swapped with\n   * @property swappedElement\n   * @type {HTMLElement}\n   * @readonly\n   */\n  get swappedElement() {\n    return this.data.swappedElement;\n  }\n}\n\nexports.SwappableSwappedEvent = SwappableSwappedEvent; /**\n                                                        * Swappable stop event\n                                                        * @class SwappableStopEvent\n                                                        * @module SwappableStopEvent\n                                                        * @extends SwappableEvent\n                                                        */\n\nSwappableSwappedEvent.type = 'swappable:swapped';\nclass SwappableStopEvent extends SwappableEvent {}\nexports.SwappableStopEvent = SwappableStopEvent;\nSwappableStopEvent.type = 'swappable:stop';\n\n//# sourceURL=webpack://Draggable/./src/Swappable/SwappableEvent/SwappableEvent.js?");

        /***/
      },

      /***/"./src/Swappable/SwappableEvent/index.js":
      /*!***********************************************!*\
        !*** ./src/Swappable/SwappableEvent/index.js ***!
        \***********************************************/
      /*! no static exports found */
      /***/function srcSwappableSwappableEventIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _SwappableEvent = __webpack_require__(/*! ./SwappableEvent */ \"./src/Swappable/SwappableEvent/SwappableEvent.js\");\n\nObject.keys(_SwappableEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _SwappableEvent[key];\n    }\n  });\n});\n\n//# sourceURL=webpack://Draggable/./src/Swappable/SwappableEvent/index.js?");

        /***/
      },

      /***/"./src/Swappable/index.js":
      /*!********************************!*\
        !*** ./src/Swappable/index.js ***!
        \********************************/
      /*! no static exports found */
      /***/function srcSwappableIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _SwappableEvent = __webpack_require__(/*! ./SwappableEvent */ \"./src/Swappable/SwappableEvent/index.js\");\n\nObject.keys(_SwappableEvent).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _SwappableEvent[key];\n    }\n  });\n});\n\nvar _Swappable = __webpack_require__(/*! ./Swappable */ \"./src/Swappable/Swappable.js\");\n\nvar _Swappable2 = _interopRequireDefault(_Swappable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Swappable2.default;\n\n//# sourceURL=webpack://Draggable/./src/Swappable/index.js?");

        /***/
      },

      /***/"./src/index.js":
      /*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/
      /*! no static exports found */
      /***/function srcIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Plugins = exports.Sensors = exports.Sortable = exports.Swappable = exports.Droppable = exports.Draggable = exports.BasePlugin = exports.BaseEvent = undefined;\n\nvar _Draggable = __webpack_require__(/*! ./Draggable */ \"./src/Draggable/index.js\");\n\nObject.defineProperty(exports, 'Draggable', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_Draggable).default;\n  }\n});\n\nvar _Droppable = __webpack_require__(/*! ./Droppable */ \"./src/Droppable/index.js\");\n\nObject.defineProperty(exports, 'Droppable', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_Droppable).default;\n  }\n});\n\nvar _Swappable = __webpack_require__(/*! ./Swappable */ \"./src/Swappable/index.js\");\n\nObject.defineProperty(exports, 'Swappable', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_Swappable).default;\n  }\n});\n\nvar _Sortable = __webpack_require__(/*! ./Sortable */ \"./src/Sortable/index.js\");\n\nObject.defineProperty(exports, 'Sortable', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_Sortable).default;\n  }\n});\n\nvar _AbstractEvent = __webpack_require__(/*! shared/AbstractEvent */ \"./src/shared/AbstractEvent/index.js\");\n\nvar _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);\n\nvar _AbstractPlugin = __webpack_require__(/*! shared/AbstractPlugin */ \"./src/shared/AbstractPlugin/index.js\");\n\nvar _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);\n\nvar _Sensors = __webpack_require__(/*! ./Draggable/Sensors */ \"./src/Draggable/Sensors/index.js\");\n\nvar Sensors = _interopRequireWildcard(_Sensors);\n\nvar _Plugins = __webpack_require__(/*! ./Plugins */ \"./src/Plugins/index.js\");\n\nvar Plugins = _interopRequireWildcard(_Plugins);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.BaseEvent = _AbstractEvent2.default;\nexports.BasePlugin = _AbstractPlugin2.default;\nexports.Sensors = Sensors;\nexports.Plugins = Plugins;\n\n//# sourceURL=webpack://Draggable/./src/index.js?");

        /***/
      },

      /***/"./src/shared/AbstractEvent/AbstractEvent.js":
      /*!***************************************************!*\
        !*** ./src/shared/AbstractEvent/AbstractEvent.js ***!
        \***************************************************/
      /*! no static exports found */
      /***/function srcSharedAbstractEventAbstractEventJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nconst canceled = Symbol('canceled');\n\n/**\n * All events fired by draggable inherit this class. You can call `cancel()` to\n * cancel a specific event or you can check if an event has been canceled by\n * calling `canceled()`.\n * @abstract\n * @class AbstractEvent\n * @module AbstractEvent\n */\nclass AbstractEvent {\n\n  /**\n   * AbstractEvent constructor.\n   * @constructs AbstractEvent\n   * @param {object} data - Event data\n   */\n\n  /**\n   * Event type\n   * @static\n   * @abstract\n   * @property type\n   * @type {String}\n   */\n  constructor(data) {\n    this[canceled] = false;\n    this.data = data;\n  }\n\n  /**\n   * Read-only type\n   * @abstract\n   * @return {String}\n   */\n\n\n  /**\n   * Event cancelable\n   * @static\n   * @abstract\n   * @property cancelable\n   * @type {Boolean}\n   */\n  get type() {\n    return this.constructor.type;\n  }\n\n  /**\n   * Read-only cancelable\n   * @abstract\n   * @return {Boolean}\n   */\n  get cancelable() {\n    return this.constructor.cancelable;\n  }\n\n  /**\n   * Cancels the event instance\n   * @abstract\n   */\n  cancel() {\n    this[canceled] = true;\n  }\n\n  /**\n   * Check if event has been canceled\n   * @abstract\n   * @return {Boolean}\n   */\n  canceled() {\n    return Boolean(this[canceled]);\n  }\n\n  /**\n   * Returns new event instance with existing event data.\n   * This method allows for overriding of event data.\n   * @param {Object} data\n   * @return {AbstractEvent}\n   */\n  clone(data) {\n    return new this.constructor(_extends({}, this.data, data));\n  }\n}\nexports.default = AbstractEvent;\nAbstractEvent.type = 'event';\nAbstractEvent.cancelable = false;\n\n//# sourceURL=webpack://Draggable/./src/shared/AbstractEvent/AbstractEvent.js?");

        /***/
      },

      /***/"./src/shared/AbstractEvent/index.js":
      /*!*******************************************!*\
        !*** ./src/shared/AbstractEvent/index.js ***!
        \*******************************************/
      /*! no static exports found */
      /***/function srcSharedAbstractEventIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _AbstractEvent = __webpack_require__(/*! ./AbstractEvent */ \"./src/shared/AbstractEvent/AbstractEvent.js\");\n\nvar _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _AbstractEvent2.default;\n\n//# sourceURL=webpack://Draggable/./src/shared/AbstractEvent/index.js?");

        /***/
      },

      /***/"./src/shared/AbstractPlugin/AbstractPlugin.js":
      /*!*****************************************************!*\
        !*** ./src/shared/AbstractPlugin/AbstractPlugin.js ***!
        \*****************************************************/
      /*! no static exports found */
      /***/function srcSharedAbstractPluginAbstractPluginJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/**\n * All draggable plugins inherit from this class.\n * @abstract\n * @class AbstractPlugin\n * @module AbstractPlugin\n */\nclass AbstractPlugin {\n  /**\n   * AbstractPlugin constructor.\n   * @constructs AbstractPlugin\n   * @param {Draggable} draggable - Draggable instance\n   */\n  constructor(draggable) {\n    /**\n     * Draggable instance\n     * @property draggable\n     * @type {Draggable}\n     */\n    this.draggable = draggable;\n  }\n\n  /**\n   * Override to add listeners\n   * @abstract\n   */\n  attach() {\n    throw new Error('Not Implemented');\n  }\n\n  /**\n   * Override to remove listeners\n   * @abstract\n   */\n  detach() {\n    throw new Error('Not Implemented');\n  }\n}\nexports.default = AbstractPlugin;\n\n//# sourceURL=webpack://Draggable/./src/shared/AbstractPlugin/AbstractPlugin.js?");

        /***/
      },

      /***/"./src/shared/AbstractPlugin/index.js":
      /*!********************************************!*\
        !*** ./src/shared/AbstractPlugin/index.js ***!
        \********************************************/
      /*! no static exports found */
      /***/function srcSharedAbstractPluginIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _AbstractPlugin = __webpack_require__(/*! ./AbstractPlugin */ \"./src/shared/AbstractPlugin/AbstractPlugin.js\");\n\nvar _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _AbstractPlugin2.default;\n\n//# sourceURL=webpack://Draggable/./src/shared/AbstractPlugin/index.js?");

        /***/
      },

      /***/"./src/shared/utils/closest/closest.js":
      /*!*********************************************!*\
        !*** ./src/shared/utils/closest/closest.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/function srcSharedUtilsClosestClosestJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = closest;\nconst matchFunction = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;\n\n/**\n * Get the closest parent element of a given element that matches the given\n * selector string or matching function\n *\n * @param {Element} element The child element to find a parent of\n * @param {String|Function} selector The string or function to use to match\n *     the parent element\n * @return {Element|null}\n */\nfunction closest(element, value) {\n  if (!element) {\n    return null;\n  }\n\n  const selector = value;\n  const callback = value;\n  const nodeList = value;\n  const singleElement = value;\n\n  const isSelector = Boolean(typeof value === 'string');\n  const isFunction = Boolean(typeof value === 'function');\n  const isNodeList = Boolean(value instanceof NodeList || value instanceof Array);\n  const isElement = Boolean(value instanceof HTMLElement);\n\n  function conditionFn(currentElement) {\n    if (!currentElement) {\n      return currentElement;\n    } else if (isSelector) {\n      return matchFunction.call(currentElement, selector);\n    } else if (isNodeList) {\n      return [...nodeList].includes(currentElement);\n    } else if (isElement) {\n      return singleElement === currentElement;\n    } else if (isFunction) {\n      return callback(currentElement);\n    } else {\n      return null;\n    }\n  }\n\n  let current = element;\n\n  do {\n    current = current.correspondingUseElement || current.correspondingElement || current;\n\n    if (conditionFn(current)) {\n      return current;\n    }\n\n    current = current.parentNode;\n  } while (current && current !== document.body && current !== document);\n\n  return null;\n}\n\n//# sourceURL=webpack://Draggable/./src/shared/utils/closest/closest.js?");

        /***/
      },

      /***/"./src/shared/utils/closest/index.js":
      /*!*******************************************!*\
        !*** ./src/shared/utils/closest/index.js ***!
        \*******************************************/
      /*! no static exports found */
      /***/function srcSharedUtilsClosestIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _closest = __webpack_require__(/*! ./closest */ \"./src/shared/utils/closest/closest.js\");\n\nvar _closest2 = _interopRequireDefault(_closest);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _closest2.default;\n\n//# sourceURL=webpack://Draggable/./src/shared/utils/closest/index.js?");

        /***/
      },

      /***/"./src/shared/utils/index.js":
      /*!***********************************!*\
        !*** ./src/shared/utils/index.js ***!
        \***********************************/
      /*! no static exports found */
      /***/function srcSharedUtilsIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _closest = __webpack_require__(/*! ./closest */ \"./src/shared/utils/closest/index.js\");\n\nObject.defineProperty(exports, 'closest', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_closest).default;\n  }\n});\n\nvar _requestNextAnimationFrame = __webpack_require__(/*! ./requestNextAnimationFrame */ \"./src/shared/utils/requestNextAnimationFrame/index.js\");\n\nObject.defineProperty(exports, 'requestNextAnimationFrame', {\n  enumerable: true,\n  get: function () {\n    return _interopRequireDefault(_requestNextAnimationFrame).default;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://Draggable/./src/shared/utils/index.js?");

        /***/
      },

      /***/"./src/shared/utils/requestNextAnimationFrame/index.js":
      /*!*************************************************************!*\
        !*** ./src/shared/utils/requestNextAnimationFrame/index.js ***!
        \*************************************************************/
      /*! no static exports found */
      /***/function srcSharedUtilsRequestNextAnimationFrameIndexJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _requestNextAnimationFrame = __webpack_require__(/*! ./requestNextAnimationFrame */ \"./src/shared/utils/requestNextAnimationFrame/requestNextAnimationFrame.js\");\n\nvar _requestNextAnimationFrame2 = _interopRequireDefault(_requestNextAnimationFrame);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _requestNextAnimationFrame2.default;\n\n//# sourceURL=webpack://Draggable/./src/shared/utils/requestNextAnimationFrame/index.js?");

        /***/
      },

      /***/"./src/shared/utils/requestNextAnimationFrame/requestNextAnimationFrame.js":
      /*!*********************************************************************************!*\
        !*** ./src/shared/utils/requestNextAnimationFrame/requestNextAnimationFrame.js ***!
        \*********************************************************************************/
      /*! no static exports found */
      /***/function srcSharedUtilsRequestNextAnimationFrameRequestNextAnimationFrameJs(module, exports, __webpack_require__) {

        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = requestNextAnimationFrame;\nfunction requestNextAnimationFrame(callback) {\n  return requestAnimationFrame(() => {\n    requestAnimationFrame(callback);\n  });\n}\n\n//# sourceURL=webpack://Draggable/./src/shared/utils/requestNextAnimationFrame/requestNextAnimationFrame.js?");

        /***/
      }

      /******/ })
  );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../src/components/Analytics/index.js":
/*!********************************************!*\
  !*** ../src/components/Analytics/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function gtag() {
  window.dataLayer.push(arguments); // eslint-disable-line prefer-rest-params
}

var Analytics = function () {
  function Analytics(ua) {
    (0, _classCallCheck3.default)(this, Analytics);

    this.ua = ua;
  }

  (0, _createClass3.default)(Analytics, [{
    key: 'init',
    value: function init() {
      var _this = this;

      if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
        console.log('🤖 Analytics disabled in local development.');
        return;
      }

      this._appendScript().then(function () {
        window.dataLayer = window.dataLayer || [];

        gtag('js', new Date());
        gtag('config', _this.ua);

        return window.dataLayer;
      }).catch(function (error) {
        return console.warn(error);
      });
    }
  }, {
    key: '_appendScript',
    value: function _appendScript() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        document.body.appendChild(script);
        script.onload = resolve;
        script.onerror = reject;
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=' + _this2.ua;
      });
    }
  }]);
  return Analytics;
}();

exports.default = Analytics;

/***/ }),

/***/ "../src/components/MobileNav/index.js":
/*!********************************************!*\
  !*** ../src/components/MobileNav/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _debounce = __webpack_require__(/*! ../../scripts/utils/debounce */ "../src/scripts/utils/debounce.js");

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// equal to `get-breakpoint()` base value
var MAX_WIDTH = 960;

var Attrs = {
  controls: 'aria-controls',
  expanded: 'aria-expanded',
  hidden: 'aria-hidden'
};

var MobileNav = function () {
  function MobileNav(activator) {
    (0, _classCallCheck3.default)(this, MobileNav);

    this.activator = activator;
    this.target = document.getElementById(activator.getAttribute(Attrs.controls));
  }

  (0, _createClass3.default)(MobileNav, [{
    key: 'init',
    value: function init() {
      var _this = this;

      if (!this.target) {
        console.error('The activator must have a valid `aria-controls` value. Target not found.');
        return;
      }

      this._setState();
      this.activator.addEventListener('click', this.toggle.bind(this));

      window.addEventListener('resize', (0, _debounce2.default)(function () {
        _this._setState();
      }, _debounce.debounceDuration));
    }
  }, {
    key: 'expand',
    value: function expand() {
      var widthExceeded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var lockScrolling = !widthExceeded;
      var willExpand = widthExceeded ? 'undefined' : 'false';

      this.expanded = true;
      this.activator.setAttribute(Attrs.expanded, 'true');
      this.target.setAttribute(Attrs.hidden, willExpand);
      document.documentElement.dataset.scrollLock = lockScrolling;
    }
  }, {
    key: 'collapse',
    value: function collapse() {
      if (this.expanded === false) {
        return;
      }

      this.expanded = false;
      this.activator.setAttribute(Attrs.expanded, 'false');
      this.target.setAttribute(Attrs.hidden, 'true');
      document.documentElement.dataset.scrollLock = false;
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      return this.expanded ? this.collapse() : this.expand();
    }
  }, {
    key: '_setState',
    value: function _setState() {
      var windowWidth = document.documentElement.clientWidth;

      // currently collapses when resizing within any mobile range...
      // I should update this to remain `expanded` when resizing within that range
      return windowWidth < MAX_WIDTH ? this.collapse() : this.expand(true);
    }
  }]);
  return MobileNav;
}();

exports.default = MobileNav;

/***/ }),

/***/ "../src/components/Plate/index.js":
/*!****************************************!*\
  !*** ../src/components/Plate/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _flipSign = __webpack_require__(/*! ../../scripts/utils/flip-sign */ "../src/scripts/utils/flip-sign.js");

var _flipSign2 = _interopRequireDefault(_flipSign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scaleFactor = 0.725;
var translateFactors = {
  bottom: 0.075,
  middle: 0.5,
  top: 0.975
};
var Classes = {
  bottom: 'Plate--levelBottom',
  middle: 'Plate--levelMiddle',
  top: 'Plate--levelTop'
};

function calculatePlateScale(value, max, factor) {
  var step1 = Math.abs(value) / max;
  var step2 = step1 - step1 * factor;

  return 1 - step2; // step 3
}

var Plate = function () {
  function Plate(wrapper) {
    (0, _classCallCheck3.default)(this, Plate);

    this.wrapper = wrapper;
    this.plates = {
      bottom: wrapper.getElementsByClassName(Classes.bottom)[0],
      middle: wrapper.getElementsByClassName(Classes.middle)[0],
      top: wrapper.getElementsByClassName(Classes.top)[0]
    };
    this.threshold = {
      min: -27.2,
      max: 27.2
    };
    this.initialMousePosition = {
      x: 0,
      y: 0
    };
  }

  (0, _createClass3.default)(Plate, [{
    key: 'setThreshold',
    value: function setThreshold() {
      var newThreshold = this.wrapper.offsetWidth / 10;

      this.threshold = {
        min: (0, _flipSign2.default)(newThreshold),
        max: newThreshold
      };
    }
  }, {
    key: 'setInitialMousePosition',
    value: function setInitialMousePosition(sensorEvent) {
      this.initialMousePosition.x = sensorEvent.clientX;
      this.initialMousePosition.y = sensorEvent.clientY;
    }
  }, {
    key: 'dragWarp',
    value: function dragWarp(source, sensorEvent) {
      var adjustedX = this._offsetWithinThreshold(this.initialMousePosition.x, sensorEvent.clientX);
      var adjustedY = this._offsetWithinThreshold(this.initialMousePosition.y, sensorEvent.clientY);

      this._scalePlates(adjustedX, adjustedY);
      this._translateShadow(adjustedX, adjustedY);
      this._translateEachPlate(adjustedX, adjustedY);
    }
  }, {
    key: 'resetWarp',
    value: function resetWarp() {
      this._scalePlates(0, 0);
      this._translateShadow(0, 0);
      this._translateEachPlate(0, 0);
    }
  }, {
    key: '_offsetWithinThreshold',
    value: function _offsetWithinThreshold(initialPosition, currentPosition) {
      var updatedPosition = initialPosition - currentPosition;
      var offset = updatedPosition;

      if (updatedPosition < this.threshold.min) {
        offset = this.threshold.min;
      } else if (updatedPosition > this.threshold.max) {
        offset = this.threshold.max;
      }

      return offset;
    }
  }, {
    key: '_scalePlates',
    value: function _scalePlates(x, y) {
      var scaleX = calculatePlateScale(x, this.threshold.max, scaleFactor);
      var scaleY = calculatePlateScale(y, this.threshold.max, scaleFactor);

      this.wrapper.style.setProperty('--plate-scale-x', '' + scaleX);
      this.wrapper.style.setProperty('--plate-scale-y', '' + scaleY);
    }
  }, {
    key: '_translateEachPlate',
    value: function _translateEachPlate(x, y) {
      for (var plateLevel in this.plates) {
        if (this.plates.hasOwnProperty(plateLevel)) {
          var translateX = (0, _flipSign2.default)(x * 2) * translateFactors[plateLevel];
          var translateY = (0, _flipSign2.default)(y * 2) * translateFactors[plateLevel];

          this.wrapper.style.setProperty('--' + plateLevel + '-translate-x', translateX + 'px');
          this.wrapper.style.setProperty('--' + plateLevel + '-translate-y', translateY + 'px');
        }
      }
    }
  }, {
    key: '_translateShadow',
    value: function _translateShadow(x, y) {
      this.wrapper.style.setProperty('--shadow-offset-x', x / 2 + 'px');
      this.wrapper.style.setProperty('--shadow-offset-y', y / 2 + 'px');
    }
  }]);
  return Plate;
}();

exports.default = Plate;

/***/ }),

/***/ "../src/content/Draggable/DragEvents/index.js":
/*!****************************************************!*\
  !*** ../src/content/Draggable/DragEvents/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DragEvents;

var _draggable = __webpack_require__(/*! @shopify/draggable */ "../packages/@shopify/draggable/index.js");

function translateMirror(mirror, mirrorCoords, containerRect) {
  if (mirrorCoords.top < containerRect.top || mirrorCoords.left < containerRect.left) {
    return;
  }

  requestAnimationFrame(function () {
    mirror.style.transform = 'translate3d(' + mirrorCoords.left + 'px, ' + mirrorCoords.top + 'px, 0)';
  });
} // eslint-disable-next-line import/no-unresolved


function calcOffset(offset) {
  return offset * 2 * 0.5;
}

function DragEvents() {
  var toggleClass = 'PillSwitch--isOn';
  var containers = document.querySelectorAll('#DragEvents .PillSwitch');

  if (containers.length === 0) {
    return false;
  }

  var draggable = new _draggable.Draggable(containers, {
    draggable: '.PillSwitchControl',
    delay: 0
  });

  var isToggled = false;
  var initialMousePosition = void 0;
  var containerRect = void 0;
  var dragRect = void 0;
  var dragThreshold = void 0;
  var headings = void 0;
  var headingText = void 0;

  // --- Draggable events --- //
  draggable.on('drag:start', function (evt) {
    initialMousePosition = {
      x: evt.sensorEvent.clientX,
      y: evt.sensorEvent.clientY
    };
  });

  draggable.on('mirror:created', function (evt) {
    containerRect = evt.sourceContainer.getBoundingClientRect();
    dragRect = evt.source.getBoundingClientRect();

    var containerRectQuarter = containerRect.width / 4;
    dragThreshold = isToggled ? containerRectQuarter * -1 : containerRectQuarter;
    headings = {
      source: evt.originalSource.querySelector('[data-switch-on]'),
      mirror: evt.mirror.querySelector('[data-switch-on]')
    };
    headingText = {
      on: headings.source.dataset.switchOn,
      off: headings.source.dataset.switchOff
    };
  });

  draggable.on('mirror:move', function (evt) {
    // Required to help restrict the draggable element to the container
    evt.cancel();

    // We do not want to use `getBoundingClientRect` while dragging,
    // as that would be very expensive.
    // Instead, we look at the mouse position, which we can ballpark as being
    // close to the center of the draggable element.
    // We need to look at both the X and Y offset and determine which is the higher number.
    // That way we can drag outside of the container and still have the
    // draggable element move appropriately.
    var offsetX = calcOffset(evt.sensorEvent.clientX - initialMousePosition.x);
    var offsetY = calcOffset(initialMousePosition.y - evt.sensorEvent.clientY);
    var offsetValue = offsetX > offsetY ? offsetX : offsetY;
    var mirrorCoords = {
      top: dragRect.top - offsetValue,
      left: dragRect.left + offsetValue
    };

    translateMirror(evt.mirror, mirrorCoords, containerRect);

    if (isToggled && offsetValue < dragThreshold) {
      evt.sourceContainer.classList.remove(toggleClass);
      headings.source.textContent = headingText.off;
      headings.mirror.textContent = headingText.off;
      isToggled = false;
    } else if (!isToggled && offsetValue > dragThreshold) {
      evt.sourceContainer.classList.add(toggleClass);
      headings.source.textContent = headingText.on;
      headings.mirror.textContent = headingText.on;
      isToggled = true;
    }
  });

  return draggable;
}

/***/ }),

/***/ "../src/content/Droppable/UniqueDropzone/index.js":
/*!********************************************************!*\
  !*** ../src/content/Droppable/UniqueDropzone/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UniqueDropzone;

var _draggable = __webpack_require__(/*! @shopify/draggable */ "../packages/@shopify/draggable/index.js");

function UniqueDropzone() {
  var containers = document.querySelectorAll('#UniqueDropzone .BlockLayout');

  if (containers.length === 0) {
    return false;
  }

  var droppable = new _draggable.Droppable(containers, {
    draggable: '.Block--isDraggable',
    dropzone: '.BlockWrapper--isDropzone',
    mirror: {
      constrainDimensions: true
    }
  });

  var droppableOrigin = void 0;

  // --- Draggable events --- //
  droppable.on('drag:start', function (evt) {
    droppableOrigin = evt.originalSource.parentNode.dataset.dropzone;
  });

  droppable.on('droppable:dropped', function (evt) {
    if (droppableOrigin !== evt.dropzone.dataset.dropzone) {
      evt.cancel();
    }
  });

  return droppable;
} // eslint-disable-next-line import/no-unresolved

/***/ }),

/***/ "../src/content/Home/index.js":
/*!************************************!*\
  !*** ../src/content/Home/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;

var _draggable = __webpack_require__(/*! @shopify/draggable */ "../packages/@shopify/draggable/index.js");

var _Plate = __webpack_require__(/*! ../../components/Plate */ "../src/components/Plate/index.js");

var _Plate2 = _interopRequireDefault(_Plate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unresolved
function Home() {
  var containerSelector = '#Home .PlateWrapper';
  var container = document.querySelector(containerSelector);

  if (!container) {
    return false;
  }

  var draggable = new _draggable.Draggable(container, {
    draggable: '.Plate'
  });
  var plates = new _Plate2.default(container);

  // --- Draggable events --- //
  draggable.on('drag:start', function (evt) {
    plates.setThreshold();
    plates.setInitialMousePosition(evt.sensorEvent);
  });

  draggable.on('drag:move', function (evt) {
    // rAF seems to cause the animation to get stuck?
    // requestAnimationFrame(() => {});
    plates.dragWarp(evt.source, evt.sensorEvent);
  });

  draggable.on('drag:stop', function () {
    plates.resetWarp();
  });

  return draggable;
}

/***/ }),

/***/ "../src/content/Plugins/Collidable/index.js":
/*!**************************************************!*\
  !*** ../src/content/Plugins/Collidable/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PluginsCollidable;

var _draggable = __webpack_require__(/*! @shopify/draggable */ "../packages/@shopify/draggable/index.js");

function PluginsCollidable() {
  var containerSelector = '#Collidable .BlockLayout';
  var containers = document.querySelectorAll(containerSelector);
  var wallClass = 'CollidableWall';
  var walls = document.querySelectorAll('.' + wallClass);

  if (containers.length === 0) {
    return false;
  }

  var droppable = new _draggable.Droppable(containers, {
    draggable: '.Block--isDraggable',
    dropzone: '.BlockWrapper--isDropzone',
    collidables: '.CollidableObstacle',
    mirror: {
      appendTo: containerSelector,
      constrainDimensions: true
    },
    plugins: [_draggable.Plugins.Collidable]
  });

  // --- Draggable events --- //
  droppable.on('collidable:in', function (_ref) {
    var collidingElement = _ref.collidingElement;

    if (collidingElement.classList.contains(wallClass)) {
      walls.forEach(function (wall) {
        return wall.classList.add('isColliding');
      });
    } else {
      collidingElement.classList.add('isColliding');
    }
  });

  droppable.on('collidable:out', function (_ref2) {
    var collidingElement = _ref2.collidingElement;

    if (collidingElement.classList.contains(wallClass)) {
      walls.forEach(function (wall) {
        return wall.classList.remove('isColliding');
      });
    } else {
      collidingElement.classList.remove('isColliding');
    }
  });

  return droppable;
} // eslint-disable-next-line import/no-unresolved

/***/ }),

/***/ "../src/content/Plugins/Snappable/index.js":
/*!*************************************************!*\
  !*** ../src/content/Plugins/Snappable/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PluginsSnappable;

var _draggable = __webpack_require__(/*! @shopify/draggable */ "../packages/@shopify/draggable/index.js");

function PluginsSnappable() {
  var containerSelector = '#Snappable .BlockLayout';
  var containers = document.querySelectorAll(containerSelector);

  if (containers.length === 0) {
    return false;
  }

  var swappable = new _draggable.Swappable(containers, {
    mirror: {
      appendTo: containerSelector,
      constrainDimensions: true
    },
    plugins: [_draggable.Plugins.Snappable]
  });

  // --- Draggable events --- //
  swappable.on('drag:start', function (evt) {
    if (evt.originalSource.classList.contains('Block--typeStripes')) {
      evt.cancel();
    }
  });

  return swappable;
} // eslint-disable-next-line import/no-unresolved

/***/ }),

/***/ "../src/content/Plugins/SwapAnimation/index.js":
/*!*****************************************************!*\
  !*** ../src/content/Plugins/SwapAnimation/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PluginsSwapAnimation;

var _draggable = __webpack_require__(/*! @shopify/draggable */ "../packages/@shopify/draggable/index.js");

function PluginsSwapAnimation() {
  var containers = document.querySelectorAll('#SwapAnimation .BlockLayout');

  if (containers.length === 0) {
    return false;
  }

  var sortable = new _draggable.Sortable(containers, {
    draggable: '.Block--isDraggable',
    mirror: {
      constrainDimensions: true
    },
    plugins: [_draggable.Plugins.SwapAnimation],
    swapAnimation: {
      duration: 200,
      easingFunction: 'ease-in-out'
    }
  });

  return sortable;
} // eslint-disable-next-line import/no-unresolved

/***/ }),

/***/ "../src/content/Sortable/MultipleContainers/index.js":
/*!***********************************************************!*\
  !*** ../src/content/Sortable/MultipleContainers/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MultipleContainers;

var _draggable = __webpack_require__(/*! @shopify/draggable */ "../packages/@shopify/draggable/index.js");

var Classes = {
  draggable: 'StackedListItem--isDraggable',
  capacity: 'draggable-container-parent--capacity'
}; // eslint-disable-next-line import/no-unresolved
function MultipleContainers() {
  var containers = document.querySelectorAll('#MultipleContainers .StackedList');

  if (containers.length === 0) {
    return false;
  }

  var sortable = new _draggable.Sortable(containers, {
    draggable: '.' + Classes.draggable,
    mirror: {
      constrainDimensions: true
    },
    plugins: [_draggable.Plugins.ResizeMirror]
  });

  var containerTwoCapacity = 3;
  var containerTwoParent = sortable.containers[1].parentNode;
  var currentMediumChildren = void 0;
  var capacityReached = void 0;
  var lastOverContainer = void 0;

  // --- Draggable events --- //
  sortable.on('drag:start', function (evt) {
    currentMediumChildren = sortable.getDraggableElementsForContainer(sortable.containers[1]).length;
    capacityReached = currentMediumChildren === containerTwoCapacity;
    lastOverContainer = evt.sourceContainer;
    containerTwoParent.classList.toggle(Classes.capacity, capacityReached);
  });

  sortable.on('sortable:sort', function (evt) {
    if (!capacityReached) {
      return;
    }

    var sourceIsCapacityContainer = evt.dragEvent.sourceContainer === sortable.containers[1];

    if (!sourceIsCapacityContainer && evt.dragEvent.overContainer === sortable.containers[1]) {
      evt.cancel();
    }
  });

  sortable.on('sortable:sorted', function (evt) {
    if (lastOverContainer === evt.dragEvent.overContainer) {
      return;
    }

    lastOverContainer = evt.dragEvent.overContainer;
  });

  return sortable;
}

/***/ }),

/***/ "../src/content/Sortable/SimpleList/index.js":
/*!***************************************************!*\
  !*** ../src/content/Sortable/SimpleList/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SimpleList;

var _draggable = __webpack_require__(/*! @shopify/draggable */ "../packages/@shopify/draggable/index.js");

function SimpleList() {
  var containerSelector = '#SimpleList .StackedList';
  var containers = document.querySelectorAll(containerSelector);

  if (containers.length === 0) {
    return false;
  }

  var sortable = new _draggable.Sortable(containers, {
    draggable: '.StackedListItem--isDraggable',
    mirror: {
      appendTo: containerSelector,
      constrainDimensions: true
    }
  });

  return sortable;
} // eslint-disable-next-line import/no-unresolved

/***/ }),

/***/ "../src/content/Sortable/Transformed/index.js":
/*!****************************************************!*\
  !*** ../src/content/Sortable/Transformed/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Transformed;

var _draggable = __webpack_require__(/*! @shopify/draggable */ "../packages/@shopify/draggable/index.js");

function Transformed() {
  var containerSelector = '#Transformed .PaperStack';
  var containers = document.querySelectorAll(containerSelector);

  if (containers.length === 0) {
    return false;
  }

  var sortable = new _draggable.Sortable(containers, {
    draggable: '.PaperStackItem--isDraggable',
    mirror: {
      appendTo: containerSelector,
      constrainDimensions: true
    }
  });

  return sortable;
} // eslint-disable-next-line import/no-unresolved

/***/ }),

/***/ "../src/content/Swappable/Flexbox/index.js":
/*!*************************************************!*\
  !*** ../src/content/Swappable/Flexbox/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Flexbox;

var _draggable = __webpack_require__(/*! @shopify/draggable */ "../packages/@shopify/draggable/index.js");

function Flexbox() {
  var containers = document.querySelectorAll('#Flexbox .BlockLayout');

  if (containers.length === 0) {
    return false;
  }

  var swappable = new _draggable.Swappable(containers, {
    draggable: '.Block--isDraggable',
    mirror: {
      constrainDimensions: true
    },
    plugins: [_draggable.Plugins.ResizeMirror]
  });

  return swappable;
} // eslint-disable-next-line import/no-unresolved

/***/ }),

/***/ "../src/content/Swappable/Floated/index.js":
/*!*************************************************!*\
  !*** ../src/content/Swappable/Floated/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Floated;

var _draggable = __webpack_require__(/*! @shopify/draggable */ "../packages/@shopify/draggable/index.js");

function Floated() {
  var containers = document.querySelectorAll('#Floated .BlockLayout');

  if (containers.length === 0) {
    return false;
  }

  var swappable = new _draggable.Swappable(containers, {
    draggable: '.Block--isDraggable',
    mirror: {
      constrainDimensions: true
    },
    plugins: [_draggable.Plugins.ResizeMirror]
  });

  return swappable;
} // eslint-disable-next-line import/no-unresolved

/***/ }),

/***/ "../src/content/Swappable/GridLayout/index.js":
/*!****************************************************!*\
  !*** ../src/content/Swappable/GridLayout/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GridLayout;

var _draggable = __webpack_require__(/*! @shopify/draggable */ "../packages/@shopify/draggable/index.js");

function GridLayout() {
  var containerSelector = '#GridLayout .BlockLayout';
  var containers = document.querySelectorAll(containerSelector);

  if (containers.length === 0) {
    return false;
  }

  var swappable = new _draggable.Swappable(containers, {
    draggable: '.Block--isDraggable',
    mirror: {
      appendTo: containerSelector,
      constrainDimensions: true
    },
    plugins: [_draggable.Plugins.ResizeMirror]
  });

  return swappable;
} // eslint-disable-next-line import/no-unresolved

/***/ }),

/***/ "../src/content/index.js":
/*!*******************************!*\
  !*** ../src/content/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = __webpack_require__(/*! ./Home */ "../src/content/Home/index.js");

var _Home2 = _interopRequireDefault(_Home);

var _DragEvents = __webpack_require__(/*! ./Draggable/DragEvents */ "../src/content/Draggable/DragEvents/index.js");

var _DragEvents2 = _interopRequireDefault(_DragEvents);

var _UniqueDropzone = __webpack_require__(/*! ./Droppable/UniqueDropzone */ "../src/content/Droppable/UniqueDropzone/index.js");

var _UniqueDropzone2 = _interopRequireDefault(_UniqueDropzone);

var _SimpleList = __webpack_require__(/*! ./Sortable/SimpleList */ "../src/content/Sortable/SimpleList/index.js");

var _SimpleList2 = _interopRequireDefault(_SimpleList);

var _Transformed = __webpack_require__(/*! ./Sortable/Transformed */ "../src/content/Sortable/Transformed/index.js");

var _Transformed2 = _interopRequireDefault(_Transformed);

var _MultipleContainers = __webpack_require__(/*! ./Sortable/MultipleContainers */ "../src/content/Sortable/MultipleContainers/index.js");

var _MultipleContainers2 = _interopRequireDefault(_MultipleContainers);

var _Flexbox = __webpack_require__(/*! ./Swappable/Flexbox */ "../src/content/Swappable/Flexbox/index.js");

var _Flexbox2 = _interopRequireDefault(_Flexbox);

var _Floated = __webpack_require__(/*! ./Swappable/Floated */ "../src/content/Swappable/Floated/index.js");

var _Floated2 = _interopRequireDefault(_Floated);

var _GridLayout = __webpack_require__(/*! ./Swappable/GridLayout */ "../src/content/Swappable/GridLayout/index.js");

var _GridLayout2 = _interopRequireDefault(_GridLayout);

var _Collidable = __webpack_require__(/*! ./Plugins/Collidable */ "../src/content/Plugins/Collidable/index.js");

var _Collidable2 = _interopRequireDefault(_Collidable);

var _Snappable = __webpack_require__(/*! ./Plugins/Snappable */ "../src/content/Plugins/Snappable/index.js");

var _Snappable2 = _interopRequireDefault(_Snappable);

var _SwapAnimation = __webpack_require__(/*! ./Plugins/SwapAnimation */ "../src/content/Plugins/SwapAnimation/index.js");

var _SwapAnimation2 = _interopRequireDefault(_SwapAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Swappable

// Droppable
// Home page
var Content = {
  Home: _Home2.default,
  DragEvents: _DragEvents2.default,
  UniqueDropzone: _UniqueDropzone2.default,
  SimpleList: _SimpleList2.default,
  Transformed: _Transformed2.default,
  MultipleContainers: _MultipleContainers2.default,
  Flexbox: _Flexbox2.default,
  Floated: _Floated2.default,
  GridLayout: _GridLayout2.default,
  PluginsCollidable: _Collidable2.default,
  PluginsSnappable: _Snappable2.default,
  PluginsSwapAnimation: _SwapAnimation2.default
};
// Plugins

// Sortable

// Draggable
exports.default = Content;

/***/ }),

/***/ "../src/scripts/examples-app.js":
/*!**************************************!*\
  !*** ../src/scripts/examples-app.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Analytics = __webpack_require__(/*! ../components/Analytics */ "../src/components/Analytics/index.js");

var _Analytics2 = _interopRequireDefault(_Analytics);

var _MobileNav = __webpack_require__(/*! ../components/MobileNav */ "../src/components/MobileNav/index.js");

var _MobileNav2 = _interopRequireDefault(_MobileNav);

var _content = __webpack_require__(/*! ../content */ "../src/content/index.js");

var _content2 = _interopRequireDefault(_content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initialize Google Analytics
var gtagTracking = new _Analytics2.default('UA-107063633-1');
gtagTracking.init();

// Initialize navigation
var mobileNav = new _MobileNav2.default(document.getElementById('MobileNavActivator'));
mobileNav.init();

// Initialize all examples
for (var Example in _content2.default) {
  if (_content2.default.hasOwnProperty(Example)) {
    _content2.default[Example]();
  }
}

/***/ }),

/***/ "../src/scripts/utils/debounce.js":
/*!****************************************!*\
  !*** ../src/scripts/utils/debounce.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounce;
function debounce(callback, wait) {
  var timeout = null;

  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this; // eslint-disable-line consistent-this, babel/no-invalid-this

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      return callback.apply(context, args);
    }, wait);
  };
}

var debounceDuration = exports.debounceDuration = 60 * 6;

/***/ }),

/***/ "../src/scripts/utils/flip-sign.js":
/*!*****************************************!*\
  !*** ../src/scripts/utils/flip-sign.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flipSign;
function flipSign(number) {
  if (Math.sign(number) === 1) {
    return -Math.abs(number);
  } else if (Math.sign(number) === -1) {
    return Math.abs(number);
  } else {
    return 0;
  }
}

/***/ })

},[["../src/scripts/examples-app.js","examples-runtime","examples-vendor"]]]);
//# sourceMappingURL=examples-app.js.map