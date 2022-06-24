# React Native Web Monorepo

Originally forked from [react-native-web-monorepo](https://github.com/brunolemos/react-native-web-monorepo). Adapted to make use of a design system that functions as a component library - [rn-uilibrary](https://github.com/gezquinndesign/rn-uilibrary).

This repo and the UI Library are designed to be used together to develop a React Native Web project that works on mobile as well as web.

# 1. Install

```
yarn install
```

# 2. Rename 
Update ./app.json so that the name field has the value you want for your app's name (lowercase, no spaces or special characters). Add a display name too.  Also update the name in ./package.json whilst you're at it.

```
yarn rename
```

Update

rm -rf ./packages/components/android/app/src/debug
rm -rf ./packages/mobile/android/app/src/debug

Can possibly be done programatically
./packages/components/.storybook/manager-head.html
./packages/components/public/index.html
./packages/web/public/index.html

_BUCK
./packages/components/android/app/_BUCK
./packages/mobile/android/app/_BUCK

build.gradle
./packages/components/android/app/build.gradle
./packages/mobile/android/app/build.gradle

AndroidManifest.xml
./packages/components/android/app/src/main/AndroidManifest.xml
./packages/mobile/android/app/src/main/AndroidManifest.xml

MainActivity.java
./packages/components/android/app/src/main/java/com/uilibrary/MainActivity.java
./packages/mobile/android/app/src/main/java/com/uilibrary/MainActivity.java

MainApplication.java
./packages/components/android/app/src/main/java/com/uilibrary/MainApplication.java
./packages/mobile/android/app/src/main/java/com/uilibrary/MainApplication.java

Update fonts
./packages/components/core/theme.ts
./packages/components/ios/ngarinyin/Info.plist
./packages/components/ios/ngarinyin.xcodeproj/project.pbxproj
./packages/components/src/libs/fonts
./packages/components/src/stand-alone-documentaion/typography/typography.stories.mdx
