(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../web_pkg/jsonpath_wasm.js":
/*!***********************************!*\
  !*** ../web_pkg/jsonpath_wasm.js ***!
  \***********************************/
/*! exports provided: compile, selector, select, deleteValue, replaceWith, Selector, SelectorMut, __wbg_error_c4abc40e0406628b, __wbindgen_object_drop_ref, __wbindgen_object_clone_ref, __wbindgen_string_new, __wbindgen_json_parse, __wbindgen_json_serialize, __wbg_call_bf745b1758bb6693, __wbindgen_is_string, __wbindgen_string_get, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_rethrow, __wbindgen_closure_wrapper107, __wbindgen_closure_wrapper109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsonpath_wasm_bg.wasm */ \"../web_pkg/jsonpath_wasm_bg.wasm\");\n/* harmony import */ var _jsonpath_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsonpath_wasm_bg.js */ \"../web_pkg/jsonpath_wasm_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"compile\", function() { return _jsonpath_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"compile\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"selector\", function() { return _jsonpath_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"selector\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"select\", function() { return _jsonpath_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"select\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deleteValue\", function() { return _jsonpath_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"deleteValue\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"replaceWith\", function() { return _jsonpath_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"replaceWith\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Selector\", function() { return _jsonpath_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Selector\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SelectorMut\", function() { return _jsonpath_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"SelectorMut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_error_c4abc40e0406628b\", function() { return _jsonpath_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_error_c4abc40e0406628b\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _jsonpath_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return _jsonpath_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_clone_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return _jsonpath_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_string_new\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_json_parse\", function() { return _jsonpath_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_json_parse\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_json_serialize\", function() { return _jsonpath_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_json_serialize\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_bf745b1758bb6693\", function() { return _jsonpath_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_call_bf745b1758bb6693\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_string\", function() { return _jsonpath_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_is_string\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_get\", function() { return _jsonpath_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_string_get\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_debug_string\", function() { return _jsonpath_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_debug_string\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _jsonpath_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return _jsonpath_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_rethrow\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper107\", function() { return _jsonpath_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_closure_wrapper107\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper109\", function() { return _jsonpath_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_closure_wrapper109\"]; });\n\n\n\n\n//# sourceURL=webpack:///../web_pkg/jsonpath_wasm.js?");

/***/ }),

/***/ "../web_pkg/jsonpath_wasm_bg.js":
/*!**************************************!*\
  !*** ../web_pkg/jsonpath_wasm_bg.js ***!
  \**************************************/
