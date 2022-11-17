"use strict";
(() => {
var exports = {};
exports.id = 120;
exports.ids = [120];
exports.modules = {

/***/ 475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ HeadComponent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(193);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/genericComponents/HeadComponent/HeadComponent.js




function getTagElement([key, value]) {
    if (key === "title") {
        return /*#__PURE__*/ jsx_runtime_.jsx("title", {
            children: value
        }, key);
    }
    if (key === "canonicalLink") {
        return /*#__PURE__*/ jsx_runtime_.jsx("link", {
            rel: "canonical",
            href: value,
            hrefLang: "nl"
        }, key);
    }
    // Opengraph uses [property], but everything else uses [name]
    if (key.indexOf("og:") === 0) {
        return /*#__PURE__*/ jsx_runtime_.jsx("meta", {
            property: key,
            content: value
        }, key);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("meta", {
        name: key,
        content: value
    }, key);
}
class HeadComponent extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            loaded: false
        };
    }
    componentDidMount() {
        this.setState({
            loaded: document.readyState === "complete"
        });
        document.addEventListener("readystatechange", ()=>{
            this.setState({
                loaded: document.readyState === "complete"
            });
        });
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossorigin: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        lang: "en"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/images/logo/favicon@32x.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "alternate icon",
                        href: "/images/logo/favicon.svg"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        href: "/images/logo/favicon@180x.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "dns-prefetch",
                        href: "https://cdn.materialdesignicons.com"
                    }),
                    this.props.socialTags && Object.entries(this.props.socialTags).map(getTagElement),
                    this.state.loaded && /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdn.jsdelivr.net/npm/@mdi/font@3.9.97/css/materialdesignicons.min.css"
                    }),
                    this.state.loaded && /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Silkscreen:wght@400;700&display=swap",
                        rel: "stylesheet"
                    })
                ]
            })
        });
    }
};
HeadComponent.propTypes = {
    socialTags: external_prop_types_.object
};


/***/ }),

/***/ 221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ getTags)
/* harmony export */ });
function getTags(socialTags) {
    let tags = {};
    if (socialTags && socialTags.storyblokSocialTag) {
        mergeStoryblokTags(socialTags.storyblokSocialTag, tags);
    }
    if (socialTags && socialTags.pageDefaults) {
        mergeTags(socialTags.pageDefaults, tags);
    }
    mergeDefaultTags(tags);
    setDerivedTags(tags);
    filterEmptyValues(tags);
    return tags;
}
function mergeStoryblokTags(storyblokTags, tags) {
    // rename storyblok tags from og_foo to og:foo
    let newStoryblokTags = {};
    for(const key in storyblokTags){
        if (key === "_uid") {
            continue;
        }
        let newKey = key.replace("og_", "og:").replace("twitter_", "twitter:");
        newStoryblokTags[newKey] = storyblokTags[key];
    }
    mergeTags(newStoryblokTags, tags);
}
function mergeTags(fromTags, tags) {
    for(let key in fromTags){
        if (fromTags[key] && !tags[key]) {
            tags[key] = fromTags[key];
        }
    }
}
function mergeDefaultTags(tags) {
    let defaultTags = getDefaultTags();
    for(let key in defaultTags){
        if (!tags[key]) {
            tags[key] = defaultTags[key];
        } else if (key === "title" || key === "og:title") {
            tags[key] += " | " + defaultTags[key];
        }
    }
}
function getDefaultTags() {
    const imageUrl = process.env.NEXT_PUBLIC_SocialTagImageFallback;
    const description = "Helping you create lovable digital products, great customer experiences and performant business processes";
    return {
        // General SEO
        "author": "Team TML",
        "description": description,
        // Indexing / Spiders
        "bingbot": "all",
        "googlebot": "all",
        "robots": "all",
        // OpenGraph
        "og:site_name": "My Resume",
        "og:title": "My Resume",
        "og:description": description,
        "og:image": imageUrl,
        "og:type": "website",
        // Twitter
        "twitter:site": "@MyResume",
        "twitter:card": "summary_large_image",
        "twitter:image": imageUrl,
        "twitter:title": "My Resume",
        "twitter:description": description
    };
}
function setDerivedTags(tags) {
    const tagMappings = getTagMappings();
    for(let key in tagMappings){
        tags[key] = tags[tagMappings[key]];
    }
}
function getTagMappings() {
    return {
        "canonicalLink": "og:url",
        "description": "og:description",
        "title": "og:title",
        "twitter:description": "og:description",
        "twitter:image": "og:image",
        "twitter:title": "og:title"
    };
}
function filterEmptyValues(tags) {
    Object.keys(tags).forEach((key)=>tags[key] ? {} : delete tags[key]
    );
}


/***/ }),

/***/ 462:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storyblok_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(843);
/* harmony import */ var _components_genericComponents_HeadComponent_HeadComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(475);
/* harmony import */ var _functions_services_metaTagService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(221);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_storyblok_react__WEBPACK_IMPORTED_MODULE_1__]);
_storyblok_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Page({ story , preview , socialtags  }) {
    story = (0,_storyblok_react__WEBPACK_IMPORTED_MODULE_1__.useStoryblokState)(story, {
        resolveRelations: []
    }, preview);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_genericComponents_HeadComponent_HeadComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                socialTags: socialtags
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_storyblok_react__WEBPACK_IMPORTED_MODULE_1__.StoryblokComponent, {
                blok: story.content
            })
        ]
    });
};
async function getStaticProps({ params  }) {
    let slug = params.slug ? params.slug.join("/") : "home";
    let sbParams = {
        version: "draft",
        resolve_relations: []
    };
    const storyblokApi = (0,_storyblok_react__WEBPACK_IMPORTED_MODULE_1__.getStoryblokApi)();
    let { data  } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
    if (!data) {
        return {
            notFound: true
        };
    }
    const title = data.story.name;
    const description = data.story.content.tagline ? data.story.content.tagline : `${title}`;
    const socialtags = (0,_functions_services_metaTagService__WEBPACK_IMPORTED_MODULE_3__/* .getTags */ .N)({
        storyblokSocialTag: data.story.content.socialtag,
        pageDefaults: {
            "og:title": title,
            "og:description": description,
            "og:url": `${process.env.NEXT_PUBLIC_DEPLOY_URL}` + slug
        }
    });
    return {
        props: {
            story: data ? data.story : false,
            key: data ? data.story.id : false,
            socialtags
        },
        revalidate: 10
    };
}
async function getStaticPaths() {
    const storyblokApi = (0,_storyblok_react__WEBPACK_IMPORTED_MODULE_1__.getStoryblokApi)();
    let { data  } = await storyblokApi.get("cdn/links/");
    let paths = [];
    Object.keys(data.links).forEach((linkKey)=>{
        if (data.links[linkKey].is_folder) {
            return;
        }
        const slug = data.links[linkKey].slug;
        let splittedSlug = slug.split("/");
        paths.push({
            params: {
                slug: splittedSlug
            }
        });
    });
    return {
        paths: paths,
        fallback: "blocking"
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 193:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = import("@storyblok/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(462));
module.exports = __webpack_exports__;

})();