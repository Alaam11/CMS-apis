(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["studyexam-downlad-studyexam-downlad-module"],{

/***/ "./node_modules/html-to-image/es/applyStyleWithOptions.js":
/*!****************************************************************!*\
  !*** ./node_modules/html-to-image/es/applyStyleWithOptions.js ***!
  \****************************************************************/
/*! exports provided: applyStyleWithOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyStyleWithOptions", function() { return applyStyleWithOptions; });
function applyStyleWithOptions(clonedNode, options) {
    const { style } = clonedNode;
    if (options.backgroundColor) {
        style.backgroundColor = options.backgroundColor;
    }
    if (options.width) {
        style.width = `${options.width}px`;
    }
    if (options.height) {
        style.height = `${options.height}px`;
    }
    const manual = options.style;
    if (manual != null) {
        Object.keys(manual).forEach((key) => {
            style[key] = manual[key];
        });
    }
    return clonedNode;
}
//# sourceMappingURL=applyStyleWithOptions.js.map

/***/ }),

/***/ "./node_modules/html-to-image/es/cloneNode.js":
/*!****************************************************!*\
  !*** ./node_modules/html-to-image/es/cloneNode.js ***!
  \****************************************************/
/*! exports provided: cloneNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneNode", function() { return cloneNode; });
/* harmony import */ var _clonePseudoElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clonePseudoElements */ "./node_modules/html-to-image/es/clonePseudoElements.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/html-to-image/es/util.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function cloneSingleNode(node) {
    return __awaiter(this, void 0, void 0, function* () {
        if (node instanceof HTMLCanvasElement) {
            const dataURL = node.toDataURL();
            if (dataURL === 'data:,') {
                return Promise.resolve(node.cloneNode(false));
            }
            return Object(_util__WEBPACK_IMPORTED_MODULE_1__["createImage"])(dataURL);
        }
        // if (node.tagName && node.tagName.toLowerCase() === 'svg') {
        //   return Promise.resolve(node as SVGElement)
        //     .then((svg) => svgToDataURL(svg))
        //     .then(createImage)
        // }
        return Promise.resolve(node.cloneNode(false));
    });
}
function cloneChildren(nativeNode, clonedNode, filter) {
    return __awaiter(this, void 0, void 0, function* () {
        const children = Object(_util__WEBPACK_IMPORTED_MODULE_1__["toArray"])(nativeNode.childNodes);
        if (children.length === 0) {
            return Promise.resolve(clonedNode);
        }
        return children
            .reduce((done, child) => done
            .then(() => cloneNode(child, filter))
            .then((clonedChild) => {
            if (clonedChild) {
                clonedNode.appendChild(clonedChild);
            }
        }), Promise.resolve())
            .then(() => clonedNode);
    });
}
function decorate(nativeNode, clonedNode) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(clonedNode instanceof Element)) {
            return clonedNode;
        }
        return Promise.resolve()
            .then(() => cloneCssStyle(nativeNode, clonedNode))
            .then(() => Object(_clonePseudoElements__WEBPACK_IMPORTED_MODULE_0__["clonePseudoElements"])(nativeNode, clonedNode))
            .then(() => cloneInputValue(nativeNode, clonedNode))
            .then(() => clonedNode);
    });
}
function cloneCssStyle(nativeNode, clonedNode) {
    const source = window.getComputedStyle(nativeNode);
    const target = clonedNode.style;
    if (source.cssText) {
        target.cssText = source.cssText;
    }
    else {
        Object(_util__WEBPACK_IMPORTED_MODULE_1__["toArray"])(source).forEach((name) => {
            target.setProperty(name, source.getPropertyValue(name), source.getPropertyPriority(name));
        });
    }
}
function cloneInputValue(nativeNode, clonedNode) {
    if (nativeNode instanceof HTMLTextAreaElement) {
        clonedNode.innerHTML = nativeNode.value;
    }
    if (nativeNode instanceof HTMLInputElement) {
        clonedNode.setAttribute('value', nativeNode.value);
    }
}
function cloneNode(nativeNode, filter, isRoot) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!isRoot && filter && !filter(nativeNode)) {
            return Promise.resolve(null);
        }
        return Promise.resolve(nativeNode)
            .then(cloneSingleNode)
            .then((clonedNode) => cloneChildren(nativeNode, clonedNode, filter))
            .then((clonedNode) => decorate(nativeNode, clonedNode));
    });
}
//# sourceMappingURL=cloneNode.js.map

/***/ }),

/***/ "./node_modules/html-to-image/es/clonePseudoElements.js":
/*!**************************************************************!*\
  !*** ./node_modules/html-to-image/es/clonePseudoElements.js ***!
  \**************************************************************/
/*! exports provided: clonePseudoElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clonePseudoElements", function() { return clonePseudoElements; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/html-to-image/es/util.js");

function clonePseudoElements(nativeNode, clonedNode) {
    const pseudos = [':before', ':after'];
    pseudos.forEach((pseudo) => Pseudo.clonePseudoElement(nativeNode, clonedNode, pseudo));
}
var Pseudo;
(function (Pseudo) {
    function clonePseudoElement(nativeNode, clonedNode, pseudo) {
        const style = window.getComputedStyle(nativeNode, pseudo);
        const content = style.getPropertyValue('content');
        if (content === '' || content === 'none') {
            return;
        }
        const className = Object(_util__WEBPACK_IMPORTED_MODULE_0__["uuid"])();
        // fix: Cannot assign to read only property 'className' of object '#<…
        try {
            clonedNode.className = `${clonedNode.className} ${className}`;
        }
        catch (err) {
            return;
        }
        const styleElement = document.createElement('style');
        styleElement.appendChild(getPseudoElementStyle(className, pseudo, style));
        clonedNode.appendChild(styleElement);
    }
    Pseudo.clonePseudoElement = clonePseudoElement;
    function getPseudoElementStyle(className, pseudo, style) {
        const selector = `.${className}:${pseudo}`;
        const cssText = style.cssText
            ? formatCssText(style)
            : formatCssProperties(style);
        return document.createTextNode(`${selector}{${cssText}}`);
    }
    function formatCssText(style) {
        const content = style.getPropertyValue('content');
        return `${style.cssText} content: ${content};`;
    }
    function formatCssProperties(style) {
        return Object(_util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(style)
            .map((name) => {
            const value = style.getPropertyValue(name);
            const priority = style.getPropertyPriority(name);
            return `${name}: ${value}${priority ? ' !important' : ''};`;
        })
            .join(' ');
    }
})(Pseudo || (Pseudo = {}));
//# sourceMappingURL=clonePseudoElements.js.map

/***/ }),

/***/ "./node_modules/html-to-image/es/createSvgDataURL.js":
/*!***********************************************************!*\
  !*** ./node_modules/html-to-image/es/createSvgDataURL.js ***!
  \***********************************************************/
/*! exports provided: createSvgDataURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSvgDataURL", function() { return createSvgDataURL; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/html-to-image/es/util.js");

function createSvgDataURL(clonedNode, width, height) {
    const xmlns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(xmlns, 'svg');
    const foreignObject = document.createElementNS(xmlns, 'foreignObject');
    svg.setAttributeNS('', 'width', `${width}`);
    svg.setAttributeNS('', 'height', `${height}`);
    foreignObject.setAttributeNS('', 'width', '100%');
    foreignObject.setAttributeNS('', 'height', '100%');
    foreignObject.setAttributeNS('', 'x', '0');
    foreignObject.setAttributeNS('', 'y', '0');
    foreignObject.setAttributeNS('', 'externalResourcesRequired', 'true');
    svg.appendChild(foreignObject);
    foreignObject.appendChild(clonedNode);
    return Object(_util__WEBPACK_IMPORTED_MODULE_0__["svgToDataURL"])(svg);
}
//# sourceMappingURL=createSvgDataURL.js.map

/***/ }),

/***/ "./node_modules/html-to-image/es/embedImages.js":
/*!******************************************************!*\
  !*** ./node_modules/html-to-image/es/embedImages.js ***!
  \******************************************************/
