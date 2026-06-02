const verdictStrip = document.querySelector(".verdict-strip");
const stampButton = document.querySelector("#stampButton");
const shareCard = document.querySelector("#shareCard");
const theaterShell = document.querySelector(".card-theater-shell");
const guestPull = document.querySelector("#guestPull");
const judgeFlow = document.querySelector(".judge-flow");
const judgeFlowButton = document.querySelector("#judgeFlowButton");
const stageEyebrow = document.querySelector("#stageEyebrow");
const questionText = document.querySelector("#questionText");
const questionLabel = document.querySelector("#questionLabel");
const judgeOutput = document.querySelector("#judgeOutput");
const sceneTitle = document.querySelector("#sceneTitle");
const sceneCount = document.querySelector("#sceneCount");
const sceneButtons = document.querySelectorAll(".scene-button");
const danmakuItems = [
  document.querySelector("#danmakuOne"),
  document.querySelector("#danmakuTwo"),
  document.querySelector("#danmakuThree"),
  document.querySelector("#danmakuFour"),
];
const celebrityImage = document.querySelector("#celebrityImage");
const celebrityPhotoLabel = document.querySelector("#celebrityPhotoLabel");
const celebrityButtons = document.querySelectorAll(".celebrity-button");
const shareCopyOptions = document.querySelectorAll(".share-copy-option");
const commentaryTabs = document.querySelectorAll(".commentary-tab");
const commentaryTitle = document.querySelector("#commentaryTitle");
const commentaryBody = document.querySelector("#commentaryBody");
const commentaryQuote = document.querySelector("#commentaryQuote");
const copyResultButton = document.querySelector("#copyResultButton");
const saveCardButton = document.querySelector("#saveCardButton");
const copyShareTextButton = document.querySelector("#copyShareTextButton");
const restartButton = document.querySelector("#restartButton");
const shareText = document.querySelector("#shareText");

const extraVerdicts = [
  "我先锐评",
  "别急我在审",
  "证据不足",
  "建议重开",
  "此处扣分",
];

const scenarios = [
  {
    title: "第一幕：PPT 修改案",
    tab: "PPT 案",
    question: "同事说“我只是提个建议”，但 PPT 已经改了 18 版。",
    tags: ["逻辑过检", "情绪扣分", "建议重练"],
  },
  {
    title: "第二幕：六十秒语音案",
    tab: "语音案",
    question: "群里有人说“不是杠”，然后连续发了六条 60 秒语音。",
    tags: ["不是杠精", "证据不足", "先降噪"],
  },
  {
    title: "第三幕：客观评价案",
    tab: "客观案",
    question: "朋友问你客观评价一下，结果你真的开始客观评价。",
    tags: ["纯路人", "有一说一", "友谊警报"],
  },
  {
    title: "第四幕：指标缺席案",
    tab: "指标案",
    question: "方案看起来很热闹，但核心指标只有“感觉不错”。",
    tags: ["拉完了", "指标缺席", "菜就多练"],
  },
];
const typeScene = {
  title: "你的报告类型是：赛博判官",
  count: "DLAH",
  eyebrow: "Cyber Court Theater",
  label: "场景云",
  question:
    "一群人明明可以把问题说清楚，偏偏用热闹掩盖标准缺席。你脑内的小型审题庭，已经开始开庭。",
  tags: ["先审题", "再锐评", "标准不能软"],
  danmaku: ["不吹不黑", "纯路人", "有一说一", "这题还没判完"],
};

const guestScenes = [
  {
    title: "Act I · 喜剧场：罗永浩自打嘴巴",
    count: "ACT 01",
    eyebrow: "Cyber Court Theater · Act I",
    label: "罗永浩 · 自打嘴巴",
    question:
      "理想主义发布会 vs 直播间的“交个朋友”。同一张嘴，两种真相。他拍拍自己的脸：“打脸归打脸，活儿还得干。”",
    tags: ["别骂了，我自己先扇", "脸可以肿，债必须还", "系统更新中"],
    danmaku: [
      "别骂了，我自己先扇。",
      "脸可以肿，债必须还。",
      "谁说打脸不算行动力？",
      "系统更新中，版本号：真还传。",
    ],
    photoLabel: "罗永浩名场面",
    name: "罗永浩",
    subtitle: "Same Type Guest / DLAH",
    image:
      "./assets/celebrity-cameos/dlah-cyber-judge-luo-yonghao-cameo-white-bg-v2.png",
    alt: "赛博判官与罗永浩的低多边形名场面合影",
  },
  {
    title: "Act II · 正剧场：苏格拉底临终反向审题",
    count: "ACT 02",
    eyebrow: "Cyber Court Theater · Act II",
    label: "苏格拉底 · 临终反向审题",
    question:
      "雅典审判场，毒酒已备好。他不要赦免，只要定义：“什么叫败坏？什么叫虔敬？一个人，到底该怎样活？”",
    tags: ["别急，先审题", "概念必须清楚", "最后留给追问"],
    danmaku: [
      "别急，先审题。",
      "死刑可以，概念必须清楚。",
      "你们审判我，我审判问题本身。",
      "最后一口气，也留给追问。",
    ],
    photoLabel: "苏格拉底名场面",
    name: "苏格拉底",
    subtitle: "Same Type Guest / DLAH",
    image:
      "./assets/celebrity-cameos/dlah-cyber-judge-socrates-cameo-white-bg-v2.png",
    alt: "赛博判官与苏格拉底的低多边形名场面合影",
  },
];

