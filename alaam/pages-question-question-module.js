(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-question-question-module"],{

/***/ "./node_modules/dom-to-image-more/src/dom-to-image-more.js":
/*!*****************************************************************!*\
  !*** ./node_modules/dom-to-image-more/src/dom-to-image-more.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(global) {
    'use strict';

    var util = newUtil();
    var inliner = newInliner();
    var fontFaces = newFontFaces();
    var images = newImages();

    // Default impl options
    var defaultOptions = {
        // Default is to fail on error, no placeholder
        imagePlaceholder: undefined,
        // Default cache bust is false, it will use the cache
        cacheBust: false,
        // Use (existing) authentication credentials for external URIs (CORS requests)
        useCredentials: false
    };

    var domtoimage = {
        toSvg: toSvg,
        toPng: toPng,
        toJpeg: toJpeg,
        toBlob: toBlob,
        toPixelData: toPixelData,
        toCanvas: toCanvas,
        impl: {
            fontFaces: fontFaces,
            images: images,
            util: util,
            inliner: inliner,
            options: {}
        }
    };

    if (true)
        module.exports = domtoimage;
    else
        {}

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options
     * @param {Function} options.filter - Should return true if passed node should be included in the output
     *          (excluding node means excluding it's children as well). Not called on the root node.
     * @param {String} options.bgcolor - color for the background, any valid CSS color value.
     * @param {Number} options.width - width to be applied to node before rendering.
     * @param {Number} options.height - height to be applied to node before rendering.
     * @param {Object} options.style - an object whose properties to be copied to node's style before rendering.
     * @param {Number} options.quality - a Number between 0 and 1 indicating image quality (applicable to JPEG only),
                defaults to 1.0.
     * @param {Number} options.scale - a Number multiplier to scale up the canvas before rendering to reduce fuzzy images, defaults to 1.0.
     * @param {String} options.imagePlaceholder - dataURL to use as a placeholder for failed images, default behaviour is to fail fast on images we can't fetch
     * @param {Boolean} options.cacheBust - set to true to cache bust by appending the time to the request url
     * @return {Promise} - A promise that is fulfilled with a SVG image data URL
     * */
    function toSvg(node, options) {
        options = options || {};
        copyOptions(options);
        return Promise.resolve(node)
            .then(function(node) {
                return cloneNode(node, options.filter, true);
            })
            .then(embedFonts)
            .then(inlineImages)
            .then(applyOptions)
            .then(function(clone) {
                return makeSvgDataUri(clone,
                    options.width || util.width(node),
                    options.height || util.height(node)
                );
            });

        function applyOptions(clone) {
            if (options.bgcolor) clone.style.backgroundColor = options.bgcolor;
            if (options.width) clone.style.width = options.width + 'px';
            if (options.height) clone.style.height = options.height + 'px';

            if (options.style)
                Object.keys(options.style).forEach(function(property) {
                    clone.style[property] = options.style[property];
                });

            return clone;
        }
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a Uint8Array containing RGBA pixel data.
     * */
    function toPixelData(node, options) {
        return draw(node, options || {})
            .then(function(canvas) {
                return canvas.getContext('2d').getImageData(
                    0,
                    0,
                    util.width(node),
                    util.height(node)
                ).data;
            });
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a PNG image data URL
     * */
    function toPng(node, options) {
        return draw(node, options || {})
            .then(function(canvas) {
                return canvas.toDataURL();
            });
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a JPEG image data URL
     * */
    function toJpeg(node, options) {
        options = options || {};
        return draw(node, options)
            .then(function(canvas) {
                return canvas.toDataURL('image/jpeg', options.quality || 1.0);
            });
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a PNG image blob
     * */
    function toBlob(node, options) {
        return draw(node, options || {})
            .then(util.canvasToBlob);
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a canvas object
     * */
    function toCanvas(node, options) {
        return draw(node, options || {});
    }

    function copyOptions(options) {
        // Copy options to impl options for use in impl
        if (typeof(options.imagePlaceholder) === 'undefined') {
            domtoimage.impl.options.imagePlaceholder = defaultOptions.imagePlaceholder;
        } else {
            domtoimage.impl.options.imagePlaceholder = options.imagePlaceholder;
        }

        if (typeof(options.cacheBust) === 'undefined') {
            domtoimage.impl.options.cacheBust = defaultOptions.cacheBust;
        } else {
            domtoimage.impl.options.cacheBust = options.cacheBust;
        }

        if(typeof(options.useCredentials) === 'undefined') {
            domtoimage.impl.options.useCredentials = defaultOptions.useCredentials;
        } else {
            domtoimage.impl.options.useCredentials = options.useCredentials;
        }
    }

    function draw(domNode, options) {
        return toSvg(domNode, options)
            .then(util.makeImage)
            .then(util.delay(100))
            .then(function(image) {
                var scale = typeof(options.scale) !== 'number' ? 1 : options.scale;
                var canvas = newCanvas(domNode, scale);
                var ctx = canvas.getContext('2d');
                if (image) {
                    ctx.scale(scale, scale);
                    ctx.drawImage(image, 0, 0);
                }
                return canvas;
            });

        function newCanvas(domNode, scale) {
            var canvas = document.createElement('canvas');
            canvas.width = (options.width || util.width(domNode)) * scale;
            canvas.height = (options.height || util.height(domNode)) * scale;

            if (options.bgcolor) {
                var ctx = canvas.getContext('2d');
                ctx.fillStyle = options.bgcolor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            return canvas;
        }
    }

    function cloneNode(node, filter, root) {
        if (!root && filter && !filter(node)) return Promise.resolve();

        return Promise.resolve(node)
            .then(makeNodeCopy)
            .then(function(clone) {
                return cloneChildren(node, clone, filter);
            })
            .then(function(clone) {
                return processClone(node, clone);
            });

        function makeNodeCopy(node) {
            if (node instanceof HTMLCanvasElement) return util.makeImage(node.toDataURL());
            return node.cloneNode(false);
        }

        function cloneChildren(original, clone, filter) {
            var children = original.childNodes;
            if (children.length === 0) return Promise.resolve(clone);

            return cloneChildrenInOrder(clone, util.asArray(children), filter)
                .then(function() {
                    return clone;
                });

            function cloneChildrenInOrder(parent, children, filter) {
                var done = Promise.resolve();
                children.forEach(function(child) {
                    done = done
                        .then(function() {
                            return cloneNode(child, filter);
                        })
                        .then(function(childClone) {
                            if (childClone) parent.appendChild(childClone);
                        });
                });
                return done;
            }
        }

        function processClone(original, clone) {
            if (!(clone instanceof Element)) return clone;

            return Promise.resolve()
                .then(cloneStyle)
                .then(clonePseudoElements)
                .then(copyUserInput)
                .then(fixSvg)
                .then(function() {
                    return clone;
                });

            function cloneStyle() {
                copyStyle(window.getComputedStyle(original), clone.style);

                function copyStyle(source, target) {
                    if (source.cssText) {
                        target.cssText = source.cssText;
                        target.font = source.font; // here, we re-assign the font prop.
                    } else copyProperties(source, target);

                    function copyProperties(source, target) {
                        util.asArray(source).forEach(function(name) {
                            target.setProperty(
                                name,
                                source.getPropertyValue(name),
                                source.getPropertyPriority(name)
                            );
                        });
                    }
                }
            }

            function clonePseudoElements() {
                [':before', ':after'].forEach(function(element) {
                    clonePseudoElement(element);
                });

                function clonePseudoElement(element) {
                    var style = window.getComputedStyle(original, element);
                    var content = style.getPropertyValue('content');

                    if (content === '' || content === 'none') return;

                    var className = util.uid();
                    var currentClass = clone.getAttribute('class');
                    if (currentClass) {
                        clone.setAttribute('class', currentClass + ' ' + className);
                    }

                    var styleElement = document.createElement('style');
                    styleElement.appendChild(formatPseudoElementStyle(className, element, style));
                    clone.appendChild(styleElement);

                    function formatPseudoElementStyle(className, element, style) {
                        var selector = '.' + className + ':' + element;
                        var cssText = style.cssText ? formatCssText(style) : formatCssProperties(style);
                        return document.createTextNode(selector + '{' + cssText + '}');

                        function formatCssText(style) {
                            var content = style.getPropertyValue('content');
                            return style.cssText + ' content: ' + content + ';';
                        }

                        function formatCssProperties(style) {

                            return util.asArray(style)
                                .map(formatProperty)
                                .join('; ') + ';';

                            function formatProperty(name) {
                                return name + ': ' +
                                    style.getPropertyValue(name) +
                                    (style.getPropertyPriority(name) ? ' !important' : '');
                            }
                        }
                    }
                }
            }

            function copyUserInput() {
                if (original instanceof HTMLTextAreaElement) clone.innerHTML = original.value;
                if (original instanceof HTMLInputElement) clone.setAttribute("value", original.value);
            }

            function fixSvg() {
                if (!(clone instanceof SVGElement)) return;
                clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

                if (!(clone instanceof SVGRectElement)) return;
                ['width', 'height'].forEach(function(attribute) {
                    var value = clone.getAttribute(attribute);
                    if (!value) return;

                    clone.style.setProperty(attribute, value);
                });
            }
        }
    }

    function embedFonts(node) {
        return fontFaces.resolveAll()
            .then(function(cssText) {
                var styleNode = document.createElement('style');
                node.appendChild(styleNode);
                styleNode.appendChild(document.createTextNode(cssText));
                return node;
            });
    }

    function inlineImages(node) {
        return images.inlineAll(node)
            .then(function() {
                return node;
            });
    }

    function makeSvgDataUri(node, width, height) {
        return Promise.resolve(node)
            .then(function(node) {
                node.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
                return new XMLSerializer().serializeToString(node);
            })
            .then(util.escapeXhtml)
            .then(function(xhtml) {
                return '<foreignObject x="0" y="0" width="100%" height="100%">' + xhtml + '</foreignObject>';
            })
            .then(function(foreignObject) {
                return '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '">' +
                    foreignObject + '</svg>';
            })
            .then(function(svg) {
                return 'data:image/svg+xml;charset=utf-8,' + svg;
            });
    }

    function newUtil() {
        return {
            escape: escape,
            parseExtension: parseExtension,
            mimeType: mimeType,
            dataAsUrl: dataAsUrl,
            isDataUrl: isDataUrl,
            canvasToBlob: canvasToBlob,
            resolveUrl: resolveUrl,
            getAndEncode: getAndEncode,
            uid: uid(),
            delay: delay,
            asArray: asArray,
            escapeXhtml: escapeXhtml,
            makeImage: makeImage,
            width: width,
            height: height
        };

        function mimes() {
            /*
             * Only WOFF and EOT mime types for fonts are 'real'
             * see http://www.iana.org/assignments/media-types/media-types.xhtml
             */
            var WOFF = 'application/font-woff';
            var JPEG = 'image/jpeg';

            return {
                'woff': WOFF,
                'woff2': WOFF,
                'ttf': 'application/font-truetype',
                'eot': 'application/vnd.ms-fontobject',
                'png': 'image/png',
                'jpg': JPEG,
                'jpeg': JPEG,
                'gif': 'image/gif',
                'tiff': 'image/tiff',
                'svg': 'image/svg+xml'
            };
        }

        function parseExtension(url) {
            var match = /\.([^\.\/]*?)(\?|$)/g.exec(url);
            if (match) return match[1];
            else return '';
        }

        function mimeType(url) {
            var extension = parseExtension(url).toLowerCase();
            return mimes()[extension] || '';
        }

        function isDataUrl(url) {
            return url.search(/^(data:)/) !== -1;
        }

        function toBlob(canvas) {
            return new Promise(function(resolve) {
                var binaryString = window.atob(canvas.toDataURL().split(',')[1]);
                var length = binaryString.length;
                var binaryArray = new Uint8Array(length);

                for (var i = 0; i < length; i++)
                    binaryArray[i] = binaryString.charCodeAt(i);

                resolve(new Blob([binaryArray], {
                    type: 'image/png'
                }));
            });
        }

        function canvasToBlob(canvas) {
            if (canvas.toBlob)
                return new Promise(function(resolve) {
                    canvas.toBlob(resolve);
                });

            return toBlob(canvas);
        }

        function resolveUrl(url, baseUrl) {
            var doc = document.implementation.createHTMLDocument();
            var base = doc.createElement('base');
            doc.head.appendChild(base);
            var a = doc.createElement('a');
            doc.body.appendChild(a);
            base.href = baseUrl;
            a.href = url;
            return a.href;
        }

        function uid() {
            var index = 0;

            return function() {
                return 'u' + fourRandomChars() + index++;

                function fourRandomChars() {
                    /* see http://stackoverflow.com/a/6248722/2519373 */
                    return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
                }
            };
        }

        function makeImage(uri) {
            if (uri === 'data:,') return Promise.resolve();
            return new Promise(function(resolve, reject) {
                var image = new Image();
                if(domtoimage.impl.options.useCredentials) {
                    image.crossOrigin = 'use-credentials';
                }
                image.onload = function() {
                    resolve(image);
                };
                image.onerror = reject;
                image.src = uri;
            });
        }

        function getAndEncode(url) {
            var TIMEOUT = 30000;
            if (domtoimage.impl.options.cacheBust) {
                // Cache bypass so we dont have CORS issues with cached images
                // Source: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
                url += ((/\?/).test(url) ? "&" : "?") + (new Date()).getTime();
            }

            return new Promise(function(resolve) {
                var request = new XMLHttpRequest();

                request.onreadystatechange = done;
                request.ontimeout = timeout;
                request.responseType = 'blob';
                request.timeout = TIMEOUT;
                if(domtoimage.impl.options.useCredentials) {
                    request.withCredentials = true;
                }
                request.open('GET', url, true);
                request.send();

                var placeholder;
                if (domtoimage.impl.options.imagePlaceholder) {
                    var split = domtoimage.impl.options.imagePlaceholder.split(/,/);
                    if (split && split[1]) {
                        placeholder = split[1];
                    }
                }

                function done() {
                    if (request.readyState !== 4) return;

                    if (request.status !== 200) {
                        if (placeholder) {
                            resolve(placeholder);
                        } else {
                            fail('cannot fetch resource: ' + url + ', status: ' + request.status);
                        }

                        return;
                    }

                    var encoder = new FileReader();
                    encoder.onloadend = function() {
                        var content = encoder.result.split(/,/)[1];
                        resolve(content);
                    };
                    encoder.readAsDataURL(request.response);
                }

                function timeout() {
                    if (placeholder) {
                        resolve(placeholder);
                    } else {
                        fail('timeout of ' + TIMEOUT + 'ms occured while fetching resource: ' + url);
                    }
                }

                function fail(message) {
                    console.error(message);
                    resolve('');
                }
            });
        }

        function dataAsUrl(content, type) {
            return 'data:' + type + ';base64,' + content;
        }

        function escape(string) {
            return string.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
        }

        function delay(ms) {
            return function(arg) {
                return new Promise(function(resolve) {
                    setTimeout(function() {
                        resolve(arg);
                    }, ms);
                });
            };
        }

        function asArray(arrayLike) {
            var array = [];
            var length = arrayLike.length;
            for (var i = 0; i < length; i++) array.push(arrayLike[i]);
            return array;
        }

        function escapeXhtml(string) {
            return string.replace(/#/g, '%23').replace(/\n/g, '%0A');
        }

        function width(node) {
            var leftBorder = px(node, 'border-left-width');
            var rightBorder = px(node, 'border-right-width');
            return node.scrollWidth + leftBorder + rightBorder;
        }

        function height(node) {
            var topBorder = px(node, 'border-top-width');
            var bottomBorder = px(node, 'border-bottom-width');
            return node.scrollHeight + topBorder + bottomBorder;
        }

        function px(node, styleProperty) {
            var value = window.getComputedStyle(node).getPropertyValue(styleProperty);
            return parseFloat(value.replace('px', ''));
        }
    }

    function newInliner() {
        var URL_REGEX = /url\(['"]?([^'"]+?)['"]?\)/g;

        return {
            inlineAll: inlineAll,
            shouldProcess: shouldProcess,
            impl: {
                readUrls: readUrls,
                inline: inline
            }
        };

        function shouldProcess(string) {
            return string.search(URL_REGEX) !== -1;
        }

        function readUrls(string) {
            var result = [];
            var match;
            while ((match = URL_REGEX.exec(string)) !== null) {
                result.push(match[1]);
            }
            return result.filter(function(url) {
                return !util.isDataUrl(url);
            });
        }

        function inline(string, url, baseUrl, get) {
            return Promise.resolve(url)
                .then(function(url) {
                    return baseUrl ? util.resolveUrl(url, baseUrl) : url;
                })
                .then(get || util.getAndEncode)
                .then(function(data) {
                    return util.dataAsUrl(data, util.mimeType(url));
                })
                .then(function(dataUrl) {
                    return string.replace(urlAsRegex(url), '$1' + dataUrl + '$3');
                });

            function urlAsRegex(url) {
                return new RegExp('(url\\([\'"]?)(' + util.escape(url) + ')([\'"]?\\))', 'g');
            }
        }

        function inlineAll(string, baseUrl, get) {
            if (nothingToInline()) return Promise.resolve(string);

            return Promise.resolve(string)
                .then(readUrls)
                .then(function(urls) {
                    var done = Promise.resolve(string);
                    urls.forEach(function(url) {
                        done = done.then(function(string) {
                            return inline(string, url, baseUrl, get);
                        });
                    });
                    return done;
                });

            function nothingToInline() {
                return !shouldProcess(string);
            }
        }
    }

    function newFontFaces() {
        return {
            resolveAll: resolveAll,
            impl: {
                readAll: readAll
            }
        };

        function resolveAll() {
            return readAll(document)
                .then(function(webFonts) {
                    return Promise.all(
                        webFonts.map(function(webFont) {
                            return webFont.resolve();
                        })
                    );
                })
                .then(function(cssStrings) {
                    return cssStrings.join('\n');
                });
        }

        function readAll() {
            return Promise.resolve(util.asArray(document.styleSheets))
                .then(getCssRules)
                .then(selectWebFontRules)
                .then(function(rules) {
                    return rules.map(newWebFont);
                });

            function selectWebFontRules(cssRules) {
                return cssRules
                    .filter(function(rule) {
                        return rule.type === CSSRule.FONT_FACE_RULE;
                    })
                    .filter(function(rule) {
                        return inliner.shouldProcess(rule.style.getPropertyValue('src'));
                    });
            }

            function getCssRules(styleSheets) {
                var cssRules = [];
                styleSheets.forEach(function(sheet) {
                    if (sheet.hasOwnProperty("cssRules")) {
                        try {
                            util.asArray(sheet.cssRules || []).forEach(cssRules.push.bind(cssRules));
                        } catch (e) {
                            console.log('Error while reading CSS rules from ' + sheet.href, e.toString());
                        }
                    }
                });
                return cssRules;
            }

            function newWebFont(webFontRule) {
                return {
                    resolve: function resolve() {
                        var baseUrl = (webFontRule.parentStyleSheet || {}).href;
                        return inliner.inlineAll(webFontRule.cssText, baseUrl);
                    },
                    src: function() {
                        return webFontRule.style.getPropertyValue('src');
                    }
                };
            }
        }
    }

    function newImages() {
        return {
            inlineAll: inlineAll,
            impl: {
                newImage: newImage
            }
        };

        function newImage(element) {
            return {
                inline: inline
            };

            function inline(get) {
                if (util.isDataUrl(element.src)) return Promise.resolve();

                return Promise.resolve(element.src)
                    .then(get || util.getAndEncode)
                    .then(function(data) {
                        return util.dataAsUrl(data, util.mimeType(element.src));
                    })
                    .then(function(dataUrl) {
                        return new Promise(function(resolve, reject) {
                            element.onload = resolve;
                            // for any image with invalid src(such as <img src />), just ignore it
                            element.onerror = resolve;
                            element.src = dataUrl;
                        });
                    });
            }
        }

        function inlineAll(node) {
            if (!(node instanceof Element)) return Promise.resolve(node);

            return inlineBackground(node)
                .then(function() {
                    if (node instanceof HTMLImageElement)
                        return newImage(node).inline();
                    else
                        return Promise.all(
                            util.asArray(node.childNodes).map(function(child) {
                                return inlineAll(child);
                            })
                        );
                });

            function inlineBackground(node) {
                var background = node.style.getPropertyValue('background');

                if (!background) return Promise.resolve(node);

                return inliner.inlineAll(background)
                    .then(function(inlined) {
                        node.style.setProperty(
                            'background',
                            inlined,
                            node.style.getPropertyPriority('background')
                        );
                    })
                    .then(function() {
                        return node;
                    });
            }
        }
    }
})(this);


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question/add/add-question.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question/add/add-question.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <div _ngcontent-oub-c3=\"\" class=\"row m-b-20\"><div _ngcontent-oub-c3=\"\" class=\"col-md-12\">\r\n     <h3 _ngcontent-oub-c3=\"\" class=\"text-left txt-primary\">Add New Question </h3></div></div>\r\n   \r\n   <hr />\r\n   <div class=\"card\">\r\n    <form class=\"md-float-material\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"row\">\r\n          <div class=\"card-block col-sm-12 col-xs-12 col-md-6 \">\r\n             <!-- \r\n             <div class=\"group\">\r\n\r\n              <label >Question Type</label>\r\n              <select  class=\"form-control\" id=\"hello-single\">\r\n                <option value=\"cheese\">Text</option>\r\n                <option value=\"h\">Image</option>\r\n                <option value=\"c\">Video</option>\r\n                \r\n               </select></div>\r\n\r\n               <div class=\"group  files color m-t-15\" style=\"display: block;\">\r\n                <label>Upload Your File </label>\r\n            \r\n                  <input type=\"file\" class=\"form-control\" multiple=\"\">\r\n                \r\n               </div>\r\n\r\n             <div class=\"group m-t-15\" style=\"display: none;\">\r\n             <label>Enter Question</label>\r\n             <input class=\"form-control\" placeholder=\"Book\" type=\"\">\r\n             <span class=\"md-line\"></span>\r\n            </div>\r\n           -->\r\n           <div class=\"group\" id=\"my-node\">\r\n              <label >Question</label>\r\n             <!-- <ejs-richtexteditor id='defaultRTE' [(value)]='value' [toolbarSettings]='tools' [quickToolbarSettings]='quickTools'></ejs-richtexteditor> -->\r\n             <ckeditor [editor]=\"Editor\"  [data]='value' (change)=\"onChange($event)\"></ckeditor>\r\n           </div>\r\n           \r\n           <div class=\"group m-t-15\">\r\n             <label >Select Category</label>\r\n              <select  class=\"form-control\" id=\"hello-single\" formControlName=\"category\">\r\n               <option value=\"History\">History</option>\r\n               <option value=\"Art\">Art</option>\r\n               <option value=\"Technology\">Technology</option>\r\n               <option value=\"Sceince\">Sceince</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class=\"form-group m-t-15\">\r\n              <label>Time Duration</label>\r\n              <input class=\"form-control\" placeholder=\"2:00 \" type=\"number\" formControlName=\"duration\">\r\n              <span class=\"md-line\"></span>\r\n            </div>\r\n          </div>\r\n     \r\n        <div class=\"card-block col-sm-12 col-xs-12 col-md-6 \">\r\n          <div class=\"row \">\r\n            <div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n            <label>Answer <span class=\"text-warning\">*</span></label>\r\n            <input class=\"form-control\" placeholder=\"\" type=\"\" formControlName=\"option1\">\r\n            <span class=\"md-line\"></span>\r\n\r\n            </div>\r\n            <div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n              <label class=\"radio-box\">\r\n                <input type=\"radio\" name=\"answer\" value=\"option1\" formControlName=\"answer\" formControlName=\"answer\">\r\n                <span class=\"checkmark\"></span>\r\n              </label>\r\n             </div>\r\n          </div>\r\n          <div class=\"row m-t-15\">\r\n            <div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n\r\n            <label>Answer <span class=\"text-warning\">*</span></label>\r\n            <input class=\"form-control\" placeholder=\"\" type=\"\" formControlName=\"option2\">\r\n            <span class=\"md-line\"></span>\r\n\r\n            </div>\r\n            <div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n              <label class=\"radio-box\">\r\n                <input type=\"radio\" name=\"answer\" value=\"option2\" formControlName=\"answer\">\r\n                <span class=\"checkmark\"></span>\r\n              </label>\r\n             </div>\r\n          </div>\r\n          <div class=\"row m-t-15\">\r\n            <div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n\r\n            <label>Answer <span class=\"text-warning\">*</span></label>\r\n            <input class=\"form-control\" placeholder=\"\" type=\"\" formControlName=\"option3\">\r\n            <span class=\"md-line\"></span>\r\n\r\n            </div>\r\n            <div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n              <label class=\"radio-box\">\r\n                <input type=\"radio\" name=\"answer\" value=\"option3\" formControlName=\"answer\"> \r\n                <span class=\"checkmark\"></span>\r\n              </label>\r\n             </div>\r\n          </div>\r\n          <div class=\"row m-t-15\">\r\n            <div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n            <label>Answer <span class=\"text-warning\">*</span></label>\r\n            <input class=\"form-control\" placeholder=\"\" type=\"\" formControlName=\"option4\">\r\n            <span class=\"md-line\"></span>\r\n\r\n            </div>\r\n            <div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n              <label class=\"radio-box\">\r\n                <input type=\"radio\"  name=\"answer\" value=\"option4\" formControlName=\"answer\">\r\n                <span class=\"checkmark\"></span>\r\n              </label>\r\n             </div>\r\n          </div>\r\n\r\n          <div class=\"row m-t-15\">\r\n            <div class=\"col-sm-12 col-xs-12 col-md-4 m-t-15\">\r\n              <div class=\"checkbox-fade fade-in-primary m-t-15\">\r\n                <label><input type=\"checkbox\"  value=\"1\" formControlName=\"status\">\r\n                <span  class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n                <span class=\"text-inverse\">Active</span></label>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-sm-12 col-xs-12 col-md-8\">\r\n                <div class=\"m-t-15\">\r\n                  <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border m-r-10 create_cancel\">\r\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                    Create\r\n                  </button>\r\n\r\n  \r\n\r\n                  <button  type=\"button\" class=\"btn btn-warning round-border create_cancel\" >Reset</button>\r\n                  </div>\r\n                 </div>\r\n          </div>\r\n        </div>\r\n     </div>\r\n    </form>\r\n\r\n\r\n  <!--\r\n  <div class=\"card-block col-sm-12 col-xs-12 col-md-12 p-t-0\">\r\n    <div class=\"row\">  \r\n      <div class=\"col-sm-12 col-xs-12 col-md-6\">\r\n        <div class=\"row\">  \r\n  <div class=\"checkbox-fade fade-in-primary\">\r\n    <label _ngcontent-iwp-c3=\"\"><input _ngcontent-iwp-c3=\"\" type=\"checkbox\" value=\"\">\r\n    <span  class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n    <span class=\"text-inverse\">Active</span></label>\r\n    </div>\r\n</div>\r\n\r\n  </div>\r\n    \r\n  <div class=\"col-sm-12 col-xs-12 col-md-6\">\r\n   \r\n    <a  class=\"btn btn-primary text-white add_create\" href=\"/category/add-category\">Create</a>\r\n  \r\n    </div>\r\n\r\n</div>\r\n</div>\r\n\r\n-->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n   \r\n   </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question/edit/edit-question.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question/edit/edit-question.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <div _ngcontent-oub-c3=\"\" class=\"row m-b-20\"><div _ngcontent-oub-c3=\"\" class=\"col-md-12\">\r\n     <h3 _ngcontent-oub-c3=\"\" class=\"text-left txt-primary\">Edit Question </h3></div></div>\r\n   \r\n   <hr />\r\n   <div class=\"card\">\r\n     <div class=\"row\">\r\n   <div class=\"card-block col-sm-12 col-xs-12 col-md-6 \">\r\n   \r\n   <div class=\"group\">\r\n    <label >Question Type</label>\r\n    <select  class=\"form-control\" id=\"hello-single\">\r\n      <option value=\"cheese\">Text</option>\r\n      <option value=\"h\">Image</option>\r\n      <option value=\"c\">Video</option>\r\n      \r\n     </select></div>\r\n\r\n     <div class=\"group  files color m-t-15\" style=\"display: block;\">\r\n      <label>Upload Your File </label>\r\n  \r\n        <input type=\"file\" class=\"form-control\" multiple=\"\">\r\n      \r\n      \r\n     </div>\r\n\r\n   <div class=\"group m-t-15\" style=\"display: none;\">\r\n   <label>Enter Question</label>\r\n   <input class=\"form-control\" placeholder=\"Book\" type=\"\">\r\n   <span class=\"md-line\"></span>\r\n  </div>\r\n\r\n   \r\n   <div class=\"group m-t-15\">\r\n     <label >Select Category</label>\r\n     <select  class=\"form-control\" id=\"hello-single\">\r\n       <option value=\"cheese\">History</option>\r\n       <option value=\"h\">Art</option>\r\n       <option value=\"c\">Technology</option>\r\n       <option value=\"h\">Sceince</option>\r\n      </select></div>\r\n\r\n     \r\n\r\n\r\n      \r\n\r\n      <div class=\"form-group m-t-15\">\r\n        <label>Time Duration</label>\r\n        <input class=\"form-control\" placeholder=\"2:00 \" type=\"number\">\r\n        <span class=\"md-line\"></span>\r\n       </div>\r\n   \r\n   \r\n   </div>\r\n   \r\n   <div class=\"card-block col-sm-12 col-xs-12 col-md-6 \">\r\n\r\n    <div class=\"row \">\r\n      <div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n\r\n      <label>Answer <span class=\"text-warning\">*</span></label>\r\n      <input class=\"form-control\" placeholder=\"\" type=\"\">\r\n      <span class=\"md-line\"></span>\r\n\r\n      </div>\r\n      <div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n        <label class=\"radio-box\">\r\n          <input type=\"radio\" name=\"radio\">\r\n          <span class=\"checkmark\"></span>\r\n        </label>\r\n       </div>\r\n    \r\n    </div>\r\n\r\n    \r\n    <div class=\"row m-t-15\">\r\n      <div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n\r\n      <label>Answer <span class=\"text-warning\">*</span></label>\r\n      <input class=\"form-control\" placeholder=\"\" type=\"\">\r\n      <span class=\"md-line\"></span>\r\n\r\n      </div>\r\n      <div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n        <label class=\"radio-box\">\r\n          <input type=\"radio\" checked=\"checked\" name=\"radio\">\r\n          <span class=\"checkmark\"></span>\r\n        </label>\r\n       </div>\r\n    \r\n    </div>\r\n\r\n\r\n    <div class=\"row m-t-15\">\r\n      <div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n\r\n      <label>Answer <span class=\"text-warning\">*</span></label>\r\n      <input class=\"form-control\" placeholder=\"\" type=\"\">\r\n      <span class=\"md-line\"></span>\r\n\r\n      </div>\r\n      <div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n        <label class=\"radio-box\">\r\n          <input type=\"radio\" name=\"radio\">\r\n          <span class=\"checkmark\"></span>\r\n        </label>\r\n       </div>\r\n    \r\n    </div>\r\n\r\n\r\n    <div class=\"row m-t-15\">\r\n      <div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n\r\n      <label>Answer <span class=\"text-warning\">*</span></label>\r\n      <input class=\"form-control\" placeholder=\"\" type=\"\">\r\n      <span class=\"md-line\"></span>\r\n\r\n      </div>\r\n      <div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n        <label class=\"radio-box\">\r\n          <input type=\"radio\"  name=\"radio\">\r\n          <span class=\"checkmark\"></span>\r\n        </label>\r\n       </div>\r\n    \r\n    </div>\r\n\r\n    <div class=\"row m-t-15\">\r\n      <div class=\"col-sm-12 col-xs-12 col-md-4 m-t-15\">\r\n        <div class=\"checkbox-fade fade-in-primary m-t-15\">\r\n          <label><input type=\"checkbox\" value=\"yes\" >\r\n          <span  class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n          <span class=\"text-inverse\">Active</span></label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12 col-xs-12 col-md-8\">\r\n          <div class=\"m-t-15\">\r\n            <button type=\"button\" class=\"btn allam-btn-green text-white round-border m-r-10 create_cancel\" >Save Changes</button>\r\n            <button type=\"button\" class=\"btn btn-warning round-border create_cancel\" >Reset</button>\r\n            </div>\r\n           </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n   </div>\r\n\r\n  </div>\r\n\r\n\r\n  <!--\r\n  <div class=\"card-block col-sm-12 col-xs-12 col-md-12 p-t-0\">\r\n    <div class=\"row\">  \r\n      <div class=\"col-sm-12 col-xs-12 col-md-6\">\r\n        <div class=\"row\">  \r\n  <div class=\"checkbox-fade fade-in-primary\">\r\n    <label _ngcontent-iwp-c3=\"\"><input _ngcontent-iwp-c3=\"\" type=\"checkbox\" value=\"\">\r\n    <span  class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n    <span class=\"text-inverse\">Active</span></label>\r\n    </div>\r\n</div>\r\n\r\n  </div>\r\n    \r\n  <div class=\"col-sm-12 col-xs-12 col-md-6\">\r\n   \r\n    <a  class=\"btn btn-primary text-white add_create\" href=\"/category/add-category\">Create</a>\r\n  \r\n    </div>\r\n\r\n</div>\r\n</div>\r\n\r\n-->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n   \r\n   </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question/list/list-question.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question/list/list-question.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n  \r\n  <div class=\"card\">\r\n  \r\n  <div class=\"card-block\">\r\n   \r\n  <div id=\"autofill_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n  \r\n  <div class=\"row\">\r\n  \r\n  <div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n  <div id=\"autofill_filter\" class=\"dataTables_filter\"><label>Search: <input type=\"search\" class=\"form-control input-sm\" placeholder=\"Search Here\" aria-controls=\"autofill\" [(ngModel)]=\"term\"> </label></div></div>\r\n  \r\n  \r\n  <div class=\"col-xs-12 col-sm-12 col-md-6 text-right\"> \r\n      <div class=\"form-check form-check-inline\">\r\n          <label class=\"radio-box\">\r\n              <input type=\"radio\" name=\"statusSearch\" id=\"statusSearch-1\"  [(ngModel)]=\"term\" value=\"\"  > All         \r\n              <span class=\"checkmark\"></span>\r\n            </label>\r\n  \r\n          </div>\r\n  \r\n          <div class=\"form-check form-check-inline\">\r\n              <label class=\"radio-box\">\r\n              <input type=\"radio\" name=\"statusSearch\" id=\"statusSearch-2\"  [(ngModel)]=\"term\" value=\"1\" > Active\r\n              <span class=\"checkmark\"></span>   \r\n          </label>\r\n          \r\n          \r\n          </div>\r\n  \r\n          <div class=\"form-check form-check-inline\">\r\n              <label class=\"radio-box\">\r\n              <input type=\"radio\" name=\"statusSearch\" id=\"statusSearch-3\" [(ngModel)]=\"term\" value=\"0\" > Inactive\r\n              <span class=\"checkmark\"></span>\r\n          </label>\r\n          </div>\r\n          <a [routerLink]=\"['add-question']\" class=\"btn allam-btn-green text-white\">\r\n              <i _ngcontent-yet-c5=\"\" class=\"icofont icofont-plus\"></i>Add Question\r\n          </a>\r\n  </div>\r\n  \r\n  \r\n  \r\n  \r\n  </div>\r\n  \r\n  \r\n  <div class=\"row\">\r\n  \r\n  <div class=\"col-xs-12 col-sm-12\">\r\n      <div class=\"dt-responsive table-responsive\">\r\n  <!-- {{column}} : {{isDesc}} -->\r\n  <table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n  <thead>\r\n  <tr role=\"row\">\r\n  <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Name: activate to sort column ascending\" style=\"width: 30px;\">No.</th>\r\n  <th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 310px;\" aria-sort=\"descending\" (click)=\"sort('question')\" >Question <i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'question', 'fa-sort-asc': (column == 'question' && isDesc), 'fa-sort-desc': (column == 'question' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n  <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('category')\" >Category <i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'category', 'fa-sort-asc': (column == 'category' && isDesc), 'fa-sort-desc': (column == 'category' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n  <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 80px;\" (click)=\"sort('status')\">Status <i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'status', 'fa-sort-asc': (column == 'status' && isDesc), 'fa-sort-desc': (column == 'status' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n  <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Age: activate to sort column ascending\" style=\"width: 85px;\"> </th>\r\n  \r\n  </thead>\r\n  <tbody> \r\n  <tr role=\"row\" *ngFor=\"let ques of questions | filter:term | orderBy: {property: column, direction: direction} | paginate: { itemsPerPage: config.itemsPerPage, currentPage: p }\r\n               let isOdd=odd;\r\n               let isEven=even\" \r\n        [class.odd]=\"isOdd\" \r\n        [class.even]=\"isEven\" \r\n        [class.selected]=\"ques === selectedQuestion\">\r\n  <td class=\"\">{{ ques.id }}</td>\r\n  <td class=\"sorting_1\"><img  class=\"images\" src=\"http://localhost:3000/{{ques.question_file_url}}\"/></td>\r\n  <td>{{ ques.category_id }}</td>\r\n  <td>\r\n      <button *ngIf=\"ques.status=='0'\" class=\"btn allam-status-btn\" (click)=\"changeStatus(ques)\"> <i class=\"fa fa-times text-warning\"></i> Inactive </button>\r\n      <button *ngIf=\"ques.status=='1'\" class=\"btn allam-status-btn\" (click)=\"changeStatus(ques)\"> <i class=\"fa fa-check allam-txt-green\"></i> Active </button>\r\n  <td class=\"categories\">\r\n  <a [routerLink]=\"['edit-question', ques.id]\" class=\"btn allam-btn allam-btn-green text-white\" title=\"Edit\"><i _ngcontent-yet-c5=\"\" class=\"icofont icofont-edit\"></i></a>\r\n  <button type=\"button\" class=\"btn allam-btn btn-warning\" (click)=\"removeQuestion(ques)\" title=\"Delete\"><i _ngcontent-yet-c5=\"\" class=\"icofont icofont-ui-delete\"></i> </button>\r\n  <!-- <a href=\"\" class=\"btn btn-warning\" (click)=\"removeQuestion(ques)\">\r\n  <i _ngcontent-yet-c5=\"\" class=\"icofont icofont-ui-delete\"></i>Delete\r\n  </a> -->\r\n  </td>\r\n  \r\n  </tr>\r\n  </tbody>\r\n  \r\n  </table>\r\n  \r\n  </div>\r\n  </div></div>\r\n  \r\n  <div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n  <div class=\"dataTables_info\" id=\"autofill_info\" role=\"status\" aria-live=\"polite\">Show Entries\r\n  <label><select name=\"autofill_length\" aria-controls=\"autofill\" class=\"form-control input-sm\"><option value=\"10\">10</option><option value=\"25\">25</option><option value=\"50\">50</option><option value=\"100\">100</option></select> </label>\r\n  </div>\r\n  </div>\r\n  \r\n  <div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n   \r\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>  \r\n\r\n  </div>\r\n  \r\n  </div></div>\r\n  \r\n  </div>\r\n  </div>\r\n  \r\n  \r\n  \r\n  </div>\r\n  </div>");

/***/ }),

/***/ "./src/app/pages/question/add/add-question.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/question/add/add-question.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1ZXN0aW9uL2FkZC9hZGQtcXVlc3Rpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/question/add/add-question.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/question/add/add-question.component.ts ***!
  \**************************************************************/
/*! exports provided: AddQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuestionComponent", function() { return AddQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_pocquestion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/pocquestion.service */ "./src/app/services/pocquestion.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var dom_to_image_more__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dom-to-image-more */ "./node_modules/dom-to-image-more/src/dom-to-image-more.js");
/* harmony import */ var dom_to_image_more__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dom_to_image_more__WEBPACK_IMPORTED_MODULE_7__);








var AddQuestionComponent = /** @class */ (function () {
    function AddQuestionComponent(fb, route, router, pocquestionService, alertService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.pocquestionService = pocquestionService;
        this.alertService = alertService;
        this.title = 'angularckeditor';
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.value = "\n    <p>The RichTextEditor triggers events based on its actions. </p>\n                        <p> The events can be used as an extension point to perform custom operations.</p>\n                        <ul>\n                            <li>created - Triggers when the component is rendered.</li>\n                            <li>change - Triggers only when RTE is blurred and changes are done to the content.</li>\n                            <li>focus - Triggers when RTE is focused in.</li>\n                            <li>blur - Triggers when RTE is focused out.</li>\n                            <li>actionBegin - Triggers before command execution using toolbar items or executeCommand method.</li>\n                            <li>actionComplete - Triggers after command execution using toolbar items or executeCommand method.</li>\n                            <li>destroyed \u2013 Triggers when the component is destroyed.</li>\n                        </ul>";
        this.form = this.fb.group({
            question: [''],
            category: [''],
            status: [''],
            option1: [''],
            option2: [''],
            option3: [''],
            option4: [''],
            answer: [''],
            duration: ['']
        });
    }
    AddQuestionComponent.prototype.getSVG1 = function () {
        var html = document.createElement('div');
        html.innerHTML = this.value;
        dom_to_image_more__WEBPACK_IMPORTED_MODULE_7___default.a.toSvg(html, {})
            .then(function (dataUrl) {
            download(dataUrl, 'question.svg', 'image/svg+xml');
        });
    };
    AddQuestionComponent.prototype.getPNG = function () {
        var node = document.getElementById('my-node');
        dom_to_image_more__WEBPACK_IMPORTED_MODULE_7___default.a.toPng(node)
            .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            //document.body.appendChild(img);
            download(dataUrl, 'question.png', 'image/png+xml');
        })
            .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
    };
    AddQuestionComponent.prototype.ngOnInit = function () {
    };
    AddQuestionComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        if (this.form.value.status) {
            this.form.value.status = "1";
        }
        else {
            this.form.value.status = "0";
        }
        this.form.value.question = this.value;
        this.loading = true;
        this.pocquestionService.addQuestion(this.form.value)
            .subscribe(function (data) {
            if (data['status'] == 200) {
                _this.alertService.pop('success', 'Question added successfully');
                setTimeout(function () { return _this.router.navigate(['/question']); }, 1500);
            }
            else {
                _this.alertService.pop('error', 'Something went wrong. Try again later.');
            }
            _this.loading = false;
            //this.router.navigate(['/question']);
        }, function (error) {
            _this.alertService.pop('error', 'Something went wrong. Try again later.');
            _this.loading = false;
            //this.router.navigate(['/question']);
        });
    };
    AddQuestionComponent.prototype.onChange = function (_a) {
        var editor = _a.editor;
        this.value = editor.getData();
    };
    AddQuestionComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_pocquestion_service__WEBPACK_IMPORTED_MODULE_5__["PocquestionService"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"] }
    ]; };
    AddQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question/add/add-question.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-question.component.scss */ "./src/app/pages/question/add/add-question.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_pocquestion_service__WEBPACK_IMPORTED_MODULE_5__["PocquestionService"], angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"]])
    ], AddQuestionComponent);
    return AddQuestionComponent;
}());



