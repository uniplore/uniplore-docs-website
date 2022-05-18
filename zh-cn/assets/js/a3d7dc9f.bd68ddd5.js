"use strict";(self.webpackChunkuniplore_website_doc=self.webpackChunkuniplore_website_doc||[]).push([[6975],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return f}});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=i.createContext({}),u=function(t){var e=i.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=u(t.components);return i.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=u(n),f=r,b=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?i.createElement(b,l(l({ref:e},s),{},{components:n})):i.createElement(b,l({ref:e},s))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95550:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),l=["components"],o={},c=void 0,u={unversionedId:"tutorial-aistudio/text-mining/Topic Modelling",id:"tutorial-aistudio/text-mining/Topic Modelling",title:"Topic Modelling",description:"\u7ec4\u4ef6\u4ecb\u7ecd",source:"@site/docs/tutorial-aistudio/text-mining/Topic Modelling.md",sourceDirName:"tutorial-aistudio/text-mining",slug:"/tutorial-aistudio/text-mining/Topic Modelling",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/text-mining/Topic Modelling",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-aistudio/text-mining/Topic Modelling.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Similarity Hashing",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/text-mining/Similarity Hashing"},next:{title:"Word Cloud",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/text-mining/Word Cloud"}},s={},p=[{value:"\u7ec4\u4ef6\u4ecb\u7ecd",id:"\u7ec4\u4ef6\u4ecb\u7ecd",level:3},{value:"\u9875\u9762\u4ecb\u7ecd",id:"\u9875\u9762\u4ecb\u7ecd",level:3},{value:"\u53c2\u6570\u9009\u9879",id:"\u53c2\u6570\u9009\u9879",level:4},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:3}],d={toc:p};function f(t){var e=t.components,o=(0,r.Z)(t,l);return(0,a.kt)("wrapper",(0,i.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u7ec4\u4ef6\u4ecb\u7ecd"},"\u7ec4\u4ef6\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u201c\u4e3b\u9898\u6a21\u578b\uff08Topic Modelling\uff09\u201d"),"\u63a7\u4ef6\u7528\u4e8e\u5bf9\u8f93\u5165\u7684\u6587\u672c\u6570\u636e\u96c6\u8fdb\u884c\u60c5\u611f\u5206\u6790\u3002"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f93\u5165\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"cor\uff1a\u6587\u672c\u6570\u636e\u96c6"))),(0,a.kt)("li",{parentName:"ul"},"\u8f93\u51fa\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"cor\uff1a\u6587\u672c\u6570\u636e\u96c6"),(0,a.kt)("li",{parentName:"ul"},"selTop\uff1a\u9009\u62e9\u4e3b\u9898\u7684\u5355\u8bcd\u6743\u91cd"),(0,a.kt)("li",{parentName:"ul"},"allTop\uff1a\u6240\u6709\u5173\u952e\u5b57\u7684\u6743\u91cd")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u9875\u9762\u4ecb\u7ecd"},"\u9875\u9762\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u70b9\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u201c\u4e3b\u9898\u6a21\u578b\uff08Topic Modelling\uff09\u201d"),"\u63a7\u4ef6\u67e5\u770b\u53c2\u6570\u914d\u7f6e\u9875\u9762\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{target:"_blank",href:n(72488).Z}," ",(0,a.kt)("img",{src:n(96559).Z,width:"364",height:"138"})," ")),(0,a.kt)("p",null,"\u70b9\u51fb\u201c\u67e5\u770b\u6570\u636e\u201d\u6309\u94ae\uff0c\u8fdb\u884c\u6587\u672c\u641c\u7d22\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{target:"_blank",href:n(36918).Z}," ",(0,a.kt)("img",{src:n(69247).Z,width:"1103",height:"399"})," ")),(0,a.kt)("h4",{id:"\u53c2\u6570\u9009\u9879"},"\u53c2\u6570\u9009\u9879"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u9009\u9879"),(0,a.kt)("th",{width:"650"},"\u8bf4\u660e"),(0,a.kt)("th",null,"\u6837\u4f8b\u503c")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u57fa\u672c\u4fe1\u606f"),(0,a.kt)("td",null,"\u6a21\u578b\uff1a ",(0,a.kt)("br",null),"\u2003\u2003\u9690\u5f0f\u8bed\u4e49\u7d22\u5f15 ",(0,a.kt)("br",null),"\u2003\u2003\u6f5c\u5728\u72c4\u5229\u514b\u96f7\u5206\u5e03"),(0,a.kt)("td",null))),(0,a.kt)("h3",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),(0,a.kt)("p",null,"\u5728\u4e0b\u56fe\u6240\u793a\u7684\u6848\u4f8b\u4e2d\uff0c\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u201c\u52a0\u8f7d\u8bed\u6599\u5e93\uff08Corpus\uff09\u201d"),"\u63a7\u4ef6\u52a0\u8f7d\u6587\u672c\u6570\u636e\u96c6\uff0c\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u201c\u8bed\u6599\u5e93\u67e5\u770b\u5668\uff08Corpus Viewer\uff09\u201d"),"\u67e5\u770b\u6587\u672c\u6570\u636e\uff0c\u540c\u65f6\u8fde\u63a5",(0,a.kt)("strong",{parentName:"p"},"\u201c\u4e3b\u9898\u6a21\u578b\uff08Topic Modelling\uff09\u201d"),"\u63a7\u4ef6\u8fdb\u5bf9\u6570\u636e\u8fdb\u884c\u5904\u7406\uff0c\u4e4b\u540e\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u201c\u8bed\u6599\u5e93\u67e5\u770b\u5668\uff08Corpus Viewer\uff09\u201d"),"\u63a7\u4ef6\u67e5\u770b\u5904\u7406\u540e\u7684\u6570\u636e\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{target:"_blank",href:n(61796).Z}," ",(0,a.kt)("img",{src:n(43622).Z,width:"401",height:"263"})," ")),(0,a.kt)("p",null,"\u6848\u4f8b\u4e2d\u52a0\u8f7d\u201candersen\u201d\u6570\u636e\u96c6\uff0c\u53c2\u6570\u4f7f\u7528\u9ed8\u8ba4\u53c2\u6570\uff0c\u6848\u4f8b\u4e2d\u63a7\u4ef6\u7684\u914d\u7f6e\u4ee5\u53ca\u6267\u884c\u7ed3\u679c\u5982\u4e0b\u56fe\u6240\u793a\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{target:"_blank",href:n(34512).Z}," ",(0,a.kt)("img",{src:n(41631).Z,width:"1061",height:"1721"})," ")))}f.isMDXComponent=!0},36918:function(t,e,n){e.Z=n.p+"assets/files/interaction-cdac3d28a284209e541bd3151ad9b9a7.png"},72488:function(t,e,n){e.Z=n.p+"assets/files/param-5fbb5c8e9f4a37ed4e39184fba41cacc.png"},34512:function(t,e,n){e.Z=n.p+"assets/files/workflow-result-58cb7a1343d9bb5afe153a6999618cac.png"},61796:function(t,e,n){e.Z=n.p+"assets/files/workflow-452453c68338a3c73daef7c40b4794b1.png"},69247:function(t,e,n){e.Z=n.p+"assets/images/interaction-cdac3d28a284209e541bd3151ad9b9a7.png"},96559:function(t,e){e.Z="data:image/png;base64,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"},41631:function(t,e,n){e.Z=n.p+"assets/images/workflow-result-58cb7a1343d9bb5afe153a6999618cac.png"},43622:function(t,e,n){e.Z=n.p+"assets/images/workflow-452453c68338a3c73daef7c40b4794b1.png"}}]);