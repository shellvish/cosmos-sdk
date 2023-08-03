"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[1735],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return t?n.createElement(g,i(i({ref:r},d),{},{components:t})):n.createElement(g,i({ref:r},d))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},90057:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const a={sidebar_position:1},i="Errors",s={unversionedId:"building-modules/errors",id:"building-modules/errors",title:"Errors",description:"This document outlines the recommended usage and APIs for error handling in Cosmos SDK modules.",source:"@site/docs/building-modules/12-errors.md",sourceDirName:"building-modules",slug:"/building-modules/errors",permalink:"/main/building-modules/errors",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Recommended Folder Structure",permalink:"/main/building-modules/structure"},next:{title:"Upgrading Modules",permalink:"/main/building-modules/upgrade"}},l={},p=[{value:"Registration",id:"registration",level:2},{value:"Wrapping",id:"wrapping",level:2},{value:"ABCI",id:"abci",level:2}],d={toc:p};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"errors"},"Errors"),(0,o.kt)("admonition",{title:"Synopsis",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This document outlines the recommended usage and APIs for error handling in Cosmos SDK modules.")),(0,o.kt)("p",null,"Modules are encouraged to define and register their own errors to provide better\ncontext on failed message or handler execution. Typically, these errors should be\ncommon or general errors which can be further wrapped to provide additional specific\nexecution context."),(0,o.kt)("h2",{id:"registration"},"Registration"),(0,o.kt)("p",null,"Modules should define and register their custom errors in ",(0,o.kt)("inlineCode",{parentName:"p"},"x/{module}/errors.go"),".\nRegistration of errors is handled via the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/errors/errors.go"},(0,o.kt)("inlineCode",{parentName:"a"},"errors")," package"),"."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/distribution/types/errors.go\n")),(0,o.kt)("p",null,'Each custom module error must provide the codespace, which is typically the module name\n(e.g. "distribution") and is unique per module, and a uint32 code. Together, the codespace and code\nprovide a globally unique Cosmos SDK error. Typically, the code is monotonically increasing but does not\nnecessarily have to be. The only restrictions on error codes are the following:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Must be greater than one, as a code value of one is reserved for internal errors."),(0,o.kt)("li",{parentName:"ul"},"Must be unique within the module.")),(0,o.kt)("p",null,"Note, the Cosmos SDK provides a core set of ",(0,o.kt)("em",{parentName:"p"},"common")," errors. These errors are defined in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/types/errors/errors.go"},(0,o.kt)("inlineCode",{parentName:"a"},"types/errors/errors.go")),"."),(0,o.kt)("h2",{id:"wrapping"},"Wrapping"),(0,o.kt)("p",null,"The custom module errors can be returned as their concrete type as they already fulfill the ",(0,o.kt)("inlineCode",{parentName:"p"},"error"),"\ninterface. However, module errors can be wrapped to provide further context and meaning to failed\nexecution."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/bank/keeper/keeper.go#L141-L182\n")),(0,o.kt)("p",null,"Regardless if an error is wrapped or not, the Cosmos SDK's ",(0,o.kt)("inlineCode",{parentName:"p"},"errors")," package provides a function to determine if\nan error is of a particular kind via ",(0,o.kt)("inlineCode",{parentName:"p"},"Is"),"."),(0,o.kt)("h2",{id:"abci"},"ABCI"),(0,o.kt)("p",null,"If a module error is registered, the Cosmos SDK ",(0,o.kt)("inlineCode",{parentName:"p"},"errors")," package allows ABCI information to be extracted\nthrough the ",(0,o.kt)("inlineCode",{parentName:"p"},"ABCIInfo")," function. The package also provides ",(0,o.kt)("inlineCode",{parentName:"p"},"ResponseCheckTx")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ResponseDeliverTx")," as\nauxiliary functions to automatically get ",(0,o.kt)("inlineCode",{parentName:"p"},"CheckTx")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"DeliverTx")," responses from an error."))}c.isMDXComponent=!0}}]);