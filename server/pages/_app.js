(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 990:
/***/ ((module) => {

// Exports
module.exports = {
	"experienceitem": "Experience_experienceitem__QzsQr",
	"experienceheader": "Experience_experienceheader__MJ6FZ",
	"experiencedate": "Experience_experiencedate__Xk2am",
	"experiencetitle": "Experience_experiencetitle__LtvQS"
};


/***/ }),

/***/ 358:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Person_wrapper__bH6pP",
	"content": "Person_content__2_Dsr",
	"box": "Person_box__Z_Vhr",
	"head": "Person_head__gZ6fB",
	"sidebar": "Person_sidebar__5yvXR",
	"personalimage": "Person_personalimage__PpN1v",
	"personaldetailitem": "Person_personaldetailitem__hd3Qj",
	"experience": "Person_experience__CQOzB",
	"foot": "Person_foot__D9UC5"
};


/***/ }),

/***/ 965:
/***/ ((module) => {

// Exports
module.exports = {
	"bi-colored-rich-title__text": "RichTextToHTML_bi-colored-rich-title__text__IIdYW",
	"bi-colored-rich-title__highlighted-text--blue": "RichTextToHTML_bi-colored-rich-title__highlighted-text--blue__A78n4",
	"bi-colored-rich-title__highlighted-text--purple": "RichTextToHTML_bi-colored-rich-title__highlighted-text--purple__qG42S",
	"bi-colored-rich-title__highlighted-text--yellow": "RichTextToHTML_bi-colored-rich-title__highlighted-text--yellow__Q0SiU",
	"bi-colored-rich-title__highlighted-text--red": "RichTextToHTML_bi-colored-rich-title__highlighted-text--red__v1nhR",
	"bi-colored-rich-title__highlighted-text--green": "RichTextToHTML_bi-colored-rich-title__highlighted-text--green__M8Tvz",
	"rich-text__highlighted-text": "RichTextToHTML_rich-text__highlighted-text__Eov4R",
	"rich-text__link": "RichTextToHTML_rich-text__link__BSATs",
	"rich-text__text": "RichTextToHTML_rich-text__text__5MdDN",
	"rich-text__title": "RichTextToHTML_rich-text__title__CNXo6",
	"rich-text__subtitle": "RichTextToHTML_rich-text__subtitle__ORttt",
	"rich-text__small-title": "RichTextToHTML_rich-text__small-title__8xTJN",
	"rich-text__ordered-list": "RichTextToHTML_rich-text__ordered-list__3g1UF",
	"rich-text__unordered-list": "RichTextToHTML_rich-text__unordered-list__6BsBI",
	"rich-text__image": "RichTextToHTML_rich-text__image__c5bZd",
	"rich-text__image--small": "RichTextToHTML_rich-text__image--small__QTRxH",
	"rich-text__testimonial-card": "RichTextToHTML_rich-text__testimonial-card__9Brfu"
};


/***/ }),

/***/ 41:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Experience)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(193);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Experience_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(990);
/* harmony import */ var _Experience_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Experience_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _storyblok_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(843);
/* harmony import */ var _functions_storyBlokRichTextRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(212);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_storyblok_react__WEBPACK_IMPORTED_MODULE_2__]);
_storyblok_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





class Experience extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props){
        super(props);
    }
    render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ...(0,_storyblok_react__WEBPACK_IMPORTED_MODULE_2__.storyblokEditable)(this.props.blok),
                className: (_Experience_module_scss__WEBPACK_IMPORTED_MODULE_4___default().experienceitem),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Experience_module_scss__WEBPACK_IMPORTED_MODULE_4___default().experienceheader),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: (_Experience_module_scss__WEBPACK_IMPORTED_MODULE_4___default().experiencedate),
                                children: [
                                    this.props.blok.startdate,
                                    " - ",
                                    this.props.blok.enddate
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_Experience_module_scss__WEBPACK_IMPORTED_MODULE_4___default().experiencetitle),
                                children: this.props.blok.title
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Experience_module_scss__WEBPACK_IMPORTED_MODULE_4___default().experienceitemcontent),
                        children: (0,_functions_storyBlokRichTextRenderer__WEBPACK_IMPORTED_MODULE_3__/* .RichTextToHTML */ .Ti)({
                            document: this.props.blok.description
                        })
                    })
                ]
            })
        });
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 689:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Person)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(193);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Person_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(358);
/* harmony import */ var _Person_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Person_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _storyblok_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(843);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_storyblok_react__WEBPACK_IMPORTED_MODULE_2__]);
_storyblok_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




