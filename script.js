const verdictStrip = document.querySelector(".verdict-strip");
const stampButton = document.querySelector("#stampButton");
const shareCard = document.querySelector("#shareCard");
const theaterShell = document.querySelector(".card-theater-shell");
const guestPull = document.querySelector("#guestPull");
const judgeFlow = document.querySelector(".judge-flow");
const judgeFlowButton = document.querySelector("#judgeFlowButton");
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
const celebrityName = document.querySelector("#celebrityName");
const celebritySubtitle = document.querySelector("#celebritySubtitle");
const celebrityDescription = document.querySelector("#celebrityDescription");
const celebrityButtons = document.querySelectorAll(".celebrity-button");
const shareCopyOptions = document.querySelectorAll(".share-copy-option");
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

const guestScenes = [
  {
    title: "Act I · 喜剧场：罗永浩自打嘴巴",
    count: "ACT 01",
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
    description:
      "打脸是版本更新，不是卸载重装。",
    image:
      "./assets/celebrity-cameos/dlah-cyber-judge-luo-yonghao-cameo-white-bg-v2.png",
    alt: "赛博判官与罗永浩的低多边形名场面合影",
  },
  {
    title: "Act II · 正剧场：苏格拉底临终反向审题",
    count: "ACT 02",
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
    description:
      "死亡面前，先问定义，再谈情绪。",
    image:
      "./assets/celebrity-cameos/dlah-cyber-judge-socrates-cameo-white-bg-v2.png",
    alt: "赛博判官与苏格拉底的低多边形名场面合影",
  },
];

let verdictIndex = 0;
let scenarioIndex = 0;
let guestIndex = 0;
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

  sceneTitle.textContent = guestScene.title;
  sceneCount.textContent = guestScene.count;
  if (questionLabel) {
    questionLabel.textContent = guestScene.label;
  }
  questionText.textContent = guestScene.question;
  judgeOutput.innerHTML = guestScene.tags.map((tag) => `<span>${tag}</span>`).join("");
  danmakuItems.forEach((item, itemIndex) => {
    if (item) {
      item.textContent = guestScene.danmaku[itemIndex];
    }
  });
  celebrityImage.src = guestScene.image;
  celebrityImage.alt = guestScene.alt;
  celebrityPhotoLabel.textContent = guestScene.photoLabel;
  celebrityName.textContent = guestScene.name;
  celebritySubtitle.textContent = guestScene.subtitle;
  celebrityDescription.textContent = guestScene.description;
  sceneButtons.forEach((button) => button.classList.remove("active"));
  celebrityButtons.forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.guest) === safeIndex);
  });

  restartJudgeAnimation();
}

function pullTheaterCord() {
  if (isTurning) return;
  isTurning = true;
  theaterShell.classList.add("is-turning");

  window.setTimeout(() => {
    renderGuestScene(isGuestMode ? guestIndex + 1 : guestIndex);
  }, 360);

  window.setTimeout(() => {
    theaterShell.classList.remove("is-turning");
    isTurning = false;
  }, 820);
}

sceneButtons.forEach((button) => {
  button.addEventListener("click", () => {
    renderScene(Number(button.dataset.scene));
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
  renderGuestScene(guestIndex);
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

saveCardButton.addEventListener("click", () => {
  shareCard.scrollIntoView({ behavior: "smooth", block: "center" });
  setButtonDone(saveCardButton, "长按或截图保存");
});

restartButton.addEventListener("click", () => {
  renderGuestScene(0);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderGuestScene(0);