/*! exports provided: embedImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "embedImages", function() { return embedImages; });
/* harmony import */ var _getBlobFromURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBlobFromURL */ "./node_modules/html-to-image/es/getBlobFromURL.js");
/* harmony import */ var _embedResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./embedResources */ "./node_modules/html-to-image/es/embedResources.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/html-to-image/es/util.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function embedImages(clonedNode, options) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(clonedNode instanceof Element)) {
            return Promise.resolve(clonedNode);
        }
        return Promise.resolve(clonedNode)
            .then((node) => embedBackground(node, options))
            .then((node) => embedImageNode(node, options))
            .then((node) => embedChildren(node, options));
    });
}
function embedBackground(clonedNode, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const background = clonedNode.style.getPropertyValue('background');
        if (!background) {
            return Promise.resolve(clonedNode);
        }
        return Promise.resolve(background)
            .then((cssString) => Object(_embedResources__WEBPACK_IMPORTED_MODULE_1__["embedResources"])(cssString, null, options))
            .then((cssString) => {
            clonedNode.style.setProperty('background', cssString, clonedNode.style.getPropertyPriority('background'));
            return clonedNode;
        });
    });
}
function embedImageNode(clonedNode, options) {
    if (!(clonedNode instanceof HTMLImageElement) || Object(_util__WEBPACK_IMPORTED_MODULE_2__["isDataUrl"])(clonedNode.src)) {
        return Promise.resolve(clonedNode);
    }
    return Promise.resolve(clonedNode.src)
        .then((url) => Object(_getBlobFromURL__WEBPACK_IMPORTED_MODULE_0__["getBlobFromURL"])(url, options))
        .then((data) => Object(_util__WEBPACK_IMPORTED_MODULE_2__["toDataURL"])(data, Object(_util__WEBPACK_IMPORTED_MODULE_2__["getMimeType"])(clonedNode.src)))
        .then((dataURL) => new Promise((resolve, reject) => {
        clonedNode.onload = resolve;
        clonedNode.onerror = reject;
        clonedNode.src = dataURL;
    }))
        .then(() => clonedNode, () => clonedNode);
}
function embedChildren(clonedNode, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const children = Object(_util__WEBPACK_IMPORTED_MODULE_2__["toArray"])(clonedNode.childNodes);
        const deferreds = children.map((child) => embedImages(child, options));
        return Promise.all(deferreds).then(() => clonedNode);
    });
}
//# sourceMappingURL=embedImages.js.map

/***/ }),

/***/ "./node_modules/html-to-image/es/embedResources.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-to-image/es/embedResources.js ***!
  \*********************************************************/
/*! exports provided: shouldEmbed, embedResources, parseURLs, embed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldEmbed", function() { return shouldEmbed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "embedResources", function() { return embedResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseURLs", function() { return parseURLs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "embed", function() { return embed; });
/* harmony import */ var _getBlobFromURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBlobFromURL */ "./node_modules/html-to-image/es/getBlobFromURL.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/html-to-image/es/util.js");


const URL_REGEX = /url\((['"]?)([^'"]+?)\1\)/g;
function shouldEmbed(string) {
    return string.search(URL_REGEX) !== -1;
}
function embedResources(cssString, baseUrl, options) {
    if (!shouldEmbed(cssString)) {
        return Promise.resolve(cssString);
    }
    return Promise.resolve(cssString)
        .then(parseURLs)
        .then((urls) => urls.reduce((done, url) => done.then((ret) => embed(ret, url, baseUrl, options)), Promise.resolve(cssString)));
}
function parseURLs(str) {
    const result = [];
    str.replace(URL_REGEX, (raw, quotation, url) => {
        result.push(url);
        return raw;
    });
    return result.filter((url) => !Object(_util__WEBPACK_IMPORTED_MODULE_1__["isDataUrl"])(url));
}
function embed(cssString, resourceURL, baseURL, options, get) {
    const resolvedURL = baseURL ? resolveUrl(resourceURL, baseURL) : resourceURL;
    return Promise.resolve(resolvedURL)
        .then((url) => (get ? get(url) : Object(_getBlobFromURL__WEBPACK_IMPORTED_MODULE_0__["getBlobFromURL"])(url, options)))
        .then((data) => Object(_util__WEBPACK_IMPORTED_MODULE_1__["toDataURL"])(data, Object(_util__WEBPACK_IMPORTED_MODULE_1__["getMimeType"])(resourceURL)))
        .then((dataURL) => cssString.replace(urlToRegex(resourceURL), `$1${dataURL}$3`))
        .then((content) => content, () => resolvedURL);
}
function resolveUrl(url, baseUrl) {
    // url is absolute already
    if (url.match(/^[a-z]+:\/\//i)) {
        return url;
    }
    // url is absolute already, without protocol
    if (url.match(/^\/\//)) {
        return window.location.protocol + url;
    }
    // dataURI, mailto:, tel:, etc.
    if (url.match(/^[a-z]+:/i)) {
        return url;
    }
    const doc = document.implementation.createHTMLDocument();
    const base = doc.createElement('base');
    const a = doc.createElement('a');
    doc.head.appendChild(base);
    doc.body.appendChild(a);
    if (baseUrl) {
        base.href = baseUrl;
    }
    a.href = url;
    return a.href;
}
function urlToRegex(url) {
    return new RegExp(`(url\\(['"]?)(${escape(url)})(['"]?\\))`, 'g');
}
function escape(url) {
    return url.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
}
//# sourceMappingURL=embedResources.js.map

/***/ }),

/***/ "./node_modules/html-to-image/es/embedWebFonts.js":
/*!********************************************************!*\
  !*** ./node_modules/html-to-image/es/embedWebFonts.js ***!
  \********************************************************/
/*! exports provided: parseWebFontRules, embedWebFonts, getCssRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseWebFontRules", function() { return parseWebFontRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "embedWebFonts", function() { return embedWebFonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCssRules", function() { return getCssRules; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/html-to-image/es/util.js");
/* harmony import */ var _embedResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./embedResources */ "./node_modules/html-to-image/es/embedResources.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function parseWebFontRules(clonedNode) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            if (!clonedNode.ownerDocument) {
                reject(new Error('Provided element is not within a Document'));
            }
            resolve(Object(_util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(clonedNode.ownerDocument.styleSheets));
        })
            .then(getCssRules)
            .then(getWebFontRules);
    });
}
function embedWebFonts(clonedNode, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return parseWebFontRules(clonedNode)
            .then((rules) => Promise.all(rules.map((rule) => {
            const baseUrl = rule.parentStyleSheet
                ? rule.parentStyleSheet.href
                : null;
            return Object(_embedResources__WEBPACK_IMPORTED_MODULE_1__["embedResources"])(rule.cssText, baseUrl, options);
        })))
            .then((cssStrings) => cssStrings.join('\n'))
            .then((cssString) => {
            const styleNode = document.createElement('style');
            const sytleContent = document.createTextNode(cssString);
            styleNode.appendChild(sytleContent);
            if (clonedNode.firstChild) {
                clonedNode.insertBefore(styleNode, clonedNode.firstChild);
            }
            else {
                clonedNode.appendChild(styleNode);
            }
            return clonedNode;
        });
    });
}
function getCssRules(styleSheets) {
    return __awaiter(this, void 0, void 0, function* () {
        const ret = [];
        const promises = [];
        // First loop inlines imports
        styleSheets.forEach((sheet) => {
            if ('cssRules' in sheet) {
                try {
                    Object(_util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(sheet.cssRules).forEach((item) => {
                        if (item.type === CSSRule.IMPORT_RULE) {
                            promises.push(fetchCSS(item.href, sheet)
                                .then(embedFonts)
                                .then((cssText) => {
                                const parsed = parseCSS(cssText);
                                parsed.forEach((rule) => {
                                    sheet.insertRule(rule, sheet.cssRules.length);
                                });
                            })
                                .catch((e) => {
                                console.log('Error loading remote css', e.toString());
                            }));
                        }
                    });
                }
                catch (e) {
                    const inline = styleSheets.find((a) => a.href === null) || document.styleSheets[0];
                    if (sheet.href != null) {
                        promises.push(fetchCSS(sheet.href, inline)
                            .then(embedFonts)
                            .then((cssText) => {
                            const parsed = parseCSS(cssText);
                            parsed.forEach((rule) => {
                                inline.insertRule(rule, sheet.cssRules.length);
                            });
                        })
                            .catch((e) => {
                            console.log('Error loading remote stylesheet', e.toString());
                        }));
                    }
                    console.log('Error inlining remote css file', e.toString());
                }
            }
        });
        return Promise.all(promises).then(() => {
            // Second loop parses rules
            styleSheets.forEach((sheet) => {
                if ('cssRules' in sheet) {
                    try {
                        Object(_util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(sheet.cssRules).forEach((item) => {
                            ret.push(item);
                        });
                    }
                    catch (e) {
                        console.log(`Error while reading CSS rules from ${sheet.href}`, e.toString());
                    }
                }
            });
            return ret;
        });
    });
}
function getWebFontRules(cssRules) {
    return cssRules
        .filter((rule) => rule.type === CSSRule.FONT_FACE_RULE)
        .filter((rule) => Object(_embedResources__WEBPACK_IMPORTED_MODULE_1__["shouldEmbed"])(rule.style.getPropertyValue('src')));
}
function parseCSS(source) {
    if (source === undefined) {
        return [];
    }
    let cssText = source;
    const css = [];
    const cssKeyframeRegex = '((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})';
    const combinedCSSRegex = '((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]' +
        '*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})'; // to match css & media queries together
    const cssCommentsRegex = new RegExp('(\\/\\*[\\s\\S]*?\\*\\/)', 'gi');
    // strip out comments
    cssText = cssText.replace(cssCommentsRegex, '');
    const keyframesRegex = new RegExp(cssKeyframeRegex, 'gi');
    let arr;
    while (true) {
        arr = keyframesRegex.exec(cssText);
        if (arr === null) {
            break;
        }
        css.push(arr[0]);
    }
    cssText = cssText.replace(keyframesRegex, '');
    // unified regex
    const unified = new RegExp(combinedCSSRegex, 'gi');
    while (true) {
        arr = unified.exec(cssText);
        if (arr === null) {
            break;
        }
        css.push(arr[0]);
    }
    return css;
}
function fetchCSS(url, sheet) {
    return fetch(url).then((res) => {
        return {
            url,
            cssText: res.text(),
        };
    }, (e) => {
        console.log('ERROR FETCHING CSS: ', e.toString());
    });
}
function embedFonts(data) {
    return __awaiter(this, void 0, void 0, function* () {
        return data.cssText.then((resolved) => {
            let cssText = resolved;
            const regexUrlFind = /url\(["']?([^"')]+)["']?\)/g;
            const fontLocations = cssText.match(/url\([^)]+\)/g) || [];
            const fontLoadedPromises = fontLocations.map((location) => {
                let url = location.replace(regexUrlFind, '$1');
                if (!url.startsWith('https://')) {
                    const source = data.url;
                    url = new URL(url, source).href;
                }
                return new Promise((resolve, reject) => {
                    fetch(url)
                        .then((res) => res.blob())
                        .then((blob) => {
                        const reader = new FileReader();
                        reader.addEventListener('load', (res) => {
                            // Side Effect
                            cssText = cssText.replace(location, `url(${reader.result})`);
                            resolve([location, reader.result]);
                        });
                        reader.readAsDataURL(blob);
                    })
                        .catch(reject);
                });
            });
            return Promise.all(fontLoadedPromises).then(() => cssText);
        });
    });
}
//# sourceMappingURL=embedWebFonts.js.map

/***/ }),

