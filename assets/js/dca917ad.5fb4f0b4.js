"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3320],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6789:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},l="Global",s={unversionedId:"reference-scripting/global",id:"reference-scripting/global",title:"Global",description:"The Global object is a global variable that can be used to store variables that are shared between all mock requests. Its underlying storage is a Dictionary object, meaning that you can store any type of variable in it. The state is not persisted between server restarts.",source:"@site/docs/reference-scripting/global.md",sourceDirName:"reference-scripting",slug:"/reference-scripting/global",permalink:"/Mockaco/docs/reference-scripting/global",draft:!1,editUrl:"https://github.com/natenho/Mockaco/tree/master/website/docs/reference-scripting/global.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Faker",permalink:"/Mockaco/docs/reference-scripting/faker"},next:{title:"Request",permalink:"/Mockaco/docs/reference-scripting/request"}},i={},c=[{value:"Store a variable along a mock request",id:"store-a-variable-along-a-mock-request",level:2},{value:"Store state between mock calls",id:"store-state-between-mock-calls",level:2}],u={toc:c},p="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"global"},"Global"),(0,a.kt)("p",null,"The Global object is a global variable that can be used to store variables that are shared between all mock requests. Its underlying storage is a ",(0,a.kt)("inlineCode",{parentName:"p"},"Dictionary<string, object>")," object, meaning that you can store any type of variable in it. The state is not persisted between server restarts."),(0,a.kt)("h2",{id:"store-a-variable-along-a-mock-request"},"Store a variable along a mock request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<#\n    Global["my-custom-variable"] = "hello";\n#>\n{\n  "request": {\n    "method": "GET",\n    "route": "ping"\n  },\n  "response": {\n    "status": "OK",\n    "body": {\n      "response": "<#=Global["my-custom-variable"] #>"\n    }\n  }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://localhost:5000/ping\n{\n  "response": "hello"\n}\n')),(0,a.kt)("h2",{id:"store-state-between-mock-calls"},"Store state between mock calls"),(0,a.kt)("p",null,"The Global object is shared between all mock requests, meaning that you can store a variable in one mock and use it in another."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "request": {\n    "method": "GET",\n    "route": "store"\n  },\n  "response": {\n    "status": "OK",\n    "body": {\n      "response": "This request stores a variable"\n    }\n  }\n  <#\n    Global["my-custom-variable"] = "hello!";\n  #>\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "request": {\n    "method": "GET",\n    "route": "retrieve"\n  },\n  "response": {\n    "status": "OK",\n    "body": {\n      "response": "The variable is <#=Global["my-custom-variable"] #>"\n    }\n  }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://localhost:5000/store\n{\n  "response": "This request stores a variable"\n}\n\n$ curl http://localhost:5000/retrieve\n{\n  "response": "The variable is hello!"\n}\n')),(0,a.kt)("p",null,"This feature can be used to simulate stateful APIs behaviors. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/mocking-stateful"},"Stateful mocks guide")," for more information."))}b.isMDXComponent=!0}}]);