/***/ }),

/***/ "./src/app/pages/question/edit/edit-question.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/question/edit/edit-question.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1ZXN0aW9uL2VkaXQvZWRpdC1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/question/edit/edit-question.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/question/edit/edit-question.component.ts ***!
  \****************************************************************/
/*! exports provided: EditQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditQuestionComponent", function() { return EditQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditQuestionComponent = /** @class */ (function () {
    function EditQuestionComponent() {
    }
    EditQuestionComponent.prototype.ngOnInit = function () {
    };
    EditQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question/edit/edit-question.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-question.component.scss */ "./src/app/pages/question/edit/edit-question.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditQuestionComponent);
    return EditQuestionComponent;
}());



/***/ }),

/***/ "./src/app/pages/question/list/list-question.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/question/list/list-question.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1ZXN0aW9uL2xpc3QvbGlzdC1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/question/list/list-question.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/question/list/list-question.component.ts ***!
  \****************************************************************/
/*! exports provided: ListQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListQuestionComponent", function() { return ListQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/question.service */ "./src/app/services/question.service.ts");
/* harmony import */ var _services_pocquestion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/pocquestion.service */ "./src/app/services/pocquestion.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






//import {OrderBy} from "../../../pipes/orderBy"
//import {Format} from "../../../pipes/format"
//import {OrderrByPipe} from '../../../pipes/orderby.pipe';
var ListQuestionComponent = /** @class */ (function () {
    function ListQuestionComponent(pocquestionService, questionService, router, alertService) {
        this.pocquestionService = pocquestionService;
        this.questionService = questionService;
        this.router = router;
        this.alertService = alertService;
        this.isDesc = false;
        this.column = 'id';
        this.term = "";
        this.alertService = alertService;
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: 0
        };
    }
    ListQuestionComponent.prototype.ngOnInit = function () {
        this.questions = this.getAllQuestion();
    };
    ListQuestionComponent.prototype.getAllQuestion = function () {
        var _this = this;
        this.pocquestionService.getAll().subscribe(function (questions) {
            _this.questions = questions;
            _this.config.totalItems = questions.length;
        });
    };
    ListQuestionComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    /*sort(colName) {
      this.questions.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
      }*/
    ListQuestionComponent.prototype.sort = function (property) {
        console.log(property);
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    };
    ListQuestionComponent.prototype.changeStatus = function (question) {
        if (question.status == "0") {
            question.status = "1";
        }
        else {
            question.status = "0";
        }
        this.questionService.updateQuestion(question);
        console.log('category updated');
    };
    /*  transform(question: Question, searchText: string): any {
        if (searchText) {
            return question.question(item => {
                const filter = Object.keys(item);
                // Array.some() returns true if at least one entry meets the given condition
                return filter.some(
                    key => item[key].toLowerCase().indexOf(searchText.toLowerCase()) !== -1
                )
            });
        }
    
        return question;
    }*/
    ListQuestionComponent.prototype.getQuestions = function () {
        return this.questionService.getQuestionsFromData();
    };
    ListQuestionComponent.prototype.removeQuestion = function (question) {
        if (confirm("Are you sure to delete- " + question.question)) {
            this.questionService.deleteQuestion(question);
        }
    };
    ListQuestionComponent.ctorParameters = function () { return [
        { type: _services_pocquestion_service__WEBPACK_IMPORTED_MODULE_3__["PocquestionService"] },
        { type: _services_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }
    ]; };
    ListQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question/list/list-question.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-question.component.scss */ "./src/app/pages/question/list/list-question.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_pocquestion_service__WEBPACK_IMPORTED_MODULE_3__["PocquestionService"], _services_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]])
    ], ListQuestionComponent);
    return ListQuestionComponent;
}());