/***/ "./node_modules/html-to-image/es/getBlobFromURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-to-image/es/getBlobFromURL.js ***!
  \*********************************************************/
/*! exports provided: getBlobFromURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlobFromURL", function() { return getBlobFromURL; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/html-to-image/es/util.js");
/* tslint:disable:max-line-length */

// KNOWN ISSUE
// -----------
// Can not handle redirect-url, such as when access 'http://something.com/avatar.png'
// will redirect to 'http://something.com/65fc2ffcc8aea7ba65a1d1feda173540'
const TIMEOUT = 30000;
const cache = [];
function getBlobFromURL(url, options) {
    const root = url.split('?')[0];
    const found = cache.find((item) => item.url === root);
    if (found) {
        return found.promise;
    }
    // cache bypass so we dont have CORS issues with cached images
    // ref: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
    if (options.cacheBust) {
        // tslint:disable-next-line
        url += (/\?/.test(url) ? '&' : '?') + new Date().getTime();
    }
    const failed = (reason) => {
        let placeholder = '';
        if (options.imagePlaceholder) {
            const parts = options.imagePlaceholder.split(/,/);
            if (parts && parts[1]) {
                placeholder = parts[1];
            }
        }
        let msg = `Failed to fetch resource: ${url}`;
        if (reason) {
            msg = typeof reason === 'string' ? reason : reason.message;
        }
        if (msg) {
            console.error(msg);
        }
        return placeholder;
    };
    const deferred = window.fetch
        ? window
            .fetch(url)
            .then((response) => response.blob())
            .then((blob) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        }))
            .then(_util__WEBPACK_IMPORTED_MODULE_0__["getDataURLContent"])
            .catch(() => new Promise((resolve, reject) => reject()))
        : new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            const timeout = () => {
                reject(new Error(`Timeout of ${TIMEOUT}ms occured while fetching resource: ${url}`));
            };
            const done = () => {
                if (req.readyState !== 4) {
                    return;
                }
                if (req.status !== 200) {
                    reject(new Error(`Failed to fetch resource: ${url}, status: ${req.status}`));
                    return;
                }
                const encoder = new FileReader();
                encoder.onloadend = () => {
                    resolve(Object(_util__WEBPACK_IMPORTED_MODULE_0__["getDataURLContent"])(encoder.result));
                };
                encoder.readAsDataURL(req.response);
            };
            req.onreadystatechange = done;
            req.ontimeout = timeout;
            req.responseType = 'blob';
            req.timeout = TIMEOUT;
            req.open('GET', url, true);
            req.send();
        });
    const promise = deferred.catch(failed);
    cache.push({ promise, url: root });
    return promise;
}
//# sourceMappingURL=getBlobFromURL.js.map

/***/ }),

/***/ "./node_modules/html-to-image/es/index.js":
/*!************************************************!*\
  !*** ./node_modules/html-to-image/es/index.js ***!
  \************************************************/
/*! exports provided: toSvg, toSvgDataURL, toCanvas, toPixelData, toPng, toJpeg, toBlob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSvg", function() { return toSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSvgDataURL", function() { return toSvgDataURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCanvas", function() { return toCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPixelData", function() { return toPixelData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPng", function() { return toPng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJpeg", function() { return toJpeg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBlob", function() { return toBlob; });
/* harmony import */ var _cloneNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cloneNode */ "./node_modules/html-to-image/es/cloneNode.js");
/* harmony import */ var _embedImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./embedImages */ "./node_modules/html-to-image/es/embedImages.js");
/* harmony import */ var _embedWebFonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./embedWebFonts */ "./node_modules/html-to-image/es/embedWebFonts.js");
/* harmony import */ var _createSvgDataURL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createSvgDataURL */ "./node_modules/html-to-image/es/createSvgDataURL.js");
/* harmony import */ var _applyStyleWithOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./applyStyleWithOptions */ "./node_modules/html-to-image/es/applyStyleWithOptions.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./node_modules/html-to-image/es/util.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






