# 第三方素材许可

独轮车图标使用 Twemoji v17.0.3 的手动轮椅图形（U+1F9BD），作者为 Twitter, Inc. 及其他贡献者，按 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 使用。图形以 Data URI 内嵌，未修改图形内容。

- [素材来源](https://github.com/jdecked/twemoji/blob/v17.0.3/assets/svg/1f9bd.svg)
- 原始文件 SHA-256：`3c42a2a7ce484d568d6044490c8d2051cd169ae8822587c4b3f07de82668fe48`
- BiLivex 自身代码继续使用 MIT 许可。

## 仅音频播放器

仅音频模式按需加载 [mpegts.js 1.8.0](https://github.com/xqq/mpegts.js/tree/v1.8.0)，版权归 magicxqq 及贡献者，使用 Apache-2.0 许可。未修改分发文件；原始许可保存在 [licenses/mpegts-1.8.0.LICENSE](./licenses/mpegts-1.8.0.LICENSE)。

- 固定资源：https://cdn.jsdelivr.net/npm/mpegts.js@1.8.0/dist/mpegts.js
- SHA-256：`e998f7a6cec5fcab56ac14e8c22d61a42565c1ebf7174b3fda078343eda6cab0`
- 运行时使用 SHA-384 完整性校验，不启用音频模式时不下载该资源；原有页面使用其他版本时保留其原引用。

画中画的需求与视频/弹幕分层思路参考 DouyuEx；音频接口调研参考 LAPLACE 说明。新增控制器、弹幕解析与交互代码为 BiLivex 按当前需求独立编写，没有复制这些项目源码。既有第三方素材和署名继续保留。
