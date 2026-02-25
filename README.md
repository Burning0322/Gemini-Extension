# Geminiextension
这是一份为你刚才开发的 **Gemini Chat Outline (Gemini 聊天目录导航)** Chrome 插件量身定制的 GitHub README 模板。

我把我们刚刚优化的“悬浮抽屉”功能、日夜主题切换以及实时时钟等亮点都写进去了。你可以直接复制，或者根据需要调整。

---

# 🌟 Gemini Chat Outline

一款轻量级、优雅的 Chrome 浏览器扩展，专为 Google Gemini 网页版设计。它能在聊天页面的右侧自动生成一个悬浮目录（TOC），让你在超长的对话历史中也能一键跳转，轻松导航！

## ✨ 核心功能 (Features)

* 📑 **自动生成目录**: 实时扫描你的提问，提取摘要作为目录项。点击目录即可平滑滚动（Smooth Scroll）到对应的对话位置，并伴随高亮提示。
* 🖱️ **无感悬浮抽屉**: 极简设计！导航栏默认隐藏在屏幕右侧边缘，鼠标靠近时才会丝滑滑出，最大程度保证聊天界面的清爽，不遮挡视线。
* 🌗 **智能日夜模式**: 自动计算页面背景亮度（YIQ），无缝适配 Gemini 的浅色（Light）与深色（Dark）主题，护眼又美观。
* 🕒 **实时时钟**: 导航栏顶部自带数字时钟，让你在沉浸式对话中也能随时掌握时间。
* 🧹 **智能文本净化**: 自动去除 "You said" 等冗余前缀，让目录文字更精炼。

## 🚀 安装指南 (Installation)

由于目前尚未上架 Chrome 网上应用店，你可以通过“开发者模式”在本地轻松安装：

1. **下载源码**:
将此仓库克隆到本地，或者下载 ZIP 压缩包并解压。
```bash
git clone (https://github.com/Burning0322/Gemini-Extension.git)

```


2. **打开扩展程序管理页面**:
在 Chrome 浏览器地址栏输入 `chrome://extensions/` 并回车。
3. **开启开发者模式**:
打开页面右上角的 **“开发者模式” (Developer mode)** 开关。
4. **加载已解压的扩展程序**:
点击左上角的 **“加载已解压的扩展程序” (Load unpacked)** 按钮。
5. **选择文件夹**:
选择你刚才下载并解压的插件文件夹（包含 `manifest.json` 的那一层目录）。

## 💡 使用说明 (Usage)

1. 安装完成后，打开或刷新 [Google Gemini 聊天页面](https://gemini.google.com/)。
2. 在页面最右侧边缘，你会看到一个半透明的细条感应区。
3. 将鼠标光标移动到屏幕右侧，目录导航栏会自动滑出。
4. 点击任意目录项，即可快速定位到对应的历史对话。

## 🛠️ 技术栈 (Tech Stack)

* **Manifest V3**: 符合 Chrome 扩展最新标准。
* **Vanilla JavaScript (ES6+)**: 纯原生 JS，无需第三方库，轻量高效。
* **CSS3**: 使用 Flexbox 布局，结合 `transform` 和 `transition` 实现流畅的抽屉动画。

## 📸 效果预览 (Preview)

*(建议在这里插入一张插件运行时的截图。你可以把截图上传到仓库的 `assets` 文件夹中，然后在这里替换图片链接)*

## 🤝 贡献 (Contributing)

欢迎提交 Pull Request 或发起 Issue！如果你有更好的排版想法、动画优化或者发现了 Bug，随时欢迎交流。

## 📄 许可证 (License)

本项目采用 [MIT License](https://www.google.com/search?q=LICENSE) 开源许可证。

---

**下一步：**
你需要我帮你写一份英文版的 README 放在下面，作为双语版本吗？或者你觉得哪里需要补充（比如添加你个人的联系方式/社交链接）？