function getImageSize(domNode, options = {}) {
    const width = options.width || Object(_util__WEBPACK_IMPORTED_MODULE_5__["getNodeWidth"])(domNode);
    const height = options.height || Object(_util__WEBPACK_IMPORTED_MODULE_5__["getNodeHeight"])(domNode);
    return { width, height };
}
function toSvg(domNode, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const { width, height } = getImageSize(domNode, options);
        return Object(_cloneNode__WEBPACK_IMPORTED_MODULE_0__["cloneNode"])(domNode, options.filter, true)
            .then((clonedNode) => Object(_embedWebFonts__WEBPACK_IMPORTED_MODULE_2__["embedWebFonts"])(clonedNode, options))
            .then((clonedNode) => Object(_embedImages__WEBPACK_IMPORTED_MODULE_1__["embedImages"])(clonedNode, options))
            .then((clonedNode) => Object(_applyStyleWithOptions__WEBPACK_IMPORTED_MODULE_4__["applyStyleWithOptions"])(clonedNode, options))
            .then((clonedNode) => Object(_createSvgDataURL__WEBPACK_IMPORTED_MODULE_3__["createSvgDataURL"])(clonedNode, width, height));
    });
}
const toSvgDataURL = toSvg;
function toCanvas(domNode, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        return toSvg(domNode, options)
            .then(_util__WEBPACK_IMPORTED_MODULE_5__["createImage"])
            .then(Object(_util__WEBPACK_IMPORTED_MODULE_5__["delay"])(100))
            .then((image) => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            const ratio = options.pixelRatio || Object(_util__WEBPACK_IMPORTED_MODULE_5__["getPixelRatio"])();
            const { width, height } = getImageSize(domNode, options);
            canvas.width = width * ratio;
            canvas.height = height * ratio;
            canvas.style.width = `${width}`;
            canvas.style.height = `${height}`;
            if (options.backgroundColor) {
                context.fillStyle = options.backgroundColor;
                context.fillRect(0, 0, canvas.width, canvas.height);
            }
            context.drawImage(image, 0, 0);
            return canvas;
        });
    });
}
function toPixelData(domNode, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const { width, height } = getImageSize(domNode, options);
        return toCanvas(domNode, options).then((canvas) => {
            const ctx = canvas.getContext('2d');
            return ctx.getImageData(0, 0, width, height).data;
        });
    });
}
function toPng(domNode, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        return toCanvas(domNode, options).then((canvas) => canvas.toDataURL());
    });
}
function toJpeg(domNode, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        return toCanvas(domNode, options).then((canvas) => canvas.toDataURL('image/jpeg', options.quality || 1));
    });
}
function toBlob(domNode, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        return toCanvas(domNode, options).then(_util__WEBPACK_IMPORTED_MODULE_5__["canvasToBlob"]);
    });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/html-to-image/es/util.js":
/*!***********************************************!*\
  !*** ./node_modules/html-to-image/es/util.js ***!
  \***********************************************/