/***/ }),

/***/ "./src/app/pages/question/question-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/question/question-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: QuestionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionRoutingModule", function() { return QuestionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_question_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list-question.component */ "./src/app/pages/question/list/list-question.component.ts");
/* harmony import */ var _add_add_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add-question.component */ "./src/app/pages/question/add/add-question.component.ts");
/* harmony import */ var _edit_edit_question_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit-question.component */ "./src/app/pages/question/edit/edit-question.component.ts");






var routes = [
    {
        path: '',
        component: _list_list_question_component__WEBPACK_IMPORTED_MODULE_3__["ListQuestionComponent"],
        data: {
            breadcrumb: 'question',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'add-question',
        component: _add_add_question_component__WEBPACK_IMPORTED_MODULE_4__["AddQuestionComponent"],
        data: {
            breadcrumb: 'Add question',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'add question',
            status: false
        }
    },
    {
        path: 'edit-question/:questionId',
        component: _edit_edit_question_component__WEBPACK_IMPORTED_MODULE_5__["EditQuestionComponent"],
        data: {
            breadcrumb: 'Edit question',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'Edit question',
            status: false
        }
    }
];
var QuestionRoutingModule = /** @class */ (function () {
    function QuestionRoutingModule() {
    }
    QuestionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], QuestionRoutingModule);
    return QuestionRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/question/question.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/question/question.module.ts ***!
  \***************************************************/
/*! exports provided: QuestionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionModule", function() { return QuestionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _question_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./question-routing.module */ "./src/app/pages/question/question-routing.module.ts");
/* harmony import */ var _list_list_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list-question.component */ "./src/app/pages/question/list/list-question.component.ts");
/* harmony import */ var _add_add_question_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add-question.component */ "./src/app/pages/question/add/add-question.component.ts");
/* harmony import */ var _edit_edit_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit-question.component */ "./src/app/pages/question/edit/edit-question.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @syncfusion/ej2-angular-richtexteditor */ "./node_modules/@syncfusion/ej2-angular-richtexteditor/index.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");