class Person extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props){
        super(props);
    }
    render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ...(0,_storyblok_react__WEBPACK_IMPORTED_MODULE_2__.storyblokEditable)(this.props.blok),
                className: (_Person_module_scss__WEBPACK_IMPORTED_MODULE_3___default().wrapper),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Person_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: [
                                (_Person_module_scss__WEBPACK_IMPORTED_MODULE_3___default().box),
                                (_Person_module_scss__WEBPACK_IMPORTED_MODULE_3___default().head)
                            ].join(" "),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                children: [
                                    "Resume ",
                                    this.props.blok.title,
                                    " ",
                                    this.props.blok.firstname,
                                    " ",
                                    this.props.blok.lastname
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: [
                                (_Person_module_scss__WEBPACK_IMPORTED_MODULE_3___default().box),
                                (_Person_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sidebar)
                            ].join(" "),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_Person_module_scss__WEBPACK_IMPORTED_MODULE_3___default().personalimage),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: this.props.blok.image.filename
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_Person_module_scss__WEBPACK_IMPORTED_MODULE_3___default().personaldetails),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_Person_module_scss__WEBPACK_IMPORTED_MODULE_3___default().personaldetailitem),
                                            children: [
                                                this.props.blok.title,
                                                " ",
                                                this.props.blok.firstname,
                                                " ",
                                                this.props.blok.lastname
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_Person_module_scss__WEBPACK_IMPORTED_MODULE_3___default().personaldetailitem),
                                            children: this.props.blok.dateofbirth
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_Person_module_scss__WEBPACK_IMPORTED_MODULE_3___default().personaldetailitem),
                                            children: this.props.blok.location
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: [
                                (_Person_module_scss__WEBPACK_IMPORTED_MODULE_3___default().box),
                                (_Person_module_scss__WEBPACK_IMPORTED_MODULE_3___default().experience)
                            ].join(" "),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "Experience"
                                }),
                                this.props.blok.experiences.map((nestedBlok)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_storyblok_react__WEBPACK_IMPORTED_MODULE_2__.StoryblokComponent, {
                                        blok: nestedBlok
                                    }, nestedBlok._uid)
                                )
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: [
                                (_Person_module_scss__WEBPACK_IMPORTED_MODULE_3___default().box),
                                (_Person_module_scss__WEBPACK_IMPORTED_MODULE_3___default().foot)
                            ].join(" "),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    "\xa9 ",
                                    this.props.blok.firstname,
                                    " ",
                                    this.props.blok.lastname,
                                    " ",
                                    new Date().getFullYear()
                                ]
                            })
                        })
                    ]
                })
            })
        });
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ti": () => (/* binding */ RichTextToHTML)
});

// UNUSED EXPORTS: BiColoredRichTitleToHTML, RichTextToString

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "storyblok-rich-text-react-renderer"
const external_storyblok_rich_text_react_renderer_namespaceObject = require("storyblok-rich-text-react-renderer");
// EXTERNAL MODULE: ./styles/RichTextToHTML.module.scss
var RichTextToHTML_module = __webpack_require__(965);
var RichTextToHTML_module_default = /*#__PURE__*/__webpack_require__.n(RichTextToHTML_module);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: ./functions/StoryBlokImageHelper.js

