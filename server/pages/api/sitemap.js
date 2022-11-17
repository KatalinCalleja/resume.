"use strict";
(() => {
var exports = {};
exports.id = 290;
exports.ids = [290];
exports.modules = {

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = import("@storyblok/react");;

/***/ }),

/***/ 764:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "react"
const external_react_namespaceObject = require("react");
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
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
class HeadComponent extends external_react_namespaceObject.Component {
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
    socialTags: external_prop_types_namespaceObject.object
};


/***/ }),

/***/ 792:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony exports default, getStaticProps, getStaticPaths */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storyblok_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(843);
/* harmony import */ var _components_genericComponents_HeadComponent_HeadComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(764);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_storyblok_react__WEBPACK_IMPORTED_MODULE_1__]);
_storyblok_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Page({ story , preview , socialtags  }) {
    story = useStoryblokState(story, {
        resolveRelations: []
    }, preview);
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(HeadComponent, {
                socialTags: socialtags
            }),
            /*#__PURE__*/ _jsx(StoryblokComponent, {
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
    const storyblokApi = getStoryblokApi();
    let { data  } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
    if (!data) {
        return {
            notFound: true
        };
    }
    const title = data.story.name;
    const description = data.story.content.tagline ? data.story.content.tagline : `${title}`;
    const socialtags = getTags({
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
    const storyblokApi = getStoryblokApi();
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

/***/ 911:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _slug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(792);
/* harmony import */ var _storyblok_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(843);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_slug___WEBPACK_IMPORTED_MODULE_0__, _storyblok_react__WEBPACK_IMPORTED_MODULE_1__]);
([_slug___WEBPACK_IMPORTED_MODULE_0__, _storyblok_react__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


async function handler(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/xml");
    // Instructing the Vercel edge to cache the file
    res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");
    //getting paths
    const storyblokApi = (0,_storyblok_react__WEBPACK_IMPORTED_MODULE_1__.getStoryblokApi)();
    let homelink = {
        slug: "",
        published: true
    };
    let paths = [];
    paths.push(homelink);
    await storyblokApi.get(`cdn/links`, {
        starts_with: "people"
    }).then((result)=>{
        Object.keys(result.data.links).forEach((linkKey)=>{
            if (!result.data.links[linkKey].is_folder && result.data.links[linkKey].published) {
                paths.push(result.data.links[linkKey]);
            }
        });
    });
    // let { services } = await storyblokApi.get(`cdn/links`, {
    //   starts_with: "services",
    // });
    // Object.keys(services.links).forEach((linkKey) => {
    //   if (!services.links[linkKey].is_folder && services.links[linkKey].published) {
    //     paths.push(services.links[linkKey]);
    //   }
    // });
    // generate sitemap here
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
      ${paths.map((url)=>{
        return `
            <url>
              <loc>https://resume.vercel.app/${url.slug}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
    }).join("")}
      </urlset>`;
    res.end(xml);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(911));
module.exports = __webpack_exports__;

})();