//import { BrowserModule } from '@angular/platform-browser';




//import {OrderrByPipe} from '../../pipes/orderby.pipe';
//import {Format} from "../../pipes/format";



var QuestionModule = /** @class */ (function () {
    function QuestionModule() {
    }
    QuestionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _question_routing_module__WEBPACK_IMPORTED_MODULE_3__["QuestionRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"],
                _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_12__["RichTextEditorAllModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__["CKEditorModule"]
            ],
            declarations: [
                _list_list_question_component__WEBPACK_IMPORTED_MODULE_4__["ListQuestionComponent"],
                _add_add_question_component__WEBPACK_IMPORTED_MODULE_5__["AddQuestionComponent"],
                _edit_edit_question_component__WEBPACK_IMPORTED_MODULE_6__["EditQuestionComponent"]
            ]
        })
    ], QuestionModule);
    return QuestionModule;
}());



/***/ }),

/***/ "./src/app/services/pocquestion.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/pocquestion.service.ts ***!
  \*************************************************/
/*! exports provided: PocquestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PocquestionService", function() { return PocquestionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var PocquestionService = /** @class */ (function () {
    function PocquestionService(http) {
        this.http = http;
    }
    PocquestionService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'pocquestion/all_question');
    };
    PocquestionService.prototype.addQuestion = function (question) {
        console.log('--before servirprint--');
        console.log(question);
        console.log('--after service print');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'pocquestion/add_question', question);
    };
    PocquestionService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PocquestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PocquestionService);
    return PocquestionService;
}());



