(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1227:
/***/ (() => {

"use strict";

;// CONCATENATED MODULE: external "animejs"
const external_animejs_namespaceObject = require("animejs");
;// CONCATENATED MODULE: external "jquery"
const external_jquery_namespaceObject = require("jquery");
;// CONCATENATED MODULE: ./assets/js/anime-helper.js


if (false) {}


/***/ }),

/***/ 6405:
/***/ (() => {

"use strict";

;// CONCATENATED MODULE: external "feather-icons"
const external_feather_icons_namespaceObject = require("feather-icons");
;// CONCATENATED MODULE: ./assets/js/data-attr-helper.js

if (false) {}


/***/ }),

/***/ 4242:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_0__]);
swiper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

if (false) {}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5896:
/***/ (() => {

"use strict";

;// CONCATENATED MODULE: external "typed.js"
const external_typed_js_namespaceObject = require("typed.js");
;// CONCATENATED MODULE: ./assets/js/typed-helper.js

if (false) {}


/***/ }),

/***/ 2895:
/***/ (() => {

"use strict";

;// CONCATENATED MODULE: external "uikit"
const external_uikit_namespaceObject = require("uikit");
;// CONCATENATED MODULE: ./assets/js/uikit-components.js

if (false) {}


/***/ }),

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_js_uikit_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2895);
/* harmony import */ var _assets_js_data_attr_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6405);
/* harmony import */ var _assets_js_anime_helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1227);
/* harmony import */ var _assets_js_swiper_helper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4242);
/* harmony import */ var _assets_js_typed_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5896);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9176);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2996);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5198);
/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_css_uikit_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7327);
/* harmony import */ var _assets_css_uikit_min_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_css_uikit_min_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_css_theme_main_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5548);
/* harmony import */ var _assets_css_theme_main_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_css_theme_main_css__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_assets_js_swiper_helper_js__WEBPACK_IMPORTED_MODULE_4__]);
_assets_js_swiper_helper_js__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














function MyApp({ Component , pageProps  }) {
    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_6___default().useState(false);
    const [firstRender, setFirstRender] = react__WEBPACK_IMPORTED_MODULE_6___default().useState(false);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        document.querySelectorAll('a[href^="#"]').forEach((anchor)=>{
            anchor.addEventListener("click", function(e) {
                const target = document.querySelector(this.getAttribute("href"));
                if (!target) return;
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            });
        });
    });
    react__WEBPACK_IMPORTED_MODULE_6___default().useEffect(()=>{
        setFirstRender(true);
    });
    if (!firstRender) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5548:
/***/ (() => {



/***/ }),

/***/ 7327:
/***/ (() => {



/***/ }),

/***/ 9176:
/***/ (() => {



/***/ }),

/***/ 2996:
/***/ (() => {



/***/ }),

/***/ 5198:
/***/ (() => {



/***/ }),

/***/ 8722:
/***/ (() => {



/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8484));
module.exports = __webpack_exports__;

})();