/*! exports provided: uuid, getExtension, getMimeType, delay, isDataUrl, toDataURL, getDataURLContent, canvasToBlob, toArray, getNodeWidth, getNodeHeight, getPixelRatio, createImage, svgToDataURL, getBlobFromImageURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return uuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtension", function() { return getExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMimeType", function() { return getMimeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDataUrl", function() { return isDataUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDataURL", function() { return toDataURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataURLContent", function() { return getDataURLContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasToBlob", function() { return canvasToBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodeWidth", function() { return getNodeWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodeHeight", function() { return getNodeHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPixelRatio", function() { return getPixelRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImage", function() { return createImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgToDataURL", function() { return svgToDataURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlobFromImageURL", function() { return getBlobFromImageURL; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const WOFF = 'application/font-woff';
const JPEG = 'image/jpeg';
const mimes = {
    woff: WOFF,
    woff2: WOFF,
    ttf: 'application/font-truetype',
    eot: 'application/vnd.ms-fontobject',
    png: 'image/png',
    jpg: JPEG,
    jpeg: JPEG,
    gif: 'image/gif',
    tiff: 'image/tiff',
    svg: 'image/svg+xml',
};
const uuid = (function uuid() {
    // generate uuid for className of pseudo elements.
    // We should not use GUIDs, otherwise pseudo elements sometimes cannot be captured.
    let counter = 0;
    // ref: http://stackoverflow.com/a/6248722/2519373
    const random = () => `0000${((Math.random() * Math.pow(36, 4)) << 0).toString(36)}`.slice(-4);
    return () => {
        counter += 1;
        return `u${random()}${counter}`;
    };
})();
function getExtension(url) {
    const match = /\.([^./]*?)$/g.exec(url);
    return match ? match[1] : '';
}
function getMimeType(url) {
    const ext = getExtension(url).toLowerCase();
    return mimes[ext] || '';
}
function delay(ms) {
    return (args) => new Promise((resolve) => {
        setTimeout(() => {
            resolve(args);
        }, ms);
    });
}
function isDataUrl(url) {
    return url.search(/^(data:)/) !== -1;
}
function toDataURL(content, mimeType) {
    return `data:${mimeType};base64,${content}`;
}
function getDataURLContent(dataURL) {
    return dataURL.split(/,/)[1];
}
function toBlob(canvas) {
    return new Promise((resolve) => {
        const binaryString = window.atob(canvas.toDataURL().split(',')[1]);
        const len = binaryString.length;
        const binaryArray = new Uint8Array(len);
        for (let i = 0; i < len; i += 1) {
            binaryArray[i] = binaryString.charCodeAt(i);
        }
        resolve(new Blob([binaryArray], { type: 'image/png' }));
    });
}
function canvasToBlob(canvas) {
    if (canvas.toBlob) {
        return new Promise((resolve) => canvas.toBlob(resolve));
    }
    return toBlob(canvas);
}
function toArray(arrayLike) {
    const result = [];
    for (let i = 0, l = arrayLike.length; i < l; i += 1) {
        result.push(arrayLike[i]);
    }
    return result;
}
function px(node, styleProperty) {
    const val = window.getComputedStyle(node).getPropertyValue(styleProperty);
    return parseFloat(val.replace('px', ''));
}
function getNodeWidth(node) {
    const leftBorder = px(node, 'border-left-width');
    const rightBorder = px(node, 'border-right-width');
    return node.scrollWidth + leftBorder + rightBorder;
}
function getNodeHeight(node) {
    const topBorder = px(node, 'border-top-width');
    const bottomBorder = px(node, 'border-bottom-width');
    return node.scrollHeight + topBorder + bottomBorder;
}
function getPixelRatio() {
    let ratio;
    const val = process && process.env ? process.env.devicePixelRatio : null;
    if (val) {
        ratio = parseInt(val, 10);
        if (isNaN(ratio)) {
            ratio = 1;
        }
    }
    return ratio || window.devicePixelRatio || 1;
}
function createImage(url) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = reject;
        image.crossOrigin = 'anonymous';
        image.src = url;
    });
}
function svgToDataURL(svg) {
    return __awaiter(this, void 0, void 0, function* () {
        return Promise.resolve()
            .then(() => new XMLSerializer().serializeToString(svg))
            .then(encodeURIComponent)
            .then((html) => `data:image/svg+xml;charset=utf-8,${html}`);
    });
}
function getBlobFromImageURL(url) {
    return __awaiter(this, void 0, void 0, function* () {
        return createImage(url).then((image) => {
            const { width, height } = image;
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            const ratio = getPixelRatio();
            canvas.width = width * ratio;
            canvas.height = height * ratio;
            canvas.style.width = `${width}`;
            canvas.style.height = `${height}`;
            context.scale(ratio, ratio);
            context.drawImage(image, 0, 0);
            const dataURL = canvas.toDataURL(getMimeType(url));
            return getDataURLContent(dataURL);
        });
    });
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/studyexam-downlad/studyexam-downlad.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/studyexam-downlad/studyexam-downlad.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid download-studyexam\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 \">\r\n      <div class=\"print-btn\">\r\n        <button class=\"btn allam-btn btn-success\" onclick=\"window.print()\" title=\"Print\" type=\"button\"><i class=\"icofont icofont-print\"></i> Print</button>\r\n      </div>\r\n      <div class=\"publish-table-wrap table-responsive\" id=\"\" *ngIf=\"mode==1 && parentmodule=='teacher'\"> \r\n        <table #container class=\"table table-striped table-bordered \" id=\"contentToConvert\" >\r\n        <thead>\r\n          <tr>\r\n            <th>Level</th>\r\n            <th>Answer</th>\r\n            <th><span class=\"option-width\">Option D </span></th>\r\n            <th><span class=\"option-width\">Option C </span></th>\r\n            <th><span class=\"option-width\">Option B </span></th>\r\n            <th><span class=\"option-width\">Option A </span></th>\r\n            <th>Question Type</th>\r\n            <th>Question </th>\r\n            <th>Duration </th>\r\n            <!-- <th>Group </th>     -->        \r\n          </tr>\r\n         </thead>\r\n          <tbody>\r\n            <tr class=\"even ng-star-inserted\" *ngFor=\"let question of questionArr\">\r\n                <td>{{ question.level }}</td>\r\n                <td>{{ question.answer }}</td>\r\n                <td [innerHTML]=\"question.option4 | safeHtml\"></td>\r\n                <td [innerHTML]=\"question.option3 | safeHtml\"></td>\r\n                <td [innerHTML]=\"question.option2 | safeHtml\"></td>\r\n                <td [innerHTML]=\"question.option1 | safeHtml\"></td>\r\n                <td>{{ question.qui_type }}</td>\r\n                <td>\r\n                  <div *ngIf=\"question.qui_type=='text'\" [innerHTML]=\"question.question | safeHtml\"></div>\r\n                \r\n                  <div *ngIf=\"question.qui_type=='image'\">\r\n                    <img src=\"{{s3_url+question.question_image_url}}\">\r\n                 </div>\r\n                 <div *ngIf=\"question.qui_type=='text_and_image'\">\r\n                  <img src=\"{{s3_url+question.question_image_url}}\">\r\n                  <br>{{question.question}}\r\n                 </div>\r\n                 </td>\r\n\r\n                <td class=\"\">{{ question.duration }}</td>\r\n               <!--  <td class=\"\">{{ question.groups }}</td> -->\r\n                \r\n            </tr>\r\n          </tbody>\r\n\r\n          </table>  \r\n      </div>\r\n\r\n      <div class=\"publish-table-wrap table-responsive\"  *ngIf=\"mode==2 && parentmodule=='teacher'\">\r\n        <table id=\"autofill\" class=\"table table-striped table-bordered table-sm dataTable no-footer\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n          <thead>\r\n            <tr>\r\n              <th>Level</th>\r\n              <th>Answer</th>\r\n              <th><span class=\"option-width\">Option D </span></th>\r\n              <th><span class=\"option-width\">Option C </span></th>\r\n              <th><span class=\"option-width\">Option B </span></th>\r\n              <th><span class=\"option-width\">Option A </span></th>\r\n              <th>Question Type</th>\r\n              <th>Question </th>\r\n              <!-- <th>Quant/Verbal </th>\r\n              <th>Group </th> -->\r\n              <th>Quiz type</th>\r\n              <!-- <th>Quiz sub type</th> -->\r\n              <th>Duration</th>\r\n             <!--  <th>Image URL</th> -->\r\n              \r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of questionArr\">\r\n              <td class=\"\">{{ item.level }}</td>\r\n              <td class=\"\">{{ item.answer }}</td>\r\n              <td class=\"\">{{ item.option4 }}</td>\r\n              <td class=\"\">{{ item.option3 }} </td>\r\n              <td class=\"\">{{ item.option2 }} </td>\r\n              <td class=\"\">{{ item.option1 }} </td>\r\n              <td class=\"\">{{ item.question_type }} </td>\r\n              <td *ngIf=\"item.question_type=='text_and_image'\">\r\n              <img width=\"300\" height=\"200\" src=\"{{ local_api_url}}{{item.question_image}}\"/>\r\n              <br>\r\n               {{ item.question }}\r\n              </td>\r\n              <td *ngIf=\"item.question_type=='image'\">\r\n              <img width=\"300\" height=\"200\" src=\"{{ local_api_url}}{{item.question_image}}\"/>\r\n              </td>\r\n              <td *ngIf=\"item.question_type=='text' || item.question_type==null\">\r\n               {{ item.question }}\r\n              </td>\r\n             <!--  <td class=\"\">{{ item.quant_verbal }}</td>\r\n              <td class=\"\">{{ item.group }}</td> -->\r\n              <td class=\"\">{{ item.quiz_type_name }}</td>\r\n              <!-- <td class=\"\">{{ item.quiz_sub_type_name }}</td> -->\r\n              <td class=\"\">{{ item.duration }}</td>\r\n              <!-- <td> <span class=\"img-url-break\"> {{ item.question_image_url }}</span></td> -->\r\n              \r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"publish-table-wrap m-b-0 table-responsive\" *ngIf=\"mode==3 && parentmodule=='teacher'\"> \r\n        <table class=\"table table-striped table-bordered \" id=\"\" >\r\n        <thead>\r\n          <tr>\r\n            <th>Answer</th>\r\n            <th><span class=\"option-width\">Option D </span></th>\r\n            <th><span class=\"option-width\">Option C </span></th>\r\n            <th><span class=\"option-width\">option B </span></th>\r\n            <th><span class=\"option-width\">option A</span> </th>\r\n            <th>Question Type</th>\r\n            <th>Question </th>\r\n            <th>Quant/Verbal </th>\r\n            <th>Group </th>\r\n          </tr>\r\n         </thead>\r\n          <tbody>\r\n            <tr class=\"even ng-star-inserted\" *ngFor=\"let question of questionArr\">\r\n                <td class=\"\">{{ question.answer }}</td>\r\n                <td [innerHTML]=\"question.option4 | safeHtml\"></td>\r\n                <td [innerHTML]=\"question.option3 | safeHtml\"></td>\r\n                <td [innerHTML]=\"question.option2 | safeHtml\"></td>\r\n                <td [innerHTML]=\"question.option1 | safeHtml\"></td>\r\n                <td class=\"\">{{ question.qui_type }}</td>\r\n                <td class=\"\">\r\n                  <div *ngIf=\"question.qui_type=='text'\" [innerHTML]=\"question.question | safeHtml\"></div>\r\n               \r\n                  <div *ngIf=\"question.qui_type=='image'\">\r\n                    <img src=\"{{s3_url+question.question_image_url}}\">\r\n                  </div>\r\n                  <div *ngIf=\"question.qui_type=='text_and_image'\">\r\n                   <img src=\"{{s3_url+question.question_image_url}}\">\r\n                   <br>{{question.question}}\r\n                  </div>\r\n                </td>\r\n                <td class=\"\">{{ question.quant_verbal }}</td>\r\n                <td class=\"\">{{ question.groups }}</td>\r\n            </tr>\r\n          </tbody>\r\n\r\n          </table>\r\n      </div>\r\n      <div class=\"publish-table-wrap table-responsive\" *ngIf=\"mode==4 && parentmodule=='teacher'\">\r\n        <table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n          <thead>\r\n            <tr>\r\n              <th>Level</th>\r\n              <th>Answer</th>\r\n              <th><span class=\"option-width\">Option D </span></th>\r\n              <th><span class=\"option-width\">Option C </span></th>\r\n              <th><span class=\"option-width\">Option B </span></th>\r\n              <th><span class=\"option-width\">Option A </span></th>\r\n              <th>Question Type</th>\r\n              <th>Question </th>\r\n              <th>Quant/Verbal </th>\r\n              <th>Group </th>\r\n              <th>Quiz type</th>\r\n              <th>Quiz sub type</th>\r\n              <th>Duation</th>\r\n             <!--  <th>Image URL</th> -->\r\n              \r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of questionArr\">  \r\n              <td class=\"\">{{ item.level }}</td>\r\n              <td class=\"\">{{ item.answer }}</td>\r\n              <td class=\"\">{{ item.option4 }}</td>\r\n              <td class=\"\">{{ item.option3 }}</td>\r\n              <td class=\"\">{{ item.option2 }}</td>\r\n              <td class=\"\">{{ item.option1 }}</td>\r\n              <td class=\"\">{{ item.question_type }} </td>\r\n              <td *ngIf=\"item.question_type=='text_and_image'\">\r\n              <img width=\"300\" height=\"200\" src=\"{{ local_api_url}}{{item.question_image}}\"/>\r\n              <br>\r\n               {{ item.question }}\r\n              </td>\r\n              <td *ngIf=\"item.question_type=='image'\">\r\n              <img width=\"300\" height=\"200\" src=\"{{ local_api_url}}{{item.question_image}}\"/>\r\n              </td>\r\n              <td *ngIf=\"item.question_type=='text' || item.question_type==null\">\r\n               {{ item.question }}\r\n              </td>\r\n              <td class=\"\">{{ item.quant_verbal }}</td>\r\n              <td class=\"\">{{ item.groups }}</td>\r\n              <td class=\"\">{{ item.quiz_type_name }}</td>\r\n              <td class=\"\">{{ item.quiz_sub_type_name }}</td>\r\n              <td class=\"\">{{ item.duration }}</td>\r\n          <!--    <td class=\"\"> <span class=\"img-url-break\">{{ item.question_image_url }} </span> </td> -->\r\n               \r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"publish-table-wrap table-responsive\" *ngIf=\"mode==1 && parentmodule=='tsupervisor'\">\r\n          <table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n            <thead>\r\n              <tr role=\"row\">\r\n              <th>Level</th>\r\n              <th>Answer</th>\r\n              <th><span class=\"option-width\">Option D </span></th>\r\n              <th><span class=\"option-width\">Option C </span></th>\r\n              <th><span class=\"option-width\">Option B </span></th>\r\n              <th><span class=\"option-width\">Option A </span></th>\r\n              <th>Question Type</th>\r\n              <th>Question </th>\r\n             <!--  <th>Quant/Verbal </th> -->\r\n              <th>Lesson</th> \r\n              <th>Subject</th> \r\n              <th>Semester</th>\r\n              <th>Class</th> \r\n              <th>Sub Type</th>\r\n              <th>Quiz Type</th>  \r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr role=\"row\" *ngFor=\"let question of questionArr\">\r\n                    <td>{{ question.level_name }}</td>\r\n                    <td>{{ question.answer }}</td>\r\n                    <td>\r\n                        <img *ngIf=\"question.option_type=='image' else opt4Else\" src=\"{{ s3_url}}{{question.option4}}\"/>\r\n                        <ng-template #opt4Else>\r\n                           {{ question.option4 }}\r\n                       </ng-template>\r\n                    </td>\r\n                    <td>\r\n                        <img *ngIf=\"question.option_type=='image' else opt3Else\" src=\"{{ s3_url}}{{question.option3}}\"/>\r\n                        <ng-template #opt3Else>\r\n                           {{ question.option3 }}\r\n                       </ng-template>\r\n                    </td>\r\n                    <td>\r\n                        <img *ngIf=\"question.option_type=='image' else opt2Else\" src=\"{{ s3_url}}{{question.option2}}\"/>\r\n                        <ng-template #opt2Else>\r\n                           {{ question.option2 }}\r\n                       </ng-template>\r\n                    </td>\r\n                     <td>\r\n                        <img *ngIf=\"question.option_type=='image' else opt1Else\" src=\"{{ s3_url}}{{question.option1}}\"/>\r\n                        <ng-template #opt1Else>\r\n                           {{ question.option1 }}\r\n                       </ng-template>\r\n                    </td>\r\n                    <td class=\"\">{{ question.question_type }} </td>\r\n                    <td *ngIf=\"question.question_type=='text_and_image'\">\r\n                    <img width=\"300\" height=\"200\" src=\"{{ s3_url}}{{question.question_image_url}}\"/>\r\n                    <br>\r\n                     {{ question.question }}\r\n                    </td>\r\n                    <td *ngIf=\"question.question_type=='image'\">\r\n                    <img width=\"300\" height=\"200\" src=\"{{ s3_url}}{{question.question_image_url}}\"/>\r\n                    </td>\r\n                    <td *ngIf=\"question.question_type=='text' || question.question_type==null\">\r\n                     {{ question.question }}\r\n                    </td>\r\n                   <!--  <td>{{ question.quant_verbal }}</td> -->\r\n                    <td>{{ question.lesson_name | titlecase}}</td>\r\n                    <td>{{ question.subject_name | titlecase}}</td>\r\n                    <td>{{ question.semester_name | titlecase}}</td>\r\n                    <td>{{ question.class_name | titlecase}}</td>\r\n                    <td>{{ question.sub_quiz_name | titlecase}}</td>\r\n                    <td>{{ question.quiz_type_name | titlecase}}</td>\r\n\r\n                  </tr>\r\n              </tbody>\r\n            </table>\r\n        </div>\r\n\r\n   </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/pages/auth/studyexam-downlad/studyexam-downlad-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/auth/studyexam-downlad/studyexam-downlad-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: StudyExamDownloadRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyExamDownloadRoutingModule", function() { return StudyExamDownloadRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _studyexam_downlad_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./studyexam-downlad.component */ "./src/app/pages/auth/studyexam-downlad/studyexam-downlad.component.ts");