/***/ }),

/***/ "./src/app/services/question.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/question.service.ts ***!
  \**********************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuestionService = /** @class */ (function () {
    function QuestionService() {
        this.uquestion = [
            {
                id: 1,
                question_type: 'text',
                image: '',
                question: 'How can you created rounded corners using CSS3?',
                category: 'CSS',
                answer1: 'test test',
                answer2: 'ee',
                answer3: 'fff',
                status: '1',
            },
            {
                id: 2,
                question_type: 'text',
                image: '',
                question: 'Why is keyword research important?',
                category: 'Digital Marketing',
                answer1: 'test test',
                answer2: 'fff',
                answer3: 'ggg',
                status: '0',
            },
            {
                id: 3,
                question_type: 'text',
                image: '',
                question: 'How can you created rounded corners using CSS3?',
                category: 'CSS',
                answer1: 'test test',
                answer2: 'test',
                answer3: '2 test',
                status: '1',
            },
            {
                id: 4,
                question_type: 'text',
                image: '',
                question: 'Why is keyword research important?',
                category: 'Digital Marketing',
                answer1: 'test test',
                answer2: 'hhh',
                answer3: 'jjj',
                status: '1',
            },
            {
                id: 5,
                question_type: 'text',
                image: '',
                question: 'Why is keyword research important?',
                category: 'Digital Marketing',
                answer1: 'test test',
                answer2: 'vvvv',
                answer3: 'bbbb',
                status: '1',
            },
            {
                id: 6,
                question_type: 'text',
                image: '',
                question: 'What is keyword research?',
                category: 'Digital Marketing',
                answer1: 'test test',
                answer2: 'vvvv',
                answer3: 'bbbb',
                status: '1',
            },
        ];
    }
    QuestionService.prototype.getQuestionsFromData = function () {
        return this.uquestion;
    };
    QuestionService.prototype.showEditQuestion = function (id) {
        return this.uquestion.find(function (c) { return c.id == id; });
    };
    QuestionService.prototype.addQuestion = function (question) {
        question.id = this.uquestion.length + 1;
        this.uquestion.unshift(question);
    };
    QuestionService.prototype.updateQuestion = function (question) {
        var index = this.uquestion.findIndex(function (u) { return question.id === u.id; });
        this.uquestion[index] = question;
    };
    QuestionService.prototype.deleteQuestion = function (question) {
        this.uquestion.splice(this.uquestion.indexOf(question), 1);
    };
    QuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuestionService);
    return QuestionService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-question-question-module.js.map