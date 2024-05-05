"use strict";(self.webpackChunksweetcandy=self.webpackChunksweetcandy||[]).push([[8626],{39:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=e(5893),i=e(1151);const r={sidebar_position:1,title:"Singleton"},l="Singleton Pattern",s={id:"flutter_dart/design_pattern/creational_pattern/singleton_pattern",title:"Singleton",description:"Singleton Pattern l\xe0 g\xec?",source:"@site/docs/flutter_dart/design_pattern/creational_pattern/singleton_pattern.mdx",sourceDirName:"flutter_dart/design_pattern/creational_pattern",slug:"/flutter_dart/design_pattern/creational_pattern/singleton_pattern",permalink:"/sweetcandy/en/docs/flutter_dart/design_pattern/creational_pattern/singleton_pattern",draft:!1,unlisted:!1,editUrl:"https://github.com/CK1412/sweetcandy/tree/main/docs/flutter_dart/design_pattern/creational_pattern/singleton_pattern.mdx",tags:[],version:"current",lastUpdatedBy:"canhth",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Singleton"},sidebar:"flutterDart",previous:{title:"Creational Pattern",permalink:"/sweetcandy/en/docs/category/creational-pattern"},next:{title:"Factory Method",permalink:"/sweetcandy/en/docs/flutter_dart/design_pattern/creational_pattern/factory_method_pattern"}},c={},d=[{value:"Singleton Pattern l\xe0 g\xec?",id:"singleton-pattern-l\xe0-g\xec",level:2},{value:"\u1ee8ng d\u1ee5ng",id:"\u1ee9ng-d\u1ee5ng",level:2},{value:"Code tri\u1ec3n khai",id:"code-tri\u1ec3n-khai",level:2},{value:"Single-threaded singleton",id:"single-threaded-singleton",level:3},{value:"Multi-threaded singleton",id:"multi-threaded-singleton",level:3},{value:"T\xe0i li\u1ec7u tham kh\u1ea3o",id:"t\xe0i-li\u1ec7u-tham-kh\u1ea3o",level:2}];function o(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"singleton-pattern",children:"Singleton Pattern"}),"\n",(0,a.jsx)(t.h2,{id:"singleton-pattern-l\xe0-g\xec",children:"Singleton Pattern l\xe0 g\xec?"}),"\n",(0,a.jsx)(t.p,{children:"Single Pattern l\xe0 m\u1ed9t design pattern m\xe0:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\u0110\u1ea3m b\u1ea3o m\u1ed7i class ch\u1ec9 c\xf3 m\u1ed9t th\u1ec3 hi\u1ec7n (",(0,a.jsx)(t.strong,{children:"instance"}),") duy nh\u1ea5t."]}),"\n",(0,a.jsx)(t.li,{children:"Cung c\u1ea5p m\u1ed9t \u0111i\u1ec3m truy c\u1eadp to\xe0n c\u1ea7u cho instance \u0111\xf3."}),"\n",(0,a.jsx)(t.li,{children:"Ch\u1ec9 kh\u1edfi t\u1ea1o class khi \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng l\u1ea7n \u0111\u1ea7u ti\xean."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"\u1ee9ng-d\u1ee5ng",children:"\u1ee8ng d\u1ee5ng"}),"\n",(0,a.jsx)(t.p,{children:"Chia s\u1ebb d\u1eef li\u1ec7u chung trong 1 class. V\xed d\u1ee5: m\u1ed9t database duy nh\u1ea5t, m\u1ed9t file, ..."}),"\n",(0,a.jsx)(t.h2,{id:"code-tri\u1ec3n-khai",children:"Code tri\u1ec3n khai"}),"\n",(0,a.jsx)(t.h3,{id:"single-threaded-singleton",children:"Single-threaded singleton"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",metastring:'title="db_manager.dart"',children:"import 'dart:isolate';\n\nclass DbManager {\n  /// [4.] \u0110\u1eb7t h\xe0m kh\u1edfi t\u1ea1o c\u1ee7a class \u1edf ch\u1ebf \u0111\u1ed9 private, \u0111\u1ec3 ch\u1ec9 c\xf3 th\u1ec3 g\u1ecdi h\xe0m t\u1ea1o \u1edf b\u01b0\u1edbc 2.\n  DbManager._();\n\n  /// [1.] T\u1ea1o 1 tr\u01b0\u1eddng static l\u01b0u tr\u1eef phi\xean b\u1ea3n Singleton.\n  static DbManager? _instance;\n\n  /// [2.] Khai b\xe1o 1 ph\u01b0\u01a1ng th\u1ee9c kh\u1edfi t\u1ea1o \u0111\u1ec3 l\u1ea5y phi\xean b\u1ea3n Singleton.\n  factory DbManager() {\n    /// [3.] Tri\u1ec3n khai 1 kh\u1edfi t\u1ea1o Lazy v\xe0 lu\xf4n tr\u1ea3 v\u1ec1 phi\xean b\u1ea3n \u0111\xe3 l\u01b0u tr\u1eef.\n    return _instance ??= DbManager._();\n  }\n\n  /// M\u1ed9t d\u1ea1ng kh\u1edfi t\u1ea1o kh\xe1c c\u1ee7a b\u01b0\u1edbc 2.\n  static DbManager get instance {\n    return _instance ??= DbManager._();\n  }\n}\n\nvoid main() async {\n  /// For Single-threaded\n  ///\n  final DbManager db1 = DbManager();\n  final DbManager db2 = DbManager();\n\n  // highlight-next-line\n  assert(db1 == db2);\n\n  /// For Multi-threaded\n  ///\n  final DbManager db3 = DbManager();\n  final DbManager db4 = await Isolate.run(() => DbManager());\n\n  // highlight-next-line\n  assert(db3 != db4);\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"multi-threaded-singleton",children:"Multi-threaded singleton"}),"\n",(0,a.jsx)(t.p,{children:"Trong c\xe1c ng\xf4n ng\u1eef \u0111a lu\u1ed3ng, ch\xfang ta c\u1ea7n c\u1ea9n th\u1eadn khi truy c\u1eadp c\xe1c Singleton tr\xean c\xe1c lu\u1ed3ng kh\xe1c nhau\nv\xe0 m\u1ed9t s\u1ed1 c\u01a1 ch\u1ebf \u0111\u1ed3ng b\u1ed9 h\xf3a c\xf3 th\u1ec3 c\u1ea7n thi\u1ebft n\u1ebfu ch\xfang chia s\u1ebb d\u1eef li\u1ec7u c\xf3 th\u1ec3 thay \u0111\u1ed5i."}),"\n",(0,a.jsxs)(t.p,{children:["Class ",(0,a.jsx)(t.code,{children:"DbManager"})," \u1edf tr\xean ho\u1ea1t \u0111\u1ed9ng kh\xf4ng \u0111\xfang trong m\xf4i tr\u01b0\u1eddng \u0111a lu\u1ed3ng.\nTrong m\xf4i tr\u01b0\u1eddng \u0111a lu\u1ed3ng c\xf3 th\u1ec3 g\u1ecdi ph\u01b0\u01a1ng th\u1ee9c kh\u1edfi t\u1ea1o \u0111\u1ed3ng th\u1eddi v\xe0 nh\u1eadn \u0111\u01b0\u1ee3c m\u1ed9t s\u1ed1 phi\xean b\u1ea3n c\u1ee7a class ",(0,a.jsx)(t.code,{children:"DbManager"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["M\u1eb7c d\xf9 Dart c\xf3 h\u1ed7 tr\u1ee3 \u0111a lu\u1ed3ng, tuy nhi\xean b\u1ea1n kh\xf4ng c\u1ea7n qu\xe1 lo l\u1eafng v\xec t\u1ea5t c\u1ea3 m\xe3 trong \u1ee9ng d\u1ee5ng Flutter \u0111\u1ec1u thu\u1ed9c v\u1ec1 lu\u1ed3ng ch\xednh (",(0,a.jsx)(t.strong,{children:"main isolate"}),")."]}),"\n",(0,a.jsx)(t.h2,{id:"t\xe0i-li\u1ec7u-tham-kh\u1ea3o",children:"T\xe0i li\u1ec7u tham kh\u1ea3o"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://refactoring.guru/design-patterns/singleton",children:"https://refactoring.guru/design-patterns/singleton"})}),"\n"]})]})}function h(n={}){const{wrapper:t}={...(0,i.a)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},1151:(n,t,e)=>{e.d(t,{Z:()=>s,a:()=>l});var a=e(7294);const i={},r=a.createContext(i);function l(n){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),a.createElement(r.Provider,{value:t},n.children)}}}]);