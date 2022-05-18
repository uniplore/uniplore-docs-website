"use strict";(self.webpackChunkuniplore_website_doc=self.webpackChunkuniplore_website_doc||[]).push([[7767],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=i.createContext({}),c=function(t){var e=i.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=c(t.components);return i.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},f=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,o=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),f=c(n),d=r,m=f["".concat(o,".").concat(d)]||f[d]||p[d]||a;return n?i.createElement(m,l(l({ref:e},s),{},{components:n})):i.createElement(m,l({ref:e},s))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,l=new Array(a);l[0]=f;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u.mdxType="string"==typeof t?t:r,l[1]=u;for(var c=2;c<a;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},11161:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),l=["components"],u={},o=void 0,c={unversionedId:"tutorial-aistudio/feature-engineering/Change Domain",id:"tutorial-aistudio/feature-engineering/Change Domain",title:"Change Domain",description:"\u7ec4\u4ef6\u4ecb\u7ecd",source:"@site/docs/tutorial-aistudio/feature-engineering/Change Domain.md",sourceDirName:"tutorial-aistudio/feature-engineering",slug:"/tutorial-aistudio/feature-engineering/Change Domain",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/feature-engineering/Change Domain",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-aistudio/feature-engineering/Change Domain.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Unique",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/preprocess/Unique"},next:{title:"Continuize",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/feature-engineering/Continuize"}},s={},p=[{value:"\u7ec4\u4ef6\u4ecb\u7ecd",id:"\u7ec4\u4ef6\u4ecb\u7ecd",level:3},{value:"\u9875\u9762\u4ecb\u7ecd",id:"\u9875\u9762\u4ecb\u7ecd",level:3},{value:"\u53c2\u6570\u9009\u9879",id:"\u53c2\u6570\u9009\u9879",level:4},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:3}],f={toc:p};function d(t){var e=t.components,u=(0,r.Z)(t,l);return(0,a.kt)("wrapper",(0,i.Z)({},f,u,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u7ec4\u4ef6\u4ecb\u7ecd"},"\u7ec4\u4ef6\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u201c\u7f16\u8f91\u5c5e\u6027\u7c7b\u578b\u201d\uff08Change Domain\uff09"),"\u63a7\u4ef6\u7528\u4e8e\u7528\u6237\u4fee\u6539\u5c5e\u6027\u7c7b\u578b\u3002"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f93\u5165\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"data\uff1a\u6570\u636e\u96c6"))),(0,a.kt)("li",{parentName:"ul"},"\u8f93\u51fa\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"data\uff1a\u5904\u7406\u540e\u7684\u6570\u636e\u96c6")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u9875\u9762\u4ecb\u7ecd"},"\u9875\u9762\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u70b9\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u201c\u7f16\u8f91\u5c5e\u6027\u7c7b\u578b\u201d\uff08Change Domain\uff09"),"\u63a7\u4ef6\u67e5\u770b\u53c2\u6570\u914d\u7f6e\u9875\u9762\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{target:"_blank",href:n(73589).Z}," ",(0,a.kt)("img",{src:n(35545).Z,width:"365",height:"135"})," ")),(0,a.kt)("p",null,"\u70b9\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u201c\u6253\u5f00\u63a7\u4ef6\u914d\u7f6e\u201d"),"\u6309\u94ae\uff0c\u5f39\u51fa\u6761\u4ef6\u914d\u7f6e\u9875\u9762\uff0c\u6dfb\u52a0\u8fc7\u6ee4\u6761\u4ef6\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{target:"_blank",href:n(70014).Z}," ",(0,a.kt)("img",{src:n(61457).Z,width:"803",height:"813"})," ")),(0,a.kt)("h4",{id:"\u53c2\u6570\u9009\u9879"},"\u53c2\u6570\u9009\u9879"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u9009\u9879"),(0,a.kt)("th",{width:"650"},"\u8bf4\u660e"),(0,a.kt)("th",null,"\u6837\u4f8b\u503c")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u6587\u672c\u7c7b\u578b"),(0,a.kt)("td",null,"\u6587\u672c\u7c7b\u578b\uff08Text\uff09\uff0c\u8f6c\u6362\u4e3a\u6587\u672c\u7c7b\u578b\u540e\uff0c\u5c5e\u6027\u53d8\u4e3a\u63cf\u8ff0\u5c5e\u6027"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u79bb\u6563\u7c7b\u578b"),(0,a.kt)("td",null,"\u79bb\u6563\u7c7b\u578b\uff08Categorical\uff09"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u6570\u503c\u7c7b\u578b"),(0,a.kt)("td",null,"\u6570\u503c\u7c7b\u578b\uff08Numeric\uff09"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u65e5\u671f\u7c7b\u578b"),(0,a.kt)("td",null,"\u65e5\u671f\u7c7b\u578b\uff08Datetime\uff09"),(0,a.kt)("td",null))),(0,a.kt)("h3",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),(0,a.kt)("p",null,"\u5728\u4e0b\u56fe\u6240\u793a\u7684\u6848\u4f8b\u4e2d\uff0c\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u201c\u52a0\u8f7d\u6587\u4ef6\u201d\uff08File\uff09"),"\u63a7\u4ef6\u52a0\u8f7d\u6570\u636e\uff0c\u901a\u8fc7",(0,a.kt)("strong",{parentName:"p"},"\u201c\u6570\u636e\u4fe1\u606f\u201d\uff08Data Info\uff09"),"\u63a7\u4ef6\u67e5\u770b\u52a0\u8f7d\u6570\u636e\u7684\u4fe1\u606f\uff0c\u540c\u65f6\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u201c\u7f16\u8f91\u5c5e\u6027\u7c7b\u578b\u201d\uff08Change Domain\uff09"),"\u63a7\u4ef6\u4fee\u6539\u6570\u636e\u96c6\u7684\u5c5e\u6027\u7c7b\u578b\u8bbe\u7f6e\uff0c\u4e4b\u540e\u901a\u8fc7",(0,a.kt)("strong",{parentName:"p"},"\u201c\u6570\u636e\u4fe1\u606f\u201d\uff08Data Info\uff09"),"\u63a7\u4ef6\u67e5\u770b\u5904\u7406\u540e\u7684\u6570\u636e\u96c6\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{target:"_blank",href:n(19671).Z}," ",(0,a.kt)("img",{src:n(59095).Z,width:"427",height:"267"})," ")),(0,a.kt)("p",null,"\u6848\u4f8b\u4e2d\u52a0\u8f7d iris \u6570\u636e\u96c6\uff0c\u8bbe\u7f6e\u3010iris\u3011\u4e3a\u6587\u672c\u7c7b\u578b\uff0c\u8bbe\u7f6e\u3010sepal length\u3011\u548c\u3010sepal width\u3011\u8bbe\u7f6e\u4e3a\u79bb\u6563\u7c7b\u578b\u3002\u6848\u4f8b\u4e2d\u63a7\u4ef6\u7684\u914d\u7f6e\u4ee5\u53ca\u6267\u884c\u7ed3\u679c\u5982\u4e0b\u56fe\u6240\u793a\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{target:"_blank",href:n(80810).Z}," ",(0,a.kt)("img",{src:n(9394).Z,width:"1538",height:"815"})," ")))}d.isMDXComponent=!0},70014:function(t,e,n){e.Z=n.p+"assets/files/interaction-7a97aeac84e62f20b7c82f7c298efee6.png"},73589:function(t,e,n){e.Z=n.p+"assets/files/param-5ba2e1dc5d27cbac0ee8377b36c1dd89.png"},80810:function(t,e,n){e.Z=n.p+"assets/files/workflow-result-ff2af28c73da9001338fc1c0c1f4084a.png"},19671:function(t,e,n){e.Z=n.p+"assets/files/workflow-f97f8dd007912b1fcd3c42a4814c845a.png"},61457:function(t,e,n){e.Z=n.p+"assets/images/interaction-7a97aeac84e62f20b7c82f7c298efee6.png"},35545:function(t,e){e.Z="data:image/png;base64,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"},9394:function(t,e,n){e.Z=n.p+"assets/images/workflow-result-ff2af28c73da9001338fc1c0c1f4084a.png"},59095:function(t,e,n){e.Z=n.p+"assets/images/workflow-f97f8dd007912b1fcd3c42a4814c845a.png"}}]);