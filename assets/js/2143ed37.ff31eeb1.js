"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="Scripting",s={unversionedId:"reference-scripting/index",id:"reference-scripting/index",title:"Scripting",description:"Every part of the mock file is scriptable, so you can add code to programmatically generate parts of the template.",source:"@site/docs/reference-scripting/index.md",sourceDirName:"reference-scripting",slug:"/reference-scripting/",permalink:"/Mockaco/docs/reference-scripting/",draft:!1,editUrl:"https://github.com/natenho/Mockaco/tree/master/website/docs/reference-scripting/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Request Matching",permalink:"/Mockaco/docs/request-matching/"},next:{title:"Faker",permalink:"/Mockaco/docs/reference-scripting/faker"}},c={},p=[{value:"Example",id:"example",level:3},{value:"Generating fake data",id:"generating-fake-data",level:2},{value:"Accessing request data",id:"accessing-request-data",level:2},{value:"Accessing response data",id:"accessing-response-data",level:2}],l={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scripting"},"Scripting"),(0,a.kt)("p",null,"Every part of the mock file is scriptable, so you can add code to programmatically generate parts of the template."),(0,a.kt)("p",null,"Use C# code surrounded by ",(0,a.kt)("inlineCode",{parentName:"p"},"<#=")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"#>"),"."),(0,a.kt)("admonition",{title:"Escaping",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"A convenient feature of Mockaco is that you don't need to escape the code inside the JSON.\nAlthough it pays off, in the other hand, the invalid JSON file may be a little hard to indent.")),(0,a.kt)("p",null,"The mock code and generation will run for each request."),(0,a.kt)("p",null,"The scripts are compiled and executed via ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dotnet/roslyn/wiki/Scripting-API-Samples"},"Roslyn"),"."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "request": {\n    "method": "GET"\n  },\n  "response": {\n    "status": "OK",\n    "body": {\n      "currentYear": "<#= DateTime.Now.Year #>"\n    }\n  }\n}\n')),(0,a.kt)("p",null,"The code tag structure resembles ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mono/t4"},"T4 Text Template Engine"),". In fact, this project leverages parts of T4 engine code to parse mock templates."),(0,a.kt)("p",null,"For multi-line code, you need to use ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," at the end of the code block:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<#=\n  var count = 10\n  var people = new int[count];\n\n  for(var i = 0; i < count; i++ ) {\n      people[i] = i + 1;\n  }\n\n  return JsonConvert.SerializeObject(people);\n#>\n")),(0,a.kt)("h2",{id:"generating-fake-data"},"Generating fake data"),(0,a.kt)("p",null,"There is a ",(0,a.kt)("inlineCode",{parentName:"p"},"Faker")," object available to generate fake data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "request": {\n    "method": "GET"\n  },\n  "response": {\n      "status": "OK",\n      "body": {\n      "id": "<#= Faker.Random.Guid() #>",\n      "number": "<#= Faker.Random.Number(1, 1000) #>",\n      "fruit": "<#= Faker.PickRandom(new[] { "apple", "banana", "orange", "strawberry", "kiwi" }) #>",\n      "recentDate": <#= JsonConvert.SerializeObject(Faker.Date.Recent()) #>\n      }\n  }\n}\n')),(0,a.kt)("p",null,"The built-in fake data is generated via ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bchavez/Bogus"},"Bogus"),". You can use any documented method from Bogus library.\nThe faker can also generate localized data using ",(0,a.kt)("inlineCode",{parentName:"p"},"Accept-Language")," HTTP header. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"en")," (english) fake data."),(0,a.kt)("h2",{id:"accessing-request-data"},"Accessing request data"),(0,a.kt)("p",null,"It's possible to access request data within the response template.\nThere is a ",(0,a.kt)("inlineCode",{parentName:"p"},"Request")," object available to access request data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "request": {\n      "method": "PUT",\n      "route": "customers/{id}"\n  },\n  "response": {\n      "status": "OK",\n      "body": {\n      "url": "<#= Request.Url #>",\n      "customerId": "<#= Request.Route["id"] #>",\n      "acceptHeader": "<#= Request.Header["Content-Type"] #>",\n      "queryString": "<#= Request.Query["dummy"] #>",\n      "requestBodyAttribute": "<#= Request.Body["address"]?[0] #>"\n    }\n  }\n}\n')),(0,a.kt)("h2",{id:"accessing-response-data"},"Accessing response data"),(0,a.kt)("p",null,"In the same way, response data can be used within the callback request template.\nThere is a ",(0,a.kt)("inlineCode",{parentName:"p"},"Response")," object available to access the generated response data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "request": {\n    "method": "PUT",\n    "route": "customers/{id}"\n  },\n  "response": {\n    "delay": "<#=Faker.Random.Number(1,7)#>",\n    "indented": true,\n    "status": "201",\n    "headers": {\n      "X-Header-1": "1",\n      "X-Header-2": "2"\n    },\n    "body": {\n      "id": "1",\n      "message": "Hello world",\n      "generatedRandomNumber": <#=Faker.Random.Number(1,10000)#>\n    }\n  },\n  "callback": {\n    "method": "POST",\n    "url": "https://postman-echo.com/post",\n    "timeout": 1000,\n    "headers": {\n      "Callback-Header-Message": "<#=Response.Body["message"]#>"\n    },\n    "body": {\n      "responseRandomNumber": "The mocked response was <#= Response.Body["generatedRandomNumber"] #>"\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);