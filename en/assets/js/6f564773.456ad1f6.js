"use strict";(self.webpackChunksweetcandy=self.webpackChunksweetcandy||[]).push([[8626],{3905:(t,n,e)=>{e.d(n,{Zo:()=>s,kt:()=>h});var r=e(7294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function o(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var c=r.createContext({}),g=function(t){var n=r.useContext(c),e=n;return t&&(e="function"==typeof t?t(n):l(l({},n),t)),e},s=function(t){var n=g(t.components);return r.createElement(c.Provider,{value:n},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(t,n){var e=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=g(e),p=a,h=d["".concat(c,".").concat(p)]||d[p]||u[p]||i;return e?r.createElement(h,l(l({ref:n},s),{},{components:e})):r.createElement(h,l({ref:n},s))}));function h(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var i=e.length,l=new Array(i);l[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=t,o[d]="string"==typeof t?t:a,l[1]=o;for(var g=2;g<i;g++)l[g]=e[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}p.displayName="MDXCreateElement"},8091:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var r=e(7462),a=(e(7294),e(3905));const i={sidebar_position:1,title:"Singleton"},l="Singleton Pattern",o={unversionedId:"flutter_dart/design_pattern/creational_pattern/singleton_pattern",id:"flutter_dart/design_pattern/creational_pattern/singleton_pattern",title:"Singleton",description:"Singleton Pattern l\xe0 g\xec?",source:"@site/docs/flutter_dart/design_pattern/creational_pattern/singleton_pattern.mdx",sourceDirName:"flutter_dart/design_pattern/creational_pattern",slug:"/flutter_dart/design_pattern/creational_pattern/singleton_pattern",permalink:"/en/docs/flutter_dart/design_pattern/creational_pattern/singleton_pattern",draft:!1,editUrl:"https://github.com/CK1412/sweetcandy/tree/main/docs/flutter_dart/design_pattern/creational_pattern/singleton_pattern.mdx",tags:[],version:"current",lastUpdatedBy:"canhth",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Singleton"},sidebar:"flutterDart",previous:{title:"Creational Pattern",permalink:"/en/docs/category/creational-pattern"},next:{title:"Factory Method",permalink:"/en/docs/flutter_dart/design_pattern/creational_pattern/factory_method_pattern"}},c={},g=[{value:"Singleton Pattern l\xe0 g\xec?",id:"singleton-pattern-l\xe0-g\xec",level:2},{value:"\u1ee8ng d\u1ee5ng",id:"\u1ee9ng-d\u1ee5ng",level:2},{value:"Code tri\u1ec3n khai",id:"code-tri\u1ec3n-khai",level:2},{value:"Single-threaded singleton",id:"single-threaded-singleton",level:3},{value:"Multi-threaded singleton",id:"multi-threaded-singleton",level:3},{value:"T\xe0i li\u1ec7u tham kh\u1ea3o",id:"t\xe0i-li\u1ec7u-tham-kh\u1ea3o",level:2}],s={toc:g},d="wrapper";function u(t){let{components:n,...e}=t;return(0,a.kt)(d,(0,r.Z)({},s,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"singleton-pattern"},"Singleton Pattern"),(0,a.kt)("h2",{id:"singleton-pattern-l\xe0-g\xec"},"Singleton Pattern l\xe0 g\xec?"),(0,a.kt)("p",null,"Single Pattern l\xe0 m\u1ed9t design pattern m\xe0:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0110\u1ea3m b\u1ea3o m\u1ed7i class ch\u1ec9 c\xf3 m\u1ed9t th\u1ec3 hi\u1ec7n (",(0,a.kt)("strong",{parentName:"li"},"instance"),") duy nh\u1ea5t."),(0,a.kt)("li",{parentName:"ul"},"Cung c\u1ea5p m\u1ed9t \u0111i\u1ec3m truy c\u1eadp to\xe0n c\u1ea7u cho instance \u0111\xf3."),(0,a.kt)("li",{parentName:"ul"},"Ch\u1ec9 kh\u1edfi t\u1ea1o class khi \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng l\u1ea7n \u0111\u1ea7u ti\xean. ")),(0,a.kt)("h2",{id:"\u1ee9ng-d\u1ee5ng"},"\u1ee8ng d\u1ee5ng"),(0,a.kt)("p",null,"Chia s\u1ebb d\u1eef li\u1ec7u chung trong 1 class. V\xed d\u1ee5: m\u1ed9t database duy nh\u1ea5t, m\u1ed9t file, ..."),(0,a.kt)("h2",{id:"code-tri\u1ec3n-khai"},"Code tri\u1ec3n khai"),(0,a.kt)("h3",{id:"single-threaded-singleton"},"Single-threaded singleton"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart",metastring:'title="db_manager.dart"',title:'"db_manager.dart"'},"import 'dart:isolate';\n\nclass DbManager {\n  /// [4.] \u0110\u1eb7t h\xe0m kh\u1edfi t\u1ea1o c\u1ee7a class \u1edf ch\u1ebf \u0111\u1ed9 private, \u0111\u1ec3 ch\u1ec9 c\xf3 th\u1ec3 g\u1ecdi h\xe0m t\u1ea1o \u1edf b\u01b0\u1edbc 2.\n  DbManager._();\n\n  /// [1.] T\u1ea1o 1 tr\u01b0\u1eddng static l\u01b0u tr\u1eef phi\xean b\u1ea3n Singleton.\n  static DbManager? _instance;\n\n  /// [2.] Khai b\xe1o 1 ph\u01b0\u01a1ng th\u1ee9c kh\u1edfi t\u1ea1o \u0111\u1ec3 l\u1ea5y phi\xean b\u1ea3n Singleton.\n  factory DbManager() {\n    /// [3.] Tri\u1ec3n khai 1 kh\u1edfi t\u1ea1o Lazy v\xe0 lu\xf4n tr\u1ea3 v\u1ec1 phi\xean b\u1ea3n \u0111\xe3 l\u01b0u tr\u1eef.\n    return _instance ??= DbManager._();\n  }\n\n  /// M\u1ed9t d\u1ea1ng kh\u1edfi t\u1ea1o kh\xe1c c\u1ee7a b\u01b0\u1edbc 2.\n  static DbManager get instance {\n    return _instance ??= DbManager._();\n  }\n}\n\nvoid main() async {\n  /// For Single-threaded\n  ///\n  final DbManager db1 = DbManager();\n  final DbManager db2 = DbManager();\n\n  // highlight-next-line\n  assert(db1 == db2);\n\n  /// For Multi-threaded\n  ///\n  final DbManager db3 = DbManager();\n  final DbManager db4 = await Isolate.run(() => DbManager());\n\n  // highlight-next-line\n  assert(db3 != db4);\n}\n")),(0,a.kt)("h3",{id:"multi-threaded-singleton"},"Multi-threaded singleton"),(0,a.kt)("p",null,"Trong c\xe1c ng\xf4n ng\u1eef \u0111a lu\u1ed3ng, ch\xfang ta c\u1ea7n c\u1ea9n th\u1eadn khi truy c\u1eadp c\xe1c Singleton tr\xean c\xe1c lu\u1ed3ng kh\xe1c nhau\nv\xe0 m\u1ed9t s\u1ed1 c\u01a1 ch\u1ebf \u0111\u1ed3ng b\u1ed9 h\xf3a c\xf3 th\u1ec3 c\u1ea7n thi\u1ebft n\u1ebfu ch\xfang chia s\u1ebb d\u1eef li\u1ec7u c\xf3 th\u1ec3 thay \u0111\u1ed5i."),(0,a.kt)("p",null,"Class ",(0,a.kt)("inlineCode",{parentName:"p"},"DbManager")," \u1edf tr\xean ho\u1ea1t \u0111\u1ed9ng kh\xf4ng \u0111\xfang trong m\xf4i tr\u01b0\u1eddng \u0111a lu\u1ed3ng.\nTrong m\xf4i tr\u01b0\u1eddng \u0111a lu\u1ed3ng c\xf3 th\u1ec3 g\u1ecdi ph\u01b0\u01a1ng th\u1ee9c kh\u1edfi t\u1ea1o \u0111\u1ed3ng th\u1eddi v\xe0 nh\u1eadn \u0111\u01b0\u1ee3c m\u1ed9t s\u1ed1 phi\xean b\u1ea3n c\u1ee7a class ",(0,a.kt)("inlineCode",{parentName:"p"},"DbManager"),"."),(0,a.kt)("p",null,"M\u1eb7c d\xf9 Dart c\xf3 h\u1ed7 tr\u1ee3 \u0111a lu\u1ed3ng, tuy nhi\xean b\u1ea1n kh\xf4ng c\u1ea7n qu\xe1 lo l\u1eafng v\xec t\u1ea5t c\u1ea3 m\xe3 trong \u1ee9ng d\u1ee5ng Flutter \u0111\u1ec1u thu\u1ed9c v\u1ec1 lu\u1ed3ng ch\xednh (",(0,a.kt)("strong",{parentName:"p"},"main isolate"),")."),(0,a.kt)("h2",{id:"t\xe0i-li\u1ec7u-tham-kh\u1ea3o"},"T\xe0i li\u1ec7u tham kh\u1ea3o"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://refactoring.guru/design-patterns/singleton"},"https://refactoring.guru/design-patterns/singleton"))))}u.isMDXComponent=!0}}]);