"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6907],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},s="Request Matching",i={unversionedId:"request-matching/index",id:"request-matching/index",title:"Request Matching",description:"When a request is received, Mockaco follows a specific process:",source:"@site/docs/request-matching/index.md",sourceDirName:"request-matching",slug:"/request-matching/",permalink:"/Mockaco/docs/request-matching/",draft:!1,editUrl:"https://github.com/natenho/Mockaco/tree/master/website/docs/request-matching/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test",permalink:"/Mockaco/docs/quick-start/test-mock"},next:{title:"Scripting",permalink:"/Mockaco/docs/reference-scripting/"}},c={},l=[{value:"Criteria",id:"criteria",level:2},{value:"Matching HTTP method",id:"matching-http-method",level:3},{value:"Matching request route",id:"matching-request-route",level:3},{value:"Matching query parameters",id:"matching-query-parameters",level:3}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"request-matching"},"Request Matching"),(0,a.kt)("p",null,"When a request is received, Mockaco follows a specific process:"),(0,a.kt)("p",null,"Mockaco searches for files in alphabetical order."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"It compares the request against the criteria specified in the request object of each file."),(0,a.kt)("li",{parentName:"ol"},"The first match that meets the criteria is selected. In case of ambiguity, Mockaco will prioritize mocks that have a condition."),(0,a.kt)("li",{parentName:"ol"},"If no matching Mock file is found, Mockaco returns a default response of HTTP 501 (Not Implemented). Additionally, it provides a list of possible file parsing errors.")),(0,a.kt)("p",null,"This process ensures that Mockaco handles incoming requests and provides appropriate responses based on the available mock files. In case of any errors, the default response serves as a helpful indicator for troubleshooting."),(0,a.kt)("h2",{id:"criteria"},"Criteria"),(0,a.kt)("p",null,"The request matching is based on the ",(0,a.kt)("a",{parentName:"p",href:"/docs/category/request-object"},(0,a.kt)("inlineCode",{parentName:"a"},"request object"))," defined in the mock template."),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/category/request-object"},"request object reference")," for further details on how to use each criteria."),(0,a.kt)("h3",{id:"matching-http-method"},"Matching HTTP method"),(0,a.kt)("p",null,"The method is the HTTP verb used in the request. It is case-insensitive. If the method is not specified, Mockaco will match ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," method."),(0,a.kt)("p",null,"Example of a mock that matches a ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "request": {\n    "method": "POST"\n  },\n  "response": {\n    "status": "OK"\n  }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -iX POST "http://localhost:5000"\nHTTP/1.1 200 OK\nContent-Length: 0\nContent-Type: application/json\nDate: Sun, 10 Mar 2024 23:10:33 GMT\nServer: Kestrel\n')),(0,a.kt)("h3",{id:"matching-request-route"},"Matching request route"),(0,a.kt)("p",null,"The route follows a similar pattern to the URL, but it contains the route parameters that can be later reused inside scripts."),(0,a.kt)("p",null,"Example of a route with parameters that will match a request to ",(0,a.kt)("inlineCode",{parentName:"p"},"/customers/123"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "request": {\n    "method": "GET",\n    "route": "customers/{id}"\n  },\n  "response": {\n    "status": "OK",\n    "body": {\n      "name": "John Doe"\n    }\n  }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -iX GET "http://localhost:5000/customers/123"\nHTTP/1.1 200 OK\nContent-Type: application/json\nDate: Sun, 10 Mar 2024 23:05:07 GMT\nServer: Kestrel\nTransfer-Encoding: chunked\n\n{\n  "name": "John Doe"\n}\n')),(0,a.kt)("p",null,"The route parameters are also accessible through scripting API and can be used inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"condition")," object to match the request, or event inside the response body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "request": {\n    "method": "GET",\n    "route": "customers/{id}"\n    "condition": "<#= Request.Route["id"] == "123" #>"\n  },\n  "response": {\n    "status": "OK",\n    "body": {\n      "customerId": "<#= Request.Route["id"] #>"\n    }\n  }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -iX GET "http://localhost:5000/customers/123"\nHTTP/1.1 200 OK\nContent-Type: application/json\nDate: Sun, 10 Mar 2024 23:06:35 GMT\nServer: Kestrel\nTransfer-Encoding: chunked\n\n{\n  "customerId": "123"\n}\n')),(0,a.kt)("h3",{id:"matching-query-parameters"},"Matching query parameters"),(0,a.kt)("p",null,"Query parameters are accessible through scripting API and can be used inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"condition")," object to match the request."),(0,a.kt)("p",null,"This example uses a condition to check if the query parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"my-parameter")," is equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"good"),". If the condition is met, the response body will contain a message."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "request": {\n    "method": "GET",\n    "condition": "<#= Request.Query["my-parameter"] == "good" #>"\n  },\n  "response": {\n    "status": "OK",\n    "headers": {\n      "Content-Type": "application/json"\n    },\n    "body": {\n      "message": "Good query parameter"\n    }\n  }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -iX GET "http://localhost:5000?my-parameter=good"\nHTTP/1.1 200 OK\nContent-Type: application/json\nDate: Sun, 10 Mar 2024 23:02:31 GMT\nServer: Kestrel\nTransfer-Encoding: chunked\n\n{\n  "message": "Good query parameter"\n}\n')),(0,a.kt)("p",null,"Notice that trying to get a missing query parameter will return an empty string. To check the existence of a query parameter, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ContainsKey")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "request": {\n    "method": "GET",\n    "condition": "<#= Request.Query.ContainsKey("my-flag") #>"\n  },\n  "response": {\n    "status": "OK",\n    "headers": {\n      "Content-Type": "application/json"\n    },\n    "body": {\n      "message": "Query parameter exists"\n    }\n  }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -iX GET "http://localhost:5000?my-flag"\nHTTP/1.1 200 OK\nContent-Type: application/json\nDate: Sun, 10 Mar 2024 23:00:37 GMT\nServer: Kestrel\nTransfer-Encoding: chunked\n\n{\n  "message": "Query parameter exists"\n}\n')),(0,a.kt)("p",null,"This another example uses Regex to check if the query parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"word")," contains only lowercase letters. If the condition is met, the word is returned in the response body."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "request": {\n    "method": "GET",\n    "condition": "<#= Regex.IsMatch(Request.Query["word"], "^[a-z]+$") #>"\n  },\n  "response": {\n    "status": "OK",\n    "headers": {\n      "Content-Type": "application/json"\n    },\n    "body": {\n      "word": "<#= Request.Query["word"] #>"\n    }\n  }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -iX GET "http://localhost:5000?word=mockaco"\nHTTP/1.1 200 OK\nContent-Type: application/json\nDate: Sun, 10 Mar 2024 22:56:40 GMT\nServer: Kestrel\nTransfer-Encoding: chunked\n\n{\n  "word": "mockaco"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -iX GET "http://localhost:5000?word=Mockaco"\nHTTP/1.1 501 Not Implemented\nContent-Type: application/json\nDate: Sun, 10 Mar 2024 22:56:23 GMT\nServer: Kestrel\nTransfer-Encoding: chunked\n\n[\n  {\n    "Message": "Incoming request didn\'t match any mock"\n  }\n]\n')))}d.isMDXComponent=!0}}]);