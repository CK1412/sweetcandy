---
sidebar_position: 5
title: FCM
---

# Firebase Cloud Messaging ([FCM](https://firebase.google.com/docs/cloud-messaging?hl=vi))

- Fcm là dịch vụ push notification miễn phí của Firebase, cho phép gửi thông báo từ server đến
  Android, IOS và Web.

## Cơ chế hoạt động

1. App lấy FCM registration Token -> FirebaseMessaging.instance.getToken().
2. Gửi FCM token lên server. -> Server lưu token để gửi thông báo sau này.
3. Server gửi thông báo qua Firebase -> Firebase gửi đến thiết bị dựa vào token.
4. App nhận và hiển thị thông báo.

## Loại thông báo

1. Notification Message -> Firebase tự xử lý hiển thị khi app ở background/terminated.
2. Data Message -> App tự xử lý, nhận trong foreground/background.

## Các thành phần chính

1. FCM Token → Mỗi thiết bị có một token duy nhất.
2. Topic Messaging → Gửi đến nhóm thiết bị (/topics/news).
3. Device Group Messaging → Gửi đến nhiều thiết bị của một user.
4. Condition Messaging → Gửi theo điều kiện ('topic1' in topics && 'topic2' in topics).

## Yêu cầu

### Quyền

- Trên Android

 ```xml

<manifest>
    <!--   Android 13 (API 33) trở lên-->
    <uses-permission android:name="android.permission.POST_NOTIFICATIONS" />

    <!--   Khi muốn tự xử lý data message ở background hoặc terminated-->
    <!--   Nếu payload chỉ chứa data, Firebase không tự hiển thị thông báo.-->
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
</manifest>
```

- Trên IOS
    - Từ IOS 15 trở đi không cần khai báo quyền thông báo trong mã.

### Gửi thông báo

- FCM trên iOS yêu cầu Apple Push Notification service (APNs) nên cần phải có tài khoản Apple
  Developer để tạo và gửi APNs Key (định dạng `.p8`) lên Firebase.

## Lưu ý

1. Hiển thị thông báo
    - FCM sẽ tự động hiển thị thông báo khi app ở background/terminated và Payload có chứa
      `notification`, có thể tuỳ chỉnh nếu muốn. Trên iOS, đảm bảo app đã yêu cầu quyền thông báo.
    - Nếu muốn hiển thị trong foreground, cần custom UI (Dialog, Snackbar, Toast...) hoặc dùng
      flutter_local_notifications.
2. Thông tin cần gửi lên Server để thiết lập thông báo.
    - Gửi lên server các thông tin: deviceId và fcmToken.
    - deviceId:
        - giúp server quản lý thiết bị và cập nhật token.
        - hỗ trợ đăng xuất và chặn thiết bị spam.
3. Lấy FCM Token
    - Không cần quyền thông báo để lấy FCM Token.
    - Bắt buộc xin quyền thông báo mới nhận được APN Token.
4. Thời hạn của FCM Token

   FCM Token thay đổi khi:
    - Ứng dụng được khôi phục trên thiết bị mới.
    - Người dùng gỡ cài đặt hoặc cài đặt lại ứng dụng.
    - Người dùng xoá dữ liệu ứng dụng.

## Tài liệu

1. https://firebase.google.com/docs/cloud-messaging
2. https://firebase.flutter.dev/docs/messaging/overview