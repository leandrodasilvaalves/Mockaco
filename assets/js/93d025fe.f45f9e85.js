"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[794],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7741:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={},i="Mocking binary/raw responses",l={unversionedId:"guides/mocking-raw",id:"guides/mocking-raw",title:"Mocking binary/raw responses",description:"Mockaco is able to respond raw file contents, so it's possible to return a file, image or any static file content.",source:"@site/docs/guides/mocking-raw.md",sourceDirName:"guides",slug:"/guides/mocking-raw",permalink:"/Mockaco/docs/guides/mocking-raw",draft:!1,editUrl:"https://github.com/natenho/Mockaco/tree/master/website/docs/guides/mocking-raw.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/Mockaco/docs/category/guides"},next:{title:"Stateful mocks",permalink:"/Mockaco/docs/guides/mocking-stateful"}},s={},p=[{value:"Example 1 - Image",id:"example-1---image",level:2},{value:"Testing",id:"testing",level:3},{value:"Example 2 - Binary File Download",id:"example-2---binary-file-download",level:2},{value:"Testing",id:"testing-1",level:3},{value:"Example 3 - Raw XML file",id:"example-3---raw-xml-file",level:2},{value:"Send the request and get the mocked response",id:"send-the-request-and-get-the-mocked-response",level:3}],c={toc:p},m="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mocking-binaryraw-responses"},"Mocking binary/raw responses"),(0,r.kt)("p",null,"Mockaco is able to respond raw file contents, so it's possible to return a file, image or any static file content."),(0,r.kt)("h2",{id:"example-1---image"},"Example 1 - Image"),(0,r.kt)("p",null,"This example returns a static image file."),(0,r.kt)("p",null,"Create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"image.json")," under ",(0,r.kt)("inlineCode",{parentName:"p"},"Mocks")," folder. Copy any JPG image file named ",(0,r.kt)("inlineCode",{parentName:"p"},"image01.jpg")," into the directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "request": {\n    "method": "GET",\n    "route": "/images/image01.jpg"\n  },\n  "response": {\n    "status": "OK",\n    "headers": {\n      "Content-Type": "image/jpeg"\n    },\n    "file": "Mocks/image01.jpg"\n  }\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type")," header must be set to the appropriate MIME type."),(0,r.kt)("h3",{id:"testing"},"Testing"),(0,r.kt)("p",null,"The best way to test this example is to open your favorite browser and access the URL http://localhost:5000/images/image01.jpg."),(0,r.kt)("h2",{id:"example-2---binary-file-download"},"Example 2 - Binary File Download"),(0,r.kt)("p",null,"This example instructs browsers to download any binary file."),(0,r.kt)("p",null,"Create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"binary.json")," under ",(0,r.kt)("inlineCode",{parentName:"p"},"Mocks")," folder. Copy any file named ",(0,r.kt)("inlineCode",{parentName:"p"},"binary.dat")," into the directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "request": {\n    "method": "GET",\n    "route": "/binary.dat"\n  },\n  "response": {\n    "status": "OK",\n    "headers": {\n      "Content-Type": "application/octet-stream",\n      "Content-Disposition": "attachment; filename=\\"binary-example.dat\\""\n    },\n    "file": "Mocks/binary.dat"\n  }\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Disposition")," header is responsible to instruct the browser to download the file instead of guessing how to render it."),(0,r.kt)("h3",{id:"testing-1"},"Testing"),(0,r.kt)("p",null,"The best way to test this example is to open your favorite browser and access the URL http://localhost:5000/binary.dat."),(0,r.kt)("p",null,"It will start downloading a file with the default name ",(0,r.kt)("inlineCode",{parentName:"p"},"binary-example.dat")," as specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"filename=")," field in ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Disposition")," header."),(0,r.kt)("h2",{id:"example-3---raw-xml-file"},"Example 3 - Raw XML file"),(0,r.kt)("p",null,'This example simply shows how to mock a static raw XML response so it can be sent "as-is", without any parsing.'),(0,r.kt)("p",null," Create a XML file named ",(0,r.kt)("inlineCode",{parentName:"p"},"mock.xml")," under ",(0,r.kt)("inlineCode",{parentName:"p"},"Mocks")," folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" ?>\n<root>\n    <theSongName>Glycerine</theSongName>\n    <theAlbum year="1994">Sixteen Stone</theAlbum>\n</root>\n')),(0,r.kt)("p",null,"Create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"rawxml.json")," under ",(0,r.kt)("inlineCode",{parentName:"p"},"Mocks")," folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "request": {\n    "method": "GET",\n    "route": "/raw-xml-example"\n  },\n  "response": {\n    "status": "OK",\n    "headers": {\n      "Content-Type": "application/xml"      \n    },\n    "file": "Mocks/mock.xml"\n  }\n}\n')),(0,r.kt)("h3",{id:"send-the-request-and-get-the-mocked-response"},"Send the request and get the mocked response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ curl -iX GET http://localhost:5000/raw-xml-example\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 200 OK\nDate: Tue, 13 Aug 2019 05:09:40 GMT\nContent-Type: application/xml\nServer: Kestrel\nTransfer-Encoding: chunked\n\n<?xml version="1.0" encoding="UTF-8" ?>\n<root>\n    <theSongName>Glycerine</theSongName>\n    <theAlbum year="1994">Sixteen Stone</theAlbum>\n</root>\n')))}d.isMDXComponent=!0}}]);