var routes = [
    {
        path: '',
        component: _studyexam_downlad_component__WEBPACK_IMPORTED_MODULE_3__["StudyExamDownloadComponent"],
        data: {
            title: 'Study Exam Download Component'
        }
    }
];
var StudyExamDownloadRoutingModule = /** @class */ (function () {
    function StudyExamDownloadRoutingModule() {
    }
    StudyExamDownloadRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StudyExamDownloadRoutingModule);
    return StudyExamDownloadRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/studyexam-downlad/studyexam-downlad.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/auth/studyexam-downlad/studyexam-downlad.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sv_main.sv_frame .sv_container {\n  max-width: 100% !important;\n  padding: 0 !important;\n}\n\n#survey-viewer-container {\n  margin-top: 15px;\n}\n\n#survey-viewer-container .sv_main.sv_default_css .sv_body {\n  border-top: 0px !important;\n}\n\nh2 {\n  padding: 15px 15px;\n  margin-bottom: 0px;\n  color: #4d4d4d;\n  font-size: 28px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9zdHVkeWV4YW0tZG93bmxhZC9EOlxcbWVhblxcYWxsYW0tY21zL3NyY1xcYXBwXFxwYWdlc1xcYXV0aFxcc3R1ZHlleGFtLWRvd25sYWRcXHN0dWR5ZXhhbS1kb3dubGFkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hdXRoL3N0dWR5ZXhhbS1kb3dubGFkL3N0dWR5ZXhhbS1kb3dubGFkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWlDLDBCQUFBO0VBQTJCLHFCQUFBO0FDRzVEOztBREZBO0VBQTJCLGdCQUFBO0FDTTNCOztBRExBO0VBQTRELDBCQUFBO0FDUzVEOztBRE5BO0VBQ0ksa0JBQUE7RUFBb0Isa0JBQUE7RUFDcEIsY0FBQTtFQUNBLDBCQUFBO0FDVUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL3N0dWR5ZXhhbS1kb3dubGFkL3N0dWR5ZXhhbS1kb3dubGFkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN2X21haW4uc3ZfZnJhbWUgLnN2X2NvbnRhaW5lciB7bWF4LXdpZHRoOiAxMDAlIWltcG9ydGFudDsgcGFkZGluZzogMCFpbXBvcnRhbnQ7fVxyXG4jc3VydmV5LXZpZXdlci1jb250YWluZXIgeyBtYXJnaW4tdG9wOjE1cHg7fVxyXG4jc3VydmV5LXZpZXdlci1jb250YWluZXIgLnN2X21haW4uc3ZfZGVmYXVsdF9jc3MgLnN2X2JvZHkgeyBib3JkZXItdG9wOiAwcHghaW1wb3J0YW50OyB9XHJcblxyXG5cclxuaDIge1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4OyBtYXJnaW4tYm90dG9tOiAwcHg7ICBcclxuICAgIGNvbG9yOiAjNGQ0ZDRkO1xyXG4gICAgZm9udC1zaXplOiAyOHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi5zdl9tYWluLnN2X2ZyYW1lIC5zdl9jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4jc3VydmV5LXZpZXdlci1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4jc3VydmV5LXZpZXdlci1jb250YWluZXIgLnN2X21haW4uc3ZfZGVmYXVsdF9jc3MgLnN2X2JvZHkge1xuICBib3JkZXItdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuaDIge1xuICBwYWRkaW5nOiAxNXB4IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgY29sb3I6ICM0ZDRkNGQ7XG4gIGZvbnQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/auth/studyexam-downlad/studyexam-downlad.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/auth/studyexam-downlad/studyexam-downlad.component.ts ***!
  \*****************************************************************************/
/*! exports provided: StudyExamDownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyExamDownloadComponent", function() { return StudyExamDownloadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_studyexam_pocquestion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/studyexam/pocquestion.service */ "./src/app/services/studyexam/pocquestion.service.ts");
/* harmony import */ var _services_studyexam_curriculum_single_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/studyexam/curriculum-single.service */ "./src/app/services/studyexam/curriculum-single.service.ts");
/* harmony import */ var _services_studyexam_competitive_single_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/studyexam/competitive-single.service */ "./src/app/services/studyexam/competitive-single.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var html_to_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! html-to-image */ "./node_modules/html-to-image/es/index.js");
/* harmony import */ var _services_tsupervisor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/tsupervisor.service */ "./src/app/services/tsupervisor.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__);












