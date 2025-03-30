"use strict";(self.webpackChunksweetcandy=self.webpackChunksweetcandy||[]).push([[8894],{725:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=e(5893),c=e(1151);const o={sidebar_position:1,title:"Check network connectivity"},s="Ki\u1ec3m tra k\u1ebft n\u1ed1i m\u1ea1ng",a={id:"flutter_dart/utils/useful/network_connectivity",title:"Check network connectivity",description:"Class NetworkConnectivity gi\xfap ki\u1ec3m tra k\u1ebft n\u1ed1i m\u1ea1ng c\u1ee7a thi\u1ebft b\u1ecb.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/flutter_dart/utils/useful/network_connectivity.mdx",sourceDirName:"flutter_dart/utils/useful",slug:"/flutter_dart/utils/useful/network_connectivity",permalink:"/sweetcandy/en/docs/flutter_dart/utils/useful/network_connectivity",draft:!1,unlisted:!1,editUrl:"https://github.com/CK1412/sweetcandy/tree/main/docs/flutter_dart/utils/useful/network_connectivity.mdx",tags:[],version:"current",lastUpdatedBy:"canhth",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Check network connectivity"},sidebar:"flutterDart",previous:{title:"Useful",permalink:"/sweetcandy/en/docs/category/useful"},next:{title:"Design Pattern",permalink:"/sweetcandy/en/docs/flutter_dart/design_pattern/"}},r={},l=[{value:"Code tri\u1ec3n khai",id:"code-tri\u1ec3n-khai",level:2},{value:"C\xe1ch s\u1eed d\u1ee5ng",id:"c\xe1ch-s\u1eed-d\u1ee5ng",level:2}];function u(n){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"ki\u1ec3m-tra-k\u1ebft-n\u1ed1i-m\u1ea1ng",children:"Ki\u1ec3m tra k\u1ebft n\u1ed1i m\u1ea1ng"}),"\n",(0,i.jsxs)(t.p,{children:["Class ",(0,i.jsx)(t.code,{children:"NetworkConnectivity"})," gi\xfap ki\u1ec3m tra k\u1ebft n\u1ed1i m\u1ea1ng c\u1ee7a thi\u1ebft b\u1ecb."]}),"\n",(0,i.jsx)(t.p,{children:"Packages s\u1eed d\u1ee5ng:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://pub.dev/packages/connectivity_plus",children:"connectivity_plus"}),": ^4.0.2"]}),"\n",(0,i.jsx)(t.li,{children:"logger"}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"NetworkConnectivity"})," ch\u1ec9 ki\u1ec3m tra \u0111\u01b0\u1ee3c thi\u1ebft b\u1ecb \u0111\xe3 b\u1eadt k\u1ebft n\u1ed1i m\u1ea1ng hay ch\u01b0a, kh\xf4ng ki\u1ec3m tra \u0111\u01b0\u1ee3c t\xecnh tr\u1ea1ng m\u1ea1ng y\u1ebfu hay m\u1ea1nh."]})}),"\n",(0,i.jsx)(t.h2,{id:"code-tri\u1ec3n-khai",children:"Code tri\u1ec3n khai"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",metastring:'title="network_connectivity.dart"',children:"import 'dart:async';\n\nimport 'package:connectivity_plus/connectivity_plus.dart';\nimport 'package:logger/logger.dart';\n\nclass NetworkConnectivity {\n  static final NetworkConnectivity instance = NetworkConnectivity._();\n  NetworkConnectivity._() {\n    _initConnectivity();\n    _connectivitySubscription =\n        _connectivity.onConnectivityChanged.listen(_updateConnectionStatus);\n  }\n\n  final Connectivity _connectivity = Connectivity();\n  late final StreamSubscription<ConnectivityResult> _connectivitySubscription;\n\n  ConnectionStatus? _status;\n  ConnectionStatus get status => _status ?? ConnectionStatus.offline;\n\n  void _initConnectivity() async {\n    try {\n      final connectivityResult = await _connectivity.checkConnectivity();\n      _updateConnectionStatus(connectivityResult);\n    } catch (e) {\n      Logger().e('Init Connectivity: $e');\n    }\n  }\n\n  void _updateConnectionStatus(ConnectivityResult connectivityResult) {\n    switch (connectivityResult) {\n      case ConnectivityResult.mobile:\n      case ConnectivityResult.wifi:\n      case ConnectivityResult.ethernet:\n        _status = ConnectionStatus.online;\n      default:\n        _status = ConnectionStatus.offline;\n    }\n  }\n\n  void dispose() {\n    _connectivitySubscription.cancel();\n  }\n}\n\nenum ConnectionStatus {\n  online,\n  offline,\n}\n\nextension ConnectionStatusEx on ConnectionStatus {\n  bool get isOnline => this == ConnectionStatus.online;\n  bool get isOffline => this == ConnectionStatus.offline;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"c\xe1ch-s\u1eed-d\u1ee5ng",children:"C\xe1ch s\u1eed d\u1ee5ng"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:"/// Example\nif (NetworkConnectivity.instance.status.isOnline) {\n    debugPrint('Network is connected');\n  } else {\n    debugPrint('Network is disconnected');\n  }\n"})})]})}function d(n={}){const{wrapper:t}={...(0,c.a)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},1151:(n,t,e)=>{e.d(t,{Z:()=>a,a:()=>s});var i=e(7294);const c={},o=i.createContext(c);function s(n){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:s(n.components),i.createElement(o.Provider,{value:t},n.children)}}}]);