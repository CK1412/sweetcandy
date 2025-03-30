"use strict";(self.webpackChunksweetcandy=self.webpackChunksweetcandy||[]).push([[7815],{5462:(n,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>r,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var e=t(5893),a=t(1151);const o={sidebar_position:1,title:"Code"},r=void 0,c={id:"flutter_dart/fcm/code",title:"Code",description:"Dependencies",source:"@site/docs/flutter_dart/fcm/code.mdx",sourceDirName:"flutter_dart/fcm",slug:"/flutter_dart/fcm/code",permalink:"/sweetcandy/docs/flutter_dart/fcm/code",draft:!1,unlisted:!1,editUrl:"https://github.com/CK1412/sweetcandy/tree/main/docs/flutter_dart/fcm/code.mdx",tags:[],version:"current",lastUpdatedBy:"canhth",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Code"},sidebar:"flutterDart",previous:{title:"FCM",permalink:"/sweetcandy/docs/flutter_dart/fcm/"}},s={},l=[{value:"Dependencies",id:"dependencies",level:2},{value:"Code tri\u1ec3n khai",id:"code-tri\u1ec3n-khai",level:2},{value:"S\u1eed d\u1ee5ng",id:"s\u1eed-d\u1ee5ng",level:2}];function d(n){const i={code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,a.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"device_info_plus"}),"\n",(0,e.jsx)(i.li,{children:"firebase_messaging"}),"\n",(0,e.jsx)(i.li,{children:"flutter_local_notifications"}),"\n",(0,e.jsx)(i.li,{children:"http"}),"\n"]}),"\n",(0,e.jsx)(i.h2,{id:"code-tri\u1ec3n-khai",children:"Code tri\u1ec3n khai"}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-dart",metastring:'title="fcm_services.dart"',children:"import 'dart:io';\n\nimport 'package:device_info_plus/device_info_plus.dart';\nimport 'package:firebase_messaging/firebase_messaging.dart';\nimport 'package:flutter/foundation.dart';\nimport 'package:flutter_local_notifications/flutter_local_notifications.dart';\n\nimport 'local_notitfication_helper.dart';\nimport 'package:http/http.dart' as http;\n\nclass FCMService {\n  FCMService._();\n\n  static FCMService? _instance;\n\n  static FCMService get instance {\n    return _instance ??= FCMService._();\n  }\n\n  final FirebaseMessaging _messaging = FirebaseMessaging.instance;\n\n  /// Token d\xf9ng cho Android v\xe0 Web\n  Future<String> _getFCMToken() async {\n    return await _messaging.getToken() ?? '';\n  }\n\n  /// Token d\xf9ng cho IOS\n  Future<String> _getAPNToken() async {\n    await FirebaseMessaging.instance.requestPermission();\n    return await _messaging.getAPNSToken() ?? '';\n  }\n\n  Future<String> getFCMRegistrationToken() async {\n    final token = Platform.isIOS ? await _getAPNToken() : await _getFCMToken();\n    if (kDebugMode) {\n      print('FCM RegistrationToken: $token');\n    }\n    return token;\n  }\n\n  /// Call in main.dart to init FCM\n  Future<void> init() async {\n    LocalNotificationHelper.instance.init();\n    _listenMessageOnForeground();\n    _listenMessageOnBackground();\n  }\n\n  void _listenMessageOnForeground() {\n    FirebaseMessaging.onMessage.listen((RemoteMessage message) {\n      final RemoteNotification? notification = message.notification;\n\n      if (notification != null) {\n        showLocalNotification(notification);\n      }\n    });\n  }\n\n  void showLocalNotification(RemoteNotification notification) async {\n    // \u0110\u1eb7t id cho th\xf4ng b\xe1o (n\u1ebfu c\xf3)\n    final notificationId = LocalNotificationHelper.generalNotificationId;\n    final notificationTitle = notification.title;\n    final notificationBody = notification.body;\n    final notificationImageUrl =\n        notification.android?.imageUrl ?? notification.apple?.imageUrl;\n\n    BigPictureStyleInformation? bigPictureStyleInformation;\n\n    if (notificationImageUrl != null) {\n      final Uint8List? bitmap = await _getBytesFromUrl(notificationImageUrl);\n      if (bitmap != null) {\n        final bigPicture = ByteArrayAndroidBitmap(bitmap);\n        bigPictureStyleInformation = BigPictureStyleInformation(\n          bigPicture,\n        );\n      }\n    }\n\n    final androidNotificationDetails = AndroidNotificationDetails(\n      LocalNotificationHelper.generalNotificationChannelId,\n      LocalNotificationHelper.generalNotificationChannelName,\n      importance: Importance.defaultImportance,\n      priority: Priority.high,\n      styleInformation: bigPictureStyleInformation,\n    );\n    final generalNotificationDetails = NotificationDetails(\n      android: androidNotificationDetails,\n    );\n\n    LocalNotificationHelper.instance.showNotification(\n      notificationId,\n      notificationTitle,\n      notificationBody,\n      notificationDetails: generalNotificationDetails,\n    );\n  }\n\n  void _listenMessageOnBackground() {\n    FirebaseMessaging.onBackgroundMessage(onBackgroundMessage);\n  }\n\n  static Future<void> onBackgroundMessage(RemoteMessage message) async {\n    final notification = message.notification;\n\n    if (notification != null) {\n      // Todo: Tu\u1ef3 ch\u1ec9nh n\u1ebfu c\u1ea7n\n      // FCMService.instance.showLocalNotification(notification);\n    }\n  }\n\n  Future<Uint8List?> _getBytesFromUrl(String url) async {\n    final uri = Uri.tryParse(url);\n    if (uri == null) {\n      return null;\n    }\n    final response = await http.get(uri);\n    return response.bodyBytes;\n  }\n\n  /// Device Id\n  Future<String?> getDeviceId() async {\n    final deviceInfoPlugin = DeviceInfoPlugin();\n    if (Platform.isAndroid) {\n      final AndroidDeviceInfo androidInfo = await deviceInfoPlugin.androidInfo;\n      return androidInfo.id;\n    } else if (Platform.isIOS) {\n      final IosDeviceInfo iosInfo = await deviceInfoPlugin.iosInfo;\n      return iosInfo.identifierForVendor;\n    }\n\n    return null;\n  }\n}\n\n"})}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-dart",metastring:'title="local_notification_helper.dart"',children:"import 'package:flutter_local_notifications/flutter_local_notifications.dart';\n\n/// [LocalNotificationHelper] handle show local notification\n/// \nclass LocalNotificationHelper {\n  LocalNotificationHelper._();\n\n  static LocalNotificationHelper? _instance;\n\n  static LocalNotificationHelper get instance {\n    return _instance ??= LocalNotificationHelper._();\n  }\n\n  static const String generalNotificationChannelId = 'id-general-notifications';\n  static const String generalNotificationChannelName = 'General notifications';\n  static const int generalNotificationId = 321;\n\n  final FlutterLocalNotificationsPlugin _notificationsPlugin =\n  FlutterLocalNotificationsPlugin();\n\n  @pragma('vm:entry-point')\n  static Function(NotificationResponse notificationResponse)?\n  onDidReceiveBackgroundNotificationResponse;\n\n  void init({\n    Function(NotificationResponse notificationResponse)?\n    onDidReceiveNotificationResponse,\n  }) async {\n    final AndroidInitializationSettings initializationSettingsAndroid =\n    AndroidInitializationSettings('@mipmap/ic_launcher');\n    final DarwinInitializationSettings initializationSettingsDarwin =\n    DarwinInitializationSettings();\n\n    final InitializationSettings initializationSettings =\n    InitializationSettings(\n      android: initializationSettingsAndroid,\n      iOS: initializationSettingsDarwin,\n    );\n\n    await _notificationsPlugin.initialize(\n      initializationSettings,\n      onDidReceiveNotificationResponse: onDidReceiveNotificationResponse,\n      onDidReceiveBackgroundNotificationResponse:\n      onDidReceiveBackgroundNotificationResponse,\n    );\n  }\n\n  Future<void> showNotification(int id,\n      String? title,\n      String? body, {\n        NotificationDetails? notificationDetails,\n        String? payload,\n      }) async {\n    final AndroidNotificationDetails androidNotificationDetails =\n    AndroidNotificationDetails(\n      generalNotificationChannelId,\n      generalNotificationChannelName,\n      importance: Importance.defaultImportance,\n      priority: Priority.high,\n    );\n    final generalNotificationDetails = NotificationDetails(\n      android: androidNotificationDetails,\n    );\n\n    await _notificationsPlugin.show(\n      id,\n      title,\n      body,\n      notificationDetails ?? generalNotificationDetails,\n    );\n  }\n}\n\n"})}),"\n",(0,e.jsx)(i.h2,{id:"s\u1eed-d\u1ee5ng",children:"S\u1eed d\u1ee5ng"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"G\u1ecdi FCMService.instance.init() trong main.dart"}),"\n"]}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-dart",metastring:'title="main.dart"',children:"void main() async {\n  WidgetsFlutterBinding.ensureInitialized();\n  await Firebase.initializeApp(\n    options: DefaultFirebaseOptions.currentPlatform,\n  );\n\n  await FCMService.instance.init();\n\n  runApp(const MyApp());\n}\n\n"})})]})}function f(n={}){const{wrapper:i}={...(0,a.a)(),...n.components};return i?(0,e.jsx)(i,{...n,children:(0,e.jsx)(d,{...n})}):d(n)}},1151:(n,i,t)=>{t.d(i,{Z:()=>c,a:()=>r});var e=t(7294);const a={},o=e.createContext(a);function r(n){const i=e.useContext(o);return e.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function c(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),e.createElement(o.Provider,{value:i},n.children)}}}]);