function modifyStoryBlokImage(url, { width , height , smart , fit , filters  }) {
    // https://www.storyblok.com/docs/image-service
    // https://a.storyblok.com/f/105007/427x640/216c62f59a/sorencolorsmall.jpg
    // https://img2.storyblok.com/fit-in/600x130/smart/f/105007/427x640/216c62f59a/sorencolorsmall.jpg
    const originalUrl = new URL(url);
    const originalPath = originalUrl.pathname;
    // ignore images that are not on storyblok & svgs
    if (originalUrl.hostname !== "a.storyblok.com") return originalUrl;
    if (originalPath.endsWith(".svg")) return originalUrl;
    let originalDimensions = GetOriginalDimensions(url);
    let resultUrl = "https://img2.storyblok.com";
    const widthSpecified = !!width;
    const heightSpecified = !!height;
    let newWidth = 0, newHeight = 0;
    const ratioSpecified = widthSpecified && heightSpecified ? width / height : undefined;
    if (!widthSpecified && !heightSpecified) {
        newWidth = originalDimensions.width;
        newHeight = originalDimensions.height;
    } else {
        if (widthSpecified && width > originalDimensions.width) {
            newWidth = originalDimensions.width;
            height = ratioSpecified ? Math.round(newWidth / ratioSpecified) : height;
        }
        if (widthSpecified && !(width > originalDimensions.width)) {
            newWidth = width;
        }
        if (heightSpecified && height > originalDimensions.height) {
            newHeight = originalDimensions.height;
            newWidth = ratioSpecified ? Math.round(newHeight * ratioSpecified) : newWidth;
        }
        if (heightSpecified && !(height > originalDimensions.height)) {
            newHeight = height;
        }
    }
    if (fit) {
        resultUrl += "/fit-in";
    }
    if (widthSpecified || heightSpecified) {
        resultUrl += `/${newWidth}x${newHeight}`;
    }
    if (smart) {
        resultUrl += "/smart";
    }
    if (filters) {
        resultUrl += `/filters:${filters}`;
    }
    resultUrl += originalPath;
    return resultUrl;
}
function GetOriginalDimensions(storyBlokUrl) {
    let storyBlokPath = new URL(storyBlokUrl).pathname;
    let dimensionPart = storyBlokPath.split("/")[3];
    let subParts = dimensionPart.split("x");
    return {
        width: Number(subParts[0]),
        height: Number(subParts[1])
    };
}
// imageSizes is an array of objects {width: int, height: int, smart: bool, fit: bool, filters: string}
// breakpoints is an array of int
// a width is needed!
function getResponsiveStoryBlokImageSet(url, alt, imageSizes, breakpoints, className) {
    let lastImageSize = imageSizes[imageSizes.length - 1];
    let src = modifyStoryBlokImage(url, {
        width: lastImageSize.width,
        height: lastImageSize.height,
        smart: lastImageSize.smart,
        fit: lastImageSize.fit,
        filters: lastImageSize.filters
    });
    let srcset = "";
    imageSizes.forEach((image, i)=>{
        if (i !== 0) {
            srcset += ", ";
        }
        srcset += modifyStoryBlokImage(url, {
            width: image.width,
            height: image.height,
            smart: image.smart,
            fit: image.fit,
            filters: image.filters
        }) + " " + image.width + "w";
    });
    let sizes = "";
    if (!breakpoints) {
        sizes = "(min-width: 850px) 50vw, 100vw";
    } else {
        sizes = imageSizes[0].width + "px" || 0;
    }
    breakpoints.forEach((bp, i)=>{
        sizes = "(min-width: " + (bp || 0) + "px) " + (imageSizes[i + 1].width + "px" || 0) + ", " + sizes;
    });
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("img", {
            className: [
                className,
                "lazyload"
            ].join(" "),
            sizes: sizes,
            "data-srcset": srcset,
            "data-src": src,
            src: modifyStoryBlokImage(url, {
                width: 32,
                height: 32
            }),
            alt: alt
        })
    });
}
function getDefaultStoryBlokImageSet(url, alt, { largestImageWidth , largestImageHeigth , smart , fit , filters  }, breakpoint, className) {
    let imageSizes = [
        {
            width: largestImageWidth * 0.5,
            height: largestImageHeigth * 0.5,
            smart: smart,
            fit: fit,
            filters: filters
        },
        {
            width: largestImageWidth,
            height: largestImageHeigth,
            smart: smart,
            fit: fit,
            filters: filters
        }
    ];
    let breakpoints = [
        breakpoint
    ];
    return getResponsiveStoryBlokImageSet(url, alt, imageSizes, breakpoints, className);
}

;// CONCATENATED MODULE: external "lazysizes"
const external_lazysizes_namespaceObject = require("lazysizes");
;// CONCATENATED MODULE: external "lazysizes/plugins/attrchange/ls.attrchange"
const ls_attrchange_namespaceObject = require("lazysizes/plugins/attrchange/ls.attrchange");
;// CONCATENATED MODULE: ./functions/storyBlokRichTextRenderer.js







