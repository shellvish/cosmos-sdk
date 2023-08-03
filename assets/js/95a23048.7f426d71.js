"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[6870],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=m(n),d=r,f=p["".concat(l,".").concat(d)]||p[d]||c[d]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},21823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:0,slug:"/modules"},i="List of Modules",s={unversionedId:"modules/README",id:"version-v0.47/modules/README",title:"List of Modules",description:"Here are some production-grade modules that can be used in Cosmos SDK applications, along with their respective documentation:",source:"@site/versioned_docs/version-v0.47/modules/README.md",sourceDirName:"modules",slug:"/modules",permalink:"/v0.47/modules",draft:!1,tags:[],version:"v0.47",sidebarPosition:0,frontMatter:{sidebar_position:0,slug:"/modules"},sidebar:"tutorialSidebar",previous:{title:"Upgrading Cosmos SDK",permalink:"/v0.47/migrations/upgrading"},next:{title:"x/auth",permalink:"/v0.47/modules/auth/"}},l={},m=[{value:"IBC",id:"ibc",level:2},{value:"CosmWasm",id:"cosmwasm",level:2}],u={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"list-of-modules"},"List of Modules"),(0,r.kt)("p",null,"Here are some production-grade modules that can be used in Cosmos SDK applications, along with their respective documentation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v0.47/modules/auth/"},"Auth")," - Authentication of accounts and transactions for Cosmos SDK applications."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v0.47/modules/authz/"},"Authz")," - Authorization for accounts to perform actions on behalf of other accounts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v0.47/modules/bank/"},"Bank")," - Token transfer functionalities."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v0.47/modules/capability/"},"Capability")," - Object capability implementation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v0.47/modules/crisis/"},"Crisis")," - Halting the blockchain under certain circumstances (e.g. if an invariant is broken)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v0.47/modules/distribution/"},"Distribution")," - Fee distribution, and staking token provision distribution."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v0.47/modules/evidence/"},"Evidence")," - Evidence handling for double signing, misbehaviour, etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v0.47/modules/feegrant/"},"Feegrant")," - Grant fee allowances for executing transactions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v0.47/modules/gov/"},"Governance")," - On-chain proposals and voting."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v0.47/modules/mint/"},"Mint")," - Creation of new units of staking token."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v0.47/modules/params/"},"Params")," - Globally available parameter store."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v0.47/modules/slashing/"},"Slashing")," - Validator punishment mechanisms."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v0.47/modules/staking/"},"Staking")," - Proof-of-Stake layer for public blockchains."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v0.47/modules/upgrade/"},"Upgrade")," - Software upgrades handling and coordination."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v0.47/modules/nft/"},"NFT")," - NFT module implemented based on ",(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/architecture/adr-043-nft-module.html"},"ADR43"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v0.47/modules/consensus/"},"Consensus")," - Consensus module for modifying CometBFT's ABCI consensus params.")),(0,r.kt)("p",null,"To learn more about the process of building modules, visit the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/building-modules/intro"},"building modules reference documentation"),"."),(0,r.kt)("h2",{id:"ibc"},"IBC"),(0,r.kt)("p",null,"The IBC module for the SDK has moved to its ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go"},"own repository"),"."),(0,r.kt)("h2",{id:"cosmwasm"},"CosmWasm"),(0,r.kt)("p",null,"The CosmWasm module enables smart contracts, and has its ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm"},"own repository")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cosmwasm.com/docs"},"documentation site"),"."))}c.isMDXComponent=!0}}]);