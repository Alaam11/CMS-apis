(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-default-dashboard-default-module"],{

/***/ "./node_modules/angular2-chartjs/dist/chart.component.js":
/*!***************************************************************!*\
  !*** ./node_modules/angular2-chartjs/dist/chart.component.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ChartComponent = (function () {
    function ChartComponent(elementRef, ngZone) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.clickCanvas = new core_1.EventEmitter();
        this.clickDataset = new core_1.EventEmitter();
        this.clickElements = new core_1.EventEmitter();
        this.clickElement = new core_1.EventEmitter();
    }
    ChartComponent.prototype.ngOnInit = function () {
        this.create();
    };
    ChartComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.chart) {
            if (changes['type'] || changes['options']) {
                this.create();
            }
            else if (changes['data']) {
                var currentValue_1 = changes['data'].currentValue;
                ['datasets', 'labels', 'xLabels', 'yLabels'].forEach(function (property) {
                    _this.chart.data[property] = currentValue_1[property];
                });
                this.chart.update();
            }
        }
    };
    ChartComponent.prototype.create = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            if (_this.canvas) {
                _this.elementRef.nativeElement.removeChild(_this.canvas);
            }
            _this.canvas = document.createElement('canvas');
            _this.elementRef.nativeElement.appendChild(_this.canvas);
            _this.chart = new Chart(_this.canvas, {
                type: _this.type,
                data: _this.data,
                options: _this.options
            });
            _this.canvas.onclick = function (e) {
                _this.ngZone.run(function () {
                    _this.clickCanvas.next(e);
                    if (_this.clickDataset.observers.length) {
                        _this.clickDataset.next(_this.chart.getDatasetAtEvent(e));
                    }
                    if (_this.clickElements.observers.length) {
                        _this.clickElements.next(_this.chart.getElementsAtEvent(e));
                    }
                    if (_this.clickElement.observers.length) {
                        _this.clickElement.next(_this.chart.getElementAtEvent(e));
                    }
                });
            };
        });
    };
    ChartComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'chart',
                    template: '',
                    styles: [':host { display: block; }']
                },] },
    ];
    ChartComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
    ]; };
    ChartComponent.propDecorators = {
        'type': [{ type: core_1.Input },],
        'data': [{ type: core_1.Input },],
        'options': [{ type: core_1.Input },],
        'clickCanvas': [{ type: core_1.Output },],
        'clickDataset': [{ type: core_1.Output },],
        'clickElements': [{ type: core_1.Output },],
        'clickElement': [{ type: core_1.Output },],
    };
    return ChartComponent;
}());
exports.ChartComponent = ChartComponent;
//# sourceMappingURL=chart.component.js.map

/***/ }),

/***/ "./node_modules/angular2-chartjs/dist/chart.module.js":
/*!************************************************************!*\
  !*** ./node_modules/angular2-chartjs/dist/chart.module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (typeof window === 'object') {
    __webpack_require__(/*! chart.js */ "./node_modules/angular2-chartjs/node_modules/chart.js/dist/Chart.js");
}
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var chart_component_1 = __webpack_require__(/*! ./chart.component */ "./node_modules/angular2-chartjs/dist/chart.component.js");
var ChartModule = (function () {
    function ChartModule() {
    }
    ChartModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [chart_component_1.ChartComponent],
                    exports: [chart_component_1.ChartComponent]
                },] },
    ];
    ChartModule.ctorParameters = function () { return []; };
    return ChartModule;
}());
exports.ChartModule = ChartModule;
//# sourceMappingURL=chart.module.js.map

/***/ }),

/***/ "./node_modules/angular2-chartjs/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/angular2-chartjs/dist/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./chart.component */ "./node_modules/angular2-chartjs/dist/chart.component.js"));
__export(__webpack_require__(/*! ./chart.module */ "./node_modules/angular2-chartjs/dist/chart.module.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular2-chartjs/node_modules/chart.js/dist/Chart.js":
/*!***************************************************************************!*\
  !*** ./node_modules/angular2-chartjs/node_modules/chart.js/dist/Chart.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chart.js v2.9.4
 * https://www.chartjs.org
 * (c) 2020 Chart.js Contributors
 * Released under the MIT License
 */
(function (global, factory) {
 true ? module.exports = factory(function() { try { return __webpack_require__(/*! moment */ "./node_modules/moment/moment.js"); } catch(e) { } }()) :
undefined;
}(this, (function (moment) { 'use strict';

moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

var colorName = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

var conversions = createCommonjsModule(function (module) {
/* MIT license */


// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in colorName) {
	if (colorName.hasOwnProperty(key)) {
		reverseKeywords[colorName[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var rdif;
	var gdif;
	var bdif;
	var h;
	var s;

	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var v = Math.max(r, g, b);
	var diff = v - Math.min(r, g, b);
	var diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}
		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in colorName) {
		if (colorName.hasOwnProperty(keyword)) {
			var value = colorName[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return colorName[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};
});
var conversions_1 = conversions.rgb;
var conversions_2 = conversions.hsl;
var conversions_3 = conversions.hsv;
var conversions_4 = conversions.hwb;
var conversions_5 = conversions.cmyk;
var conversions_6 = conversions.xyz;
var conversions_7 = conversions.lab;
var conversions_8 = conversions.lch;
var conversions_9 = conversions.hex;
var conversions_10 = conversions.keyword;
var conversions_11 = conversions.ansi16;
var conversions_12 = conversions.ansi256;
var conversions_13 = conversions.hcg;
var conversions_14 = conversions.apple;
var conversions_15 = conversions.gray;

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	var graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	var models = Object.keys(conversions);

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

var route = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

var colorConvert = convert;

var colorName$1 = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

/* MIT license */


var colorString = {
   getRgba: getRgba,
   getHsla: getHsla,
   getRgb: getRgb,
   getHsl: getHsl,
   getHwb: getHwb,
   getAlpha: getAlpha,

   hexString: hexString,
   rgbString: rgbString,
   rgbaString: rgbaString,
   percentString: percentString,
   percentaString: percentaString,
   hslString: hslString,
   hslaString: hslaString,
   hwbString: hwbString,
   keyword: keyword
};

function getRgba(string) {
   if (!string) {
      return;
   }
   var abbr =  /^#([a-fA-F0-9]{3,4})$/i,
       hex =  /^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i,
       rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
       per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
       keyword = /(\w+)/;

   var rgb = [0, 0, 0],
       a = 1,
       match = string.match(abbr),
       hexAlpha = "";
   if (match) {
      match = match[1];
      hexAlpha = match[3];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i] + match[i], 16);
      }
      if (hexAlpha) {
         a = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
      }
   }
   else if (match = string.match(hex)) {
      hexAlpha = match[2];
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
      }
      if (hexAlpha) {
         a = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
      }
   }
   else if (match = string.match(rgba)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i + 1]);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(per)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(keyword)) {
      if (match[1] == "transparent") {
         return [0, 0, 0, 0];
      }
      rgb = colorName$1[match[1]];
      if (!rgb) {
         return;
      }
   }

   for (var i = 0; i < rgb.length; i++) {
      rgb[i] = scale(rgb[i], 0, 255);
   }
   if (!a && a != 0) {
      a = 1;
   }
   else {
      a = scale(a, 0, 1);
   }
   rgb[3] = a;
   return rgb;
}

function getHsla(string) {
   if (!string) {
      return;
   }
   var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hsl);
   if (match) {
      var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          s = scale(parseFloat(match[2]), 0, 100),
          l = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
   }
}

function getHwb(string) {
   if (!string) {
      return;
   }
   var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hwb);
   if (match) {
    var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          w = scale(parseFloat(match[2]), 0, 100),
          b = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
   }
}

function getRgb(string) {
   var rgba = getRgba(string);
   return rgba && rgba.slice(0, 3);
}

function getHsl(string) {
  var hsla = getHsla(string);
  return hsla && hsla.slice(0, 3);
}

function getAlpha(string) {
   var vals = getRgba(string);
   if (vals) {
      return vals[3];
   }
   else if (vals = getHsla(string)) {
      return vals[3];
   }
   else if (vals = getHwb(string)) {
      return vals[3];
   }
}

// generators
function hexString(rgba, a) {
   var a = (a !== undefined && rgba.length === 3) ? a : rgba[3];
   return "#" + hexDouble(rgba[0]) 
              + hexDouble(rgba[1])
              + hexDouble(rgba[2])
              + (
                 (a >= 0 && a < 1)
                 ? hexDouble(Math.round(a * 255))
                 : ""
              );
}

function rgbString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return rgbaString(rgba, alpha);
   }
   return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
}

function rgbaString(rgba, alpha) {
   if (alpha === undefined) {
      alpha = (rgba[3] !== undefined ? rgba[3] : 1);
   }
   return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2]
           + ", " + alpha + ")";
}

function percentString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return percentaString(rgba, alpha);
   }
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);

   return "rgb(" + r + "%, " + g + "%, " + b + "%)";
}

function percentaString(rgba, alpha) {
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);
   return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
}

function hslString(hsla, alpha) {
   if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {
      return hslaString(hsla, alpha);
   }
   return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
}

function hslaString(hsla, alpha) {
   if (alpha === undefined) {
      alpha = (hsla[3] !== undefined ? hsla[3] : 1);
   }
   return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, "
           + alpha + ")";
}

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
function hwbString(hwb, alpha) {
   if (alpha === undefined) {
      alpha = (hwb[3] !== undefined ? hwb[3] : 1);
   }
   return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%"
           + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
}

function keyword(rgb) {
  return reverseNames[rgb.slice(0, 3)];
}

// helpers
function scale(num, min, max) {
   return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
  var str = num.toString(16).toUpperCase();
  return (str.length < 2) ? "0" + str : str;
}


//create a list of reverse color names
var reverseNames = {};
for (var name in colorName$1) {
   reverseNames[colorName$1[name]] = name;
}

/* MIT license */



var Color = function (obj) {
	if (obj instanceof Color) {
		return obj;
	}
	if (!(this instanceof Color)) {
		return new Color(obj);
	}

	this.valid = false;
	this.values = {
		rgb: [0, 0, 0],
		hsl: [0, 0, 0],
		hsv: [0, 0, 0],
		hwb: [0, 0, 0],
		cmyk: [0, 0, 0, 0],
		alpha: 1
	};

	// parse Color() argument
	var vals;
	if (typeof obj === 'string') {
		vals = colorString.getRgba(obj);
		if (vals) {
			this.setValues('rgb', vals);
		} else if (vals = colorString.getHsla(obj)) {
			this.setValues('hsl', vals);
		} else if (vals = colorString.getHwb(obj)) {
			this.setValues('hwb', vals);
		}
	} else if (typeof obj === 'object') {
		vals = obj;
		if (vals.r !== undefined || vals.red !== undefined) {
			this.setValues('rgb', vals);
		} else if (vals.l !== undefined || vals.lightness !== undefined) {
			this.setValues('hsl', vals);
		} else if (vals.v !== undefined || vals.value !== undefined) {
			this.setValues('hsv', vals);
		} else if (vals.w !== undefined || vals.whiteness !== undefined) {
			this.setValues('hwb', vals);
		} else if (vals.c !== undefined || vals.cyan !== undefined) {
			this.setValues('cmyk', vals);
		}
	}
};

Color.prototype = {
	isValid: function () {
		return this.valid;
	},
	rgb: function () {
		return this.setSpace('rgb', arguments);
	},
	hsl: function () {
		return this.setSpace('hsl', arguments);
	},
	hsv: function () {
		return this.setSpace('hsv', arguments);
	},
	hwb: function () {
		return this.setSpace('hwb', arguments);
	},
	cmyk: function () {
		return this.setSpace('cmyk', arguments);
	},

	rgbArray: function () {
		return this.values.rgb;
	},
	hslArray: function () {
		return this.values.hsl;
	},
	hsvArray: function () {
		return this.values.hsv;
	},
	hwbArray: function () {
		var values = this.values;
		if (values.alpha !== 1) {
			return values.hwb.concat([values.alpha]);
		}
		return values.hwb;
	},
	cmykArray: function () {
		return this.values.cmyk;
	},
	rgbaArray: function () {
		var values = this.values;
		return values.rgb.concat([values.alpha]);
	},
	hslaArray: function () {
		var values = this.values;
		return values.hsl.concat([values.alpha]);
	},
	alpha: function (val) {
		if (val === undefined) {
			return this.values.alpha;
		}
		this.setValues('alpha', val);
		return this;
	},

	red: function (val) {
		return this.setChannel('rgb', 0, val);
	},
	green: function (val) {
		return this.setChannel('rgb', 1, val);
	},
	blue: function (val) {
		return this.setChannel('rgb', 2, val);
	},
	hue: function (val) {
		if (val) {
			val %= 360;
			val = val < 0 ? 360 + val : val;
		}
		return this.setChannel('hsl', 0, val);
	},
	saturation: function (val) {
		return this.setChannel('hsl', 1, val);
	},
	lightness: function (val) {
		return this.setChannel('hsl', 2, val);
	},
	saturationv: function (val) {
		return this.setChannel('hsv', 1, val);
	},
	whiteness: function (val) {
		return this.setChannel('hwb', 1, val);
	},
	blackness: function (val) {
		return this.setChannel('hwb', 2, val);
	},
	value: function (val) {
		return this.setChannel('hsv', 2, val);
	},
	cyan: function (val) {
		return this.setChannel('cmyk', 0, val);
	},
	magenta: function (val) {
		return this.setChannel('cmyk', 1, val);
	},
	yellow: function (val) {
		return this.setChannel('cmyk', 2, val);
	},
	black: function (val) {
		return this.setChannel('cmyk', 3, val);
	},

	hexString: function () {
		return colorString.hexString(this.values.rgb);
	},
	rgbString: function () {
		return colorString.rgbString(this.values.rgb, this.values.alpha);
	},
	rgbaString: function () {
		return colorString.rgbaString(this.values.rgb, this.values.alpha);
	},
	percentString: function () {
		return colorString.percentString(this.values.rgb, this.values.alpha);
	},
	hslString: function () {
		return colorString.hslString(this.values.hsl, this.values.alpha);
	},
	hslaString: function () {
		return colorString.hslaString(this.values.hsl, this.values.alpha);
	},
	hwbString: function () {
		return colorString.hwbString(this.values.hwb, this.values.alpha);
	},
	keyword: function () {
		return colorString.keyword(this.values.rgb, this.values.alpha);
	},

	rgbNumber: function () {
		var rgb = this.values.rgb;
		return (rgb[0] << 16) | (rgb[1] << 8) | rgb[2];
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.values.rgb;
		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}
		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();
		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}
		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	dark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.values.rgb;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	light: function () {
		return !this.dark();
	},

	negate: function () {
		var rgb = [];
		for (var i = 0; i < 3; i++) {
			rgb[i] = 255 - this.values.rgb[i];
		}
		this.setValues('rgb', rgb);
		return this;
	},

	lighten: function (ratio) {
		var hsl = this.values.hsl;
		hsl[2] += hsl[2] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	darken: function (ratio) {
		var hsl = this.values.hsl;
		hsl[2] -= hsl[2] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	saturate: function (ratio) {
		var hsl = this.values.hsl;
		hsl[1] += hsl[1] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	desaturate: function (ratio) {
		var hsl = this.values.hsl;
		hsl[1] -= hsl[1] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	whiten: function (ratio) {
		var hwb = this.values.hwb;
		hwb[1] += hwb[1] * ratio;
		this.setValues('hwb', hwb);
		return this;
	},

	blacken: function (ratio) {
		var hwb = this.values.hwb;
		hwb[2] += hwb[2] * ratio;
		this.setValues('hwb', hwb);
		return this;
	},

	greyscale: function () {
		var rgb = this.values.rgb;
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		this.setValues('rgb', [val, val, val]);
		return this;
	},

	clearer: function (ratio) {
		var alpha = this.values.alpha;
		this.setValues('alpha', alpha - (alpha * ratio));
		return this;
	},

	opaquer: function (ratio) {
		var alpha = this.values.alpha;
		this.setValues('alpha', alpha + (alpha * ratio));
		return this;
	},

	rotate: function (degrees) {
		var hsl = this.values.hsl;
		var hue = (hsl[0] + degrees) % 360;
		hsl[0] = hue < 0 ? 360 + hue : hue;
		this.setValues('hsl', hsl);
		return this;
	},

	/**
	 * Ported from sass implementation in C
	 * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
	 */
	mix: function (mixinColor, weight) {
		var color1 = this;
		var color2 = mixinColor;
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return this
			.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue()
			)
			.alpha(color1.alpha() * p + color2.alpha() * (1 - p));
	},

	toJSON: function () {
		return this.rgb();
	},

	clone: function () {
		// NOTE(SB): using node-clone creates a dependency to Buffer when using browserify,
		// making the final build way to big to embed in Chart.js. So let's do it manually,
		// assuming that values to clone are 1 dimension arrays containing only numbers,
		// except 'alpha' which is a number.
		var result = new Color();
		var source = this.values;
		var target = result.values;
		var value, type;

		for (var prop in source) {
			if (source.hasOwnProperty(prop)) {
				value = source[prop];
				type = ({}).toString.call(value);
				if (type === '[object Array]') {
					target[prop] = value.slice(0);
				} else if (type === '[object Number]') {
					target[prop] = value;
				} else {
					console.error('unexpected color value:', value);
				}
			}
		}

		return result;
	}
};

Color.prototype.spaces = {
	rgb: ['red', 'green', 'blue'],
	hsl: ['hue', 'saturation', 'lightness'],
	hsv: ['hue', 'saturation', 'value'],
	hwb: ['hue', 'whiteness', 'blackness'],
	cmyk: ['cyan', 'magenta', 'yellow', 'black']
};

Color.prototype.maxes = {
	rgb: [255, 255, 255],
	hsl: [360, 100, 100],
	hsv: [360, 100, 100],
	hwb: [360, 100, 100],
	cmyk: [100, 100, 100, 100]
};

Color.prototype.getValues = function (space) {
	var values = this.values;
	var vals = {};

	for (var i = 0; i < space.length; i++) {
		vals[space.charAt(i)] = values[space][i];
	}

	if (values.alpha !== 1) {
		vals.a = values.alpha;
	}

	// {r: 255, g: 255, b: 255, a: 0.4}
	return vals;
};

Color.prototype.setValues = function (space, vals) {
	var values = this.values;
	var spaces = this.spaces;
	var maxes = this.maxes;
	var alpha = 1;
	var i;

	this.valid = true;

	if (space === 'alpha') {
		alpha = vals;
	} else if (vals.length) {
		// [10, 10, 10]
		values[space] = vals.slice(0, space.length);
		alpha = vals[space.length];
	} else if (vals[space.charAt(0)] !== undefined) {
		// {r: 10, g: 10, b: 10}
		for (i = 0; i < space.length; i++) {
			values[space][i] = vals[space.charAt(i)];
		}

		alpha = vals.a;
	} else if (vals[spaces[space][0]] !== undefined) {
		// {red: 10, green: 10, blue: 10}
		var chans = spaces[space];

		for (i = 0; i < space.length; i++) {
			values[space][i] = vals[chans[i]];
		}

		alpha = vals.alpha;
	}

	values.alpha = Math.max(0, Math.min(1, (alpha === undefined ? values.alpha : alpha)));

	if (space === 'alpha') {
		return false;
	}

	var capped;

	// cap values of the space prior converting all values
	for (i = 0; i < space.length; i++) {
		capped = Math.max(0, Math.min(maxes[space][i], values[space][i]));
		values[space][i] = Math.round(capped);
	}

	// convert to all the other color spaces
	for (var sname in spaces) {
		if (sname !== space) {
			values[sname] = colorConvert[space][sname](values[space]);
		}
	}

	return true;
};

Color.prototype.setSpace = function (space, args) {
	var vals = args[0];

	if (vals === undefined) {
		// color.rgb()
		return this.getValues(space);
	}

	// color.rgb(10, 10, 10)
	if (typeof vals === 'number') {
		vals = Array.prototype.slice.call(args);
	}

	this.setValues(space, vals);
	return this;
};

Color.prototype.setChannel = function (space, index, val) {
	var svalues = this.values[space];
	if (val === undefined) {
		// color.red()
		return svalues[index];
	} else if (val === svalues[index]) {
		// color.red(color.red())
		return this;
	}

	// color.red(100)
	svalues[index] = val;
	this.setValues(space, svalues);

	return this;
};

if (typeof window !== 'undefined') {
	window.Color = Color;
}

var chartjsColor = Color;

function isValidKey(key) {
	return ['__proto__', 'prototype', 'constructor'].indexOf(key) === -1;
}

/**
 * @namespace Chart.helpers
 */
var helpers = {
	/**
	 * An empty function that can be used, for example, for optional callback.
	 */
	noop: function() {},

	/**
	 * Returns a unique id, sequentially generated from a global variable.
	 * @returns {number}
	 * @function
	 */
	uid: (function() {
		var id = 0;
		return function() {
			return id++;
		};
	}()),

	/**
	 * Returns true if `value` is neither null nor undefined, else returns false.
	 * @param {*} value - The value to test.
	 * @returns {boolean}
	 * @since 2.7.0
	 */
	isNullOrUndef: function(value) {
		return value === null || typeof value === 'undefined';
	},

	/**
	 * Returns true if `value` is an array (including typed arrays), else returns false.
	 * @param {*} value - The value to test.
	 * @returns {boolean}
	 * @function
	 */
	isArray: function(value) {
		if (Array.isArray && Array.isArray(value)) {
			return true;
		}
		var type = Object.prototype.toString.call(value);
		if (type.substr(0, 7) === '[object' && type.substr(-6) === 'Array]') {
			return true;
		}
		return false;
	},

	/**
	 * Returns true if `value` is an object (excluding null), else returns false.
	 * @param {*} value - The value to test.
	 * @returns {boolean}
	 * @since 2.7.0
	 */
	isObject: function(value) {
		return value !== null && Object.prototype.toString.call(value) === '[object Object]';
	},

	/**
	 * Returns true if `value` is a finite number, else returns false
	 * @param {*} value  - The value to test.
	 * @returns {boolean}
	 */
	isFinite: function(value) {
		return (typeof value === 'number' || value instanceof Number) && isFinite(value);
	},

	/**
	 * Returns `value` if defined, else returns `defaultValue`.
	 * @param {*} value - The value to return if defined.
	 * @param {*} defaultValue - The value to return if `value` is undefined.
	 * @returns {*}
	 */
	valueOrDefault: function(value, defaultValue) {
		return typeof value === 'undefined' ? defaultValue : value;
	},

	/**
	 * Returns value at the given `index` in array if defined, else returns `defaultValue`.
	 * @param {Array} value - The array to lookup for value at `index`.
	 * @param {number} index - The index in `value` to lookup for value.
	 * @param {*} defaultValue - The value to return if `value[index]` is undefined.
	 * @returns {*}
	 */
	valueAtIndexOrDefault: function(value, index, defaultValue) {
		return helpers.valueOrDefault(helpers.isArray(value) ? value[index] : value, defaultValue);
	},

	/**
	 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
	 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
	 * @param {function} fn - The function to call.
	 * @param {Array|undefined|null} args - The arguments with which `fn` should be called.
	 * @param {object} [thisArg] - The value of `this` provided for the call to `fn`.
	 * @returns {*}
	 */
	callback: function(fn, args, thisArg) {
		if (fn && typeof fn.call === 'function') {
			return fn.apply(thisArg, args);
		}
	},

	/**
	 * Note(SB) for performance sake, this method should only be used when loopable type
	 * is unknown or in none intensive code (not called often and small loopable). Else
	 * it's preferable to use a regular for() loop and save extra function calls.
	 * @param {object|Array} loopable - The object or array to be iterated.
	 * @param {function} fn - The function to call for each item.
	 * @param {object} [thisArg] - The value of `this` provided for the call to `fn`.
	 * @param {boolean} [reverse] - If true, iterates backward on the loopable.
	 */
	each: function(loopable, fn, thisArg, reverse) {
		var i, len, keys;
		if (helpers.isArray(loopable)) {
			len = loopable.length;
			if (reverse) {
				for (i = len - 1; i >= 0; i--) {
					fn.call(thisArg, loopable[i], i);
				}
			} else {
				for (i = 0; i < len; i++) {
					fn.call(thisArg, loopable[i], i);
				}
			}
		} else if (helpers.isObject(loopable)) {
			keys = Object.keys(loopable);
			len = keys.length;
			for (i = 0; i < len; i++) {
				fn.call(thisArg, loopable[keys[i]], keys[i]);
			}
		}
	},

	/**
	 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
	 * @see https://stackoverflow.com/a/14853974
	 * @param {Array} a0 - The array to compare
	 * @param {Array} a1 - The array to compare
	 * @returns {boolean}
	 */
	arrayEquals: function(a0, a1) {
		var i, ilen, v0, v1;

		if (!a0 || !a1 || a0.length !== a1.length) {
			return false;
		}

		for (i = 0, ilen = a0.length; i < ilen; ++i) {
			v0 = a0[i];
			v1 = a1[i];

			if (v0 instanceof Array && v1 instanceof Array) {
				if (!helpers.arrayEquals(v0, v1)) {
					return false;
				}
			} else if (v0 !== v1) {
				// NOTE: two different object instances will never be equal: {x:20} != {x:20}
				return false;
			}
		}

		return true;
	},

	/**
	 * Returns a deep copy of `source` without keeping references on objects and arrays.
	 * @param {*} source - The value to clone.
	 * @returns {*}
	 */
	clone: function(source) {
		if (helpers.isArray(source)) {
			return source.map(helpers.clone);
		}

		if (helpers.isObject(source)) {
			var target = Object.create(source);
			var keys = Object.keys(source);
			var klen = keys.length;
			var k = 0;

			for (; k < klen; ++k) {
				target[keys[k]] = helpers.clone(source[keys[k]]);
			}

			return target;
		}

		return source;
	},

	/**
	 * The default merger when Chart.helpers.merge is called without merger option.
	 * Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
	 * @private
	 */
	_merger: function(key, target, source, options) {
		if (!isValidKey(key)) {
			// We want to ensure we do not copy prototypes over
			// as this can pollute global namespaces
			return;
		}

		var tval = target[key];
		var sval = source[key];

		if (helpers.isObject(tval) && helpers.isObject(sval)) {
			helpers.merge(tval, sval, options);
		} else {
			target[key] = helpers.clone(sval);
		}
	},

	/**
	 * Merges source[key] in target[key] only if target[key] is undefined.
	 * @private
	 */
	_mergerIf: function(key, target, source) {
		if (!isValidKey(key)) {
			// We want to ensure we do not copy prototypes over
			// as this can pollute global namespaces
			return;
		}

		var tval = target[key];
		var sval = source[key];

		if (helpers.isObject(tval) && helpers.isObject(sval)) {
			helpers.mergeIf(tval, sval);
		} else if (!target.hasOwnProperty(key)) {
			target[key] = helpers.clone(sval);
		}
	},

	/**
	 * Recursively deep copies `source` properties into `target` with the given `options`.
	 * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
	 * @param {object} target - The target object in which all sources are merged into.
	 * @param {object|object[]} source - Object(s) to merge into `target`.
	 * @param {object} [options] - Merging options:
	 * @param {function} [options.merger] - The merge method (key, target, source, options)
	 * @returns {object} The `target` object.
	 */
	merge: function(target, source, options) {
		var sources = helpers.isArray(source) ? source : [source];
		var ilen = sources.length;
		var merge, i, keys, klen, k;

		if (!helpers.isObject(target)) {
			return target;
		}

		options = options || {};
		merge = options.merger || helpers._merger;

		for (i = 0; i < ilen; ++i) {
			source = sources[i];
			if (!helpers.isObject(source)) {
				continue;
			}

			keys = Object.keys(source);
			for (k = 0, klen = keys.length; k < klen; ++k) {
				merge(keys[k], target, source, options);
			}
		}

		return target;
	},

	/**
	 * Recursively deep copies `source` properties into `target` *only* if not defined in target.
	 * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
	 * @param {object} target - The target object in which all sources are merged into.
	 * @param {object|object[]} source - Object(s) to merge into `target`.
	 * @returns {object} The `target` object.
	 */
	mergeIf: function(target, source) {
		return helpers.merge(target, source, {merger: helpers._mergerIf});
	},

	/**
	 * Applies the contents of two or more objects together into the first object.
	 * @param {object} target - The target object in which all objects are merged into.
	 * @param {object} arg1 - Object containing additional properties to merge in target.
	 * @param {object} argN - Additional objects containing properties to merge in target.
	 * @returns {object} The `target` object.
	 */
	extend: Object.assign || function(target) {
		return helpers.merge(target, [].slice.call(arguments, 1), {
			merger: function(key, dst, src) {
				dst[key] = src[key];
			}
		});
	},

	/**
	 * Basic javascript inheritance based on the model created in Backbone.js
	 */
	inherits: function(extensions) {
		var me = this;
		var ChartElement = (extensions && extensions.hasOwnProperty('constructor')) ? extensions.constructor : function() {
			return me.apply(this, arguments);
		};

		var Surrogate = function() {
			this.constructor = ChartElement;
		};

		Surrogate.prototype = me.prototype;
		ChartElement.prototype = new Surrogate();
		ChartElement.extend = helpers.inherits;

		if (extensions) {
			helpers.extend(ChartElement.prototype, extensions);
		}

		ChartElement.__super__ = me.prototype;
		return ChartElement;
	},

	_deprecated: function(scope, value, previous, current) {
		if (value !== undefined) {
			console.warn(scope + ': "' + previous +
				'" is deprecated. Please use "' + current + '" instead');
		}
	}
};

var helpers_core = helpers;

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart.helpers.callback instead.
 * @function Chart.helpers.callCallback
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 * @private
 */
helpers.callCallback = helpers.callback;

/**
 * Provided for backward compatibility, use Array.prototype.indexOf instead.
 * Array.prototype.indexOf compatibility: Chrome, Opera, Safari, FF1.5+, IE9+
 * @function Chart.helpers.indexOf
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers.indexOf = function(array, item, fromIndex) {
	return Array.prototype.indexOf.call(array, item, fromIndex);
};

/**
 * Provided for backward compatibility, use Chart.helpers.valueOrDefault instead.
 * @function Chart.helpers.getValueOrDefault
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers.getValueOrDefault = helpers.valueOrDefault;

/**
 * Provided for backward compatibility, use Chart.helpers.valueAtIndexOrDefault instead.
 * @function Chart.helpers.getValueAtIndexOrDefault
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers.getValueAtIndexOrDefault = helpers.valueAtIndexOrDefault;

/**
 * Easing functions adapted from Robert Penner's easing equations.
 * @namespace Chart.helpers.easingEffects
 * @see http://www.robertpenner.com/easing/
 */
var effects = {
	linear: function(t) {
		return t;
	},

	easeInQuad: function(t) {
		return t * t;
	},

	easeOutQuad: function(t) {
		return -t * (t - 2);
	},

	easeInOutQuad: function(t) {
		if ((t /= 0.5) < 1) {
			return 0.5 * t * t;
		}
		return -0.5 * ((--t) * (t - 2) - 1);
	},

	easeInCubic: function(t) {
		return t * t * t;
	},

	easeOutCubic: function(t) {
		return (t = t - 1) * t * t + 1;
	},

	easeInOutCubic: function(t) {
		if ((t /= 0.5) < 1) {
			return 0.5 * t * t * t;
		}
		return 0.5 * ((t -= 2) * t * t + 2);
	},

	easeInQuart: function(t) {
		return t * t * t * t;
	},

	easeOutQuart: function(t) {
		return -((t = t - 1) * t * t * t - 1);
	},

	easeInOutQuart: function(t) {
		if ((t /= 0.5) < 1) {
			return 0.5 * t * t * t * t;
		}
		return -0.5 * ((t -= 2) * t * t * t - 2);
	},

	easeInQuint: function(t) {
		return t * t * t * t * t;
	},

	easeOutQuint: function(t) {
		return (t = t - 1) * t * t * t * t + 1;
	},

	easeInOutQuint: function(t) {
		if ((t /= 0.5) < 1) {
			return 0.5 * t * t * t * t * t;
		}
		return 0.5 * ((t -= 2) * t * t * t * t + 2);
	},

	easeInSine: function(t) {
		return -Math.cos(t * (Math.PI / 2)) + 1;
	},

	easeOutSine: function(t) {
		return Math.sin(t * (Math.PI / 2));
	},

	easeInOutSine: function(t) {
		return -0.5 * (Math.cos(Math.PI * t) - 1);
	},

	easeInExpo: function(t) {
		return (t === 0) ? 0 : Math.pow(2, 10 * (t - 1));
	},

	easeOutExpo: function(t) {
		return (t === 1) ? 1 : -Math.pow(2, -10 * t) + 1;
	},

	easeInOutExpo: function(t) {
		if (t === 0) {
			return 0;
		}
		if (t === 1) {
			return 1;
		}
		if ((t /= 0.5) < 1) {
			return 0.5 * Math.pow(2, 10 * (t - 1));
		}
		return 0.5 * (-Math.pow(2, -10 * --t) + 2);
	},

	easeInCirc: function(t) {
		if (t >= 1) {
			return t;
		}
		return -(Math.sqrt(1 - t * t) - 1);
	},

	easeOutCirc: function(t) {
		return Math.sqrt(1 - (t = t - 1) * t);
	},

	easeInOutCirc: function(t) {
		if ((t /= 0.5) < 1) {
			return -0.5 * (Math.sqrt(1 - t * t) - 1);
		}
		return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
	},

	easeInElastic: function(t) {
		var s = 1.70158;
		var p = 0;
		var a = 1;
		if (t === 0) {
			return 0;
		}
		if (t === 1) {
			return 1;
		}
		if (!p) {
			p = 0.3;
		}
		if (a < 1) {
			a = 1;
			s = p / 4;
		} else {
			s = p / (2 * Math.PI) * Math.asin(1 / a);
		}
		return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
	},

	easeOutElastic: function(t) {
		var s = 1.70158;
		var p = 0;
		var a = 1;
		if (t === 0) {
			return 0;
		}
		if (t === 1) {
			return 1;
		}
		if (!p) {
			p = 0.3;
		}
		if (a < 1) {
			a = 1;
			s = p / 4;
		} else {
			s = p / (2 * Math.PI) * Math.asin(1 / a);
		}
		return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1;
	},

	easeInOutElastic: function(t) {
		var s = 1.70158;
		var p = 0;
		var a = 1;
		if (t === 0) {
			return 0;
		}
		if ((t /= 0.5) === 2) {
			return 1;
		}
		if (!p) {
			p = 0.45;
		}
		if (a < 1) {
			a = 1;
			s = p / 4;
		} else {
			s = p / (2 * Math.PI) * Math.asin(1 / a);
		}
		if (t < 1) {
			return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
		}
		return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p) * 0.5 + 1;
	},
	easeInBack: function(t) {
		var s = 1.70158;
		return t * t * ((s + 1) * t - s);
	},

	easeOutBack: function(t) {
		var s = 1.70158;
		return (t = t - 1) * t * ((s + 1) * t + s) + 1;
	},

	easeInOutBack: function(t) {
		var s = 1.70158;
		if ((t /= 0.5) < 1) {
			return 0.5 * (t * t * (((s *= (1.525)) + 1) * t - s));
		}
		return 0.5 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
	},

	easeInBounce: function(t) {
		return 1 - effects.easeOutBounce(1 - t);
	},

	easeOutBounce: function(t) {
		if (t < (1 / 2.75)) {
			return 7.5625 * t * t;
		}
		if (t < (2 / 2.75)) {
			return 7.5625 * (t -= (1.5 / 2.75)) * t + 0.75;
		}
		if (t < (2.5 / 2.75)) {
			return 7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375;
		}
		return 7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375;
	},

	easeInOutBounce: function(t) {
		if (t < 0.5) {
			return effects.easeInBounce(t * 2) * 0.5;
		}
		return effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5;
	}
};

var helpers_easing = {
	effects: effects
};

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart.helpers.easing.effects instead.
 * @function Chart.helpers.easingEffects
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers_core.easingEffects = effects;

var PI = Math.PI;
var RAD_PER_DEG = PI / 180;
var DOUBLE_PI = PI * 2;
var HALF_PI = PI / 2;
var QUARTER_PI = PI / 4;
var TWO_THIRDS_PI = PI * 2 / 3;

/**
 * @namespace Chart.helpers.canvas
 */
var exports$1 = {
	/**
	 * Clears the entire canvas associated to the given `chart`.
	 * @param {Chart} chart - The chart for which to clear the canvas.
	 */
	clear: function(chart) {
		chart.ctx.clearRect(0, 0, chart.width, chart.height);
	},

	/**
	 * Creates a "path" for a rectangle with rounded corners at position (x, y) with a
	 * given size (width, height) and the same `radius` for all corners.
	 * @param {CanvasRenderingContext2D} ctx - The canvas 2D Context.
	 * @param {number} x - The x axis of the coordinate for the rectangle starting point.
	 * @param {number} y - The y axis of the coordinate for the rectangle starting point.
	 * @param {number} width - The rectangle's width.
	 * @param {number} height - The rectangle's height.
	 * @param {number} radius - The rounded amount (in pixels) for the four corners.
	 * @todo handle `radius` as top-left, top-right, bottom-right, bottom-left array/object?
	 */
	roundedRect: function(ctx, x, y, width, height, radius) {
		if (radius) {
			var r = Math.min(radius, height / 2, width / 2);
			var left = x + r;
			var top = y + r;
			var right = x + width - r;
			var bottom = y + height - r;

			ctx.moveTo(x, top);
			if (left < right && top < bottom) {
				ctx.arc(left, top, r, -PI, -HALF_PI);
				ctx.arc(right, top, r, -HALF_PI, 0);
				ctx.arc(right, bottom, r, 0, HALF_PI);
				ctx.arc(left, bottom, r, HALF_PI, PI);
			} else if (left < right) {
				ctx.moveTo(left, y);
				ctx.arc(right, top, r, -HALF_PI, HALF_PI);
				ctx.arc(left, top, r, HALF_PI, PI + HALF_PI);
			} else if (top < bottom) {
				ctx.arc(left, top, r, -PI, 0);
				ctx.arc(left, bottom, r, 0, PI);
			} else {
				ctx.arc(left, top, r, -PI, PI);
			}
			ctx.closePath();
			ctx.moveTo(x, y);
		} else {
			ctx.rect(x, y, width, height);
		}
	},

	drawPoint: function(ctx, style, radius, x, y, rotation) {
		var type, xOffset, yOffset, size, cornerRadius;
		var rad = (rotation || 0) * RAD_PER_DEG;

		if (style && typeof style === 'object') {
			type = style.toString();
			if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
				ctx.save();
				ctx.translate(x, y);
				ctx.rotate(rad);
				ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
				ctx.restore();
				return;
			}
		}

		if (isNaN(radius) || radius <= 0) {
			return;
		}

		ctx.beginPath();

		switch (style) {
		// Default includes circle
		default:
			ctx.arc(x, y, radius, 0, DOUBLE_PI);
			ctx.closePath();
			break;
		case 'triangle':
			ctx.moveTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
			rad += TWO_THIRDS_PI;
			ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
			rad += TWO_THIRDS_PI;
			ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
			ctx.closePath();
			break;
		case 'rectRounded':
			// NOTE: the rounded rect implementation changed to use `arc` instead of
			// `quadraticCurveTo` since it generates better results when rect is
			// almost a circle. 0.516 (instead of 0.5) produces results with visually
			// closer proportion to the previous impl and it is inscribed in the
			// circle with `radius`. For more details, see the following PRs:
			// https://github.com/chartjs/Chart.js/issues/5597
			// https://github.com/chartjs/Chart.js/issues/5858
			cornerRadius = radius * 0.516;
			size = radius - cornerRadius;
			xOffset = Math.cos(rad + QUARTER_PI) * size;
			yOffset = Math.sin(rad + QUARTER_PI) * size;
			ctx.arc(x - xOffset, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
			ctx.arc(x + yOffset, y - xOffset, cornerRadius, rad - HALF_PI, rad);
			ctx.arc(x + xOffset, y + yOffset, cornerRadius, rad, rad + HALF_PI);
			ctx.arc(x - yOffset, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
			ctx.closePath();
			break;
		case 'rect':
			if (!rotation) {
				size = Math.SQRT1_2 * radius;
				ctx.rect(x - size, y - size, 2 * size, 2 * size);
				break;
			}
			rad += QUARTER_PI;
			/* falls through */
		case 'rectRot':
			xOffset = Math.cos(rad) * radius;
			yOffset = Math.sin(rad) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + yOffset, y - xOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			ctx.lineTo(x - yOffset, y + xOffset);
			ctx.closePath();
			break;
		case 'crossRot':
			rad += QUARTER_PI;
			/* falls through */
		case 'cross':
			xOffset = Math.cos(rad) * radius;
			yOffset = Math.sin(rad) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			ctx.moveTo(x + yOffset, y - xOffset);
			ctx.lineTo(x - yOffset, y + xOffset);
			break;
		case 'star':
			xOffset = Math.cos(rad) * radius;
			yOffset = Math.sin(rad) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			ctx.moveTo(x + yOffset, y - xOffset);
			ctx.lineTo(x - yOffset, y + xOffset);
			rad += QUARTER_PI;
			xOffset = Math.cos(rad) * radius;
			yOffset = Math.sin(rad) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			ctx.moveTo(x + yOffset, y - xOffset);
			ctx.lineTo(x - yOffset, y + xOffset);
			break;
		case 'line':
			xOffset = Math.cos(rad) * radius;
			yOffset = Math.sin(rad) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			break;
		case 'dash':
			ctx.moveTo(x, y);
			ctx.lineTo(x + Math.cos(rad) * radius, y + Math.sin(rad) * radius);
			break;
		}

		ctx.fill();
		ctx.stroke();
	},

	/**
	 * Returns true if the point is inside the rectangle
	 * @param {object} point - The point to test
	 * @param {object} area - The rectangle
	 * @returns {boolean}
	 * @private
	 */
	_isPointInArea: function(point, area) {
		var epsilon = 1e-6; // 1e-6 is margin in pixels for accumulated error.

		return point.x > area.left - epsilon && point.x < area.right + epsilon &&
			point.y > area.top - epsilon && point.y < area.bottom + epsilon;
	},

	clipArea: function(ctx, area) {
		ctx.save();
		ctx.beginPath();
		ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
		ctx.clip();
	},

	unclipArea: function(ctx) {
		ctx.restore();
	},

	lineTo: function(ctx, previous, target, flip) {
		var stepped = target.steppedLine;
		if (stepped) {
			if (stepped === 'middle') {
				var midpoint = (previous.x + target.x) / 2.0;
				ctx.lineTo(midpoint, flip ? target.y : previous.y);
				ctx.lineTo(midpoint, flip ? previous.y : target.y);
			} else if ((stepped === 'after' && !flip) || (stepped !== 'after' && flip)) {
				ctx.lineTo(previous.x, target.y);
			} else {
				ctx.lineTo(target.x, previous.y);
			}
			ctx.lineTo(target.x, target.y);
			return;
		}

		if (!target.tension) {
			ctx.lineTo(target.x, target.y);
			return;
		}

		ctx.bezierCurveTo(
			flip ? previous.controlPointPreviousX : previous.controlPointNextX,
			flip ? previous.controlPointPreviousY : previous.controlPointNextY,
			flip ? target.controlPointNextX : target.controlPointPreviousX,
			flip ? target.controlPointNextY : target.controlPointPreviousY,
			target.x,
			target.y);
	}
};

var helpers_canvas = exports$1;

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart.helpers.canvas.clear instead.
 * @namespace Chart.helpers.clear
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers_core.clear = exports$1.clear;

/**
 * Provided for backward compatibility, use Chart.helpers.canvas.roundedRect instead.
 * @namespace Chart.helpers.drawRoundedRectangle
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers_core.drawRoundedRectangle = function(ctx) {
	ctx.beginPath();
	exports$1.roundedRect.apply(exports$1, arguments);
};

var defaults = {
	/**
	 * @private
	 */
	_set: function(scope, values) {
		return helpers_core.merge(this[scope] || (this[scope] = {}), values);
	}
};

// TODO(v3): remove 'global' from namespace.  all default are global and
// there's inconsistency around which options are under 'global'
defaults._set('global', {
	defaultColor: 'rgba(0,0,0,0.1)',
	defaultFontColor: '#666',
	defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
	defaultFontSize: 12,
	defaultFontStyle: 'normal',
	defaultLineHeight: 1.2,
	showLines: true
});

var core_defaults = defaults;

var valueOrDefault = helpers_core.valueOrDefault;

/**
 * Converts the given font object into a CSS font string.
 * @param {object} font - A font object.
 * @return {string} The CSS font string. See https://developer.mozilla.org/en-US/docs/Web/CSS/font
 * @private
 */
function toFontString(font) {
	if (!font || helpers_core.isNullOrUndef(font.size) || helpers_core.isNullOrUndef(font.family)) {
		return null;
	}

	return (font.style ? font.style + ' ' : '')
		+ (font.weight ? font.weight + ' ' : '')
		+ font.size + 'px '
		+ font.family;
}

/**
 * @alias Chart.helpers.options
 * @namespace
 */
var helpers_options = {
	/**
	 * Converts the given line height `value` in pixels for a specific font `size`.
	 * @param {number|string} value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
	 * @param {number} size - The font size (in pixels) used to resolve relative `value`.
	 * @returns {number} The effective line height in pixels (size * 1.2 if value is invalid).
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
	 * @since 2.7.0
	 */
	toLineHeight: function(value, size) {
		var matches = ('' + value).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
		if (!matches || matches[1] === 'normal') {
			return size * 1.2;
		}

		value = +matches[2];

		switch (matches[3]) {
		case 'px':
			return value;
		case '%':
			value /= 100;
			break;
		}

		return size * value;
	},

	/**
	 * Converts the given value into a padding object with pre-computed width/height.
	 * @param {number|object} value - If a number, set the value to all TRBL component,
	 *  else, if and object, use defined properties and sets undefined ones to 0.
	 * @returns {object} The padding values (top, right, bottom, left, width, height)
	 * @since 2.7.0
	 */
	toPadding: function(value) {
		var t, r, b, l;

		if (helpers_core.isObject(value)) {
			t = +value.top || 0;
			r = +value.right || 0;
			b = +value.bottom || 0;
			l = +value.left || 0;
		} else {
			t = r = b = l = +value || 0;
		}

		return {
			top: t,
			right: r,
			bottom: b,
			left: l,
			height: t + b,
			width: l + r
		};
	},

	/**
	 * Parses font options and returns the font object.
	 * @param {object} options - A object that contains font options to be parsed.
	 * @return {object} The font object.
	 * @todo Support font.* options and renamed to toFont().
	 * @private
	 */
	_parseFont: function(options) {
		var globalDefaults = core_defaults.global;
		var size = valueOrDefault(options.fontSize, globalDefaults.defaultFontSize);
		var font = {
			family: valueOrDefault(options.fontFamily, globalDefaults.defaultFontFamily),
			lineHeight: helpers_core.options.toLineHeight(valueOrDefault(options.lineHeight, globalDefaults.defaultLineHeight), size),
			size: size,
			style: valueOrDefault(options.fontStyle, globalDefaults.defaultFontStyle),
			weight: null,
			string: ''
		};

		font.string = toFontString(font);
		return font;
	},

	/**
	 * Evaluates the given `inputs` sequentially and returns the first defined value.
	 * @param {Array} inputs - An array of values, falling back to the last value.
	 * @param {object} [context] - If defined and the current value is a function, the value
	 * is called with `context` as first argument and the result becomes the new input.
	 * @param {number} [index] - If defined and the current value is an array, the value
	 * at `index` become the new input.
	 * @param {object} [info] - object to return information about resolution in
	 * @param {boolean} [info.cacheable] - Will be set to `false` if option is not cacheable.
	 * @since 2.7.0
	 */
	resolve: function(inputs, context, index, info) {
		var cacheable = true;
		var i, ilen, value;

		for (i = 0, ilen = inputs.length; i < ilen; ++i) {
			value = inputs[i];
			if (value === undefined) {
				continue;
			}
			if (context !== undefined && typeof value === 'function') {
				value = value(context);
				cacheable = false;
			}
			if (index !== undefined && helpers_core.isArray(value)) {
				value = value[index];
				cacheable = false;
			}
			if (value !== undefined) {
				if (info && !cacheable) {
					info.cacheable = false;
				}
				return value;
			}
		}
	}
};

/**
 * @alias Chart.helpers.math
 * @namespace
 */
var exports$2 = {
	/**
	 * Returns an array of factors sorted from 1 to sqrt(value)
	 * @private
	 */
	_factorize: function(value) {
		var result = [];
		var sqrt = Math.sqrt(value);
		var i;

		for (i = 1; i < sqrt; i++) {
			if (value % i === 0) {
				result.push(i);
				result.push(value / i);
			}
		}
		if (sqrt === (sqrt | 0)) { // if value is a square number
			result.push(sqrt);
		}

		result.sort(function(a, b) {
			return a - b;
		}).pop();
		return result;
	},

	log10: Math.log10 || function(x) {
		var exponent = Math.log(x) * Math.LOG10E; // Math.LOG10E = 1 / Math.LN10.
		// Check for whole powers of 10,
		// which due to floating point rounding error should be corrected.
		var powerOf10 = Math.round(exponent);
		var isPowerOf10 = x === Math.pow(10, powerOf10);

		return isPowerOf10 ? powerOf10 : exponent;
	}
};

var helpers_math = exports$2;

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart.helpers.math.log10 instead.
 * @namespace Chart.helpers.log10
 * @deprecated since version 2.9.0
 * @todo remove at version 3
 * @private
 */
helpers_core.log10 = exports$2.log10;

var getRtlAdapter = function(rectX, width) {
	return {
		x: function(x) {
			return rectX + rectX + width - x;
		},
		setWidth: function(w) {
			width = w;
		},
		textAlign: function(align) {
			if (align === 'center') {
				return align;
			}
			return align === 'right' ? 'left' : 'right';
		},
		xPlus: function(x, value) {
			return x - value;
		},
		leftForLtr: function(x, itemWidth) {
			return x - itemWidth;
		},
	};
};

var getLtrAdapter = function() {
	return {
		x: function(x) {
			return x;
		},
		setWidth: function(w) { // eslint-disable-line no-unused-vars
		},
		textAlign: function(align) {
			return align;
		},
		xPlus: function(x, value) {
			return x + value;
		},
		leftForLtr: function(x, _itemWidth) { // eslint-disable-line no-unused-vars
			return x;
		},
	};
};

var getAdapter = function(rtl, rectX, width) {
	return rtl ? getRtlAdapter(rectX, width) : getLtrAdapter();
};

var overrideTextDirection = function(ctx, direction) {
	var style, original;
	if (direction === 'ltr' || direction === 'rtl') {
		style = ctx.canvas.style;
		original = [
			style.getPropertyValue('direction'),
			style.getPropertyPriority('direction'),
		];

		style.setProperty('direction', direction, 'important');
		ctx.prevTextDirection = original;
	}
};

var restoreTextDirection = function(ctx) {
	var original = ctx.prevTextDirection;
	if (original !== undefined) {
		delete ctx.prevTextDirection;
		ctx.canvas.style.setProperty('direction', original[0], original[1]);
	}
};

var helpers_rtl = {
	getRtlAdapter: getAdapter,
	overrideTextDirection: overrideTextDirection,
	restoreTextDirection: restoreTextDirection,
};

var helpers$1 = helpers_core;
var easing = helpers_easing;
var canvas = helpers_canvas;
var options = helpers_options;
var math = helpers_math;
var rtl = helpers_rtl;
helpers$1.easing = easing;
helpers$1.canvas = canvas;
helpers$1.options = options;
helpers$1.math = math;
helpers$1.rtl = rtl;

function interpolate(start, view, model, ease) {
	var keys = Object.keys(model);
	var i, ilen, key, actual, origin, target, type, c0, c1;

	for (i = 0, ilen = keys.length; i < ilen; ++i) {
		key = keys[i];

		target = model[key];

		// if a value is added to the model after pivot() has been called, the view
		// doesn't contain it, so let's initialize the view to the target value.
		if (!view.hasOwnProperty(key)) {
			view[key] = target;
		}

		actual = view[key];

		if (actual === target || key[0] === '_') {
			continue;
		}

		if (!start.hasOwnProperty(key)) {
			start[key] = actual;
		}

		origin = start[key];

		type = typeof target;

		if (type === typeof origin) {
			if (type === 'string') {
				c0 = chartjsColor(origin);
				if (c0.valid) {
					c1 = chartjsColor(target);
					if (c1.valid) {
						view[key] = c1.mix(c0, ease).rgbString();
						continue;
					}
				}
			} else if (helpers$1.isFinite(origin) && helpers$1.isFinite(target)) {
				view[key] = origin + (target - origin) * ease;
				continue;
			}
		}

		view[key] = target;
	}
}

var Element = function(configuration) {
	helpers$1.extend(this, configuration);
	this.initialize.apply(this, arguments);
};

helpers$1.extend(Element.prototype, {
	_type: undefined,

	initialize: function() {
		this.hidden = false;
	},

	pivot: function() {
		var me = this;
		if (!me._view) {
			me._view = helpers$1.extend({}, me._model);
		}
		me._start = {};
		return me;
	},

	transition: function(ease) {
		var me = this;
		var model = me._model;
		var start = me._start;
		var view = me._view;

		// No animation -> No Transition
		if (!model || ease === 1) {
			me._view = helpers$1.extend({}, model);
			me._start = null;
			return me;
		}

		if (!view) {
			view = me._view = {};
		}

		if (!start) {
			start = me._start = {};
		}

		interpolate(start, view, model, ease);

		return me;
	},

	tooltipPosition: function() {
		return {
			x: this._model.x,
			y: this._model.y
		};
	},

	hasValue: function() {
		return helpers$1.isNumber(this._model.x) && helpers$1.isNumber(this._model.y);
	}
});

Element.extend = helpers$1.inherits;

var core_element = Element;

var exports$3 = core_element.extend({
	chart: null, // the animation associated chart instance
	currentStep: 0, // the current animation step
	numSteps: 60, // default number of steps
	easing: '', // the easing to use for this animation
	render: null, // render function used by the animation service

	onAnimationProgress: null, // user specified callback to fire on each step of the animation
	onAnimationComplete: null, // user specified callback to fire when the animation finishes
});

var core_animation = exports$3;

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart.Animation instead
 * @prop Chart.Animation#animationObject
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 */
Object.defineProperty(exports$3.prototype, 'animationObject', {
	get: function() {
		return this;
	}
});

/**
 * Provided for backward compatibility, use Chart.Animation#chart instead
 * @prop Chart.Animation#chartInstance
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 */
Object.defineProperty(exports$3.prototype, 'chartInstance', {
	get: function() {
		return this.chart;
	},
	set: function(value) {
		this.chart = value;
	}
});

core_defaults._set('global', {
	animation: {
		duration: 1000,
		easing: 'easeOutQuart',
		onProgress: helpers$1.noop,
		onComplete: helpers$1.noop
	}
});

var core_animations = {
	animations: [],
	request: null,

	/**
	 * @param {Chart} chart - The chart to animate.
	 * @param {Chart.Animation} animation - The animation that we will animate.
	 * @param {number} duration - The animation duration in ms.
	 * @param {boolean} lazy - if true, the chart is not marked as animating to enable more responsive interactions
	 */
	addAnimation: function(chart, animation, duration, lazy) {
		var animations = this.animations;
		var i, ilen;

		animation.chart = chart;
		animation.startTime = Date.now();
		animation.duration = duration;

		if (!lazy) {
			chart.animating = true;
		}

		for (i = 0, ilen = animations.length; i < ilen; ++i) {
			if (animations[i].chart === chart) {
				animations[i] = animation;
				return;
			}
		}

		animations.push(animation);

		// If there are no animations queued, manually kickstart a digest, for lack of a better word
		if (animations.length === 1) {
			this.requestAnimationFrame();
		}
	},

	cancelAnimation: function(chart) {
		var index = helpers$1.findIndex(this.animations, function(animation) {
			return animation.chart === chart;
		});

		if (index !== -1) {
			this.animations.splice(index, 1);
			chart.animating = false;
		}
	},

	requestAnimationFrame: function() {
		var me = this;
		if (me.request === null) {
			// Skip animation frame requests until the active one is executed.
			// This can happen when processing mouse events, e.g. 'mousemove'
			// and 'mouseout' events will trigger multiple renders.
			me.request = helpers$1.requestAnimFrame.call(window, function() {
				me.request = null;
				me.startDigest();
			});
		}
	},

	/**
	 * @private
	 */
	startDigest: function() {
		var me = this;

		me.advance();

		// Do we have more stuff to animate?
		if (me.animations.length > 0) {
			me.requestAnimationFrame();
		}
	},

	/**
	 * @private
	 */
	advance: function() {
		var animations = this.animations;
		var animation, chart, numSteps, nextStep;
		var i = 0;

		// 1 animation per chart, so we are looping charts here
		while (i < animations.length) {
			animation = animations[i];
			chart = animation.chart;
			numSteps = animation.numSteps;

			// Make sure that currentStep starts at 1
			// https://github.com/chartjs/Chart.js/issues/6104
			nextStep = Math.floor((Date.now() - animation.startTime) / animation.duration * numSteps) + 1;
			animation.currentStep = Math.min(nextStep, numSteps);

			helpers$1.callback(animation.render, [chart, animation], chart);
			helpers$1.callback(animation.onAnimationProgress, [animation], chart);

			if (animation.currentStep >= numSteps) {
				helpers$1.callback(animation.onAnimationComplete, [animation], chart);
				chart.animating = false;
				animations.splice(i, 1);
			} else {
				++i;
			}
		}
	}
};

var resolve = helpers$1.options.resolve;

var arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];

/**
 * Hooks the array methods that add or remove values ('push', pop', 'shift', 'splice',
 * 'unshift') and notify the listener AFTER the array has been altered. Listeners are
 * called on the 'onData*' callbacks (e.g. onDataPush, etc.) with same arguments.
 */
function listenArrayEvents(array, listener) {
	if (array._chartjs) {
		array._chartjs.listeners.push(listener);
		return;
	}

	Object.defineProperty(array, '_chartjs', {
		configurable: true,
		enumerable: false,
		value: {
			listeners: [listener]
		}
	});

	arrayEvents.forEach(function(key) {
		var method = 'onData' + key.charAt(0).toUpperCase() + key.slice(1);
		var base = array[key];

		Object.defineProperty(array, key, {
			configurable: true,
			enumerable: false,
			value: function() {
				var args = Array.prototype.slice.call(arguments);
				var res = base.apply(this, args);

				helpers$1.each(array._chartjs.listeners, function(object) {
					if (typeof object[method] === 'function') {
						object[method].apply(object, args);
					}
				});

				return res;
			}
		});
	});
}

/**
 * Removes the given array event listener and cleanup extra attached properties (such as
 * the _chartjs stub and overridden methods) if array doesn't have any more listeners.
 */
function unlistenArrayEvents(array, listener) {
	var stub = array._chartjs;
	if (!stub) {
		return;
	}

	var listeners = stub.listeners;
	var index = listeners.indexOf(listener);
	if (index !== -1) {
		listeners.splice(index, 1);
	}

	if (listeners.length > 0) {
		return;
	}

	arrayEvents.forEach(function(key) {
		delete array[key];
	});

	delete array._chartjs;
}

// Base class for all dataset controllers (line, bar, etc)
var DatasetController = function(chart, datasetIndex) {
	this.initialize(chart, datasetIndex);
};

helpers$1.extend(DatasetController.prototype, {

	/**
	 * Element type used to generate a meta dataset (e.g. Chart.element.Line).
	 * @type {Chart.core.element}
	 */
	datasetElementType: null,

	/**
	 * Element type used to generate a meta data (e.g. Chart.element.Point).
	 * @type {Chart.core.element}
	 */
	dataElementType: null,

	/**
	 * Dataset element option keys to be resolved in _resolveDatasetElementOptions.
	 * A derived controller may override this to resolve controller-specific options.
	 * The keys defined here are for backward compatibility for legend styles.
	 * @private
	 */
	_datasetElementOptions: [
		'backgroundColor',
		'borderCapStyle',
		'borderColor',
		'borderDash',
		'borderDashOffset',
		'borderJoinStyle',
		'borderWidth'
	],

	/**
	 * Data element option keys to be resolved in _resolveDataElementOptions.
	 * A derived controller may override this to resolve controller-specific options.
	 * The keys defined here are for backward compatibility for legend styles.
	 * @private
	 */
	_dataElementOptions: [
		'backgroundColor',
		'borderColor',
		'borderWidth',
		'pointStyle'
	],

	initialize: function(chart, datasetIndex) {
		var me = this;
		me.chart = chart;
		me.index = datasetIndex;
		me.linkScales();
		me.addElements();
		me._type = me.getMeta().type;
	},

	updateIndex: function(datasetIndex) {
		this.index = datasetIndex;
	},

	linkScales: function() {
		var me = this;
		var meta = me.getMeta();
		var chart = me.chart;
		var scales = chart.scales;
		var dataset = me.getDataset();
		var scalesOpts = chart.options.scales;

		if (meta.xAxisID === null || !(meta.xAxisID in scales) || dataset.xAxisID) {
			meta.xAxisID = dataset.xAxisID || scalesOpts.xAxes[0].id;
		}
		if (meta.yAxisID === null || !(meta.yAxisID in scales) || dataset.yAxisID) {
			meta.yAxisID = dataset.yAxisID || scalesOpts.yAxes[0].id;
		}
	},

	getDataset: function() {
		return this.chart.data.datasets[this.index];
	},

	getMeta: function() {
		return this.chart.getDatasetMeta(this.index);
	},

	getScaleForId: function(scaleID) {
		return this.chart.scales[scaleID];
	},

	/**
	 * @private
	 */
	_getValueScaleId: function() {
		return this.getMeta().yAxisID;
	},

	/**
	 * @private
	 */
	_getIndexScaleId: function() {
		return this.getMeta().xAxisID;
	},

	/**
	 * @private
	 */
	_getValueScale: function() {
		return this.getScaleForId(this._getValueScaleId());
	},

	/**
	 * @private
	 */
	_getIndexScale: function() {
		return this.getScaleForId(this._getIndexScaleId());
	},

	reset: function() {
		this._update(true);
	},

	/**
	 * @private
	 */
	destroy: function() {
		if (this._data) {
			unlistenArrayEvents(this._data, this);
		}
	},

	createMetaDataset: function() {
		var me = this;
		var type = me.datasetElementType;
		return type && new type({
			_chart: me.chart,
			_datasetIndex: me.index
		});
	},

	createMetaData: function(index) {
		var me = this;
		var type = me.dataElementType;
		return type && new type({
			_chart: me.chart,
			_datasetIndex: me.index,
			_index: index
		});
	},

	addElements: function() {
		var me = this;
		var meta = me.getMeta();
		var data = me.getDataset().data || [];
		var metaData = meta.data;
		var i, ilen;

		for (i = 0, ilen = data.length; i < ilen; ++i) {
			metaData[i] = metaData[i] || me.createMetaData(i);
		}

		meta.dataset = meta.dataset || me.createMetaDataset();
	},

	addElementAndReset: function(index) {
		var element = this.createMetaData(index);
		this.getMeta().data.splice(index, 0, element);
		this.updateElement(element, index, true);
	},

	buildOrUpdateElements: function() {
		var me = this;
		var dataset = me.getDataset();
		var data = dataset.data || (dataset.data = []);

		// In order to correctly handle data addition/deletion animation (an thus simulate
		// real-time charts), we need to monitor these data modifications and synchronize
		// the internal meta data accordingly.
		if (me._data !== data) {
			if (me._data) {
				// This case happens when the user replaced the data array instance.
				unlistenArrayEvents(me._data, me);
			}

			if (data && Object.isExtensible(data)) {
				listenArrayEvents(data, me);
			}
			me._data = data;
		}

		// Re-sync meta data in case the user replaced the data array or if we missed
		// any updates and so make sure that we handle number of datapoints changing.
		me.resyncElements();
	},

	/**
	 * Returns the merged user-supplied and default dataset-level options
	 * @private
	 */
	_configure: function() {
		var me = this;
		me._config = helpers$1.merge(Object.create(null), [
			me.chart.options.datasets[me._type],
			me.getDataset(),
		], {
			merger: function(key, target, source) {
				if (key !== '_meta' && key !== 'data') {
					helpers$1._merger(key, target, source);
				}
			}
		});
	},

	_update: function(reset) {
		var me = this;
		me._configure();
		me._cachedDataOpts = null;
		me.update(reset);
	},

	update: helpers$1.noop,

	transition: function(easingValue) {
		var meta = this.getMeta();
		var elements = meta.data || [];
		var ilen = elements.length;
		var i = 0;

		for (; i < ilen; ++i) {
			elements[i].transition(easingValue);
		}

		if (meta.dataset) {
			meta.dataset.transition(easingValue);
		}
	},

	draw: function() {
		var meta = this.getMeta();
		var elements = meta.data || [];
		var ilen = elements.length;
		var i = 0;

		if (meta.dataset) {
			meta.dataset.draw();
		}

		for (; i < ilen; ++i) {
			elements[i].draw();
		}
	},

	/**
	 * Returns a set of predefined style properties that should be used to represent the dataset
	 * or the data if the index is specified
	 * @param {number} index - data index
	 * @return {IStyleInterface} style object
	 */
	getStyle: function(index) {
		var me = this;
		var meta = me.getMeta();
		var dataset = meta.dataset;
		var style;

		me._configure();
		if (dataset && index === undefined) {
			style = me._resolveDatasetElementOptions(dataset || {});
		} else {
			index = index || 0;
			style = me._resolveDataElementOptions(meta.data[index] || {}, index);
		}

		if (style.fill === false || style.fill === null) {
			style.backgroundColor = style.borderColor;
		}

		return style;
	},

	/**
	 * @private
	 */
	_resolveDatasetElementOptions: function(element, hover) {
		var me = this;
		var chart = me.chart;
		var datasetOpts = me._config;
		var custom = element.custom || {};
		var options = chart.options.elements[me.datasetElementType.prototype._type] || {};
		var elementOptions = me._datasetElementOptions;
		var values = {};
		var i, ilen, key, readKey;

		// Scriptable options
		var context = {
			chart: chart,
			dataset: me.getDataset(),
			datasetIndex: me.index,
			hover: hover
		};

		for (i = 0, ilen = elementOptions.length; i < ilen; ++i) {
			key = elementOptions[i];
			readKey = hover ? 'hover' + key.charAt(0).toUpperCase() + key.slice(1) : key;
			values[key] = resolve([
				custom[readKey],
				datasetOpts[readKey],
				options[readKey]
			], context);
		}

		return values;
	},

	/**
	 * @private
	 */
	_resolveDataElementOptions: function(element, index) {
		var me = this;
		var custom = element && element.custom;
		var cached = me._cachedDataOpts;
		if (cached && !custom) {
			return cached;
		}
		var chart = me.chart;
		var datasetOpts = me._config;
		var options = chart.options.elements[me.dataElementType.prototype._type] || {};
		var elementOptions = me._dataElementOptions;
		var values = {};

		// Scriptable options
		var context = {
			chart: chart,
			dataIndex: index,
			dataset: me.getDataset(),
			datasetIndex: me.index
		};

		// `resolve` sets cacheable to `false` if any option is indexed or scripted
		var info = {cacheable: !custom};

		var keys, i, ilen, key;

		custom = custom || {};

		if (helpers$1.isArray(elementOptions)) {
			for (i = 0, ilen = elementOptions.length; i < ilen; ++i) {
				key = elementOptions[i];
				values[key] = resolve([
					custom[key],
					datasetOpts[key],
					options[key]
				], context, index, info);
			}
		} else {
			keys = Object.keys(elementOptions);
			for (i = 0, ilen = keys.length; i < ilen; ++i) {
				key = keys[i];
				values[key] = resolve([
					custom[key],
					datasetOpts[elementOptions[key]],
					datasetOpts[key],
					options[key]
				], context, index, info);
			}
		}

		if (info.cacheable) {
			me._cachedDataOpts = Object.freeze(values);
		}

		return values;
	},

	removeHoverStyle: function(element) {
		helpers$1.merge(element._model, element.$previousStyle || {});
		delete element.$previousStyle;
	},

	setHoverStyle: function(element) {
		var dataset = this.chart.data.datasets[element._datasetIndex];
		var index = element._index;
		var custom = element.custom || {};
		var model = element._model;
		var getHoverColor = helpers$1.getHoverColor;

		element.$previousStyle = {
			backgroundColor: model.backgroundColor,
			borderColor: model.borderColor,
			borderWidth: model.borderWidth
		};

		model.backgroundColor = resolve([custom.hoverBackgroundColor, dataset.hoverBackgroundColor, getHoverColor(model.backgroundColor)], undefined, index);
		model.borderColor = resolve([custom.hoverBorderColor, dataset.hoverBorderColor, getHoverColor(model.borderColor)], undefined, index);
		model.borderWidth = resolve([custom.hoverBorderWidth, dataset.hoverBorderWidth, model.borderWidth], undefined, index);
	},

	/**
	 * @private
	 */
	_removeDatasetHoverStyle: function() {
		var element = this.getMeta().dataset;

		if (element) {
			this.removeHoverStyle(element);
		}
	},

	/**
	 * @private
	 */
	_setDatasetHoverStyle: function() {
		var element = this.getMeta().dataset;
		var prev = {};
		var i, ilen, key, keys, hoverOptions, model;

		if (!element) {
			return;
		}

		model = element._model;
		hoverOptions = this._resolveDatasetElementOptions(element, true);

		keys = Object.keys(hoverOptions);
		for (i = 0, ilen = keys.length; i < ilen; ++i) {
			key = keys[i];
			prev[key] = model[key];
			model[key] = hoverOptions[key];
		}

		element.$previousStyle = prev;
	},

	/**
	 * @private
	 */
	resyncElements: function() {
		var me = this;
		var meta = me.getMeta();
		var data = me.getDataset().data;
		var numMeta = meta.data.length;
		var numData = data.length;

		if (numData < numMeta) {
			meta.data.splice(numData, numMeta - numData);
		} else if (numData > numMeta) {
			me.insertElements(numMeta, numData - numMeta);
		}
	},

	/**
	 * @private
	 */
	insertElements: function(start, count) {
		for (var i = 0; i < count; ++i) {
			this.addElementAndReset(start + i);
		}
	},

	/**
	 * @private
	 */
	onDataPush: function() {
		var count = arguments.length;
		this.insertElements(this.getDataset().data.length - count, count);
	},

	/**
	 * @private
	 */
	onDataPop: function() {
		this.getMeta().data.pop();
	},

	/**
	 * @private
	 */
	onDataShift: function() {
		this.getMeta().data.shift();
	},

	/**
	 * @private
	 */
	onDataSplice: function(start, count) {
		this.getMeta().data.splice(start, count);
		this.insertElements(start, arguments.length - 2);
	},

	/**
	 * @private
	 */
	onDataUnshift: function() {
		this.insertElements(0, arguments.length);
	}
});

DatasetController.extend = helpers$1.inherits;

var core_datasetController = DatasetController;

var TAU = Math.PI * 2;

core_defaults._set('global', {
	elements: {
		arc: {
			backgroundColor: core_defaults.global.defaultColor,
			borderColor: '#fff',
			borderWidth: 2,
			borderAlign: 'center'
		}
	}
});

function clipArc(ctx, arc) {
	var startAngle = arc.startAngle;
	var endAngle = arc.endAngle;
	var pixelMargin = arc.pixelMargin;
	var angleMargin = pixelMargin / arc.outerRadius;
	var x = arc.x;
	var y = arc.y;

	// Draw an inner border by cliping the arc and drawing a double-width border
	// Enlarge the clipping arc by 0.33 pixels to eliminate glitches between borders
	ctx.beginPath();
	ctx.arc(x, y, arc.outerRadius, startAngle - angleMargin, endAngle + angleMargin);
	if (arc.innerRadius > pixelMargin) {
		angleMargin = pixelMargin / arc.innerRadius;
		ctx.arc(x, y, arc.innerRadius - pixelMargin, endAngle + angleMargin, startAngle - angleMargin, true);
	} else {
		ctx.arc(x, y, pixelMargin, endAngle + Math.PI / 2, startAngle - Math.PI / 2);
	}
	ctx.closePath();
	ctx.clip();
}

function drawFullCircleBorders(ctx, vm, arc, inner) {
	var endAngle = arc.endAngle;
	var i;

	if (inner) {
		arc.endAngle = arc.startAngle + TAU;
		clipArc(ctx, arc);
		arc.endAngle = endAngle;
		if (arc.endAngle === arc.startAngle && arc.fullCircles) {
			arc.endAngle += TAU;
			arc.fullCircles--;
		}
	}

	ctx.beginPath();
	ctx.arc(arc.x, arc.y, arc.innerRadius, arc.startAngle + TAU, arc.startAngle, true);
	for (i = 0; i < arc.fullCircles; ++i) {
		ctx.stroke();
	}

	ctx.beginPath();
	ctx.arc(arc.x, arc.y, vm.outerRadius, arc.startAngle, arc.startAngle + TAU);
	for (i = 0; i < arc.fullCircles; ++i) {
		ctx.stroke();
	}
}

function drawBorder(ctx, vm, arc) {
	var inner = vm.borderAlign === 'inner';

	if (inner) {
		ctx.lineWidth = vm.borderWidth * 2;
		ctx.lineJoin = 'round';
	} else {
		ctx.lineWidth = vm.borderWidth;
		ctx.lineJoin = 'bevel';
	}

	if (arc.fullCircles) {
		drawFullCircleBorders(ctx, vm, arc, inner);
	}

	if (inner) {
		clipArc(ctx, arc);
	}

	ctx.beginPath();
	ctx.arc(arc.x, arc.y, vm.outerRadius, arc.startAngle, arc.endAngle);
	ctx.arc(arc.x, arc.y, arc.innerRadius, arc.endAngle, arc.startAngle, true);
	ctx.closePath();
	ctx.stroke();
}

var element_arc = core_element.extend({
	_type: 'arc',

	inLabelRange: function(mouseX) {
		var vm = this._view;

		if (vm) {
			return (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hoverRadius, 2));
		}
		return false;
	},

	inRange: function(chartX, chartY) {
		var vm = this._view;

		if (vm) {
			var pointRelativePosition = helpers$1.getAngleFromPoint(vm, {x: chartX, y: chartY});
			var angle = pointRelativePosition.angle;
			var distance = pointRelativePosition.distance;

			// Sanitise angle range
			var startAngle = vm.startAngle;
			var endAngle = vm.endAngle;
			while (endAngle < startAngle) {
				endAngle += TAU;
			}
			while (angle > endAngle) {
				angle -= TAU;
			}
			while (angle < startAngle) {
				angle += TAU;
			}

			// Check if within the range of the open/close angle
			var betweenAngles = (angle >= startAngle && angle <= endAngle);
			var withinRadius = (distance >= vm.innerRadius && distance <= vm.outerRadius);

			return (betweenAngles && withinRadius);
		}
		return false;
	},

	getCenterPoint: function() {
		var vm = this._view;
		var halfAngle = (vm.startAngle + vm.endAngle) / 2;
		var halfRadius = (vm.innerRadius + vm.outerRadius) / 2;
		return {
			x: vm.x + Math.cos(halfAngle) * halfRadius,
			y: vm.y + Math.sin(halfAngle) * halfRadius
		};
	},

	getArea: function() {
		var vm = this._view;
		return Math.PI * ((vm.endAngle - vm.startAngle) / (2 * Math.PI)) * (Math.pow(vm.outerRadius, 2) - Math.pow(vm.innerRadius, 2));
	},

	tooltipPosition: function() {
		var vm = this._view;
		var centreAngle = vm.startAngle + ((vm.endAngle - vm.startAngle) / 2);
		var rangeFromCentre = (vm.outerRadius - vm.innerRadius) / 2 + vm.innerRadius;

		return {
			x: vm.x + (Math.cos(centreAngle) * rangeFromCentre),
			y: vm.y + (Math.sin(centreAngle) * rangeFromCentre)
		};
	},

	draw: function() {
		var ctx = this._chart.ctx;
		var vm = this._view;
		var pixelMargin = (vm.borderAlign === 'inner') ? 0.33 : 0;
		var arc = {
			x: vm.x,
			y: vm.y,
			innerRadius: vm.innerRadius,
			outerRadius: Math.max(vm.outerRadius - pixelMargin, 0),
			pixelMargin: pixelMargin,
			startAngle: vm.startAngle,
			endAngle: vm.endAngle,
			fullCircles: Math.floor(vm.circumference / TAU)
		};
		var i;

		ctx.save();

		ctx.fillStyle = vm.backgroundColor;
		ctx.strokeStyle = vm.borderColor;

		if (arc.fullCircles) {
			arc.endAngle = arc.startAngle + TAU;
			ctx.beginPath();
			ctx.arc(arc.x, arc.y, arc.outerRadius, arc.startAngle, arc.endAngle);
			ctx.arc(arc.x, arc.y, arc.innerRadius, arc.endAngle, arc.startAngle, true);
			ctx.closePath();
			for (i = 0; i < arc.fullCircles; ++i) {
				ctx.fill();
			}
			arc.endAngle = arc.startAngle + vm.circumference % TAU;
		}

		ctx.beginPath();
		ctx.arc(arc.x, arc.y, arc.outerRadius, arc.startAngle, arc.endAngle);
		ctx.arc(arc.x, arc.y, arc.innerRadius, arc.endAngle, arc.startAngle, true);
		ctx.closePath();
		ctx.fill();

		if (vm.borderWidth) {
			drawBorder(ctx, vm, arc);
		}

		ctx.restore();
	}
});

var valueOrDefault$1 = helpers$1.valueOrDefault;

var defaultColor = core_defaults.global.defaultColor;

core_defaults._set('global', {
	elements: {
		line: {
			tension: 0.4,
			backgroundColor: defaultColor,
			borderWidth: 3,
			borderColor: defaultColor,
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			capBezierPoints: true,
			fill: true, // do we fill in the area between the line and its base axis
		}
	}
});

var element_line = core_element.extend({
	_type: 'line',

	draw: function() {
		var me = this;
		var vm = me._view;
		var ctx = me._chart.ctx;
		var spanGaps = vm.spanGaps;
		var points = me._children.slice(); // clone array
		var globalDefaults = core_defaults.global;
		var globalOptionLineElements = globalDefaults.elements.line;
		var lastDrawnIndex = -1;
		var closePath = me._loop;
		var index, previous, currentVM;

		if (!points.length) {
			return;
		}

		if (me._loop) {
			for (index = 0; index < points.length; ++index) {
				previous = helpers$1.previousItem(points, index);
				// If the line has an open path, shift the point array
				if (!points[index]._view.skip && previous._view.skip) {
					points = points.slice(index).concat(points.slice(0, index));
					closePath = spanGaps;
					break;
				}
			}
			// If the line has a close path, add the first point again
			if (closePath) {
				points.push(points[0]);
			}
		}

		ctx.save();

		// Stroke Line Options
		ctx.lineCap = vm.borderCapStyle || globalOptionLineElements.borderCapStyle;

		// IE 9 and 10 do not support line dash
		if (ctx.setLineDash) {
			ctx.setLineDash(vm.borderDash || globalOptionLineElements.borderDash);
		}

		ctx.lineDashOffset = valueOrDefault$1(vm.borderDashOffset, globalOptionLineElements.borderDashOffset);
		ctx.lineJoin = vm.borderJoinStyle || globalOptionLineElements.borderJoinStyle;
		ctx.lineWidth = valueOrDefault$1(vm.borderWidth, globalOptionLineElements.borderWidth);
		ctx.strokeStyle = vm.borderColor || globalDefaults.defaultColor;

		// Stroke Line
		ctx.beginPath();

		// First point moves to it's starting position no matter what
		currentVM = points[0]._view;
		if (!currentVM.skip) {
			ctx.moveTo(currentVM.x, currentVM.y);
			lastDrawnIndex = 0;
		}

		for (index = 1; index < points.length; ++index) {
			currentVM = points[index]._view;
			previous = lastDrawnIndex === -1 ? helpers$1.previousItem(points, index) : points[lastDrawnIndex];

			if (!currentVM.skip) {
				if ((lastDrawnIndex !== (index - 1) && !spanGaps) || lastDrawnIndex === -1) {
					// There was a gap and this is the first point after the gap
					ctx.moveTo(currentVM.x, currentVM.y);
				} else {
					// Line to next point
					helpers$1.canvas.lineTo(ctx, previous._view, currentVM);
				}
				lastDrawnIndex = index;
			}
		}

		if (closePath) {
			ctx.closePath();
		}

		ctx.stroke();
		ctx.restore();
	}
});

var valueOrDefault$2 = helpers$1.valueOrDefault;

var defaultColor$1 = core_defaults.global.defaultColor;

core_defaults._set('global', {
	elements: {
		point: {
			radius: 3,
			pointStyle: 'circle',
			backgroundColor: defaultColor$1,
			borderColor: defaultColor$1,
			borderWidth: 1,
			// Hover
			hitRadius: 1,
			hoverRadius: 4,
			hoverBorderWidth: 1
		}
	}
});

function xRange(mouseX) {
	var vm = this._view;
	return vm ? (Math.abs(mouseX - vm.x) < vm.radius + vm.hitRadius) : false;
}

function yRange(mouseY) {
	var vm = this._view;
	return vm ? (Math.abs(mouseY - vm.y) < vm.radius + vm.hitRadius) : false;
}

var element_point = core_element.extend({
	_type: 'point',

	inRange: function(mouseX, mouseY) {
		var vm = this._view;
		return vm ? ((Math.pow(mouseX - vm.x, 2) + Math.pow(mouseY - vm.y, 2)) < Math.pow(vm.hitRadius + vm.radius, 2)) : false;
	},

	inLabelRange: xRange,
	inXRange: xRange,
	inYRange: yRange,

	getCenterPoint: function() {
		var vm = this._view;
		return {
			x: vm.x,
			y: vm.y
		};
	},

	getArea: function() {
		return Math.PI * Math.pow(this._view.radius, 2);
	},

	tooltipPosition: function() {
		var vm = this._view;
		return {
			x: vm.x,
			y: vm.y,
			padding: vm.radius + vm.borderWidth
		};
	},

	draw: function(chartArea) {
		var vm = this._view;
		var ctx = this._chart.ctx;
		var pointStyle = vm.pointStyle;
		var rotation = vm.rotation;
		var radius = vm.radius;
		var x = vm.x;
		var y = vm.y;
		var globalDefaults = core_defaults.global;
		var defaultColor = globalDefaults.defaultColor; // eslint-disable-line no-shadow

		if (vm.skip) {
			return;
		}

		// Clipping for Points.
		if (chartArea === undefined || helpers$1.canvas._isPointInArea(vm, chartArea)) {
			ctx.strokeStyle = vm.borderColor || defaultColor;
			ctx.lineWidth = valueOrDefault$2(vm.borderWidth, globalDefaults.elements.point.borderWidth);
			ctx.fillStyle = vm.backgroundColor || defaultColor;
			helpers$1.canvas.drawPoint(ctx, pointStyle, radius, x, y, rotation);
		}
	}
});

var defaultColor$2 = core_defaults.global.defaultColor;

core_defaults._set('global', {
	elements: {
		rectangle: {
			backgroundColor: defaultColor$2,
			borderColor: defaultColor$2,
			borderSkipped: 'bottom',
			borderWidth: 0
		}
	}
});

function isVertical(vm) {
	return vm && vm.width !== undefined;
}

/**
 * Helper function to get the bounds of the bar regardless of the orientation
 * @param bar {Chart.Element.Rectangle} the bar
 * @return {Bounds} bounds of the bar
 * @private
 */
function getBarBounds(vm) {
	var x1, x2, y1, y2, half;

	if (isVertical(vm)) {
		half = vm.width / 2;
		x1 = vm.x - half;
		x2 = vm.x + half;
		y1 = Math.min(vm.y, vm.base);
		y2 = Math.max(vm.y, vm.base);
	} else {
		half = vm.height / 2;
		x1 = Math.min(vm.x, vm.base);
		x2 = Math.max(vm.x, vm.base);
		y1 = vm.y - half;
		y2 = vm.y + half;
	}

	return {
		left: x1,
		top: y1,
		right: x2,
		bottom: y2
	};
}

function swap(orig, v1, v2) {
	return orig === v1 ? v2 : orig === v2 ? v1 : orig;
}

function parseBorderSkipped(vm) {
	var edge = vm.borderSkipped;
	var res = {};

	if (!edge) {
		return res;
	}

	if (vm.horizontal) {
		if (vm.base > vm.x) {
			edge = swap(edge, 'left', 'right');
		}
	} else if (vm.base < vm.y) {
		edge = swap(edge, 'bottom', 'top');
	}

	res[edge] = true;
	return res;
}

function parseBorderWidth(vm, maxW, maxH) {
	var value = vm.borderWidth;
	var skip = parseBorderSkipped(vm);
	var t, r, b, l;

	if (helpers$1.isObject(value)) {
		t = +value.top || 0;
		r = +value.right || 0;
		b = +value.bottom || 0;
		l = +value.left || 0;
	} else {
		t = r = b = l = +value || 0;
	}

	return {
		t: skip.top || (t < 0) ? 0 : t > maxH ? maxH : t,
		r: skip.right || (r < 0) ? 0 : r > maxW ? maxW : r,
		b: skip.bottom || (b < 0) ? 0 : b > maxH ? maxH : b,
		l: skip.left || (l < 0) ? 0 : l > maxW ? maxW : l
	};
}

function boundingRects(vm) {
	var bounds = getBarBounds(vm);
	var width = bounds.right - bounds.left;
	var height = bounds.bottom - bounds.top;
	var border = parseBorderWidth(vm, width / 2, height / 2);

	return {
		outer: {
			x: bounds.left,
			y: bounds.top,
			w: width,
			h: height
		},
		inner: {
			x: bounds.left + border.l,
			y: bounds.top + border.t,
			w: width - border.l - border.r,
			h: height - border.t - border.b
		}
	};
}

function inRange(vm, x, y) {
	var skipX = x === null;
	var skipY = y === null;
	var bounds = !vm || (skipX && skipY) ? false : getBarBounds(vm);

	return bounds
		&& (skipX || x >= bounds.left && x <= bounds.right)
		&& (skipY || y >= bounds.top && y <= bounds.bottom);
}

var element_rectangle = core_element.extend({
	_type: 'rectangle',

	draw: function() {
		var ctx = this._chart.ctx;
		var vm = this._view;
		var rects = boundingRects(vm);
		var outer = rects.outer;
		var inner = rects.inner;

		ctx.fillStyle = vm.backgroundColor;
		ctx.fillRect(outer.x, outer.y, outer.w, outer.h);

		if (outer.w === inner.w && outer.h === inner.h) {
			return;
		}

		ctx.save();
		ctx.beginPath();
		ctx.rect(outer.x, outer.y, outer.w, outer.h);
		ctx.clip();
		ctx.fillStyle = vm.borderColor;
		ctx.rect(inner.x, inner.y, inner.w, inner.h);
		ctx.fill('evenodd');
		ctx.restore();
	},

	height: function() {
		var vm = this._view;
		return vm.base - vm.y;
	},

	inRange: function(mouseX, mouseY) {
		return inRange(this._view, mouseX, mouseY);
	},

	inLabelRange: function(mouseX, mouseY) {
		var vm = this._view;
		return isVertical(vm)
			? inRange(vm, mouseX, null)
			: inRange(vm, null, mouseY);
	},

	inXRange: function(mouseX) {
		return inRange(this._view, mouseX, null);
	},

	inYRange: function(mouseY) {
		return inRange(this._view, null, mouseY);
	},

	getCenterPoint: function() {
		var vm = this._view;
		var x, y;
		if (isVertical(vm)) {
			x = vm.x;
			y = (vm.y + vm.base) / 2;
		} else {
			x = (vm.x + vm.base) / 2;
			y = vm.y;
		}

		return {x: x, y: y};
	},

	getArea: function() {
		var vm = this._view;

		return isVertical(vm)
			? vm.width * Math.abs(vm.y - vm.base)
			: vm.height * Math.abs(vm.x - vm.base);
	},

	tooltipPosition: function() {
		var vm = this._view;
		return {
			x: vm.x,
			y: vm.y
		};
	}
});

var elements = {};
var Arc = element_arc;
var Line = element_line;
var Point = element_point;
var Rectangle = element_rectangle;
elements.Arc = Arc;
elements.Line = Line;
elements.Point = Point;
elements.Rectangle = Rectangle;

var deprecated = helpers$1._deprecated;
var valueOrDefault$3 = helpers$1.valueOrDefault;

core_defaults._set('bar', {
	hover: {
		mode: 'label'
	},

	scales: {
		xAxes: [{
			type: 'category',
			offset: true,
			gridLines: {
				offsetGridLines: true
			}
		}],

		yAxes: [{
			type: 'linear'
		}]
	}
});

core_defaults._set('global', {
	datasets: {
		bar: {
			categoryPercentage: 0.8,
			barPercentage: 0.9
		}
	}
});

/**
 * Computes the "optimal" sample size to maintain bars equally sized while preventing overlap.
 * @private
 */
function computeMinSampleSize(scale, pixels) {
	var min = scale._length;
	var prev, curr, i, ilen;

	for (i = 1, ilen = pixels.length; i < ilen; ++i) {
		min = Math.min(min, Math.abs(pixels[i] - pixels[i - 1]));
	}

	for (i = 0, ilen = scale.getTicks().length; i < ilen; ++i) {
		curr = scale.getPixelForTick(i);
		min = i > 0 ? Math.min(min, Math.abs(curr - prev)) : min;
		prev = curr;
	}

	return min;
}

/**
 * Computes an "ideal" category based on the absolute bar thickness or, if undefined or null,
 * uses the smallest interval (see computeMinSampleSize) that prevents bar overlapping. This
 * mode currently always generates bars equally sized (until we introduce scriptable options?).
 * @private
 */
function computeFitCategoryTraits(index, ruler, options) {
	var thickness = options.barThickness;
	var count = ruler.stackCount;
	var curr = ruler.pixels[index];
	var min = helpers$1.isNullOrUndef(thickness)
		? computeMinSampleSize(ruler.scale, ruler.pixels)
		: -1;
	var size, ratio;

	if (helpers$1.isNullOrUndef(thickness)) {
		size = min * options.categoryPercentage;
		ratio = options.barPercentage;
	} else {
		// When bar thickness is enforced, category and bar percentages are ignored.
		// Note(SB): we could add support for relative bar thickness (e.g. barThickness: '50%')
		// and deprecate barPercentage since this value is ignored when thickness is absolute.
		size = thickness * count;
		ratio = 1;
	}

	return {
		chunk: size / count,
		ratio: ratio,
		start: curr - (size / 2)
	};
}

/**
 * Computes an "optimal" category that globally arranges bars side by side (no gap when
 * percentage options are 1), based on the previous and following categories. This mode
 * generates bars with different widths when data are not evenly spaced.
 * @private
 */
function computeFlexCategoryTraits(index, ruler, options) {
	var pixels = ruler.pixels;
	var curr = pixels[index];
	var prev = index > 0 ? pixels[index - 1] : null;
	var next = index < pixels.length - 1 ? pixels[index + 1] : null;
	var percent = options.categoryPercentage;
	var start, size;

	if (prev === null) {
		// first data: its size is double based on the next point or,
		// if it's also the last data, we use the scale size.
		prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
	}

	if (next === null) {
		// last data: its size is also double based on the previous point.
		next = curr + curr - prev;
	}

	start = curr - (curr - Math.min(prev, next)) / 2 * percent;
	size = Math.abs(next - prev) / 2 * percent;

	return {
		chunk: size / ruler.stackCount,
		ratio: options.barPercentage,
		start: start
	};
}

var controller_bar = core_datasetController.extend({

	dataElementType: elements.Rectangle,

	/**
	 * @private
	 */
	_dataElementOptions: [
		'backgroundColor',
		'borderColor',
		'borderSkipped',
		'borderWidth',
		'barPercentage',
		'barThickness',
		'categoryPercentage',
		'maxBarThickness',
		'minBarLength'
	],

	initialize: function() {
		var me = this;
		var meta, scaleOpts;

		core_datasetController.prototype.initialize.apply(me, arguments);

		meta = me.getMeta();
		meta.stack = me.getDataset().stack;
		meta.bar = true;

		scaleOpts = me._getIndexScale().options;
		deprecated('bar chart', scaleOpts.barPercentage, 'scales.[x/y]Axes.barPercentage', 'dataset.barPercentage');
		deprecated('bar chart', scaleOpts.barThickness, 'scales.[x/y]Axes.barThickness', 'dataset.barThickness');
		deprecated('bar chart', scaleOpts.categoryPercentage, 'scales.[x/y]Axes.categoryPercentage', 'dataset.categoryPercentage');
		deprecated('bar chart', me._getValueScale().options.minBarLength, 'scales.[x/y]Axes.minBarLength', 'dataset.minBarLength');
		deprecated('bar chart', scaleOpts.maxBarThickness, 'scales.[x/y]Axes.maxBarThickness', 'dataset.maxBarThickness');
	},

	update: function(reset) {
		var me = this;
		var rects = me.getMeta().data;
		var i, ilen;

		me._ruler = me.getRuler();

		for (i = 0, ilen = rects.length; i < ilen; ++i) {
			me.updateElement(rects[i], i, reset);
		}
	},

	updateElement: function(rectangle, index, reset) {
		var me = this;
		var meta = me.getMeta();
		var dataset = me.getDataset();
		var options = me._resolveDataElementOptions(rectangle, index);

		rectangle._xScale = me.getScaleForId(meta.xAxisID);
		rectangle._yScale = me.getScaleForId(meta.yAxisID);
		rectangle._datasetIndex = me.index;
		rectangle._index = index;
		rectangle._model = {
			backgroundColor: options.backgroundColor,
			borderColor: options.borderColor,
			borderSkipped: options.borderSkipped,
			borderWidth: options.borderWidth,
			datasetLabel: dataset.label,
			label: me.chart.data.labels[index]
		};

		if (helpers$1.isArray(dataset.data[index])) {
			rectangle._model.borderSkipped = null;
		}

		me._updateElementGeometry(rectangle, index, reset, options);

		rectangle.pivot();
	},

	/**
	 * @private
	 */
	_updateElementGeometry: function(rectangle, index, reset, options) {
		var me = this;
		var model = rectangle._model;
		var vscale = me._getValueScale();
		var base = vscale.getBasePixel();
		var horizontal = vscale.isHorizontal();
		var ruler = me._ruler || me.getRuler();
		var vpixels = me.calculateBarValuePixels(me.index, index, options);
		var ipixels = me.calculateBarIndexPixels(me.index, index, ruler, options);

		model.horizontal = horizontal;
		model.base = reset ? base : vpixels.base;
		model.x = horizontal ? reset ? base : vpixels.head : ipixels.center;
		model.y = horizontal ? ipixels.center : reset ? base : vpixels.head;
		model.height = horizontal ? ipixels.size : undefined;
		model.width = horizontal ? undefined : ipixels.size;
	},

	/**
	 * Returns the stacks based on groups and bar visibility.
	 * @param {number} [last] - The dataset index
	 * @returns {string[]} The list of stack IDs
	 * @private
	 */
	_getStacks: function(last) {
		var me = this;
		var scale = me._getIndexScale();
		var metasets = scale._getMatchingVisibleMetas(me._type);
		var stacked = scale.options.stacked;
		var ilen = metasets.length;
		var stacks = [];
		var i, meta;

		for (i = 0; i < ilen; ++i) {
			meta = metasets[i];
			// stacked   | meta.stack
			//           | found | not found | undefined
			// false     |   x   |     x     |     x
			// true      |       |     x     |
			// undefined |       |     x     |     x
			if (stacked === false || stacks.indexOf(meta.stack) === -1 ||
				(stacked === undefined && meta.stack === undefined)) {
				stacks.push(meta.stack);
			}
			if (meta.index === last) {
				break;
			}
		}

		return stacks;
	},

	/**
	 * Returns the effective number of stacks based on groups and bar visibility.
	 * @private
	 */
	getStackCount: function() {
		return this._getStacks().length;
	},

	/**
	 * Returns the stack index for the given dataset based on groups and bar visibility.
	 * @param {number} [datasetIndex] - The dataset index
	 * @param {string} [name] - The stack name to find
	 * @returns {number} The stack index
	 * @private
	 */
	getStackIndex: function(datasetIndex, name) {
		var stacks = this._getStacks(datasetIndex);
		var index = (name !== undefined)
			? stacks.indexOf(name)
			: -1; // indexOf returns -1 if element is not present

		return (index === -1)
			? stacks.length - 1
			: index;
	},

	/**
	 * @private
	 */
	getRuler: function() {
		var me = this;
		var scale = me._getIndexScale();
		var pixels = [];
		var i, ilen;

		for (i = 0, ilen = me.getMeta().data.length; i < ilen; ++i) {
			pixels.push(scale.getPixelForValue(null, i, me.index));
		}

		return {
			pixels: pixels,
			start: scale._startPixel,
			end: scale._endPixel,
			stackCount: me.getStackCount(),
			scale: scale
		};
	},

	/**
	 * Note: pixel values are not clamped to the scale area.
	 * @private
	 */
	calculateBarValuePixels: function(datasetIndex, index, options) {
		var me = this;
		var chart = me.chart;
		var scale = me._getValueScale();
		var isHorizontal = scale.isHorizontal();
		var datasets = chart.data.datasets;
		var metasets = scale._getMatchingVisibleMetas(me._type);
		var value = scale._parseValue(datasets[datasetIndex].data[index]);
		var minBarLength = options.minBarLength;
		var stacked = scale.options.stacked;
		var stack = me.getMeta().stack;
		var start = value.start === undefined ? 0 : value.max >= 0 && value.min >= 0 ? value.min : value.max;
		var length = value.start === undefined ? value.end : value.max >= 0 && value.min >= 0 ? value.max - value.min : value.min - value.max;
		var ilen = metasets.length;
		var i, imeta, ivalue, base, head, size, stackLength;

		if (stacked || (stacked === undefined && stack !== undefined)) {
			for (i = 0; i < ilen; ++i) {
				imeta = metasets[i];

				if (imeta.index === datasetIndex) {
					break;
				}

				if (imeta.stack === stack) {
					stackLength = scale._parseValue(datasets[imeta.index].data[index]);
					ivalue = stackLength.start === undefined ? stackLength.end : stackLength.min >= 0 && stackLength.max >= 0 ? stackLength.max : stackLength.min;

					if ((value.min < 0 && ivalue < 0) || (value.max >= 0 && ivalue > 0)) {
						start += ivalue;
					}
				}
			}
		}

		base = scale.getPixelForValue(start);
		head = scale.getPixelForValue(start + length);
		size = head - base;

		if (minBarLength !== undefined && Math.abs(size) < minBarLength) {
			size = minBarLength;
			if (length >= 0 && !isHorizontal || length < 0 && isHorizontal) {
				head = base - minBarLength;
			} else {
				head = base + minBarLength;
			}
		}

		return {
			size: size,
			base: base,
			head: head,
			center: head + size / 2
		};
	},

	/**
	 * @private
	 */
	calculateBarIndexPixels: function(datasetIndex, index, ruler, options) {
		var me = this;
		var range = options.barThickness === 'flex'
			? computeFlexCategoryTraits(index, ruler, options)
			: computeFitCategoryTraits(index, ruler, options);

		var stackIndex = me.getStackIndex(datasetIndex, me.getMeta().stack);
		var center = range.start + (range.chunk * stackIndex) + (range.chunk / 2);
		var size = Math.min(
			valueOrDefault$3(options.maxBarThickness, Infinity),
			range.chunk * range.ratio);

		return {
			base: center - size / 2,
			head: center + size / 2,
			center: center,
			size: size
		};
	},

	draw: function() {
		var me = this;
		var chart = me.chart;
		var scale = me._getValueScale();
		var rects = me.getMeta().data;
		var dataset = me.getDataset();
		var ilen = rects.length;
		var i = 0;

		helpers$1.canvas.clipArea(chart.ctx, chart.chartArea);

		for (; i < ilen; ++i) {
			var val = scale._parseValue(dataset.data[i]);
			if (!isNaN(val.min) && !isNaN(val.max)) {
				rects[i].draw();
			}
		}

		helpers$1.canvas.unclipArea(chart.ctx);
	},

	/**
	 * @private
	 */
	_resolveDataElementOptions: function() {
		var me = this;
		var values = helpers$1.extend({}, core_datasetController.prototype._resolveDataElementOptions.apply(me, arguments));
		var indexOpts = me._getIndexScale().options;
		var valueOpts = me._getValueScale().options;

		values.barPercentage = valueOrDefault$3(indexOpts.barPercentage, values.barPercentage);
		values.barThickness = valueOrDefault$3(indexOpts.barThickness, values.barThickness);
		values.categoryPercentage = valueOrDefault$3(indexOpts.categoryPercentage, values.categoryPercentage);
		values.maxBarThickness = valueOrDefault$3(indexOpts.maxBarThickness, values.maxBarThickness);
		values.minBarLength = valueOrDefault$3(valueOpts.minBarLength, values.minBarLength);

		return values;
	}

});

var valueOrDefault$4 = helpers$1.valueOrDefault;
var resolve$1 = helpers$1.options.resolve;

core_defaults._set('bubble', {
	hover: {
		mode: 'single'
	},

	scales: {
		xAxes: [{
			type: 'linear', // bubble should probably use a linear scale by default
			position: 'bottom',
			id: 'x-axis-0' // need an ID so datasets can reference the scale
		}],
		yAxes: [{
			type: 'linear',
			position: 'left',
			id: 'y-axis-0'
		}]
	},

	tooltips: {
		callbacks: {
			title: function() {
				// Title doesn't make sense for scatter since we format the data as a point
				return '';
			},
			label: function(item, data) {
				var datasetLabel = data.datasets[item.datasetIndex].label || '';
				var dataPoint = data.datasets[item.datasetIndex].data[item.index];
				return datasetLabel + ': (' + item.xLabel + ', ' + item.yLabel + ', ' + dataPoint.r + ')';
			}
		}
	}
});

var controller_bubble = core_datasetController.extend({
	/**
	 * @protected
	 */
	dataElementType: elements.Point,

	/**
	 * @private
	 */
	_dataElementOptions: [
		'backgroundColor',
		'borderColor',
		'borderWidth',
		'hoverBackgroundColor',
		'hoverBorderColor',
		'hoverBorderWidth',
		'hoverRadius',
		'hitRadius',
		'pointStyle',
		'rotation'
	],

	/**
	 * @protected
	 */
	update: function(reset) {
		var me = this;
		var meta = me.getMeta();
		var points = meta.data;

		// Update Points
		helpers$1.each(points, function(point, index) {
			me.updateElement(point, index, reset);
		});
	},

	/**
	 * @protected
	 */
	updateElement: function(point, index, reset) {
		var me = this;
		var meta = me.getMeta();
		var custom = point.custom || {};
		var xScale = me.getScaleForId(meta.xAxisID);
		var yScale = me.getScaleForId(meta.yAxisID);
		var options = me._resolveDataElementOptions(point, index);
		var data = me.getDataset().data[index];
		var dsIndex = me.index;

		var x = reset ? xScale.getPixelForDecimal(0.5) : xScale.getPixelForValue(typeof data === 'object' ? data : NaN, index, dsIndex);
		var y = reset ? yScale.getBasePixel() : yScale.getPixelForValue(data, index, dsIndex);

		point._xScale = xScale;
		point._yScale = yScale;
		point._options = options;
		point._datasetIndex = dsIndex;
		point._index = index;
		point._model = {
			backgroundColor: options.backgroundColor,
			borderColor: options.borderColor,
			borderWidth: options.borderWidth,
			hitRadius: options.hitRadius,
			pointStyle: options.pointStyle,
			rotation: options.rotation,
			radius: reset ? 0 : options.radius,
			skip: custom.skip || isNaN(x) || isNaN(y),
			x: x,
			y: y,
		};

		point.pivot();
	},

	/**
	 * @protected
	 */
	setHoverStyle: function(point) {
		var model = point._model;
		var options = point._options;
		var getHoverColor = helpers$1.getHoverColor;

		point.$previousStyle = {
			backgroundColor: model.backgroundColor,
			borderColor: model.borderColor,
			borderWidth: model.borderWidth,
			radius: model.radius
		};

		model.backgroundColor = valueOrDefault$4(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
		model.borderColor = valueOrDefault$4(options.hoverBorderColor, getHoverColor(options.borderColor));
		model.borderWidth = valueOrDefault$4(options.hoverBorderWidth, options.borderWidth);
		model.radius = options.radius + options.hoverRadius;
	},

	/**
	 * @private
	 */
	_resolveDataElementOptions: function(point, index) {
		var me = this;
		var chart = me.chart;
		var dataset = me.getDataset();
		var custom = point.custom || {};
		var data = dataset.data[index] || {};
		var values = core_datasetController.prototype._resolveDataElementOptions.apply(me, arguments);

		// Scriptable options
		var context = {
			chart: chart,
			dataIndex: index,
			dataset: dataset,
			datasetIndex: me.index
		};

		// In case values were cached (and thus frozen), we need to clone the values
		if (me._cachedDataOpts === values) {
			values = helpers$1.extend({}, values);
		}

		// Custom radius resolution
		values.radius = resolve$1([
			custom.radius,
			data.r,
			me._config.radius,
			chart.options.elements.point.radius
		], context, index);

		return values;
	}
});

var valueOrDefault$5 = helpers$1.valueOrDefault;

var PI$1 = Math.PI;
var DOUBLE_PI$1 = PI$1 * 2;
var HALF_PI$1 = PI$1 / 2;

core_defaults._set('doughnut', {
	animation: {
		// Boolean - Whether we animate the rotation of the Doughnut
		animateRotate: true,
		// Boolean - Whether we animate scaling the Doughnut from the centre
		animateScale: false
	},
	hover: {
		mode: 'single'
	},
	legendCallback: function(chart) {
		var list = document.createElement('ul');
		var data = chart.data;
		var datasets = data.datasets;
		var labels = data.labels;
		var i, ilen, listItem, listItemSpan;

		list.setAttribute('class', chart.id + '-legend');
		if (datasets.length) {
			for (i = 0, ilen = datasets[0].data.length; i < ilen; ++i) {
				listItem = list.appendChild(document.createElement('li'));
				listItemSpan = listItem.appendChild(document.createElement('span'));
				listItemSpan.style.backgroundColor = datasets[0].backgroundColor[i];
				if (labels[i]) {
					listItem.appendChild(document.createTextNode(labels[i]));
				}
			}
		}

		return list.outerHTML;
	},
	legend: {
		labels: {
			generateLabels: function(chart) {
				var data = chart.data;
				if (data.labels.length && data.datasets.length) {
					return data.labels.map(function(label, i) {
						var meta = chart.getDatasetMeta(0);
						var style = meta.controller.getStyle(i);

						return {
							text: label,
							fillStyle: style.backgroundColor,
							strokeStyle: style.borderColor,
							lineWidth: style.borderWidth,
							hidden: isNaN(data.datasets[0].data[i]) || meta.data[i].hidden,

							// Extra data used for toggling the correct item
							index: i
						};
					});
				}
				return [];
			}
		},

		onClick: function(e, legendItem) {
			var index = legendItem.index;
			var chart = this.chart;
			var i, ilen, meta;

			for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
				meta = chart.getDatasetMeta(i);
				// toggle visibility of index if exists
				if (meta.data[index]) {
					meta.data[index].hidden = !meta.data[index].hidden;
				}
			}

			chart.update();
		}
	},

	// The percentage of the chart that we cut out of the middle.
	cutoutPercentage: 50,

	// The rotation of the chart, where the first data arc begins.
	rotation: -HALF_PI$1,

	// The total circumference of the chart.
	circumference: DOUBLE_PI$1,

	// Need to override these to give a nice default
	tooltips: {
		callbacks: {
			title: function() {
				return '';
			},
			label: function(tooltipItem, data) {
				var dataLabel = data.labels[tooltipItem.index];
				var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];

				if (helpers$1.isArray(dataLabel)) {
					// show value on first line of multiline label
					// need to clone because we are changing the value
					dataLabel = dataLabel.slice();
					dataLabel[0] += value;
				} else {
					dataLabel += value;
				}

				return dataLabel;
			}
		}
	}
});

var controller_doughnut = core_datasetController.extend({

	dataElementType: elements.Arc,

	linkScales: helpers$1.noop,

	/**
	 * @private
	 */
	_dataElementOptions: [
		'backgroundColor',
		'borderColor',
		'borderWidth',
		'borderAlign',
		'hoverBackgroundColor',
		'hoverBorderColor',
		'hoverBorderWidth',
	],

	// Get index of the dataset in relation to the visible datasets. This allows determining the inner and outer radius correctly
	getRingIndex: function(datasetIndex) {
		var ringIndex = 0;

		for (var j = 0; j < datasetIndex; ++j) {
			if (this.chart.isDatasetVisible(j)) {
				++ringIndex;
			}
		}

		return ringIndex;
	},

	update: function(reset) {
		var me = this;
		var chart = me.chart;
		var chartArea = chart.chartArea;
		var opts = chart.options;
		var ratioX = 1;
		var ratioY = 1;
		var offsetX = 0;
		var offsetY = 0;
		var meta = me.getMeta();
		var arcs = meta.data;
		var cutout = opts.cutoutPercentage / 100 || 0;
		var circumference = opts.circumference;
		var chartWeight = me._getRingWeight(me.index);
		var maxWidth, maxHeight, i, ilen;

		// If the chart's circumference isn't a full circle, calculate size as a ratio of the width/height of the arc
		if (circumference < DOUBLE_PI$1) {
			var startAngle = opts.rotation % DOUBLE_PI$1;
			startAngle += startAngle >= PI$1 ? -DOUBLE_PI$1 : startAngle < -PI$1 ? DOUBLE_PI$1 : 0;
			var endAngle = startAngle + circumference;
			var startX = Math.cos(startAngle);
			var startY = Math.sin(startAngle);
			var endX = Math.cos(endAngle);
			var endY = Math.sin(endAngle);
			var contains0 = (startAngle <= 0 && endAngle >= 0) || endAngle >= DOUBLE_PI$1;
			var contains90 = (startAngle <= HALF_PI$1 && endAngle >= HALF_PI$1) || endAngle >= DOUBLE_PI$1 + HALF_PI$1;
			var contains180 = startAngle === -PI$1 || endAngle >= PI$1;
			var contains270 = (startAngle <= -HALF_PI$1 && endAngle >= -HALF_PI$1) || endAngle >= PI$1 + HALF_PI$1;
			var minX = contains180 ? -1 : Math.min(startX, startX * cutout, endX, endX * cutout);
			var minY = contains270 ? -1 : Math.min(startY, startY * cutout, endY, endY * cutout);
			var maxX = contains0 ? 1 : Math.max(startX, startX * cutout, endX, endX * cutout);
			var maxY = contains90 ? 1 : Math.max(startY, startY * cutout, endY, endY * cutout);
			ratioX = (maxX - minX) / 2;
			ratioY = (maxY - minY) / 2;
			offsetX = -(maxX + minX) / 2;
			offsetY = -(maxY + minY) / 2;
		}

		for (i = 0, ilen = arcs.length; i < ilen; ++i) {
			arcs[i]._options = me._resolveDataElementOptions(arcs[i], i);
		}

		chart.borderWidth = me.getMaxBorderWidth();
		maxWidth = (chartArea.right - chartArea.left - chart.borderWidth) / ratioX;
		maxHeight = (chartArea.bottom - chartArea.top - chart.borderWidth) / ratioY;
		chart.outerRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
		chart.innerRadius = Math.max(chart.outerRadius * cutout, 0);
		chart.radiusLength = (chart.outerRadius - chart.innerRadius) / (me._getVisibleDatasetWeightTotal() || 1);
		chart.offsetX = offsetX * chart.outerRadius;
		chart.offsetY = offsetY * chart.outerRadius;

		meta.total = me.calculateTotal();

		me.outerRadius = chart.outerRadius - chart.radiusLength * me._getRingWeightOffset(me.index);
		me.innerRadius = Math.max(me.outerRadius - chart.radiusLength * chartWeight, 0);

		for (i = 0, ilen = arcs.length; i < ilen; ++i) {
			me.updateElement(arcs[i], i, reset);
		}
	},

	updateElement: function(arc, index, reset) {
		var me = this;
		var chart = me.chart;
		var chartArea = chart.chartArea;
		var opts = chart.options;
		var animationOpts = opts.animation;
		var centerX = (chartArea.left + chartArea.right) / 2;
		var centerY = (chartArea.top + chartArea.bottom) / 2;
		var startAngle = opts.rotation; // non reset case handled later
		var endAngle = opts.rotation; // non reset case handled later
		var dataset = me.getDataset();
		var circumference = reset && animationOpts.animateRotate ? 0 : arc.hidden ? 0 : me.calculateCircumference(dataset.data[index]) * (opts.circumference / DOUBLE_PI$1);
		var innerRadius = reset && animationOpts.animateScale ? 0 : me.innerRadius;
		var outerRadius = reset && animationOpts.animateScale ? 0 : me.outerRadius;
		var options = arc._options || {};

		helpers$1.extend(arc, {
			// Utility
			_datasetIndex: me.index,
			_index: index,

			// Desired view properties
			_model: {
				backgroundColor: options.backgroundColor,
				borderColor: options.borderColor,
				borderWidth: options.borderWidth,
				borderAlign: options.borderAlign,
				x: centerX + chart.offsetX,
				y: centerY + chart.offsetY,
				startAngle: startAngle,
				endAngle: endAngle,
				circumference: circumference,
				outerRadius: outerRadius,
				innerRadius: innerRadius,
				label: helpers$1.valueAtIndexOrDefault(dataset.label, index, chart.data.labels[index])
			}
		});

		var model = arc._model;

		// Set correct angles if not resetting
		if (!reset || !animationOpts.animateRotate) {
			if (index === 0) {
				model.startAngle = opts.rotation;
			} else {
				model.startAngle = me.getMeta().data[index - 1]._model.endAngle;
			}

			model.endAngle = model.startAngle + model.circumference;
		}

		arc.pivot();
	},

	calculateTotal: function() {
		var dataset = this.getDataset();
		var meta = this.getMeta();
		var total = 0;
		var value;

		helpers$1.each(meta.data, function(element, index) {
			value = dataset.data[index];
			if (!isNaN(value) && !element.hidden) {
				total += Math.abs(value);
			}
		});

		/* if (total === 0) {
			total = NaN;
		}*/

		return total;
	},

	calculateCircumference: function(value) {
		var total = this.getMeta().total;
		if (total > 0 && !isNaN(value)) {
			return DOUBLE_PI$1 * (Math.abs(value) / total);
		}
		return 0;
	},

	// gets the max border or hover width to properly scale pie charts
	getMaxBorderWidth: function(arcs) {
		var me = this;
		var max = 0;
		var chart = me.chart;
		var i, ilen, meta, arc, controller, options, borderWidth, hoverWidth;

		if (!arcs) {
			// Find the outmost visible dataset
			for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
				if (chart.isDatasetVisible(i)) {
					meta = chart.getDatasetMeta(i);
					arcs = meta.data;
					if (i !== me.index) {
						controller = meta.controller;
					}
					break;
				}
			}
		}

		if (!arcs) {
			return 0;
		}

		for (i = 0, ilen = arcs.length; i < ilen; ++i) {
			arc = arcs[i];
			if (controller) {
				controller._configure();
				options = controller._resolveDataElementOptions(arc, i);
			} else {
				options = arc._options;
			}
			if (options.borderAlign !== 'inner') {
				borderWidth = options.borderWidth;
				hoverWidth = options.hoverBorderWidth;

				max = borderWidth > max ? borderWidth : max;
				max = hoverWidth > max ? hoverWidth : max;
			}
		}
		return max;
	},

	/**
	 * @protected
	 */
	setHoverStyle: function(arc) {
		var model = arc._model;
		var options = arc._options;
		var getHoverColor = helpers$1.getHoverColor;

		arc.$previousStyle = {
			backgroundColor: model.backgroundColor,
			borderColor: model.borderColor,
			borderWidth: model.borderWidth,
		};

		model.backgroundColor = valueOrDefault$5(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
		model.borderColor = valueOrDefault$5(options.hoverBorderColor, getHoverColor(options.borderColor));
		model.borderWidth = valueOrDefault$5(options.hoverBorderWidth, options.borderWidth);
	},

	/**
	 * Get radius length offset of the dataset in relation to the visible datasets weights. This allows determining the inner and outer radius correctly
	 * @private
	 */
	_getRingWeightOffset: function(datasetIndex) {
		var ringWeightOffset = 0;

		for (var i = 0; i < datasetIndex; ++i) {
			if (this.chart.isDatasetVisible(i)) {
				ringWeightOffset += this._getRingWeight(i);
			}
		}

		return ringWeightOffset;
	},

	/**
	 * @private
	 */
	_getRingWeight: function(dataSetIndex) {
		return Math.max(valueOrDefault$5(this.chart.data.datasets[dataSetIndex].weight, 1), 0);
	},

	/**
	 * Returns the sum of all visibile data set weights.  This value can be 0.
	 * @private
	 */
	_getVisibleDatasetWeightTotal: function() {
		return this._getRingWeightOffset(this.chart.data.datasets.length);
	}
});

core_defaults._set('horizontalBar', {
	hover: {
		mode: 'index',
		axis: 'y'
	},

	scales: {
		xAxes: [{
			type: 'linear',
			position: 'bottom'
		}],

		yAxes: [{
			type: 'category',
			position: 'left',
			offset: true,
			gridLines: {
				offsetGridLines: true
			}
		}]
	},

	elements: {
		rectangle: {
			borderSkipped: 'left'
		}
	},

	tooltips: {
		mode: 'index',
		axis: 'y'
	}
});

core_defaults._set('global', {
	datasets: {
		horizontalBar: {
			categoryPercentage: 0.8,
			barPercentage: 0.9
		}
	}
});

var controller_horizontalBar = controller_bar.extend({
	/**
	 * @private
	 */
	_getValueScaleId: function() {
		return this.getMeta().xAxisID;
	},

	/**
	 * @private
	 */
	_getIndexScaleId: function() {
		return this.getMeta().yAxisID;
	}
});

var valueOrDefault$6 = helpers$1.valueOrDefault;
var resolve$2 = helpers$1.options.resolve;
var isPointInArea = helpers$1.canvas._isPointInArea;

core_defaults._set('line', {
	showLines: true,
	spanGaps: false,

	hover: {
		mode: 'label'
	},

	scales: {
		xAxes: [{
			type: 'category',
			id: 'x-axis-0'
		}],
		yAxes: [{
			type: 'linear',
			id: 'y-axis-0'
		}]
	}
});

function scaleClip(scale, halfBorderWidth) {
	var tickOpts = scale && scale.options.ticks || {};
	var reverse = tickOpts.reverse;
	var min = tickOpts.min === undefined ? halfBorderWidth : 0;
	var max = tickOpts.max === undefined ? halfBorderWidth : 0;
	return {
		start: reverse ? max : min,
		end: reverse ? min : max
	};
}

function defaultClip(xScale, yScale, borderWidth) {
	var halfBorderWidth = borderWidth / 2;
	var x = scaleClip(xScale, halfBorderWidth);
	var y = scaleClip(yScale, halfBorderWidth);

	return {
		top: y.end,
		right: x.end,
		bottom: y.start,
		left: x.start
	};
}

function toClip(value) {
	var t, r, b, l;

	if (helpers$1.isObject(value)) {
		t = value.top;
		r = value.right;
		b = value.bottom;
		l = value.left;
	} else {
		t = r = b = l = value;
	}

	return {
		top: t,
		right: r,
		bottom: b,
		left: l
	};
}


var controller_line = core_datasetController.extend({

	datasetElementType: elements.Line,

	dataElementType: elements.Point,

	/**
	 * @private
	 */
	_datasetElementOptions: [
		'backgroundColor',
		'borderCapStyle',
		'borderColor',
		'borderDash',
		'borderDashOffset',
		'borderJoinStyle',
		'borderWidth',
		'cubicInterpolationMode',
		'fill'
	],

	/**
	 * @private
	 */
	_dataElementOptions: {
		backgroundColor: 'pointBackgroundColor',
		borderColor: 'pointBorderColor',
		borderWidth: 'pointBorderWidth',
		hitRadius: 'pointHitRadius',
		hoverBackgroundColor: 'pointHoverBackgroundColor',
		hoverBorderColor: 'pointHoverBorderColor',
		hoverBorderWidth: 'pointHoverBorderWidth',
		hoverRadius: 'pointHoverRadius',
		pointStyle: 'pointStyle',
		radius: 'pointRadius',
		rotation: 'pointRotation'
	},

	update: function(reset) {
		var me = this;
		var meta = me.getMeta();
		var line = meta.dataset;
		var points = meta.data || [];
		var options = me.chart.options;
		var config = me._config;
		var showLine = me._showLine = valueOrDefault$6(config.showLine, options.showLines);
		var i, ilen;

		me._xScale = me.getScaleForId(meta.xAxisID);
		me._yScale = me.getScaleForId(meta.yAxisID);

		// Update Line
		if (showLine) {
			// Compatibility: If the properties are defined with only the old name, use those values
			if (config.tension !== undefined && config.lineTension === undefined) {
				config.lineTension = config.tension;
			}

			// Utility
			line._scale = me._yScale;
			line._datasetIndex = me.index;
			// Data
			line._children = points;
			// Model
			line._model = me._resolveDatasetElementOptions(line);

			line.pivot();
		}

		// Update Points
		for (i = 0, ilen = points.length; i < ilen; ++i) {
			me.updateElement(points[i], i, reset);
		}

		if (showLine && line._model.tension !== 0) {
			me.updateBezierControlPoints();
		}

		// Now pivot the point for animation
		for (i = 0, ilen = points.length; i < ilen; ++i) {
			points[i].pivot();
		}
	},

	updateElement: function(point, index, reset) {
		var me = this;
		var meta = me.getMeta();
		var custom = point.custom || {};
		var dataset = me.getDataset();
		var datasetIndex = me.index;
		var value = dataset.data[index];
		var xScale = me._xScale;
		var yScale = me._yScale;
		var lineModel = meta.dataset._model;
		var x, y;

		var options = me._resolveDataElementOptions(point, index);

		x = xScale.getPixelForValue(typeof value === 'object' ? value : NaN, index, datasetIndex);
		y = reset ? yScale.getBasePixel() : me.calculatePointY(value, index, datasetIndex);

		// Utility
		point._xScale = xScale;
		point._yScale = yScale;
		point._options = options;
		point._datasetIndex = datasetIndex;
		point._index = index;

		// Desired view properties
		point._model = {
			x: x,
			y: y,
			skip: custom.skip || isNaN(x) || isNaN(y),
			// Appearance
			radius: options.radius,
			pointStyle: options.pointStyle,
			rotation: options.rotation,
			backgroundColor: options.backgroundColor,
			borderColor: options.borderColor,
			borderWidth: options.borderWidth,
			tension: valueOrDefault$6(custom.tension, lineModel ? lineModel.tension : 0),
			steppedLine: lineModel ? lineModel.steppedLine : false,
			// Tooltip
			hitRadius: options.hitRadius
		};
	},

	/**
	 * @private
	 */
	_resolveDatasetElementOptions: function(element) {
		var me = this;
		var config = me._config;
		var custom = element.custom || {};
		var options = me.chart.options;
		var lineOptions = options.elements.line;
		var values = core_datasetController.prototype._resolveDatasetElementOptions.apply(me, arguments);

		// The default behavior of lines is to break at null values, according
		// to https://github.com/chartjs/Chart.js/issues/2435#issuecomment-216718158
		// This option gives lines the ability to span gaps
		values.spanGaps = valueOrDefault$6(config.spanGaps, options.spanGaps);
		values.tension = valueOrDefault$6(config.lineTension, lineOptions.tension);
		values.steppedLine = resolve$2([custom.steppedLine, config.steppedLine, lineOptions.stepped]);
		values.clip = toClip(valueOrDefault$6(config.clip, defaultClip(me._xScale, me._yScale, values.borderWidth)));

		return values;
	},

	calculatePointY: function(value, index, datasetIndex) {
		var me = this;
		var chart = me.chart;
		var yScale = me._yScale;
		var sumPos = 0;
		var sumNeg = 0;
		var i, ds, dsMeta, stackedRightValue, rightValue, metasets, ilen;

		if (yScale.options.stacked) {
			rightValue = +yScale.getRightValue(value);
			metasets = chart._getSortedVisibleDatasetMetas();
			ilen = metasets.length;

			for (i = 0; i < ilen; ++i) {
				dsMeta = metasets[i];
				if (dsMeta.index === datasetIndex) {
					break;
				}

				ds = chart.data.datasets[dsMeta.index];
				if (dsMeta.type === 'line' && dsMeta.yAxisID === yScale.id) {
					stackedRightValue = +yScale.getRightValue(ds.data[index]);
					if (stackedRightValue < 0) {
						sumNeg += stackedRightValue || 0;
					} else {
						sumPos += stackedRightValue || 0;
					}
				}
			}

			if (rightValue < 0) {
				return yScale.getPixelForValue(sumNeg + rightValue);
			}
			return yScale.getPixelForValue(sumPos + rightValue);
		}
		return yScale.getPixelForValue(value);
	},

	updateBezierControlPoints: function() {
		var me = this;
		var chart = me.chart;
		var meta = me.getMeta();
		var lineModel = meta.dataset._model;
		var area = chart.chartArea;
		var points = meta.data || [];
		var i, ilen, model, controlPoints;

		// Only consider points that are drawn in case the spanGaps option is used
		if (lineModel.spanGaps) {
			points = points.filter(function(pt) {
				return !pt._model.skip;
			});
		}

		function capControlPoint(pt, min, max) {
			return Math.max(Math.min(pt, max), min);
		}

		if (lineModel.cubicInterpolationMode === 'monotone') {
			helpers$1.splineCurveMonotone(points);
		} else {
			for (i = 0, ilen = points.length; i < ilen; ++i) {
				model = points[i]._model;
				controlPoints = helpers$1.splineCurve(
					helpers$1.previousItem(points, i)._model,
					model,
					helpers$1.nextItem(points, i)._model,
					lineModel.tension
				);
				model.controlPointPreviousX = controlPoints.previous.x;
				model.controlPointPreviousY = controlPoints.previous.y;
				model.controlPointNextX = controlPoints.next.x;
				model.controlPointNextY = controlPoints.next.y;
			}
		}

		if (chart.options.elements.line.capBezierPoints) {
			for (i = 0, ilen = points.length; i < ilen; ++i) {
				model = points[i]._model;
				if (isPointInArea(model, area)) {
					if (i > 0 && isPointInArea(points[i - 1]._model, area)) {
						model.controlPointPreviousX = capControlPoint(model.controlPointPreviousX, area.left, area.right);
						model.controlPointPreviousY = capControlPoint(model.controlPointPreviousY, area.top, area.bottom);
					}
					if (i < points.length - 1 && isPointInArea(points[i + 1]._model, area)) {
						model.controlPointNextX = capControlPoint(model.controlPointNextX, area.left, area.right);
						model.controlPointNextY = capControlPoint(model.controlPointNextY, area.top, area.bottom);
					}
				}
			}
		}
	},

	draw: function() {
		var me = this;
		var chart = me.chart;
		var meta = me.getMeta();
		var points = meta.data || [];
		var area = chart.chartArea;
		var canvas = chart.canvas;
		var i = 0;
		var ilen = points.length;
		var clip;

		if (me._showLine) {
			clip = meta.dataset._model.clip;

			helpers$1.canvas.clipArea(chart.ctx, {
				left: clip.left === false ? 0 : area.left - clip.left,
				right: clip.right === false ? canvas.width : area.right + clip.right,
				top: clip.top === false ? 0 : area.top - clip.top,
				bottom: clip.bottom === false ? canvas.height : area.bottom + clip.bottom
			});

			meta.dataset.draw();

			helpers$1.canvas.unclipArea(chart.ctx);
		}

		// Draw the points
		for (; i < ilen; ++i) {
			points[i].draw(area);
		}
	},

	/**
	 * @protected
	 */
	setHoverStyle: function(point) {
		var model = point._model;
		var options = point._options;
		var getHoverColor = helpers$1.getHoverColor;

		point.$previousStyle = {
			backgroundColor: model.backgroundColor,
			borderColor: model.borderColor,
			borderWidth: model.borderWidth,
			radius: model.radius
		};

		model.backgroundColor = valueOrDefault$6(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
		model.borderColor = valueOrDefault$6(options.hoverBorderColor, getHoverColor(options.borderColor));
		model.borderWidth = valueOrDefault$6(options.hoverBorderWidth, options.borderWidth);
		model.radius = valueOrDefault$6(options.hoverRadius, options.radius);
	},
});

var resolve$3 = helpers$1.options.resolve;

core_defaults._set('polarArea', {
	scale: {
		type: 'radialLinear',
		angleLines: {
			display: false
		},
		gridLines: {
			circular: true
		},
		pointLabels: {
			display: false
		},
		ticks: {
			beginAtZero: true
		}
	},

	// Boolean - Whether to animate the rotation of the chart
	animation: {
		animateRotate: true,
		animateScale: true
	},

	startAngle: -0.5 * Math.PI,
	legendCallback: function(chart) {
		var list = document.createElement('ul');
		var data = chart.data;
		var datasets = data.datasets;
		var labels = data.labels;
		var i, ilen, listItem, listItemSpan;

		list.setAttribute('class', chart.id + '-legend');
		if (datasets.length) {
			for (i = 0, ilen = datasets[0].data.length; i < ilen; ++i) {
				listItem = list.appendChild(document.createElement('li'));
				listItemSpan = listItem.appendChild(document.createElement('span'));
				listItemSpan.style.backgroundColor = datasets[0].backgroundColor[i];
				if (labels[i]) {
					listItem.appendChild(document.createTextNode(labels[i]));
				}
			}
		}

		return list.outerHTML;
	},
	legend: {
		labels: {
			generateLabels: function(chart) {
				var data = chart.data;
				if (data.labels.length && data.datasets.length) {
					return data.labels.map(function(label, i) {
						var meta = chart.getDatasetMeta(0);
						var style = meta.controller.getStyle(i);

						return {
							text: label,
							fillStyle: style.backgroundColor,
							strokeStyle: style.borderColor,
							lineWidth: style.borderWidth,
							hidden: isNaN(data.datasets[0].data[i]) || meta.data[i].hidden,

							// Extra data used for toggling the correct item
							index: i
						};
					});
				}
				return [];
			}
		},

		onClick: function(e, legendItem) {
			var index = legendItem.index;
			var chart = this.chart;
			var i, ilen, meta;

			for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
				meta = chart.getDatasetMeta(i);
				meta.data[index].hidden = !meta.data[index].hidden;
			}

			chart.update();
		}
	},

	// Need to override these to give a nice default
	tooltips: {
		callbacks: {
			title: function() {
				return '';
			},
			label: function(item, data) {
				return data.labels[item.index] + ': ' + item.yLabel;
			}
		}
	}
});

var controller_polarArea = core_datasetController.extend({

	dataElementType: elements.Arc,

	linkScales: helpers$1.noop,

	/**
	 * @private
	 */
	_dataElementOptions: [
		'backgroundColor',
		'borderColor',
		'borderWidth',
		'borderAlign',
		'hoverBackgroundColor',
		'hoverBorderColor',
		'hoverBorderWidth',
	],

	/**
	 * @private
	 */
	_getIndexScaleId: function() {
		return this.chart.scale.id;
	},

	/**
	 * @private
	 */
	_getValueScaleId: function() {
		return this.chart.scale.id;
	},

	update: function(reset) {
		var me = this;
		var dataset = me.getDataset();
		var meta = me.getMeta();
		var start = me.chart.options.startAngle || 0;
		var starts = me._starts = [];
		var angles = me._angles = [];
		var arcs = meta.data;
		var i, ilen, angle;

		me._updateRadius();

		meta.count = me.countVisibleElements();

		for (i = 0, ilen = dataset.data.length; i < ilen; i++) {
			starts[i] = start;
			angle = me._computeAngle(i);
			angles[i] = angle;
			start += angle;
		}

		for (i = 0, ilen = arcs.length; i < ilen; ++i) {
			arcs[i]._options = me._resolveDataElementOptions(arcs[i], i);
			me.updateElement(arcs[i], i, reset);
		}
	},

	/**
	 * @private
	 */
	_updateRadius: function() {
		var me = this;
		var chart = me.chart;
		var chartArea = chart.chartArea;
		var opts = chart.options;
		var minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);

		chart.outerRadius = Math.max(minSize / 2, 0);
		chart.innerRadius = Math.max(opts.cutoutPercentage ? (chart.outerRadius / 100) * (opts.cutoutPercentage) : 1, 0);
		chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();

		me.outerRadius = chart.outerRadius - (chart.radiusLength * me.index);
		me.innerRadius = me.outerRadius - chart.radiusLength;
	},

	updateElement: function(arc, index, reset) {
		var me = this;
		var chart = me.chart;
		var dataset = me.getDataset();
		var opts = chart.options;
		var animationOpts = opts.animation;
		var scale = chart.scale;
		var labels = chart.data.labels;

		var centerX = scale.xCenter;
		var centerY = scale.yCenter;

		// var negHalfPI = -0.5 * Math.PI;
		var datasetStartAngle = opts.startAngle;
		var distance = arc.hidden ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
		var startAngle = me._starts[index];
		var endAngle = startAngle + (arc.hidden ? 0 : me._angles[index]);

		var resetRadius = animationOpts.animateScale ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
		var options = arc._options || {};

		helpers$1.extend(arc, {
			// Utility
			_datasetIndex: me.index,
			_index: index,
			_scale: scale,

			// Desired view properties
			_model: {
				backgroundColor: options.backgroundColor,
				borderColor: options.borderColor,
				borderWidth: options.borderWidth,
				borderAlign: options.borderAlign,
				x: centerX,
				y: centerY,
				innerRadius: 0,
				outerRadius: reset ? resetRadius : distance,
				startAngle: reset && animationOpts.animateRotate ? datasetStartAngle : startAngle,
				endAngle: reset && animationOpts.animateRotate ? datasetStartAngle : endAngle,
				label: helpers$1.valueAtIndexOrDefault(labels, index, labels[index])
			}
		});

		arc.pivot();
	},

	countVisibleElements: function() {
		var dataset = this.getDataset();
		var meta = this.getMeta();
		var count = 0;

		helpers$1.each(meta.data, function(element, index) {
			if (!isNaN(dataset.data[index]) && !element.hidden) {
				count++;
			}
		});

		return count;
	},

	/**
	 * @protected
	 */
	setHoverStyle: function(arc) {
		var model = arc._model;
		var options = arc._options;
		var getHoverColor = helpers$1.getHoverColor;
		var valueOrDefault = helpers$1.valueOrDefault;

		arc.$previousStyle = {
			backgroundColor: model.backgroundColor,
			borderColor: model.borderColor,
			borderWidth: model.borderWidth,
		};

		model.backgroundColor = valueOrDefault(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
		model.borderColor = valueOrDefault(options.hoverBorderColor, getHoverColor(options.borderColor));
		model.borderWidth = valueOrDefault(options.hoverBorderWidth, options.borderWidth);
	},

	/**
	 * @private
	 */
	_computeAngle: function(index) {
		var me = this;
		var count = this.getMeta().count;
		var dataset = me.getDataset();
		var meta = me.getMeta();

		if (isNaN(dataset.data[index]) || meta.data[index].hidden) {
			return 0;
		}

		// Scriptable options
		var context = {
			chart: me.chart,
			dataIndex: index,
			dataset: dataset,
			datasetIndex: me.index
		};

		return resolve$3([
			me.chart.options.elements.arc.angle,
			(2 * Math.PI) / count
		], context, index);
	}
});

core_defaults._set('pie', helpers$1.clone(core_defaults.doughnut));
core_defaults._set('pie', {
	cutoutPercentage: 0
});

// Pie charts are Doughnut chart with different defaults
var controller_pie = controller_doughnut;

var valueOrDefault$7 = helpers$1.valueOrDefault;

core_defaults._set('radar', {
	spanGaps: false,
	scale: {
		type: 'radialLinear'
	},
	elements: {
		line: {
			fill: 'start',
			tension: 0 // no bezier in radar
		}
	}
});

var controller_radar = core_datasetController.extend({
	datasetElementType: elements.Line,

	dataElementType: elements.Point,

	linkScales: helpers$1.noop,

	/**
	 * @private
	 */
	_datasetElementOptions: [
		'backgroundColor',
		'borderWidth',
		'borderColor',
		'borderCapStyle',
		'borderDash',
		'borderDashOffset',
		'borderJoinStyle',
		'fill'
	],

	/**
	 * @private
	 */
	_dataElementOptions: {
		backgroundColor: 'pointBackgroundColor',
		borderColor: 'pointBorderColor',
		borderWidth: 'pointBorderWidth',
		hitRadius: 'pointHitRadius',
		hoverBackgroundColor: 'pointHoverBackgroundColor',
		hoverBorderColor: 'pointHoverBorderColor',
		hoverBorderWidth: 'pointHoverBorderWidth',
		hoverRadius: 'pointHoverRadius',
		pointStyle: 'pointStyle',
		radius: 'pointRadius',
		rotation: 'pointRotation'
	},

	/**
	 * @private
	 */
	_getIndexScaleId: function() {
		return this.chart.scale.id;
	},

	/**
	 * @private
	 */
	_getValueScaleId: function() {
		return this.chart.scale.id;
	},

	update: function(reset) {
		var me = this;
		var meta = me.getMeta();
		var line = meta.dataset;
		var points = meta.data || [];
		var scale = me.chart.scale;
		var config = me._config;
		var i, ilen;

		// Compatibility: If the properties are defined with only the old name, use those values
		if (config.tension !== undefined && config.lineTension === undefined) {
			config.lineTension = config.tension;
		}

		// Utility
		line._scale = scale;
		line._datasetIndex = me.index;
		// Data
		line._children = points;
		line._loop = true;
		// Model
		line._model = me._resolveDatasetElementOptions(line);

		line.pivot();

		// Update Points
		for (i = 0, ilen = points.length; i < ilen; ++i) {
			me.updateElement(points[i], i, reset);
		}

		// Update bezier control points
		me.updateBezierControlPoints();

		// Now pivot the point for animation
		for (i = 0, ilen = points.length; i < ilen; ++i) {
			points[i].pivot();
		}
	},

	updateElement: function(point, index, reset) {
		var me = this;
		var custom = point.custom || {};
		var dataset = me.getDataset();
		var scale = me.chart.scale;
		var pointPosition = scale.getPointPositionForValue(index, dataset.data[index]);
		var options = me._resolveDataElementOptions(point, index);
		var lineModel = me.getMeta().dataset._model;
		var x = reset ? scale.xCenter : pointPosition.x;
		var y = reset ? scale.yCenter : pointPosition.y;

		// Utility
		point._scale = scale;
		point._options = options;
		point._datasetIndex = me.index;
		point._index = index;

		// Desired view properties
		point._model = {
			x: x, // value not used in dataset scale, but we want a consistent API between scales
			y: y,
			skip: custom.skip || isNaN(x) || isNaN(y),
			// Appearance
			radius: options.radius,
			pointStyle: options.pointStyle,
			rotation: options.rotation,
			backgroundColor: options.backgroundColor,
			borderColor: options.borderColor,
			borderWidth: options.borderWidth,
			tension: valueOrDefault$7(custom.tension, lineModel ? lineModel.tension : 0),

			// Tooltip
			hitRadius: options.hitRadius
		};
	},

	/**
	 * @private
	 */
	_resolveDatasetElementOptions: function() {
		var me = this;
		var config = me._config;
		var options = me.chart.options;
		var values = core_datasetController.prototype._resolveDatasetElementOptions.apply(me, arguments);

		values.spanGaps = valueOrDefault$7(config.spanGaps, options.spanGaps);
		values.tension = valueOrDefault$7(config.lineTension, options.elements.line.tension);

		return values;
	},

	updateBezierControlPoints: function() {
		var me = this;
		var meta = me.getMeta();
		var area = me.chart.chartArea;
		var points = meta.data || [];
		var i, ilen, model, controlPoints;

		// Only consider points that are drawn in case the spanGaps option is used
		if (meta.dataset._model.spanGaps) {
			points = points.filter(function(pt) {
				return !pt._model.skip;
			});
		}

		function capControlPoint(pt, min, max) {
			return Math.max(Math.min(pt, max), min);
		}

		for (i = 0, ilen = points.length; i < ilen; ++i) {
			model = points[i]._model;
			controlPoints = helpers$1.splineCurve(
				helpers$1.previousItem(points, i, true)._model,
				model,
				helpers$1.nextItem(points, i, true)._model,
				model.tension
			);

			// Prevent the bezier going outside of the bounds of the graph
			model.controlPointPreviousX = capControlPoint(controlPoints.previous.x, area.left, area.right);
			model.controlPointPreviousY = capControlPoint(controlPoints.previous.y, area.top, area.bottom);
			model.controlPointNextX = capControlPoint(controlPoints.next.x, area.left, area.right);
			model.controlPointNextY = capControlPoint(controlPoints.next.y, area.top, area.bottom);
		}
	},

	setHoverStyle: function(point) {
		var model = point._model;
		var options = point._options;
		var getHoverColor = helpers$1.getHoverColor;

		point.$previousStyle = {
			backgroundColor: model.backgroundColor,
			borderColor: model.borderColor,
			borderWidth: model.borderWidth,
			radius: model.radius
		};

		model.backgroundColor = valueOrDefault$7(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
		model.borderColor = valueOrDefault$7(options.hoverBorderColor, getHoverColor(options.borderColor));
		model.borderWidth = valueOrDefault$7(options.hoverBorderWidth, options.borderWidth);
		model.radius = valueOrDefault$7(options.hoverRadius, options.radius);
	}
});

core_defaults._set('scatter', {
	hover: {
		mode: 'single'
	},

	scales: {
		xAxes: [{
			id: 'x-axis-1',    // need an ID so datasets can reference the scale
			type: 'linear',    // scatter should not use a category axis
			position: 'bottom'
		}],
		yAxes: [{
			id: 'y-axis-1',
			type: 'linear',
			position: 'left'
		}]
	},

	tooltips: {
		callbacks: {
			title: function() {
				return '';     // doesn't make sense for scatter since data are formatted as a point
			},
			label: function(item) {
				return '(' + item.xLabel + ', ' + item.yLabel + ')';
			}
		}
	}
});

core_defaults._set('global', {
	datasets: {
		scatter: {
			showLine: false
		}
	}
});

// Scatter charts use line controllers
var controller_scatter = controller_line;

// NOTE export a map in which the key represents the controller type, not
// the class, and so must be CamelCase in order to be correctly retrieved
// by the controller in core.controller.js (`controllers[meta.type]`).

var controllers = {
	bar: controller_bar,
	bubble: controller_bubble,
	doughnut: controller_doughnut,
	horizontalBar: controller_horizontalBar,
	line: controller_line,
	polarArea: controller_polarArea,
	pie: controller_pie,
	radar: controller_radar,
	scatter: controller_scatter
};

/**
 * Helper function to get relative position for an event
 * @param {Event|IEvent} event - The event to get the position for
 * @param {Chart} chart - The chart
 * @returns {object} the event position
 */
function getRelativePosition(e, chart) {
	if (e.native) {
		return {
			x: e.x,
			y: e.y
		};
	}

	return helpers$1.getRelativePosition(e, chart);
}

/**
 * Helper function to traverse all of the visible elements in the chart
 * @param {Chart} chart - the chart
 * @param {function} handler - the callback to execute for each visible item
 */
function parseVisibleItems(chart, handler) {
	var metasets = chart._getSortedVisibleDatasetMetas();
	var metadata, i, j, ilen, jlen, element;

	for (i = 0, ilen = metasets.length; i < ilen; ++i) {
		metadata = metasets[i].data;
		for (j = 0, jlen = metadata.length; j < jlen; ++j) {
			element = metadata[j];
			if (!element._view.skip) {
				handler(element);
			}
		}
	}
}

/**
 * Helper function to get the items that intersect the event position
 * @param {ChartElement[]} items - elements to filter
 * @param {object} position - the point to be nearest to
 * @return {ChartElement[]} the nearest items
 */
function getIntersectItems(chart, position) {
	var elements = [];

	parseVisibleItems(chart, function(element) {
		if (element.inRange(position.x, position.y)) {
			elements.push(element);
		}
	});

	return elements;
}

/**
 * Helper function to get the items nearest to the event position considering all visible items in teh chart
 * @param {Chart} chart - the chart to look at elements from
 * @param {object} position - the point to be nearest to
 * @param {boolean} intersect - if true, only consider items that intersect the position
 * @param {function} distanceMetric - function to provide the distance between points
 * @return {ChartElement[]} the nearest items
 */
function getNearestItems(chart, position, intersect, distanceMetric) {
	var minDistance = Number.POSITIVE_INFINITY;
	var nearestItems = [];

	parseVisibleItems(chart, function(element) {
		if (intersect && !element.inRange(position.x, position.y)) {
			return;
		}

		var center = element.getCenterPoint();
		var distance = distanceMetric(position, center);
		if (distance < minDistance) {
			nearestItems = [element];
			minDistance = distance;
		} else if (distance === minDistance) {
			// Can have multiple items at the same distance in which case we sort by size
			nearestItems.push(element);
		}
	});

	return nearestItems;
}

/**
 * Get a distance metric function for two points based on the
 * axis mode setting
 * @param {string} axis - the axis mode. x|y|xy
 */
function getDistanceMetricForAxis(axis) {
	var useX = axis.indexOf('x') !== -1;
	var useY = axis.indexOf('y') !== -1;

	return function(pt1, pt2) {
		var deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
		var deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
		return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
	};
}

function indexMode(chart, e, options) {
	var position = getRelativePosition(e, chart);
	// Default axis for index mode is 'x' to match old behaviour
	options.axis = options.axis || 'x';
	var distanceMetric = getDistanceMetricForAxis(options.axis);
	var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);
	var elements = [];

	if (!items.length) {
		return [];
	}

	chart._getSortedVisibleDatasetMetas().forEach(function(meta) {
		var element = meta.data[items[0]._index];

		// don't count items that are skipped (null data)
		if (element && !element._view.skip) {
			elements.push(element);
		}
	});

	return elements;
}

/**
 * @interface IInteractionOptions
 */
/**
 * If true, only consider items that intersect the point
 * @name IInterfaceOptions#boolean
 * @type Boolean
 */

/**
 * Contains interaction related functions
 * @namespace Chart.Interaction
 */
var core_interaction = {
	// Helper function for different modes
	modes: {
		single: function(chart, e) {
			var position = getRelativePosition(e, chart);
			var elements = [];

			parseVisibleItems(chart, function(element) {
				if (element.inRange(position.x, position.y)) {
					elements.push(element);
					return elements;
				}
			});

			return elements.slice(0, 1);
		},

		/**
		 * @function Chart.Interaction.modes.label
		 * @deprecated since version 2.4.0
		 * @todo remove at version 3
		 * @private
		 */
		label: indexMode,

		/**
		 * Returns items at the same index. If the options.intersect parameter is true, we only return items if we intersect something
		 * If the options.intersect mode is false, we find the nearest item and return the items at the same index as that item
		 * @function Chart.Interaction.modes.index
		 * @since v2.4.0
		 * @param {Chart} chart - the chart we are returning items from
		 * @param {Event} e - the event we are find things at
		 * @param {IInteractionOptions} options - options to use during interaction
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		index: indexMode,

		/**
		 * Returns items in the same dataset. If the options.intersect parameter is true, we only return items if we intersect something
		 * If the options.intersect is false, we find the nearest item and return the items in that dataset
		 * @function Chart.Interaction.modes.dataset
		 * @param {Chart} chart - the chart we are returning items from
		 * @param {Event} e - the event we are find things at
		 * @param {IInteractionOptions} options - options to use during interaction
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		dataset: function(chart, e, options) {
			var position = getRelativePosition(e, chart);
			options.axis = options.axis || 'xy';
			var distanceMetric = getDistanceMetricForAxis(options.axis);
			var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);

			if (items.length > 0) {
				items = chart.getDatasetMeta(items[0]._datasetIndex).data;
			}

			return items;
		},

		/**
		 * @function Chart.Interaction.modes.x-axis
		 * @deprecated since version 2.4.0. Use index mode and intersect == true
		 * @todo remove at version 3
		 * @private
		 */
		'x-axis': function(chart, e) {
			return indexMode(chart, e, {intersect: false});
		},

		/**
		 * Point mode returns all elements that hit test based on the event position
		 * of the event
		 * @function Chart.Interaction.modes.intersect
		 * @param {Chart} chart - the chart we are returning items from
		 * @param {Event} e - the event we are find things at
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		point: function(chart, e) {
			var position = getRelativePosition(e, chart);
			return getIntersectItems(chart, position);
		},

		/**
		 * nearest mode returns the element closest to the point
		 * @function Chart.Interaction.modes.intersect
		 * @param {Chart} chart - the chart we are returning items from
		 * @param {Event} e - the event we are find things at
		 * @param {IInteractionOptions} options - options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		nearest: function(chart, e, options) {
			var position = getRelativePosition(e, chart);
			options.axis = options.axis || 'xy';
			var distanceMetric = getDistanceMetricForAxis(options.axis);
			return getNearestItems(chart, position, options.intersect, distanceMetric);
		},

		/**
		 * x mode returns the elements that hit-test at the current x coordinate
		 * @function Chart.Interaction.modes.x
		 * @param {Chart} chart - the chart we are returning items from
		 * @param {Event} e - the event we are find things at
		 * @param {IInteractionOptions} options - options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		x: function(chart, e, options) {
			var position = getRelativePosition(e, chart);
			var items = [];
			var intersectsItem = false;

			parseVisibleItems(chart, function(element) {
				if (element.inXRange(position.x)) {
					items.push(element);
				}

				if (element.inRange(position.x, position.y)) {
					intersectsItem = true;
				}
			});

			// If we want to trigger on an intersect and we don't have any items
			// that intersect the position, return nothing
			if (options.intersect && !intersectsItem) {
				items = [];
			}
			return items;
		},

		/**
		 * y mode returns the elements that hit-test at the current y coordinate
		 * @function Chart.Interaction.modes.y
		 * @param {Chart} chart - the chart we are returning items from
		 * @param {Event} e - the event we are find things at
		 * @param {IInteractionOptions} options - options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		y: function(chart, e, options) {
			var position = getRelativePosition(e, chart);
			var items = [];
			var intersectsItem = false;

			parseVisibleItems(chart, function(element) {
				if (element.inYRange(position.y)) {
					items.push(element);
				}

				if (element.inRange(position.x, position.y)) {
					intersectsItem = true;
				}
			});

			// If we want to trigger on an intersect and we don't have any items
			// that intersect the position, return nothing
			if (options.intersect && !intersectsItem) {
				items = [];
			}
			return items;
		}
	}
};

var extend = helpers$1.extend;

function filterByPosition(array, position) {
	return helpers$1.where(array, function(v) {
		return v.pos === position;
	});
}

function sortByWeight(array, reverse) {
	return array.sort(function(a, b) {
		var v0 = reverse ? b : a;
		var v1 = reverse ? a : b;
		return v0.weight === v1.weight ?
			v0.index - v1.index :
			v0.weight - v1.weight;
	});
}

function wrapBoxes(boxes) {
	var layoutBoxes = [];
	var i, ilen, box;

	for (i = 0, ilen = (boxes || []).length; i < ilen; ++i) {
		box = boxes[i];
		layoutBoxes.push({
			index: i,
			box: box,
			pos: box.position,
			horizontal: box.isHorizontal(),
			weight: box.weight
		});
	}
	return layoutBoxes;
}

function setLayoutDims(layouts, params) {
	var i, ilen, layout;
	for (i = 0, ilen = layouts.length; i < ilen; ++i) {
		layout = layouts[i];
		// store width used instead of chartArea.w in fitBoxes
		layout.width = layout.horizontal
			? layout.box.fullWidth && params.availableWidth
			: params.vBoxMaxWidth;
		// store height used instead of chartArea.h in fitBoxes
		layout.height = layout.horizontal && params.hBoxMaxHeight;
	}
}

function buildLayoutBoxes(boxes) {
	var layoutBoxes = wrapBoxes(boxes);
	var left = sortByWeight(filterByPosition(layoutBoxes, 'left'), true);
	var right = sortByWeight(filterByPosition(layoutBoxes, 'right'));
	var top = sortByWeight(filterByPosition(layoutBoxes, 'top'), true);
	var bottom = sortByWeight(filterByPosition(layoutBoxes, 'bottom'));

	return {
		leftAndTop: left.concat(top),
		rightAndBottom: right.concat(bottom),
		chartArea: filterByPosition(layoutBoxes, 'chartArea'),
		vertical: left.concat(right),
		horizontal: top.concat(bottom)
	};
}

function getCombinedMax(maxPadding, chartArea, a, b) {
	return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
}

function updateDims(chartArea, params, layout) {
	var box = layout.box;
	var maxPadding = chartArea.maxPadding;
	var newWidth, newHeight;

	if (layout.size) {
		// this layout was already counted for, lets first reduce old size
		chartArea[layout.pos] -= layout.size;
	}
	layout.size = layout.horizontal ? box.height : box.width;
	chartArea[layout.pos] += layout.size;

	if (box.getPadding) {
		var boxPadding = box.getPadding();
		maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
		maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
		maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
		maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
	}

	newWidth = params.outerWidth - getCombinedMax(maxPadding, chartArea, 'left', 'right');
	newHeight = params.outerHeight - getCombinedMax(maxPadding, chartArea, 'top', 'bottom');

	if (newWidth !== chartArea.w || newHeight !== chartArea.h) {
		chartArea.w = newWidth;
		chartArea.h = newHeight;

		// return true if chart area changed in layout's direction
		var sizes = layout.horizontal ? [newWidth, chartArea.w] : [newHeight, chartArea.h];
		return sizes[0] !== sizes[1] && (!isNaN(sizes[0]) || !isNaN(sizes[1]));
	}
}

function handleMaxPadding(chartArea) {
	var maxPadding = chartArea.maxPadding;

	function updatePos(pos) {
		var change = Math.max(maxPadding[pos] - chartArea[pos], 0);
		chartArea[pos] += change;
		return change;
	}
	chartArea.y += updatePos('top');
	chartArea.x += updatePos('left');
	updatePos('right');
	updatePos('bottom');
}

function getMargins(horizontal, chartArea) {
	var maxPadding = chartArea.maxPadding;

	function marginForPositions(positions) {
		var margin = {left: 0, top: 0, right: 0, bottom: 0};
		positions.forEach(function(pos) {
			margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
		});
		return margin;
	}

	return horizontal
		? marginForPositions(['left', 'right'])
		: marginForPositions(['top', 'bottom']);
}

function fitBoxes(boxes, chartArea, params) {
	var refitBoxes = [];
	var i, ilen, layout, box, refit, changed;

	for (i = 0, ilen = boxes.length; i < ilen; ++i) {
		layout = boxes[i];
		box = layout.box;

		box.update(
			layout.width || chartArea.w,
			layout.height || chartArea.h,
			getMargins(layout.horizontal, chartArea)
		);
		if (updateDims(chartArea, params, layout)) {
			changed = true;
			if (refitBoxes.length) {
				// Dimensions changed and there were non full width boxes before this
				// -> we have to refit those
				refit = true;
			}
		}
		if (!box.fullWidth) { // fullWidth boxes don't need to be re-fitted in any case
			refitBoxes.push(layout);
		}
	}

	return refit ? fitBoxes(refitBoxes, chartArea, params) || changed : changed;
}

function placeBoxes(boxes, chartArea, params) {
	var userPadding = params.padding;
	var x = chartArea.x;
	var y = chartArea.y;
	var i, ilen, layout, box;

	for (i = 0, ilen = boxes.length; i < ilen; ++i) {
		layout = boxes[i];
		box = layout.box;
		if (layout.horizontal) {
			box.left = box.fullWidth ? userPadding.left : chartArea.left;
			box.right = box.fullWidth ? params.outerWidth - userPadding.right : chartArea.left + chartArea.w;
			box.top = y;
			box.bottom = y + box.height;
			box.width = box.right - box.left;
			y = box.bottom;
		} else {
			box.left = x;
			box.right = x + box.width;
			box.top = chartArea.top;
			box.bottom = chartArea.top + chartArea.h;
			box.height = box.bottom - box.top;
			x = box.right;
		}
	}

	chartArea.x = x;
	chartArea.y = y;
}

core_defaults._set('global', {
	layout: {
		padding: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		}
	}
});

/**
 * @interface ILayoutItem
 * @prop {string} position - The position of the item in the chart layout. Possible values are
 * 'left', 'top', 'right', 'bottom', and 'chartArea'
 * @prop {number} weight - The weight used to sort the item. Higher weights are further away from the chart area
 * @prop {boolean} fullWidth - if true, and the item is horizontal, then push vertical boxes down
 * @prop {function} isHorizontal - returns true if the layout item is horizontal (ie. top or bottom)
 * @prop {function} update - Takes two parameters: width and height. Returns size of item
 * @prop {function} getPadding -  Returns an object with padding on the edges
 * @prop {number} width - Width of item. Must be valid after update()
 * @prop {number} height - Height of item. Must be valid after update()
 * @prop {number} left - Left edge of the item. Set by layout system and cannot be used in update
 * @prop {number} top - Top edge of the item. Set by layout system and cannot be used in update
 * @prop {number} right - Right edge of the item. Set by layout system and cannot be used in update
 * @prop {number} bottom - Bottom edge of the item. Set by layout system and cannot be used in update
 */

// The layout service is very self explanatory.  It's responsible for the layout within a chart.
// Scales, Legends and Plugins all rely on the layout service and can easily register to be placed anywhere they need
// It is this service's responsibility of carrying out that layout.
var core_layouts = {
	defaults: {},

	/**
	 * Register a box to a chart.
	 * A box is simply a reference to an object that requires layout. eg. Scales, Legend, Title.
	 * @param {Chart} chart - the chart to use
	 * @param {ILayoutItem} item - the item to add to be layed out
	 */
	addBox: function(chart, item) {
		if (!chart.boxes) {
			chart.boxes = [];
		}

		// initialize item with default values
		item.fullWidth = item.fullWidth || false;
		item.position = item.position || 'top';
		item.weight = item.weight || 0;
		item._layers = item._layers || function() {
			return [{
				z: 0,
				draw: function() {
					item.draw.apply(item, arguments);
				}
			}];
		};

		chart.boxes.push(item);
	},

	/**
	 * Remove a layoutItem from a chart
	 * @param {Chart} chart - the chart to remove the box from
	 * @param {ILayoutItem} layoutItem - the item to remove from the layout
	 */
	removeBox: function(chart, layoutItem) {
		var index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
		if (index !== -1) {
			chart.boxes.splice(index, 1);
		}
	},

	/**
	 * Sets (or updates) options on the given `item`.
	 * @param {Chart} chart - the chart in which the item lives (or will be added to)
	 * @param {ILayoutItem} item - the item to configure with the given options
	 * @param {object} options - the new item options.
	 */
	configure: function(chart, item, options) {
		var props = ['fullWidth', 'position', 'weight'];
		var ilen = props.length;
		var i = 0;
		var prop;

		for (; i < ilen; ++i) {
			prop = props[i];
			if (options.hasOwnProperty(prop)) {
				item[prop] = options[prop];
			}
		}
	},

	/**
	 * Fits boxes of the given chart into the given size by having each box measure itself
	 * then running a fitting algorithm
	 * @param {Chart} chart - the chart
	 * @param {number} width - the width to fit into
	 * @param {number} height - the height to fit into
	 */
	update: function(chart, width, height) {
		if (!chart) {
			return;
		}

		var layoutOptions = chart.options.layout || {};
		var padding = helpers$1.options.toPadding(layoutOptions.padding);

		var availableWidth = width - padding.width;
		var availableHeight = height - padding.height;
		var boxes = buildLayoutBoxes(chart.boxes);
		var verticalBoxes = boxes.vertical;
		var horizontalBoxes = boxes.horizontal;

		// Essentially we now have any number of boxes on each of the 4 sides.
		// Our canvas looks like the following.
		// The areas L1 and L2 are the left axes. R1 is the right axis, T1 is the top axis and
		// B1 is the bottom axis
		// There are also 4 quadrant-like locations (left to right instead of clockwise) reserved for chart overlays
		// These locations are single-box locations only, when trying to register a chartArea location that is already taken,
		// an error will be thrown.
		//
		// |----------------------------------------------------|
		// |                  T1 (Full Width)                   |
		// |----------------------------------------------------|
		// |    |    |                 T2                  |    |
		// |    |----|-------------------------------------|----|
		// |    |    | C1 |                           | C2 |    |
		// |    |    |----|                           |----|    |
		// |    |    |                                     |    |
		// | L1 | L2 |           ChartArea (C0)            | R1 |
		// |    |    |                                     |    |
		// |    |    |----|                           |----|    |
		// |    |    | C3 |                           | C4 |    |
		// |    |----|-------------------------------------|----|
		// |    |    |                 B1                  |    |
		// |----------------------------------------------------|
		// |                  B2 (Full Width)                   |
		// |----------------------------------------------------|
		//

		var params = Object.freeze({
			outerWidth: width,
			outerHeight: height,
			padding: padding,
			availableWidth: availableWidth,
			vBoxMaxWidth: availableWidth / 2 / verticalBoxes.length,
			hBoxMaxHeight: availableHeight / 2
		});
		var chartArea = extend({
			maxPadding: extend({}, padding),
			w: availableWidth,
			h: availableHeight,
			x: padding.left,
			y: padding.top
		}, padding);

		setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);

		// First fit vertical boxes
		fitBoxes(verticalBoxes, chartArea, params);

		// Then fit horizontal boxes
		if (fitBoxes(horizontalBoxes, chartArea, params)) {
			// if the area changed, re-fit vertical boxes
			fitBoxes(verticalBoxes, chartArea, params);
		}

		handleMaxPadding(chartArea);

		// Finally place the boxes to correct coordinates
		placeBoxes(boxes.leftAndTop, chartArea, params);

		// Move to opposite side of chart
		chartArea.x += chartArea.w;
		chartArea.y += chartArea.h;

		placeBoxes(boxes.rightAndBottom, chartArea, params);

		chart.chartArea = {
			left: chartArea.left,
			top: chartArea.top,
			right: chartArea.left + chartArea.w,
			bottom: chartArea.top + chartArea.h
		};

		// Finally update boxes in chartArea (radial scale for example)
		helpers$1.each(boxes.chartArea, function(layout) {
			var box = layout.box;
			extend(box, chart.chartArea);
			box.update(chartArea.w, chartArea.h);
		});
	}
};

/**
 * Platform fallback implementation (minimal).
 * @see https://github.com/chartjs/Chart.js/pull/4591#issuecomment-319575939
 */

var platform_basic = {
	acquireContext: function(item) {
		if (item && item.canvas) {
			// Support for any object associated to a canvas (including a context2d)
			item = item.canvas;
		}

		return item && item.getContext('2d') || null;
	}
};

var platform_dom = "/*\r\n * DOM element rendering detection\r\n * https://davidwalsh.name/detect-node-insertion\r\n */\r\n@keyframes chartjs-render-animation {\r\n\tfrom { opacity: 0.99; }\r\n\tto { opacity: 1; }\r\n}\r\n\r\n.chartjs-render-monitor {\r\n\tanimation: chartjs-render-animation 0.001s;\r\n}\r\n\r\n/*\r\n * DOM element resizing detection\r\n * https://github.com/marcj/css-element-queries\r\n */\r\n.chartjs-size-monitor,\r\n.chartjs-size-monitor-expand,\r\n.chartjs-size-monitor-shrink {\r\n\tposition: absolute;\r\n\tdirection: ltr;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\tvisibility: hidden;\r\n\tz-index: -1;\r\n}\r\n\r\n.chartjs-size-monitor-expand > div {\r\n\tposition: absolute;\r\n\twidth: 1000000px;\r\n\theight: 1000000px;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n\r\n.chartjs-size-monitor-shrink > div {\r\n\tposition: absolute;\r\n\twidth: 200%;\r\n\theight: 200%;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n";

var platform_dom$1 = /*#__PURE__*/Object.freeze({
__proto__: null,
'default': platform_dom
});

var stylesheet = getCjsExportFromNamespace(platform_dom$1);

var EXPANDO_KEY = '$chartjs';
var CSS_PREFIX = 'chartjs-';
var CSS_SIZE_MONITOR = CSS_PREFIX + 'size-monitor';
var CSS_RENDER_MONITOR = CSS_PREFIX + 'render-monitor';
var CSS_RENDER_ANIMATION = CSS_PREFIX + 'render-animation';
var ANIMATION_START_EVENTS = ['animationstart', 'webkitAnimationStart'];

/**
 * DOM event types -> Chart.js event types.
 * Note: only events with different types are mapped.
 * @see https://developer.mozilla.org/en-US/docs/Web/Events
 */
var EVENT_TYPES = {
	touchstart: 'mousedown',
	touchmove: 'mousemove',
	touchend: 'mouseup',
	pointerenter: 'mouseenter',
	pointerdown: 'mousedown',
	pointermove: 'mousemove',
	pointerup: 'mouseup',
	pointerleave: 'mouseout',
	pointerout: 'mouseout'
};

/**
 * The "used" size is the final value of a dimension property after all calculations have
 * been performed. This method uses the computed style of `element` but returns undefined
 * if the computed style is not expressed in pixels. That can happen in some cases where
 * `element` has a size relative to its parent and this last one is not yet displayed,
 * for example because of `display: none` on a parent node.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 * @returns {number} Size in pixels or undefined if unknown.
 */
function readUsedSize(element, property) {
	var value = helpers$1.getStyle(element, property);
	var matches = value && value.match(/^(\d+)(\.\d+)?px$/);
	return matches ? Number(matches[1]) : undefined;
}

/**
 * Initializes the canvas style and render size without modifying the canvas display size,
 * since responsiveness is handled by the controller.resize() method. The config is used
 * to determine the aspect ratio to apply in case no explicit height has been specified.
 */
function initCanvas(canvas, config) {
	var style = canvas.style;

	// NOTE(SB) canvas.getAttribute('width') !== canvas.width: in the first case it
	// returns null or '' if no explicit value has been set to the canvas attribute.
	var renderHeight = canvas.getAttribute('height');
	var renderWidth = canvas.getAttribute('width');

	// Chart.js modifies some canvas values that we want to restore on destroy
	canvas[EXPANDO_KEY] = {
		initial: {
			height: renderHeight,
			width: renderWidth,
			style: {
				display: style.display,
				height: style.height,
				width: style.width
			}
		}
	};

	// Force canvas to display as block to avoid extra space caused by inline
	// elements, which would interfere with the responsive resize process.
	// https://github.com/chartjs/Chart.js/issues/2538
	style.display = style.display || 'block';

	if (renderWidth === null || renderWidth === '') {
		var displayWidth = readUsedSize(canvas, 'width');
		if (displayWidth !== undefined) {
			canvas.width = displayWidth;
		}
	}

	if (renderHeight === null || renderHeight === '') {
		if (canvas.style.height === '') {
			// If no explicit render height and style height, let's apply the aspect ratio,
			// which one can be specified by the user but also by charts as default option
			// (i.e. options.aspectRatio). If not specified, use canvas aspect ratio of 2.
			canvas.height = canvas.width / (config.options.aspectRatio || 2);
		} else {
			var displayHeight = readUsedSize(canvas, 'height');
			if (displayWidth !== undefined) {
				canvas.height = displayHeight;
			}
		}
	}

	return canvas;
}

/**
 * Detects support for options object argument in addEventListener.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 * @private
 */
var supportsEventListenerOptions = (function() {
	var supports = false;
	try {
		var options = Object.defineProperty({}, 'passive', {
			// eslint-disable-next-line getter-return
			get: function() {
				supports = true;
			}
		});
		window.addEventListener('e', null, options);
	} catch (e) {
		// continue regardless of error
	}
	return supports;
}());

// Default passive to true as expected by Chrome for 'touchstart' and 'touchend' events.
// https://github.com/chartjs/Chart.js/issues/4287
var eventListenerOptions = supportsEventListenerOptions ? {passive: true} : false;

function addListener(node, type, listener) {
	node.addEventListener(type, listener, eventListenerOptions);
}

function removeListener(node, type, listener) {
	node.removeEventListener(type, listener, eventListenerOptions);
}

function createEvent(type, chart, x, y, nativeEvent) {
	return {
		type: type,
		chart: chart,
		native: nativeEvent || null,
		x: x !== undefined ? x : null,
		y: y !== undefined ? y : null,
	};
}

function fromNativeEvent(event, chart) {
	var type = EVENT_TYPES[event.type] || event.type;
	var pos = helpers$1.getRelativePosition(event, chart);
	return createEvent(type, chart, pos.x, pos.y, event);
}

function throttled(fn, thisArg) {
	var ticking = false;
	var args = [];

	return function() {
		args = Array.prototype.slice.call(arguments);
		thisArg = thisArg || this;

		if (!ticking) {
			ticking = true;
			helpers$1.requestAnimFrame.call(window, function() {
				ticking = false;
				fn.apply(thisArg, args);
			});
		}
	};
}

function createDiv(cls) {
	var el = document.createElement('div');
	el.className = cls || '';
	return el;
}

// Implementation based on https://github.com/marcj/css-element-queries
function createResizer(handler) {
	var maxSize = 1000000;

	// NOTE(SB) Don't use innerHTML because it could be considered unsafe.
	// https://github.com/chartjs/Chart.js/issues/5902
	var resizer = createDiv(CSS_SIZE_MONITOR);
	var expand = createDiv(CSS_SIZE_MONITOR + '-expand');
	var shrink = createDiv(CSS_SIZE_MONITOR + '-shrink');

	expand.appendChild(createDiv());
	shrink.appendChild(createDiv());

	resizer.appendChild(expand);
	resizer.appendChild(shrink);
	resizer._reset = function() {
		expand.scrollLeft = maxSize;
		expand.scrollTop = maxSize;
		shrink.scrollLeft = maxSize;
		shrink.scrollTop = maxSize;
	};

	var onScroll = function() {
		resizer._reset();
		handler();
	};

	addListener(expand, 'scroll', onScroll.bind(expand, 'expand'));
	addListener(shrink, 'scroll', onScroll.bind(shrink, 'shrink'));

	return resizer;
}

// https://davidwalsh.name/detect-node-insertion
function watchForRender(node, handler) {
	var expando = node[EXPANDO_KEY] || (node[EXPANDO_KEY] = {});
	var proxy = expando.renderProxy = function(e) {
		if (e.animationName === CSS_RENDER_ANIMATION) {
			handler();
		}
	};

	helpers$1.each(ANIMATION_START_EVENTS, function(type) {
		addListener(node, type, proxy);
	});

	// #4737: Chrome might skip the CSS animation when the CSS_RENDER_MONITOR class
	// is removed then added back immediately (same animation frame?). Accessing the
	// `offsetParent` property will force a reflow and re-evaluate the CSS animation.
	// https://gist.github.com/paulirish/5d52fb081b3570c81e3a#box-metrics
	// https://github.com/chartjs/Chart.js/issues/4737
	expando.reflow = !!node.offsetParent;

	node.classList.add(CSS_RENDER_MONITOR);
}

function unwatchForRender(node) {
	var expando = node[EXPANDO_KEY] || {};
	var proxy = expando.renderProxy;

	if (proxy) {
		helpers$1.each(ANIMATION_START_EVENTS, function(type) {
			removeListener(node, type, proxy);
		});

		delete expando.renderProxy;
	}

	node.classList.remove(CSS_RENDER_MONITOR);
}

function addResizeListener(node, listener, chart) {
	var expando = node[EXPANDO_KEY] || (node[EXPANDO_KEY] = {});

	// Let's keep track of this added resizer and thus avoid DOM query when removing it.
	var resizer = expando.resizer = createResizer(throttled(function() {
		if (expando.resizer) {
			var container = chart.options.maintainAspectRatio && node.parentNode;
			var w = container ? container.clientWidth : 0;
			listener(createEvent('resize', chart));
			if (container && container.clientWidth < w && chart.canvas) {
				// If the container size shrank during chart resize, let's assume
				// scrollbar appeared. So we resize again with the scrollbar visible -
				// effectively making chart smaller and the scrollbar hidden again.
				// Because we are inside `throttled`, and currently `ticking`, scroll
				// events are ignored during this whole 2 resize process.
				// If we assumed wrong and something else happened, we are resizing
				// twice in a frame (potential performance issue)
				listener(createEvent('resize', chart));
			}
		}
	}));

	// The resizer needs to be attached to the node parent, so we first need to be
	// sure that `node` is attached to the DOM before injecting the resizer element.
	watchForRender(node, function() {
		if (expando.resizer) {
			var container = node.parentNode;
			if (container && container !== resizer.parentNode) {
				container.insertBefore(resizer, container.firstChild);
			}

			// The container size might have changed, let's reset the resizer state.
			resizer._reset();
		}
	});
}

function removeResizeListener(node) {
	var expando = node[EXPANDO_KEY] || {};
	var resizer = expando.resizer;

	delete expando.resizer;
	unwatchForRender(node);

	if (resizer && resizer.parentNode) {
		resizer.parentNode.removeChild(resizer);
	}
}

/**
 * Injects CSS styles inline if the styles are not already present.
 * @param {HTMLDocument|ShadowRoot} rootNode - the node to contain the <style>.
 * @param {string} css - the CSS to be injected.
 */
function injectCSS(rootNode, css) {
	// https://stackoverflow.com/q/3922139
	var expando = rootNode[EXPANDO_KEY] || (rootNode[EXPANDO_KEY] = {});
	if (!expando.containsStyles) {
		expando.containsStyles = true;
		css = '/* Chart.js */\n' + css;
		var style = document.createElement('style');
		style.setAttribute('type', 'text/css');
		style.appendChild(document.createTextNode(css));
		rootNode.appendChild(style);
	}
}

var platform_dom$2 = {
	/**
	 * When `true`, prevents the automatic injection of the stylesheet required to
	 * correctly detect when the chart is added to the DOM and then resized. This
	 * switch has been added to allow external stylesheet (`dist/Chart(.min)?.js`)
	 * to be manually imported to make this library compatible with any CSP.
	 * See https://github.com/chartjs/Chart.js/issues/5208
	 */
	disableCSSInjection: false,

	/**
	 * This property holds whether this platform is enabled for the current environment.
	 * Currently used by platform.js to select the proper implementation.
	 * @private
	 */
	_enabled: typeof window !== 'undefined' && typeof document !== 'undefined',

	/**
	 * Initializes resources that depend on platform options.
	 * @param {HTMLCanvasElement} canvas - The Canvas element.
	 * @private
	 */
	_ensureLoaded: function(canvas) {
		if (!this.disableCSSInjection) {
			// If the canvas is in a shadow DOM, then the styles must also be inserted
			// into the same shadow DOM.
			// https://github.com/chartjs/Chart.js/issues/5763
			var root = canvas.getRootNode ? canvas.getRootNode() : document;
			var targetNode = root.host ? root : document.head;
			injectCSS(targetNode, stylesheet);
		}
	},

	acquireContext: function(item, config) {
		if (typeof item === 'string') {
			item = document.getElementById(item);
		} else if (item.length) {
			// Support for array based queries (such as jQuery)
			item = item[0];
		}

		if (item && item.canvas) {
			// Support for any object associated to a canvas (including a context2d)
			item = item.canvas;
		}

		// To prevent canvas fingerprinting, some add-ons undefine the getContext
		// method, for example: https://github.com/kkapsner/CanvasBlocker
		// https://github.com/chartjs/Chart.js/issues/2807
		var context = item && item.getContext && item.getContext('2d');

		// `instanceof HTMLCanvasElement/CanvasRenderingContext2D` fails when the item is
		// inside an iframe or when running in a protected environment. We could guess the
		// types from their toString() value but let's keep things flexible and assume it's
		// a sufficient condition if the item has a context2D which has item as `canvas`.
		// https://github.com/chartjs/Chart.js/issues/3887
		// https://github.com/chartjs/Chart.js/issues/4102
		// https://github.com/chartjs/Chart.js/issues/4152
		if (context && context.canvas === item) {
			// Load platform resources on first chart creation, to make it possible to
			// import the library before setting platform options.
			this._ensureLoaded(item);
			initCanvas(item, config);
			return context;
		}

		return null;
	},

	releaseContext: function(context) {
		var canvas = context.canvas;
		if (!canvas[EXPANDO_KEY]) {
			return;
		}

		var initial = canvas[EXPANDO_KEY].initial;
		['height', 'width'].forEach(function(prop) {
			var value = initial[prop];
			if (helpers$1.isNullOrUndef(value)) {
				canvas.removeAttribute(prop);
			} else {
				canvas.setAttribute(prop, value);
			}
		});

		helpers$1.each(initial.style || {}, function(value, key) {
			canvas.style[key] = value;
		});

		// The canvas render size might have been changed (and thus the state stack discarded),
		// we can't use save() and restore() to restore the initial state. So make sure that at
		// least the canvas context is reset to the default state by setting the canvas width.
		// https://www.w3.org/TR/2011/WD-html5-20110525/the-canvas-element.html
		// eslint-disable-next-line no-self-assign
		canvas.width = canvas.width;

		delete canvas[EXPANDO_KEY];
	},

	addEventListener: function(chart, type, listener) {
		var canvas = chart.canvas;
		if (type === 'resize') {
			// Note: the resize event is not supported on all browsers.
			addResizeListener(canvas, listener, chart);
			return;
		}

		var expando = listener[EXPANDO_KEY] || (listener[EXPANDO_KEY] = {});
		var proxies = expando.proxies || (expando.proxies = {});
		var proxy = proxies[chart.id + '_' + type] = function(event) {
			listener(fromNativeEvent(event, chart));
		};

		addListener(canvas, type, proxy);
	},

	removeEventListener: function(chart, type, listener) {
		var canvas = chart.canvas;
		if (type === 'resize') {
			// Note: the resize event is not supported on all browsers.
			removeResizeListener(canvas);
			return;
		}

		var expando = listener[EXPANDO_KEY] || {};
		var proxies = expando.proxies || {};
		var proxy = proxies[chart.id + '_' + type];
		if (!proxy) {
			return;
		}

		removeListener(canvas, type, proxy);
	}
};

// DEPRECATIONS

/**
 * Provided for backward compatibility, use EventTarget.addEventListener instead.
 * EventTarget.addEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * @function Chart.helpers.addEvent
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers$1.addEvent = addListener;

/**
 * Provided for backward compatibility, use EventTarget.removeEventListener instead.
 * EventTarget.removeEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
 * @function Chart.helpers.removeEvent
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers$1.removeEvent = removeListener;

// @TODO Make possible to select another platform at build time.
var implementation = platform_dom$2._enabled ? platform_dom$2 : platform_basic;

/**
 * @namespace Chart.platform
 * @see https://chartjs.gitbooks.io/proposals/content/Platform.html
 * @since 2.4.0
 */
var platform = helpers$1.extend({
	/**
	 * @since 2.7.0
	 */
	initialize: function() {},

	/**
	 * Called at chart construction time, returns a context2d instance implementing
	 * the [W3C Canvas 2D Context API standard]{@link https://www.w3.org/TR/2dcontext/}.
	 * @param {*} item - The native item from which to acquire context (platform specific)
	 * @param {object} options - The chart options
	 * @returns {CanvasRenderingContext2D} context2d instance
	 */
	acquireContext: function() {},

	/**
	 * Called at chart destruction time, releases any resources associated to the context
	 * previously returned by the acquireContext() method.
	 * @param {CanvasRenderingContext2D} context - The context2d instance
	 * @returns {boolean} true if the method succeeded, else false
	 */
	releaseContext: function() {},

	/**
	 * Registers the specified listener on the given chart.
	 * @param {Chart} chart - Chart from which to listen for event
	 * @param {string} type - The ({@link IEvent}) type to listen for
	 * @param {function} listener - Receives a notification (an object that implements
	 * the {@link IEvent} interface) when an event of the specified type occurs.
	 */
	addEventListener: function() {},

	/**
	 * Removes the specified listener previously registered with addEventListener.
	 * @param {Chart} chart - Chart from which to remove the listener
	 * @param {string} type - The ({@link IEvent}) type to remove
	 * @param {function} listener - The listener function to remove from the event target.
	 */
	removeEventListener: function() {}

}, implementation);

core_defaults._set('global', {
	plugins: {}
});

/**
 * The plugin service singleton
 * @namespace Chart.plugins
 * @since 2.1.0
 */
var core_plugins = {
	/**
	 * Globally registered plugins.
	 * @private
	 */
	_plugins: [],

	/**
	 * This identifier is used to invalidate the descriptors cache attached to each chart
	 * when a global plugin is registered or unregistered. In this case, the cache ID is
	 * incremented and descriptors are regenerated during following API calls.
	 * @private
	 */
	_cacheId: 0,

	/**
	 * Registers the given plugin(s) if not already registered.
	 * @param {IPlugin[]|IPlugin} plugins plugin instance(s).
	 */
	register: function(plugins) {
		var p = this._plugins;
		([]).concat(plugins).forEach(function(plugin) {
			if (p.indexOf(plugin) === -1) {
				p.push(plugin);
			}
		});

		this._cacheId++;
	},

	/**
	 * Unregisters the given plugin(s) only if registered.
	 * @param {IPlugin[]|IPlugin} plugins plugin instance(s).
	 */
	unregister: function(plugins) {
		var p = this._plugins;
		([]).concat(plugins).forEach(function(plugin) {
			var idx = p.indexOf(plugin);
			if (idx !== -1) {
				p.splice(idx, 1);
			}
		});

		this._cacheId++;
	},

	/**
	 * Remove all registered plugins.
	 * @since 2.1.5
	 */
	clear: function() {
		this._plugins = [];
		this._cacheId++;
	},

	/**
	 * Returns the number of registered plugins?
	 * @returns {number}
	 * @since 2.1.5
	 */
	count: function() {
		return this._plugins.length;
	},

	/**
	 * Returns all registered plugin instances.
	 * @returns {IPlugin[]} array of plugin objects.
	 * @since 2.1.5
	 */
	getAll: function() {
		return this._plugins;
	},

	/**
	 * Calls enabled plugins for `chart` on the specified hook and with the given args.
	 * This method immediately returns as soon as a plugin explicitly returns false. The
	 * returned value can be used, for instance, to interrupt the current action.
	 * @param {Chart} chart - The chart instance for which plugins should be called.
	 * @param {string} hook - The name of the plugin method to call (e.g. 'beforeUpdate').
	 * @param {Array} [args] - Extra arguments to apply to the hook call.
	 * @returns {boolean} false if any of the plugins return false, else returns true.
	 */
	notify: function(chart, hook, args) {
		var descriptors = this.descriptors(chart);
		var ilen = descriptors.length;
		var i, descriptor, plugin, params, method;

		for (i = 0; i < ilen; ++i) {
			descriptor = descriptors[i];
			plugin = descriptor.plugin;
			method = plugin[hook];
			if (typeof method === 'function') {
				params = [chart].concat(args || []);
				params.push(descriptor.options);
				if (method.apply(plugin, params) === false) {
					return false;
				}
			}
		}

		return true;
	},

	/**
	 * Returns descriptors of enabled plugins for the given chart.
	 * @returns {object[]} [{ plugin, options }]
	 * @private
	 */
	descriptors: function(chart) {
		var cache = chart.$plugins || (chart.$plugins = {});
		if (cache.id === this._cacheId) {
			return cache.descriptors;
		}

		var plugins = [];
		var descriptors = [];
		var config = (chart && chart.config) || {};
		var options = (config.options && config.options.plugins) || {};

		this._plugins.concat(config.plugins || []).forEach(function(plugin) {
			var idx = plugins.indexOf(plugin);
			if (idx !== -1) {
				return;
			}

			var id = plugin.id;
			var opts = options[id];
			if (opts === false) {
				return;
			}

			if (opts === true) {
				opts = helpers$1.clone(core_defaults.global.plugins[id]);
			}

			plugins.push(plugin);
			descriptors.push({
				plugin: plugin,
				options: opts || {}
			});
		});

		cache.descriptors = descriptors;
		cache.id = this._cacheId;
		return descriptors;
	},

	/**
	 * Invalidates cache for the given chart: descriptors hold a reference on plugin option,
	 * but in some cases, this reference can be changed by the user when updating options.
	 * https://github.com/chartjs/Chart.js/issues/5111#issuecomment-355934167
	 * @private
	 */
	_invalidate: function(chart) {
		delete chart.$plugins;
	}
};

var core_scaleService = {
	// Scale registration object. Extensions can register new scale types (such as log or DB scales) and then
	// use the new chart options to grab the correct scale
	constructors: {},
	// Use a registration function so that we can move to an ES6 map when we no longer need to support
	// old browsers

	// Scale config defaults
	defaults: {},
	registerScaleType: function(type, scaleConstructor, scaleDefaults) {
		this.constructors[type] = scaleConstructor;
		this.defaults[type] = helpers$1.clone(scaleDefaults);
	},
	getScaleConstructor: function(type) {
		return this.constructors.hasOwnProperty(type) ? this.constructors[type] : undefined;
	},
	getScaleDefaults: function(type) {
		// Return the scale defaults merged with the global settings so that we always use the latest ones
		return this.defaults.hasOwnProperty(type) ? helpers$1.merge(Object.create(null), [core_defaults.scale, this.defaults[type]]) : {};
	},
	updateScaleDefaults: function(type, additions) {
		var me = this;
		if (me.defaults.hasOwnProperty(type)) {
			me.defaults[type] = helpers$1.extend(me.defaults[type], additions);
		}
	},
	addScalesToLayout: function(chart) {
		// Adds each scale to the chart.boxes array to be sized accordingly
		helpers$1.each(chart.scales, function(scale) {
			// Set ILayoutItem parameters for backwards compatibility
			scale.fullWidth = scale.options.fullWidth;
			scale.position = scale.options.position;
			scale.weight = scale.options.weight;
			core_layouts.addBox(chart, scale);
		});
	}
};

var valueOrDefault$8 = helpers$1.valueOrDefault;
var getRtlHelper = helpers$1.rtl.getRtlAdapter;

core_defaults._set('global', {
	tooltips: {
		enabled: true,
		custom: null,
		mode: 'nearest',
		position: 'average',
		intersect: true,
		backgroundColor: 'rgba(0,0,0,0.8)',
		titleFontStyle: 'bold',
		titleSpacing: 2,
		titleMarginBottom: 6,
		titleFontColor: '#fff',
		titleAlign: 'left',
		bodySpacing: 2,
		bodyFontColor: '#fff',
		bodyAlign: 'left',
		footerFontStyle: 'bold',
		footerSpacing: 2,
		footerMarginTop: 6,
		footerFontColor: '#fff',
		footerAlign: 'left',
		yPadding: 6,
		xPadding: 6,
		caretPadding: 2,
		caretSize: 5,
		cornerRadius: 6,
		multiKeyBackground: '#fff',
		displayColors: true,
		borderColor: 'rgba(0,0,0,0)',
		borderWidth: 0,
		callbacks: {
			// Args are: (tooltipItems, data)
			beforeTitle: helpers$1.noop,
			title: function(tooltipItems, data) {
				var title = '';
				var labels = data.labels;
				var labelCount = labels ? labels.length : 0;

				if (tooltipItems.length > 0) {
					var item = tooltipItems[0];
					if (item.label) {
						title = item.label;
					} else if (item.xLabel) {
						title = item.xLabel;
					} else if (labelCount > 0 && item.index < labelCount) {
						title = labels[item.index];
					}
				}

				return title;
			},
			afterTitle: helpers$1.noop,

			// Args are: (tooltipItems, data)
			beforeBody: helpers$1.noop,

			// Args are: (tooltipItem, data)
			beforeLabel: helpers$1.noop,
			label: function(tooltipItem, data) {
				var label = data.datasets[tooltipItem.datasetIndex].label || '';

				if (label) {
					label += ': ';
				}
				if (!helpers$1.isNullOrUndef(tooltipItem.value)) {
					label += tooltipItem.value;
				} else {
					label += tooltipItem.yLabel;
				}
				return label;
			},
			labelColor: function(tooltipItem, chart) {
				var meta = chart.getDatasetMeta(tooltipItem.datasetIndex);
				var activeElement = meta.data[tooltipItem.index];
				var view = activeElement._view;
				return {
					borderColor: view.borderColor,
					backgroundColor: view.backgroundColor
				};
			},
			labelTextColor: function() {
				return this._options.bodyFontColor;
			},
			afterLabel: helpers$1.noop,

			// Args are: (tooltipItems, data)
			afterBody: helpers$1.noop,

			// Args are: (tooltipItems, data)
			beforeFooter: helpers$1.noop,
			footer: helpers$1.noop,
			afterFooter: helpers$1.noop
		}
	}
});

var positioners = {
	/**
	 * Average mode places the tooltip at the average position of the elements shown
	 * @function Chart.Tooltip.positioners.average
	 * @param elements {ChartElement[]} the elements being displayed in the tooltip
	 * @returns {object} tooltip position
	 */
	average: function(elements) {
		if (!elements.length) {
			return false;
		}

		var i, len;
		var x = 0;
		var y = 0;
		var count = 0;

		for (i = 0, len = elements.length; i < len; ++i) {
			var el = elements[i];
			if (el && el.hasValue()) {
				var pos = el.tooltipPosition();
				x += pos.x;
				y += pos.y;
				++count;
			}
		}

		return {
			x: x / count,
			y: y / count
		};
	},

	/**
	 * Gets the tooltip position nearest of the item nearest to the event position
	 * @function Chart.Tooltip.positioners.nearest
	 * @param elements {Chart.Element[]} the tooltip elements
	 * @param eventPosition {object} the position of the event in canvas coordinates
	 * @returns {object} the tooltip position
	 */
	nearest: function(elements, eventPosition) {
		var x = eventPosition.x;
		var y = eventPosition.y;
		var minDistance = Number.POSITIVE_INFINITY;
		var i, len, nearestElement;

		for (i = 0, len = elements.length; i < len; ++i) {
			var el = elements[i];
			if (el && el.hasValue()) {
				var center = el.getCenterPoint();
				var d = helpers$1.distanceBetweenPoints(eventPosition, center);

				if (d < minDistance) {
					minDistance = d;
					nearestElement = el;
				}
			}
		}

		if (nearestElement) {
			var tp = nearestElement.tooltipPosition();
			x = tp.x;
			y = tp.y;
		}

		return {
			x: x,
			y: y
		};
	}
};

// Helper to push or concat based on if the 2nd parameter is an array or not
function pushOrConcat(base, toPush) {
	if (toPush) {
		if (helpers$1.isArray(toPush)) {
			// base = base.concat(toPush);
			Array.prototype.push.apply(base, toPush);
		} else {
			base.push(toPush);
		}
	}

	return base;
}

/**
 * Returns array of strings split by newline
 * @param {string} value - The value to split by newline.
 * @returns {string[]} value if newline present - Returned from String split() method
 * @function
 */
function splitNewlines(str) {
	if ((typeof str === 'string' || str instanceof String) && str.indexOf('\n') > -1) {
		return str.split('\n');
	}
	return str;
}


/**
 * Private helper to create a tooltip item model
 * @param element - the chart element (point, arc, bar) to create the tooltip item for
 * @return new tooltip item
 */
function createTooltipItem(element) {
	var xScale = element._xScale;
	var yScale = element._yScale || element._scale; // handle radar || polarArea charts
	var index = element._index;
	var datasetIndex = element._datasetIndex;
	var controller = element._chart.getDatasetMeta(datasetIndex).controller;
	var indexScale = controller._getIndexScale();
	var valueScale = controller._getValueScale();

	return {
		xLabel: xScale ? xScale.getLabelForIndex(index, datasetIndex) : '',
		yLabel: yScale ? yScale.getLabelForIndex(index, datasetIndex) : '',
		label: indexScale ? '' + indexScale.getLabelForIndex(index, datasetIndex) : '',
		value: valueScale ? '' + valueScale.getLabelForIndex(index, datasetIndex) : '',
		index: index,
		datasetIndex: datasetIndex,
		x: element._model.x,
		y: element._model.y
	};
}

/**
 * Helper to get the reset model for the tooltip
 * @param tooltipOpts {object} the tooltip options
 */
function getBaseModel(tooltipOpts) {
	var globalDefaults = core_defaults.global;

	return {
		// Positioning
		xPadding: tooltipOpts.xPadding,
		yPadding: tooltipOpts.yPadding,
		xAlign: tooltipOpts.xAlign,
		yAlign: tooltipOpts.yAlign,

		// Drawing direction and text direction
		rtl: tooltipOpts.rtl,
		textDirection: tooltipOpts.textDirection,

		// Body
		bodyFontColor: tooltipOpts.bodyFontColor,
		_bodyFontFamily: valueOrDefault$8(tooltipOpts.bodyFontFamily, globalDefaults.defaultFontFamily),
		_bodyFontStyle: valueOrDefault$8(tooltipOpts.bodyFontStyle, globalDefaults.defaultFontStyle),
		_bodyAlign: tooltipOpts.bodyAlign,
		bodyFontSize: valueOrDefault$8(tooltipOpts.bodyFontSize, globalDefaults.defaultFontSize),
		bodySpacing: tooltipOpts.bodySpacing,

		// Title
		titleFontColor: tooltipOpts.titleFontColor,
		_titleFontFamily: valueOrDefault$8(tooltipOpts.titleFontFamily, globalDefaults.defaultFontFamily),
		_titleFontStyle: valueOrDefault$8(tooltipOpts.titleFontStyle, globalDefaults.defaultFontStyle),
		titleFontSize: valueOrDefault$8(tooltipOpts.titleFontSize, globalDefaults.defaultFontSize),
		_titleAlign: tooltipOpts.titleAlign,
		titleSpacing: tooltipOpts.titleSpacing,
		titleMarginBottom: tooltipOpts.titleMarginBottom,

		// Footer
		footerFontColor: tooltipOpts.footerFontColor,
		_footerFontFamily: valueOrDefault$8(tooltipOpts.footerFontFamily, globalDefaults.defaultFontFamily),
		_footerFontStyle: valueOrDefault$8(tooltipOpts.footerFontStyle, globalDefaults.defaultFontStyle),
		footerFontSize: valueOrDefault$8(tooltipOpts.footerFontSize, globalDefaults.defaultFontSize),
		_footerAlign: tooltipOpts.footerAlign,
		footerSpacing: tooltipOpts.footerSpacing,
		footerMarginTop: tooltipOpts.footerMarginTop,

		// Appearance
		caretSize: tooltipOpts.caretSize,
		cornerRadius: tooltipOpts.cornerRadius,
		backgroundColor: tooltipOpts.backgroundColor,
		opacity: 0,
		legendColorBackground: tooltipOpts.multiKeyBackground,
		displayColors: tooltipOpts.displayColors,
		borderColor: tooltipOpts.borderColor,
		borderWidth: tooltipOpts.borderWidth
	};
}

/**
 * Get the size of the tooltip
 */
function getTooltipSize(tooltip, model) {
	var ctx = tooltip._chart.ctx;

	var height = model.yPadding * 2; // Tooltip Padding
	var width = 0;

	// Count of all lines in the body
	var body = model.body;
	var combinedBodyLength = body.reduce(function(count, bodyItem) {
		return count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length;
	}, 0);
	combinedBodyLength += model.beforeBody.length + model.afterBody.length;

	var titleLineCount = model.title.length;
	var footerLineCount = model.footer.length;
	var titleFontSize = model.titleFontSize;
	var bodyFontSize = model.bodyFontSize;
	var footerFontSize = model.footerFontSize;

	height += titleLineCount * titleFontSize; // Title Lines
	height += titleLineCount ? (titleLineCount - 1) * model.titleSpacing : 0; // Title Line Spacing
	height += titleLineCount ? model.titleMarginBottom : 0; // Title's bottom Margin
	height += combinedBodyLength * bodyFontSize; // Body Lines
	height += combinedBodyLength ? (combinedBodyLength - 1) * model.bodySpacing : 0; // Body Line Spacing
	height += footerLineCount ? model.footerMarginTop : 0; // Footer Margin
	height += footerLineCount * (footerFontSize); // Footer Lines
	height += footerLineCount ? (footerLineCount - 1) * model.footerSpacing : 0; // Footer Line Spacing

	// Title width
	var widthPadding = 0;
	var maxLineWidth = function(line) {
		width = Math.max(width, ctx.measureText(line).width + widthPadding);
	};

	ctx.font = helpers$1.fontString(titleFontSize, model._titleFontStyle, model._titleFontFamily);
	helpers$1.each(model.title, maxLineWidth);

	// Body width
	ctx.font = helpers$1.fontString(bodyFontSize, model._bodyFontStyle, model._bodyFontFamily);
	helpers$1.each(model.beforeBody.concat(model.afterBody), maxLineWidth);

	// Body lines may include some extra width due to the color box
	widthPadding = model.displayColors ? (bodyFontSize + 2) : 0;
	helpers$1.each(body, function(bodyItem) {
		helpers$1.each(bodyItem.before, maxLineWidth);
		helpers$1.each(bodyItem.lines, maxLineWidth);
		helpers$1.each(bodyItem.after, maxLineWidth);
	});

	// Reset back to 0
	widthPadding = 0;

	// Footer width
	ctx.font = helpers$1.fontString(footerFontSize, model._footerFontStyle, model._footerFontFamily);
	helpers$1.each(model.footer, maxLineWidth);

	// Add padding
	width += 2 * model.xPadding;

	return {
		width: width,
		height: height
	};
}

/**
 * Helper to get the alignment of a tooltip given the size
 */
function determineAlignment(tooltip, size) {
	var model = tooltip._model;
	var chart = tooltip._chart;
	var chartArea = tooltip._chart.chartArea;
	var xAlign = 'center';
	var yAlign = 'center';

	if (model.y < size.height) {
		yAlign = 'top';
	} else if (model.y > (chart.height - size.height)) {
		yAlign = 'bottom';
	}

	var lf, rf; // functions to determine left, right alignment
	var olf, orf; // functions to determine if left/right alignment causes tooltip to go outside chart
	var yf; // function to get the y alignment if the tooltip goes outside of the left or right edges
	var midX = (chartArea.left + chartArea.right) / 2;
	var midY = (chartArea.top + chartArea.bottom) / 2;

	if (yAlign === 'center') {
		lf = function(x) {
			return x <= midX;
		};
		rf = function(x) {
			return x > midX;
		};
	} else {
		lf = function(x) {
			return x <= (size.width / 2);
		};
		rf = function(x) {
			return x >= (chart.width - (size.width / 2));
		};
	}

	olf = function(x) {
		return x + size.width + model.caretSize + model.caretPadding > chart.width;
	};
	orf = function(x) {
		return x - size.width - model.caretSize - model.caretPadding < 0;
	};
	yf = function(y) {
		return y <= midY ? 'top' : 'bottom';
	};

	if (lf(model.x)) {
		xAlign = 'left';

		// Is tooltip too wide and goes over the right side of the chart.?
		if (olf(model.x)) {
			xAlign = 'center';
			yAlign = yf(model.y);
		}
	} else if (rf(model.x)) {
		xAlign = 'right';

		// Is tooltip too wide and goes outside left edge of canvas?
		if (orf(model.x)) {
			xAlign = 'center';
			yAlign = yf(model.y);
		}
	}

	var opts = tooltip._options;
	return {
		xAlign: opts.xAlign ? opts.xAlign : xAlign,
		yAlign: opts.yAlign ? opts.yAlign : yAlign
	};
}

/**
 * Helper to get the location a tooltip needs to be placed at given the initial position (via the vm) and the size and alignment
 */
function getBackgroundPoint(vm, size, alignment, chart) {
	// Background Position
	var x = vm.x;
	var y = vm.y;

	var caretSize = vm.caretSize;
	var caretPadding = vm.caretPadding;
	var cornerRadius = vm.cornerRadius;
	var xAlign = alignment.xAlign;
	var yAlign = alignment.yAlign;
	var paddingAndSize = caretSize + caretPadding;
	var radiusAndPadding = cornerRadius + caretPadding;

	if (xAlign === 'right') {
		x -= size.width;
	} else if (xAlign === 'center') {
		x -= (size.width / 2);
		if (x + size.width > chart.width) {
			x = chart.width - size.width;
		}
		if (x < 0) {
			x = 0;
		}
	}

	if (yAlign === 'top') {
		y += paddingAndSize;
	} else if (yAlign === 'bottom') {
		y -= size.height + paddingAndSize;
	} else {
		y -= (size.height / 2);
	}

	if (yAlign === 'center') {
		if (xAlign === 'left') {
			x += paddingAndSize;
		} else if (xAlign === 'right') {
			x -= paddingAndSize;
		}
	} else if (xAlign === 'left') {
		x -= radiusAndPadding;
	} else if (xAlign === 'right') {
		x += radiusAndPadding;
	}

	return {
		x: x,
		y: y
	};
}

function getAlignedX(vm, align) {
	return align === 'center'
		? vm.x + vm.width / 2
		: align === 'right'
			? vm.x + vm.width - vm.xPadding
			: vm.x + vm.xPadding;
}

/**
 * Helper to build before and after body lines
 */
function getBeforeAfterBodyLines(callback) {
	return pushOrConcat([], splitNewlines(callback));
}

var exports$4 = core_element.extend({
	initialize: function() {
		this._model = getBaseModel(this._options);
		this._lastActive = [];
	},

	// Get the title
	// Args are: (tooltipItem, data)
	getTitle: function() {
		var me = this;
		var opts = me._options;
		var callbacks = opts.callbacks;

		var beforeTitle = callbacks.beforeTitle.apply(me, arguments);
		var title = callbacks.title.apply(me, arguments);
		var afterTitle = callbacks.afterTitle.apply(me, arguments);

		var lines = [];
		lines = pushOrConcat(lines, splitNewlines(beforeTitle));
		lines = pushOrConcat(lines, splitNewlines(title));
		lines = pushOrConcat(lines, splitNewlines(afterTitle));

		return lines;
	},

	// Args are: (tooltipItem, data)
	getBeforeBody: function() {
		return getBeforeAfterBodyLines(this._options.callbacks.beforeBody.apply(this, arguments));
	},

	// Args are: (tooltipItem, data)
	getBody: function(tooltipItems, data) {
		var me = this;
		var callbacks = me._options.callbacks;
		var bodyItems = [];

		helpers$1.each(tooltipItems, function(tooltipItem) {
			var bodyItem = {
				before: [],
				lines: [],
				after: []
			};
			pushOrConcat(bodyItem.before, splitNewlines(callbacks.beforeLabel.call(me, tooltipItem, data)));
			pushOrConcat(bodyItem.lines, callbacks.label.call(me, tooltipItem, data));
			pushOrConcat(bodyItem.after, splitNewlines(callbacks.afterLabel.call(me, tooltipItem, data)));

			bodyItems.push(bodyItem);
		});

		return bodyItems;
	},

	// Args are: (tooltipItem, data)
	getAfterBody: function() {
		return getBeforeAfterBodyLines(this._options.callbacks.afterBody.apply(this, arguments));
	},

	// Get the footer and beforeFooter and afterFooter lines
	// Args are: (tooltipItem, data)
	getFooter: function() {
		var me = this;
		var callbacks = me._options.callbacks;

		var beforeFooter = callbacks.beforeFooter.apply(me, arguments);
		var footer = callbacks.footer.apply(me, arguments);
		var afterFooter = callbacks.afterFooter.apply(me, arguments);

		var lines = [];
		lines = pushOrConcat(lines, splitNewlines(beforeFooter));
		lines = pushOrConcat(lines, splitNewlines(footer));
		lines = pushOrConcat(lines, splitNewlines(afterFooter));

		return lines;
	},

	update: function(changed) {
		var me = this;
		var opts = me._options;

		// Need to regenerate the model because its faster than using extend and it is necessary due to the optimization in Chart.Element.transition
		// that does _view = _model if ease === 1. This causes the 2nd tooltip update to set properties in both the view and model at the same time
		// which breaks any animations.
		var existingModel = me._model;
		var model = me._model = getBaseModel(opts);
		var active = me._active;

		var data = me._data;

		// In the case where active.length === 0 we need to keep these at existing values for good animations
		var alignment = {
			xAlign: existingModel.xAlign,
			yAlign: existingModel.yAlign
		};
		var backgroundPoint = {
			x: existingModel.x,
			y: existingModel.y
		};
		var tooltipSize = {
			width: existingModel.width,
			height: existingModel.height
		};
		var tooltipPosition = {
			x: existingModel.caretX,
			y: existingModel.caretY
		};

		var i, len;

		if (active.length) {
			model.opacity = 1;

			var labelColors = [];
			var labelTextColors = [];
			tooltipPosition = positioners[opts.position].call(me, active, me._eventPosition);

			var tooltipItems = [];
			for (i = 0, len = active.length; i < len; ++i) {
				tooltipItems.push(createTooltipItem(active[i]));
			}

			// If the user provided a filter function, use it to modify the tooltip items
			if (opts.filter) {
				tooltipItems = tooltipItems.filter(function(a) {
					return opts.filter(a, data);
				});
			}

			// If the user provided a sorting function, use it to modify the tooltip items
			if (opts.itemSort) {
				tooltipItems = tooltipItems.sort(function(a, b) {
					return opts.itemSort(a, b, data);
				});
			}

			// Determine colors for boxes
			helpers$1.each(tooltipItems, function(tooltipItem) {
				labelColors.push(opts.callbacks.labelColor.call(me, tooltipItem, me._chart));
				labelTextColors.push(opts.callbacks.labelTextColor.call(me, tooltipItem, me._chart));
			});


			// Build the Text Lines
			model.title = me.getTitle(tooltipItems, data);
			model.beforeBody = me.getBeforeBody(tooltipItems, data);
			model.body = me.getBody(tooltipItems, data);
			model.afterBody = me.getAfterBody(tooltipItems, data);
			model.footer = me.getFooter(tooltipItems, data);

			// Initial positioning and colors
			model.x = tooltipPosition.x;
			model.y = tooltipPosition.y;
			model.caretPadding = opts.caretPadding;
			model.labelColors = labelColors;
			model.labelTextColors = labelTextColors;

			// data points
			model.dataPoints = tooltipItems;

			// We need to determine alignment of the tooltip
			tooltipSize = getTooltipSize(this, model);
			alignment = determineAlignment(this, tooltipSize);
			// Final Size and Position
			backgroundPoint = getBackgroundPoint(model, tooltipSize, alignment, me._chart);
		} else {
			model.opacity = 0;
		}

		model.xAlign = alignment.xAlign;
		model.yAlign = alignment.yAlign;
		model.x = backgroundPoint.x;
		model.y = backgroundPoint.y;
		model.width = tooltipSize.width;
		model.height = tooltipSize.height;

		// Point where the caret on the tooltip points to
		model.caretX = tooltipPosition.x;
		model.caretY = tooltipPosition.y;

		me._model = model;

		if (changed && opts.custom) {
			opts.custom.call(me, model);
		}

		return me;
	},

	drawCaret: function(tooltipPoint, size) {
		var ctx = this._chart.ctx;
		var vm = this._view;
		var caretPosition = this.getCaretPosition(tooltipPoint, size, vm);

		ctx.lineTo(caretPosition.x1, caretPosition.y1);
		ctx.lineTo(caretPosition.x2, caretPosition.y2);
		ctx.lineTo(caretPosition.x3, caretPosition.y3);
	},
	getCaretPosition: function(tooltipPoint, size, vm) {
		var x1, x2, x3, y1, y2, y3;
		var caretSize = vm.caretSize;
		var cornerRadius = vm.cornerRadius;
		var xAlign = vm.xAlign;
		var yAlign = vm.yAlign;
		var ptX = tooltipPoint.x;
		var ptY = tooltipPoint.y;
		var width = size.width;
		var height = size.height;

		if (yAlign === 'center') {
			y2 = ptY + (height / 2);

			if (xAlign === 'left') {
				x1 = ptX;
				x2 = x1 - caretSize;
				x3 = x1;

				y1 = y2 + caretSize;
				y3 = y2 - caretSize;
			} else {
				x1 = ptX + width;
				x2 = x1 + caretSize;
				x3 = x1;

				y1 = y2 - caretSize;
				y3 = y2 + caretSize;
			}
		} else {
			if (xAlign === 'left') {
				x2 = ptX + cornerRadius + (caretSize);
				x1 = x2 - caretSize;
				x3 = x2 + caretSize;
			} else if (xAlign === 'right') {
				x2 = ptX + width - cornerRadius - caretSize;
				x1 = x2 - caretSize;
				x3 = x2 + caretSize;
			} else {
				x2 = vm.caretX;
				x1 = x2 - caretSize;
				x3 = x2 + caretSize;
			}
			if (yAlign === 'top') {
				y1 = ptY;
				y2 = y1 - caretSize;
				y3 = y1;
			} else {
				y1 = ptY + height;
				y2 = y1 + caretSize;
				y3 = y1;
				// invert drawing order
				var tmp = x3;
				x3 = x1;
				x1 = tmp;
			}
		}
		return {x1: x1, x2: x2, x3: x3, y1: y1, y2: y2, y3: y3};
	},

	drawTitle: function(pt, vm, ctx) {
		var title = vm.title;
		var length = title.length;
		var titleFontSize, titleSpacing, i;

		if (length) {
			var rtlHelper = getRtlHelper(vm.rtl, vm.x, vm.width);

			pt.x = getAlignedX(vm, vm._titleAlign);

			ctx.textAlign = rtlHelper.textAlign(vm._titleAlign);
			ctx.textBaseline = 'middle';

			titleFontSize = vm.titleFontSize;
			titleSpacing = vm.titleSpacing;

			ctx.fillStyle = vm.titleFontColor;
			ctx.font = helpers$1.fontString(titleFontSize, vm._titleFontStyle, vm._titleFontFamily);

			for (i = 0; i < length; ++i) {
				ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFontSize / 2);
				pt.y += titleFontSize + titleSpacing; // Line Height and spacing

				if (i + 1 === length) {
					pt.y += vm.titleMarginBottom - titleSpacing; // If Last, add margin, remove spacing
				}
			}
		}
	},

	drawBody: function(pt, vm, ctx) {
		var bodyFontSize = vm.bodyFontSize;
		var bodySpacing = vm.bodySpacing;
		var bodyAlign = vm._bodyAlign;
		var body = vm.body;
		var drawColorBoxes = vm.displayColors;
		var xLinePadding = 0;
		var colorX = drawColorBoxes ? getAlignedX(vm, 'left') : 0;

		var rtlHelper = getRtlHelper(vm.rtl, vm.x, vm.width);

		var fillLineOfText = function(line) {
			ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyFontSize / 2);
			pt.y += bodyFontSize + bodySpacing;
		};

		var bodyItem, textColor, labelColors, lines, i, j, ilen, jlen;
		var bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);

		ctx.textAlign = bodyAlign;
		ctx.textBaseline = 'middle';
		ctx.font = helpers$1.fontString(bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);

		pt.x = getAlignedX(vm, bodyAlignForCalculation);

		// Before body lines
		ctx.fillStyle = vm.bodyFontColor;
		helpers$1.each(vm.beforeBody, fillLineOfText);

		xLinePadding = drawColorBoxes && bodyAlignForCalculation !== 'right'
			? bodyAlign === 'center' ? (bodyFontSize / 2 + 1) : (bodyFontSize + 2)
			: 0;

		// Draw body lines now
		for (i = 0, ilen = body.length; i < ilen; ++i) {
			bodyItem = body[i];
			textColor = vm.labelTextColors[i];
			labelColors = vm.labelColors[i];

			ctx.fillStyle = textColor;
			helpers$1.each(bodyItem.before, fillLineOfText);

			lines = bodyItem.lines;
			for (j = 0, jlen = lines.length; j < jlen; ++j) {
				// Draw Legend-like boxes if needed
				if (drawColorBoxes) {
					var rtlColorX = rtlHelper.x(colorX);

					// Fill a white rect so that colours merge nicely if the opacity is < 1
					ctx.fillStyle = vm.legendColorBackground;
					ctx.fillRect(rtlHelper.leftForLtr(rtlColorX, bodyFontSize), pt.y, bodyFontSize, bodyFontSize);

					// Border
					ctx.lineWidth = 1;
					ctx.strokeStyle = labelColors.borderColor;
					ctx.strokeRect(rtlHelper.leftForLtr(rtlColorX, bodyFontSize), pt.y, bodyFontSize, bodyFontSize);

					// Inner square
					ctx.fillStyle = labelColors.backgroundColor;
					ctx.fillRect(rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), bodyFontSize - 2), pt.y + 1, bodyFontSize - 2, bodyFontSize - 2);
					ctx.fillStyle = textColor;
				}

				fillLineOfText(lines[j]);
			}

			helpers$1.each(bodyItem.after, fillLineOfText);
		}

		// Reset back to 0 for after body
		xLinePadding = 0;

		// After body lines
		helpers$1.each(vm.afterBody, fillLineOfText);
		pt.y -= bodySpacing; // Remove last body spacing
	},

	drawFooter: function(pt, vm, ctx) {
		var footer = vm.footer;
		var length = footer.length;
		var footerFontSize, i;

		if (length) {
			var rtlHelper = getRtlHelper(vm.rtl, vm.x, vm.width);

			pt.x = getAlignedX(vm, vm._footerAlign);
			pt.y += vm.footerMarginTop;

			ctx.textAlign = rtlHelper.textAlign(vm._footerAlign);
			ctx.textBaseline = 'middle';

			footerFontSize = vm.footerFontSize;

			ctx.fillStyle = vm.footerFontColor;
			ctx.font = helpers$1.fontString(footerFontSize, vm._footerFontStyle, vm._footerFontFamily);

			for (i = 0; i < length; ++i) {
				ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFontSize / 2);
				pt.y += footerFontSize + vm.footerSpacing;
			}
		}
	},

	drawBackground: function(pt, vm, ctx, tooltipSize) {
		ctx.fillStyle = vm.backgroundColor;
		ctx.strokeStyle = vm.borderColor;
		ctx.lineWidth = vm.borderWidth;
		var xAlign = vm.xAlign;
		var yAlign = vm.yAlign;
		var x = pt.x;
		var y = pt.y;
		var width = tooltipSize.width;
		var height = tooltipSize.height;
		var radius = vm.cornerRadius;

		ctx.beginPath();
		ctx.moveTo(x + radius, y);
		if (yAlign === 'top') {
			this.drawCaret(pt, tooltipSize);
		}
		ctx.lineTo(x + width - radius, y);
		ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
		if (yAlign === 'center' && xAlign === 'right') {
			this.drawCaret(pt, tooltipSize);
		}
		ctx.lineTo(x + width, y + height - radius);
		ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
		if (yAlign === 'bottom') {
			this.drawCaret(pt, tooltipSize);
		}
		ctx.lineTo(x + radius, y + height);
		ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
		if (yAlign === 'center' && xAlign === 'left') {
			this.drawCaret(pt, tooltipSize);
		}
		ctx.lineTo(x, y + radius);
		ctx.quadraticCurveTo(x, y, x + radius, y);
		ctx.closePath();

		ctx.fill();

		if (vm.borderWidth > 0) {
			ctx.stroke();
		}
	},

	draw: function() {
		var ctx = this._chart.ctx;
		var vm = this._view;

		if (vm.opacity === 0) {
			return;
		}

		var tooltipSize = {
			width: vm.width,
			height: vm.height
		};
		var pt = {
			x: vm.x,
			y: vm.y
		};

		// IE11/Edge does not like very small opacities, so snap to 0
		var opacity = Math.abs(vm.opacity < 1e-3) ? 0 : vm.opacity;

		// Truthy/falsey value for empty tooltip
		var hasTooltipContent = vm.title.length || vm.beforeBody.length || vm.body.length || vm.afterBody.length || vm.footer.length;

		if (this._options.enabled && hasTooltipContent) {
			ctx.save();
			ctx.globalAlpha = opacity;

			// Draw Background
			this.drawBackground(pt, vm, ctx, tooltipSize);

			// Draw Title, Body, and Footer
			pt.y += vm.yPadding;

			helpers$1.rtl.overrideTextDirection(ctx, vm.textDirection);

			// Titles
			this.drawTitle(pt, vm, ctx);

			// Body
			this.drawBody(pt, vm, ctx);

			// Footer
			this.drawFooter(pt, vm, ctx);

			helpers$1.rtl.restoreTextDirection(ctx, vm.textDirection);

			ctx.restore();
		}
	},

	/**
	 * Handle an event
	 * @private
	 * @param {IEvent} event - The event to handle
	 * @returns {boolean} true if the tooltip changed
	 */
	handleEvent: function(e) {
		var me = this;
		var options = me._options;
		var changed = false;

		me._lastActive = me._lastActive || [];

		// Find Active Elements for tooltips
		if (e.type === 'mouseout') {
			me._active = [];
		} else {
			me._active = me._chart.getElementsAtEventForMode(e, options.mode, options);
			if (options.reverse) {
				me._active.reverse();
			}
		}

		// Remember Last Actives
		changed = !helpers$1.arrayEquals(me._active, me._lastActive);

		// Only handle target event on tooltip change
		if (changed) {
			me._lastActive = me._active;

			if (options.enabled || options.custom) {
				me._eventPosition = {
					x: e.x,
					y: e.y
				};

				me.update(true);
				me.pivot();
			}
		}

		return changed;
	}
});

/**
 * @namespace Chart.Tooltip.positioners
 */
var positioners_1 = positioners;

var core_tooltip = exports$4;
core_tooltip.positioners = positioners_1;

var valueOrDefault$9 = helpers$1.valueOrDefault;

core_defaults._set('global', {
	elements: {},
	events: [
		'mousemove',
		'mouseout',
		'click',
		'touchstart',
		'touchmove'
	],
	hover: {
		onHover: null,
		mode: 'nearest',
		intersect: true,
		animationDuration: 400
	},
	onClick: null,
	maintainAspectRatio: true,
	responsive: true,
	responsiveAnimationDuration: 0
});

/**
 * Recursively merge the given config objects representing the `scales` option
 * by incorporating scale defaults in `xAxes` and `yAxes` array items, then
 * returns a deep copy of the result, thus doesn't alter inputs.
 */
function mergeScaleConfig(/* config objects ... */) {
	return helpers$1.merge(Object.create(null), [].slice.call(arguments), {
		merger: function(key, target, source, options) {
			if (key === 'xAxes' || key === 'yAxes') {
				var slen = source[key].length;
				var i, type, scale;

				if (!target[key]) {
					target[key] = [];
				}

				for (i = 0; i < slen; ++i) {
					scale = source[key][i];
					type = valueOrDefault$9(scale.type, key === 'xAxes' ? 'category' : 'linear');

					if (i >= target[key].length) {
						target[key].push({});
					}

					if (!target[key][i].type || (scale.type && scale.type !== target[key][i].type)) {
						// new/untyped scale or type changed: let's apply the new defaults
						// then merge source scale to correctly overwrite the defaults.
						helpers$1.merge(target[key][i], [core_scaleService.getScaleDefaults(type), scale]);
					} else {
						// scales type are the same
						helpers$1.merge(target[key][i], scale);
					}
				}
			} else {
				helpers$1._merger(key, target, source, options);
			}
		}
	});
}

/**
 * Recursively merge the given config objects as the root options by handling
 * default scale options for the `scales` and `scale` properties, then returns
 * a deep copy of the result, thus doesn't alter inputs.
 */
function mergeConfig(/* config objects ... */) {
	return helpers$1.merge(Object.create(null), [].slice.call(arguments), {
		merger: function(key, target, source, options) {
			var tval = target[key] || Object.create(null);
			var sval = source[key];

			if (key === 'scales') {
				// scale config merging is complex. Add our own function here for that
				target[key] = mergeScaleConfig(tval, sval);
			} else if (key === 'scale') {
				// used in polar area & radar charts since there is only one scale
				target[key] = helpers$1.merge(tval, [core_scaleService.getScaleDefaults(sval.type), sval]);
			} else {
				helpers$1._merger(key, target, source, options);
			}
		}
	});
}

function initConfig(config) {
	config = config || Object.create(null);

	// Do NOT use mergeConfig for the data object because this method merges arrays
	// and so would change references to labels and datasets, preventing data updates.
	var data = config.data = config.data || {};
	data.datasets = data.datasets || [];
	data.labels = data.labels || [];

	config.options = mergeConfig(
		core_defaults.global,
		core_defaults[config.type],
		config.options || {});

	return config;
}

function updateConfig(chart) {
	var newOptions = chart.options;

	helpers$1.each(chart.scales, function(scale) {
		core_layouts.removeBox(chart, scale);
	});

	newOptions = mergeConfig(
		core_defaults.global,
		core_defaults[chart.config.type],
		newOptions);

	chart.options = chart.config.options = newOptions;
	chart.ensureScalesHaveIDs();
	chart.buildOrUpdateScales();

	// Tooltip
	chart.tooltip._options = newOptions.tooltips;
	chart.tooltip.initialize();
}

function nextAvailableScaleId(axesOpts, prefix, index) {
	var id;
	var hasId = function(obj) {
		return obj.id === id;
	};

	do {
		id = prefix + index++;
	} while (helpers$1.findIndex(axesOpts, hasId) >= 0);

	return id;
}

function positionIsHorizontal(position) {
	return position === 'top' || position === 'bottom';
}

function compare2Level(l1, l2) {
	return function(a, b) {
		return a[l1] === b[l1]
			? a[l2] - b[l2]
			: a[l1] - b[l1];
	};
}

var Chart = function(item, config) {
	this.construct(item, config);
	return this;
};

helpers$1.extend(Chart.prototype, /** @lends Chart */ {
	/**
	 * @private
	 */
	construct: function(item, config) {
		var me = this;

		config = initConfig(config);

		var context = platform.acquireContext(item, config);
		var canvas = context && context.canvas;
		var height = canvas && canvas.height;
		var width = canvas && canvas.width;

		me.id = helpers$1.uid();
		me.ctx = context;
		me.canvas = canvas;
		me.config = config;
		me.width = width;
		me.height = height;
		me.aspectRatio = height ? width / height : null;
		me.options = config.options;
		me._bufferedRender = false;
		me._layers = [];

		/**
		 * Provided for backward compatibility, Chart and Chart.Controller have been merged,
		 * the "instance" still need to be defined since it might be called from plugins.
		 * @prop Chart#chart
		 * @deprecated since version 2.6.0
		 * @todo remove at version 3
		 * @private
		 */
		me.chart = me;
		me.controller = me; // chart.chart.controller #inception

		// Add the chart instance to the global namespace
		Chart.instances[me.id] = me;

		// Define alias to the config data: `chart.data === chart.config.data`
		Object.defineProperty(me, 'data', {
			get: function() {
				return me.config.data;
			},
			set: function(value) {
				me.config.data = value;
			}
		});

		if (!context || !canvas) {
			// The given item is not a compatible context2d element, let's return before finalizing
			// the chart initialization but after setting basic chart / controller properties that
			// can help to figure out that the chart is not valid (e.g chart.canvas !== null);
			// https://github.com/chartjs/Chart.js/issues/2807
			console.error("Failed to create chart: can't acquire context from the given item");
			return;
		}

		me.initialize();
		me.update();
	},

	/**
	 * @private
	 */
	initialize: function() {
		var me = this;

		// Before init plugin notification
		core_plugins.notify(me, 'beforeInit');

		helpers$1.retinaScale(me, me.options.devicePixelRatio);

		me.bindEvents();

		if (me.options.responsive) {
			// Initial resize before chart draws (must be silent to preserve initial animations).
			me.resize(true);
		}

		me.initToolTip();

		// After init plugin notification
		core_plugins.notify(me, 'afterInit');

		return me;
	},

	clear: function() {
		helpers$1.canvas.clear(this);
		return this;
	},

	stop: function() {
		// Stops any current animation loop occurring
		core_animations.cancelAnimation(this);
		return this;
	},

	resize: function(silent) {
		var me = this;
		var options = me.options;
		var canvas = me.canvas;
		var aspectRatio = (options.maintainAspectRatio && me.aspectRatio) || null;

		// the canvas render width and height will be casted to integers so make sure that
		// the canvas display style uses the same integer values to avoid blurring effect.

		// Set to 0 instead of canvas.size because the size defaults to 300x150 if the element is collapsed
		var newWidth = Math.max(0, Math.floor(helpers$1.getMaximumWidth(canvas)));
		var newHeight = Math.max(0, Math.floor(aspectRatio ? newWidth / aspectRatio : helpers$1.getMaximumHeight(canvas)));

		if (me.width === newWidth && me.height === newHeight) {
			return;
		}

		canvas.width = me.width = newWidth;
		canvas.height = me.height = newHeight;
		canvas.style.width = newWidth + 'px';
		canvas.style.height = newHeight + 'px';

		helpers$1.retinaScale(me, options.devicePixelRatio);

		if (!silent) {
			// Notify any plugins about the resize
			var newSize = {width: newWidth, height: newHeight};
			core_plugins.notify(me, 'resize', [newSize]);

			// Notify of resize
			if (options.onResize) {
				options.onResize(me, newSize);
			}

			me.stop();
			me.update({
				duration: options.responsiveAnimationDuration
			});
		}
	},

	ensureScalesHaveIDs: function() {
		var options = this.options;
		var scalesOptions = options.scales || {};
		var scaleOptions = options.scale;

		helpers$1.each(scalesOptions.xAxes, function(xAxisOptions, index) {
			if (!xAxisOptions.id) {
				xAxisOptions.id = nextAvailableScaleId(scalesOptions.xAxes, 'x-axis-', index);
			}
		});

		helpers$1.each(scalesOptions.yAxes, function(yAxisOptions, index) {
			if (!yAxisOptions.id) {
				yAxisOptions.id = nextAvailableScaleId(scalesOptions.yAxes, 'y-axis-', index);
			}
		});

		if (scaleOptions) {
			scaleOptions.id = scaleOptions.id || 'scale';
		}
	},

	/**
	 * Builds a map of scale ID to scale object for future lookup.
	 */
	buildOrUpdateScales: function() {
		var me = this;
		var options = me.options;
		var scales = me.scales || {};
		var items = [];
		var updated = Object.keys(scales).reduce(function(obj, id) {
			obj[id] = false;
			return obj;
		}, {});

		if (options.scales) {
			items = items.concat(
				(options.scales.xAxes || []).map(function(xAxisOptions) {
					return {options: xAxisOptions, dtype: 'category', dposition: 'bottom'};
				}),
				(options.scales.yAxes || []).map(function(yAxisOptions) {
					return {options: yAxisOptions, dtype: 'linear', dposition: 'left'};
				})
			);
		}

		if (options.scale) {
			items.push({
				options: options.scale,
				dtype: 'radialLinear',
				isDefault: true,
				dposition: 'chartArea'
			});
		}

		helpers$1.each(items, function(item) {
			var scaleOptions = item.options;
			var id = scaleOptions.id;
			var scaleType = valueOrDefault$9(scaleOptions.type, item.dtype);

			if (positionIsHorizontal(scaleOptions.position) !== positionIsHorizontal(item.dposition)) {
				scaleOptions.position = item.dposition;
			}

			updated[id] = true;
			var scale = null;
			if (id in scales && scales[id].type === scaleType) {
				scale = scales[id];
				scale.options = scaleOptions;
				scale.ctx = me.ctx;
				scale.chart = me;
			} else {
				var scaleClass = core_scaleService.getScaleConstructor(scaleType);
				if (!scaleClass) {
					return;
				}
				scale = new scaleClass({
					id: id,
					type: scaleType,
					options: scaleOptions,
					ctx: me.ctx,
					chart: me
				});
				scales[scale.id] = scale;
			}

			scale.mergeTicksOptions();

			// TODO(SB): I think we should be able to remove this custom case (options.scale)
			// and consider it as a regular scale part of the "scales"" map only! This would
			// make the logic easier and remove some useless? custom code.
			if (item.isDefault) {
				me.scale = scale;
			}
		});
		// clear up discarded scales
		helpers$1.each(updated, function(hasUpdated, id) {
			if (!hasUpdated) {
				delete scales[id];
			}
		});

		me.scales = scales;

		core_scaleService.addScalesToLayout(this);
	},

	buildOrUpdateControllers: function() {
		var me = this;
		var newControllers = [];
		var datasets = me.data.datasets;
		var i, ilen;

		for (i = 0, ilen = datasets.length; i < ilen; i++) {
			var dataset = datasets[i];
			var meta = me.getDatasetMeta(i);
			var type = dataset.type || me.config.type;

			if (meta.type && meta.type !== type) {
				me.destroyDatasetMeta(i);
				meta = me.getDatasetMeta(i);
			}
			meta.type = type;
			meta.order = dataset.order || 0;
			meta.index = i;

			if (meta.controller) {
				meta.controller.updateIndex(i);
				meta.controller.linkScales();
			} else {
				var ControllerClass = controllers[meta.type];
				if (ControllerClass === undefined) {
					throw new Error('"' + meta.type + '" is not a chart type.');
				}

				meta.controller = new ControllerClass(me, i);
				newControllers.push(meta.controller);
			}
		}

		return newControllers;
	},

	/**
	 * Reset the elements of all datasets
	 * @private
	 */
	resetElements: function() {
		var me = this;
		helpers$1.each(me.data.datasets, function(dataset, datasetIndex) {
			me.getDatasetMeta(datasetIndex).controller.reset();
		}, me);
	},

	/**
	* Resets the chart back to it's state before the initial animation
	*/
	reset: function() {
		this.resetElements();
		this.tooltip.initialize();
	},

	update: function(config) {
		var me = this;
		var i, ilen;

		if (!config || typeof config !== 'object') {
			// backwards compatibility
			config = {
				duration: config,
				lazy: arguments[1]
			};
		}

		updateConfig(me);

		// plugins options references might have change, let's invalidate the cache
		// https://github.com/chartjs/Chart.js/issues/5111#issuecomment-355934167
		core_plugins._invalidate(me);

		if (core_plugins.notify(me, 'beforeUpdate') === false) {
			return;
		}

		// In case the entire data object changed
		me.tooltip._data = me.data;

		// Make sure dataset controllers are updated and new controllers are reset
		var newControllers = me.buildOrUpdateControllers();

		// Make sure all dataset controllers have correct meta data counts
		for (i = 0, ilen = me.data.datasets.length; i < ilen; i++) {
			me.getDatasetMeta(i).controller.buildOrUpdateElements();
		}

		me.updateLayout();

		// Can only reset the new controllers after the scales have been updated
		if (me.options.animation && me.options.animation.duration) {
			helpers$1.each(newControllers, function(controller) {
				controller.reset();
			});
		}

		me.updateDatasets();

		// Need to reset tooltip in case it is displayed with elements that are removed
		// after update.
		me.tooltip.initialize();

		// Last active contains items that were previously in the tooltip.
		// When we reset the tooltip, we need to clear it
		me.lastActive = [];

		// Do this before render so that any plugins that need final scale updates can use it
		core_plugins.notify(me, 'afterUpdate');

		me._layers.sort(compare2Level('z', '_idx'));

		if (me._bufferedRender) {
			me._bufferedRequest = {
				duration: config.duration,
				easing: config.easing,
				lazy: config.lazy
			};
		} else {
			me.render(config);
		}
	},

	/**
	 * Updates the chart layout unless a plugin returns `false` to the `beforeLayout`
	 * hook, in which case, plugins will not be called on `afterLayout`.
	 * @private
	 */
	updateLayout: function() {
		var me = this;

		if (core_plugins.notify(me, 'beforeLayout') === false) {
			return;
		}

		core_layouts.update(this, this.width, this.height);

		me._layers = [];
		helpers$1.each(me.boxes, function(box) {
			// _configure is called twice, once in core.scale.update and once here.
			// Here the boxes are fully updated and at their final positions.
			if (box._configure) {
				box._configure();
			}
			me._layers.push.apply(me._layers, box._layers());
		}, me);

		me._layers.forEach(function(item, index) {
			item._idx = index;
		});

		/**
		 * Provided for backward compatibility, use `afterLayout` instead.
		 * @method IPlugin#afterScaleUpdate
		 * @deprecated since version 2.5.0
		 * @todo remove at version 3
		 * @private
		 */
		core_plugins.notify(me, 'afterScaleUpdate');
		core_plugins.notify(me, 'afterLayout');
	},

	/**
	 * Updates all datasets unless a plugin returns `false` to the `beforeDatasetsUpdate`
	 * hook, in which case, plugins will not be called on `afterDatasetsUpdate`.
	 * @private
	 */
	updateDatasets: function() {
		var me = this;

		if (core_plugins.notify(me, 'beforeDatasetsUpdate') === false) {
			return;
		}

		for (var i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
			me.updateDataset(i);
		}

		core_plugins.notify(me, 'afterDatasetsUpdate');
	},

	/**
	 * Updates dataset at index unless a plugin returns `false` to the `beforeDatasetUpdate`
	 * hook, in which case, plugins will not be called on `afterDatasetUpdate`.
	 * @private
	 */
	updateDataset: function(index) {
		var me = this;
		var meta = me.getDatasetMeta(index);
		var args = {
			meta: meta,
			index: index
		};

		if (core_plugins.notify(me, 'beforeDatasetUpdate', [args]) === false) {
			return;
		}

		meta.controller._update();

		core_plugins.notify(me, 'afterDatasetUpdate', [args]);
	},

	render: function(config) {
		var me = this;

		if (!config || typeof config !== 'object') {
			// backwards compatibility
			config = {
				duration: config,
				lazy: arguments[1]
			};
		}

		var animationOptions = me.options.animation;
		var duration = valueOrDefault$9(config.duration, animationOptions && animationOptions.duration);
		var lazy = config.lazy;

		if (core_plugins.notify(me, 'beforeRender') === false) {
			return;
		}

		var onComplete = function(animation) {
			core_plugins.notify(me, 'afterRender');
			helpers$1.callback(animationOptions && animationOptions.onComplete, [animation], me);
		};

		if (animationOptions && duration) {
			var animation = new core_animation({
				numSteps: duration / 16.66, // 60 fps
				easing: config.easing || animationOptions.easing,

				render: function(chart, animationObject) {
					var easingFunction = helpers$1.easing.effects[animationObject.easing];
					var currentStep = animationObject.currentStep;
					var stepDecimal = currentStep / animationObject.numSteps;

					chart.draw(easingFunction(stepDecimal), stepDecimal, currentStep);
				},

				onAnimationProgress: animationOptions.onProgress,
				onAnimationComplete: onComplete
			});

			core_animations.addAnimation(me, animation, duration, lazy);
		} else {
			me.draw();

			// See https://github.com/chartjs/Chart.js/issues/3781
			onComplete(new core_animation({numSteps: 0, chart: me}));
		}

		return me;
	},

	draw: function(easingValue) {
		var me = this;
		var i, layers;

		me.clear();

		if (helpers$1.isNullOrUndef(easingValue)) {
			easingValue = 1;
		}

		me.transition(easingValue);

		if (me.width <= 0 || me.height <= 0) {
			return;
		}

		if (core_plugins.notify(me, 'beforeDraw', [easingValue]) === false) {
			return;
		}

		// Because of plugin hooks (before/afterDatasetsDraw), datasets can't
		// currently be part of layers. Instead, we draw
		// layers <= 0 before(default, backward compat), and the rest after
		layers = me._layers;
		for (i = 0; i < layers.length && layers[i].z <= 0; ++i) {
			layers[i].draw(me.chartArea);
		}

		me.drawDatasets(easingValue);

		// Rest of layers
		for (; i < layers.length; ++i) {
			layers[i].draw(me.chartArea);
		}

		me._drawTooltip(easingValue);

		core_plugins.notify(me, 'afterDraw', [easingValue]);
	},

	/**
	 * @private
	 */
	transition: function(easingValue) {
		var me = this;

		for (var i = 0, ilen = (me.data.datasets || []).length; i < ilen; ++i) {
			if (me.isDatasetVisible(i)) {
				me.getDatasetMeta(i).controller.transition(easingValue);
			}
		}

		me.tooltip.transition(easingValue);
	},

	/**
	 * @private
	 */
	_getSortedDatasetMetas: function(filterVisible) {
		var me = this;
		var datasets = me.data.datasets || [];
		var result = [];
		var i, ilen;

		for (i = 0, ilen = datasets.length; i < ilen; ++i) {
			if (!filterVisible || me.isDatasetVisible(i)) {
				result.push(me.getDatasetMeta(i));
			}
		}

		result.sort(compare2Level('order', 'index'));

		return result;
	},

	/**
	 * @private
	 */
	_getSortedVisibleDatasetMetas: function() {
		return this._getSortedDatasetMetas(true);
	},

	/**
	 * Draws all datasets unless a plugin returns `false` to the `beforeDatasetsDraw`
	 * hook, in which case, plugins will not be called on `afterDatasetsDraw`.
	 * @private
	 */
	drawDatasets: function(easingValue) {
		var me = this;
		var metasets, i;

		if (core_plugins.notify(me, 'beforeDatasetsDraw', [easingValue]) === false) {
			return;
		}

		metasets = me._getSortedVisibleDatasetMetas();
		for (i = metasets.length - 1; i >= 0; --i) {
			me.drawDataset(metasets[i], easingValue);
		}

		core_plugins.notify(me, 'afterDatasetsDraw', [easingValue]);
	},

	/**
	 * Draws dataset at index unless a plugin returns `false` to the `beforeDatasetDraw`
	 * hook, in which case, plugins will not be called on `afterDatasetDraw`.
	 * @private
	 */
	drawDataset: function(meta, easingValue) {
		var me = this;
		var args = {
			meta: meta,
			index: meta.index,
			easingValue: easingValue
		};

		if (core_plugins.notify(me, 'beforeDatasetDraw', [args]) === false) {
			return;
		}

		meta.controller.draw(easingValue);

		core_plugins.notify(me, 'afterDatasetDraw', [args]);
	},

	/**
	 * Draws tooltip unless a plugin returns `false` to the `beforeTooltipDraw`
	 * hook, in which case, plugins will not be called on `afterTooltipDraw`.
	 * @private
	 */
	_drawTooltip: function(easingValue) {
		var me = this;
		var tooltip = me.tooltip;
		var args = {
			tooltip: tooltip,
			easingValue: easingValue
		};

		if (core_plugins.notify(me, 'beforeTooltipDraw', [args]) === false) {
			return;
		}

		tooltip.draw();

		core_plugins.notify(me, 'afterTooltipDraw', [args]);
	},

	/**
	 * Get the single element that was clicked on
	 * @return An object containing the dataset index and element index of the matching element. Also contains the rectangle that was draw
	 */
	getElementAtEvent: function(e) {
		return core_interaction.modes.single(this, e);
	},

	getElementsAtEvent: function(e) {
		return core_interaction.modes.label(this, e, {intersect: true});
	},

	getElementsAtXAxis: function(e) {
		return core_interaction.modes['x-axis'](this, e, {intersect: true});
	},

	getElementsAtEventForMode: function(e, mode, options) {
		var method = core_interaction.modes[mode];
		if (typeof method === 'function') {
			return method(this, e, options);
		}

		return [];
	},

	getDatasetAtEvent: function(e) {
		return core_interaction.modes.dataset(this, e, {intersect: true});
	},

	getDatasetMeta: function(datasetIndex) {
		var me = this;
		var dataset = me.data.datasets[datasetIndex];
		if (!dataset._meta) {
			dataset._meta = {};
		}

		var meta = dataset._meta[me.id];
		if (!meta) {
			meta = dataset._meta[me.id] = {
				type: null,
				data: [],
				dataset: null,
				controller: null,
				hidden: null,			// See isDatasetVisible() comment
				xAxisID: null,
				yAxisID: null,
				order: dataset.order || 0,
				index: datasetIndex
			};
		}

		return meta;
	},

	getVisibleDatasetCount: function() {
		var count = 0;
		for (var i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
			if (this.isDatasetVisible(i)) {
				count++;
			}
		}
		return count;
	},

	isDatasetVisible: function(datasetIndex) {
		var meta = this.getDatasetMeta(datasetIndex);

		// meta.hidden is a per chart dataset hidden flag override with 3 states: if true or false,
		// the dataset.hidden value is ignored, else if null, the dataset hidden state is returned.
		return typeof meta.hidden === 'boolean' ? !meta.hidden : !this.data.datasets[datasetIndex].hidden;
	},

	generateLegend: function() {
		return this.options.legendCallback(this);
	},

	/**
	 * @private
	 */
	destroyDatasetMeta: function(datasetIndex) {
		var id = this.id;
		var dataset = this.data.datasets[datasetIndex];
		var meta = dataset._meta && dataset._meta[id];

		if (meta) {
			meta.controller.destroy();
			delete dataset._meta[id];
		}
	},

	destroy: function() {
		var me = this;
		var canvas = me.canvas;
		var i, ilen;

		me.stop();

		// dataset controllers need to cleanup associated data
		for (i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
			me.destroyDatasetMeta(i);
		}

		if (canvas) {
			me.unbindEvents();
			helpers$1.canvas.clear(me);
			platform.releaseContext(me.ctx);
			me.canvas = null;
			me.ctx = null;
		}

		core_plugins.notify(me, 'destroy');

		delete Chart.instances[me.id];
	},

	toBase64Image: function() {
		return this.canvas.toDataURL.apply(this.canvas, arguments);
	},

	initToolTip: function() {
		var me = this;
		me.tooltip = new core_tooltip({
			_chart: me,
			_chartInstance: me, // deprecated, backward compatibility
			_data: me.data,
			_options: me.options.tooltips
		}, me);
	},

	/**
	 * @private
	 */
	bindEvents: function() {
		var me = this;
		var listeners = me._listeners = {};
		var listener = function() {
			me.eventHandler.apply(me, arguments);
		};

		helpers$1.each(me.options.events, function(type) {
			platform.addEventListener(me, type, listener);
			listeners[type] = listener;
		});

		// Elements used to detect size change should not be injected for non responsive charts.
		// See https://github.com/chartjs/Chart.js/issues/2210
		if (me.options.responsive) {
			listener = function() {
				me.resize();
			};

			platform.addEventListener(me, 'resize', listener);
			listeners.resize = listener;
		}
	},

	/**
	 * @private
	 */
	unbindEvents: function() {
		var me = this;
		var listeners = me._listeners;
		if (!listeners) {
			return;
		}

		delete me._listeners;
		helpers$1.each(listeners, function(listener, type) {
			platform.removeEventListener(me, type, listener);
		});
	},

	updateHoverStyle: function(elements, mode, enabled) {
		var prefix = enabled ? 'set' : 'remove';
		var element, i, ilen;

		for (i = 0, ilen = elements.length; i < ilen; ++i) {
			element = elements[i];
			if (element) {
				this.getDatasetMeta(element._datasetIndex).controller[prefix + 'HoverStyle'](element);
			}
		}

		if (mode === 'dataset') {
			this.getDatasetMeta(elements[0]._datasetIndex).controller['_' + prefix + 'DatasetHoverStyle']();
		}
	},

	/**
	 * @private
	 */
	eventHandler: function(e) {
		var me = this;
		var tooltip = me.tooltip;

		if (core_plugins.notify(me, 'beforeEvent', [e]) === false) {
			return;
		}

		// Buffer any update calls so that renders do not occur
		me._bufferedRender = true;
		me._bufferedRequest = null;

		var changed = me.handleEvent(e);
		// for smooth tooltip animations issue #4989
		// the tooltip should be the source of change
		// Animation check workaround:
		// tooltip._start will be null when tooltip isn't animating
		if (tooltip) {
			changed = tooltip._start
				? tooltip.handleEvent(e)
				: changed | tooltip.handleEvent(e);
		}

		core_plugins.notify(me, 'afterEvent', [e]);

		var bufferedRequest = me._bufferedRequest;
		if (bufferedRequest) {
			// If we have an update that was triggered, we need to do a normal render
			me.render(bufferedRequest);
		} else if (changed && !me.animating) {
			// If entering, leaving, or changing elements, animate the change via pivot
			me.stop();

			// We only need to render at this point. Updating will cause scales to be
			// recomputed generating flicker & using more memory than necessary.
			me.render({
				duration: me.options.hover.animationDuration,
				lazy: true
			});
		}

		me._bufferedRender = false;
		me._bufferedRequest = null;

		return me;
	},

	/**
	 * Handle an event
	 * @private
	 * @param {IEvent} event the event to handle
	 * @return {boolean} true if the chart needs to re-render
	 */
	handleEvent: function(e) {
		var me = this;
		var options = me.options || {};
		var hoverOptions = options.hover;
		var changed = false;

		me.lastActive = me.lastActive || [];

		// Find Active Elements for hover and tooltips
		if (e.type === 'mouseout') {
			me.active = [];
		} else {
			me.active = me.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions);
		}

		// Invoke onHover hook
		// Need to call with native event here to not break backwards compatibility
		helpers$1.callback(options.onHover || options.hover.onHover, [e.native, me.active], me);

		if (e.type === 'mouseup' || e.type === 'click') {
			if (options.onClick) {
				// Use e.native here for backwards compatibility
				options.onClick.call(me, e.native, me.active);
			}
		}

		// Remove styling for last active (even if it may still be active)
		if (me.lastActive.length) {
			me.updateHoverStyle(me.lastActive, hoverOptions.mode, false);
		}

		// Built in hover styling
		if (me.active.length && hoverOptions.mode) {
			me.updateHoverStyle(me.active, hoverOptions.mode, true);
		}

		changed = !helpers$1.arrayEquals(me.active, me.lastActive);

		// Remember Last Actives
		me.lastActive = me.active;

		return changed;
	}
});

/**
 * NOTE(SB) We actually don't use this container anymore but we need to keep it
 * for backward compatibility. Though, it can still be useful for plugins that
 * would need to work on multiple charts?!
 */
Chart.instances = {};

var core_controller = Chart;

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart instead.
 * @class Chart.Controller
 * @deprecated since version 2.6
 * @todo remove at version 3
 * @private
 */
Chart.Controller = Chart;

/**
 * Provided for backward compatibility, not available anymore.
 * @namespace Chart
 * @deprecated since version 2.8
 * @todo remove at version 3
 * @private
 */
Chart.types = {};

/**
 * Provided for backward compatibility, not available anymore.
 * @namespace Chart.helpers.configMerge
 * @deprecated since version 2.8.0
 * @todo remove at version 3
 * @private
 */
helpers$1.configMerge = mergeConfig;

/**
 * Provided for backward compatibility, not available anymore.
 * @namespace Chart.helpers.scaleMerge
 * @deprecated since version 2.8.0
 * @todo remove at version 3
 * @private
 */
helpers$1.scaleMerge = mergeScaleConfig;

var core_helpers = function() {

	// -- Basic js utility methods

	helpers$1.where = function(collection, filterCallback) {
		if (helpers$1.isArray(collection) && Array.prototype.filter) {
			return collection.filter(filterCallback);
		}
		var filtered = [];

		helpers$1.each(collection, function(item) {
			if (filterCallback(item)) {
				filtered.push(item);
			}
		});

		return filtered;
	};
	helpers$1.findIndex = Array.prototype.findIndex ?
		function(array, callback, scope) {
			return array.findIndex(callback, scope);
		} :
		function(array, callback, scope) {
			scope = scope === undefined ? array : scope;
			for (var i = 0, ilen = array.length; i < ilen; ++i) {
				if (callback.call(scope, array[i], i, array)) {
					return i;
				}
			}
			return -1;
		};
	helpers$1.findNextWhere = function(arrayToSearch, filterCallback, startIndex) {
		// Default to start of the array
		if (helpers$1.isNullOrUndef(startIndex)) {
			startIndex = -1;
		}
		for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
			var currentItem = arrayToSearch[i];
			if (filterCallback(currentItem)) {
				return currentItem;
			}
		}
	};
	helpers$1.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex) {
		// Default to end of the array
		if (helpers$1.isNullOrUndef(startIndex)) {
			startIndex = arrayToSearch.length;
		}
		for (var i = startIndex - 1; i >= 0; i--) {
			var currentItem = arrayToSearch[i];
			if (filterCallback(currentItem)) {
				return currentItem;
			}
		}
	};

	// -- Math methods
	helpers$1.isNumber = function(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	};
	helpers$1.almostEquals = function(x, y, epsilon) {
		return Math.abs(x - y) < epsilon;
	};
	helpers$1.almostWhole = function(x, epsilon) {
		var rounded = Math.round(x);
		return ((rounded - epsilon) <= x) && ((rounded + epsilon) >= x);
	};
	helpers$1.max = function(array) {
		return array.reduce(function(max, value) {
			if (!isNaN(value)) {
				return Math.max(max, value);
			}
			return max;
		}, Number.NEGATIVE_INFINITY);
	};
	helpers$1.min = function(array) {
		return array.reduce(function(min, value) {
			if (!isNaN(value)) {
				return Math.min(min, value);
			}
			return min;
		}, Number.POSITIVE_INFINITY);
	};
	helpers$1.sign = Math.sign ?
		function(x) {
			return Math.sign(x);
		} :
		function(x) {
			x = +x; // convert to a number
			if (x === 0 || isNaN(x)) {
				return x;
			}
			return x > 0 ? 1 : -1;
		};
	helpers$1.toRadians = function(degrees) {
		return degrees * (Math.PI / 180);
	};
	helpers$1.toDegrees = function(radians) {
		return radians * (180 / Math.PI);
	};

	/**
	 * Returns the number of decimal places
	 * i.e. the number of digits after the decimal point, of the value of this Number.
	 * @param {number} x - A number.
	 * @returns {number} The number of decimal places.
	 * @private
	 */
	helpers$1._decimalPlaces = function(x) {
		if (!helpers$1.isFinite(x)) {
			return;
		}
		var e = 1;
		var p = 0;
		while (Math.round(x * e) / e !== x) {
			e *= 10;
			p++;
		}
		return p;
	};

	// Gets the angle from vertical upright to the point about a centre.
	helpers$1.getAngleFromPoint = function(centrePoint, anglePoint) {
		var distanceFromXCenter = anglePoint.x - centrePoint.x;
		var distanceFromYCenter = anglePoint.y - centrePoint.y;
		var radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);

		var angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);

		if (angle < (-0.5 * Math.PI)) {
			angle += 2.0 * Math.PI; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
		}

		return {
			angle: angle,
			distance: radialDistanceFromCenter
		};
	};
	helpers$1.distanceBetweenPoints = function(pt1, pt2) {
		return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
	};

	/**
	 * Provided for backward compatibility, not available anymore
	 * @function Chart.helpers.aliasPixel
	 * @deprecated since version 2.8.0
	 * @todo remove at version 3
	 */
	helpers$1.aliasPixel = function(pixelWidth) {
		return (pixelWidth % 2 === 0) ? 0 : 0.5;
	};

	/**
	 * Returns the aligned pixel value to avoid anti-aliasing blur
	 * @param {Chart} chart - The chart instance.
	 * @param {number} pixel - A pixel value.
	 * @param {number} width - The width of the element.
	 * @returns {number} The aligned pixel value.
	 * @private
	 */
	helpers$1._alignPixel = function(chart, pixel, width) {
		var devicePixelRatio = chart.currentDevicePixelRatio;
		var halfWidth = width / 2;
		return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
	};

	helpers$1.splineCurve = function(firstPoint, middlePoint, afterPoint, t) {
		// Props to Rob Spencer at scaled innovation for his post on splining between points
		// http://scaledinnovation.com/analytics/splines/aboutSplines.html

		// This function must also respect "skipped" points

		var previous = firstPoint.skip ? middlePoint : firstPoint;
		var current = middlePoint;
		var next = afterPoint.skip ? middlePoint : afterPoint;

		var d01 = Math.sqrt(Math.pow(current.x - previous.x, 2) + Math.pow(current.y - previous.y, 2));
		var d12 = Math.sqrt(Math.pow(next.x - current.x, 2) + Math.pow(next.y - current.y, 2));

		var s01 = d01 / (d01 + d12);
		var s12 = d12 / (d01 + d12);

		// If all points are the same, s01 & s02 will be inf
		s01 = isNaN(s01) ? 0 : s01;
		s12 = isNaN(s12) ? 0 : s12;

		var fa = t * s01; // scaling factor for triangle Ta
		var fb = t * s12;

		return {
			previous: {
				x: current.x - fa * (next.x - previous.x),
				y: current.y - fa * (next.y - previous.y)
			},
			next: {
				x: current.x + fb * (next.x - previous.x),
				y: current.y + fb * (next.y - previous.y)
			}
		};
	};
	helpers$1.EPSILON = Number.EPSILON || 1e-14;
	helpers$1.splineCurveMonotone = function(points) {
		// This function calculates Bézier control points in a similar way than |splineCurve|,
		// but preserves monotonicity of the provided data and ensures no local extremums are added
		// between the dataset discrete points due to the interpolation.
		// See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation

		var pointsWithTangents = (points || []).map(function(point) {
			return {
				model: point._model,
				deltaK: 0,
				mK: 0
			};
		});

		// Calculate slopes (deltaK) and initialize tangents (mK)
		var pointsLen = pointsWithTangents.length;
		var i, pointBefore, pointCurrent, pointAfter;
		for (i = 0; i < pointsLen; ++i) {
			pointCurrent = pointsWithTangents[i];
			if (pointCurrent.model.skip) {
				continue;
			}

			pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
			pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
			if (pointAfter && !pointAfter.model.skip) {
				var slopeDeltaX = (pointAfter.model.x - pointCurrent.model.x);

				// In the case of two points that appear at the same x pixel, slopeDeltaX is 0
				pointCurrent.deltaK = slopeDeltaX !== 0 ? (pointAfter.model.y - pointCurrent.model.y) / slopeDeltaX : 0;
			}

			if (!pointBefore || pointBefore.model.skip) {
				pointCurrent.mK = pointCurrent.deltaK;
			} else if (!pointAfter || pointAfter.model.skip) {
				pointCurrent.mK = pointBefore.deltaK;
			} else if (this.sign(pointBefore.deltaK) !== this.sign(pointCurrent.deltaK)) {
				pointCurrent.mK = 0;
			} else {
				pointCurrent.mK = (pointBefore.deltaK + pointCurrent.deltaK) / 2;
			}
		}

		// Adjust tangents to ensure monotonic properties
		var alphaK, betaK, tauK, squaredMagnitude;
		for (i = 0; i < pointsLen - 1; ++i) {
			pointCurrent = pointsWithTangents[i];
			pointAfter = pointsWithTangents[i + 1];
			if (pointCurrent.model.skip || pointAfter.model.skip) {
				continue;
			}

			if (helpers$1.almostEquals(pointCurrent.deltaK, 0, this.EPSILON)) {
				pointCurrent.mK = pointAfter.mK = 0;
				continue;
			}

			alphaK = pointCurrent.mK / pointCurrent.deltaK;
			betaK = pointAfter.mK / pointCurrent.deltaK;
			squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
			if (squaredMagnitude <= 9) {
				continue;
			}

			tauK = 3 / Math.sqrt(squaredMagnitude);
			pointCurrent.mK = alphaK * tauK * pointCurrent.deltaK;
			pointAfter.mK = betaK * tauK * pointCurrent.deltaK;
		}

		// Compute control points
		var deltaX;
		for (i = 0; i < pointsLen; ++i) {
			pointCurrent = pointsWithTangents[i];
			if (pointCurrent.model.skip) {
				continue;
			}

			pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
			pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
			if (pointBefore && !pointBefore.model.skip) {
				deltaX = (pointCurrent.model.x - pointBefore.model.x) / 3;
				pointCurrent.model.controlPointPreviousX = pointCurrent.model.x - deltaX;
				pointCurrent.model.controlPointPreviousY = pointCurrent.model.y - deltaX * pointCurrent.mK;
			}
			if (pointAfter && !pointAfter.model.skip) {
				deltaX = (pointAfter.model.x - pointCurrent.model.x) / 3;
				pointCurrent.model.controlPointNextX = pointCurrent.model.x + deltaX;
				pointCurrent.model.controlPointNextY = pointCurrent.model.y + deltaX * pointCurrent.mK;
			}
		}
	};
	helpers$1.nextItem = function(collection, index, loop) {
		if (loop) {
			return index >= collection.length - 1 ? collection[0] : collection[index + 1];
		}
		return index >= collection.length - 1 ? collection[collection.length - 1] : collection[index + 1];
	};
	helpers$1.previousItem = function(collection, index, loop) {
		if (loop) {
			return index <= 0 ? collection[collection.length - 1] : collection[index - 1];
		}
		return index <= 0 ? collection[0] : collection[index - 1];
	};
	// Implementation of the nice number algorithm used in determining where axis labels will go
	helpers$1.niceNum = function(range, round) {
		var exponent = Math.floor(helpers$1.log10(range));
		var fraction = range / Math.pow(10, exponent);
		var niceFraction;

		if (round) {
			if (fraction < 1.5) {
				niceFraction = 1;
			} else if (fraction < 3) {
				niceFraction = 2;
			} else if (fraction < 7) {
				niceFraction = 5;
			} else {
				niceFraction = 10;
			}
		} else if (fraction <= 1.0) {
			niceFraction = 1;
		} else if (fraction <= 2) {
			niceFraction = 2;
		} else if (fraction <= 5) {
			niceFraction = 5;
		} else {
			niceFraction = 10;
		}

		return niceFraction * Math.pow(10, exponent);
	};
	// Request animation polyfill - https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
	helpers$1.requestAnimFrame = (function() {
		if (typeof window === 'undefined') {
			return function(callback) {
				callback();
			};
		}
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback) {
				return window.setTimeout(callback, 1000 / 60);
			};
	}());
	// -- DOM methods
	helpers$1.getRelativePosition = function(evt, chart) {
		var mouseX, mouseY;
		var e = evt.originalEvent || evt;
		var canvas = evt.target || evt.srcElement;
		var boundingRect = canvas.getBoundingClientRect();

		var touches = e.touches;
		if (touches && touches.length > 0) {
			mouseX = touches[0].clientX;
			mouseY = touches[0].clientY;

		} else {
			mouseX = e.clientX;
			mouseY = e.clientY;
		}

		// Scale mouse coordinates into canvas coordinates
		// by following the pattern laid out by 'jerryj' in the comments of
		// https://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
		var paddingLeft = parseFloat(helpers$1.getStyle(canvas, 'padding-left'));
		var paddingTop = parseFloat(helpers$1.getStyle(canvas, 'padding-top'));
		var paddingRight = parseFloat(helpers$1.getStyle(canvas, 'padding-right'));
		var paddingBottom = parseFloat(helpers$1.getStyle(canvas, 'padding-bottom'));
		var width = boundingRect.right - boundingRect.left - paddingLeft - paddingRight;
		var height = boundingRect.bottom - boundingRect.top - paddingTop - paddingBottom;

		// We divide by the current device pixel ratio, because the canvas is scaled up by that amount in each direction. However
		// the backend model is in unscaled coordinates. Since we are going to deal with our model coordinates, we go back here
		mouseX = Math.round((mouseX - boundingRect.left - paddingLeft) / (width) * canvas.width / chart.currentDevicePixelRatio);
		mouseY = Math.round((mouseY - boundingRect.top - paddingTop) / (height) * canvas.height / chart.currentDevicePixelRatio);

		return {
			x: mouseX,
			y: mouseY
		};

	};

	// Private helper function to convert max-width/max-height values that may be percentages into a number
	function parseMaxStyle(styleValue, node, parentProperty) {
		var valueInPixels;
		if (typeof styleValue === 'string') {
			valueInPixels = parseInt(styleValue, 10);

			if (styleValue.indexOf('%') !== -1) {
				// percentage * size in dimension
				valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
			}
		} else {
			valueInPixels = styleValue;
		}

		return valueInPixels;
	}

	/**
	 * Returns if the given value contains an effective constraint.
	 * @private
	 */
	function isConstrainedValue(value) {
		return value !== undefined && value !== null && value !== 'none';
	}

	/**
	 * Returns the max width or height of the given DOM node in a cross-browser compatible fashion
	 * @param {HTMLElement} domNode - the node to check the constraint on
	 * @param {string} maxStyle - the style that defines the maximum for the direction we are using ('max-width' / 'max-height')
	 * @param {string} percentageProperty - property of parent to use when calculating width as a percentage
	 * @see {@link https://www.nathanaeljones.com/blog/2013/reading-max-width-cross-browser}
	 */
	function getConstraintDimension(domNode, maxStyle, percentageProperty) {
		var view = document.defaultView;
		var parentNode = helpers$1._getParentNode(domNode);
		var constrainedNode = view.getComputedStyle(domNode)[maxStyle];
		var constrainedContainer = view.getComputedStyle(parentNode)[maxStyle];
		var hasCNode = isConstrainedValue(constrainedNode);
		var hasCContainer = isConstrainedValue(constrainedContainer);
		var infinity = Number.POSITIVE_INFINITY;

		if (hasCNode || hasCContainer) {
			return Math.min(
				hasCNode ? parseMaxStyle(constrainedNode, domNode, percentageProperty) : infinity,
				hasCContainer ? parseMaxStyle(constrainedContainer, parentNode, percentageProperty) : infinity);
		}

		return 'none';
	}
	// returns Number or undefined if no constraint
	helpers$1.getConstraintWidth = function(domNode) {
		return getConstraintDimension(domNode, 'max-width', 'clientWidth');
	};
	// returns Number or undefined if no constraint
	helpers$1.getConstraintHeight = function(domNode) {
		return getConstraintDimension(domNode, 'max-height', 'clientHeight');
	};
	/**
	 * @private
 	 */
	helpers$1._calculatePadding = function(container, padding, parentDimension) {
		padding = helpers$1.getStyle(container, padding);

		return padding.indexOf('%') > -1 ? parentDimension * parseInt(padding, 10) / 100 : parseInt(padding, 10);
	};
	/**
	 * @private
	 */
	helpers$1._getParentNode = function(domNode) {
		var parent = domNode.parentNode;
		if (parent && parent.toString() === '[object ShadowRoot]') {
			parent = parent.host;
		}
		return parent;
	};
	helpers$1.getMaximumWidth = function(domNode) {
		var container = helpers$1._getParentNode(domNode);
		if (!container) {
			return domNode.clientWidth;
		}

		var clientWidth = container.clientWidth;
		var paddingLeft = helpers$1._calculatePadding(container, 'padding-left', clientWidth);
		var paddingRight = helpers$1._calculatePadding(container, 'padding-right', clientWidth);

		var w = clientWidth - paddingLeft - paddingRight;
		var cw = helpers$1.getConstraintWidth(domNode);
		return isNaN(cw) ? w : Math.min(w, cw);
	};
	helpers$1.getMaximumHeight = function(domNode) {
		var container = helpers$1._getParentNode(domNode);
		if (!container) {
			return domNode.clientHeight;
		}

		var clientHeight = container.clientHeight;
		var paddingTop = helpers$1._calculatePadding(container, 'padding-top', clientHeight);
		var paddingBottom = helpers$1._calculatePadding(container, 'padding-bottom', clientHeight);

		var h = clientHeight - paddingTop - paddingBottom;
		var ch = helpers$1.getConstraintHeight(domNode);
		return isNaN(ch) ? h : Math.min(h, ch);
	};
	helpers$1.getStyle = function(el, property) {
		return el.currentStyle ?
			el.currentStyle[property] :
			document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
	};
	helpers$1.retinaScale = function(chart, forceRatio) {
		var pixelRatio = chart.currentDevicePixelRatio = forceRatio || (typeof window !== 'undefined' && window.devicePixelRatio) || 1;
		if (pixelRatio === 1) {
			return;
		}

		var canvas = chart.canvas;
		var height = chart.height;
		var width = chart.width;

		canvas.height = height * pixelRatio;
		canvas.width = width * pixelRatio;
		chart.ctx.scale(pixelRatio, pixelRatio);

		// If no style has been set on the canvas, the render size is used as display size,
		// making the chart visually bigger, so let's enforce it to the "correct" values.
		// See https://github.com/chartjs/Chart.js/issues/3575
		if (!canvas.style.height && !canvas.style.width) {
			canvas.style.height = height + 'px';
			canvas.style.width = width + 'px';
		}
	};
	// -- Canvas methods
	helpers$1.fontString = function(pixelSize, fontStyle, fontFamily) {
		return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
	};
	helpers$1.longestText = function(ctx, font, arrayOfThings, cache) {
		cache = cache || {};
		var data = cache.data = cache.data || {};
		var gc = cache.garbageCollect = cache.garbageCollect || [];

		if (cache.font !== font) {
			data = cache.data = {};
			gc = cache.garbageCollect = [];
			cache.font = font;
		}

		ctx.font = font;
		var longest = 0;
		var ilen = arrayOfThings.length;
		var i, j, jlen, thing, nestedThing;
		for (i = 0; i < ilen; i++) {
			thing = arrayOfThings[i];

			// Undefined strings and arrays should not be measured
			if (thing !== undefined && thing !== null && helpers$1.isArray(thing) !== true) {
				longest = helpers$1.measureText(ctx, data, gc, longest, thing);
			} else if (helpers$1.isArray(thing)) {
				// if it is an array lets measure each element
				// to do maybe simplify this function a bit so we can do this more recursively?
				for (j = 0, jlen = thing.length; j < jlen; j++) {
					nestedThing = thing[j];
					// Undefined strings and arrays should not be measured
					if (nestedThing !== undefined && nestedThing !== null && !helpers$1.isArray(nestedThing)) {
						longest = helpers$1.measureText(ctx, data, gc, longest, nestedThing);
					}
				}
			}
		}

		var gcLen = gc.length / 2;
		if (gcLen > arrayOfThings.length) {
			for (i = 0; i < gcLen; i++) {
				delete data[gc[i]];
			}
			gc.splice(0, gcLen);
		}
		return longest;
	};
	helpers$1.measureText = function(ctx, data, gc, longest, string) {
		var textWidth = data[string];
		if (!textWidth) {
			textWidth = data[string] = ctx.measureText(string).width;
			gc.push(string);
		}
		if (textWidth > longest) {
			longest = textWidth;
		}
		return longest;
	};

	/**
	 * @deprecated
	 */
	helpers$1.numberOfLabelLines = function(arrayOfThings) {
		var numberOfLines = 1;
		helpers$1.each(arrayOfThings, function(thing) {
			if (helpers$1.isArray(thing)) {
				if (thing.length > numberOfLines) {
					numberOfLines = thing.length;
				}
			}
		});
		return numberOfLines;
	};

	helpers$1.color = !chartjsColor ?
		function(value) {
			console.error('Color.js not found!');
			return value;
		} :
		function(value) {
			/* global CanvasGradient */
			if (value instanceof CanvasGradient) {
				value = core_defaults.global.defaultColor;
			}

			return chartjsColor(value);
		};

	helpers$1.getHoverColor = function(colorValue) {
		/* global CanvasPattern */
		return (colorValue instanceof CanvasPattern || colorValue instanceof CanvasGradient) ?
			colorValue :
			helpers$1.color(colorValue).saturate(0.5).darken(0.1).rgbString();
	};
};

function abstract() {
	throw new Error(
		'This method is not implemented: either no adapter can ' +
		'be found or an incomplete integration was provided.'
	);
}

/**
 * Date adapter (current used by the time scale)
 * @namespace Chart._adapters._date
 * @memberof Chart._adapters
 * @private
 */

/**
 * Currently supported unit string values.
 * @typedef {('millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year')}
 * @memberof Chart._adapters._date
 * @name Unit
 */

/**
 * @class
 */
function DateAdapter(options) {
	this.options = options || {};
}

helpers$1.extend(DateAdapter.prototype, /** @lends DateAdapter */ {
	/**
	 * Returns a map of time formats for the supported formatting units defined
	 * in Unit as well as 'datetime' representing a detailed date/time string.
	 * @returns {{string: string}}
	 */
	formats: abstract,

	/**
	 * Parses the given `value` and return the associated timestamp.
	 * @param {any} value - the value to parse (usually comes from the data)
	 * @param {string} [format] - the expected data format
	 * @returns {(number|null)}
	 * @function
	 */
	parse: abstract,

	/**
	 * Returns the formatted date in the specified `format` for a given `timestamp`.
	 * @param {number} timestamp - the timestamp to format
	 * @param {string} format - the date/time token
	 * @return {string}
	 * @function
	 */
	format: abstract,

	/**
	 * Adds the specified `amount` of `unit` to the given `timestamp`.
	 * @param {number} timestamp - the input timestamp
	 * @param {number} amount - the amount to add
	 * @param {Unit} unit - the unit as string
	 * @return {number}
	 * @function
	 */
	add: abstract,

	/**
	 * Returns the number of `unit` between the given timestamps.
	 * @param {number} max - the input timestamp (reference)
	 * @param {number} min - the timestamp to substract
	 * @param {Unit} unit - the unit as string
	 * @return {number}
	 * @function
	 */
	diff: abstract,

	/**
	 * Returns start of `unit` for the given `timestamp`.
	 * @param {number} timestamp - the input timestamp
	 * @param {Unit} unit - the unit as string
	 * @param {number} [weekday] - the ISO day of the week with 1 being Monday
	 * and 7 being Sunday (only needed if param *unit* is `isoWeek`).
	 * @function
	 */
	startOf: abstract,

	/**
	 * Returns end of `unit` for the given `timestamp`.
	 * @param {number} timestamp - the input timestamp
	 * @param {Unit} unit - the unit as string
	 * @function
	 */
	endOf: abstract,

	// DEPRECATIONS

	/**
	 * Provided for backward compatibility for scale.getValueForPixel(),
	 * this method should be overridden only by the moment adapter.
	 * @deprecated since version 2.8.0
	 * @todo remove at version 3
	 * @private
	 */
	_create: function(value) {
		return value;
	}
});

DateAdapter.override = function(members) {
	helpers$1.extend(DateAdapter.prototype, members);
};

var _date = DateAdapter;

var core_adapters = {
	_date: _date
};

/**
 * Namespace to hold static tick generation functions
 * @namespace Chart.Ticks
 */
var core_ticks = {
	/**
	 * Namespace to hold formatters for different types of ticks
	 * @namespace Chart.Ticks.formatters
	 */
	formatters: {
		/**
		 * Formatter for value labels
		 * @method Chart.Ticks.formatters.values
		 * @param value the value to display
		 * @return {string|string[]} the label to display
		 */
		values: function(value) {
			return helpers$1.isArray(value) ? value : '' + value;
		},

		/**
		 * Formatter for linear numeric ticks
		 * @method Chart.Ticks.formatters.linear
		 * @param tickValue {number} the value to be formatted
		 * @param index {number} the position of the tickValue parameter in the ticks array
		 * @param ticks {number[]} the list of ticks being converted
		 * @return {string} string representation of the tickValue parameter
		 */
		linear: function(tickValue, index, ticks) {
			// If we have lots of ticks, don't use the ones
			var delta = ticks.length > 3 ? ticks[2] - ticks[1] : ticks[1] - ticks[0];

			// If we have a number like 2.5 as the delta, figure out how many decimal places we need
			if (Math.abs(delta) > 1) {
				if (tickValue !== Math.floor(tickValue)) {
					// not an integer
					delta = tickValue - Math.floor(tickValue);
				}
			}

			var logDelta = helpers$1.log10(Math.abs(delta));
			var tickString = '';

			if (tickValue !== 0) {
				var maxTick = Math.max(Math.abs(ticks[0]), Math.abs(ticks[ticks.length - 1]));
				if (maxTick < 1e-4) { // all ticks are small numbers; use scientific notation
					var logTick = helpers$1.log10(Math.abs(tickValue));
					var numExponential = Math.floor(logTick) - Math.floor(logDelta);
					numExponential = Math.max(Math.min(numExponential, 20), 0);
					tickString = tickValue.toExponential(numExponential);
				} else {
					var numDecimal = -1 * Math.floor(logDelta);
					numDecimal = Math.max(Math.min(numDecimal, 20), 0); // toFixed has a max of 20 decimal places
					tickString = tickValue.toFixed(numDecimal);
				}
			} else {
				tickString = '0'; // never show decimal places for 0
			}

			return tickString;
		},

		logarithmic: function(tickValue, index, ticks) {
			var remain = tickValue / (Math.pow(10, Math.floor(helpers$1.log10(tickValue))));

			if (tickValue === 0) {
				return '0';
			} else if (remain === 1 || remain === 2 || remain === 5 || index === 0 || index === ticks.length - 1) {
				return tickValue.toExponential();
			}
			return '';
		}
	}
};

var isArray = helpers$1.isArray;
var isNullOrUndef = helpers$1.isNullOrUndef;
var valueOrDefault$a = helpers$1.valueOrDefault;
var valueAtIndexOrDefault = helpers$1.valueAtIndexOrDefault;

core_defaults._set('scale', {
	display: true,
	position: 'left',
	offset: false,

	// grid line settings
	gridLines: {
		display: true,
		color: 'rgba(0,0,0,0.1)',
		lineWidth: 1,
		drawBorder: true,
		drawOnChartArea: true,
		drawTicks: true,
		tickMarkLength: 10,
		zeroLineWidth: 1,
		zeroLineColor: 'rgba(0,0,0,0.25)',
		zeroLineBorderDash: [],
		zeroLineBorderDashOffset: 0.0,
		offsetGridLines: false,
		borderDash: [],
		borderDashOffset: 0.0
	},

	// scale label
	scaleLabel: {
		// display property
		display: false,

		// actual label
		labelString: '',

		// top/bottom padding
		padding: {
			top: 4,
			bottom: 4
		}
	},

	// label settings
	ticks: {
		beginAtZero: false,
		minRotation: 0,
		maxRotation: 50,
		mirror: false,
		padding: 0,
		reverse: false,
		display: true,
		autoSkip: true,
		autoSkipPadding: 0,
		labelOffset: 0,
		// We pass through arrays to be rendered as multiline labels, we convert Others to strings here.
		callback: core_ticks.formatters.values,
		minor: {},
		major: {}
	}
});

/** Returns a new array containing numItems from arr */
function sample(arr, numItems) {
	var result = [];
	var increment = arr.length / numItems;
	var i = 0;
	var len = arr.length;

	for (; i < len; i += increment) {
		result.push(arr[Math.floor(i)]);
	}
	return result;
}

function getPixelForGridLine(scale, index, offsetGridLines) {
	var length = scale.getTicks().length;
	var validIndex = Math.min(index, length - 1);
	var lineValue = scale.getPixelForTick(validIndex);
	var start = scale._startPixel;
	var end = scale._endPixel;
	var epsilon = 1e-6; // 1e-6 is margin in pixels for accumulated error.
	var offset;

	if (offsetGridLines) {
		if (length === 1) {
			offset = Math.max(lineValue - start, end - lineValue);
		} else if (index === 0) {
			offset = (scale.getPixelForTick(1) - lineValue) / 2;
		} else {
			offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
		}
		lineValue += validIndex < index ? offset : -offset;

		// Return undefined if the pixel is out of the range
		if (lineValue < start - epsilon || lineValue > end + epsilon) {
			return;
		}
	}
	return lineValue;
}

function garbageCollect(caches, length) {
	helpers$1.each(caches, function(cache) {
		var gc = cache.gc;
		var gcLen = gc.length / 2;
		var i;
		if (gcLen > length) {
			for (i = 0; i < gcLen; ++i) {
				delete cache.data[gc[i]];
			}
			gc.splice(0, gcLen);
		}
	});
}

/**
 * Returns {width, height, offset} objects for the first, last, widest, highest tick
 * labels where offset indicates the anchor point offset from the top in pixels.
 */
function computeLabelSizes(ctx, tickFonts, ticks, caches) {
	var length = ticks.length;
	var widths = [];
	var heights = [];
	var offsets = [];
	var widestLabelSize = 0;
	var highestLabelSize = 0;
	var i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel, widest, highest;

	for (i = 0; i < length; ++i) {
		label = ticks[i].label;
		tickFont = ticks[i].major ? tickFonts.major : tickFonts.minor;
		ctx.font = fontString = tickFont.string;
		cache = caches[fontString] = caches[fontString] || {data: {}, gc: []};
		lineHeight = tickFont.lineHeight;
		width = height = 0;
		// Undefined labels and arrays should not be measured
		if (!isNullOrUndef(label) && !isArray(label)) {
			width = helpers$1.measureText(ctx, cache.data, cache.gc, width, label);
			height = lineHeight;
		} else if (isArray(label)) {
			// if it is an array let's measure each element
			for (j = 0, jlen = label.length; j < jlen; ++j) {
				nestedLabel = label[j];
				// Undefined labels and arrays should not be measured
				if (!isNullOrUndef(nestedLabel) && !isArray(nestedLabel)) {
					width = helpers$1.measureText(ctx, cache.data, cache.gc, width, nestedLabel);
					height += lineHeight;
				}
			}
		}
		widths.push(width);
		heights.push(height);
		offsets.push(lineHeight / 2);
		widestLabelSize = Math.max(width, widestLabelSize);
		highestLabelSize = Math.max(height, highestLabelSize);
	}
	garbageCollect(caches, length);

	widest = widths.indexOf(widestLabelSize);
	highest = heights.indexOf(highestLabelSize);

	function valueAt(idx) {
		return {
			width: widths[idx] || 0,
			height: heights[idx] || 0,
			offset: offsets[idx] || 0
		};
	}

	return {
		first: valueAt(0),
		last: valueAt(length - 1),
		widest: valueAt(widest),
		highest: valueAt(highest)
	};
}

function getTickMarkLength(options) {
	return options.drawTicks ? options.tickMarkLength : 0;
}

function getScaleLabelHeight(options) {
	var font, padding;

	if (!options.display) {
		return 0;
	}

	font = helpers$1.options._parseFont(options);
	padding = helpers$1.options.toPadding(options.padding);

	return font.lineHeight + padding.height;
}

function parseFontOptions(options, nestedOpts) {
	return helpers$1.extend(helpers$1.options._parseFont({
		fontFamily: valueOrDefault$a(nestedOpts.fontFamily, options.fontFamily),
		fontSize: valueOrDefault$a(nestedOpts.fontSize, options.fontSize),
		fontStyle: valueOrDefault$a(nestedOpts.fontStyle, options.fontStyle),
		lineHeight: valueOrDefault$a(nestedOpts.lineHeight, options.lineHeight)
	}), {
		color: helpers$1.options.resolve([nestedOpts.fontColor, options.fontColor, core_defaults.global.defaultFontColor])
	});
}

function parseTickFontOptions(options) {
	var minor = parseFontOptions(options, options.minor);
	var major = options.major.enabled ? parseFontOptions(options, options.major) : minor;

	return {minor: minor, major: major};
}

function nonSkipped(ticksToFilter) {
	var filtered = [];
	var item, index, len;
	for (index = 0, len = ticksToFilter.length; index < len; ++index) {
		item = ticksToFilter[index];
		if (typeof item._index !== 'undefined') {
			filtered.push(item);
		}
	}
	return filtered;
}

function getEvenSpacing(arr) {
	var len = arr.length;
	var i, diff;

	if (len < 2) {
		return false;
	}

	for (diff = arr[0], i = 1; i < len; ++i) {
		if (arr[i] - arr[i - 1] !== diff) {
			return false;
		}
	}
	return diff;
}

function calculateSpacing(majorIndices, ticks, axisLength, ticksLimit) {
	var evenMajorSpacing = getEvenSpacing(majorIndices);
	var spacing = (ticks.length - 1) / ticksLimit;
	var factors, factor, i, ilen;

	// If the major ticks are evenly spaced apart, place the minor ticks
	// so that they divide the major ticks into even chunks
	if (!evenMajorSpacing) {
		return Math.max(spacing, 1);
	}

	factors = helpers$1.math._factorize(evenMajorSpacing);
	for (i = 0, ilen = factors.length - 1; i < ilen; i++) {
		factor = factors[i];
		if (factor > spacing) {
			return factor;
		}
	}
	return Math.max(spacing, 1);
}

function getMajorIndices(ticks) {
	var result = [];
	var i, ilen;
	for (i = 0, ilen = ticks.length; i < ilen; i++) {
		if (ticks[i].major) {
			result.push(i);
		}
	}
	return result;
}

function skipMajors(ticks, majorIndices, spacing) {
	var count = 0;
	var next = majorIndices[0];
	var i, tick;

	spacing = Math.ceil(spacing);
	for (i = 0; i < ticks.length; i++) {
		tick = ticks[i];
		if (i === next) {
			tick._index = i;
			count++;
			next = majorIndices[count * spacing];
		} else {
			delete tick.label;
		}
	}
}

function skip(ticks, spacing, majorStart, majorEnd) {
	var start = valueOrDefault$a(majorStart, 0);
	var end = Math.min(valueOrDefault$a(majorEnd, ticks.length), ticks.length);
	var count = 0;
	var length, i, tick, next;

	spacing = Math.ceil(spacing);
	if (majorEnd) {
		length = majorEnd - majorStart;
		spacing = length / Math.floor(length / spacing);
	}

	next = start;

	while (next < 0) {
		count++;
		next = Math.round(start + count * spacing);
	}

	for (i = Math.max(start, 0); i < end; i++) {
		tick = ticks[i];
		if (i === next) {
			tick._index = i;
			count++;
			next = Math.round(start + count * spacing);
		} else {
			delete tick.label;
		}
	}
}

var Scale = core_element.extend({

	zeroLineIndex: 0,

	/**
	 * Get the padding needed for the scale
	 * @method getPadding
	 * @private
	 * @returns {Padding} the necessary padding
	 */
	getPadding: function() {
		var me = this;
		return {
			left: me.paddingLeft || 0,
			top: me.paddingTop || 0,
			right: me.paddingRight || 0,
			bottom: me.paddingBottom || 0
		};
	},

	/**
	 * Returns the scale tick objects ({label, major})
	 * @since 2.7
	 */
	getTicks: function() {
		return this._ticks;
	},

	/**
	* @private
	*/
	_getLabels: function() {
		var data = this.chart.data;
		return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
	},

	// These methods are ordered by lifecyle. Utilities then follow.
	// Any function defined here is inherited by all scale types.
	// Any function can be extended by the scale type

	/**
	 * Provided for backward compatibility, not available anymore
	 * @function Chart.Scale.mergeTicksOptions
	 * @deprecated since version 2.8.0
	 * @todo remove at version 3
	 */
	mergeTicksOptions: function() {
		// noop
	},

	beforeUpdate: function() {
		helpers$1.callback(this.options.beforeUpdate, [this]);
	},

	/**
	 * @param {number} maxWidth - the max width in pixels
	 * @param {number} maxHeight - the max height in pixels
	 * @param {object} margins - the space between the edge of the other scales and edge of the chart
	 *   This space comes from two sources:
	 *     - padding - space that's required to show the labels at the edges of the scale
	 *     - thickness of scales or legends in another orientation
	 */
	update: function(maxWidth, maxHeight, margins) {
		var me = this;
		var tickOpts = me.options.ticks;
		var sampleSize = tickOpts.sampleSize;
		var i, ilen, labels, ticks, samplingEnabled;

		// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
		me.beforeUpdate();

		// Absorb the master measurements
		me.maxWidth = maxWidth;
		me.maxHeight = maxHeight;
		me.margins = helpers$1.extend({
			left: 0,
			right: 0,
			top: 0,
			bottom: 0
		}, margins);

		me._ticks = null;
		me.ticks = null;
		me._labelSizes = null;
		me._maxLabelLines = 0;
		me.longestLabelWidth = 0;
		me.longestTextCache = me.longestTextCache || {};
		me._gridLineItems = null;
		me._labelItems = null;

		// Dimensions
		me.beforeSetDimensions();
		me.setDimensions();
		me.afterSetDimensions();

		// Data min/max
		me.beforeDataLimits();
		me.determineDataLimits();
		me.afterDataLimits();

		// Ticks - `this.ticks` is now DEPRECATED!
		// Internal ticks are now stored as objects in the PRIVATE `this._ticks` member
		// and must not be accessed directly from outside this class. `this.ticks` being
		// around for long time and not marked as private, we can't change its structure
		// without unexpected breaking changes. If you need to access the scale ticks,
		// use scale.getTicks() instead.

		me.beforeBuildTicks();

		// New implementations should return an array of objects but for BACKWARD COMPAT,
		// we still support no return (`this.ticks` internally set by calling this method).
		ticks = me.buildTicks() || [];

		// Allow modification of ticks in callback.
		ticks = me.afterBuildTicks(ticks) || ticks;

		// Ensure ticks contains ticks in new tick format
		if ((!ticks || !ticks.length) && me.ticks) {
			ticks = [];
			for (i = 0, ilen = me.ticks.length; i < ilen; ++i) {
				ticks.push({
					value: me.ticks[i],
					major: false
				});
			}
		}

		me._ticks = ticks;

		// Compute tick rotation and fit using a sampled subset of labels
		// We generally don't need to compute the size of every single label for determining scale size
		samplingEnabled = sampleSize < ticks.length;
		labels = me._convertTicksToLabels(samplingEnabled ? sample(ticks, sampleSize) : ticks);

		// _configure is called twice, once here, once from core.controller.updateLayout.
		// Here we haven't been positioned yet, but dimensions are correct.
		// Variables set in _configure are needed for calculateTickRotation, and
		// it's ok that coordinates are not correct there, only dimensions matter.
		me._configure();

		// Tick Rotation
		me.beforeCalculateTickRotation();
		me.calculateTickRotation();
		me.afterCalculateTickRotation();

		me.beforeFit();
		me.fit();
		me.afterFit();

		// Auto-skip
		me._ticksToDraw = tickOpts.display && (tickOpts.autoSkip || tickOpts.source === 'auto') ? me._autoSkip(ticks) : ticks;

		if (samplingEnabled) {
			// Generate labels using all non-skipped ticks
			labels = me._convertTicksToLabels(me._ticksToDraw);
		}

		me.ticks = labels;   // BACKWARD COMPATIBILITY

		// IMPORTANT: after this point, we consider that `this.ticks` will NEVER change!

		me.afterUpdate();

		// TODO(v3): remove minSize as a public property and return value from all layout boxes. It is unused
		// make maxWidth and maxHeight private
		return me.minSize;
	},

	/**
	 * @private
	 */
	_configure: function() {
		var me = this;
		var reversePixels = me.options.ticks.reverse;
		var startPixel, endPixel;

		if (me.isHorizontal()) {
			startPixel = me.left;
			endPixel = me.right;
		} else {
			startPixel = me.top;
			endPixel = me.bottom;
			// by default vertical scales are from bottom to top, so pixels are reversed
			reversePixels = !reversePixels;
		}
		me._startPixel = startPixel;
		me._endPixel = endPixel;
		me._reversePixels = reversePixels;
		me._length = endPixel - startPixel;
	},

	afterUpdate: function() {
		helpers$1.callback(this.options.afterUpdate, [this]);
	},

	//

	beforeSetDimensions: function() {
		helpers$1.callback(this.options.beforeSetDimensions, [this]);
	},
	setDimensions: function() {
		var me = this;
		// Set the unconstrained dimension before label rotation
		if (me.isHorizontal()) {
			// Reset position before calculating rotation
			me.width = me.maxWidth;
			me.left = 0;
			me.right = me.width;
		} else {
			me.height = me.maxHeight;

			// Reset position before calculating rotation
			me.top = 0;
			me.bottom = me.height;
		}

		// Reset padding
		me.paddingLeft = 0;
		me.paddingTop = 0;
		me.paddingRight = 0;
		me.paddingBottom = 0;
	},
	afterSetDimensions: function() {
		helpers$1.callback(this.options.afterSetDimensions, [this]);
	},

	// Data limits
	beforeDataLimits: function() {
		helpers$1.callback(this.options.beforeDataLimits, [this]);
	},
	determineDataLimits: helpers$1.noop,
	afterDataLimits: function() {
		helpers$1.callback(this.options.afterDataLimits, [this]);
	},

	//
	beforeBuildTicks: function() {
		helpers$1.callback(this.options.beforeBuildTicks, [this]);
	},
	buildTicks: helpers$1.noop,
	afterBuildTicks: function(ticks) {
		var me = this;
		// ticks is empty for old axis implementations here
		if (isArray(ticks) && ticks.length) {
			return helpers$1.callback(me.options.afterBuildTicks, [me, ticks]);
		}
		// Support old implementations (that modified `this.ticks` directly in buildTicks)
		me.ticks = helpers$1.callback(me.options.afterBuildTicks, [me, me.ticks]) || me.ticks;
		return ticks;
	},

	beforeTickToLabelConversion: function() {
		helpers$1.callback(this.options.beforeTickToLabelConversion, [this]);
	},
	convertTicksToLabels: function() {
		var me = this;
		// Convert ticks to strings
		var tickOpts = me.options.ticks;
		me.ticks = me.ticks.map(tickOpts.userCallback || tickOpts.callback, this);
	},
	afterTickToLabelConversion: function() {
		helpers$1.callback(this.options.afterTickToLabelConversion, [this]);
	},

	//

	beforeCalculateTickRotation: function() {
		helpers$1.callback(this.options.beforeCalculateTickRotation, [this]);
	},
	calculateTickRotation: function() {
		var me = this;
		var options = me.options;
		var tickOpts = options.ticks;
		var numTicks = me.getTicks().length;
		var minRotation = tickOpts.minRotation || 0;
		var maxRotation = tickOpts.maxRotation;
		var labelRotation = minRotation;
		var labelSizes, maxLabelWidth, maxLabelHeight, maxWidth, tickWidth, maxHeight, maxLabelDiagonal;

		if (!me._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !me.isHorizontal()) {
			me.labelRotation = minRotation;
			return;
		}

		labelSizes = me._getLabelSizes();
		maxLabelWidth = labelSizes.widest.width;
		maxLabelHeight = labelSizes.highest.height - labelSizes.highest.offset;

		// Estimate the width of each grid based on the canvas width, the maximum
		// label width and the number of tick intervals
		maxWidth = Math.min(me.maxWidth, me.chart.width - maxLabelWidth);
		tickWidth = options.offset ? me.maxWidth / numTicks : maxWidth / (numTicks - 1);

		// Allow 3 pixels x2 padding either side for label readability
		if (maxLabelWidth + 6 > tickWidth) {
			tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
			maxHeight = me.maxHeight - getTickMarkLength(options.gridLines)
				- tickOpts.padding - getScaleLabelHeight(options.scaleLabel);
			maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
			labelRotation = helpers$1.toDegrees(Math.min(
				Math.asin(Math.min((labelSizes.highest.height + 6) / tickWidth, 1)),
				Math.asin(Math.min(maxHeight / maxLabelDiagonal, 1)) - Math.asin(maxLabelHeight / maxLabelDiagonal)
			));
			labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
		}

		me.labelRotation = labelRotation;
	},
	afterCalculateTickRotation: function() {
		helpers$1.callback(this.options.afterCalculateTickRotation, [this]);
	},

	//

	beforeFit: function() {
		helpers$1.callback(this.options.beforeFit, [this]);
	},
	fit: function() {
		var me = this;
		// Reset
		var minSize = me.minSize = {
			width: 0,
			height: 0
		};

		var chart = me.chart;
		var opts = me.options;
		var tickOpts = opts.ticks;
		var scaleLabelOpts = opts.scaleLabel;
		var gridLineOpts = opts.gridLines;
		var display = me._isVisible();
		var isBottom = opts.position === 'bottom';
		var isHorizontal = me.isHorizontal();

		// Width
		if (isHorizontal) {
			minSize.width = me.maxWidth;
		} else if (display) {
			minSize.width = getTickMarkLength(gridLineOpts) + getScaleLabelHeight(scaleLabelOpts);
		}

		// height
		if (!isHorizontal) {
			minSize.height = me.maxHeight; // fill all the height
		} else if (display) {
			minSize.height = getTickMarkLength(gridLineOpts) + getScaleLabelHeight(scaleLabelOpts);
		}

		// Don't bother fitting the ticks if we are not showing the labels
		if (tickOpts.display && display) {
			var tickFonts = parseTickFontOptions(tickOpts);
			var labelSizes = me._getLabelSizes();
			var firstLabelSize = labelSizes.first;
			var lastLabelSize = labelSizes.last;
			var widestLabelSize = labelSizes.widest;
			var highestLabelSize = labelSizes.highest;
			var lineSpace = tickFonts.minor.lineHeight * 0.4;
			var tickPadding = tickOpts.padding;

			if (isHorizontal) {
				// A horizontal axis is more constrained by the height.
				var isRotated = me.labelRotation !== 0;
				var angleRadians = helpers$1.toRadians(me.labelRotation);
				var cosRotation = Math.cos(angleRadians);
				var sinRotation = Math.sin(angleRadians);

				var labelHeight = sinRotation * widestLabelSize.width
					+ cosRotation * (highestLabelSize.height - (isRotated ? highestLabelSize.offset : 0))
					+ (isRotated ? 0 : lineSpace); // padding

				minSize.height = Math.min(me.maxHeight, minSize.height + labelHeight + tickPadding);

				var offsetLeft = me.getPixelForTick(0) - me.left;
				var offsetRight = me.right - me.getPixelForTick(me.getTicks().length - 1);
				var paddingLeft, paddingRight;

				// Ensure that our ticks are always inside the canvas. When rotated, ticks are right aligned
				// which means that the right padding is dominated by the font height
				if (isRotated) {
					paddingLeft = isBottom ?
						cosRotation * firstLabelSize.width + sinRotation * firstLabelSize.offset :
						sinRotation * (firstLabelSize.height - firstLabelSize.offset);
					paddingRight = isBottom ?
						sinRotation * (lastLabelSize.height - lastLabelSize.offset) :
						cosRotation * lastLabelSize.width + sinRotation * lastLabelSize.offset;
				} else {
					paddingLeft = firstLabelSize.width / 2;
					paddingRight = lastLabelSize.width / 2;
				}

				// Adjust padding taking into account changes in offsets
				// and add 3 px to move away from canvas edges
				me.paddingLeft = Math.max((paddingLeft - offsetLeft) * me.width / (me.width - offsetLeft), 0) + 3;
				me.paddingRight = Math.max((paddingRight - offsetRight) * me.width / (me.width - offsetRight), 0) + 3;
			} else {
				// A vertical axis is more constrained by the width. Labels are the
				// dominant factor here, so get that length first and account for padding
				var labelWidth = tickOpts.mirror ? 0 :
					// use lineSpace for consistency with horizontal axis
					// tickPadding is not implemented for horizontal
					widestLabelSize.width + tickPadding + lineSpace;

				minSize.width = Math.min(me.maxWidth, minSize.width + labelWidth);

				me.paddingTop = firstLabelSize.height / 2;
				me.paddingBottom = lastLabelSize.height / 2;
			}
		}

		me.handleMargins();

		if (isHorizontal) {
			me.width = me._length = chart.width - me.margins.left - me.margins.right;
			me.height = minSize.height;
		} else {
			me.width = minSize.width;
			me.height = me._length = chart.height - me.margins.top - me.margins.bottom;
		}
	},

	/**
	 * Handle margins and padding interactions
	 * @private
	 */
	handleMargins: function() {
		var me = this;
		if (me.margins) {
			me.margins.left = Math.max(me.paddingLeft, me.margins.left);
			me.margins.top = Math.max(me.paddingTop, me.margins.top);
			me.margins.right = Math.max(me.paddingRight, me.margins.right);
			me.margins.bottom = Math.max(me.paddingBottom, me.margins.bottom);
		}
	},

	afterFit: function() {
		helpers$1.callback(this.options.afterFit, [this]);
	},

	// Shared Methods
	isHorizontal: function() {
		var pos = this.options.position;
		return pos === 'top' || pos === 'bottom';
	},
	isFullWidth: function() {
		return this.options.fullWidth;
	},

	// Get the correct value. NaN bad inputs, If the value type is object get the x or y based on whether we are horizontal or not
	getRightValue: function(rawValue) {
		// Null and undefined values first
		if (isNullOrUndef(rawValue)) {
			return NaN;
		}
		// isNaN(object) returns true, so make sure NaN is checking for a number; Discard Infinite values
		if ((typeof rawValue === 'number' || rawValue instanceof Number) && !isFinite(rawValue)) {
			return NaN;
		}

		// If it is in fact an object, dive in one more level
		if (rawValue) {
			if (this.isHorizontal()) {
				if (rawValue.x !== undefined) {
					return this.getRightValue(rawValue.x);
				}
			} else if (rawValue.y !== undefined) {
				return this.getRightValue(rawValue.y);
			}
		}

		// Value is good, return it
		return rawValue;
	},

	_convertTicksToLabels: function(ticks) {
		var me = this;
		var labels, i, ilen;

		me.ticks = ticks.map(function(tick) {
			return tick.value;
		});

		me.beforeTickToLabelConversion();

		// New implementations should return the formatted tick labels but for BACKWARD
		// COMPAT, we still support no return (`this.ticks` internally changed by calling
		// this method and supposed to contain only string values).
		labels = me.convertTicksToLabels(ticks) || me.ticks;

		me.afterTickToLabelConversion();

		// BACKWARD COMPAT: synchronize `_ticks` with labels (so potentially `this.ticks`)
		for (i = 0, ilen = ticks.length; i < ilen; ++i) {
			ticks[i].label = labels[i];
		}

		return labels;
	},

	/**
	 * @private
	 */
	_getLabelSizes: function() {
		var me = this;
		var labelSizes = me._labelSizes;

		if (!labelSizes) {
			me._labelSizes = labelSizes = computeLabelSizes(me.ctx, parseTickFontOptions(me.options.ticks), me.getTicks(), me.longestTextCache);
			me.longestLabelWidth = labelSizes.widest.width;
		}

		return labelSizes;
	},

	/**
	 * @private
	 */
	_parseValue: function(value) {
		var start, end, min, max;

		if (isArray(value)) {
			start = +this.getRightValue(value[0]);
			end = +this.getRightValue(value[1]);
			min = Math.min(start, end);
			max = Math.max(start, end);
		} else {
			value = +this.getRightValue(value);
			start = undefined;
			end = value;
			min = value;
			max = value;
		}

		return {
			min: min,
			max: max,
			start: start,
			end: end
		};
	},

	/**
	* @private
	*/
	_getScaleLabel: function(rawValue) {
		var v = this._parseValue(rawValue);
		if (v.start !== undefined) {
			return '[' + v.start + ', ' + v.end + ']';
		}

		return +this.getRightValue(rawValue);
	},

	/**
	 * Used to get the value to display in the tooltip for the data at the given index
	 * @param index
	 * @param datasetIndex
	 */
	getLabelForIndex: helpers$1.noop,

	/**
	 * Returns the location of the given data point. Value can either be an index or a numerical value
	 * The coordinate (0, 0) is at the upper-left corner of the canvas
	 * @param value
	 * @param index
	 * @param datasetIndex
	 */
	getPixelForValue: helpers$1.noop,

	/**
	 * Used to get the data value from a given pixel. This is the inverse of getPixelForValue
	 * The coordinate (0, 0) is at the upper-left corner of the canvas
	 * @param pixel
	 */
	getValueForPixel: helpers$1.noop,

	/**
	 * Returns the location of the tick at the given index
	 * The coordinate (0, 0) is at the upper-left corner of the canvas
	 */
	getPixelForTick: function(index) {
		var me = this;
		var offset = me.options.offset;
		var numTicks = me._ticks.length;
		var tickWidth = 1 / Math.max(numTicks - (offset ? 0 : 1), 1);

		return index < 0 || index > numTicks - 1
			? null
			: me.getPixelForDecimal(index * tickWidth + (offset ? tickWidth / 2 : 0));
	},

	/**
	 * Utility for getting the pixel location of a percentage of scale
	 * The coordinate (0, 0) is at the upper-left corner of the canvas
	 */
	getPixelForDecimal: function(decimal) {
		var me = this;

		if (me._reversePixels) {
			decimal = 1 - decimal;
		}

		return me._startPixel + decimal * me._length;
	},

	getDecimalForPixel: function(pixel) {
		var decimal = (pixel - this._startPixel) / this._length;
		return this._reversePixels ? 1 - decimal : decimal;
	},

	/**
	 * Returns the pixel for the minimum chart value
	 * The coordinate (0, 0) is at the upper-left corner of the canvas
	 */
	getBasePixel: function() {
		return this.getPixelForValue(this.getBaseValue());
	},

	getBaseValue: function() {
		var me = this;
		var min = me.min;
		var max = me.max;

		return me.beginAtZero ? 0 :
			min < 0 && max < 0 ? max :
			min > 0 && max > 0 ? min :
			0;
	},

	/**
	 * Returns a subset of ticks to be plotted to avoid overlapping labels.
	 * @private
	 */
	_autoSkip: function(ticks) {
		var me = this;
		var tickOpts = me.options.ticks;
		var axisLength = me._length;
		var ticksLimit = tickOpts.maxTicksLimit || axisLength / me._tickSize() + 1;
		var majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
		var numMajorIndices = majorIndices.length;
		var first = majorIndices[0];
		var last = majorIndices[numMajorIndices - 1];
		var i, ilen, spacing, avgMajorSpacing;

		// If there are too many major ticks to display them all
		if (numMajorIndices > ticksLimit) {
			skipMajors(ticks, majorIndices, numMajorIndices / ticksLimit);
			return nonSkipped(ticks);
		}

		spacing = calculateSpacing(majorIndices, ticks, axisLength, ticksLimit);

		if (numMajorIndices > 0) {
			for (i = 0, ilen = numMajorIndices - 1; i < ilen; i++) {
				skip(ticks, spacing, majorIndices[i], majorIndices[i + 1]);
			}
			avgMajorSpacing = numMajorIndices > 1 ? (last - first) / (numMajorIndices - 1) : null;
			skip(ticks, spacing, helpers$1.isNullOrUndef(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
			skip(ticks, spacing, last, helpers$1.isNullOrUndef(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
			return nonSkipped(ticks);
		}
		skip(ticks, spacing);
		return nonSkipped(ticks);
	},

	/**
	 * @private
	 */
	_tickSize: function() {
		var me = this;
		var optionTicks = me.options.ticks;

		// Calculate space needed by label in axis direction.
		var rot = helpers$1.toRadians(me.labelRotation);
		var cos = Math.abs(Math.cos(rot));
		var sin = Math.abs(Math.sin(rot));

		var labelSizes = me._getLabelSizes();
		var padding = optionTicks.autoSkipPadding || 0;
		var w = labelSizes ? labelSizes.widest.width + padding : 0;
		var h = labelSizes ? labelSizes.highest.height + padding : 0;

		// Calculate space needed for 1 tick in axis direction.
		return me.isHorizontal()
			? h * cos > w * sin ? w / cos : h / sin
			: h * sin < w * cos ? h / cos : w / sin;
	},

	/**
	 * @private
	 */
	_isVisible: function() {
		var me = this;
		var chart = me.chart;
		var display = me.options.display;
		var i, ilen, meta;

		if (display !== 'auto') {
			return !!display;
		}

		// When 'auto', the scale is visible if at least one associated dataset is visible.
		for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
			if (chart.isDatasetVisible(i)) {
				meta = chart.getDatasetMeta(i);
				if (meta.xAxisID === me.id || meta.yAxisID === me.id) {
					return true;
				}
			}
		}

		return false;
	},

	/**
	 * @private
	 */
	_computeGridLineItems: function(chartArea) {
		var me = this;
		var chart = me.chart;
		var options = me.options;
		var gridLines = options.gridLines;
		var position = options.position;
		var offsetGridLines = gridLines.offsetGridLines;
		var isHorizontal = me.isHorizontal();
		var ticks = me._ticksToDraw;
		var ticksLength = ticks.length + (offsetGridLines ? 1 : 0);

		var tl = getTickMarkLength(gridLines);
		var items = [];
		var axisWidth = gridLines.drawBorder ? valueAtIndexOrDefault(gridLines.lineWidth, 0, 0) : 0;
		var axisHalfWidth = axisWidth / 2;
		var alignPixel = helpers$1._alignPixel;
		var alignBorderValue = function(pixel) {
			return alignPixel(chart, pixel, axisWidth);
		};
		var borderValue, i, tick, lineValue, alignedLineValue;
		var tx1, ty1, tx2, ty2, x1, y1, x2, y2, lineWidth, lineColor, borderDash, borderDashOffset;

		if (position === 'top') {
			borderValue = alignBorderValue(me.bottom);
			ty1 = me.bottom - tl;
			ty2 = borderValue - axisHalfWidth;
			y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
			y2 = chartArea.bottom;
		} else if (position === 'bottom') {
			borderValue = alignBorderValue(me.top);
			y1 = chartArea.top;
			y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
			ty1 = borderValue + axisHalfWidth;
			ty2 = me.top + tl;
		} else if (position === 'left') {
			borderValue = alignBorderValue(me.right);
			tx1 = me.right - tl;
			tx2 = borderValue - axisHalfWidth;
			x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
			x2 = chartArea.right;
		} else {
			borderValue = alignBorderValue(me.left);
			x1 = chartArea.left;
			x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
			tx1 = borderValue + axisHalfWidth;
			tx2 = me.left + tl;
		}

		for (i = 0; i < ticksLength; ++i) {
			tick = ticks[i] || {};

			// autoskipper skipped this tick (#4635)
			if (isNullOrUndef(tick.label) && i < ticks.length) {
				continue;
			}

			if (i === me.zeroLineIndex && options.offset === offsetGridLines) {
				// Draw the first index specially
				lineWidth = gridLines.zeroLineWidth;
				lineColor = gridLines.zeroLineColor;
				borderDash = gridLines.zeroLineBorderDash || [];
				borderDashOffset = gridLines.zeroLineBorderDashOffset || 0.0;
			} else {
				lineWidth = valueAtIndexOrDefault(gridLines.lineWidth, i, 1);
				lineColor = valueAtIndexOrDefault(gridLines.color, i, 'rgba(0,0,0,0.1)');
				borderDash = gridLines.borderDash || [];
				borderDashOffset = gridLines.borderDashOffset || 0.0;
			}

			lineValue = getPixelForGridLine(me, tick._index || i, offsetGridLines);

			// Skip if the pixel is out of the range
			if (lineValue === undefined) {
				continue;
			}

			alignedLineValue = alignPixel(chart, lineValue, lineWidth);

			if (isHorizontal) {
				tx1 = tx2 = x1 = x2 = alignedLineValue;
			} else {
				ty1 = ty2 = y1 = y2 = alignedLineValue;
			}

			items.push({
				tx1: tx1,
				ty1: ty1,
				tx2: tx2,
				ty2: ty2,
				x1: x1,
				y1: y1,
				x2: x2,
				y2: y2,
				width: lineWidth,
				color: lineColor,
				borderDash: borderDash,
				borderDashOffset: borderDashOffset,
			});
		}

		items.ticksLength = ticksLength;
		items.borderValue = borderValue;

		return items;
	},

	/**
	 * @private
	 */
	_computeLabelItems: function() {
		var me = this;
		var options = me.options;
		var optionTicks = options.ticks;
		var position = options.position;
		var isMirrored = optionTicks.mirror;
		var isHorizontal = me.isHorizontal();
		var ticks = me._ticksToDraw;
		var fonts = parseTickFontOptions(optionTicks);
		var tickPadding = optionTicks.padding;
		var tl = getTickMarkLength(options.gridLines);
		var rotation = -helpers$1.toRadians(me.labelRotation);
		var items = [];
		var i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;

		if (position === 'top') {
			y = me.bottom - tl - tickPadding;
			textAlign = !rotation ? 'center' : 'left';
		} else if (position === 'bottom') {
			y = me.top + tl + tickPadding;
			textAlign = !rotation ? 'center' : 'right';
		} else if (position === 'left') {
			x = me.right - (isMirrored ? 0 : tl) - tickPadding;
			textAlign = isMirrored ? 'left' : 'right';
		} else {
			x = me.left + (isMirrored ? 0 : tl) + tickPadding;
			textAlign = isMirrored ? 'right' : 'left';
		}

		for (i = 0, ilen = ticks.length; i < ilen; ++i) {
			tick = ticks[i];
			label = tick.label;

			// autoskipper skipped this tick (#4635)
			if (isNullOrUndef(label)) {
				continue;
			}

			pixel = me.getPixelForTick(tick._index || i) + optionTicks.labelOffset;
			font = tick.major ? fonts.major : fonts.minor;
			lineHeight = font.lineHeight;
			lineCount = isArray(label) ? label.length : 1;

			if (isHorizontal) {
				x = pixel;
				textOffset = position === 'top'
					? ((!rotation ? 0.5 : 1) - lineCount) * lineHeight
					: (!rotation ? 0.5 : 0) * lineHeight;
			} else {
				y = pixel;
				textOffset = (1 - lineCount) * lineHeight / 2;
			}

			items.push({
				x: x,
				y: y,
				rotation: rotation,
				label: label,
				font: font,
				textOffset: textOffset,
				textAlign: textAlign
			});
		}

		return items;
	},

	/**
	 * @private
	 */
	_drawGrid: function(chartArea) {
		var me = this;
		var gridLines = me.options.gridLines;

		if (!gridLines.display) {
			return;
		}

		var ctx = me.ctx;
		var chart = me.chart;
		var alignPixel = helpers$1._alignPixel;
		var axisWidth = gridLines.drawBorder ? valueAtIndexOrDefault(gridLines.lineWidth, 0, 0) : 0;
		var items = me._gridLineItems || (me._gridLineItems = me._computeGridLineItems(chartArea));
		var width, color, i, ilen, item;

		for (i = 0, ilen = items.length; i < ilen; ++i) {
			item = items[i];
			width = item.width;
			color = item.color;

			if (width && color) {
				ctx.save();
				ctx.lineWidth = width;
				ctx.strokeStyle = color;
				if (ctx.setLineDash) {
					ctx.setLineDash(item.borderDash);
					ctx.lineDashOffset = item.borderDashOffset;
				}

				ctx.beginPath();

				if (gridLines.drawTicks) {
					ctx.moveTo(item.tx1, item.ty1);
					ctx.lineTo(item.tx2, item.ty2);
				}

				if (gridLines.drawOnChartArea) {
					ctx.moveTo(item.x1, item.y1);
					ctx.lineTo(item.x2, item.y2);
				}

				ctx.stroke();
				ctx.restore();
			}
		}

		if (axisWidth) {
			// Draw the line at the edge of the axis
			var firstLineWidth = axisWidth;
			var lastLineWidth = valueAtIndexOrDefault(gridLines.lineWidth, items.ticksLength - 1, 1);
			var borderValue = items.borderValue;
			var x1, x2, y1, y2;

			if (me.isHorizontal()) {
				x1 = alignPixel(chart, me.left, firstLineWidth) - firstLineWidth / 2;
				x2 = alignPixel(chart, me.right, lastLineWidth) + lastLineWidth / 2;
				y1 = y2 = borderValue;
			} else {
				y1 = alignPixel(chart, me.top, firstLineWidth) - firstLineWidth / 2;
				y2 = alignPixel(chart, me.bottom, lastLineWidth) + lastLineWidth / 2;
				x1 = x2 = borderValue;
			}

			ctx.lineWidth = axisWidth;
			ctx.strokeStyle = valueAtIndexOrDefault(gridLines.color, 0);
			ctx.beginPath();
			ctx.moveTo(x1, y1);
			ctx.lineTo(x2, y2);
			ctx.stroke();
		}
	},

	/**
	 * @private
	 */
	_drawLabels: function() {
		var me = this;
		var optionTicks = me.options.ticks;

		if (!optionTicks.display) {
			return;
		}

		var ctx = me.ctx;
		var items = me._labelItems || (me._labelItems = me._computeLabelItems());
		var i, j, ilen, jlen, item, tickFont, label, y;

		for (i = 0, ilen = items.length; i < ilen; ++i) {
			item = items[i];
			tickFont = item.font;

			// Make sure we draw text in the correct color and font
			ctx.save();
			ctx.translate(item.x, item.y);
			ctx.rotate(item.rotation);
			ctx.font = tickFont.string;
			ctx.fillStyle = tickFont.color;
			ctx.textBaseline = 'middle';
			ctx.textAlign = item.textAlign;

			label = item.label;
			y = item.textOffset;
			if (isArray(label)) {
				for (j = 0, jlen = label.length; j < jlen; ++j) {
					// We just make sure the multiline element is a string here..
					ctx.fillText('' + label[j], 0, y);
					y += tickFont.lineHeight;
				}
			} else {
				ctx.fillText(label, 0, y);
			}
			ctx.restore();
		}
	},

	/**
	 * @private
	 */
	_drawTitle: function() {
		var me = this;
		var ctx = me.ctx;
		var options = me.options;
		var scaleLabel = options.scaleLabel;

		if (!scaleLabel.display) {
			return;
		}

		var scaleLabelFontColor = valueOrDefault$a(scaleLabel.fontColor, core_defaults.global.defaultFontColor);
		var scaleLabelFont = helpers$1.options._parseFont(scaleLabel);
		var scaleLabelPadding = helpers$1.options.toPadding(scaleLabel.padding);
		var halfLineHeight = scaleLabelFont.lineHeight / 2;
		var position = options.position;
		var rotation = 0;
		var scaleLabelX, scaleLabelY;

		if (me.isHorizontal()) {
			scaleLabelX = me.left + me.width / 2; // midpoint of the width
			scaleLabelY = position === 'bottom'
				? me.bottom - halfLineHeight - scaleLabelPadding.bottom
				: me.top + halfLineHeight + scaleLabelPadding.top;
		} else {
			var isLeft = position === 'left';
			scaleLabelX = isLeft
				? me.left + halfLineHeight + scaleLabelPadding.top
				: me.right - halfLineHeight - scaleLabelPadding.top;
			scaleLabelY = me.top + me.height / 2;
			rotation = isLeft ? -0.5 * Math.PI : 0.5 * Math.PI;
		}

		ctx.save();
		ctx.translate(scaleLabelX, scaleLabelY);
		ctx.rotate(rotation);
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillStyle = scaleLabelFontColor; // render in correct colour
		ctx.font = scaleLabelFont.string;
		ctx.fillText(scaleLabel.labelString, 0, 0);
		ctx.restore();
	},

	draw: function(chartArea) {
		var me = this;

		if (!me._isVisible()) {
			return;
		}

		me._drawGrid(chartArea);
		me._drawTitle();
		me._drawLabels();
	},

	/**
	 * @private
	 */
	_layers: function() {
		var me = this;
		var opts = me.options;
		var tz = opts.ticks && opts.ticks.z || 0;
		var gz = opts.gridLines && opts.gridLines.z || 0;

		if (!me._isVisible() || tz === gz || me.draw !== me._draw) {
			// backward compatibility: draw has been overridden by custom scale
			return [{
				z: tz,
				draw: function() {
					me.draw.apply(me, arguments);
				}
			}];
		}

		return [{
			z: gz,
			draw: function() {
				me._drawGrid.apply(me, arguments);
				me._drawTitle.apply(me, arguments);
			}
		}, {
			z: tz,
			draw: function() {
				me._drawLabels.apply(me, arguments);
			}
		}];
	},

	/**
	 * @private
	 */
	_getMatchingVisibleMetas: function(type) {
		var me = this;
		var isHorizontal = me.isHorizontal();
		return me.chart._getSortedVisibleDatasetMetas()
			.filter(function(meta) {
				return (!type || meta.type === type)
					&& (isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id);
			});
	}
});

Scale.prototype._draw = Scale.prototype.draw;

var core_scale = Scale;

var isNullOrUndef$1 = helpers$1.isNullOrUndef;

var defaultConfig = {
	position: 'bottom'
};

var scale_category = core_scale.extend({
	determineDataLimits: function() {
		var me = this;
		var labels = me._getLabels();
		var ticksOpts = me.options.ticks;
		var min = ticksOpts.min;
		var max = ticksOpts.max;
		var minIndex = 0;
		var maxIndex = labels.length - 1;
		var findIndex;

		if (min !== undefined) {
			// user specified min value
			findIndex = labels.indexOf(min);
			if (findIndex >= 0) {
				minIndex = findIndex;
			}
		}

		if (max !== undefined) {
			// user specified max value
			findIndex = labels.indexOf(max);
			if (findIndex >= 0) {
				maxIndex = findIndex;
			}
		}

		me.minIndex = minIndex;
		me.maxIndex = maxIndex;
		me.min = labels[minIndex];
		me.max = labels[maxIndex];
	},

	buildTicks: function() {
		var me = this;
		var labels = me._getLabels();
		var minIndex = me.minIndex;
		var maxIndex = me.maxIndex;

		// If we are viewing some subset of labels, slice the original array
		me.ticks = (minIndex === 0 && maxIndex === labels.length - 1) ? labels : labels.slice(minIndex, maxIndex + 1);
	},

	getLabelForIndex: function(index, datasetIndex) {
		var me = this;
		var chart = me.chart;

		if (chart.getDatasetMeta(datasetIndex).controller._getValueScaleId() === me.id) {
			return me.getRightValue(chart.data.datasets[datasetIndex].data[index]);
		}

		return me._getLabels()[index];
	},

	_configure: function() {
		var me = this;
		var offset = me.options.offset;
		var ticks = me.ticks;

		core_scale.prototype._configure.call(me);

		if (!me.isHorizontal()) {
			// For backward compatibility, vertical category scale reverse is inverted.
			me._reversePixels = !me._reversePixels;
		}

		if (!ticks) {
			return;
		}

		me._startValue = me.minIndex - (offset ? 0.5 : 0);
		me._valueRange = Math.max(ticks.length - (offset ? 0 : 1), 1);
	},

	// Used to get data value locations.  Value can either be an index or a numerical value
	getPixelForValue: function(value, index, datasetIndex) {
		var me = this;
		var valueCategory, labels, idx;

		if (!isNullOrUndef$1(index) && !isNullOrUndef$1(datasetIndex)) {
			value = me.chart.data.datasets[datasetIndex].data[index];
		}

		// If value is a data object, then index is the index in the data array,
		// not the index of the scale. We need to change that.
		if (!isNullOrUndef$1(value)) {
			valueCategory = me.isHorizontal() ? value.x : value.y;
		}
		if (valueCategory !== undefined || (value !== undefined && isNaN(index))) {
			labels = me._getLabels();
			value = helpers$1.valueOrDefault(valueCategory, value);
			idx = labels.indexOf(value);
			index = idx !== -1 ? idx : index;
			if (isNaN(index)) {
				index = value;
			}
		}
		return me.getPixelForDecimal((index - me._startValue) / me._valueRange);
	},

	getPixelForTick: function(index) {
		var ticks = this.ticks;
		return index < 0 || index > ticks.length - 1
			? null
			: this.getPixelForValue(ticks[index], index + this.minIndex);
	},

	getValueForPixel: function(pixel) {
		var me = this;
		var value = Math.round(me._startValue + me.getDecimalForPixel(pixel) * me._valueRange);
		return Math.min(Math.max(value, 0), me.ticks.length - 1);
	},

	getBasePixel: function() {
		return this.bottom;
	}
});

// INTERNAL: static default options, registered in src/index.js
var _defaults = defaultConfig;
scale_category._defaults = _defaults;

var noop = helpers$1.noop;
var isNullOrUndef$2 = helpers$1.isNullOrUndef;

/**
 * Generate a set of linear ticks
 * @param generationOptions the options used to generate the ticks
 * @param dataRange the range of the data
 * @returns {number[]} array of tick values
 */
function generateTicks(generationOptions, dataRange) {
	var ticks = [];
	// To get a "nice" value for the tick spacing, we will use the appropriately named
	// "nice number" algorithm. See https://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks
	// for details.

	var MIN_SPACING = 1e-14;
	var stepSize = generationOptions.stepSize;
	var unit = stepSize || 1;
	var maxNumSpaces = generationOptions.maxTicks - 1;
	var min = generationOptions.min;
	var max = generationOptions.max;
	var precision = generationOptions.precision;
	var rmin = dataRange.min;
	var rmax = dataRange.max;
	var spacing = helpers$1.niceNum((rmax - rmin) / maxNumSpaces / unit) * unit;
	var factor, niceMin, niceMax, numSpaces;

	// Beyond MIN_SPACING floating point numbers being to lose precision
	// such that we can't do the math necessary to generate ticks
	if (spacing < MIN_SPACING && isNullOrUndef$2(min) && isNullOrUndef$2(max)) {
		return [rmin, rmax];
	}

	numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
	if (numSpaces > maxNumSpaces) {
		// If the calculated num of spaces exceeds maxNumSpaces, recalculate it
		spacing = helpers$1.niceNum(numSpaces * spacing / maxNumSpaces / unit) * unit;
	}

	if (stepSize || isNullOrUndef$2(precision)) {
		// If a precision is not specified, calculate factor based on spacing
		factor = Math.pow(10, helpers$1._decimalPlaces(spacing));
	} else {
		// If the user specified a precision, round to that number of decimal places
		factor = Math.pow(10, precision);
		spacing = Math.ceil(spacing * factor) / factor;
	}

	niceMin = Math.floor(rmin / spacing) * spacing;
	niceMax = Math.ceil(rmax / spacing) * spacing;

	// If min, max and stepSize is set and they make an evenly spaced scale use it.
	if (stepSize) {
		// If very close to our whole number, use it.
		if (!isNullOrUndef$2(min) && helpers$1.almostWhole(min / spacing, spacing / 1000)) {
			niceMin = min;
		}
		if (!isNullOrUndef$2(max) && helpers$1.almostWhole(max / spacing, spacing / 1000)) {
			niceMax = max;
		}
	}

	numSpaces = (niceMax - niceMin) / spacing;
	// If very close to our rounded value, use it.
	if (helpers$1.almostEquals(numSpaces, Math.round(numSpaces), spacing / 1000)) {
		numSpaces = Math.round(numSpaces);
	} else {
		numSpaces = Math.ceil(numSpaces);
	}

	niceMin = Math.round(niceMin * factor) / factor;
	niceMax = Math.round(niceMax * factor) / factor;
	ticks.push(isNullOrUndef$2(min) ? niceMin : min);
	for (var j = 1; j < numSpaces; ++j) {
		ticks.push(Math.round((niceMin + j * spacing) * factor) / factor);
	}
	ticks.push(isNullOrUndef$2(max) ? niceMax : max);

	return ticks;
}

var scale_linearbase = core_scale.extend({
	getRightValue: function(value) {
		if (typeof value === 'string') {
			return +value;
		}
		return core_scale.prototype.getRightValue.call(this, value);
	},

	handleTickRangeOptions: function() {
		var me = this;
		var opts = me.options;
		var tickOpts = opts.ticks;

		// If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
		// do nothing since that would make the chart weird. If the user really wants a weird chart
		// axis, they can manually override it
		if (tickOpts.beginAtZero) {
			var minSign = helpers$1.sign(me.min);
			var maxSign = helpers$1.sign(me.max);

			if (minSign < 0 && maxSign < 0) {
				// move the top up to 0
				me.max = 0;
			} else if (minSign > 0 && maxSign > 0) {
				// move the bottom down to 0
				me.min = 0;
			}
		}

		var setMin = tickOpts.min !== undefined || tickOpts.suggestedMin !== undefined;
		var setMax = tickOpts.max !== undefined || tickOpts.suggestedMax !== undefined;

		if (tickOpts.min !== undefined) {
			me.min = tickOpts.min;
		} else if (tickOpts.suggestedMin !== undefined) {
			if (me.min === null) {
				me.min = tickOpts.suggestedMin;
			} else {
				me.min = Math.min(me.min, tickOpts.suggestedMin);
			}
		}

		if (tickOpts.max !== undefined) {
			me.max = tickOpts.max;
		} else if (tickOpts.suggestedMax !== undefined) {
			if (me.max === null) {
				me.max = tickOpts.suggestedMax;
			} else {
				me.max = Math.max(me.max, tickOpts.suggestedMax);
			}
		}

		if (setMin !== setMax) {
			// We set the min or the max but not both.
			// So ensure that our range is good
			// Inverted or 0 length range can happen when
			// ticks.min is set, and no datasets are visible
			if (me.min >= me.max) {
				if (setMin) {
					me.max = me.min + 1;
				} else {
					me.min = me.max - 1;
				}
			}
		}

		if (me.min === me.max) {
			me.max++;

			if (!tickOpts.beginAtZero) {
				me.min--;
			}
		}
	},

	getTickLimit: function() {
		var me = this;
		var tickOpts = me.options.ticks;
		var stepSize = tickOpts.stepSize;
		var maxTicksLimit = tickOpts.maxTicksLimit;
		var maxTicks;

		if (stepSize) {
			maxTicks = Math.ceil(me.max / stepSize) - Math.floor(me.min / stepSize) + 1;
		} else {
			maxTicks = me._computeTickLimit();
			maxTicksLimit = maxTicksLimit || 11;
		}

		if (maxTicksLimit) {
			maxTicks = Math.min(maxTicksLimit, maxTicks);
		}

		return maxTicks;
	},

	_computeTickLimit: function() {
		return Number.POSITIVE_INFINITY;
	},

	handleDirectionalChanges: noop,

	buildTicks: function() {
		var me = this;
		var opts = me.options;
		var tickOpts = opts.ticks;

		// Figure out what the max number of ticks we can support it is based on the size of
		// the axis area. For now, we say that the minimum tick spacing in pixels must be 40
		// We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
		// the graph. Make sure we always have at least 2 ticks
		var maxTicks = me.getTickLimit();
		maxTicks = Math.max(2, maxTicks);

		var numericGeneratorOptions = {
			maxTicks: maxTicks,
			min: tickOpts.min,
			max: tickOpts.max,
			precision: tickOpts.precision,
			stepSize: helpers$1.valueOrDefault(tickOpts.fixedStepSize, tickOpts.stepSize)
		};
		var ticks = me.ticks = generateTicks(numericGeneratorOptions, me);

		me.handleDirectionalChanges();

		// At this point, we need to update our max and min given the tick values since we have expanded the
		// range of the scale
		me.max = helpers$1.max(ticks);
		me.min = helpers$1.min(ticks);

		if (tickOpts.reverse) {
			ticks.reverse();

			me.start = me.max;
			me.end = me.min;
		} else {
			me.start = me.min;
			me.end = me.max;
		}
	},

	convertTicksToLabels: function() {
		var me = this;
		me.ticksAsNumbers = me.ticks.slice();
		me.zeroLineIndex = me.ticks.indexOf(0);

		core_scale.prototype.convertTicksToLabels.call(me);
	},

	_configure: function() {
		var me = this;
		var ticks = me.getTicks();
		var start = me.min;
		var end = me.max;
		var offset;

		core_scale.prototype._configure.call(me);

		if (me.options.offset && ticks.length) {
			offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
			start -= offset;
			end += offset;
		}
		me._startValue = start;
		me._endValue = end;
		me._valueRange = end - start;
	}
});

var defaultConfig$1 = {
	position: 'left',
	ticks: {
		callback: core_ticks.formatters.linear
	}
};

var DEFAULT_MIN = 0;
var DEFAULT_MAX = 1;

function getOrCreateStack(stacks, stacked, meta) {
	var key = [
		meta.type,
		// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
		stacked === undefined && meta.stack === undefined ? meta.index : '',
		meta.stack
	].join('.');

	if (stacks[key] === undefined) {
		stacks[key] = {
			pos: [],
			neg: []
		};
	}

	return stacks[key];
}

function stackData(scale, stacks, meta, data) {
	var opts = scale.options;
	var stacked = opts.stacked;
	var stack = getOrCreateStack(stacks, stacked, meta);
	var pos = stack.pos;
	var neg = stack.neg;
	var ilen = data.length;
	var i, value;

	for (i = 0; i < ilen; ++i) {
		value = scale._parseValue(data[i]);
		if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden) {
			continue;
		}

		pos[i] = pos[i] || 0;
		neg[i] = neg[i] || 0;

		if (opts.relativePoints) {
			pos[i] = 100;
		} else if (value.min < 0 || value.max < 0) {
			neg[i] += value.min;
		} else {
			pos[i] += value.max;
		}
	}
}

function updateMinMax(scale, meta, data) {
	var ilen = data.length;
	var i, value;

	for (i = 0; i < ilen; ++i) {
		value = scale._parseValue(data[i]);
		if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden) {
			continue;
		}

		scale.min = Math.min(scale.min, value.min);
		scale.max = Math.max(scale.max, value.max);
	}
}

var scale_linear = scale_linearbase.extend({
	determineDataLimits: function() {
		var me = this;
		var opts = me.options;
		var chart = me.chart;
		var datasets = chart.data.datasets;
		var metasets = me._getMatchingVisibleMetas();
		var hasStacks = opts.stacked;
		var stacks = {};
		var ilen = metasets.length;
		var i, meta, data, values;

		me.min = Number.POSITIVE_INFINITY;
		me.max = Number.NEGATIVE_INFINITY;

		if (hasStacks === undefined) {
			for (i = 0; !hasStacks && i < ilen; ++i) {
				meta = metasets[i];
				hasStacks = meta.stack !== undefined;
			}
		}

		for (i = 0; i < ilen; ++i) {
			meta = metasets[i];
			data = datasets[meta.index].data;
			if (hasStacks) {
				stackData(me, stacks, meta, data);
			} else {
				updateMinMax(me, meta, data);
			}
		}

		helpers$1.each(stacks, function(stackValues) {
			values = stackValues.pos.concat(stackValues.neg);
			me.min = Math.min(me.min, helpers$1.min(values));
			me.max = Math.max(me.max, helpers$1.max(values));
		});

		me.min = helpers$1.isFinite(me.min) && !isNaN(me.min) ? me.min : DEFAULT_MIN;
		me.max = helpers$1.isFinite(me.max) && !isNaN(me.max) ? me.max : DEFAULT_MAX;

		// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
		me.handleTickRangeOptions();
	},

	// Returns the maximum number of ticks based on the scale dimension
	_computeTickLimit: function() {
		var me = this;
		var tickFont;

		if (me.isHorizontal()) {
			return Math.ceil(me.width / 40);
		}
		tickFont = helpers$1.options._parseFont(me.options.ticks);
		return Math.ceil(me.height / tickFont.lineHeight);
	},

	// Called after the ticks are built. We need
	handleDirectionalChanges: function() {
		if (!this.isHorizontal()) {
			// We are in a vertical orientation. The top value is the highest. So reverse the array
			this.ticks.reverse();
		}
	},

	getLabelForIndex: function(index, datasetIndex) {
		return this._getScaleLabel(this.chart.data.datasets[datasetIndex].data[index]);
	},

	// Utils
	getPixelForValue: function(value) {
		var me = this;
		return me.getPixelForDecimal((+me.getRightValue(value) - me._startValue) / me._valueRange);
	},

	getValueForPixel: function(pixel) {
		return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
	},

	getPixelForTick: function(index) {
		var ticks = this.ticksAsNumbers;
		if (index < 0 || index > ticks.length - 1) {
			return null;
		}
		return this.getPixelForValue(ticks[index]);
	}
});

// INTERNAL: static default options, registered in src/index.js
var _defaults$1 = defaultConfig$1;
scale_linear._defaults = _defaults$1;

var valueOrDefault$b = helpers$1.valueOrDefault;
var log10 = helpers$1.math.log10;

/**
 * Generate a set of logarithmic ticks
 * @param generationOptions the options used to generate the ticks
 * @param dataRange the range of the data
 * @returns {number[]} array of tick values
 */
function generateTicks$1(generationOptions, dataRange) {
	var ticks = [];

	var tickVal = valueOrDefault$b(generationOptions.min, Math.pow(10, Math.floor(log10(dataRange.min))));

	var endExp = Math.floor(log10(dataRange.max));
	var endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
	var exp, significand;

	if (tickVal === 0) {
		exp = Math.floor(log10(dataRange.minNotZero));
		significand = Math.floor(dataRange.minNotZero / Math.pow(10, exp));

		ticks.push(tickVal);
		tickVal = significand * Math.pow(10, exp);
	} else {
		exp = Math.floor(log10(tickVal));
		significand = Math.floor(tickVal / Math.pow(10, exp));
	}
	var precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;

	do {
		ticks.push(tickVal);

		++significand;
		if (significand === 10) {
			significand = 1;
			++exp;
			precision = exp >= 0 ? 1 : precision;
		}

		tickVal = Math.round(significand * Math.pow(10, exp) * precision) / precision;
	} while (exp < endExp || (exp === endExp && significand < endSignificand));

	var lastTick = valueOrDefault$b(generationOptions.max, tickVal);
	ticks.push(lastTick);

	return ticks;
}

var defaultConfig$2 = {
	position: 'left',

	// label settings
	ticks: {
		callback: core_ticks.formatters.logarithmic
	}
};

// TODO(v3): change this to positiveOrDefault
function nonNegativeOrDefault(value, defaultValue) {
	return helpers$1.isFinite(value) && value >= 0 ? value : defaultValue;
}

var scale_logarithmic = core_scale.extend({
	determineDataLimits: function() {
		var me = this;
		var opts = me.options;
		var chart = me.chart;
		var datasets = chart.data.datasets;
		var isHorizontal = me.isHorizontal();
		function IDMatches(meta) {
			return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
		}
		var datasetIndex, meta, value, data, i, ilen;

		// Calculate Range
		me.min = Number.POSITIVE_INFINITY;
		me.max = Number.NEGATIVE_INFINITY;
		me.minNotZero = Number.POSITIVE_INFINITY;

		var hasStacks = opts.stacked;
		if (hasStacks === undefined) {
			for (datasetIndex = 0; datasetIndex < datasets.length; datasetIndex++) {
				meta = chart.getDatasetMeta(datasetIndex);
				if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta) &&
					meta.stack !== undefined) {
					hasStacks = true;
					break;
				}
			}
		}

		if (opts.stacked || hasStacks) {
			var valuesPerStack = {};

			for (datasetIndex = 0; datasetIndex < datasets.length; datasetIndex++) {
				meta = chart.getDatasetMeta(datasetIndex);
				var key = [
					meta.type,
					// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
					((opts.stacked === undefined && meta.stack === undefined) ? datasetIndex : ''),
					meta.stack
				].join('.');

				if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
					if (valuesPerStack[key] === undefined) {
						valuesPerStack[key] = [];
					}

					data = datasets[datasetIndex].data;
					for (i = 0, ilen = data.length; i < ilen; i++) {
						var values = valuesPerStack[key];
						value = me._parseValue(data[i]);
						// invalid, hidden and negative values are ignored
						if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden || value.min < 0 || value.max < 0) {
							continue;
						}
						values[i] = values[i] || 0;
						values[i] += value.max;
					}
				}
			}

			helpers$1.each(valuesPerStack, function(valuesForType) {
				if (valuesForType.length > 0) {
					var minVal = helpers$1.min(valuesForType);
					var maxVal = helpers$1.max(valuesForType);
					me.min = Math.min(me.min, minVal);
					me.max = Math.max(me.max, maxVal);
				}
			});

		} else {
			for (datasetIndex = 0; datasetIndex < datasets.length; datasetIndex++) {
				meta = chart.getDatasetMeta(datasetIndex);
				if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
					data = datasets[datasetIndex].data;
					for (i = 0, ilen = data.length; i < ilen; i++) {
						value = me._parseValue(data[i]);
						// invalid, hidden and negative values are ignored
						if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden || value.min < 0 || value.max < 0) {
							continue;
						}

						me.min = Math.min(value.min, me.min);
						me.max = Math.max(value.max, me.max);

						if (value.min !== 0) {
							me.minNotZero = Math.min(value.min, me.minNotZero);
						}
					}
				}
			}
		}

		me.min = helpers$1.isFinite(me.min) ? me.min : null;
		me.max = helpers$1.isFinite(me.max) ? me.max : null;
		me.minNotZero = helpers$1.isFinite(me.minNotZero) ? me.minNotZero : null;

		// Common base implementation to handle ticks.min, ticks.max
		this.handleTickRangeOptions();
	},

	handleTickRangeOptions: function() {
		var me = this;
		var tickOpts = me.options.ticks;
		var DEFAULT_MIN = 1;
		var DEFAULT_MAX = 10;

		me.min = nonNegativeOrDefault(tickOpts.min, me.min);
		me.max = nonNegativeOrDefault(tickOpts.max, me.max);

		if (me.min === me.max) {
			if (me.min !== 0 && me.min !== null) {
				me.min = Math.pow(10, Math.floor(log10(me.min)) - 1);
				me.max = Math.pow(10, Math.floor(log10(me.max)) + 1);
			} else {
				me.min = DEFAULT_MIN;
				me.max = DEFAULT_MAX;
			}
		}
		if (me.min === null) {
			me.min = Math.pow(10, Math.floor(log10(me.max)) - 1);
		}
		if (me.max === null) {
			me.max = me.min !== 0
				? Math.pow(10, Math.floor(log10(me.min)) + 1)
				: DEFAULT_MAX;
		}
		if (me.minNotZero === null) {
			if (me.min > 0) {
				me.minNotZero = me.min;
			} else if (me.max < 1) {
				me.minNotZero = Math.pow(10, Math.floor(log10(me.max)));
			} else {
				me.minNotZero = DEFAULT_MIN;
			}
		}
	},

	buildTicks: function() {
		var me = this;
		var tickOpts = me.options.ticks;
		var reverse = !me.isHorizontal();

		var generationOptions = {
			min: nonNegativeOrDefault(tickOpts.min),
			max: nonNegativeOrDefault(tickOpts.max)
		};
		var ticks = me.ticks = generateTicks$1(generationOptions, me);

		// At this point, we need to update our max and min given the tick values since we have expanded the
		// range of the scale
		me.max = helpers$1.max(ticks);
		me.min = helpers$1.min(ticks);

		if (tickOpts.reverse) {
			reverse = !reverse;
			me.start = me.max;
			me.end = me.min;
		} else {
			me.start = me.min;
			me.end = me.max;
		}
		if (reverse) {
			ticks.reverse();
		}
	},

	convertTicksToLabels: function() {
		this.tickValues = this.ticks.slice();

		core_scale.prototype.convertTicksToLabels.call(this);
	},

	// Get the correct tooltip label
	getLabelForIndex: function(index, datasetIndex) {
		return this._getScaleLabel(this.chart.data.datasets[datasetIndex].data[index]);
	},

	getPixelForTick: function(index) {
		var ticks = this.tickValues;
		if (index < 0 || index > ticks.length - 1) {
			return null;
		}
		return this.getPixelForValue(ticks[index]);
	},

	/**
	 * Returns the value of the first tick.
	 * @param {number} value - The minimum not zero value.
	 * @return {number} The first tick value.
	 * @private
	 */
	_getFirstTickValue: function(value) {
		var exp = Math.floor(log10(value));
		var significand = Math.floor(value / Math.pow(10, exp));

		return significand * Math.pow(10, exp);
	},

	_configure: function() {
		var me = this;
		var start = me.min;
		var offset = 0;

		core_scale.prototype._configure.call(me);

		if (start === 0) {
			start = me._getFirstTickValue(me.minNotZero);
			offset = valueOrDefault$b(me.options.ticks.fontSize, core_defaults.global.defaultFontSize) / me._length;
		}

		me._startValue = log10(start);
		me._valueOffset = offset;
		me._valueRange = (log10(me.max) - log10(start)) / (1 - offset);
	},

	getPixelForValue: function(value) {
		var me = this;
		var decimal = 0;

		value = +me.getRightValue(value);

		if (value > me.min && value > 0) {
			decimal = (log10(value) - me._startValue) / me._valueRange + me._valueOffset;
		}
		return me.getPixelForDecimal(decimal);
	},

	getValueForPixel: function(pixel) {
		var me = this;
		var decimal = me.getDecimalForPixel(pixel);
		return decimal === 0 && me.min === 0
			? 0
			: Math.pow(10, me._startValue + (decimal - me._valueOffset) * me._valueRange);
	}
});

// INTERNAL: static default options, registered in src/index.js
var _defaults$2 = defaultConfig$2;
scale_logarithmic._defaults = _defaults$2;

var valueOrDefault$c = helpers$1.valueOrDefault;
var valueAtIndexOrDefault$1 = helpers$1.valueAtIndexOrDefault;
var resolve$4 = helpers$1.options.resolve;

var defaultConfig$3 = {
	display: true,

	// Boolean - Whether to animate scaling the chart from the centre
	animate: true,
	position: 'chartArea',

	angleLines: {
		display: true,
		color: 'rgba(0,0,0,0.1)',
		lineWidth: 1,
		borderDash: [],
		borderDashOffset: 0.0
	},

	gridLines: {
		circular: false
	},

	// label settings
	ticks: {
		// Boolean - Show a backdrop to the scale label
		showLabelBackdrop: true,

		// String - The colour of the label backdrop
		backdropColor: 'rgba(255,255,255,0.75)',

		// Number - The backdrop padding above & below the label in pixels
		backdropPaddingY: 2,

		// Number - The backdrop padding to the side of the label in pixels
		backdropPaddingX: 2,

		callback: core_ticks.formatters.linear
	},

	pointLabels: {
		// Boolean - if true, show point labels
		display: true,

		// Number - Point label font size in pixels
		fontSize: 10,

		// Function - Used to convert point labels
		callback: function(label) {
			return label;
		}
	}
};

function getTickBackdropHeight(opts) {
	var tickOpts = opts.ticks;

	if (tickOpts.display && opts.display) {
		return valueOrDefault$c(tickOpts.fontSize, core_defaults.global.defaultFontSize) + tickOpts.backdropPaddingY * 2;
	}
	return 0;
}

function measureLabelSize(ctx, lineHeight, label) {
	if (helpers$1.isArray(label)) {
		return {
			w: helpers$1.longestText(ctx, ctx.font, label),
			h: label.length * lineHeight
		};
	}

	return {
		w: ctx.measureText(label).width,
		h: lineHeight
	};
}

function determineLimits(angle, pos, size, min, max) {
	if (angle === min || angle === max) {
		return {
			start: pos - (size / 2),
			end: pos + (size / 2)
		};
	} else if (angle < min || angle > max) {
		return {
			start: pos - size,
			end: pos
		};
	}

	return {
		start: pos,
		end: pos + size
	};
}

/**
 * Helper function to fit a radial linear scale with point labels
 */
function fitWithPointLabels(scale) {

	// Right, this is really confusing and there is a lot of maths going on here
	// The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
	//
	// Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
	//
	// Solution:
	//
	// We assume the radius of the polygon is half the size of the canvas at first
	// at each index we check if the text overlaps.
	//
	// Where it does, we store that angle and that index.
	//
	// After finding the largest index and angle we calculate how much we need to remove
	// from the shape radius to move the point inwards by that x.
	//
	// We average the left and right distances to get the maximum shape radius that can fit in the box
	// along with labels.
	//
	// Once we have that, we can find the centre point for the chart, by taking the x text protrusion
	// on each side, removing that from the size, halving it and adding the left x protrusion width.
	//
	// This will mean we have a shape fitted to the canvas, as large as it can be with the labels
	// and position it in the most space efficient manner
	//
	// https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif

	var plFont = helpers$1.options._parseFont(scale.options.pointLabels);

	// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
	// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
	var furthestLimits = {
		l: 0,
		r: scale.width,
		t: 0,
		b: scale.height - scale.paddingTop
	};
	var furthestAngles = {};
	var i, textSize, pointPosition;

	scale.ctx.font = plFont.string;
	scale._pointLabelSizes = [];

	var valueCount = scale.chart.data.labels.length;
	for (i = 0; i < valueCount; i++) {
		pointPosition = scale.getPointPosition(i, scale.drawingArea + 5);
		textSize = measureLabelSize(scale.ctx, plFont.lineHeight, scale.pointLabels[i]);
		scale._pointLabelSizes[i] = textSize;

		// Add quarter circle to make degree 0 mean top of circle
		var angleRadians = scale.getIndexAngle(i);
		var angle = helpers$1.toDegrees(angleRadians) % 360;
		var hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
		var vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);

		if (hLimits.start < furthestLimits.l) {
			furthestLimits.l = hLimits.start;
			furthestAngles.l = angleRadians;
		}

		if (hLimits.end > furthestLimits.r) {
			furthestLimits.r = hLimits.end;
			furthestAngles.r = angleRadians;
		}

		if (vLimits.start < furthestLimits.t) {
			furthestLimits.t = vLimits.start;
			furthestAngles.t = angleRadians;
		}

		if (vLimits.end > furthestLimits.b) {
			furthestLimits.b = vLimits.end;
			furthestAngles.b = angleRadians;
		}
	}

	scale.setReductions(scale.drawingArea, furthestLimits, furthestAngles);
}

function getTextAlignForAngle(angle) {
	if (angle === 0 || angle === 180) {
		return 'center';
	} else if (angle < 180) {
		return 'left';
	}

	return 'right';
}

function fillText(ctx, text, position, lineHeight) {
	var y = position.y + lineHeight / 2;
	var i, ilen;

	if (helpers$1.isArray(text)) {
		for (i = 0, ilen = text.length; i < ilen; ++i) {
			ctx.fillText(text[i], position.x, y);
			y += lineHeight;
		}
	} else {
		ctx.fillText(text, position.x, y);
	}
}

function adjustPointPositionForLabelHeight(angle, textSize, position) {
	if (angle === 90 || angle === 270) {
		position.y -= (textSize.h / 2);
	} else if (angle > 270 || angle < 90) {
		position.y -= textSize.h;
	}
}

function drawPointLabels(scale) {
	var ctx = scale.ctx;
	var opts = scale.options;
	var pointLabelOpts = opts.pointLabels;
	var tickBackdropHeight = getTickBackdropHeight(opts);
	var outerDistance = scale.getDistanceFromCenterForValue(opts.ticks.reverse ? scale.min : scale.max);
	var plFont = helpers$1.options._parseFont(pointLabelOpts);

	ctx.save();

	ctx.font = plFont.string;
	ctx.textBaseline = 'middle';

	for (var i = scale.chart.data.labels.length - 1; i >= 0; i--) {
		// Extra pixels out for some label spacing
		var extra = (i === 0 ? tickBackdropHeight / 2 : 0);
		var pointLabelPosition = scale.getPointPosition(i, outerDistance + extra + 5);

		// Keep this in loop since we may support array properties here
		var pointLabelFontColor = valueAtIndexOrDefault$1(pointLabelOpts.fontColor, i, core_defaults.global.defaultFontColor);
		ctx.fillStyle = pointLabelFontColor;

		var angleRadians = scale.getIndexAngle(i);
		var angle = helpers$1.toDegrees(angleRadians);
		ctx.textAlign = getTextAlignForAngle(angle);
		adjustPointPositionForLabelHeight(angle, scale._pointLabelSizes[i], pointLabelPosition);
		fillText(ctx, scale.pointLabels[i], pointLabelPosition, plFont.lineHeight);
	}
	ctx.restore();
}

function drawRadiusLine(scale, gridLineOpts, radius, index) {
	var ctx = scale.ctx;
	var circular = gridLineOpts.circular;
	var valueCount = scale.chart.data.labels.length;
	var lineColor = valueAtIndexOrDefault$1(gridLineOpts.color, index - 1);
	var lineWidth = valueAtIndexOrDefault$1(gridLineOpts.lineWidth, index - 1);
	var pointPosition;

	if ((!circular && !valueCount) || !lineColor || !lineWidth) {
		return;
	}

	ctx.save();
	ctx.strokeStyle = lineColor;
	ctx.lineWidth = lineWidth;
	if (ctx.setLineDash) {
		ctx.setLineDash(gridLineOpts.borderDash || []);
		ctx.lineDashOffset = gridLineOpts.borderDashOffset || 0.0;
	}

	ctx.beginPath();
	if (circular) {
		// Draw circular arcs between the points
		ctx.arc(scale.xCenter, scale.yCenter, radius, 0, Math.PI * 2);
	} else {
		// Draw straight lines connecting each index
		pointPosition = scale.getPointPosition(0, radius);
		ctx.moveTo(pointPosition.x, pointPosition.y);

		for (var i = 1; i < valueCount; i++) {
			pointPosition = scale.getPointPosition(i, radius);
			ctx.lineTo(pointPosition.x, pointPosition.y);
		}
	}
	ctx.closePath();
	ctx.stroke();
	ctx.restore();
}

function numberOrZero(param) {
	return helpers$1.isNumber(param) ? param : 0;
}

var scale_radialLinear = scale_linearbase.extend({
	setDimensions: function() {
		var me = this;

		// Set the unconstrained dimension before label rotation
		me.width = me.maxWidth;
		me.height = me.maxHeight;
		me.paddingTop = getTickBackdropHeight(me.options) / 2;
		me.xCenter = Math.floor(me.width / 2);
		me.yCenter = Math.floor((me.height - me.paddingTop) / 2);
		me.drawingArea = Math.min(me.height - me.paddingTop, me.width) / 2;
	},

	determineDataLimits: function() {
		var me = this;
		var chart = me.chart;
		var min = Number.POSITIVE_INFINITY;
		var max = Number.NEGATIVE_INFINITY;

		helpers$1.each(chart.data.datasets, function(dataset, datasetIndex) {
			if (chart.isDatasetVisible(datasetIndex)) {
				var meta = chart.getDatasetMeta(datasetIndex);

				helpers$1.each(dataset.data, function(rawValue, index) {
					var value = +me.getRightValue(rawValue);
					if (isNaN(value) || meta.data[index].hidden) {
						return;
					}

					min = Math.min(value, min);
					max = Math.max(value, max);
				});
			}
		});

		me.min = (min === Number.POSITIVE_INFINITY ? 0 : min);
		me.max = (max === Number.NEGATIVE_INFINITY ? 0 : max);

		// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
		me.handleTickRangeOptions();
	},

	// Returns the maximum number of ticks based on the scale dimension
	_computeTickLimit: function() {
		return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
	},

	convertTicksToLabels: function() {
		var me = this;

		scale_linearbase.prototype.convertTicksToLabels.call(me);

		// Point labels
		me.pointLabels = me.chart.data.labels.map(function() {
			var label = helpers$1.callback(me.options.pointLabels.callback, arguments, me);
			return label || label === 0 ? label : '';
		});
	},

	getLabelForIndex: function(index, datasetIndex) {
		return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
	},

	fit: function() {
		var me = this;
		var opts = me.options;

		if (opts.display && opts.pointLabels.display) {
			fitWithPointLabels(me);
		} else {
			me.setCenterPoint(0, 0, 0, 0);
		}
	},

	/**
	 * Set radius reductions and determine new radius and center point
	 * @private
	 */
	setReductions: function(largestPossibleRadius, furthestLimits, furthestAngles) {
		var me = this;
		var radiusReductionLeft = furthestLimits.l / Math.sin(furthestAngles.l);
		var radiusReductionRight = Math.max(furthestLimits.r - me.width, 0) / Math.sin(furthestAngles.r);
		var radiusReductionTop = -furthestLimits.t / Math.cos(furthestAngles.t);
		var radiusReductionBottom = -Math.max(furthestLimits.b - (me.height - me.paddingTop), 0) / Math.cos(furthestAngles.b);

		radiusReductionLeft = numberOrZero(radiusReductionLeft);
		radiusReductionRight = numberOrZero(radiusReductionRight);
		radiusReductionTop = numberOrZero(radiusReductionTop);
		radiusReductionBottom = numberOrZero(radiusReductionBottom);

		me.drawingArea = Math.min(
			Math.floor(largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2),
			Math.floor(largestPossibleRadius - (radiusReductionTop + radiusReductionBottom) / 2));
		me.setCenterPoint(radiusReductionLeft, radiusReductionRight, radiusReductionTop, radiusReductionBottom);
	},

	setCenterPoint: function(leftMovement, rightMovement, topMovement, bottomMovement) {
		var me = this;
		var maxRight = me.width - rightMovement - me.drawingArea;
		var maxLeft = leftMovement + me.drawingArea;
		var maxTop = topMovement + me.drawingArea;
		var maxBottom = (me.height - me.paddingTop) - bottomMovement - me.drawingArea;

		me.xCenter = Math.floor(((maxLeft + maxRight) / 2) + me.left);
		me.yCenter = Math.floor(((maxTop + maxBottom) / 2) + me.top + me.paddingTop);
	},

	getIndexAngle: function(index) {
		var chart = this.chart;
		var angleMultiplier = 360 / chart.data.labels.length;
		var options = chart.options || {};
		var startAngle = options.startAngle || 0;

		// Start from the top instead of right, so remove a quarter of the circle
		var angle = (index * angleMultiplier + startAngle) % 360;

		return (angle < 0 ? angle + 360 : angle) * Math.PI * 2 / 360;
	},

	getDistanceFromCenterForValue: function(value) {
		var me = this;

		if (helpers$1.isNullOrUndef(value)) {
			return NaN;
		}

		// Take into account half font size + the yPadding of the top value
		var scalingFactor = me.drawingArea / (me.max - me.min);
		if (me.options.ticks.reverse) {
			return (me.max - value) * scalingFactor;
		}
		return (value - me.min) * scalingFactor;
	},

	getPointPosition: function(index, distanceFromCenter) {
		var me = this;
		var thisAngle = me.getIndexAngle(index) - (Math.PI / 2);
		return {
			x: Math.cos(thisAngle) * distanceFromCenter + me.xCenter,
			y: Math.sin(thisAngle) * distanceFromCenter + me.yCenter
		};
	},

	getPointPositionForValue: function(index, value) {
		return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
	},

	getBasePosition: function(index) {
		var me = this;
		var min = me.min;
		var max = me.max;

		return me.getPointPositionForValue(index || 0,
			me.beginAtZero ? 0 :
			min < 0 && max < 0 ? max :
			min > 0 && max > 0 ? min :
			0);
	},

	/**
	 * @private
	 */
	_drawGrid: function() {
		var me = this;
		var ctx = me.ctx;
		var opts = me.options;
		var gridLineOpts = opts.gridLines;
		var angleLineOpts = opts.angleLines;
		var lineWidth = valueOrDefault$c(angleLineOpts.lineWidth, gridLineOpts.lineWidth);
		var lineColor = valueOrDefault$c(angleLineOpts.color, gridLineOpts.color);
		var i, offset, position;

		if (opts.pointLabels.display) {
			drawPointLabels(me);
		}

		if (gridLineOpts.display) {
			helpers$1.each(me.ticks, function(label, index) {
				if (index !== 0) {
					offset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);
					drawRadiusLine(me, gridLineOpts, offset, index);
				}
			});
		}

		if (angleLineOpts.display && lineWidth && lineColor) {
			ctx.save();
			ctx.lineWidth = lineWidth;
			ctx.strokeStyle = lineColor;
			if (ctx.setLineDash) {
				ctx.setLineDash(resolve$4([angleLineOpts.borderDash, gridLineOpts.borderDash, []]));
				ctx.lineDashOffset = resolve$4([angleLineOpts.borderDashOffset, gridLineOpts.borderDashOffset, 0.0]);
			}

			for (i = me.chart.data.labels.length - 1; i >= 0; i--) {
				offset = me.getDistanceFromCenterForValue(opts.ticks.reverse ? me.min : me.max);
				position = me.getPointPosition(i, offset);
				ctx.beginPath();
				ctx.moveTo(me.xCenter, me.yCenter);
				ctx.lineTo(position.x, position.y);
				ctx.stroke();
			}

			ctx.restore();
		}
	},

	/**
	 * @private
	 */
	_drawLabels: function() {
		var me = this;
		var ctx = me.ctx;
		var opts = me.options;
		var tickOpts = opts.ticks;

		if (!tickOpts.display) {
			return;
		}

		var startAngle = me.getIndexAngle(0);
		var tickFont = helpers$1.options._parseFont(tickOpts);
		var tickFontColor = valueOrDefault$c(tickOpts.fontColor, core_defaults.global.defaultFontColor);
		var offset, width;

		ctx.save();
		ctx.font = tickFont.string;
		ctx.translate(me.xCenter, me.yCenter);
		ctx.rotate(startAngle);
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';

		helpers$1.each(me.ticks, function(label, index) {
			if (index === 0 && !tickOpts.reverse) {
				return;
			}

			offset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);

			if (tickOpts.showLabelBackdrop) {
				width = ctx.measureText(label).width;
				ctx.fillStyle = tickOpts.backdropColor;

				ctx.fillRect(
					-width / 2 - tickOpts.backdropPaddingX,
					-offset - tickFont.size / 2 - tickOpts.backdropPaddingY,
					width + tickOpts.backdropPaddingX * 2,
					tickFont.size + tickOpts.backdropPaddingY * 2
				);
			}

			ctx.fillStyle = tickFontColor;
			ctx.fillText(label, 0, -offset);
		});

		ctx.restore();
	},

	/**
	 * @private
	 */
	_drawTitle: helpers$1.noop
});

// INTERNAL: static default options, registered in src/index.js
var _defaults$3 = defaultConfig$3;
scale_radialLinear._defaults = _defaults$3;

var deprecated$1 = helpers$1._deprecated;
var resolve$5 = helpers$1.options.resolve;
var valueOrDefault$d = helpers$1.valueOrDefault;

// Integer constants are from the ES6 spec.
var MIN_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991;
var MAX_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

var INTERVALS = {
	millisecond: {
		common: true,
		size: 1,
		steps: 1000
	},
	second: {
		common: true,
		size: 1000,
		steps: 60
	},
	minute: {
		common: true,
		size: 60000,
		steps: 60
	},
	hour: {
		common: true,
		size: 3600000,
		steps: 24
	},
	day: {
		common: true,
		size: 86400000,
		steps: 30
	},
	week: {
		common: false,
		size: 604800000,
		steps: 4
	},
	month: {
		common: true,
		size: 2.628e9,
		steps: 12
	},
	quarter: {
		common: false,
		size: 7.884e9,
		steps: 4
	},
	year: {
		common: true,
		size: 3.154e10
	}
};

var UNITS = Object.keys(INTERVALS);

function sorter(a, b) {
	return a - b;
}

function arrayUnique(items) {
	var hash = {};
	var out = [];
	var i, ilen, item;

	for (i = 0, ilen = items.length; i < ilen; ++i) {
		item = items[i];
		if (!hash[item]) {
			hash[item] = true;
			out.push(item);
		}
	}

	return out;
}

function getMin(options) {
	return helpers$1.valueOrDefault(options.time.min, options.ticks.min);
}

function getMax(options) {
	return helpers$1.valueOrDefault(options.time.max, options.ticks.max);
}

/**
 * Returns an array of {time, pos} objects used to interpolate a specific `time` or position
 * (`pos`) on the scale, by searching entries before and after the requested value. `pos` is
 * a decimal between 0 and 1: 0 being the start of the scale (left or top) and 1 the other
 * extremity (left + width or top + height). Note that it would be more optimized to directly
 * store pre-computed pixels, but the scale dimensions are not guaranteed at the time we need
 * to create the lookup table. The table ALWAYS contains at least two items: min and max.
 *
 * @param {number[]} timestamps - timestamps sorted from lowest to highest.
 * @param {string} distribution - If 'linear', timestamps will be spread linearly along the min
 * and max range, so basically, the table will contains only two items: {min, 0} and {max, 1}.
 * If 'series', timestamps will be positioned at the same distance from each other. In this
 * case, only timestamps that break the time linearity are registered, meaning that in the
 * best case, all timestamps are linear, the table contains only min and max.
 */
function buildLookupTable(timestamps, min, max, distribution) {
	if (distribution === 'linear' || !timestamps.length) {
		return [
			{time: min, pos: 0},
			{time: max, pos: 1}
		];
	}

	var table = [];
	var items = [min];
	var i, ilen, prev, curr, next;

	for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
		curr = timestamps[i];
		if (curr > min && curr < max) {
			items.push(curr);
		}
	}

	items.push(max);

	for (i = 0, ilen = items.length; i < ilen; ++i) {
		next = items[i + 1];
		prev = items[i - 1];
		curr = items[i];

		// only add points that breaks the scale linearity
		if (prev === undefined || next === undefined || Math.round((next + prev) / 2) !== curr) {
			table.push({time: curr, pos: i / (ilen - 1)});
		}
	}

	return table;
}

// @see adapted from https://www.anujgakhar.com/2014/03/01/binary-search-in-javascript/
function lookup(table, key, value) {
	var lo = 0;
	var hi = table.length - 1;
	var mid, i0, i1;

	while (lo >= 0 && lo <= hi) {
		mid = (lo + hi) >> 1;
		i0 = table[mid - 1] || null;
		i1 = table[mid];

		if (!i0) {
			// given value is outside table (before first item)
			return {lo: null, hi: i1};
		} else if (i1[key] < value) {
			lo = mid + 1;
		} else if (i0[key] > value) {
			hi = mid - 1;
		} else {
			return {lo: i0, hi: i1};
		}
	}

	// given value is outside table (after last item)
	return {lo: i1, hi: null};
}

/**
 * Linearly interpolates the given source `value` using the table items `skey` values and
 * returns the associated `tkey` value. For example, interpolate(table, 'time', 42, 'pos')
 * returns the position for a timestamp equal to 42. If value is out of bounds, values at
 * index [0, 1] or [n - 1, n] are used for the interpolation.
 */
function interpolate$1(table, skey, sval, tkey) {
	var range = lookup(table, skey, sval);

	// Note: the lookup table ALWAYS contains at least 2 items (min and max)
	var prev = !range.lo ? table[0] : !range.hi ? table[table.length - 2] : range.lo;
	var next = !range.lo ? table[1] : !range.hi ? table[table.length - 1] : range.hi;

	var span = next[skey] - prev[skey];
	var ratio = span ? (sval - prev[skey]) / span : 0;
	var offset = (next[tkey] - prev[tkey]) * ratio;

	return prev[tkey] + offset;
}

function toTimestamp(scale, input) {
	var adapter = scale._adapter;
	var options = scale.options.time;
	var parser = options.parser;
	var format = parser || options.format;
	var value = input;

	if (typeof parser === 'function') {
		value = parser(value);
	}

	// Only parse if its not a timestamp already
	if (!helpers$1.isFinite(value)) {
		value = typeof format === 'string'
			? adapter.parse(value, format)
			: adapter.parse(value);
	}

	if (value !== null) {
		return +value;
	}

	// Labels are in an incompatible format and no `parser` has been provided.
	// The user might still use the deprecated `format` option for parsing.
	if (!parser && typeof format === 'function') {
		value = format(input);

		// `format` could return something else than a timestamp, if so, parse it
		if (!helpers$1.isFinite(value)) {
			value = adapter.parse(value);
		}
	}

	return value;
}

function parse(scale, input) {
	if (helpers$1.isNullOrUndef(input)) {
		return null;
	}

	var options = scale.options.time;
	var value = toTimestamp(scale, scale.getRightValue(input));
	if (value === null) {
		return value;
	}

	if (options.round) {
		value = +scale._adapter.startOf(value, options.round);
	}

	return value;
}

/**
 * Figures out what unit results in an appropriate number of auto-generated ticks
 */
function determineUnitForAutoTicks(minUnit, min, max, capacity) {
	var ilen = UNITS.length;
	var i, interval, factor;

	for (i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
		interval = INTERVALS[UNITS[i]];
		factor = interval.steps ? interval.steps : MAX_INTEGER;

		if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
			return UNITS[i];
		}
	}

	return UNITS[ilen - 1];
}

/**
 * Figures out what unit to format a set of ticks with
 */
function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
	var i, unit;

	for (i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--) {
		unit = UNITS[i];
		if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) {
			return unit;
		}
	}

	return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
}

function determineMajorUnit(unit) {
	for (var i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) {
		if (INTERVALS[UNITS[i]].common) {
			return UNITS[i];
		}
	}
}

/**
 * Generates a maximum of `capacity` timestamps between min and max, rounded to the
 * `minor` unit using the given scale time `options`.
 * Important: this method can return ticks outside the min and max range, it's the
 * responsibility of the calling code to clamp values if needed.
 */
function generate(scale, min, max, capacity) {
	var adapter = scale._adapter;
	var options = scale.options;
	var timeOpts = options.time;
	var minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, capacity);
	var stepSize = resolve$5([timeOpts.stepSize, timeOpts.unitStepSize, 1]);
	var weekday = minor === 'week' ? timeOpts.isoWeekday : false;
	var first = min;
	var ticks = [];
	var time;

	// For 'week' unit, handle the first day of week option
	if (weekday) {
		first = +adapter.startOf(first, 'isoWeek', weekday);
	}

	// Align first ticks on unit
	first = +adapter.startOf(first, weekday ? 'day' : minor);

	// Prevent browser from freezing in case user options request millions of milliseconds
	if (adapter.diff(max, min, minor) > 100000 * stepSize) {
		throw min + ' and ' + max + ' are too far apart with stepSize of ' + stepSize + ' ' + minor;
	}

	for (time = first; time < max; time = +adapter.add(time, stepSize, minor)) {
		ticks.push(time);
	}

	if (time === max || options.bounds === 'ticks') {
		ticks.push(time);
	}

	return ticks;
}

/**
 * Returns the start and end offsets from edges in the form of {start, end}
 * where each value is a relative width to the scale and ranges between 0 and 1.
 * They add extra margins on the both sides by scaling down the original scale.
 * Offsets are added when the `offset` option is true.
 */
function computeOffsets(table, ticks, min, max, options) {
	var start = 0;
	var end = 0;
	var first, last;

	if (options.offset && ticks.length) {
		first = interpolate$1(table, 'time', ticks[0], 'pos');
		if (ticks.length === 1) {
			start = 1 - first;
		} else {
			start = (interpolate$1(table, 'time', ticks[1], 'pos') - first) / 2;
		}
		last = interpolate$1(table, 'time', ticks[ticks.length - 1], 'pos');
		if (ticks.length === 1) {
			end = last;
		} else {
			end = (last - interpolate$1(table, 'time', ticks[ticks.length - 2], 'pos')) / 2;
		}
	}

	return {start: start, end: end, factor: 1 / (start + 1 + end)};
}

function setMajorTicks(scale, ticks, map, majorUnit) {
	var adapter = scale._adapter;
	var first = +adapter.startOf(ticks[0].value, majorUnit);
	var last = ticks[ticks.length - 1].value;
	var major, index;

	for (major = first; major <= last; major = +adapter.add(major, 1, majorUnit)) {
		index = map[major];
		if (index >= 0) {
			ticks[index].major = true;
		}
	}
	return ticks;
}

function ticksFromTimestamps(scale, values, majorUnit) {
	var ticks = [];
	var map = {};
	var ilen = values.length;
	var i, value;

	for (i = 0; i < ilen; ++i) {
		value = values[i];
		map[value] = i;

		ticks.push({
			value: value,
			major: false
		});
	}

	// We set the major ticks separately from the above loop because calling startOf for every tick
	// is expensive when there is a large number of ticks
	return (ilen === 0 || !majorUnit) ? ticks : setMajorTicks(scale, ticks, map, majorUnit);
}

var defaultConfig$4 = {
	position: 'bottom',

	/**
	 * Data distribution along the scale:
	 * - 'linear': data are spread according to their time (distances can vary),
	 * - 'series': data are spread at the same distance from each other.
	 * @see https://github.com/chartjs/Chart.js/pull/4507
	 * @since 2.7.0
	 */
	distribution: 'linear',

	/**
	 * Scale boundary strategy (bypassed by min/max time options)
	 * - `data`: make sure data are fully visible, ticks outside are removed
	 * - `ticks`: make sure ticks are fully visible, data outside are truncated
	 * @see https://github.com/chartjs/Chart.js/pull/4556
	 * @since 2.7.0
	 */
	bounds: 'data',

	adapters: {},
	time: {
		parser: false, // false == a pattern string from https://momentjs.com/docs/#/parsing/string-format/ or a custom callback that converts its argument to a moment
		unit: false, // false == automatic or override with week, month, year, etc.
		round: false, // none, or override with week, month, year, etc.
		displayFormat: false, // DEPRECATED
		isoWeekday: false, // override week start day - see https://momentjs.com/docs/#/get-set/iso-weekday/
		minUnit: 'millisecond',
		displayFormats: {}
	},
	ticks: {
		autoSkip: false,

		/**
		 * Ticks generation input values:
		 * - 'auto': generates "optimal" ticks based on scale size and time options.
		 * - 'data': generates ticks from data (including labels from data {t|x|y} objects).
		 * - 'labels': generates ticks from user given `data.labels` values ONLY.
		 * @see https://github.com/chartjs/Chart.js/pull/4507
		 * @since 2.7.0
		 */
		source: 'auto',

		major: {
			enabled: false
		}
	}
};

var scale_time = core_scale.extend({
	initialize: function() {
		this.mergeTicksOptions();
		core_scale.prototype.initialize.call(this);
	},

	update: function() {
		var me = this;
		var options = me.options;
		var time = options.time || (options.time = {});
		var adapter = me._adapter = new core_adapters._date(options.adapters.date);

		// DEPRECATIONS: output a message only one time per update
		deprecated$1('time scale', time.format, 'time.format', 'time.parser');
		deprecated$1('time scale', time.min, 'time.min', 'ticks.min');
		deprecated$1('time scale', time.max, 'time.max', 'ticks.max');

		// Backward compatibility: before introducing adapter, `displayFormats` was
		// supposed to contain *all* unit/string pairs but this can't be resolved
		// when loading the scale (adapters are loaded afterward), so let's populate
		// missing formats on update
		helpers$1.mergeIf(time.displayFormats, adapter.formats());

		return core_scale.prototype.update.apply(me, arguments);
	},

	/**
	 * Allows data to be referenced via 't' attribute
	 */
	getRightValue: function(rawValue) {
		if (rawValue && rawValue.t !== undefined) {
			rawValue = rawValue.t;
		}
		return core_scale.prototype.getRightValue.call(this, rawValue);
	},

	determineDataLimits: function() {
		var me = this;
		var chart = me.chart;
		var adapter = me._adapter;
		var options = me.options;
		var unit = options.time.unit || 'day';
		var min = MAX_INTEGER;
		var max = MIN_INTEGER;
		var timestamps = [];
		var datasets = [];
		var labels = [];
		var i, j, ilen, jlen, data, timestamp, labelsAdded;
		var dataLabels = me._getLabels();

		for (i = 0, ilen = dataLabels.length; i < ilen; ++i) {
			labels.push(parse(me, dataLabels[i]));
		}

		for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
			if (chart.isDatasetVisible(i)) {
				data = chart.data.datasets[i].data;

				// Let's consider that all data have the same format.
				if (helpers$1.isObject(data[0])) {
					datasets[i] = [];

					for (j = 0, jlen = data.length; j < jlen; ++j) {
						timestamp = parse(me, data[j]);
						timestamps.push(timestamp);
						datasets[i][j] = timestamp;
					}
				} else {
					datasets[i] = labels.slice(0);
					if (!labelsAdded) {
						timestamps = timestamps.concat(labels);
						labelsAdded = true;
					}
				}
			} else {
				datasets[i] = [];
			}
		}

		if (labels.length) {
			min = Math.min(min, labels[0]);
			max = Math.max(max, labels[labels.length - 1]);
		}

		if (timestamps.length) {
			timestamps = ilen > 1 ? arrayUnique(timestamps).sort(sorter) : timestamps.sort(sorter);
			min = Math.min(min, timestamps[0]);
			max = Math.max(max, timestamps[timestamps.length - 1]);
		}

		min = parse(me, getMin(options)) || min;
		max = parse(me, getMax(options)) || max;

		// In case there is no valid min/max, set limits based on unit time option
		min = min === MAX_INTEGER ? +adapter.startOf(Date.now(), unit) : min;
		max = max === MIN_INTEGER ? +adapter.endOf(Date.now(), unit) + 1 : max;

		// Make sure that max is strictly higher than min (required by the lookup table)
		me.min = Math.min(min, max);
		me.max = Math.max(min + 1, max);

		// PRIVATE
		me._table = [];
		me._timestamps = {
			data: timestamps,
			datasets: datasets,
			labels: labels
		};
	},

	buildTicks: function() {
		var me = this;
		var min = me.min;
		var max = me.max;
		var options = me.options;
		var tickOpts = options.ticks;
		var timeOpts = options.time;
		var timestamps = me._timestamps;
		var ticks = [];
		var capacity = me.getLabelCapacity(min);
		var source = tickOpts.source;
		var distribution = options.distribution;
		var i, ilen, timestamp;

		if (source === 'data' || (source === 'auto' && distribution === 'series')) {
			timestamps = timestamps.data;
		} else if (source === 'labels') {
			timestamps = timestamps.labels;
		} else {
			timestamps = generate(me, min, max, capacity);
		}

		if (options.bounds === 'ticks' && timestamps.length) {
			min = timestamps[0];
			max = timestamps[timestamps.length - 1];
		}

		// Enforce limits with user min/max options
		min = parse(me, getMin(options)) || min;
		max = parse(me, getMax(options)) || max;

		// Remove ticks outside the min/max range
		for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
			timestamp = timestamps[i];
			if (timestamp >= min && timestamp <= max) {
				ticks.push(timestamp);
			}
		}

		me.min = min;
		me.max = max;

		// PRIVATE
		// determineUnitForFormatting relies on the number of ticks so we don't use it when
		// autoSkip is enabled because we don't yet know what the final number of ticks will be
		me._unit = timeOpts.unit || (tickOpts.autoSkip
			? determineUnitForAutoTicks(timeOpts.minUnit, me.min, me.max, capacity)
			: determineUnitForFormatting(me, ticks.length, timeOpts.minUnit, me.min, me.max));
		me._majorUnit = !tickOpts.major.enabled || me._unit === 'year' ? undefined
			: determineMajorUnit(me._unit);
		me._table = buildLookupTable(me._timestamps.data, min, max, distribution);
		me._offsets = computeOffsets(me._table, ticks, min, max, options);

		if (tickOpts.reverse) {
			ticks.reverse();
		}

		return ticksFromTimestamps(me, ticks, me._majorUnit);
	},

	getLabelForIndex: function(index, datasetIndex) {
		var me = this;
		var adapter = me._adapter;
		var data = me.chart.data;
		var timeOpts = me.options.time;
		var label = data.labels && index < data.labels.length ? data.labels[index] : '';
		var value = data.datasets[datasetIndex].data[index];

		if (helpers$1.isObject(value)) {
			label = me.getRightValue(value);
		}
		if (timeOpts.tooltipFormat) {
			return adapter.format(toTimestamp(me, label), timeOpts.tooltipFormat);
		}
		if (typeof label === 'string') {
			return label;
		}
		return adapter.format(toTimestamp(me, label), timeOpts.displayFormats.datetime);
	},

	/**
	 * Function to format an individual tick mark
	 * @private
	 */
	tickFormatFunction: function(time, index, ticks, format) {
		var me = this;
		var adapter = me._adapter;
		var options = me.options;
		var formats = options.time.displayFormats;
		var minorFormat = formats[me._unit];
		var majorUnit = me._majorUnit;
		var majorFormat = formats[majorUnit];
		var tick = ticks[index];
		var tickOpts = options.ticks;
		var major = majorUnit && majorFormat && tick && tick.major;
		var label = adapter.format(time, format ? format : major ? majorFormat : minorFormat);
		var nestedTickOpts = major ? tickOpts.major : tickOpts.minor;
		var formatter = resolve$5([
			nestedTickOpts.callback,
			nestedTickOpts.userCallback,
			tickOpts.callback,
			tickOpts.userCallback
		]);

		return formatter ? formatter(label, index, ticks) : label;
	},

	convertTicksToLabels: function(ticks) {
		var labels = [];
		var i, ilen;

		for (i = 0, ilen = ticks.length; i < ilen; ++i) {
			labels.push(this.tickFormatFunction(ticks[i].value, i, ticks));
		}

		return labels;
	},

	/**
	 * @private
	 */
	getPixelForOffset: function(time) {
		var me = this;
		var offsets = me._offsets;
		var pos = interpolate$1(me._table, 'time', time, 'pos');
		return me.getPixelForDecimal((offsets.start + pos) * offsets.factor);
	},

	getPixelForValue: function(value, index, datasetIndex) {
		var me = this;
		var time = null;

		if (index !== undefined && datasetIndex !== undefined) {
			time = me._timestamps.datasets[datasetIndex][index];
		}

		if (time === null) {
			time = parse(me, value);
		}

		if (time !== null) {
			return me.getPixelForOffset(time);
		}
	},

	getPixelForTick: function(index) {
		var ticks = this.getTicks();
		return index >= 0 && index < ticks.length ?
			this.getPixelForOffset(ticks[index].value) :
			null;
	},

	getValueForPixel: function(pixel) {
		var me = this;
		var offsets = me._offsets;
		var pos = me.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
		var time = interpolate$1(me._table, 'pos', pos, 'time');

		// DEPRECATION, we should return time directly
		return me._adapter._create(time);
	},

	/**
	 * @private
	 */
	_getLabelSize: function(label) {
		var me = this;
		var ticksOpts = me.options.ticks;
		var tickLabelWidth = me.ctx.measureText(label).width;
		var angle = helpers$1.toRadians(me.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
		var cosRotation = Math.cos(angle);
		var sinRotation = Math.sin(angle);
		var tickFontSize = valueOrDefault$d(ticksOpts.fontSize, core_defaults.global.defaultFontSize);

		return {
			w: (tickLabelWidth * cosRotation) + (tickFontSize * sinRotation),
			h: (tickLabelWidth * sinRotation) + (tickFontSize * cosRotation)
		};
	},

	/**
	 * Crude approximation of what the label width might be
	 * @private
	 */
	getLabelWidth: function(label) {
		return this._getLabelSize(label).w;
	},

	/**
	 * @private
	 */
	getLabelCapacity: function(exampleTime) {
		var me = this;
		var timeOpts = me.options.time;
		var displayFormats = timeOpts.displayFormats;

		// pick the longest format (milliseconds) for guestimation
		var format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
		var exampleLabel = me.tickFormatFunction(exampleTime, 0, ticksFromTimestamps(me, [exampleTime], me._majorUnit), format);
		var size = me._getLabelSize(exampleLabel);
		var capacity = Math.floor(me.isHorizontal() ? me.width / size.w : me.height / size.h);

		if (me.options.offset) {
			capacity--;
		}

		return capacity > 0 ? capacity : 1;
	}
});

// INTERNAL: static default options, registered in src/index.js
var _defaults$4 = defaultConfig$4;
scale_time._defaults = _defaults$4;

var scales = {
	category: scale_category,
	linear: scale_linear,
	logarithmic: scale_logarithmic,
	radialLinear: scale_radialLinear,
	time: scale_time
};

var FORMATS = {
	datetime: 'MMM D, YYYY, h:mm:ss a',
	millisecond: 'h:mm:ss.SSS a',
	second: 'h:mm:ss a',
	minute: 'h:mm a',
	hour: 'hA',
	day: 'MMM D',
	week: 'll',
	month: 'MMM YYYY',
	quarter: '[Q]Q - YYYY',
	year: 'YYYY'
};

core_adapters._date.override(typeof moment === 'function' ? {
	_id: 'moment', // DEBUG ONLY

	formats: function() {
		return FORMATS;
	},

	parse: function(value, format) {
		if (typeof value === 'string' && typeof format === 'string') {
			value = moment(value, format);
		} else if (!(value instanceof moment)) {
			value = moment(value);
		}
		return value.isValid() ? value.valueOf() : null;
	},

	format: function(time, format) {
		return moment(time).format(format);
	},

	add: function(time, amount, unit) {
		return moment(time).add(amount, unit).valueOf();
	},

	diff: function(max, min, unit) {
		return moment(max).diff(moment(min), unit);
	},

	startOf: function(time, unit, weekday) {
		time = moment(time);
		if (unit === 'isoWeek') {
			return time.isoWeekday(weekday).valueOf();
		}
		return time.startOf(unit).valueOf();
	},

	endOf: function(time, unit) {
		return moment(time).endOf(unit).valueOf();
	},

	// DEPRECATIONS

	/**
	 * Provided for backward compatibility with scale.getValueForPixel().
	 * @deprecated since version 2.8.0
	 * @todo remove at version 3
	 * @private
	 */
	_create: function(time) {
		return moment(time);
	},
} : {});

core_defaults._set('global', {
	plugins: {
		filler: {
			propagate: true
		}
	}
});

var mappers = {
	dataset: function(source) {
		var index = source.fill;
		var chart = source.chart;
		var meta = chart.getDatasetMeta(index);
		var visible = meta && chart.isDatasetVisible(index);
		var points = (visible && meta.dataset._children) || [];
		var length = points.length || 0;

		return !length ? null : function(point, i) {
			return (i < length && points[i]._view) || null;
		};
	},

	boundary: function(source) {
		var boundary = source.boundary;
		var x = boundary ? boundary.x : null;
		var y = boundary ? boundary.y : null;

		if (helpers$1.isArray(boundary)) {
			return function(point, i) {
				return boundary[i];
			};
		}

		return function(point) {
			return {
				x: x === null ? point.x : x,
				y: y === null ? point.y : y,
			};
		};
	}
};

// @todo if (fill[0] === '#')
function decodeFill(el, index, count) {
	var model = el._model || {};
	var fill = model.fill;
	var target;

	if (fill === undefined) {
		fill = !!model.backgroundColor;
	}

	if (fill === false || fill === null) {
		return false;
	}

	if (fill === true) {
		return 'origin';
	}

	target = parseFloat(fill, 10);
	if (isFinite(target) && Math.floor(target) === target) {
		if (fill[0] === '-' || fill[0] === '+') {
			target = index + target;
		}

		if (target === index || target < 0 || target >= count) {
			return false;
		}

		return target;
	}

	switch (fill) {
	// compatibility
	case 'bottom':
		return 'start';
	case 'top':
		return 'end';
	case 'zero':
		return 'origin';
	// supported boundaries
	case 'origin':
	case 'start':
	case 'end':
		return fill;
	// invalid fill values
	default:
		return false;
	}
}

function computeLinearBoundary(source) {
	var model = source.el._model || {};
	var scale = source.el._scale || {};
	var fill = source.fill;
	var target = null;
	var horizontal;

	if (isFinite(fill)) {
		return null;
	}

	// Backward compatibility: until v3, we still need to support boundary values set on
	// the model (scaleTop, scaleBottom and scaleZero) because some external plugins and
	// controllers might still use it (e.g. the Smith chart).

	if (fill === 'start') {
		target = model.scaleBottom === undefined ? scale.bottom : model.scaleBottom;
	} else if (fill === 'end') {
		target = model.scaleTop === undefined ? scale.top : model.scaleTop;
	} else if (model.scaleZero !== undefined) {
		target = model.scaleZero;
	} else if (scale.getBasePixel) {
		target = scale.getBasePixel();
	}

	if (target !== undefined && target !== null) {
		if (target.x !== undefined && target.y !== undefined) {
			return target;
		}

		if (helpers$1.isFinite(target)) {
			horizontal = scale.isHorizontal();
			return {
				x: horizontal ? target : null,
				y: horizontal ? null : target
			};
		}
	}

	return null;
}

function computeCircularBoundary(source) {
	var scale = source.el._scale;
	var options = scale.options;
	var length = scale.chart.data.labels.length;
	var fill = source.fill;
	var target = [];
	var start, end, center, i, point;

	if (!length) {
		return null;
	}

	start = options.ticks.reverse ? scale.max : scale.min;
	end = options.ticks.reverse ? scale.min : scale.max;
	center = scale.getPointPositionForValue(0, start);
	for (i = 0; i < length; ++i) {
		point = fill === 'start' || fill === 'end'
			? scale.getPointPositionForValue(i, fill === 'start' ? start : end)
			: scale.getBasePosition(i);
		if (options.gridLines.circular) {
			point.cx = center.x;
			point.cy = center.y;
			point.angle = scale.getIndexAngle(i) - Math.PI / 2;
		}
		target.push(point);
	}
	return target;
}

function computeBoundary(source) {
	var scale = source.el._scale || {};

	if (scale.getPointPositionForValue) {
		return computeCircularBoundary(source);
	}
	return computeLinearBoundary(source);
}

function resolveTarget(sources, index, propagate) {
	var source = sources[index];
	var fill = source.fill;
	var visited = [index];
	var target;

	if (!propagate) {
		return fill;
	}

	while (fill !== false && visited.indexOf(fill) === -1) {
		if (!isFinite(fill)) {
			return fill;
		}

		target = sources[fill];
		if (!target) {
			return false;
		}

		if (target.visible) {
			return fill;
		}

		visited.push(fill);
		fill = target.fill;
	}

	return false;
}

function createMapper(source) {
	var fill = source.fill;
	var type = 'dataset';

	if (fill === false) {
		return null;
	}

	if (!isFinite(fill)) {
		type = 'boundary';
	}

	return mappers[type](source);
}

function isDrawable(point) {
	return point && !point.skip;
}

function drawArea(ctx, curve0, curve1, len0, len1) {
	var i, cx, cy, r;

	if (!len0 || !len1) {
		return;
	}

	// building first area curve (normal)
	ctx.moveTo(curve0[0].x, curve0[0].y);
	for (i = 1; i < len0; ++i) {
		helpers$1.canvas.lineTo(ctx, curve0[i - 1], curve0[i]);
	}

	if (curve1[0].angle !== undefined) {
		cx = curve1[0].cx;
		cy = curve1[0].cy;
		r = Math.sqrt(Math.pow(curve1[0].x - cx, 2) + Math.pow(curve1[0].y - cy, 2));
		for (i = len1 - 1; i > 0; --i) {
			ctx.arc(cx, cy, r, curve1[i].angle, curve1[i - 1].angle, true);
		}
		return;
	}

	// joining the two area curves
	ctx.lineTo(curve1[len1 - 1].x, curve1[len1 - 1].y);

	// building opposite area curve (reverse)
	for (i = len1 - 1; i > 0; --i) {
		helpers$1.canvas.lineTo(ctx, curve1[i], curve1[i - 1], true);
	}
}

function doFill(ctx, points, mapper, view, color, loop) {
	var count = points.length;
	var span = view.spanGaps;
	var curve0 = [];
	var curve1 = [];
	var len0 = 0;
	var len1 = 0;
	var i, ilen, index, p0, p1, d0, d1, loopOffset;

	ctx.beginPath();

	for (i = 0, ilen = count; i < ilen; ++i) {
		index = i % count;
		p0 = points[index]._view;
		p1 = mapper(p0, index, view);
		d0 = isDrawable(p0);
		d1 = isDrawable(p1);

		if (loop && loopOffset === undefined && d0) {
			loopOffset = i + 1;
			ilen = count + loopOffset;
		}

		if (d0 && d1) {
			len0 = curve0.push(p0);
			len1 = curve1.push(p1);
		} else if (len0 && len1) {
			if (!span) {
				drawArea(ctx, curve0, curve1, len0, len1);
				len0 = len1 = 0;
				curve0 = [];
				curve1 = [];
			} else {
				if (d0) {
					curve0.push(p0);
				}
				if (d1) {
					curve1.push(p1);
				}
			}
		}
	}

	drawArea(ctx, curve0, curve1, len0, len1);

	ctx.closePath();
	ctx.fillStyle = color;
	ctx.fill();
}

var plugin_filler = {
	id: 'filler',

	afterDatasetsUpdate: function(chart, options) {
		var count = (chart.data.datasets || []).length;
		var propagate = options.propagate;
		var sources = [];
		var meta, i, el, source;

		for (i = 0; i < count; ++i) {
			meta = chart.getDatasetMeta(i);
			el = meta.dataset;
			source = null;

			if (el && el._model && el instanceof elements.Line) {
				source = {
					visible: chart.isDatasetVisible(i),
					fill: decodeFill(el, i, count),
					chart: chart,
					el: el
				};
			}

			meta.$filler = source;
			sources.push(source);
		}

		for (i = 0; i < count; ++i) {
			source = sources[i];
			if (!source) {
				continue;
			}

			source.fill = resolveTarget(sources, i, propagate);
			source.boundary = computeBoundary(source);
			source.mapper = createMapper(source);
		}
	},

	beforeDatasetsDraw: function(chart) {
		var metasets = chart._getSortedVisibleDatasetMetas();
		var ctx = chart.ctx;
		var meta, i, el, view, points, mapper, color;

		for (i = metasets.length - 1; i >= 0; --i) {
			meta = metasets[i].$filler;

			if (!meta || !meta.visible) {
				continue;
			}

			el = meta.el;
			view = el._view;
			points = el._children || [];
			mapper = meta.mapper;
			color = view.backgroundColor || core_defaults.global.defaultColor;

			if (mapper && color && points.length) {
				helpers$1.canvas.clipArea(ctx, chart.chartArea);
				doFill(ctx, points, mapper, view, color, el._loop);
				helpers$1.canvas.unclipArea(ctx);
			}
		}
	}
};

var getRtlHelper$1 = helpers$1.rtl.getRtlAdapter;
var noop$1 = helpers$1.noop;
var valueOrDefault$e = helpers$1.valueOrDefault;

core_defaults._set('global', {
	legend: {
		display: true,
		position: 'top',
		align: 'center',
		fullWidth: true,
		reverse: false,
		weight: 1000,

		// a callback that will handle
		onClick: function(e, legendItem) {
			var index = legendItem.datasetIndex;
			var ci = this.chart;
			var meta = ci.getDatasetMeta(index);

			// See controller.isDatasetVisible comment
			meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;

			// We hid a dataset ... rerender the chart
			ci.update();
		},

		onHover: null,
		onLeave: null,

		labels: {
			boxWidth: 40,
			padding: 10,
			// Generates labels shown in the legend
			// Valid properties to return:
			// text : text to display
			// fillStyle : fill of coloured box
			// strokeStyle: stroke of coloured box
			// hidden : if this legend item refers to a hidden item
			// lineCap : cap style for line
			// lineDash
			// lineDashOffset :
			// lineJoin :
			// lineWidth :
			generateLabels: function(chart) {
				var datasets = chart.data.datasets;
				var options = chart.options.legend || {};
				var usePointStyle = options.labels && options.labels.usePointStyle;

				return chart._getSortedDatasetMetas().map(function(meta) {
					var style = meta.controller.getStyle(usePointStyle ? 0 : undefined);

					return {
						text: datasets[meta.index].label,
						fillStyle: style.backgroundColor,
						hidden: !chart.isDatasetVisible(meta.index),
						lineCap: style.borderCapStyle,
						lineDash: style.borderDash,
						lineDashOffset: style.borderDashOffset,
						lineJoin: style.borderJoinStyle,
						lineWidth: style.borderWidth,
						strokeStyle: style.borderColor,
						pointStyle: style.pointStyle,
						rotation: style.rotation,

						// Below is extra data used for toggling the datasets
						datasetIndex: meta.index
					};
				}, this);
			}
		}
	},

	legendCallback: function(chart) {
		var list = document.createElement('ul');
		var datasets = chart.data.datasets;
		var i, ilen, listItem, listItemSpan;

		list.setAttribute('class', chart.id + '-legend');

		for (i = 0, ilen = datasets.length; i < ilen; i++) {
			listItem = list.appendChild(document.createElement('li'));
			listItemSpan = listItem.appendChild(document.createElement('span'));
			listItemSpan.style.backgroundColor = datasets[i].backgroundColor;
			if (datasets[i].label) {
				listItem.appendChild(document.createTextNode(datasets[i].label));
			}
		}

		return list.outerHTML;
	}
});

/**
 * Helper function to get the box width based on the usePointStyle option
 * @param {object} labelopts - the label options on the legend
 * @param {number} fontSize - the label font size
 * @return {number} width of the color box area
 */
function getBoxWidth(labelOpts, fontSize) {
	return labelOpts.usePointStyle && labelOpts.boxWidth > fontSize ?
		fontSize :
		labelOpts.boxWidth;
}

/**
 * IMPORTANT: this class is exposed publicly as Chart.Legend, backward compatibility required!
 */
var Legend = core_element.extend({

	initialize: function(config) {
		var me = this;
		helpers$1.extend(me, config);

		// Contains hit boxes for each dataset (in dataset order)
		me.legendHitBoxes = [];

		/**
 		 * @private
 		 */
		me._hoveredItem = null;

		// Are we in doughnut mode which has a different data type
		me.doughnutMode = false;
	},

	// These methods are ordered by lifecycle. Utilities then follow.
	// Any function defined here is inherited by all legend types.
	// Any function can be extended by the legend type

	beforeUpdate: noop$1,
	update: function(maxWidth, maxHeight, margins) {
		var me = this;

		// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
		me.beforeUpdate();

		// Absorb the master measurements
		me.maxWidth = maxWidth;
		me.maxHeight = maxHeight;
		me.margins = margins;

		// Dimensions
		me.beforeSetDimensions();
		me.setDimensions();
		me.afterSetDimensions();
		// Labels
		me.beforeBuildLabels();
		me.buildLabels();
		me.afterBuildLabels();

		// Fit
		me.beforeFit();
		me.fit();
		me.afterFit();
		//
		me.afterUpdate();

		return me.minSize;
	},
	afterUpdate: noop$1,

	//

	beforeSetDimensions: noop$1,
	setDimensions: function() {
		var me = this;
		// Set the unconstrained dimension before label rotation
		if (me.isHorizontal()) {
			// Reset position before calculating rotation
			me.width = me.maxWidth;
			me.left = 0;
			me.right = me.width;
		} else {
			me.height = me.maxHeight;

			// Reset position before calculating rotation
			me.top = 0;
			me.bottom = me.height;
		}

		// Reset padding
		me.paddingLeft = 0;
		me.paddingTop = 0;
		me.paddingRight = 0;
		me.paddingBottom = 0;

		// Reset minSize
		me.minSize = {
			width: 0,
			height: 0
		};
	},
	afterSetDimensions: noop$1,

	//

	beforeBuildLabels: noop$1,
	buildLabels: function() {
		var me = this;
		var labelOpts = me.options.labels || {};
		var legendItems = helpers$1.callback(labelOpts.generateLabels, [me.chart], me) || [];

		if (labelOpts.filter) {
			legendItems = legendItems.filter(function(item) {
				return labelOpts.filter(item, me.chart.data);
			});
		}

		if (me.options.reverse) {
			legendItems.reverse();
		}

		me.legendItems = legendItems;
	},
	afterBuildLabels: noop$1,

	//

	beforeFit: noop$1,
	fit: function() {
		var me = this;
		var opts = me.options;
		var labelOpts = opts.labels;
		var display = opts.display;

		var ctx = me.ctx;

		var labelFont = helpers$1.options._parseFont(labelOpts);
		var fontSize = labelFont.size;

		// Reset hit boxes
		var hitboxes = me.legendHitBoxes = [];

		var minSize = me.minSize;
		var isHorizontal = me.isHorizontal();

		if (isHorizontal) {
			minSize.width = me.maxWidth; // fill all the width
			minSize.height = display ? 10 : 0;
		} else {
			minSize.width = display ? 10 : 0;
			minSize.height = me.maxHeight; // fill all the height
		}

		// Increase sizes here
		if (!display) {
			me.width = minSize.width = me.height = minSize.height = 0;
			return;
		}
		ctx.font = labelFont.string;

		if (isHorizontal) {
			// Labels

			// Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
			var lineWidths = me.lineWidths = [0];
			var totalHeight = 0;

			ctx.textAlign = 'left';
			ctx.textBaseline = 'middle';

			helpers$1.each(me.legendItems, function(legendItem, i) {
				var boxWidth = getBoxWidth(labelOpts, fontSize);
				var width = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;

				if (i === 0 || lineWidths[lineWidths.length - 1] + width + 2 * labelOpts.padding > minSize.width) {
					totalHeight += fontSize + labelOpts.padding;
					lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
				}

				// Store the hitbox width and height here. Final position will be updated in `draw`
				hitboxes[i] = {
					left: 0,
					top: 0,
					width: width,
					height: fontSize
				};

				lineWidths[lineWidths.length - 1] += width + labelOpts.padding;
			});

			minSize.height += totalHeight;

		} else {
			var vPadding = labelOpts.padding;
			var columnWidths = me.columnWidths = [];
			var columnHeights = me.columnHeights = [];
			var totalWidth = labelOpts.padding;
			var currentColWidth = 0;
			var currentColHeight = 0;

			helpers$1.each(me.legendItems, function(legendItem, i) {
				var boxWidth = getBoxWidth(labelOpts, fontSize);
				var itemWidth = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;

				// If too tall, go to new column
				if (i > 0 && currentColHeight + fontSize + 2 * vPadding > minSize.height) {
					totalWidth += currentColWidth + labelOpts.padding;
					columnWidths.push(currentColWidth); // previous column width
					columnHeights.push(currentColHeight);
					currentColWidth = 0;
					currentColHeight = 0;
				}

				// Get max width
				currentColWidth = Math.max(currentColWidth, itemWidth);
				currentColHeight += fontSize + vPadding;

				// Store the hitbox width and height here. Final position will be updated in `draw`
				hitboxes[i] = {
					left: 0,
					top: 0,
					width: itemWidth,
					height: fontSize
				};
			});

			totalWidth += currentColWidth;
			columnWidths.push(currentColWidth);
			columnHeights.push(currentColHeight);
			minSize.width += totalWidth;
		}

		me.width = minSize.width;
		me.height = minSize.height;
	},
	afterFit: noop$1,

	// Shared Methods
	isHorizontal: function() {
		return this.options.position === 'top' || this.options.position === 'bottom';
	},

	// Actually draw the legend on the canvas
	draw: function() {
		var me = this;
		var opts = me.options;
		var labelOpts = opts.labels;
		var globalDefaults = core_defaults.global;
		var defaultColor = globalDefaults.defaultColor;
		var lineDefault = globalDefaults.elements.line;
		var legendHeight = me.height;
		var columnHeights = me.columnHeights;
		var legendWidth = me.width;
		var lineWidths = me.lineWidths;

		if (!opts.display) {
			return;
		}

		var rtlHelper = getRtlHelper$1(opts.rtl, me.left, me.minSize.width);
		var ctx = me.ctx;
		var fontColor = valueOrDefault$e(labelOpts.fontColor, globalDefaults.defaultFontColor);
		var labelFont = helpers$1.options._parseFont(labelOpts);
		var fontSize = labelFont.size;
		var cursor;

		// Canvas setup
		ctx.textAlign = rtlHelper.textAlign('left');
		ctx.textBaseline = 'middle';
		ctx.lineWidth = 0.5;
		ctx.strokeStyle = fontColor; // for strikethrough effect
		ctx.fillStyle = fontColor; // render in correct colour
		ctx.font = labelFont.string;

		var boxWidth = getBoxWidth(labelOpts, fontSize);
		var hitboxes = me.legendHitBoxes;

		// current position
		var drawLegendBox = function(x, y, legendItem) {
			if (isNaN(boxWidth) || boxWidth <= 0) {
				return;
			}

			// Set the ctx for the box
			ctx.save();

			var lineWidth = valueOrDefault$e(legendItem.lineWidth, lineDefault.borderWidth);
			ctx.fillStyle = valueOrDefault$e(legendItem.fillStyle, defaultColor);
			ctx.lineCap = valueOrDefault$e(legendItem.lineCap, lineDefault.borderCapStyle);
			ctx.lineDashOffset = valueOrDefault$e(legendItem.lineDashOffset, lineDefault.borderDashOffset);
			ctx.lineJoin = valueOrDefault$e(legendItem.lineJoin, lineDefault.borderJoinStyle);
			ctx.lineWidth = lineWidth;
			ctx.strokeStyle = valueOrDefault$e(legendItem.strokeStyle, defaultColor);

			if (ctx.setLineDash) {
				// IE 9 and 10 do not support line dash
				ctx.setLineDash(valueOrDefault$e(legendItem.lineDash, lineDefault.borderDash));
			}

			if (labelOpts && labelOpts.usePointStyle) {
				// Recalculate x and y for drawPoint() because its expecting
				// x and y to be center of figure (instead of top left)
				var radius = boxWidth * Math.SQRT2 / 2;
				var centerX = rtlHelper.xPlus(x, boxWidth / 2);
				var centerY = y + fontSize / 2;

				// Draw pointStyle as legend symbol
				helpers$1.canvas.drawPoint(ctx, legendItem.pointStyle, radius, centerX, centerY, legendItem.rotation);
			} else {
				// Draw box as legend symbol
				ctx.fillRect(rtlHelper.leftForLtr(x, boxWidth), y, boxWidth, fontSize);
				if (lineWidth !== 0) {
					ctx.strokeRect(rtlHelper.leftForLtr(x, boxWidth), y, boxWidth, fontSize);
				}
			}

			ctx.restore();
		};

		var fillText = function(x, y, legendItem, textWidth) {
			var halfFontSize = fontSize / 2;
			var xLeft = rtlHelper.xPlus(x, boxWidth + halfFontSize);
			var yMiddle = y + halfFontSize;

			ctx.fillText(legendItem.text, xLeft, yMiddle);

			if (legendItem.hidden) {
				// Strikethrough the text if hidden
				ctx.beginPath();
				ctx.lineWidth = 2;
				ctx.moveTo(xLeft, yMiddle);
				ctx.lineTo(rtlHelper.xPlus(xLeft, textWidth), yMiddle);
				ctx.stroke();
			}
		};

		var alignmentOffset = function(dimension, blockSize) {
			switch (opts.align) {
			case 'start':
				return labelOpts.padding;
			case 'end':
				return dimension - blockSize;
			default: // center
				return (dimension - blockSize + labelOpts.padding) / 2;
			}
		};

		// Horizontal
		var isHorizontal = me.isHorizontal();
		if (isHorizontal) {
			cursor = {
				x: me.left + alignmentOffset(legendWidth, lineWidths[0]),
				y: me.top + labelOpts.padding,
				line: 0
			};
		} else {
			cursor = {
				x: me.left + labelOpts.padding,
				y: me.top + alignmentOffset(legendHeight, columnHeights[0]),
				line: 0
			};
		}

		helpers$1.rtl.overrideTextDirection(me.ctx, opts.textDirection);

		var itemHeight = fontSize + labelOpts.padding;
		helpers$1.each(me.legendItems, function(legendItem, i) {
			var textWidth = ctx.measureText(legendItem.text).width;
			var width = boxWidth + (fontSize / 2) + textWidth;
			var x = cursor.x;
			var y = cursor.y;

			rtlHelper.setWidth(me.minSize.width);

			// Use (me.left + me.minSize.width) and (me.top + me.minSize.height)
			// instead of me.right and me.bottom because me.width and me.height
			// may have been changed since me.minSize was calculated
			if (isHorizontal) {
				if (i > 0 && x + width + labelOpts.padding > me.left + me.minSize.width) {
					y = cursor.y += itemHeight;
					cursor.line++;
					x = cursor.x = me.left + alignmentOffset(legendWidth, lineWidths[cursor.line]);
				}
			} else if (i > 0 && y + itemHeight > me.top + me.minSize.height) {
				x = cursor.x = x + me.columnWidths[cursor.line] + labelOpts.padding;
				cursor.line++;
				y = cursor.y = me.top + alignmentOffset(legendHeight, columnHeights[cursor.line]);
			}

			var realX = rtlHelper.x(x);

			drawLegendBox(realX, y, legendItem);

			hitboxes[i].left = rtlHelper.leftForLtr(realX, hitboxes[i].width);
			hitboxes[i].top = y;

			// Fill the actual label
			fillText(realX, y, legendItem, textWidth);

			if (isHorizontal) {
				cursor.x += width + labelOpts.padding;
			} else {
				cursor.y += itemHeight;
			}
		});

		helpers$1.rtl.restoreTextDirection(me.ctx, opts.textDirection);
	},

	/**
	 * @private
	 */
	_getLegendItemAt: function(x, y) {
		var me = this;
		var i, hitBox, lh;

		if (x >= me.left && x <= me.right && y >= me.top && y <= me.bottom) {
			// See if we are touching one of the dataset boxes
			lh = me.legendHitBoxes;
			for (i = 0; i < lh.length; ++i) {
				hitBox = lh[i];

				if (x >= hitBox.left && x <= hitBox.left + hitBox.width && y >= hitBox.top && y <= hitBox.top + hitBox.height) {
					// Touching an element
					return me.legendItems[i];
				}
			}
		}

		return null;
	},

	/**
	 * Handle an event
	 * @private
	 * @param {IEvent} event - The event to handle
	 */
	handleEvent: function(e) {
		var me = this;
		var opts = me.options;
		var type = e.type === 'mouseup' ? 'click' : e.type;
		var hoveredItem;

		if (type === 'mousemove') {
			if (!opts.onHover && !opts.onLeave) {
				return;
			}
		} else if (type === 'click') {
			if (!opts.onClick) {
				return;
			}
		} else {
			return;
		}

		// Chart event already has relative position in it
		hoveredItem = me._getLegendItemAt(e.x, e.y);

		if (type === 'click') {
			if (hoveredItem && opts.onClick) {
				// use e.native for backwards compatibility
				opts.onClick.call(me, e.native, hoveredItem);
			}
		} else {
			if (opts.onLeave && hoveredItem !== me._hoveredItem) {
				if (me._hoveredItem) {
					opts.onLeave.call(me, e.native, me._hoveredItem);
				}
				me._hoveredItem = hoveredItem;
			}

			if (opts.onHover && hoveredItem) {
				// use e.native for backwards compatibility
				opts.onHover.call(me, e.native, hoveredItem);
			}
		}
	}
});

function createNewLegendAndAttach(chart, legendOpts) {
	var legend = new Legend({
		ctx: chart.ctx,
		options: legendOpts,
		chart: chart
	});

	core_layouts.configure(chart, legend, legendOpts);
	core_layouts.addBox(chart, legend);
	chart.legend = legend;
}

var plugin_legend = {
	id: 'legend',

	/**
	 * Backward compatibility: since 2.1.5, the legend is registered as a plugin, making
	 * Chart.Legend obsolete. To avoid a breaking change, we export the Legend as part of
	 * the plugin, which one will be re-exposed in the chart.js file.
	 * https://github.com/chartjs/Chart.js/pull/2640
	 * @private
	 */
	_element: Legend,

	beforeInit: function(chart) {
		var legendOpts = chart.options.legend;

		if (legendOpts) {
			createNewLegendAndAttach(chart, legendOpts);
		}
	},

	beforeUpdate: function(chart) {
		var legendOpts = chart.options.legend;
		var legend = chart.legend;

		if (legendOpts) {
			helpers$1.mergeIf(legendOpts, core_defaults.global.legend);

			if (legend) {
				core_layouts.configure(chart, legend, legendOpts);
				legend.options = legendOpts;
			} else {
				createNewLegendAndAttach(chart, legendOpts);
			}
		} else if (legend) {
			core_layouts.removeBox(chart, legend);
			delete chart.legend;
		}
	},

	afterEvent: function(chart, e) {
		var legend = chart.legend;
		if (legend) {
			legend.handleEvent(e);
		}
	}
};

var noop$2 = helpers$1.noop;

core_defaults._set('global', {
	title: {
		display: false,
		fontStyle: 'bold',
		fullWidth: true,
		padding: 10,
		position: 'top',
		text: '',
		weight: 2000         // by default greater than legend (1000) to be above
	}
});

/**
 * IMPORTANT: this class is exposed publicly as Chart.Legend, backward compatibility required!
 */
var Title = core_element.extend({
	initialize: function(config) {
		var me = this;
		helpers$1.extend(me, config);

		// Contains hit boxes for each dataset (in dataset order)
		me.legendHitBoxes = [];
	},

	// These methods are ordered by lifecycle. Utilities then follow.

	beforeUpdate: noop$2,
	update: function(maxWidth, maxHeight, margins) {
		var me = this;

		// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
		me.beforeUpdate();

		// Absorb the master measurements
		me.maxWidth = maxWidth;
		me.maxHeight = maxHeight;
		me.margins = margins;

		// Dimensions
		me.beforeSetDimensions();
		me.setDimensions();
		me.afterSetDimensions();
		// Labels
		me.beforeBuildLabels();
		me.buildLabels();
		me.afterBuildLabels();

		// Fit
		me.beforeFit();
		me.fit();
		me.afterFit();
		//
		me.afterUpdate();

		return me.minSize;

	},
	afterUpdate: noop$2,

	//

	beforeSetDimensions: noop$2,
	setDimensions: function() {
		var me = this;
		// Set the unconstrained dimension before label rotation
		if (me.isHorizontal()) {
			// Reset position before calculating rotation
			me.width = me.maxWidth;
			me.left = 0;
			me.right = me.width;
		} else {
			me.height = me.maxHeight;

			// Reset position before calculating rotation
			me.top = 0;
			me.bottom = me.height;
		}

		// Reset padding
		me.paddingLeft = 0;
		me.paddingTop = 0;
		me.paddingRight = 0;
		me.paddingBottom = 0;

		// Reset minSize
		me.minSize = {
			width: 0,
			height: 0
		};
	},
	afterSetDimensions: noop$2,

	//

	beforeBuildLabels: noop$2,
	buildLabels: noop$2,
	afterBuildLabels: noop$2,

	//

	beforeFit: noop$2,
	fit: function() {
		var me = this;
		var opts = me.options;
		var minSize = me.minSize = {};
		var isHorizontal = me.isHorizontal();
		var lineCount, textSize;

		if (!opts.display) {
			me.width = minSize.width = me.height = minSize.height = 0;
			return;
		}

		lineCount = helpers$1.isArray(opts.text) ? opts.text.length : 1;
		textSize = lineCount * helpers$1.options._parseFont(opts).lineHeight + opts.padding * 2;

		me.width = minSize.width = isHorizontal ? me.maxWidth : textSize;
		me.height = minSize.height = isHorizontal ? textSize : me.maxHeight;
	},
	afterFit: noop$2,

	// Shared Methods
	isHorizontal: function() {
		var pos = this.options.position;
		return pos === 'top' || pos === 'bottom';
	},

	// Actually draw the title block on the canvas
	draw: function() {
		var me = this;
		var ctx = me.ctx;
		var opts = me.options;

		if (!opts.display) {
			return;
		}

		var fontOpts = helpers$1.options._parseFont(opts);
		var lineHeight = fontOpts.lineHeight;
		var offset = lineHeight / 2 + opts.padding;
		var rotation = 0;
		var top = me.top;
		var left = me.left;
		var bottom = me.bottom;
		var right = me.right;
		var maxWidth, titleX, titleY;

		ctx.fillStyle = helpers$1.valueOrDefault(opts.fontColor, core_defaults.global.defaultFontColor); // render in correct colour
		ctx.font = fontOpts.string;

		// Horizontal
		if (me.isHorizontal()) {
			titleX = left + ((right - left) / 2); // midpoint of the width
			titleY = top + offset;
			maxWidth = right - left;
		} else {
			titleX = opts.position === 'left' ? left + offset : right - offset;
			titleY = top + ((bottom - top) / 2);
			maxWidth = bottom - top;
			rotation = Math.PI * (opts.position === 'left' ? -0.5 : 0.5);
		}

		ctx.save();
		ctx.translate(titleX, titleY);
		ctx.rotate(rotation);
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';

		var text = opts.text;
		if (helpers$1.isArray(text)) {
			var y = 0;
			for (var i = 0; i < text.length; ++i) {
				ctx.fillText(text[i], 0, y, maxWidth);
				y += lineHeight;
			}
		} else {
			ctx.fillText(text, 0, 0, maxWidth);
		}

		ctx.restore();
	}
});

function createNewTitleBlockAndAttach(chart, titleOpts) {
	var title = new Title({
		ctx: chart.ctx,
		options: titleOpts,
		chart: chart
	});

	core_layouts.configure(chart, title, titleOpts);
	core_layouts.addBox(chart, title);
	chart.titleBlock = title;
}

var plugin_title = {
	id: 'title',

	/**
	 * Backward compatibility: since 2.1.5, the title is registered as a plugin, making
	 * Chart.Title obsolete. To avoid a breaking change, we export the Title as part of
	 * the plugin, which one will be re-exposed in the chart.js file.
	 * https://github.com/chartjs/Chart.js/pull/2640
	 * @private
	 */
	_element: Title,

	beforeInit: function(chart) {
		var titleOpts = chart.options.title;

		if (titleOpts) {
			createNewTitleBlockAndAttach(chart, titleOpts);
		}
	},

	beforeUpdate: function(chart) {
		var titleOpts = chart.options.title;
		var titleBlock = chart.titleBlock;

		if (titleOpts) {
			helpers$1.mergeIf(titleOpts, core_defaults.global.title);

			if (titleBlock) {
				core_layouts.configure(chart, titleBlock, titleOpts);
				titleBlock.options = titleOpts;
			} else {
				createNewTitleBlockAndAttach(chart, titleOpts);
			}
		} else if (titleBlock) {
			core_layouts.removeBox(chart, titleBlock);
			delete chart.titleBlock;
		}
	}
};

var plugins = {};
var filler = plugin_filler;
var legend = plugin_legend;
var title = plugin_title;
plugins.filler = filler;
plugins.legend = legend;
plugins.title = title;

/**
 * @namespace Chart
 */


core_controller.helpers = helpers$1;

// @todo dispatch these helpers into appropriated helpers/helpers.* file and write unit tests!
core_helpers();

core_controller._adapters = core_adapters;
core_controller.Animation = core_animation;
core_controller.animationService = core_animations;
core_controller.controllers = controllers;
core_controller.DatasetController = core_datasetController;
core_controller.defaults = core_defaults;
core_controller.Element = core_element;
core_controller.elements = elements;
core_controller.Interaction = core_interaction;
core_controller.layouts = core_layouts;
core_controller.platform = platform;
core_controller.plugins = core_plugins;
core_controller.Scale = core_scale;
core_controller.scaleService = core_scaleService;
core_controller.Ticks = core_ticks;
core_controller.Tooltip = core_tooltip;

// Register built-in scales

core_controller.helpers.each(scales, function(scale, type) {
	core_controller.scaleService.registerScaleType(type, scale, scale._defaults);
});

// Load to register built-in adapters (as side effects)


// Loading built-in plugins

for (var k in plugins) {
	if (plugins.hasOwnProperty(k)) {
		core_controller.plugins.register(plugins[k]);
	}
}

core_controller.platform.initialize();

var src = core_controller;
if (typeof window !== 'undefined') {
	window.Chart = core_controller;
}

// DEPRECATIONS

/**
 * Provided for backward compatibility, not available anymore
 * @namespace Chart.Chart
 * @deprecated since version 2.8.0
 * @todo remove at version 3
 * @private
 */
core_controller.Chart = core_controller;

/**
 * Provided for backward compatibility, not available anymore
 * @namespace Chart.Legend
 * @deprecated since version 2.1.5
 * @todo remove at version 3
 * @private
 */
core_controller.Legend = plugins.legend._element;

/**
 * Provided for backward compatibility, not available anymore
 * @namespace Chart.Title
 * @deprecated since version 2.1.5
 * @todo remove at version 3
 * @private
 */
core_controller.Title = plugins.title._element;

/**
 * Provided for backward compatibility, use Chart.plugins instead
 * @namespace Chart.pluginService
 * @deprecated since version 2.1.5
 * @todo remove at version 3
 * @private
 */
core_controller.pluginService = core_controller.plugins;

/**
 * Provided for backward compatibility, inheriting from Chart.PlugingBase has no
 * effect, instead simply create/register plugins via plain JavaScript objects.
 * @interface Chart.PluginBase
 * @deprecated since version 2.5.0
 * @todo remove at version 3
 * @private
 */
core_controller.PluginBase = core_controller.Element.extend({});

/**
 * Provided for backward compatibility, use Chart.helpers.canvas instead.
 * @namespace Chart.canvasHelpers
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 * @private
 */
core_controller.canvasHelpers = core_controller.helpers.canvas;

/**
 * Provided for backward compatibility, use Chart.layouts instead.
 * @namespace Chart.layoutService
 * @deprecated since version 2.7.3
 * @todo remove at version 3
 * @private
 */
core_controller.layoutService = core_controller.layouts;

/**
 * Provided for backward compatibility, not available anymore.
 * @namespace Chart.LinearScaleBase
 * @deprecated since version 2.8
 * @todo remove at version 3
 * @private
 */
core_controller.LinearScaleBase = scale_linearbase;

/**
 * Provided for backward compatibility, instead we should create a new Chart
 * by setting the type in the config (`new Chart(id, {type: '{chart-type}'}`).
 * @deprecated since version 2.8.0
 * @todo remove at version 3
 */
core_controller.helpers.each(
	[
		'Bar',
		'Bubble',
		'Doughnut',
		'Line',
		'PolarArea',
		'Radar',
		'Scatter'
	],
	function(klass) {
		core_controller[klass] = function(ctx, cfg) {
			return new core_controller(ctx, core_controller.helpers.merge(cfg || {}, {
				type: klass.charAt(0).toLowerCase() + klass.slice(1)
			}));
		};
	}
);

return src;

})));


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard-default/dashboard-default.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard-default/dashboard-default.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <!-- card1 start -->\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <div class=\"card widget-card-1\">\r\n      <div class=\"card-block-small\">\r\n        <i class=\"ti-files bg-c-blue card1-icon\"></i>\r\n        <span class=\"text-c-blue f-w-600\">All Quizzes</span>\r\n        <h4>4210</h4>\r\n        <div>\r\n        <span class=\"f-left m-t-10 text-muted\">\r\n          <i class=\"text-c-blue f-16 icofont icofont-rounded-double-right m-r-10\"></i>Know more\r\n        </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- card1 end -->\r\n  <!-- card2 start -->\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <div class=\"card widget-card-1\">\r\n      <div class=\"card-block-small\">\r\n        <i class=\"ti-book bg-c-pink card1-icon\"></i>\r\n        <span class=\"text-c-pink f-w-600\">All Questions</span>\r\n        <h4>589</h4>\r\n        <div>\r\n          <span class=\"f-left m-t-10 text-muted\">\r\n            <i class=\"text-c-pink f-16 icofont icofont-rounded-double-right m-r-10\"></i>Know more\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- card2 end -->\r\n  <!-- card3 start -->\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <div class=\"card widget-card-1\">\r\n      <div class=\"card-block-small\">\r\n        <i class=\"ti-user bg-c-green card1-icon\"></i>\r\n        <span class=\"text-c-green f-w-600\">Total Users</span>\r\n        <h4>107</h4>\r\n        <div>\r\n          <span class=\"f-left m-t-10 text-muted\">\r\n            <i class=\"text-c-green f-16 icofont icofont-rounded-double-right m-r-10\"></i>Know More\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- card3 end -->\r\n  <!-- card4 start -->\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <div class=\"card widget-card-1\">\r\n      <div class=\"card-block-small\">\r\n        <i class=\"icofont icofont-social-twitter bg-c-yellow card1-icon\"></i>\r\n        <span class=\"text-c-yellow f-w-600\">Followers</span>\r\n        <h4>+562</h4>\r\n        <div>\r\n          <span class=\"f-left m-t-10 text-muted\">\r\n            <i class=\"text-c-yellow f-16 icofont icofont-refresh m-r-10\"></i>Just update\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- card4 end -->\r\n\r\n  <!-- Statistics Start -->\r\n  <div class=\"col-md-12 col-xl-8\">\r\n    <app-card [title]=\"'Statistics'\" [classHeader]=\"true\">\r\n      <span class=\"code-header\"><span class=\"text-muted\">Get 15% Off on <a href=\"https://www.amcharts.com/\" target=\"_blank\">amCharts</a> licences. Use code \"codedthemes\" and get the discount.</span></span>\r\n      <div id=\"line-example\" class=\"line-example\">\r\n        <div id=\"statistics-chart\" style=\"height:300px;\"></div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-12 col-xl-4\">\r\n    <div class=\"card card-blue total-card\">\r\n      <div class=\"card-block\">\r\n        <div class=\"text-left\">\r\n          <h4>4000</h4>\r\n          <p class=\"m-0\">Total Quizzes</p>\r\n        </div>\r\n        <span class=\"label bg-c-blue value-badges\">12%</span>\r\n      </div>\r\n      <chart [type]=\"'line'\" [data]=\"totalValueGraphData1\" [options]=\"totalValueGraphOption\" style=\"width: 100%; height: 100px;\"></chart>\r\n    </div>\r\n\r\n    <div class=\"card card-pink total-card\">\r\n      <div class=\"card-block\">\r\n        <div class=\"text-left\">\r\n          <h4>489</h4>\r\n          <p class=\"m-0\">Total Comment</p>\r\n        </div>\r\n        <span class=\"label bg-c-pink value-badges\">15%</span>\r\n      </div>\r\n      <chart [type]=\"'line'\" [data]=\"totalValueGraphData2\" [options]=\"totalValueGraphOption\" style=\"width: 100%; height: 100px;\"></chart>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- Statistics End -->\r\n\r\n  <!-- Statistics card start -->\r\n  <div class=\"col-md-12 col-xl-4\">\r\n    <div class=\"card widget-statstic-card\">\r\n      <div class=\"card-header\">\r\n        <div class=\"card-header-left\">\r\n          <h5>Statistics</h5>\r\n          <p class=\"p-t-10 m-b-0 text-c-blue\">Compared to last week</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-block\">\r\n        <i class=\"icofont icofont-presentation-alt st-icon bg-c-blue\"></i>\r\n\r\n        <div class=\"text-left\">\r\n          <h3 class=\"d-inline-block\">5,456</h3>\r\n          <i class=\"icofont icofont-long-arrow-up f-30 text-c-green\"></i>\r\n          <span class=\"f-right\">23%</span>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Statistics card end -->\r\n  <!-- Statistics card start -->\r\n  <div class=\"col-md-6 col-xl-4\">\r\n    <div class=\"card widget-statstic-card\">\r\n      <div class=\"card-header\">\r\n        <div class=\"card-header-left\">\r\n          <h5>Unique visitor</h5>\r\n          <p class=\"p-t-10 m-b-0 text-c-pink\">55% from last 28 hours</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-block\">\r\n        <i class=\"icofont icofont-users-social st-icon bg-c-pink txt-lite-color\"></i>\r\n\r\n        <div class=\"text-left\">\r\n          <h3 class=\"d-inline-block\">3,874</h3>\r\n          <i class=\"icofont icofont-long-arrow-down text-c-pink f-30 \"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Statistics card end -->\r\n  <!-- Statistics card start -->\r\n  <div class=\"col-md-6 col-xl-4\">\r\n    <div class=\"card widget-statstic-card\">\r\n      <div class=\"card-header\">\r\n        <div class=\"card-header-left\">\r\n          <h5>New User</h5>\r\n          <p class=\"p-t-10 m-b-0 text-c-yellow\">14% From last month</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-block\">\r\n        <i class=\"ti-user st-icon bg-c-yellow\"></i>\r\n\r\n        <div class=\"text-left\">\r\n          <h3 class=\"d-inline-block\">56</h3>\r\n          <i class=\"icofont icofont-long-arrow-up text-c-green f-30 \"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Statistics card end -->\r\n\r\n  <!-- email Sent Start -->\r\n  <!-- <div class=\"col-md-12\">\r\n    <app-card [title]=\"'Email sent'\" [cardClass]=\"'email-sent-card'\" [classHeader]=\"true\">\r\n      <span class=\"code-header\"><span class=\"text-muted\">Get 15% Off on <a href=\"https://www.amcharts.com/\" target=\"_blank\">amCharts</a> licences. Use code \"codedthemes\" and get the discount.</span></span>\r\n      <div id=\"email-sent\" style=\"max-width:100%;height:400px;\"></div>\r\n    </app-card>\r\n  </div> -->\r\n  <!-- email Sent End -->\r\n\r\n  <!-- data widget start -->\r\n <!--  <div class=\"col-md-12 col-xl-6\">\r\n    <app-card [title]=\"'Time spent : project &amp; task'\" [cardClass]=\"'project-task'\" [blockClass]=\"'p-b-10'\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-hover\">\r\n          <thead>\r\n          <tr>\r\n            <th>Project & Task</th>\r\n            <th>Time Spents</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <td>\r\n              <div class=\"task-contain\">\r\n                <h6 class=\"bg-c-blue d-inline-block text-center\">U</h6>\r\n                <p class=\"d-inline-block m-l-20\">UI Design</p>\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <p class=\"d-inline-block m-r-20\">4 : 36</p>\r\n              <div class=\"progress d-inline-block\">\r\n                <div class=\"progress-bar bg-c-blue\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:80%\">\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n              <div class=\"task-contain\">\r\n                <h6 class=\"bg-c-pink d-inline-block text-center\">R</h6>\r\n                <p class=\"d-inline-block m-l-20\">Redesign Android App</p>\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <p class=\"d-inline-block m-r-20\">4 : 36</p>\r\n              <div class=\"progress d-inline-block\">\r\n                <div class=\"progress-bar bg-c-pink\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:60%\">\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n              <div class=\"task-contain\">\r\n                <h6 class=\"bg-c-yellow d-inline-block text-center\">L</h6>\r\n                <p class=\"d-inline-block m-l-20\">Logo Design</p>\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <p class=\"d-inline-block m-r-20\">4 : 36</p>\r\n              <div class=\"progress d-inline-block\">\r\n                <div class=\"progress-bar bg-c-yellow\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:50%\">\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n              <div class=\"task-contain\">\r\n                <h6 class=\"bg-c-green d-inline-block text-center\">A</h6>\r\n                <p class=\"d-inline-block m-l-20\">Appestia landing Page</p>\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <p class=\"d-inline-block m-r-20\">4 : 36</p>\r\n              <div class=\"progress d-inline-block\">\r\n                <div class=\"progress-bar bg-c-green\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:50%\">\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n              <div class=\"task-contain\">\r\n                <h6 class=\"bg-c-blue d-inline-block text-center\">L</h6>\r\n                <p class=\"d-inline-block m-l-20\">Logo Design</p>\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <p class=\"d-inline-block m-r-20\">4 : 36</p>\r\n              <div class=\"progress d-inline-block\">\r\n                <div class=\"progress-bar bg-c-blue\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:50%\">\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-12 col-xl-6\">\r\n    <app-card [title]=\"'To do list'\" [cardClass]=\"'add-task-card'\" [blockClass]=\"'p-b-0'\">\r\n      <div class=\"to-do-list\">\r\n        <div class=\"checkbox-fade fade-in-primary d-block\">\r\n          <label class=\"check-task d-block\">\r\n            <input type=\"checkbox\" value=\"\" (change)=\"onTaskStatusChange($event)\">\r\n            <span class=\"cr\">\r\n                <i class=\"cr-icon icofont icofont-ui-check txt-default\"></i>\r\n            </span>\r\n            <span><h6>Schedule Meeting with Compnes <span class=\"label bg-c-green m-l-10 f-10\">2 week</span></h6></span>\r\n            <div class=\"task-card-img m-l-40\">\r\n              <a href=\"javascript:\"><img src=\"assets/images/avatar-1.jpg\" placement=\"top\" ngbTooltip=\"Lary Doe\" class=\"img-40\"></a>\r\n              <a href=\"javascript:\"><img src=\"assets/images/avatar-2.jpg\" placement=\"top\" ngbTooltip=\"Alia\" class=\"img-40 m-l-10\"></a>\r\n            </div>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"to-do-list\">\r\n        <div class=\"checkbox-fade fade-in-primary d-block\">\r\n          <label class=\"check-task d-block\">\r\n            <input type=\"checkbox\" value=\"\" (change)=\"onTaskStatusChange($event)\">\r\n            <span class=\"cr\">\r\n                <i class=\"cr-icon icofont icofont-ui-check txt-default\"></i>\r\n            </span>\r\n            <span><h6>Meeting With HOD's and borad</h6><p class=\"text-muted m-l-30\">23 january 2003</p></span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"to-do-list\">\r\n        <div class=\"checkbox-fade fade-in-primary d-block\">\r\n          <label class=\"check-task d-block\">\r\n            <input type=\"checkbox\" value=\"\" (change)=\"onTaskStatusChange($event)\">\r\n            <span class=\"cr\">\r\n                <i class=\"cr-icon icofont icofont-ui-check txt-default\"></i>\r\n            </span>\r\n            <span><h6>Create template, admin with responsive<span class=\"label bg-c-pink m-l-10\">2 week</span></h6></span>\r\n            <div class=\"task-card-img m-l-40\">\r\n              <a href=\"javascript:\"><img src=\"assets/images/avatar-2.jpg\" placement=\"top\" ngbTooltip=\"Alia\" class=\"img-40\"></a>\r\n              <a href=\"javascript:\"><img src=\"assets/images/avatar-3.jpg\" placement=\"top\" ngbTooltip=\"Suzen\" class=\"img-40 m-l-10\"></a>\r\n              <a href=\"javascript:\"><img src=\"assets/images/avatar-4.jpg\" placement=\"top\" ngbTooltip=\"Lary Doe\" class=\"img-40 m-l-10\"></a>\r\n              <a href=\"javascript:\"><img src=\"assets/images/avatar-2.jpg\" placement=\"top\" ngbTooltip=\"Josephin Doe\" class=\"img-40 m-l-10\"></a>\r\n            </div>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"to-do-list\">\r\n        <div class=\"checkbox-fade fade-in-primary d-block\">\r\n          <label class=\"check-task d-block\">\r\n            <input type=\"checkbox\" value=\"\" (change)=\"onTaskStatusChange($event)\">\r\n            <span class=\"cr\">\r\n                <i class=\"cr-icon icofont icofont-ui-check txt-default\"></i>\r\n            </span>\r\n            <span><h6>Meeting With HOD's and borad</h6>\r\n            <p class=\"text-muted m-l-30\">23 january 2003</p></span>\r\n            <div class=\"task-card-img m-l-40\">\r\n              <a href=\"javascript:\"><img src=\"assets/images/avatar-2.jpg\" placement=\"top\" ngbTooltip=\"Lary Doe\" class=\"img-40\"></a>\r\n              <a href=\"javascript:\"><img src=\"assets/images/avatar-3.jpg\" placement=\"top\" ngbTooltip=\"Alia\" class=\"img-40 m-l-10\"></a>\r\n              <a href=\"javascript:\"><img src=\"assets/images/avatar-2.jpg\" placement=\"top\" ngbTooltip=\"Josephin Doe\" class=\"img-40 m-l-10\"></a>\r\n            </div>\r\n          </label>\r\n        </div>\r\n      </div>\r\n\r\n    </app-card>\r\n  </div> -->\r\n  <!-- data widget End -->\r\n\r\n  <!-- weather Start -->\r\n <!--  <div class=\"col-md-6 col-xl-4\">\r\n    <div class=\"card \">\r\n      <div class=\"card-block weather-update\">\r\n        <h4 class=\"text-center f-w-600 p-b-20\">Weather Update</h4>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12 text-center\">\r\n            <svg version=\"1.1\" id=\"cloudSun\" style=\"height:160px;width:200px\" class=\"climacon climacon_cloudSun\" viewBox=\"15 15 70 70\">\r\n              <clipPath id=\"cloudFillClip\">\r\n                <path d=\"M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z\"/>\r\n              </clipPath>\r\n              <clipPath id=\"sunCloudFillClip\">\r\n                <path d=\"M15,15v70h70V15H15z M57.945,49.641c-4.417,0-8-3.582-8-7.999c0-4.418,3.582-7.999,8-7.999s7.998,3.581,7.998,7.999C65.943,46.059,62.362,49.641,57.945,49.641z\"/>\r\n              </clipPath>\r\n              <g class=\"climacon_iconWrap climacon_cloudSun-iconWrap\">\r\n                <g clip-path=\"url(#cloudFillClip)\">\r\n                  <g class=\"climacon_componentWrap climacon_componentWrap-sun climacon_componentWrap-sun_cloud\"  >\r\n                    <g class=\"climacon_componentWrap climacon_componentWrap_sunSpoke\">\r\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-orth\" d=\"M80.029,43.611h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S81.135,43.611,80.029,43.611z\"/>\r\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M72.174,30.3c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L72.174,30.3z\"/>\r\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M58.033,25.614c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C60.033,24.718,59.135,25.614,58.033,25.614z\"/>\r\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M43.892,30.3l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C45.939,31.081,44.673,31.081,43.892,30.3z\"/>\r\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M42.033,41.612c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C41.139,39.612,42.033,40.509,42.033,41.612z\"/>\r\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M43.892,52.925c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L43.892,52.925z\"/>\r\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M58.033,57.61c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C56.033,58.505,56.928,57.61,58.033,57.61z\"/>\r\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M72.174,52.925l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C70.125,52.144,71.391,52.144,72.174,52.925z\"/>\r\n                    </g>\r\n                    <g class=\"climacon_wrapperComponent climacon_wrapperComponent-sunBody\" clip-path=\"url(#sunCloudFillClip)\">\r\n                      <circle class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunBody\" cx=\"58.033\" cy=\"41.612\" r=\"11.999\"/>\r\n                    </g>\r\n                  </g>\r\n                </g>\r\n                <g class=\"climacon_wrapperComponent climacon_wrapperComponent-cloud\" clip-path=\"url(#cloudFillClip)\">\r\n                  <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_cloud\" d=\"M44.033,65.641c-8.836,0-15.999-7.162-15.999-15.998c0-8.835,7.163-15.998,15.999-15.998c6.006,0,11.233,3.312,13.969,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.26,65.641,47.23,65.641,44.033,65.641z\"/>\r\n                </g>\r\n              </g>\r\n            </svg>\r\n          </div>\r\n          <div class=\"col-md-12 text-center\">\r\n            <h2 class=\"p-b-30 f-w-600\">23 ° C</h2>\r\n          </div>\r\n        </div>\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n  <!-- weather End -->\r\n\r\n  <!-- browser Start -->\r\n <!--  <div class=\"col-md-6 col-xl-4\">\r\n    <app-card [title]=\"'Browser Stats'\">\r\n      <div class=\"browser-card p-b-15 \">\r\n        <p class=\"d-inline-block m-0 \">Google Crome</p>\r\n        <button class=\"btn bg-c-blue btn-round float-right btn-browser \">50%</button>\r\n      </div>\r\n      <div class=\"browser-card b-t-default p-t-15 p-b-15 \">\r\n        <p class=\"d-inline-block m-0 \">Mozila Firefox</p>\r\n        <button class=\"btn bg-c-pink btn-round float-right btn-browser \">12%</button>\r\n      </div>\r\n      <div class=\"browser-card b-t-default p-t-15 p-b-15 \">\r\n        <p class=\"d-inline-block m-0 \">Apple Safari</p>\r\n        <button class=\"btn bg-c-yellow btn-round float-right btn-browser \">23%</button>\r\n      </div>\r\n      <div class=\"browser-card b-t-default p-t-15 p-b-15 \">\r\n        <p class=\"d-inline-block m-0 \">Internet Explorer</p>\r\n        <button class=\"btn bg-c-green btn-round float-right btn-browser \">17%</button>\r\n      </div>\r\n      <div class=\"browser-card b-t-default p-t-15 p-b-15 \">\r\n        <p class=\"d-inline-block m-0 \">Opera Mini</p>\r\n        <button class=\"btn bg-c-yellow btn-round float-right btn-browser \">07%</button>\r\n      </div>\r\n      <div class=\"browser-card b-t-default p-t-15\">\r\n        <p class=\"d-inline-block m-0 \">Microsoft Edge</p>\r\n        <button class=\"btn bg-c-yellow btn-round float-right btn-browser \">28%</button>\r\n      </div>\r\n    </app-card>\r\n  </div> -->\r\n  <!-- browser End -->\r\n\r\n  <!-- profile Start -->\r\n  <!-- <div class=\"col-md-12 col-xl-4\">\r\n    <div class=\"card card-contact-box \">\r\n      <div class=\"card-block \">\r\n        <div class=\"card-contain text-center \">\r\n          <img src=\"assets/images/avatar-1.jpg\" alt=\" \">\r\n          <h6 class=\"f-w-600 f-20 p-b-5 m-0 p-t-15 \">Gregory Johan</h6>\r\n          <a href=\"javascript:\">gregory.johan@demo.com</a>\r\n          <p class=\"text-muted p-b-25 m-0 p-t-5 \">Software Developer</p>\r\n          <div class=\"contain-card p-t-30 p-b-10 \">\r\n            <a href=\"javascript:\"><img src=\"assets/images/avatar-2.jpg\" placement=\"top\" ngbTooltip=\"Alia\" class=\"img-40\"></a>\r\n            <a href=\"javascript:\"><img src=\"assets/images/avatar-3.jpg\" placement=\"top\" ngbTooltip=\"Suzen\" class=\"img-40 m-l-5\"></a>\r\n            <a href=\"javascript:\"><img src=\"assets/images/avatar-4.jpg\" placement=\"top\" ngbTooltip=\"Lary Doe\" class=\"img-40 m-l-5\"></a>\r\n            <a href=\"javascript:\"><img src=\"assets/images/avatar-2.jpg\" placement=\"top\" ngbTooltip=\"Josephin Doe\" class=\"img-40 m-l-5\"></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"b-t-default\">\r\n        <div class=\"row m-0\">\r\n          <div class=\"col-6 f-btn text-center b-r-default p-t-15 p-b-15 \">\r\n            <a href=\"javascript:\">\r\n              <i class=\"icofont icofont-ui-message text-muted m-r-10 \"></i>\r\n              <p class=\"text-muted m-0 text-uppercase d-inline-block \">Messages</p>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-6 f-btn text-center p-t-15 p-b-15 \">\r\n            <a href=\"javascript:\">\r\n              <i class=\"icofont icofont-user text-muted m-r-10 \"></i>\r\n              <p class=\"text-muted m-0 text-uppercase d-inline-block \">Profile</p>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n  <!-- profile End -->\r\n\r\n  <!-- project overview Start -->\r\n<!--   <div class=\"col-md-12 col-xl-8\">\r\n    <app-card [title]=\"'Recent Comments'\" [blockClass]=\"'p-0'\">\r\n      <div class=\"card-comment \">\r\n        <div class=\"card-block-small\">\r\n          <img class=\"img-radius img-50\" src=\"assets/images/avatar-1.jpg\" alt=\"user-1\">\r\n          <div class=\"comment-desc\">\r\n            <h6>Luciano Durk</h6>\r\n            <p class=\"text-muted \">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>\r\n            <div class=\"comment-btn\">\r\n              <button class=\"btn bg-c-blue btn-round btn-comment \">Action</button>\r\n            </div>\r\n            <div class=\"date\">\r\n              <i>04 October 2015</i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-comment \">\r\n        <div class=\"card-block-small\">\r\n          <img class=\"img-radius img-50\" src=\"assets/images/avatar-2.jpg\" alt=\"user-4\">\r\n          <div class=\"comment-desc\">\r\n            <h6>John Doe</h6>\r\n            <p class=\"text-muted \">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>\r\n            <div class=\"comment-btn\">\r\n              <button class=\"btn bg-c-pink btn-round btn-comment \">Approved</button>\r\n            </div>\r\n            <div class=\"date\">\r\n              <i>16 December 2015</i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-comment \">\r\n        <div class=\"card-block-small\">\r\n          <img class=\"img-radius img-50\" src=\"assets/images/avatar-3.jpg\" alt=\"user-2\">\r\n          <div class=\"comment-desc\">\r\n            <h6>Planner Board</h6>\r\n            <p class=\"text-muted \">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>\r\n            <div class=\"comment-btn\">\r\n              <button class=\"btn bg-c-green btn-round btn-comment \">Rejected</button>\r\n            </div>\r\n            <div class=\"date\">\r\n              <i>12 Saptember 2015</i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-comment \">\r\n        <div class=\"card-block-small\">\r\n          <img class=\"img-radius img-50\" src=\"assets/images/avatar-1.jpg\" alt=\"user-3\">\r\n          <div class=\"comment-desc\">\r\n            <h6>Luciano Durk</h6>\r\n            <p class=\"text-muted \">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>\r\n            <div class=\"comment-btn\">\r\n              <button class=\"btn bg-c-pink btn-round btn-comment \">Approved</button>\r\n            </div>\r\n            <div class=\"date\">\r\n              <i>20 October 2015</i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-comment \">\r\n        <div class=\"card-block-small\">\r\n          <img class=\"img-radius img-50\" src=\"assets/images/avatar-3.jpg\" alt=\"user-2\">\r\n          <div class=\"comment-desc\">\r\n            <h6>Planner Board</h6>\r\n            <p class=\"text-muted \">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>\r\n            <div class=\"comment-btn\">\r\n              <button class=\"btn bg-c-green btn-round btn-comment \">Rejected</button>\r\n            </div>\r\n            <div class=\"date\">\r\n              <i>12 Saptember 2015</i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-12 col-xl-4\">\r\n    <div class=\"card fb-card\">\r\n      <div class=\"card-header\">\r\n        <i class=\"icofont icofont-social-facebook\"></i>\r\n        <div class=\"d-inline-block\">\r\n          <h5>facebook</h5>\r\n          <span>blog page timeline</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-block text-center\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6 b-r-default\">\r\n            <h2>23</h2>\r\n            <p class=\"text-muted\">Active</p>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <h2>23</h2>\r\n            <p class=\"text-muted\">Comment</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card dribble-card\">\r\n      <div class=\"card-header\">\r\n        <i class=\"icofont icofont-social-dribbble\"></i>\r\n        <div class=\"d-inline-block\">\r\n          <h5>dribble</h5>\r\n          <span>Product page analysis</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-block text-center\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6 b-r-default\">\r\n            <h2>23</h2>\r\n            <p class=\"text-muted\">Live</p>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <h2>23</h2>\r\n            <p class=\"text-muted\">Message</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card twitter-card\">\r\n      <div class=\"card-header\">\r\n        <i class=\"icofont icofont-social-twitter\"></i>\r\n        <div class=\"d-inline-block\">\r\n          <h5>twitter</h5>\r\n          <span>current new timeline</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-block text-center\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6 b-r-default\">\r\n            <h2>25</h2>\r\n            <p class=\"text-muted\">new tweet</p>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <h2>450+</h2>\r\n            <p class=\"text-muted\">Follower</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n  <!-- project overview End -->\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard-default/dashboard-default-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-default/dashboard-default-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: DashboardDefaultRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDefaultRoutingModule", function() { return DashboardDefaultRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-default.component */ "./src/app/pages/dashboard/dashboard-default/dashboard-default.component.ts");




var routes = [
    {
        path: '',
        component: _dashboard_default_component__WEBPACK_IMPORTED_MODULE_3__["DashboardDefaultComponent"],
        data: {
            breadcrumb: 'Default',
            icon: 'icofont-home bg-c-blue',
            status: false
        }
    }
];
var DashboardDefaultRoutingModule = /** @class */ (function () {
    function DashboardDefaultRoutingModule() {
    }
    DashboardDefaultRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardDefaultRoutingModule);
    return DashboardDefaultRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard-default/dashboard-default.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-default/dashboard-default.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQtZGVmYXVsdC9kYXNoYm9hcmQtZGVmYXVsdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard-default/dashboard-default.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-default/dashboard-default.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DashboardDefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDefaultComponent", function() { return DashboardDefaultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_charts_amchart_amcharts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/charts/amchart/amcharts.js */ "./src/assets/charts/amchart/amcharts.js");
/* harmony import */ var _assets_charts_amchart_amcharts_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_amcharts_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_charts_amchart_gauge_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/charts/amchart/gauge.js */ "./src/assets/charts/amchart/gauge.js");
/* harmony import */ var _assets_charts_amchart_gauge_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_gauge_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_charts_amchart_pie_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/charts/amchart/pie.js */ "./src/assets/charts/amchart/pie.js");
/* harmony import */ var _assets_charts_amchart_pie_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_pie_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_charts_amchart_serial_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/charts/amchart/serial.js */ "./src/assets/charts/amchart/serial.js");
/* harmony import */ var _assets_charts_amchart_serial_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_serial_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_charts_amchart_light_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../assets/charts/amchart/light.js */ "./src/assets/charts/amchart/light.js");
/* harmony import */ var _assets_charts_amchart_light_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_light_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_charts_amchart_ammap_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../assets/charts/amchart/ammap.js */ "./src/assets/charts/amchart/ammap.js");
/* harmony import */ var _assets_charts_amchart_ammap_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_ammap_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_charts_amchart_worldLow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../assets/charts/amchart/worldLow.js */ "./src/assets/charts/amchart/worldLow.js");
/* harmony import */ var _assets_charts_amchart_worldLow_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_worldLow_js__WEBPACK_IMPORTED_MODULE_8__);









var DashboardDefaultComponent = /** @class */ (function () {
    function DashboardDefaultComponent() {
        this.totalValueGraphData1 = buildChartJS('#fff', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45], '#3a73f1', 'transparent');
        this.totalValueGraphData2 = buildChartJS('#fff', [10, 25, 35, 20, 10, 20, 15, 45, 15, 10], '#e55571', 'transparent');
        this.totalValueGraphOption = buildChartOption();
    }
    DashboardDefaultComponent.prototype.ngOnInit = function () {
        AmCharts.makeChart('statistics-chart', {
            type: 'serial',
            marginTop: 0,
            marginRight: 0,
            dataProvider: [{
                    year: 'Jan',
                    value: 0.98
                }, {
                    year: 'Feb',
                    value: 1.87
                }, {
                    year: 'Mar',
                    value: 0.97
                }, {
                    year: 'Apr',
                    value: 1.64
                }, {
                    year: 'May',
                    value: 0.4
                }, {
                    year: 'Jun',
                    value: 2.9
                }, {
                    year: 'Jul',
                    value: 5.2
                }, {
                    year: 'Aug',
                    value: 0.77
                }, {
                    year: 'Sap',
                    value: 3.1
                }],
            valueAxes: [{
                    axisAlpha: 0,
                    dashLength: 6,
                    gridAlpha: 0.1,
                    position: 'left'
                }],
            graphs: [{
                    id: 'g1',
                    bullet: 'round',
                    bulletSize: 9,
                    lineColor: '#4680ff',
                    lineThickness: 2,
                    negativeLineColor: '#4680ff',
                    type: 'smoothedLine',
                    valueField: 'value'
                }],
            chartCursor: {
                cursorAlpha: 0,
                valueLineEnabled: false,
                valueLineBalloonEnabled: true,
                valueLineAlpha: false,
                color: '#fff',
                cursorColor: '#FC6180',
                fullWidth: true
            },
            categoryField: 'year',
            categoryAxis: {
                gridAlpha: 0,
                axisAlpha: 0,
                fillAlpha: 1,
                fillColor: '#FAFAFA',
                minorGridAlpha: 0,
                minorGridEnabled: true
            },
            'export': {
                enabled: true
            }
        });
        AmCharts.makeChart('solid-gauge1', {
            type: 'gauge',
            theme: 'light',
            axes: [{
                    axisAlpha: 0,
                    tickAlpha: 0,
                    labelsEnabled: false,
                    startValue: 0,
                    endValue: 100,
                    startAngle: 0,
                    endAngle: 360,
                    bands: [{
                            color: '#E5E5E5',
                            startValue: -35,
                            endValue: 35,
                            radius: '100%',
                            innerRadius: '92%'
                        }, {
                            color: '#93BE52',
                            startValue: -35,
                            endValue: 20,
                            radius: '100%',
                            innerRadius: '92%'
                        }]
                }],
            'export': {
                enabled: true
            }
        });
        AmCharts.makeChart('email-sent', {
            type: 'serial',
            theme: 'light',
            dataDateFormat: 'YYYY-MM-DD',
            precision: 2,
            valueAxes: [
                {
                    id: 'v1',
                    title: 'Sales',
                    position: 'left',
                    autoGridCount: false,
                    labelFunction: function (g) {
                        return Math.round(g);
                    }
                },
                {
                    id: 'v2',
                    title: '',
                    gridAlpha: 0,
                    fontSize: 0,
                    axesAlpha: 0,
                    position: 'left',
                    autoGridCount: false
                }
            ],
            graphs: [
                {
                    id: 'g3',
                    valueAxis: 'v1',
                    lineColor: '#4680ff',
                    fillColors: '#4680ff',
                    fillAlphas: 1,
                    type: 'column',
                    title: 'Actual Sales',
                    valueField: 'sales2',
                    clustered: true,
                    columnWidth: 0.4,
                    legendValueText: '$[[value]]M',
                    balloonText: '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
                },
                {
                    id: 'g4',
                    valueAxis: 'v1',
                    lineColor: '#FC6180',
                    fillColors: '#FC6180',
                    fillAlphas: 1,
                    type: 'column',
                    title: 'Target Sales',
                    valueField: 'sales1',
                    clustered: true,
                    columnWidth: 0.4,
                    legendValueText: '$[[value]]M',
                    balloonText: '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
                },
                {
                    id: 'g1',
                    valueAxis: 'v2',
                    bullet: 'round',
                    bulletBorderAlpha: 0,
                    bulletColor: 'transparent',
                    bulletSize: 0,
                    hideBulletsCount: 50,
                    lineThickness: 3,
                    dashLength: 10,
                    lineColor: '#93BE52',
                    type: 'smoothedLine',
                    title: 'Market Days',
                    useLineColorForBulletBorder: true,
                    valueField: 'market1',
                    balloonText: '[[title]]<br /><b style="font-size: 130% ">[[value]]</b>'
                },
                {
                    id: 'v3',
                    valueAxis: 'v1',
                    lineColor: '#FFB64D',
                    fillColors: '#FFB64D',
                    fillAlphas: 1,
                    type: 'column',
                    title: 'Actual Sales',
                    valueField: 'sales2',
                    clustered: true,
                    columnWidth: 0.4,
                    legendValueText: '$[[value]]M',
                    balloonText: '[[title]]<br /><b style="font-size: 130%>$[[value]]M</b>'
                }
            ],
            chartCursor: {
                pan: true,
                valueLineEnabled: true,
                valueLineBalloonEnabled: true,
                cursorAlpha: 0,
                valueLineAlpha: 0.2
            },
            categoryField: 'date',
            categoryAxis: {
                parseDates: true,
                dashLength: 0,
                axisAlpha: 0,
                GridAlpha: 0,
                minorGridEnabled: true
            },
            legend: {
                useGraphSettings: true,
                position: 'top'
            },
            balloon: {
                borderThickness: 1,
                shadowAlpha: 0
            },
            'export': {
                enabled: true
            },
            dataProvider: [
                {
                    date: '2013-01-16',
                    market1: 91,
                    market2: 75,
                    sales1: 5,
                    sales2: 8
                },
                {
                    date: '2013-01-17',
                    market1: 74,
                    market2: 78,
                    sales1: 4,
                    sales2: 6
                },
                {
                    date: '2013-01-18',
                    market1: 78,
                    market2: 88,
                    sales1: 5,
                    sales2: 2
                },
                {
                    date: '2013-01-19',
                    market1: 85,
                    market2: 89,
                    sales1: 8,
                    sales2: 9
                },
                {
                    date: '2013-01-20',
                    market1: 82,
                    market2: 89,
                    sales1: 9,
                    sales2: 6
                },
                {
                    date: '2013-01-21',
                    market1: 83,
                    market2: 85,
                    sales1: 3,
                    sales2: 5
                },
                {
                    date: '2013-01-22',
                    market1: 78,
                    market2: 92,
                    sales1: 5,
                    sales2: 7
                }
            ]
        });
    };
    DashboardDefaultComponent.prototype.onTaskStatusChange = function (event) {
        var parentNode = (event.target.parentNode.parentNode);
        parentNode.classList.toggle('done-task');
    };
    DashboardDefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-default',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard-default.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard-default/dashboard-default.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard-default.component.scss */ "./src/app/pages/dashboard/dashboard-default/dashboard-default.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../../assets/icon/svg-animated/svg-weather.css */ "./src/assets/icon/svg-animated/svg-weather.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardDefaultComponent);
    return DashboardDefaultComponent;
}());

function getRandomData() {
    var data = [];
    var totalPoints = 300;
    if (data.length > 0) {
        data = data.slice(1);
    }
    while (data.length < totalPoints) {
        var prev = data.length > 0 ? data[data.length - 1] : 50;
        var y = prev + Math.random() * 10 - 5;
        if (y < 0) {
            y = 0;
        }
        else if (y > 100) {
            y = 100;
        }
        data.push(y);
    }
    var res = [];
    for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]]);
    }
    return res;
}
function buildChartJS(a, b, f, c) {
    if (f == null) {
        f = 'rgba(0,0,0,0)';
    }
    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        datasets: [{
                label: '',
                borderColor: a,
                borderWidth: 2,
                hitRadius: 30,
                pointHoverRadius: 4,
                pointBorderWidth: 50,
                pointHoverBorderWidth: 12,
                pointBackgroundColor: c,
                pointBorderColor: 'transparent',
                pointHoverBackgroundColor: a,
                pointHoverBorderColor: 'rgba(0,0,0,0.5)',
                fill: true,
                backgroundColor: f,
                data: b,
            }]
    };
}
function buildChartOption() {
    return {
        title: {
            display: false
        },
        tooltips: {
            enabled: true,
            intersect: false,
            mode: 'nearest',
            xPadding: 10,
            yPadding: 10,
            caretPadding: 10
        },
        legend: {
            display: false,
            labels: {
                usePointStyle: false
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                    display: false,
                    gridLines: false,
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    }
                }],
            yAxes: [{
                    display: false,
                    gridLines: false,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
        },
        elements: {
            point: {
                radius: 4,
                borderWidth: 12
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 5,
                bottom: 0
            }
        }
    };
}


/***/ }),

/***/ "./src/app/pages/dashboard/dashboard-default/dashboard-default.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-default/dashboard-default.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DashboardDefaultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDefaultModule", function() { return DashboardDefaultModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_default_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-default-routing.module */ "./src/app/pages/dashboard/dashboard-default/dashboard-default-routing.module.ts");
/* harmony import */ var _dashboard_default_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-default.component */ "./src/app/pages/dashboard/dashboard-default/dashboard-default.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-chartjs */ "./node_modules/angular2-chartjs/dist/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_6__);







var DashboardDefaultModule = /** @class */ (function () {
    function DashboardDefaultModule() {
    }
    DashboardDefaultModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dashboard_default_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardDefaultRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                angular2_chartjs__WEBPACK_IMPORTED_MODULE_6__["ChartModule"]
            ],
            declarations: [_dashboard_default_component__WEBPACK_IMPORTED_MODULE_4__["DashboardDefaultComponent"]]
        })
    ], DashboardDefaultModule);
    return DashboardDefaultModule;
}());



/***/ }),

/***/ "./src/assets/charts/amchart/amcharts.js":
/*!***********************************************!*\
  !*** ./src/assets/charts/amchart/amcharts.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(){var d;window.AmCharts?d=window.AmCharts:(d={},window.AmCharts=d,d.themes={},d.maps={},d.inheriting={},d.charts=[],d.onReadyArray=[],d.useUTC=!1,d.updateRate=60,d.uid=0,d.lang={},d.translations={},d.mapTranslations={},d.windows={},d.initHandlers=[],d.amString="am",d.pmString="pm");d.Class=function(a){var b=function(){arguments[0]!==d.inheriting&&(this.events={},this.construct.apply(this,arguments))};a.inherits?(b.prototype=new a.inherits(d.inheriting),b.base=a.inherits.prototype,delete a.inherits):(b.prototype.createEvents=function(){for(var a=0;a<arguments.length;a++)this.events[arguments[a]]=[]},b.prototype.listenTo=function(a,b,c){this.removeListener(a,b,c);a.events[b].push({handler:c,scope:this})},b.prototype.addListener=function(a,b,c){this.removeListener(this,a,b);a&&this.events[a]&&this.events[a].push({handler:b,scope:c})},b.prototype.removeListener=function(a,b,c){if(a&&a.events&&(a=a.events[b]))for(b=a.length-1;0<=b;b--)a[b].handler===c&&a.splice(b,1)},b.prototype.fire=function(a){for(var b=this.events[a.type],c=0;c<b.length;c++){var d=b[c];d.handler.call(d.scope,a)}});for(var c in a)b.prototype[c]=a[c];return b};d.addChart=function(a){window.requestAnimationFrame?d.animationRequested||(d.animationRequested=!0,window.requestAnimationFrame(d.update)):d.updateInt||(d.updateInt=setInterval(function(){d.update()},Math.round(1E3/d.updateRate)));d.charts.push(a)};d.removeChart=function(a){for(var b=d.charts,c=b.length-1;0<=c;c--)b[c]==a&&b.splice(c,1);0===b.length&&(d.requestAnimation&&(window.cancelAnimationFrame(d.requestAnimation),d.animationRequested=!1),d.updateInt&&(clearInterval(d.updateInt),d.updateInt=NaN))};d.isModern=!0;d.getIEVersion=function(){var a=0,b,c;"Microsoft Internet Explorer"==navigator.appName&&(b=navigator.userAgent,c=/MSIE ([0-9]{1,}[.0-9]{0,})/,null!==c.exec(b)&&(a=parseFloat(RegExp.$1)));return a};d.applyLang=function(a,b){var c=d.translations;b.dayNames=d.extend({},d.dayNames);b.shortDayNames=d.extend({},d.shortDayNames);b.monthNames=d.extend({},d.monthNames);b.shortMonthNames=d.extend({},d.shortMonthNames);b.amString="am";b.pmString="pm";c&&(c=c[a])&&(d.lang=c,b.langObj=c,c.monthNames&&(b.dayNames=d.extend({},c.dayNames),b.shortDayNames=d.extend({},c.shortDayNames),b.monthNames=d.extend({},c.monthNames),b.shortMonthNames=d.extend({},c.shortMonthNames)),c.am&&(b.amString=c.am),c.pm&&(b.pmString=c.pm));d.amString=b.amString;d.pmString=b.pmString};d.IEversion=d.getIEVersion();9>d.IEversion&&0<d.IEversion&&(d.isModern=!1,d.isIE=!0);d.dx=0;d.dy=0;if(document.addEventListener||window.opera)d.isNN=!0,d.isIE=!1,d.dx=.5,d.dy=.5;document.attachEvent&&(d.isNN=!1,d.isIE=!0,d.isModern||(d.dx=0,d.dy=0));window.chrome&&(d.chrome=!0);d.handleMouseUp=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];e&&e.handleReleaseOutside&&e.handleReleaseOutside(a)}};d.handleMouseMove=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];e&&e.handleMouseMove&&e.handleMouseMove(a)}};d.handleWheel=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];if(e&&e.mouseIsOver){(e.mouseWheelScrollEnabled||e.mouseWheelZoomEnabled)&&e.handleWheel&&e.handleWheel(a);break}}};d.resetMouseOver=function(){for(var a=d.charts,b=0;b<a.length;b++){var c=a[b];c&&(c.mouseIsOver=!1)}};d.ready=function(a){d.onReadyArray.push(a)};d.handleLoad=function(){d.isReady=!0;for(var a=d.onReadyArray,b=0;b<a.length;b++){var c=a[b];isNaN(d.processDelay)?c():setTimeout(c,d.processDelay*b)}d.onReadyArray=[]};d.addInitHandler=function(a,b){d.initHandlers.push({method:a,types:b})};d.callInitHandler=function(a){var b=d.initHandlers;if(d.initHandlers)for(var c=0;c<b.length;c++){var e=b[c];e.types?d.isInArray(e.types,a.type)&&e.method(a):e.method(a)}};d.getUniqueId=function(){d.uid++;return"AmChartsEl-"+d.uid};d.isNN&&(document.addEventListener("mousemove",d.handleMouseMove),document.addEventListener("mouseup",d.handleMouseUp,!0),window.addEventListener("load",d.handleLoad,!0));d.isIE&&(document.attachEvent("onmousemove",d.handleMouseMove),document.attachEvent("onmouseup",d.handleMouseUp),window.attachEvent("onload",d.handleLoad));d.addWheelListeners=function(){d.wheelIsListened||(d.isNN&&(window.addEventListener("DOMMouseScroll",d.handleWheel,!0),document.addEventListener("mousewheel",d.handleWheel,!0)),d.isIE&&document.attachEvent("onmousewheel",d.handleWheel));d.wheelIsListened=!0};d.clear=function(){var a=d.charts;if(a)for(var b=a.length-1;0<=b;b--)a[b].clear();d.updateInt&&clearInterval(d.updateInt);d.requestAnimation&&window.cancelAnimationFrame(d.requestAnimation);d.charts=[];d.isNN&&(document.removeEventListener("mousemove",d.handleMouseMove,!0),document.removeEventListener("mouseup",d.handleMouseUp,!0),window.removeEventListener("load",d.handleLoad,!0),window.removeEventListener("DOMMouseScroll",d.handleWheel,!0),document.removeEventListener("mousewheel",d.handleWheel,!0));d.isIE&&(document.detachEvent("onmousemove",d.handleMouseMove),document.detachEvent("onmouseup",d.handleMouseUp),window.detachEvent("onload",d.handleLoad))};d.makeChart=function(a,b,c){var e=b.type,h=b.theme;d.isString(h)&&(h=d.themes[h],b.theme=h);var f;switch(e){case"serial":f=new d.AmSerialChart(h);break;case"xy":f=new d.AmXYChart(h);break;case"pie":f=new d.AmPieChart(h);break;case"radar":f=new d.AmRadarChart(h);break;case"gauge":f=new d.AmAngularGauge(h);break;case"funnel":f=new d.AmFunnelChart(h);break;case"map":f=new d.AmMap(h);break;case"stock":f=new d.AmStockChart(h);break;case"gantt":f=new d.AmGanttChart(h)}d.extend(f,b);d.isReady?isNaN(c)?f.write(a):setTimeout(function(){d.realWrite(f,a)},c):d.ready(function(){isNaN(c)?f.write(a):setTimeout(function(){d.realWrite(f,a)},c)});return f};d.realWrite=function(a,b){a.write(b)};d.updateCount=0;d.validateAt=Math.round(d.updateRate/10);d.update=function(){var a=d.charts;d.updateCount++;var b=!1;d.updateCount==d.validateAt&&(b=!0,d.updateCount=0);if(a)for(var c=a.length-1;0<=c;c--)a[c].update&&a[c].update(),b&&(a[c].autoResize?a[c].validateSize&&a[c].validateSize():a[c].premeasure&&a[c].premeasure());window.requestAnimationFrame&&(d.requestAnimation=window.requestAnimationFrame(d.update))};"complete"==document.readyState&&d.handleLoad()})();(function(){var d=window.AmCharts;d.toBoolean=function(a,b){if(void 0===a)return b;switch(String(a).toLowerCase()){case"true":case"yes":case"1":return!0;case"false":case"no":case"0":case null:return!1;default:return!!a}};d.removeFromArray=function(a,b){var c;if(void 0!==b&&void 0!==a)for(c=a.length-1;0<=c;c--)a[c]==b&&a.splice(c,1)};d.getPath=function(){var a=document.getElementsByTagName("script");if(a)for(var b=0;b<a.length;b++){var c=a[b].src;if(-1!==c.search(/\/(amcharts|ammap)\.js/))return c.replace(/\/(amcharts|ammap)\.js.*/,"/")}};d.normalizeUrl=function(a){return""!==a&&-1===a.search(/\/$/)?a+"/":a};d.isAbsolute=function(a){return 0===a.search(/^http[s]?:|^\//)};d.isInArray=function(a,b){for(var c=0;c<a.length;c++)if(a[c]==b)return!0;return!1};d.getDecimals=function(a){var b=0;isNaN(a)||(a=String(a),-1!=a.indexOf("e-")?b=Number(a.split("-")[1]):-1!=a.indexOf(".")&&(b=a.split(".")[1].length));return b};d.wordwrap=function(a,b,c,e){var h,f,g,k;a+="";if(1>b)return a;h=-1;for(a=(k=a.split(/\r\n|\n|\r/)).length;++h<a;k[h]+=g){g=k[h];for(k[h]="";g.length>b;k[h]+=d.trim(g.slice(0,f))+((g=g.slice(f)).length?c:""))f=2==e||(f=g.slice(0,b+1).match(/\S*(\s)?$/))[1]?b:f.input.length-f[0].length||1==e&&b||f.input.length+(f=g.slice(b).match(/^\S*/))[0].length;g=d.trim(g)}return k.join(c)};d.trim=function(a){return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")};d.wrappedText=function(a,b,c,e,h,f,g,k){var l=d.text(a,b,c,e,h,f,g);if(l){var m=l.getBBox();if(m.width>k){var p="\n";d.isModern||(p="<br>");k=Math.floor(k/(m.width/
b.length));2<k&&(k-=2);b=d.wordwrap(b,k,p,!0);l.remove();l=d.text(a,b,c,e,h,f,g)}}return l};d.getStyle=function(a,b){var c="";if(document.defaultView&&document.defaultView.getComputedStyle)try{c=document.defaultView.getComputedStyle(a,"").getPropertyValue(b)}catch(e){}else a.currentStyle&&(b=b.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=a.currentStyle[b]);return c};d.removePx=function(a){if(void 0!==a)return Number(a.substring(0,a.length-2))};d.getURL=function(a,b){if(a)if("_self"!=b&&b)if("_top"==b&&window.top)window.top.location.href=a;else if("_parent"==b&&window.parent)window.parent.location.href=a;else if("_blank"==b)window.open(a);else{var c=document.getElementsByName(b)[0];c?c.src=a:(c=d.windows[b])?c.opener&&!c.opener.closed?c.location.href=a:d.windows[b]=window.open(a):d.windows[b]=window.open(a)}else window.location.href=a};d.ifArray=function(a){return a&&"object"==typeof a&&0<a.length?!0:!1};d.callMethod=function(a,b){var c;for(c=0;c<b.length;c++){var e=b[c];if(e){if(e[a])e[a]();var d=e.length;if(0<d){var f;for(f=0;f<d;f++){var g=e[f];if(g&&g[a])g[a]()}}}}};d.toNumber=function(a){return"number"==typeof a?a:Number(String(a).replace(/[^0-9\-.]+/g,""))};d.toColor=function(a){if(""!==a&&void 0!==a)if(-1!=a.indexOf(",")){a=a.split(",");var b;for(b=0;b<a.length;b++){var c=a[b].substring(a[b].length-6,a[b].length);a[b]="#"+c}}else a=a.substring(a.length-6,a.length),a="#"+a;return a};d.toCoordinate=function(a,b,c){var e;void 0!==a&&(a=String(a),c&&c<b&&(b=c),e=Number(a),-1!=a.indexOf("!")&&(e=b-Number(a.substr(1))),-1!=a.indexOf("%")&&(e=b*Number(a.substr(0,a.length-1))/100));return e};d.fitToBounds=function(a,b,c){a<b&&(a=b);a>c&&(a=c);return a};d.isDefined=function(a){return void 0===a?!1:!0};d.stripNumbers=function(a){return a.replace(/[0-9]+/g,"")};d.roundTo=function(a,b){if(0>b)return a;var c=Math.pow(10,b);return Math.round(a*c)/c};d.toFixed=function(a,b){var c=!1;0>a&&(c=!0,a=Math.abs(a));var e=String(Math.round(a*Math.pow(10,b)));if(0<b){var d=e.length;if(d<b){var f;for(f=0;f<
b-d;f++)e="0"+e}d=e.substring(0,e.length-b);""===d&&(d=0);e=d+"."+e.substring(e.length-b,e.length);return c?"-"+e:e}return String(e)};d.formatDuration=function(a,b,c,e,h,f){var g=d.intervals,k=f.decimalSeparator;if(a>=g[b].contains){var l=a-Math.floor(a/g[b].contains)*g[b].contains;"ss"==b?(l=d.formatNumber(l,f),1==l.split(k)[0].length&&(l="0"+l)):l=d.roundTo(l,f.precision);("mm"==b||"hh"==b)&&10>l&&(l="0"+l);c=l+""+e[b]+""+c;a=Math.floor(a/g[b].contains);b=g[b].nextInterval;return d.formatDuration(a,b,c,e,h,f)}"ss"==b&&(a=d.formatNumber(a,f),1==a.split(k)[0].length&&(a="0"+a));("mm"==b||"hh"==b)&&10>a&&(a="0"+a);c=a+""+e[b]+""+c;if(g[h].count>g[b].count)for(a=g[b].count;a<g[h].count;a++)b=g[b].nextInterval,"ss"==b||"mm"==b||"hh"==b?c="00"+e[b]+""+c:"DD"==b&&(c="0"+e[b]+""+c);":"==c.charAt(c.length-1)&&(c=c.substring(0,c.length-1));return c};d.formatNumber=function(a,b,c,e,h){a=d.roundTo(a,b.precision);isNaN(c)&&(c=b.precision);var f=b.decimalSeparator;b=b.thousandsSeparator;var g;g=0>a?"-":"";a=Math.abs(a);var k=String(a),l=!1;-1!=k.indexOf("e")&&(l=!0);0<=c&&!l&&(k=d.toFixed(a,c));var m="";if(l)m=k;else{var k=k.split("."),l=String(k[0]),p;for(p=l.length;0<=p;p-=3)m=p!=l.length?0!==p?l.substring(p-3,p)+b+m:l.substring(p-3,p)+m:l.substring(p-3,p);void 0!==k[1]&&(m=m+f+k[1]);void 0!==c&&0<c&&"0"!=m&&(m=d.addZeroes(m,f,c))}m=g+m;""===g&&!0===e&&0!==a&&(m="+"+m);!0===h&&(m+="%");return m};d.addZeroes=function(a,b,c){a=a.split(b);void 0===a[1]&&0<c&&(a[1]="0");return a[1].length<c?(a[1]+="0",d.addZeroes(a[0]+b+a[1],b,c)):void 0!==a[1]?a[0]+b+a[1]:a[0]};d.scientificToNormal=function(a){var b;a=String(a).split("e");var c;if("-"==a[1].substr(0,1)){b="0.";for(c=0;c<Math.abs(Number(a[1]))-1;c++)b+="0";b+=a[0].split(".").join("")}else{var e=0;b=a[0].split(".");b[1]&&(e=b[1].length);b=a[0].split(".").join("");for(c=0;c<Math.abs(Number(a[1]))-e;c++)b+="0"}return b};d.toScientific=function(a,b){if(0===a)return"0";var c=Math.floor(Math.log(Math.abs(a))*Math.LOG10E),e=String(e).split(".").join(b);return String(e)+"e"+c};d.randomColor=function(){return"#"+("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6)};d.hitTest=function(a,b,c){var e=!1,h=a.x,f=a.x+a.width,g=a.y,k=a.y+a.height,l=d.isInRectangle;e||(e=l(h,g,b));e||(e=l(h,k,b));e||(e=l(f,g,b));e||(e=l(f,k,b));e||!0===c||(e=d.hitTest(b,a,!0));return e};d.isInRectangle=function(a,b,c){return a>=c.x-5&&a<=c.x+c.width+5&&b>=c.y-5&&b<=c.y+c.height+5?!0:!1};d.isPercents=function(a){if(-1!=String(a).indexOf("%"))return!0};d.formatValue=function(a,b,c,e,h,f,g,k){if(b){void 0===h&&(h="");var l;for(l=0;l<c.length;l++){var m=c[l],p=b[m];void 0!==p&&(p=f?d.addPrefix(p,k,g,e):d.formatNumber(p,e),a=a.replace(new RegExp("\\[\\["+h+""+m+"\\]\\]","g"),p))}}return a};d.formatDataContextValue=function(a,b){if(a){var c=a.match(/\[\[.*?\]\]/g),e;for(e=0;e<c.length;e++){var d=c[e],d=d.substr(2,d.length-4);void 0!==b[d]&&(a=a.replace(new RegExp("\\[\\["+d+"\\]\\]","g"),b[d]))}}return a};d.massReplace=function(a,b){for(var c in b)if(b.hasOwnProperty(c)){var e=b[c];void 0===e&&(e="");a=a.replace(c,e)}return a};d.cleanFromEmpty=function(a){return a.replace(/\[\[[^\]]*\]\]/g,"")};d.addPrefix=function(a,b,c,e,h){var f=d.formatNumber(a,e),g="",k,l,m;if(0===a)return"0";0>a&&(g="-");a=Math.abs(a);if(1<a)for(k=b.length-1;-1<k;k--){if(a>=b[k].number&&(l=a/b[k].number,m=Number(e.precision),1>m&&(m=1),c=d.roundTo(l,m),m=d.formatNumber(c,{precision:-1,decimalSeparator:e.decimalSeparator,thousandsSeparator:e.thousandsSeparator}),!h||l==c)){f=g+""+m+""+b[k].prefix;break}}else for(k=0;k<c.length;k++)if(a<=c[k].number){l=a/c[k].number;m=Math.abs(Math.floor(Math.log(l)*Math.LOG10E));l=d.roundTo(l,m);f=g+""+l+""+c[k].prefix;break}return f};d.remove=function(a){a&&a.remove()};d.getEffect=function(a){">"==a&&(a="easeOutSine");"<"==a&&(a="easeInSine");"elastic"==a&&(a="easeOutElastic");return a};d.getObjById=function(a,b){var c,e;for(e=0;e<a.length;e++){var d=a[e];if(d.id==b){c=d;break}}return c};d.applyTheme=function(a,b,c){b||(b=d.theme);try{b=JSON.parse(JSON.stringify(b))}catch(e){}b&&b[c]&&d.extend(a,b[c])};d.isString=function(a){return"string"==typeof a?!0:!1};d.extend=function(a,b,c){var e;a||(a={});for(e in b)c?a.hasOwnProperty(e)||(a[e]=b[e]):a[e]=b[e];return a};d.copyProperties=function(a,b){for(var c in a)a.hasOwnProperty(c)&&"events"!=c&&void 0!==a[c]&&"function"!=typeof a[c]&&"cname"!=c&&(b[c]=a[c])};d.processObject=function(a,b,c,e){if(!1===a instanceof b&&(a=e?d.extend(new b(c),a):d.extend(a,new b(c),!0),a.listeners))for(var h in a.listeners)b=a.listeners[h],a.addListener(b.event,b.method);return a};d.fixNewLines=function(a){var b=RegExp("\\n","g");a&&(a=a.replace(b,"<br />"));return a};d.fixBrakes=function(a){if(d.isModern){var b=RegExp("<br>","g");a&&(a=a.replace(b,"\n"))}else a=d.fixNewLines(a);return a};d.deleteObject=function(a,b){if(a){if(void 0===b||null===b)b=20;if(0!==b)if("[object Array]"===Object.prototype.toString.call(a))for(var c=0;c<a.length;c++)d.deleteObject(a[c],b-1),a[c]=null;else if(a&&!a.tagName)try{for(c in a.theme=null,a)a[c]&&("object"==typeof a[c]&&d.deleteObject(a[c],b-1),"function"!=typeof a[c]&&(a[c]=null))}catch(e){}}};d.bounce=function(a,b,c,e,d){return(b/=d)<1/2.75?7.5625*e*b*b+c:b<2/2.75?e*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?e*(7.5625*(b-=2.25/2.75)*b+.9375)+c:e*(7.5625*(b-=2.625/2.75)*b+.984375)+c};d.easeInOutQuad=function(a,b,c,e,d){b/=d/2;if(1>b)return e/2*b*b+c;b--;return-e/2*(b*(b-2)-1)+c};d.easeInSine=function(a,b,c,e,d){return-e*Math.cos(b/d*(Math.PI/2))+e+c};d.easeOutSine=function(a,b,c,e,d){return e*Math.sin(b/d*(Math.PI/
2))+c};d.easeOutElastic=function(a,b,c,e,d){a=1.70158;var f=0,g=e;if(0===b)return c;if(1==(b/=d))return c+e;f||(f=.3*d);g<Math.abs(e)?(g=e,a=f/4):a=f/(2*Math.PI)*Math.asin(e/g);return g*Math.pow(2,-10*b)*Math.sin(2*(b*d-a)*Math.PI/f)+e+c};d.fixStepE=function(a){a=a.toExponential(0).split("e");var b=Number(a[1]);9==Number(a[0])&&b++;return d.generateNumber(1,b)};d.generateNumber=function(a,b){var c="",e;e=0>b?Math.abs(b)-1:Math.abs(b);var d;for(d=0;d<e;d++)c+="0";return 0>b?Number("0."+c+String(a)):Number(String(a)+c)};d.setCN=function(a,b,c,e){if(a.addClassNames&&b&&(b=b.node)&&c){var d=b.getAttribute("class");a=a.classNamePrefix+"-";e&&(a="");d?b.setAttribute("class",d+" "+a+c):b.setAttribute("class",a+c)}};d.removeCN=function(a,b,c){b&&(b=b.node)&&c&&(b=b.classList)&&b.remove(a.classNamePrefix+"-"+c)};d.parseDefs=function(a,b){for(var c in a){var e=typeof a[c];if(0<a[c].length&&"object"==e)for(var h=0;h<a[c].length;h++)e=document.createElementNS(d.SVG_NS,c),b.appendChild(e),d.parseDefs(a[c][h],e);else"object"==e?(e=document.createElementNS(d.SVG_NS,c),b.appendChild(e),d.parseDefs(a[c],e)):b.setAttribute(c,a[c])}}})();(function(){var d=window.AmCharts;d.AxisBase=d.Class({construct:function(a){this.createEvents("clickItem","rollOverItem","rollOutItem","rollOverGuide","rollOutGuide","clickGuide");this.titleDY=this.y=this.x=this.dy=this.dx=0;this.axisThickness=1;this.axisColor="#000000";this.axisAlpha=1;this.gridCount=this.tickLength=5;this.gridAlpha=.15;this.gridThickness=1;this.gridColor="#000000";this.dashLength=0;this.labelFrequency=1;this.showLastLabel=this.showFirstLabel=!0;this.fillColor="#FFFFFF";this.fillAlpha=0;this.labelsEnabled=!0;this.labelRotation=0;this.autoGridCount=!0;this.offset=0;this.guides=[];this.visible=!0;this.counter=0;this.guides=[];this.ignoreAxisWidth=this.inside=!1;this.minHorizontalGap=75;this.minVerticalGap=35;this.titleBold=!0;this.minorGridEnabled=!1;this.minorGridAlpha=.07;this.autoWrap=!1;this.titleAlign="middle";this.labelOffset=0;this.bcn="axis-";this.centerLabels=!1;this.firstDayOfWeek=1;this.centerLabelOnFullPeriod=this.markPeriodChange=this.boldPeriodBeginning=!0;this.titleWidth=0;this.periods=[{period:"fff",count:1},{period:"fff",count:5},{period:"fff",count:10},{period:"fff",count:50},{period:"fff",count:100},{period:"fff",count:500},{period:"ss",count:1},{period:"ss",count:5},{period:"ss",count:10},{period:"ss",count:30},{period:"mm",count:1},{period:"mm",count:5},{period:"mm",count:10},{period:"mm",count:30},{period:"hh",count:1},{period:"hh",count:3},{period:"hh",count:6},{period:"hh",count:12},{period:"DD",count:1},{period:"DD",count:2},{period:"DD",count:3},{period:"DD",count:4},{period:"DD",count:5},{period:"WW",count:1},{period:"MM",count:1},{period:"MM",count:2},{period:"MM",count:3},{period:"MM",count:6},{period:"YYYY",count:1},{period:"YYYY",count:2},{period:"YYYY",count:5},{period:"YYYY",count:10},{period:"YYYY",count:50},{period:"YYYY",count:100}];this.dateFormats=[{period:"fff",format:"NN:SS.QQQ"},{period:"ss",format:"JJ:NN:SS"},{period:"mm",format:"JJ:NN"},{period:"hh",format:"JJ:NN"},{period:"DD",format:"MMM DD"},{period:"WW",format:"MMM DD"},{period:"MM",format:"MMM"},{period:"YYYY",format:"YYYY"}];this.nextPeriod={fff:"ss",ss:"mm",mm:"hh",hh:"DD",DD:"MM",MM:"YYYY"};d.applyTheme(this,a,"AxisBase")},zoom:function(a,b){this.start=a;this.end=b;this.dataChanged=!0;this.draw()},fixAxisPosition:function(){var a=this.position;"H"==this.orientation?("left"==a&&(a="bottom"),"right"==a&&(a="top")):("bottom"==a&&(a="left"),"top"==a&&(a="right"));this.position=a},init:function(){this.createBalloon()},draw:function(){var a=this.chart;this.prevBY=this.prevBX=NaN;this.allLabels=[];this.counter=0;this.destroy();this.fixAxisPosition();this.setBalloonBounds();this.labels=[];var b=a.container,c=b.set();a.gridSet.push(c);this.set=c;b=b.set();a.axesLabelsSet.push(b);this.labelsSet=b;this.axisLine=new this.axisRenderer(this);this.autoGridCount?("V"==this.orientation?(a=this.height/this.minVerticalGap,3>a&&(a=3)):a=this.width/this.minHorizontalGap,this.gridCountR=Math.max(a,1)):this.gridCountR=this.gridCount;this.axisWidth=this.axisLine.axisWidth;this.addTitle()},setOrientation:function(a){this.orientation=a?"H":"V"},addTitle:function(){var a=this.title;this.titleLabel=null;if(a){var b=this.chart,c=this.titleColor;void 0===c&&(c=b.color);var e=this.titleFontSize;isNaN(e)&&(e=b.fontSize+1);a=d.text(b.container,a,c,b.fontFamily,e,this.titleAlign,this.titleBold);d.setCN(b,a,this.bcn+"title");this.titleLabel=a}},positionTitle:function(){var a=this.titleLabel;if(a){var b,c,e=this.labelsSet,h={};0<e.length()?h=e.getBBox():(h.x=0,h.y=0,h.width=this.width,h.height=this.height,d.VML&&(h.y+=this.y,h.x+=this.x));e.push(a);var e=h.x,f=h.y;d.VML&&(f-=this.y,e-=this.x);var g=h.width,h=h.height,k=this.width,l=this.height,m=0,p=a.getBBox().height/2,q=this.inside,n=this.titleAlign;switch(this.position){case"top":b="left"==n?-1:"right"==n?k:k/2;c=f-10-p;break;case"bottom":b="left"==n?-1:"right"==n?k:k/2;c=f+h+10+p;break;case"left":b=e-10-p;q&&(b-=5);m=-90;c=("left"==n?l+1:"right"==n?-1:l/2)+this.titleDY;this.titleWidth=p+10;break;case"right":b=e+g+10+p,q&&(b+=7),c=("left"==n?l+2:"right"==n?-2:l/2)+this.titleDY,this.titleWidth=p+10,m=-90}this.marginsChanged?(a.translate(b,c),this.tx=b,this.ty=c):a.translate(this.tx,this.ty);this.marginsChanged=!1;isNaN(this.titleRotation)||(m=this.titleRotation);0!==m&&a.rotate(m)}},pushAxisItem:function(a,b){var c=this,e=a.graphics();0<e.length()&&(b?c.labelsSet.push(e):c.set.push(e));if(e=a.getLabel())c.labelsSet.push(e),e.click(function(b){c.handleMouse(b,a,"clickItem")}).touchend(function(b){c.handleMouse(b,a,"clickItem")}).mouseover(function(b){c.handleMouse(b,a,"rollOverItem")}).mouseout(function(b){c.handleMouse(b,a,"rollOutItem")})},handleMouse:function(a,b,c){this.fire({type:c,value:b.value,serialDataItem:b.serialDataItem,axis:this,target:b.label,chart:this.chart,event:a})},addGuide:function(a){for(var b=this.guides,c=!1,e=b.length,h=0;h<b.length;h++)b[h]==a&&(c=!0,e=h);a=d.processObject(a,d.Guide,this.theme);a.id||(a.id="guideAuto"+e+"_"+(new Date).getTime());c||b.push(a)},removeGuide:function(a){var b=this.guides,c;for(c=0;c<b.length;c++)b[c]==a&&b.splice(c,1)},handleGuideOver:function(a){clearTimeout(this.chart.hoverInt);var b=a.graphics.getBBox(),c=this.x+b.x+b.width/2,b=this.y+b.y+b.height/2,e=a.fillColor;void 0===e&&(e=a.lineColor);this.chart.showBalloon(a.balloonText,e,!0,c,b);this.fire({type:"rollOverGuide",guide:a,chart:this.chart})},handleGuideOut:function(a){this.chart.hideBalloon();this.fire({type:"rollOutGuide",guide:a,chart:this.chart})},handleGuideClick:function(a){this.chart.hideBalloon();this.fire({type:"clickGuide",guide:a,chart:this.chart})},addEventListeners:function(a,b){var c=this;a.mouseover(function(){c.handleGuideOver(b)});a.mouseup(function(){c.handleGuideClick(b)});a.touchstart(function(){c.handleGuideOver(b)});a.mouseout(function(){c.handleGuideOut(b)})},getBBox:function(){var a;this.labelsSet&&(a=this.labelsSet.getBBox());a?d.VML||(a={x:a.x+this.x,y:a.y+this.y,width:a.width,height:a.height}):a={x:0,y:0,width:0,height:0};return a},destroy:function(){d.remove(this.set);d.remove(this.labelsSet);var a=this.axisLine;a&&d.remove(a.axisSet);d.remove(this.grid0)},chooseMinorFrequency:function(a){for(var b=10;0<b;b--)if(a/b==Math.round(a/b))return a/b},parseDatesDraw:function(){var a,b=this.chart,c=this.showFirstLabel,e=this.showLastLabel,h,f="",g=d.extractPeriod(this.minPeriod),k=d.getPeriodDuration(g.period,g.count),l,m,p,q,n,t=this.firstDayOfWeek,r=this.boldPeriodBeginning;a=this.minorGridEnabled;var w,z=this.gridAlpha,x,u=this.choosePeriod(0),A=u.period,u=u.count,y=d.getPeriodDuration(A,u);y<k&&(A=g.period,u=g.count,y=k);g=A;"WW"==g&&(g="DD");this.stepWidth=this.getStepWidth(this.timeDifference);var B=Math.ceil(this.timeDifference/y)+5,D=l=d.resetDateToMin(new Date(this.startTime-y),A,u,t).getTime();if(g==A&&1==u&&this.centerLabelOnFullPeriod||this.autoWrap||this.centerLabels)p=y*this.stepWidth,this.autoWrap&&!this.centerLabels&&(p=-p);this.cellWidth=k*this.stepWidth;q=Math.round(l/y);k=-1;q/2==Math.round(q/2)&&(k=-2,l-=y);q=this.firstTime;var C=0,I=0;a&&1<u&&(w=this.chooseMinorFrequency(u),x=d.getPeriodDuration(A,w),"DD"==A&&(x+=d.getPeriodDuration("hh")),"fff"==A&&(x=1));if(0<this.gridCountR)for(B-5-k>this.autoRotateCount&&!isNaN(this.autoRotateAngle)&&(this.labelRotationR=this.autoRotateAngle),a=k;a<=B;a++){n=q+y*(a+Math.floor((D-q)/y))-C;"DD"==A&&(n+=36E5);n=d.resetDateToMin(new Date(n),A,u,t).getTime();"MM"==A&&(h=(n-l)/y,1.5<=(n-l)/y&&(n=n-(h-1)*y+d.getPeriodDuration("DD",3),n=d.resetDateToMin(new Date(n),A,1).getTime(),C+=y));h=(n-this.startTime)*this.stepWidth;if("radar"==b.type){if(h=this.axisWidth-
h,0>h||h>this.axisWidth)continue}else this.rotate?"date"==this.type&&"middle"==this.gridPosition&&(I=-y*this.stepWidth/2):"date"==this.type&&(h=this.axisWidth-h);f=!1;this.nextPeriod[g]&&(f=this.checkPeriodChange(this.nextPeriod[g],1,n,l,g));l=!1;f&&this.markPeriodChange?(f=this.dateFormatsObject[this.nextPeriod[g]],this.twoLineMode&&(f=this.dateFormatsObject[g]+"\n"+f,f=d.fixBrakes(f)),l=!0):f=this.dateFormatsObject[g];r||(l=!1);this.currentDateFormat=f;f=d.formatDate(new Date(n),f,b);if(a==k&&!c||a==B&&!e)f=" ";this.labelFunction&&(f=this.labelFunction(f,new Date(n),this,A,u,m).toString());this.boldLabels&&(l=!0);m=new this.axisItemRenderer(this,h,f,!1,p,I,!1,l);this.pushAxisItem(m);m=l=n;if(!isNaN(w))for(h=1;h<u;h+=w)this.gridAlpha=this.minorGridAlpha,f=n+x*h,f=d.resetDateToMin(new Date(f),A,w,t).getTime(),f=new this.axisItemRenderer(this,(f-this.startTime)*this.stepWidth,void 0,void 0,void 0,void 0,void 0,void 0,void 0,!0),this.pushAxisItem(f);this.gridAlpha=z}},choosePeriod:function(a){var b=d.getPeriodDuration(this.periods[a].period,this.periods[a].count),c=this.periods;return this.timeDifference<b&&0<a?c[a-1]:Math.ceil(this.timeDifference/b)<=this.gridCountR?c[a]:a+1<c.length?this.choosePeriod(a+1):c[a]},getStepWidth:function(a){var b;this.startOnAxis?(b=this.axisWidth/(a-1),1==a&&(b=this.axisWidth)):b=this.axisWidth/a;return b},timeZoom:function(a,b){this.startTime=a;this.endTime=b},minDuration:function(){var a=d.extractPeriod(this.minPeriod);return d.getPeriodDuration(a.period,a.count)},checkPeriodChange:function(a,b,c,e,h){c=new Date(c);var f=new Date(e),g=this.firstDayOfWeek;e=b;"DD"==a&&(b=1);c=d.resetDateToMin(c,a,b,g).getTime();b=d.resetDateToMin(f,a,b,g).getTime();return"DD"==a&&"hh"!=h&&c-b<d.getPeriodDuration(a,e)-d.getPeriodDuration("hh",1)?!1:c!=b?!0:!1},generateDFObject:function(){this.dateFormatsObject={};var a;for(a=0;a<this.dateFormats.length;a++){var b=this.dateFormats[a];this.dateFormatsObject[b.period]=b.format}},hideBalloon:function(){this.balloon&&this.balloon.hide&&this.balloon.hide();this.prevBY=this.prevBX=NaN},formatBalloonText:function(a){return a},showBalloon:function(a,b,c,e){var d=this.offset;switch(this.position){case"bottom":b=this.height+d;break;case"top":b=-d;break;case"left":a=-d;break;case"right":a=this.width+d}c||(c=this.currentDateFormat);if("V"==this.orientation){if(0>b||b>this.height)return;if(isNaN(b)){this.hideBalloon();return}b=this.adjustBalloonCoordinate(b,e);e=this.coordinateToValue(b)}else{if(0>a||a>this.width)return;if(isNaN(a)){this.hideBalloon();return}a=this.adjustBalloonCoordinate(a,e);e=this.coordinateToValue(a)}var f;if(d=this.chart.chartCursor)f=d.index;if(this.balloon&&void 0!==e&&this.balloon.enabled){if(this.balloonTextFunction){if("date"==this.type||!0===this.parseDates)e=new Date(e);e=this.balloonTextFunction(e)}else this.balloonText?e=this.formatBalloonText(this.balloonText,f,c):isNaN(e)||(e=this.formatValue(e,c));if(a!=this.prevBX||b!=this.prevBY)this.balloon.setPosition(a,b),this.prevBX=a,this.prevBY=b,e&&this.balloon.showBalloon(e)}},adjustBalloonCoordinate:function(a){return a},createBalloon:function(){var a=this.chart,b=a.chartCursor;b&&(b=b.cursorPosition,"mouse"!=b&&(this.stickBalloonToCategory=!0),"start"==b&&(this.stickBalloonToStart=!0),"ValueAxis"==this.cname&&(this.stickBalloonToCategory=!1));this.balloon&&(this.balloon.destroy&&this.balloon.destroy(),d.extend(this.balloon,a.balloon,!0))},setBalloonBounds:function(){var a=this.balloon;if(a){var b=this.chart;a.cornerRadius=0;a.shadowAlpha=0;a.borderThickness=1;a.borderAlpha=1;a.adjustBorderColor=!1;a.showBullet=!1;this.balloon=a;a.chart=b;a.mainSet=b.plotBalloonsSet;a.pointerWidth=this.tickLength;if(this.parseDates||"date"==this.type)a.pointerWidth=0;a.className=this.id;b="V";"V"==this.orientation&&(b="H");this.stickBalloonToCategory||(a.animationDuration=0);var c,e,d,f,g=this.inside,k=this.width,l=this.height;switch(this.position){case"bottom":c=0;e=k;g?(d=0,f=l):(d=l,f=l+1E3);break;case"top":c=0;e=k;g?(d=0,f=l):(d=-1E3,f=0);break;case"left":d=0;f=l;g?(c=0,e=k):(c=-1E3,e=0);break;case"right":d=0,f=l,g?(c=0,e=k):(c=k,e=k+1E3)}a.drop||(a.pointerOrientation=b);a.setBounds(c,d,e,f)}}})})();(function(){var d=window.AmCharts;d.ValueAxis=d.Class({inherits:d.AxisBase,construct:function(a){this.cname="ValueAxis";this.createEvents("axisChanged","logarithmicAxisFailed","axisZoomed","axisIntZoomed");d.ValueAxis.base.construct.call(this,a);this.dataChanged=!0;this.stackType="none";this.position="left";this.unitPosition="right";this.includeAllValues=this.recalculateToPercents=this.includeHidden=this.includeGuidesInMinMax=this.integersOnly=!1;this.durationUnits={DD:"d. ",hh:":",mm:":",ss:""};this.scrollbar=!1;this.baseValue=0;this.radarCategoriesEnabled=!0;this.axisFrequency=1;this.gridType="polygons";this.useScientificNotation=!1;this.axisTitleOffset=10;this.pointPosition="axis";this.minMaxMultiplier=1;this.logGridLimit=2;this.totalTextOffset=this.treatZeroAs=0;this.minPeriod="ss";this.relativeStart=0;this.relativeEnd=1;d.applyTheme(this,a,this.cname)},updateData:function(){0>=this.gridCountR&&(this.gridCountR=1);this.totals=[];this.data=this.chart.chartData;var a=this.chart;"xy"!=a.type&&(this.stackGraphs("smoothedLine"),this.stackGraphs("line"),this.stackGraphs("column"),this.stackGraphs("step"));this.recalculateToPercents&&this.recalculate();if(this.synchronizationMultiplier&&this.synchronizeWith)d.isString(this.synchronizeWith)&&(this.synchronizeWith=a.getValueAxisById(this.synchronizeWith)),this.synchronizeWith&&(this.synchronizeWithAxis(this.synchronizeWith),this.foundGraphs=!0);else if(this.foundGraphs=!1,this.getMinMax(),0===this.start&&this.end==this.data.length-1&&isNaN(this.minZoom)&&isNaN(this.maxZoom)||isNaN(this.fullMin)&&isNaN(this.fullMax))this.fullMin=this.min,this.fullMax=this.max,"date"!=this.type&&this.strictMinMax&&(isNaN(this.minimum)||(this.fullMin=this.minimum),isNaN(this.maximum)||(this.fullMax=this.maximum)),this.logarithmic&&(this.fullMin=this.logMin,0===this.fullMin&&(this.fullMin=this.treatZeroAs)),"date"==this.type&&(this.minimumDate||(this.fullMin=this.minRR),this.maximumDate||(this.fullMax=this.maxRR),this.strictMinMax&&(this.minimumDate&&(this.fullMin=this.minimumDate.getTime()),this.maximumDate&&(this.fullMax=this.maximumDate.getTime())))},draw:function(){d.ValueAxis.base.draw.call(this);var a=this.chart,b=this.set;this.labelRotationR=this.labelRotation;d.setCN(a,this.set,"value-axis value-axis-"+this.id);d.setCN(a,this.labelsSet,"value-axis value-axis-"+this.id);d.setCN(a,this.axisLine.axisSet,"value-axis value-axis-"+this.id);var c=this.type;"duration"==c&&(this.duration="ss");!0===this.dataChanged&&(this.updateData(),this.dataChanged=!1);"date"==c&&(this.logarithmic=!1,this.min=this.minRR,this.max=this.maxRR,this.reversed=!1,this.getDateMinMax());if(this.logarithmic){var e=this.treatZeroAs,h=this.getExtremes(0,this.data.length-1).min;!isNaN(this.minimum)&&this.minimum<h&&(h=this.minimum);this.logMin=h;this.minReal<h&&(this.minReal=h);isNaN(this.minReal)&&(this.minReal=h);0<e&&0===h&&(this.minReal=h=e);if(0>=h||0>=this.minimum){this.fire({type:"logarithmicAxisFailed",chart:a});return}}this.grid0=null;var f,g,k=a.dx,l=a.dy,e=!1,h=this.logarithmic;if(isNaN(this.min)||isNaN(this.max)||!this.foundGraphs||Infinity==this.min||-Infinity==this.max)e=!0;else{"date"==this.type&&this.min==this.max&&(this.max+=this.minDuration(),this.min-=this.minDuration());var m=this.labelFrequency,p=this.showFirstLabel,q=this.showLastLabel,n=1,t=0;this.minCalc=this.min;this.maxCalc=this.max;if(this.strictMinMax&&(isNaN(this.minimum)||(this.min=this.minimum),isNaN(this.maximum)||(this.max=this.maximum),this.min==this.max))return;isNaN(this.minZoom)||(this.minReal=this.min=this.minZoom);isNaN(this.maxZoom)||(this.max=this.maxZoom);if(this.logarithmic){g=this.fullMin;var r=this.fullMax;isNaN(this.minimum)||(g=this.minimum);isNaN(this.maximum)||(r=this.maximum);var r=Math.log(r)*Math.LOG10E-Math.log(g)*Math.LOG10E,w=Math.log(this.max)/Math.LN10-Math.log(g)*Math.LOG10E;this.relativeStart=d.roundTo((Math.log(this.minReal)/Math.LN10-Math.log(g)*Math.LOG10E)/r,5);this.relativeEnd=d.roundTo(w/r,5)}else this.relativeStart=d.roundTo(d.fitToBounds((this.min-this.fullMin)/(this.fullMax-this.fullMin),
0,1),5),this.relativeEnd=d.roundTo(d.fitToBounds((this.max-this.fullMin)/(this.fullMax-this.fullMin),0,1),5);var r=Math.round((this.maxCalc-this.minCalc)/this.step)+1,z;!0===h?(z=Math.log(this.max)*Math.LOG10E-Math.log(this.minReal)*Math.LOG10E,this.stepWidth=this.axisWidth/z,z>this.logGridLimit&&(r=Math.ceil(Math.log(this.max)*Math.LOG10E)+1,t=Math.round(Math.log(this.minReal)*Math.LOG10E),r>this.gridCountR&&(n=Math.ceil(r/this.gridCountR)))):this.stepWidth=this.axisWidth/(this.max-this.min);var x=
0;1>this.step&&-1<this.step&&(x=d.getDecimals(this.step));this.integersOnly&&(x=0);x>this.maxDecCount&&(x=this.maxDecCount);w=this.precision;isNaN(w)||(x=w);isNaN(this.maxZoom)&&(this.max=d.roundTo(this.max,this.maxDecCount),this.min=d.roundTo(this.min,this.maxDecCount));g={};g.precision=x;g.decimalSeparator=a.nf.decimalSeparator;g.thousandsSeparator=a.nf.thousandsSeparator;this.numberFormatter=g;var u;this.exponential=!1;for(g=t;g<r;g+=n){var A=d.roundTo(this.step*g+this.min,x);-1!=String(A).indexOf("e")&&(this.exponential=!0)}this.duration&&(this.maxInterval=d.getMaxInterval(this.max,this.duration));var x=this.step,y,A=this.minorGridAlpha;this.minorGridEnabled&&(y=this.getMinorGridStep(x,this.stepWidth*x));if(this.autoGridCount||0!==this.gridCount)if("date"==c)this.generateDFObject(),this.timeDifference=this.max-this.min,this.maxTime=this.lastTime=this.max,this.startTime=this.firstTime=this.min,this.parseDatesDraw();else for(r>=this.autoRotateCount&&!isNaN(this.autoRotateAngle)&&(this.labelRotationR=this.autoRotateAngle),c=this.minCalc,h&&(r++,c=this.maxCalc-r*x),this.gridCountReal=r,g=this.startCount=t;g<r;g+=n)if(t=x*g+c,t=d.roundTo(t,this.maxDecCount+1),!this.integersOnly||Math.round(t)==t)if(isNaN(w)||Number(d.toFixed(t,w))==t){if(!0===h)if(z>this.logGridLimit)t=Math.pow(10,g);else if(0>=t&&(t=c+x*g+x/2,0>=t))continue;u=this.formatValue(t,!1,g);Math.round(g/m)!=g/m&&(u=void 0);if(0===g&&!p||g==r-1&&!q)u=" ";f=this.getCoordinate(t);var B;this.rotate&&this.autoWrap&&(B=this.stepWidth*x-10);u=new this.axisItemRenderer(this,f,u,void 0,B,void 0,void 0,this.boldLabels);this.pushAxisItem(u);if(t==this.baseValue&&"radar"!=a.type){var D,C,I=this.width,H=this.height;"H"==this.orientation?0<=f&&f<=I+1&&(D=[f,f,f+k],C=[H,0,l]):0<=f&&f<=H+1&&(D=[0,I,I+k],C=[f,f,f+l]);D&&(f=d.fitToBounds(2*this.gridAlpha,0,1),isNaN(this.zeroGridAlpha)||(f=this.zeroGridAlpha),f=d.line(a.container,D,C,this.gridColor,f,1,this.dashLength),f.translate(this.x,this.y),this.grid0=f,a.axesSet.push(f),f.toBack(),d.setCN(a,f,this.bcn+"zero-grid-"+this.id),d.setCN(a,f,this.bcn+"zero-grid"))}if(!isNaN(y)&&0<A&&g<r-1){f=x/y;h&&(y=x*(g+n)+this.minCalc,y=d.roundTo(y,this.maxDecCount+1),z>this.logGridLimit&&(y=Math.pow(10,g+n)),f=9,y=(y-t)/f);I=this.gridAlpha;this.gridAlpha=this.minorGridAlpha;for(H=1;H<f;H++){var Q=this.getCoordinate(t+y*H),Q=new this.axisItemRenderer(this,Q,"",!1,0,0,!1,!1,0,!0);this.pushAxisItem(Q)}this.gridAlpha=I}}z=this.guides;B=z.length;if(0<B){D=this.fillAlpha;for(g=this.fillAlpha=0;g<B;g++)C=z[g],
k=NaN,y=C.above,isNaN(C.toValue)||(k=this.getCoordinate(C.toValue),u=new this.axisItemRenderer(this,k,"",!0,NaN,NaN,C),this.pushAxisItem(u,y)),l=NaN,isNaN(C.value)||(l=this.getCoordinate(C.value),u=new this.axisItemRenderer(this,l,C.label,!0,NaN,(k-l)/2,C),this.pushAxisItem(u,y)),isNaN(k)&&(l-=3,k=l+3),u&&(m=u.label)&&this.addEventListeners(m,C),isNaN(k-l)||0>l&&0>k||(k=new this.guideFillRenderer(this,l,k,C),this.pushAxisItem(k,y),y=k.graphics(),C.graphics=y,this.addEventListeners(y,C));this.fillAlpha=
D}u=this.baseValue;this.min>this.baseValue&&this.max>this.baseValue&&(u=this.min);this.min<this.baseValue&&this.max<this.baseValue&&(u=this.max);h&&u<this.minReal&&(u=this.minReal);this.baseCoord=this.getCoordinate(u,!0);u={type:"axisChanged",target:this,chart:a};u.min=h?this.minReal:this.min;u.max=this.max;this.fire(u);this.axisCreated=!0}h=this.axisLine.set;u=this.labelsSet;b.translate(this.x,this.y);u.translate(this.x,this.y);this.positionTitle();"radar"!=a.type&&h.toFront();!this.visible||e?(b.hide(),h.hide(),u.hide()):(b.show(),h.show(),u.show());this.axisY=this.y;this.axisX=this.x},getDateMinMax:function(){this.minimumDate&&(this.minimumDate instanceof Date||(this.minimumDate=d.getDate(this.minimumDate,this.chart.dataDateFormat,"fff")),this.min=this.minimumDate.getTime());this.maximumDate&&(this.maximumDate instanceof Date||(this.maximumDate=d.getDate(this.maximumDate,this.chart.dataDateFormat,"fff")),this.max=this.maximumDate.getTime())},formatValue:function(a,b,c){var e=this.exponential,h=this.logarithmic,f=this.numberFormatter,g=this.chart;if(f)return!0===this.logarithmic&&(e=-1!=String(a).indexOf("e")?!0:!1),this.useScientificNotation&&(e=!0),this.usePrefixes&&(e=!1),e?(c=-1==String(a).indexOf("e")?a.toExponential(15):String(a),e=c.split("e"),c=Number(e[0]),e=Number(e[1]),c=d.roundTo(c,14),b||isNaN(this.precision)||(c=d.roundTo(c,this.precision)),10==c&&(c=1,e+=1),c=c+"e"+e,0===a&&(c="0"),1==a&&(c="1")):(h&&(e=String(a).split("."),e[1]?(f.precision=e[1].length,0>c&&(f.precision=Math.abs(c)),b&&1<a&&(f.precision=0),b||isNaN(this.precision)||(f.precision=this.precision)):f.precision=-1),c=this.usePrefixes?d.addPrefix(a,g.prefixesOfBigNumbers,g.prefixesOfSmallNumbers,f,!b):d.formatNumber(a,f,f.precision)),this.duration&&(b&&(f.precision=0),c=d.formatDuration(a,this.duration,"",this.durationUnits,this.maxInterval,f)),"date"==this.type&&(c=d.formatDate(new Date(a),this.currentDateFormat,g)),this.recalculateToPercents?c+="%":(b=this.unit)&&(c="left"==this.unitPosition?b+c:c+b),this.labelFunction&&(c="date"==this.type?this.labelFunction(c,new Date(a),this).toString():this.labelFunction(a,c,this).toString()),c},getMinorGridStep:function(a,b){var c=[5,4,2];60>b&&c.shift();for(var e=Math.floor(Math.log(Math.abs(a))*Math.LOG10E),d=0;d<c.length;d++){var f=a/c[d],g=Math.floor(Math.log(Math.abs(f))*Math.LOG10E);if(!(1<Math.abs(e-g)))if(1>a){if(g=Math.pow(10,-g)*f,g==Math.round(g))return f}else if(f==Math.round(f))return f}},stackGraphs:function(a){var b=this.stackType;"stacked"==b&&(b="regular");"line"==b&&(b="none");"100% stacked"==b&&(b="100%");this.stackType=b;var c=[],e=[],h=[],f=[],g,k=this.chart.graphs,l,m,p,q,n,t=this.baseValue,r=!1;if("line"==a||"step"==a||"smoothedLine"==a)r=!0;if(r&&("regular"==b||"100%"==b))for(q=0;q<k.length;q++)p=k[q],p.stackGraph=null,p.hidden||(m=p.type,p.chart==this.chart&&p.valueAxis==this&&a==m&&p.stackable&&(l&&(p.stackGraph=l),l=p));p=this.start-10;l=this.end+10;q=this.data.length-1;p=d.fitToBounds(p,0,q);l=d.fitToBounds(l,0,q);for(n=p;n<=l;n++){var w=0;for(q=0;q<k.length;q++)if(p=k[q],p.hidden)p.newStack&&(h[n]=NaN,e[n]=NaN);else if(m=p.type,p.chart==this.chart&&p.valueAxis==this&&a==m&&p.stackable)if(m=this.data[n].axes[this.id].graphs[p.id],g=m.values.value,isNaN(g))p.newStack&&(h[n]=NaN,e[n]=NaN);else{var z=d.getDecimals(g);w<z&&(w=z);isNaN(f[n])?f[n]=Math.abs(g):f[n]+=Math.abs(g);f[n]=d.roundTo(f[n],w);z=p.fillToGraph;r&&z&&(z=this.data[n].axes[this.id].graphs[z.id])&&(m.values.open=z.values.value);"regular"==b&&(r&&(isNaN(c[n])?(c[n]=g,m.values.close=g,m.values.open=this.baseValue):(isNaN(g)?m.values.close=c[n]:m.values.close=g+c[n],m.values.open=c[n],c[n]=m.values.close)),"column"==a&&(p.newStack&&(h[n]=NaN,e[n]=NaN),m.values.close=g,0>g?(m.values.close=g,isNaN(e[n])?m.values.open=t:(m.values.close+=e[n],m.values.open=e[n]),e[n]=m.values.close):(m.values.close=g,isNaN(h[n])?m.values.open=t:(m.values.close+=h[n],m.values.open=h[n]),h[n]=m.values.close)))}}for(n=this.start;n<=this.end;n++)for(q=0;q<k.length;q++)(p=k[q],p.hidden)?p.newStack&&(h[n]=NaN,e[n]=NaN):(m=p.type,p.chart==this.chart&&p.valueAxis==this&&a==m&&p.stackable&&(m=this.data[n].axes[this.id].graphs[p.id],g=m.values.value,isNaN(g)||(c=g/f[n]*100,m.values.percents=c,m.values.total=f[n],p.newStack&&(h[n]=NaN,e[n]=NaN),"100%"==b&&(isNaN(e[n])&&(e[n]=0),isNaN(h[n])&&(h[n]=0),0>c?(m.values.close=d.fitToBounds(c+e[n],-100,100),m.values.open=e[n],e[n]=m.values.close):(m.values.close=d.fitToBounds(c+h[n],-100,100),m.values.open=h[n],h[n]=m.values.close)))))},recalculate:function(){var a=this.chart,b=a.graphs,c;for(c=0;c<b.length;c++){var e=b[c];if(e.valueAxis==this){var h="value";if("candlestick"==e.type||"ohlc"==e.type)h="open";var f,g,k=this.end+2,k=d.fitToBounds(this.end+1,0,this.data.length-1),l=this.start;0<l&&l--;var m;g=this.start;e.compareFromStart&&(g=0);if(!isNaN(a.startTime)&&(m=a.categoryAxis)){var p=m.minDuration(),p=new Date(a.startTime+p/2),q=d.resetDateToMin(new Date(a.startTime),m.minPeriod).getTime();d.resetDateToMin(new Date(p),m.minPeriod).getTime()>q&&g++}if(m=a.recalculateFromDate)m=d.getDate(m,a.dataDateFormat,"fff"),g=a.getClosestIndex(a.chartData,"time",m.getTime(),!0,0,a.chartData.length),k=a.chartData.length-1;for(m=g;m<=k&&(g=this.data[m].axes[this.id].graphs[e.id],f=g.values[h],e.recalculateValue&&(f=g.dataContext[e.valueField+e.recalculateValue]),isNaN(f));m++);this.recBaseValue=f;for(h=l;h<=k;h++){g=this.data[h].axes[this.id].graphs[e.id];g.percents={};var l=g.values,n;for(n in l)g.percents[n]="percents"!=n?l[n]/f*100-100:l[n]}}}},getMinMax:function(){var a=!1,b=this.chart,c=b.graphs,e;for(e=0;e<c.length;e++){var h=c[e].type;("line"==h||"step"==h||"smoothedLine"==h)&&this.expandMinMax&&(a=!0)}a&&(0<this.start&&this.start--,this.end<this.data.length-1&&this.end++);"serial"==b.type&&(!0!==b.categoryAxis.parseDates||a||this.end<this.data.length-1&&this.end++);this.includeAllValues&&(this.start=0,this.end=this.data.length-1);a=this.minMaxMultiplier;b=this.getExtremes(this.start,this.end);this.min=b.min;this.max=b.max;this.minRR=this.min;this.maxRR=this.max;a=(this.max-this.min)*(a-1);this.min-=a;this.max+=a;a=this.guides.length;if(this.includeGuidesInMinMax&&0<a)for(b=0;b<a;b++)c=this.guides[b],c.toValue<this.min&&(this.min=c.toValue),c.value<this.min&&(this.min=c.value),c.toValue>this.max&&(this.max=c.toValue),c.value>this.max&&(this.max=c.value);isNaN(this.minimum)||(this.min=this.minimum);isNaN(this.maximum)||(this.max=this.maximum);"date"==this.type&&this.getDateMinMax();this.min>this.max&&(a=this.max,this.max=this.min,this.min=a);isNaN(this.minZoom)||(this.min=this.minZoom);isNaN(this.maxZoom)||(this.max=this.maxZoom);this.minCalc=this.min;this.maxCalc=this.max;this.minReal=this.min;this.maxReal=this.max;0===this.min&&0===this.max&&(this.max=9);this.min>this.max&&(this.min=this.max-1);a=this.min;b=this.max;c=this.max-this.min;e=0===c?Math.pow(10,Math.floor(Math.log(Math.abs(this.max))*Math.LOG10E))/10:Math.pow(10,Math.floor(Math.log(Math.abs(c))*Math.LOG10E))/10;isNaN(this.maximum)&&(this.max=Math.ceil(this.max/e)*e+e);isNaN(this.minimum)&&(this.min=
Math.floor(this.min/e)*e-e);0>this.min&&0<=a&&(this.min=0);0<this.max&&0>=b&&(this.max=0);"100%"==this.stackType&&(this.min=0>this.min?-100:0,this.max=0>this.max?0:100);c=this.max-this.min;e=Math.pow(10,Math.floor(Math.log(Math.abs(c))*Math.LOG10E))/10;this.step=Math.ceil(c/this.gridCountR/e)*e;c=Math.pow(10,Math.floor(Math.log(Math.abs(this.step))*Math.LOG10E));c=d.fixStepE(c);e=Math.ceil(this.step/c);5<e&&(e=10);5>=e&&2<e&&(e=5);this.step=Math.ceil(this.step/(c*e))*c*e;isNaN(this.setStep)||(this.step=
this.setStep);1>c?(this.maxDecCount=Math.abs(Math.log(Math.abs(c))*Math.LOG10E),this.maxDecCount=Math.round(this.maxDecCount),this.step=d.roundTo(this.step,this.maxDecCount+1)):this.maxDecCount=0;this.min=this.step*Math.floor(this.min/this.step);this.max=this.step*Math.ceil(this.max/this.step);0>this.min&&0<=a&&(this.min=0);0<this.max&&0>=b&&(this.max=0);1<this.minReal&&1<this.max-this.minReal&&(this.minReal=Math.floor(this.minReal));c=Math.pow(10,Math.floor(Math.log(Math.abs(this.minReal))*Math.LOG10E));0===this.min&&(this.minReal=c);0===this.min&&1<this.minReal&&(this.minReal=1);0<this.min&&0<this.minReal-this.step&&(this.minReal=this.min+this.step<this.minReal?this.min+this.step:this.min);this.logarithmic&&(2<Math.log(b)*Math.LOG10E-Math.log(a)*Math.LOG10E?(this.minReal=this.min=Math.pow(10,Math.floor(Math.log(Math.abs(a))*Math.LOG10E)),this.maxReal=this.max=Math.pow(10,Math.ceil(Math.log(Math.abs(b))*Math.LOG10E))):(a=Math.pow(10,Math.floor(Math.log(Math.abs(a))*Math.LOG10E))/10,Math.pow(10,Math.floor(Math.log(Math.abs(this.min))*
Math.LOG10E))/10<a&&(this.minReal=this.min=10*a)))},getExtremes:function(a,b){var c,e,d;for(d=a;d<=b;d++){var f=this.data[d].axes[this.id].graphs,g;for(g in f)if(f.hasOwnProperty(g)){var k=this.chart.graphsById[g];if(k.includeInMinMax&&(!k.hidden||this.includeHidden)){isNaN(c)&&(c=Infinity);isNaN(e)&&(e=-Infinity);this.foundGraphs=!0;k=f[g].values;this.recalculateToPercents&&(k=f[g].percents);var l;if(this.minMaxField)l=k[this.minMaxField],l<c&&(c=l),l>e&&(e=l);else for(var m in k)k.hasOwnProperty(m)&&
"percents"!=m&&"total"!=m&&"error"!=m&&(l=k[m],l<c&&(c=l),l>e&&(e=l))}}}return{min:c,max:e}},zoomOut:function(a){this.maxZoom=this.minZoom=NaN;this.zoomToRelativeValues(0,1,a)},zoomToRelativeValues:function(a,b,c){if(this.reversed){var e=a;a=1-b;b=1-e}var d=this.fullMax,e=this.fullMin,f=e+(d-e)*a,g=e+(d-e)*b;0<=this.minimum&&0>f&&(f=0);this.logarithmic&&(isNaN(this.minimum)||(e=this.minimum),isNaN(this.maximum)||(d=this.maximum),d=Math.log(d)*Math.LOG10E-Math.log(e)*Math.LOG10E,f=Math.pow(10,d*a+
Math.log(e)*Math.LOG10E),g=Math.pow(10,d*b+Math.log(e)*Math.LOG10E));return this.zoomToValues(f,g,c)},zoomToValues:function(a,b,c){if(b<a){var e=b;b=a;a=e}var h=this.fullMax,e=this.fullMin;this.relativeStart=d.roundTo((a-e)/(h-e),9);this.relativeEnd=d.roundTo((b-e)/(h-e),9);if(this.logarithmic){isNaN(this.minimum)||(e=this.minimum);isNaN(this.maximum)||(h=this.maximum);var h=Math.log(h)*Math.LOG10E-Math.log(e)*Math.LOG10E,f=Math.log(b)/Math.LN10-Math.log(e)*Math.LOG10E;this.relativeStart=d.roundTo((Math.log(a)/
Math.LN10-Math.log(e)*Math.LOG10E)/h,9);this.relativeEnd=d.roundTo(f/h,9)}if(this.minZoom!=a||this.maxZoom!=b)return this.minZoom=a,this.maxZoom=b,e={type:"axisZoomed"},e.chart=this.chart,e.valueAxis=this,e.startValue=a,e.endValue=b,e.relativeStart=this.relativeStart,e.relativeEnd=this.relativeEnd,this.prevStartValue==a&&this.prevEndValue==b||this.fire(e),this.prevStartValue=a,this.prevEndValue=b,c||(a={},d.copyProperties(e,a),a.type="axisIntZoomed",this.fire(a)),0===this.relativeStart&&1==this.relativeEnd&&
(this.maxZoom=this.minZoom=NaN),!0},coordinateToValue:function(a){if(isNaN(a))return NaN;var b=this.axisWidth,c=this.stepWidth,e=this.reversed,d=this.rotate,f=this.min,g=this.minReal;return!0===this.logarithmic?Math.pow(10,(d?!0===e?(b-a)/c:a/c:!0===e?a/c:(b-a)/c)+Math.log(g)*Math.LOG10E):!0===e?d?f-(a-b)/c:a/c+f:d?a/c+f:f-(a-b)/c},getCoordinate:function(a,b){if(isNaN(a))return NaN;var c=this.rotate,e=this.reversed,d=this.axisWidth,f=this.stepWidth,g=this.min,k=this.minReal;!0===this.logarithmic?
(0===a&&(a=this.treatZeroAs),g=Math.log(a)*Math.LOG10E-Math.log(k)*Math.LOG10E,c=c?!0===e?d-f*g:f*g:!0===e?f*g:d-f*g):c=!0===e?c?d-f*(a-g):f*(a-g):c?f*(a-g):d-f*(a-g);1E7<Math.abs(c)&&(c=c/Math.abs(c)*1E7);b||(c=Math.round(c));return c},synchronizeWithAxis:function(a){this.synchronizeWith=a;this.listenTo(this.synchronizeWith,"axisChanged",this.handleSynchronization)},handleSynchronization:function(){if(this.synchronizeWith){d.isString(this.synchronizeWith)&&(this.synchronizeWith=this.chart.getValueAxisById(this.synchronizeWith));var a=this.synchronizeWith,b=a.min,c=a.max,a=a.step,e=this.synchronizationMultiplier;e&&(this.min=b*e,this.max=c*e,this.step=a*e,b=Math.abs(Math.log(Math.abs(Math.pow(10,Math.floor(Math.log(Math.abs(this.step))*Math.LOG10E))))*Math.LOG10E),this.maxDecCount=b=Math.round(b),this.draw())}}})})();(function(){var d=window.AmCharts;d.RecAxis=d.Class({construct:function(a){var b=a.chart,c=a.axisThickness,e=a.axisColor,h=a.axisAlpha,f=a.offset,g=a.dx,k=a.dy,l=a.x,m=a.y,p=a.height,q=a.width,n=b.container;"H"==a.orientation?(e=d.line(n,[0,q],[0,0],e,h,c),this.axisWidth=a.width,"bottom"==a.position?(k=c/2+f+p+m-1,c=l):(k=-c/2-f+m+k,c=g+l)):(this.axisWidth=a.height,"right"==a.position?(e=d.line(n,[0,0,-g],[0,p,p-k],e,h,c),k=m+k,c=c/2+f+g+q+l-1):(e=d.line(n,[0,0],[0,p],e,h,c),k=m,c=-c/2-f+l));e.translate(c,k);c=b.container.set();c.push(e);b.axesSet.push(c);d.setCN(b,e,a.bcn+"line");this.axisSet=c;this.set=e}})})();(function(){var d=window.AmCharts;d.RecItem=d.Class({construct:function(a,b,c,e,h,f,g,k,l,m,p,q){b=Math.round(b);var n=a.chart;this.value=c;void 0==c&&(c="");l||(l=0);void 0==e&&(e=!0);var t=n.fontFamily,r=a.fontSize;void 0==r&&(r=n.fontSize);var w=a.color;void 0==w&&(w=n.color);void 0!==p&&(w=p);var z=a.chart.container,x=z.set();this.set=x;var u=a.axisThickness,A=a.axisColor,y=a.axisAlpha,B=a.tickLength,D=a.gridAlpha,C=a.gridThickness,I=a.gridColor,H=a.dashLength,Q=a.fillColor,M=a.fillAlpha,P=a.labelsEnabled;p=a.labelRotationR;var ia=a.counter,J=a.inside,aa=a.labelOffset,ma=a.dx,na=a.dy,Pa=a.orientation,Z=a.position,da=a.previousCoord,X=a.height,xa=a.width,ea=a.offset,fa,Ba;g?(void 0!==g.id&&(q=n.classNamePrefix+"-guide-"+g.id),P=!0,isNaN(g.tickLength)||(B=g.tickLength),void 0!=g.lineColor&&(I=g.lineColor),void 0!=g.color&&(w=g.color),isNaN(g.lineAlpha)||(D=g.lineAlpha),isNaN(g.dashLength)||(H=g.dashLength),isNaN(g.lineThickness)||(C=g.lineThickness),!0===g.inside&&(J=!0,0<ea&&(ea=0)),isNaN(g.labelRotation)||(p=g.labelRotation),isNaN(g.fontSize)||(r=g.fontSize),g.position&&(Z=g.position),void 0!==g.boldLabel&&(k=g.boldLabel),isNaN(g.labelOffset)||(aa=g.labelOffset)):""===c&&(B=0);m&&!isNaN(a.minorTickLength)&&(B=a.minorTickLength);var ga="start";0<h&&(ga="middle");a.centerLabels&&(ga="middle");var V=p*Math.PI/180,Y,Da,G=0,v=0,oa=0,ha=Y=0,Qa=0;"V"==Pa&&(p=0);var ca;P&&""!==c&&(ca=a.autoWrap&&0===p?d.wrappedText(z,c,w,t,r,ga,k,Math.abs(h),0):d.text(z,c,w,t,r,ga,k),ga=ca.getBBox(),ha=ga.width,Qa=ga.height);if("H"==Pa){if(0<=b&&b<=xa+1&&(0<B&&0<y&&b+l<=xa+1&&(fa=d.line(z,[b+l,b+l],[0,B],A,y,C),x.push(fa)),0<D&&(Ba=d.line(z,[b,b+ma,b+ma],[X,X+na,na],I,D,C,H),x.push(Ba))),v=0,G=b,g&&90==p&&J&&(G-=r),!1===e?(ga="start",v="bottom"==Z?J?v+B:v-B:J?v-B:v+B,G+=3,0<h&&(G+=h/2-3,ga="middle"),0<p&&(ga="middle")):ga="middle",1==ia&&0<M&&!g&&!m&&da<xa&&(e=d.fitToBounds(b,0,xa),da=d.fitToBounds(da,0,xa),Y=e-da,0<Y&&(Da=d.rect(z,Y,a.height,Q,M),Da.translate(e-Y+ma,na),x.push(Da))),"bottom"==Z?(v+=X+r/2+ea,J?(0<p?(v=X-ha/2*Math.sin(V)-B-3,a.centerRotatedLabels||(G+=ha/2*Math.cos(V)-4+2)):0>p?(v=X+ha*Math.sin(V)-B-3+2,G+=-ha*Math.cos(V)-Qa*Math.sin(V)-4):v-=B+r+3+3,v-=aa):(0<p?(v=X+ha/2*Math.sin(V)+B+3,a.centerRotatedLabels||(G-=ha/2*Math.cos(V))):0>p?(v=X+B+3-ha/2*Math.sin(V)+2,G+=ha/2*Math.cos(V)):v+=B+u+3+3,v+=aa)):(v+=na+r/2-ea,G+=ma,J?(0<p?(v=ha/2*Math.sin(V)+B+3,a.centerRotatedLabels||(G-=ha/2*Math.cos(V))):v+=B+3,v+=aa):(0<p?(v=-(ha/2)*Math.sin(V)-B-6,a.centerRotatedLabels||(G+=ha/2*Math.cos(V))):v-=B+
r+3+u+3,v-=aa)),"bottom"==Z?Y=(J?X-B-1:X+u-1)+ea:(oa=ma,Y=(J?na:na-B-u+1)-ea),f&&(G+=f),r=G,0<p&&(r+=ha/2*Math.cos(V)),ca&&(f=0,J&&(f=ha/2*Math.cos(V)),r+f>xa+2||0>r))ca.remove(),ca=null}else{0<=b&&b<=X+1&&(0<B&&0<y&&b+l<=X+1&&(fa=d.line(z,[0,B+1],[b+l,b+l],A,y,C),x.push(fa)),0<D&&(Ba=d.line(z,[0,ma,xa+ma],[b,b+na,b+na],I,D,C,H),x.push(Ba)));ga="end";if(!0===J&&"left"==Z||!1===J&&"right"==Z)ga="start";v=b-Qa/2+2;1==ia&&0<M&&!g&&!m&&(e=d.fitToBounds(b,0,X),da=d.fitToBounds(da,0,X),V=e-da,Da=d.polygon(z,[0,a.width,a.width,0],[0,0,V,V],Q,M),Da.translate(ma,e-V+na),x.push(Da));v+=r/2;"right"==Z?(G+=ma+xa+ea,v+=na,J?(f||(v-=r/2+3),G=G-(B+4)-aa):(G+=B+4+u,v-=2,G+=aa)):J?(G+=B+4-ea,f||(v-=r/2+3),g&&(G+=ma,v+=na),G+=aa):(G+=-B-u-4-2-ea,v-=2,G-=aa);fa&&("right"==Z?(oa+=ma+ea+xa-1,Y+=na,oa=J?oa-u:oa+u):(oa-=ea,J||(oa-=B+u)));f&&(v+=f);J=-3;"right"==Z&&(J+=na);ca&&(v>X+1||v<J-r/10)&&(ca.remove(),ca=null)}fa&&(fa.translate(oa,Y),d.setCN(n,fa,a.bcn+"tick"),d.setCN(n,fa,q,!0),g&&d.setCN(n,fa,"guide"));!1===a.visible&&(fa&&fa.remove(),ca&&(ca.remove(),ca=null));ca&&(ca.attr({"text-anchor":ga}),ca.translate(G,v,NaN,!0),0!==p&&ca.rotate(-p,a.chart.backgroundColor),a.allLabels.push(ca),this.label=ca,d.setCN(n,ca,a.bcn+"label"),d.setCN(n,ca,q,!0),g&&d.setCN(n,ca,"guide"));Ba&&(d.setCN(n,Ba,a.bcn+"grid"),d.setCN(n,Ba,q,!0),g&&d.setCN(n,Ba,"guide"));Da&&(d.setCN(n,Da,a.bcn+"fill"),d.setCN(n,Da,q,!0));m?Ba&&d.setCN(n,Ba,a.bcn+"grid-minor"):(a.counter=0===ia?1:0,a.previousCoord=b);0===this.set.node.childNodes.length&&this.set.remove()},graphics:function(){return this.set},getLabel:function(){return this.label}})})();(function(){var d=window.AmCharts;d.RecFill=d.Class({construct:function(a,b,c,e){var h=a.dx,f=a.dy,g=a.orientation,k=0;if(c<b){var l=b;b=c;c=l}var m=e.fillAlpha;isNaN(m)&&(m=0);var l=a.chart.container,p=e.fillColor;"V"==g?(b=d.fitToBounds(b,0,a.height),c=d.fitToBounds(c,0,a.height)):(b=d.fitToBounds(b,0,a.width),c=d.fitToBounds(c,0,a.width));c-=b;isNaN(c)&&(c=4,k=2,m=0);0>c&&"object"==typeof p&&(p=p.join(",").split(",").reverse());"V"==g?(g=d.rect(l,a.width,c,p,m),g.translate(h,b-k+f)):(g=d.rect(l,c,a.height,p,m),g.translate(b-k+h,f));d.setCN(a.chart,g,"guide-fill");e.id&&d.setCN(a.chart,g,"guide-fill-"+e.id);this.set=l.set([g])},graphics:function(){return this.set},getLabel:function(){}})})();(function(){var d=window.AmCharts;d.AmChart=d.Class({construct:function(a){this.svgIcons=this.tapToActivate=!0;this.theme=a;this.classNamePrefix="amcharts";this.addClassNames=!1;this.version="3.21.5";d.addChart(this);this.createEvents("buildStarted","dataUpdated","init","rendered","drawn","failed","resized","animationFinished");this.height=this.width="100%";this.dataChanged=!0;this.chartCreated=!1;this.previousWidth=this.previousHeight=0;this.backgroundColor="#FFFFFF";this.borderAlpha=this.backgroundAlpha=0;this.color=this.borderColor="#000000";this.fontFamily="Verdana";this.fontSize=11;this.usePrefixes=!1;this.autoResize=!0;this.autoDisplay=!1;this.addCodeCredits=this.accessible=!0;this.touchStartTime=this.touchClickDuration=0;this.precision=-1;this.percentPrecision=2;this.decimalSeparator=".";this.thousandsSeparator=",";this.labels=[];this.allLabels=[];this.titles=[];this.marginRight=this.marginLeft=this.autoMarginOffset=0;this.timeOuts=[];this.creditsPosition="top-left";var b=document.createElement("div"),c=b.style;c.overflow="hidden";c.position="relative";c.textAlign="left";this.chartDiv=b;b=document.createElement("div");c=b.style;c.overflow="hidden";c.position="relative";c.textAlign="left";this.legendDiv=b;this.titleHeight=0;this.hideBalloonTime=150;this.handDrawScatter=2;this.cssScale=this.handDrawThickness=1;this.cssAngle=0;this.prefixesOfBigNumbers=[{number:1E3,prefix:"k"},{number:1E6,prefix:"M"},{number:1E9,prefix:"G"},{number:1E12,prefix:"T"},{number:1E15,prefix:"P"},{number:1E18,prefix:"E"},{number:1E21,prefix:"Z"},{number:1E24,prefix:"Y"}];this.prefixesOfSmallNumbers=[{number:1E-24,prefix:"y"},{number:1E-21,prefix:"z"},{number:1E-18,prefix:"a"},{number:1E-15,prefix:"f"},{number:1E-12,prefix:"p"},{number:1E-9,prefix:"n"},{number:1E-6,prefix:"\u03bc"},{number:.001,prefix:"m"}];this.panEventsEnabled=!0;this.product="amcharts";this.animations=[];this.balloon=new d.AmBalloon(this.theme);this.balloon.chart=this;this.processTimeout=0;this.processCount=1E3;this.animatable=[];this.langObj={};d.applyTheme(this,a,"AmChart")},drawChart:function(){0<this.realWidth&&0<this.realHeight&&(this.drawBackground(),this.redrawLabels(),this.drawTitles(),this.brr(),this.renderFix(),this.chartDiv&&(this.boundingRect=this.chartDiv.getBoundingClientRect()))},makeAccessible:function(a,b,c){this.accessible&&a&&(c&&a.setAttr("role",c),a.setAttr("aria-label",b))},drawBackground:function(){d.remove(this.background);var a=this.container,b=this.backgroundColor,c=this.backgroundAlpha,e=this.set;d.isModern||0!==c||(c=.001);var h=this.updateWidth();this.realWidth=h;var f=this.updateHeight();this.realHeight=f;b=d.polygon(a,[0,h-1,h-1,0],[0,0,f-1,f-1],b,c,1,this.borderColor,this.borderAlpha);d.setCN(this,b,"bg");this.background=b;e.push(b);if(b=this.backgroundImage)a=a.image(b,0,0,h,f),d.setCN(this,b,"bg-image"),this.bgImg=a,e.push(a)},drawTitles:function(a){var b=this.titles;this.titleHeight=0;if(d.ifArray(b)){var c=20,e;for(e=0;e<b.length;e++){var h=b[e],h=d.processObject(h,d.Title,this.theme);if(!1!==h.enabled){var f=h.color;void 0===f&&(f=this.color);var g=h.size;isNaN(g)&&(g=this.fontSize+2);isNaN(h.alpha);var k=this.marginLeft,l=!0;void 0!==h.bold&&(l=h.bold);f=d.wrappedText(this.container,h.text,f,this.fontFamily,g,"middle",l,this.realWidth-35-this.marginRight-k);f.translate(k+(this.realWidth-this.marginRight-k)/2,c);f.node.style.pointerEvents="none";h.sprite=f;void 0!==h.tabIndex&&f.setAttr("tabindex",h.tabIndex);d.setCN(this,f,"title");h.id&&d.setCN(this,f,"title-"+h.id);f.attr({opacity:h.alpha});c+=f.getBBox().height+
5;a?f.remove():this.freeLabelsSet.push(f)}}this.titleHeight=c-10}},write:function(a){var b=this;if(b.listeners)for(var c=0;c<b.listeners.length;c++){var e=b.listeners[c];b.addListener(e.event,e.method)}b.fire({type:"buildStarted",chart:b});b.afterWriteTO&&clearTimeout(b.afterWriteTO);0<b.processTimeout?b.afterWriteTO=setTimeout(function(){b.afterWrite.call(b,a)},b.processTimeout):b.afterWrite(a)},afterWrite:function(a){var b;if(b="object"!=typeof a?document.getElementById(a):a){for(;b.firstChild;)b.removeChild(b.firstChild);this.div=b;b.style.overflow="hidden";b.style.textAlign="left";a=this.chartDiv;var c=this.legendDiv,e=this.legend,h=c.style,f=a.style;this.measure();this.previousHeight=this.divRealHeight;this.previousWidth=this.divRealWidth;var g,k=document.createElement("div");g=k.style;g.position="relative";this.containerDiv=k;k.className=this.classNamePrefix+"-main-div";a.className=this.classNamePrefix+"-chart-div";b.appendChild(k);(b=this.exportConfig)&&d.AmExport&&!this.AmExport&&(this.AmExport=new d.AmExport(this,b));this.amExport&&d.AmExport&&(this.AmExport=d.extend(this.amExport,new d.AmExport(this),!0));this.AmExport&&this.AmExport.init&&this.AmExport.init();if(e){e=this.addLegend(e,e.divId);if(e.enabled)switch(h.left=null,h.top=null,h.right=null,f.left=null,f.right=null,f.top=null,h.position="relative",f.position="relative",g.width="100%",g.height="100%",e.position){case"bottom":k.appendChild(a);k.appendChild(c);break;case"top":k.appendChild(c);k.appendChild(a);break;case"absolute":h.position="absolute";f.position="absolute";void 0!==e.left&&(h.left=e.left+"px");void 0!==e.right&&(h.right=e.right+"px");void 0!==e.top&&(h.top=e.top+"px");void 0!==e.bottom&&(h.bottom=e.bottom+"px");e.marginLeft=0;e.marginRight=0;k.appendChild(a);k.appendChild(c);break;case"right":h.position="relative";f.position="absolute";k.appendChild(a);k.appendChild(c);break;case"left":h.position="absolute";f.position="relative";k.appendChild(a);k.appendChild(c);break;case"outside":k.appendChild(a)}else k.appendChild(a);this.prevLegendPosition=e.position}else k.appendChild(a);this.listenersAdded||(this.addListeners(),this.listenersAdded=!0);(this.mouseWheelScrollEnabled||this.mouseWheelZoomEnabled)&&d.addWheelListeners();this.initChart()}},createLabelsSet:function(){d.remove(this.labelsSet);this.labelsSet=this.container.set();this.freeLabelsSet.push(this.labelsSet)},initChart:function(){this.balloon=d.processObject(this.balloon,d.AmBalloon,this.theme);window.AmCharts_path&&(this.path=window.AmCharts_path);void 0===this.path&&(this.path=d.getPath());void 0===this.path&&(this.path="amcharts/");this.path=d.normalizeUrl(this.path);void 0===this.pathToImages&&(this.pathToImages=this.path+"images/");this.initHC||(d.callInitHandler(this),this.initHC=!0);d.applyLang(this.language,this);var a=this.numberFormatter;a&&(isNaN(a.precision)||(this.precision=a.precision),void 0!==a.thousandsSeparator&&(this.thousandsSeparator=a.thousandsSeparator),void 0!==a.decimalSeparator&&(this.decimalSeparator=a.decimalSeparator));(a=this.percentFormatter)&&!isNaN(a.precision)&&(this.percentPrecision=a.precision);this.nf={precision:this.precision,thousandsSeparator:this.thousandsSeparator,decimalSeparator:this.decimalSeparator};this.pf={precision:this.percentPrecision,thousandsSeparator:this.thousandsSeparator,decimalSeparator:this.decimalSeparator};this.destroy();(a=this.container)?(a.container.innerHTML="",a.width=this.realWidth,a.height=this.realHeight,a.addDefs(this),this.chartDiv.appendChild(a.container)):a=new d.AmDraw(this.chartDiv,this.realWidth,this.realHeight,this);this.container=a;this.extension=".png";this.svgIcons&&d.SVG&&(this.extension=".svg");this.checkDisplay();this.checkTransform(this.div);a.chart=this;d.VML||d.SVG?(a.handDrawn=this.handDrawn,a.handDrawScatter=this.handDrawScatter,a.handDrawThickness=this.handDrawThickness,d.remove(this.set),this.set=a.set(),d.remove(this.gridSet),this.gridSet=a.set(),d.remove(this.cursorLineSet),this.cursorLineSet=a.set(),d.remove(this.graphsBehindSet),this.graphsBehindSet=a.set(),d.remove(this.bulletBehindSet),this.bulletBehindSet=a.set(),d.remove(this.columnSet),this.columnSet=a.set(),d.remove(this.graphsSet),this.graphsSet=a.set(),d.remove(this.trendLinesSet),this.trendLinesSet=a.set(),d.remove(this.axesSet),this.axesSet=a.set(),d.remove(this.cursorSet),this.cursorSet=a.set(),d.remove(this.scrollbarsSet),this.scrollbarsSet=a.set(),d.remove(this.bulletSet),this.bulletSet=a.set(),d.remove(this.freeLabelsSet),this.freeLabelsSet=a.set(),d.remove(this.axesLabelsSet),this.axesLabelsSet=a.set(),d.remove(this.balloonsSet),this.balloonsSet=a.set(),d.remove(this.plotBalloonsSet),this.plotBalloonsSet=a.set(),d.remove(this.zoomButtonSet),this.zoomButtonSet=a.set(),d.remove(this.zbSet),this.zbSet=null,d.remove(this.linkSet),this.linkSet=a.set()):this.fire({type:"failed",chart:this})},premeasure:function(){var a=this.div;if(a){try{this.boundingRect=this.chartDiv.getBoundingClientRect()}catch(e){}var b=a.offsetWidth,c=a.offsetHeight;a.clientHeight&&(b=a.clientWidth,c=a.clientHeight);if(b!=this.mw||c!=this.mh)this.mw=b,this.mh=c,this.measure()}},measure:function(){var a=this.div;if(a){var b=this.chartDiv,c=a.offsetWidth,e=a.offsetHeight,h=this.container;a.clientHeight&&(c=a.clientWidth,e=a.clientHeight);var e=Math.round(e),c=Math.round(c),a=Math.round(d.toCoordinate(this.width,c)),f=Math.round(d.toCoordinate(this.height,e));(c!=this.previousWidth||e!=this.previousHeight)&&0<a&&0<f&&(b.style.width=a+"px",b.style.height=f+"px",b.style.padding=0,h&&h.setSize(a,f),this.balloon=d.processObject(this.balloon,d.AmBalloon,this.theme));this.balloon&&this.balloon.setBounds&&this.balloon.setBounds(2,2,a-2,f);this.updateWidth();this.balloon.chart=this;this.realWidth=a;this.realHeight=f;this.divRealWidth=c;this.divRealHeight=e}},checkDisplay:function(){if(this.autoDisplay&&this.container){var a=d.rect(this.container,10,10),b=a.getBBox();0===b.width&&0===b.height&&(this.divRealHeight=this.divRealWidth=this.realHeight=this.realWidth=0,this.previousWidth=this.previousHeight=NaN);a.remove()}},checkTransform:function(a){if(this.autoTransform&&window.getComputedStyle&&a){if(a.style){var b=window.getComputedStyle(a,null);if(b&&(b=b.getPropertyValue("-webkit-transform")||b.getPropertyValue("-moz-transform")||b.getPropertyValue("-ms-transform")||b.getPropertyValue("-o-transform")||b.getPropertyValue("transform"))&&"none"!==b){var c=b.split("(")[1].split(")")[0].split(","),b=c[0],c=c[1],b=Math.sqrt(b*b+c*c);isNaN(b)||(this.cssScale*=b)}}a.parentNode&&this.checkTransform(a.parentNode)}},destroy:function(){this.chartDiv.innerHTML="";this.clearTimeOuts();this.legend&&this.legend.destroy()},clearTimeOuts:function(){var a=this.timeOuts;if(a){var b;for(b=0;b<a.length;b++)clearTimeout(a[b])}this.timeOuts=[]},clear:function(a){try{document.removeEventListener("touchstart",this.docfn1,!0),document.removeEventListener("touchend",this.docfn2,!0)}catch(b){}d.callMethod("clear",[this.chartScrollbar,this.scrollbarV,this.scrollbarH,this.chartCursor]);this.chartCursor=this.scrollbarH=this.scrollbarV=this.chartScrollbar=null;this.clearTimeOuts();this.container&&(this.container.remove(this.chartDiv),this.container.remove(this.legendDiv));a||d.removeChart(this);if(a=this.div)for(;a.firstChild;)a.removeChild(a.firstChild);this.legend&&this.legend.destroy();this.AmExport&&this.AmExport.clear&&this.AmExport.clear()},setMouseCursor:function(a){"auto"==a&&d.isNN&&(a="default");this.chartDiv.style.cursor=a;this.legendDiv.style.cursor=a},redrawLabels:function(){this.labels=[];var a=this.allLabels;this.createLabelsSet();var b;for(b=0;b<a.length;b++)this.drawLabel(a[b])},drawLabel:function(a){var b=this;if(b.container&&!1!==a.enabled){a=d.processObject(a,d.Label,b.theme);var c=a.y,e=a.text,h=a.align,f=a.size,g=a.color,k=a.rotation,l=a.alpha,m=a.bold,p=d.toCoordinate(a.x,b.realWidth),c=d.toCoordinate(c,b.realHeight);p||(p=0);c||(c=0);void 0===g&&(g=b.color);isNaN(f)&&(f=b.fontSize);h||(h="start");"left"==h&&(h="start");"right"==h&&(h="end");"center"==h&&(h="middle",k?c=b.realHeight-c+c/2:p=b.realWidth/2-p);void 0===l&&(l=1);void 0===k&&(k=0);c+=f/2;e=d.text(b.container,e,g,b.fontFamily,f,h,m,l);e.translate(p,c);void 0!==a.tabIndex&&e.setAttr("tabindex",a.tabIndex);d.setCN(b,e,"label");a.id&&d.setCN(b,e,"label-"+a.id);0!==k&&e.rotate(k);a.url?(e.setAttr("cursor","pointer"),e.click(function(){d.getURL(a.url,b.urlTarget)})):e.node.style.pointerEvents="none";b.labelsSet.push(e);b.labels.push(e)}},addLabel:function(a,b,c,e,d,f,g,k,l,m){a={x:a,y:b,text:c,align:e,size:d,color:f,alpha:k,rotation:g,bold:l,url:m,enabled:!0};this.container&&this.drawLabel(a);this.allLabels.push(a)},clearLabels:function(){var a=this.labels,b;for(b=a.length-1;0<=b;b--)a[b].remove();this.labels=[];this.allLabels=[]},updateHeight:function(){var a=this.divRealHeight,b=this.legend;if(b){var c=this.legendDiv.offsetHeight,b=b.position;if("top"==b||"bottom"==b){a-=c;if(0>a||isNaN(a))a=0;this.chartDiv.style.height=a+"px"}}return a},updateWidth:function(){var a=this.divRealWidth,b=this.divRealHeight,c=this.legend;if(c){var e=this.legendDiv,d=e.offsetWidth;isNaN(c.width)||(d=c.width);c.ieW&&(d=c.ieW);var f=e.offsetHeight,e=e.style,g=this.chartDiv.style,k=c.position;if(("right"==k||"left"==k)&&void 0===c.divId){a-=d;if(0>a||isNaN(a))a=0;g.width=a+"px";this.balloon&&this.balloon.setBounds&&this.balloon.setBounds(2,2,a-2,this.realHeight);"left"==k?(g.left=d+"px",e.left="0px"):(g.left="0px",e.left=a+"px");b>f&&(e.top=(b-f)/2+"px")}}return a},getTitleHeight:function(){this.drawTitles(!0);return this.titleHeight},addTitle:function(a,b,c,e,d){isNaN(b)&&(b=this.fontSize+2);a={text:a,size:b,color:c,alpha:e,
bold:d,enabled:!0};this.titles.push(a);return a},handleWheel:function(a){var b=0;a||(a=window.event);a.wheelDelta?b=a.wheelDelta/120:a.detail&&(b=-a.detail/3);b&&this.handleWheelReal(b,a.shiftKey);a.preventDefault&&a.preventDefault()},handleWheelReal:function(){},handleDocTouchStart:function(){this.handleMouseMove();this.tmx=this.mouseX;this.tmy=this.mouseY;this.touchStartTime=(new Date).getTime()},handleDocTouchEnd:function(){-.5<this.tmx&&this.tmx<this.divRealWidth+1&&0<this.tmy&&this.tmy<this.divRealHeight?(this.handleMouseMove(),4>Math.abs(this.mouseX-this.tmx)&&4>Math.abs(this.mouseY-this.tmy)?(this.tapped=!0,this.panRequired&&this.panEventsEnabled&&this.chartDiv&&(this.chartDiv.style.msTouchAction="none",this.chartDiv.style.touchAction="none")):this.mouseIsOver||this.resetTouchStyle()):(this.tapped=!1,this.resetTouchStyle())},resetTouchStyle:function(){this.panEventsEnabled&&this.chartDiv&&(this.chartDiv.style.msTouchAction="auto",this.chartDiv.style.touchAction="auto")},checkTouchDuration:function(a){var b=this,c=(new Date).getTime();if(a)if(a.touches)b.isTouchEvent=!0;else if(!b.isTouchEvent)return!0;if(c-b.touchStartTime>b.touchClickDuration)return!0;setTimeout(function(){b.resetTouchDuration()},300)},resetTouchDuration:function(){this.isTouchEvent=!1},checkTouchMoved:function(){if(4<Math.abs(this.mouseX-this.tmx)||4<Math.abs(this.mouseY-this.tmy))return!0},addListeners:function(){var a=this,b=a.chartDiv;document.addEventListener?("ontouchstart"in document.documentElement&&(b.addEventListener("touchstart",function(b){a.handleTouchStart.call(a,b)},!0),b.addEventListener("touchmove",function(b){a.handleMouseMove.call(a,b)},!0),b.addEventListener("touchend",function(b){a.handleTouchEnd.call(a,b)},!0),a.docfn1=function(b){a.handleDocTouchStart.call(a,b)},a.docfn2=function(b){a.handleDocTouchEnd.call(a,b)},document.addEventListener("touchstart",a.docfn1,!0),document.addEventListener("touchend",a.docfn2,!0)),b.addEventListener("mousedown",function(b){a.mouseIsOver=!0;a.handleMouseMove.call(a,b);a.handleMouseDown.call(a,b);a.handleDocTouchStart.call(a,b)},!0),b.addEventListener("mouseover",function(b){a.handleMouseOver.call(a,b)},!0),b.addEventListener("mouseout",function(b){a.handleMouseOut.call(a,b)},!0),b.addEventListener("mouseup",function(b){a.handleDocTouchEnd.call(a,b)},!0)):(b.attachEvent("onmousedown",function(b){a.handleMouseDown.call(a,b)}),b.attachEvent("onmouseover",function(b){a.handleMouseOver.call(a,b)}),b.attachEvent("onmouseout",function(b){a.handleMouseOut.call(a,b)}))},dispDUpd:function(){this.skipEvents||(this.dispatchDataUpdated&&(this.dispatchDataUpdated=!1,this.fire({type:"dataUpdated",chart:this})),this.chartCreated||(this.chartCreated=!0,this.fire({type:"init",chart:this})),this.chartRendered||(this.fire({type:"rendered",chart:this}),this.chartRendered=!0),this.fire({type:"drawn",chart:this}));this.skipEvents=!1},validateSize:function(){var a=this;a.premeasure();a.checkDisplay();a.cssScale=1;a.cssAngle=0;a.checkTransform(a.div);if(a.divRealWidth!=a.previousWidth||a.divRealHeight!=a.previousHeight){var b=a.legend;if(0<a.realWidth&&0<a.realHeight){a.sizeChanged=!0;if(b){a.legendInitTO&&clearTimeout(a.legendInitTO);var c=setTimeout(function(){b.invalidateSize()},10);a.timeOuts.push(c);a.legendInitTO=c}a.marginsUpdated=!1;clearTimeout(a.initTO);c=setTimeout(function(){a.initChart()},10);a.timeOuts.push(c);a.initTO=c}a.renderFix();b&&b.renderFix&&b.renderFix();clearTimeout(a.resizedTO);a.resizedTO=setTimeout(function(){a.fire({type:"resized",chart:a})},10);a.previousHeight=a.divRealHeight;a.previousWidth=a.divRealWidth}},invalidateSize:function(){this.previousHeight=this.previousWidth=NaN;this.invalidateSizeReal()},invalidateSizeReal:function(){var a=this;a.marginsUpdated=!1;clearTimeout(a.validateTO);var b=setTimeout(function(){a.validateSize()},5);a.timeOuts.push(b);a.validateTO=b},validateData:function(a){this.chartCreated&&(this.dataChanged=!0,this.marginsUpdated=!1,this.initChart(a))},validateNow:function(a,b){this.initTO&&clearTimeout(this.initTO);a&&(this.dataChanged=!0,this.marginsUpdated=!1);this.skipEvents=b;this.chartRendered=!1;var c=this.legend;c&&c.position!=this.prevLegendPosition&&(this.previousWidth=this.mw=0,c.invalidateSize&&(c.invalidateSize(),this.validateSize()));this.write(this.div)},showItem:function(a){a.hidden=!1;this.initChart()},hideItem:function(a){a.hidden=!0;this.initChart()},hideBalloon:function(){var a=this;clearTimeout(a.hoverInt);clearTimeout(a.balloonTO);a.hoverInt=setTimeout(function(){a.hideBalloonReal.call(a)},a.hideBalloonTime)},cleanChart:function(){},hideBalloonReal:function(){var a=this.balloon;a&&a.hide&&a.hide()},showBalloon:function(a,b,c,e,d){var f=this;clearTimeout(f.balloonTO);clearTimeout(f.hoverInt);f.balloonTO=setTimeout(function(){f.showBalloonReal.call(f,a,b,c,e,d)},1)},showBalloonReal:function(a,b,c,e,d){this.handleMouseMove();var f=this.balloon;f.enabled&&(f.followCursor(!1),f.changeColor(b),!c||f.fixedPosition?(f.setPosition(e,d),isNaN(e)||isNaN(d)?f.followCursor(!0):f.followCursor(!1)):f.followCursor(!0),a&&f.showBalloon(a))},handleMouseOver:function(){this.outTO&&clearTimeout(this.outTO);d.resetMouseOver();this.mouseIsOver=!0},handleMouseOut:function(){var a=this;d.resetMouseOver();a.outTO&&clearTimeout(a.outTO);a.outTO=setTimeout(function(){a.handleMouseOutReal()},10)},handleMouseOutReal:function(){this.mouseIsOver=!1},handleMouseMove:function(a){a||(a=window.event);this.mouse2Y=this.mouse2X=NaN;var b,c,e,d;if(a){if(a.touches){var f=a.touches.item(1);f&&this.panEventsEnabled&&this.boundingRect&&(e=f.clientX-this.boundingRect.left,d=f.clientY-this.boundingRect.top);a=a.touches.item(0);if(!a)return}else this.wasTouched=!1;this.boundingRect&&a.clientX&&(b=a.clientX-this.boundingRect.left,c=a.clientY-this.boundingRect.top);isNaN(e)?this.mouseX=b:(this.mouseX=Math.min(b,e),this.mouse2X=Math.max(b,e));isNaN(d)?this.mouseY=c:(this.mouseY=Math.min(c,d),this.mouse2Y=Math.max(c,d));this.autoTransform&&(this.mouseX/=this.cssScale,this.mouseY/=this.cssScale)}},handleTouchStart:function(a){this.hideBalloonReal();a&&(a.touches&&this.tapToActivate&&!this.tapped||!this.panRequired)||(this.handleMouseMove(a),this.handleMouseDown(a))},handleTouchEnd:function(a){this.wasTouched=!0;this.handleMouseMove(a);d.resetMouseOver();this.handleReleaseOutside(a)},handleReleaseOutside:function(){this.handleDocTouchEnd.call(this)},handleMouseDown:function(a){d.resetMouseOver();this.mouseIsOver=!0;a&&a.preventDefault&&(this.panEventsEnabled?a.preventDefault():a.touches||a.preventDefault())},addLegend:function(a,b){a=d.processObject(a,d.AmLegend,this.theme);a.divId=b;a.ieW=0;var c;c="object"!=typeof b&&b?document.getElementById(b):b;this.legend=a;a.chart=this;c?(a.div=c,a.position="outside",a.autoMargins=!1):a.div=this.legendDiv;return a},removeLegend:function(){this.legend=void 0;this.previousWidth=0;this.legendDiv.innerHTML=""},handleResize:function(){(d.isPercents(this.width)||d.isPercents(this.height))&&this.invalidateSizeReal();this.renderFix()},renderFix:function(){if(!d.VML){var a=this.container;a&&a.renderFix()}},getSVG:function(){if(d.hasSVG)return this.container},animate:function(a,b,c,e,h,f,g){a["an_"+b]&&d.removeFromArray(this.animations,a["an_"+b]);c={obj:a,frame:0,attribute:b,from:c,to:e,time:h,effect:f,suffix:g};a["an_"+b]=c;this.animations.push(c);return c},setLegendData:function(a){var b=this.legend;b&&b.setData(a)},stopAnim:function(a){d.removeFromArray(this.animations,a)},updateAnimations:function(){var a;this.container&&this.container.update();if(this.animations)for(a=this.animations.length-1;0<=a;a--){var b=this.animations[a],c=d.updateRate*b.time,e=b.frame+1,h=b.obj,f=b.attribute;if(e<=c){b.frame++;var g=Number(b.from),k=Number(b.to)-g,c=d[b.effect](0,e,g,k,c);0===k?(this.animations.splice(a,1),h.node.style[f]=Number(b.to)+b.suffix):h.node.style[f]=c+b.suffix}else h.node.style[f]=Number(b.to)+b.suffix,h.animationFinished=!0,this.animations.splice(a,1)}},update:function(){this.updateAnimations();var a=this.animatable;if(0<a.length){for(var b=!0,c=a.length-1;0<=c;c--){var e=a[c];e&&(e.animationFinished?a.splice(c,1):b=!1)}b&&(this.fire({type:"animationFinished",chart:this}),this.animatable=[])}},inIframe:function(){try{return window.self!==window.top}catch(a){return!0}},brr:function(){if(!this.hideCredits){var a="amcharts.com",b=window.location.hostname.split("."),c;2<=b.length&&(c=b[b.length-2]+"."+b[b.length-1]);this.amLink&&(b=this.amLink.parentNode)&&b.removeChild(this.amLink);b=this.creditsPosition;if(c!=a||!0===this.inIframe()){var a="http://www."+a,e=c=0,d=this.realWidth,f=this.realHeight,g=this.type;if("serial"==g||"xy"==g||"gantt"==g)c=this.marginLeftReal,e=this.marginTopReal,d=c+this.plotAreaWidth,f=e+this.plotAreaHeight;var g=a+"/javascript-charts/",k="JavaScript charts",l="JS chart by amCharts";"ammap"==this.product&&(g=a+"/javascript-maps/",k="Interactive JavaScript maps",l="JS map by amCharts");a=document.createElement("a");l=document.createTextNode(l);a.setAttribute("href",g);a.setAttribute("title",k);this.urlTarget&&a.setAttribute("target",this.urlTarget);a.appendChild(l);this.chartDiv.appendChild(a);this.amLink=a;g=a.style;g.position="absolute";g.textDecoration="none";g.color=this.color;g.fontFamily=this.fontFamily;g.fontSize="11px";g.opacity=.7;g.display="block";var k=a.offsetWidth,a=a.offsetHeight,l=5+c,m=e+5;"bottom-left"==b&&(l=5+c,m=f-a-3);"bottom-right"==b&&(l=d-k-5,m=f-a-3);"top-right"==b&&(l=d-k-5,m=e+5);g.left=l+"px";g.top=m+"px"}}}});d.Slice=d.Class({construct:function(){}});d.SerialDataItem=d.Class({construct:function(){}});d.GraphDataItem=d.Class({construct:function(){}});d.Guide=d.Class({construct:function(a){this.cname="Guide";d.applyTheme(this,a,this.cname)}});d.Title=d.Class({construct:function(a){this.cname="Title";d.applyTheme(this,a,this.cname)}});d.Label=d.Class({construct:function(a){this.cname="Label";d.applyTheme(this,a,this.cname)}})})();(function(){var d=window.AmCharts;d.AmGraph=d.Class({construct:function(a){this.cname="AmGraph";this.createEvents("rollOverGraphItem","rollOutGraphItem","clickGraphItem","doubleClickGraphItem","rightClickGraphItem","clickGraph","rollOverGraph","rollOutGraph");this.type="line";this.stackable=!0;this.columnCount=1;this.columnIndex=0;this.centerCustomBullets=this.showBalloon=!0;this.maxBulletSize=50;this.minBulletSize=4;this.balloonText="[[value]]";this.hidden=this.scrollbar=this.animationPlayed=!1;this.pointPosition="middle";this.depthCount=1;this.includeInMinMax=!0;this.negativeBase=0;this.visibleInLegend=!0;this.showAllValueLabels=!1;this.showBulletsAt=this.showBalloonAt="close";this.lineThickness=1;this.dashLength=0;this.connect=!0;this.lineAlpha=1;this.bullet="none";this.bulletBorderThickness=2;this.bulletBorderAlpha=0;this.bulletAlpha=1;this.bulletSize=8;this.cornerRadiusTop=this.hideBulletsCount=this.bulletOffset=0;this.cursorBulletAlpha=1;this.gradientOrientation="vertical";this.dy=this.dx=0;this.periodValue="";this.clustered=!0;this.periodSpan=1;this.accessibleLabel="[[title]] [[category]] [[value]]";this.accessibleSkipText="Press enter to skip [[title]]";this.y=this.x=0;this.switchable=!0;this.tcc=this.minDistance=1;this.labelRotation=0;this.labelAnchor="auto";this.labelOffset=3;this.bcn="graph-";this.dateFormat="MMM DD, YYYY";this.noRounding=!0;d.applyTheme(this,a,this.cname)},init:function(){this.createBalloon()},draw:function(){var a=this.chart;a.isRolledOverBullet=!1;var b=a.type;if(a.drawGraphs){isNaN(this.precision)||(this.numberFormatter?this.numberFormatter.precision=this.precision:this.numberFormatter={precision:this.precision,decimalSeparator:a.decimalSeparator,thousandsSeparator:a.thousandsSeparator});var c=a.container;this.container=c;this.destroy();var e=c.set();this.set=e;e.translate(this.x,this.y);var h=c.set();this.bulletSet=h;h.translate(this.x,this.y);this.behindColumns?(a.graphsBehindSet.push(e),a.bulletBehindSet.push(h)):(a.graphsSet.push(e),a.bulletSet.push(h));var f=this.bulletAxis;d.isString(f)&&(this.bulletAxis=a.getValueAxisById(f));c=c.set();d.remove(this.columnsSet);this.columnsSet=c;d.setCN(a,e,"graph-"+this.type);d.setCN(a,e,"graph-"+this.id);d.setCN(a,h,"graph-"+this.type);d.setCN(a,h,"graph-"+this.id);this.columnsArray=[];this.ownColumns=[];this.allBullets=[];this.animationArray=[];h=this.labelPosition;h||(f=this.valueAxis.stackType,h="top","column"==this.type&&(a.rotate&&(h="right"),"100%"==f||"regular"==f)&&(h="middle"),this.labelPosition=h);d.ifArray(this.data)&&(a=!1,"xy"==b?this.xAxis.axisCreated&&this.yAxis.axisCreated&&(a=!0):this.valueAxis.axisCreated&&(a=!0),!this.hidden&&a&&this.createGraph());e.push(c)}},createGraph:function(){var a=this,b=a.chart;a.startAlpha=b.startAlpha;a.seqAn=b.sequencedAnimation;a.baseCoord=a.valueAxis.baseCoord;void 0===a.fillAlphas&&(a.fillAlphas=0);a.bulletColorR=a.bulletColor;void 0===a.bulletColorR&&(a.bulletColorR=a.lineColorR,a.bulletColorNegative=a.negativeLineColor);void 0===a.bulletAlpha&&(a.bulletAlpha=a.lineAlpha);if("step"==c||d.VML)a.noRounding=!1;var c=b.type;"gantt"==c&&(c="serial");clearTimeout(a.playedTO);if(!isNaN(a.valueAxis.min)&&!isNaN(a.valueAxis.max)){switch(c){case"serial":a.categoryAxis&&(a.createSerialGraph(),"candlestick"==a.type&&1>a.valueAxis.minMaxMultiplier&&a.positiveClip(a.set));break;case"radar":a.createRadarGraph();break;case"xy":a.createXYGraph()}a.playedTO=setTimeout(function(){a.setAnimationPlayed.call(a)},500*a.chart.startDuration)}},setAnimationPlayed:function(){this.animationPlayed=!0},createXYGraph:function(){var a=[],b=[],c=this.xAxis,e=this.yAxis;this.pmh=e.height;this.pmw=c.width;this.pmy=this.pmx=0;var d;for(d=this.start;d<=this.end;d++){var f=this.data[d].axes[c.id].graphs[this.id],g=f.values,k=g.x,l=g.y,g=c.getCoordinate(k,this.noRounding),m=e.getCoordinate(l,this.noRounding);if(!isNaN(k)&&!isNaN(l)&&(a.push(g),b.push(m),f.x=g,f.y=m,k=this.createBullet(f,g,m,d),l=this.labelText)){var l=this.createLabel(f,l),p=0;k&&(p=k.size);this.positionLabel(f,g,m,l,p)}}this.drawLineGraph(a,b);this.launchAnimation()},createRadarGraph:function(){var a=this.valueAxis.stackType,b=[],c=[],e=[],d=[],f,g,k,l,m;for(m=this.start;m<=this.end;m++){var p=this.data[m].axes[this.valueAxis.id].graphs[this.id],q,n;"none"==a||"3d"==a?q=p.values.value:(q=p.values.close,n=p.values.open);if(isNaN(q))this.connect||(this.drawLineGraph(b,c,e,d),b=[],c=[],e=[],d=[]);else{var t=this.valueAxis.getCoordinate(q,this.noRounding)-this.height,t=t*this.valueAxis.rMultiplier,r=-360/(this.end-this.start+1)*m;"middle"==this.valueAxis.pointPosition&&(r-=180/(this.end-this.start+1));q=t*Math.sin(r/180*Math.PI);t*=Math.cos(r/180*Math.PI);b.push(q);c.push(t);if(!isNaN(n)){var w=this.valueAxis.getCoordinate(n,this.noRounding)-this.height,w=w*this.valueAxis.rMultiplier,z=w*Math.sin(r/180*Math.PI),r=w*Math.cos(r/180*Math.PI);e.push(z);d.push(r);isNaN(k)&&(k=z);isNaN(l)&&(l=r)}r=this.createBullet(p,q,t,m);p.x=q;p.y=t;if(z=this.labelText)z=this.createLabel(p,z),w=0,r&&(w=r.size),this.positionLabel(p,q,t,z,w);isNaN(f)&&(f=q);isNaN(g)&&(g=t)}}b.push(f);c.push(g);isNaN(k)||(e.push(k),d.push(l));this.drawLineGraph(b,c,e,d);this.launchAnimation()},positionLabel:function(a,b,c,e,d){if(e){var f=this.chart,g=this.valueAxis,k="middle",l=!1,m=this.labelPosition,p=e.getBBox(),q=this.chart.rotate,n=a.isNegative,t=this.fontSize;void 0===t&&(t=this.chart.fontSize);c-=p.height/2-t/2-1;void 0!==a.labelIsNegative&&(n=a.labelIsNegative);switch(m){case"right":m=q?n?"left":"right":"right";break;case"top":m=q?"top":n?"bottom":"top";break;case"bottom":m=q?"bottom":n?"top":"bottom";break;case"left":m=q?n?"right":"left":"left"}var t=a.columnGraphics,r=0,w=0;t&&(r=t.x,w=t.y);var z=this.labelOffset;switch(m){case"right":k="start";b+=d/2+z;break;case"top":c=g.reversed?c+(d/2+p.height/2+z):c-(d/2+p.height/2+z);break;case"bottom":c=g.reversed?c-(d/2+p.height/2+z):c+(d/2+p.height/2+z);break;case"left":k="end";b-=d/2+z;break;case"inside":"column"==this.type&&(l=!0,q?n?(k="end",b=r-3-z):(k="start",b=r+3+z):c=n?w+7+z:w-10-z);break;case"middle":"column"==this.type&&(l=!0,q?b-=(b-r)/2+z-3:c-=(c-w)/2+z-3)}"auto"!=this.labelAnchor&&(k=this.labelAnchor);e.attr({"text-anchor":k});this.labelRotation&&e.rotate(this.labelRotation);e.translate(b,c);!this.showAllValueLabels&&t&&l&&(p=e.getBBox(),p.height>a.columnHeight||p.width>a.columnWidth)&&(e.remove(),e=null);if(e&&"radar"!=f.type)if(q){if(0>c||c>this.height)e.remove(),e=null;!this.showAllValueLabels&&e&&(0>b||b>this.width)&&(e.remove(),e=null)}else{if(0>b||b>this.width)e.remove(),
e=null;!this.showAllValueLabels&&e&&(0>c||c>this.height)&&(e.remove(),e=null)}e&&this.allBullets.push(e);return e}},getGradRotation:function(){var a=270;"horizontal"==this.gradientOrientation&&(a=0);return this.gradientRotation=a},createSerialGraph:function(){this.dashLengthSwitched=this.fillColorsSwitched=this.lineColorSwitched=void 0;var a=this.chart,b=this.id,c=this.index,e=this.data,h=this.chart.container,f=this.valueAxis,g=this.type,k=this.columnWidthReal,l=this.showBulletsAt;isNaN(this.columnWidth)||(k=this.columnWidth);isNaN(k)&&(k=.8);var m=this.useNegativeColorIfDown,p=this.width,q=this.height,n=this.y,t=this.rotate,r=this.columnCount,w=d.toCoordinate(this.cornerRadiusTop,k/2),z=this.connect,x=[],u=[],A,y,B,D,C=this.chart.graphs.length,I,H=this.dx/this.tcc,Q=this.dy/this.tcc,M=f.stackType,P=this.start,ia=this.end,J=this.scrollbar,aa="graph-column-";J&&(aa="scrollbar-graph-column-");var ma=this.categoryAxis,na=this.baseCoord,Pa=this.negativeBase,Z=this.columnIndex,da=this.lineThickness,X=this.lineAlpha,xa=this.lineColorR,ea=this.dashLength,fa=this.set,Ba,ga=this.getGradRotation(),V=this.chart.columnSpacing,Y=ma.cellWidth,Da=(Y*k-r)/r;V>Da&&(V=Da);var G,v,oa,ha=q,Qa=p,ca=0,tb=0,ub=0,vb=0,gb=0,hb=0,wb=this.fillColorsR,Ra=this.negativeFillColors,Ja=this.negativeLineColor,Ya=this.fillAlphas,Za=this.negativeFillAlphas;"object"==typeof Ya&&(Ya=Ya[0]);"object"==typeof Za&&(Za=Za[0]);var xb=this.noRounding;"step"==g&&(xb=!1);var ib=f.getCoordinate(f.min);f.logarithmic&&(ib=f.getCoordinate(f.minReal));this.minCoord=
ib;this.resetBullet&&(this.bullet="none");if(!(J||"line"!=g&&"smoothedLine"!=g&&"step"!=g||(1==e.length&&"step"!=g&&"none"==this.bullet&&(this.bullet="round",this.resetBullet=!0),!Ra&&void 0==Ja||m))){var Ua=Pa;Ua>f.max&&(Ua=f.max);Ua<f.min&&(Ua=f.min);f.logarithmic&&(Ua=f.minReal);var Ka=f.getCoordinate(Ua),Mb=f.getCoordinate(f.max);t?(ha=q,Qa=Math.abs(Mb-Ka),ub=q,vb=Math.abs(ib-Ka),hb=tb=0,f.reversed?(ca=0,gb=Ka):(ca=Ka,gb=0)):(Qa=p,ha=Math.abs(Mb-Ka),vb=p,ub=Math.abs(ib-Ka),gb=ca=0,f.reversed?(hb=n,tb=Ka):hb=Ka)}var La=Math.round;this.pmx=La(ca);this.pmy=La(tb);this.pmh=La(ha);this.pmw=La(Qa);this.nmx=La(gb);this.nmy=La(hb);this.nmh=La(ub);this.nmw=La(vb);d.isModern||(this.nmy=this.nmx=0,this.nmh=this.height);this.clustered||(r=1);k="column"==g?(Y*k-V*(r-1))/r:Y*k;1>k&&(k=1);var Nb=this.fixedColumnWidth;isNaN(Nb)||(k=Nb);var L;if("line"==g||"step"==g||"smoothedLine"==g){if(0<P){for(L=P-1;-1<L;L--)if(G=e[L],v=G.axes[f.id].graphs[b],oa=v.values.value,!isNaN(oa)){P=L;break}if(this.lineColorField)for(L=
P;-1<L;L--)if(G=e[L],v=G.axes[f.id].graphs[b],v.lineColor){this.lineColorSwitched=v.lineColor;void 0===this.bulletColor&&(this.bulletColorSwitched=this.lineColorSwitched);break}if(this.fillColorsField)for(L=P;-1<L;L--)if(G=e[L],v=G.axes[f.id].graphs[b],v.fillColors){this.fillColorsSwitched=v.fillColors;break}if(this.dashLengthField)for(L=P;-1<L;L--)if(G=e[L],v=G.axes[f.id].graphs[b],!isNaN(v.dashLength)){this.dashLengthSwitched=v.dashLength;break}}if(ia<e.length-1)for(L=ia+1;L<e.length;L++)if(G=e[L],v=G.axes[f.id].graphs[b],oa=v.values.value,!isNaN(oa)){ia=L;break}}ia<e.length-1&&ia++;var T=[],U=[],Ma=!1;if("line"==g||"step"==g||"smoothedLine"==g)if(this.stackable&&"regular"==M||"100%"==M||this.fillToGraph)Ma=!0;var Ob=this.noStepRisers,jb=-1E3,kb=-1E3,lb=this.minDistance,Sa=!0,$a=!1;for(L=P;L<=ia;L++){G=e[L];v=G.axes[f.id].graphs[b];v.index=L;var ab,Ta=NaN;if(m&&void 0==this.openField)for(var yb=L+1;yb<e.length&&(!e[yb]||!(ab=e[L+1].axes[f.id].graphs[b])||!ab.values||(Ta=ab.values.value,isNaN(Ta)));yb++);var S,R,K,ba,ja=NaN,E=NaN,F=NaN,O=NaN,N=NaN,qa=NaN,ra=NaN,sa=NaN,ta=NaN,ya=NaN,Ea=NaN,ka=NaN,la=NaN,W=NaN,zb=NaN,Ab=NaN,ua=NaN,va=void 0,Na=wb,Va=Ya,Ha=xa,Ca,za,Bb=this.proCandlesticks,mb=this.topRadius,Fa=q-1,pa=p-1,bb=this.pattern;void 0!=v.pattern&&(bb=v.pattern);isNaN(v.alpha)||(Va=v.alpha);isNaN(v.dashLength)||(ea=v.dashLength);var Ia=v.values;f.recalculateToPercents&&(Ia=v.percents);"none"==M&&(Z=isNaN(v.columnIndex)?this.columnIndex:v.columnIndex);if(Ia){W=this.stackable&&"none"!=M&&"3d"!=M?Ia.close:Ia.value;if("candlestick"==g||"ohlc"==g)W=Ia.close,Ab=Ia.low,ra=f.getCoordinate(Ab),zb=Ia.high,ta=f.getCoordinate(zb);ua=Ia.open;F=f.getCoordinate(W,xb);isNaN(ua)||(N=f.getCoordinate(ua,xb),m&&"regular"!=M&&"100%"!=M&&(Ta=ua,ua=N=NaN));m&&(void 0==this.openField?ab&&(ab.isNegative=Ta<W?!0:!1,isNaN(Ta)&&(v.isNegative=!Sa)):v.isNegative=Ta>W?!0:!1);if(!J)switch(this.showBalloonAt){case"close":v.y=F;break;case"open":v.y=N;break;case"high":v.y=ta;break;case"low":v.y=ra}var ja=G.x[ma.id],Wa=this.periodSpan-1;"step"!=g||isNaN(G.cellWidth)||(Y=G.cellWidth);var wa=Math.floor(Y/2)+Math.floor(Wa*Y/2),Ga=wa,nb=0;"left"==this.stepDirection&&(nb=(2*Y+Wa*Y)/2,ja-=nb);"center"==this.stepDirection&&(nb=Y/2,ja-=nb);"start"==this.pointPosition&&(ja-=Y/2+Math.floor(Wa*Y/2),wa=0,Ga=Math.floor(Y)+Math.floor(Wa*Y));"end"==this.pointPosition&&(ja+=Y/2+Math.floor(Wa*Y/2),wa=Math.floor(Y)+Math.floor(Wa*Y),Ga=0);if(Ob){var Cb=this.columnWidth;isNaN(Cb)||(wa*=Cb,Ga*=Cb)}J||(v.x=ja);-1E5>ja&&(ja=-1E5);
ja>p+1E5&&(ja=p+1E5);t?(E=F,O=N,N=F=ja,isNaN(ua)&&!this.fillToGraph&&(O=na),qa=ra,sa=ta):(O=E=ja,isNaN(ua)&&!this.fillToGraph&&(N=na));if(!Bb&&W<ua||Bb&&W<Ba)v.isNegative=!0,Ra&&(Na=Ra),Za&&(Va=Za),void 0!=Ja&&(Ha=Ja);$a=!1;isNaN(W)||(m?W>Ta?(Sa&&($a=!0),Sa=!1):(Sa||($a=!0),Sa=!0):v.isNegative=W<Pa?!0:!1,Ba=W);var Pb=!1;J&&a.chartScrollbar.ignoreCustomColors&&(Pb=!0);Pb||(void 0!=v.color&&(Na=v.color),v.fillColors&&(Na=v.fillColors));F=d.fitToBounds(F,-3E4,3E4);switch(g){case"line":if(isNaN(W))z||(this.drawLineGraph(x,u,T,U),x=[],u=[],T=[],U=[]);else{if(Math.abs(E-jb)>=lb||Math.abs(F-kb)>=lb)x.push(E),u.push(F),jb=E,kb=F;ya=E;Ea=F;ka=E;la=F;!Ma||isNaN(N)||isNaN(O)||(T.push(O),U.push(N));if($a||void 0!=v.lineColor&&v.lineColor!=this.lineColorSwitched||void 0!=v.fillColors&&v.fillColors!=this.fillColorsSwitched||!isNaN(v.dashLength))this.drawLineGraph(x,u,T,U),x=[E],u=[F],T=[],U=[],!Ma||isNaN(N)||isNaN(O)||(T.push(O),U.push(N)),m?(Sa?(this.lineColorSwitched=xa,this.fillColorsSwitched=wb):(this.lineColorSwitched=Ja,this.fillColorsSwitched=Ra),void 0===this.bulletColor&&(this.bulletColorSwitched=xa)):(this.lineColorSwitched=v.lineColor,this.fillColorsSwitched=v.fillColors,void 0===this.bulletColor&&(this.bulletColorSwitched=this.lineColorSwitched)),this.dashLengthSwitched=v.dashLength;v.gap&&(this.drawLineGraph(x,u,T,U),x=[],u=[],T=[],U=[])}break;case"smoothedLine":if(isNaN(W))z||(this.drawSmoothedGraph(x,u,T,U),x=[],u=[],T=[],U=[]);else{if(Math.abs(E-jb)>=lb||Math.abs(F-kb)>=lb)x.push(E),u.push(F),jb=E,kb=F;ya=E;Ea=F;ka=E;la=F;!Ma||isNaN(N)||isNaN(O)||(T.push(O),U.push(N));void 0==v.lineColor&&void 0==v.fillColors&&isNaN(v.dashLength)||(this.drawSmoothedGraph(x,u,T,U),x=[E],u=[F],T=[],U=[],!Ma||isNaN(N)||isNaN(O)||(T.push(O),U.push(N)),this.lineColorSwitched=v.lineColor,this.fillColorsSwitched=v.fillColors,this.dashLengthSwitched=v.dashLength);v.gap&&(this.drawSmoothedGraph(x,u,T,U),x=[],u=[],T=[],U=[])}break;case"step":if(!isNaN(W)){t?(isNaN(A)||(x.push(A),u.push(F-wa)),u.push(F-wa),x.push(E),u.push(F+Ga),x.push(E),!Ma||isNaN(N)||isNaN(O)||(isNaN(B)||(T.push(B),U.push(N-wa)),T.push(O),U.push(N-wa),T.push(O),U.push(N+Ga))):(isNaN(y)||(u.push(y),x.push(E-wa)),x.push(E-wa),u.push(F),x.push(E+Ga),u.push(F),!Ma||isNaN(N)||isNaN(O)||(isNaN(D)||(T.push(O-wa),U.push(D)),T.push(O-wa),U.push(N),T.push(O+Ga),U.push(N)));A=E;y=F;B=O;D=N;ya=E;Ea=F;ka=E;la=F;if($a||void 0!=v.lineColor||void 0!=v.fillColors||!isNaN(v.dashLength)){var Db=x[x.length-2],dc=u[u.length-2];x.pop();u.pop();T.pop();U.pop();this.drawLineGraph(x,u,T,U);x=[Db];u=[dc];T=[];U=[];Ma&&(T=[Db,Db+wa+Ga],U=[D,D]);t?(u.push(F+Ga),x.push(E)):(x.push(E+Ga),u.push(F));this.lineColorSwitched=v.lineColor;this.fillColorsSwitched=v.fillColors;this.dashLengthSwitched=v.dashLength;m&&(Sa?(this.lineColorSwitched=xa,this.fillColorsSwitched=wb):(this.lineColorSwitched=Ja,this.fillColorsSwitched=Ra))}if(Ob||v.gap)A=y=NaN,this.drawLineGraph(x,u,T,U),x=[],u=[],T=[],U=[]}else if(!z){if(1>=this.periodSpan||1<this.periodSpan&&E-A>wa+Ga)A=y=NaN;this.drawLineGraph(x,u,T,U);x=[];u=[];T=[];U=[]}break;case"column":Ca=Ha;void 0!=v.lineColor&&(Ca=v.lineColor);if(!isNaN(W)){m||(v.isNegative=W<Pa?!0:!1);v.isNegative&&(Ra&&(Na=Ra),void 0!=Ja&&(Ca=Ja));var Qb=f.min,Rb=f.max,ob=ua;isNaN(ob)&&(ob=Pa);if(!(W<Qb&&ob<Qb||W>Rb&&ob>Rb)){var Aa;if(t){"3d"==M?(R=F-(r/2-this.depthCount+1)*(k+V)+V/2+Q*Z,S=O+H*Z,Aa=Z):(R=Math.floor(F-(r/2-Z)*(k+V)+V/2),S=O,Aa=0);K=k;ya=E;Ea=R+k/2;ka=E;la=R+k/2;R+K>q+Aa*Q&&(K=q-R+Aa*Q);R<Aa*Q&&(K+=R,R=Aa*Q);ba=E-O;var ec=S;S=d.fitToBounds(S,0,p);ba+=ec-S;ba=d.fitToBounds(ba,-S,p-S+H*Z);v.labelIsNegative=0>ba?!0:!1;0===ba&&1/W===1/-0&&(v.labelIsNegative=!0);isNaN(G.percentWidthValue)||(K=this.height*G.percentWidthValue/100,R=ja-K/2,Ea=R+K/2);K=d.roundTo(K,2);ba=d.roundTo(ba,2);R<q&&0<K&&(va=new d.Cuboid(h,ba,K,H-a.d3x,Q-a.d3y,Na,Va,da,Ca,X,ga,w,t,ea,bb,mb,aa),v.columnWidth=Math.abs(ba),v.columnHeight=Math.abs(K))}else{"3d"==M?(S=E-(r/2-this.depthCount+1)*(k+V)+V/2+H*Z,R=N+Q*Z,Aa=Z):(S=E-(r/2-Z)*(k+V)+V/2,R=N,Aa=0);K=k;ya=S+k/2;Ea=F;ka=S+k/2;la=F;S+K>p+Aa*H&&(K=p-S+Aa*H);S<Aa*H&&(K+=S-Aa*H,S=Aa*H);ba=F-N;v.labelIsNegative=0<ba?!0:!1;0===ba&&1/W!==1/Math.abs(W)&&(v.labelIsNegative=!0);var fc=R;R=d.fitToBounds(R,this.dy,q);ba+=fc-R;ba=d.fitToBounds(ba,-R+Q*Aa,q-R);isNaN(G.percentWidthValue)||(K=this.width*G.percentWidthValue/100,S=ja-K/2,ya=S+K/2);K=d.roundTo(K,2);ba=d.roundTo(ba,2);S<p+Z*H&&0<K&&(this.showOnAxis&&(R-=Q/2),va=new d.Cuboid(h,K,ba,H-a.d3x,Q-a.d3y,Na,Va,da,Ca,this.lineAlpha,ga,w,t,ea,bb,mb,aa),v.columnHeight=Math.abs(ba),v.columnWidth=Math.abs(K))}}if(va){za=va.set;d.setCN(a,va.set,"graph-"+this.type);d.setCN(a,va.set,"graph-"+this.id);v.className&&d.setCN(a,va.set,v.className,!0);v.columnGraphics=za;S=d.roundTo(S,2);R=d.roundTo(R,2);za.translate(S,R);(v.url||this.showHandOnHover)&&za.setAttr("cursor","pointer");if(!J){"none"==M&&(I=t?(this.end+1-L)*C-c:C*L+c);"3d"==M&&(t?(I=(this.end+1-L)*C-c-1E3*this.depthCount,ya+=H*Z,ka+=H*Z,v.y+=H*Z):(I=(C-c)*(L+1)+1E3*this.depthCount,Ea+=Q*Z,la+=Q*Z,v.y+=Q*Z));if("regular"==M||"100%"==M)I=t?0<Ia.value?(this.end+1-L)*C+c:(this.end+1-L)*C-c:0<Ia.value?C*L+c:C*L-c;this.columnsArray.push({column:va,depth:I});v.x=t?R+K/2:S+K/2;this.ownColumns.push(va);this.animateColumns(va,L,E,O,F,N);this.addListeners(za,v);void 0!==this.tabIndex&&za.setAttr("tabindex",this.tabIndex)}this.columnsSet.push(za)}}break;case"candlestick":if(!isNaN(ua)&&!isNaN(W)){var Xa,cb;Ca=Ha;void 0!=v.lineColor&&(Ca=v.lineColor);ya=E;la=Ea=F;ka=E;if(t){"open"==l&&(ka=O);"high"==l&&(ka=sa);"low"==l&&(ka=qa);E=d.fitToBounds(E,0,pa);O=d.fitToBounds(O,0,pa);qa=d.fitToBounds(qa,0,pa);sa=d.fitToBounds(sa,0,pa);if(0===E&&0===O&&0===qa&&0===sa)continue;if(E==pa&&O==pa&&qa==pa&&sa==pa)continue;R=F-k/2;S=O;K=k;R+K>q&&(K=q-R);0>R&&(K+=R,R=0);if(R<q&&0<K){var Eb,Fb;W>ua?(Eb=[E,sa],Fb=[O,qa]):(Eb=[O,sa],Fb=[E,qa]);!isNaN(sa)&&!isNaN(qa)&&F<q&&0<F&&(Xa=d.line(h,Eb,[F,F],Ca,X,da),cb=d.line(h,Fb,[F,F],Ca,X,da));ba=E-O;va=new d.Cuboid(h,ba,K,H,Q,Na,Ya,da,Ca,X,ga,w,t,ea,bb,mb,aa)}}else{"open"==l&&(la=N);"high"==l&&(la=ta);"low"==l&&(la=ra);F=d.fitToBounds(F,0,Fa);N=d.fitToBounds(N,0,Fa);ra=d.fitToBounds(ra,0,Fa);ta=d.fitToBounds(ta,0,Fa);if(0===F&&0===N&&0===ra&&0===ta)continue;if(F==Fa&&N==Fa&&ra==Fa&&ta==Fa)continue;S=E-k/2;R=N+da/2;K=k;S+K>p&&(K=p-S);0>S&&(K+=S,S=0);ba=F-N;if(S<p&&0<K){Bb&&W>=ua&&(Va=0);var va=new d.Cuboid(h,K,ba,H,Q,Na,Va,da,Ca,X,ga,w,t,ea,bb,mb,aa),Gb,Hb;W>ua?(Gb=[F,ta],Hb=[N,ra]):(Gb=[N,ta],Hb=[F,ra]);!isNaN(ta)&&!isNaN(ra)&&E<p&&0<E&&(Xa=d.line(h,[E,E],Gb,Ca,X,da),cb=d.line(h,[E,E],Hb,Ca,X,da),d.setCN(a,Xa,this.bcn+"line-high"),v.className&&d.setCN(a,Xa,v.className,!0),d.setCN(a,cb,this.bcn+"line-low"),v.className&&d.setCN(a,cb,v.className,!0))}}va&&(za=va.set,v.columnGraphics=za,fa.push(za),za.translate(S,R-da/2),(v.url||this.showHandOnHover)&&za.setAttr("cursor","pointer"),Xa&&(fa.push(Xa),fa.push(cb)),J||(v.x=t?R+K/2:S+K/2,this.animateColumns(va,L,E,O,F,N),this.addListeners(za,v),void 0!==this.tabIndex&&za.setAttr("tabindex",this.tabIndex)))}break;case"ohlc":if(!(isNaN(ua)||isNaN(zb)||isNaN(Ab)||isNaN(W))){var Sb=h.set();fa.push(Sb);W<ua&&(v.isNegative=!0,void 0!=Ja&&(Ha=Ja));void 0!=v.lineColor&&(Ha=v.lineColor);var pb,qb,rb;if(t){la=F;ka=E;"open"==l&&(ka=O);"high"==l&&(ka=sa);"low"==l&&(ka=qa);qa=d.fitToBounds(qa,0,pa);sa=d.fitToBounds(sa,0,pa);if(0===E&&0===O&&0===qa&&0===sa)continue;if(E==pa&&O==pa&&qa==pa&&sa==pa)continue;var Ib=F-k/2,Ib=d.fitToBounds(Ib,0,q),Tb=d.fitToBounds(F,0,q),Jb=F+k/2,Jb=d.fitToBounds(Jb,0,q);0<=O&&O<=pa&&(qb=d.line(h,[O,O],[Ib,Tb],Ha,X,da,ea));0<F&&F<q&&(pb=d.line(h,[qa,sa],[F,F],Ha,X,da,ea));0<=E&&E<=pa&&(rb=d.line(h,[E,E],[Tb,Jb],Ha,X,da,ea))}else{la=F;"open"==l&&(la=N);"high"==l&&(la=ta);"low"==l&&(la=ra);var ka=E,ra=d.fitToBounds(ra,0,Fa),ta=d.fitToBounds(ta,0,Fa),Kb=E-k/2,Kb=d.fitToBounds(Kb,0,p),Ub=d.fitToBounds(E,0,p),Lb=E+k/2,Lb=d.fitToBounds(Lb,0,p);0<=N&&N<=Fa&&(qb=d.line(h,[Kb,Ub],[N,N],Ha,X,da,ea));0<E&&E<p&&(pb=d.line(h,[E,E],[ra,ta],Ha,X,da,ea));0<=F&&F<=Fa&&(rb=d.line(h,[Ub,Lb],[F,F],Ha,X,da,ea))}fa.push(qb);fa.push(pb);fa.push(rb);d.setCN(a,qb,this.bcn+"stroke-open");d.setCN(a,rb,this.bcn+"stroke-close");d.setCN(a,pb,this.bcn+"stroke");v.className&&d.setCN(a,Sb,v.className,!0);ya=E;Ea=F}}if(!J&&!isNaN(W)){var Vb=this.hideBulletsCount;if(this.end-this.start<=Vb||0===Vb){var Wb=this.createBullet(v,ka,la,L),Xb=this.labelText;if(Xb&&!isNaN(ya)&&!isNaN(ya)){var gc=this.createLabel(v,Xb),Yb=0;Wb&&(Yb=Wb.size);this.positionLabel(v,ya,Ea,gc,Yb)}if("regular"==M||"100%"==M){var Zb=f.totalText;if(Zb){var Oa=this.createLabel(v,Zb,f.totalTextColor);d.setCN(a,Oa,this.bcn+"label-total");this.allBullets.push(Oa);if(Oa){var $b=Oa.getBBox(),ac=$b.width,bc=$b.height,db,eb,sb=f.totalTextOffset,cc=f.totals[L];cc&&cc.remove();var fb=0;"column"!=g&&(fb=this.bulletSize);t?(eb=Ea,db=0>W?E-ac/2-2-fb-sb:E+ac/2+3+fb+sb):(db=ya,eb=0>W?F+bc/2+fb+sb:F-bc/2-3-fb-sb);Oa.translate(db,eb);f.totals[L]=Oa;t?(0>eb||eb>q)&&Oa.remove():(0>db||db>p)&&Oa.remove()}}}}}}}this.lastDataItem=v;if("line"==g||"step"==g||"smoothedLine"==g)"smoothedLine"==g?this.drawSmoothedGraph(x,u,T,U):this.drawLineGraph(x,u,T,U),J||this.launchAnimation();this.bulletsHidden&&this.hideBullets();this.customBulletsHidden&&this.hideCustomBullets()},animateColumns:function(a,b){var c=this,e=c.chart.startDuration;0<e&&!c.animationPlayed&&(c.seqAn?(a.set.hide(),c.animationArray.push(a),e=setTimeout(function(){c.animate.call(c)},e/(c.end-c.start+1)*(b-c.start)*1E3),c.timeOuts.push(e)):c.animate(a),c.chart.animatable.push(a))},createLabel:function(a,b,c){var e=this.chart,h=a.labelColor;h||(h=this.color);h||(h=e.color);c&&(h=c);c=this.fontSize;void 0===c&&(this.fontSize=c=e.fontSize);var f=this.labelFunction;b=e.formatString(b,a);b=d.cleanFromEmpty(b);f&&(b=f(a,b));if(void 0!==b&&""!==b)return a=d.text(this.container,b,h,e.fontFamily,c),a.node.style.pointerEvents="none",d.setCN(e,a,this.bcn+"label"),this.bulletSet.push(a),a},positiveClip:function(a){a.clipRect(this.pmx,this.pmy,this.pmw,this.pmh)},negativeClip:function(a){a.clipRect(this.nmx,this.nmy,this.nmw,this.nmh)},drawLineGraph:function(a,b,c,e){var h=this;if(1<a.length){var f=h.noRounding,g=h.set,k=h.chart,l=h.container,m=l.set(),p=l.set();g.push(p);g.push(m);var q=h.lineAlpha,n=h.lineThickness,g=h.fillAlphas,t=h.lineColorR,r=h.negativeLineAlpha;isNaN(r)&&(r=q);var w=h.lineColorSwitched;w&&(t=w);var w=h.fillColorsR,z=h.fillColorsSwitched;z&&(w=z);var x=h.dashLength;(z=h.dashLengthSwitched)&&(x=z);var z=h.negativeLineColor,u=h.negativeFillColors,A=h.negativeFillAlphas,y=h.baseCoord;0!==h.negativeBase&&(y=h.valueAxis.getCoordinate(h.negativeBase,f),y>h.height&&(y=h.height),0>y&&(y=0));q=d.line(l,a,b,t,q,n,x,!1,!0,f);q.node.setAttribute("stroke-linejoin","round");d.setCN(k,q,h.bcn+"stroke");m.push(q);m.click(function(a){h.handleGraphEvent(a,"clickGraph")}).mouseover(function(a){h.handleGraphEvent(a,"rollOverGraph")}).mouseout(function(a){h.handleGraphEvent(a,"rollOutGraph")}).touchmove(function(a){h.chart.handleMouseMove(a)}).touchend(function(a){h.chart.handleTouchEnd(a)});void 0===z||h.useNegativeColorIfDown||(n=d.line(l,a,b,z,r,n,x,!1,!0,f),n.node.setAttribute("stroke-linejoin","round"),d.setCN(k,n,h.bcn+"stroke"),d.setCN(k,n,h.bcn+"stroke-negative"),p.push(n));if(0<g||0<A)if(n=a.join(";").split(";"),r=b.join(";").split(";"),q=k.type,"serial"==q||"radar"==q?0<c.length?(c.reverse(),e.reverse(),n=a.concat(c),r=b.concat(e)):"radar"==q?(r.push(0),n.push(0)):h.rotate?(r.push(r[r.length-1]),n.push(y),r.push(r[0]),n.push(y),r.push(r[0]),n.push(n[0])):(n.push(n[n.length-1]),r.push(y),n.push(n[0]),r.push(y),n.push(a[0]),r.push(r[0])):"xy"==q&&(b=h.fillToAxis)&&(d.isString(b)&&(b=k.getValueAxisById(b)),"H"==b.orientation?(y="top"==b.position?0:b.height,n.push(n[n.length-1]),r.push(y),n.push(n[0]),r.push(y),n.push(a[0]),r.push(r[0])):(y="left"==b.position?0:b.width,r.push(r[r.length-1]),n.push(y),r.push(r[0]),n.push(y),r.push(r[0]),n.push(n[0]))),a=h.gradientRotation,0<g&&(b=d.polygon(l,n,r,w,g,1,"#000",0,a,f),b.pattern(h.pattern,NaN,k.path),d.setCN(k,b,h.bcn+"fill"),m.push(b)),u||void 0!==z)isNaN(A)&&(A=g),u||(u=z),f=d.polygon(l,n,r,u,A,1,"#000",0,a,f),d.setCN(k,f,h.bcn+"fill"),d.setCN(k,f,h.bcn+"fill-negative"),f.pattern(h.pattern,NaN,k.path),p.push(f),p.click(function(a){h.handleGraphEvent(a,"clickGraph")}).mouseover(function(a){h.handleGraphEvent(a,"rollOverGraph")}).mouseout(function(a){h.handleGraphEvent(a,"rollOutGraph")}).touchmove(function(a){h.chart.handleMouseMove(a)}).touchend(function(a){h.chart.handleTouchEnd(a)});h.applyMask(p,m)}},applyMask:function(a,b){var c=a.length();"serial"!=this.chart.type||this.scrollbar||(this.positiveClip(b),0<c&&this.negativeClip(a))},drawSmoothedGraph:function(a,b,c,e){if(1<a.length){var h=this.set,f=this.chart,g=this.container,k=g.set(),l=g.set();h.push(l);h.push(k);var m=this.lineAlpha,p=this.lineThickness,h=this.dashLength,q=this.fillAlphas,n=this.lineColorR,t=this.fillColorsR,r=this.negativeLineColor,w=this.negativeFillColors,z=this.negativeFillAlphas,x=this.baseCoord,u=this.lineColorSwitched;u&&(n=u);(u=this.fillColorsSwitched)&&(t=u);var A=this.negativeLineAlpha;isNaN(A)&&(A=m);u=this.getGradRotation();m=new d.Bezier(g,a,b,n,m,p,t,0,h,void 0,u);d.setCN(f,m,this.bcn+"stroke");k.push(m.path);void 0!==r&&(p=new d.Bezier(g,a,b,r,A,p,t,0,h,void 0,u),d.setCN(f,p,this.bcn+"stroke"),d.setCN(f,p,this.bcn+"stroke-negative"),l.push(p.path));0<q&&(p=a.join(";").split(";"),m=b.join(";").split(";"),n="",0<c.length?(c.push("M"),e.push("M"),c.reverse(),e.reverse(),p=a.concat(c),m=b.concat(e)):(this.rotate?(n+=" L"+x+","+b[b.length-1],n+=" L"+x+","+b[0]):(n+=" L"+a[a.length-1]+","+
x,n+=" L"+a[0]+","+x),n+=" L"+a[0]+","+b[0]),a=new d.Bezier(g,p,m,NaN,0,0,t,q,h,n,u),d.setCN(f,a,this.bcn+"fill"),a.path.pattern(this.pattern,NaN,f.path),k.push(a.path),w||void 0!==r)&&(z||(z=q),w||(w=r),g=new d.Bezier(g,p,m,NaN,0,0,w,z,h,n,u),g.path.pattern(this.pattern,NaN,f.path),d.setCN(f,g,this.bcn+"fill"),d.setCN(f,g,this.bcn+"fill-negative"),l.push(g.path));this.applyMask(l,k)}},launchAnimation:function(){var a=this,b=a.chart.startDuration;if(0<b&&!a.animationPlayed){var c=a.set,e=a.bulletSet;d.VML||(c.attr({opacity:a.startAlpha}),e.attr({opacity:a.startAlpha}));c.hide();e.hide();a.seqAn?(b=setTimeout(function(){a.animateGraphs.call(a)},a.index*b*1E3),a.timeOuts.push(b)):a.animateGraphs()}},animateGraphs:function(){var a=this.chart,b=this.set,c=this.bulletSet,e=this.x,d=this.y;b.show();c.show();var f=a.startDuration,g=a.startEffect;b&&(this.rotate?(b.translate(-1E3,d),c.translate(-1E3,d)):(b.translate(e,-1E3),c.translate(e,-1E3)),b.animate({opacity:1,translate:e+","+d},f,g),c.animate({opacity:1,translate:e+","+d},f,g),a.animatable.push(b))},animate:function(a){var b=this.chart,c=this.animationArray;!a&&0<c.length&&(a=c[0],c.shift());c=d[d.getEffect(b.startEffect)];b=b.startDuration;a&&(this.rotate?a.animateWidth(b,c):a.animateHeight(b,c),a.set.show())},legendKeyColor:function(){var a=this.legendColor,b=this.lineAlpha;void 0===a&&(a=this.lineColorR,0===b&&(b=this.fillColorsR)&&(a="object"==typeof b?b[0]:b));return a},legendKeyAlpha:function(){var a=this.legendAlpha;void 0===a&&(a=this.lineAlpha,this.fillAlphas>a&&(a=this.fillAlphas),0===a&&(a=this.bulletAlpha),0===a&&(a=1));return a},createBullet:function(a,b,c){if(!isNaN(b)&&!isNaN(c)&&("none"!=this.bullet||this.customBullet||a.bullet||a.customBullet)){var e=this.chart,h=this.container,f=this.bulletOffset,g=this.bulletSize;isNaN(a.bulletSize)||(g=a.bulletSize);var k=a.values.value,l=this.maxValue,m=this.minValue,p=this.maxBulletSize,q=this.minBulletSize;isNaN(l)||(isNaN(k)||(g=(k-m)/(l-m)*(p-q)+q),m==l&&(g=p));l=g;this.bulletAxis&&(g=a.values.error,
isNaN(g)||(k=g),g=this.bulletAxis.stepWidth*k);g<this.minBulletSize&&(g=this.minBulletSize);this.rotate?b=a.isNegative?b-f:b+f:c=a.isNegative?c+f:c-f;q=this.bulletColorR;a.lineColor&&void 0===this.bulletColor&&(this.bulletColorSwitched=a.lineColor);this.bulletColorSwitched&&(q=this.bulletColorSwitched);a.isNegative&&void 0!==this.bulletColorNegative&&(q=this.bulletColorNegative);void 0!==a.color&&(q=a.color);var n;"xy"==e.type&&this.valueField&&(n=this.pattern,a.pattern&&(n=a.pattern));f=this.bullet;a.bullet&&(f=a.bullet);var k=this.bulletBorderThickness,m=this.bulletBorderColorR,p=this.bulletBorderAlpha,t=this.bulletAlpha;m||(m=q);this.useLineColorForBulletBorder&&(m=this.lineColorR,a.isNegative&&this.negativeLineColor&&(m=this.negativeLineColor),this.lineColorSwitched&&(m=this.lineColorSwitched));var r=a.alpha;isNaN(r)||(t=r);n=d.bullet(h,f,g,q,t,k,m,p,l,0,n,e.path);l=this.customBullet;a.customBullet&&(l=a.customBullet);l&&(n&&n.remove(),"function"==typeof l?(l=new l,l.chart=e,a.bulletConfig&&(l.availableSpace=c,l.graph=this,l.graphDataItem=a,l.bulletY=c,a.bulletConfig.minCoord=this.minCoord-c,l.bulletConfig=a.bulletConfig),l.write(h),n&&l.showBullet&&l.set.push(n),a.customBulletGraphics=l.cset,n=l.set):(n=h.set(),l=h.image(l,0,0,g,g),n.push(l),this.centerCustomBullets&&l.translate(-g/2,-g/2)));if(n){(a.url||this.showHandOnHover)&&n.setAttr("cursor","pointer");if("serial"==e.type||"gantt"==e.type)if(-.5>b||b>this.width||c<-g/2||c>this.height)n.remove(),n=null;n&&(this.bulletSet.push(n),n.translate(b,c),this.addListeners(n,a),this.allBullets.push(n));a.bx=b;a.by=c;d.setCN(e,n,this.bcn+"bullet");a.className&&d.setCN(e,n,a.className,!0)}if(n){n.size=g||0;if(e=this.bulletHitAreaSize)h=d.circle(h,e,"#FFFFFF",.001,0),h.translate(b,c),a.hitBullet=h,this.bulletSet.push(h),this.addListeners(h,a);a.bulletGraphics=n;void 0!==this.tabIndex&&n.setAttr("tabindex",this.tabIndex)}else n={size:0};n.graphDataItem=a;return n}},showBullets:function(){var a=this.allBullets,b;this.bulletsHidden=!1;for(b=0;b<a.length;b++)a[b].show()},hideBullets:function(){var a=this.allBullets,b;this.bulletsHidden=!0;for(b=0;b<a.length;b++)a[b].hide()},showCustomBullets:function(){var a=this.allBullets,b;this.customBulletsHidden=!1;for(b=0;b<a.length;b++){var c=a[b].graphDataItem;c&&c.customBulletGraphics&&c.customBulletGraphics.show()}},hideCustomBullets:function(){var a=this.allBullets,b;this.customBulletsHidden=!0;for(b=0;b<a.length;b++){var c=a[b].graphDataItem;c&&c.customBulletGraphics&&c.customBulletGraphics.hide()}},addListeners:function(a,b){var c=this;a.mouseover(function(a){c.handleRollOver(b,a)}).mouseout(function(a){c.handleRollOut(b,a)}).touchend(function(a){c.handleRollOver(b,a);c.chart.panEventsEnabled&&c.handleClick(b,a)}).touchstart(function(a){c.handleRollOver(b,a)}).click(function(a){c.handleClick(b,a)}).dblclick(function(a){c.handleDoubleClick(b,a)}).contextmenu(function(a){c.handleRightClick(b,a)});var e=c.chart;if(e.accessible&&c.accessibleLabel){var d=e.formatString(c.accessibleLabel,b);e.makeAccessible(a,d)}},handleRollOver:function(a,b){this.handleGraphEvent(b,"rollOverGraph");if(a){var c=this.chart;a.bulletConfig&&(c.isRolledOverBullet=!0);var e={type:"rollOverGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(e);c.fire(e);clearTimeout(c.hoverInt);(c=c.chartCursor)&&c.valueBalloonsEnabled||this.showGraphBalloon(a,"V",!0)}},handleRollOut:function(a,b){var c=this.chart;if(a){var e={type:"rollOutGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(e);c.fire(e);c.isRolledOverBullet=!1}this.handleGraphEvent(b,"rollOutGraph");(c=c.chartCursor)&&c.valueBalloonsEnabled||this.hideBalloon()},handleClick:function(a,b){if(!this.chart.checkTouchMoved()&&this.chart.checkTouchDuration(b)){if(a){var c={type:"clickGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(c);this.chart.fire(c);d.getURL(a.url,this.urlTarget)}this.handleGraphEvent(b,"clickGraph")}},handleGraphEvent:function(a,b){var c={type:b,graph:this,target:this,chart:this.chart,event:a};this.fire(c);this.chart.fire(c)},handleRightClick:function(a,b){if(a){var c={type:"rightClickGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(c);this.chart.fire(c)}},handleDoubleClick:function(a,b){if(a){var c={type:"doubleClickGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(c);this.chart.fire(c)}},zoom:function(a,b){this.start=a;this.end=b;this.draw()},changeOpacity:function(a){var b=this.set;b&&b.setAttr("opacity",a);if(b=this.ownColumns){var c;for(c=0;c<b.length;c++){var e=b[c].set;e&&e.setAttr("opacity",a)}}(b=this.bulletSet)&&b.setAttr("opacity",a)},destroy:function(){d.remove(this.set);d.remove(this.bulletSet);var a=this.timeOuts;if(a){var b;for(b=0;b<a.length;b++)clearTimeout(a[b])}this.timeOuts=[]},createBalloon:function(){var a=this.chart;this.balloon?this.balloon.destroy&&this.balloon.destroy():this.balloon={};var b=this.balloon;d.extend(b,a.balloon,!0);b.chart=a;b.mainSet=a.plotBalloonsSet;b.className=this.id},hideBalloon:function(){var a=this,b=a.chart;b.chartCursor?b.chartCursor.valueBalloonsEnabled||b.hideBalloon():b.hideBalloon();clearTimeout(a.hoverInt);a.hoverInt=setTimeout(function(){a.hideBalloonReal.call(a)},b.hideBalloonTime)},hideBalloonReal:function(){this.balloon&&this.balloon.hide();this.fixBulletSize()},fixBulletSize:function(){if(d.isModern){var a=this.resizedDItem;if(a){var b=a.bulletGraphics;if(b&&!b.doNotScale){b.translate(a.bx,a.by,1);var c=this.bulletAlpha;isNaN(a.alpha)||(c=a.alpha);b.setAttr("fill-opacity",c);b.setAttr("stroke-opacity",this.bulletBorderAlpha)}}this.resizedDItem=null}},showGraphBalloon:function(a,b,c,e,h){if(a){var f=this.chart,g=this.balloon,k=0,l=0,m=f.chartCursor,p=!0;m?m.valueBalloonsEnabled||(g=f.balloon,k=this.x,l=this.y,p=!1):(g=f.balloon,k=this.x,l=this.y,p=!1);clearTimeout(this.hoverInt);if(f.chartCursor&&(this.currentDataItem=a,"serial"==f.type&&f.isRolledOverBullet&&f.chartCursor.valueBalloonsEnabled)){this.hideBalloonReal();return}this.resizeBullet(a,e,h);if(g&&g.enabled&&this.showBalloon&&!this.hidden){var m=f.formatString(this.balloonText,a,!0),q=this.balloonFunction;q&&(m=q(a,a.graph));m&&(m=d.cleanFromEmpty(m));m&&""!==m?(e=f.getBalloonColor(this,a),g.drop||(g.pointerOrientation=b),b=a.x,h=a.y,f.rotate&&(b=a.y,h=a.x),b+=k,h+=l,isNaN(b)||isNaN(h)?this.hideBalloonReal():(a=this.width,q=this.height,p&&g.setBounds(k,l,a+k,q+l),g.changeColor(e),g.setPosition(b,h),g.fixPrevious(),g.fixedPosition&&(c=!1),!c&&"radar"!=f.type&&(b<k-.5||b>a+k||h<l-.5||h>q+l)?(g.showBalloon(m),g.hide(0)):(g.followCursor(c),g.showBalloon(m)))):(this.hideBalloonReal(),g.hide(),this.resizeBullet(a,e,h))}else this.hideBalloonReal()}},resizeBullet:function(a,b,c){this.fixBulletSize();if(a&&d.isModern&&(1!=b||!isNaN(c))){var e=a.bulletGraphics;e&&!e.doNotScale&&(e.translate(a.bx,a.by,b),isNaN(c)||(e.setAttr("fill-opacity",c),e.setAttr("stroke-opacity",c)),this.resizedDItem=a)}}})})();(function(){var d=window.AmCharts;d.ChartCursor=d.Class({construct:function(a){this.cname="ChartCursor";this.createEvents("changed","zoomed","onHideCursor","onShowCursor","draw","selected","moved","panning","zoomStarted");this.enabled=!0;this.cursorAlpha=1;this.selectionAlpha=.2;this.cursorColor="#CC0000";this.categoryBalloonAlpha=1;this.color="#FFFFFF";this.type="cursor";this.zoomed=!1;this.zoomable=!0;this.pan=!1;this.categoryBalloonDateFormat="MMM DD, YYYY";this.categoryBalloonText="[[category]]";this.categoryBalloonEnabled=this.valueBalloonsEnabled=!0;this.rolledOver=!1;this.cursorPosition="middle";this.bulletsEnabled=this.skipZoomDispatch=!1;this.bulletSize=8;this.selectWithoutZooming=this.oneBalloonOnly=!1;this.graphBulletSize=1.7;this.animationDuration=.3;this.zooming=!1;this.adjustment=0;this.avoidBalloonOverlapping=!0;this.leaveCursor=!1;this.leaveAfterTouch=!0;this.valueZoomable=!1;this.balloonPointerOrientation="horizontal";this.hLineEnabled=this.vLineEnabled=!0;this.vZoomEnabled=this.hZoomEnabled=!1;d.applyTheme(this,a,this.cname)},draw:function(){this.destroy();var a=this.chart;a.panRequired=!0;var b=a.container;this.rotate=a.rotate;this.container=b;this.prevLineHeight=this.prevLineWidth=NaN;b=b.set();b.translate(this.x,this.y);this.set=b;a.cursorSet.push(b);this.createElements();d.isString(this.limitToGraph)&&(this.limitToGraph=d.getObjById(a.graphs,this.limitToGraph),this.fullWidth=!1,this.cursorPosition="middle");this.pointer=this.balloonPointerOrientation.substr(0,1).toUpperCase();this.isHidden=!1;this.hideLines();this.valueLineAxis||(this.valueLineAxis=a.valueAxes[0])},createElements:function(){var a=this,b=a.chart,c=b.dx,e=b.dy,h=a.width,f=a.height,g,k,l=a.cursorAlpha,m=a.valueLineAlpha;a.rotate?(g=m,k=l):(k=m,g=l);"xy"==b.type&&(k=l,void 0!==m&&(k=m),g=l);a.vvLine=d.line(a.container,[c,0,0],[e,0,f],a.cursorColor,g,1);d.setCN(b,a.vvLine,"cursor-line");d.setCN(b,a.vvLine,"cursor-line-vertical");a.hhLine=d.line(a.container,[0,h,h+c],[0,0,e],a.cursorColor,k,1);d.setCN(b,a.hhLine,"cursor-line");d.setCN(b,a.hhLine,"cursor-line-horizontal");a.vLine=a.rotate?a.vvLine:a.hhLine;a.set.push(a.vvLine);a.set.push(a.hhLine);a.set.node.style.pointerEvents="none";a.fullLines=a.container.set();b=b.cursorLineSet;b.push(a.fullLines);b.translate(a.x,a.y);b.clipRect(-1,-1,h+2,f+2);void 0!==a.tabIndex&&(b.setAttr("tabindex",a.tabIndex),b.keyup(function(b){a.handleKeys(b)}).focus(function(b){a.showCursor()}).blur(function(b){a.hideCursor()}));a.set.clipRect(0,0,h,f)},handleKeys:function(a){var b=this.prevIndex,c=this.chart;if(c){var e=c.chartData;e&&(isNaN(b)&&(b=e.length-1),37!=a.keyCode&&40!=a.keyCode||b--,39!=a.keyCode&&38!=a.keyCode||b++,b=d.fitToBounds(b,c.startIndex,c.endIndex),(a=this.chart.chartData[b])&&this.setPosition(a.x.categoryAxis),this.prevIndex=b)}},update:function(){var a=this.chart;if(a){var b=a.mouseX-this.x,c=a.mouseY-this.y;this.mouseX=b;this.mouseY=c;this.mouse2X=a.mouse2X-this.x;this.mouse2Y=a.mouse2Y-this.y;var e;if(a.chartData&&0<a.chartData.length){this.mouseIsOver()?(this.hideGraphBalloons=!1,this.rolledOver=e=!0,this.updateDrawing(),this.vvLine&&isNaN(this.fx)&&(a.rotate||!this.limitToGraph)&&this.vvLine.translate(b,0),!this.hhLine||!isNaN(this.fy)||a.rotate&&this.limitToGraph||this.hhLine.translate(0,c),isNaN(this.mouse2X)?this.dispatchMovedEvent(b,c):e=!1):this.forceShow||this.hideCursor();if(this.zooming){if(!isNaN(this.mouse2X)){isNaN(this.mouse2X0)||this.dispatchPanEvent();return}if(this.pan){this.dispatchPanEvent();return}(this.hZoomEnabled||this.vZoomEnabled)&&this.zooming&&this.updateSelection()}e&&this.showCursor()}}},updateDrawing:function(){this.drawing&&this.chart.setMouseCursor("crosshair");if(this.drawingNow&&(d.remove(this.drawingLine),1<Math.abs(this.drawStartX-this.mouseX)||1<Math.abs(this.drawStartY-this.mouseY))){var a=this.chart,b=a.marginTop,a=a.marginLeft;this.drawingLine=d.line(this.container,[this.drawStartX+a,this.mouseX+a],[this.drawStartY+b,this.mouseY+b],this.cursorColor,1,1)}},fixWidth:function(a){if(this.fullWidth&&this.prevLineWidth!=a){var b=this.vvLine,c=0;b&&(b.remove(),c=b.x);b=this.container.set();b.translate(c,0);c=d.rect(this.container,a,this.height,this.cursorColor,this.cursorAlpha,this.cursorAlpha,this.cursorColor);d.setCN(this.chart,c,"cursor-fill");c.translate(-a/2-1,0);b.push(c);this.vvLine=b;this.fullLines.push(b);this.prevLineWidth=a}},fixHeight:function(a){if(this.fullWidth&&this.prevLineHeight!=a){var b=this.hhLine,c=0;b&&(b.remove(),c=b.y);b=this.container.set();b.translate(0,c);c=d.rect(this.container,this.width,a,this.cursorColor,this.cursorAlpha);c.translate(0,-a/2);b.push(c);this.fullLines.push(b);this.hhLine=b;this.prevLineHeight=a}},fixVLine:function(a,b){if(!isNaN(a)){if(isNaN(this.prevLineX)){var c=0,e=this.mouseX;if(this.limitToGraph){var d=this.chart.categoryAxis;d&&(this.chart.rotate||(c="bottom"==d.position?this.height:-this.height),e=a)}this.vvLine.translate(e,c)}else this.prevLineX!=a&&this.vvLine.translate(this.prevLineX,this.prevLineY);this.fx=a;this.prevLineX!=a&&(c=this.animationDuration,this.zooming&&(c=0),this.vvLine.stop(),this.vvLine.animate({translate:a+","+b},c,"easeOutSine"),this.prevLineX=a,this.prevLineY=b)}},fixHLine:function(a,b){if(!isNaN(a)){if(isNaN(this.prevLineY)){var c=0,e=this.mouseY;if(this.limitToGraph){var d=this.chart.categoryAxis;d&&(this.chart.rotate&&(c="right"==d.position?this.width:-this.width),e=a)}this.hhLine.translate(c,e)}else this.prevLineY!=a&&this.hhLine.translate(this.prevLineX,this.prevLineY);this.fy=a;this.prevLineY!=a&&(c=this.animationDuration,this.zooming&&(c=0),this.hhLine.stop(),this.hhLine.animate({translate:b+","+a},c,"easeOutSine"),this.prevLineY=a,this.prevLineX=b)}},hideCursor:function(a){this.forceShow=!1;this.chart.wasTouched&&this.leaveAfterTouch||this.isHidden||this.leaveCursor||(this.hideCursorReal(),a?this.chart.handleCursorHide():this.fire({target:this,chart:this.chart,type:"onHideCursor"}),this.chart.setMouseCursor("auto"))},hideCursorReal:function(){this.hideLines();this.isHidden=!0;this.index=this.prevLineY=this.prevLineX=this.mouseY0=this.mouseX0=this.fy=this.fx=NaN},hideLines:function(){this.vvLine&&this.vvLine.hide();this.hhLine&&this.hhLine.hide();this.fullLines&&this.fullLines.hide();this.isHidden=!0;this.chart.handleCursorHide()},showCursor:function(a){!this.drawing&&this.enabled&&(this.vLineEnabled&&this.vvLine&&this.vvLine.show(),this.hLineEnabled&&this.hhLine&&this.hhLine.show(),this.isHidden=!1,this.updateFullLine(),a||this.fire({target:this,chart:this.chart,type:"onShowCursor"}),this.pan&&this.chart.setMouseCursor("move"))},updateFullLine:function(){this.zooming&&this.fullWidth&&this.selection&&(this.rotate?0<this.selection.height&&this.hhLine.hide():0<this.selection.width&&this.vvLine.hide())},updateSelection:function(){if(!this.pan&&this.enabled){var a=this.mouseX,b=this.mouseY;isNaN(this.fx)||(a=this.fx);isNaN(this.fy)||(b=this.fy);this.clearSelection();var c=this.mouseX0,e=this.mouseY0,h=this.width,f=this.height,a=d.fitToBounds(a,0,h),b=d.fitToBounds(b,0,f),g;a<c&&(g=a,a=c,c=g);b<e&&(g=b,b=e,e=g);this.hZoomEnabled?h=a-c:c=0;this.vZoomEnabled?f=b-e:e=0;isNaN(this.mouse2X)&&0<Math.abs(h)&&0<Math.abs(f)&&(a=this.chart,b=d.rect(this.container,h,f,this.cursorColor,this.selectionAlpha),d.setCN(a,b,"cursor-selection"),b.width=h,b.height=f,b.translate(c,e),this.set.push(b),this.selection=b);this.updateFullLine()}},mouseIsOver:function(){var a=this.mouseX,b=this.mouseY;if(this.justReleased)return this.justReleased=!1,!0;if(this.mouseIsDown)return!0;if(!this.chart.mouseIsOver)return this.handleMouseOut(),!1;if(0<a&&a<this.width&&0<b&&b<this.height)return!0;this.handleMouseOut()},fixPosition:function(){this.prevY=this.prevX=NaN},handleMouseDown:function(){this.update();if(this.mouseIsOver())if(this.mouseIsDown=!0,this.mouseX0=this.mouseX,this.mouseY0=this.mouseY,this.mouse2X0=this.mouse2X,this.mouse2Y0=this.mouse2Y,this.drawing)this.drawStartY=this.mouseY,this.drawStartX=this.mouseX,this.drawingNow=!0;else if(this.dispatchMovedEvent(this.mouseX,this.mouseY),!this.pan&&isNaN(this.mouse2X0)&&(isNaN(this.fx)||(this.mouseX0=this.fx),isNaN(this.fy)||(this.mouseY0=this.fy)),this.hZoomEnabled||this.vZoomEnabled){this.zooming=!0;var a={chart:this.chart,target:this,type:"zoomStarted"};a.x=this.mouseX/this.width;a.y=this.mouseY/this.height;this.index0=a.index=this.index;this.timestamp0=this.timestamp;this.fire(a)}},registerInitialMouse:function(){},handleReleaseOutside:function(){this.mouseIsDown=!1;if(this.drawingNow){this.drawingNow=!1;d.remove(this.drawingLine);var a=this.drawStartX,b=this.drawStartY,c=this.mouseX,e=this.mouseY,h=this.chart;(2<Math.abs(a-c)||2<Math.abs(b-e))&&this.fire({type:"draw",target:this,chart:h,initialX:a,initialY:b,finalX:c,finalY:e})}this.zooming&&(this.zooming=!1,this.selectWithoutZooming?this.dispatchZoomEvent("selected"):(this.hZoomEnabled||this.vZoomEnabled)&&this.dispatchZoomEvent("zoomed"),this.rolledOver&&this.dispatchMovedEvent(this.mouseX,this.mouseY));this.mouse2Y0=this.mouse2X0=this.mouseY0=this.mouseX0=NaN},dispatchZoomEvent:function(a){if(!this.pan){var b=this.selection;if(b&&3<Math.abs(b.width)&&3<Math.abs(b.height)){var c=Math.min(this.index,this.index0),e=Math.max(this.index,this.index0),d=c,f=e,g=this.chart,k=g.chartData,l=g.categoryAxis;l&&l.parseDates&&!l.equalSpacing&&(d=k[c]?k[c].time:Math.min(this.timestamp0,this.timestamp),f=k[e]?g.getEndTime(k[e].time):Math.max(this.timestamp0,this.timestamp));var b={type:a,chart:this.chart,target:this,end:f,start:d,startIndex:c,endIndex:e,selectionHeight:b.height,selectionWidth:b.width,selectionY:b.y,selectionX:b.x},m;this.hZoomEnabled&&4<Math.abs(this.mouseX0-
this.mouseX)&&(b.startX=this.mouseX0/this.width,b.endX=this.mouseX/this.width,m=!0);this.vZoomEnabled&&4<Math.abs(this.mouseY0-this.mouseY)&&(b.startY=1-this.mouseY0/this.height,b.endY=1-this.mouseY/this.height,m=!0);m&&(this.prevY=this.prevX=NaN,this.fire(b),"selected"!=a&&this.clearSelection());this.hideCursor()}}},dispatchMovedEvent:function(a,b,c,e){a=Math.round(a);b=Math.round(b);if(!this.isHidden&&(a!=this.prevX||b!=this.prevY||"changed"==c)){c||(c="moved");var d=this.fx,f=this.fy;isNaN(d)&&(d=a);isNaN(f)&&(f=b);var g=!1;this.zooming&&this.pan&&(g=!0);g={hidden:this.isHidden,type:c,chart:this.chart,target:this,x:a,y:b,finalX:d,finalY:f,zooming:this.zooming,panning:g,mostCloseGraph:this.mostCloseGraph,index:this.index,skip:e,hideBalloons:this.hideGraphBalloons};this.prevIndex=this.index;this.rotate?(g.position=b,g.finalPosition=f):(g.position=a,g.finalPosition=d);this.prevX=a;this.prevY=b;e?this.chart.handleCursorMove(g):(this.fire(g),"changed"==c&&this.chart.fire(g))}},dispatchPanEvent:function(){if(this.mouseIsDown){var a=d.roundTo((this.mouseX-this.mouseX0)/this.width,3),b=d.roundTo((this.mouseY-this.mouseY0)/this.height,3),c=d.roundTo((this.mouse2X-this.mouse2X0)/this.width,3),e=d.roundTo((this.mouse2Y-this.mouse2Y0)/this.height,2),h=!1;0!==Math.abs(a)&&0!==Math.abs(b)&&(h=!0);if(this.prevDeltaX==a||this.prevDeltaY==b)h=!1;isNaN(c)||isNaN(e)||(0!==Math.abs(c)&&0!==Math.abs(e)&&(h=!0),this.prevDelta2X!=c&&this.prevDelta2Y!=e)||(h=!1);h&&(this.hideLines(),this.fire({type:"panning",chart:this.chart,target:this,deltaX:a,
deltaY:b,delta2X:c,delta2Y:e,index:this.index}),this.prevDeltaX=a,this.prevDeltaY=b,this.prevDelta2X=c,this.prevDelta2Y=e)}},clearSelection:function(){var a=this.selection;a&&(a.width=0,a.height=0,a.remove())},destroy:function(){this.clear();d.remove(this.selection);this.selection=null;clearTimeout(this.syncTO);d.remove(this.set)},clear:function(){},setTimestamp:function(a){this.timestamp=a},setIndex:function(a,b){a!=this.index&&(this.index=a,b||this.isHidden||this.dispatchMovedEvent(this.mouseX,this.mouseY,"changed"))},handleMouseOut:function(){this.enabled&&this.rolledOver&&(this.leaveCursor||this.setIndex(void 0),this.forceShow=!1,this.hideCursor(),this.rolledOver=!1)},showCursorAt:function(a){var b=this.chart.categoryAxis;b&&this.setPosition(b.categoryToCoordinate(a),a)},setPosition:function(a,b){var c=this.chart,e=c.categoryAxis;if(e){var d,f;void 0===b&&(b=e.coordinateToValue(a));e.showBalloonAt(b,a);this.forceShow=!0;e.stickBalloonToCategory?c.rotate?this.fixHLine(a,0):this.fixVLine(a,0):(this.showCursor(),c.rotate?this.hhLine.translate(0,a):this.vvLine.translate(a,0));c.rotate?d=a:f=a;c.rotate?(this.vvLine&&this.vvLine.hide(),this.hhLine&&this.hhLine.show()):(this.hhLine&&this.hhLine.hide(),this.vvLine&&this.vvLine.show());this.updateFullLine();this.isHidden=!1;this.dispatchMovedEvent(f,d,"moved",!0)}},enableDrawing:function(a){this.enabled=!a;this.hideCursor();this.drawing=a},syncWithCursor:function(a,b){clearTimeout(this.syncTO);a&&(a.isHidden?this.hideCursor(!0):this.syncWithCursorReal(a,b))},isZooming:function(a){this.zooming=a},syncWithCursorReal:function(a,b){var c=a.vvLine,e=a.hhLine;this.index=a.index;this.forceShow=!0;this.zooming&&this.pan||this.showCursor(!0);this.hideGraphBalloons=b;this.justReleased=a.justReleased;this.zooming=a.zooming;this.index0=a.index0;this.mouseX0=a.mouseX0;this.mouseY0=a.mouseY0;this.mouse2X0=a.mouse2X0;this.mouse2Y0=a.mouse2Y0;this.timestamp0=a.timestamp0;this.prevDeltaX=a.prevDeltaX;this.prevDeltaY=a.prevDeltaY;this.prevDelta2X=a.prevDelta2X;this.prevDelta2Y=a.prevDelta2Y;this.fx=a.fx;this.fy=a.fy;a.zooming&&this.updateSelection();var d=a.mouseX,f=a.mouseY;this.rotate?(d=NaN,this.vvLine&&this.vvLine.hide(),this.hhLine&&e&&(isNaN(a.fy)?this.hhLine.translate(0,a.mouseY):this.fixHLine(a.fy,0))):(f=NaN,this.hhLine&&this.hhLine.hide(),this.vvLine&&c&&(isNaN(a.fx)?this.vvLine.translate(a.mouseX,0):this.fixVLine(a.fx,0)));this.dispatchMovedEvent(d,f,"moved",!0)}})})();(function(){var d=window.AmCharts;d.SimpleChartScrollbar=d.Class({construct:function(a){this.createEvents("zoomed","zoomStarted","zoomEnded");this.backgroundColor="#D4D4D4";this.backgroundAlpha=1;this.selectedBackgroundColor="#EFEFEF";this.scrollDuration=this.selectedBackgroundAlpha=1;this.resizeEnabled=!0;this.hideResizeGrips=!1;this.scrollbarHeight=20;this.updateOnReleaseOnly=!1;9>document.documentMode&&(this.updateOnReleaseOnly=!0);this.dragIconHeight=this.dragIconWidth=35;this.dragIcon="dragIconRoundBig";this.dragCursorHover="cursor: move; cursor: grab; cursor: -moz-grab; cursor: -webkit-grab;";this.dragCursorDown="cursor: move; cursor: grab; cursor: -moz-grabbing; cursor: -webkit-grabbing;";this.vResizeCursor="ns-resize";this.hResizeCursor="ew-resize";this.enabled=!0;this.percentStart=this.offset=0;this.percentEnd=1;d.applyTheme(this,a,"SimpleChartScrollbar")},getPercents:function(){var a=this.getDBox(),b=a.x,c=a.y,e=a.width,a=a.height;this.rotate?(b=1-c/this.height,c=1-(c+a)/this.height):(c=b/this.width,
b=(b+e)/this.width);this.percentStart=c;this.percentEnd=b},draw:function(){var a=this;a.destroy();if(a.enabled){var b=a.chart.container,c=a.rotate,e=a.chart;e.panRequired=!0;var h=b.set();a.set=h;c?d.setCN(e,h,"scrollbar-vertical"):d.setCN(e,h,"scrollbar-horizontal");e.scrollbarsSet.push(h);var f,g;c?(f=a.scrollbarHeight,g=e.plotAreaHeight):(g=a.scrollbarHeight,f=e.plotAreaWidth);a.width=f;if((a.height=g)&&f){var k=d.rect(b,f,g,a.backgroundColor,a.backgroundAlpha,1,a.backgroundColor,a.backgroundAlpha);
d.setCN(e,k,"scrollbar-bg");a.bg=k;h.push(k);k=d.rect(b,f,g,"#000",.005);h.push(k);a.invisibleBg=k;k.click(function(){a.handleBgClick()}).mouseover(function(){a.handleMouseOver()}).mouseout(function(){a.handleMouseOut()}).touchend(function(){a.handleBgClick()});k=d.rect(b,f,g,a.selectedBackgroundColor,a.selectedBackgroundAlpha);d.setCN(e,k,"scrollbar-bg-selected");a.selectedBG=k;h.push(k);f=d.rect(b,f,g,"#000",.005);a.dragger=f;h.push(f);f.mousedown(function(b){a.handleDragStart(b)}).mouseup(function(){a.handleDragStop()}).mouseover(function(){a.handleDraggerOver()}).mouseout(function(){a.handleMouseOut()}).touchstart(function(b){a.handleDragStart(b)}).touchend(function(){a.handleDragStop()});g=e.pathToImages;var l,k=a.dragIcon.replace(/\.[a-z]*$/i,"");d.isAbsolute(k)&&(g="");c?(l=g+k+"H"+e.extension,g=a.dragIconWidth,c=a.dragIconHeight):(l=g+k+e.extension,c=a.dragIconWidth,g=a.dragIconHeight);k=b.image(l,0,0,c,g);d.setCN(e,k,"scrollbar-grip-left");l=b.image(l,0,0,c,g);d.setCN(e,l,"scrollbar-grip-right");var m=10,p=20;e.panEventsEnabled&&(m=25,p=a.scrollbarHeight);var q=d.rect(b,m,p,"#000",.005),n=d.rect(b,m,p,"#000",.005);n.translate(-(m-c)/2,-(p-g)/2);q.translate(-(m-c)/2,-(p-g)/2);
c=b.set([k,n]);b=b.set([l,q]);a.iconLeft=c;h.push(a.iconLeft);a.iconRight=b;h.push(b);a.updateGripCursor(!1);e.makeAccessible(c,a.accessibleLabel);e.makeAccessible(b,a.accessibleLabel);e.makeAccessible(f,a.accessibleLabel);c.setAttr("role","menuitem");b.setAttr("role","menuitem");f.setAttr("role","menuitem");void 0!==a.tabIndex&&(c.setAttr("tabindex",a.tabIndex),c.keyup(function(b){a.handleKeys(b,1,0)}));void 0!==a.tabIndex&&(f.setAttr("tabindex",a.tabIndex),f.keyup(function(b){a.handleKeys(b,1,1)}));void 0!==a.tabIndex&&(b.setAttr("tabindex",a.tabIndex),b.keyup(function(b){a.handleKeys(b,0,1)}));c.mousedown(function(){a.leftDragStart()}).mouseup(function(){a.leftDragStop()}).mouseover(function(){a.iconRollOver()}).mouseout(function(){a.iconRollOut()}).touchstart(function(){a.leftDragStart()}).touchend(function(){a.leftDragStop()});b.mousedown(function(){a.rightDragStart()}).mouseup(function(){a.rightDragStop()}).mouseover(function(){a.iconRollOver()}).mouseout(function(){a.iconRollOut()}).touchstart(function(){a.rightDragStart()}).touchend(function(){a.rightDragStop()});d.ifArray(e.chartData)?h.show():h.hide();a.hideDragIcons();a.clipDragger(!1)}h.translate(a.x,a.y);h.node.style.msTouchAction="none";h.node.style.touchAction="none"}},handleKeys:function(a,b,c){this.getPercents();var e=this.percentStart,d=this.percentEnd;if(this.rotate)var f=d,d=e,e=f;if(37==a.keyCode||40==a.keyCode)e-=.02*b,d-=.02*c;if(39==a.keyCode||38==a.keyCode)e+=.02*b,d+=.02*c;this.rotate&&(a=d,d=e,e=a);isNaN(d)||isNaN(e)||this.percentZoom(e,d,!0)},updateScrollbarSize:function(a,b){if(!isNaN(a)&&!isNaN(b)){a=Math.round(a);b=Math.round(b);var c=this.dragger,e,d,f,g,k;this.rotate?(e=0,d=a,f=this.width+1,g=b-a,c.setAttr("height",b-a),c.setAttr("y",d)):(e=a,d=0,f=b-a,g=this.height+1,k=b-a,c.setAttr("x",e),c.setAttr("width",k));this.clipAndUpdate(e,d,f,g)}},update:function(){var a,b=!1,c,e,d=this.x,f=this.y,g=this.dragger,k=this.getDBox();if(k){c=k.x+d;e=k.y+f;var l=k.width,k=k.height,m=this.rotate,p=this.chart,q=this.width,n=this.height,t=p.mouseX,p=p.mouseY;a=this.initialMouse;this.forceClip&&this.clipDragger(!0);if(this.dragging){var r=this.initialCoord;m?(a=r+(p-a),0>a&&(a=0),r=n-k,a>r&&(a=r),g.setAttr("y",a)):(a=r+(t-a),0>a&&(a=0),r=q-l,a>r&&(a=r),g.setAttr("x",a));this.clipDragger(!0)}if(this.resizingRight){if(m)if(a=p-e,!isNaN(this.maxHeight)&&a>this.maxHeight&&(a=this.maxHeight),a+e>n+f&&(a=n-e+f),0>a)this.resizingRight=!1,b=this.resizingLeft=!0;else{if(0===a||isNaN(a))a=.1;g.setAttr("height",a)}else if(a=t-c,!isNaN(this.maxWidth)&&a>this.maxWidth&&(a=this.maxWidth),a+c>q+d&&(a=q-c+d),0>a)this.resizingRight=!1,b=this.resizingLeft=!0;else{if(0===a||isNaN(a))a=.1;g.setAttr("width",a)}this.clipDragger(!0)}if(this.resizingLeft){if(m)if(c=e,e=p,e<f&&(e=f),isNaN(e)&&(e=f),e>n+f&&(e=n+f),a=!0===b?c-e:k+c-e,!isNaN(this.maxHeight)&&a>this.maxHeight&&(a=this.maxHeight,e=c),0>a)this.resizingRight=!0,this.resizingLeft=!1,g.setAttr("y",c+k-f);else{if(0===a||isNaN(a))a=.1;g.setAttr("y",e-f);g.setAttr("height",a)}else if(e=t,e<d&&(e=d),isNaN(e)&&(e=d),e>q+d&&(e=q+d),a=!0===b?c-e:l+c-e,!isNaN(this.maxWidth)&&a>this.maxWidth&&(a=this.maxWidth,e=c),0>a)this.resizingRight=!0,this.resizingLeft=!1,g.setAttr("x",c+l-d);else{if(0===a||isNaN(a))a=.1;g.setAttr("x",e-d);g.setAttr("width",a)}this.clipDragger(!0)}}},stopForceClip:function(){this.animating=this.forceClip=!1},clipDragger:function(a){var b=this.getDBox();if(b){var c=b.x,e=b.y,d=b.width,b=b.height,f=!1;if(this.rotate){if(c=0,d=this.width+1,this.clipY!=e||this.clipH!=b)f=!0}else if(e=0,b=this.height+1,this.clipX!=c||this.clipW!=d)f=!0;f&&(this.clipAndUpdate(c,e,d,b),a&&(this.updateOnReleaseOnly||this.dispatchScrollbarEvent()))}},maskGraphs:function(){},clipAndUpdate:function(a,b,c,d){this.clipX=a;this.clipY=b;this.clipW=c;this.clipH=d;this.selectedBG.setAttr("width",c);this.selectedBG.setAttr("height",d);this.selectedBG.translate(a,b);this.updateDragIconPositions();this.maskGraphs(a,b,c,d)},dispatchScrollbarEvent:function(){if(this.skipEvent)this.skipEvent=!1;else{var a=this.chart;a.hideBalloon();var b=this.getDBox(),c=b.x,d=b.y,h=b.width,b=b.height;this.getPercents();this.rotate?(c=d,h=this.height/b):h=this.width/h;this.fire({type:"zoomed",position:c,chart:a,target:this,multiplier:h,relativeStart:this.percentStart,relativeEnd:this.percentEnd})}},updateDragIconPositions:function(){var a=this.getDBox(),b=a.x,c=a.y,d=this.iconLeft,h=this.iconRight,f,g,k=this.scrollbarHeight;this.rotate?(f=this.dragIconWidth,g=this.dragIconHeight,d.translate((k-g)/2,c-f/2),h.translate((k-g)/2,c+a.height-f/2)):(f=this.dragIconHeight,
g=this.dragIconWidth,d.translate(b-g/2,(k-f)/2),h.translate(b-g/2+a.width,(k-f)/2))},showDragIcons:function(){this.resizeEnabled&&(this.iconLeft.show(),this.iconRight.show())},hideDragIcons:function(){if(!this.resizingLeft&&!this.resizingRight&&!this.dragging){if(this.hideResizeGrips||!this.resizeEnabled)this.iconLeft.hide(),this.iconRight.hide();this.removeCursors()}},removeCursors:function(){this.chart.setMouseCursor("auto")},fireZoomEvent:function(a){this.fire({type:a,chart:this.chart,target:this})},
percentZoom:function(a,b,c){a=d.fitToBounds(a,0,b);b=d.fitToBounds(b,a,1);if(this.dragger&&this.enabled){this.dragger.stop();isNaN(a)&&(a=0);isNaN(b)&&(b=1);var e,h;this.rotate?(e=this.height,b=e-e*b,h=e-e*a):(e=this.width,h=e*b,b=e*a);this.updateScrollbarSize(b,h);this.clipDragger(!1);this.getPercents();c&&this.dispatchScrollbarEvent()}},destroy:function(){this.clear();d.remove(this.set);d.remove(this.iconRight);d.remove(this.iconLeft)},clear:function(){},handleDragStart:function(){if(this.enabled){this.fireZoomEvent("zoomStarted");var a=this.chart;this.dragger.stop();this.removeCursors();d.isModern&&(this.dragger.node.style.cssText=this.dragCursorDown);this.dragging=!0;var b=this.getDBox();this.rotate?(this.initialCoord=b.y,this.initialMouse=a.mouseY):(this.initialCoord=b.x,this.initialMouse=a.mouseX)}},handleDragStop:function(){this.updateOnReleaseOnly&&(this.update(),this.skipEvent=!1,this.dispatchScrollbarEvent());this.dragging=!1;this.mouseIsOver&&this.removeCursors();d.isModern&&(this.dragger.node.style.cssText=this.dragCursorHover);this.update();this.fireZoomEvent("zoomEnded")},handleDraggerOver:function(){this.handleMouseOver();d.isModern&&(this.dragger.node.style.cssText=this.dragCursorHover)},leftDragStart:function(){this.fireZoomEvent("zoomStarted");this.dragger.stop();this.resizingLeft=!0;this.updateGripCursor(!0)},updateGripCursor:function(a){d.isModern&&(a=this.rotate?a?this.vResizeCursorDown:this.vResizeCursorHover:a?this.hResizeCursorDown:this.hResizeCursorHover)&&(this.iconRight&&(this.iconRight.node.style.cssText=a),this.iconLeft&&(this.iconLeft.node.style.cssText=a))},leftDragStop:function(){this.resizingLeft&&(this.resizingLeft=!1,this.mouseIsOver||this.removeCursors(),this.updateOnRelease(),this.fireZoomEvent("zoomEnded"));this.updateGripCursor(!1)},rightDragStart:function(){this.fireZoomEvent("zoomStarted");this.dragger.stop();this.resizingRight=!0;this.updateGripCursor(!0)},rightDragStop:function(){this.resizingRight&&(this.resizingRight=!1,this.mouseIsOver||this.removeCursors(),this.updateOnRelease(),this.fireZoomEvent("zoomEnded"));this.updateGripCursor(!1)},iconRollOut:function(){this.removeCursors()},iconRollOver:function(){this.rotate?this.vResizeCursor&&this.chart.setMouseCursor(this.vResizeCursor):this.hResizeCursor&&this.chart.setMouseCursor(this.hResizeCursor);this.handleMouseOver()},getDBox:function(){if(this.dragger)return this.dragger.getBBox()},handleBgClick:function(){var a=this;if(!a.resizingRight&&!a.resizingLeft){a.zooming=!0;var b,c,e=a.scrollDuration,h=a.dragger;b=a.getDBox();var f=b.height,g=b.width;c=a.chart;var k=a.y,l=a.x,m=a.rotate;m?(b="y",c=c.mouseY-f/2-k,c=d.fitToBounds(c,0,a.height-f)):(b="x",c=c.mouseX-g/2-l,c=d.fitToBounds(c,0,a.width-g));a.updateOnReleaseOnly?(a.skipEvent=!1,h.setAttr(b,c),a.dispatchScrollbarEvent(),a.clipDragger()):(a.animating=!0,c=Math.round(c),m?h.animate({y:c},e,">"):h.animate({x:c},e,">"),a.forceClip=!0,clearTimeout(a.forceTO),a.forceTO=setTimeout(function(){a.stopForceClip.call(a)},5E3*e))}},updateOnRelease:function(){this.updateOnReleaseOnly&&(this.update(),this.skipEvent=!1,this.dispatchScrollbarEvent())},handleReleaseOutside:function(){if(this.set){if(this.resizingLeft||this.resizingRight||this.dragging)this.dragging=this.resizingRight=this.resizingLeft=!1,this.updateOnRelease(),this.removeCursors();this.animating=this.mouseIsOver=!1;this.hideDragIcons();this.update()}},handleMouseOver:function(){this.mouseIsOver=!0;this.showDragIcons()},handleMouseOut:function(){this.mouseIsOver=!1;this.hideDragIcons();this.removeCursors()}})})();(function(){var d=window.AmCharts;d.ChartScrollbar=d.Class({inherits:d.SimpleChartScrollbar,construct:function(a){this.cname="ChartScrollbar";d.ChartScrollbar.base.construct.call(this,a);this.graphLineColor="#BBBBBB";this.graphLineAlpha=0;this.graphFillColor="#BBBBBB";this.graphFillAlpha=1;this.selectedGraphLineColor="#888888";this.selectedGraphLineAlpha=0;this.selectedGraphFillColor="#888888";this.selectedGraphFillAlpha=1;this.gridCount=0;this.gridColor="#FFFFFF";this.gridAlpha=.7;this.skipEvent=this.autoGridCount=!1;this.color="#FFFFFF";this.scrollbarCreated=!1;this.oppositeAxis=!0;this.accessibleLabel="Zoom chart using cursor arrows";d.applyTheme(this,a,this.cname)},init:function(){var a=this.categoryAxis,b=this.chart,c=this.gridAxis;a||("CategoryAxis"==this.gridAxis.cname?(this.catScrollbar=!0,a=new d.CategoryAxis,a.id="scrollbar"):(a=new d.ValueAxis,a.data=b.chartData,a.id=c.id,a.type=c.type,a.maximumDate=c.maximumDate,a.minimumDate=c.minimumDate,a.minPeriod=c.minPeriod,a.minMaxField=c.minMaxField),this.categoryAxis=a);a.chart=b;var e=b.categoryAxis;e&&(a.firstDayOfWeek=e.firstDayOfWeek);a.dateFormats=c.dateFormats;a.markPeriodChange=c.markPeriodChange;a.boldPeriodBeginning=c.boldPeriodBeginning;a.labelFunction=c.labelFunction;a.axisItemRenderer=d.RecItem;a.axisRenderer=d.RecAxis;a.guideFillRenderer=d.RecFill;a.inside=!0;a.fontSize=this.fontSize;a.tickLength=0;a.axisAlpha=0;d.isString(this.graph)&&(this.graph=d.getObjById(b.graphs,this.graph));(a=this.graph)&&this.catScrollbar&&(c=this.valueAxis,c||(this.valueAxis=c=new d.ValueAxis,c.visible=!1,c.scrollbar=!0,c.axisItemRenderer=d.RecItem,c.axisRenderer=d.RecAxis,c.guideFillRenderer=d.RecFill,c.labelsEnabled=!1,c.chart=b),b=this.unselectedGraph,b||(b=new d.AmGraph,b.scrollbar=!0,this.unselectedGraph=b,b.negativeBase=a.negativeBase,b.noStepRisers=a.noStepRisers),b=this.selectedGraph,b||(b=new d.AmGraph,b.scrollbar=!0,this.selectedGraph=b,b.negativeBase=a.negativeBase,b.noStepRisers=a.noStepRisers));this.scrollbarCreated=!0},draw:function(){var a=this;d.ChartScrollbar.base.draw.call(a);if(a.enabled){a.scrollbarCreated||a.init();var b=a.chart,c=b.chartData,e=a.categoryAxis,h=a.rotate,f=a.x,g=a.y,k=a.width,l=a.height,m=a.gridAxis,p=a.set;e.setOrientation(!h);e.parseDates=m.parseDates;"ValueAxis"==a.categoryAxis.cname&&(e.rotate=!h);e.equalSpacing=m.equalSpacing;e.minPeriod=m.minPeriod;e.startOnAxis=m.startOnAxis;e.width=k-1;e.height=l;e.gridCount=a.gridCount;e.gridColor=a.gridColor;e.gridAlpha=a.gridAlpha;e.color=a.color;e.tickLength=0;e.axisAlpha=0;e.autoGridCount=a.autoGridCount;e.parseDates&&!e.equalSpacing&&e.timeZoom(b.firstTime,b.lastTime);e.minimum=a.gridAxis.fullMin;e.maximum=a.gridAxis.fullMax;e.strictMinMax=!0;e.zoom(0,c.length-1);if((m=a.graph)&&a.catScrollbar){var q=a.valueAxis,n=m.valueAxis;q.id=n.id;q.rotate=h;q.setOrientation(h);q.width=k;q.height=l;q.dataProvider=c;q.reversed=n.reversed;q.logarithmic=n.logarithmic;q.gridAlpha=0;q.axisAlpha=0;p.push(q.set);h?(q.y=g,q.x=0):(q.x=f,q.y=0);var f=Infinity,g=-Infinity,t;for(t=0;t<c.length;t++){var r=c[t].axes[n.id].graphs[m.id].values,w;for(w in r)if(r.hasOwnProperty(w)&&"percents"!=w&&"total"!=w){var z=r[w];z<f&&(f=z);z>g&&(g=z)}}Infinity!=f&&(q.minimum=f);-Infinity!=g&&(q.maximum=g+.1*(g-f));f==g&&(--q.minimum,q.maximum+=1);void 0!==a.minimum&&(q.minimum=a.minimum);void 0!==a.maximum&&(q.maximum=a.maximum);q.zoom(0,c.length-1);w=a.unselectedGraph;w.id=m.id;w.bcn="scrollbar-graph-";w.rotate=h;w.chart=b;w.data=c;w.valueAxis=q;w.chart=m.chart;w.categoryAxis=a.categoryAxis;w.periodSpan=m.periodSpan;w.valueField=m.valueField;w.openField=m.openField;w.closeField=m.closeField;w.highField=m.highField;w.lowField=m.lowField;w.lineAlpha=a.graphLineAlpha;w.lineColorR=a.graphLineColor;w.fillAlphas=a.graphFillAlpha;w.fillColorsR=a.graphFillColor;w.connect=m.connect;w.hidden=m.hidden;w.width=k;w.height=l;w.pointPosition=m.pointPosition;w.stepDirection=m.stepDirection;w.periodSpan=m.periodSpan;n=a.selectedGraph;n.id=m.id;n.bcn=w.bcn+"selected-";n.rotate=h;n.chart=b;n.data=c;n.valueAxis=q;n.chart=m.chart;n.categoryAxis=e;n.periodSpan=m.periodSpan;n.valueField=m.valueField;n.openField=m.openField;n.closeField=m.closeField;n.highField=m.highField;n.lowField=m.lowField;n.lineAlpha=a.selectedGraphLineAlpha;n.lineColorR=a.selectedGraphLineColor;n.fillAlphas=a.selectedGraphFillAlpha;n.fillColorsR=a.selectedGraphFillColor;n.connect=m.connect;n.hidden=m.hidden;n.width=k;n.height=l;n.pointPosition=m.pointPosition;n.stepDirection=m.stepDirection;n.periodSpan=m.periodSpan;b=a.graphType;b||(b=m.type);w.type=b;n.type=b;c=c.length-1;w.zoom(0,c);n.zoom(0,c);n.set.click(function(){a.handleBackgroundClick()}).mouseover(function(){a.handleMouseOver()}).mouseout(function(){a.handleMouseOut()});w.set.click(function(){a.handleBackgroundClick()}).mouseover(function(){a.handleMouseOver()}).mouseout(function(){a.handleMouseOut()});p.push(w.set);p.push(n.set)}p.push(e.set);p.push(e.labelsSet);a.bg.toBack();a.invisibleBg.toFront();a.dragger.toFront();a.iconLeft.toFront();a.iconRight.toFront()}},timeZoom:function(a,b,c){this.startTime=a;this.endTime=b;this.timeDifference=b-a;this.skipEvent=!d.toBoolean(c);this.zoomScrollbar();this.dispatchScrollbarEvent()},zoom:function(a,b){this.start=a;this.end=b;this.skipEvent=!0;this.zoomScrollbar()},dispatchScrollbarEvent:function(){if(this.categoryAxis&&"ValueAxis"==this.categoryAxis.cname)d.ChartScrollbar.base.dispatchScrollbarEvent.call(this);else if(this.skipEvent)this.skipEvent=!1;else{var a=this.chart.chartData,b,c,e=this.dragger.getBBox();b=e.x;var h=e.y,f=e.width,e=e.height,g=this.chart;this.rotate?(b=h,c=e):c=f;f={type:"zoomed",target:this};f.chart=g;var k=this.categoryAxis,l=this.stepWidth,h=g.minSelectedTime,e=g.maxSelectedTime,m=!1;if(k.parseDates&&!k.equalSpacing){if(a=g.lastTime,g=g.firstTime,k=Math.round(b/l)+g,b=this.dragging?k+this.timeDifference:Math.round((b+c)/l)+g,k>b&&(k=b),0<h&&b-k<h&&(b=Math.round(k+(b-k)/2),m=Math.round(h/2),k=b-m,b+=m,m=!0),0<e&&b-k>e&&(b=Math.round(k+(b-k)/2),m=Math.round(e/2),k=b-m,b+=m,m=!0),b>a&&(b=
a),b-h<k&&(k=b-h),k<g&&(k=g),k+h>b&&(b=k+h),k!=this.startTime||b!=this.endTime)this.startTime=k,this.endTime=b,f.start=k,f.end=b,f.startDate=new Date(k),f.endDate=new Date(b),this.fire(f)}else{k.startOnAxis||(b+=l/2);c-=this.stepWidth/2;h=k.xToIndex(b);b=k.xToIndex(b+c);if(h!=this.start||this.end!=b)k.startOnAxis&&(this.resizingRight&&h==b&&b++,this.resizingLeft&&h==b&&(0<h?h--:b=1)),this.start=h,this.end=this.dragging?this.start+this.difference:b,f.start=this.start,f.end=this.end,k.parseDates&&(a[this.start]&&(f.startDate=new Date(a[this.start].time)),a[this.end]&&(f.endDate=new Date(a[this.end].time))),this.fire(f);this.percentStart=h;this.percentEnd=b}m&&this.zoomScrollbar(!0)}},zoomScrollbar:function(a){if((!(this.dragging||this.resizingLeft||this.resizingRight||this.animating)||a)&&this.dragger&&this.enabled){var b,c,d=this.chart;a=d.chartData;var h=this.categoryAxis;h.parseDates&&!h.equalSpacing?(a=h.stepWidth,c=d.firstTime,b=a*(this.startTime-c),c=a*(this.endTime-c)):(a[this.start]&&(b=a[this.start].x[h.id]),a[this.end]&&(c=a[this.end].x[h.id]),a=h.stepWidth,h.startOnAxis||(d=a/2,b-=d,c+=d));this.stepWidth=a;isNaN(b)||isNaN(c)||this.updateScrollbarSize(b,c)}},maskGraphs:function(a,b,c,d){var h=this.selectedGraph;h&&h.set.clipRect(a,b,c,d)},handleDragStart:function(){d.ChartScrollbar.base.handleDragStart.call(this);this.difference=this.end-this.start;this.timeDifference=this.endTime-this.startTime;0>this.timeDifference&&(this.timeDifference=0)},handleBackgroundClick:function(){d.ChartScrollbar.base.handleBackgroundClick.call(this);this.dragging||(this.difference=this.end-this.start,this.timeDifference=this.endTime-this.startTime,0>this.timeDifference&&(this.timeDifference=0))}})})();(function(){var d=window.AmCharts;d.AmBalloon=d.Class({construct:function(a){this.cname="AmBalloon";this.enabled=!0;this.fillColor="#FFFFFF";this.fillAlpha=.8;this.borderThickness=2;this.borderColor="#FFFFFF";this.borderAlpha=1;this.cornerRadius=0;this.maxWidth=220;this.horizontalPadding=8;this.verticalPadding=4;this.pointerWidth=6;this.pointerOrientation="V";this.color="#000000";this.adjustBorderColor=!0;this.show=this.follow=this.showBullet=!1;this.bulletSize=3;this.shadowAlpha=.4;this.shadowColor="#000000";this.fadeOutDuration=this.animationDuration=.3;this.fixedPosition=!0;this.offsetY=6;this.offsetX=1;this.textAlign="center";this.disableMouseEvents=!0;this.deltaSignX=this.deltaSignY=1;d.isModern||(this.offsetY*=1.5);this.sdy=this.sdx=0;d.applyTheme(this,a,this.cname)},draw:function(){var a=this.pointToX,b=this.pointToY;d.isModern||(this.drop=!1);var c=this.chart;d.VML&&(this.fadeOutDuration=0);this.xAnim&&c.stopAnim(this.xAnim);this.yAnim&&c.stopAnim(this.yAnim);this.sdy=this.sdx=0;if(!isNaN(a)){var e=this.follow,h=c.container,f=this.set;d.remove(f);this.removeDiv();f=h.set();f.node.style.pointerEvents="none";this.set=f;this.mainSet?(this.mainSet.push(this.set),this.sdx=this.mainSet.x,this.sdy=this.mainSet.y):c.balloonsSet.push(f);if(this.show){var g=this.l,k=this.t,l=this.r,m=this.b,p=this.balloonColor,q=this.fillColor,n=this.borderColor,t=q;void 0!=p&&(this.adjustBorderColor?t=n=p:q=p);var r=this.horizontalPadding,w=this.verticalPadding,z=this.pointerWidth,x=this.pointerOrientation,u=this.cornerRadius,A=c.fontFamily,y=this.fontSize;void 0==y&&(y=c.fontSize);var p=document.createElement("div"),B=c.classNamePrefix;p.className=B+"-balloon-div";this.className&&(p.className=p.className+" "+B+"-balloon-div-"+this.className);B=p.style;this.disableMouseEvents&&(B.pointerEvents="none");B.position="absolute";var D=this.minWidth,C=document.createElement("div");p.appendChild(C);var I=C.style;isNaN(D)||(I.minWidth=D-2*r+"px");I.textAlign=this.textAlign;I.maxWidth=this.maxWidth+"px";I.fontSize=y+"px";I.color=this.color;I.fontFamily=A;C.innerHTML=this.text;c.chartDiv.appendChild(p);this.textDiv=p;var I=p.offsetWidth,H=p.offsetHeight;p.clientHeight&&(I=p.clientWidth,H=p.clientHeight);A=H+2*w;C=I+2*r;!isNaN(D)&&C<D&&(C=D);window.opera&&(A+=2);var Q=!1,y=this.offsetY;c.handDrawn&&(y+=c.handDrawScatter+2);"H"!=x?(D=a-C/2,b<k+A+10&&"down"!=x?(Q=!0,e&&(b+=y),y=b+z,this.deltaSignY=-1):(e&&(b-=y),y=b-A-z,this.deltaSignY=1)):(2*z>A&&(z=A/2),y=b-A/2,a<g+(l-g)/2?(D=a+z,this.deltaSignX=-1):(D=a-C-z,this.deltaSignX=
1));y+A>=m&&(y=m-A);y<k&&(y=k);D<g&&(D=g);D+C>l&&(D=l-C);var k=y+w,m=D+r,M=this.shadowAlpha,P=this.shadowColor,r=this.borderThickness,ia=this.bulletSize,J,w=this.fillAlpha,aa=this.borderAlpha;this.showBullet&&(J=d.circle(h,ia,t,w),f.push(J));this.drop?(g=C/1.6,l=0,"V"==x&&(x="down"),"H"==x&&(x="left"),"down"==x&&(D=a+1,y=b-g-g/3),"up"==x&&(l=180,D=a+1,y=b+g+g/3),"left"==x&&(l=270,D=a+g+g/3+2,y=b),"right"==x&&(l=90,D=a-g-g/3+2,y=b),k=y-H/2+1,m=D-I/2-1,q=d.drop(h,g,l,q,w,r,n,aa)):0<u||0===z?(0<M&&(a=d.rect(h,C,A,q,0,r+1,P,M,u),d.isModern?a.translate(1,1):a.translate(4,4),f.push(a)),q=d.rect(h,C,A,q,w,r,n,aa,u)):(t=[],u=[],"H"!=x?(g=a-D,g>C-z&&(g=C-z),g<z&&(g=z),t=[0,g-z,a-D,g+z,C,C,0,0],u=Q?[0,0,b-y,0,0,A,A,0]:[A,A,b-y,A,A,0,0,A]):(x=b-y,x>A-z&&(x=A-z),x<z&&(x=z),u=[0,x-z,b-y,x+z,A,A,0,0],t=a<g+(l-g)/2?[0,0,D<a?0:a-D,0,0,C,C,0]:[C,C,D+C>a?C:a-D,C,C,0,0,C]),0<M&&(a=d.polygon(h,t,u,q,0,r,P,M),a.translate(1,1),f.push(a)),q=d.polygon(h,t,u,q,w,r,n,aa));this.bg=q;f.push(q);q.toFront();d.setCN(c,q,
"balloon-bg");this.className&&d.setCN(c,q,"balloon-bg-"+this.className);h=1*this.deltaSignX;m+=this.sdx;k+=this.sdy;B.left=m+"px";B.top=k+"px";f.translate(D-h,y,1,!0);q=q.getBBox();this.bottom=y+A+1;this.yPos=q.y+y;J&&J.translate(this.pointToX-D+h,b-y);b=this.animationDuration;0<this.animationDuration&&!e&&!isNaN(this.prevX)&&(f.translate(this.prevX,this.prevY,NaN,!0),f.animate({translate:D-h+","+y},b,"easeOutSine"),p&&(B.left=this.prevTX+"px",B.top=this.prevTY+"px",this.xAnim=c.animate({node:p},"left",this.prevTX,m,b,"easeOutSine","px"),this.yAnim=c.animate({node:p},"top",this.prevTY,k,b,"easeOutSine","px")));this.prevX=D-h;this.prevY=y;this.prevTX=m;this.prevTY=k}}},fixPrevious:function(){this.rPrevX=this.prevX;this.rPrevY=this.prevY;this.rPrevTX=this.prevTX;this.rPrevTY=this.prevTY},restorePrevious:function(){this.prevX=this.rPrevX;this.prevY=this.rPrevY;this.prevTX=this.rPrevTX;this.prevTY=this.rPrevTY},followMouse:function(){if(this.follow&&this.show){var a=this.chart.mouseX-this.offsetX*this.deltaSignX-this.sdx,b=this.chart.mouseY-this.sdy;this.pointToX=a;this.pointToY=b;if(a!=this.previousX||b!=this.previousY)if(this.previousX=a,this.previousY=b,0===this.cornerRadius)this.draw();else{var c=this.set;if(c){var d=c.getBBox(),a=a-d.width/2,h=b-d.height-10;a<this.l&&(a=this.l);a>this.r-d.width&&(a=this.r-d.width);h<this.t&&(h=b+10);c.translate(a,h);b=this.textDiv.style;b.left=a+this.horizontalPadding+"px";b.top=h+this.verticalPadding+"px"}}}},changeColor:function(a){this.balloonColor=a},setBounds:function(a,b,c,d){this.l=a;this.t=b;this.r=c;this.b=d;this.destroyTO&&clearTimeout(this.destroyTO)},showBalloon:function(a){if(this.text!=a||this.positionChanged)this.text=a,this.isHiding=!1,this.show=!0,this.destroyTO&&clearTimeout(this.destroyTO),a=this.chart,this.fadeAnim1&&a.stopAnim(this.fadeAnim1),this.fadeAnim2&&a.stopAnim(this.fadeAnim2),this.draw(),this.positionChanged=!1},hide:function(a){var b=this;b.text=void 0;isNaN(a)&&(a=b.fadeOutDuration);var c=b.chart;if(0<a&&!b.isHiding){b.isHiding=!0;b.destroyTO&&clearTimeout(b.destroyTO);b.destroyTO=setTimeout(function(){b.destroy.call(b)},1E3*a);b.follow=!1;b.show=!1;var d=b.set;d&&(d.setAttr("opacity",b.fillAlpha),b.fadeAnim1=d.animate({opacity:0},a,"easeInSine"));b.textDiv&&(b.fadeAnim2=c.animate({node:b.textDiv},"opacity",1,0,a,"easeInSine",""))}else b.show=!1,b.follow=!1,b.destroy()},setPosition:function(a,b){if(a!=this.pointToX||b!=this.pointToY)this.previousX=this.pointToX,this.previousY=this.pointToY,this.pointToX=a,this.pointToY=b,this.positionChanged=!0},followCursor:function(a){var b=this;b.follow=a;clearInterval(b.interval);var c=b.chart.mouseX-b.sdx,d=b.chart.mouseY-b.sdy;!isNaN(c)&&a&&(b.pointToX=c-b.offsetX*b.deltaSignX,b.pointToY=d,b.followMouse(),b.interval=setInterval(function(){b.followMouse.call(b)},40))},removeDiv:function(){if(this.textDiv){var a=this.textDiv.parentNode;a&&a.removeChild(this.textDiv)}},destroy:function(){clearInterval(this.interval);d.remove(this.set);this.removeDiv();this.set=null}})})();(function(){var d=window.AmCharts;d.AmCoordinateChart=d.Class({inherits:d.AmChart,construct:function(a){d.AmCoordinateChart.base.construct.call(this,a);this.theme=a;this.createEvents("rollOverGraphItem","rollOutGraphItem","clickGraphItem","doubleClickGraphItem","rightClickGraphItem","clickGraph","rollOverGraph","rollOutGraph");this.startAlpha=1;this.startDuration=0;this.startEffect="elastic";this.sequencedAnimation=!0;this.colors="#FF6600 #FCD202 #B0DE09 #0D8ECF #2A0CD0 #CD0D74 #CC0000 #00CC00 #0000CC #DDDDDD #999999 #333333 #990000".split(" ");this.balloonDateFormat="MMM DD, YYYY";this.valueAxes=[];this.graphs=[];this.guides=[];this.gridAboveGraphs=!1;d.applyTheme(this,a,"AmCoordinateChart")},initChart:function(){d.AmCoordinateChart.base.initChart.call(this);this.drawGraphs=!0;var a=this.categoryAxis;a&&(this.categoryAxis=d.processObject(a,d.CategoryAxis,this.theme));this.processValueAxes();this.createValueAxes();this.processGraphs();this.processGuides();d.VML&&(this.startAlpha=1);this.setLegendData(this.graphs);this.gridAboveGraphs&&(this.gridSet.toFront(),this.bulletSet.toFront(),this.balloonsSet.toFront())},createValueAxes:function(){if(0===this.valueAxes.length){var a=new d.ValueAxis;this.addValueAxis(a)}},parseData:function(){this.processValueAxes();this.processGraphs()},parseSerialData:function(a){this.chartData=[];if(a)if(0<this.processTimeout){1>this.processCount&&(this.processCount=1);var b=a.length/this.processCount;this.parseCount=Math.ceil(b)-1;for(var c=0;c<b;c++)this.delayParseSerialData(a,c)}else this.parseCount=0,this.parsePartSerialData(a,0,a.length,0);else this.onDataUpdated()},delayParseSerialData:function(a,b){var c=this,d=c.processCount;setTimeout(function(){c.parsePartSerialData.call(c,a,b*d,(b+1)*d,b)},c.processTimeout)},parsePartSerialData:function(a,b,c,e){c>a.length&&(c=a.length);var h=this.graphs,f={},g=this.seriesIdField;g||(g=this.categoryField);var k=!1,l,m=this.categoryAxis,p,q,n;m&&(k=m.parseDates,p=m.forceShowField,n=m.classNameField,q=m.labelColorField,l=m.categoryFunction);var t,r,w={},z;k&&(t=d.extractPeriod(m.minPeriod),r=t.period,t=t.count,z=d.getPeriodDuration(r,t));var x={};this.lookupTable=x;var u,A=this.dataDateFormat,y={};for(u=b;u<c;u++){var B={},D=a[u];b=D[this.categoryField];B.dataContext=D;B.category=l?l(b,D,m):String(b);p&&(B.forceShow=D[p]);n&&(B.className=D[n]);q&&(B.labelColor=D[q]);x[D[g]]=B;if(k&&(m.categoryFunction?b=m.categoryFunction(b,D,m):(!A||b instanceof Date||(b=b.toString()+" |"),b=d.getDate(b,A,m.minPeriod)),b=d.resetDateToMin(b,r,t,m.firstDayOfWeek),B.category=b,B.time=b.getTime(),isNaN(B.time)))continue;var C=this.valueAxes;B.axes={};B.x={};var I;for(I=0;I<C.length;I++){var H=C[I].id;B.axes[H]={};B.axes[H].graphs={};var Q;for(Q=0;Q<h.length;Q++){b=h[Q];var M=b.id,P=1.1;isNaN(b.gapPeriod)||(P=b.gapPeriod);var ia=b.periodValue;if(b.valueAxis.id==H){B.axes[H].graphs[M]={};var J={};J.index=u;var aa=D;b.dataProvider&&(aa=f);J.values=this.processValues(aa,b,ia);if(!b.connect||b.forceGap&&!isNaN(b.gapPeriod))if(y&&y[M]&&0<P&&B.time-w[M]>=z*P&&(y[M].gap=!0),b.forceGap){var P=0,ma;for(ma in J.values)P++;0<P&&(w[M]=B.time,y[M]=J)}else w[M]=B.time,y[M]=J;this.processFields(b,J,aa);J.category=B.category;J.serialDataItem=B;J.graph=b;B.axes[H].graphs[M]=J}}}this.chartData[u]=B}if(this.parseCount==e){for(a=0;a<h.length;a++)b=h[a],b.dataProvider&&this.parseGraphData(b);this.dataChanged=!1;this.dispatchDataUpdated=!0;this.onDataUpdated()}},processValues:function(a,b,c){var e={},h,f=!1;"candlestick"!=b.type&&"ohlc"!=b.type||""===c||(f=!0);for(var g="value error open close low high".split(" "),k=0;k<g.length;k++){var l=g[k];"value"!=l&&"error"!=l&&f&&(c=l.charAt(0).toUpperCase()+l.slice(1));var m=a[b[l+"Field"]+c];null!==m&&(h=Number(m),isNaN(h)||(e[l]=h),"date"==b.valueAxis.type&&void 0!==m&&(h=d.getDate(m,b.chart.dataDateFormat),e[l]=h.getTime()))}return e},parseGraphData:function(a){var b=a.dataProvider,c=a.seriesIdField;c||(c=this.seriesIdField);c||(c=this.categoryField);var d;for(d=0;d<b.length;d++){var h=b[d],f=this.lookupTable[String(h[c])],g=a.valueAxis.id;f&&(g=f.axes[g].graphs[a.id],g.serialDataItem=f,g.values=this.processValues(h,a,a.periodValue),this.processFields(a,g,h))}},addValueAxis:function(a){a.chart=this;this.valueAxes.push(a);this.validateData()},removeValueAxesAndGraphs:function(){var a=this.valueAxes,b;for(b=a.length-1;-1<b;b--)this.removeValueAxis(a[b])},removeValueAxis:function(a){var b=this.graphs,c;for(c=b.length-1;0<=c;c--){var d=b[c];d&&d.valueAxis==a&&this.removeGraph(d)}b=this.valueAxes;for(c=b.length-1;0<=c;c--)b[c]==a&&b.splice(c,1);this.validateData()},addGraph:function(a){this.graphs.push(a);this.chooseGraphColor(a,this.graphs.length-1);this.validateData()},removeGraph:function(a){var b=this.graphs,c;for(c=b.length-1;0<=c;c--)b[c]==a&&(b.splice(c,1),a.destroy());this.validateData()},handleValueAxisZoom:function(){},processValueAxes:function(){var a=this.valueAxes,b;for(b=0;b<a.length;b++){var c=a[b],c=d.processObject(c,d.ValueAxis,this.theme);a[b]=c;c.chart=this;c.init();this.listenTo(c,"axisIntZoomed",this.handleValueAxisZoom);c.id||(c.id="valueAxisAuto"+b+"_"+(new Date).getTime());void 0===c.usePrefixes&&(c.usePrefixes=this.usePrefixes)}},processGuides:function(){var a=this.guides,b=this.categoryAxis;if(a)for(var c=0;c<a.length;c++){var e=a[c];(void 0!==e.category||void 0!==e.date)&&b&&b.addGuide(e);e.id||(e.id="guideAuto"+c+"_"+(new Date).getTime());var h=e.valueAxis;h?(d.isString(h)&&(h=this.getValueAxisById(h)),h?h.addGuide(e):this.valueAxes[0].addGuide(e)):isNaN(e.value)||this.valueAxes[0].addGuide(e)}},processGraphs:function(){var a=this.graphs,b;this.graphsById={};for(b=0;b<a.length;b++){var c=a[b],c=d.processObject(c,d.AmGraph,this.theme);a[b]=c;this.chooseGraphColor(c,b);c.chart=this;c.init();d.isString(c.valueAxis)&&(c.valueAxis=this.getValueAxisById(c.valueAxis));c.valueAxis||(c.valueAxis=this.valueAxes[0]);c.id||(c.id="graphAuto"+b+"_"+(new Date).getTime());this.graphsById[c.id]=c}},formatString:function(a,b,c){var e=b.graph,h=e.valueAxis;h.duration&&b.values.value&&(h=d.formatDuration(b.values.value,h.duration,"",h.durationUnits,h.maxInterval,h.numberFormatter),a=a.split("[[value]]").join(h));a=d.massReplace(a,{"[[title]]":e.title,"[[description]]":b.description});a=c?d.fixNewLines(a):d.fixBrakes(a);return a=d.cleanFromEmpty(a)},getBalloonColor:function(a,b,c){var e=a.lineColor,h=a.balloonColor;c&&(h=e);c=a.fillColorsR;"object"==typeof c?e=c[0]:void 0!==c&&(e=c);b.isNegative&&(c=a.negativeLineColor,a=a.negativeFillColors,"object"==typeof a?c=a[0]:void 0!==a&&(c=a),void 0!==c&&(e=c));void 0!==b.color&&(e=b.color);void 0!==b.lineColor&&(e=b.lineColor);b=b.fillColors;void 0!==b&&(e=b,d.ifArray(b)&&(e=b[0]));void 0===h&&(h=e);return h},getGraphById:function(a){return d.getObjById(this.graphs,a)},getValueAxisById:function(a){return d.getObjById(this.valueAxes,a)},processFields:function(a,b,c){if(a.itemColors){var e=a.itemColors,h=b.index;b.color=h<e.length?e[h]:d.randomColor()}e="lineColor color alpha fillColors description bullet customBullet bulletSize bulletConfig url labelColor dashLength pattern gap className columnIndex".split(" ");for(h=0;h<e.length;h++){var f=e[h],g=a[f+"Field"];g&&(g=c[g],d.isDefined(g)&&(b[f]=g))}b.dataContext=c},chooseGraphColor:function(a,b){if(a.lineColor)a.lineColorR=a.lineColor;else{var c;c=this.colors.length>b?this.colors[b]:a.lineColorR?a.lineColorR:d.randomColor();a.lineColorR=c}a.fillColorsR=a.fillColors?a.fillColors:a.lineColorR;a.bulletBorderColorR=a.bulletBorderColor?a.bulletBorderColor:a.useLineColorForBulletBorder?a.lineColorR:a.bulletColor;a.bulletColorR=a.bulletColor?a.bulletColor:a.lineColorR;if(c=this.patterns)a.pattern=c[b]},handleLegendEvent:function(a){var b=a.type;if(a=a.dataItem){var c=a.hidden,d=a.showBalloon;switch(b){case"clickMarker":this.textClickEnabled&&(d?this.hideGraphsBalloon(a):this.showGraphsBalloon(a));break;case"clickLabel":d?this.hideGraphsBalloon(a):this.showGraphsBalloon(a);break;case"rollOverItem":c||this.highlightGraph(a);break;case"rollOutItem":c||this.unhighlightGraph();break;case"hideItem":this.hideGraph(a);break;case"showItem":this.showGraph(a)}}},highlightGraph:function(a){var b=this.graphs;if(b){var c,d=.2;this.legend&&(d=this.legend.rollOverGraphAlpha);if(1!=d)for(c=0;c<b.length;c++){var h=b[c];h!=a&&h.changeOpacity(d)}}},unhighlightGraph:function(){var a;this.legend&&(a=this.legend.rollOverGraphAlpha);if(1!=a){a=this.graphs;var b;for(b=0;b<a.length;b++)a[b].changeOpacity(1)}},showGraph:function(a){a.switchable&&(a.hidden=!1,this.dataChanged=!0,"xy"!=this.type&&(this.marginsUpdated=!1),this.chartCreated&&this.initChart())},hideGraph:function(a){a.switchable&&(this.dataChanged=!0,"xy"!=this.type&&(this.marginsUpdated=!1),a.hidden=!0,this.chartCreated&&this.initChart())},hideGraphsBalloon:function(a){a.showBalloon=!1;this.updateLegend()},showGraphsBalloon:function(a){a.showBalloon=!0;this.updateLegend()},updateLegend:function(){this.legend&&this.legend.invalidateSize()},resetAnimation:function(){var a=this.graphs;if(a){var b;for(b=0;b<a.length;b++)a[b].animationPlayed=!1}},animateAgain:function(){this.resetAnimation();this.validateNow()}})})();(function(){var d=window.AmCharts;d.TrendLine=d.Class({construct:function(a){this.cname="TrendLine";this.createEvents("click","rollOver","rollOut");this.isProtected=!1;this.dashLength=0;this.lineColor="#00CC00";this.lineThickness=this.lineAlpha=1;d.applyTheme(this,a,this.cname)},draw:function(){var a=this;a.destroy();var b=a.chart,c=b.container,e,h,f,g,k=a.categoryAxis,l=a.initialDate,m=a.initialCategory,p=a.finalDate,q=a.finalCategory,n=a.valueAxis,t=a.valueAxisX,r=a.initialXValue,w=a.finalXValue,z=a.initialValue,x=a.finalValue,u=n.recalculateToPercents,A=b.dataDateFormat;k&&(l&&(l=d.getDate(l,A,"fff"),a.initialDate=l,e=k.dateToCoordinate(l)),m&&(e=k.categoryToCoordinate(m)),p&&(p=d.getDate(p,A,"fff"),a.finalDate=p,h=k.dateToCoordinate(p)),q&&(h=k.categoryToCoordinate(q)));t&&!u&&(isNaN(r)||(e=t.getCoordinate(r)),isNaN(w)||(h=t.getCoordinate(w)));n&&!u&&(isNaN(z)||(f=n.getCoordinate(z)),isNaN(x)||(g=n.getCoordinate(x)));if(!(isNaN(e)||isNaN(h)||isNaN(f)||isNaN(f))){b.rotate?(k=[f,g],g=[e,h]):(k=[e,h],g=[f,g]);l=a.lineColor;f=d.line(c,k,g,l,a.lineAlpha,a.lineThickness,a.dashLength);e=k;h=g;q=k[1]-k[0];n=g[1]-g[0];0===q&&(q=.01);0===n&&(n=.01);m=q/Math.abs(q);p=n/Math.abs(n);n=90*Math.PI/180-Math.asin(q/(q*n/Math.abs(q*n)*Math.sqrt(Math.pow(q,2)+Math.pow(n,2))));q=Math.abs(5*Math.cos(n));n=Math.abs(5*Math.sin(n));e.push(k[1]-m*n,k[0]-m*n);h.push(g[1]+p*q,g[0]+p*q);g=d.polygon(c,e,h,l,.005,0);c=c.set([g,f]);c.translate(b.marginLeftReal,b.marginTopReal);b.trendLinesSet.push(c);d.setCN(b,f,"trend-line");d.setCN(b,f,"trend-line-"+a.id);a.line=f;a.set=c;if(f=a.initialImage)f=d.processObject(f,d.Image,a.theme),f.chart=b,f.draw(),f.translate(e[0]+f.offsetX,h[0]+f.offsetY),c.push(f.set);if(f=a.finalImage)f=d.processObject(f,d.Image,a.theme),f.chart=b,f.draw(),f.translate(e[1]+f.offsetX,h[1]+f.offsetY),c.push(f.set);g.mouseup(function(){a.handleLineClick()}).mouseover(function(){a.handleLineOver()}).mouseout(function(){a.handleLineOut()});g.touchend&&g.touchend(function(){a.handleLineClick()});c.clipRect(0,0,b.plotAreaWidth,b.plotAreaHeight)}},handleLineClick:function(){this.fire({type:"click",trendLine:this,chart:this.chart})},handleLineOver:function(){var a=this.rollOverColor;void 0!==a&&this.line.attr({stroke:a});this.balloonText&&(clearTimeout(this.chart.hoverInt),a=this.line.getBBox(),this.chart.showBalloon(this.balloonText,this.lineColor,!0,this.x+a.x+a.width/2,this.y+a.y+a.height/2));this.fire({type:"rollOver",trendLine:this,chart:this.chart})},handleLineOut:function(){this.line.attr({stroke:this.lineColor});this.balloonText&&this.chart.hideBalloon();this.fire({type:"rollOut",trendLine:this,chart:this.chart})},destroy:function(){d.remove(this.set)}})})();(function(){var d=window.AmCharts;d.Image=d.Class({construct:function(a){this.cname="Image";this.height=this.width=20;this.rotation=this.offsetY=this.offsetX=0;this.balloonColor=this.color="#000000";this.opacity=1;d.applyTheme(this,a,this.cname)},draw:function(){var a=this;a.set&&a.set.remove();var b=a.chart.container;a.set=b.set();var c,d;a.url?(c=b.image(a.url,0,0,a.width,a.height),d=1):a.svgPath&&(c=b.path(a.svgPath),c.setAttr("fill",a.color),c.setAttr("stroke",a.outlineColor),b=c.getBBox(),d=Math.min(a.width/b.width,a.height/b.height));c&&(c.setAttr("opacity",a.opacity),a.set.rotate(a.rotation),c.translate(-a.width/2,-a.height/2,d),a.balloonText&&c.mouseover(function(){a.chart.showBalloon(a.balloonText,a.balloonColor,!0)}).mouseout(function(){a.chart.hideBalloon()}).touchend(function(){a.chart.hideBalloon()}).touchstart(function(){a.chart.showBalloon(a.balloonText,a.balloonColor,!0)}),a.set.push(c))},translate:function(a,b){this.set&&this.set.translate(a,b)}})})();(function(){var d=window.AmCharts;d.circle=function(a,b,c,e,h,f,g,k,l){0>=b&&(b=.001);if(void 0==h||0===h)h=.01;void 0===f&&(f="#000000");void 0===g&&(g=0);e={fill:c,stroke:f,"fill-opacity":e,"stroke-width":h,"stroke-opacity":g};a=isNaN(l)?a.circle(0,0,b).attr(e):a.ellipse(0,0,b,l).attr(e);k&&a.gradient("radialGradient",[c,d.adjustLuminosity(c,-.6)]);return a};d.text=function(a,b,c,e,h,f,g,k){f||(f="middle");"right"==f&&(f="end");"left"==f&&(f="start");isNaN(k)&&(k=1);void 0!==b&&(b=String(b),d.isIE&&!d.isModern&&(b=b.replace("&amp;","&"),b=b.replace("&","&amp;")));c={fill:c,"font-family":e,"font-size":h+"px",opacity:k};!0===g&&(c["font-weight"]="bold");c["text-anchor"]=f;return a.text(b,c)};d.polygon=function(a,b,c,e,h,f,g,k,l,m,p){isNaN(f)&&(f=.01);isNaN(k)&&(k=h);var q=e,n=!1;"object"==typeof q&&1<q.length&&(n=!0,q=q[0]);void 0===g&&(g=q);h={fill:q,stroke:g,"fill-opacity":h,"stroke-width":f,"stroke-opacity":k};void 0!==p&&0<p&&(h["stroke-dasharray"]=p);p=d.dx;f=d.dy;a.handDrawn&&(c=d.makeHD(b,c,a.handDrawScatter),b=c[0],c=c[1]);g=Math.round;m&&(b[t]=d.roundTo(b[t],5),c[t]=d.roundTo(c[t],5),g=Number);k="M"+(g(b[0])+p)+","+(g(c[0])+f);for(var t=1;t<b.length;t++)m&&(b[t]=d.roundTo(b[t],5),c[t]=d.roundTo(c[t],5)),k+=" L"+(g(b[t])+p)+","+(g(c[t])+f);a=a.path(k+" Z").attr(h);n&&a.gradient("linearGradient",e,l);return a};d.rect=function(a,b,c,e,h,f,g,k,l,m,p){if(isNaN(b)||isNaN(c))return a.set();isNaN(f)&&(f=0);void 0===l&&(l=0);void 0===m&&(m=270);isNaN(h)&&(h=0);var q=e,n=!1;"object"==typeof q&&(q=q[0],n=!0);void 0===g&&(g=q);void 0===k&&(k=h);b=Math.round(b);c=Math.round(c);var t=0,r=0;0>b&&(b=Math.abs(b),t=-b);0>c&&(c=Math.abs(c),r=-c);t+=d.dx;r+=d.dy;h={fill:q,stroke:g,"fill-opacity":h,"stroke-opacity":k};void 0!==p&&0<p&&(h["stroke-dasharray"]=p);a=a.rect(t,r,b,c,l,f).attr(h);n&&a.gradient("linearGradient",e,m);return a};d.bullet=function(a,b,c,e,h,f,g,k,l,m,p,q,n){var t;"circle"==b&&(b="round");switch(b){case"round":t=d.circle(a,c/2,e,h,f,g,k);break;case"square":t=d.polygon(a,[-c/
2,c/2,c/2,-c/2],[c/2,c/2,-c/2,-c/2],e,h,f,g,k,m-180,void 0,n);break;case"rectangle":t=d.polygon(a,[-c,c,c,-c],[c/2,c/2,-c/2,-c/2],e,h,f,g,k,m-180,void 0,n);break;case"diamond":t=d.polygon(a,[-c/2,0,c/2,0],[0,-c/2,0,c/2],e,h,f,g,k);break;case"triangleUp":t=d.triangle(a,c,0,e,h,f,g,k);break;case"triangleDown":t=d.triangle(a,c,180,e,h,f,g,k);break;case"triangleLeft":t=d.triangle(a,c,270,e,h,f,g,k);break;case"triangleRight":t=d.triangle(a,c,90,e,h,f,g,k);break;case"bubble":t=d.circle(a,c/2,e,h,f,g,k,!0);break;case"line":t=d.line(a,[-c/2,c/2],[0,0],e,h,f,g,k);break;case"yError":t=a.set();t.push(d.line(a,[0,0],[-c/2,c/2],e,h,f));t.push(d.line(a,[-l,l],[-c/2,-c/2],e,h,f));t.push(d.line(a,[-l,l],[c/2,c/2],e,h,f));break;case"xError":t=a.set(),t.push(d.line(a,[-c/2,c/2],[0,0],e,h,f)),t.push(d.line(a,[-c/2,-c/2],[-l,l],e,h,f)),t.push(d.line(a,[c/2,c/2],[-l,l],e,h,f))}t&&t.pattern(p,NaN,q);return t};d.triangle=function(a,b,c,d,h,f,g,k){if(void 0===f||0===f)f=1;void 0===g&&(g="#000");void 0===k&&(k=0);d={fill:d,stroke:g,"fill-opacity":h,"stroke-width":f,"stroke-opacity":k};b/=2;var l;0===c&&(l=" M"+-b+","+b+" L0,"+-b+" L"+b+","+b+" Z");180==c&&(l=" M"+-b+","+-b+" L0,"+b+" L"+b+","+-b+" Z");90==c&&(l=" M"+-b+","+-b+" L"+b+",0 L"+-b+","+b+" Z");270==c&&(l=" M"+-b+",0 L"+b+","+b+" L"+b+","+-b+" Z");return a.path(l).attr(d)};d.line=function(a,b,c,e,h,f,g,k,l,m,p){if(a.handDrawn&&!p)return d.handDrawnLine(a,b,c,e,h,f,g,k,l,m,p);f={fill:"none","stroke-width":f};void 0!==g&&0<g&&(f["stroke-dasharray"]=g);isNaN(h)||(f["stroke-opacity"]=h);e&&(f.stroke=e);e=Math.round;m&&(e=Number,b[0]=d.roundTo(b[0],5),c[0]=d.roundTo(c[0],5));m=d.dx;h=d.dy;g="M"+(e(b[0])+m)+","+(e(c[0])+h);for(k=1;k<b.length;k++)b[k]=d.roundTo(b[k],5),c[k]=d.roundTo(c[k],5),g+=" L"+(e(b[k])+m)+","+(e(c[k])+h);if(d.VML)return a.path(g,void 0,!0).attr(f);l&&(g+=" M0,0 L0,0");return a.path(g).attr(f)};d.makeHD=function(a,b,c){for(var d=[],h=[],f=1;f<a.length;f++)for(var g=Number(a[f-1]),k=Number(b[f-1]),l=Number(a[f]),m=Number(b[f]),p=Math.round(Math.sqrt(Math.pow(l-g,2)+Math.pow(m-k,2))/50)+1,l=(l-g)/p,m=(m-k)/p,q=0;q<=p;q++){var n=k+q*m+Math.random()*c;d.push(g+q*l+Math.random()*c);h.push(n)}return[d,h]};d.handDrawnLine=function(a,b,c,e,h,f,g,k,l,m){var p,q=a.set();for(p=1;p<b.length;p++)for(var n=[b[p-1],b[p]],t=[c[p-1],c[p]],t=d.makeHD(n,t,a.handDrawScatter),n=t[0],t=t[1],r=1;r<n.length;r++)q.push(d.line(a,[n[r-1],n[r]],[t[r-1],t[r]],e,h,f+Math.random()*a.handDrawThickness-a.handDrawThickness/2,g,k,l,m,!0));return q};d.doNothing=
function(a){return a};d.drop=function(a,b,c,d,h,f,g,k){var l=1/180*Math.PI,m=c-20,p=Math.sin(m*l)*b,q=Math.cos(m*l)*b,n=Math.sin((m+40)*l)*b,t=Math.cos((m+40)*l)*b,r=.8*b,w=-b/3,z=b/3;0===c&&(w=-w,z=0);180==c&&(z=0);90==c&&(w=0);270==c&&(w=0,z=-z);c={fill:d,stroke:g,"stroke-width":f,"stroke-opacity":k,"fill-opacity":h};b="M"+p+","+q+" A"+b+","+b+",0,1,1,"+n+","+t+(" A"+r+","+r+",0,0,0,"+(Math.sin((m+20)*l)*b+z)+","+(Math.cos((m+20)*l)*b+w));b+=" A"+r+","+r+",0,0,0,"+p+","+q;return a.path(b,void 0,void 0,"1000,1000").attr(c)};d.wedge=function(a,b,c,e,h,f,g,k,l,m,p,q,n,t){var r=Math.round;f=r(f);g=r(g);k=r(k);var w=r(g/f*k),z=d.VML,x=359.5+f/100;359.94<x&&(x=359.94);h>=x&&(h=x);var u=1/180*Math.PI,x=b+Math.sin(e*u)*k,A=c-Math.cos(e*u)*w,y=b+Math.sin(e*u)*f,B=c-Math.cos(e*u)*g,D=b+Math.sin((e+h)*u)*f,C=c-Math.cos((e+h)*u)*g,I=b+Math.sin((e+h)*u)*k,u=c-Math.cos((e+h)*u)*w,H={fill:d.adjustLuminosity(m.fill,-.2),"stroke-opacity":0,"fill-opacity":m["fill-opacity"]},Q=0;180<Math.abs(h)&&(Q=1);e=a.set();var M;z&&(x=r(10*x),y=r(10*y),D=r(10*D),I=r(10*I),A=r(10*A),B=r(10*B),C=r(10*C),u=r(10*u),b=r(10*b),l=r(10*l),c=r(10*c),f*=10,g*=10,k*=10,w*=10,1>Math.abs(h)&&1>=Math.abs(D-y)&&1>=Math.abs(C-B)&&(M=!0));h="";var P;q&&(H["fill-opacity"]=0,H["stroke-opacity"]=m["stroke-opacity"]/2,H.stroke=m.stroke);if(0<l){P=" M"+x+","+(A+l)+" L"+y+","+(B+l);z?(M||(P+=" A"+(b-f)+","+(l+c-g)+","+(b+f)+","+(l+c+g)+","+y+","+(B+l)+","+D+","+(C+l)),P+=" L"+I+","+(u+l),0<k&&(M||(P+=" B"+(b-k)+","+(l+c-w)+","+(b+k)+","+
(l+c+w)+","+I+","+(l+u)+","+x+","+(l+A)))):(P+=" A"+f+","+g+",0,"+Q+",1,"+D+","+(C+l)+" L"+I+","+(u+l),0<k&&(P+=" A"+k+","+w+",0,"+Q+",0,"+x+","+(A+l)));P+=" Z";var ia=l;z&&(ia/=10);for(var J=0;J<ia;J+=10){var aa=a.path(P,void 0,void 0,"1000,1000").attr(H);e.push(aa);aa.translate(0,-J)}P=a.path(" M"+x+","+A+" L"+x+","+(A+l)+" L"+y+","+(B+l)+" L"+y+","+B+" L"+x+","+A+" Z",void 0,void 0,"1000,1000").attr(H);l=a.path(" M"+D+","+C+" L"+D+","+(C+l)+" L"+I+","+(u+l)+" L"+I+","+u+" L"+D+","+C+" Z",void 0,void 0,"1000,1000").attr(H);e.push(P);e.push(l)}z?(M||(h=" A"+r(b-f)+","+r(c-g)+","+r(b+f)+","+r(c+g)+","+r(y)+","+r(B)+","+r(D)+","+r(C)),g=" M"+r(x)+","+r(A)+" L"+r(y)+","+r(B)+h+" L"+r(I)+","+r(u)):g=" M"+x+","+A+" L"+y+","+B+(" A"+f+","+g+",0,"+Q+",1,"+D+","+C)+" L"+I+","+u;0<k&&(z?M||(g+=" B"+(b-k)+","+(c-w)+","+(b+k)+","+(c+w)+","+I+","+u+","+x+","+A):g+=" A"+k+","+w+",0,"+Q+",0,"+x+","+A);a.handDrawn&&(k=d.line(a,[x,y],[A,B],m.stroke,m.thickness*Math.random()*a.handDrawThickness,m["stroke-opacity"]),e.push(k));a=a.path(g+" Z",void 0,void 0,"1000,1000").attr(m);if(p){k=[];for(w=0;w<p.length;w++)k.push(d.adjustLuminosity(m.fill,p[w]));"radial"!=t||d.isModern||(k=[]);0<k.length&&a.gradient(t+"Gradient",k)}d.isModern&&"radial"==t&&a.grad&&(a.grad.setAttribute("gradientUnits","userSpaceOnUse"),a.grad.setAttribute("r",f),a.grad.setAttribute("cx",b),a.grad.setAttribute("cy",c));a.pattern(q,NaN,n);e.wedge=a;e.push(a);return e};d.rgb2hex=function(a){return(a=a.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))&&4===a.length?"#"+("0"+parseInt(a[1],10).toString(16)).slice(-2)+("0"+parseInt(a[2],10).toString(16)).slice(-2)+("0"+parseInt(a[3],10).toString(16)).slice(-2):""};d.adjustLuminosity=function(a,b){a&&-1!=a.indexOf("rgb")&&(a=d.rgb2hex(a));a=String(a).replace(/[^0-9a-f]/gi,"");6>a.length&&(a=String(a[0])+String(a[0])+String(a[1])+String(a[1])+String(a[2])+String(a[2]));b=b||0;var c="#",e,h;for(h=0;3>h;h++)e=parseInt(a.substr(2*h,2),16),e=Math.round(Math.min(Math.max(0,e+e*b),255)).toString(16),c+=("00"+
e).substr(e.length);return c}})();(function(){var d=window.AmCharts;d.Bezier=d.Class({construct:function(a,b,c,e,h,f,g,k,l,m,p){var q=a.chart,n=d.bezierX,t=d.bezierY;isNaN(q.bezierX)||(n=q.bezierX);isNaN(q.bezierY)||(t=q.bezierY);isNaN(n)&&(q.rotate?(n=20,t=4):(t=20,n=4));var r,w;"object"==typeof g&&1<g.length&&(w=!0,r=g,g=g[0]);"object"==typeof k&&(k=k[0]);0===k&&(g="none");f={fill:g,"fill-opacity":k,"stroke-width":f};void 0!==l&&0<l&&(f["stroke-dasharray"]=l);isNaN(h)||(f["stroke-opacity"]=h);e&&(f.stroke=e);e="M"+Math.round(b[0])+","+Math.round(c[0])+" ";h=[];for(l=0;l<b.length;l++)isNaN(b[l])||isNaN(c[l])?(e+=this.drawSegment(h,n,t),l<b.length-1&&(e+="L"+b[l+1]+","+c[l+1]+" "),h=[]):h.push({x:Number(b[l]),y:Number(c[l])});e+=this.drawSegment(h,n,t);m?e+=m:d.VML||(e+="M0,0 L0,0");this.path=a.path(e).attr(f);this.node=this.path.node;w&&this.path.gradient("linearGradient",r,p)},drawSegment:function(a,b,c){var d="";if(2<a.length)for(var h=0;h<a.length-1;h++){var f=[],g=a[h-1],k=a[h],l=a[h+1],m=a[h+2];0===h?(f.push({x:k.x,y:k.y}),f.push({x:k.x,y:k.y}),f.push({x:l.x,y:l.y}),f.push({x:m.x,y:m.y})):h>=a.length-2?(f.push({x:g.x,y:g.y}),f.push({x:k.x,y:k.y}),f.push({x:l.x,y:l.y}),f.push({x:l.x,y:l.y})):(f.push({x:g.x,y:g.y}),f.push({x:k.x,y:k.y}),f.push({x:l.x,y:l.y}),f.push({x:m.x,y:m.y}));g=[];k=Math.round;g.push({x:k(f[1].x),y:k(f[1].y)});g.push({x:k((-f[0].x+b*f[1].x+f[2].x)/b),y:k((-f[0].y+c*f[1].y+f[2].y)/c)});g.push({x:k((f[1].x+b*f[2].x-f[3].x)/b),y:k((f[1].y+c*f[2].y-f[3].y)/c)});g.push({x:k(f[2].x),y:k(f[2].y)});d+="C"+
g[1].x+","+g[1].y+","+g[2].x+","+g[2].y+","+g[3].x+","+g[3].y+" "}else 1<a.length&&(d+="L"+a[1].x+","+a[1].y);return d}})})();(function(){var d=window.AmCharts;d.AmDraw=d.Class({construct:function(a,b,c,e){d.SVG_NS="http://www.w3.org/2000/svg";d.SVG_XLINK="http://www.w3.org/1999/xlink";d.hasSVG=!!document.createElementNS&&!!document.createElementNS(d.SVG_NS,"svg").createSVGRect;1>b&&(b=10);1>c&&(c=10);this.div=a;this.width=b;this.height=c;this.rBin=document.createElement("div");d.hasSVG?(d.SVG=!0,b=this.createSvgElement("svg"),a.appendChild(b),this.container=b,this.addDefs(e),this.R=new d.SVGRenderer(this)):d.isIE&&d.VMLRenderer&&(d.VML=!0,d.vmlStyleSheet||(document.namespaces.add("amvml","urn:schemas-microsoft-com:vml"),31>document.styleSheets.length?(b=document.createStyleSheet(),b.addRule(".amvml","behavior:url(#default#VML); display:inline-block; antialias:true"),d.vmlStyleSheet=b):document.styleSheets[0].addRule(".amvml","behavior:url(#default#VML); display:inline-block; antialias:true")),this.container=a,this.R=new d.VMLRenderer(this,e),this.R.disableSelection(a))},createSvgElement:function(a){return document.createElementNS(d.SVG_NS,a)},circle:function(a,b,c,e){var h=new d.AmDObject("circle",this);h.attr({r:c,cx:a,cy:b});this.addToContainer(h.node,e);return h},ellipse:function(a,b,c,e,h){var f=new d.AmDObject("ellipse",this);f.attr({rx:c,ry:e,cx:a,cy:b});this.addToContainer(f.node,h);return f},setSize:function(a,b){0<a&&0<b&&(this.container.style.width=a+"px",this.container.style.height=b+"px")},rect:function(a,b,c,e,h,f,g){var k=new d.AmDObject("rect",this);d.VML&&(h=Math.round(100*h/Math.min(c,e)),c+=2*f,e+=2*f,k.bw=f,k.node.style.marginLeft=-f,k.node.style.marginTop=-f);1>c&&(c=1);1>e&&(e=1);k.attr({x:a,y:b,width:c,height:e,rx:h,ry:h,"stroke-width":f});this.addToContainer(k.node,g);return k},image:function(a,b,c,e,h,f){var g=new d.AmDObject("image",this);g.attr({x:b,y:c,width:e,height:h});this.R.path(g,a);this.addToContainer(g.node,f);return g},addToContainer:function(a,b){b||(b=this.container);b.appendChild(a)},text:function(a,b,c){return this.R.text(a,b,c)},path:function(a,b,c,e){var h=new d.AmDObject("path",this);e||(e="100,100");h.attr({cs:e});c?h.attr({dd:a}):h.attr({d:a});this.addToContainer(h.node,b);return h},set:function(a){return this.R.set(a)},remove:function(a){if(a){var b=this.rBin;b.appendChild(a);b.innerHTML=""}},renderFix:function(){var a=this.container,b=a.style;b.top="0px";b.left="0px";try{var c=a.getBoundingClientRect(),d=c.left-Math.round(c.left),h=c.top-Math.round(c.top);d&&(b.left=d+"px");h&&(b.top=h+"px")}catch(f){}},update:function(){this.R.update()},addDefs:function(a){if(d.hasSVG){var b=this.createSvgElement("desc"),c=this.container;c.setAttribute("version","1.1");c.style.position="absolute";this.setSize(this.width,this.height);if(a.accessibleTitle){var e=this.createSvgElement("text");c.appendChild(e);e.innerHTML=a.accessibleTitle;e.style.opacity=0}d.rtl&&(c.setAttribute("direction","rtl"),c.style.left="auto",c.style.right="0px");a&&(a.addCodeCredits&&b.appendChild(document.createTextNode("JavaScript chart by amCharts "+a.version)),c.appendChild(b),a.defs&&(b=this.createSvgElement("defs"),c.appendChild(b),d.parseDefs(a.defs,b),this.defs=b))}}})})();(function(){var d=window.AmCharts;d.AmDObject=d.Class({construct:function(a,b){this.D=b;this.R=b.R;this.node=this.R.create(this,a);this.y=this.x=0;this.scale=1},attr:function(a){this.R.attr(this,a);return this},getAttr:function(a){return this.node.getAttribute(a)},setAttr:function(a,b){this.R.setAttr(this,a,b);return this},clipRect:function(a,b,c,d){this.R.clipRect(this,a,b,c,d)},translate:function(a,b,c,d){d||(a=Math.round(a),b=Math.round(b));this.R.move(this,a,b,c);this.x=a;this.y=b;this.scale=c;this.angle&&this.rotate(this.angle)},rotate:function(a,b){this.R.rotate(this,a,b);this.angle=a},animate:function(a,b,c){for(var e in a)if(a.hasOwnProperty(e)){var h=e,f=a[e];c=d.getEffect(c);this.R.animate(this,h,f,b,c)}},push:function(a){if(a){var b=this.node;b.appendChild(a.node);var c=a.clipPath;c&&b.appendChild(c);(a=a.grad)&&b.appendChild(a)}},text:function(a){this.R.setText(this,a)},remove:function(){this.stop();this.R.remove(this)},clear:function(){var a=this.node;if(a.hasChildNodes())for(;1<=a.childNodes.length;)a.removeChild(a.firstChild)},hide:function(){this.setAttr("visibility","hidden")},show:function(){this.setAttr("visibility","visible")},getBBox:function(){return this.R.getBBox(this)},toFront:function(){var a=this.node;if(a){this.prevNextNode=a.nextSibling;var b=a.parentNode;b&&b.appendChild(a)}},toPrevious:function(){var a=this.node;a&&this.prevNextNode&&(a=a.parentNode)&&a.insertBefore(this.prevNextNode,null)},toBack:function(){var a=this.node;if(a){this.prevNextNode=a.nextSibling;var b=a.parentNode;if(b){var c=b.firstChild;c&&b.insertBefore(a,c)}}},mouseover:function(a){this.R.addListener(this,"mouseover",a);return this},mouseout:function(a){this.R.addListener(this,"mouseout",a);return this},click:function(a){this.R.addListener(this,"click",a);return this},dblclick:function(a){this.R.addListener(this,"dblclick",a);return this},mousedown:function(a){this.R.addListener(this,"mousedown",a);return this},mouseup:function(a){this.R.addListener(this,"mouseup",a);return this},touchmove:function(a){this.R.addListener(this,"touchmove",a);return this},touchstart:function(a){this.R.addListener(this,"touchstart",a);return this},touchend:function(a){this.R.addListener(this,"touchend",a);return this},keyup:function(a){this.R.addListener(this,"keyup",a);return this},focus:function(a){this.R.addListener(this,"focus",a);return this},blur:function(a){this.R.addListener(this,"blur",a);return this},contextmenu:function(a){this.node.addEventListener?this.node.addEventListener("contextmenu",a,!0):this.R.addListener(this,"contextmenu",a);return this},stop:function(){d.removeFromArray(this.R.animations,this.an_translate);d.removeFromArray(this.R.animations,this.an_y);d.removeFromArray(this.R.animations,this.an_x)},length:function(){return this.node.childNodes.length},gradient:function(a,b,c){this.R.gradient(this,a,b,c)},pattern:function(a,b,c){a&&this.R.pattern(this,a,b,c)}})})();(function(){var d=window.AmCharts;d.VMLRenderer=d.Class({construct:function(a,b){this.chart=b;this.D=a;this.cNames={circle:"oval",ellipse:"oval",rect:"roundrect",path:"shape"};this.styleMap={x:"left",y:"top",width:"width",height:"height","font-family":"fontFamily","font-size":"fontSize",visibility:"visibility"}},create:function(a,b){var c;if("group"==b)c=document.createElement("div"),a.type="div";else if("text"==b)c=document.createElement("div"),a.type="text";else if("image"==b)c=document.createElement("img"),a.type="image";else{a.type="shape";a.shapeType=this.cNames[b];c=document.createElement("amvml:"+this.cNames[b]);var d=document.createElement("amvml:stroke");c.appendChild(d);a.stroke=d;var h=document.createElement("amvml:fill");c.appendChild(h);a.fill=h;h.className="amvml";d.className="amvml";c.className="amvml"}c.style.position="absolute";c.style.top=0;c.style.left=0;return c},path:function(a,b){a.node.setAttribute("src",b)},setAttr:function(a,b,c){if(void 0!==c){var e;8===document.documentMode&&(e=!0);var h=a.node,f=a.type,g=h.style;"r"==b&&(g.width=2*c,g.height=2*c);"oval"==a.shapeType&&("rx"==b&&(g.width=2*c),"ry"==b&&(g.height=2*c));"roundrect"==a.shapeType&&("width"!=b&&"height"!=b||--c);"cursor"==b&&(g.cursor=c);"cx"==b&&(g.left=c-d.removePx(g.width)/2);"cy"==b&&(g.top=c-d.removePx(g.height)/2);var k=this.styleMap[b];"width"==k&&0>c&&(c=0);void 0!==k&&(g[k]=c);"text"==f&&("text-anchor"==b&&(a.anchor=c,k=h.clientWidth,"end"==c&&(g.marginLeft=-k+"px"),"middle"==c&&(g.marginLeft=-(k/2)+
"px",g.textAlign="center"),"start"==c&&(g.marginLeft="0px")),"fill"==b&&(g.color=c),"font-weight"==b&&(g.fontWeight=c));if(g=a.children)for(k=0;k<g.length;k++)g[k].setAttr(b,c);if("shape"==f){"cs"==b&&(h.style.width="100px",h.style.height="100px",h.setAttribute("coordsize",c));"d"==b&&h.setAttribute("path",this.svgPathToVml(c));"dd"==b&&h.setAttribute("path",c);f=a.stroke;a=a.fill;"stroke"==b&&(e?f.color=c:f.setAttribute("color",c));"stroke-width"==b&&(e?f.weight=c:f.setAttribute("weight",c));"stroke-opacity"==b&&(e?f.opacity=c:f.setAttribute("opacity",c));"stroke-dasharray"==b&&(g="solid",0<c&&3>c&&(g="dot"),3<=c&&6>=c&&(g="dash"),6<c&&(g="longdash"),e?f.dashstyle=g:f.setAttribute("dashstyle",g));if("fill-opacity"==b||"opacity"==b)0===c?e?a.on=!1:a.setAttribute("on",!1):e?a.opacity=c:a.setAttribute("opacity",c);"fill"==b&&(e?a.color=c:a.setAttribute("color",c));"rx"==b&&(e?h.arcSize=c+"%":h.setAttribute("arcsize",c+"%"))}}},attr:function(a,b){for(var c in b)b.hasOwnProperty(c)&&this.setAttr(a,c,b[c])},text:function(a,b,c){var e=new d.AmDObject("text",this.D),h=e.node;h.style.whiteSpace="pre";h.innerHTML=a;this.D.addToContainer(h,c);this.attr(e,b);return e},getBBox:function(a){return this.getBox(a.node)},getBox:function(a){var b=a.offsetLeft,c=a.offsetTop,d=a.offsetWidth,h=a.offsetHeight,f;if(a.hasChildNodes()){var g,k,l;for(l=0;l<a.childNodes.length;l++){f=this.getBox(a.childNodes[l]);var m=f.x;isNaN(m)||(isNaN(g)?g=m:m<g&&(g=m));var p=f.y;isNaN(p)||(isNaN(k)?k=p:p<k&&(k=p));m=f.width+m;isNaN(m)||(d=Math.max(d,m));f=f.height+p;isNaN(f)||(h=Math.max(h,f))}0>g&&(b+=g);0>k&&(c+=k)}return{x:b,y:c,width:d,height:h}},setText:function(a,b){var c=a.node;c&&(c.innerHTML=b);this.setAttr(a,"text-anchor",a.anchor)},addListener:function(a,b,c){a.node["on"+b]=c},move:function(a,b,c){var e=a.node,h=e.style;"text"==a.type&&(c-=d.removePx(h.fontSize)/2-1);"oval"==a.shapeType&&(b-=d.removePx(h.width)/2,c-=d.removePx(h.height)/2);a=a.bw;isNaN(a)||(b-=a,c-=a);isNaN(b)||isNaN(c)||(e.style.left=b+"px",e.style.top=
c+"px")},svgPathToVml:function(a){var b=a.split(" ");a="";var c,d=Math.round,h;for(h=0;h<b.length;h++){var f=b[h],g=f.substring(0,1),f=f.substring(1),k=f.split(","),l=d(k[0])+","+d(k[1]);"M"==g&&(a+=" m "+l);"L"==g&&(a+=" l "+l);"Z"==g&&(a+=" x e");if("Q"==g){var m=c.length,p=c[m-1],q=k[0],n=k[1],l=k[2],t=k[3];c=d(c[m-2]/3+2/3*q);p=d(p/3+2/3*n);q=d(2/3*q+l/3);n=d(2/3*n+t/3);a+=" c "+c+","+p+","+q+","+n+","+l+","+t}"C"==g&&(a+=" c "+k[0]+","+k[1]+","+k[2]+","+k[3]+","+k[4]+","+k[5]);"A"==g&&(a+=" wa "+
f);"B"==g&&(a+=" at "+f);c=k}return a},animate:function(a,b,c,d,h){var f=a.node,g=this.chart;a.animationFinished=!1;if("translate"==b){b=c.split(",");c=b[1];var k=f.offsetTop;g.animate(a,"left",f.offsetLeft,b[0],d,h,"px");g.animate(a,"top",k,c,d,h,"px")}},clipRect:function(a,b,c,d,h){a=a.node;0===b&&0===c?(a.style.width=d+"px",a.style.height=h+"px",a.style.overflow="hidden"):a.style.clip="rect("+c+"px "+(b+d)+"px "+(c+h)+"px "+b+"px)"},rotate:function(a,b,c){if(0!==Number(b)){var e=a.node;a=e.style;c||(c=this.getBGColor(e.parentNode));a.backgroundColor=c;a.paddingLeft=1;c=b*Math.PI/180;var h=Math.cos(c),f=Math.sin(c),g=d.removePx(a.left),k=d.removePx(a.top),l=e.offsetWidth,e=e.offsetHeight;b/=Math.abs(b);a.left=g+l/2-l/2*Math.cos(c)-b*e/2*Math.sin(c)+3;a.top=k-b*l/2*Math.sin(c)+b*e/2*Math.sin(c);a.cssText=a.cssText+"; filter:progid:DXImageTransform.Microsoft.Matrix(M11='"+h+"', M12='"+-f+"', M21='"+f+"', M22='"+h+"', sizingmethod='auto expand');"}},getBGColor:function(a){var b="#FFFFFF";if(a.style){var c=a.style.backgroundColor;""!==c?b=c:a.parentNode&&(b=this.getBGColor(a.parentNode))}return b},set:function(a){var b=new d.AmDObject("group",this.D);this.D.container.appendChild(b.node);if(a){var c;for(c=0;c<a.length;c++)b.push(a[c])}return b},gradient:function(a,b,c,d){var h="";"radialGradient"==b&&(b="gradientradial",c.reverse());"linearGradient"==b&&(b="gradient");var f;for(f=0;f<c.length;f++)h+=Math.round(100*f/(c.length-1))+"% "+c[f],f<c.length-1&&(h+=",");a=a.fill;90==d?d=0:270==d?d=180:180==d?d=90:0===d&&(d=270);8===document.documentMode?(a.type=b,a.angle=d):(a.setAttribute("type",b),a.setAttribute("angle",d));h&&(a.colors.value=h)},remove:function(a){a.clipPath&&this.D.remove(a.clipPath);this.D.remove(a.node)},disableSelection:function(a){a.onselectstart=function(){return!1};a.style.cursor="default"},pattern:function(a,b,c,e){c=a.node;a=a.fill;var h="none";b.color&&(h=b.color);c.fillColor=h;b=b.url;d.isAbsolute(b)||(b=e+b);8===document.documentMode?(a.type="tile",a.src=b):(a.setAttribute("type","tile"),a.setAttribute("src",b))},update:function(){}})})();(function(){var d=window.AmCharts;d.SVGRenderer=d.Class({construct:function(a){this.D=a;this.animations=[]},create:function(a,b){return document.createElementNS(d.SVG_NS,b)},attr:function(a,b){for(var c in b)b.hasOwnProperty(c)&&this.setAttr(a,c,b[c])},setAttr:function(a,b,c){void 0!==c&&a.node.setAttribute(b,c)},animate:function(a,b,c,e,h){a.animationFinished=!1;var f=a.node;a["an_"+b]&&d.removeFromArray(this.animations,a["an_"+b]);"translate"==b?(f=(f=f.getAttribute("transform"))?String(f).substring(10,f.length-1):"0,0",f=f.split(", ").join(" "),f=f.split(" ").join(","),0===f&&(f="0,0")):f=Number(f.getAttribute(b));c={obj:a,frame:0,attribute:b,from:f,to:c,time:e,effect:h};this.animations.push(c);a["an_"+b]=c},update:function(){var a,b=this.animations;for(a=b.length-1;0<=a;a--){var c=b[a],e=c.time*d.updateRate,h=c.frame+1,f=c.obj,g=c.attribute,k,l,m;if(h<=e){c.frame++;if("translate"==g){k=c.from.split(",");g=Number(k[0]);k=Number(k[1]);isNaN(k)&&(k=0);l=c.to.split(",");m=Number(l[0]);l=Number(l[1]);m=0===m-g?m:Math.round(d[c.effect](0,h,g,m-g,e));c=0===l-k?l:Math.round(d[c.effect](0,h,k,l-k,e));g="transform";if(isNaN(m)||isNaN(c))continue;c="translate("+m+","+c+")"}else l=Number(c.from),k=Number(c.to),m=k-l,c=d[c.effect](0,h,l,m,e),isNaN(c)&&(c=k),0===m&&this.animations.splice(a,1);this.setAttr(f,g,c)}else"translate"==g?(l=c.to.split(","),m=Number(l[0]),l=Number(l[1]),f.translate(m,l)):(k=Number(c.to),this.setAttr(f,g,k)),f.animationFinished=!0,this.animations.splice(a,1)}},getBBox:function(a){if(a=a.node)try{return a.getBBox()}catch(b){}return{width:0,height:0,x:0,y:0}},path:function(a,b){a.node.setAttributeNS(d.SVG_XLINK,"xlink:href",b)},clipRect:function(a,b,c,e,h){var f=a.node,g=a.clipPath;g&&this.D.remove(g);var k=f.parentNode;k&&(f=document.createElementNS(d.SVG_NS,"clipPath"),g=d.getUniqueId(),f.setAttribute("id",g),this.D.rect(b,c,e,h,0,0,f),k.appendChild(f),b="#",d.baseHref&&!d.isIE&&(b=this.removeTarget(window.location.href)+b),this.setAttr(a,"clip-path","url("+b+g+")"),this.clipPathC++,a.clipPath=f)},text:function(a,b,c){var e=new d.AmDObject("text",this.D);a=String(a).split("\n");var h=d.removePx(b["font-size"]),f;for(f=0;f<a.length;f++){var g=this.create(null,"tspan");g.appendChild(document.createTextNode(a[f]));g.setAttribute("y",(h+2)*f+Math.round(h/2));g.setAttribute("x",0);e.node.appendChild(g)}e.node.setAttribute("y",Math.round(h/2));this.attr(e,b);this.D.addToContainer(e.node,c);return e},setText:function(a,b){var c=a.node;c&&(c.removeChild(c.firstChild),c.appendChild(document.createTextNode(b)))},move:function(a,b,c,d){isNaN(b)&&(b=0);isNaN(c)&&(c=0);b="translate("+b+","+c+")";d&&(b=b+" scale("+d+")");this.setAttr(a,"transform",b)},rotate:function(a,b){var c=a.node.getAttribute("transform"),d="rotate("+b+")";c&&(d=c+" "+d);this.setAttr(a,"transform",d)},set:function(a){var b=new d.AmDObject("g",this.D);this.D.container.appendChild(b.node);if(a){var c;for(c=0;c<a.length;c++)b.push(a[c])}return b},addListener:function(a,b,c){a.node["on"+b]=c},gradient:function(a,b,c,e){var h=a.node,f=a.grad;f&&this.D.remove(f);b=document.createElementNS(d.SVG_NS,b);f=d.getUniqueId();b.setAttribute("id",f);if(!isNaN(e)){var g=0,k=0,l=0,m=0;90==e?l=100:270==e?m=100:180==e?g=100:0===e&&(k=100);b.setAttribute("x1",g+"%");b.setAttribute("x2",k+"%");b.setAttribute("y1",l+"%");b.setAttribute("y2",m+"%")}for(e=0;e<c.length;e++)g=document.createElementNS(d.SVG_NS,"stop"),k=100*e/(c.length-1),0===e&&(k=0),g.setAttribute("offset",k+"%"),g.setAttribute("stop-color",c[e]),b.appendChild(g);h.parentNode.appendChild(b);c="#";d.baseHref&&!d.isIE&&(c=this.removeTarget(window.location.href)+c);h.setAttribute("fill","url("+c+f+")");a.grad=b},removeTarget:function(a){return a.split("#")[0]},pattern:function(a,b,c,e){var h=a.node;isNaN(c)&&(c=1);var f=a.patternNode;f&&this.D.remove(f);var f=document.createElementNS(d.SVG_NS,"pattern"),g=d.getUniqueId(),k=b;b.url&&(k=b.url);d.isAbsolute(k)||-1!=k.indexOf("data:image")||(k=e+k);e=Number(b.width);isNaN(e)&&(e=4);var l=Number(b.height);isNaN(l)&&(l=4);e/=c;l/=c;c=b.x;isNaN(c)&&(c=0);var m=-Math.random()*Number(b.randomX);isNaN(m)||(c=m);m=b.y;isNaN(m)&&(m=0);var p=-Math.random()*Number(b.randomY);isNaN(p)||(m=p);f.setAttribute("id",g);f.setAttribute("width",e);f.setAttribute("height",l);f.setAttribute("patternUnits","userSpaceOnUse");f.setAttribute("xlink:href",k);b.color&&(p=document.createElementNS(d.SVG_NS,"rect"),p.setAttributeNS(null,"height",e),p.setAttributeNS(null,"width",l),p.setAttributeNS(null,"fill",b.color),f.appendChild(p));this.D.image(k,0,0,e,l,f).translate(c,m);k="#";d.baseHref&&!d.isIE&&(k=this.removeTarget(window.location.href)+k);h.setAttribute("fill","url("+k+g+")");a.patternNode=f;h.parentNode.appendChild(f)},remove:function(a){a.clipPath&&this.D.remove(a.clipPath);a.grad&&this.D.remove(a.grad);a.patternNode&&this.D.remove(a.patternNode);this.D.remove(a.node)}})})();(function(){var d=window.AmCharts;d.AmLegend=d.Class({construct:function(a){this.enabled=!0;this.cname="AmLegend";this.createEvents("rollOverMarker","rollOverItem","rollOutMarker","rollOutItem","showItem","hideItem","clickMarker","clickLabel");this.position="bottom";this.borderColor=this.color="#000000";this.borderAlpha=0;this.markerLabelGap=5;this.verticalGap=10;this.align="left";this.horizontalGap=0;this.spacing=10;this.markerDisabledColor="#AAB3B3";this.markerType="square";this.markerSize=16;this.markerBorderThickness=this.markerBorderAlpha=1;this.marginBottom=this.marginTop=0;this.marginLeft=this.marginRight=20;this.autoMargins=!0;this.valueWidth=50;this.switchable=!0;this.switchType="x";this.switchColor="#FFFFFF";this.rollOverColor="#CC0000";this.reversedOrder=!1;this.labelText="[[title]]";this.valueText="[[value]]";this.accessibleLabel="[[title]]";this.useMarkerColorForLabels=!1;this.rollOverGraphAlpha=1;this.textClickEnabled=!1;this.equalWidths=!0;this.backgroundColor="#FFFFFF";this.backgroundAlpha=0;this.useGraphSettings=!1;this.showEntries=!0;this.labelDx=0;d.applyTheme(this,a,this.cname)},setData:function(a){this.legendData=a;this.invalidateSize()},invalidateSize:function(){this.destroy();this.entries=[];this.valueLabels=[];var a=this.legendData;this.enabled&&(d.ifArray(a)||d.ifArray(this.data))&&this.drawLegend()},drawLegend:function(){var a=this.chart,b=this.position,c=this.width,e=a.divRealWidth,h=a.divRealHeight,f=this.div,g=this.legendData;this.data&&(g=this.combineLegend?this.legendData.concat(this.data):this.data);isNaN(this.fontSize)&&(this.fontSize=a.fontSize);this.maxColumnsReal=this.maxColumns;if("right"==b||"left"==b)this.maxColumnsReal=1,this.autoMargins&&(this.marginLeft=this.marginRight=10);else if(this.autoMargins){this.marginRight=a.marginRight;this.marginLeft=a.marginLeft;var k=a.autoMarginOffset;"bottom"==b?(this.marginBottom=k,this.marginTop=0):(this.marginTop=k,this.marginBottom=0)}c=void 0!==c?d.toCoordinate(c,e):"right"!=b&&"left"!=b?a.realWidth:0<this.ieW?this.ieW:a.realWidth;"outside"==b?(c=f.offsetWidth,h=f.offsetHeight,f.clientHeight&&(c=f.clientWidth,h=f.clientHeight)):(isNaN(c)||(f.style.width=c+"px"),f.className="amChartsLegend "+a.classNamePrefix+"-legend-div");this.divWidth=c;(b=this.container)?(b.container.innerHTML="",f.appendChild(b.container),b.width=c,b.height=h,b.setSize(c,h),b.addDefs(a)):b=new d.AmDraw(f,c,h,a);this.container=b;this.lx=0;this.ly=8;h=this.markerSize;h>this.fontSize&&(this.ly=h/2-1);0<h&&(this.lx+=h+this.markerLabelGap);this.titleWidth=0;if(h=this.title)h=d.text(this.container,h,this.color,a.fontFamily,this.fontSize,"start",!0),d.setCN(a,h,"legend-title"),h.translate(this.marginLeft,this.marginTop+this.verticalGap+this.ly+1),a=h.getBBox(),this.titleWidth=a.width+15,this.titleHeight=a.height+6;this.index=this.maxLabelWidth=0;if(this.showEntries){for(a=0;a<g.length;a++)this.createEntry(g[a]);for(a=this.index=0;a<g.length;a++)this.createValue(g[a])}this.arrangeEntries();this.updateValues()},arrangeEntries:function(){var a=this.position,b=this.marginLeft+
this.titleWidth,c=this.marginRight,e=this.marginTop,h=this.marginBottom,f=this.horizontalGap,g=this.div,k=this.divWidth,l=this.maxColumnsReal,m=this.verticalGap,p=this.spacing,q=k-c-b,n=0,t=0,r=this.container;this.set&&this.set.remove();var w=r.set();this.set=w;var z=r.set();w.push(z);var x=this.entries,u,A;for(A=0;A<x.length;A++){u=x[A].getBBox();var y=u.width;y>n&&(n=y);u=u.height;u>t&&(t=u)}var y=t=0,B=f,D=0,C=0;for(A=0;A<x.length;A++){var I=x[A];this.reversedOrder&&(I=x[x.length-A-1]);u=I.getBBox();var H;this.equalWidths?H=y*(n+p+this.markerLabelGap):(H=B,B=B+u.width+f+p);H+u.width>q&&0<A&&0!==y&&(t++,H=y=0,B=H+u.width+f+p,D=D+C+m,C=0);u.height>C&&(C=u.height);I.translate(H,D);y++;!isNaN(l)&&y>=l&&(y=0,t++,D=D+C+m,B=f,C=0);z.push(I)}u=z.getBBox();l=u.height+2*m-1;"left"==a||"right"==a?(p=u.width+2*f,k=p+b+c,g.style.width=k+"px",this.ieW=k):p=k-b-c-1;c=d.polygon(this.container,[0,p,p,0],[0,0,l,l],this.backgroundColor,this.backgroundAlpha,1,this.borderColor,this.borderAlpha);d.setCN(this.chart,c,"legend-bg");w.push(c);w.translate(b,e);c.toBack();b=f;if("top"==a||"bottom"==a||"absolute"==a||"outside"==a)"center"==this.align?b=f+(p-u.width)/2:"right"==this.align&&(b=f+p-u.width);z.translate(b,m+1);this.titleHeight>l&&(l=this.titleHeight);e=l+e+h+1;0>e&&(e=0);"absolute"!=a&&"outside"!=a&&e>this.chart.divRealHeight&&(g.style.top="0px");g.style.height=Math.round(e)+"px";r.setSize(this.divWidth,e)},createEntry:function(a){if(!1!==a.visibleInLegend&&!a.hideFromLegend){var b=this,c=b.chart,e=b.useGraphSettings,
h=a.markerType;h&&(e=!1);a.legendEntryWidth=b.markerSize;h||(h=b.markerType);var f=a.color,g=a.alpha;a.legendKeyColor&&(f=a.legendKeyColor());a.legendKeyAlpha&&(g=a.legendKeyAlpha());var k;!0===a.hidden&&(k=f=b.markerDisabledColor);var l=a.pattern,m,p=a.customMarker;p||(p=b.customMarker);var q=b.container,n=b.markerSize,t=0,r=0,w=n/2;if(e){e=a.type;b.switchType=void 0;if("line"==e||"step"==e||"smoothedLine"==e||"ohlc"==e)m=q.set(),a.hidden||(f=a.lineColorR,k=a.bulletBorderColorR),t=d.line(q,[0,2*n],[n/2,n/2],f,a.lineAlpha,a.lineThickness,a.dashLength),d.setCN(c,t,"graph-stroke"),m.push(t),a.bullet&&(a.hidden||(f=a.bulletColorR),t=d.bullet(q,a.bullet,a.bulletSize,f,a.bulletAlpha,a.bulletBorderThickness,k,a.bulletBorderAlpha))&&(d.setCN(c,t,"graph-bullet"),t.translate(n+1,n/2),m.push(t)),w=0,t=n,r=n/3;else{a.getGradRotation&&(m=a.getGradRotation(),0===m&&(m=180));t=a.fillColorsR;!0===a.hidden&&(t=f);if(m=b.createMarker("rectangle",t,a.fillAlphas,a.lineThickness,f,a.lineAlpha,m,l,a.dashLength))w=n,m.translate(w,n/2);t=n}d.setCN(c,m,"graph-"+e);d.setCN(c,m,"graph-"+a.id)}else if(p)m=q.image(p,0,0,n,n);else{var z;isNaN(b.gradientRotation)||(z=180+b.gradientRotation);(m=b.createMarker(h,f,g,void 0,void 0,void 0,z,l))&&m.translate(n/2,n/2)}d.setCN(c,m,"legend-marker");b.addListeners(m,a);q=q.set([m]);b.switchable&&a.switchable&&q.setAttr("cursor","pointer");void 0!==a.id&&d.setCN(c,q,"legend-item-"+a.id);d.setCN(c,q,a.className,!0);k=b.switchType;var x;k&&"none"!=k&&0<n&&("x"==k?(x=b.createX(),x.translate(n/2,n/2)):x=b.createV(),x.dItem=a,!0!==a.hidden?"x"==k?x.hide():x.show():"x"!=k&&x.hide(),b.switchable||x.hide(),b.addListeners(x,a),a.legendSwitch=x,q.push(x),d.setCN(c,x,"legend-switch"));k=b.color;a.showBalloon&&b.textClickEnabled&&void 0!==b.selectedColor&&(k=b.selectedColor);b.useMarkerColorForLabels&&!l&&(k=f);!0===a.hidden&&(k=b.markerDisabledColor);f=d.massReplace(b.labelText,{"[[title]]":a.title});void 0!==b.tabIndex&&(q.setAttr("tabindex",b.tabIndex),q.setAttr("role","menuitem"),q.keyup(function(c){13==c.keyCode&&b.clickMarker(a,c)}));c.accessible&&b.accessibleLabel&&(l=d.massReplace(b.accessibleLabel,{"[[title]]":a.title}),c.makeAccessible(q,l));l=b.fontSize;m&&(n<=l&&(n=n/2+b.ly-l/2+(l+2-n)/2-r,m.translate(w,n),x&&x.translate(x.x,n)),a.legendEntryWidth=m.getBBox().width);var u;f&&(f=d.fixBrakes(f),a.legendTextReal=f,u=b.labelWidth,u=isNaN(u)?d.text(b.container,f,k,c.fontFamily,l,"start"):d.wrappedText(b.container,f,k,c.fontFamily,l,"start",!1,u,0),d.setCN(c,u,"legend-label"),
u.translate(b.lx+t,b.ly),q.push(u),b.labelDx=t,c=u.getBBox().width,b.maxLabelWidth<c&&(b.maxLabelWidth=c));b.entries[b.index]=q;a.legendEntry=b.entries[b.index];a.legendMarker=m;a.legendLabel=u;b.index++}},addListeners:function(a,b){var c=this;a&&a.mouseover(function(a){c.rollOverMarker(b,a)}).mouseout(function(a){c.rollOutMarker(b,a)}).click(function(a){c.clickMarker(b,a)})},rollOverMarker:function(a,b){this.switchable&&this.dispatch("rollOverMarker",a,b);this.dispatch("rollOverItem",a,b)},rollOutMarker:function(a,b){this.switchable&&this.dispatch("rollOutMarker",a,b);this.dispatch("rollOutItem",a,b)},clickMarker:function(a,b){this.switchable&&(!0===a.hidden?this.dispatch("showItem",a,b):this.dispatch("hideItem",a,b));this.dispatch("clickMarker",a,b)},rollOverLabel:function(a,b){a.hidden||this.textClickEnabled&&a.legendLabel&&a.legendLabel.attr({fill:this.rollOverColor});this.dispatch("rollOverItem",a,b)},rollOutLabel:function(a,b){if(!a.hidden&&this.textClickEnabled&&a.legendLabel){var c=this.color;void 0!==this.selectedColor&&a.showBalloon&&(c=this.selectedColor);this.useMarkerColorForLabels&&(c=a.lineColor,void 0===c&&(c=a.color));a.legendLabel.attr({fill:c})}this.dispatch("rollOutItem",a,b)},clickLabel:function(a,b){this.textClickEnabled?a.hidden||this.dispatch("clickLabel",a,b):this.switchable&&(!0===a.hidden?this.dispatch("showItem",a,b):this.dispatch("hideItem",a,b))},dispatch:function(a,b,c){a={type:a,dataItem:b,target:this,event:c,chart:this.chart};this.chart&&this.chart.handleLegendEvent(a);this.fire(a)},createValue:function(a){var b=this,c=b.fontSize,e=b.chart;if(!1!==a.visibleInLegend&&!a.hideFromLegend){var h=b.maxLabelWidth;b.forceWidth&&(h=b.labelWidth);b.equalWidths||(b.valueAlign="left");"left"==b.valueAlign&&a.legendLabel&&(h=a.legendLabel.getBBox().width);var f=h;if(b.valueText&&0<b.valueWidth){var g=b.color;b.useMarkerColorForValues&&(g=a.color,a.legendKeyColor&&(g=a.legendKeyColor()));!0===a.hidden&&(g=b.markerDisabledColor);var k=b.valueText,h=h+b.lx+b.labelDx+b.markerLabelGap+
b.valueWidth,l="end";"left"==b.valueAlign&&(h-=b.valueWidth,l="start");g=d.text(b.container,k,g,b.chart.fontFamily,c,l);d.setCN(e,g,"legend-value");g.translate(h,b.ly);b.entries[b.index].push(g);f+=b.valueWidth+2*b.markerLabelGap;g.dItem=a;b.valueLabels.push(g)}b.index++;e=b.markerSize;e<c+7&&(e=c+7,d.VML&&(e+=3));c=b.container.rect(a.legendEntryWidth,0,f,e,0,0).attr({stroke:"none",fill:"#fff","fill-opacity":.005});c.dItem=a;b.entries[b.index-1].push(c);c.mouseover(function(c){b.rollOverLabel(a,c)}).mouseout(function(c){b.rollOutLabel(a,c)}).click(function(c){b.clickLabel(a,c)})}},createV:function(){var a=this.markerSize;return d.polygon(this.container,[a/5,a/2,a-a/5,a/2],[a/3,a-a/5,a/5,a/1.7],this.switchColor)},createX:function(){var a=(this.markerSize-4)/2,b={stroke:this.switchColor,"stroke-width":3},c=this.container,e=d.line(c,[-a,a],[-a,a]).attr(b),a=d.line(c,[-a,a],[a,-a]).attr(b);return this.container.set([e,a])},createMarker:function(a,b,c,e,h,f,g,k,l){var m=this.markerSize,p=this.container;h||(h=this.markerBorderColor);h||
(h=b);isNaN(e)&&(e=this.markerBorderThickness);isNaN(f)&&(f=this.markerBorderAlpha);return d.bullet(p,a,m,b,c,e,h,f,m,g,k,this.chart.path,l)},validateNow:function(){this.invalidateSize()},updateValues:function(){var a=this.valueLabels,b=this.chart,c,e=this.data;if(a)for(c=0;c<a.length;c++){var h=a[c],f=h.dItem;f.periodDataItem=void 0;f.periodPercentDataItem=void 0;var g=" ";if(e)f.value?h.text(f.value):h.text("");else{var k=null;if(void 0!==f.type){var k=f.currentDataItem,l=this.periodValueText;f.legendPeriodValueText&&(l=f.legendPeriodValueText);f.legendPeriodValueTextR&&(l=f.legendPeriodValueTextR);k?(g=this.valueText,f.legendValueText&&(g=f.legendValueText),f.legendValueTextR&&(g=f.legendValueTextR),g=b.formatString(g,k)):l&&b.formatPeriodString&&(l=d.massReplace(l,{"[[title]]":f.title}),g=b.formatPeriodString(l,f))}else g=b.formatString(this.valueText,f);l=f;k&&(l=k);var m=this.valueFunction;m&&(g=m(l,g,b.periodDataItem));var p;this.useMarkerColorForLabels&&!k&&f.lastDataItem&&(k=f.lastDataItem);k?p=b.getBalloonColor(f,k):f.legendKeyColor&&(p=f.legendKeyColor());f.legendColorFunction&&(p=f.legendColorFunction(l,g,f.periodDataItem,f.periodPercentDataItem));h.text(g);if(!f.pattern&&(this.useMarkerColorForValues&&h.setAttr("fill",p),this.useMarkerColorForLabels)){if(h=f.legendMarker)h.setAttr("fill",p),h.setAttr("stroke",p);(f=f.legendLabel)&&f.setAttr("fill",p)}}}},renderFix:function(){if(!d.VML&&this.enabled){var a=this.container;a&&a.renderFix()}},destroy:function(){this.div.innerHTML="";d.remove(this.set)}})})();(function(){var d=window.AmCharts;d.formatMilliseconds=function(a,b){if(-1!=a.indexOf("fff")){var c=b.getMilliseconds(),d=String(c);10>c&&(d="00"+c);10<=c&&100>c&&(d="0"+c);a=a.replace(/fff/g,d)}return a};d.extractPeriod=function(a){var b=d.stripNumbers(a),c=1;b!=a&&(c=Number(a.slice(0,a.indexOf(b))));return{period:b,count:c}};d.getDate=function(a,b,c){return a instanceof Date?d.newDate(a,c):b&&isNaN(a)?d.stringToDate(a,b):new Date(a)};d.daysInMonth=function(a){return(new Date(a.getYear(),a.getMonth()+
1,0)).getDate()};d.newDate=function(a,b){return b&&-1==b.indexOf("fff")?new Date(a):new Date(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds())};d.resetDateToMin=function(a,b,c,e){void 0===e&&(e=1);var h,f,g,k,l,m,p;d.useUTC?(h=a.getUTCFullYear(),f=a.getUTCMonth(),g=a.getUTCDate(),k=a.getUTCHours(),l=a.getUTCMinutes(),m=a.getUTCSeconds(),p=a.getUTCMilliseconds(),a=a.getUTCDay()):(h=a.getFullYear(),f=a.getMonth(),g=a.getDate(),k=a.getHours(),l=a.getMinutes(),m=a.getSeconds(),p=a.getMilliseconds(),a=a.getDay());switch(b){case"YYYY":h=Math.floor(h/c)*c;f=0;g=1;p=m=l=k=0;break;case"MM":f=Math.floor(f/c)*c;g=1;p=m=l=k=0;break;case"WW":g=a>=e?g-a+e:g-(7+a)+e;p=m=l=k=0;break;case"DD":p=m=l=k=0;break;case"hh":k=Math.floor(k/c)*c;p=m=l=0;break;case"mm":l=Math.floor(l/c)*c;p=m=0;break;case"ss":m=Math.floor(m/c)*c;p=0;break;case"fff":p=Math.floor(p/c)*c}d.useUTC?(a=new Date,a.setUTCFullYear(h,f,g),a.setUTCHours(k,l,m,p)):a=new Date(h,f,g,k,l,m,p);return a};d.getPeriodDuration=function(a,b){void 0===b&&(b=1);var c;switch(a){case"YYYY":c=316224E5;break;case"MM":c=26784E5;break;case"WW":c=6048E5;break;case"DD":c=864E5;break;case"hh":c=36E5;break;case"mm":c=6E4;break;case"ss":c=1E3;break;case"fff":c=1}return c*b};d.intervals={s:{nextInterval:"ss",contains:1E3},ss:{nextInterval:"mm",contains:60,count:0},mm:{nextInterval:"hh",contains:60,count:1},hh:{nextInterval:"DD",contains:24,count:2},DD:{nextInterval:"",contains:Infinity,count:3}};d.getMaxInterval=function(a,b){var c=d.intervals;return a>=c[b].contains?(a=Math.round(a/c[b].contains),b=c[b].nextInterval,d.getMaxInterval(a,b)):"ss"==b?c[b].nextInterval:b};d.dayNames="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ");d.shortDayNames="Sun Mon Tue Wed Thu Fri Sat".split(" ");d.monthNames="January February March April May June July August September October November December".split(" ");d.shortMonthNames="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");d.getWeekNumber=function(a){a=new Date(a);a.setHours(0,0,0);a.setDate(a.getDate()+4-(a.getDay()||7));var b=new Date(a.getFullYear(),0,1);return Math.ceil(((a-b)/864E5+1)/7)};d.stringToDate=function(a,b){var c={},e=[{pattern:"YYYY",period:"year"},{pattern:"YY",period:"year"},{pattern:"MM",period:"month"},{pattern:"M",period:"month"},{pattern:"DD",period:"date"},{pattern:"D",period:"date"},{pattern:"JJ",period:"hours"},{pattern:"J",period:"hours"},{pattern:"HH",period:"hours"},{pattern:"H",period:"hours"},
{pattern:"KK",period:"hours"},{pattern:"K",period:"hours"},{pattern:"LL",period:"hours"},{pattern:"L",period:"hours"},{pattern:"NN",period:"minutes"},{pattern:"N",period:"minutes"},{pattern:"SS",period:"seconds"},{pattern:"S",period:"seconds"},{pattern:"QQQ",period:"milliseconds"},{pattern:"QQ",period:"milliseconds"},{pattern:"Q",period:"milliseconds"}],h=!0,f=b.indexOf("AA");-1!=f&&(a.substr(f,2),"pm"==a.toLowerCase&&(h=!1));var f=b,g,k,l;for(l=0;l<e.length;l++)k=e[l].period,c[k]=0,"date"==k&&(c[k]=1);for(l=0;l<e.length;l++)if(g=e[l].pattern,k=e[l].period,-1!=b.indexOf(g)){var m=d.getFromDateString(g,a,f);b=b.replace(g,"");if("KK"==g||"K"==g||"LL"==g||"L"==g)h||(m+=12);c[k]=m}d.useUTC?(e=new Date,e.setUTCFullYear(c.year,c.month,c.date),e.setUTCHours(c.hours,c.minutes,c.seconds,c.milliseconds)):e=new Date(c.year,c.month,c.date,c.hours,c.minutes,c.seconds,c.milliseconds);return e};d.getFromDateString=function(a,b,c){if(void 0!==b)return c=c.indexOf(a),b=String(b),b=b.substr(c,a.length),"0"==b.charAt(0)&&(b=b.substr(1,b.length-1)),b=Number(b),isNaN(b)&&(b=0),-1!=a.indexOf("M")&&b--,b};d.formatDate=function(a,b,c){c||(c=d);var e,h,f,g,k,l,m,p,q=d.getWeekNumber(a);d.useUTC?(e=a.getUTCFullYear(),h=a.getUTCMonth(),f=a.getUTCDate(),g=a.getUTCDay(),k=a.getUTCHours(),l=a.getUTCMinutes(),m=a.getUTCSeconds(),p=a.getUTCMilliseconds()):(e=a.getFullYear(),h=a.getMonth(),f=a.getDate(),g=a.getDay(),k=a.getHours(),l=a.getMinutes(),m=a.getSeconds(),p=a.getMilliseconds());var n=String(e).substr(2,2),t="0"+g;b=b.replace(/W/g,q);q=k;24==q&&(q=0);var r=q;10>r&&(r="0"+r);b=b.replace(/JJ/g,r);b=b.replace(/J/g,q);r=k;0===r&&(r=24,-1!=b.indexOf("H")&&(f--,0===f&&(e=new Date(a),e.setDate(e.getDate()-1),h=e.getMonth(),f=e.getDate(),e=e.getFullYear())));a=h+1;9>h&&(a="0"+a);q=f;10>f&&(q="0"+f);var w=r;10>w&&(w="0"+w);b=b.replace(/HH/g,w);b=b.replace(/H/g,r);r=k;11<r&&(r-=12);w=r;10>w&&(w="0"+w);b=b.replace(/KK/g,w);b=b.replace(/K/g,r);r=k;0===r&&(r=12);12<r&&(r-=12);w=r;10>w&&(w="0"+w);b=b.replace(/LL/g,w);b=b.replace(/L/g,r);r=l;10>r&&(r="0"+r);b=b.replace(/NN/g,r);b=b.replace(/N/g,l);l=m;10>l&&(l="0"+l);b=b.replace(/SS/g,l);b=b.replace(/S/g,m);m=p;10>m?m="00"+m:100>m&&(m="0"+m);l=p;10>l&&(l="00"+l);b=b.replace(/A/g,"@A@");b=b.replace(/QQQ/g,m);b=b.replace(/QQ/g,l);b=b.replace(/Q/g,p);b=b.replace(/YYYY/g,"@IIII@");b=b.replace(/YY/g,"@II@");b=b.replace(/MMMM/g,"@XXXX@");b=b.replace(/MMM/g,"@XXX@");b=b.replace(/MM/g,"@XX@");b=b.replace(/M/g,"@X@");b=b.replace(/DD/g,"@RR@");b=b.replace(/D/g,"@R@");b=b.replace(/EEEE/g,"@PPPP@");b=b.replace(/EEE/g,"@PPP@");b=b.replace(/EE/g,"@PP@");b=b.replace(/E/g,"@P@");b=b.replace(/@IIII@/g,e);b=b.replace(/@II@/g,n);b=b.replace(/@XXXX@/g,c.monthNames[h]);b=b.replace(/@XXX@/g,c.shortMonthNames[h]);b=b.replace(/@XX@/g,a);b=b.replace(/@X@/g,h+1);b=b.replace(/@RR@/g,q);b=b.replace(/@R@/g,f);b=b.replace(/@PPPP@/g,c.dayNames[g]);b=b.replace(/@PPP@/g,c.shortDayNames[g]);b=b.replace(/@PP@/g,t);b=b.replace(/@P@/g,g);return b=12>k?b.replace(/@A@/g,c.amString):b.replace(/@A@/g,c.pmString)};d.changeDate=function(a,b,c,e,h){if(d.useUTC)return d.changeUTCDate(a,b,c,e,h);var f=-1;void 0===e&&(e=!0);void 0===h&&(h=!1);!0===e&&(f=1);switch(b){case"YYYY":a.setFullYear(a.getFullYear()+c*f);e||h||a.setDate(a.getDate()+1);break;case"MM":b=a.getMonth();a.setMonth(a.getMonth()+c*f);a.getMonth()>b+c*f&&a.setDate(a.getDate()-1);e||h||a.setDate(a.getDate()+1);break;case"DD":a.setDate(a.getDate()+c*f);break;case"WW":a.setDate(a.getDate()+c*f*7);break;case"hh":a.setHours(a.getHours()+c*f);break;case"mm":a.setMinutes(a.getMinutes()+
c*f);break;case"ss":a.setSeconds(a.getSeconds()+c*f);break;case"fff":a.setMilliseconds(a.getMilliseconds()+c*f)}return a};d.changeUTCDate=function(a,b,c,d,h){var f=-1;void 0===d&&(d=!0);void 0===h&&(h=!1);!0===d&&(f=1);switch(b){case"YYYY":a.setUTCFullYear(a.getUTCFullYear()+c*f);d||h||a.setUTCDate(a.getUTCDate()+1);break;case"MM":b=a.getUTCMonth();a.setUTCMonth(a.getUTCMonth()+c*f);a.getUTCMonth()>b+c*f&&a.setUTCDate(a.getUTCDate()-1);d||h||a.setUTCDate(a.getUTCDate()+1);break;case"DD":a.setUTCDate(a.getUTCDate()+
c*f);break;case"WW":a.setUTCDate(a.getUTCDate()+c*f*7);break;case"hh":a.setUTCHours(a.getUTCHours()+c*f);break;case"mm":a.setUTCMinutes(a.getUTCMinutes()+c*f);break;case"ss":a.setUTCSeconds(a.getUTCSeconds()+c*f);break;case"fff":a.setUTCMilliseconds(a.getUTCMilliseconds()+c*f)}return a}})();

/***/ }),

/***/ "./src/assets/charts/amchart/ammap.js":
/*!********************************************!*\
  !*** ./src/assets/charts/amchart/ammap.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(){var d;window.AmCharts?d=window.AmCharts:(d={},window.AmCharts=d,d.themes={},d.maps={},d.inheriting={},d.charts=[],d.onReadyArray=[],d.useUTC=!1,d.updateRate=60,d.uid=0,d.lang={},d.translations={},d.mapTranslations={},d.windows={},d.initHandlers=[],d.amString="am",d.pmString="pm");d.Class=function(a){var b=function(){arguments[0]!==d.inheriting&&(this.events={},this.construct.apply(this,arguments))};a.inherits?(b.prototype=new a.inherits(d.inheriting),b.base=a.inherits.prototype,delete a.inherits):(b.prototype.createEvents=function(){for(var a=0;a<arguments.length;a++)this.events[arguments[a]]=[]},b.prototype.listenTo=function(a,b,c){this.removeListener(a,b,c);a.events[b].push({handler:c,scope:this})},b.prototype.addListener=function(a,b,c){this.removeListener(this,a,b);a&&this.events[a]&&this.events[a].push({handler:b,scope:c})},b.prototype.removeListener=function(a,b,c){if(a&&a.events&&(a=a.events[b]))for(b=a.length-1;0<=b;b--)a[b].handler===c&&a.splice(b,1)},b.prototype.fire=function(a){for(var b=this.events[a.type],c=0;c<b.length;c++){var d=b[c];d.handler.call(d.scope,a)}});for(var c in a)b.prototype[c]=a[c];return b};d.addChart=function(a){window.requestAnimationFrame?d.animationRequested||(d.animationRequested=!0,window.requestAnimationFrame(d.update)):d.updateInt||(d.updateInt=setInterval(function(){d.update()},Math.round(1E3/d.updateRate)));d.charts.push(a)};d.removeChart=function(a){for(var b=d.charts,c=b.length-1;0<=c;c--)b[c]==a&&b.splice(c,1);0===b.length&&(d.requestAnimation&&(window.cancelAnimationFrame(d.requestAnimation),d.animationRequested=!1),d.updateInt&&(clearInterval(d.updateInt),d.updateInt=NaN))};d.isModern=!0;d.getIEVersion=function(){var a=0,b,c;"Microsoft Internet Explorer"==navigator.appName&&(b=navigator.userAgent,c=/MSIE ([0-9]{1,}[.0-9]{0,})/,null!==c.exec(b)&&(a=parseFloat(RegExp.$1)));return a};d.applyLang=function(a,b){var c=d.translations;b.dayNames=d.extend({},d.dayNames);b.shortDayNames=d.extend({},d.shortDayNames);b.monthNames=d.extend({},d.monthNames);b.shortMonthNames=d.extend({},d.shortMonthNames);b.amString="am";b.pmString="pm";c&&(c=c[a])&&(d.lang=c,b.langObj=c,c.monthNames&&(b.dayNames=d.extend({},c.dayNames),b.shortDayNames=d.extend({},c.shortDayNames),b.monthNames=d.extend({},c.monthNames),b.shortMonthNames=d.extend({},c.shortMonthNames)),c.am&&(b.amString=c.am),c.pm&&(b.pmString=c.pm));d.amString=b.amString;d.pmString=b.pmString};d.IEversion=d.getIEVersion();9>d.IEversion&&0<d.IEversion&&(d.isModern=!1,d.isIE=!0);d.dx=0;d.dy=0;if(document.addEventListener||window.opera)d.isNN=!0,d.isIE=!1,d.dx=.5,d.dy=.5;document.attachEvent&&(d.isNN=!1,d.isIE=!0,d.isModern||(d.dx=0,d.dy=0));window.chrome&&(d.chrome=!0);d.handleMouseUp=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];e&&e.handleReleaseOutside&&e.handleReleaseOutside(a)}};d.handleMouseMove=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];e&&e.handleMouseMove&&e.handleMouseMove(a)}};d.handleWheel=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];if(e&&e.mouseIsOver){(e.mouseWheelScrollEnabled||e.mouseWheelZoomEnabled)&&e.handleWheel&&e.handleWheel(a);break}}};d.resetMouseOver=function(){for(var a=d.charts,b=0;b<a.length;b++){var c=a[b];c&&(c.mouseIsOver=!1)}};d.ready=function(a){d.onReadyArray.push(a)};d.handleLoad=function(){d.isReady=!0;for(var a=d.onReadyArray,b=0;b<a.length;b++){var c=a[b];isNaN(d.processDelay)?c():setTimeout(c,d.processDelay*b)}d.onReadyArray=[]};d.addInitHandler=function(a,b){d.initHandlers.push({method:a,types:b})};d.callInitHandler=function(a){var b=d.initHandlers;if(d.initHandlers)for(var c=0;c<b.length;c++){var e=b[c];e.types?d.isInArray(e.types,a.type)&&e.method(a):e.method(a)}};d.getUniqueId=function(){d.uid++;return"AmChartsEl-"+d.uid};d.isNN&&(document.addEventListener("mousemove",d.handleMouseMove),document.addEventListener("mouseup",d.handleMouseUp,!0),window.addEventListener("load",d.handleLoad,!0));d.isIE&&(document.attachEvent("onmousemove",d.handleMouseMove),document.attachEvent("onmouseup",d.handleMouseUp),window.attachEvent("onload",d.handleLoad));d.addWheelListeners=function(){d.wheelIsListened||(d.isNN&&(window.addEventListener("DOMMouseScroll",d.handleWheel,!0),document.addEventListener("mousewheel",d.handleWheel,!0)),d.isIE&&document.attachEvent("onmousewheel",d.handleWheel));d.wheelIsListened=!0};d.clear=function(){var a=d.charts;if(a)for(var b=a.length-1;0<=b;b--)a[b].clear();d.updateInt&&clearInterval(d.updateInt);d.requestAnimation&&window.cancelAnimationFrame(d.requestAnimation);d.charts=[];d.isNN&&(document.removeEventListener("mousemove",d.handleMouseMove,!0),document.removeEventListener("mouseup",d.handleMouseUp,!0),window.removeEventListener("load",d.handleLoad,!0),window.removeEventListener("DOMMouseScroll",d.handleWheel,!0),document.removeEventListener("mousewheel",d.handleWheel,!0));d.isIE&&(document.detachEvent("onmousemove",d.handleMouseMove),document.detachEvent("onmouseup",d.handleMouseUp),window.detachEvent("onload",d.handleLoad))};d.makeChart=function(a,b,c){var e=b.type,f=b.theme;d.isString(f)&&(f=d.themes[f],b.theme=f);var g;switch(e){case"serial":g=new d.AmSerialChart(f);break;case"xy":g=new d.AmXYChart(f);break;case"pie":g=new d.AmPieChart(f);break;case"radar":g=new d.AmRadarChart(f);break;case"gauge":g=new d.AmAngularGauge(f);break;case"funnel":g=new d.AmFunnelChart(f);break;case"map":g=new d.AmMap(f);break;case"stock":g=new d.AmStockChart(f);break;case"gantt":g=new d.AmGanttChart(f)}d.extend(g,b);d.isReady?isNaN(c)?g.write(a):setTimeout(function(){d.realWrite(g,a)},c):d.ready(function(){isNaN(c)?g.write(a):setTimeout(function(){d.realWrite(g,a)},c)});return g};d.realWrite=function(a,b){a.write(b)};d.updateCount=0;d.validateAt=Math.round(d.updateRate/10);d.update=function(){var a=d.charts;d.updateCount++;var b=!1;d.updateCount==d.validateAt&&(b=!0,d.updateCount=0);if(a)for(var c=a.length-1;0<=c;c--)a[c].update&&a[c].update(),b&&(a[c].autoResize?a[c].validateSize&&a[c].validateSize():a[c].premeasure&&a[c].premeasure());window.requestAnimationFrame&&(d.requestAnimation=window.requestAnimationFrame(d.update))};"complete"==document.readyState&&d.handleLoad()})();(function(){var d=window.AmCharts;d.toBoolean=function(a,b){if(void 0===a)return b;switch(String(a).toLowerCase()){case"true":case"yes":case"1":return!0;case"false":case"no":case"0":case null:return!1;default:return!!a}};d.removeFromArray=function(a,b){var c;if(void 0!==b&&void 0!==a)for(c=a.length-1;0<=c;c--)a[c]==b&&a.splice(c,1)};d.getPath=function(){var a=document.getElementsByTagName("script");if(a)for(var b=0;b<a.length;b++){var c=a[b].src;if(-1!==c.search(/\/(amcharts|ammap)\.js/))return c.replace(/\/(amcharts|ammap)\.js.*/,"/")}};d.normalizeUrl=function(a){return""!==a&&-1===a.search(/\/$/)?a+"/":a};d.isAbsolute=function(a){return 0===a.search(/^http[s]?:|^\//)};d.isInArray=function(a,b){for(var c=0;c<a.length;c++)if(a[c]==b)return!0;return!1};d.getDecimals=function(a){var b=0;isNaN(a)||(a=String(a),-1!=a.indexOf("e-")?b=Number(a.split("-")[1]):-1!=a.indexOf(".")&&(b=a.split(".")[1].length));return b};d.wordwrap=function(a,b,c,e){var f,g,h,k;a+="";if(1>b)return a;f=-1;for(a=(k=a.split(/\r\n|\n|\r/)).length;++f<a;k[f]+=h){h=k[f];for(k[f]="";h.length>b;k[f]+=d.trim(h.slice(0,g))+((h=h.slice(g)).length?c:""))g=2==e||(g=h.slice(0,b+1).match(/\S*(\s)?$/))[1]?b:g.input.length-g[0].length||1==e&&b||g.input.length+(g=h.slice(b).match(/^\S*/))[0].length;h=d.trim(h)}return k.join(c)};d.trim=function(a){return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")};d.wrappedText=function(a,b,c,e,f,g,h,k){var l=d.text(a,b,c,e,f,g,h);if(l){var m=l.getBBox();if(m.width>k){var n="\n";d.isModern||(n="<br>");k=Math.floor(k/(m.width/
b.length));2<k&&(k-=2);b=d.wordwrap(b,k,n,!0);l.remove();l=d.text(a,b,c,e,f,g,h)}}return l};d.getStyle=function(a,b){var c="";if(document.defaultView&&document.defaultView.getComputedStyle)try{c=document.defaultView.getComputedStyle(a,"").getPropertyValue(b)}catch(e){}else a.currentStyle&&(b=b.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=a.currentStyle[b]);return c};d.removePx=function(a){if(void 0!==a)return Number(a.substring(0,a.length-2))};d.getURL=function(a,b){if(a)if("_self"!=b&&b)if("_top"==b&&window.top)window.top.location.href=a;else if("_parent"==b&&window.parent)window.parent.location.href=a;else if("_blank"==b)window.open(a);else{var c=document.getElementsByName(b)[0];c?c.src=a:(c=d.windows[b])?c.opener&&!c.opener.closed?c.location.href=a:d.windows[b]=window.open(a):d.windows[b]=window.open(a)}else window.location.href=a};d.ifArray=function(a){return a&&"object"==typeof a&&0<a.length?!0:!1};d.callMethod=function(a,b){var c;for(c=0;c<b.length;c++){var e=b[c];if(e){if(e[a])e[a]();var d=e.length;if(0<d){var g;for(g=0;g<d;g++){var h=e[g];if(h&&h[a])h[a]()}}}}};d.toNumber=function(a){return"number"==typeof a?a:Number(String(a).replace(/[^0-9\-.]+/g,""))};d.toColor=function(a){if(""!==a&&void 0!==a)if(-1!=a.indexOf(",")){a=a.split(",");var b;for(b=0;b<a.length;b++){var c=a[b].substring(a[b].length-6,a[b].length);a[b]="#"+c}}else a=a.substring(a.length-6,a.length),a="#"+a;return a};d.toCoordinate=function(a,b,c){var e;void 0!==a&&(a=String(a),c&&c<b&&(b=c),e=Number(a),-1!=a.indexOf("!")&&(e=b-Number(a.substr(1))),-1!=a.indexOf("%")&&(e=b*Number(a.substr(0,a.length-1))/100));return e};d.fitToBounds=function(a,b,c){a<b&&(a=b);a>c&&(a=c);return a};d.isDefined=function(a){return void 0===a?!1:!0};d.stripNumbers=function(a){return a.replace(/[0-9]+/g,"")};d.roundTo=function(a,b){if(0>b)return a;var c=Math.pow(10,b);return Math.round(a*c)/c};d.toFixed=function(a,b){var c=!1;0>a&&(c=!0,a=Math.abs(a));var e=String(Math.round(a*Math.pow(10,b)));if(0<b){var d=e.length;if(d<b){var g;for(g=0;g<
b-d;g++)e="0"+e}d=e.substring(0,e.length-b);""===d&&(d=0);e=d+"."+e.substring(e.length-b,e.length);return c?"-"+e:e}return String(e)};d.formatDuration=function(a,b,c,e,f,g){var h=d.intervals,k=g.decimalSeparator;if(a>=h[b].contains){var l=a-Math.floor(a/h[b].contains)*h[b].contains;"ss"==b?(l=d.formatNumber(l,g),1==l.split(k)[0].length&&(l="0"+l)):l=d.roundTo(l,g.precision);("mm"==b||"hh"==b)&&10>l&&(l="0"+l);c=l+""+e[b]+""+c;a=Math.floor(a/h[b].contains);b=h[b].nextInterval;return d.formatDuration(a,b,c,e,f,g)}"ss"==b&&(a=d.formatNumber(a,g),1==a.split(k)[0].length&&(a="0"+a));("mm"==b||"hh"==b)&&10>a&&(a="0"+a);c=a+""+e[b]+""+c;if(h[f].count>h[b].count)for(a=h[b].count;a<h[f].count;a++)b=h[b].nextInterval,"ss"==b||"mm"==b||"hh"==b?c="00"+e[b]+""+c:"DD"==b&&(c="0"+e[b]+""+c);":"==c.charAt(c.length-1)&&(c=c.substring(0,c.length-1));return c};d.formatNumber=function(a,b,c,e,f){a=d.roundTo(a,b.precision);isNaN(c)&&(c=b.precision);var g=b.decimalSeparator;b=b.thousandsSeparator;var h;h=0>a?"-":"";a=Math.abs(a);var k=String(a),l=!1;-1!=k.indexOf("e")&&(l=!0);0<=c&&!l&&(k=d.toFixed(a,c));var m="";if(l)m=k;else{var k=k.split("."),l=String(k[0]),n;for(n=l.length;0<=n;n-=3)m=n!=l.length?0!==n?l.substring(n-3,n)+b+m:l.substring(n-3,n)+m:l.substring(n-3,n);void 0!==k[1]&&(m=m+g+k[1]);void 0!==c&&0<c&&"0"!=m&&(m=d.addZeroes(m,g,c))}m=h+m;""===h&&!0===e&&0!==a&&(m="+"+m);!0===f&&(m+="%");return m};d.addZeroes=function(a,b,c){a=a.split(b);void 0===a[1]&&0<c&&(a[1]="0");return a[1].length<c?(a[1]+="0",d.addZeroes(a[0]+b+a[1],b,c)):void 0!==a[1]?a[0]+b+a[1]:a[0]};d.scientificToNormal=function(a){var b;a=String(a).split("e");var c;if("-"==a[1].substr(0,1)){b="0.";for(c=0;c<Math.abs(Number(a[1]))-1;c++)b+="0";b+=a[0].split(".").join("")}else{var e=0;b=a[0].split(".");b[1]&&(e=b[1].length);b=a[0].split(".").join("");for(c=0;c<Math.abs(Number(a[1]))-e;c++)b+="0"}return b};d.toScientific=function(a,b){if(0===a)return"0";var c=Math.floor(Math.log(Math.abs(a))*Math.LOG10E),e=String(e).split(".").join(b);return String(e)+"e"+c};d.randomColor=function(){return"#"+("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6)};d.hitTest=function(a,b,c){var e=!1,f=a.x,g=a.x+a.width,h=a.y,k=a.y+a.height,l=d.isInRectangle;e||(e=l(f,h,b));e||(e=l(f,k,b));e||(e=l(g,h,b));e||(e=l(g,k,b));e||!0===c||(e=d.hitTest(b,a,!0));return e};d.isInRectangle=function(a,b,c){return a>=c.x-5&&a<=c.x+c.width+5&&b>=c.y-5&&b<=c.y+c.height+5?!0:!1};d.isPercents=function(a){if(-1!=String(a).indexOf("%"))return!0};d.formatValue=function(a,b,c,e,f,g,h,k){if(b){void 0===f&&(f="");var l;for(l=0;l<c.length;l++){var m=c[l],n=b[m];void 0!==n&&(n=g?d.addPrefix(n,k,h,e):d.formatNumber(n,e),a=a.replace(new RegExp("\\[\\["+f+""+m+"\\]\\]","g"),n))}}return a};d.formatDataContextValue=function(a,b){if(a){var c=a.match(/\[\[.*?\]\]/g),e;for(e=0;e<c.length;e++){var d=c[e],d=d.substr(2,d.length-4);void 0!==b[d]&&(a=a.replace(new RegExp("\\[\\["+d+"\\]\\]","g"),b[d]))}}return a};d.massReplace=function(a,b){for(var c in b)if(b.hasOwnProperty(c)){var e=b[c];void 0===e&&(e="");a=a.replace(c,e)}return a};d.cleanFromEmpty=function(a){return a.replace(/\[\[[^\]]*\]\]/g,"")};d.addPrefix=function(a,b,c,e,f){var g=d.formatNumber(a,e),h="",k,l,m;if(0===a)return"0";0>a&&(h="-");a=Math.abs(a);if(1<a)for(k=b.length-1;-1<k;k--){if(a>=b[k].number&&(l=a/b[k].number,m=Number(e.precision),1>m&&(m=1),c=d.roundTo(l,m),m=d.formatNumber(c,{precision:-1,decimalSeparator:e.decimalSeparator,thousandsSeparator:e.thousandsSeparator}),!f||l==c)){g=h+""+m+""+b[k].prefix;break}}else for(k=0;k<c.length;k++)if(a<=c[k].number){l=a/c[k].number;m=Math.abs(Math.floor(Math.log(l)*Math.LOG10E));l=d.roundTo(l,m);g=h+""+l+""+c[k].prefix;break}return g};d.remove=function(a){a&&a.remove()};d.getEffect=function(a){">"==a&&(a="easeOutSine");"<"==a&&(a="easeInSine");"elastic"==a&&(a="easeOutElastic");return a};d.getObjById=function(a,b){var c,e;for(e=0;e<a.length;e++){var d=a[e];if(d.id==b){c=d;break}}return c};d.applyTheme=function(a,b,c){b||(b=d.theme);try{b=JSON.parse(JSON.stringify(b))}catch(e){}b&&b[c]&&d.extend(a,b[c])};d.isString=function(a){return"string"==typeof a?!0:!1};d.extend=function(a,b,c){var e;a||(a={});for(e in b)c?a.hasOwnProperty(e)||(a[e]=b[e]):a[e]=b[e];return a};d.copyProperties=function(a,b){for(var c in a)a.hasOwnProperty(c)&&"events"!=c&&void 0!==a[c]&&"function"!=typeof a[c]&&"cname"!=c&&(b[c]=a[c])};d.processObject=function(a,b,c,e){if(!1===a instanceof b&&(a=e?d.extend(new b(c),a):d.extend(a,new b(c),!0),a.listeners))for(var f in a.listeners)b=a.listeners[f],a.addListener(b.event,b.method);return a};d.fixNewLines=function(a){var b=RegExp("\\n","g");a&&(a=a.replace(b,"<br />"));return a};d.fixBrakes=function(a){if(d.isModern){var b=RegExp("<br>","g");a&&(a=a.replace(b,"\n"))}else a=d.fixNewLines(a);return a};d.deleteObject=function(a,b){if(a){if(void 0===b||null===b)b=20;if(0!==b)if("[object Array]"===Object.prototype.toString.call(a))for(var c=0;c<a.length;c++)d.deleteObject(a[c],b-1),a[c]=null;else if(a&&!a.tagName)try{for(c in a.theme=null,a)a[c]&&("object"==typeof a[c]&&d.deleteObject(a[c],b-1),"function"!=typeof a[c]&&(a[c]=null))}catch(e){}}};d.bounce=function(a,b,c,e,d){return(b/=d)<1/2.75?7.5625*e*b*b+c:b<2/2.75?e*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?e*(7.5625*(b-=2.25/2.75)*b+.9375)+c:e*(7.5625*(b-=2.625/2.75)*b+.984375)+c};d.easeInOutQuad=function(a,b,c,e,d){b/=d/2;if(1>b)return e/2*b*b+c;b--;return-e/2*(b*(b-2)-1)+c};d.easeInSine=function(a,b,c,e,d){return-e*Math.cos(b/d*(Math.PI/2))+e+c};d.easeOutSine=function(a,b,c,e,d){return e*Math.sin(b/d*(Math.PI/
2))+c};d.easeOutElastic=function(a,b,c,e,d){a=1.70158;var g=0,h=e;if(0===b)return c;if(1==(b/=d))return c+e;g||(g=.3*d);h<Math.abs(e)?(h=e,a=g/4):a=g/(2*Math.PI)*Math.asin(e/h);return h*Math.pow(2,-10*b)*Math.sin(2*(b*d-a)*Math.PI/g)+e+c};d.fixStepE=function(a){a=a.toExponential(0).split("e");var b=Number(a[1]);9==Number(a[0])&&b++;return d.generateNumber(1,b)};d.generateNumber=function(a,b){var c="",e;e=0>b?Math.abs(b)-1:Math.abs(b);var d;for(d=0;d<e;d++)c+="0";return 0>b?Number("0."+c+String(a)):Number(String(a)+c)};d.setCN=function(a,b,c,e){if(a.addClassNames&&b&&(b=b.node)&&c){var d=b.getAttribute("class");a=a.classNamePrefix+"-";e&&(a="");d?b.setAttribute("class",d+" "+a+c):b.setAttribute("class",a+c)}};d.removeCN=function(a,b,c){b&&(b=b.node)&&c&&(b=b.classList)&&b.remove(a.classNamePrefix+"-"+c)};d.parseDefs=function(a,b){for(var c in a){var e=typeof a[c];if(0<a[c].length&&"object"==e)for(var f=0;f<a[c].length;f++)e=document.createElementNS(d.SVG_NS,c),b.appendChild(e),d.parseDefs(a[c][f],e);else"object"==e?(e=document.createElementNS(d.SVG_NS,c),b.appendChild(e),d.parseDefs(a[c],e)):b.setAttribute(c,a[c])}}})();(function(){var d=window.AmCharts;d.AmDraw=d.Class({construct:function(a,b,c,e){d.SVG_NS="http://www.w3.org/2000/svg";d.SVG_XLINK="http://www.w3.org/1999/xlink";d.hasSVG=!!document.createElementNS&&!!document.createElementNS(d.SVG_NS,"svg").createSVGRect;1>b&&(b=10);1>c&&(c=10);this.div=a;this.width=b;this.height=c;this.rBin=document.createElement("div");d.hasSVG?(d.SVG=!0,b=this.createSvgElement("svg"),a.appendChild(b),this.container=b,this.addDefs(e),this.R=new d.SVGRenderer(this)):d.isIE&&d.VMLRenderer&&(d.VML=!0,d.vmlStyleSheet||(document.namespaces.add("amvml","urn:schemas-microsoft-com:vml"),31>document.styleSheets.length?(b=document.createStyleSheet(),b.addRule(".amvml","behavior:url(#default#VML); display:inline-block; antialias:true"),d.vmlStyleSheet=b):document.styleSheets[0].addRule(".amvml","behavior:url(#default#VML); display:inline-block; antialias:true")),this.container=a,this.R=new d.VMLRenderer(this,e),this.R.disableSelection(a))},createSvgElement:function(a){return document.createElementNS(d.SVG_NS,a)},circle:function(a,b,c,e){var f=new d.AmDObject("circle",this);f.attr({r:c,cx:a,cy:b});this.addToContainer(f.node,e);return f},ellipse:function(a,b,c,e,f){var g=new d.AmDObject("ellipse",this);g.attr({rx:c,ry:e,cx:a,cy:b});this.addToContainer(g.node,f);return g},setSize:function(a,b){0<a&&0<b&&(this.container.style.width=a+"px",this.container.style.height=b+"px")},rect:function(a,b,c,e,f,g,h){var k=new d.AmDObject("rect",this);d.VML&&(f=Math.round(100*f/Math.min(c,e)),c+=2*g,e+=2*g,k.bw=g,k.node.style.marginLeft=-g,k.node.style.marginTop=-g);1>c&&(c=1);1>e&&(e=1);k.attr({x:a,y:b,width:c,height:e,rx:f,ry:f,"stroke-width":g});this.addToContainer(k.node,h);return k},image:function(a,b,c,e,f,g){var h=new d.AmDObject("image",this);h.attr({x:b,y:c,width:e,height:f});this.R.path(h,a);this.addToContainer(h.node,g);return h},addToContainer:function(a,b){b||(b=this.container);b.appendChild(a)},text:function(a,b,c){return this.R.text(a,b,c)},path:function(a,b,c,e){var f=new d.AmDObject("path",this);e||(e="100,100");f.attr({cs:e});c?f.attr({dd:a}):f.attr({d:a});this.addToContainer(f.node,b);return f},set:function(a){return this.R.set(a)},remove:function(a){if(a){var b=this.rBin;b.appendChild(a);b.innerHTML=""}},renderFix:function(){var a=this.container,b=a.style;b.top="0px";b.left="0px";try{var c=a.getBoundingClientRect(),e=c.left-Math.round(c.left),d=c.top-Math.round(c.top);e&&(b.left=e+"px");d&&(b.top=d+"px")}catch(g){}},update:function(){this.R.update()},addDefs:function(a){if(d.hasSVG){var b=this.createSvgElement("desc"),c=this.container;c.setAttribute("version","1.1");c.style.position="absolute";this.setSize(this.width,this.height);if(a.accessibleTitle){var e=this.createSvgElement("text");c.appendChild(e);e.innerHTML=a.accessibleTitle;e.style.opacity=0}d.rtl&&(c.setAttribute("direction","rtl"),c.style.left="auto",c.style.right="0px");a&&(a.addCodeCredits&&b.appendChild(document.createTextNode("JavaScript chart by amCharts "+a.version)),c.appendChild(b),a.defs&&(b=this.createSvgElement("defs"),c.appendChild(b),d.parseDefs(a.defs,b),this.defs=b))}}})})();(function(){var d=window.AmCharts;d.AmDObject=d.Class({construct:function(a,b){this.D=b;this.R=b.R;this.node=this.R.create(this,a);this.y=this.x=0;this.scale=1},attr:function(a){this.R.attr(this,a);return this},getAttr:function(a){return this.node.getAttribute(a)},setAttr:function(a,b){this.R.setAttr(this,a,b);return this},clipRect:function(a,b,c,e){this.R.clipRect(this,a,b,c,e)},translate:function(a,b,c,e){e||(a=Math.round(a),b=Math.round(b));this.R.move(this,a,b,c);this.x=a;this.y=b;this.scale=c;this.angle&&this.rotate(this.angle)},rotate:function(a,b){this.R.rotate(this,a,b);this.angle=a},animate:function(a,b,c){for(var e in a)if(a.hasOwnProperty(e)){var f=e,g=a[e];c=d.getEffect(c);this.R.animate(this,f,g,b,c)}},push:function(a){if(a){var b=this.node;b.appendChild(a.node);var c=a.clipPath;c&&b.appendChild(c);(a=a.grad)&&b.appendChild(a)}},text:function(a){this.R.setText(this,a)},remove:function(){this.stop();this.R.remove(this)},clear:function(){var a=this.node;if(a.hasChildNodes())for(;1<=a.childNodes.length;)a.removeChild(a.firstChild)},hide:function(){this.setAttr("visibility","hidden")},show:function(){this.setAttr("visibility","visible")},getBBox:function(){return this.R.getBBox(this)},toFront:function(){var a=this.node;if(a){this.prevNextNode=a.nextSibling;var b=a.parentNode;b&&b.appendChild(a)}},toPrevious:function(){var a=this.node;a&&this.prevNextNode&&(a=a.parentNode)&&a.insertBefore(this.prevNextNode,null)},toBack:function(){var a=this.node;if(a){this.prevNextNode=a.nextSibling;var b=a.parentNode;if(b){var c=b.firstChild;c&&b.insertBefore(a,c)}}},mouseover:function(a){this.R.addListener(this,"mouseover",a);return this},mouseout:function(a){this.R.addListener(this,"mouseout",a);return this},click:function(a){this.R.addListener(this,"click",a);return this},dblclick:function(a){this.R.addListener(this,"dblclick",a);return this},mousedown:function(a){this.R.addListener(this,"mousedown",a);return this},mouseup:function(a){this.R.addListener(this,"mouseup",a);return this},touchmove:function(a){this.R.addListener(this,"touchmove",a);return this},touchstart:function(a){this.R.addListener(this,"touchstart",a);return this},touchend:function(a){this.R.addListener(this,"touchend",a);return this},keyup:function(a){this.R.addListener(this,"keyup",a);return this},focus:function(a){this.R.addListener(this,"focus",a);return this},blur:function(a){this.R.addListener(this,"blur",a);return this},contextmenu:function(a){this.node.addEventListener?this.node.addEventListener("contextmenu",a,!0):this.R.addListener(this,"contextmenu",a);return this},stop:function(){d.removeFromArray(this.R.animations,this.an_translate);d.removeFromArray(this.R.animations,this.an_y);d.removeFromArray(this.R.animations,this.an_x)},length:function(){return this.node.childNodes.length},gradient:function(a,b,c){this.R.gradient(this,a,b,c)},pattern:function(a,b,c){a&&this.R.pattern(this,a,b,c)}})})();(function(){var d=window.AmCharts;d.SVGRenderer=d.Class({construct:function(a){this.D=a;this.animations=[]},create:function(a,b){return document.createElementNS(d.SVG_NS,b)},attr:function(a,b){for(var c in b)b.hasOwnProperty(c)&&this.setAttr(a,c,b[c])},setAttr:function(a,b,c){void 0!==c&&a.node.setAttribute(b,c)},animate:function(a,b,c,e,f){a.animationFinished=!1;var g=a.node;a["an_"+b]&&d.removeFromArray(this.animations,a["an_"+b]);"translate"==b?(g=(g=g.getAttribute("transform"))?String(g).substring(10,g.length-1):"0,0",g=g.split(", ").join(" "),g=g.split(" ").join(","),0===g&&(g="0,0")):g=Number(g.getAttribute(b));c={obj:a,frame:0,attribute:b,from:g,to:c,time:e,effect:f};this.animations.push(c);a["an_"+b]=c},update:function(){var a,b=this.animations;for(a=b.length-1;0<=a;a--){var c=b[a],e=c.time*d.updateRate,f=c.frame+1,g=c.obj,h=c.attribute,k,l,m;if(f<=e){c.frame++;if("translate"==h){k=c.from.split(",");h=Number(k[0]);k=Number(k[1]);isNaN(k)&&(k=0);l=c.to.split(",");m=Number(l[0]);l=Number(l[1]);m=0===m-h?m:Math.round(d[c.effect](0,f,h,m-h,e));c=0===l-k?l:Math.round(d[c.effect](0,f,k,l-k,e));h="transform";if(isNaN(m)||isNaN(c))continue;c="translate("+m+","+c+")"}else l=Number(c.from),k=Number(c.to),m=k-l,c=d[c.effect](0,f,l,m,e),isNaN(c)&&(c=k),0===m&&this.animations.splice(a,1);this.setAttr(g,h,c)}else"translate"==h?(l=c.to.split(","),m=Number(l[0]),l=Number(l[1]),g.translate(m,l)):(k=Number(c.to),this.setAttr(g,h,k)),g.animationFinished=!0,this.animations.splice(a,1)}},getBBox:function(a){if(a=a.node)try{return a.getBBox()}catch(b){}return{width:0,height:0,x:0,y:0}},path:function(a,b){a.node.setAttributeNS(d.SVG_XLINK,"xlink:href",b)},clipRect:function(a,b,c,e,f){var g=a.node,h=a.clipPath;h&&this.D.remove(h);var k=g.parentNode;k&&(g=document.createElementNS(d.SVG_NS,"clipPath"),h=d.getUniqueId(),g.setAttribute("id",h),this.D.rect(b,c,e,f,0,0,g),k.appendChild(g),b="#",d.baseHref&&!d.isIE&&(b=this.removeTarget(window.location.href)+b),this.setAttr(a,"clip-path","url("+b+h+")"),this.clipPathC++,a.clipPath=g)},text:function(a,b,c){var e=new d.AmDObject("text",this.D);a=String(a).split("\n");var f=d.removePx(b["font-size"]),g;for(g=0;g<a.length;g++){var h=this.create(null,"tspan");h.appendChild(document.createTextNode(a[g]));h.setAttribute("y",(f+2)*g+Math.round(f/2));h.setAttribute("x",0);e.node.appendChild(h)}e.node.setAttribute("y",Math.round(f/2));this.attr(e,b);this.D.addToContainer(e.node,c);return e},setText:function(a,b){var c=a.node;c&&(c.removeChild(c.firstChild),c.appendChild(document.createTextNode(b)))},move:function(a,b,c,e){isNaN(b)&&(b=0);isNaN(c)&&(c=0);b="translate("+b+","+c+")";e&&(b=b+" scale("+e+")");this.setAttr(a,"transform",b)},rotate:function(a,b){var c=a.node.getAttribute("transform"),e="rotate("+b+")";c&&(e=c+" "+e);this.setAttr(a,"transform",e)},set:function(a){var b=new d.AmDObject("g",this.D);this.D.container.appendChild(b.node);if(a){var c;for(c=0;c<a.length;c++)b.push(a[c])}return b},addListener:function(a,b,c){a.node["on"+b]=c},gradient:function(a,b,c,e){var f=a.node,g=a.grad;g&&this.D.remove(g);b=document.createElementNS(d.SVG_NS,b);g=d.getUniqueId();b.setAttribute("id",g);if(!isNaN(e)){var h=0,k=0,l=0,m=0;90==e?l=100:270==e?m=100:180==e?h=100:0===e&&(k=100);b.setAttribute("x1",h+"%");b.setAttribute("x2",k+"%");b.setAttribute("y1",l+"%");b.setAttribute("y2",m+"%")}for(e=0;e<c.length;e++)h=document.createElementNS(d.SVG_NS,"stop"),k=100*e/(c.length-1),0===e&&(k=0),h.setAttribute("offset",k+"%"),h.setAttribute("stop-color",c[e]),b.appendChild(h);f.parentNode.appendChild(b);c="#";d.baseHref&&!d.isIE&&(c=this.removeTarget(window.location.href)+c);f.setAttribute("fill","url("+c+g+")");a.grad=b},removeTarget:function(a){return a.split("#")[0]},pattern:function(a,b,c,e){var f=a.node;isNaN(c)&&(c=1);var g=a.patternNode;g&&this.D.remove(g);var g=document.createElementNS(d.SVG_NS,"pattern"),h=d.getUniqueId(),k=b;b.url&&(k=b.url);d.isAbsolute(k)||-1!=k.indexOf("data:image")||(k=e+k);e=Number(b.width);isNaN(e)&&(e=4);var l=Number(b.height);isNaN(l)&&(l=4);e/=c;l/=c;c=b.x;isNaN(c)&&(c=0);var m=-Math.random()*Number(b.randomX);isNaN(m)||(c=m);m=b.y;isNaN(m)&&(m=0);var n=-Math.random()*Number(b.randomY);isNaN(n)||(m=n);g.setAttribute("id",h);g.setAttribute("width",e);g.setAttribute("height",l);g.setAttribute("patternUnits","userSpaceOnUse");g.setAttribute("xlink:href",k);b.color&&(n=document.createElementNS(d.SVG_NS,"rect"),n.setAttributeNS(null,"height",e),n.setAttributeNS(null,"width",l),n.setAttributeNS(null,"fill",b.color),g.appendChild(n));this.D.image(k,0,0,e,l,g).translate(c,m);k="#";d.baseHref&&!d.isIE&&(k=this.removeTarget(window.location.href)+k);f.setAttribute("fill","url("+k+h+")");a.patternNode=g;f.parentNode.appendChild(g)},remove:function(a){a.clipPath&&this.D.remove(a.clipPath);a.grad&&this.D.remove(a.grad);a.patternNode&&this.D.remove(a.patternNode);this.D.remove(a.node)}})})();(function(){var d=window.AmCharts;d.AmChart=d.Class({construct:function(a){this.svgIcons=this.tapToActivate=!0;this.theme=a;this.classNamePrefix="amcharts";this.addClassNames=!1;this.version="3.21.5";d.addChart(this);this.createEvents("buildStarted","dataUpdated","init","rendered","drawn","failed","resized","animationFinished");this.height=this.width="100%";this.dataChanged=!0;this.chartCreated=!1;this.previousWidth=this.previousHeight=0;this.backgroundColor="#FFFFFF";this.borderAlpha=this.backgroundAlpha=0;this.color=this.borderColor="#000000";this.fontFamily="Verdana";this.fontSize=11;this.usePrefixes=!1;this.autoResize=!0;this.autoDisplay=!1;this.addCodeCredits=this.accessible=!0;this.touchStartTime=this.touchClickDuration=0;this.precision=-1;this.percentPrecision=2;this.decimalSeparator=".";this.thousandsSeparator=",";this.labels=[];this.allLabels=[];this.titles=[];this.marginRight=this.marginLeft=this.autoMarginOffset=0;this.timeOuts=[];this.creditsPosition="top-left";var b=document.createElement("div"),c=b.style;c.overflow="hidden";c.position="relative";c.textAlign="left";this.chartDiv=b;b=document.createElement("div");c=b.style;c.overflow="hidden";c.position="relative";c.textAlign="left";this.legendDiv=b;this.titleHeight=0;this.hideBalloonTime=150;this.handDrawScatter=2;this.cssScale=this.handDrawThickness=1;this.cssAngle=0;this.prefixesOfBigNumbers=[{number:1E3,prefix:"k"},{number:1E6,prefix:"M"},{number:1E9,prefix:"G"},{number:1E12,prefix:"T"},{number:1E15,prefix:"P"},{number:1E18,prefix:"E"},{number:1E21,prefix:"Z"},{number:1E24,prefix:"Y"}];this.prefixesOfSmallNumbers=[{number:1E-24,prefix:"y"},{number:1E-21,prefix:"z"},{number:1E-18,prefix:"a"},{number:1E-15,prefix:"f"},{number:1E-12,prefix:"p"},{number:1E-9,prefix:"n"},{number:1E-6,prefix:"\u03bc"},{number:.001,prefix:"m"}];this.panEventsEnabled=!0;this.product="amcharts";this.animations=[];this.balloon=new d.AmBalloon(this.theme);this.balloon.chart=this;this.processTimeout=0;this.processCount=1E3;this.animatable=[];this.langObj={};d.applyTheme(this,a,"AmChart")},drawChart:function(){0<this.realWidth&&0<this.realHeight&&(this.drawBackground(),this.redrawLabels(),this.drawTitles(),this.brr(),this.renderFix(),this.chartDiv&&(this.boundingRect=this.chartDiv.getBoundingClientRect()))},makeAccessible:function(a,b,c){this.accessible&&a&&(c&&a.setAttr("role",c),a.setAttr("aria-label",b))},drawBackground:function(){d.remove(this.background);var a=this.container,b=this.backgroundColor,c=this.backgroundAlpha,e=this.set;d.isModern||0!==c||(c=.001);var f=this.updateWidth();this.realWidth=f;var g=this.updateHeight();this.realHeight=g;b=d.polygon(a,[0,f-1,f-1,0],[0,0,g-1,g-1],b,c,1,this.borderColor,this.borderAlpha);d.setCN(this,b,"bg");this.background=b;e.push(b);if(b=this.backgroundImage)a=a.image(b,0,0,f,g),d.setCN(this,b,"bg-image"),this.bgImg=a,e.push(a)},drawTitles:function(a){var b=this.titles;this.titleHeight=0;if(d.ifArray(b)){var c=20,e;for(e=0;e<b.length;e++){var f=b[e],f=d.processObject(f,d.Title,this.theme);if(!1!==f.enabled){var g=f.color;void 0===g&&(g=this.color);var h=f.size;isNaN(h)&&(h=this.fontSize+2);isNaN(f.alpha);var k=this.marginLeft,l=!0;void 0!==f.bold&&(l=f.bold);g=d.wrappedText(this.container,f.text,g,this.fontFamily,h,"middle",l,this.realWidth-35-this.marginRight-k);g.translate(k+(this.realWidth-this.marginRight-k)/2,c);g.node.style.pointerEvents="none";f.sprite=g;void 0!==f.tabIndex&&g.setAttr("tabindex",f.tabIndex);d.setCN(this,g,"title");f.id&&d.setCN(this,g,"title-"+f.id);g.attr({opacity:f.alpha});c+=g.getBBox().height+
5;a?g.remove():this.freeLabelsSet.push(g)}}this.titleHeight=c-10}},write:function(a){var b=this;if(b.listeners)for(var c=0;c<b.listeners.length;c++){var e=b.listeners[c];b.addListener(e.event,e.method)}b.fire({type:"buildStarted",chart:b});b.afterWriteTO&&clearTimeout(b.afterWriteTO);0<b.processTimeout?b.afterWriteTO=setTimeout(function(){b.afterWrite.call(b,a)},b.processTimeout):b.afterWrite(a)},afterWrite:function(a){var b;if(b="object"!=typeof a?document.getElementById(a):a){for(;b.firstChild;)b.removeChild(b.firstChild);this.div=b;b.style.overflow="hidden";b.style.textAlign="left";a=this.chartDiv;var c=this.legendDiv,e=this.legend,f=c.style,g=a.style;this.measure();this.previousHeight=this.divRealHeight;this.previousWidth=this.divRealWidth;var h,k=document.createElement("div");h=k.style;h.position="relative";this.containerDiv=k;k.className=this.classNamePrefix+"-main-div";a.className=this.classNamePrefix+"-chart-div";b.appendChild(k);(b=this.exportConfig)&&d.AmExport&&!this.AmExport&&(this.AmExport=new d.AmExport(this,b));this.amExport&&d.AmExport&&(this.AmExport=d.extend(this.amExport,new d.AmExport(this),!0));this.AmExport&&this.AmExport.init&&this.AmExport.init();if(e){e=this.addLegend(e,e.divId);if(e.enabled)switch(f.left=null,f.top=null,f.right=null,g.left=null,g.right=null,g.top=null,f.position="relative",g.position="relative",h.width="100%",h.height="100%",e.position){case"bottom":k.appendChild(a);k.appendChild(c);break;case"top":k.appendChild(c);k.appendChild(a);break;case"absolute":f.position="absolute";g.position="absolute";void 0!==e.left&&(f.left=e.left+"px");void 0!==e.right&&(f.right=e.right+"px");void 0!==e.top&&(f.top=e.top+"px");void 0!==e.bottom&&(f.bottom=e.bottom+"px");e.marginLeft=0;e.marginRight=0;k.appendChild(a);k.appendChild(c);break;case"right":f.position="relative";g.position="absolute";k.appendChild(a);k.appendChild(c);break;case"left":f.position="absolute";g.position="relative";k.appendChild(a);k.appendChild(c);break;case"outside":k.appendChild(a)}else k.appendChild(a);this.prevLegendPosition=e.position}else k.appendChild(a);this.listenersAdded||(this.addListeners(),this.listenersAdded=!0);(this.mouseWheelScrollEnabled||this.mouseWheelZoomEnabled)&&d.addWheelListeners();this.initChart()}},createLabelsSet:function(){d.remove(this.labelsSet);this.labelsSet=this.container.set();this.freeLabelsSet.push(this.labelsSet)},initChart:function(){this.balloon=d.processObject(this.balloon,d.AmBalloon,this.theme);window.AmCharts_path&&(this.path=window.AmCharts_path);void 0===this.path&&(this.path=d.getPath());void 0===this.path&&(this.path="amcharts/");this.path=d.normalizeUrl(this.path);void 0===this.pathToImages&&(this.pathToImages=this.path+"images/");this.initHC||(d.callInitHandler(this),this.initHC=!0);d.applyLang(this.language,this);var a=this.numberFormatter;a&&(isNaN(a.precision)||(this.precision=a.precision),void 0!==a.thousandsSeparator&&(this.thousandsSeparator=a.thousandsSeparator),void 0!==a.decimalSeparator&&(this.decimalSeparator=a.decimalSeparator));(a=this.percentFormatter)&&!isNaN(a.precision)&&(this.percentPrecision=a.precision);this.nf={precision:this.precision,thousandsSeparator:this.thousandsSeparator,decimalSeparator:this.decimalSeparator};this.pf={precision:this.percentPrecision,thousandsSeparator:this.thousandsSeparator,decimalSeparator:this.decimalSeparator};this.destroy();(a=this.container)?(a.container.innerHTML="",a.width=this.realWidth,a.height=this.realHeight,a.addDefs(this),this.chartDiv.appendChild(a.container)):a=new d.AmDraw(this.chartDiv,this.realWidth,this.realHeight,this);this.container=a;this.extension=".png";this.svgIcons&&d.SVG&&(this.extension=".svg");this.checkDisplay();this.checkTransform(this.div);a.chart=this;d.VML||d.SVG?(a.handDrawn=this.handDrawn,a.handDrawScatter=this.handDrawScatter,a.handDrawThickness=this.handDrawThickness,d.remove(this.set),this.set=a.set(),d.remove(this.gridSet),this.gridSet=a.set(),d.remove(this.cursorLineSet),this.cursorLineSet=a.set(),d.remove(this.graphsBehindSet),this.graphsBehindSet=a.set(),d.remove(this.bulletBehindSet),this.bulletBehindSet=a.set(),d.remove(this.columnSet),this.columnSet=a.set(),d.remove(this.graphsSet),this.graphsSet=a.set(),d.remove(this.trendLinesSet),this.trendLinesSet=a.set(),d.remove(this.axesSet),this.axesSet=a.set(),d.remove(this.cursorSet),this.cursorSet=a.set(),d.remove(this.scrollbarsSet),this.scrollbarsSet=a.set(),d.remove(this.bulletSet),this.bulletSet=a.set(),d.remove(this.freeLabelsSet),this.freeLabelsSet=a.set(),d.remove(this.axesLabelsSet),this.axesLabelsSet=a.set(),d.remove(this.balloonsSet),this.balloonsSet=a.set(),d.remove(this.plotBalloonsSet),this.plotBalloonsSet=a.set(),d.remove(this.zoomButtonSet),this.zoomButtonSet=a.set(),d.remove(this.zbSet),this.zbSet=null,d.remove(this.linkSet),this.linkSet=a.set()):this.fire({type:"failed",chart:this})},premeasure:function(){var a=this.div;if(a){try{this.boundingRect=this.chartDiv.getBoundingClientRect()}catch(e){}var b=a.offsetWidth,c=a.offsetHeight;a.clientHeight&&(b=a.clientWidth,c=a.clientHeight);if(b!=this.mw||c!=this.mh)this.mw=b,this.mh=c,this.measure()}},measure:function(){var a=this.div;if(a){var b=this.chartDiv,c=a.offsetWidth,e=a.offsetHeight,f=this.container;a.clientHeight&&(c=a.clientWidth,e=a.clientHeight);var e=Math.round(e),c=Math.round(c),a=Math.round(d.toCoordinate(this.width,c)),g=Math.round(d.toCoordinate(this.height,e));(c!=this.previousWidth||e!=this.previousHeight)&&0<a&&0<g&&(b.style.width=a+"px",b.style.height=g+"px",b.style.padding=0,f&&f.setSize(a,g),this.balloon=d.processObject(this.balloon,d.AmBalloon,this.theme));this.balloon&&this.balloon.setBounds&&this.balloon.setBounds(2,2,a-2,g);this.updateWidth();this.balloon.chart=this;this.realWidth=a;this.realHeight=g;this.divRealWidth=c;this.divRealHeight=e}},checkDisplay:function(){if(this.autoDisplay&&this.container){var a=d.rect(this.container,10,10),b=a.getBBox();0===b.width&&0===b.height&&(this.divRealHeight=this.divRealWidth=this.realHeight=this.realWidth=0,this.previousWidth=this.previousHeight=NaN);a.remove()}},checkTransform:function(a){if(this.autoTransform&&window.getComputedStyle&&a){if(a.style){var b=window.getComputedStyle(a,null);if(b&&(b=b.getPropertyValue("-webkit-transform")||b.getPropertyValue("-moz-transform")||b.getPropertyValue("-ms-transform")||b.getPropertyValue("-o-transform")||b.getPropertyValue("transform"))&&"none"!==b){var c=b.split("(")[1].split(")")[0].split(","),b=c[0],c=c[1],b=Math.sqrt(b*b+c*c);isNaN(b)||(this.cssScale*=b)}}a.parentNode&&this.checkTransform(a.parentNode)}},destroy:function(){this.chartDiv.innerHTML="";this.clearTimeOuts();this.legend&&this.legend.destroy()},clearTimeOuts:function(){var a=this.timeOuts;if(a){var b;for(b=0;b<a.length;b++)clearTimeout(a[b])}this.timeOuts=[]},clear:function(a){try{document.removeEventListener("touchstart",this.docfn1,!0),document.removeEventListener("touchend",this.docfn2,!0)}catch(b){}d.callMethod("clear",[this.chartScrollbar,this.scrollbarV,this.scrollbarH,this.chartCursor]);this.chartCursor=this.scrollbarH=this.scrollbarV=this.chartScrollbar=null;this.clearTimeOuts();this.container&&(this.container.remove(this.chartDiv),this.container.remove(this.legendDiv));a||d.removeChart(this);if(a=this.div)for(;a.firstChild;)a.removeChild(a.firstChild);this.legend&&this.legend.destroy();this.AmExport&&this.AmExport.clear&&this.AmExport.clear()},setMouseCursor:function(a){"auto"==a&&d.isNN&&(a="default");this.chartDiv.style.cursor=a;this.legendDiv.style.cursor=a},redrawLabels:function(){this.labels=[];var a=this.allLabels;this.createLabelsSet();var b;for(b=0;b<a.length;b++)this.drawLabel(a[b])},drawLabel:function(a){var b=this;if(b.container&&!1!==a.enabled){a=d.processObject(a,d.Label,b.theme);var c=a.y,e=a.text,f=a.align,g=a.size,h=a.color,k=a.rotation,l=a.alpha,m=a.bold,n=d.toCoordinate(a.x,b.realWidth),c=d.toCoordinate(c,b.realHeight);n||(n=0);c||(c=0);void 0===h&&(h=b.color);isNaN(g)&&(g=b.fontSize);f||(f="start");"left"==f&&(f="start");"right"==f&&(f="end");"center"==f&&(f="middle",k?c=b.realHeight-c+c/2:n=b.realWidth/2-n);void 0===l&&(l=1);void 0===k&&(k=0);c+=g/2;e=d.text(b.container,e,h,b.fontFamily,g,f,m,l);e.translate(n,c);void 0!==a.tabIndex&&e.setAttr("tabindex",a.tabIndex);d.setCN(b,e,"label");a.id&&d.setCN(b,e,"label-"+a.id);0!==k&&e.rotate(k);a.url?(e.setAttr("cursor","pointer"),e.click(function(){d.getURL(a.url,b.urlTarget)})):e.node.style.pointerEvents="none";b.labelsSet.push(e);b.labels.push(e)}},addLabel:function(a,b,c,e,d,g,h,k,l,m){a={x:a,y:b,text:c,align:e,size:d,color:g,alpha:k,rotation:h,bold:l,url:m,enabled:!0};this.container&&this.drawLabel(a);this.allLabels.push(a)},clearLabels:function(){var a=this.labels,b;for(b=a.length-1;0<=b;b--)a[b].remove();this.labels=[];this.allLabels=[]},updateHeight:function(){var a=this.divRealHeight,b=this.legend;if(b){var c=this.legendDiv.offsetHeight,b=b.position;if("top"==b||"bottom"==b){a-=c;if(0>a||isNaN(a))a=0;this.chartDiv.style.height=a+"px"}}return a},updateWidth:function(){var a=this.divRealWidth,b=this.divRealHeight,c=this.legend;if(c){var e=this.legendDiv,d=e.offsetWidth;isNaN(c.width)||(d=c.width);c.ieW&&(d=c.ieW);var g=e.offsetHeight,e=e.style,h=this.chartDiv.style,k=c.position;if(("right"==k||"left"==k)&&void 0===c.divId){a-=d;if(0>a||isNaN(a))a=0;h.width=a+"px";this.balloon&&this.balloon.setBounds&&this.balloon.setBounds(2,2,a-2,this.realHeight);"left"==k?(h.left=d+"px",e.left="0px"):(h.left="0px",e.left=a+"px");b>g&&(e.top=(b-g)/2+"px")}}return a},getTitleHeight:function(){this.drawTitles(!0);return this.titleHeight},addTitle:function(a,b,c,e,d){isNaN(b)&&(b=this.fontSize+2);a={text:a,size:b,color:c,alpha:e,
bold:d,enabled:!0};this.titles.push(a);return a},handleWheel:function(a){var b=0;a||(a=window.event);a.wheelDelta?b=a.wheelDelta/120:a.detail&&(b=-a.detail/3);b&&this.handleWheelReal(b,a.shiftKey);a.preventDefault&&a.preventDefault()},handleWheelReal:function(){},handleDocTouchStart:function(){this.handleMouseMove();this.tmx=this.mouseX;this.tmy=this.mouseY;this.touchStartTime=(new Date).getTime()},handleDocTouchEnd:function(){-.5<this.tmx&&this.tmx<this.divRealWidth+1&&0<this.tmy&&this.tmy<this.divRealHeight?(this.handleMouseMove(),4>Math.abs(this.mouseX-this.tmx)&&4>Math.abs(this.mouseY-this.tmy)?(this.tapped=!0,this.panRequired&&this.panEventsEnabled&&this.chartDiv&&(this.chartDiv.style.msTouchAction="none",this.chartDiv.style.touchAction="none")):this.mouseIsOver||this.resetTouchStyle()):(this.tapped=!1,this.resetTouchStyle())},resetTouchStyle:function(){this.panEventsEnabled&&this.chartDiv&&(this.chartDiv.style.msTouchAction="auto",this.chartDiv.style.touchAction="auto")},checkTouchDuration:function(a){var b=this,c=(new Date).getTime();if(a)if(a.touches)b.isTouchEvent=!0;else if(!b.isTouchEvent)return!0;if(c-b.touchStartTime>b.touchClickDuration)return!0;setTimeout(function(){b.resetTouchDuration()},300)},resetTouchDuration:function(){this.isTouchEvent=!1},checkTouchMoved:function(){if(4<Math.abs(this.mouseX-this.tmx)||4<Math.abs(this.mouseY-this.tmy))return!0},addListeners:function(){var a=this,b=a.chartDiv;document.addEventListener?("ontouchstart"in document.documentElement&&(b.addEventListener("touchstart",function(b){a.handleTouchStart.call(a,b)},!0),b.addEventListener("touchmove",function(b){a.handleMouseMove.call(a,b)},!0),b.addEventListener("touchend",function(b){a.handleTouchEnd.call(a,b)},!0),a.docfn1=function(b){a.handleDocTouchStart.call(a,b)},a.docfn2=function(b){a.handleDocTouchEnd.call(a,b)},document.addEventListener("touchstart",a.docfn1,!0),document.addEventListener("touchend",a.docfn2,!0)),b.addEventListener("mousedown",function(b){a.mouseIsOver=!0;a.handleMouseMove.call(a,b);a.handleMouseDown.call(a,b);a.handleDocTouchStart.call(a,b)},!0),b.addEventListener("mouseover",function(b){a.handleMouseOver.call(a,b)},!0),b.addEventListener("mouseout",function(b){a.handleMouseOut.call(a,b)},!0),b.addEventListener("mouseup",function(b){a.handleDocTouchEnd.call(a,b)},!0)):(b.attachEvent("onmousedown",function(b){a.handleMouseDown.call(a,b)}),b.attachEvent("onmouseover",function(b){a.handleMouseOver.call(a,b)}),b.attachEvent("onmouseout",function(b){a.handleMouseOut.call(a,b)}))},dispDUpd:function(){this.skipEvents||(this.dispatchDataUpdated&&(this.dispatchDataUpdated=!1,this.fire({type:"dataUpdated",chart:this})),this.chartCreated||(this.chartCreated=!0,this.fire({type:"init",chart:this})),this.chartRendered||(this.fire({type:"rendered",chart:this}),this.chartRendered=!0),this.fire({type:"drawn",chart:this}));this.skipEvents=!1},validateSize:function(){var a=this;a.premeasure();a.checkDisplay();a.cssScale=1;a.cssAngle=0;a.checkTransform(a.div);if(a.divRealWidth!=a.previousWidth||a.divRealHeight!=a.previousHeight){var b=a.legend;if(0<a.realWidth&&0<a.realHeight){a.sizeChanged=!0;if(b){a.legendInitTO&&clearTimeout(a.legendInitTO);var c=setTimeout(function(){b.invalidateSize()},10);a.timeOuts.push(c);a.legendInitTO=c}a.marginsUpdated=!1;clearTimeout(a.initTO);c=setTimeout(function(){a.initChart()},10);a.timeOuts.push(c);a.initTO=c}a.renderFix();b&&b.renderFix&&b.renderFix();clearTimeout(a.resizedTO);a.resizedTO=setTimeout(function(){a.fire({type:"resized",chart:a})},10);a.previousHeight=a.divRealHeight;a.previousWidth=a.divRealWidth}},invalidateSize:function(){this.previousHeight=this.previousWidth=NaN;this.invalidateSizeReal()},invalidateSizeReal:function(){var a=this;a.marginsUpdated=!1;clearTimeout(a.validateTO);var b=setTimeout(function(){a.validateSize()},5);a.timeOuts.push(b);a.validateTO=b},validateData:function(a){this.chartCreated&&(this.dataChanged=!0,this.marginsUpdated=!1,this.initChart(a))},validateNow:function(a,b){this.initTO&&clearTimeout(this.initTO);a&&(this.dataChanged=!0,this.marginsUpdated=!1);this.skipEvents=b;this.chartRendered=!1;var c=this.legend;c&&c.position!=this.prevLegendPosition&&(this.previousWidth=this.mw=0,c.invalidateSize&&(c.invalidateSize(),this.validateSize()));this.write(this.div)},showItem:function(a){a.hidden=!1;this.initChart()},hideItem:function(a){a.hidden=!0;this.initChart()},hideBalloon:function(){var a=this;clearTimeout(a.hoverInt);clearTimeout(a.balloonTO);a.hoverInt=setTimeout(function(){a.hideBalloonReal.call(a)},a.hideBalloonTime)},cleanChart:function(){},hideBalloonReal:function(){var a=this.balloon;a&&a.hide&&a.hide()},showBalloon:function(a,b,c,e,d){var g=this;clearTimeout(g.balloonTO);clearTimeout(g.hoverInt);g.balloonTO=setTimeout(function(){g.showBalloonReal.call(g,a,b,c,e,d)},1)},showBalloonReal:function(a,b,c,e,d){this.handleMouseMove();var g=this.balloon;g.enabled&&(g.followCursor(!1),g.changeColor(b),!c||g.fixedPosition?(g.setPosition(e,d),isNaN(e)||isNaN(d)?g.followCursor(!0):g.followCursor(!1)):g.followCursor(!0),a&&g.showBalloon(a))},handleMouseOver:function(){this.outTO&&clearTimeout(this.outTO);d.resetMouseOver();this.mouseIsOver=!0},handleMouseOut:function(){var a=this;d.resetMouseOver();a.outTO&&clearTimeout(a.outTO);a.outTO=setTimeout(function(){a.handleMouseOutReal()},10)},handleMouseOutReal:function(){this.mouseIsOver=!1},handleMouseMove:function(a){a||(a=window.event);this.mouse2Y=this.mouse2X=NaN;var b,c,e,d;if(a){if(a.touches){var g=a.touches.item(1);g&&this.panEventsEnabled&&this.boundingRect&&(e=g.clientX-this.boundingRect.left,d=g.clientY-this.boundingRect.top);a=a.touches.item(0);if(!a)return}else this.wasTouched=!1;this.boundingRect&&a.clientX&&(b=a.clientX-this.boundingRect.left,c=a.clientY-this.boundingRect.top);isNaN(e)?this.mouseX=b:(this.mouseX=Math.min(b,e),this.mouse2X=Math.max(b,e));isNaN(d)?this.mouseY=c:(this.mouseY=Math.min(c,d),this.mouse2Y=Math.max(c,d));this.autoTransform&&(this.mouseX/=this.cssScale,this.mouseY/=this.cssScale)}},handleTouchStart:function(a){this.hideBalloonReal();a&&(a.touches&&this.tapToActivate&&!this.tapped||!this.panRequired)||(this.handleMouseMove(a),this.handleMouseDown(a))},handleTouchEnd:function(a){this.wasTouched=!0;this.handleMouseMove(a);d.resetMouseOver();this.handleReleaseOutside(a)},handleReleaseOutside:function(){this.handleDocTouchEnd.call(this)},handleMouseDown:function(a){d.resetMouseOver();this.mouseIsOver=!0;a&&a.preventDefault&&(this.panEventsEnabled?a.preventDefault():a.touches||a.preventDefault())},addLegend:function(a,b){a=d.processObject(a,d.AmLegend,this.theme);a.divId=b;a.ieW=0;var c;c="object"!=typeof b&&b?document.getElementById(b):b;this.legend=a;a.chart=this;c?(a.div=c,a.position="outside",a.autoMargins=!1):a.div=this.legendDiv;return a},removeLegend:function(){this.legend=void 0;this.previousWidth=0;this.legendDiv.innerHTML=""},handleResize:function(){(d.isPercents(this.width)||d.isPercents(this.height))&&this.invalidateSizeReal();this.renderFix()},renderFix:function(){if(!d.VML){var a=this.container;a&&a.renderFix()}},getSVG:function(){if(d.hasSVG)return this.container},animate:function(a,b,c,e,f,g,h){a["an_"+b]&&d.removeFromArray(this.animations,a["an_"+b]);c={obj:a,frame:0,attribute:b,from:c,to:e,time:f,effect:g,suffix:h};a["an_"+b]=c;this.animations.push(c);return c},setLegendData:function(a){var b=this.legend;b&&b.setData(a)},stopAnim:function(a){d.removeFromArray(this.animations,a)},updateAnimations:function(){var a;this.container&&this.container.update();if(this.animations)for(a=this.animations.length-1;0<=a;a--){var b=this.animations[a],c=d.updateRate*b.time,e=b.frame+1,f=b.obj,g=b.attribute;if(e<=c){b.frame++;var h=Number(b.from),k=Number(b.to)-h,c=d[b.effect](0,e,h,k,c);0===k?(this.animations.splice(a,1),f.node.style[g]=Number(b.to)+b.suffix):f.node.style[g]=c+b.suffix}else f.node.style[g]=Number(b.to)+b.suffix,f.animationFinished=!0,this.animations.splice(a,1)}},update:function(){this.updateAnimations();var a=this.animatable;if(0<a.length){for(var b=!0,c=a.length-1;0<=c;c--){var e=a[c];e&&(e.animationFinished?a.splice(c,1):b=!1)}b&&(this.fire({type:"animationFinished",chart:this}),this.animatable=[])}},inIframe:function(){try{return window.self!==window.top}catch(a){return!0}},brr:function(){if(!this.hideCredits){var a="amcharts.com",b=window.location.hostname.split("."),c;2<=b.length&&(c=b[b.length-2]+"."+b[b.length-1]);this.amLink&&(b=this.amLink.parentNode)&&b.removeChild(this.amLink);b=this.creditsPosition;if(c!=a||!0===this.inIframe()){var a="http://www."+a,e=c=0,d=this.realWidth,g=this.realHeight,h=this.type;if("serial"==h||"xy"==h||"gantt"==h)c=this.marginLeftReal,e=this.marginTopReal,d=c+this.plotAreaWidth,g=e+this.plotAreaHeight;var h=a+"/javascript-charts/",k="JavaScript charts",l="JS chart by amCharts";"ammap"==this.product&&(h=a+"/javascript-maps/",k="Interactive JavaScript maps",l="JS map by amCharts");a=document.createElement("a");l=document.createTextNode(l);a.setAttribute("href",h);a.setAttribute("title",k);this.urlTarget&&a.setAttribute("target",this.urlTarget);a.appendChild(l);this.chartDiv.appendChild(a);this.amLink=a;h=a.style;h.position="absolute";h.textDecoration="none";h.color=this.color;h.fontFamily=this.fontFamily;h.fontSize="11px";h.opacity=.7;h.display="block";var k=a.offsetWidth,a=a.offsetHeight,l=5+c,m=e+5;"bottom-left"==b&&(l=5+c,m=g-a-3);"bottom-right"==b&&(l=d-k-5,m=g-a-3);"top-right"==b&&(l=d-k-5,m=e+5);h.left=l+"px";h.top=m+"px"}}}});d.Slice=d.Class({construct:function(){}});d.SerialDataItem=d.Class({construct:function(){}});d.GraphDataItem=d.Class({construct:function(){}});d.Guide=d.Class({construct:function(a){this.cname="Guide";d.applyTheme(this,a,this.cname)}});d.Title=d.Class({construct:function(a){this.cname="Title";d.applyTheme(this,a,this.cname)}});d.Label=d.Class({construct:function(a){this.cname="Label";d.applyTheme(this,a,this.cname)}})})();(function(){var d=window.AmCharts;d.AmBalloon=d.Class({construct:function(a){this.cname="AmBalloon";this.enabled=!0;this.fillColor="#FFFFFF";this.fillAlpha=.8;this.borderThickness=2;this.borderColor="#FFFFFF";this.borderAlpha=1;this.cornerRadius=0;this.maxWidth=220;this.horizontalPadding=8;this.verticalPadding=4;this.pointerWidth=6;this.pointerOrientation="V";this.color="#000000";this.adjustBorderColor=!0;this.show=this.follow=this.showBullet=!1;this.bulletSize=3;this.shadowAlpha=.4;this.shadowColor="#000000";this.fadeOutDuration=this.animationDuration=.3;this.fixedPosition=!0;this.offsetY=6;this.offsetX=1;this.textAlign="center";this.disableMouseEvents=!0;this.deltaSignX=this.deltaSignY=1;d.isModern||(this.offsetY*=1.5);this.sdy=this.sdx=0;d.applyTheme(this,a,this.cname)},draw:function(){var a=this.pointToX,b=this.pointToY;d.isModern||(this.drop=!1);var c=this.chart;d.VML&&(this.fadeOutDuration=0);this.xAnim&&c.stopAnim(this.xAnim);this.yAnim&&c.stopAnim(this.yAnim);this.sdy=this.sdx=0;if(!isNaN(a)){var e=this.follow,f=c.container,g=this.set;d.remove(g);this.removeDiv();g=f.set();g.node.style.pointerEvents="none";this.set=g;this.mainSet?(this.mainSet.push(this.set),this.sdx=this.mainSet.x,this.sdy=this.mainSet.y):c.balloonsSet.push(g);if(this.show){var h=this.l,k=this.t,l=this.r,m=this.b,n=this.balloonColor,p=this.fillColor,t=this.borderColor,r=p;void 0!=n&&(this.adjustBorderColor?r=t=n:p=n);var q=this.horizontalPadding,y=this.verticalPadding,B=this.pointerWidth,u=this.pointerOrientation,w=this.cornerRadius,v=c.fontFamily,A=this.fontSize;void 0==A&&(A=c.fontSize);var n=document.createElement("div"),C=c.classNamePrefix;n.className=C+"-balloon-div";this.className&&(n.className=n.className+" "+C+"-balloon-div-"+this.className);C=n.style;this.disableMouseEvents&&(C.pointerEvents="none");C.position="absolute";var x=this.minWidth,z=document.createElement("div");n.appendChild(z);var F=z.style;isNaN(x)||(F.minWidth=x-2*q+"px");F.textAlign=this.textAlign;F.maxWidth=this.maxWidth+"px";F.fontSize=A+"px";F.color=this.color;F.fontFamily=v;z.innerHTML=this.text;c.chartDiv.appendChild(n);this.textDiv=n;var F=n.offsetWidth,E=n.offsetHeight;n.clientHeight&&(F=n.clientWidth,E=n.clientHeight);v=E+2*y;z=F+2*q;!isNaN(x)&&z<x&&(z=x);window.opera&&(v+=2);var H=!1,A=this.offsetY;c.handDrawn&&(A+=c.handDrawScatter+2);"H"!=u?(x=a-z/2,b<k+v+10&&"down"!=u?(H=!0,e&&(b+=A),A=b+B,this.deltaSignY=-1):(e&&(b-=A),A=b-v-B,this.deltaSignY=1)):(2*B>v&&(B=v/2),A=b-v/2,a<h+(l-h)/2?(x=a+B,this.deltaSignX=-1):(x=a-z-B,this.deltaSignX=
1));A+v>=m&&(A=m-v);A<k&&(A=k);x<h&&(x=h);x+z>l&&(x=l-z);var k=A+y,m=x+q,G=this.shadowAlpha,D=this.shadowColor,q=this.borderThickness,K=this.bulletSize,J,y=this.fillAlpha,L=this.borderAlpha;this.showBullet&&(J=d.circle(f,K,r,y),g.push(J));this.drop?(h=z/1.6,l=0,"V"==u&&(u="down"),"H"==u&&(u="left"),"down"==u&&(x=a+1,A=b-h-h/3),"up"==u&&(l=180,x=a+1,A=b+h+h/3),"left"==u&&(l=270,x=a+h+h/3+2,A=b),"right"==u&&(l=90,x=a-h-h/3+2,A=b),k=A-E/2+1,m=x-F/2-1,p=d.drop(f,h,l,p,y,q,t,L)):0<w||0===B?(0<G&&(a=d.rect(f,z,v,p,0,q+1,D,G,w),d.isModern?a.translate(1,1):a.translate(4,4),g.push(a)),p=d.rect(f,z,v,p,y,q,t,L,w)):(r=[],w=[],"H"!=u?(h=a-x,h>z-B&&(h=z-B),h<B&&(h=B),r=[0,h-B,a-x,h+B,z,z,0,0],w=H?[0,0,b-A,0,0,v,v,0]:[v,v,b-A,v,v,0,0,v]):(u=b-A,u>v-B&&(u=v-B),u<B&&(u=B),w=[0,u-B,b-A,u+B,v,v,0,0],r=a<h+(l-h)/2?[0,0,x<a?0:a-x,0,0,z,z,0]:[z,z,x+z>a?z:a-x,z,z,0,0,z]),0<G&&(a=d.polygon(f,r,w,p,0,q,D,G),a.translate(1,1),g.push(a)),p=d.polygon(f,r,w,p,y,q,t,L));this.bg=p;g.push(p);p.toFront();d.setCN(c,p,"balloon-bg");
this.className&&d.setCN(c,p,"balloon-bg-"+this.className);f=1*this.deltaSignX;m+=this.sdx;k+=this.sdy;C.left=m+"px";C.top=k+"px";g.translate(x-f,A,1,!0);p=p.getBBox();this.bottom=A+v+1;this.yPos=p.y+A;J&&J.translate(this.pointToX-x+f,b-A);b=this.animationDuration;0<this.animationDuration&&!e&&!isNaN(this.prevX)&&(g.translate(this.prevX,this.prevY,NaN,!0),g.animate({translate:x-f+","+A},b,"easeOutSine"),n&&(C.left=this.prevTX+"px",C.top=this.prevTY+"px",this.xAnim=c.animate({node:n},"left",this.prevTX,m,b,"easeOutSine","px"),this.yAnim=c.animate({node:n},"top",this.prevTY,k,b,"easeOutSine","px")));this.prevX=x-f;this.prevY=A;this.prevTX=m;this.prevTY=k}}},fixPrevious:function(){this.rPrevX=this.prevX;this.rPrevY=this.prevY;this.rPrevTX=this.prevTX;this.rPrevTY=this.prevTY},restorePrevious:function(){this.prevX=this.rPrevX;this.prevY=this.rPrevY;this.prevTX=this.rPrevTX;this.prevTY=this.rPrevTY},followMouse:function(){if(this.follow&&this.show){var a=this.chart.mouseX-this.offsetX*this.deltaSignX-
this.sdx,b=this.chart.mouseY-this.sdy;this.pointToX=a;this.pointToY=b;if(a!=this.previousX||b!=this.previousY)if(this.previousX=a,this.previousY=b,0===this.cornerRadius)this.draw();else{var c=this.set;if(c){var e=c.getBBox(),a=a-e.width/2,d=b-e.height-10;a<this.l&&(a=this.l);a>this.r-e.width&&(a=this.r-e.width);d<this.t&&(d=b+10);c.translate(a,d);b=this.textDiv.style;b.left=a+this.horizontalPadding+"px";b.top=d+this.verticalPadding+"px"}}}},changeColor:function(a){this.balloonColor=a},setBounds:function(a,b,c,e){this.l=a;this.t=b;this.r=c;this.b=e;this.destroyTO&&clearTimeout(this.destroyTO)},showBalloon:function(a){if(this.text!=a||this.positionChanged)this.text=a,this.isHiding=!1,this.show=!0,this.destroyTO&&clearTimeout(this.destroyTO),a=this.chart,this.fadeAnim1&&a.stopAnim(this.fadeAnim1),this.fadeAnim2&&a.stopAnim(this.fadeAnim2),this.draw(),this.positionChanged=!1},hide:function(a){var b=this;b.text=void 0;isNaN(a)&&(a=b.fadeOutDuration);var c=b.chart;if(0<a&&!b.isHiding){b.isHiding=!0;b.destroyTO&&clearTimeout(b.destroyTO);b.destroyTO=setTimeout(function(){b.destroy.call(b)},1E3*a);b.follow=!1;b.show=!1;var e=b.set;e&&(e.setAttr("opacity",b.fillAlpha),b.fadeAnim1=e.animate({opacity:0},a,"easeInSine"));b.textDiv&&(b.fadeAnim2=c.animate({node:b.textDiv},"opacity",1,0,a,"easeInSine",""))}else b.show=!1,b.follow=!1,b.destroy()},setPosition:function(a,b){if(a!=this.pointToX||b!=this.pointToY)this.previousX=this.pointToX,this.previousY=this.pointToY,this.pointToX=a,this.pointToY=b,this.positionChanged=!0},followCursor:function(a){var b=this;b.follow=a;clearInterval(b.interval);var c=b.chart.mouseX-b.sdx,e=b.chart.mouseY-b.sdy;!isNaN(c)&&a&&(b.pointToX=c-b.offsetX*b.deltaSignX,b.pointToY=e,b.followMouse(),b.interval=setInterval(function(){b.followMouse.call(b)},40))},removeDiv:function(){if(this.textDiv){var a=this.textDiv.parentNode;a&&a.removeChild(this.textDiv)}},destroy:function(){clearInterval(this.interval);d.remove(this.set);this.removeDiv();this.set=null}})})();(function(){var d=window.AmCharts;d.circle=function(a,b,c,e,f,g,h,k,l){0>=b&&(b=.001);if(void 0==f||0===f)f=.01;void 0===g&&(g="#000000");void 0===h&&(h=0);e={fill:c,stroke:g,"fill-opacity":e,"stroke-width":f,"stroke-opacity":h};a=isNaN(l)?a.circle(0,0,b).attr(e):a.ellipse(0,0,b,l).attr(e);k&&a.gradient("radialGradient",[c,d.adjustLuminosity(c,-.6)]);return a};d.text=function(a,b,c,e,f,g,h,k){g||(g="middle");"right"==g&&(g="end");"left"==g&&(g="start");isNaN(k)&&(k=1);void 0!==b&&(b=String(b),d.isIE&&!d.isModern&&(b=b.replace("&amp;","&"),b=b.replace("&","&amp;")));c={fill:c,"font-family":e,"font-size":f+"px",opacity:k};!0===h&&(c["font-weight"]="bold");c["text-anchor"]=g;return a.text(b,c)};d.polygon=function(a,b,c,e,f,g,h,k,l,m,n){isNaN(g)&&(g=.01);isNaN(k)&&(k=f);var p=e,t=!1;"object"==typeof p&&1<p.length&&(t=!0,p=p[0]);void 0===h&&(h=p);f={fill:p,stroke:h,"fill-opacity":f,"stroke-width":g,"stroke-opacity":k};void 0!==n&&0<n&&(f["stroke-dasharray"]=n);n=d.dx;g=d.dy;a.handDrawn&&(c=d.makeHD(b,c,a.handDrawScatter),b=c[0],c=c[1]);h=Math.round;m&&(b[r]=d.roundTo(b[r],5),c[r]=d.roundTo(c[r],5),h=Number);k="M"+(h(b[0])+n)+","+(h(c[0])+g);for(var r=1;r<b.length;r++)m&&(b[r]=d.roundTo(b[r],5),c[r]=d.roundTo(c[r],5)),k+=" L"+(h(b[r])+n)+","+(h(c[r])+g);a=a.path(k+" Z").attr(f);t&&a.gradient("linearGradient",e,l);return a};d.rect=function(a,b,c,e,f,g,h,k,l,m,n){if(isNaN(b)||isNaN(c))return a.set();isNaN(g)&&(g=0);void 0===l&&(l=0);void 0===m&&(m=270);isNaN(f)&&(f=0);var p=e,t=!1;"object"==typeof p&&(p=p[0],t=!0);void 0===h&&(h=p);void 0===k&&(k=f);b=Math.round(b);c=Math.round(c);var r=0,q=0;0>b&&(b=Math.abs(b),r=-b);0>c&&(c=Math.abs(c),q=-c);r+=d.dx;q+=d.dy;f={fill:p,stroke:h,"fill-opacity":f,"stroke-opacity":k};void 0!==n&&0<n&&(f["stroke-dasharray"]=n);a=a.rect(r,q,b,c,l,g).attr(f);t&&a.gradient("linearGradient",e,m);return a};d.bullet=function(a,b,c,e,f,g,h,k,l,m,n,p,t){var r;"circle"==b&&(b="round");switch(b){case"round":r=d.circle(a,c/2,e,f,g,h,k);break;case"square":r=d.polygon(a,[-c/
2,c/2,c/2,-c/2],[c/2,c/2,-c/2,-c/2],e,f,g,h,k,m-180,void 0,t);break;case"rectangle":r=d.polygon(a,[-c,c,c,-c],[c/2,c/2,-c/2,-c/2],e,f,g,h,k,m-180,void 0,t);break;case"diamond":r=d.polygon(a,[-c/2,0,c/2,0],[0,-c/2,0,c/2],e,f,g,h,k);break;case"triangleUp":r=d.triangle(a,c,0,e,f,g,h,k);break;case"triangleDown":r=d.triangle(a,c,180,e,f,g,h,k);break;case"triangleLeft":r=d.triangle(a,c,270,e,f,g,h,k);break;case"triangleRight":r=d.triangle(a,c,90,e,f,g,h,k);break;case"bubble":r=d.circle(a,c/2,e,f,g,h,k,!0);break;case"line":r=d.line(a,[-c/2,c/2],[0,0],e,f,g,h,k);break;case"yError":r=a.set();r.push(d.line(a,[0,0],[-c/2,c/2],e,f,g));r.push(d.line(a,[-l,l],[-c/2,-c/2],e,f,g));r.push(d.line(a,[-l,l],[c/2,c/2],e,f,g));break;case"xError":r=a.set(),r.push(d.line(a,[-c/2,c/2],[0,0],e,f,g)),r.push(d.line(a,[-c/2,-c/2],[-l,l],e,f,g)),r.push(d.line(a,[c/2,c/2],[-l,l],e,f,g))}r&&r.pattern(n,NaN,p);return r};d.triangle=function(a,b,c,e,d,g,h,k){if(void 0===g||0===g)g=1;void 0===h&&(h="#000");void 0===k&&(k=0);e={fill:e,stroke:h,"fill-opacity":d,"stroke-width":g,"stroke-opacity":k};b/=2;var l;0===c&&(l=" M"+-b+","+b+" L0,"+-b+" L"+b+","+b+" Z");180==c&&(l=" M"+-b+","+-b+" L0,"+b+" L"+b+","+-b+" Z");90==c&&(l=" M"+-b+","+-b+" L"+b+",0 L"+-b+","+b+" Z");270==c&&(l=" M"+-b+",0 L"+b+","+b+" L"+b+","+-b+" Z");return a.path(l).attr(e)};d.line=function(a,b,c,e,f,g,h,k,l,m,n){if(a.handDrawn&&!n)return d.handDrawnLine(a,b,c,e,f,g,h,k,l,m,n);g={fill:"none","stroke-width":g};void 0!==h&&0<h&&(g["stroke-dasharray"]=h);isNaN(f)||(g["stroke-opacity"]=f);e&&(g.stroke=e);e=Math.round;m&&(e=Number,b[0]=d.roundTo(b[0],5),c[0]=d.roundTo(c[0],5));m=d.dx;f=d.dy;h="M"+(e(b[0])+m)+","+(e(c[0])+f);for(k=1;k<b.length;k++)b[k]=d.roundTo(b[k],5),c[k]=d.roundTo(c[k],5),h+=" L"+(e(b[k])+m)+","+(e(c[k])+f);if(d.VML)return a.path(h,void 0,!0).attr(g);l&&(h+=" M0,0 L0,0");return a.path(h).attr(g)};d.makeHD=function(a,b,c){for(var e=[],d=[],g=1;g<a.length;g++)for(var h=Number(a[g-1]),k=Number(b[g-1]),l=Number(a[g]),m=Number(b[g]),n=Math.round(Math.sqrt(Math.pow(l-h,2)+Math.pow(m-k,2))/50)+1,l=(l-h)/n,m=(m-k)/n,p=0;p<=n;p++){var t=k+p*m+Math.random()*c;e.push(h+p*l+Math.random()*c);d.push(t)}return[e,d]};d.handDrawnLine=function(a,b,c,e,f,g,h,k,l,m){var n,p=a.set();for(n=1;n<b.length;n++)for(var t=[b[n-1],b[n]],r=[c[n-1],c[n]],r=d.makeHD(t,r,a.handDrawScatter),t=r[0],r=r[1],q=1;q<t.length;q++)p.push(d.line(a,[t[q-1],t[q]],[r[q-1],r[q]],e,f,g+Math.random()*a.handDrawThickness-a.handDrawThickness/2,h,k,l,m,!0));return p};d.doNothing=
function(a){return a};d.drop=function(a,b,c,e,d,g,h,k){var l=1/180*Math.PI,m=c-20,n=Math.sin(m*l)*b,p=Math.cos(m*l)*b,t=Math.sin((m+40)*l)*b,r=Math.cos((m+40)*l)*b,q=.8*b,y=-b/3,B=b/3;0===c&&(y=-y,B=0);180==c&&(B=0);90==c&&(y=0);270==c&&(y=0,B=-B);c={fill:e,stroke:h,"stroke-width":g,"stroke-opacity":k,"fill-opacity":d};b="M"+n+","+p+" A"+b+","+b+",0,1,1,"+t+","+r+(" A"+q+","+q+",0,0,0,"+(Math.sin((m+20)*l)*b+B)+","+(Math.cos((m+20)*l)*b+y));b+=" A"+q+","+q+",0,0,0,"+n+","+p;return a.path(b,void 0,void 0,"1000,1000").attr(c)};d.wedge=function(a,b,c,e,f,g,h,k,l,m,n,p,t,r){var q=Math.round;g=q(g);h=q(h);k=q(k);var y=q(h/g*k),B=d.VML,u=359.5+g/100;359.94<u&&(u=359.94);f>=u&&(f=u);var w=1/180*Math.PI,u=b+Math.sin(e*w)*k,v=c-Math.cos(e*w)*y,A=b+Math.sin(e*w)*g,C=c-Math.cos(e*w)*h,x=b+Math.sin((e+f)*w)*g,z=c-Math.cos((e+f)*w)*h,F=b+Math.sin((e+f)*w)*k,w=c-Math.cos((e+f)*w)*y,E={fill:d.adjustLuminosity(m.fill,-.2),"stroke-opacity":0,"fill-opacity":m["fill-opacity"]},H=0;180<Math.abs(f)&&(H=1);e=a.set();var G;B&&(u=q(10*u),A=q(10*A),x=q(10*x),F=q(10*F),v=q(10*v),C=q(10*C),z=q(10*z),w=q(10*w),b=q(10*b),l=q(10*l),c=q(10*c),g*=10,h*=10,k*=10,y*=10,1>Math.abs(f)&&1>=Math.abs(x-A)&&1>=Math.abs(z-C)&&(G=!0));f="";var D;p&&(E["fill-opacity"]=0,E["stroke-opacity"]=m["stroke-opacity"]/2,E.stroke=m.stroke);if(0<l){D=" M"+u+","+(v+l)+" L"+A+","+(C+l);B?(G||(D+=" A"+(b-g)+","+(l+c-h)+","+(b+g)+","+(l+c+h)+","+A+","+(C+l)+","+x+","+(z+l)),D+=" L"+F+","+(w+l),0<k&&(G||(D+=" B"+(b-k)+","+(l+c-y)+","+(b+k)+","+
(l+c+y)+","+F+","+(l+w)+","+u+","+(l+v)))):(D+=" A"+g+","+h+",0,"+H+",1,"+x+","+(z+l)+" L"+F+","+(w+l),0<k&&(D+=" A"+k+","+y+",0,"+H+",0,"+u+","+(v+l)));D+=" Z";var K=l;B&&(K/=10);for(var J=0;J<K;J+=10){var L=a.path(D,void 0,void 0,"1000,1000").attr(E);e.push(L);L.translate(0,-J)}D=a.path(" M"+u+","+v+" L"+u+","+(v+l)+" L"+A+","+(C+l)+" L"+A+","+C+" L"+u+","+v+" Z",void 0,void 0,"1000,1000").attr(E);l=a.path(" M"+x+","+z+" L"+x+","+(z+l)+" L"+F+","+(w+l)+" L"+F+","+w+" L"+x+","+z+" Z",void 0,void 0,"1000,1000").attr(E);e.push(D);e.push(l)}B?(G||(f=" A"+q(b-g)+","+q(c-h)+","+q(b+g)+","+q(c+h)+","+q(A)+","+q(C)+","+q(x)+","+q(z)),h=" M"+q(u)+","+q(v)+" L"+q(A)+","+q(C)+f+" L"+q(F)+","+q(w)):h=" M"+u+","+v+" L"+A+","+C+(" A"+g+","+h+",0,"+H+",1,"+x+","+z)+" L"+F+","+w;0<k&&(B?G||(h+=" B"+(b-k)+","+(c-y)+","+(b+k)+","+(c+y)+","+F+","+w+","+u+","+v):h+=" A"+k+","+y+",0,"+H+",0,"+u+","+v);a.handDrawn&&(k=d.line(a,[u,A],[v,C],m.stroke,m.thickness*Math.random()*a.handDrawThickness,m["stroke-opacity"]),e.push(k));a=a.path(h+" Z",void 0,void 0,"1000,1000").attr(m);if(n){k=[];for(y=0;y<n.length;y++)k.push(d.adjustLuminosity(m.fill,n[y]));"radial"!=r||d.isModern||(k=[]);0<k.length&&a.gradient(r+"Gradient",k)}d.isModern&&"radial"==r&&a.grad&&(a.grad.setAttribute("gradientUnits","userSpaceOnUse"),a.grad.setAttribute("r",g),a.grad.setAttribute("cx",b),a.grad.setAttribute("cy",c));a.pattern(p,NaN,t);e.wedge=a;e.push(a);return e};d.rgb2hex=function(a){return(a=a.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))&&4===a.length?"#"+("0"+parseInt(a[1],10).toString(16)).slice(-2)+("0"+parseInt(a[2],10).toString(16)).slice(-2)+("0"+parseInt(a[3],10).toString(16)).slice(-2):""};d.adjustLuminosity=function(a,b){a&&-1!=a.indexOf("rgb")&&(a=d.rgb2hex(a));a=String(a).replace(/[^0-9a-f]/gi,"");6>a.length&&(a=String(a[0])+String(a[0])+String(a[1])+String(a[1])+String(a[2])+String(a[2]));b=b||0;var c="#",e,f;for(f=0;3>f;f++)e=parseInt(a.substr(2*f,2),16),e=Math.round(Math.min(Math.max(0,e+e*b),255)).toString(16),c+=("00"+
e).substr(e.length);return c}})();(function(){var d=window.AmCharts;d.AmLegend=d.Class({construct:function(a){this.enabled=!0;this.cname="AmLegend";this.createEvents("rollOverMarker","rollOverItem","rollOutMarker","rollOutItem","showItem","hideItem","clickMarker","clickLabel");this.position="bottom";this.borderColor=this.color="#000000";this.borderAlpha=0;this.markerLabelGap=5;this.verticalGap=10;this.align="left";this.horizontalGap=0;this.spacing=10;this.markerDisabledColor="#AAB3B3";this.markerType="square";this.markerSize=16;this.markerBorderThickness=this.markerBorderAlpha=1;this.marginBottom=this.marginTop=0;this.marginLeft=this.marginRight=20;this.autoMargins=!0;this.valueWidth=50;this.switchable=!0;this.switchType="x";this.switchColor="#FFFFFF";this.rollOverColor="#CC0000";this.reversedOrder=!1;this.labelText="[[title]]";this.valueText="[[value]]";this.accessibleLabel="[[title]]";this.useMarkerColorForLabels=!1;this.rollOverGraphAlpha=1;this.textClickEnabled=!1;this.equalWidths=!0;this.backgroundColor="#FFFFFF";this.backgroundAlpha=0;this.useGraphSettings=!1;this.showEntries=!0;this.labelDx=0;d.applyTheme(this,a,this.cname)},setData:function(a){this.legendData=a;this.invalidateSize()},invalidateSize:function(){this.destroy();this.entries=[];this.valueLabels=[];var a=this.legendData;this.enabled&&(d.ifArray(a)||d.ifArray(this.data))&&this.drawLegend()},drawLegend:function(){var a=this.chart,b=this.position,c=this.width,e=a.divRealWidth,f=a.divRealHeight,g=this.div,h=this.legendData;this.data&&(h=this.combineLegend?this.legendData.concat(this.data):this.data);isNaN(this.fontSize)&&(this.fontSize=a.fontSize);this.maxColumnsReal=this.maxColumns;if("right"==b||"left"==b)this.maxColumnsReal=1,this.autoMargins&&(this.marginLeft=this.marginRight=10);else if(this.autoMargins){this.marginRight=a.marginRight;this.marginLeft=a.marginLeft;var k=a.autoMarginOffset;"bottom"==b?(this.marginBottom=k,this.marginTop=0):(this.marginTop=k,this.marginBottom=0)}c=void 0!==c?d.toCoordinate(c,e):"right"!=b&&"left"!=b?a.realWidth:0<this.ieW?this.ieW:a.realWidth;"outside"==b?(c=g.offsetWidth,f=g.offsetHeight,g.clientHeight&&(c=g.clientWidth,f=g.clientHeight)):(isNaN(c)||(g.style.width=c+"px"),g.className="amChartsLegend "+a.classNamePrefix+"-legend-div");this.divWidth=c;(b=this.container)?(b.container.innerHTML="",g.appendChild(b.container),b.width=c,b.height=f,b.setSize(c,f),b.addDefs(a)):b=new d.AmDraw(g,c,f,a);this.container=b;this.lx=0;this.ly=8;f=this.markerSize;f>this.fontSize&&(this.ly=f/2-1);0<f&&(this.lx+=f+this.markerLabelGap);this.titleWidth=0;if(f=this.title)f=d.text(this.container,f,this.color,a.fontFamily,this.fontSize,"start",!0),d.setCN(a,f,"legend-title"),f.translate(this.marginLeft,this.marginTop+this.verticalGap+this.ly+1),a=f.getBBox(),this.titleWidth=a.width+15,this.titleHeight=a.height+6;this.index=this.maxLabelWidth=0;if(this.showEntries){for(a=0;a<h.length;a++)this.createEntry(h[a]);for(a=this.index=0;a<h.length;a++)this.createValue(h[a])}this.arrangeEntries();this.updateValues()},arrangeEntries:function(){var a=this.position,b=this.marginLeft+
this.titleWidth,c=this.marginRight,e=this.marginTop,f=this.marginBottom,g=this.horizontalGap,h=this.div,k=this.divWidth,l=this.maxColumnsReal,m=this.verticalGap,n=this.spacing,p=k-c-b,t=0,r=0,q=this.container;this.set&&this.set.remove();var y=q.set();this.set=y;var B=q.set();y.push(B);var u=this.entries,w,v;for(v=0;v<u.length;v++){w=u[v].getBBox();var A=w.width;A>t&&(t=A);w=w.height;w>r&&(r=w)}var A=r=0,C=g,x=0,z=0;for(v=0;v<u.length;v++){var F=u[v];this.reversedOrder&&(F=u[u.length-v-1]);w=F.getBBox();var E;this.equalWidths?E=A*(t+n+this.markerLabelGap):(E=C,C=C+w.width+g+n);E+w.width>p&&0<v&&0!==A&&(r++,E=A=0,C=E+w.width+g+n,x=x+z+m,z=0);w.height>z&&(z=w.height);F.translate(E,x);A++;!isNaN(l)&&A>=l&&(A=0,r++,x=x+z+m,C=g,z=0);B.push(F)}w=B.getBBox();l=w.height+2*m-1;"left"==a||"right"==a?(n=w.width+2*g,k=n+b+c,h.style.width=k+"px",this.ieW=k):n=k-b-c-1;c=d.polygon(this.container,[0,n,n,0],[0,0,l,l],this.backgroundColor,this.backgroundAlpha,1,this.borderColor,this.borderAlpha);d.setCN(this.chart,c,"legend-bg");y.push(c);y.translate(b,e);c.toBack();b=g;if("top"==a||"bottom"==a||"absolute"==a||"outside"==a)"center"==this.align?b=g+(n-w.width)/2:"right"==this.align&&(b=g+n-w.width);B.translate(b,m+1);this.titleHeight>l&&(l=this.titleHeight);e=l+e+f+1;0>e&&(e=0);"absolute"!=a&&"outside"!=a&&e>this.chart.divRealHeight&&(h.style.top="0px");h.style.height=Math.round(e)+"px";q.setSize(this.divWidth,e)},createEntry:function(a){if(!1!==a.visibleInLegend&&!a.hideFromLegend){var b=this,c=b.chart,e=b.useGraphSettings,
f=a.markerType;f&&(e=!1);a.legendEntryWidth=b.markerSize;f||(f=b.markerType);var g=a.color,h=a.alpha;a.legendKeyColor&&(g=a.legendKeyColor());a.legendKeyAlpha&&(h=a.legendKeyAlpha());var k;!0===a.hidden&&(k=g=b.markerDisabledColor);var l=a.pattern,m,n=a.customMarker;n||(n=b.customMarker);var p=b.container,t=b.markerSize,r=0,q=0,y=t/2;if(e){e=a.type;b.switchType=void 0;if("line"==e||"step"==e||"smoothedLine"==e||"ohlc"==e)m=p.set(),a.hidden||(g=a.lineColorR,k=a.bulletBorderColorR),r=d.line(p,[0,2*t],[t/2,t/2],g,a.lineAlpha,a.lineThickness,a.dashLength),d.setCN(c,r,"graph-stroke"),m.push(r),a.bullet&&(a.hidden||(g=a.bulletColorR),r=d.bullet(p,a.bullet,a.bulletSize,g,a.bulletAlpha,a.bulletBorderThickness,k,a.bulletBorderAlpha))&&(d.setCN(c,r,"graph-bullet"),r.translate(t+1,t/2),m.push(r)),y=0,r=t,q=t/3;else{a.getGradRotation&&(m=a.getGradRotation(),0===m&&(m=180));r=a.fillColorsR;!0===a.hidden&&(r=g);if(m=b.createMarker("rectangle",r,a.fillAlphas,a.lineThickness,g,a.lineAlpha,m,l,a.dashLength))y=t,m.translate(y,t/2);r=t}d.setCN(c,m,"graph-"+e);d.setCN(c,m,"graph-"+a.id)}else if(n)m=p.image(n,0,0,t,t);else{var B;isNaN(b.gradientRotation)||(B=180+b.gradientRotation);(m=b.createMarker(f,g,h,void 0,void 0,void 0,B,l))&&m.translate(t/2,t/2)}d.setCN(c,m,"legend-marker");b.addListeners(m,a);p=p.set([m]);b.switchable&&a.switchable&&p.setAttr("cursor","pointer");void 0!==a.id&&d.setCN(c,p,"legend-item-"+a.id);d.setCN(c,p,a.className,!0);k=b.switchType;var u;k&&"none"!=k&&0<t&&("x"==k?(u=b.createX(),u.translate(t/2,t/2)):u=b.createV(),u.dItem=a,!0!==a.hidden?"x"==k?u.hide():u.show():"x"!=k&&u.hide(),b.switchable||u.hide(),b.addListeners(u,a),a.legendSwitch=u,p.push(u),d.setCN(c,u,"legend-switch"));k=b.color;a.showBalloon&&b.textClickEnabled&&void 0!==b.selectedColor&&(k=b.selectedColor);b.useMarkerColorForLabels&&!l&&(k=g);!0===a.hidden&&(k=b.markerDisabledColor);g=d.massReplace(b.labelText,{"[[title]]":a.title});void 0!==b.tabIndex&&(p.setAttr("tabindex",b.tabIndex),p.setAttr("role","menuitem"),p.keyup(function(c){13==c.keyCode&&b.clickMarker(a,c)}));c.accessible&&b.accessibleLabel&&(l=d.massReplace(b.accessibleLabel,{"[[title]]":a.title}),c.makeAccessible(p,l));l=b.fontSize;m&&(t<=l&&(t=t/2+b.ly-l/2+(l+2-t)/2-q,m.translate(y,t),u&&u.translate(u.x,t)),a.legendEntryWidth=m.getBBox().width);var w;g&&(g=d.fixBrakes(g),a.legendTextReal=g,w=b.labelWidth,w=isNaN(w)?d.text(b.container,g,k,c.fontFamily,l,"start"):d.wrappedText(b.container,g,k,c.fontFamily,l,"start",!1,w,0),d.setCN(c,w,"legend-label"),
w.translate(b.lx+r,b.ly),p.push(w),b.labelDx=r,c=w.getBBox().width,b.maxLabelWidth<c&&(b.maxLabelWidth=c));b.entries[b.index]=p;a.legendEntry=b.entries[b.index];a.legendMarker=m;a.legendLabel=w;b.index++}},addListeners:function(a,b){var c=this;a&&a.mouseover(function(a){c.rollOverMarker(b,a)}).mouseout(function(a){c.rollOutMarker(b,a)}).click(function(a){c.clickMarker(b,a)})},rollOverMarker:function(a,b){this.switchable&&this.dispatch("rollOverMarker",a,b);this.dispatch("rollOverItem",a,b)},rollOutMarker:function(a,b){this.switchable&&this.dispatch("rollOutMarker",a,b);this.dispatch("rollOutItem",a,b)},clickMarker:function(a,b){this.switchable&&(!0===a.hidden?this.dispatch("showItem",a,b):this.dispatch("hideItem",a,b));this.dispatch("clickMarker",a,b)},rollOverLabel:function(a,b){a.hidden||this.textClickEnabled&&a.legendLabel&&a.legendLabel.attr({fill:this.rollOverColor});this.dispatch("rollOverItem",a,b)},rollOutLabel:function(a,b){if(!a.hidden&&this.textClickEnabled&&a.legendLabel){var c=this.color;void 0!==this.selectedColor&&a.showBalloon&&(c=this.selectedColor);this.useMarkerColorForLabels&&(c=a.lineColor,void 0===c&&(c=a.color));a.legendLabel.attr({fill:c})}this.dispatch("rollOutItem",a,b)},clickLabel:function(a,b){this.textClickEnabled?a.hidden||this.dispatch("clickLabel",a,b):this.switchable&&(!0===a.hidden?this.dispatch("showItem",a,b):this.dispatch("hideItem",a,b))},dispatch:function(a,b,c){a={type:a,dataItem:b,target:this,event:c,chart:this.chart};this.chart&&this.chart.handleLegendEvent(a);this.fire(a)},createValue:function(a){var b=this,c=b.fontSize,e=b.chart;if(!1!==a.visibleInLegend&&!a.hideFromLegend){var f=b.maxLabelWidth;b.forceWidth&&(f=b.labelWidth);b.equalWidths||(b.valueAlign="left");"left"==b.valueAlign&&a.legendLabel&&(f=a.legendLabel.getBBox().width);var g=f;if(b.valueText&&0<b.valueWidth){var h=b.color;b.useMarkerColorForValues&&(h=a.color,a.legendKeyColor&&(h=a.legendKeyColor()));!0===a.hidden&&(h=b.markerDisabledColor);var k=b.valueText,f=f+b.lx+b.labelDx+b.markerLabelGap+
b.valueWidth,l="end";"left"==b.valueAlign&&(f-=b.valueWidth,l="start");h=d.text(b.container,k,h,b.chart.fontFamily,c,l);d.setCN(e,h,"legend-value");h.translate(f,b.ly);b.entries[b.index].push(h);g+=b.valueWidth+2*b.markerLabelGap;h.dItem=a;b.valueLabels.push(h)}b.index++;e=b.markerSize;e<c+7&&(e=c+7,d.VML&&(e+=3));c=b.container.rect(a.legendEntryWidth,0,g,e,0,0).attr({stroke:"none",fill:"#fff","fill-opacity":.005});c.dItem=a;b.entries[b.index-1].push(c);c.mouseover(function(c){b.rollOverLabel(a,c)}).mouseout(function(c){b.rollOutLabel(a,c)}).click(function(c){b.clickLabel(a,c)})}},createV:function(){var a=this.markerSize;return d.polygon(this.container,[a/5,a/2,a-a/5,a/2],[a/3,a-a/5,a/5,a/1.7],this.switchColor)},createX:function(){var a=(this.markerSize-4)/2,b={stroke:this.switchColor,"stroke-width":3},c=this.container,e=d.line(c,[-a,a],[-a,a]).attr(b),a=d.line(c,[-a,a],[a,-a]).attr(b);return this.container.set([e,a])},createMarker:function(a,b,c,e,f,g,h,k,l){var m=this.markerSize,n=this.container;f||(f=this.markerBorderColor);f||
(f=b);isNaN(e)&&(e=this.markerBorderThickness);isNaN(g)&&(g=this.markerBorderAlpha);return d.bullet(n,a,m,b,c,e,f,g,m,h,k,this.chart.path,l)},validateNow:function(){this.invalidateSize()},updateValues:function(){var a=this.valueLabels,b=this.chart,c,e=this.data;if(a)for(c=0;c<a.length;c++){var f=a[c],g=f.dItem;g.periodDataItem=void 0;g.periodPercentDataItem=void 0;var h=" ";if(e)g.value?f.text(g.value):f.text("");else{var k=null;if(void 0!==g.type){var k=g.currentDataItem,l=this.periodValueText;g.legendPeriodValueText&&(l=g.legendPeriodValueText);g.legendPeriodValueTextR&&(l=g.legendPeriodValueTextR);k?(h=this.valueText,g.legendValueText&&(h=g.legendValueText),g.legendValueTextR&&(h=g.legendValueTextR),h=b.formatString(h,k)):l&&b.formatPeriodString&&(l=d.massReplace(l,{"[[title]]":g.title}),h=b.formatPeriodString(l,g))}else h=b.formatString(this.valueText,g);l=g;k&&(l=k);var m=this.valueFunction;m&&(h=m(l,h,b.periodDataItem));var n;this.useMarkerColorForLabels&&!k&&g.lastDataItem&&(k=g.lastDataItem);k?n=b.getBalloonColor(g,k):g.legendKeyColor&&(n=g.legendKeyColor());g.legendColorFunction&&(n=g.legendColorFunction(l,h,g.periodDataItem,g.periodPercentDataItem));f.text(h);if(!g.pattern&&(this.useMarkerColorForValues&&f.setAttr("fill",n),this.useMarkerColorForLabels)){if(f=g.legendMarker)f.setAttr("fill",n),f.setAttr("stroke",n);(g=g.legendLabel)&&g.setAttr("fill",n)}}}},renderFix:function(){if(!d.VML&&this.enabled){var a=this.container;a&&a.renderFix()}},destroy:function(){this.div.innerHTML="";d.remove(this.set)}})})();(function(){var d=window.AmCharts;d.AmMap=d.Class({inherits:d.AmChart,construct:function(a){this.cname="AmMap";this.type="map";this.theme=a;this.svgNotSupported="This browser doesn't support SVG. Use Chrome, Firefox, Internet Explorer 9 or later.";this.createEvents("rollOverMapObject","rollOutMapObject","clickMapObject","mouseDownMapObject","selectedObjectChanged","homeButtonClicked","zoomCompleted","dragCompleted","positionChanged","writeDevInfo","click","descriptionClosed");this.zoomDuration=.6;this.zoomControl=new d.ZoomControl(a);this.fitMapToContainer=!0;this.mouseWheelZoomEnabled=this.backgroundZoomsToTop=!1;this.allowClickOnSelectedObject=this.useHandCursorOnClickableOjects=this.showBalloonOnSelectedObject=!0;this.showObjectsAfterZoom=this.wheelBusy=!1;this.zoomOnDoubleClick=this.useObjectColorForBalloon=!0;this.allowMultipleDescriptionWindows=!1;this.dragMap=this.centerMap=this.linesAboveImages=!0;this.colorSteps=5;this.forceNormalize=!1;this.showAreasInList=!0;this.showLinesInList=this.showImagesInList=!1;this.areasProcessor=new d.AreasProcessor(this);this.areasSettings=new d.AreasSettings(a);this.imagesProcessor=new d.ImagesProcessor(this);this.imagesSettings=new d.ImagesSettings(a);this.linesProcessor=new d.LinesProcessor(this);this.linesSettings=new d.LinesSettings(a);this.initialTouchZoom=1;this.showDescriptionOnHover=!1;d.AmMap.base.construct.call(this,a);this.creditsPosition="bottom-left";this.product="ammap";this.areasClasses={};this.updatableImages=[];d.applyTheme(this,a,this.cname)},initChart:function(){this.zoomInstantly=!0;var a=this.container;this.panRequired=!0;if(this.sizeChanged&&d.hasSVG&&this.chartCreated){this.updatableImages=[];this.freeLabelsSet&&this.freeLabelsSet.remove();this.freeLabelsSet=a.set();this.container.setSize(this.realWidth,this.realHeight);this.resizeMap();this.drawBackground();this.redrawLabels();this.drawTitles();this.processObjects(!0);this.rescaleObjects();this.zoomControl.init(this,a);this.drawBg();var b=this.smallMap;b&&b.init(this,a);(b=this.valueLegend)&&b.init(this,a);this.sizeChanged=!1;this.zoomToLongLat(this.zLevelTemp,this.zLongTemp,this.zLatTemp,!0);this.previousWidth=this.realWidth;this.previousHeight=this.realHeight;this.updateSmallMap();this.linkSet.toFront();this.zoomControl.update&&this.zoomControl.update()}else(d.AmMap.base.initChart.call(this),d.hasSVG)?(this.dataChanged&&(this.parseData(),this.dispatchDataUpdated=!0,this.dataChanged=!1,a=this.legend)&&(a.position="absolute",a.invalidateSize()),this.createDescriptionsDiv(),this.svgAreas=[],this.svgAreasById={},this.drawChart()):(this.chartDiv.style.textAlign="",this.chartDiv.setAttribute("class","ammapAlert"),this.chartDiv.innerHTML=this.svgNotSupported,this.fire({type:"failed",chart:this}))},storeTemp:function(){if(d.hasSVG&&0<this.realWidth&&0<this.realHeight){var a=this.mapContainer.getBBox();0<a.width&&0<a.height&&(a=this.zoomLongitude(),isNaN(a)||(this.zLongTemp=a),a=this.zoomLatitude(),isNaN(a)||(this.zLatTemp=a),a=this.zoomLevel(),isNaN(a)||(this.zLevelTemp=a))}},invalidateSize:function(){this.storeTemp();d.AmMap.base.invalidateSize.call(this)},validateSize:function(){this.storeTemp();d.AmMap.base.validateSize.call(this)},handleWheelReal:function(a){if(!this.wheelBusy){this.stopAnimation();var b=this.zoomLevel(),c=this.zoomControl,e=c.zoomFactor;this.wheelBusy=!0;a=d.fitToBounds(0<a?b*e:b/e,c.minZoomLevel,c.maxZoomLevel);e=this.mouseX/this.mapWidth;c=this.mouseY/this.mapHeight;e=(this.zoomX()-e)*(a/b)+e;b=(this.zoomY()-c)*(a/b)+c;this.zoomTo(a,e,b)}},addLegend:function(a,b){a.position="absolute";a.autoMargins=!1;a.valueWidth=0;a.switchable=!1;d.AmMap.base.addLegend.call(this,a,b);void 0===a.enabled&&(a.enabled=!0);return a},handleLegendEvent:function(){},createDescriptionsDiv:function(){if(!this.descriptionsDiv){var a=document.createElement("div"),b=a.style;b.position="absolute";b.left="0px";b.top="0px";this.descriptionsDiv=a}this.containerDiv.appendChild(this.descriptionsDiv)},drawChart:function(){d.AmMap.base.drawChart.call(this);var a=this.dataProvider;this.dataProvider=a=d.extend(a,new d.MapData,!0);this.areasSettings=d.processObject(this.areasSettings,d.AreasSettings,this.theme);this.imagesSettings=d.processObject(this.imagesSettings,d.ImagesSettings,this.theme);this.linesSettings=d.processObject(this.linesSettings,d.LinesSettings,this.theme);var b=this.container;this.mapContainer&&this.mapContainer.remove();this.mapContainer=b.set();this.graphsSet.push(this.mapContainer);var c;a.map&&(c=d.maps[a.map]);a.mapVar&&(c=a.mapVar);c?(this.svgData=c.svg,this.getBounds(),this.buildEverything()):(a=a.mapURL)&&this.loadXml(a);this.balloonsSet.toFront()},drawBg:function(){var a=this;a.background.click(function(){a.handleBackgroundClick()});a.background.mouseover(function(){a.rollOutMapObject(a.previouslyHovered)})},buildEverything:function(){if(0<this.realWidth&&0<this.realHeight){var a=this.container,b=this.dataProvider;this.projection||(this.projection=b.projection,this.projection||(this.projection="equirectangular"));this.updatableImages=[];var c=this.projection;c&&(this.projectionFunction=d[c]);this.projectionFunction||(this.projectionFunction=d.equirectangular);this.dpProjectionFunction=d[b.projection];this.dpProjectionFunction||(this.dpProjectionFunction=d.equirectangular);this.zoomControl=d.processObject(this.zoomControl,d.ZoomControl,this.theme);this.zoomControl.init(this,a);this.drawBg();this.buildSVGMap();this.projectionFunction&&c!=b.projection||this.forceNormalize?(this.normalizeMap(),this.changeProjection()):this.fixMapPosition();if(c=this.smallMap)c=d.processObject(c,d.SmallMap,this.theme),c.init(this,a),this.smallMap=c;isNaN(b.zoomX)&&isNaN(b.zoomY)&&isNaN(b.zoomLatitude)&&isNaN(b.zoomLongitude)&&(this.centerMap?(c=this.xyToCoordinates(this.mapWidth/2,this.mapHeight/2),b.zoomLongitudeC=c.longitude,b.zoomLatitudeC=c.latitude):(b.zoomX=0,b.zoomY=0),this.zoomInstantly=!0);this.selectObject(this.dataProvider);this.processAreas();if(b=this.valueLegend)this.valueLegend=b=d.processObject(b,d.ValueLegend,this.theme),b.init(this,a);this.objectList&&(a=this.objectList=d.processObject(this.objectList,d.ObjectList))&&(this.clearObjectList(),a.init(this));this.dispDUpd();this.updateSmallMap();this.linkSet.toFront()}else this.cleanChart()},hideGroup:function(a){this.showHideGroup(a,!1)},showGroup:function(a){this.showHideGroup(a,!0)},showHideGroup:function(a,b){this.showHideReal(this.imagesProcessor.allObjects,a,b);this.showHideReal(this.areasProcessor.allObjects,a,b);this.showHideReal(this.linesProcessor.allObjects,a,b)},showHideReal:function(a,b,c){var e;for(e=0;e<a.length;e++){var d=a[e];if(d.groupId==b){var g=d.displayObject;g&&(c?(d.hidden=!1,g.show()):(d.hidden=!0,g.hide()))}}},makeObjectAccessible:function(a){if(a.accessibleLabel){var b=this.formatString(a.accessibleLabel,a);a.displayObject&&this.makeAccessible(a.displayObject,b,"menuitem")}},update:function(){if(d.hasSVG){d.AmMap.base.update.call(this);this.zoomControl&&this.zoomControl.update&&this.zoomControl.update();for(var a=0,b=this.updatableImages.length;a<b;a++)this.updatableImages[a].update()}},animateMap:function(){var a=this;a.totalFrames=a.zoomDuration*d.updateRate;a.totalFrames+=1;a.frame=0;a.tweenPercent=0;a.balloon.hide(0);setTimeout(function(){a.updateSize.call(a)},1E3/d.updateRate)},updateSize:function(){var a=this,b=a.totalFrames;a.preventHover=!0;a.frame<=b?(a.frame++,b=d.easeOutSine(0,a.frame,0,1,b),1<=b?(b=1,a.preventHover=!1,a.wheelBusy=!1):window.requestAnimationFrame?window.requestAnimationFrame(function(){a.updateSize.call(a)}):setTimeout(function(){a.updateSize.call(a)},1E3/d.updateRate),.8<b&&(a.preventHover=!1)):(b=1,a.preventHover=!1,a.wheelBusy=!1);a.tweenPercent=b;a.rescaleMapAndObjects()},rescaleMapAndObjects:function(){var a=this.initialScale,b=this.initialX,c=this.initialY,e=this.tweenPercent,a=a+(this.finalScale-a)*e;this.mapContainer.translate(b+(this.finalX-b)*e,c+(this.finalY-c)*e,a,!0);if(this.areasSettings.adjustOutlineThickness){for(var b=this.svgAreas,d=0;d<b.length;d++)(c=b[d])&&c.setAttr("stroke-width",this.areasSettings.outlineThickness/a/this.mapScale);if(b=this.dataProvider.areas)for(d=0;d<b.length;d++){var c=b[d],g=c.displayObject;g&&g.setAttr("stroke-width",c.outlineThicknessReal/a/this.mapScale)}}this.rescaleObjects();this.positionChanged();this.updateSmallMap();1==e&&this.fire({type:"zoomCompleted",chart:this})},updateSmallMap:function(){this.smallMap&&this.smallMap.update()},rescaleObjects:function(){var a=this.mapContainer.scale,b=this.imagesProcessor.objectsToResize,c;for(c=0;c<b.length;c++){var d=b[c].image,f=b[c].scale,g=b[c].mapImage;isNaN(g.selectedScaleReal)||g!=this.selectedObject||(g.tempScale=f,f*=g.selectedScaleReal);d.translate(d.x,d.y,f/a,!0)}b=this.imagesProcessor.labelsToReposition;for(c=0;c<b.length;c++)d=b[c],d.imageLabel&&this.imagesProcessor.positionLabel(d.imageLabel,d,d.labelPositionReal);b=this.linesProcessor;if(d=b.linesToResize)for(c=0;c<d.length;c++)f=d[c],f.line.setAttr("stroke-width",f.thickness/a);b=b.objectsToResize;for(c=0;c<b.length;c++)d=b[c],d.translate(d.x,d.y,1/a,!0)},handleTouchEnd:function(a){this.initialDistance=NaN;this.mouseIsDown=this.isDragging=!1;d.AmMap.base.handleTouchEnd.call(this,a)},handleMouseDown:function(a){d.resetMouseOver();this.mouseIsDown=this.mouseIsOver=!0;this.balloon.hide(0);a&&this.mouseIsOver&&a.preventDefault&&this.panEventsEnabled&&a.preventDefault();if(this.chartCreated&&!this.preventHover&&(this.initialTouchZoom=this.zoomLevel(),this.dragMap&&(this.stopAnimation(),this.mapContainerClickX=this.mapContainer.x,this.mapContainerClickY=this.mapContainer.y),a||(a=window.event),a.shiftKey&&!0===this.developerMode&&this.getDevInfo(),a&&a.touches)){var b=this.mouseX,c=this.mouseY,e=a.touches.item(1);e&&this.panEventsEnabled&&this.boundingRect&&(a=e.clientX-this.boundingRect.left,e=e.clientY-this.boundingRect.top,this.middleXP=(b+(a-b)/2)/this.realWidth,this.middleYP=(c+(e-c)/2)/this.realHeight,this.initialDistance=Math.sqrt(Math.pow(a-b,2)+Math.pow(e-c,2)))}},stopDrag:function(){this.isDragging=!1},handleReleaseOutside:function(){if(d.isModern){var a=this;d.AmMap.base.handleReleaseOutside.call(a);
a.mouseIsDown=!1;setTimeout(function(){a.resetPinch.call(a)},100);if(!a.preventHover){a.stopDrag();var b=a.zoomControl;b&&b.draggerUp&&b.draggerUp();a.mapWasDragged=!1;var b=a.mapContainer,c=a.mapContainerClickX,e=a.mapContainerClickY;isNaN(c)||isNaN(e)||!(3<Math.abs(b.x-c)||3<Math.abs(b.y-e))||(a.mapWasDragged=!0,b={type:"dragCompleted",zoomX:a.zoomX(),zoomY:a.zoomY(),zoomLevel:a.zoomLevel(),chart:a},a.fire(b));(a.mouseIsOver&&!a.mapWasDragged&&!a.skipClick||a.wasTouched&&3>Math.abs(a.mouseX-a.tmx)&&3>Math.abs(a.mouseY-a.tmy))&&a.fire({type:"click",x:a.mouseX,y:a.mouseY,chart:a});a.mapContainerClickX=NaN;a.mapContainerClickY=NaN;a.objectWasClicked=!1;a.zoomOnDoubleClick&&a.mouseIsOver&&(b=(new Date).getTime(),200>b-a.previousClickTime&&40<b-a.previousClickTime&&a.doDoubleClickZoom(),a.previousClickTime=b)}a.wasTouched=!1}},resetPinch:function(){this.mapWasPinched=!1},handleMouseMove:function(a){var b=this;d.AmMap.base.handleMouseMove.call(b,a);if(!a||!a.touches||!b.tapToActivate||b.tapped){b.panEventsEnabled&&b.mouseIsOver&&a&&a.preventDefault&&a.preventDefault();var c=b.previuosMouseX,e=b.previuosMouseY,f=b.mouseX,g=b.mouseY,h=b.zoomControl;isNaN(c)&&(c=f);isNaN(e)&&(e=g);b.mouse2X=NaN;b.mouse2Y=NaN;a&&a.touches&&(a=a.touches.item(1))&&b.panEventsEnabled&&b.boundingRect&&(b.mouse2X=a.clientX-b.boundingRect.left,b.mouse2Y=a.clientY-b.boundingRect.top);if(a=b.mapContainer){var k=b.mouse2X,l=b.mouse2Y;b.pinchTO&&clearTimeout(b.pinchTO);b.pinchTO=setTimeout(function(){b.resetPinch.call(b)},1E3);var m=b.realHeight,n=b.realWidth,p=b.mapWidth,t=b.mapHeight;b.mouseIsDown&&b.dragMap&&(3<Math.abs(b.previuosMouseX-b.mouseX)||3<Math.abs(b.previuosMouseY-b.mouseY))&&(b.isDragging=!0);if(!isNaN(k)){b.stopDrag();var r=Math.sqrt(Math.pow(k-f,2)+Math.pow(l-g,2)),q=b.initialDistance;isNaN(q)&&(q=Math.sqrt(Math.pow(k-f,2)+Math.pow(l-g,2)));if(!isNaN(q)){var k=b.initialTouchZoom*r/q,k=d.fitToBounds(k,h.minZoomLevel,h.maxZoomLevel),h=b.zoomLevel(),q=b.middleXP,l=b.middleYP,r=m/t,y=n/p,q=(b.zoomX()-q*y)*(k/h)+q*y,l=(b.zoomY()-
l*r)*(k/h)+l*r;.1<Math.abs(k-h)&&(b.zoomTo(k,q,l,!0),b.mapWasPinched=!0,clearTimeout(b.pinchTO))}}k=a.scale;b.isDragging&&(b.balloon.hide(0),b.positionChanged(),c=a.x+(f-c),e=a.y+(g-e),b.preventDragOut&&(t=-t*k+m/2-b.diffY*b.mapScale*k,m=m/2-b.diffY*b.mapScale*k,c=d.fitToBounds(c,-p*k+n/2,n/2),e=d.fitToBounds(e,t,m)),isNaN(c)||isNaN(e)||(a.translate(c,e,k,!0),b.updateSmallMap()));b.previuosMouseX=f;b.previuosMouseY=g}}},selectObject:function(a,b){var c=this;a||(a=c.dataProvider);a.isOver=!1;var e=a.linkToObject;d.isString(e)&&(e=c.getObjectById(e));a.useTargetsZoomValues&&e&&(a.zoomX=e.zoomX,a.zoomY=e.zoomY,a.zoomLatitude=e.zoomLatitude,a.zoomLongitude=e.zoomLongitude,a.zoomLevel=e.zoomLevel);var f=c.selectedObject;f&&c.returnInitialColor(f);c.selectedObject=a;var g=!1,h,k;"MapArea"==a.objectType&&(a.autoZoomReal&&(g=!0),h=c.areasSettings.selectedOutlineColor,k=c.areasSettings.selectedOutlineThickness);if(e&&!g&&(d.isString(e)&&(e=c.getObjectById(e)),isNaN(a.zoomLevel)&&isNaN(a.zoomX)&&isNaN(a.zoomY))){if(c.extendMapData(e))return;c.selectObject(e);return}c.allowMultipleDescriptionWindows||c.closeAllDescriptions();clearTimeout(c.selectedObjectTimeOut);clearTimeout(c.processObjectsTimeOut);e=c.zoomDuration;!g&&isNaN(a.zoomLevel)&&isNaN(a.zoomX)&&isNaN(a.zoomY)?(c.showDescriptionAndGetUrl(),b||c.processObjects()):(c.selectedObjectTimeOut=setTimeout(function(){c.showDescriptionAndGetUrl.call(c)},1E3*e+200),c.showObjectsAfterZoom)?b||(c.processObjectsTimeOut=setTimeout(function(){c.processObjects.call(c)},1E3*e+200)):b||c.processObjects();e=a.displayObject;g=a.selectedColorReal;if("MapImage"==a.objectType){h=c.imagesSettings.selectedOutlineColor;k=c.imagesSettings.selectedOutlineThickness;var e=a.image,l=a.selectedScaleReal;if(!isNaN(l)&&1!=l){var m=a.scale;isNaN(a.tempScale)||(m=a.tempScale);isNaN(m)&&(m=1);a.tempScale=m;var n=a.displayObject;n.translate(n.x,n.y,m*l,!0)}}if(e){if(d.removeCN(c,e,"selected-object"),d.setCN(c,e,"selected-object"),a.bringForwardOnHover&&a.displayObject.toFront(),c.outlinesToFront(),!a.preserveOriginalAttributes){e.setAttr("stroke",a.outlineColorReal);void 0!==g&&e.setAttr("fill",g);void 0!==h&&e.setAttr("stroke",h);void 0!==k&&e.setAttr("stroke-width",k);"MapLine"==a.objectType&&((l=a.lineSvg)&&l.setAttr("stroke",g),l=a.arrowSvg)&&(l.setAttr("fill",g),l.setAttr("stroke",g));if(l=a.imageLabel)m=a.selectedLabelColorReal,void 0!==m&&l.setAttr("fill",m);a.selectable||(e.setAttr("cursor","default"),l&&l.setAttr("cursor","default"))}}else c.returnInitialColorReal(a);if(e=a.groupId)for(l=a.groupArray,l||(l=c.getGroupById(e),a.groupArray=l),m=0;m<l.length;m++)if(n=l[m],n.isOver=!1,e=n.displayObject,"MapImage"==n.objectType&&(e=n.image),e){var p=n.selectedColorReal;void 0!==p&&e.setAttr("fill",p);void 0!==h&&e.setAttr("stroke",h);void 0!==k&&e.setAttr("stroke-width",k);"MapLine"==n.objectType&&((e=n.lineSvg)&&e.setAttr("stroke",g),e=n.arrowSvg)&&(e.setAttr("fill",g),e.setAttr("stroke",g))}c.rescaleObjects();c.zoomToSelectedObject();f!=a&&c.fire({type:"selectedObjectChanged",chart:c})},returnInitialColor:function(a,b){this.returnInitialColorReal(a);b&&(a.isFirst=!1);if(this.selectedObject.bringForwardOnHover){var c=this.selectedObject.displayObject;c&&c.toFront()}if(c=a.groupId){var c=this.getGroupById(c),d;for(d=0;d<c.length;d++)this.returnInitialColorReal(c[d]),b&&(c[d].isFirst=!1)}this.outlinesToFront()},outlinesToFront:function(){if(this.outlines)for(var a=0;a<this.outlines.length;a++)this.outlines[a].toFront()},closeAllDescriptions:function(){this.descriptionsDiv.innerHTML=""},fireClosed:function(){this.fire({type:"descriptionClosed",chart:this})},returnInitialColorReal:function(a){a.isOver=!1;var b=a.displayObject;if(b){d.removeCN(this,b,"selected-object");b.toPrevious();if("MapImage"==a.objectType){var c=a.tempScale;isNaN(c)||b.translate(b.x,b.y,c,!0);a.tempScale=NaN;b=a.image}c=a.colorReal;if("MapLine"==a.objectType){var e=a.lineSvg;e&&e.setAttr("stroke",c);if(e=a.arrowSvg){var f=a.arrowColor;void 0===f&&(f=c);e.setAttr("fill",f);e.setAttr("stroke",f)}}var e=a.alphaReal,f=a.outlineAlphaReal,g=a.outlineThicknessReal,h=a.outlineColorReal;if(a.showAsSelected){var c=a.selectedColorReal,k,l;"MapImage"==a.objectType&&(k=this.imagesSettings.selectedOutlineColor,l=this.imagesSettings.selectedOutlineThickness);"MapArea"==a.objectType&&(k=this.areasSettings.selectedOutlineColor,l=this.areasSettings.selectedOutlineThickness);void 0!==k&&(h=k);void 0!==l&&(g=l)}"bubble"==a.type&&(c=void 0);void 0!==c&&b.setAttr("fill",c);if(k=a.image)k.setAttr("fill",c),k.setAttr("stroke",h),k.setAttr("stroke-width",g),k.setAttr("fill-opacity",e),k.setAttr("stroke-opacity",f);"MapArea"==a.objectType&&(c=1,this.areasSettings.adjustOutlineThickness&&(c=this.zoomLevel()*this.mapScale),b.setAttr("stroke",h),b.setAttr("stroke-width",g/c),b.setAttr("fill-opacity",e),b.setAttr("stroke-opacity",f));(c=a.pattern)&&b.pattern(c,this.mapScale,this.path);(b=a.imageLabel)&&!a.labelInactive&&(a.showAsSelected&&void 0!==a.selectedLabelColor?b.setAttr("fill",a.selectedLabelColor):b.setAttr("fill",a.labelColorReal))}},zoomToRectangle:function(a,b,c,e){var f=this.realWidth,g=this.realHeight,h=this.mapSet.scale,k=this.zoomControl,f=d.fitToBounds(c/f>e/g?.8*f/(c*h):.8*g/(e*h),k.minZoomLevel,k.maxZoomLevel);this.zoomToMapXY(f,(a+c/2)*h,(b+e/2)*h)},zoomToLatLongRectangle:function(a,b,c,e){var f=this.dataProvider,g=this.zoomControl,h=Math.abs(c-a),k=Math.abs(b-e),l=Math.abs(f.rightLongitude-f.leftLongitude),f=Math.abs(f.topLatitude-f.bottomLatitude),g=d.fitToBounds(h/l>k/f?.8*l/h:.8*f/k,g.minZoomLevel,g.maxZoomLevel);this.zoomToLongLat(g,a+(c-a)/2,e+(b-e)/2)},getGroupById:function(a){var b=
[];this.getGroup(this.imagesProcessor.allObjects,a,b);this.getGroup(this.linesProcessor.allObjects,a,b);this.getGroup(this.areasProcessor.allObjects,a,b);return b},zoomToGroup:function(a){a="object"==typeof a?a:this.getGroupById(a);var b,c,d,f,g;for(g=0;g<a.length;g++){var h=a[g].displayObject;if(h){var k=h.getBBox(),h=k.y,l=k.y+k.height,m=k.x,k=k.x+k.width;if(h<b||isNaN(b))b=h;if(l>f||isNaN(f))f=l;if(m<c||isNaN(c))c=m;if(k>d||isNaN(d))d=k}}c+=this.diffX;d+=this.diffX;f+=this.diffY;b+=this.diffY;this.zoomToRectangle(c,b,d-c,f-b)},getGroup:function(a,b,c){if(a){var d;for(d=0;d<a.length;d++){var f=a[d];f.groupId==b&&c.push(f)}}},zoomToStageXY:function(a,b,c,e){if(!this.objectWasClicked){var f=this.zoomControl;a=d.fitToBounds(a,f.minZoomLevel,f.maxZoomLevel);var f=this.zoomLevel(),g=this.mapSet.getBBox();b=this.xyToCoordinates((b-this.mapContainer.x)/f-g.x*this.mapScale,(c-this.mapContainer.y)/f-g.y*this.mapScale);this.zoomToLongLat(a,b.longitude,b.latitude,e)}},zoomToLongLat:function(a,b,c,
d){b=this.coordinatesToXY(b,c);this.zoomToMapXY(a,b.x,b.y,d)},zoomToMapXY:function(a,b,c,d){var f=this.mapWidth,g=this.mapHeight;this.zoomTo(a,-(b/f)*a+this.realWidth/f/2,-(c/g)*a+this.realHeight/g/2,d)},zoomToObject:function(a){if(a){var b=a.zoomLatitude,c=a.zoomLongitude;isNaN(a.zoomLatitudeC)||(b=a.zoomLatitudeC);isNaN(a.zoomLongitudeC)||(c=a.zoomLongitudeC);var e=a.zoomLevel,f=this.zoomInstantly,g=a.zoomX,h=a.zoomY,k=this.realWidth,l=this.realHeight;isNaN(e)||(isNaN(b)||isNaN(c)?this.zoomTo(e,g,h,f):this.zoomToLongLat(e,c,b,f));this.zoomInstantly=!1;"MapImage"==a.objectType&&isNaN(a.zoomX)&&isNaN(a.zoomY)&&isNaN(a.zoomLatitude)&&isNaN(a.zoomLongitude)&&!isNaN(a.latitude)&&!isNaN(a.longitude)&&this.zoomToLongLat(a.zoomLevel,a.longitude,a.latitude);"MapArea"==a.objectType&&(f=a.displayObject.getBBox(),g=this.mapScale,b=(f.x+this.diffX)*g,c=(f.y+this.diffY)*g,e=f.width*g,f=f.height*g,k=a.autoZoomReal&&isNaN(a.zoomLevel)?e/k>f/l?.8*k/e:.8*l/f:a.zoomLevel,l=this.zoomControl,k=d.fitToBounds(k,l.minZoomLevel,l.maxZoomLevel),isNaN(a.zoomX)&&isNaN(a.zoomY)&&isNaN(a.zoomLatitude)&&isNaN(a.zoomLongitude)&&this.zoomToMapXY(k,b+e/2,c+f/2));this.zoomControl.update()}},zoomToSelectedObject:function(){this.zoomToObject(this.selectedObject)},zoomTo:function(a,b,c,e){var f=this.zoomControl;a=d.fitToBounds(a,f.minZoomLevel,f.maxZoomLevel);f=this.zoomLevel();isNaN(b)&&(b=this.realWidth/this.mapWidth,b=(this.zoomX()-.5*b)*(a/f)+.5*b);isNaN(c)&&(c=this.realHeight/this.mapHeight,c=(this.zoomY()-.5*c)*(a/f)+.5*c);this.stopAnimation();isNaN(a)||(f=this.mapContainer,this.initialX=f.x,this.initialY=f.y,this.initialScale=f.scale,this.finalX=this.mapWidth*b,this.finalY=this.mapHeight*c,this.finalScale=a,this.finalX!=this.initialX||this.finalY!=this.initialY||this.finalScale!=this.initialScale?e?(this.tweenPercent=1,this.rescaleMapAndObjects(),this.wheelBusy=!1):this.animateMap():this.wheelBusy=!1)},loadXml:function(a){var b;window.XMLHttpRequest&&(b=new XMLHttpRequest);b.overrideMimeType&&b.overrideMimeType("text/xml");b.open("GET",a,!1);b.send();this.parseXMLObject(b.responseXML);this.svgData&&this.buildEverything()},stopAnimation:function(){this.frame=this.totalFrames},processObjects:function(a){var b=this.selectedObject;if(0<b.images.length||0<b.areas.length||0<b.lines.length||b==this.dataProvider||a){a=this.container;var c=this.stageImagesContainer;c&&c.remove();this.stageImagesContainer=c=a.set();this.trendLinesSet.push(c);var d=this.stageLinesContainer;d&&d.remove();this.stageLinesContainer=d=a.set();this.trendLinesSet.push(d);var f=this.mapImagesContainer;f&&f.remove();this.mapImagesContainer=f=a.set();this.mapContainer.push(f);var g=this.mapLinesContainer;g&&g.remove();this.mapLinesContainer=g=a.set();this.mapContainer.push(g);this.linesAboveImages?(f.toFront(),c.toFront(),g.toFront(),d.toFront()):(g.toFront(),d.toFront(),f.toFront(),c.toFront());b&&(this.imagesProcessor.reset(),this.linesProcessor.reset(),this.linesAboveImages?(this.imagesProcessor.process(b),this.linesProcessor.process(b)):(this.linesProcessor.process(b),this.imagesProcessor.process(b)));this.rescaleObjects()}},processAreas:function(){this.areasProcessor.process(this.dataProvider)},buildSVGMap:function(){d.remove(this.mapSet);var a=this.svgData.g.path,b=this.container,c=b.set();this.svgAreas=[];this.svgAreasById={};void 0===a.length&&(a=[a]);var e;for(e=0;e<a.length;e++){var f=a[e],g=f.d,h=f.title;f.titleTr&&(h=f.titleTr);var k=b.path(g);k.id=f.id;if(this.areasSettings.preserveOriginalAttributes){k.customAttr={};for(var l in f)"d"!=l&&"id"!=l&&"title"!=l&&(k.customAttr[l]=f[l])}f.outline&&(k.outline=!0);k.path=g;this.svgAreasById[f.id]={area:k,title:h,className:f["class"]};this.svgAreas.push(k);c.push(k)}this.mapSet=c;this.mapContainer.push(c);this.resizeMap()},centerAlign:function(){},setProjection:function(a){this.projection=a;this.chartCreated=!1;this.buildEverything()},addObjectEventListeners:function(a,b){var c=this;a.mousedown(function(a){c.mouseDownMapObject(b,a)}).mouseup(function(a){c.clickMapObject(b,a)}).mouseover(function(a){c.balloonX=NaN;c.rollOverMapObject(b,!0,a)}).mouseout(function(a){c.balloonX=NaN;c.rollOutMapObject(b,a)}).touchend(function(a){4>Math.abs(c.mouseX-c.tmx)&&4>Math.abs(c.mouseY-c.tmy)&&(c.tapped=!0);c.tapToActivate&&!c.tapped||c.mapWasDragged||c.mapWasPinched||(c.balloonX=NaN,c.rollOverMapObject(b,!0,a),c.clickMapObject(b,a))}).touchstart(function(a){c.tmx=c.mouseX;c.tmy=c.mouseY;c.mouseDownMapObject(b,a)}).keyup(function(a){13==a.keyCode&&c.clickMapObject(b,a)})},checkIfSelected:function(a){var b=this.selectedObject;if(b==a)return!0;if(b=b.groupId){var b=this.getGroupById(b),c;for(c=0;c<b.length;c++)if(b[c]==a)return!0}return!1},clearMap:function(){this.chartDiv.innerHTML="";this.clearObjectList()},clearObjectList:function(){var a=this.objectList;a&&a.div&&(a.div.innerHTML="")},checkIfLast:function(a){if(a){var b=a.parentNode;if(b&&b.lastChild==a)return!0}return!1},showAsRolledOver:function(a){var b=a.displayObject;if(!a.showAsSelected&&b&&!a.isOver){b.node.onmouseout=function(){};b.node.onmouseover=function(){};b.node.onclick=function(){};!a.isFirst&&a.bringForwardOnHover&&(b.toFront(),a.isFirst=!0);var c=a.rollOverColorReal,e;a.preserveOriginalAttributes&&(c=void 0);"bubble"==a.type&&(c=void 0);void 0==c&&(isNaN(a.rollOverBrightnessReal)||(c=d.adjustLuminosity(a.colorReal,a.rollOverBrightnessReal/100)));if(void 0!=c)if("MapImage"==a.objectType)(e=a.image)&&e.setAttr("fill",c);else if("MapLine"==a.objectType){if((e=a.lineSvg)&&e.setAttr("stroke",c),e=a.arrowSvg)e.setAttr("fill",c),e.setAttr("stroke",c)}else b.setAttr("fill",c);(c=a.imageLabel)&&!a.labelInactive&&(e=a.labelRollOverColorReal,void 0!=e&&c.setAttr("fill",e));c=a.rollOverOutlineColorReal;void 0!=c&&("MapImage"==a.objectType?(e=a.image)&&e.setAttr("stroke",c):b.setAttr("stroke",c));"MapImage"==a.objectType?(c=this.imagesSettings.rollOverOutlineThickness,(e=a.image)&&(isNaN(c)||e.setAttr("stroke-width",c))):(c=this.areasSettings.rollOverOutlineThickness,isNaN(c)||b.setAttr("stroke-width",c));if("MapArea"==a.objectType){c=this.areasSettings;e=a.rollOverAlphaReal;isNaN(e)||b.setAttr("fill-opacity",e);e=c.rollOverOutlineAlpha;isNaN(e)||b.setAttr("stroke-opacity",e);e=1;this.areasSettings.adjustOutlineThickness&&(e=this.zoomLevel()*this.mapScale);var f=c.rollOverOutlineThickness;isNaN(f)||b.setAttr("stroke-width",f/e);(c=c.rollOverPattern)&&b.pattern(c,this.mapScale,this.path)}"MapImage"==a.objectType&&(c=a.rollOverScaleReal,isNaN(c)||1==c||(e=b.scale,isNaN(e)&&(e=1),a.tempScale=e,b.translate(b.x,b.y,e*c,!0)));this.useHandCursorOnClickableOjects&&this.checkIfClickable(a)&&b.setAttr("cursor","pointer");a.mouseEnabled&&this.addObjectEventListeners(b,a);a.isOver=!0}this.outlinesToFront()},rollOverMapObject:function(a,b,c){if(this.chartCreated){this.handleMouseMove();var d=this.previouslyHovered;d&&d!=a?(!1===this.checkIfSelected(d)&&(this.returnInitialColor(d,!0),this.previouslyHovered=null),this.balloon.hide(0)):clearTimeout(this.hoverInt);if(!this.preventHover){if(!1===this.checkIfSelected(a)){if(d=a.groupId){var d=this.getGroupById(d),f;for(f=0;f<d.length;f++)d[f]!=a&&this.showAsRolledOver(d[f])}this.showAsRolledOver(a)}else(d=a.displayObject)&&(this.allowClickOnSelectedObject?d.setAttr("cursor","pointer"):d.setAttr("cursor","default"));this.showDescriptionOnHover?this.showDescription(a):!this.showBalloonOnSelectedObject&&this.checkIfSelected(a)||!1===b||(f=this.balloon,this.balloon.fixedPosition=!1,b=a.colorReal,d="",void 0!==b&&this.useObjectColorForBalloon||(b=f.fillColor),(f=a.balloonTextReal)&&(d=this.formatString(f,a)),this.balloonLabelFunction&&(d=this.balloonLabelFunction(a,this)),d&&""!==d&&this.showBalloon(d,b,!1,this.balloonX,this.balloonY));this.fire({type:"rollOverMapObject",mapObject:a,chart:this,event:c});this.previouslyHovered=a}}},longitudeToX:function(a){return(this.longitudeToCoordinate(a)+this.diffX*this.mapScale)*this.zoomLevel()+this.mapContainer.x},latitudeToY:function(a){return(this.latitudeToCoordinate(a)+this.diffY*this.mapScale)*this.zoomLevel()+this.mapContainer.y},latitudeToStageY:function(a){return this.latitudeToCoordinate(a)*this.zoomLevel()+
this.mapContainer.y+this.diffY*this.mapScale},longitudeToStageX:function(a){return this.longitudeToCoordinate(a)*this.zoomLevel()+this.mapContainer.x+this.diffX*this.mapScale},stageXToLongitude:function(a){a=(a-this.mapContainer.x)/this.zoomLevel();return this.coordinateToLongitude(a)},stageYToLatitude:function(a){a=(a-this.mapContainer.y)/this.zoomLevel();return this.coordinateToLatitude(a)},rollOutMapObject:function(a,b){this.hideBalloon();a&&this.chartCreated&&a.isOver&&(this.checkIfSelected(a)||
this.returnInitialColor(a),this.fire({type:"rollOutMapObject",mapObject:a,chart:this,event:b}))},formatString:function(a,b){var c=this.nf,e=this.pf,f=b.title;b.titleTr&&(f=b.titleTr);void 0==f&&(f="");var g=b.value,g=isNaN(g)?"":d.formatNumber(g,c),c=b.percents,c=isNaN(c)?"":d.formatNumber(c,e),e=b.description;void 0==e&&(e="");var h=b.customData;void 0==h&&(h="");return a=d.massReplace(a,{"[[title]]":f,"[[value]]":g,"[[percent]]":c,"[[description]]":e,"[[customData]]":h})},mouseDownMapObject:function(a,b){this.fire({type:"mouseDownMapObject",mapObject:a,chart:this,event:b})},clickMapObject:function(a,b){var c=this;b&&(b.touches||isNaN(a.zoomLevel)&&isNaN(a.zoomX)&&isNaN(a.zoomY)||c.hideBalloon());if(c.chartCreated&&!c.preventHover&&c.checkTouchDuration(b)&&!c.mapWasDragged&&c.checkIfClickable(a)&&!c.mapWasPinched){c.selectObject(a);var d=c.zoomLevel(),f=c.mapSet.getBBox(),d=c.xyToCoordinates((c.mouseX-c.mapContainer.x)/d-f.x*c.mapScale,(c.mouseY-c.mapContainer.y)/d-f.y*c.mapScale);c.clickLatitude=
d.latitude;c.clickLongitude=d.longitude;b&&b.touches&&setTimeout(function(){c.showBalloonAfterZoom.call(c)},1E3*c.zoomDuration);c.fire({type:"clickMapObject",mapObject:a,chart:c,event:b});c.objectWasClicked=!0}},showBalloonAfterZoom:function(){var a=this.clickLongitude,b=this.clickLatitude,c=this.selectedObject;"MapImage"!=c.objectType||isNaN(c.longitude)||(a=c.longitude,b=c.latitude);a=this.coordinatesToStageXY(a,b);this.balloonX=a.x;this.balloonY=a.y;this.rollOverMapObject(this.selectedObject,!0)},checkIfClickable:function(a){var b=this.allowClickOnSelectedObject;return this.selectedObject==a&&b?!0:this.selectedObject!=a||b?!0===a.selectable||"MapArea"==a.objectType&&a.autoZoomReal||a.url||a.linkToObject||0<a.images.length||0<a.lines.length||!isNaN(a.zoomLevel)||!isNaN(a.zoomX)||!isNaN(a.zoomY)||a.description?!0:!1:!1},resizeMap:function(){var a=this.mapSet;if(a){var b=1,c=a.getBBox(),d=this.realWidth,f=this.realHeight,g=c.width,c=c.height;0<g&&0<c&&(this.fitMapToContainer&&(b=g/d>c/f?d/g:f/c),a.translate(0,0,b,!0),this.mapScale=b,this.mapHeight=c*b,this.mapWidth=g*b)}},zoomIn:function(){var a=this.zoomLevel()*this.zoomControl.zoomFactor;this.zoomTo(a)},zoomOut:function(){var a=this.zoomLevel()/this.zoomControl.zoomFactor;this.zoomTo(a)},moveLeft:function(){var a=this.zoomX()+this.zoomControl.panStepSize;this.zoomTo(this.zoomLevel(),a,this.zoomY())},moveRight:function(){var a=this.zoomX()-this.zoomControl.panStepSize;this.zoomTo(this.zoomLevel(),a,this.zoomY())},moveUp:function(){var a=
this.zoomY()+this.zoomControl.panStepSize;this.zoomTo(this.zoomLevel(),this.zoomX(),a)},moveDown:function(){var a=this.zoomY()-this.zoomControl.panStepSize;this.zoomTo(this.zoomLevel(),this.zoomX(),a)},zoomX:function(){return this.mapSet?Math.round(1E4*this.mapContainer.x/this.mapWidth)/1E4:NaN},zoomY:function(){return this.mapSet?Math.round(1E4*this.mapContainer.y/this.mapHeight)/1E4:NaN},goHome:function(){this.selectObject(this.dataProvider);this.fire({type:"homeButtonClicked",chart:this})},zoomLevel:function(){return Math.round(1E5*
this.mapContainer.scale)/1E5},showDescriptionAndGetUrl:function(){var a=this.selectedObject;if(a){this.showDescription();var b=a.url;if(b)d.getURL(b,a.urlTarget);else if(b=a.linkToObject){if(d.isString(b)){var c=this.getObjectById(b);if(c){this.selectObject(c);return}}b&&a.passZoomValuesToTarget&&(b.zoomLatitude=this.zoomLatitude(),b.zoomLongitude=this.zoomLongitude(),b.zoomLevel=this.zoomLevel());this.extendMapData(b)||this.selectObject(b)}}},extendMapData:function(a){var b=a.objectType;if("MapImage"!=
b&&"MapArea"!=b&&"MapLine"!=b)return d.extend(a,new d.MapData,!0),this.dataProvider=a,this.zoomInstantly=!0,this.validateData(),!0},showDescription:function(a){a||(a=this.selectedObject);this.allowMultipleDescriptionWindows||this.closeAllDescriptions();if(a.description){var b=a.descriptionWindow;b&&b.close();b=new d.DescriptionWindow;a.descriptionWindow=b;var c=a.descriptionWindowWidth,e=a.descriptionWindowHeight,f=a.descriptionWindowLeft,g=a.descriptionWindowTop,h=a.descriptionWindowRight,k=a.descriptionWindowBottom;isNaN(h)||(f=this.realWidth-h);isNaN(k)||(g=this.realHeight-k);var l=a.descriptionWindowX;isNaN(l)||(f=l);l=a.descriptionWindowY;isNaN(l)||(g=l);isNaN(f)&&(f=this.mouseX,f=f>this.realWidth/2?f-c-20:f+20);isNaN(g)&&(g=this.mouseY);b.maxHeight=e;l=a.title;a.titleTr&&(l=a.titleTr);b.show(this,this.descriptionsDiv,a.description,l);a=b.div.style;a.position="absolute";a.width=c+"px";a.maxHeight=e+"px";isNaN(k)||(g-=b.div.offsetHeight);isNaN(h)||(f-=b.div.offsetWidth);a.left=f+"px";a.top=g+"px"}},parseXMLObject:function(a){var b={root:{}};this.parseXMLNode(b,"root",a);this.svgData=b.root.svg;this.getBounds()},getBounds:function(){var a=this.dataProvider;try{var b=this.svgData.defs["amcharts:ammap"];a.leftLongitude=Number(b.leftLongitude);a.rightLongitude=Number(b.rightLongitude);a.topLatitude=Number(b.topLatitude);a.bottomLatitude=Number(b.bottomLatitude);a.projection=b.projection;var c=b.wrappedLongitudes;c&&(a.rightLongitude+=360);a.wrappedLongitudes=c}catch(d){}},recalcLongitude:function(a){return this.dataProvider.wrappedLongitudes?a<this.dataProvider.leftLongitude?Number(a)+360:a:a},latitudeToCoordinate:function(a){var b,c=this.dataProvider;if(this.mapSet){b=c.topLatitude;var d=c.bottomLatitude;"mercator"==c.projection&&(a=this.mercatorLatitudeToCoordinate(a),b=this.mercatorLatitudeToCoordinate(b),d=this.mercatorLatitudeToCoordinate(d));b=(a-b)/(d-b)*this.mapHeight}return b},longitudeToCoordinate:function(a){a=this.recalcLongitude(a);var b,c=this.dataProvider;this.mapSet&&(b=c.leftLongitude,b=(a-b)/(c.rightLongitude-b)*this.mapWidth);
return b},mercatorLatitudeToCoordinate:function(a){89.5<a&&(a=89.5);-89.5>a&&(a=-89.5);a=d.degreesToRadians(a);return d.radiansToDegrees(.5*Math.log((1+Math.sin(a))/(1-Math.sin(a)))/2)},zoomLatitude:function(){if(this.mapContainer){var a=this.mapSet.getBBox(),b=(-this.mapContainer.x+this.previousWidth/2)/this.zoomLevel()-a.x*this.mapScale,a=(-this.mapContainer.y+this.previousHeight/2)/this.zoomLevel()-a.y*this.mapScale;return this.xyToCoordinates(b,a).latitude}},zoomLongitude:function(){if(this.mapContainer){var a=
this.mapSet.getBBox(),b=(-this.mapContainer.x+this.previousWidth/2)/this.zoomLevel()-a.x*this.mapScale,a=(-this.mapContainer.y+this.previousHeight/2)/this.zoomLevel()-a.y*this.mapScale;return this.xyToCoordinates(b,a).longitude}},getAreaCenterLatitude:function(a){a=a.displayObject.getBBox();var b=this.mapScale,c=this.mapSet.getBBox();return this.xyToCoordinates((a.x+a.width/2+this.diffX)*b-c.x*b,(a.y+a.height/2+this.diffY)*b-c.y*b).latitude},getAreaCenterLongitude:function(a){a=a.displayObject.getBBox();
var b=this.mapScale,c=this.mapSet.getBBox();return this.xyToCoordinates((a.x+a.width/2+this.diffX)*b-c.x*b,(a.y+a.height/2+this.diffY)*b-c.y*b).longitude},milesToPixels:function(a){var b=this.dataProvider;return this.mapWidth/(b.rightLongitude-b.leftLongitude)*a/69.172},kilometersToPixels:function(a){var b=this.dataProvider;return this.mapWidth/(b.rightLongitude-b.leftLongitude)*a/111.325},handleBackgroundClick:function(){if(this.backgroundZoomsToTop&&!this.mapWasDragged){var a=this.dataProvider;if(this.checkIfClickable(a))this.clickMapObject(a);else{var b=a.zoomX,c=a.zoomY,d=a.zoomLongitude,f=a.zoomLatitude,a=a.zoomLevel;isNaN(b)||isNaN(c)||this.zoomTo(a,b,c);isNaN(d)||isNaN(f)||this.zoomToLongLat(a,d,f,!0)}}},parseXMLNode:function(a,b,c,d){void 0===d&&(d="");var f,g,h;if(c){var k=c.childNodes.length;for(f=0;f<k;f++){g=c.childNodes[f];var l=g.nodeName,m=g.nodeValue?this.trim(g.nodeValue):"",n=!1;g.attributes&&0<g.attributes.length&&(n=!0);if(0!==g.childNodes.length||""!==m||!1!==n)if(3==g.nodeType||4==g.nodeType){if(""!==m){g=0;for(h in a[b])a[b].hasOwnProperty(h)&&g++;g?a[b]["#text"]=m:a[b]=m}}else if(1==g.nodeType){var p;void 0!==a[b][l]?void 0===a[b][l].length?(p=a[b][l],a[b][l]=[],a[b][l].push(p),a[b][l].push({}),p=a[b][l][1]):"object"==typeof a[b][l]&&(a[b][l].push({}),p=a[b][l][a[b][l].length-1]):(a[b][l]={},p=a[b][l]);if(g.attributes&&g.attributes.length)for(m=0;m<g.attributes.length;m++)p[g.attributes[m].name]=g.attributes[m].value;void 0!==a[b][l].length?this.parseXMLNode(a[b][l],a[b][l].length-1,g,d+"  "):this.parseXMLNode(a[b],l,g,d+"  ")}}g=0;c="";for(h in a[b])"#text"==h?c=a[b][h]:g++;0===g&&void 0===a[b].length&&(a[b]=c)}},doDoubleClickZoom:function(){if(!this.mapWasDragged){var a=this.zoomLevel()*this.zoomControl.zoomFactor;this.zoomToStageXY(a,this.mouseX,this.mouseY)}},getDevInfo:function(){var a=this.zoomLevel(),b=this.mapSet.getBBox(),b=this.xyToCoordinates((this.mouseX-this.mapContainer.x)/a-b.x*this.mapScale,(this.mouseY-this.mapContainer.y)/a-b.y*this.mapScale),
a={chart:this,type:"writeDevInfo",zoomLevel:a,zoomX:this.zoomX(),zoomY:this.zoomY(),zoomLatitude:this.zoomLatitude(),zoomLongitude:this.zoomLongitude(),latitude:b.latitude,longitude:b.longitude,left:this.mouseX,top:this.mouseY,right:this.realWidth-this.mouseX,bottom:this.realHeight-this.mouseY,percentLeft:Math.round(this.mouseX/this.realWidth*100)+"%",percentTop:Math.round(this.mouseY/this.realHeight*100)+"%",percentRight:Math.round((this.realWidth-this.mouseX)/this.realWidth*100)+"%",percentBottom:Math.round((this.realHeight-
this.mouseY)/this.realHeight*100)+"%"},b="zoomLevel:"+a.zoomLevel+", zoomLongitude:"+a.zoomLongitude+", zoomLatitude:"+a.zoomLatitude+"\n",b=b+("zoomX:"+a.zoomX+", zoomY:"+a.zoomY+"\n"),b=b+("latitude:"+a.latitude+", longitude:"+a.longitude+"\n"),b=b+("left:"+a.left+", top:"+a.top+"\n"),b=b+("right:"+a.right+", bottom:"+a.bottom+"\n"),b=b+("left:"+a.percentLeft+", top:"+a.percentTop+"\n"),b=b+("right:"+a.percentRight+", bottom:"+a.percentBottom+"\n");a.str=b;this.fire(a);return a},getXY:function(a,
b,c){void 0!==a&&(-1!=String(a).indexOf("%")?(a=Number(a.split("%").join("")),c&&(a=100-a),a=Number(a)*b/100):c&&(a=b-a));return a},getObjectById:function(a){var b=this.dataProvider;if(b.areas){var c=this.getObject(a,b.areas);if(c)return c}if(c=this.getObject(a,b.images))return c;if(a=this.getObject(a,b.lines))return a},getObject:function(a,b){if(b){var c;for(c=0;c<b.length;c++){var d=b[c];if(d.id==a)return d;if(d.areas){var f=this.getObject(a,d.areas);if(f)return f}if(f=this.getObject(a,d.images))return f;if(d=this.getObject(a,d.lines))return d}}},parseData:function(){var a=this.dataProvider;this.processObject(a.areas,a,"area");this.processObject(a.images,a,"image");this.processObject(a.lines,a,"line")},processObject:function(a,b,c){if(a){var e;for(e=0;e<a.length;e++){var f=a[e];f.parentObject=b;"area"==c&&d.extend(f,new d.MapArea(this.theme),!0);"image"==c&&(f=d.extend(f,new d.MapImage(this.theme),!0));"line"==c&&(f=d.extend(f,new d.MapLine(this.theme),!0));a[e]=f;f.areas&&this.processObject(f.areas,f,"area");f.images&&this.processObject(f.images,f,"image");f.lines&&this.processObject(f.lines,f,"line")}}},positionChanged:function(){var a={type:"positionChanged",zoomX:this.zoomX(),zoomY:this.zoomY(),zoomLevel:this.zoomLevel(),chart:this};this.fire(a)},getX:function(a,b){return this.getXY(a,this.realWidth,b)},getY:function(a,b){return this.getXY(a,this.realHeight,b)},trim:function(a){if(a){var b;for(b=0;b<a.length;b++)if(-1===" \n\r\t\f\x0B\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000".indexOf(a.charAt(b))){a=a.substring(b);break}for(b=a.length-1;0<=b;b--)if(-1===" \n\r\t\f\x0B\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000".indexOf(a.charAt(b))){a=a.substring(0,b+1);break}return-1===" \n\r\t\f\x0B\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000".indexOf(a.charAt(0))?a:""}},destroy:function(){d.AmMap.base.destroy.call(this)},x2c:function(a){var b=this.dataProvider.leftLongitude;return Math.round(this.unscaledMapWidth*(a-b)/(this.dataProvider.rightLongitude-b)*100)/100},y2c:function(a){var b=this.dataProvider.topLatitude;return Math.round(this.unscaledMapHeight*(a-b)/(this.dataProvider.bottomLatitude-b)*100)/100},normalize:function(a){if(!a.pathsArray){var b;if(a.normalized)b=a.normalized;else{var c=d.normalizePath(a.node);b=a.node.getAttribute("d");a.normalized=b;c.maxX>this.maxMapX&&(this.maxMapX=c.maxX);c.minX<this.minMapX&&(this.minMapX=c.minX);c.maxY>this.maxMapY&&(this.maxMapY=c.maxY);c.minY<this.minMapY&&
(this.minMapY=c.minY)}a.node.setAttribute("d",b)}},redraw:function(a){var b=a.normalized,b=b.split(" Z").join(""),b=b.split("M");a.pathsArray=[];for(var c=0;c<b.length;c++){var d=b[c];if(d){for(var d=d.split("L"),f=[],g=0;g<d.length;g++)if(d[g]){var h=d[g].split(" "),h=this.xyToCoordinates(Number(h[1])-this.minMapX,Number(h[2])-this.minMapY,this.dpProjectionFunction,this.sourceMapWidth,this.sourceMapHeight);f.push([h.longitude,h.latitude])}a.pathsArray.push(f)}}b="";for(c=0;c<a.pathsArray.length;c++)b+=this.redrawArea(a.pathsArray[c]);a.node.setAttribute("d",b);a.path=b},redrawArea:function(a){for(var b=!1,c="",e=0;e<a.length;e++){var f=a[e][0],g=a[e][1],h=d.degreesToRadians(a[e][0]),k=d.degreesToRadians(a[e][1]),k=this.projectionFunction(h,k),h=d.roundTo(this.x2c(d.radiansToDegrees(k[0])),3),k=d.roundTo(this.y2c(d.radiansToDegrees(k[1])),3);h<this.minMapXX&&(this.minMapXX=h,this.leftLongLat={longitude:f,latitude:g});h>this.maxMapXX&&(this.maxMapXX=h,this.rightLongLat={longitude:f,latitude:g});k<this.minMapYY&&(this.minMapYY=k,this.topLongLat={longitude:f,latitude:g});k>this.maxMapYY&&(this.maxMapYY=k,this.bottomLongLat={longitude:f,latitude:g});b?c+=" L ":(c+=" M ",b=!0);c+=h+" "+k}return c+" Z "},normalizeMap:function(){var a=d.degreesToRadians(this.dataProvider.leftLongitude),b=d.degreesToRadians(this.dataProvider.rightLongitude),c=d.degreesToRadians(this.dataProvider.topLatitude),e=d.degreesToRadians(this.dataProvider.bottomLatitude),f=a+(b-a)/2,g=c+(e-c)/2,h=this.dpProjectionFunction(f,
c)[1],k=this.dpProjectionFunction(f,e)[1],l=this.dpProjectionFunction(a,g)[0],m=this.dpProjectionFunction(b,g)[0],c=d.equirectangular(f,c),e=d.equirectangular(f,e),h=(c[1]-e[1])/(h-k),a=d.equirectangular(a,g),b=d.equirectangular(b,g),l=(a[0]-b[0])/(l-m);this.minMapX=Infinity;this.maxMapX=-Infinity;this.minMapY=Infinity;this.maxMapY=-Infinity;for(m=0;m<this.svgAreas.length;m++)this.normalize(this.svgAreas[m]);this.sourceMapHeight=Math.abs(this.maxMapY-this.minMapY);this.sourceMapWidth=Math.abs(this.maxMapX-
this.minMapX);this.unscaledMapWidth=this.sourceMapWidth*l;this.unscaledMapHeight=this.sourceMapHeight*h;this.diffY=this.diffX=0},fixMapPosition:function(){var a=d.degreesToRadians(this.dataProvider.leftLongitude),b=d.degreesToRadians(this.dataProvider.rightLongitude),c=d.degreesToRadians(this.dataProvider.topLatitude),e=d.degreesToRadians(this.dataProvider.bottomLatitude),f=a+(b-a)/2,g=c+(e-c)/2,h=this.dpProjectionFunction(f,c)[1],k=this.dpProjectionFunction(f,e)[1],l=this.dpProjectionFunction(a,
g)[0],m=this.dpProjectionFunction(b,g)[0];this.sourceMapHeight=this.mapHeight/this.mapScale;this.sourceMapWidth=this.mapWidth/this.mapScale;this.unscaledMapWidth=(a-b)/(l-m)*this.sourceMapWidth;this.unscaledMapHeight=(c-e)/(h-k)*this.sourceMapHeight;b=this.coordinatesToXY(d.radiansToDegrees(f),d.radiansToDegrees(c));a=this.coordinatesToXY(d.radiansToDegrees(a),d.radiansToDegrees(g));c=g=Infinity;for(e=0;e<this.svgAreas.length;e++)f=this.svgAreas[e].getBBox(),f.y<g&&(g=f.y),f.x<c&&(c=f.x);this.diffY=
b.y/this.mapScale-g;this.diffX=a.x/this.mapScale-c;for(e=0;e<this.svgAreas.length;e++)this.svgAreas[e].translate(this.diffX,this.diffY)},changeProjection:function(){this.minMapXX=Infinity;this.maxMapXX=-Infinity;this.minMapYY=Infinity;this.maxMapYY=-Infinity;this.projectionChanged=!1;for(var a=0;a<this.svgAreas.length;a++)this.redraw(this.svgAreas[a]);this.projectionChanged=!0;this.resizeMap()},coordinatesToXY:function(a,b){var c,e;c=!1;this.dataProvider&&(c=this.dataProvider.wrappedLongitudes)&&(a=this.recalcLongitude(a));this.projectionFunction?(e=this.projectionFunction(d.degreesToRadians(a),d.degreesToRadians(b)),c=this.mapScale*d.roundTo(this.x2c(d.radiansToDegrees(e[0])),3),e=this.mapScale*d.roundTo(this.y2c(d.radiansToDegrees(e[1])),3)):(c=this.longitudeToCoordinate(a),e=this.latitudeToCoordinate(b));return{x:c,y:e}},coordinatesToStageXY:function(a,b){var c=this.coordinatesToXY(a,b),d=c.x*this.zoomLevel()+this.mapContainer.x,c=c.y*this.zoomLevel()+this.mapContainer.y;return{x:d,y:c}},stageXYToCoordinates:function(a,b){var c=this.mapSet.getBBox(),d=(a-this.mapContainer.x)/this.zoomLevel()-c.x*this.mapScale,c=(b-this.mapContainer.y)/this.zoomLevel()-c.y*this.mapScale;return this.xyToCoordinates(d,c)},xyToCoordinates:function(a,b,c,e,f){var g;isNaN(e)&&(e=this.mapWidth);isNaN(f)&&(f=this.mapHeight);c||(c=this.projectionFunction);if(g=c.invert){var h=this.dataProvider.leftLongitude,k=this.dataProvider.rightLongitude,l=this.dataProvider.topLatitude,m=this.dataProvider.bottomLatitude,
n=h+(k-h)/2,p=l+(m-l)/2,l=d.radiansToDegrees(c(d.degreesToRadians(n),d.degreesToRadians(l))[1]),m=d.radiansToDegrees(c(d.degreesToRadians(n),d.degreesToRadians(m))[1]),h=d.radiansToDegrees(c(d.degreesToRadians(h),d.degreesToRadians(p))[0]),k=d.radiansToDegrees(c(d.degreesToRadians(k),d.degreesToRadians(p))[0]);this.projectionChanged&&(l=d.radiansToDegrees(c(d.degreesToRadians(this.topLongLat.longitude),d.degreesToRadians(this.topLongLat.latitude))[1]),m=d.radiansToDegrees(c(d.degreesToRadians(this.bottomLongLat.longitude),
d.degreesToRadians(this.bottomLongLat.latitude))[1]),h=d.radiansToDegrees(c(d.degreesToRadians(this.leftLongLat.longitude),d.degreesToRadians(this.leftLongLat.latitude))[0]),k=d.radiansToDegrees(c(d.degreesToRadians(this.rightLongLat.longitude),d.degreesToRadians(this.rightLongLat.latitude))[0]));a=d.degreesToRadians(a/e*(k-h)+h);b=d.degreesToRadians(b/f*(m-l)+l);b=g(a,b);g=d.radiansToDegrees(b[0]);b=d.radiansToDegrees(b[1])}else g=this.coordinateToLongitude(a),b=this.coordinateToLatitude(b);return{longitude:d.roundTo(g,4),latitude:d.roundTo(b,4)}},coordinateToLatitude:function(a,b){var c;void 0===b&&(b=this.mapHeight);if(this.mapSet){var e=this.dataProvider,f=e.bottomLatitude;c=e.topLatitude;"mercator"==e.projection?(e=this.mercatorLatitudeToCoordinate(f),c=this.mercatorLatitudeToCoordinate(c),c=2*d.degreesToRadians(a*(e-c)/b+c),c=d.radiansToDegrees(2*Math.atan(Math.exp(c))-.5*Math.PI)):c=a/b*(f-c)+c}return Math.round(1E6*c)/1E6},coordinateToLongitude:function(a,b){var c,d=this.dataProvider;void 0===b&&(b=this.mapWidth);
this.mapSet&&(c=a/b*(d.rightLongitude-d.leftLongitude)+d.leftLongitude);return Math.round(1E6*c)/1E6}})})();(function(){var d=window.AmCharts;d.ZoomControl=d.Class({construct:function(a){this.cname="ZoomControl";this.panStepSize=.1;this.zoomFactor=2;this.maxZoomLevel=64;this.minZoomLevel=1;this.panControlEnabled=!1;this.zoomControlEnabled=!0;this.buttonRollOverColor="#DADADA";this.buttonFillColor="#FFFFFF";this.buttonFillAlpha=1;this.buttonBorderColor="#000000";this.buttonBorderAlpha=.1;this.buttonIconAlpha=this.buttonBorderThickness=1;this.gridColor=this.buttonIconColor="#000000";this.homeIconFile="homeIcon.gif";
this.gridBackgroundColor="#000000";this.draggerAlpha=this.gridAlpha=this.gridBackgroundAlpha=0;this.draggerSize=this.buttonSize=31;this.iconSize=11;this.homeButtonEnabled=!0;this.buttonCornerRadius=2;this.gridHeight=5;this.roundButtons=!0;this.top=this.left=10;d.applyTheme(this,a,this.cname)},init:function(a,b){var c=this;c.chart=a;d.remove(c.set);var e=b.set();d.setCN(a,e,"zoom-control");var f=c.buttonSize,g=c.zoomControlEnabled,h=c.panControlEnabled,k=c.buttonFillColor,l=c.buttonFillAlpha,m=c.buttonBorderThickness,n=c.buttonBorderColor,p=c.buttonBorderAlpha,t=c.buttonCornerRadius,r=c.buttonRollOverColor,q=c.gridHeight,y=c.zoomFactor,B=c.minZoomLevel,u=c.maxZoomLevel,w=c.buttonIconAlpha,v=c.buttonIconColor,A=c.roundButtons,C=a.svgIcons,x=a.getX(c.left),z=a.getY(c.top);isNaN(c.right)||(x=a.getX(c.right,!0),x=h?x-3*f:x-f);isNaN(c.bottom)||(z=a.getY(c.bottom,!0),g&&(z-=q+3*f),z=h?z-3*f:c.homeButtonEnabled?z-.5*f:z+f);e.translate(x,z);c.previousDY=NaN;var F,x=f/4-1;if(g){F=b.set();d.setCN(a,F,"zoom-control-zoom");e.push(F);c.set=e;c.zoomSet=F;5<q&&(g=d.rect(b,f+6,q+2*f+6,c.gridBackgroundColor,c.gridBackgroundAlpha,0,"#000000",0,4),d.setCN(a,g,"zoom-bg"),g.translate(-3,-3),g.mouseup(function(){c.handleBgUp()}).touchend(function(){c.handleBgUp()}),F.push(g));var E=f;A&&(E=f/1.5);c.draggerSize=E;var H=Math.log(u/B)/Math.log(y)+1;1E3<H&&(H=1E3);var g=q/H,G,D=b.set();D.translate((f-E)/2+1,1,NaN,!0);F.push(D);for(G=1;G<H;G++)z=f+G*g,z=d.line(b,[1,E-2],[z,z],c.gridColor,c.gridAlpha,1),d.setCN(a,z,"zoom-grid"),D.push(z);
z=new d.SimpleButton;z.setDownHandler(c.draggerDown,c);z.setClickHandler(c.draggerUp,c);z.init(b,E,g,k,l,m,n,p,t,r);d.setCN(a,z.set,"zoom-dragger");F.push(z.set);z.set.setAttr("opacity",c.draggerAlpha);c.dragger=z.set;c.previousY=NaN;z=new d.SimpleButton;C?(E=b.set(),H=d.line(b,[-x,x],[0,0],v,w,1),G=d.line(b,[0,0],[-x,x],v,w,1),E.push(H),E.push(G),z.svgIcon=E):z.setIcon(a.pathToImages+"plus.gif",c.iconSize);z.setClickHandler(a.zoomIn,a);z.init(b,f,f,k,l,m,n,p,t,r,w,v,A);d.setCN(a,z.set,"zoom-in");F.push(z.set);z=new d.SimpleButton;C?z.svgIcon=d.line(b,[-x,x],[0,0],v,w,1):z.setIcon(a.pathToImages+"minus.gif",c.iconSize);z.setClickHandler(a.zoomOut,a);z.init(b,f,f,k,l,m,n,p,t,r,w,v,A);z.set.translate(0,q+f);d.setCN(a,z.set,"zoom-out");F.push(z.set);q-=g;u=Math.log(u/100)/Math.log(y);c.realStepSize=q/(u-Math.log(B/100)/Math.log(y));c.realGridHeight=q;c.stepMax=u}h&&(h=b.set(),d.setCN(a,h,"zoom-control-pan"),e.push(h),F&&F.translate(f,4*f),y=new d.SimpleButton,C?y.svgIcon=d.line(b,[x/5,-x+x/5,
x/5],[-x,0,x],v,w,1):y.setIcon(a.pathToImages+"panLeft.gif",c.iconSize),y.setClickHandler(a.moveLeft,a),y.init(b,f,f,k,l,m,n,p,t,r,w,v,A),y.set.translate(0,f),d.setCN(a,y.set,"pan-left"),h.push(y.set),y=new d.SimpleButton,C?y.svgIcon=d.line(b,[-x/5,x-x/5,-x/5],[-x,0,x],v,w,1):y.setIcon(a.pathToImages+"panRight.gif",c.iconSize),y.setClickHandler(a.moveRight,a),y.init(b,f,f,k,l,m,n,p,t,r,w,v,A),y.set.translate(2*f,f),d.setCN(a,y.set,"pan-right"),h.push(y.set),y=new d.SimpleButton,C?y.svgIcon=d.line(b,[-x,0,x],[x/5,-x+x/5,x/5],v,w,1):y.setIcon(a.pathToImages+"panUp.gif",c.iconSize),y.setClickHandler(a.moveUp,a),y.init(b,f,f,k,l,m,n,p,t,r,w,v,A),y.set.translate(f,0),d.setCN(a,y.set,"pan-up"),h.push(y.set),y=new d.SimpleButton,C?y.svgIcon=d.line(b,[-x,0,x],[-x/5,x-x/5,-x/5],v,w,1):y.setIcon(a.pathToImages+"panDown.gif",c.iconSize),y.setClickHandler(a.moveDown,a),y.init(b,f,f,k,l,m,n,p,t,r,w,v,A),y.set.translate(f,2*f),d.setCN(a,y.set,"pan-down"),h.push(y.set),e.push(h));c.homeButtonEnabled&&(h=new d.SimpleButton,C?h.svgIcon=d.polygon(b,[-x,0,x,x-1,x-1,2,2,-2,-2,-x+1,-x+1],[0,-x,0,0,x-1,x-1,2,2,x-1,x-1,0],v,w,1,v,w):h.setIcon(a.pathToImages+c.homeIconFile,c.iconSize),h.setClickHandler(a.goHome,a),c.panControlEnabled&&(p=l=0),h.init(b,f,f,k,l,m,n,p,t,r,w,v,A),c.panControlEnabled?h.set.translate(f,f):F&&F.translate(0,1.5*f),d.setCN(a,h.set,"pan-home"),e.push(h.set));c.update()},draggerDown:function(){this.chart.stopDrag();this.isDragging=!0},draggerUp:function(){this.isDragging=!1},handleBgUp:function(){var a=this.chart;a.zoomTo(100*Math.pow(this.zoomFactor,this.stepMax-(a.mouseY-this.zoomSet.y-this.set.y-this.buttonSize-this.realStepSize/2)/this.realStepSize))},update:function(){var a;a=this.zoomFactor;var b=this.realStepSize,c=this.stepMax,e=this.dragger,f=this.buttonSize,g,h=this.chart;h&&(this.isDragging?(h.stopDrag(),g=e.y+(h.mouseY-this.previousY),g=d.fitToBounds(g,f,this.realGridHeight+f),h.zoomTo(100*Math.pow(a,c-(g-f)/b),NaN,NaN,!0)):(a=Math.log(h.zoomLevel()/100)/Math.log(a),g=(c-a)*b+f),this.previousY=
h.mouseY,this.previousDY!=g&&e&&(e.translate((this.buttonSize-this.draggerSize)/2,g),this.previousDY=g))}})})();(function(){var d=window.AmCharts;d.SimpleButton=d.Class({construct:function(){},init:function(a,b,c,e,f,g,h,k,l,m,n,p,t){var r=this;r.rollOverColor=m;r.color=e;r.container=a;m=a.set();r.set=m;t?(b/=2,e=d.circle(a,b,e,f,g,h,k),e.translate(b,b)):e=d.rect(a,b,c,e,f,g,h,k,l);m.push(e);f=r.iconPath;var q;f&&(q=r.iconSize,g=(b-q)/2,t&&(g=(2*b-q)/2),q=a.image(f,g,(c-q)/2,q,q));r.svgIcon&&(q=r.svgIcon,t?q.translate(b,b):q.translate(b/2,b/2));m.setAttr("cursor","pointer");q&&(m.push(q),q.setAttr("opacity",
n),q.node.style.pointerEvents="none");e.mousedown(function(){r.handleDown()}).touchstart(function(){r.handleDown()}).mouseup(function(){r.handleUp()}).touchend(function(){r.handleUp()}).mouseover(function(){r.handleOver()}).mouseout(function(){r.handleOut()});r.bg=e},setIcon:function(a,b){this.iconPath=a;this.iconSize=b},setClickHandler:function(a,b){this.clickHandler=a;this.scope=b},setDownHandler:function(a,b){this.downHandler=a;this.scope=b},handleUp:function(){var a=this.clickHandler;a&&a.call(this.scope)},handleDown:function(){var a=this.downHandler;a&&a.call(this.scope)},handleOver:function(){this.container.chart.skipClick=!0;this.bg.setAttr("fill",this.rollOverColor)},handleOut:function(){this.container.chart.skipClick=!1;this.bg.setAttr("fill",this.color)}})})();(function(){var d=window.AmCharts;d.SmallMap=d.Class({construct:function(a){this.cname="SmallMap";this.mapColor="#e6e6e6";this.rectangleColor="#FFFFFF";this.top=this.right=10;this.minimizeButtonWidth=23;this.backgroundColor="#9A9A9A";this.backgroundAlpha=1;this.borderColor="#FFFFFF";this.iconColor="#000000";this.borderThickness=3;this.borderAlpha=1;this.size=.2;this.enabled=!0;d.applyTheme(this,a,this.cname)},init:function(a,b){var c=this;if(c.enabled){c.chart=a;c.container=b;c.width=a.realWidth*c.size;c.height=a.realHeight*c.size;d.remove(c.mapSet);d.remove(c.allSet);d.remove(c.set);var e=b.set();c.set=e;d.setCN(a,e,"small-map");var f=b.set();c.allSet=f;e.push(f);c.buildSVGMap();var g=c.borderThickness,h=c.borderColor,k=d.rect(b,c.width+g,c.height+g,c.backgroundColor,c.backgroundAlpha,g,h,c.borderAlpha);d.setCN(a,k,"small-map-bg");k.translate(-g/2,-g/2);f.push(k);k.toBack();var l,m,k=c.minimizeButtonWidth,n=new d.SimpleButton,p=k/2;a.svgIcons?n.svgIcon=d.line(b,[-p/2,0,p/2],[-p/4,p/4,-p/
4],c.iconColor,1,1):n.setIcon(a.pathToImages+"arrowDown.gif",k);n.setClickHandler(c.minimize,c);n.init(b,k,k,h,1,1,h,1);d.setCN(a,n.set,"small-map-down");n=n.set;c.downButtonSet=n;e.push(n);var t=new d.SimpleButton;a.svgIcons?t.svgIcon=d.line(b,[-p/2,0,p/2],[p/4,-p/4,p/4],c.iconColor,1,1):t.setIcon(a.pathToImages+"arrowUp.gif",k);t.setClickHandler(c.maximize,c);t.init(b,k,k,h,1,1,h,1);d.setCN(a,t.set,"small-map-up");h=t.set;c.upButtonSet=h;h.hide();e.push(h);var r,q;isNaN(c.top)||(l=a.getY(c.top)+
g,q=0);isNaN(c.bottom)||(l=a.getY(c.bottom,!0)-c.height-g,q=c.height-k+g/2);isNaN(c.left)||(m=a.getX(c.left)+g,r=-g/2);isNaN(c.right)||(m=a.getX(c.right,!0)-c.width-g,r=c.width-k+g/2);g=b.set();g.clipRect(1,1,c.width,c.height);f.push(g);c.rectangleC=g;e.translate(m,l);n.translate(r,q);h.translate(r,q);f.mouseup(function(){c.handleMouseUp()});c.drawRectangle()}else d.remove(c.allSet),d.remove(c.downButtonSet),d.remove(c.upButtonSet)},minimize:function(){this.downButtonSet.hide();this.upButtonSet.show();this.allSet.hide()},maximize:function(){this.downButtonSet.show();this.upButtonSet.hide();this.allSet.show()},buildSVGMap:function(){var a=this.chart,b={fill:this.mapColor,stroke:this.mapColor,"stroke-opacity":1},c=this.container,e=c.set();d.setCN(a,e,"small-map-image");var f;for(f=0;f<a.svgAreas.length;f++){var g=c.path(a.svgAreas[f].path).attr(b);e.push(g)}this.allSet.push(e);b=e.getBBox();c=this.size*a.mapScale;f=-b.x*c;var g=-b.y*c,h=0,k=0;a.centerMap&&(h=(this.width-b.width*c)/2,k=(this.height-
b.height*c)/2);this.mapWidth=b.width*c;this.mapHeight=b.height*c;f+=h;g+=k;this.dx=h;this.dy=k;e.translate(f,g,c);this.mapSet=e;this.mapX=f;this.mapY=g},update:function(){var a=this.chart;if(a){var b=a.zoomLevel(),c=this.width,d=this.height,f=c/(a.realWidth*b),g=a.mapContainer.getBBox(),c=c/b,d=d/b,h=this.rectangle;h.translate(-(a.mapContainer.x+g.x*b)*f+this.dx,-(a.mapContainer.y+g.y*b)*f+this.dy);0<c&&0<d&&(h.setAttr("width",Math.ceil(c+1)),h.setAttr("height",Math.ceil(d+1)));this.rWidth=c;this.rHeight=
d}},drawRectangle:function(){var a=this.rectangle;d.remove(a);a=d.rect(this.container,10,10,"#000",0,1,this.rectangleColor,1);d.setCN(this.chart,a,"small-map-rectangle");this.rectangleC.push(a);this.rectangle=a},handleMouseUp:function(){var a=this.chart,b=a.zoomLevel();a.zoomToMapXY(b,(a.mouseX-this.set.x-this.mapX)/this.size+a.diffX*a.mapScale,(a.mouseY-this.set.y-this.mapY)/this.size+a.diffY*a.mapScale)}})})();(function(){var d=window.AmCharts;d.AreasProcessor=d.Class({construct:function(a){this.chart=a},process:function(a){this.updateAllAreas();this.allObjects=[];a=a.areas;var b=this.chart;b.outlines=[];var c=a.length,d,f,g=0,h=!1,k=!1,l=0;for(d=0;d<c;d++)if(f=a[d],f.value=Number(f.value),f=f.value,!isNaN(f)){if(!1===h||h<f)h=f;if(!1===k||k>f)k=f;g+=Math.abs(f);l++}this.minValue=k;this.maxValue=h;isNaN(b.minValue)||(this.minValue=b.minValue);isNaN(b.maxValue)||(this.maxValue=b.maxValue);b.maxValueReal=
h;b.minValueReal=k;for(d=0;d<c;d++)f=a[d],isNaN(f.value)?f.percents=void 0:(f.percents=(f.value-k)/g*100,k==h&&(f.percents=100));for(d=0;d<c;d++)f=a[d],this.createArea(f);b.outlinesToFront()},updateAllAreas:function(){var a=this.chart,b=a.areasSettings,c=b.unlistedAreasColor,e=b.unlistedAreasAlpha,f=b.unlistedAreasOutlineColor,g=b.unlistedAreasOutlineAlpha,h=a.svgAreas,k=a.dataProvider,l=k.areas,m={},n;for(n=0;n<l.length;n++)m[l[n].id]=l[n];for(n=0;n<h.length;n++){l=h[n];if(b.preserveOriginalAttributes){if(l.customAttr)for(var p in l.customAttr)l.setAttr(p,
l.customAttr[p])}else{void 0!=c&&l.setAttr("fill",c);isNaN(e)||l.setAttr("fill-opacity",e);void 0!=f&&l.setAttr("stroke",f);isNaN(g)||l.setAttr("stroke-opacity",g);var t=b.outlineThickness;b.adjustOutlineThickness&&(t=t/a.zoomLevel()/a.mapScale);l.setAttr("stroke-width",t)}d.setCN(a,l,"map-area-unlisted");k.getAreasFromMap&&!m[l.id]&&(t=new d.MapArea(a.theme),t.parentObject=k,t.id=l.id,t.outline=l.outline,k.areas.push(t))}},createArea:function(a){var b=this.chart,c=b.svgAreasById[a.id],e=b.areasSettings;
if(c&&c.className){var f=b.areasClasses[c.className];f&&(e=d.processObject(f,d.AreasSettings,b.theme))}var g=e.color,h=e.alpha,k=e.outlineThickness,l=e.rollOverColor,m=e.selectedColor,n=e.rollOverAlpha,p=e.rollOverBrightness,t=e.outlineColor,r=e.outlineAlpha,q=e.balloonText,y=e.selectable,B=e.pattern,u=e.rollOverOutlineColor,w=e.bringForwardOnHover,v=e.preserveOriginalAttributes;this.allObjects.push(a);a.chart=b;a.baseSettings=e;a.autoZoomReal=void 0==a.autoZoom?e.autoZoom:a.autoZoom;f=a.color;void 0==f&&(f=g);var A=a.alpha;isNaN(A)&&(A=h);h=a.rollOverAlpha;isNaN(h)&&(h=n);isNaN(h)&&(h=A);n=a.rollOverColor;void 0==n&&(n=l);l=a.pattern;void 0==l&&(l=B);B=a.selectedColor;void 0==B&&(B=m);m=a.balloonText;void 0===m&&(m=q);void 0==e.colorSolid||isNaN(a.value)||(q=Math.floor((a.value-this.minValue)/((this.maxValue-this.minValue)/b.colorSteps)),q==b.colorSteps&&q--,q*=1/(b.colorSteps-1),this.maxValue==this.minValue&&(q=1),a.colorReal=d.getColorFade(f,e.colorSolid,q));void 0!=a.color&&(a.colorReal=a.color);
void 0==a.selectable&&(a.selectable=y);void 0==a.colorReal&&(a.colorReal=g);g=a.outlineColor;void 0==g&&(g=t);t=a.outlineAlpha;isNaN(t)&&(t=r);r=a.outlineThickness;isNaN(r)&&(r=k);k=a.rollOverOutlineColor;void 0==k&&(k=u);u=a.rollOverBrightness;void 0==u&&(u=p);void 0==a.bringForwardOnHover&&(a.bringForwardOnHover=w);void 0==a.preserveOriginalAttributes&&(a.preserveOriginalAttributes=v);isNaN(e.selectedBrightness)||(B=d.adjustLuminosity(a.colorReal,e.selectedBrightness/100));a.alphaReal=A;a.rollOverColorReal=n;a.rollOverAlphaReal=h;a.balloonTextReal=m;a.selectedColorReal=B;a.outlineColorReal=g;a.outlineAlphaReal=t;a.rollOverOutlineColorReal=k;a.outlineThicknessReal=r;a.patternReal=l;a.rollOverBrightnessReal=u;a.accessibleLabel||(a.accessibleLabel=e.accessibleLabel);d.processDescriptionWindow(e,a);if(c&&(p=c.area,w=c.title,a.enTitle=c.title,w&&!a.title&&(a.title=w),(c=b.language)?(w=d.mapTranslations)&&(c=w[c])&&c[a.enTitle]&&(a.titleTr=c[a.enTitle]):a.titleTr=void 0,p)){c=a.tabIndex;void 0===c&&(c=e.tabIndex);void 0!==c&&p.setAttr("tabindex",c);a.displayObject=p;a.outline&&(A=0,a.alphaReal=0,a.rollOverAlphaReal=0,a.mouseEnabled=!1,b.outlines.push(p),p.node.setAttribute("pointer-events","none"));a.mouseEnabled&&b.addObjectEventListeners(p,a);var C;void 0!=f&&(C=f);void 0!=a.colorReal&&(C=a.showAsSelected||b.selectedObject==a?a.selectedColorReal:a.colorReal);p.node.setAttribute("class","");d.setCN(b,p,"map-area");d.setCN(b,p,"map-area-"+p.id);e.adjustOutlineThickness&&(r=r/b.zoomLevel()/b.mapScale);a.preserveOriginalAttributes||
(p.setAttr("fill",C),p.setAttr("stroke",g),p.setAttr("stroke-opacity",t),p.setAttr("stroke-width",r),p.setAttr("fill-opacity",A));b.makeObjectAccessible(a);l&&p.pattern(l,b.mapScale,b.path);a.hidden&&p.hide()}}})})();(function(){var d=window.AmCharts;d.AreasSettings=d.Class({construct:function(a){this.cname="AreasSettings";this.alpha=1;this.autoZoom=!1;this.balloonText="[[title]]";this.color="#FFCC00";this.colorSolid="#990000";this.unlistedAreasAlpha=1;this.unlistedAreasColor="#DDDDDD";this.outlineColor="#FFFFFF";this.outlineThickness=this.outlineAlpha=1;this.selectedColor=this.rollOverOutlineColor="#CC0000";this.unlistedAreasOutlineColor="#FFFFFF";this.unlistedAreasOutlineAlpha=1;this.descriptionWindowWidth=250;this.bringForwardOnHover=this.adjustOutlineThickness=!0;this.accessibleLabel="[[title]] [[value]] [[description]]";d.applyTheme(this,a,this.cname)}})})();(function(){var d=window.AmCharts;d.ImagesProcessor=d.Class({construct:function(a){this.chart=a;this.reset()},process:function(a){var b=a.images,c;for(c=b.length-1;0<=c;c--){var d=b[c];this.createImage(d,c);d.parentArray=b}this.counter=c;a.parentObject&&a.remainVisible&&this.process(a.parentObject)},createImage:function(a,b){a=d.processObject(a,d.MapImage);a.arrays=[];isNaN(b)&&(this.counter++,b=this.counter);var c=this.chart,e=c.container,f=c.mapImagesContainer,g=c.stageImagesContainer,h=c.imagesSettings;a.remove&&a.remove();var k=h.color,l=h.alpha,m=h.rollOverColor,n=h.rollOverOutlineColor,p=h.selectedColor,t=h.balloonText,r=h.outlineColor,q=h.outlineAlpha,y=h.outlineThickness,B=h.selectedScale,u=h.rollOverScale,w=h.selectable,v=h.labelPosition,A=h.labelColor,C=h.labelFontSize,x=h.bringForwardOnHover,z=h.labelRollOverColor,F=h.rollOverBrightness,E=h.selectedLabelColor;a.index=b;a.chart=c;a.baseSettings=c.imagesSettings;var H=e.set();a.displayObject=H;var G=a.color;void 0==G&&(G=k);k=a.alpha;isNaN(k)&&(k=l);void 0==a.bringForwardOnHover&&(a.bringForwardOnHover=x);l=a.outlineAlpha;isNaN(l)&&(l=q);q=a.rollOverColor;void 0==q&&(q=m);m=a.selectedColor;void 0==m&&(m=p);p=a.balloonText;void 0===p&&(p=t);t=a.outlineColor;void 0==t&&(t=r);a.outlineColorReal=t;r=a.outlineThickness;isNaN(r)&&(r=y);(y=a.labelPosition)||(y=v);v=a.labelColor;void 0==v&&(v=A);A=a.labelRollOverColor;void 0==A&&(A=z);z=a.selectedLabelColor;void 0==z&&(z=E);E=a.labelFontSize;isNaN(E)&&(E=C);C=a.selectedScale;isNaN(C)&&(C=B);B=a.rollOverScale;isNaN(B)&&(B=u);u=a.rollOverBrightness;void 0==u&&(u=F);void 0==a.selectable&&(a.selectable=w);a.colorReal=G;isNaN(h.selectedBrightness)||(m=d.adjustLuminosity(a.colorReal,h.selectedBrightness/100));a.alphaReal=k;a.rollOverColorReal=q;a.balloonTextReal=p;a.selectedColorReal=m;a.labelColorReal=v;a.labelRollOverColorReal=A;a.selectedLabelColorReal=z;a.labelFontSizeReal=E;a.labelPositionReal=y;a.selectedScaleReal=C;a.rollOverScaleReal=B;a.rollOverOutlineColorReal=n;a.rollOverBrightnessReal=u;a.accessibleLabel||(a.accessibleLabel=h.accessibleLabel);d.processDescriptionWindow(h,a);a.centeredReal=void 0==a.centered?h.centered:a.centered;n=a.type;u=a.imageURL;B=a.svgPath;C=a.width;E=a.height;w=a.scale;isNaN(a.percentWidth)||(C=a.percentWidth/100*c.realWidth);isNaN(a.percentHeight)||(E=a.percentHeight/100*c.realHeight);var D;u||n||B||(n="circle",C=1,l=k=0);q=F=0;h=a.selectedColorReal;if(n){isNaN(C)&&(C=10);isNaN(E)&&(E=10);"kilometers"==a.widthAndHeightUnits&&(C=c.kilometersToPixels(a.width),E=c.kilometersToPixels(a.height));"miles"==a.widthAndHeightUnits&&(C=c.milesToPixels(a.width),E=c.milesToPixels(a.height));if("circle"==n||"bubble"==n)E=C;D=this.createPredefinedImage(G,t,r,n,C,E);q=F=0;a.centeredReal?(isNaN(a.right)||(F=C*w),isNaN(a.bottom)||(q=E*w)):(F=C*w/2,q=E*w/2);D.translate(F,q,w,!0)}else u?(isNaN(C)&&(C=10),isNaN(E)&&(E=10),D=e.image(u,0,0,C,E),D.node.setAttribute("preserveAspectRatio","none"),D.setAttr("opacity",k),a.centeredReal&&(F=isNaN(a.right)?-C/2:C/2,q=isNaN(a.bottom)?-E/2:E/2,D.translate(F,q,NaN,!0))):B&&(D=e.path(B),u=D.getBBox(),a.centeredReal?(F=-u.x*w-u.width*w/2,isNaN(a.right)||(F=-F),q=-u.y*w-u.height*w/2,isNaN(a.bottom)||(q=-q)):F=q=0,D.translate(F,q,w,!0),D.x=F,D.y=q);D&&(H.push(D),a.image=D,D.setAttr("stroke-opacity",l),D.setAttr("stroke-width",r),D.setAttr("stroke",t),D.setAttr("fill-opacity",k),"bubble"!=n&&D.setAttr("fill",G),d.setCN(c,D,"map-image"),void 0!=a.id&&d.setCN(c,D,"map-image-"+a.id));G=a.labelColorReal;!a.showAsSelected&&c.selectedObject!=a||void 0==h||(D&&D.setAttr("fill",h),G=a.selectedLabelColorReal);D=null;void 0!==a.label&&(D=d.text(e,a.label,G,c.fontFamily,a.labelFontSizeReal,a.labelAlign),d.setCN(c,D,"map-image-label"),void 0!==a.id&&d.setCN(c,D,"map-image-label-"+a.id),G=a.labelBackgroundAlpha,(k=a.labelBackgroundColor)&&0<G&&(l=D.getBBox(),e=d.rect(e,l.width+16,l.height+10,k,G),d.setCN(c,e,"map-image-label-background"),void 0!=a.id&&d.setCN(c,e,"map-image-label-background-"+a.id),H.push(e),a.labelBG=e),a.imageLabel=D,H.push(D),d.setCN(c,H,"map-image-container"),void 0!=a.id&&d.setCN(c,H,"map-image-container-"+a.id),this.labelsToReposition.push(a),a.arrays.push({arr:this.labelsToReposition,el:a}));e=isNaN(a.latitude)||isNaN(a.longitude)?!0:!1;a.lineId&&(D=this.chart.getObjectById(a.lineId))&&0<D.longitudes.length&&(e=!1);e?g.push(H):f.push(H);H.toBack();H&&(H.rotation=a.rotation,isNaN(a.rotation)||H.rotate(a.rotation),a.arrays.push({arr:this.allSvgObjects,el:H}),this.allSvgObjects.push(H));this.allObjects.push(a);c.makeObjectAccessible(a);f=a.tabIndex;void 0===f&&(f=c.imagesSettings.tabIndex);void 0!==f&&H.setAttr("tabindex",f);a.arrays.push({arr:this.allObjects,el:a});isNaN(a.longitude)||isNaN(a.latitude)||!a.fixedSize||(a.objToResize={image:H,mapImage:a,scale:1},this.objectsToResize.push(a.objToResize),a.arrays.push({arr:this.objectsToResize,el:a.objToResize}));this.updateSizeAndPosition(a);a.mouseEnabled&&c.addObjectEventListeners(H,a);a.hidden&&H.hide();d.removeFromArray(c.updatableImages,a);a.animateAlongLine&&(c.updatableImages.push(a),a.delayAnimateAlong());return a},updateSizeAndPosition:function(a){var b=this.chart,c=a.displayObject,e=b.getX(a.left),f=b.getY(a.top),g,h=a.image.getBBox();isNaN(a.right)||(e=b.getX(a.right,!0)-h.width*a.scale);isNaN(a.bottom)||(f=b.getY(a.bottom,!0)-h.height*a.scale);var k=a.longitude,l=a.latitude,m=a.positionOnLine,h=a.imageLabel,n=this.chart.zoomLevel(),p,t;a.lineId&&(a.line=this.chart.getObjectById(a.lineId));if(a.line&&a.line.getCoordinates){a.line.chart=b;var r=a.line.getCoordinates(m,a.lineSegment);r&&(k=b.coordinateToLongitude(r.x),l=b.coordinateToLatitude(r.y),p=r.x,t=r.y,a.animateAngle&&(g=d.radiansToDegrees(r.angle)))}isNaN(g)||c.rotate(g+a.extraAngle);if(!isNaN(e)&&!isNaN(f))c.translate(e,f,NaN,!0);else if(!isNaN(l)&&!isNaN(k))if(f=b.coordinatesToXY(k,l),e=f.x,f=f.y,isNaN(p)||(e=p),isNaN(t)||(f=t),a.fixedSize){p=a.positionScale;isNaN(p)?p=0:(--p,p*=1-2*Math.abs(m-.5));if(m=a.objectToResize)m.scale=1+p;c.translate(e,f,1/n+p,!0)}else c.translate(e,f,NaN,!0);this.positionLabel(h,a,a.labelPositionReal)},positionLabel:function(a,b,c){if(a){var d=b.image,f=0,g=0,h=0,k=0;d&&(k=d.getBBox(),g=d.y+k.y,f=d.x+k.x,h=k.width,k=k.height,b.svgPath&&(h*=b.scale,k*=b.scale));var d=a.getBBox(),l=d.width,m=d.height;"right"==c&&(f+=h+l/2+5,g+=k/2-2);"left"==c&&(f+=-l/2-5,g+=k/2-2);"top"==c&&(g-=m/2+3,f+=h/2);"bottom"==c&&(g+=k+m/2,f+=h/2);"middle"==c&&(f+=h/2,g+=k/2);a.translate(f+b.labelShiftX,g+b.labelShiftY,NaN,!0);a=b.labelFontSizeReal;b.labelBG&&b.labelBG.translate(f-d.width/2+b.labelShiftX-9,g-a/2+b.labelShiftY-
4,NaN,!0)}},createPredefinedImage:function(a,b,c,e,f,g){var h=this.chart.container,k;switch(e){case"circle":k=d.circle(h,f/2,a,1,c,b,1);break;case"rectangle":k=d.polygon(h,[-f/2,f/2,f/2,-f/2],[g/2,g/2,-g/2,-g/2],a,1,c,b,1,0,!0);break;case"bubble":k=d.circle(h,f/2,a,1,c,b,1,!0);break;case"hexagon":f/=Math.sqrt(3),k=d.polygon(h,[.866*f,0*f,-.866*f,-.866*f,0*f,.866*f],[.5*f,1*f,.5*f,-.5*f,-1*f,-.5*f],a,1,c,b,1)}return k},reset:function(){this.objectsToResize=[];this.allSvgObjects=[];this.allObjects=[];this.allLabels=[];this.labelsToReposition=[]}})})();(function(){var d=window.AmCharts;d.ImagesSettings=d.Class({construct:function(a){this.cname="ImagesSettings";this.balloonText="[[title]]";this.alpha=1;this.borderAlpha=0;this.borderThickness=1;this.labelPosition="right";this.labelColor="#000000";this.labelFontSize=11;this.color="#000000";this.labelRollOverColor="#00CC00";this.centered=!0;this.rollOverScale=this.selectedScale=1;this.descriptionWindowWidth=250;this.bringForwardOnHover=!0;this.outlineColor="transparent";this.adjustAnimationSpeed=!1;this.baseAnimationDistance=500;this.pauseDuration=0;this.easingFunction=d.easeInOutQuad;this.animationDuration=3;this.positionScale=1;this.accessibleLabel="[[title]] [[description]]";d.applyTheme(this,a,this.cname)}})})();(function(){var d=window.AmCharts;d.LinesProcessor=d.Class({construct:function(a){this.chart=a;this.reset()},process:function(a){var b=a.lines,c;for(c=0;c<b.length;c++){var d=b[c];this.createLine(d,c);d.parentArray=b}this.counter=c;a.parentObject&&a.remainVisible&&this.process(a.parentObject)},createLine:function(a,b){a=d.processObject(a,d.MapLine);isNaN(b)&&(this.counter++,b=this.counter);a.index=b;a.remove&&a.remove();var c=this.chart,e=c.linesSettings,f=this.objectsToResize,g=c.mapLinesContainer,h=c.stageLinesContainer,k=e.thickness,l=e.dashLength,m=e.arrow,n=e.arrowSize,p=e.arrowColor,t=e.arrowAlpha,r=e.color,q=e.alpha,y=e.rollOverColor,B=e.selectedColor,u=e.rollOverAlpha,w=e.balloonText,v=e.bringForwardOnHover,A=e.arc,C=e.rollOverBrightness,x=c.container;a.chart=c;a.baseSettings=e;var z=x.set();a.displayObject=z;var F=a.tabIndex;void 0===F&&(F=e.tabIndex);void 0!==F&&z.setAttr("tabindex",F);this.allSvgObjects.push(z);a.arrays.push({arr:this.allSvgObjects,el:z});this.allObjects.push(a);a.arrays.push({arr:this.allObjects,el:a});a.mouseEnabled&&c.addObjectEventListeners(z,a);if(a.remainVisible||c.selectedObject==a.parentObject){F=a.thickness;isNaN(F)&&(F=k);k=a.dashLength;isNaN(k)&&(k=l);l=a.color;void 0==l&&(l=r);r=a.alpha;isNaN(r)&&(r=q);q=a.rollOverAlpha;isNaN(q)&&(q=u);isNaN(q)&&(q=r);u=a.rollOverColor;void 0==u&&(u=y);y=a.selectedColor;void 0==y&&(y=B);B=a.balloonText;void 0===B&&(B=w);w=a.arc;isNaN(w)&&(w=A);A=a.arrow;if(!A||"none"==A&&"none"!=m)A=m;m=a.arrowColor;void 0==m&&(m=p);void 0==m&&(m=l);p=a.arrowAlpha;isNaN(p)&&(p=t);isNaN(p)&&(p=r);t=a.arrowSize;isNaN(t)&&(t=n);n=a.rollOverBrightness;void 0==n&&(n=C);a.colorReal=l;a.arrowColor=m;isNaN(e.selectedBrightness)||(y=d.adjustLuminosity(a.colorReal,e.selectedBrightness/100));a.alphaReal=r;a.rollOverColorReal=u;a.rollOverAlphaReal=q;a.balloonTextReal=B;a.selectedColorReal=y;a.thicknessReal=F;a.rollOverBrightnessReal=n;a.accessibleLabel||(a.accessibleLabel=e.accessibleLabel);void 0===a.shiftArrow&&(a.shiftArrow=e.shiftArrow);void 0==a.bringForwardOnHover&&(a.bringForwardOnHover=v);d.processDescriptionWindow(e,a);v=this.processCoordinates(a.x,c.realWidth);C=this.processCoordinates(a.y,c.realHeight);n=a.longitudes;e=a.latitudes;q=n.length;if(0<q)for(v=[],C=[],u=0;u<q;u++)B=c.coordinatesToXY(n[u],e[u]),v.push(B.x),C.push(B.y);if(0<v.length){a.segments=v.length;d.dx=0;d.dy=0;var E,H,G,q=10*(1-Math.abs(w));10<=q&&(q=NaN);1>q&&(q=1);a.arcRadius=[];a.distances=[];n=c.mapContainer.scale;if(isNaN(q)){for(q=0;q<v.length-1;q++)H=Math.sqrt(Math.pow(v[q+1]-v[q],2)+Math.pow(C[q+1]-C[q],2)),a.distances[q]=H;q=d.line(x,v,C,l,1,F/n,k,!1,!1,!0);l=d.line(x,v,C,l,.001,5/n,k,!1,!1,!0);q.setAttr("stroke-linecap","round")}else{u=1;0>w&&(u=0);B={fill:"none",stroke:l,"stroke-opacity":1,"stroke-width":F/n,"fill-opacity":0,"stroke-linecap":"round"};void 0!==k&&0<k&&(B["stroke-dasharray"]=k);for(var k="",D=0;D<v.length-1;D++){var K=v[D],J=v[D+1],L=C[D],O=C[D+1];H=Math.sqrt(Math.pow(J-K,2)+Math.pow(O-L,2));G=H/2*q;E=270+180*Math.acos(H/2/
G)/Math.PI;isNaN(E)&&(E=270);if(K<J){var P=K,K=J,J=P,P=L,L=O,O=P;E=-E}0<w&&(E=-E);k+="M"+K+","+L+"A"+G+","+G+",0,0,"+u+","+J+","+O;a.arcRadius[D]=G;a.distances[D]=H}q=x.path(k).attr(B);l=x.path(k).attr({"fill-opacity":0,stroke:l,"stroke-width":5/n,"stroke-opacity":.001,fill:"none"})}d.setCN(c,q,"map-line");void 0!=a.id&&d.setCN(c,q,"map-line-"+a.id);d.dx=.5;d.dy=.5;z.push(q);z.push(l);q.setAttr("opacity",r);if("none"!=A){var I,M,N;if("end"==A||"both"==A)u=v[v.length-1],D=C[C.length-1],1<v.length?
(B=v[v.length-2],I=C[C.length-2]):(B=u,I=D),I=180*Math.atan((D-I)/(u-B))/Math.PI,isNaN(E)||(I+=E),M=u,N=D,I=0>u-B?I-90:I+90;r=[-t/2-.5,-.5,t/2-.5];k=[t,-.5,t];a.shiftArrow&&"middle"!=A&&(k=[0,1.2*-t,0]);"both"==A&&(t=d.polygon(x,r,k,m,p,1,m,p,void 0,!0),z.push(t),t.translate(M,N,1/n,!0),isNaN(I)||t.rotate(I),d.setCN(c,q,"map-line-arrow"),void 0!=a.id&&d.setCN(c,q,"map-line-arrow-"+a.id),a.fixedSize&&f.push(t));if("start"==A||"both"==A)t=v[0],N=C[0],1<v.length?(u=v[1],M=C[1]):(u=t,M=N),I=180*Math.atan((N-
M)/(t-u))/Math.PI,isNaN(E)||(I-=E),M=t,I=0>t-u?I-90:I+90;"middle"==A&&(u=v[v.length-1],D=C[C.length-1],1<v.length?(B=v[v.length-2],I=C[C.length-2]):(B=u,I=D),M=B+(u-B)/2,N=I+(D-I)/2,I=180*Math.atan((D-I)/(u-B))/Math.PI,isNaN(E)||(E=H/2,G-=Math.sqrt(G*G-E*E),0>w&&(G=-G),E=Math.sin(I/180*Math.PI),-1==E&&(E=1),M-=E*G,N+=Math.cos(I/180*Math.PI)*G),I=0>u-B?I-90:I+90);t=d.polygon(x,r,k,m,p,1,m,p,void 0,!0);d.setCN(c,q,"map-line-arrow");void 0!=a.id&&d.setCN(c,q,"map-line-arrow-"+a.id);z.push(t);t.translate(M,
N,1/n,!0);isNaN(I)||t.rotate(I);a.fixedSize&&(f.push(t),a.arrays.push({arr:f,el:t}));a.arrowSvg=t}a.fixedSize&&q&&(f={line:q,thickness:F},this.linesToResize.push(f),a.arrays.push({arr:this.linesToResize,el:f}),f={line:l,thickness:5},this.linesToResize.push(f),a.arrays.push({arr:this.linesToResize,el:f}));a.lineSvg=q;a.showAsSelected&&!isNaN(y)&&q.setAttr("stroke",y);0<e.length?g.push(z):h.push(z);a.hidden&&z.hide();c.makeObjectAccessible(a)}}},processCoordinates:function(a,b){var c=[],d;for(d=0;d<a.length;d++){var f=a[d],g=Number(f);isNaN(g)&&(g=Number(f.replace("%",""))*b/100);isNaN(g)||c.push(g)}return c},reset:function(){this.objectsToResize=[];this.allSvgObjects=[];this.allObjects=[];this.linesToResize=[]}})})();(function(){var d=window.AmCharts;d.LinesSettings=d.Class({construct:function(a){this.cname="LinesSettings";this.balloonText="[[title]]";this.thickness=1;this.dashLength=0;this.arrowSize=10;this.arrowAlpha=1;this.arrow="none";this.color="#990000";this.descriptionWindowWidth=250;this.bringForwardOnHover=!0;d.applyTheme(this,a,this.cname)}})})();(function(){var d=window.AmCharts;d.MapObject=d.Class({construct:function(a){this.fixedSize=this.mouseEnabled=!0;this.images=[];this.lines=[];this.areas=[];this.remainVisible=!0;this.passZoomValuesToTarget=!1;this.objectType=this.cname;d.applyTheme(this,a,"MapObject");this.arrays=[]},deleteObject:function(){this.remove();this.parentArray&&d.removeFromArray(this.parentArray,this);if(this.arrays)for(var a=0;a<this.arrays.length;a++)d.removeFromArray(this.arrays[a].arr,this.arrays[a].el);this.arrays=[]}})})();(function(){var d=window.AmCharts;d.MapArea=d.Class({inherits:d.MapObject,construct:function(a){this.cname="MapArea";d.MapArea.base.construct.call(this,a);d.applyTheme(this,a,this.cname)},validate:function(){this.chart.areasProcessor.createArea(this)}})})();(function(){var d=window.AmCharts;d.MapLine=d.Class({inherits:d.MapObject,construct:function(a){this.cname="MapLine";this.longitudes=[];this.latitudes=[];this.x=[];this.y=[];this.segments=0;this.arrow="none";d.MapLine.base.construct.call(this,a);d.applyTheme(this,a,this.cname)},validate:function(){this.chart.linesProcessor.createLine(this)},remove:function(){var a=this.displayObject;a&&a.remove()},getCoordinates:function(a,b){isNaN(b)&&(b=0);isNaN(this.arc)||this.isValid||(this.isValid=!0,this.validate());if(!isNaN(a)){var c,e,f,g,h,k;if(1<this.longitudes.length){e=this.chart.coordinatesToXY(this.longitudes[b],this.latitudes[b]);var l=this.chart.coordinatesToXY(this.longitudes[b+1],this.latitudes[b+1]);c=e.x;f=l.x;e=e.y;g=l.y}else 1<this.x.length&&(c=this.x[b],f=this.x[b+1],e=this.y[b],g=this.y[b+1]);l=Math.sqrt(Math.pow(f-c,2)+Math.pow(g-e,2));c<f&&!isNaN(this.arc)&&0!==this.arc&&(a=1-a);h=c+(f-c)*a;k=e+(g-e)*a;var m=Math.atan2(g-e,f-c);if(!isNaN(this.arc)&&0!==this.arc&&this.arcRadius){var n=0;c<f&&(n=c,c=f,f=n,n=e,e=g,g=n,n=Math.PI);k=this.arcRadius[b];0>this.arc&&(l=-l);h=c+(f-c)/2+Math.sqrt(k*k-l/2*(l/2))*(e-g)/l;var p=e+(g-e)/2+Math.sqrt(k*k-l/2*(l/2))*(f-c)/l;c=180*Math.atan2(e-p,c-h)/Math.PI;f=180*Math.atan2(g-p,f-h)/Math.PI;180<f-c&&(f-=360);m=d.degreesToRadians(c+(f-c)*a);h+=k*Math.cos(m);k=p+k*Math.sin(m);m=0<this.arc?m+Math.PI/2:m-Math.PI/2;m+=n}this.distance=l;return{x:h,y:k,angle:m}}},fixToStage:function(){if(0<this.latitudes.length){this.y=[];for(var a=0;a<this.latitudes.length;a++){var b=
this.chart.coordinatesToStageXY(this.longitudes[a],this.latitudes[a]);this.y.push(b.y);this.x.push(b.x)}this.latitudes=[];this.longitudes=[]}this.validate()},fixToMap:function(){if(0<this.y.length){this.latitudes=[];for(var a=0;a<this.y.length;a++){var b=this.chart.stageXYToCoordinates(this.x[a],this.y[a]);this.latitudes.push(b.latitude);this.longitudes.push(b.longitude)}this.y=[];this.x=[]}this.validate()}})})();(function(){var d=window.AmCharts;d.MapImage=d.Class({inherits:d.MapObject,construct:function(a){this.cname="MapImage";this.scale=1;this.widthAndHeightUnits="pixels";this.labelShiftY=this.labelShiftX=0;this.positionOnLine=.5;this.direction=1;this.lineSegment=this.extraAngle=0;this.animateAngle=!0;this.createEvents("animationStart","animationEnd");d.MapImage.base.construct.call(this,a);d.applyTheme(this,a,this.cname);this.delayCounter=0},validate:function(){this.chart.imagesProcessor.createImage(this)},updatePosition:function(){this.chart.imagesProcessor.updateSizeAndPosition(this)},remove:function(){var a=this.displayObject;a&&a.remove();(a=this.imageLabel)&&a.remove()},animateTo:function(a,b,c,d){isNaN(c)||(this.animationDuration=c);d&&(this.easingFunction=d);this.finalX=a;this.finalY=b;isNaN(this.longitude)||(this.initialX=this.longitude);isNaN(this.left)||(this.initialX=this.left);isNaN(this.right)||(this.initialX=this.right);isNaN(this.latitude)||(this.initialY=this.latitude);isNaN(this.top)||(this.initialY=this.top);isNaN(this.bottom)||(this.initialY=this.bottom);this.animatingAlong=!1;this.animate()},animateAlong:function(a,b,c){1==this.positionOnLine&&this.flipDirection&&(this.direction=-1,this.extraAngle=180);isNaN(b)||(this.animationDuration=b);c&&(this.easingFunction=c);a&&(this.line=this.chart.getObjectById(a));this.animateAlongLine=this.line;this.animatingAlong=!0;this.animate()},animate:function(){var a=this.chart.imagesSettings,b=this.animationDuration;isNaN(b)&&(b=a.animationDuration);this.totalFrames=b*d.updateRate;b=1;this.line&&a.adjustAnimationSpeed&&(this.line.distances&&(b=this.line.distances[this.lineSegment]*this.chart.zoomLevel(),b=Math.abs(b/a.baseAnimationDistance)),this.totalFrames=Math.round(b*this.totalFrames));this.frame=0;this.fire({type:"animationStart",chart:this.chart,image:this,lineSegment:this.lineSegment,direction:this.direction})},update:function(){var a=this.totalFrames;this.frame++;this.delayCounter--;0===this.delayCounter&&this.animateAlong();if(!(0<this.delayCounter))if(this.frame<=a){this.updatePosition();var b=this.chart.imagesSettings,c=this.easingFunction;c||(c=b.easingFunction);a=c(0,this.frame,0,1,a);-1==this.direction&&(a=1-a);this.animatingAlong?this.positionOnLine=a:(b=this.initialX+(this.finalX-this.initialX)*a,isNaN(this.longitude)||(this.longitude=b),isNaN(this.left)||(this.left=b),isNaN(this.right)||(this.right=b),a=this.initialY+(this.finalY-this.initialY)*a,isNaN(this.latitude)||(this.latitude=a),isNaN(this.top)||(this.top=a),isNaN(this.bottom)||(this.bottom=a))}else this.frame==a+1&&(this.fire({type:"animationEnd",chart:this.chart,image:this,lineSegment:this.lineSegment,direction:this.direction}),this.line&&this.animatingAlong&&(1==this.direction?this.lineSegment<this.line.segments-2?(this.lineSegment++,this.delayAnimateAlong(),this.positionOnLine=0):this.flipDirection?(this.direction=-1,this.extraAngle=180,this.delayAnimateAlong()):this.loop&&(this.delayAnimateAlong(),this.lineSegment=0):0<this.lineSegment?(this.lineSegment--,this.delayAnimateAlong(),this.positionOnLine=0):this.loop&&this.flipDirection?(this.direction=1,this.extraAngle=0,this.delayAnimateAlong()):this.loop&&this.delayAnimateAlong()))},delayAnimateAlong:function(){this.animateAlongLine&&(this.delayCounter=this.chart.imagesSettings.pauseDuration*d.updateRate)},fixToStage:function(){if(!isNaN(this.longitude)){var a=this.chart.coordinatesToStageXY(this.longitude,this.latitude);this.left=a.x;this.top=a.y;this.latitude=this.longitude=void 0}this.validate()},fixToMap:function(){if(!isNaN(this.left)){var a=this.chart.stageXYToCoordinates(this.left,this.top);this.longitude=a.longitude;this.latitude=a.latitude;this.top=this.left=void 0}this.validate()}})})();(function(){var d=window.AmCharts;d.degreesToRadians=function(a){return a/180*Math.PI};d.radiansToDegrees=function(a){return a/Math.PI*180};d.getColorFade=function(a,b,c){var e=d.hex2RGB(b);b=e[0];var f=e[1],e=e[2],g=d.hex2RGB(a);a=g[0];var h=g[1],g=g[2];a+=Math.round((b-a)*c);h+=Math.round((f-h)*c);g+=Math.round((e-g)*c);return"rgb("+a+","+h+","+g+")"};d.hex2RGB=function(a){return[parseInt(a.substring(1,3),16),parseInt(a.substring(3,5),16),parseInt(a.substring(5,7),16)]};d.processDescriptionWindow=function(a,b){isNaN(b.descriptionWindowX)&&(b.descriptionWindowX=a.descriptionWindowX);isNaN(b.descriptionWindowY)&&(b.descriptionWindowY=a.descriptionWindowY);isNaN(b.descriptionWindowLeft)&&(b.descriptionWindowLeft=a.descriptionWindowLeft);isNaN(b.descriptionWindowRight)&&(b.descriptionWindowRight=a.descriptionWindowRight);isNaN(b.descriptionWindowTop)&&(b.descriptionWindowTop=a.descriptionWindowTop);isNaN(b.descriptionWindowBottom)&&(b.descriptionWindowBottom=a.descriptionWindowBottom);isNaN(b.descriptionWindowWidth)&&(b.descriptionWindowWidth=a.descriptionWindowWidth);isNaN(b.descriptionWindowHeight)&&(b.descriptionWindowHeight=a.descriptionWindowHeight)};d.normalizePath=function(a){for(var b="",c=d.parsePath(a.getAttribute("d")),e,f,g=Infinity,h=-Infinity,k=Infinity,l=-Infinity,m=0;m<c.length;m++){var n=c[m],p=n.letter,t=n.x,n=n.y;"h"==p&&(p="L",t+=e,n=f);"H"==p&&(p="L",n=f);"v"==p&&(p="L",t=e,n+=f);"V"==p&&(p="L",t=e);if("m"===p||"l"===p)p=p.toUpperCase(),t+=e,n+=f;t=d.roundTo(t,3);n=d.roundTo(n,3);e=t;f=n;t>h&&(h=t);t<g&&(g=t);n>l&&(l=n);n<k&&(k=n);b="z"==p.toLowerCase()?b+"Z ":b+(p+" "+t+" "+n+" ")}a.setAttribute("d",b);return{minX:g,maxX:h,minY:k,maxY:l}};d.mercatorLatitudeToRadians=function(a){return Math.log(Math.tan(Math.PI/4+d.degreesToRadians(a)/2))};d.parsePath=function(a){a=a.match(/([MmLlHhVvZz]{1}[0-9.,\-\s]*)/g);for(var b=[],c=0;c<a.length;c++){var d=a[c].match(/([MmLlHhVvZz]{1})|([0-9.\-]+)/g),f={letter:d[0]};switch(d[0]){case "Z":case "Z":case "z":break;case "V":case "v":f.y=Number(d[1]);
break;case"H":case"h":f.x=Number(d[1]);break;default:f.x=Number(d[1]),f.y=Number(d[2])}b.push(f)}return b};d.acos=function(a){return 1<a?0:-1>a?Math.PI:Math.acos(a)};d.asin=function(a){return 1<a?Math.PI/2:-1>a?-Math.PI/2:Math.asin(a)};d.sinci=function(a){return a?a/Math.sin(a):1};d.asqrt=function(a){return 0<a?Math.sqrt(a):0};d.winkel3=function(a,b){var c=d.aitoff(a,b);return[(c[0]+a/Math.PI*2)/2,(c[1]+b)/2]};d.winkel3.invert=function(a,b){var c=a,e=b,f=25,g=Math.PI/2;do var h=Math.cos(e),k=Math.sin(e),
l=Math.sin(2*e),m=k*k,n=h*h,p=Math.sin(c),t=Math.cos(c/2),r=Math.sin(c/2),q=r*r,y=1-n*t*t,B=y?d.acos(h*t)*Math.sqrt(u=1/y):u=0,u,y=.5*(2*B*h*r+c/g)-a,w=.5*(B*k+e)-b,v=.5*u*(n*q+B*h*t*m)+.5/g,A=u*(p*l/4-B*k*r),k=.125*u*(l*r-B*k*n*p),m=.5*u*(m*t+B*q*h)+.5,h=A*k-m*v,A=(w*A-y*m)/h,y=(y*k-w*v)/h,c=c-A,e=e-y;while((1E-6<Math.abs(A)||1E-6<Math.abs(y))&&0<--f);return[c,e]};d.aitoff=function(a,b){var c=Math.cos(b),e=d.sinci(d.acos(c*Math.cos(a/=2)));return[2*c*Math.sin(a)*e,Math.sin(b)*e]};d.orthographic=
function(a,b){return[Math.cos(b)*Math.sin(a),Math.sin(b)]};d.equirectangular=function(a,b){return[a,b]};d.equirectangular.invert=function(a,b){return[a,b]};d.eckert5=function(a,b){var c=Math.PI;return[a*(1+Math.cos(b))/Math.sqrt(2+c),2*b/Math.sqrt(2+c)]};d.eckert5.invert=function(a,b){var c=Math.sqrt(2+Math.PI),d=b*c/2;return[c*a/(1+Math.cos(d)),d]};d.eckert6=function(a,b){for(var c=Math.PI,d=(1+c/2)*Math.sin(b),f=0,g=Infinity;10>f&&1E-5<Math.abs(g);f++)b-=g=(b+Math.sin(b)-d)/(1+Math.cos(b));d=Math.sqrt(2+
c);return[a*(1+Math.cos(b))/d,2*b/d]};d.eckert6.invert=function(a,b){var c=1+Math.PI/2,e=Math.sqrt(c/2);return[2*a*e/(1+Math.cos(b*=e)),d.asin((b+Math.sin(b))/c)]};d.mercator=function(a,b){b>=Math.PI/2-.02&&(b=Math.PI/2-.02);b<=-Math.PI/2+.02&&(b=-Math.PI/2+.02);return[a,Math.log(Math.tan(Math.PI/4+b/2))]};d.mercator.invert=function(a,b){return[a,2*Math.atan(Math.exp(b))-Math.PI/2]};d.miller=function(a,b){return[a,1.25*Math.log(Math.tan(Math.PI/4+.4*b))]};d.miller.invert=function(a,b){return[a,2.5*
Math.atan(Math.exp(.8*b))-.625*Math.PI]};d.eckert3=function(a,b){var c=Math.PI,d=Math.sqrt(c*(4+c));return[2/d*a*(1+Math.sqrt(1-4*b*b/(c*c))),4/d*b]};d.eckert3.invert=function(a,b){var c=Math.PI,e=Math.sqrt(c*(4+c))/2;return[a*e/(1+d.asqrt(1-b*b*(4+c)/(4*c))),b*e/2]}})();(function(){var d=window.AmCharts;d.MapData=d.Class({inherits:d.MapObject,construct:function(){this.cname="MapData";d.MapData.base.construct.call(this);this.projection="mercator";this.topLatitude=90;this.bottomLatitude=-90;this.leftLongitude=-180;this.rightLongitude=180;this.zoomLevel=1;this.getAreasFromMap=!1}})})();(function(){var d=window.AmCharts;d.DescriptionWindow=d.Class({construct:function(){},show:function(a,b,c,d){var f=this;f.chart=a;var g=document.createElement("div");g.style.position="absolute";var h=a.classNamePrefix+"-description-";g.className="ammapDescriptionWindow "+h+"div";f.div=g;b.appendChild(g);var k=".gif";a.svgIcons&&(k=".svg");var l=document.createElement("img");l.className="ammapDescriptionWindowCloseButton "+h+"close-img";l.src=a.pathToImages+"xIcon"+k;l.style.cssFloat="right";l.style.cursor=
"pointer";l.onclick=function(){f.close()};l.onmouseover=function(){l.src=a.pathToImages+"xIconH"+k};l.onmouseout=function(){l.src=a.pathToImages+"xIcon"+k};g.appendChild(l);b=document.createElement("div");b.className="ammapDescriptionTitle "+h+"title-div";b.onmousedown=function(){f.div.style.zIndex=1E3};g.appendChild(b);b.innerHTML=d;d=b.offsetHeight;b=document.createElement("div");b.className="ammapDescriptionText "+h+"text-div";b.style.maxHeight=f.maxHeight-d-20+"px";g.appendChild(b);b.innerHTML=c},close:function(){try{this.div.parentNode.removeChild(this.div),this.chart.fireClosed()}catch(a){}}})})();(function(){var d=window.AmCharts;d.ValueLegend=d.Class({construct:function(a){this.cname="ValueLegend";this.enabled=!0;this.showAsGradient=!1;this.minValue=0;this.height=12;this.width=200;this.bottom=this.left=10;this.borderColor="#FFFFFF";this.borderAlpha=this.borderThickness=1;this.color="#000000";this.fontSize=11;d.applyTheme(this,a,this.cname)},init:function(a,b){if(this.enabled){var c=a.areasSettings.color,e=a.areasSettings.colorSolid,f=a.colorSteps;d.remove(this.set);var g=b.set();this.set=g;d.setCN(a,g,"value-legend");var h=0,k=this.minValue,l=this.fontSize,m=a.fontFamily,n=this.color,p={precision:a.precision,decimalSeparator:a.decimalSeparator,thousandsSeparator:a.thousandsSeparator};void 0==k&&(k=d.formatNumber(a.minValueReal,p));void 0!==k&&(h=d.text(b,k,n,m,l,"left"),h.translate(0,l/2-1),d.setCN(a,h,"value-legend-min-label"),g.push(h),h=h.getBBox().height);k=this.maxValue;void 0===k&&(k=d.formatNumber(a.maxValueReal,p));void 0!==k&&(h=d.text(b,k,n,m,l,"right"),h.translate(this.width,l/2-1),d.setCN(a,h,"value-legend-max-label"),g.push(h),h=h.getBBox().height);if(this.showAsGradient)c=d.rect(b,this.width,this.height,[c,e],1,this.borderThickness,this.borderColor,1,0,0),d.setCN(a,c,"value-legend-gradient"),c.translate(0,h),g.push(c);else for(l=this.width/f,m=0;m<f;m++)n=d.getColorFade(c,e,1*m/(f-1)),n=d.rect(b,l,this.height,n,1,this.borderThickness,this.borderColor,1),d.setCN(a,n,"value-legend-color"),d.setCN(a,n,"value-legend-color-"+m),n.translate(l*m,h),g.push(n);e=c=0;f=g.getBBox();h=a.getY(this.bottom,!0);l=a.getY(this.top);m=a.getX(this.right,!0);n=a.getX(this.left);isNaN(l)||(c=l);isNaN(h)||(c=h-f.height);isNaN(n)||(e=n);isNaN(m)||(e=m-f.width);g.translate(e,c)}else d.remove(this.set)}})})();(function(){var d=window.AmCharts;d.ObjectList=d.Class({construct:function(a){this.divId=a},init:function(a){this.chart=a;var b=this.divId;this.container&&(b=this.container);this.div="object"!=typeof b?document.getElementById(b):b;b=document.createElement("div");b.className="ammapObjectList "+a.classNamePrefix+"-object-list-div";this.div.appendChild(b);this.addObjects(a.dataProvider,b)},addObjects:function(a,b){var c=this.chart,d=document.createElement("ul");d.className=c.classNamePrefix+"-object-list-ul";var f;if(a.areas)for(f=0;f<a.areas.length;f++){var g=a.areas[f];void 0===g.showInList&&(g.showInList=c.showAreasInList);this.addObject(g,d)}if(a.images)for(f=0;f<a.images.length;f++)g=a.images[f],void 0===g.showInList&&(g.showInList=c.showImagesInList),this.addObject(g,d);if(a.lines)for(f=0;f<a.lines.length;f++)g=a.lines[f],void 0===g.showInList&&(g.showInList=c.showLinesInList),this.addObject(g,d);0<d.childNodes.length&&b.appendChild(d)},addObject:function(a,b){var c=this;if(a.showInList&&void 0!==a.title){var d=c.chart,f=document.createElement("li");f.className=d.classNamePrefix+"-object-list-li";var g=a.titleTr;g||(g=a.title);var g=document.createTextNode(g),h=document.createElement("a");h.className=d.classNamePrefix+"-object-list-a";h.appendChild(g);f.appendChild(h);b.appendChild(f);this.addObjects(a,f);h.onmouseover=function(){c.chart.rollOverMapObject(a,!1)};h.onmouseout=function(){c.chart.rollOutMapObject(a)};h.onclick=function(){c.chart.clickMapObject(a)}}}})})();

/***/ }),

/***/ "./src/assets/charts/amchart/gauge.js":
/*!********************************************!*\
  !*** ./src/assets/charts/amchart/gauge.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(){var d=window.AmCharts;d.GaugeAxis=d.Class({construct:function(a){this.cname="GaugeAxis";this.radius="95%";this.createEvents("rollOverBand","rollOutBand","clickBand");this.labelsEnabled=!0;this.startAngle=-120;this.endAngle=120;this.startValue=0;this.endValue=200;this.gridCount=5;this.tickLength=10;this.minorTickLength=5;this.tickColor="#555555";this.labelFrequency=this.tickThickness=this.tickAlpha=1;this.inside=!0;this.labelOffset=10;this.showLastLabel=this.showFirstLabel=!0;this.axisThickness=1;this.axisColor="#000000";this.axisAlpha=1;this.gridInside=!0;this.topTextYOffset=0;this.topTextBold=!0;this.bottomTextYOffset=0;this.bottomTextBold=!0;this.centerY=this.centerX="0%";this.bandOutlineAlpha=this.bandOutlineThickness=0;this.bandOutlineColor="#000000";this.bandAlpha=1;this.bcn="gauge-axis";d.applyTheme(this,a,"GaugeAxis")},value2angle:function(a){return(a-this.startValue)/(this.endValue-this.startValue)*(this.endAngle-this.startAngle)+this.startAngle},setTopText:function(a){if(void 0!==
a){this.topText=a;var b=this.chart;if(this.axisCreated){this.topTF&&this.topTF.remove();var c=this.topTextFontSize;c||(c=b.fontSize);var e=this.topTextColor;e||(e=b.color);a=d.text(b.container,a,e,b.fontFamily,c,void 0,this.topTextBold);d.setCN(b,a,"axis-top-label");a.translate(this.centerXReal,this.centerYReal-this.radiusReal/2+this.topTextYOffset);this.set.push(a);this.topTF=a}}},setBottomText:function(a){if(void 0!==a){this.bottomText=a;var b=this.chart;if(this.axisCreated){this.bottomTF&&this.bottomTF.remove();var c=this.bottomTextFontSize;c||(c=b.fontSize);var e=this.bottomTextColor;e||(e=b.color);a=d.text(b.container,a,e,b.fontFamily,c,void 0,this.bottomTextBold);d.setCN(b,a,"axis-bottom-label");a.translate(this.centerXReal,this.centerYReal+this.radiusReal/2+this.bottomTextYOffset);this.bottomTF=a;this.set.push(a)}}},draw:function(){var a=this.chart,b=a.container.set();this.set=b;d.setCN(a,b,this.bcn);d.setCN(a,b,this.bcn+"-"+this.id);a.graphsSet.push(b);this.bandSet=a.container.set();this.set.push(this.bandSet);var c=this.startValue,e=this.endValue,g=this.valueInterval;isNaN(g)&&(g=(e-c)/this.gridCount);var l=this.minorTickInterval;isNaN(l)&&(l=g/5);var n=this.startAngle,h=this.endAngle,k=this.tickLength,p=(e-c)/g+1,f=(h-n)/(p-1);this.singleValueAngle=f/g;var m=a.container,w=this.tickColor,z=this.tickAlpha,J=this.tickThickness,l=g/l,K=f/l,H=this.minorTickLength,I=this.labelFrequency,v=this.radiusReal;this.inside||(v-=15);this.radiusRealReal=v;var A=a.centerX+d.toCoordinate(this.centerX,a.realWidth),B=a.centerY+
d.toCoordinate(this.centerY,a.realHeight);this.centerXReal=A;this.centerYReal=B;var t={fill:this.axisColor,"fill-opacity":this.axisAlpha,"stroke-width":0,"stroke-opacity":0},r,C;this.gridInside?C=r=v:(r=v-k,C=r+H);this.minorTickRadius=C;this.drawBands();var q=this.axisThickness/2,h=d.wedge(m,A,B,n,h-n,r+q,r+q,r-q,0,t);d.setCN(a,h.wedge,"axis-line");b.push(h);h=d.doNothing;d.isModern||(h=Math.round);t=d.getDecimals(c);r=d.getDecimals(e);e=d.getDecimals(g);e=Math.max(e,t,r);g=d.roundTo(g,e+1);for(t=0;t<p;t++){q=d.roundTo(c+t*g,e);r=n+t*f;var u=h(A+v*Math.sin(r/180*Math.PI)),F=h(B-v*Math.cos(r/180*Math.PI)),x=h(A+(v-k)*Math.sin(r/180*Math.PI)),y=h(B-(v-k)*Math.cos(r/180*Math.PI)),u=d.line(m,[u,x],[F,y],w,z,J,0,!1,!1,!0);d.setCN(a,u,"axis-tick");b.push(u);u=-1;x=this.labelOffset;this.inside||(x=-x-k,u=1);var F=A+(v-k-x)*Math.sin(r/180*Math.PI),x=B-(v-k-x)*Math.cos(r/180*Math.PI),D=this.fontSize;isNaN(D)&&(D=a.fontSize);var y=Math.sin((r-90)/180*Math.PI),L=Math.cos((r-90)/180*Math.PI);if(0<I&&
this.labelsEnabled&&t/I==Math.round(t/I)&&(this.showLastLabel||t!=p-1)&&(this.showFirstLabel||0!==t)){var E;E=this.usePrefixes?d.addPrefix(q,a.prefixesOfBigNumbers,a.prefixesOfSmallNumbers,a.nf,!0):d.formatNumber(q,a.nf,e);var G=this.unit;G&&(E="left"==this.unitPosition?G+E:E+G);(G=this.labelFunction)&&(E=G(q));q=this.color;void 0===q&&(q=a.color);q=d.text(m,E,q,a.fontFamily,D);d.setCN(a,q,"axis-label");D=q.getBBox();q.translate(F+u*D.width/2*L,x+u*D.height/2*y);b.push(q)}if(t<p-1)for(q=1;q<l;q++)y=r+K*q,u=h(A+C*Math.sin(y/180*Math.PI)),F=h(B-C*Math.cos(y/180*Math.PI)),x=h(A+(C-H)*Math.sin(y/180*Math.PI)),y=h(B-(C-H)*Math.cos(y/180*Math.PI)),u=d.line(m,[u,x],[F,y],w,z,J,0,!1,!1,!0),d.setCN(a,u,"axis-tick-minor"),b.push(u)}this.axisCreated=!0;this.setTopText(this.topText);this.setBottomText(this.bottomText);a=a.graphsSet.getBBox();this.width=a.width;this.height=a.height},drawBands:function(){var a=this.bands;if(a)for(var b=0;b<a.length;b++){var c=a[b];c&&(c.axis=this,d.processObject(c,d.GaugeBand,this.theme),c.draw(c.startValue,c.endValue))}},fireEvent:function(a,b,c){this.fire({type:a,dataItem:b,chart:this,event:c})},addEventListeners:function(a,b){var c=this,e=c.chart;a.mouseover(function(a){e.showBalloon(b.balloonText,b.color,!0);c.fireEvent("rollOverBand",b,a)}).mouseout(function(a){e.hideBalloon();c.fireEvent("rollOutBand",b,a)}).click(function(a){c.fireEvent("clickBand",b,a);d.getURL(b.url,e.urlTarget)}).touchend(function(a){c.fireEvent("clickBand",b,a);d.getURL(b.url,e.urlTarget)})}})})();(function(){var d=window.AmCharts;d.GaugeArrow=d.Class({construct:function(a){this.cname="GaugeArrow";this.color="#000000";this.nailAlpha=this.alpha=1;this.startWidth=this.nailRadius=8;this.endWidth=0;this.borderAlpha=1;this.radius="90%";this.nailBorderAlpha=this.innerRadius=0;this.nailBorderThickness=1;this.frame=0;d.applyTheme(this,a,"GaugeArrow")},setValue:function(a){var b=this.chart;b?b.setValue?b.setValue(this,a):this.previousValue=this.value=a:this.previousValue=this.value=a}});d.GaugeBand=d.Class({construct:function(){this.cname="GaugeBand";this.frame=0},draw:function(a,b){var c=this.axis;this.bandGraphics&&this.bandGraphics.remove();var e=c.chart,g=c.startAngle,l=c.radiusRealReal,n=c.singleValueAngle,h=e.container,k=c.minorTickLength,p=d.toCoordinate(this.radius,l);isNaN(p)&&(p=c.minorTickRadius);l=d.toCoordinate(this.innerRadius,l);isNaN(l)&&(l=p-k);var g=g+n*(a-c.startValue),k=n*(b-a),f=this.outlineColor;void 0===f&&(f=c.bandOutlineColor);var m=this.outlineThickness;isNaN(m)&&(m=c.bandOutlineThickness);var w=this.outlineAlpha;isNaN(w)&&(w=c.bandOutlineAlpha);n=this.alpha;isNaN(n)&&(n=c.bandAlpha);f={fill:this.color,stroke:f,"stroke-width":m,"stroke-opacity":w};this.url&&(f.cursor="pointer");m=this.gradientRatio;m||(m=c.bandGradientRatio);h=d.wedge(h,c.centerXReal,c.centerYReal,g,k,p,p,l,0,f,m,void 0,void 0,"radial");d.setCN(e,h.wedge,"axis-band");void 0!==this.id&&d.setCN(e,h.wedge,"axis-band-"+this.id);h.setAttr("opacity",n);c.bandSet.push(h);this.bandGraphics=h;this.currentStartValue=a;this.currentEndValue=b;c.addEventListeners(h,this)},update:function(){var a=this.axis,b=a.chart;if(a&&a.value2angle){if(this.frame>=b.totalFrames)b=this.endValue,a=this.startValue;else{this.frame++;var c=d.getEffect(b.startEffect),a=d[c](0,this.frame,this.previousStartValue,this.startValue-this.previousStartValue,b.totalFrames),b=d[c](0,this.frame,this.previousEndValue,this.endValue-this.previousEndValue,b.totalFrames);isNaN(a)&&(a=this.startValue);isNaN(b)&&(b=this.endValue)}a==this.currentStartValue&&b==this.currentEndValue||this.draw(a,b)}},setStartValue:function(a){this.previousStartValue=this.startValue;this.startValue=a;this.frame=0},setEndValue:function(a){this.previousEndValue=this.endValue;this.endValue=a;this.frame=0}})})();(function(){var d=window.AmCharts;d.AmAngularGauge=d.Class({inherits:d.AmChart,construct:function(a){this.cname="AmAngularGauge";d.AmAngularGauge.base.construct.call(this,a);this.theme=a;this.type="gauge";this.minRadius=this.marginRight=this.marginBottom=this.marginTop=this.marginLeft=10;this.faceColor="#FAFAFA";this.faceAlpha=0;this.faceBorderWidth=1;this.faceBorderColor="#555555";this.faceBorderAlpha=0;this.arrows=[];this.axes=[];this.startDuration=1;this.startEffect="easeOutSine";this.adjustSize=!0;this.extraHeight=this.extraWidth=0;d.applyTheme(this,a,this.cname)},addAxis:function(a){a.chart=this;this.axes.push(a)},formatString:function(a,b){return a=d.formatValue(a,b,["value"],this.nf,"",this.usePrefixes,this.prefixesOfSmallNumbers,this.prefixesOfBigNumbers)},initChart:function(){d.AmAngularGauge.base.initChart.call(this);var a;0===this.axes.length&&(a=new d.GaugeAxis(this.theme),this.addAxis(a));var b;for(b=0;b<this.axes.length;b++)a=this.axes[b],a=d.processObject(a,d.GaugeAxis,this.theme),a.id||(a.id="axisAuto"+b+"_"+(new Date).getTime()),a.chart=this,this.axes[b]=a;var c=this.arrows;for(b=0;b<c.length;b++){a=c[b];a=d.processObject(a,d.GaugeArrow,this.theme);a.id||(a.id="arrowAuto"+b+"_"+(new Date).getTime());a.chart=this;c[b]=a;var e=a.axis;d.isString(e)&&(a.axis=d.getObjById(this.axes,e));a.axis||(a.axis=this.axes[0]);isNaN(a.value)&&a.setValue(a.axis.startValue);isNaN(a.previousValue)&&(a.previousValue=a.axis.startValue)}this.setLegendData(c);this.drawChart();this.totalFrames=this.startDuration*d.updateRate},drawChart:function(){d.AmAngularGauge.base.drawChart.call(this);var a=this.container,b=this.updateWidth();this.realWidth=b;var c=this.updateHeight();this.realHeight=c;var e=d.toCoordinate,g=e(this.marginLeft,b),l=e(this.marginRight,b),n=e(this.marginTop,c)+this.getTitleHeight(),h=e(this.marginBottom,c),k=e(this.radius,b,c),e=b-g-l,p=c-n-h+this.extraHeight;k||(k=Math.min(e,p)/2);k<this.minRadius&&(k=this.minRadius);this.radiusReal=k;this.centerX=(b-g-l)/2+g;this.centerY=(c-n-h)/2+n+this.extraHeight/
2;isNaN(this.gaugeX)||(this.centerX=this.gaugeX);isNaN(this.gaugeY)||(this.centerY=this.gaugeY);var b=this.faceAlpha,c=this.faceBorderAlpha,f;if(0<b||0<c)f=d.circle(a,k,this.faceColor,b,this.faceBorderWidth,this.faceBorderColor,c,!1),f.translate(this.centerX,this.centerY),f.toBack(),(a=this.facePattern)&&f.pattern(a,NaN,this.path);for(b=k=a=0;b<this.axes.length;b++)c=this.axes[b],g=c.radius,c.radiusReal=d.toCoordinate(g,this.radiusReal),c.draw(),l=1,-1!==String(g).indexOf("%")&&(l=1+(100-Number(g.substr(0,g.length-1)))/100),c.width*l>a&&(a=c.width*l),c.height*l>k&&(k=c.height*l);(b=this.legend)&&b.invalidateSize();if(this.adjustSize&&!this.sizeAdjusted){f&&(f=f.getBBox(),f.width>a&&(a=f.width),f.height>k&&(k=f.height));f=0;if(p>k||e>a)f=Math.min(p-k,e-a);5<f&&(this.extraHeight=f,this.sizeAdjusted=!0,this.validateNow())}e=this.arrows.length;for(b=0;b<e;b++)p=this.arrows[b],p.drawnAngle=NaN;this.dispDUpd()},validateSize:function(){this.extraHeight=this.extraWidth=0;this.chartCreated=this.sizeAdjusted=
!1;d.AmAngularGauge.base.validateSize.call(this)},addArrow:function(a){this.arrows.push(a)},removeArrow:function(a){d.removeFromArray(this.arrows,a);this.validateNow()},removeAxis:function(a){d.removeFromArray(this.axes,a);this.validateNow()},drawArrow:function(a,b){a.set&&a.set.remove();var c=this.container;a.set=c.set();d.setCN(this,a.set,"gauge-arrow");d.setCN(this,a.set,"gauge-arrow-"+a.id);var e=a.axis,g=e.radiusReal,l=e.centerXReal,n=e.centerYReal,h=a.startWidth,k=a.endWidth,p=d.toCoordinate(a.innerRadius,e.radiusReal),f=d.toCoordinate(a.radius,e.radiusReal);e.inside||(f-=15);var m=a.nailColor;m||(m=a.color);var w=a.nailColor;w||(w=a.color);0<a.nailRadius&&(m=d.circle(c,a.nailRadius,m,a.nailAlpha,a.nailBorderThickness,m,a.nailBorderAlpha),d.setCN(this,m,"gauge-arrow-nail"),a.set.push(m),m.translate(l,n));isNaN(f)&&(f=g-e.tickLength);var e=Math.sin(b/180*Math.PI),g=Math.cos(b/180*Math.PI),m=Math.sin((b+90)/180*Math.PI),z=Math.cos((b+90)/180*Math.PI),c=d.polygon(c,[l-h/2*m+p*e,l+f*e-k/2*m,l+f*e+k/2*
m,l+h/2*m+p*e],[n+h/2*z-p*g,n-f*g+k/2*z,n-f*g-k/2*z,n-h/2*z-p*g],a.color,a.alpha,1,w,a.borderAlpha,void 0,!0);d.setCN(this,c,"gauge-arrow");a.set.push(c);this.graphsSet.push(a.set);a.hidden&&this.hideArrow(a)},setValue:function(a,b){a.axis&&a.axis.value2angle&&(a.frame=0,a.previousValue=a.value);a.value=b;var c=this.legend;c&&c.updateValues();this.accessible&&this.background&&this.makeAccessible(this.background,b)},handleLegendEvent:function(a){var b=a.type;a=a.dataItem;if(!this.legend.data&&a)switch(b){case"hideItem":this.hideArrow(a);break;case"showItem":this.showArrow(a)}},hideArrow:function(a){a.set.hide();a.hidden=!0;this.legend&&this.legend.invalidateSize()},showArrow:function(a){a.set.show();a.hidden=!1;this.legend&&this.legend.invalidateSize()},updateAnimations:function(){d.AmAngularGauge.base.updateAnimations.call(this);for(var a=this.arrows.length,b,c,e=0;e<a;e++)b=this.arrows[e],b.axis&&b.axis.value2angle&&(b.frame>=this.totalFrames?c=b.value:(b.frame++,b.clockWiseOnly&&b.value<b.previousValue&&(c=b.axis,b.previousValue-=c.endValue-c.startValue),c=d.getEffect(this.startEffect),c=d[c](0,b.frame,b.previousValue,b.value-b.previousValue,this.totalFrames),isNaN(c)&&(c=b.value)),c=b.axis.value2angle(c),b.drawnAngle!=c&&(this.drawArrow(b,c),b.drawnAngle=c));a=this.axes;for(b=a.length-1;0<=b;b--)if(c=a[b],c.bands)for(e=c.bands.length-1;0<=e;e--){var g=c.bands[e];g.update&&g.update()}}})})();

/***/ }),

/***/ "./src/assets/charts/amchart/light.js":
/*!********************************************!*\
  !*** ./src/assets/charts/amchart/light.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

AmCharts.themes.light={themeName:"light",AmChart:{color:"#000000",backgroundColor:"#FFFFFF"},AmCoordinateChart:{colors:["#67b7dc","#fdd400","#84b761","#cc4748","#cd82ad","#2f4074","#448e4d","#b7b83f","#b9783f","#b93e3d","#913167"]},AmStockChart:{colors:["#67b7dc","#fdd400","#84b761","#cc4748","#cd82ad","#2f4074","#448e4d","#b7b83f","#b9783f","#b93e3d","#913167"]},AmSlicedChart:{colors:["#67b7dc","#fdd400","#84b761","#cc4748","#cd82ad","#2f4074","#448e4d","#b7b83f","#b9783f","#b93e3d","#913167"],outlineAlpha:1,outlineThickness:2,labelTickColor:"#000000",labelTickAlpha:0.3},AmRectangularChart:{zoomOutButtonColor:'#000000',zoomOutButtonRollOverAlpha:0.15,zoomOutButtonImage:"lens"},AxisBase:{axisColor:"#000000",axisAlpha:0.3,gridAlpha:0.1,gridColor:"#000000"},ChartScrollbar:{backgroundColor:"#000000",backgroundAlpha:0.12,graphFillAlpha:0.5,graphLineAlpha:0,selectedBackgroundColor:"#FFFFFF",selectedBackgroundAlpha:0.4,gridAlpha:0.15},ChartCursor:{cursorColor:"#000000",color:"#FFFFFF",cursorAlpha:0.5},AmLegend:{color:"#000000"},AmGraph:{lineAlpha:0.9},GaugeArrow:{color:"#000000",alpha:0.8,nailAlpha:0,innerRadius:"40%",nailRadius:15,startWidth:15,borderAlpha:0.8,nailBorderAlpha:0},GaugeAxis:{tickColor:"#000000",tickAlpha:1,tickLength:15,minorTickLength:8,axisThickness:3,axisColor:'#000000',axisAlpha:1,bandAlpha:0.8},TrendLine:{lineColor:"#c03246",lineAlpha:0.8},AreasSettings:{alpha:0.8,color:"#67b7dc",colorSolid:"#003767",unlistedAreasAlpha:0.4,unlistedAreasColor:"#000000",outlineColor:"#FFFFFF",outlineAlpha:0.5,outlineThickness:0.5,rollOverColor:"#3c5bdc",rollOverOutlineColor:"#FFFFFF",selectedOutlineColor:"#FFFFFF",selectedColor:"#f15135",unlistedAreasOutlineColor:"#FFFFFF",unlistedAreasOutlineAlpha:0.5},LinesSettings:{color:"#000000",alpha:0.8},ImagesSettings:{alpha:0.8,labelColor:"#000000",color:"#000000",labelRollOverColor:"#3c5bdc"},ZoomControl:{buttonFillAlpha:0.7,buttonIconColor:"#a7a7a7"},SmallMap:{mapColor:"#000000",rectangleColor:"#f15135",backgroundColor:"#FFFFFF",backgroundAlpha:0.7,borderThickness:1,borderAlpha:0.8},PeriodSelector:{color:"#000000"},PeriodButton:{color:"#000000",background:"transparent",opacity:0.7,border:"1px solid rgba(0, 0, 0, .3)",MozBorderRadius:"5px",borderRadius:"5px",margin:"1px",outline:"none",boxSizing:"border-box"},PeriodButtonSelected:{color:"#000000",backgroundColor:"#b9cdf5",border:"1px solid rgba(0, 0, 0, .3)",MozBorderRadius:"5px",borderRadius:"5px",margin:"1px",outline:"none",opacity:1,boxSizing:"border-box"},PeriodInputField:{color:"#000000",background:"transparent",border:"1px solid rgba(0, 0, 0, .3)",outline:"none"},DataSetSelector:{color:"#000000",selectedBackgroundColor:"#b9cdf5",rollOverBackgroundColor:"#a8b0e4"},DataSetCompareList:{color:"#000000",lineHeight:"100%",boxSizing:"initial",webkitBoxSizing:"initial",border:"1px solid rgba(0, 0, 0, .3)"},DataSetSelect:{border:"1px solid rgba(0, 0, 0, .3)",outline:"none"}};

/***/ }),

/***/ "./src/assets/charts/amchart/pie.js":
/*!******************************************!*\
  !*** ./src/assets/charts/amchart/pie.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(){var k=window.AmCharts;k.AmSlicedChart=k.Class({inherits:k.AmChart,construct:function(a){this.createEvents("rollOverSlice","rollOutSlice","clickSlice","pullOutSlice","pullInSlice","rightClickSlice");k.AmSlicedChart.base.construct.call(this,a);this.colors="#FF0F00 #FF6600 #FF9E01 #FCD202 #F8FF01 #B0DE09 #04D215 #0D8ECF #0D52D1 #2A0CD0 #8A0CCF #CD0D74 #754DEB #DDDDDD #999999 #333333 #000000 #57032A #CA9726 #990000 #4B0C25".split(" ");this.alpha=1;this.groupPercent=0;this.groupedTitle="Other";this.groupedPulled=!1;this.groupedAlpha=1;this.marginLeft=0;this.marginBottom=this.marginTop=10;this.marginRight=0;this.hoverAlpha=1;this.outlineColor="#FFFFFF";this.outlineAlpha=0;this.outlineThickness=1;this.startAlpha=0;this.startDuration=1;this.startEffect="bounce";this.sequencedAnimation=!0;this.pullOutDuration=1;this.pullOutEffect="bounce";this.pullOnHover=this.pullOutOnlyOne=!1;this.labelsEnabled=!0;this.labelTickColor="#000000";this.labelTickAlpha=.2;this.hideLabelsPercent=0;this.urlTarget="_self";this.autoMarginOffset=10;this.gradientRatio=[];this.maxLabelWidth=200;this.accessibleLabel="[[title]]: [[percents]]% [[value]] [[description]]";k.applyTheme(this,a,"AmSlicedChart")},initChart:function(){k.AmSlicedChart.base.initChart.call(this);this.dataChanged&&(this.parseData(),this.dispatchDataUpdated=!0,this.dataChanged=!1,this.setLegendData(this.chartData));this.drawChart()},handleLegendEvent:function(a){var b=a.type,c=a.dataItem,d=this.legend;if(c.wedge&&c){var g=c.hidden;a=a.event;switch(b){case"clickMarker":g||d.switchable||this.clickSlice(c,a);break;case"clickLabel":g||this.clickSlice(c,a,!1);break;case"rollOverItem":g||this.rollOverSlice(c,!1,a);break;case"rollOutItem":g||this.rollOutSlice(c,a);break;case"hideItem":this.hideSlice(c,a);break;case"showItem":this.showSlice(c,a)}}},invalidateVisibility:function(){this.recalculatePercents();this.initChart();var a=this.legend;a&&a.invalidateSize()},addEventListeners:function(a,b){var c=this;a.mouseover(function(a){c.rollOverSlice(b,!0,a)}).mouseout(function(a){c.rollOutSlice(b,a)}).touchend(function(a){c.rollOverSlice(b,a)}).mouseup(function(a){c.clickSlice(b,a)}).contextmenu(function(a){c.handleRightClick(b,a)})},formatString:function(a,b,c){a=k.formatValue(a,b,["value"],this.nf,"",this.usePrefixes,this.prefixesOfSmallNumbers,this.prefixesOfBigNumbers);var d=this.pf.precision;isNaN(this.tempPrec)||(this.pf.precision=this.tempPrec);a=k.formatValue(a,b,["percents"],this.pf);a=k.massReplace(a,{"[[title]]":b.title,"[[description]]":b.description});this.pf.precision=d;-1!=a.indexOf("[[")&&(a=k.formatDataContextValue(a,b.dataContext));a=c?k.fixNewLines(a):k.fixBrakes(a);return a=k.cleanFromEmpty(a)},startSlices:function(){var a;for(a=0;a<this.chartData.length;a++)0<this.startDuration&&this.sequencedAnimation?this.setStartTO(a):this.startSlice(this.chartData[a])},setStartTO:function(a){var b=this;a=setTimeout(function(){b.startSequenced.call(b)},b.startDuration/b.chartData.length*500*a);b.timeOuts.push(a)},pullSlices:function(a){var b=this.chartData,c;for(c=0;c<b.length;c++){var d=b[c];d.pulled&&this.pullSlice(d,1,a)}},startSequenced:function(){var a=this.chartData,b;for(b=0;b<a.length;b++)if(!a[b].started){this.startSlice(this.chartData[b]);break}},startSlice:function(a){a.started=!0;var b=a.wedge,c=this.startDuration,d=a.labelSet;b&&0<c&&(0<a.alpha&&b.show(),b.translate(a.startX,a.startY),this.animatable.push(b),b.animate({opacity:1,translate:"0,0"},c,this.startEffect));d&&0<c&&(0<a.alpha&&d.show(),d.translate(a.startX,a.startY),d.animate({opacity:1,translate:"0,0"},c,this.startEffect))},showLabels:function(){var a=this.chartData,b;for(b=0;b<a.length;b++){var c=a[b];if(0<c.alpha){var d=c.label;d&&d.show();(c=c.tick)&&c.show()}}},showSlice:function(a){isNaN(a)?a.hidden=!1:this.chartData[a].hidden=!1;this.invalidateVisibility()},hideSlice:function(a){isNaN(a)?a.hidden=!0:this.chartData[a].hidden=!0;this.hideBalloon();this.invalidateVisibility()},rollOverSlice:function(a,b,c){isNaN(a)||(a=this.chartData[a]);clearTimeout(this.hoverInt);if(!a.hidden){this.pullOnHover&&this.pullSlice(a,1);1>this.hoverAlpha&&a.wedge&&a.wedge.attr({opacity:this.hoverAlpha});var d=a.balloonX,g=a.balloonY;a.pulled&&(d+=a.pullX,g+=a.pullY);var f=this.formatString(this.balloonText,a,!0),h=this.balloonFunction;h&&(f=h(a,f));h=k.adjustLuminosity(a.color,-.15);f?this.showBalloon(f,h,b,d,g):this.hideBalloon();0===a.value&&this.hideBalloon();this.fire({type:"rollOverSlice",dataItem:a,chart:this,event:c})}},rollOutSlice:function(a,b){isNaN(a)||(a=this.chartData[a]);a.wedge&&a.wedge.attr({opacity:1});this.hideBalloon();this.fire({type:"rollOutSlice",dataItem:a,chart:this,event:b})},clickSlice:function(a,b,c){this.checkTouchDuration(b)&&(isNaN(a)||(a=this.chartData[a]),a.pulled?this.pullSlice(a,0):this.pullSlice(a,1),k.getURL(a.url,this.urlTarget),c||this.fire({type:"clickSlice",dataItem:a,chart:this,event:b}))},handleRightClick:function(a,b){isNaN(a)||(a=this.chartData[a]);this.fire({type:"rightClickSlice",dataItem:a,chart:this,event:b})},drawTicks:function(){var a=this.chartData,b;for(b=0;b<a.length;b++){var c=a[b];if(c.label&&!c.skipTick){var d=c.ty,d=k.line(this.container,[c.tx0,c.tx,c.tx2],[c.ty0,d,d],this.labelTickColor,this.labelTickAlpha);k.setCN(this,d,this.type+"-tick");k.setCN(this,d,c.className,!0);c.tick=d;c.wedge.push(d);"AmFunnelChart"==this.cname&&d.toBack()}}},initialStart:function(){var a=this,b=a.startDuration,c=setTimeout(function(){a.showLabels.call(a)},1E3*b);a.timeOuts.push(c);a.chartCreated?a.pullSlices(!0):(a.startSlices(),0<b?(b=setTimeout(function(){a.pullSlices.call(a)},1200*b),a.timeOuts.push(b)):a.pullSlices(!0))},pullSlice:function(a,b,c){var d=this.pullOutDuration;!0===c&&(d=0);if(c=a.wedge)0<d?(c.animate({translate:b*a.pullX+","+b*a.pullY},d,this.pullOutEffect),a.labelSet&&a.labelSet.animate({translate:b*a.pullX+","+b*a.pullY},d,this.pullOutEffect)):(a.labelSet&&a.labelSet.translate(b*a.pullX,b*a.pullY),c.translate(b*a.pullX,b*a.pullY));1==b?(a.pulled=!0,this.pullOutOnlyOne&&this.pullInAll(a.index),a={type:"pullOutSlice",dataItem:a,chart:this}):(a.pulled=!1,a={type:"pullInSlice",dataItem:a,chart:this});this.fire(a)},pullInAll:function(a){var b=this.chartData,c;for(c=0;c<this.chartData.length;c++)c!=a&&b[c].pulled&&this.pullSlice(b[c],0)},pullOutAll:function(){var a=this.chartData,b;for(b=0;b<a.length;b++)a[b].pulled||this.pullSlice(a[b],1)},parseData:function(){var a=[];this.chartData=a;var b=this.dataProvider;isNaN(this.pieAlpha)||(this.alpha=this.pieAlpha);if(void 0!==b){var c=b.length,d=0,g,f,h;for(g=0;g<c;g++){f={};var e=b[g];f.dataContext=e;null!==e[this.valueField]&&(f.value=Number(e[this.valueField]));(h=e[this.titleField])||(h="");f.title=h;f.pulled=k.toBoolean(e[this.pulledField],!1);(h=e[this.descriptionField])||(h="");f.description=h;f.labelRadius=Number(e[this.labelRadiusField]);f.switchable=!0;f.className=e[this.classNameField];f.url=e[this.urlField];h=e[this.patternField];!h&&this.patterns&&(h=this.patterns[g]);f.pattern=h;f.visibleInLegend=k.toBoolean(e[this.visibleInLegendField],!0);h=e[this.alphaField];f.alpha=void 0!==h?Number(h):this.alpha;h=e[this.colorField];void 0!==h&&(f.color=h);f.labelColor=k.toColor(e[this.labelColorField]);d+=f.value;f.hidden=!1;a[g]=f}for(g=b=0;g<c;g++)f=a[g],f.percents=f.value/d*100,f.percents<this.groupPercent&&b++;1<b&&(this.groupValue=0,this.removeSmallSlices(),a.push({title:this.groupedTitle,value:this.groupValue,percents:this.groupValue/d*100,pulled:this.groupedPulled,color:this.groupedColor,url:this.groupedUrl,description:this.groupedDescription,alpha:this.groupedAlpha,pattern:this.groupedPattern,className:this.groupedClassName,dataContext:{}}));c=this.baseColor;c||(c=this.pieBaseColor);d=this.brightnessStep;d||(d=this.pieBrightnessStep);for(g=0;g<a.length;g++)c?h=k.adjustLuminosity(c,g*d/100):(h=this.colors[g],void 0===h&&(h=k.randomColor())),void 0===a[g].color&&(a[g].color=h);this.recalculatePercents()}},recalculatePercents:function(){var a=this.chartData,b=0,c,d;for(c=0;c<a.length;c++)d=a[c],!d.hidden&&0<d.value&&(b+=d.value);for(c=0;c<a.length;c++)d=this.chartData[c],d.percents=!d.hidden&&0<d.value?100*d.value/b:0},removeSmallSlices:function(){var a=this.chartData,b;for(b=a.length-1;0<=b;b--)a[b].percents<this.groupPercent&&(this.groupValue+=a[b].value,a.splice(b,1))},animateAgain:function(){var a=this;a.startSlices();for(var b=0;b<a.chartData.length;b++){var c=a.chartData[b];c.started=!1;var d=c.wedge;d&&(d.setAttr("opacity",a.startAlpha),d.translate(c.startX,c.startY));if(d=c.labelSet)d.setAttr("opacity",a.startAlpha),d.translate(c.startX,c.startY)}b=a.startDuration;0<b?(b=setTimeout(function(){a.pullSlices.call(a)},1200*b),a.timeOuts.push(b)):a.pullSlices()},measureMaxLabel:function(){var a=this.chartData,b=0,c;for(c=0;c<a.length;c++){var d=a[c],g=this.formatString(this.labelText,d),f=this.labelFunction;f&&(g=f(d,g));d=k.text(this.container,g,this.color,this.fontFamily,this.fontSize);g=d.getBBox().width;g>b&&(b=g);d.remove()}return b}})})();(function(){var k=window.AmCharts;k.AmPieChart=k.Class({inherits:k.AmSlicedChart,construct:function(a){this.type="pie";k.AmPieChart.base.construct.call(this,a);this.cname="AmPieChart";this.pieBrightnessStep=30;this.minRadius=10;this.depth3D=0;this.startAngle=90;this.angle=this.innerRadius=0;this.startRadius="500%";this.pullOutRadius="20%";this.labelRadius=20;this.labelText="[[title]]: [[percents]]%";this.balloonText="[[title]]: [[percents]]% ([[value]])\n[[description]]";this.previousScale=1;this.adjustPrecision=!1;this.gradientType="radial";k.applyTheme(this,a,this.cname)},drawChart:function(){k.AmPieChart.base.drawChart.call(this);var a=this.chartData;if(k.ifArray(a)){if(0<this.realWidth&&0<this.realHeight){k.VML&&(this.startAlpha=1);var b=this.startDuration,c=this.container,d=this.updateWidth();this.realWidth=d;var g=this.updateHeight();this.realHeight=g;var f=k.toCoordinate,h=f(this.marginLeft,d),e=f(this.marginRight,d),z=f(this.marginTop,g)+this.getTitleHeight(),n=f(this.marginBottom,g)+this.depth3D,A,B,m,w=k.toNumber(this.labelRadius),q=this.measureMaxLabel();q>this.maxLabelWidth&&(q=this.maxLabelWidth);this.labelText&&this.labelsEnabled||(w=q=0);A=void 0===this.pieX?(d-h-e)/2+h:f(this.pieX,this.realWidth);B=void 0===this.pieY?(g-z-n)/2+z:f(this.pieY,g);m=f(this.radius,d,g);m||(d=0<=w?d-h-e-2*q:d-h-e,g=g-z-n,m=Math.min(d,g),g<d&&(m/=1-this.angle/90,m>d&&(m=d)),g=k.toCoordinate(this.pullOutRadius,m),m=(0<=w?m-1.8*(w+g):m-1.8*g)/2);m<this.minRadius&&(m=this.minRadius);g=f(this.pullOutRadius,m);
z=k.toCoordinate(this.startRadius,m);f=f(this.innerRadius,m);f>=m&&(f=m-1);n=k.fitToBounds(this.startAngle,0,360);0<this.depth3D&&(n=270<=n?270:90);n-=90;360<n&&(n-=360);d=m-m*this.angle/90;for(h=q=0;h<a.length;h++)e=a[h],!0!==e.hidden&&(q+=k.roundTo(e.percents,this.pf.precision));q=k.roundTo(q,this.pf.precision);this.tempPrec=NaN;this.adjustPrecision&&100!=q&&(this.tempPrec=this.pf.precision+1);for(var E,h=0;h<a.length;h++)if(e=a[h],!0!==e.hidden&&(this.showZeroSlices||0!==e.percents)){var r=360*e.percents/100,q=Math.sin((n+r/2)/180*Math.PI),C=d/m*-Math.cos((n+r/2)/180*Math.PI),p=this.outlineColor;p||(p=e.color);var u=this.alpha;isNaN(e.alpha)||(u=e.alpha);p={fill:e.color,stroke:p,"stroke-width":this.outlineThickness,"stroke-opacity":this.outlineAlpha,"fill-opacity":u};e.url&&(p.cursor="pointer");p=k.wedge(c,A,B,n,r,m,d,f,this.depth3D,p,this.gradientRatio,e.pattern,this.path,this.gradientType);k.setCN(this,p,"pie-item");k.setCN(this,p.wedge,"pie-slice");k.setCN(this,p,e.className,!0);this.addEventListeners(p,
e);e.startAngle=n;a[h].wedge=p;0<b&&(this.chartCreated||p.setAttr("opacity",this.startAlpha));e.ix=q;e.iy=C;e.wedge=p;e.index=h;e.label=null;u=c.set();if(this.labelsEnabled&&this.labelText&&e.percents>=this.hideLabelsPercent){var l=n+r/2;0>l&&(l+=360);360<l&&(l-=360);var t=w;isNaN(e.labelRadius)||(t=e.labelRadius,0>t&&(e.skipTick=!0));var r=A+q*(m+t),D=B+C*(m+t),x,v=0;isNaN(E)&&350<l&&1<a.length-h&&(E=h-1+Math.floor((a.length-h)/2));if(0<=t){var y;90>=l&&0<=l?(y=0,x="start",v=8):90<=l&&180>l?(y=1,
x="start",v=8):180<=l&&270>l?(y=2,x="end",v=-8):270<=l&&354>=l?(y=3,x="end",v=-8):354<=l&&(h>E?(y=0,x="start",v=8):(y=3,x="end",v=-8));e.labelQuarter=y}else x="middle";l=this.formatString(this.labelText,e);(t=this.labelFunction)&&(l=t(e,l));t=e.labelColor;t||(t=this.color);""!==l&&(l=k.wrappedText(c,l,t,this.fontFamily,this.fontSize,x,!1,this.maxLabelWidth),k.setCN(this,l,"pie-label"),k.setCN(this,l,e.className,!0),l.translate(r+1.5*v,D),0>w&&(l.node.style.pointerEvents="none"),l.node.style.cursor="default",e.ty=D,e.textX=r+1.5*v,u.push(l),this.axesSet.push(u),e.labelSet=u,e.label=l,this.addEventListeners(u,e));e.tx=r;e.tx2=r+v;e.tx0=A+q*m;e.ty0=B+C*m}r=f+(m-f)/2;e.pulled&&(r+=g);this.accessible&&this.accessibleLabel&&(D=this.formatString(this.accessibleLabel,e),this.makeAccessible(p,D));void 0!==this.tabIndex&&p.setAttr("tabindex",this.tabIndex);e.balloonX=q*r+A;e.balloonY=C*r+B;e.startX=Math.round(q*z);e.startY=Math.round(C*z);e.pullX=Math.round(q*g);e.pullY=Math.round(C*g);this.graphsSet.push(p);
if(0===e.alpha||0<b&&!this.chartCreated)p.hide(),u&&u.hide();n+=360*e.percents/100;360<n&&(n-=360)}0<w&&this.arrangeLabels();this.pieXReal=A;this.pieYReal=B;this.radiusReal=m;this.innerRadiusReal=f;0<w&&this.drawTicks();this.initialStart();this.setDepths()}(a=this.legend)&&a.invalidateSize()}else this.cleanChart();this.dispDUpd()},setDepths:function(){var a=this.chartData,b;for(b=0;b<a.length;b++){var c=a[b],d=c.wedge,c=c.startAngle;0<=c&&180>c?d.toFront():180<=c&&d.toBack()}},arrangeLabels:function(){var a=this.chartData,b=a.length,c,d;for(d=b-1;0<=d;d--)c=a[d],0!==c.labelQuarter||c.hidden||this.checkOverlapping(d,c,0,!0,0);for(d=0;d<b;d++)c=a[d],1!=c.labelQuarter||c.hidden||this.checkOverlapping(d,c,1,!1,0);for(d=b-1;0<=d;d--)c=a[d],2!=c.labelQuarter||c.hidden||this.checkOverlapping(d,c,2,!0,0);for(d=0;d<b;d++)c=a[d],3!=c.labelQuarter||c.hidden||this.checkOverlapping(d,c,3,!1,0)},checkOverlapping:function(a,b,c,d,g){var f,h,e=this.chartData,k=e.length,n=b.label;if(n){if(!0===d)for(h=a+1;h<k;h++)e[h].labelQuarter==c&&(f=this.checkOverlappingReal(b,e[h],c))&&(h=k);else for(h=a-1;0<=h;h--)e[h].labelQuarter==c&&(f=this.checkOverlappingReal(b,e[h],c))&&(h=0);!0===f&&200>g&&isNaN(b.labelRadius)&&(f=b.ty+3*b.iy,b.ty=f,n.translate(b.textX,f),this.checkOverlapping(a,b,c,d,g+1))}},checkOverlappingReal:function(a,b,c){var d=!1,g=a.label,f=b.label;a.labelQuarter!=c||a.hidden||b.hidden||!f||(g=g.getBBox(),c={},c.width=g.width,c.height=g.height,c.y=a.ty,c.x=a.tx,a=f.getBBox(),f={},f.width=a.width,f.height=a.height,f.y=b.ty,f.x=b.tx,k.hitTest(c,f)&&(d=!0));return d}})})();

/***/ }),

/***/ "./src/assets/charts/amchart/serial.js":
/*!*********************************************!*\
  !*** ./src/assets/charts/amchart/serial.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(){var e=window.AmCharts;e.AmRectangularChart=e.Class({inherits:e.AmCoordinateChart,construct:function(a){e.AmRectangularChart.base.construct.call(this,a);this.theme=a;this.createEvents("zoomed","changed");this.marginRight=this.marginBottom=this.marginTop=this.marginLeft=20;this.depth3D=this.angle=0;this.plotAreaFillColors="#FFFFFF";this.plotAreaFillAlphas=0;this.plotAreaBorderColor="#000000";this.plotAreaBorderAlpha=0;this.maxZoomFactor=20;this.zoomOutButtonImageSize=19;this.zoomOutButtonImage="lens";this.zoomOutText="Show all";this.zoomOutButtonColor="#e5e5e5";this.zoomOutButtonAlpha=0;this.zoomOutButtonRollOverAlpha=1;this.zoomOutButtonPadding=8;this.trendLines=[];this.autoMargins=!0;this.marginsUpdated=!1;this.autoMarginOffset=10;e.applyTheme(this,a,"AmRectangularChart")},initChart:function(){e.AmRectangularChart.base.initChart.call(this);this.updateDxy();!this.marginsUpdated&&this.autoMargins&&(this.resetMargins(),this.drawGraphs=!1);this.processScrollbars();this.updateMargins();this.updatePlotArea();this.updateScrollbars();this.updateTrendLines();this.updateChartCursor();this.updateValueAxes();this.scrollbarOnly||this.updateGraphs()},drawChart:function(){e.AmRectangularChart.base.drawChart.call(this);this.drawPlotArea();if(e.ifArray(this.chartData)){var a=this.chartCursor;a&&a.draw()}},resetMargins:function(){var a={},b;if("xy"==this.type){var c=this.xAxes,d=this.yAxes;for(b=0;b<c.length;b++){var g=c[b];g.ignoreAxisWidth||(g.setOrientation(!0),g.fixAxisPosition(),a[g.position]=!0)}for(b=0;b<d.length;b++)c=d[b],c.ignoreAxisWidth||(c.setOrientation(!1),c.fixAxisPosition(),a[c.position]=!0)}else{d=this.valueAxes;for(b=0;b<d.length;b++)c=d[b],c.ignoreAxisWidth||(c.setOrientation(this.rotate),c.fixAxisPosition(),a[c.position]=!0);(b=this.categoryAxis)&&!b.ignoreAxisWidth&&(b.setOrientation(!this.rotate),b.fixAxisPosition(),b.fixAxisPosition(),a[b.position]=!0)}a.left&&(this.marginLeft=0);a.right&&(this.marginRight=0);a.top&&(this.marginTop=0);a.bottom&&(this.marginBottom=0);this.fixMargins=a},measureMargins:function(){var a=this.valueAxes,b,c=this.autoMarginOffset,d=this.fixMargins,g=this.realWidth,h=this.realHeight,f=c,e=c,l=g;b=h;var m;for(m=0;m<a.length;m++)a[m].handleSynchronization(),b=this.getAxisBounds(a[m],f,l,e,b),f=Math.round(b.l),l=Math.round(b.r),e=Math.round(b.t),b=Math.round(b.b);if(a=this.categoryAxis)b=this.getAxisBounds(a,f,l,e,b),f=Math.round(b.l),l=Math.round(b.r),e=Math.round(b.t),b=Math.round(b.b);d.left&&f<c&&(this.marginLeft=Math.round(-f+c),!isNaN(this.minMarginLeft)&&this.marginLeft<this.minMarginLeft&&(this.marginLeft=this.minMarginLeft));d.right&&l>=g-c&&(this.marginRight=Math.round(l-g+c),!isNaN(this.minMarginRight)&&this.marginRight<this.minMarginRight&&(this.marginRight=this.minMarginRight));d.top&&e<c+this.titleHeight&&(this.marginTop=Math.round(this.marginTop-e+c+this.titleHeight),!isNaN(this.minMarginTop)&&this.marginTop<this.minMarginTop&&(this.marginTop=this.minMarginTop));d.bottom&&b>h-c&&(this.marginBottom=Math.round(this.marginBottom+b-h+c),!isNaN(this.minMarginBottom)&&this.marginBottom<this.minMarginBottom&&(this.marginBottom=this.minMarginBottom));this.initChart()},getAxisBounds:function(a,b,c,d,g){if(!a.ignoreAxisWidth){var h=a.labelsSet,f=a.tickLength;a.inside&&(f=0);if(h)switch(h=a.getBBox(),a.position){case"top":a=h.y;d>a&&(d=a);break;case"bottom":a=h.y+h.height;g<a&&(g=a);break;case"right":a=h.x+h.width+f+3;c<a&&(c=a);break;case"left":a=h.x-f,b>a&&(b=a)}}return{l:b,t:d,r:c,b:g}},drawZoomOutButton:function(){var a=this;if(!a.zbSet){var b=a.container.set();a.zoomButtonSet.push(b);var c=a.color,d=a.fontSize,g=a.zoomOutButtonImageSize,h=a.zoomOutButtonImage.replace(/\.[a-z]*$/i,""),f=a.langObj.zoomOutText||a.zoomOutText,k=a.zoomOutButtonColor,l=a.zoomOutButtonAlpha,m=a.zoomOutButtonFontSize,p=a.zoomOutButtonPadding;isNaN(m)||(d=m);(m=a.zoomOutButtonFontColor)&&(c=m);var m=a.zoomOutButton,n;m&&(m.fontSize&&(d=m.fontSize),m.color&&(c=m.color),m.backgroundColor&&(k=m.backgroundColor),isNaN(m.backgroundAlpha)||(a.zoomOutButtonRollOverAlpha=m.backgroundAlpha));var u=m=0,u=a.pathToImages;if(h){if(e.isAbsolute(h)||void 0===u)u="";n=a.container.image(u+h+a.extension,0,0,g,g);e.setCN(a,n,"zoom-out-image");b.push(n);n=n.getBBox();m=n.width+5}void 0!==f&&(c=e.text(a.container,f,c,a.fontFamily,d,"start"),e.setCN(a,c,"zoom-out-label"),d=c.getBBox(),u=n?n.height/2-3:d.height/2,c.translate(m,u),b.push(c));n=b.getBBox();c=1;e.isModern||(c=0);k=e.rect(a.container,n.width+2*p+5,n.height+2*p-2,k,1,1,k,c);k.setAttr("opacity",l);k.translate(-p,-p);e.setCN(a,k,"zoom-out-bg");b.push(k);k.toBack();a.zbBG=k;n=k.getBBox();b.translate(a.marginLeftReal+a.plotAreaWidth-n.width+p,a.marginTopReal+p);b.hide();b.mouseover(function(){a.rollOverZB()}).mouseout(function(){a.rollOutZB()}).click(function(){a.clickZB()}).touchstart(function(){a.rollOverZB()}).touchend(function(){a.rollOutZB();a.clickZB()});for(l=0;l<b.length;l++)b[l].attr({cursor:"pointer"});void 0!==a.zoomOutButtonTabIndex&&(b.setAttr("tabindex",a.zoomOutButtonTabIndex),b.setAttr("role","menuitem"),b.keyup(function(b){13==b.keyCode&&a.clickZB()}));a.zbSet=b}},rollOverZB:function(){this.rolledOverZB=!0;this.zbBG.setAttr("opacity",this.zoomOutButtonRollOverAlpha)},rollOutZB:function(){this.rolledOverZB=!1;this.zbBG.setAttr("opacity",this.zoomOutButtonAlpha)},clickZB:function(){this.rolledOverZB=!1;this.zoomOut()},zoomOut:function(){this.zoomOutValueAxes()},drawPlotArea:function(){var a=this.dx,b=this.dy,c=this.marginLeftReal,d=this.marginTopReal,g=this.plotAreaWidth-1,h=this.plotAreaHeight-1,f=this.plotAreaFillColors,k=this.plotAreaFillAlphas,l=this.plotAreaBorderColor,m=this.plotAreaBorderAlpha;"object"==typeof k&&(k=k[0]);f=e.polygon(this.container,[0,g,g,0,0],[0,0,h,h,0],f,k,1,l,m,this.plotAreaGradientAngle);e.setCN(this,f,"plot-area");f.translate(c+a,d+b);this.set.push(f);0!==a&&0!==b&&(f=this.plotAreaFillColors,"object"==typeof f&&(f=f[0]),f=e.adjustLuminosity(f,-.15),g=e.polygon(this.container,[0,a,g+a,g,0],[0,b,b,0,0],f,k,1,l,m),e.setCN(this,g,"plot-area-bottom"),g.translate(c,d+h),this.set.push(g),a=e.polygon(this.container,[0,0,a,a,0],[0,h,h+b,b,0],f,k,1,l,m),e.setCN(this,a,"plot-area-left"),a.translate(c,d),this.set.push(a));(c=this.bbset)&&this.scrollbarOnly&&c.remove()},updatePlotArea:function(){var a=this.updateWidth(),b=this.updateHeight(),c=this.container;this.realWidth=a;this.realWidth=b;c&&this.container.setSize(a,b);var c=this.marginLeftReal,d=this.marginTopReal,a=a-c-this.marginRightReal-this.dx,b=b-d-this.marginBottomReal;1>a&&(a=1);1>b&&(b=1);this.plotAreaWidth=Math.round(a);this.plotAreaHeight=Math.round(b);this.plotBalloonsSet.translate(c,d)},updateDxy:function(){this.dx=Math.round(this.depth3D*Math.cos(this.angle*Math.PI/180));this.dy=Math.round(-this.depth3D*Math.sin(this.angle*Math.PI/180));this.d3x=Math.round(this.columnSpacing3D*Math.cos(this.angle*Math.PI/180));this.d3y=Math.round(-this.columnSpacing3D*Math.sin(this.angle*Math.PI/180))},updateMargins:function(){var a=this.getTitleHeight();this.titleHeight=a;this.marginTopReal=this.marginTop-this.dy;this.fixMargins&&!this.fixMargins.top&&(this.marginTopReal+=a);this.marginBottomReal=this.marginBottom;this.marginLeftReal=this.marginLeft;this.marginRightReal=this.marginRight},updateValueAxes:function(){var a=this.valueAxes,b;for(b=0;b<a.length;b++){var c=a[b];this.setAxisRenderers(c);this.updateObjectSize(c)}},setAxisRenderers:function(a){a.axisRenderer=e.RecAxis;a.guideFillRenderer=e.RecFill;a.axisItemRenderer=e.RecItem;a.marginsChanged=!0},updateGraphs:function(){var a=this.graphs,b;for(b=0;b<a.length;b++){var c=a[b];c.index=b;c.rotate=this.rotate;this.updateObjectSize(c)}},updateObjectSize:function(a){a.width=this.plotAreaWidth-1;a.height=this.plotAreaHeight-1;a.x=this.marginLeftReal;a.y=this.marginTopReal;a.dx=this.dx;a.dy=this.dy},updateChartCursor:function(){var a=this.chartCursor;a&&(a=e.processObject(a,e.ChartCursor,this.theme),this.updateObjectSize(a),this.addChartCursor(a),a.chart=this)},processScrollbars:function(){var a=this.chartScrollbar;a&&(a=e.processObject(a,e.ChartScrollbar,this.theme),this.addChartScrollbar(a))},updateScrollbars:function(){},removeChartCursor:function(){e.callMethod("destroy",[this.chartCursor]);this.chartCursor=null},zoomTrendLines:function(){var a=this.trendLines,b;for(b=0;b<a.length;b++){var c=a[b];c.valueAxis.recalculateToPercents?c.set&&c.set.hide():(c.x=this.marginLeftReal,c.y=this.marginTopReal,c.draw())}},handleCursorValueZoom:function(){},addTrendLine:function(a){this.trendLines.push(a)},zoomOutValueAxes:function(){for(var a=this.valueAxes,b=0;b<a.length;b++)a[b].zoomOut()},removeTrendLine:function(a){var b=this.trendLines,c;for(c=b.length-1;0<=c;c--)b[c]==a&&b.splice(c,1)},adjustMargins:function(a,b){var c=a.position,d=a.scrollbarHeight+a.offset;a.enabled&&("top"==c?b?this.marginLeftReal+=d:this.marginTopReal+=d:b?this.marginRightReal+=d:this.marginBottomReal+=d)},getScrollbarPosition:function(a,b,c){var d="bottom",g="top";a.oppositeAxis||(g=d,d="top");a.position=b?"bottom"==c||"left"==c?d:g:"top"==c||"right"==c?d:g},updateChartScrollbar:function(a,b){if(a){a.rotate=b;var c=this.marginTopReal,d=this.marginLeftReal,g=a.scrollbarHeight,h=this.dx,f=this.dy,e=a.offset;"top"==a.position?b?(a.y=c,a.x=d-g-e):(a.y=c-g+f-e,a.x=d+h):b?(a.y=c+f,a.x=d+this.plotAreaWidth+h+e):(a.y=c+this.plotAreaHeight+e,a.x=this.marginLeftReal)}},showZB:function(a){var b=this.zbSet;a&&(b=this.zoomOutText,""!==b&&b&&this.drawZoomOutButton());if(b=this.zbSet)this.zoomButtonSet.push(b),a?b.show():b.hide(),this.rollOutZB()},handleReleaseOutside:function(a){e.AmRectangularChart.base.handleReleaseOutside.call(this,a);(a=this.chartCursor)&&a.handleReleaseOutside&&a.handleReleaseOutside()},handleMouseDown:function(a){e.AmRectangularChart.base.handleMouseDown.call(this,a);var b=this.chartCursor;b&&b.handleMouseDown&&!this.rolledOverZB&&b.handleMouseDown(a)},update:function(){e.AmRectangularChart.base.update.call(this);this.chartCursor&&this.chartCursor.update&&this.chartCursor.update()},handleScrollbarValueZoom:function(a){this.relativeZoomValueAxes(a.target.valueAxes,a.relativeStart,a.relativeEnd);this.zoomAxesAndGraphs()},zoomValueScrollbar:function(a){if(a&&a.enabled){var b=a.valueAxes[0],c=b.relativeStart,d=b.relativeEnd;b.reversed&&(d=1-c,c=1-b.relativeEnd);a.percentZoom(c,d)}},zoomAxesAndGraphs:function(){if(!this.scrollbarOnly){var a=this.valueAxes,b;for(b=0;b<a.length;b++)a[b].zoom(this.start,this.end);a=this.graphs;for(b=0;b<a.length;b++)a[b].zoom(this.start,this.end);(b=this.chartCursor)&&b.clearSelection();this.zoomTrendLines()}},handleValueAxisZoomReal:function(a,b){var c=a.relativeStart,d=a.relativeEnd;if(c>d)var g=c,c=d,d=g;this.relativeZoomValueAxes(b,c,d);this.updateAfterValueZoom()},updateAfterValueZoom:function(){this.zoomAxesAndGraphs();this.zoomScrollbar()},relativeZoomValueAxes:function(a,b,c){this.hideBalloonReal();b=e.fitToBounds(b,0,1);c=e.fitToBounds(c,0,1);if(b>c){var d=b;b=c;c=d}var d=1/this.maxZoomFactor,g=e.getDecimals(d)+4;c-b<d&&(c=b+(c-b)/2,b=c-d/2,c+=d/2,1<c&&(b-=c-1,c=1),0>b&&(b=0,c=d));b=e.roundTo(b,g);c=e.roundTo(c,g);d=!1;if(a){for(g=0;g<a.length;g++){var h=a[g].zoomToRelativeValues(b,c,!0);h&&(d=h)}this.showZB()}return d},addChartCursor:function(a){e.callMethod("destroy",
[this.chartCursor]);a&&(this.listenTo(a,"moved",this.handleCursorMove),this.listenTo(a,"zoomed",this.handleCursorZoom),this.listenTo(a,"zoomStarted",this.handleCursorZoomStarted),this.listenTo(a,"panning",this.handleCursorPanning),this.listenTo(a,"onHideCursor",this.handleCursorHide));this.chartCursor=a},handleCursorChange:function(){},handleCursorMove:function(a){var b,c=this.valueAxes;for(b=0;b<c.length;b++)if(!a.panning){var d=c[b];d&&d.showBalloon&&d.showBalloon(a.x,a.y)}},handleCursorZoom:function(a){if(this.skipZoomed)this.skipZoomed=!1;else{var b=this.startX0,c=this.endX0,d=this.endY0,g=this.startY0,h=a.startX,f=a.endX,e=a.startY,l=a.endY;this.startX0=this.endX0=this.startY0=this.endY0=NaN;this.handleCursorZoomReal(b+h*(c-b),b+f*(c-b),g+e*(d-g),g+l*(d-g),a)}},handleCursorHide:function(){var a,b=this.valueAxes;for(a=0;a<b.length;a++)b[a].hideBalloon();b=this.graphs;for(a=0;a<b.length;a++)b[a].hideBalloonReal()}})})();(function(){var e=window.AmCharts;e.AmSerialChart=e.Class({inherits:e.AmRectangularChart,construct:function(a){this.type="serial";e.AmSerialChart.base.construct.call(this,a);this.cname="AmSerialChart";this.theme=a;this.columnSpacing=5;this.columnSpacing3D=0;this.columnWidth=.8;var b=new e.CategoryAxis(a);b.chart=this;this.categoryAxis=b;this.zoomOutOnDataUpdate=!0;this.mouseWheelZoomEnabled=this.mouseWheelScrollEnabled=this.rotate=this.skipZoom=!1;this.minSelectedTime=0;e.applyTheme(this,a,this.cname)},initChart:function(){e.AmSerialChart.base.initChart.call(this);this.updateCategoryAxis(this.categoryAxis,this.rotate,"categoryAxis");if(this.dataChanged)this.parseData();else this.onDataUpdated();this.drawGraphs=!0},onDataUpdated:function(){var a=this.countColumns(),b=this.chartData,c=this.graphs,d;for(d=0;d<c.length;d++){var g=c[d];g.data=b;g.columnCount=a}0<b.length&&(this.firstTime=this.getStartTime(b[0].time),this.lastTime=this.getEndTime(b[b.length-1].time));this.drawChart();this.autoMargins&&!this.marginsUpdated?(this.marginsUpdated=!0,this.measureMargins()):this.dispDUpd()},syncGrid:function(){if(this.synchronizeGrid){var a=this.valueAxes,b,c;if(0<a.length){var d=0;for(c=0;c<a.length;c++)b=a[c],d<b.gridCountReal&&(d=b.gridCountReal);var g=!1;for(c=0;c<a.length;c++)if(b=a[c],b.gridCountReal<d){var h=(d-b.gridCountReal)/2,f=g=h;0!==h-Math.round(h)&&(g-=.5,f+=.5);0<=b.min&&0>b.min-g*b.step&&(f+=g,g=0);0>=b.max&&0<b.max+f*b.step&&(g+=f,f=0);h=e.getDecimals(b.step);b.minimum=e.roundTo(b.min-
g*b.step,h);b.maximum=e.roundTo(b.max+f*b.step,h);b.setStep=b.step;g=b.strictMinMax=!0}g&&this.updateAfterValueZoom();for(c=0;c<a.length;c++)b=a[c],b.minimum=NaN,b.maximum=NaN,b.setStep=NaN,b.strictMinMax=!1}}},handleWheelReal:function(a,b){if(!this.wheelBusy){var c=this.categoryAxis,d=c.parseDates,g=c.minDuration(),e=1,f=1;this.mouseWheelZoomEnabled?b||(e=-1):b&&(e=-1);var k=this.chartCursor;if(k){var l=k.mouseX,k=k.mouseY;e!=f&&(l=this.rotate?k/this.plotAreaHeight:l/this.plotAreaWidth,e*=l,f*=1-
l);l=.05*(this.end-this.start);d&&(l=.05*(this.endTime-this.startTime)/g);1>l&&(l=1);e*=l;f*=l;if(!d||c.equalSpacing)e=Math.round(e),f=Math.round(f)}k=this.chartData.length;c=this.lastTime;l=this.firstTime;0>a?d?(k=this.endTime-this.startTime,d=this.startTime+e*g,g=this.endTime+f*g,0<f&&0<e&&g>=c&&(g=c,d=c-k),this.zoomToDates(new Date(d),new Date(g))):(0<f&&0<e&&this.end>=k-1&&(e=f=0),d=this.start+e,g=this.end+f,this.zoomToIndexes(d,g)):d?(k=this.endTime-this.startTime,d=this.startTime-e*g,g=this.endTime-
f*g,0<f&&0<e&&d<=l&&(d=l,g=l+k),this.zoomToDates(new Date(d),new Date(g))):(0<f&&0<e&&1>this.start&&(e=f=0),d=this.start-e,g=this.end-f,this.zoomToIndexes(d,g))}},validateData:function(a){this.marginsUpdated=!1;this.zoomOutOnDataUpdate&&!a&&(this.endTime=this.end=this.startTime=this.start=NaN);var b=a=!1,c=!1,d=this.chartScrollbar;d&&(d.dragging&&(a=!0,d.handleDragStop()),d.resizingRight&&(c=!0,d.rightDragStop()),d.resizingLeft&&(b=!0,d.leftDragStop()));e.AmSerialChart.base.validateData.call(this);a&&d.handleDragStart();c&&d.rightDragStart();b&&d.leftDragStart()},drawChart:function(){if(0<this.realWidth&&0<this.realHeight){e.AmSerialChart.base.drawChart.call(this);var a=this.chartData;if(e.ifArray(a)){var b=this.chartScrollbar;!b||!this.marginsUpdated&&this.autoMargins||b.draw();(b=this.valueScrollbar)&&b.draw();var b=a.length-1,c,d;c=this.categoryAxis;if(c.parseDates&&!c.equalSpacing){if(c=this.startTime,d=this.endTime,isNaN(c)||isNaN(d))c=this.firstTime,d=this.lastTime}else{c=this.start;d=this.end;if(isNaN(c)||isNaN(d))d=c=NaN;isNaN(c)&&(isNaN(this.startTime)||(c=this.getClosestIndex(a,"time",this.startTime,!0,0,a.length)));isNaN(d)&&(isNaN(this.endTime)||(d=this.getClosestIndex(a,"time",this.endTime,!1,0,a.length)));if(isNaN(c)||isNaN(d))c=0,d=b}this.endTime=this.startTime=this.end=this.start=void 0;this.zoom(c,d)}}else this.cleanChart()},cleanChart:function(){e.callMethod("destroy",[this.valueAxes,this.graphs,this.categoryAxis,this.chartScrollbar,this.chartCursor,this.valueScrollbar])},updateCategoryAxis:function(a,b,c){a.chart=this;a.id=c;a.rotate=b;a.setOrientation(!this.rotate);a.init();this.setAxisRenderers(a);this.updateObjectSize(a)},updateValueAxes:function(){e.AmSerialChart.base.updateValueAxes.call(this);var a=this.valueAxes,b;for(b=0;b<a.length;b++){var c=a[b],d=this.rotate;c.rotate=d;c.setOrientation(d);d=this.categoryAxis;if(!d.startOnAxis||d.parseDates)c.expandMinMax=!0}},getStartTime:function(a){var b=this.categoryAxis;return e.resetDateToMin(new Date(a),b.minPeriod,1,b.firstDayOfWeek).getTime()},getEndTime:function(a){var b=e.extractPeriod(this.categoryAxis.minPeriod);return e.changeDate(new Date(a),b.period,b.count,!0).getTime()-1},updateMargins:function(){e.AmSerialChart.base.updateMargins.call(this);var a=this.chartScrollbar;a&&(this.getScrollbarPosition(a,this.rotate,this.categoryAxis.position),this.adjustMargins(a,this.rotate));if(a=this.valueScrollbar)this.getScrollbarPosition(a,!this.rotate,this.valueAxes[0].position),this.adjustMargins(a,!this.rotate)},updateScrollbars:function(){e.AmSerialChart.base.updateScrollbars.call(this);this.updateChartScrollbar(this.chartScrollbar,this.rotate);this.updateChartScrollbar(this.valueScrollbar,!this.rotate)},zoom:function(a,b){var c=this.categoryAxis;c.parseDates&&!c.equalSpacing?(this.timeZoom(a,b),isNaN(a)&&this.zoomOutValueAxes()):this.indexZoom(a,b);(c=this.chartCursor)&&(c.pan||c.hideCursorReal());this.updateLegendValues()},timeZoom:function(a,b){var c=this.maxSelectedTime;isNaN(c)||(b!=this.endTime&&b-
a>c&&(a=b-c),a!=this.startTime&&b-a>c&&(b=a+c));var d=this.minSelectedTime;if(0<d&&b-a<d){var g=Math.round(a+(b-a)/2),d=Math.round(d/2);a=g-d;b=g+d}d=this.chartData;g=this.categoryAxis;if(e.ifArray(d)&&(a!=this.startTime||b!=this.endTime)){var h=g.minDuration(),f=this.firstTime,k=this.lastTime;a||(a=f,isNaN(c)||(a=k-c));b||(b=k);a>k&&(a=k);b<f&&(b=f);a<f&&(a=f);b>k&&(b=k);b<a&&(b=a+h);b-a<h/5&&(b<k?b=a+h/5:a=b-h/5);this.startTime=a;this.endTime=b;c=d.length-1;h=this.getClosestIndex(d,"time",a,!0,
0,c);d=this.getClosestIndex(d,"time",b,!1,h,c);g.timeZoom(a,b);g.zoom(h,d);this.start=e.fitToBounds(h,0,c);this.end=e.fitToBounds(d,0,c);this.zoomAxesAndGraphs();this.zoomScrollbar();this.fixCursor();this.showZB();this.syncGrid();this.updateColumnsDepth();this.dispatchTimeZoomEvent()}},showZB:function(){var a,b=this.categoryAxis;b&&b.parseDates&&!b.equalSpacing&&(this.startTime>this.firstTime&&(a=!0),this.endTime<this.lastTime&&(a=!0));0<this.start&&(a=!0);this.end<this.chartData.length-1&&(a=!0);if(b=this.valueAxes)b=b[0],isNaN(b.relativeStart)||(0!==e.roundTo(b.relativeStart,3)&&(a=!0),1!=e.roundTo(b.relativeEnd,3)&&(a=!0));e.AmSerialChart.base.showZB.call(this,a)},updateAfterValueZoom:function(){e.AmSerialChart.base.updateAfterValueZoom.call(this);this.updateColumnsDepth()},indexZoom:function(a,b){var c=this.maxSelectedSeries,d=!1;isNaN(c)||(b!=this.end&&b-a>c&&(a=b-c,d=!0),a!=this.start&&b-a>c&&(b=a+c,d=!0));if(d&&(d=this.chartScrollbar)&&d.dragger){var g=d.dragger.getBBox();d.maxWidth=g.width;d.maxHeight=g.height}if(a!=this.start||b!=this.end)d=this.chartData.length-1,isNaN(a)&&(a=0,isNaN(c)||(a=d-c)),isNaN(b)&&(b=d),b<a&&(b=a),b>d&&(b=d),a>d&&(a=d-1),0>a&&(a=0),this.start=a,this.end=b,this.categoryAxis.zoom(a,b),this.zoomAxesAndGraphs(),this.zoomScrollbar(),this.fixCursor(),0!==a||b!=this.chartData.length-1?this.showZB(!0):this.showZB(!1),this.syncGrid(),this.updateColumnsDepth(),this.dispatchIndexZoomEvent()},updateGraphs:function(){e.AmSerialChart.base.updateGraphs.call(this);var a=this.graphs,b;for(b=0;b<a.length;b++){var c=a[b];c.columnWidthReal=this.columnWidth;c.categoryAxis=this.categoryAxis;e.isString(c.fillToGraph)&&(c.fillToGraph=this.graphsById[c.fillToGraph])}},zoomAxesAndGraphs:function(){e.AmSerialChart.base.zoomAxesAndGraphs.call(this);this.updateColumnsDepth()},updateColumnsDepth:function(){if(0!==this.depth3D||0!==this.angle){var a,b=this.graphs,c;this.columnsArray=[];for(a=0;a<b.length;a++){c=b[a];var d=c.columnsArray;if(d){var g;for(g=0;g<d.length;g++)this.columnsArray.push(d[g])}}this.columnsArray.sort(this.compareDepth);b=this.columnsSet;if(0<this.columnsArray.length){d=this.container.set();this.columnSet.push(d);for(a=0;a<this.columnsArray.length;a++)d.push(this.columnsArray[a].column.set);c&&d.translate(c.x,c.y);this.columnsSet=d}e.remove(b)}},compareDepth:function(a,b){return a.depth>b.depth?1:-1},zoomScrollbar:function(){var a=this.chartScrollbar,b=this.categoryAxis;if(a){if(!this.zoomedByScrollbar){var c=a.dragger;c&&c.stop()}this.zoomedByScrollbar=!1;b.parseDates&&!b.equalSpacing?a.timeZoom(this.startTime,this.endTime):a.zoom(this.start,this.end)}this.zoomValueScrollbar(this.valueScrollbar)},updateTrendLines:function(){var a=this.trendLines,b;for(b=0;b<a.length;b++){var c=a[b],c=e.processObject(c,e.TrendLine,this.theme);a[b]=c;c.chart=this;c.id||(c.id="trendLineAuto"+b+"_"+(new Date).getTime());e.isString(c.valueAxis)&&(c.valueAxis=this.getValueAxisById(c.valueAxis));c.valueAxis||(c.valueAxis=this.valueAxes[0]);c.categoryAxis=this.categoryAxis}},countColumns:function(){var a=0,b=this.valueAxes.length,c=this.graphs.length,d,g,e=!1,f,k;for(k=0;k<b;k++){g=this.valueAxes[k];var l=g.stackType,m=0;if("100%"==l||"regular"==l)for(e=!1,f=0;f<c;f++)d=this.graphs[f],d.tcc=1,d.valueAxis==g&&"column"==d.type&&(!e&&d.stackable&&(a++,e=!0),(!d.stackable&&d.clustered||d.newStack&&0!==m)&&a++,d.columnIndex=a-1,d.clustered||(d.columnIndex=0),m++);if("none"==l||"3d"==l){m=!1;for(f=0;f<c;f++)d=this.graphs[f],d.valueAxis==g&&"column"==d.type&&(d.clustered?(d.tcc=1,d.newStack&&(a=0),d.hidden||(d.columnIndex=a,a++)):d.hidden||(m=!0,d.tcc=1,d.columnIndex=0));m&&0===a&&(a=1)}if("3d"==l){g=1;for(m=0;m<c;m++)d=this.graphs[m],d.newStack&&g++,d.depthCount=g,d.tcc=a;a=g}}return a},parseData:function(){e.AmSerialChart.base.parseData.call(this);this.parseSerialData(this.dataProvider)},getCategoryIndexByValue:function(a){var b=this.chartData,c;for(c=0;c<b.length;c++)if(b[c].category==a)return c},handleScrollbarZoom:function(a){this.zoomedByScrollbar=!0;this.zoom(a.start,a.end)},dispatchTimeZoomEvent:function(){if(this.drawGraphs&&(this.prevStartTime!=this.startTime||this.prevEndTime!=this.endTime)){var a={type:"zoomed"};a.startDate=new Date(this.startTime);a.endDate=new Date(this.endTime);a.startIndex=this.start;a.endIndex=this.end;this.startIndex=this.start;this.endIndex=this.end;this.startDate=a.startDate;this.endDate=a.endDate;this.prevStartTime=this.startTime;this.prevEndTime=this.endTime;var b=this.categoryAxis,c=e.extractPeriod(b.minPeriod).period,b=b.dateFormatsObject[c];a.startValue=e.formatDate(a.startDate,b,this);a.endValue=e.formatDate(a.endDate,b,this);a.chart=this;a.target=this;this.fire(a)}},dispatchIndexZoomEvent:function(){if(this.drawGraphs&&(this.prevStartIndex!=this.start||this.prevEndIndex!=this.end)){this.startIndex=this.start;this.endIndex=this.end;var a=this.chartData;if(e.ifArray(a)&&!isNaN(this.start)&&!isNaN(this.end)){var b={chart:this,target:this,type:"zoomed"};b.startIndex=this.start;b.endIndex=this.end;b.startValue=a[this.start].category;b.endValue=a[this.end].category;this.categoryAxis.parseDates&&(this.startTime=a[this.start].time,this.endTime=a[this.end].time,b.startDate=new Date(this.startTime),b.endDate=new Date(this.endTime));this.prevStartIndex=this.start;this.prevEndIndex=this.end;this.fire(b)}}},updateLegendValues:function(){this.legend&&this.legend.updateValues()},getClosestIndex:function(a,b,c,d,g,e){0>g&&(g=0);e>a.length-1&&(e=a.length-1);var f=g+Math.round((e-g)/2),k=a[f][b];return c==k?f:1>=e-g?d?g:Math.abs(a[g][b]-c)<Math.abs(a[e][b]-c)?g:e:c==k?f:c<k?this.getClosestIndex(a,b,
c,d,g,f):this.getClosestIndex(a,b,c,d,f,e)},zoomToIndexes:function(a,b){var c=this.chartData;if(c){var d=c.length;0<d&&(0>a&&(a=0),b>d-1&&(b=d-1),d=this.categoryAxis,d.parseDates&&!d.equalSpacing?this.zoom(c[a].time,this.getEndTime(c[b].time)):this.zoom(a,b))}},zoomToDates:function(a,b){var c=this.chartData;if(c)if(this.categoryAxis.equalSpacing){var d=this.getClosestIndex(c,"time",a.getTime(),!0,0,c.length);b=e.resetDateToMin(b,this.categoryAxis.minPeriod,1);c=this.getClosestIndex(c,"time",b.getTime(),!1,0,c.length);this.zoom(d,c)}else this.zoom(a.getTime(),b.getTime())},zoomToCategoryValues:function(a,b){this.chartData&&this.zoom(this.getCategoryIndexByValue(a),this.getCategoryIndexByValue(b))},formatPeriodString:function(a,b){if(b){b.periodDataItem={};b.periodPercentDataItem={};var c=["value","open","low","high","close"],d="value open low high close average sum count".split(" "),g=b.valueAxis,h=this.chartData,f=b.numberFormatter;f||(f=this.nf);for(var k=0;k<c.length;k++){for(var l=c[k],m=0,p=0,n=0,u=0,v,x,E,t,r,B,q,w,y,C,F=this.start;F<=this.end;F++){var D=h[F];if(D){var A=D.axes[g.id].graphs[b.id];if(A){if(A.values){var z=A.values[l],D=D.x.categoryAxis;if(this.rotate){if(0>D||D>A.graph.height)z=NaN}else if(0>D||D>A.graph.width)z=NaN;if(!isNaN(z)){isNaN(v)&&(v=z);x=z;if(isNaN(E)||E>z)E=z;if(isNaN(t)||t<z)t=z;r=e.getDecimals(m);D=e.getDecimals(z);m+=z;m=e.roundTo(m,Math.max(r,D));p++;r=m/p}}if(A.percents&&(A=A.percents[l],!isNaN(A))){isNaN(B)&&(B=A);q=A;if(isNaN(w)||w>A)w=A;if(isNaN(y)||y<A)y=A;C=e.getDecimals(n);z=e.getDecimals(A);n+=A;n=e.roundTo(n,Math.max(C,z));u++;C=n/u}}}}m={open:v,close:x,high:t,low:E,average:r,sum:m,count:p};n={open:B,close:q,high:y,low:w,average:C,sum:n,count:u};a=e.formatValue(a,m,d,f,l+"\\.",this.usePrefixes,this.prefixesOfSmallNumbers,this.prefixesOfBigNumbers);a=e.formatValue(a,n,d,this.pf,"percents\\."+l+"\\.");b.periodDataItem[l]=m;b.periodPercentDataItem[l]=n}}return a=e.cleanFromEmpty(a)},formatString:function(a,b,c){if(b){var d=b.graph;if(void 0!==a){if(-1!=a.indexOf("[[category]]")){var g=b.serialDataItem.category;if(this.categoryAxis.parseDates){var h=this.balloonDateFormat,f=this.chartCursor;f&&f.categoryBalloonDateFormat&&(h=f.categoryBalloonDateFormat);h=e.formatDate(g,h,this);-1!=h.indexOf("fff")&&(h=e.formatMilliseconds(h,g));g=h}a=a.replace(/\[\[category\]\]/g,String(g.replace("$","$$$")))}g=d.numberFormatter;g||(g=this.nf);h=b.graph.valueAxis;(f=h.duration)&&!isNaN(b.values.value)&&(f=e.formatDuration(b.values.value,f,"",h.durationUnits,h.maxInterval,g),a=a.replace(RegExp("\\[\\[value\\]\\]","g"),f));"date"==h.type&&(h=e.formatDate(new Date(b.values.value),d.dateFormat,this),f=RegExp("\\[\\[value\\]\\]","g"),a=a.replace(f,h),h=e.formatDate(new Date(b.values.open),d.dateFormat,this),f=RegExp("\\[\\[open\\]\\]","g"),a=a.replace(f,h));d="value open low high close total".split(" ");h=this.pf;a=e.formatValue(a,b.percents,d,h,"percents\\.");a=e.formatValue(a,b.values,d,g,"",this.usePrefixes,this.prefixesOfSmallNumbers,this.prefixesOfBigNumbers);a=e.formatValue(a,b.values,["percents"],h);-1!=a.indexOf("[[")&&(a=e.formatDataContextValue(a,b.dataContext));-1!=a.indexOf("[[")&&b.graph.customData&&(a=e.formatDataContextValue(a,b.graph.customData));a=e.AmSerialChart.base.formatString.call(this,a,b,c)}return a}},updateChartCursor:function(){e.AmSerialChart.base.updateChartCursor.call(this);var a=this.chartCursor,b=this.categoryAxis;if(a){var c=a.categoryBalloonAlpha,d=a.categoryBalloonColor,g=a.color;void 0===d&&(d=a.cursorColor);var h=a.valueZoomable,f=a.zoomable,k=a.valueLineEnabled;this.rotate?(a.vLineEnabled=k,a.hZoomEnabled=h,a.vZoomEnabled=f):(a.hLineEnabled=k,a.vZoomEnabled=h,a.hZoomEnabled=f);if(a.valueLineBalloonEnabled)for(k=0;k<this.valueAxes.length;k++)h=this.valueAxes[k],(f=h.balloon)||(f={}),f=e.extend(f,this.balloon,!0),f.fillColor=d,f.balloonColor=d,f.fillAlpha=c,f.borderColor=d,f.color=g,h.balloon=f;else for(f=0;f<this.valueAxes.length;f++)h=this.valueAxes[f],h.balloon&&(h.balloon=null);b&&(b.balloonTextFunction=a.categoryBalloonFunction,a.categoryLineAxis=b,b.balloonText=a.categoryBalloonText,a.categoryBalloonEnabled&&((f=b.balloon)||(f={}),f=e.extend(f,this.balloon,!0),f.fillColor=d,f.balloonColor=d,f.fillAlpha=c,f.borderColor=d,f.color=g,b.balloon=f),b.balloon&&(b.balloon.enabled=a.categoryBalloonEnabled))}},addChartScrollbar:function(a){e.callMethod("destroy",[this.chartScrollbar]);a&&(a.chart=this,this.listenTo(a,"zoomed",this.handleScrollbarZoom));this.rotate?void 0===a.width&&(a.width=a.scrollbarHeight):void 0===a.height&&(a.height=a.scrollbarHeight);a.gridAxis=this.categoryAxis;this.chartScrollbar=a},addValueScrollbar:function(a){e.callMethod("destroy",[this.valueScrollbar]);a&&(a.chart=this,this.listenTo(a,"zoomed",this.handleScrollbarValueZoom),this.listenTo(a,"zoomStarted",this.handleCursorZoomStarted));var b=a.scrollbarHeight;this.rotate?void 0===a.height&&(a.height=b):void 0===a.width&&(a.width=b);a.gridAxis||(a.gridAxis=this.valueAxes[0]);a.valueAxes=this.valueAxes;this.valueScrollbar=a},removeChartScrollbar:function(){e.callMethod("destroy",[this.chartScrollbar]);this.chartScrollbar=null},removeValueScrollbar:function(){e.callMethod("destroy",[this.valueScrollbar]);this.valueScrollbar=null},handleReleaseOutside:function(a){e.AmSerialChart.base.handleReleaseOutside.call(this,a);e.callMethod("handleReleaseOutside",[this.chartScrollbar,this.valueScrollbar])},update:function(){e.AmSerialChart.base.update.call(this);this.chartScrollbar&&this.chartScrollbar.update&&this.chartScrollbar.update();this.valueScrollbar&&this.valueScrollbar.update&&this.valueScrollbar.update()},processScrollbars:function(){e.AmSerialChart.base.processScrollbars.call(this);var a=this.valueScrollbar;a&&(a=e.processObject(a,e.ChartScrollbar,this.theme),a.id="valueScrollbar",this.addValueScrollbar(a))},handleValueAxisZoom:function(a){this.handleValueAxisZoomReal(a,this.valueAxes)},zoomOut:function(){e.AmSerialChart.base.zoomOut.call(this);this.zoom();this.syncGrid()},getNextItem:function(a){var b=a.index,c=this.chartData,d=a.graph;if(b+1<c.length)for(b+=1;b<c.length;b++)if(a=c[b])if(a=a.axes[d.valueAxis.id].graphs[d.id],!isNaN(a.y))return a},handleCursorZoomReal:function(a,b,c,d,e){var h=e.target,f,k;this.rotate?(isNaN(a)||isNaN(b)||this.relativeZoomValueAxes(this.valueAxes,a,b)&&this.updateAfterValueZoom(),h.vZoomEnabled&&(f=e.start,k=e.end)):(isNaN(c)||isNaN(d)||this.relativeZoomValueAxes(this.valueAxes,c,d)&&this.updateAfterValueZoom(),h.hZoomEnabled&&(f=e.start,k=e.end));isNaN(f)||isNaN(k)||(a=this.categoryAxis,a.parseDates&&!a.equalSpacing?this.zoomToDates(new Date(f),new Date(k)):this.zoomToIndexes(f,k))},handleCursorZoomStarted:function(){var a=this.valueAxes;if(a){var a=a[0],b=a.relativeStart,c=a.relativeEnd;a.reversed&&(b=1-a.relativeEnd,c=1-a.relativeStart);this.rotate?(this.startX0=b,this.endX0=c):(this.startY0=b,this.endY0=c)}this.categoryAxis&&(this.start0=this.start,this.end0=this.end,this.startTime0=this.startTime,this.endTime0=this.endTime)},fixCursor:function(){this.chartCursor&&this.chartCursor.fixPosition();this.prevCursorItem=null},handleCursorMove:function(a){e.AmSerialChart.base.handleCursorMove.call(this,a);var b=a.target,c=this.categoryAxis;if(a.panning)this.handleCursorHide(a);else if(this.chartData&&!b.isHidden){var d=this.graphs;if(d){var g;g=c.xToIndex(this.rotate?a.y:a.x);if(g=this.chartData[g]){var h,f,k,l;if(b.oneBalloonOnly&&b.valueBalloonsEnabled){var m=Infinity;for(h=d.length-1;0<=h;h--)if(f=d[h],f.balloon.enabled&&f.showBalloon&&!f.hidden){k=f.valueAxis.id;k=g.axes[k].graphs[f.id];if(b.showNextAvailable&&isNaN(k.y)&&(k=this.getNextItem(k),!k))continue;k=k.y;"top"==f.showBalloonAt&&(k=0);"bottom"==f.showBalloonAt&&(k=this.height);var p=b.mouseX,n=b.mouseY;k=this.rotate?Math.abs(p-k):Math.abs(n-k);k<m&&(m=k,l=f)}b.mostCloseGraph=l}if(this.prevCursorItem!=g||l!=this.prevMostCloseGraph){m=[];for(h=0;h<d.length;h++){f=d[h];k=f.valueAxis.id;k=g.axes[k].graphs[f.id];if(b.showNextAvailable&&isNaN(k.y)&&(k=this.getNextItem(k),!k&&f.balloon)){f.balloon.hide();continue}l&&f!=l?(f.showGraphBalloon(k,b.pointer,!1,b.graphBulletSize,b.graphBulletAlpha),f.balloon.hide(0)):b.valueBalloonsEnabled?(f.balloon.showBullet=b.bulletsEnabled,f.balloon.bulletSize=b.bulletSize/2,a.hideBalloons||(f.showGraphBalloon(k,b.pointer,!1,b.graphBulletSize,b.graphBulletAlpha),f.balloon.set&&m.push({balloon:f.balloon,y:f.balloon.pointToY}))):(f.currentDataItem=k,f.resizeBullet(k,b.graphBulletSize,b.graphBulletAlpha))}b.avoidBalloonOverlapping&&this.arrangeBalloons(m);this.prevCursorItem=g}this.prevMostCloseGraph=l}}c.showBalloon(a.x,a.y,b.categoryBalloonDateFormat,a.skip);this.updateLegendValues()}},handleCursorHide:function(a){e.AmSerialChart.base.handleCursorHide.call(this,a);a=this.categoryAxis;this.prevCursorItem=null;this.updateLegendValues();a&&a.hideBalloon();a=this.graphs;var b;for(b=0;b<a.length;b++)a[b].currentDataItem=null},handleCursorPanning:function(a){var b=a.target,c,d=a.deltaX,g=a.deltaY,h=a.delta2X,f=a.delta2Y;a=!1;if(this.rotate){isNaN(h)&&(h=d,a=!0);var k=this.endX0;c=this.startX0;var l=k-c,k=k-l*h,m=l;a||(m=0);a=e.fitToBounds(c-l*d,0,1-m)}else isNaN(f)&&(f=g,a=!0),k=this.endY0,c=this.startY0,l=k-c,k+=l*g,m=l,a||(m=0),a=e.fitToBounds(c+l*f,0,1-m);c=e.fitToBounds(k,m,1);var p;b.valueZoomable&&(p=this.relativeZoomValueAxes(this.valueAxes,a,c));var n;c=this.categoryAxis;this.rotate&&(d=g,h=f);a=!1;isNaN(h)&&(h=d,a=!0);if(b.zoomable&&(0<Math.abs(d)||0<Math.abs(h)))if(c.parseDates&&!c.equalSpacing){if(f=this.startTime0,g=this.endTime0,c=g-f,h*=c,l=this.firstTime,k=this.lastTime,m=c,a||(m=0),a=Math.round(e.fitToBounds(f-c*d,l,k-m)),h=Math.round(e.fitToBounds(g-h,l+m,k)),this.startTime!=a||this.endTime!=h)n={chart:this,target:b,type:"zoomed",start:a,end:h},this.skipZoomed=!0,b.fire(n),this.zoom(a,h),n=!0}else if(f=this.start0,g=this.end0,c=g-f,d=Math.round(c*d),h=Math.round(c*h),l=this.chartData.length-1,a||(c=0),a=e.fitToBounds(f-d,0,l-c),c=e.fitToBounds(g-h,c,l),this.start!=a||this.end!=c)this.skipZoomed=!0,b.fire({chart:this,target:b,type:"zoomed",start:a,end:c}),this.zoom(a,c),n=!0;!n&&p&&this.updateAfterValueZoom()},arrangeBalloons:function(a){var b=this.plotAreaHeight;a.sort(this.compareY);var c,d,e,h=this.plotAreaWidth,f=a.length;for(c=0;c<f;c++)d=a[c].balloon,d.setBounds(0,0,h,b),d.restorePrevious(),d.draw(),b=d.yPos-3;a.reverse();for(c=0;c<f;c++){d=a[c].balloon;var b=d.bottom,k=d.bottom-d.yPos;0<c&&b-k<e+3&&d.setBounds&&(d.setBounds(0,e+3,h,e+k+3),d.restorePrevious(),d.draw());d.set&&d.set.show();e=d.bottom}},compareY:function(a,b){return a.y<b.y?1:-1}})})();(function(){var e=window.AmCharts;e.Cuboid=e.Class({construct:function(a,b,c,d,e,h,f,k,l,m,p,n,u,v,x,E,t){this.set=a.set();this.container=a;this.h=Math.round(c);this.w=Math.round(b);this.dx=d;this.dy=e;this.colors=h;this.alpha=f;this.bwidth=k;this.bcolor=l;this.balpha=m;this.dashLength=v;this.topRadius=E;this.pattern=x;this.rotate=u;this.bcn=t;u?0>b&&0===p&&(p=180):0>c&&270==p&&(p=90);this.gradientRotation=p;0===d&&0===e&&(this.cornerRadius=n);this.draw()},draw:function(){var a=this.set;a.clear();var b=this.container,c=b.chart,d=this.w,g=this.h,h=this.dx,f=this.dy,k=this.colors,l=this.alpha,m=this.bwidth,p=this.bcolor,n=this.balpha,u=this.gradientRotation,v=this.cornerRadius,x=this.dashLength,E=this.pattern,t=this.topRadius,r=this.bcn,B=k,q=k;"object"==typeof k&&(B=k[0],q=k[k.length-1]);var w,y,C,F,D,A,z,L,M,Q=l;E&&(l=0);var G,H,I,J,K=this.rotate;if(0<Math.abs(h)||0<Math.abs(f))if(isNaN(t))z=q,q=e.adjustLuminosity(B,-.2),q=e.adjustLuminosity(B,-.2),w=e.polygon(b,[0,h,d+h,d,0],[0,f,f,0,0],q,l,1,p,0,u),0<n&&(M=e.line(b,[0,h,d+h],[0,f,f],p,n,m,x)),y=e.polygon(b,[0,0,d,d,0],[0,g,g,0,0],q,l,1,p,0,u),y.translate(h,f),0<n&&(C=e.line(b,[h,h],[f,f+g],p,n,m,x)),F=e.polygon(b,[0,0,h,h,0],[0,g,g+f,f,0],q,l,1,p,0,u),D=e.polygon(b,[d,d,d+h,d+h,d],[0,g,g+f,f,0],q,l,1,p,0,u),0<n&&(A=e.line(b,[d,d+h,d+h,d],[0,f,g+f,g],p,n,m,x)),q=e.adjustLuminosity(z,.2),z=e.polygon(b,[0,h,d+h,d,0],[g,g+f,g+f,g,g],q,l,1,p,0,u),0<n&&(L=e.line(b,[0,h,d+h],[g,g+f,g+f],p,n,m,x));else{var N,O,P;K?(N=g/2,q=h/2,P=g/2,O=d+h/2,H=Math.abs(g/2),G=Math.abs(h/2)):(q=d/2,N=f/2,O=d/2,P=g+f/2+1,G=Math.abs(d/2),H=Math.abs(f/2));I=G*t;J=H*t;.1<G&&.1<G&&(w=e.circle(b,G,B,l,m,p,n,!1,H),w.translate(q,N));.1<I&&.1<I&&(z=e.circle(b,I,e.adjustLuminosity(B,.5),l,m,p,n,!1,J),z.translate(O,P))}l=Q;1>Math.abs(g)&&(g=0);1>Math.abs(d)&&(d=0);!isNaN(t)&&(0<Math.abs(h)||0<Math.abs(f))?(k=[B],k={fill:k,stroke:p,"stroke-width":m,"stroke-opacity":n,"fill-opacity":l},K?(l="M0,0 L"+d+","+(g/2-g/2*t),m=" B",0<d&&(m=" A"),e.VML?(l+=m+Math.round(d-
I)+","+Math.round(g/2-J)+","+Math.round(d+I)+","+Math.round(g/2+J)+","+d+",0,"+d+","+g,l=l+(" L0,"+g)+(m+Math.round(-G)+","+Math.round(g/2-H)+","+Math.round(G)+","+Math.round(g/2+H)+",0,"+g+",0,0")):(l+="A"+I+","+J+",0,0,0,"+d+","+(g-g/2*(1-t))+"L0,"+g,l+="A"+G+","+H+",0,0,1,0,0"),G=90):(m=d/2-d/2*t,l="M0,0 L"+m+","+g,e.VML?(l="M0,0 L"+m+","+g,m=" B",0>g&&(m=" A"),l+=m+Math.round(d/2-I)+","+Math.round(g-J)+","+Math.round(d/2+I)+","+Math.round(g+J)+",0,"+g+","+d+","+g,l+=" L"+d+",0",l+=m+Math.round(d/
2+G)+","+Math.round(H)+","+Math.round(d/2-G)+","+Math.round(-H)+","+d+",0,0,0"):(l+="A"+I+","+J+",0,0,0,"+(d-d/2*(1-t))+","+g+"L"+d+",0",l+="A"+G+","+H+",0,0,1,0,0"),G=180),b=b.path(l).attr(k),b.gradient("linearGradient",[B,e.adjustLuminosity(B,-.3),e.adjustLuminosity(B,-.3),B],G),K?b.translate(h/2,0):b.translate(0,f/2)):b=0===g?e.line(b,[0,d],[0,0],p,n,m,x):0===d?e.line(b,[0,0],[0,g],p,n,m,x):0<v?e.rect(b,d,g,k,l,m,p,n,v,u,x):e.polygon(b,[0,0,d,d,0],[0,g,g,0,0],k,l,m,p,n,u,!1,x);d=isNaN(t)?0>g?[w,M,y,C,F,D,A,z,L,b]:[z,L,y,C,F,D,w,M,A,b]:K?0<d?[w,b,z]:[z,b,w]:0>g?[w,b,z]:[z,b,w];e.setCN(c,b,r+"front");e.setCN(c,y,r+"back");e.setCN(c,z,r+"top");e.setCN(c,w,r+"bottom");e.setCN(c,F,r+"left");e.setCN(c,D,r+"right");for(w=0;w<d.length;w++)if(y=d[w])a.push(y),e.setCN(c,y,r+"element");E&&b.pattern(E,NaN,c.path)},width:function(a){isNaN(a)&&(a=0);this.w=Math.round(a);this.draw()},height:function(a){isNaN(a)&&(a=0);this.h=Math.round(a);this.draw()},animateHeight:function(a,b){var c=this;c.animationFinished=!1;c.easing=b;c.totalFrames=a*e.updateRate;c.rh=c.h;c.frame=0;c.height(1);setTimeout(function(){c.updateHeight.call(c)},1E3/e.updateRate)},updateHeight:function(){var a=this;a.frame++;var b=a.totalFrames;a.frame<=b?(b=a.easing(0,a.frame,1,a.rh-1,b),a.height(b),window.requestAnimationFrame?window.requestAnimationFrame(function(){a.updateHeight.call(a)}):setTimeout(function(){a.updateHeight.call(a)},1E3/e.updateRate)):(a.height(a.rh),a.animationFinished=!0)},animateWidth:function(a,b){var c=this;c.animationFinished=!1;c.easing=b;c.totalFrames=a*e.updateRate;c.rw=c.w;c.frame=0;c.width(1);setTimeout(function(){c.updateWidth.call(c)},1E3/e.updateRate)},updateWidth:function(){var a=this;a.frame++;var b=a.totalFrames;a.frame<=b?(b=a.easing(0,a.frame,1,a.rw-1,b),a.width(b),window.requestAnimationFrame?window.requestAnimationFrame(function(){a.updateWidth.call(a)}):setTimeout(function(){a.updateWidth.call(a)},1E3/e.updateRate)):(a.width(a.rw),a.animationFinished=!0)}})})();(function(){var e=window.AmCharts;e.CategoryAxis=e.Class({inherits:e.AxisBase,construct:function(a){this.cname="CategoryAxis";e.CategoryAxis.base.construct.call(this,a);this.minPeriod="DD";this.equalSpacing=this.parseDates=!1;this.position="bottom";this.startOnAxis=!1;this.gridPosition="middle";this.safeDistance=30;this.stickBalloonToCategory=!1;e.applyTheme(this,a,this.cname)},draw:function(){e.CategoryAxis.base.draw.call(this);this.generateDFObject();var a=this.chart.chartData;this.data=a;this.labelRotationR=this.labelRotation;this.type=null;if(e.ifArray(a)){var b,c=this.chart;"scrollbar"!=this.id?(e.setCN(c,this.set,"category-axis"),e.setCN(c,this.labelsSet,"category-axis"),e.setCN(c,this.axisLine.axisSet,"category-axis")):this.bcn=this.id+"-";var d=this.start,g=this.labelFrequency,h=0,f=this.end-d+1,k=this.gridCountR,l=this.showFirstLabel,m=this.showLastLabel,p,n="",n=e.extractPeriod(this.minPeriod),u=e.getPeriodDuration(n.period,n.count),v,x,E,t,r,B=this.rotate,q=this.firstDayOfWeek,w=this.boldPeriodBeginning;b=e.resetDateToMin(new Date(a[a.length-1].time+1.05*u),this.minPeriod,1,q).getTime();this.firstTime=c.firstTime;this.endTime>b&&(this.endTime=b);r=this.minorGridEnabled;x=this.gridAlpha;var y=0,C=0;if(this.widthField)for(b=this.start;b<=this.end;b++)if(t=this.data[b]){var F=Number(this.data[b].dataContext[this.widthField]);isNaN(F)||(y+=F,t.widthValue=F)}if(this.parseDates&&!this.equalSpacing)this.lastTime=a[a.length-1].time,this.maxTime=e.resetDateToMin(new Date(this.lastTime+1.05*u),this.minPeriod,1,q).getTime(),this.timeDifference=this.endTime-this.startTime,this.parseDatesDraw();else if(!this.parseDates){if(this.cellWidth=this.getStepWidth(f),f<k&&(k=f),h+=this.start,this.stepWidth=this.getStepWidth(f),0<k)for(q=Math.floor(f/k),t=this.chooseMinorFrequency(q),f=h,f/2==Math.round(f/2)&&f--,0>f&&(f=0),w=0,this.widthField&&(f=this.start,q=1),this.end-f+1>=this.autoRotateCount&&(this.labelRotationR=this.autoRotateAngle),b=f;b<=this.end+2;b++){k=!1;0<=b&&b<this.data.length?(v=this.data[b],n=v.category,k=v.forceShow):n="";if(r&&!isNaN(t))if(b/t==Math.round(b/t)||k)b/q==Math.round(b/q)||k||(this.gridAlpha=this.minorGridAlpha,n=void 0);else continue;else if(b/q!=Math.round(b/q)&&!k)continue;f=this.getCoordinate(b-h);k=0;"start"==this.gridPosition&&(f-=this.cellWidth/2,k=this.cellWidth/2);p=!0;E=k;"start"==this.tickPosition&&(E=0,p=!1,k=0);if(b==d&&!l||b==this.end&&!m)n=void 0;Math.round(w/g)!=w/g&&(n=void 0);w++;a=this.cellWidth;B&&(a=NaN,this.ignoreAxisWidth||!c.autoMargins)&&(a="right"==this.position?c.marginRight-this.titleWidth:c.marginLeft-this.titleWidth,a-=this.tickLength+10);this.labelFunction&&v&&(n=this.labelFunction(n,v,this));n=e.fixBrakes(n);u=!1;this.boldLabels&&(u=!0);b>this.end&&"start"==this.tickPosition&&(n=" ");this.rotate&&this.inside&&(k-=2);isNaN(v.widthValue)||(v.percentWidthValue=v.widthValue/y*100,a=this.rotate?this.height*v.widthValue/y:this.width*v.widthValue/y,f=C,C+=a,E=k=a/2);p=new this.axisItemRenderer(this,f,n,p,a,k,void 0,u,E,!1,v.labelColor,v.className);p.serialDataItem=v;this.pushAxisItem(p);this.gridAlpha=x}}else if(this.parseDates&&this.equalSpacing){h=this.start;this.startTime=this.data[this.start].time;this.endTime=this.data[this.end].time;this.timeDifference=this.endTime-this.startTime;b=this.choosePeriod(0);g=b.period;v=b.count;b=e.getPeriodDuration(g,v);b<u&&(g=n.period,v=n.count,b=u);x=g;"WW"==x&&(x="DD");this.currentDateFormat=this.dateFormatsObject[x];this.stepWidth=this.getStepWidth(f);k=Math.ceil(this.timeDifference/b)+1;n=e.resetDateToMin(new Date(this.startTime-
b),g,v,q).getTime();this.cellWidth=this.getStepWidth(f);f=Math.round(n/b);d=-1;f/2==Math.round(f/2)&&(d=-2,n-=b);f=this.start;f/2==Math.round(f/2)&&f--;0>f&&(f=0);C=this.end+2;C>=this.data.length&&(C=this.data.length);a=!1;a=!l;this.previousPos=-1E3;20<this.labelRotationR&&(this.safeDistance=5);F=f;if(this.data[f].time!=e.resetDateToMin(new Date(this.data[f].time),g,v,q).getTime()){var u=0,D=n;for(b=f;b<C;b++)t=this.data[b].time,this.checkPeriodChange(g,v,t,D)&&(u++,2<=u&&(F=b,b=C),D=t)}r&&1<v&&(t=this.chooseMinorFrequency(v),e.getPeriodDuration(g,t));if(0<this.gridCountR)for(b=f;b<C;b++)if(t=this.data[b].time,this.checkPeriodChange(g,v,t,n)&&b>=F){f=this.getCoordinate(b-this.start);r=!1;this.nextPeriod[x]&&(r=this.checkPeriodChange(this.nextPeriod[x],1,t,n,x))&&e.resetDateToMin(new Date(t),this.nextPeriod[x],1,q).getTime()!=t&&(r=!1);u=!1;r&&this.markPeriodChange?(r=this.dateFormatsObject[this.nextPeriod[x]],u=!0):r=this.dateFormatsObject[x];n=e.formatDate(new Date(t),r,c);if(b==d&&!l||b==k&&!m)n=" ";a?a=!1:(w||(u=!1),f-this.previousPos>this.safeDistance*Math.cos(this.labelRotationR*Math.PI/180)&&(this.labelFunction&&(n=this.labelFunction(n,new Date(t),this,g,v,E)),this.boldLabels&&(u=!0),p=new this.axisItemRenderer(this,f,n,void 0,void 0,void 0,void 0,u),r=p.graphics(),this.pushAxisItem(p),r=r.getBBox().width,e.isModern||(r-=f),this.previousPos=f+r));E=n=t}}for(b=l=0;b<this.data.length;b++)if(t=this.data[b])this.parseDates&&!this.equalSpacing?(m=t.time,d=this.cellWidth,"MM"==this.minPeriod&&(d=864E5*e.daysInMonth(new Date(m))*this.stepWidth,t.cellWidth=d),m=Math.round((m-this.startTime)*this.stepWidth+d/2)):m=this.getCoordinate(b-h),t.x[this.id]=m;if(this.widthField)for(b=this.start;b<=this.end;b++)t=this.data[b],d=t.widthValue,t.percentWidthValue=d/y*100,this.rotate?(m=this.height*d/y/2+l,l=this.height*d/y+l):(m=this.width*d/y/2+l,l=this.width*d/y+l),t.x[this.id]=m;y=this.guides.length;for(b=0;b<y;b++)if(l=this.guides[b],q=q=q=r=d=NaN,m=l.above,l.toCategory&&(q=c.getCategoryIndexByValue(l.toCategory),isNaN(q)||(d=this.getCoordinate(q-h),l.expand&&(d+=this.cellWidth/2),p=new this.axisItemRenderer(this,d,"",!0,NaN,NaN,l),this.pushAxisItem(p,m))),l.category&&(q=c.getCategoryIndexByValue(l.category),isNaN(q)||(r=this.getCoordinate(q-h),l.expand&&(r-=this.cellWidth/2),q=(d-r)/2,p=new this.axisItemRenderer(this,r,l.label,!0,NaN,q,l),this.pushAxisItem(p,m))),w=c.dataDateFormat,l.toDate&&(!w||l.toDate instanceof Date||(l.toDate=l.toDate.toString()+" |"),l.toDate=e.getDate(l.toDate,w),this.equalSpacing?
(q=c.getClosestIndex(this.data,"time",l.toDate.getTime(),!1,0,this.data.length-1),isNaN(q)||(d=this.getCoordinate(q-h))):d=(l.toDate.getTime()-this.startTime)*this.stepWidth,p=new this.axisItemRenderer(this,d,"",!0,NaN,NaN,l),this.pushAxisItem(p,m)),l.date&&(!w||l.date instanceof Date||(l.date=l.date.toString()+" |"),l.date=e.getDate(l.date,w),this.equalSpacing?(q=c.getClosestIndex(this.data,"time",l.date.getTime(),!1,0,this.data.length-1),isNaN(q)||(r=this.getCoordinate(q-h))):r=(l.date.getTime()-
this.startTime)*this.stepWidth,q=(d-r)/2,p=!0,l.toDate&&(p=!1),p="H"==this.orientation?new this.axisItemRenderer(this,r,l.label,p,2*q,NaN,l):new this.axisItemRenderer(this,r,l.label,!1,NaN,q,l),this.pushAxisItem(p,m)),p&&(q=p.label)&&this.addEventListeners(q,l),0<d||0<r){q=!1;if(this.rotate){if(d<this.height||r<this.height)q=!0}else if(d<this.width||r<this.width)q=!0;q&&(d=new this.guideFillRenderer(this,r,d,l),r=d.graphics(),this.pushAxisItem(d,m),l.graphics=r,r.index=b,this.addEventListeners(r,
l))}if(c=c.chartCursor)B?c.fixHeight(this.cellWidth):(c.fixWidth(this.cellWidth),c.fullWidth&&this.balloon&&(this.balloon.minWidth=this.cellWidth));this.previousHeight=A}this.axisCreated=!0;this.set.translate(this.x,this.y);this.labelsSet.translate(this.x,this.y);this.labelsSet.show();this.positionTitle();(B=this.axisLine.set)&&B.toFront();var A=this.getBBox().height;2<A-this.previousHeight&&this.autoWrap&&!this.parseDates&&(this.axisCreated=this.chart.marginsUpdated=!1)},xToIndex:function(a){var b=this.data,c=this.chart,d=c.rotate,g=this.stepWidth,h;if(this.parseDates&&!this.equalSpacing)a=this.startTime+Math.round(a/g)-this.minDuration()/2,h=c.getClosestIndex(b,"time",a,!1,this.start,this.end+1);else if(this.widthField)for(c=Infinity,g=this.start;g<=this.end;g++){var f=this.data[g];f&&(f=Math.abs(f.x[this.id]-a),f<c&&(c=f,h=g))}else this.startOnAxis||(a-=g/2),h=this.start+Math.round(a/g);h=e.fitToBounds(h,0,b.length-1);var k;b[h]&&(k=b[h].x[this.id]);d?k>this.height+1&&h--:k>this.width+1&&
h--;0>k&&h++;return h=e.fitToBounds(h,0,b.length-1)},dateToCoordinate:function(a){return this.parseDates&&!this.equalSpacing?(a.getTime()-this.startTime)*this.stepWidth:this.parseDates&&this.equalSpacing?(a=this.chart.getClosestIndex(this.data,"time",a.getTime(),!1,0,this.data.length-1),this.getCoordinate(a-this.start)):NaN},categoryToCoordinate:function(a){if(this.chart){if(this.parseDates)return this.dateToCoordinate(new Date(a));a=this.chart.getCategoryIndexByValue(a);if(!isNaN(a))return this.getCoordinate(a-
this.start)}else return NaN},coordinateToDate:function(a){return this.equalSpacing?(a=this.xToIndex(a),new Date(this.data[a].time)):new Date(this.startTime+a/this.stepWidth)},coordinateToValue:function(a){a=this.xToIndex(a);if(a=this.data[a])return this.parseDates?a.time:a.category},getCoordinate:function(a){a*=this.stepWidth;this.startOnAxis||(a+=this.stepWidth/2);return Math.round(a)},formatValue:function(a,b){b||(b=this.currentDateFormat);this.parseDates&&(a=e.formatDate(new Date(a),b,this.chart));return a},showBalloonAt:function(a,b){void 0===b&&(b=this.parseDates?this.dateToCoordinate(new Date(a)):this.categoryToCoordinate(a));return this.adjustBalloonCoordinate(b)},formatBalloonText:function(a,b,c){var d="",g="",h=this.chart,f=this.data[b];if(f)if(this.parseDates)d=e.formatDate(f.category,c,h),b=e.changeDate(new Date(f.category),this.minPeriod,1),g=e.formatDate(b,c,h),-1!=d.indexOf("fff")&&(d=e.formatMilliseconds(d,f.category),g=e.formatMilliseconds(g,b));else{var k;this.data[b+1]&&(k=this.data[b+
1]);d=e.fixNewLines(f.category);k&&(g=e.fixNewLines(k.category))}a=a.replace(/\[\[category\]\]/g,String(d));return a=a.replace(/\[\[toCategory\]\]/g,String(g))},adjustBalloonCoordinate:function(a,b){var c=this.xToIndex(a),d=this.chart.chartCursor;if(this.stickBalloonToCategory){var e=this.data[c];e&&(a=e.x[this.id]);this.stickBalloonToStart&&(a-=this.cellWidth/2);var h=0;if(d){var f=d.limitToGraph;if(f){var k=f.valueAxis.id;f.hidden||(h=e.axes[k].graphs[f.id].y)}this.rotate?("left"==this.position?(f&&(h-=d.width),0<h&&(h=0)):0>h&&(h=0),d.fixHLine(a,h)):("top"==this.position?(f&&(h-=d.height),0<h&&(h=0)):0>h&&(h=0),d.fullWidth&&(a+=1),d.fixVLine(a,h))}}d&&!b&&(d.setIndex(c),this.parseDates&&d.setTimestamp(this.coordinateToDate(a).getTime()));return a}})})();

/***/ }),

/***/ "./src/assets/charts/amchart/worldLow.js":
/*!***********************************************!*\
  !*** ./src/assets/charts/amchart/worldLow.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/assets/icon/svg-animated/svg-weather.css":
/*!******************************************************!*\
  !*** ./src/assets/icon/svg-animated/svg-weather.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/***/ })

}]);
//# sourceMappingURL=pages-dashboard-dashboard-default-dashboard-default-module.js.map