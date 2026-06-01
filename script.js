const modeButtons = document.querySelectorAll(".mode-button");
const panelViews = document.querySelectorAll(".panel-view");
const verdictStrip = document.querySelector(".verdict-strip");
const stampButton = document.querySelector("#stampButton");
const shareCard = document.querySelector("#shareCard");
const theaterShell = document.querySelector(".card-theater-shell");
const guestPull = document.querySelector("#guestPull");
const judgeFlow = document.querySelector(".judge-flow");
const judgeFlowButton = document.querySelector("#judgeFlowButton");
const questionText = document.querySelector("#questionText");
const judgeOutput = document.querySelector("#judgeOutput");
const sceneTitle = document.querySelector("#sceneTitle");
const sceneCount = document.querySelector("#sceneCount");
const sceneButtons = document.querySelectorAll(".scene-button");
const celebrityImage = document.querySelector("#celebrityImage");
const celebrityPhotoLabel = document.querySelector("#celebrityPhotoLabel");
const celebrityName = document.querySelector("#celebrityName");
const celebritySubtitle = document.querySelector("#celebritySubtitle");
const celebrityDescription = document.querySelector("#celebrityDescription");
const celebrityButtons = document.querySelectorAll(".celebrity-button");

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
    title: "名人参剧：罗永浩的自打嘴巴",
    count: "GUEST 01",
    question:
      "理想主义发布会和现实直播间同时亮起，罗永浩把“以前我说”和“现在我做”摆上台面，承认打脸后继续行动。",
    tags: ["自打嘴巴", "认真打脸", "继续行动"],
    photoLabel: "罗永浩名场面",
    name: "罗永浩",
    subtitle: "Same Type Guest / DLAH",
    description:
      "名人行为幕：在理想主义与现实选择的冲突里，把“打脸”变成自嘲和继续行动。",
    image:
      "./assets/celebrity-cameos/dlah-cyber-judge-luo-yonghao-cameo-white-bg-v2.png",
    alt: "赛博判官与罗永浩的低多边形名场面合影",
  },
  {
    title: "名人参剧：苏格拉底的审判申辩",
    count: "GUEST 02",
    question:
      "雅典审判现场，苏格拉底把控诉词翻成连续追问：什么是败坏？什么是虔敬？一个人该如何生活？",
    tags: ["连续追问", "逻辑申辩", "反向审题"],
    photoLabel: "苏格拉底名场面",
    name: "苏格拉底",
    subtitle: "Same Type Guest / DLAH",
    description:
      "名人行为幕：在雅典审判现场，用连续追问把控诉词拆成逻辑问题，坚持把“该如何生活”问到底。",
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

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextView = button.dataset.view;

    modeButtons.forEach((item) => item.classList.toggle("active", item === button));
    panelViews.forEach((panel) => {
      panel.classList.toggle("is-visible", panel.dataset.panel === nextView);
    });

    shareCard.animate(
      [
        { transform: "translateY(0)" },
        { transform: "translateY(-6px)" },
        { transform: "translateY(0)" },
      ],
      { duration: 360, easing: "ease-out" },
    );
  });
});

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
  guestPull.querySelector(".cord-handle").textContent = "回正剧场";
  judgeFlowButton.textContent = "回到审题幕";

  sceneTitle.textContent = guestScene.title;
  sceneCount.textContent = guestScene.count;
  questionText.textContent = guestScene.question;
  judgeOutput.innerHTML = guestScene.tags.map((tag) => `<span>${tag}</span>`).join("");
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
    if (isGuestMode) {
      renderScene(scenarioIndex);
    } else {
      renderGuestScene(guestIndex);
    }
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
    pullTheaterCord();
    return;
  }
  renderScene(scenarioIndex + 1);
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

renderScene(0);