var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
var StudyExamDownloadComponent = /** @class */ (function () {
    function StudyExamDownloadComponent(router, activeAouter, alertService, curriculumSingleService, authenticationService, pocquestionService, competitiveSingleService, tsupervisorService) {
        this.router = router;
        this.activeAouter = activeAouter;
        this.alertService = alertService;
        this.curriculumSingleService = curriculumSingleService;
        this.authenticationService = authenticationService;
        this.pocquestionService = pocquestionService;
        this.competitiveSingleService = competitiveSingleService;
        this.tsupervisorService = tsupervisorService;
        this.title = 'Download';
        this.selectedItems = [];
        this.gridview = false;
        this.error = '';
        this.questionArr = [];
        this.masterArr = [];
        this.row_id = 1;
        this.mode = '';
        this.parentmodule = '';
        this.s3_url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].s3_url;
        this.local_api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
        this.question_value = "";
    }
    StudyExamDownloadComponent.prototype.ngOnInit = function () {
        this.logUser = this.authenticationService.currentUserValue;
        this.logUser = JSON.parse(this.logUser);
        this.created_by = this.logUser['user'][0]['id'];
        this.mode = this.activeAouter.snapshot.params['mode'];
        this.parentmodule = this.activeAouter.snapshot.params["parent"];
        this.quiz_temp_id = (this.activeAouter.snapshot.params['quiz_temp_id']);
        this.getDraftQuestion(this.mode);
        jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).ready(function () {
            //setTimeout(() => window.print(), 1000);
        });
    };
    StudyExamDownloadComponent.prototype.getDraftQuestion = function (mode) {
        var _this = this;
        if (this.parentmodule == "teacher") {
            if (mode == '1') {
                this.curriculumSingleService.getDraftQuestionByUser(this.created_by).subscribe(function (response) {
                    _this.questionArr = response;
                });
            }
            else if (mode == '2') {
                this.pocquestionService.getDraftQuestionByUser(this.created_by).subscribe(function (response) {
                    _this.questionArr = response;
                });
            }
            else if (mode == '3') {
                this.competitiveSingleService.getDraftQuestionByUser(this.created_by, this.quiz_temp_id).subscribe(function (response) {
                    _this.questionArr = response;
                });
            }
            else if (mode == '4') {
                this.pocquestionService.getDraftQuestionCompetitiveByUser(this.created_by, this.quiz_temp_id).subscribe(function (response) {
                    _this.questionArr = response;
                });
            }
        }
        else {
            this.tsupervisorService.getPublishQuestion(this.quiz_temp_id).subscribe(function (response) {
                _this.questionArr = response;
            });
        }
    };
    StudyExamDownloadComponent.prototype.generatePDF = function () {
        var self = this;
        var doc = new jsPDF({
            orientation: "landscape",
            unit: "in",
            format: "a4"
        });
        var res = doc.autoTableHtmlToJson(document.getElementById("contentToConvert"), false);
        doc.autoTable(res.columns, res.rows, {
            bodyStyles: { valign: 'top', minCellHeight: 100 },
            styles: { overflow: 'linebreak', columnWidth: 'wrap' },
            createdCell: function (cell, data) {
                if (data.column.index === 6) {
                    debugger;
                    cell.styles.cellPadding = { vertical: 1 };
                    var div = document.createElement("div");
                    div.innerHTML = data.cell.raw.innerHTML;
                    cell.text = cell.raw.textContent.replace(/./g, ' ');
                    setTimeout(function () { return html_to_image__WEBPACK_IMPORTED_MODULE_9__["toPng"](data.cell.raw)
                        .then(function (dataUrl) {
                        var img = new Image();
                        img.src = dataUrl;
                        var textPos = data.cell.textPos;
                        var dim = data.cell.raw.offsetHeight - data.cell.padding('vertical');
                        doc.addImage(img.src, textPos.x, textPos.y);
                    })
                        .catch(function (error) {
                        debugger;
                        console.error('oops, something went wrong!', error);
                    }); }, 1000);
                }
            }
        });
        //doc.save("table.pdf")
        setTimeout(function () { return doc.save("table.pdf"); }, 10000);
    };
    StudyExamDownloadComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"] },
        { type: _services_studyexam_curriculum_single_service__WEBPACK_IMPORTED_MODULE_5__["CurriculumSingleService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
        { type: _services_studyexam_pocquestion_service__WEBPACK_IMPORTED_MODULE_4__["PocquestionService"] },
        { type: _services_studyexam_competitive_single_service__WEBPACK_IMPORTED_MODULE_6__["CompetitiveSingleService"] },
        { type: _services_tsupervisor_service__WEBPACK_IMPORTED_MODULE_10__["TsupervisorService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudyExamDownloadComponent.prototype, "container", void 0);
    StudyExamDownloadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-referendum',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./studyexam-downlad.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/studyexam-downlad/studyexam-downlad.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./studyexam-downlad.component.scss */ "./src/app/pages/auth/studyexam-downlad/studyexam-downlad.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"],
            _services_studyexam_curriculum_single_service__WEBPACK_IMPORTED_MODULE_5__["CurriculumSingleService"],
            _services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
            _services_studyexam_pocquestion_service__WEBPACK_IMPORTED_MODULE_4__["PocquestionService"],
            _services_studyexam_competitive_single_service__WEBPACK_IMPORTED_MODULE_6__["CompetitiveSingleService"],
            _services_tsupervisor_service__WEBPACK_IMPORTED_MODULE_10__["TsupervisorService"]])
    ], StudyExamDownloadComponent);
    return StudyExamDownloadComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/studyexam-downlad/studyexam-downlad.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/auth/studyexam-downlad/studyexam-downlad.module.ts ***!
  \**************************************************************************/
/*! exports provided: SafeHtmlPipe, StudyExamDownloadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyExamDownloadModule", function() { return StudyExamDownloadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _studyexam_downlad_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./studyexam-downlad-routing.module */ "./src/app/pages/auth/studyexam-downlad/studyexam-downlad-routing.module.ts");
/* harmony import */ var _studyexam_downlad_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./studyexam-downlad.component */ "./src/app/pages/auth/studyexam-downlad/studyexam-downlad.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");











var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] }
    ]; };
    SafeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safeHtml' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());

var StudyExamDownloadModule = /** @class */ (function () {
    function StudyExamDownloadModule() {
    }
    StudyExamDownloadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _studyexam_downlad_routing_module__WEBPACK_IMPORTED_MODULE_3__["StudyExamDownloadRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
            ],
            declarations: [_studyexam_downlad_component__WEBPACK_IMPORTED_MODULE_4__["StudyExamDownloadComponent"],
                SafeHtmlPipe]
        })
    ], StudyExamDownloadModule);
    return StudyExamDownloadModule;
}());



/***/ }),

/***/ "./src/app/pipes/custom.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/custom.pipe.ts ***!
  \**************************************/
/*! exports provided: CustomPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPipe", function() { return CustomPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomPipe = /** @class */ (function () {
    function CustomPipe() {
    }
    CustomPipe.prototype.transform = function (items, filter, isAnd) {
        if (filter && Array.isArray(items)) {
            var filterKeys_1 = Object.keys(filter);
            if (isAnd) {
                return items.filter(function (item) {
                    return filterKeys_1.reduce(function (memo, keyName) {
                        return (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === "";
                    }, true);
                });
            }
            else {
                return items.filter(function (item) {
                    return filterKeys_1.some(function (keyName) {
                        console.log(keyName);
                        return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] === "";
                    });
                });
            }
        }
        else {
            return items;
        }
    };
    CustomPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'cFilter'
        })
    ], CustomPipe);
    return CustomPipe;
}());



/***/ }),

/***/ "./src/app/pipes/format-title.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/format-title.pipe.ts ***!
  \********************************************/
