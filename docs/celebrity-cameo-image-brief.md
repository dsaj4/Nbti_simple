# 名人参剧合影图生成需求

状态：draft for image agent

本文件用于 `nbti-report-share-demo` 的“名人参剧”剧场幕。当前推荐先做 `DLAH / 赛博判官` 的两个高传播名场面合影图：`罗永浩` 与 `苏格拉底`。

## 目标

生成两张“赛博判官 + 同类型名人”的名场面合影图，用于替换 demo 中的合影占位。

图片不是严肃肖像照，也不是现实照片复刻，而是原创的低多边形剧场合影资产。它要表达“这个名人为什么像 DLAH”，并服务报告页的趣味传播。

## 候选筛选结论

名场面优先级不只看“同类型准确”，还看三个传播指标：

- **动作可视化**：不用解释，画面动作本身就有梗。
- **行为反差**：能体现 DLAH 的“快速裁断 + 价值立场”，同时有戏剧转折。
- **可剧场化**：能放进赛博法庭舞台，和赛博判官形成互动。

### 推荐首批

| 优先级 | 名人 | 名场面方向 | 适合原因 |
|---|---|---|---|
| S | 罗永浩 | “自打嘴巴 / 打脸自己”式反差幕 | 有强动作、有互联网梗、有理想主义和现实选择的冲突，最适合剧场机关转场。 |
| S- | 苏格拉底 | 雅典审判申辩 / 毒芹杯前的逻辑自辩 | 画面经典、动作明确、哲学辨析强，适合做“被审判者反向审题”的戏剧幕。 |

### 备选候选池

| 优先级 | 名人 | 名场面方向 | 使用建议 |
|---|---|---|---|
| A | 戴建业 | 魔性诗词课 / 把古人讲成现场段子 | 表情、语速、粉笔、古诗词弹幕都好画，气质轻松，适合后续中国名人补位。 |
| A | Rutger Bregman | Davos “taxes, taxes, taxes”公共发言 | 强烈 DLAH：当众拆穿议题避重就轻。适合国际版，但中文用户识别度一般。 |
| A- | 柴静 | 《穹顶之下》数据大屏演讲 | 画面强，公共议题强，但更严肃，适合“正剧幕”，不如罗永浩有梗。 |
| B+ | 白岩松 | 新闻追问 / 演播室连线 | DLAH 很准，但视觉上偏访谈，需要额外设计问号、聚光灯、追问卡。 |
| B+ | 李永乐 | 黑板公式拆热点 | 识别度不错，适合“公式审题幕”，但戏剧冲突弱。 |
| B | Charlie Munger / 芒格 | 反向思维 / 多元模型格栅 | 类型很稳，但名场面动作弱，更像方法论肖像，不适合第一批传播图。 |
| B | Bryan Stevenson | 法庭/公共演讲式正义叙事 | 价值感强，但语境严肃，娱乐传播风险较高。 |

## 输出位置

生成后保存到：

```text
E:\Project\vision-test\nbti-report-share-demo\assets\celebrity-cameos\
```

建议文件名：

```text
dlah-cyber-judge-luo-yonghao-cameo-v1.png
dlah-cyber-judge-socrates-cameo-v1.png
```

## 通用规格

- 画幅：横向 `4:3` 或接近 `1200x900`，方便放入剧场合影框。
- 背景：一个统一的“赛博法庭剧场”空间，深色舞台、柔和顶灯、轻微幕布边缘。
- 人物：左/右同框，`赛博判官` 与名人并肩或互动。
- 风格：低多边形、小人模型、几何面片、玩具感、轻微 3D、干净轮廓。
- 色彩：沿用 DLAH 维度色，冷规则 + 热价值：
  - D electric cyan `#21C7D9`
  - L deep indigo `#4F46E5`
  - A hot coral `#F05263`
  - H warm amber `#F4A62A`
- 文本：图片内尽量不放长文字。允许极短标签，如 `DLAH`、`GUEST`、`MENTAL MODELS`、`理想主义创业`，但不要依赖文字解释画面。
- 角色关系：赛博判官是“剧场判读者”，名人是“参剧嘉宾”，画面像一张舞台合影或剧照。

## 风险边界

- 不要直接复刻某张现实照片、发布会截图、新闻图片或电影剧照。
- 不要使用品牌 logo、真实公司商标、真实产品 UI。
- 不暗示名人授权、代言、背书或真实参与 NBTI。
- 对在世人物采用“公开人物风格化小人”表达，不做照片级拟真，不制造可误认为真实照片的画面。
- 不做医疗、政治、宗教、法律裁判暗示；“判官”只表达网络锐评和思维裁断。

## Asset 1：罗永浩 / 自打嘴巴式打脸幕

