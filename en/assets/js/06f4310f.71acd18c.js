"use strict";(self.webpackChunksweetcandy=self.webpackChunksweetcandy||[]).push([[7980],{3905:(t,n,e)=>{e.d(n,{Zo:()=>d,kt:()=>h});var a=e(7294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function l(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)e=o[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)e=o[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var c=a.createContext({}),s=function(t){var n=a.useContext(c),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},d=function(t){var n=s(t.components);return a.createElement(c.Provider,{value:n},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),p=s(e),m=r,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return e?a.createElement(h,i(i({ref:n},d),{},{components:e})):a.createElement(h,i({ref:n},d))}));function h(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var o=e.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=t,l[p]="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=e[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}m.displayName="MDXCreateElement"},1750:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=e(7462),r=(e(7294),e(3905));const o={sidebar_position:3,title:"Abstract Factory"},i="Abstract Factory Pattern",l={unversionedId:"flutter_dart/design_pattern/creational_pattern/abstract_factory_pattern",id:"flutter_dart/design_pattern/creational_pattern/abstract_factory_pattern",title:"Abstract Factory",description:"Abstract Factory Pattern l\xe0 g\xec?",source:"@site/docs/flutter_dart/design_pattern/creational_pattern/abstract_factory_pattern.mdx",sourceDirName:"flutter_dart/design_pattern/creational_pattern",slug:"/flutter_dart/design_pattern/creational_pattern/abstract_factory_pattern",permalink:"/sweetcandy/en/docs/flutter_dart/design_pattern/creational_pattern/abstract_factory_pattern",draft:!1,editUrl:"https://github.com/CK1412/sweetcandy/tree/main/docs/flutter_dart/design_pattern/creational_pattern/abstract_factory_pattern.mdx",tags:[],version:"current",lastUpdatedBy:"canhth",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Abstract Factory"},sidebar:"flutterDart",previous:{title:"Factory Method",permalink:"/sweetcandy/en/docs/flutter_dart/design_pattern/creational_pattern/factory_method_pattern"},next:{title:"Builder",permalink:"/sweetcandy/en/docs/flutter_dart/design_pattern/creational_pattern/builder_pattern"}},c={},s=[{value:"Abstract Factory Pattern l\xe0 g\xec?",id:"abstract-factory-pattern-l\xe0-g\xec",level:2},{value:"\u1ee8ng d\u1ee5ng",id:"\u1ee9ng-d\u1ee5ng",level:2},{value:"S\u01a1 \u0111\u1ed3 minh ho\u1ea1",id:"s\u01a1-\u0111\u1ed3-minh-ho\u1ea1",level:2},{value:"Code tri\u1ec3n khai",id:"code-tri\u1ec3n-khai",level:2},{value:"Example in Dart",id:"example-in-dart",level:3},{value:"Example in Flutter",id:"example-in-flutter",level:3},{value:"T\xe0i li\u1ec7u tham kh\u1ea3o",id:"t\xe0i-li\u1ec7u-tham-kh\u1ea3o",level:2}],d={toc:s},p="wrapper";function u(t){let{components:n,...e}=t;return(0,r.kt)(p,(0,a.Z)({},d,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"abstract-factory-pattern"},"Abstract Factory Pattern"),(0,r.kt)("h2",{id:"abstract-factory-pattern-l\xe0-g\xec"},"Abstract Factory Pattern l\xe0 g\xec?"),(0,r.kt)("p",null,"Abstract Factory l\xe0 m\u1ed9t m\u1eabu thi\u1ebft k\u1ebf ph\xe9p b\u1ea1n t\u1ea1o ra c\xe1c nh\xf3m \u0111\u1ed1i t\u01b0\u1ee3ng li\xean quan m\xe0 kh\xf4ng c\u1ea7n ch\u1ec9 \u0111\u1ecbnh c\xe1c l\u1edbp c\u1ee5 th\u1ec3 c\u1ee7a ch\xfang."),(0,r.kt)("h2",{id:"\u1ee9ng-d\u1ee5ng"},"\u1ee8ng d\u1ee5ng"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"S\u1eed d\u1ee5ng Abstract Factory khi m\xe3 c\u1ee7a b\u1ea1n c\u1ea7n ho\u1ea1t \u0111\u1ed9ng v\u1edbi nhi\u1ec1u l\u1edbp li\xean quan kh\xe1c nhau, nh\u01b0ng b\u1ea1n kh\xf4ng mu\u1ed1n\nn\xf3 ph\u1ee5 thu\u1ed9c v\xe0o c\xe1c l\u1edbp c\u1ee5 th\u1ec3 \u0111\xf3 - ch\xfang c\xf3 th\u1ec3 ch\u01b0a \u0111\u01b0\u1ee3c bi\u1ebft tr\u01b0\u1edbc ho\u1eb7c b\u1ea1n ch\u1ec9 mu\u1ed1n cho ph\xe9p ",(0,r.kt)("strong",{parentName:"li"},"kh\u1ea3 n\u0103ng m\u1edf r\u1ed9ng")," trong t\u01b0\u01a1ng lai.")),(0,r.kt)("h2",{id:"s\u01a1-\u0111\u1ed3-minh-ho\u1ea1"},"S\u01a1 \u0111\u1ed3 minh ho\u1ea1"),(0,r.kt)("mermaid",{value:'---\ntitle: Relationships diagram\n---\nclassDiagram\n    direction TB\n\n    note for Animal "L\u1edbp Dog v\xe0 Cat \u0111\u1ec1u ph\u1ea3i tri\u1ec3n khai giao di\u1ec7n Animal, \n        giao di\u1ec7n n\xe0y khai b\xe1o m\u1ed9t ph\u01b0\u01a1ng th\u1ee9c c\xf3 t\xean l\xe0 `sound`.\n        M\u1ed7i l\u1edbp th\u1ef1c hi\u1ec7n ph\u01b0\u01a1ng th\u1ee9c n\xe0y m\u1ed9t c\xe1ch kh\xe1c nhau."\n    Animal <|-- Cat\n    Animal <|-- Dog\n    class Animal\n    <<interface>> Animal\n    Animal : ...\n    Animal : +sound()\n    note for Dog "Ch\xf3 (Dog) s\u1ee7a woof woof"\n    class Dog{\n        +...\n        +sound() \n    }\n    note for Cat "M\xe8o (Cat) k\xeau Meow Meow."\n    class Cat{\n        +...\n        +sound()\n    }\n\n    AnimalFactory <|.. AnimalFactoryImpl : implements\n    note for AnimalFactory "AnimalFactory interface khai b\xe1o m\u1ed9t t\u1eadp h\u1ee3p c\xe1c ph\u01b0\u01a1ng th\u1ee9c \u0111\u1ec3 t\u1ea1o t\u1eebng Abstract Animal.\n        AnimalFactoryImpl tri\u1ec3n khai c\xe1c ph\u01b0\u01a1ng th\u1ee9c t\u1ea1o c\u1ee7a AnimalFactory."\n    \n    class AnimalFactory\n    <<interface>> AnimalFactory\n    AnimalFactory : +createCat() Cat\n    AnimalFactory : +createDog() Dog  \n\n    class AnimalFactoryImpl\n    AnimalFactoryImpl : +createCat() Cat\n    AnimalFactoryImpl : +createDog() Dog'}),(0,r.kt)("h2",{id:"code-tri\u1ec3n-khai"},"Code tri\u1ec3n khai"),(0,r.kt)("h3",{id:"example-in-dart"},"Example in Dart"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:'title="Abstract Factory Pattern example in Dart"',title:'"Abstract',Factory:!0,Pattern:!0,example:!0,in:!0,'Dart"':!0},"abstract class Animal {\n  void sound() {}\n}\n\nclass Cat implements Animal {\n  @override\n  void sound() {\n    print('\ud83d\ude3a Cat call Meow Meow Meow');\n  }\n}\n\nclass Dog implements Animal {\n  @override\n  void sound() {\n    print('\ud83d\udc36 Dog call Woof woof woof');\n  }\n}\n\n/// Implement Abstract Factory  \n///\nabstract class AnimalFactory {\n  Cat createCat();\n  Dog createDog();\n}\n\nclass AnimalFactoryImpl implements AnimalFactory {\n  @override\n  Cat createCat() => Cat();\n\n  @override\n  Dog createDog() => Dog();\n}\n\nvoid main(List<String> args) {\n  /// Client code ch\u1ec9 l\xe0m vi\u1ec7c v\u1edbi c\xe1c Factory v\xe0 Animal th\xf4ng qua c\xe1c ki\u1ec3u tr\u1eebu t\u01b0\u1ee3ng: AnimalFactory, Animal. \n  /// \u0110i\u1ec1u n\xe0y cho ph\xe9p b\u1ea1n chuy\u1ec3n b\u1ea5t k\u1ef3 l\u1edbp con factory ho\u1eb7c animal n\xe0o cho client code m\xe0 kh\xf4ng ph\xe1 v\u1ee1 n\xf3.\n  /// \n  final AnimalFactory animalFactory = AnimalFactoryImpl();\n  final Animal dog = animalFactory.createDog();\n  final Animal cat = animalFactory.createCat();\n\n  assert(cat is Cat);\n  cat.sound(); // \ud83d\ude3a Cat call Meow Meow Meow\n\n  assert(dog is Dog);\n  dog.sound(); // \ud83d\udc36 Dog call Woof woof woof\n}\n")),(0,r.kt)("h3",{id:"example-in-flutter"},"Example in Flutter"),(0,r.kt)("p",null,"\u0110o\u1ea1n m\xe3 d\u01b0\u1edbi \u0111\xe2y s\u1ebd m\u1edf r\u1ed9ng ",(0,r.kt)("a",{parentName:"p",href:"/sweetcandy/en/docs/flutter_dart/design_pattern/creational_pattern/factory_method_pattern#example-in-flutter"},"v\xed d\u1ee5 tr\u01b0\u1edbc \u0111\xf3")," c\u1ee7a ",(0,r.kt)("em",{parentName:"p"},"Pactory Method Pattern")," theo Abstract Factory Method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:'title="Abstract Factory Pattern example in Flutter"',title:'"Abstract',Factory:!0,Pattern:!0,example:!0,in:!0,'Flutter"':!0},"import 'package:flutter/cupertino.dart';\nimport 'package:flutter/material.dart';\n\nabstract class PlatformFilledButton {\n  // ...\n}\n\nclass MaterialFilledButton implements PlatformFilledButton {\n  // ...\n}\n\nclass CupertinoFilledButton implements PlatformFilledButton {\n  /// ...\n}\n\nabstract class PlatformSwitch {\n  factory PlatformSwitch(TargetPlatform platform) {\n    return switch (platform) {\n      TargetPlatform.android ||\n      TargetPlatform.fuchsia ||\n      TargetPlatform.linux ||\n      TargetPlatform.windows =>\n        MaterialSwitch(),\n      TargetPlatform.iOS || TargetPlatform.macOS => MyCupertinoSwitch(),\n    };\n  }\n\n  Widget build(\n    BuildContext context, {\n    required bool value,\n    required ValueChanged<bool> onChanged,\n  });\n}\n\nclass MaterialSwitch implements PlatformSwitch {\n  @override\n  Widget build(\n    BuildContext context, {\n    required bool value,\n    required ValueChanged<bool> onChanged,\n  }) {\n    return Switch(\n      value: value,\n      onChanged: onChanged,\n    );\n  }\n}\n\nclass MyCupertinoSwitch implements PlatformSwitch {\n  @override\n  Widget build(\n    BuildContext context, {\n    required bool value,\n    required ValueChanged<bool> onChanged,\n  }) {\n    return CupertinoSwitch(\n      value: value,\n      onChanged: onChanged,\n    );\n  }\n}\n\n/// Implement Abstract Factory Method\n///\nclass PlatformWidget {\n  static Widget buildFilledButton(\n    BuildContext context, {\n    required Widget child,\n    required VoidCallback onPressed,\n  }) {\n    return PlatformFilledButton(Theme.of(context).platform).build(\n      context,\n      child: child,\n      onPressed: onPressed,\n    );\n  }\n\n  static Widget buildSwitch(\n    BuildContext context, {\n    required bool value,\n    required ValueChanged<bool> onChanged,\n  }) {\n    return PlatformSwitch(Theme.of(context).platform).build(\n      context,\n      value: value,\n      onChanged: onChanged,\n    );\n  }\n}\n\nvoid main(List<String> args) {\n  runApp(const MyAppScreen());\n}\n\nclass MyAppScreen extends StatefulWidget {\n  const MyAppScreen({super.key});\n\n  @override\n  State<MyAppScreen> createState() => _MyAppScreenState();\n}\n\nclass _MyAppScreenState extends State<MyAppScreen> {\n  bool _value = true;\n\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      home: Scaffold(\n        body: Center(\n          child: PlatformWidget.buildSwitch(\n            context,\n            value: _value,\n            onChanged: (value) {\n              setState(() {\n                _value = value;\n              });\n            },\n          ),\n        ),\n      ),\n    );\n  }\n}\n")),(0,r.kt)("p",null,"Qua v\xed d\u1ee5 n\xe0y, ch\xfang ta c\xf3 th\u1ec3 th\u1ea5y Abstract Factory Method pattern c\xf3 m\u1ed9t s\u1ed1 \u01b0u \u0111i\u1ec3m so v\u1edbi Factory Method pattern,\ncho ph\xe9p vi\u1ebft client code r\xf5 r\xe0ng m\xe0 kh\xf4ng c\u1ea7n bi\u1ebft subclass c\u1ee7a platform n\xe0o s\u1ebd \u0111\u01b0\u1ee3c t\u1ea1o."),(0,r.kt)("h2",{id:"t\xe0i-li\u1ec7u-tham-kh\u1ea3o"},"T\xe0i li\u1ec7u tham kh\u1ea3o"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://refactoring.guru/design-patterns/abstract-factory"},"https://refactoring.guru/design-patterns/abstract-factory")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://anonystick.com/blog-developer/phan-2-factory-pattern-cach-ma-toi-trien-khai-trong-nha-may-vinfast-fresher-va-junior-nen-bo-qua-phan-3-2020110554662242"},"https://anonystick.com/blog-developer/phan-2-factory-pattern-cach-ma-toi-trien-khai-trong-nha-may-vinfast-fresher-va-junior-nen-bo-qua-phan-3-2020110554662242"))))}u.isMDXComponent=!0}}]);