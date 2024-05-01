"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7723],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||s;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[f]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const s={},i="Response",a={unversionedId:"reference-scripting/response",id:"reference-scripting/response",title:"Response",description:"The Response object is accessible after the mock is generated. This object contains response that was sent to the client. It has the following properties:",source:"@site/docs/reference-scripting/response.md",sourceDirName:"reference-scripting",slug:"/reference-scripting/response",permalink:"/Mockaco/docs/reference-scripting/response",draft:!1,editUrl:"https://github.com/natenho/Mockaco/tree/master/website/docs/reference-scripting/response.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Request",permalink:"/Mockaco/docs/reference-scripting/request"},next:{title:"Mock Template Reference",permalink:"/Mockaco/docs/category/mock-template-reference"}},c={},p=[{value:"Header",id:"header",level:2},{value:"Body",id:"body",level:2}],l={toc:p},f="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"response"},"Response"),(0,o.kt)("p",null,"The Response object is accessible ",(0,o.kt)("strong",{parentName:"p"},"after")," the mock is generated. This object contains response that was sent to the client. It has the following properties:"),(0,o.kt)("h2",{id:"header"},"Header"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.ireadonlydictionary-2"},(0,o.kt)("inlineCode",{parentName:"a"},"IReadOnlyDictionary<string, string>"))," containing response headers. Missing keys will return an empty string. To check the existence of a key, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ContainsKey")," method."),(0,o.kt)("h2",{id:"body"},"Body"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://www.newtonsoft.com/json/help/html/t_newtonsoft_json_linq_jtoken.htm"},(0,o.kt)("inlineCode",{parentName:"a"},"JToken"))," object containing response body data."))}u.isMDXComponent=!0}}]);