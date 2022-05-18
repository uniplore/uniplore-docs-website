"use strict";(self.webpackChunkuniplore_website_doc=self.webpackChunkuniplore_website_doc||[]).push([[3709],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=s(r),d=i,k=f["".concat(o,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=f;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:i,l[1]=u;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},23883:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),l=["components"],u={},o=void 0,s={unversionedId:"tutorial-aistudio/time-series/Difference",id:"tutorial-aistudio/time-series/Difference",title:"Difference",description:"\u7ec4\u4ef6\u4ecb\u7ecd",source:"@site/docs/tutorial-aistudio/time-series/Difference.md",sourceDirName:"tutorial-aistudio/time-series",slug:"/tutorial-aistudio/time-series/Difference",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/time-series/Difference",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-aistudio/time-series/Difference.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"As Timeseries",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/time-series/As Timeseries"},next:{title:"Granger Causality",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/time-series/Granger Causality"}},c={},p=[{value:"\u7ec4\u4ef6\u4ecb\u7ecd",id:"\u7ec4\u4ef6\u4ecb\u7ecd",level:3},{value:"\u9875\u9762\u4ecb\u7ecd",id:"\u9875\u9762\u4ecb\u7ecd",level:3},{value:"\u53c2\u6570\u9009\u9879",id:"\u53c2\u6570\u9009\u9879",level:4},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:3}],f={toc:p};function d(e){var t=e.components,u=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},f,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u7ec4\u4ef6\u4ecb\u7ecd"},"\u7ec4\u4ef6\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u201c\u5dee\u5206\u201d\uff08Difference\uff09"),"\u63a7\u4ef6\u6839\u636e\u8f93\u5165\u6570\u636e\u96c6\uff0c\u4ee5\u53ca\u914d\u7f6e\u53c2\u6570\u8fdb\u884c\u6784\u5efaVAR\u65f6\u5e8f\u9884\u6d4b\u6a21\u578b\u3002"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f93\u5165\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"tsd\uff1a\u65f6\u5e8f\u6570\u636e"))),(0,a.kt)("li",{parentName:"ul"},"\u8f93\u51fa\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"tsd\uff1a\u5904\u7406\u540e\u7684\u6570\u636e")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u9875\u9762\u4ecb\u7ecd"},"\u9875\u9762\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u70b9\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u201c\u5dee\u5206\u201d\uff08Difference\uff09"),"\u63a7\u4ef6\u67e5\u770b\u53c2\u6570\u914d\u7f6e\u9875\u9762\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{target:"_blank",href:r(32631).Z}," ",(0,a.kt)("img",{src:r(13305).Z,width:"359",height:"320"})," ")),(0,a.kt)("h4",{id:"\u53c2\u6570\u9009\u9879"},"\u53c2\u6570\u9009\u9879"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u9009\u9879"),(0,a.kt)("th",{width:"650"},"\u8bf4\u660e"),(0,a.kt)("th",null,"\u6837\u4f8b\u503c")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u8fd0\u7b97\u6307\u6807"),(0,a.kt)("td",null,"\u5dee\u5206\u8fd0\u7b97\u6307\u6807\uff1a",(0,a.kt)("br",null),"\u2003\u2003Difference",(0,a.kt)("br",null),"\u2003\u2003Quotient",(0,a.kt)("br",null),"\u2003\u2003Percentage"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u5dee\u5e8f"),(0,a.kt)("td",null,"\u9009\u62e9\u4e00\u9636\u6216\u4e8c\u9636\u79bb\u6563\u5dee"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u4f4d\u79fb"),(0,a.kt)("td",null,"\u6c42\u5dee\u524d\u7684\u79fb\u4f4d",(0,a.kt)("br",null),"\u503c\u7b49\u4e8e1\u8868\u793a\u79bb\u6563\u5dee\u5206"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u53cd\u8f6c\u5dee\u5206\u65b9\u5411"),(0,a.kt)("td",null,"\u53cd\u8f6c\u5dee\u5206\u65b9\u5411"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u64cd\u4f5c\u7684\u5c5e\u6027"),(0,a.kt)("td",null,"\u9009\u62e9\u8fdb\u884c\u64cd\u4f5c\u7684\u5c5e\u6027"),(0,a.kt)("td",null))),(0,a.kt)("h3",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),(0,a.kt)("p",null,"\u5728\u4e0b\u56fe\u6240\u793a\u7684\u6848\u4f8b\u4e2d\uff0c\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u201c\u52a0\u8f7d\u6587\u4ef6\u201d\uff08File\uff09"),"\u63a7\u4ef6\u52a0\u8f7d\u6570\u636e\uff0c\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u201c\u67e5\u770b\u6570\u636e\u201d\uff08Data Table\uff09"),"\u67e5\u770b\u6570\u636e\u96c6\uff0c\u540c\u65f6\u8fde\u63a5",(0,a.kt)("strong",{parentName:"p"},"\u201c\u5dee\u5206\u201d\uff08Difference\uff09"),"\u63a7\u4ef6\u5bf9\u6570\u636e\u8fdb\u884c\u5dee\u5206\u5904\u7406\uff0c\u4e4b\u540e\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u201c\u67e5\u770b\u6570\u636e\u201d\uff08Data Table\uff09"),"\u63a7\u4ef6\u67e5\u770b\u5904\u7406\u540e\u7684\u6570\u636e\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{target:"_blank",href:r(60830).Z}," ",(0,a.kt)("img",{src:r(62622).Z,width:"405",height:"239"})," ")),(0,a.kt)("p",null,"\u6848\u4f8b\u4e2d\u52a0\u8f7d airpassengers \u6570\u636e\u96c6\uff0c\u5176\u4f59\u63a7\u4ef6\u4f7f\u7528\u9ed8\u8ba4\u53c2\u6570\uff0c\u6848\u4f8b\u4e2d\u63a7\u4ef6\u7684\u914d\u7f6e\u4ee5\u53ca\u6267\u884c\u7ed3\u679c\u5982\u4e0b\u56fe\u6240\u793a\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{target:"_blank",href:r(67896).Z}," ",(0,a.kt)("img",{src:r(81722).Z,width:"1472",height:"1130"})," ")))}d.isMDXComponent=!0},32631:function(e,t,r){t.Z=r.p+"assets/files/param-4a1a28df47240b267a1cd6c2b595ea38.png"},67896:function(e,t,r){t.Z=r.p+"assets/files/workflow-result-8273405897a316f67e1509522d2d00fd.png"},60830:function(e,t,r){t.Z=r.p+"assets/files/workflow-34d685ac04a45fd421e08657745a3381.png"},13305:function(e,t,r){t.Z=r.p+"assets/images/param-4a1a28df47240b267a1cd6c2b595ea38.png"},81722:function(e,t,r){t.Z=r.p+"assets/images/workflow-result-8273405897a316f67e1509522d2d00fd.png"},62622:function(e,t,r){t.Z=r.p+"assets/images/workflow-34d685ac04a45fd421e08657745a3381.png"}}]);