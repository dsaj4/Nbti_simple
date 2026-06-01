# 启动图片生成 Agent 的提示词

把下面这段直接发给负责图片生成的 agent。

```text
你是 NBTI 报告页图片资产生成 agent。请在本地项目中完成 `DLAH / 赛博判官` 的“名人参剧”合影图资产设计与生成准备，先做两个更有传播名场面的名人：罗永浩、苏格拉底。

工作目录：
E:\Project\vision-test\nbti-report-share-demo

请先阅读：
1. E:\Project\vision-test\nbti-report-share-demo\docs\celebrity-cameo-image-brief.md
2. E:\Project\vision-test\nbti-report-share-demo\index.html
3. E:\Project\vision-test\nbti-report-share-demo\styles.css
4. E:\Project\vision-test\NBTI_mwb\docs\image-assets\dlah-cyber-judge-visual-style-design.md
5. E:\Project\vision-test\NBTI_mwb\docs\image-assets\prompt-enhancer-workflow.md

可选增强 skill：
E:\Project\personal-skills\nbti-image-prompt-enhancer

任务：
1. 为下面两个资产分别产出最终 image generation prompt、negative prompt、QA notes：
   - dlah-cyber-judge-luo-yonghao-cameo-v1
   - dlah-cyber-judge-socrates-cameo-v1
2. 如具备图片生成能力，请生成图片并保存到：
   E:\Project\vision-test\nbti-report-share-demo\assets\celebrity-cameos\
3. 推荐文件名：
   - dlah-cyber-judge-luo-yonghao-cameo-v1.png
   - dlah-cyber-judge-socrates-cameo-v1.png
4. 若无法生成图片，请只输出可直接用于图片模型的最终提示词，并说明缺口。

统一视觉要求：
- 原创低多边形小人剧场合影，横向 4:3，适配当前 demo 的剧场合影占位。
- 赛博判官与名人同框，像一张“名场面参剧剧照”。
- 深色赛博法庭剧场、柔和顶灯、轻微幕布边缘、舞台合影感。
- 使用 DLAH 色彩：electric cyan、deep indigo、hot coral、warm amber。
- 不要复刻现实照片、新闻截图、发布会截图、品牌 logo 或产品 UI。
- 不暗示名人授权、代言、背书或真实参与 NBTI。
- 在世人物采用风格化公开人物小人表达，不做照片级拟真。

资产 A：罗永浩
- 行为核心：公开表达或直播转型语境中，过去的理想主义判断与后来的现实选择形成反差；他把“打脸”转化成自嘲和继续行动。
- 画面：赛博判官站在舞台一侧举起发光判笔，另一侧是风格化罗永浩小人，做“轻拍自己脸 / 承认打脸”的夸张喜剧动作；背景一半像发布会屏幕，一半像直播间提词板，中间漂浮两张互相矛盾的判词卡，一张写“以前我说”，一张写“现在我做”。画面要像名场面合影，不要像羞辱图。
- 情绪：自嘲、认真、强反差、有梗但不恶意嘲讽。

资产 B：苏格拉底
- 行为核心：雅典审判申辩场景中，面对“败坏青年”和“不敬神”的指控，用连续追问和逻辑拆解为自己的生活方式申辩，并坚持不放弃哲学追问。
- 画面：赛博判官站在一个低多边形雅典法庭舞台旁，手持发光判笔，把控诉词拆成悬浮问题卡；苏格拉底穿简化古希腊长袍，站在石阶或简洁讲台前，抬手做辩论姿态。远处可有一个小小的毒芹杯作为命运道具，但不要把画面做成临终悲剧。背景有雅典柱廊、陪审席剪影、问号和逻辑箭头。画面像“审判现场后的剧场合影”，核心是思想自辩，不是死亡场景。
- 情绪：冷静、尖锐、坚定、带一点反讽。

输出格式：
请按每个资产输出：
- asset_id
- final_prompt
- negative_prompt
- qa_notes
- save_path 或 planned_save_path
```
