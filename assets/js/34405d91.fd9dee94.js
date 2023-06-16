"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[663],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8864:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>b,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},c="body attribute",l={unversionedId:"reference/callback/body-attribute",id:"reference/callback/body-attribute",title:"body attribute",description:"Sets the content to be sent to another server.",source:"@site/docs/reference/callback/body-attribute.md",sourceDirName:"reference/callback",slug:"/reference/callback/body-attribute",permalink:"/Mockaco/docs/reference/callback/body-attribute",draft:!1,editUrl:"https://github.com/natenho/Mockaco/tree/master/website/docs/reference/callback/body-attribute.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"callback object",permalink:"/Mockaco/docs/category/callback-object"},next:{title:"delay attribute",permalink:"/Mockaco/docs/reference/callback/delay-attribute"}},i={},p=[{value:"Example",id:"example",level:2}],s={toc:p},u="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"body-attribute"},"body attribute"),(0,a.kt)("p",null,"Sets the content to be sent to another server."),(0,a.kt)("p",null,"If omitted, empty or null, defaults to empty."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "request": {\n    "method": "GET"\n  },\n  "response": {\n    "status": "OK",\n    "body": {\n      "currentTime": "<#= DateTime.Now.ToString() #>"\n    }\n  },\n  "callback": {\n    "method": "POST",\n    "body": {\n        "message": "The response was <#= Response.Body["currentTime"]?.ToString() #>"\n    },\n    "url": "https://postman-echo.com/post",\n  }\n}\n')),(0,a.kt)("admonition",{title:"Scripting tip",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The request data and the generated response data can be accessed in callback to produce dynamic callback content.")))}b.isMDXComponent=!0}}]);