function MarkBoldResolver(children, boldClassName) {
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: [
            (RichTextToHTML_module_default())["rich-text__highlighted-text"],
            boldClassName
        ].join(" "),
        children: children
    });
}
function MarkLinkResolver(children, { href , target , linktype  }, linkClassName) {
    if (linktype === "email") {
        return /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: [
                (RichTextToHTML_module_default())["rich-text__link"],
                linkClassName
            ].join(" "),
            href: `mailto:${href}`,
            children: children
        });
    }
    if (href.match(/^(https?:)?\/\//)) {
        return /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: [
                (RichTextToHTML_module_default())["rich-text__link"],
                linkClassName
            ].join(" "),
            href: href,
            target: target,
            children: children
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: href,
        className: [
            (RichTextToHTML_module_default())["rich-text__link"],
            linkClassName
        ].join(" "),
        children: children
    });
}
function NodeParagraphResolver(children, textClassName) {
    return /*#__PURE__*/ jsx_runtime_.jsx("p", {
        className: [
            (RichTextToHTML_module_default())["rich-text__text"],
            textClassName
        ].join(" "),
        children: children
    });
}
function NodeHeadingResolver(children, { level  }, h1className, h2className, h3className, h4className, h5className, h6className) {
    switch(level){
        case 1:
            return /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: [
                    (RichTextToHTML_module_default())["rich-text__title"],
                    h1className
                ].join(" "),
                children: children
            });
        case 2:
            return /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: [
                    (RichTextToHTML_module_default())["rich-text__title"],
                    h2className
                ].join(" "),
                children: children
            });
        case 3:
            return /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: [
                    (RichTextToHTML_module_default())["rich-text__subtitle"],
                    h3className
                ].join(" "),
                children: children
            });
        case 4:
            return /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: [
                    (RichTextToHTML_module_default())["rich-text__small-title"],
                    h4className
                ].join(" "),
                children: children
            });
        case 5:
            return /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                className: [
                    (RichTextToHTML_module_default())["rich-text__small-title"],
                    h5className
                ].join(" "),
                children: children
            });
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                className: [
                    (RichTextToHTML_module_default())["rich-text__small-title"],
                    h6className
                ].join(" "),
                children: children
            });
    }
}
function NodeOlResolver(children, olClassName) {
    return /*#__PURE__*/ jsx_runtime_.jsx("ol", {
        className: [
            (RichTextToHTML_module_default())["rich-text__ordered-list"],
            olClassName
        ].join(" "),
        children: children
    });
}
function NodeUlResolver(children, ulClassName) {
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: [
            (RichTextToHTML_module_default())["rich-text__unordered-list"],
            ulClassName
        ].join(" "),
        children: children
    });
}
function NodeLiResolver(children, liClassName) {
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: liClassName,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: children
        })
    });
}
function NodeImageResolver(children, { src , alt , title  }, imgClassName, imageSizeLimit) {
    if (imageSizeLimit) {
        let url = new URL(src);
        if (url.hostname === "a.storyblok.com") {
            const imgWidth = GetOriginalDimensions(src).width;
            return /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: [
                    (RichTextToHTML_module_default())["rich-text__image" + (imgWidth <= 60 ? "--small" : "")],
                    imgClassName,
                    "lazyload"
                ].join(" "),
                "data-src": modifyStoryBlokImage(src, imageSizeLimit),
                alt: alt,
                title: title
            });
        }
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("img", {
        className: [
            (RichTextToHTML_module_default())["rich-text__image"],
            imgClassName,
            "lazyload"
        ].join(" "),
        "data-src": src,
        alt: alt,
        title: title
    });
}
function BiColoredTitleMarkBoldResolver(children, colorScheme, boldClassName) {
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: [
            (RichTextToHTML_module_default())["bi-colored-rich-title__highlighted-text" + colorScheme],
            boldClassName
        ].join(" "),
        children: children
    });
}
function BiColoredTitleNodeParagraphResolver(children, textClassName) {
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: [
            (RichTextToHTML_module_default())["bi-colored-rich-title__text"],
            textClassName
        ].join(" "),
        children: children
    });
}
function RichTextToHTML({ document , containerClassName , boldClassName , textClassName , linkClassName , h1className , h2className , h3className , h4className , h5className , h6className , olClassName , ulClassName , liClassName , imgClassName , imageSizeLimit  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: [
            (RichTextToHTML_module_default())["rich-text"],
            containerClassName
        ].join(" "),
        children: (0,external_storyblok_rich_text_react_renderer_namespaceObject.render)(document, {
            markResolvers: {
                [external_storyblok_rich_text_react_renderer_namespaceObject.MARK_BOLD]: (children)=>MarkBoldResolver(children, boldClassName)
                ,
                [external_storyblok_rich_text_react_renderer_namespaceObject.MARK_LINK]: (children, { href , target , linktype  })=>MarkLinkResolver(children, {
                        href,
                        target,
                        linktype
                    }, linkClassName)
            },
            nodeResolvers: {
                [external_storyblok_rich_text_react_renderer_namespaceObject.NODE_PARAGRAPH]: (children)=>NodeParagraphResolver(children, textClassName)
                ,
                [external_storyblok_rich_text_react_renderer_namespaceObject.NODE_HEADING]: (children, { level  })=>NodeHeadingResolver(children, {
                        level
                    }, h1className, h2className, h3className, h4className, h5className, h6className)
                ,
                [external_storyblok_rich_text_react_renderer_namespaceObject.NODE_OL]: (children)=>NodeOlResolver(children, olClassName)
                ,
                [external_storyblok_rich_text_react_renderer_namespaceObject.NODE_UL]: (children)=>NodeUlResolver(children, ulClassName)
                ,
                [external_storyblok_rich_text_react_renderer_namespaceObject.NODE_LI]: (children)=>NodeLiResolver(children, liClassName)
                ,
                [external_storyblok_rich_text_react_renderer_namespaceObject.NODE_IMAGE]: (children, { src , alt , title  })=>NodeImageResolver(children, {
                        src,
                        alt,
                        title
                    }, imgClassName, imageSizeLimit)
            },
            defaultStringResolver: NodeParagraphResolver
        })
    });
}
RichTextToHTML.propTypes = {
    document: (external_prop_types_default()).object,
    containerClassName: (external_prop_types_default()).string,
    textClassName: (external_prop_types_default()).string,
    boldClassName: (external_prop_types_default()).string,
    linkClassName: (external_prop_types_default()).string,
    h1className: (external_prop_types_default()).string,
    h2className: (external_prop_types_default()).string,
    h3className: (external_prop_types_default()).string,
    h4className: (external_prop_types_default()).string,
    h5className: (external_prop_types_default()).string,
    h6className: (external_prop_types_default()).string,
    olClassName: (external_prop_types_default()).string,
    ulClassName: (external_prop_types_default()).string,
    liClassName: (external_prop_types_default()).string,
    imgClassName: (external_prop_types_default()).string,
    imageSizeLimit: (external_prop_types_default()).object
};
// Choose as colorScheme between: blue, purple, yellow, red and green
function BiColoredRichTitleToHTML({ document , colorScheme , boldClassName , textClassName  }) {
    colorScheme = "--" + (colorScheme || "blue");
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: (RichTextToHTML_module_default())["bi-colored-rich-title"],
        children: (0,external_storyblok_rich_text_react_renderer_namespaceObject.render)(document, {
            markResolvers: {
                [external_storyblok_rich_text_react_renderer_namespaceObject.MARK_BOLD]: (children)=>BiColoredTitleMarkBoldResolver(children, colorScheme, boldClassName)
            },
            nodeResolvers: {
                [external_storyblok_rich_text_react_renderer_namespaceObject.NODE_PARAGRAPH]: (children)=>BiColoredTitleNodeParagraphResolver(children, textClassName)
            },
            defaultStringResolver: BiColoredTitleNodeParagraphResolver
        })
    });
}
BiColoredRichTitleToHTML.propTypes = {
    document: (external_prop_types_default()).object,
    colorScheme: (external_prop_types_default()).string,
    textClassName: (external_prop_types_default()).string,
    boldClassName: (external_prop_types_default()).string
};
function RichTextToString(obj) {
    let res = "";
    if (typeof obj === "string") {
        return obj;
    }
    if (obj["text"]) {
        res += obj["text"];
    }
    if (obj["content"]) {
        for (let cont of obj["content"]){
            res += RichTextToString(cont);
        }
    }
    return res;
}


/***/ }),

/***/ 484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storyblok_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(843);
/* harmony import */ var _components_genericComponents_Person_Person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var _components_genericComponents_Experience_Experience__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_storyblok_react__WEBPACK_IMPORTED_MODULE_1__, _components_genericComponents_Person_Person__WEBPACK_IMPORTED_MODULE_2__, _components_genericComponents_Experience_Experience__WEBPACK_IMPORTED_MODULE_3__]);
([_storyblok_react__WEBPACK_IMPORTED_MODULE_1__, _components_genericComponents_Person_Person__WEBPACK_IMPORTED_MODULE_2__, _components_genericComponents_Experience_Experience__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const components = {
    person: _components_genericComponents_Person_Person__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    experience: _components_genericComponents_Experience_Experience__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
};
(0,_storyblok_react__WEBPACK_IMPORTED_MODULE_1__.storyblokInit)({
    accessToken: `${process.env.STORYBLOK_API_KEY}`,
    use: [
        _storyblok_react__WEBPACK_IMPORTED_MODULE_1__.apiPlugin
    ],
    components
});
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 580:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 193:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 843:
/***/ ((module) => {

"use strict";
module.exports = import("@storyblok/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(484));
module.exports = __webpack_exports__;

})();