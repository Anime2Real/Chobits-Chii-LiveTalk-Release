# 许可与素材说明

> 本仓库只分发安装包与发布页，不包含 Live2D 模型源文件；安装包内含的模型/贴图来自下述上游，仍受各自许可约束。

本仓库的**代码**以 [MIT](./LICENSE) 发布。以下素材/运行时**不在 MIT 范围内**，各自受原许可约束。

## Chii Live2D 模型

- 位置：`public/live2d/chii/`
- 来源：`Chobits-Chii-DSH/assets/live2d`（由 `Chobits-Chii-Mascot` 的 `resources/characters/live2d/chii/runtime` 导出并压缩贴图）
- 版权：© Anime2Real；角色「小叽 / Chii」及相关形象 © CLAMP / 相关权利方
- 使用限制：仅允许作为本项目的一部分、原样、非商业使用；不得单独提取、转售、用于商业产品或训练商业模型
- 如果你要 fork 本项目，请替换为你有权使用的 Live2D 模型

## Live2D Cubism Core

- 位置：`public/live2d/core/live2dcubismcore.min.js`
- 版权：© Live2D Inc.
- 许可：Live2D Proprietary Software License Agreement
- 说明：该文件属于 Live2D 官方允许再分发的文件；使用前请阅读 `public/live2d/LICENSE-Live2D-Core.md` 与 `RedistributableFiles.txt`
- 本项目不包含 Cubism Editor 或任何需要单独授权的编辑工具

## Chobits / 小叽角色 IP

- 《人形电脑天使心》（Chobits）及角色「小叽 / Chii / ちぃ」版权归 CLAMP 及相关权利方所有
- 本项目是非商业同人项目，与 CLAMP、讲谈社、Live2D Inc. 无隶属或授权关系
- 请勿将角色形象用于商业用途、广告、付费产品或冒充官方

## 第三方代码

| 项目 | 许可 | 用途 |
| --- | --- | --- |
| [Electron](https://www.electronjs.org/) | MIT | 桌面运行时 |
| [React](https://react.dev/) | MIT | 渲染层 |
| [PixiJS](https://pixijs.com/) | MIT | WebGL 渲染 |
| [pixi-live2d-display](https://github.com/guansss/pixi-live2d-display) | MIT | Live2D 模型加载与显示 |
| [Pipecat](https://github.com/pipecat-ai/pipecat) | BSD-2-Clause | 语音管线（服务端，独立仓库） |
| [Tabler Icons](https://tabler.io/icons) | MIT | 界面图标 |

## 音频/语音模型

本仓库**不包含** ASR、LLM、TTS 模型权重。它们运行在 Pipecat 服务端，许可见各自模型仓库（Fun-ASR、Qwen、CosyVoice、faster-whisper、Kokoro 等）。

## 免责声明

本项目按「现状」提供，不附带任何明示或暗示担保。使用角色形象、Live2D 运行时或第三方模型前，请自行确认你所在地区的适用法律与许可条款。