```yaml
asset_id: dlah-cyber-judge-luo-yonghao-cameo-v1
type: celebrity-cameo-stage-photo
nbti_type: DLAH
main_character: 赛博判官
celebrity: 罗永浩
methodology: 理想主义创业 / 发布会式拆解 / 自嘲式打脸
scene_behavior: 在公开表达或直播转型语境中，过去的理想主义判断与后来的现实选择形成反差；他把“打脸”转化成自嘲和继续行动。
composition: 赛博判官站在舞台一侧举起发光判笔，另一侧是风格化罗永浩小人，做“轻拍自己脸 / 承认打脸”的夸张喜剧动作；背景一半像发布会屏幕，一半像直播间提词板，中间漂浮两张互相矛盾的判词卡，一张写“以前我说”，一张写“现在我做”。画面要像名场面合影，不要像羞辱图。
props:
  - glowing verdict stylus
  - microphone
  - presentation clicker
  - floating before/after verdict cards
  - small hammer-shaped prop
  - live-room light panel
emotion: 自嘲、认真、强反差、有梗但不恶意嘲讽
short_tags:
  - 自打嘴巴
  - 认真打脸
  - 继续行动
```

## Asset 2：苏格拉底 / 雅典审判申辩幕

```yaml
asset_id: dlah-cyber-judge-socrates-cameo-v1
type: celebrity-cameo-stage-photo
nbti_type: DLAH
main_character: 赛博判官
celebrity: Socrates / 苏格拉底
methodology: 苏格拉底式追问 / 逻辑自辩 / 道德立场
scene_behavior: 在雅典审判语境中，苏格拉底面对“败坏青年”和“不敬神”的指控，用连续追问和逻辑拆解为自己的生活方式申辩，并坚持不放弃哲学追问。
composition: 赛博判官站在一个低多边形雅典法庭舞台旁，手持发光判笔，把控诉词拆成悬浮问题卡；苏格拉底穿简化古希腊长袍，站在石阶或简洁讲台前，抬手做辩论姿态。远处可有一个小小的毒芹杯作为命运道具，但不要把画面做成临终悲剧。背景有雅典柱廊、陪审席剪影、问号和逻辑箭头。画面像“审判现场后的剧场合影”，核心是思想自辩，不是死亡场景。
props:
  - glowing verdict stylus
  - floating accusation cards
  - question marks
  - logic arrows
  - small hemlock cup in the background
  - simplified Athenian columns
emotion: 冷静、尖锐、坚定、带一点反讽
short_tags:
  - 灵魂追问
  - 逻辑申辩
  - 反向审题
```

## 备选 Asset：戴建业 / 魔性诗词锐评幕

```yaml
asset_id: dlah-cyber-judge-dai-jianye-cameo-v1
type: celebrity-cameo-stage-photo
nbti_type: DLAH
main_character: 赛博判官
celebrity: 戴建业
methodology: 幽默解构 / 直率表达 / 文学传播
scene_behavior: 在课堂或短视频传播语境中，用极快语速和幽默表达拆开古诗词，把严肃文本讲成现场段子，让观众重新理解文学之美。
composition: 赛博判官拿着判笔站在黑板旁，风格化戴建业小人拿粉笔或讲义，正在把一首古诗拆成夸张箭头、情绪表情和弹幕批注；舞台上漂浮诗句碎片、问号、笑点标记。两人像刚完成一场“古诗词审判/锐评课”后的合影。
props:
  - chalk
  - blackboard
  - flying poem fragments
  - comic annotation arrows
  - glowing verdict stylus
emotion: 高速、幽默、直率、文学现场感
short_tags:
  - 诗词锐评
  - 幽默解构
  - 文学破案
```

## 备选 Asset：查理·芒格

如果需要更稳、更国际化的方法论款，可以后续再做芒格。它适合“反向思维模型合影”，但第一眼传播动作不如罗永浩和戴建业。

```yaml
asset_id: dlah-cyber-judge-charlie-munger-cameo-v1
type: celebrity-cameo-stage-photo
nbti_type: DLAH
main_character: 赛博判官
celebrity: Charlie Munger / 查理·芒格
methodology: 多元思维模型 / 反向思维
scene_behavior: 在公开问答或演讲式场合，把问题翻成“哪些错误必须避免”，用多学科常识拆掉过热叙事。
composition: 赛博判官拿着发光判笔，芒格坐在简洁扶手椅或讲台旁，手边有书本、格栅图、反向箭头。两人面对一个悬浮问题气泡，像刚完成一场理性裁断后的合影。
props:
  - glowing verdict stylus
  - mental model lattice grid
  - open book stack
  - inverted arrow
  - small balance-scale icon
emotion: 冷静、笃定、带一点干幽默
short_tags:
  - 反向思维
  - 常识裁断
  - 过热降温
```

## 验收标准

- 第一眼能看出“赛博判官 + 名人嘉宾”的剧场合影关系。
- 合影图与当前 demo 的剧场舞台能融合，不像独立海报硬贴进去。
- 人物是低多边形小人，不是照片、写实肖像或二次元大头贴。
- 名人识别来自发型、姿态、道具、场景行为，不依赖长文字。
- 能明确表达 DLAH：解构问题、逻辑裁断、快速行动、价值立场。