/*! exports provided: FormatTitlePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatTitlePipe", function() { return FormatTitlePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormatTitlePipe = /** @class */ (function () {
    function FormatTitlePipe() {
    }
    FormatTitlePipe.prototype.transform = function (title) {
        var result = title.replace(/([A-Z])/g, ' $1');
        var finalResult = result.charAt(0)
            .toUpperCase() + result.slice(1);
        return finalResult;
    };
    FormatTitlePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'formatTitle'
        })
    ], FormatTitlePipe);
    return FormatTitlePipe;
}());



/***/ }),

/***/ "./src/app/pipes/format.ts":
/*!*********************************!*\
  !*** ./src/app/pipes/format.ts ***!
  \*********************************/
/*! exports provided: Format */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Format", function() { return Format; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Format = /** @class */ (function () {
    function Format() {
    }
    //datePipe: DatePipe = new DatePipe();
    //decimalPipe: DecimalPipe = new DecimalPipe();
    Format.prototype.transform = function (input, args) {
        var format = '';
        var parsedFloat = 0;
        var pipeArgs = args.split(':');
        for (var i = 0; i < pipeArgs.length; i++) {
            pipeArgs[i] = pipeArgs[i].trim(' ');
        }
        switch (pipeArgs[0].toLowerCase()) {
            case 'text':
                return input;
            /*case 'decimal':
            case 'number':
              parsedFloat = !isNaN(parseFloat(input)) ? parseFloat(input) : 0;
              format = pipeArgs.length > 1 ? pipeArgs[1] : null;
              return this.decimalPipe.transform(parsedFloat, format);
            case 'percentage':
              parsedFloat = !isNaN(parseFloat(input)) ? parseFloat(input) : 0;
              format = pipeArgs.length > 1 ? pipeArgs[1] : null;
              return this.decimalPipe.transform(parsedFloat, format) + '%';*/
            /*case 'date':
            case 'datetime':
              var date = !isNaN(parseInt(input)) ? parseInt(input) : new Date(input);
              format = 'MMM d, y h:mm:ss a';
              if(pipeArgs.length > 1)
              {
                  format = '';
                  for(var i = 1; i < pipeArgs.length; i++){
                      format += pipeArgs[i];
                  }
              }
              return this.datePipe.transform(date, format);*/
            default:
                return input;
        }
    };
    Format = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'format'
        })
    ], Format);
    return Format;
}());



/***/ }),

/***/ "./src/app/pipes/orderBy.ts":
/*!**********************************!*\
  !*** ./src/app/pipes/orderBy.ts ***!
  \**********************************/
/*! exports provided: OrderBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderBy", function() { return OrderBy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * Example use
 *		Basic Array of single type: *ngFor="let todo of todoService.todos | orderBy : '-'"
 *		Multidimensional Array Sort on single column: *ngFor="let todo of todoService.todos | orderBy : ['-status']"
 *		Multidimensional Array Sort on multiple columns: *ngFor="let todo of todoService.todos | orderBy : ['status', '-title']"
 */


var OrderBy = /** @class */ (function () {
    function OrderBy() {
        this.value = [];
    }
    OrderBy_1 = OrderBy;
    OrderBy._orderByComparator = function (a, b) {
        if (a === null || typeof a === 'undefined')
            a = 0;
        if (b === null || typeof b === 'undefined')
            b = 0;
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    };
    OrderBy.prototype.transform = function (input, config) {
        if (config === void 0) { config = '+'; }
        //make a copy of the input's reference
        this.value = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](input);
        var value = this.value;
        if (!Array.isArray(value))
            return value;
        if (!Array.isArray(config) || (Array.isArray(config) && config.length == 1)) {
            var propertyToCheck = !Array.isArray(config) ? config : config[0];
            var desc = propertyToCheck.substr(0, 1) == '-';
            //Basic array
            if (!propertyToCheck || propertyToCheck == '-' || propertyToCheck == '+') {
                return !desc ? value.sort() : value.sort().reverse();
            }
            else {
                var property = propertyToCheck.substr(0, 1) == '+' || propertyToCheck.substr(0, 1) == '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;
                return value.sort(function (a, b) {
                    return !desc
                        ? OrderBy_1._orderByComparator(a[property], b[property])
                        : -OrderBy_1._orderByComparator(a[property], b[property]);
                });
            }
        }
        else {
            //Loop over property of the array in order and sort
            return value.sort(function (a, b) {
                for (var i = 0; i < config.length; i++) {
                    var desc = config[i].substr(0, 1) == '-';
                    var property = config[i].substr(0, 1) == '+' || config[i].substr(0, 1) == '-'
                        ? config[i].substr(1)
                        : config[i];
                    var comparison = !desc
                        ? OrderBy_1._orderByComparator(a[property], b[property])
                        : -OrderBy_1._orderByComparator(a[property], b[property]);
                    //Don't return 0 yet in case of needing to sort by next property
                    if (comparison != 0)
                        return comparison;
                }
                return 0; //equal each other
            });
        }
    };
    var OrderBy_1;
    OrderBy = OrderBy_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'orderByy', pure: false })
    ], OrderBy);
    return OrderBy;
}());



/***/ }),

/***/ "./src/app/pipes/orderby.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/orderby.pipe.ts ***!
  \***************************************/
/*! exports provided: OrderrByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderrByPipe", function() { return OrderrByPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderrByPipe = /** @class */ (function () {
    function OrderrByPipe() {
    }
    OrderrByPipe.prototype.transform = function (records, args) {
        return records.sort(function (a, b) {
            if (a[args.property] < b[args.property]) {
                return -1 * args.direction;
            }
            else if (a[args.property] > b[args.property]) {
                return 1 * args.direction;
            }
            else {
                return 0;
            }
        });
    };
    ;
    OrderrByPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'orderBy' })
    ], OrderrByPipe);
    return OrderrByPipe;
}());



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _orderby_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orderby.pipe */ "./src/app/pipes/orderby.pipe.ts");
/* harmony import */ var _format_title_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./format-title.pipe */ "./src/app/pipes/format-title.pipe.ts");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./format */ "./src/app/pipes/format.ts");
/* harmony import */ var _orderBy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orderBy */ "./src/app/pipes/orderBy.ts");
/* harmony import */ var _custom_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom.pipe */ "./src/app/pipes/custom.pipe.ts");
/* harmony import */ var _sanitize_url_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sanitize-url.pipe */ "./src/app/pipes/sanitize-url.pipe.ts");








var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_orderby_pipe__WEBPACK_IMPORTED_MODULE_2__["OrderrByPipe"], _format_title_pipe__WEBPACK_IMPORTED_MODULE_3__["FormatTitlePipe"], _format__WEBPACK_IMPORTED_MODULE_4__["Format"], _orderBy__WEBPACK_IMPORTED_MODULE_5__["OrderBy"], _custom_pipe__WEBPACK_IMPORTED_MODULE_6__["CustomPipe"], _sanitize_url_pipe__WEBPACK_IMPORTED_MODULE_7__["SanitizerUrlPipe"]],
            imports: [],
            exports: [_orderby_pipe__WEBPACK_IMPORTED_MODULE_2__["OrderrByPipe"], _format_title_pipe__WEBPACK_IMPORTED_MODULE_3__["FormatTitlePipe"], _format__WEBPACK_IMPORTED_MODULE_4__["Format"], _orderBy__WEBPACK_IMPORTED_MODULE_5__["OrderBy"], _custom_pipe__WEBPACK_IMPORTED_MODULE_6__["CustomPipe"], _sanitize_url_pipe__WEBPACK_IMPORTED_MODULE_7__["SanitizerUrlPipe"]]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/app/pipes/sanitize-url.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/sanitize-url.pipe.ts ***!
  \********************************************/
/*! exports provided: SanitizerUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizerUrlPipe", function() { return SanitizerUrlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SanitizerUrlPipe = /** @class */ (function () {
    function SanitizerUrlPipe(sanitize) {
        this.sanitize = sanitize;
    }
    SanitizerUrlPipe.prototype.transform = function (value) {
        return this.sanitize.bypassSecurityTrustUrl(value);
    };
    SanitizerUrlPipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    SanitizerUrlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'sanitizerUrl'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SanitizerUrlPipe);
    return SanitizerUrlPipe;
}());



/***/ })

}]);
//# sourceMappingURL=studyexam-downlad-studyexam-downlad-module.js.map