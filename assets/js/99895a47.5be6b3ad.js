"use strict";(self.webpackChunkuniplore_website_doc=self.webpackChunkuniplore_website_doc||[]).push([[3891],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),f=u(n),d=a,b=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(b,o(o({ref:e},c),{},{components:n})):r.createElement(b,o({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},63881:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={},l=void 0,u={unversionedId:"tutorial-aistudio/evaluate/Confusion Matrix",id:"tutorial-aistudio/evaluate/Confusion Matrix",title:"Confusion Matrix",description:"\u7ec4\u4ef6\u4ecb\u7ecd",source:"@site/docs/tutorial-aistudio/evaluate/Confusion Matrix.md",sourceDirName:"tutorial-aistudio/evaluate",slug:"/tutorial-aistudio/evaluate/Confusion Matrix",permalink:"/uniplore-docs-website/docs/tutorial-aistudio/evaluate/Confusion Matrix",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-aistudio/evaluate/Confusion Matrix.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Calibration Plot",permalink:"/uniplore-docs-website/docs/tutorial-aistudio/evaluate/Calibration Plot"},next:{title:"Lift Curve",permalink:"/uniplore-docs-website/docs/tutorial-aistudio/evaluate/Lift Curve"}},c={},p=[{value:"\u7ec4\u4ef6\u4ecb\u7ecd",id:"\u7ec4\u4ef6\u4ecb\u7ecd",level:3},{value:"\u9875\u9762\u4ecb\u7ecd",id:"\u9875\u9762\u4ecb\u7ecd",level:3},{value:"\u53c2\u6570\u9009\u9879",id:"\u53c2\u6570\u9009\u9879",level:4},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:3}],f={toc:p};function d(t){var e=t.components,s=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,s,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u7ec4\u4ef6\u4ecb\u7ecd"},"\u7ec4\u4ef6\u4ecb\u7ecd"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u201c\u6df7\u6dc6\u77e9\u9635\u201d\uff08Confusion Matrix\uff09"),"\u63a7\u4ef6\u663e\u793a\u9884\u6d4b\u7c7b\u548c\u5b9e\u9645\u7c7b\u4e4b\u95f4\u7684\u6bd4\u4f8b\u3002\u4ece\u201c\u6df7\u6dc6\u77e9\u9635\u201d\uff08Confusion Matrix\uff09\u53ef\u5f97\u51fa\u9884\u6d4b\u7c7b\u548c\u5b9e\u9645\u7c7b\u4e4b\u95f4\u5b9e\u4f8b\u7684\u6570\u91cf\u6216\u6bd4\u4f8b\u3002\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u53ef\u4ee5\u5f97\u5230\u54ea\u4e9b\u5b9e\u4f8b\u88ab\u9519\u8bef\u5206\u7c7b\u4ee5\u53ca\u88ab\u5206\u6210\u4e86\u54ea\u4e00\u7c7b\u3002"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8f93\u5165\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"evr\uff1a\u5206\u7c7b\u5668\u5bf9\u6570\u636e\u7684\u6d4b\u8bd5\u7ed3\u679c"))),(0,i.kt)("li",{parentName:"ul"},"\u8f93\u51fa\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u65e0")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"\u9875\u9762\u4ecb\u7ecd"},"\u9875\u9762\u4ecb\u7ecd"),(0,i.kt)("p",null,"\u70b9\u51fb",(0,i.kt)("strong",{parentName:"p"},"\u201c\u6df7\u6dc6\u77e9\u9635\u201d\uff08Confusion Matrix\uff09"),"\u63a7\u4ef6\u67e5\u770b\u53c2\u6570\u914d\u7f6e\u9875\u9762\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{target:"_blank",href:n(59529).Z}," ",(0,i.kt)("img",{src:n(56565).Z,width:"364",height:"120"})," ")),(0,i.kt)("p",null,"\u70b9\u51fb",(0,i.kt)("strong",{parentName:"p"},"\u201c\u67e5\u770b\u7ed3\u679c\u201d"),"\u6309\u94ae\uff0c\u67e5\u770b\u66f2\u7ebf\uff1a\n",(0,i.kt)("a",{target:"_blank",href:n(81201).Z}," ",(0,i.kt)("img",{src:n(45681).Z,width:"1320",height:"337"})," ")),(0,i.kt)("h4",{id:"\u53c2\u6570\u9009\u9879"},"\u53c2\u6570\u9009\u9879"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"\u9009\u9879"),(0,i.kt)("th",{width:"650"},"\u8bf4\u660e"),(0,i.kt)("th",null,"\u6837\u4f8b\u503c")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"\u5206\u7c7b\u5668"),(0,i.kt)("td",null,"\u5f53\u8bc4\u4f30\u7ed3\u679c\u5305\u542b\u591a\u4e2a\u5b66\u4e60\u7b97\u6cd5\u65f6\uff0c\u987b\u5728\u5206\u7c7b\u5668\u4e2d\u9009\u62e9\u4e00\u4e2a\u3002"),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("td",null,"\u663e\u793a"),(0,i.kt)("td",null,"\u9009\u62e9\u5728\u77e9\u9635\u4e2d\u663e\u793a\u7684\u6570\u636e\uff1a",(0,i.kt)("br",null),"\u2003\u2003\u5b9e\u4f8b\u4e2a\u6570\uff1a\u4ee5\u6570\u5b57\u5f62\u5f0f\u663e\u793a\u6b63\u786e\u548c\u4e0d\u6b63\u786e\u7684\u5206\u7c7b\u5b9e\u4f8b",(0,i.kt)("br",null),"\u2003\u2003\u9884\u6d4b\u7684\u6982\u7387\uff1a\u663e\u793a\u5206\u7c7b\u7684\u771f\u5b9e\u7c7b\u522b\u662f\u591a\u5c11",(0,i.kt)("br",null),"\u2003\u2003\u5b9e\u9645\u7684\u6982\u7387\uff1a\u663e\u793a\u4e0e\u9884\u6d4b\u6982\u7387\u76f8\u53cd\u7684\u5173\u7cfb"),(0,i.kt)("td",null))),(0,i.kt)("h3",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),(0,i.kt)("p",null,"\u5728\u4e0b\u56fe\u6240\u793a\u7684\u6848\u4f8b\u4e2d\uff0c\u4f7f\u7528",(0,i.kt)("strong",{parentName:"p"},"\u201c\u52a0\u8f7d\u6587\u4ef6\u201d\uff08File\uff09"),"\u63a7\u4ef6\u52a0\u8f7d\u6570\u636e\uff0c\u4f7f\u7528",(0,i.kt)("strong",{parentName:"p"},"\u201cK\u8fd1\u90bb\u201d\uff08KNN\uff09"),"\u3001",(0,i.kt)("strong",{parentName:"p"},"\u201c\u51b3\u7b56\u6811\u201d\uff08Tree\uff09"),"\u3001",(0,i.kt)("strong",{parentName:"p"},"\u201c\u903b\u8f91\u56de\u5f52\u201d\uff08Logistic Regression\uff09"),"\u7b49\u6a21\u578b\u5728",(0,i.kt)("strong",{parentName:"p"},"\u201c\u8bc4\u5206\u548c\u6d4b\u8bd5\u201d\uff08Test & Score\uff09"),"\u63a7\u4ef6\u4e2d\u8fdb\u884c\u6d4b\u8bd5\u548c\u8bc4\u4f30\uff0c\u6700\u540e\u5c06\u8bc4\u4f30\u7ed3\u679c\u5728",(0,i.kt)("strong",{parentName:"p"},"\u201c\u6df7\u6dc6\u77e9\u9635\u201d\uff08Confusion Matrix\uff09"),"\u63a7\u4ef6\u4e2d\u8fdb\u884c\u5c55\u793a\u3002",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{target:"_blank",href:n(32381).Z}," ",(0,i.kt)("img",{src:n(45451).Z,width:"675",height:"383"})," ")),(0,i.kt)("p",null,"\u6848\u4f8b\u4e2d\u52a0\u8f7d titanic \u6570\u636e\u96c6\uff0c\u9488\u5bf9",(0,i.kt)("strong",{parentName:"p"},"\u201cK\u8fd1\u90bb\u201d\uff08KNN\uff09"),"\u3001",(0,i.kt)("strong",{parentName:"p"},"\u201c\u51b3\u7b56\u6811\u201d\uff08Tree\uff09"),"\u3001",(0,i.kt)("strong",{parentName:"p"},"\u201c\u903b\u8f91\u56de\u5f52\u201d\uff08Logistic Regression\uff09"),"\u7b97\u6cd5\u8fdb\u884c\u6d4b\u8bd5\u548c\u8bc4\u4f30\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u201c\u8bc4\u5206\u548c\u6d4b\u8bd5\u201d\uff08Test & Score\uff09"),"\u663e\u793a\u6bcf\u4e2a\u5206\u7c7b\u5668\u7684\u8bc4\u4f30\u7ed3\u679c\u3002\u7136\u540e\u6839\u636e",(0,i.kt)("strong",{parentName:"p"},"\u201c\u8bc4\u5206\u548c\u6d4b\u8bd5\u201d\uff08Test & Score\uff09"),"\u7684\u7ed3\u679c\u7ed8\u5236\u6df7\u6dc6\u77e9\u9635\uff0c\u4ee5\u8fdb\u4e00\u6b65\u4ea4\u53c9\u9a8c\u8bc1\u7b97\u6cd5\u7684\u9884\u6d4b\u7ed3\u679c\u3002",(0,i.kt)("strong",{parentName:"p"},"\u201c\u6df7\u6dc6\u77e9\u9635\u201d\uff08Confusion Matrix\uff09"),"\u53ef\u4ee5\u67e5\u770b\u6709\u591a\u5c11\u5b9e\u4f8b\u88ab\u9519\u8bef\u5206\u7c7b\u4ee5\u53ca\u9519\u8bef\u7684\u7c7b\u578b\uff0c\u6848\u4f8b\u4e2d\u63a7\u4ef6\u7684\u914d\u7f6e\u4ee5\u53ca\u6267\u884c\u7ed3\u679c\u5982\u4e0b\u56fe\u6240\u793a\u3002",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{target:"_blank",href:n(21281).Z}," ",(0,i.kt)("img",{src:n(57642).Z,width:"1320",height:"337"})," ")),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:n(87119).Z}," ",(0,i.kt)("img",{src:n(39849).Z,width:"1320",height:"337"})," ")),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:n(76103).Z}," ",(0,i.kt)("img",{src:n(36741).Z,width:"1280",height:"326"})," ")))}d.isMDXComponent=!0},59529:function(t,e,n){e.Z=n.p+"assets/files/param-af468cbf330e3e6c81d24588bd8cdec6.png"},81201:function(t,e,n){e.Z=n.p+"assets/files/visualization-6c8ce2c3158619e348d593652f9fa7be.png"},21281:function(t,e,n){e.Z=n.p+"assets/files/workflow-result1-6c8ce2c3158619e348d593652f9fa7be.png"},87119:function(t,e,n){e.Z=n.p+"assets/files/workflow-result2-ed42d52241d152f4c4c9ae753fa8b1a0.png"},76103:function(t,e,n){e.Z=n.p+"assets/files/workflow-result3-5a93b3e4e39293fe8c3f9c40a04b4de7.png"},32381:function(t,e,n){e.Z=n.p+"assets/files/workflow-7e3e57dc2ebdc6a316de5d7695bf793e.png"},56565:function(t,e){e.Z="data:image/png;base64,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"},45681:function(t,e,n){e.Z=n.p+"assets/images/visualization-6c8ce2c3158619e348d593652f9fa7be.png"},57642:function(t,e,n){e.Z=n.p+"assets/images/workflow-result1-6c8ce2c3158619e348d593652f9fa7be.png"},39849:function(t,e,n){e.Z=n.p+"assets/images/workflow-result2-ed42d52241d152f4c4c9ae753fa8b1a0.png"},36741:function(t,e,n){e.Z=n.p+"assets/images/workflow-result3-5a93b3e4e39293fe8c3f9c40a04b4de7.png"},45451:function(t,e,n){e.Z=n.p+"assets/images/workflow-7e3e57dc2ebdc6a316de5d7695bf793e.png"}}]);