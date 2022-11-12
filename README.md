# README

## 1. 项目简介

​		本项目为理论答题系统前端部分，使用React+TS完成。

## 2. 项目开发

### 安装

若要开发和调试本项目，请在代码目录下执行安装依赖

```bash
npm install
```

### 运行

运行开发服务器

```bash
npm start
```

### 生成

生成项目

```bash
npm run build
```

将生成的项目文件放到服务器根目录即可

本项目已经生成了可用的发布包，可以直接使用

## 3. 开发技术

### 框架

使用`React`框架完成开发

### UI技术

除`css`外，配置`webpack`支持了`less`和`scss`

配置了UI库`ant-design`

### 脚本语言

使用`TypeSript`完成开发，由于使用了`tsx`故没有自己编写的html文件

### 路径重定向

配置`webpack`支持了路径的重定向

```json
'src': 'src'
'actions':'src/actions'
'components': 'src/components'
'layouts': 'src/layouts'
'pages': 'src/pages'
'common': 'src/common'
'api': 'src/api'
'reducers': 'src/reducers'
'store': 'src/store'
```

## 4.模块说明

`src`目录下的主要模块的功能如下

```
src
├─App.css
├─App.test.tsx
├─App.tsx
├─index.css
├─index.tsx
├─logo.svg
├─react-app-env.d.ts
├─serviceWorker.ts
├─setupTests.ts
├─pages
|   ├─Home
|   |  ├─Home.scss
|   |  └Home.tsx 主页代码
├─components
|     ├─Block.scss
|     └Block.tsx 块组件
```

## 5. 实现细节