const commentaryItems = [
  {
    title: "罗永浩自评：我这叫“现实驱动型系统更新”",
    body:
      "“你们都说我打脸。行，我认。但一个人敢把几年前的发布会拿出来跟现在的自己对比，这事儿本身就挺赛博判官的。脸可以肿，逻辑不能塌。打脸归打脸，更新完系统继续干活。”",
    quote: "罗永浩同款判官：打脸是版本更新，不是卸载重装。",
  },
  {
    title: "苏格拉底自评：我只是把审判场改成了讨论组",
    body:
      "“他们说我快死了还在嘴硬。我想了想，说这是‘求知’。你们给的题目里有太多没澄清的概念，所以先定义，再讨论。毒酒可以喝，但问题必须先说清楚。”",
    quote: "苏格拉底同款判官：死亡面前，先问定义，再谈情绪。",
  },
];

let verdictIndex = 0;
let scenarioIndex = 0;
let guestIndex = -1;
let isGuestMode = false;
let isTurning = false;
let pullStartY = null;
let cordDragTriggered = false;

function setButtonDone(button, text = "已复制") {
  if (!button) return;
  const originalText = button.textContent;
  button.textContent = text;
  window.setTimeout(() => {
    button.textContent = originalText;
  }, 1200);
}

async function copyText(text, button) {
  try {
    await navigator.clipboard.writeText(text);
    setButtonDone(button);
  } catch (error) {
    window.prompt("复制这段文字：", text);
  }
}

stampButton.addEventListener("click", () => {
  const chip = document.createElement("span");
  chip.textContent = extraVerdicts[verdictIndex % extraVerdicts.length];
  chip.className = "is-new";
  verdictStrip.appendChild(chip);
  verdictIndex += 1;

  if (verdictStrip.children.length > 8) {
    verdictStrip.removeChild(verdictStrip.children[0]);
  }
});

function restartJudgeAnimation() {
  judgeFlow.classList.remove("is-judging");
  void judgeFlow.offsetWidth;
  judgeFlow.classList.add("is-judging");
}

function updateStageCopy(scene) {
  if (stageEyebrow) {
    stageEyebrow.textContent = scene.eyebrow;
  }
  sceneTitle.textContent = scene.title;
  sceneCount.textContent = scene.count;
  if (questionLabel) {
    questionLabel.textContent = scene.label;
  }
  questionText.textContent = scene.question;
  judgeOutput.innerHTML = scene.tags.map((tag) => `<span>${tag}</span>`).join("");
  danmakuItems.forEach((item, itemIndex) => {
    if (item) {
      item.textContent = scene.danmaku[itemIndex];
    }
  });
}

function updateSceneButtons(activeMode, activeGuest = -1) {
  sceneButtons.forEach((button) => {
    const isTypeButton = button.dataset.scene === "type";
    const buttonGuest = Number(button.dataset.guest);
    button.classList.toggle(
      "active",
      (activeMode === "type" && isTypeButton) ||
        (activeMode === "guest" && buttonGuest === activeGuest),
    );
  });
}

function renderTypeScene() {
  guestIndex = -1;
  isGuestMode = false;
  theaterShell.classList.remove("is-guest");
  guestPull.setAttribute("aria-pressed", "false");
  guestPull.querySelector(".cord-handle").textContent = "名人参剧";
  judgeFlowButton.textContent = "名人参剧";
  updateStageCopy(typeScene);
  updateSceneButtons("type");
  restartJudgeAnimation();
}