/*! exports provided: compile, selector, select, deleteValue, replaceWith, Selector, SelectorMut, __wbg_error_c4abc40e0406628b, __wbindgen_object_drop_ref, __wbindgen_object_clone_ref, __wbindgen_string_new, __wbindgen_json_parse, __wbindgen_json_serialize, __wbg_call_bf745b1758bb6693, __wbindgen_is_string, __wbindgen_string_get, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_rethrow, __wbindgen_closure_wrapper107, __wbindgen_closure_wrapper109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compile\", function() { return compile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selector\", function() { return selector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"select\", function() { return select; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteValue\", function() { return deleteValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"replaceWith\", function() { return replaceWith; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Selector\", function() { return Selector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SelectorMut\", function() { return SelectorMut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_error_c4abc40e0406628b\", function() { return __wbg_error_c4abc40e0406628b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_json_parse\", function() { return __wbindgen_json_parse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_json_serialize\", function() { return __wbindgen_json_serialize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_bf745b1758bb6693\", function() { return __wbg_call_bf745b1758bb6693; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_string\", function() { return __wbindgen_is_string; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_get\", function() { return __wbindgen_string_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_debug_string\", function() { return __wbindgen_debug_string; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return __wbindgen_rethrow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper107\", function() { return __wbindgen_closure_wrapper107; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper109\", function() { return __wbindgen_closure_wrapper109; });\n/* harmony import */ var _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsonpath_wasm_bg.wasm */ \"../web_pkg/jsonpath_wasm_bg.wasm\");\n\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nfunction debugString(val) {\n    // primitive types\n    const type = typeof val;\n    if (type == 'number' || type == 'boolean' || val == null) {\n        return  `${val}`;\n    }\n    if (type == 'string') {\n        return `\"${val}\"`;\n    }\n    if (type == 'symbol') {\n        const description = val.description;\n        if (description == null) {\n            return 'Symbol';\n        } else {\n            return `Symbol(${description})`;\n        }\n    }\n    if (type == 'function') {\n        const name = val.name;\n        if (typeof name == 'string' && name.length > 0) {\n            return `Function(${name})`;\n        } else {\n            return 'Function';\n        }\n    }\n    // objects\n    if (Array.isArray(val)) {\n        const length = val.length;\n        let debug = '[';\n        if (length > 0) {\n            debug += debugString(val[0]);\n        }\n        for(let i = 1; i < length; i++) {\n            debug += ', ' + debugString(val[i]);\n        }\n        debug += ']';\n        return debug;\n    }\n    // Test for built-in\n    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));\n    let className;\n    if (builtInMatches.length > 1) {\n        className = builtInMatches[1];\n    } else {\n        // Failed to match the standard '[object ClassName]'\n        return toString.call(val);\n    }\n    if (className == 'Object') {\n        // we're a user defined class or Object\n        // JSON.stringify avoids problems with cycles, and is generally much\n        // easier than looping through ownProperties of `val`.\n        try {\n            return 'Object(' + JSON.stringify(val) + ')';\n        } catch (_) {\n            return 'Object';\n        }\n    }\n    // errors\n    if (val instanceof Error) {\n        return `${val.name}: ${val.message}\\n${val.stack}`;\n    }\n    // TODO we could test for more things here, like `Set`s and `Map`s.\n    return className;\n}\n\nfunction makeClosure(arg0, arg1, dtor, f) {\n    const state = { a: arg0, b: arg1, cnt: 1, dtor };\n    const real = (...args) => {\n        // First up with a closure we increment the internal reference\n        // count. This ensures that the Rust closure environment won't\n        // be deallocated while we're invoking it.\n        state.cnt++;\n        try {\n            return f(state.a, state.b, ...args);\n        } finally {\n            if (--state.cnt === 0) {\n                _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_export_2\"].get(state.dtor)(state.a, state.b);\n                state.a = 0;\n\n            }\n        }\n    };\n    real.original = state;\n\n    return real;\n}\nfunction __wbg_adapter_22(arg0, arg1, arg2) {\n    var ptr0 = passStringToWasm0(arg2, _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    var ret = _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"_dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h46468b167eaaeb87\"](arg0, arg1, ptr0, len0);\n    return takeObject(ret);\n}\n\nfunction __wbg_adapter_25(arg0, arg1, arg2) {\n    var ret = _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"_dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4bcc2acf0fb4a8f0\"](arg0, arg1, addHeapObject(arg2));\n    return takeObject(ret);\n}\n\n/**\n* @param {string} path\n* @returns {any}\n*/\nfunction compile(path) {\n    var ptr0 = passStringToWasm0(path, _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    var ret = _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"compile\"](ptr0, len0);\n    return takeObject(ret);\n}\n\n/**\n* @param {any} js_value\n* @returns {any}\n*/\nfunction selector(js_value) {\n    var ret = _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"selector\"](addHeapObject(js_value));\n    return takeObject(ret);\n}\n\n/**\n* @param {any} js_value\n* @param {string} path\n* @returns {any}\n*/\nfunction select(js_value, path) {\n    var ptr0 = passStringToWasm0(path, _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    var ret = _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"select\"](addHeapObject(js_value), ptr0, len0);\n    return takeObject(ret);\n}\n\n/**\n* @param {any} js_value\n* @param {string} path\n* @returns {any}\n*/\nfunction deleteValue(js_value, path) {\n    var ptr0 = passStringToWasm0(path, _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    var ret = _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"deleteValue\"](addHeapObject(js_value), ptr0, len0);\n    return takeObject(ret);\n}\n\n/**\n* @param {any} js_value\n* @param {string} path\n* @param {Function} fun\n* @returns {any}\n*/\nfunction replaceWith(js_value, path, fun) {\n    var ptr0 = passStringToWasm0(path, _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    var ret = _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"replaceWith\"](addHeapObject(js_value), ptr0, len0, addHeapObject(fun));\n    return takeObject(ret);\n}\n\nfunction handleError(f) {\n    return function () {\n        try {\n            return f.apply(this, arguments);\n\n        } catch (e) {\n            _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_exn_store\"](addHeapObject(e));\n        }\n    };\n}\n/**\n*\n* `wasm_bindgen` 제약으로 builder-pattern을 구사 할 수 없다.\n* lifetime 제약으로 Selector를 사용 할 수 없다.\n*/\nclass Selector {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Selector.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_selector_free\"](ptr);\n    }\n    /**\n    */\n    constructor() {\n        var ret = _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"selector_new\"]();\n        return Selector.__wrap(ret);\n    }\n    /**\n    * @param {string} path\n    */\n    path(path) {\n        var ptr0 = passStringToWasm0(path, _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n        var len0 = WASM_VECTOR_LEN;\n        _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"selector_path\"](this.ptr, ptr0, len0);\n    }\n    /**\n    * @param {any} value\n    */\n    value(value) {\n        _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"selector_value\"](this.ptr, addHeapObject(value));\n    }\n    /**\n    * @returns {any}\n    */\n    select() {\n        var ret = _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"selector_select\"](this.ptr);\n        return takeObject(ret);\n    }\n}\n/**\n*\n* `wasm_bindgen` 제약으로 builder-pattern을 구사 할 수 없다.\n*/\nclass SelectorMut {\n\n    static __wrap(ptr) {\n        const obj = Object.create(SelectorMut.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_selectormut_free\"](ptr);\n    }\n    /**\n    */\n    constructor() {\n        var ret = _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"selectormut_new\"]();\n        return SelectorMut.__wrap(ret);\n    }\n    /**\n    * @param {string} path\n    */\n    path(path) {\n        var ptr0 = passStringToWasm0(path, _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n        var len0 = WASM_VECTOR_LEN;\n        _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"selectormut_path\"](this.ptr, ptr0, len0);\n    }\n    /**\n    * @param {any} value\n    */\n    value(value) {\n        _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"selectormut_value\"](this.ptr, addHeapObject(value));\n    }\n    /**\n    */\n    deleteValue() {\n        _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"selectormut_deleteValue\"](this.ptr);\n    }\n    /**\n    * @param {Function} fun\n    */\n    replaceWith(fun) {\n        _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"selectormut_replaceWith\"](this.ptr, addHeapObject(fun));\n    }\n    /**\n    * @returns {any}\n    */\n    take() {\n        var ret = _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"selectormut_take\"](this.ptr);\n        return takeObject(ret);\n    }\n}\n\nconst __wbg_error_c4abc40e0406628b = function(arg0, arg1) {\n    console.error(getStringFromWasm0(arg0, arg1));\n};\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbindgen_object_clone_ref = function(arg0) {\n    var ret = getObject(arg0);\n    return addHeapObject(ret);\n};\n\nconst __wbindgen_string_new = function(arg0, arg1) {\n    var ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nconst __wbindgen_json_parse = function(arg0, arg1) {\n    var ret = JSON.parse(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n};\n\nconst __wbindgen_json_serialize = function(arg0, arg1) {\n    const obj = getObject(arg1);\n    var ret = JSON.stringify(obj === undefined ? null : obj);\n    var ptr0 = passStringToWasm0(ret, _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nconst __wbg_call_bf745b1758bb6693 = handleError(function(arg0, arg1, arg2) {\n    var ret = getObject(arg0).call(getObject(arg1), getObject(arg2));\n    return addHeapObject(ret);\n});\n\nconst __wbindgen_is_string = function(arg0) {\n    var ret = typeof(getObject(arg0)) === 'string';\n    return ret;\n};\n\nconst __wbindgen_string_get = function(arg0, arg1) {\n    const obj = getObject(arg1);\n    var ret = typeof(obj) === 'string' ? obj : undefined;\n    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nconst __wbindgen_debug_string = function(arg0, arg1) {\n    var ret = debugString(getObject(arg1));\n    var ptr0 = passStringToWasm0(ret, _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _jsonpath_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\nconst __wbindgen_rethrow = function(arg0) {\n    throw takeObject(arg0);\n};\n\nconst __wbindgen_closure_wrapper107 = function(arg0, arg1, arg2) {\n    var ret = makeClosure(arg0, arg1, 4, __wbg_adapter_22);\n    return addHeapObject(ret);\n};\n\nconst __wbindgen_closure_wrapper109 = function(arg0, arg1, arg2) {\n    var ret = makeClosure(arg0, arg1, 6, __wbg_adapter_25);\n    return addHeapObject(ret);\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www_bench/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../web_pkg/jsonpath_wasm_bg.js?");

