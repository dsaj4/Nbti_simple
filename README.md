# NBTI Report Share Demo

这是一个独立静态前端 demo，聚焦 NBTI 报告分享页，不依赖 `NBTI_mwb` 或其他 demo 的运行时。

## 打开方式

直接用浏览器打开仓库根目录的 `index.html`：

```text
index.html
```

## 当前设计

- 主人物：`DLAH / 赛博判官`
- 页面结构：结果分享卡 + 分析面板 + 参考站拆解
- 交互：顶部视图切换、剧场拉绳、人物悬浮、场景审题、底部判官回答、名人参剧幕
- 参考站：
  - `https://deeply.plus/godbti/`
  - `https://www.bilibili.com/blackboard/era/saFvEK0FLD7ovkt4.html`
  - `https://www.starkawaii.top/`

## 后续可接入

- 把 `assets/dlah-cyber-judge.png` 替换为白底或透明背景正式角色图。
- 接入 `html2canvas` 生成可保存分享图。
- 将同一结构扩展到 16 人格矩阵。