function renderScene(index) {
  const safeIndex = (index + scenarios.length) % scenarios.length;
  const nextScenario = scenarios[safeIndex];
  scenarioIndex = safeIndex;
  isGuestMode = false;

  theaterShell.classList.remove("is-guest");
  guestPull.setAttribute("aria-pressed", "false");
  guestPull.querySelector(".cord-handle").textContent = "名人参剧";
  judgeFlowButton.textContent = "下一幕";

  sceneTitle.textContent = nextScenario.title;
  sceneCount.textContent = `${String(safeIndex + 1).padStart(2, "0")} / ${String(scenarios.length).padStart(2, "0")}`;
  questionText.textContent = nextScenario.question;
  judgeOutput.innerHTML = nextScenario.tags.map((tag) => `<span>${tag}</span>`).join("");

  sceneButtons.forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.scene) === safeIndex);
  });

  restartJudgeAnimation();
}

function renderGuestScene(index = guestIndex) {
  const safeIndex = (index + guestScenes.length) % guestScenes.length;
  const guestScene = guestScenes[safeIndex];
  guestIndex = safeIndex;
  isGuestMode = true;
  theaterShell.classList.add("is-guest");
  guestPull.setAttribute("aria-pressed", "true");
  guestPull.querySelector(".cord-handle").textContent = "切换参剧";
  judgeFlowButton.textContent = "下一幕";

  updateStageCopy(guestScene);
  celebrityImage.src = guestScene.image;
  celebrityImage.alt = guestScene.alt;
  celebrityPhotoLabel.textContent = guestScene.photoLabel;
  updateSceneButtons("guest", safeIndex);

  restartJudgeAnimation();
}

function pullTheaterCord() {
  if (isTurning) return;
  isTurning = true;
  theaterShell.classList.add("is-turning");

  window.setTimeout(() => {
    renderGuestScene(isGuestMode ? guestIndex + 1 : 0);
  }, 360);

  window.setTimeout(() => {
    theaterShell.classList.remove("is-turning");
    isTurning = false;
  }, 820);
}

sceneButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.scene === "type") {
      renderTypeScene();
      return;
    }
    renderGuestScene(Number(button.dataset.guest));
  });
});

celebrityButtons.forEach((button) => {
  button.addEventListener("click", () => {
    renderGuestScene(Number(button.dataset.guest));
  });
});

judgeFlowButton.addEventListener("click", () => {
  if (isGuestMode) {
    renderGuestScene(guestIndex + 1);
    return;
  }
  renderGuestScene(0);
});

guestPull.addEventListener("pointerdown", (event) => {
  pullStartY = event.clientY;
  cordDragTriggered = false;
  if (guestPull.setPointerCapture) {
    guestPull.setPointerCapture(event.pointerId);
  }
});

guestPull.addEventListener("pointermove", (event) => {
  if (pullStartY === null || cordDragTriggered) return;
  if (event.clientY - pullStartY > 28) {
    cordDragTriggered = true;
    pullTheaterCord();
  }
});

guestPull.addEventListener("pointerup", () => {
  pullStartY = null;
});

guestPull.addEventListener("click", () => {
  if (cordDragTriggered) {
    cordDragTriggered = false;
    return;
  }
  pullTheaterCord();
});

copyResultButton.addEventListener("click", () => {
  copyText("我的 NBTI 工作人格是「DLAH / 赛博判官」：不吹不黑，纯路人，有一说一。", copyResultButton);
});

copyShareTextButton.addEventListener("click", () => {
  copyText(shareText.textContent.trim(), copyShareTextButton);
});

shareCopyOptions.forEach((button) => {
  button.addEventListener("click", () => {
    shareText.textContent = button.dataset.copy;
    shareCopyOptions.forEach((option) => {
      option.classList.toggle("active", option === button);
    });
  });
});

commentaryTabs.forEach((button) => {
  button.addEventListener("click", () => {
    const itemIndex = Number(button.dataset.commentary);
    const item = commentaryItems[itemIndex];
    commentaryTitle.textContent = item.title;
    commentaryBody.textContent = item.body;
    commentaryQuote.textContent = item.quote;
    commentaryTabs.forEach((tab) => {
      tab.classList.toggle("active", tab === button);
    });
  });
});

saveCardButton.addEventListener("click", () => {
  shareCard.scrollIntoView({ behavior: "smooth", block: "center" });
  setButtonDone(saveCardButton, "长按或截图保存");
});

restartButton.addEventListener("click", () => {
  renderTypeScene();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderTypeScene();
