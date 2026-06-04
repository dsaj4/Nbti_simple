const verdictStrip = document.querySelector(".verdict-strip");
const stampButton = document.querySelector("#stampButton");
const shareCard = document.querySelector("#shareCard");
const theaterShell = document.querySelector(".card-theater-shell");
const guestPull = document.querySelector("#guestPull");
const judgeFlow = document.querySelector(".judge-flow");
const judgeFlowButton = document.querySelector("#judgeFlowButton");
const stageEyebrow = document.querySelector("#stageEyebrow");
const sceneLines = document.querySelector("#sceneLines");
const questionLabel = document.querySelector("#questionLabel");
const judgeOutput = document.querySelector("#judgeOutput");
const sceneTitle = document.querySelector("#sceneTitle");
const sceneCount = document.querySelector("#sceneCount");
const sceneButtons = document.querySelectorAll(".scene-button");
const celebrityImage = document.querySelector("#celebrityImage");
const celebrityPhotoLabel = document.querySelector("#celebrityPhotoLabel");
const shareCopyOptions = document.querySelectorAll(".share-copy-option");
const commentaryPanel = document.querySelector("#commentaryPanel");
const commentaryKicker = document.querySelector("#commentaryKicker");
const commentaryTitle = document.querySelector("#commentaryTitle");
const commentaryLines = document.querySelector("#commentaryLines");
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

const typeScene = {
  title: "你的报告类型是：赛博判官",
  count: "DLAH",
  eyebrow: "Cyber Court Theater",
  label: "场景云",
  lines: [
    "大家都说差不多得了。",
    "方案看起来热闹，标准却还没站起来。",
    "场面已经糊成一锅粥。",
  ],
  question: "你怎么看？",
  tags: ["“先审题。”", "“再锐评。”", "“标准不能软。”"],
  commentary: {
    kicker: "赛博判官自评",
    title: "赛博判官说",
    paragraphs: [
      "“我不是爱吵架，我只是对‘差不多得了’生理性过敏。场面可以乱，逻辑不能乱。你要是问我为什么这么较真——因为问题一旦被糊弄过去，后面所有努力都在陪跑。”",
      "“所以我先审题，再锐评。不是为了赢，是为了让标准重新站起来。”",
    ],
    quote: "赛博判官判词：场面可以乱，逻辑不能乱。",
  },
};

const guestScenes = [
  {
    title: "Act I · 喜剧场：罗永浩自打嘴巴",
    count: "ACT 01",
    eyebrow: "Cyber Court Theater · Act I",
    label: "场景云",
    lines: [
      "理想主义发布会还在回响。",
      "直播间的灯也已经亮起。",
      "以前说过的话，撞上了现在要做的事。",
    ],
    question: "这算打脸，还是系统更新？",
    tags: ["“打脸归打脸。”", "“系统更新中。”", "“活儿还得干。”"],
    photoLabel: "罗永浩名场面",
    name: "罗永浩",
    subtitle: "Same Type Guest / DLAH",
    image:
      "./assets/celebrity-cameos/dlah-cyber-judge-luo-yonghao-cameo-white-bg-v2.png",
    alt: "赛博判官与罗永浩的低多边形名场面合影",
    commentary: {
      kicker: "名人点评",
      title: "罗永浩说",
      paragraphs: [
        "“你这人最大的问题不是爱评价，是看见一锅浆糊还非要把标准捞出来。别人说差不多得了，你非要问差在哪、多在哪、凭什么得了。”",
        "“但我理解你。人被现实打脸不可怕，可怕的是打完脸还不更新系统。你能把问题摆上桌，自己也一起审，这就不是嘴硬，这是还能继续干活。”",
      ],
      quote: "罗永浩同款判官：打脸是版本更新，不是卸载重装。",
    },
  },
  {
    title: "Act II · 正剧场：苏格拉底临终反向审题",
    count: "ACT 02",
    eyebrow: "Cyber Court Theater · Act II",
    label: "场景云",
    lines: [
      "雅典审判场已经坐满。",
      "毒酒也被端上来了。",
      "所有人都等着他低头，他却还在追问概念。",
    ],
    question: "死到临头，还要先审题吗？",
    tags: ["“先问定义。”", "“概念过审。”", "“追问到底。”"],
    photoLabel: "苏格拉底名场面",
    name: "苏格拉底",
    subtitle: "Same Type Guest / DLAH",
    image:
      "./assets/celebrity-cameos/dlah-cyber-judge-socrates-cameo-white-bg-v2.png",
    alt: "赛博判官与苏格拉底的低多边形名场面合影",
    commentary: {
      kicker: "名人点评",
      title: "苏格拉底说",
      paragraphs: [
        "“你不是不会合群，你只是很难接受一个问题还没定义清楚，所有人就开始急着站队。你问一句‘这是什么意思’，他们就觉得你在抬杠。”",
        "“但我理解你。没有定义，就没有真正的讨论。你不是在拖延答案，你是在保护问题不被糊弄过去。能把混乱问清楚，本身就是一种勇气。”",
      ],
      quote: "苏格拉底同款判官：死亡面前，先问定义，再谈情绪。",
    },
  },
];

let verdictIndex = 0;
let guestIndex = -1;
let isGuestMode = false;
let isTurning = false;
let pullStartY = null;
let cordDragTriggered = false;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
  commentaryPanel.classList.remove("is-speaking");
  void judgeFlow.offsetWidth;
  judgeFlow.classList.add("is-judging");
  commentaryPanel.classList.add("is-speaking");
  runStageTimeline();
}

function runStageTimeline() {
  if (!window.gsap || prefersReducedMotion) return;

  const actorSelector = isGuestMode ? ".celebrity-scene" : ".hero-lockup";
  const timeline = window.gsap.timeline({ defaults: { ease: "power2.out" } });

  timeline
    .fromTo(
      ".question-cloud",
      { autoAlpha: 0, y: -18, scale: 0.96 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.34 },
    )
    .fromTo(
      ".scene-lines p",
      { autoAlpha: 0, y: 8 },
      { autoAlpha: 1, y: 0, duration: 0.26, stagger: 0.06 },
      "-=0.12",
    )
    .fromTo(
      actorSelector,
      { autoAlpha: 0, y: 16, scale: 0.96 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.36 },
      "-=0.08",
    )
    .fromTo(
      ".judge-output span",
      { autoAlpha: 0, y: 14, scale: 0.86 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.26, stagger: 0.1, ease: "back.out(1.5)" },
      "-=0.02",
    )
    .fromTo(
      "#commentaryPanel h2, #commentaryPanel .commentary-lines p, #commentaryPanel blockquote",
      { autoAlpha: 0, y: 10 },
      { autoAlpha: 1, y: 0, duration: 0.28, stagger: 0.08 },
      "-=0.04",
    );
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
  sceneLines.innerHTML = [
    ...scene.lines.map((line) => `<p>${line}</p>`),
    `<p class="scene-question">${scene.question}</p>`,
  ].join("");
  judgeOutput.innerHTML = scene.tags.map((tag) => `<span>${tag}</span>`).join("");
  commentaryKicker.textContent = scene.commentary.kicker;
  commentaryTitle.textContent = scene.commentary.title;
  commentaryLines.innerHTML = scene.commentary.paragraphs
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
  commentaryQuote.textContent = scene.commentary.quote;
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

saveCardButton.addEventListener("click", () => {
  shareCard.scrollIntoView({ behavior: "smooth", block: "center" });
  setButtonDone(saveCardButton, "长按或截图保存");
});

restartButton.addEventListener("click", () => {
  renderTypeScene();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderTypeScene();