/***/ }),

/***/ "../web_pkg/jsonpath_wasm_bg.wasm":
/*!****************************************!*\
  !*** ../web_pkg/jsonpath_wasm_bg.wasm ***!
  \****************************************/
/*! exports provided: memory, compile, selector, select, deleteValue, replaceWith, __wbg_selector_free, selector_new, selector_path, selector_value, selector_select, __wbg_selectormut_free, selectormut_new, selectormut_path, selectormut_value, selectormut_deleteValue, selectormut_replaceWith, selectormut_take, ffi_select, ffi_path_compile, ffi_select_with_compiled_path, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_export_2, _dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h46468b167eaaeb87, _dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4bcc2acf0fb4a8f0, __wbindgen_exn_store */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./jsonpath_wasm_bg.js */ \"../web_pkg/jsonpath_wasm_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../web_pkg/jsonpath_wasm_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jsonpath_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonpath-wasm */ \"../web_pkg/jsonpath_wasm.js\");\n/* harmony import */ var jsonpath_jsonpath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonpath/jsonpath.js */ \"./node_modules/jsonpath/jsonpath.js\");\n/* harmony import */ var jsonpath_jsonpath_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonpath_jsonpath_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction msg(msg) {\n    console.log(msg);\n    let div = document.createElement(\"div\");\n    div.innerText = msg;\n    document.body.appendChild(div);\n}\n\nfunction run(message, iter, cb) {\n    return new Promise(function(resolve, _reject) {\n        let d = Date.now();\n        for (let i = 0; i < iter; i++) {\n            cb();\n        }\n        msg([message, Date.now() - d].join(\", \"));\n        setTimeout(resolve, 0);\n    });\n}\n\nlet json = {\n    \"store\": {\n        \"book\": [\n            {\n                \"category\": \"reference\",\n                \"author\": \"Nigel Rees\",\n                \"title\": \"Sayings of the Century\",\n                \"price\": 8.95\n            },\n            {\n                \"category\": \"fiction\",\n                \"author\": \"Evelyn Waugh\",\n                \"title\": \"Sword of Honour\",\n                \"price\": 12.99\n            },\n            {\n                \"category\": \"fiction\",\n                \"author\": \"Herman Melville\",\n                \"title\": \"Moby Dick\",\n                \"isbn\": \"0-553-21311-3\",\n                \"price\": 8.99\n            },\n            {\n                \"category\": \"fiction\",\n                \"author\": \"J. R. R. Tolkien\",\n                \"title\": \"The Lord of the Rings\",\n                \"isbn\": \"0-395-19395-8\",\n                \"price\": 22.99\n            }\n        ],\n        \"bicycle\": {\n            \"color\": \"red\",\n            \"price\": 19.95\n        }\n    },\n    \"expensive\": 10\n};\n\nlet path = '$..book[?(@.price<30 && @.category==\"fiction\")]';\nlet template = jsonpath_wasm__WEBPACK_IMPORTED_MODULE_0__[\"compile\"](path);\nlet selector = jsonpath_wasm__WEBPACK_IMPORTED_MODULE_0__[\"selector\"](json);\n\nlet iterCount = 2000;\n\nrun('jsonpath', iterCount, function() { jsonpath_jsonpath_js__WEBPACK_IMPORTED_MODULE_1__[\"query\"](json, path) })\n     .then(function() {\n         return run('jsonpath-wasm- selector', iterCount, function() { selector(path); });\n     })\n    .then(function() {\n        return run('jsonpath-wasm- compile', iterCount, function() { template(json); });\n    })\n    .then(function() {\n        return run('jsonpath-wasm- select', iterCount, function() { jsonpath_wasm__WEBPACK_IMPORTED_MODULE_0__[\"select\"](json, path); });\n    })\n    .finally(function() {});\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);