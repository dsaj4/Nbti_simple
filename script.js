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
const sceneTitle = document.querySelector("#sceneTitle");
const sceneCount = document.querySelector("#sceneCount");
const sceneButtons = document.querySelectorAll(".scene-button");
const celebrityImage = document.querySelector("#celebrityImage");
const celebrityPhotoLabel = document.querySelector("#celebrityPhotoLabel");
const commentaryPanel = document.querySelector("#commentaryPanel");
const commentaryKicker = document.querySelector("#commentaryKicker");
const commentaryTitle = document.querySelector("#commentaryTitle");
const commentaryLines = document.querySelector("#commentaryLines");
const commentaryQuote = document.querySelector("#commentaryQuote");
const copyResultButton = document.querySelector("#copyResultButton");
const demoVersionButtons = document.querySelectorAll(".demo-version-button");
const typeIntroTitle = document.querySelector("#typeIntroTitle");
const typeIntroText = document.querySelector("#typeIntroText");
const typeIntroPills = document.querySelector("#typeIntroPills");

const extraVerdicts = [
  "我先锐评",
  "别急我在审",
  "证据不足",
  "建议重开",
  "此处扣分",
];

const demoVersions = {
  standard: {
    title: "标准版",
    typeIntro: {
      title: "你是赛博判官",
      text:
        "不吹不黑，纯路人视角。你不是爱杠，是对“差不多得了”生理性反胃。脑子里自动开庭：原告叫“这不对”，被告叫“那你说咋办”，你负责敲法槌。",
      pills: ["不吹不黑", "纯路人", "有一说一", "菜就多练"],
    },
  },
  meme: {
    title: "网感语录版",
    typeIntro: {
      title: "赛博判官：互联网审题庭常驻嘉宾",
      text:
        "你不是杠精，你是评论区质检员。别人一句“差不多得了”，你脑内已经开始调监控、翻证据、拉时间线。该夸就夸，该喷就喷，主打一个不收钱也不乱判。场面可以开香槟，逻辑不能开盲盒。",
      pills: ["不尬黑", "开庭了", "证据呢", "别带节奏", "这波要重审"],
    },
  },
};

const typeScene = {
  title: "你的报告类型是：赛博判官",
  count: "DLAH",
  eyebrow: "Cyber Court Theater",
  label: "场景云",
  lines: [
    "会议开了半小时，结论是“差不多得了”。",
    "方案 PPT 很热闹，标准还在 ICU。",
    "场面糊得亲妈都不认识。",
  ],
  question: "你，点不点头像开麦？",
  tags: ["“先审题，别急着站队。”", "“锐评可以，证据先过一遍。”", "“标准软了，后面全白干。”"],
  commentary: {
    kicker: "赛博判官自评",
    title: "赛博判官说",
    paragraphs: [
      "“真不是爱吵架，是听到‘差不多得了’就血压拉满。场面糊了可以再搅，逻辑糊了那就全员陪跑。”",
      "“所以我先审题，再审人。不是为了赢，是为了不让标准躺地上装死。”",
    ],
    quote: "赛博判官金句：逻辑不崩，场面随便糊。",
  },
};

const guestScenes = [
  {
    title: "Act I · 喜剧场：罗永浩自打嘴巴",
    count: "ACT 01",
    eyebrow: "Cyber Court Theater · Act I",
    label: "场景云",
    lines: [
      "当年发布会吹的牛，还在天上飞。",
      "直播间已经喊了 321 上链接。",
      "前后两套嘴，撞了个稀碎。",
    ],
    question: "这算打脸现场，还是版本升级补丁？",
    quotes: {
      meme: "“我不是为了输赢，我就是认真。”",
    },
    tags: ["“脸先放这，不赖账。”", "“系统升级中，请稍后。”", "“活儿不等人，干就完了。”"],
    photoLabel: "罗永浩名场面",
    name: "罗永浩",
    subtitle: "Same Type Guest / DLAH",
    image:
      "./assets/celebrity-cameos/dlah-cyber-judge-luo-yonghao-cameo-white-bg-v2.png",
    alt: "赛博判官与罗永浩的低多边形名场面合影",
    commentary: {
      kicker: "名人类型",
      title: "罗永浩型赛博判官",
      paragraphs: [
        "这是赛博判官的“打脸后还能开播”分支：嘴上标准很高，现实一来先被系统暴击，但不会装死。",
        "他的类型名场面不是永远正确，而是敢把旧话、新账和现实压力摆到同一张桌上审。脸可以肿，活儿还得干，bug 也得继续修。",
      ],
      quote: "罗永浩同款判官：脸可以肿，系统不能崩。",
    },
  },
  {
    title: "Act II · 正剧场：苏格拉底临终反向审题",
    count: "ACT 02",
    eyebrow: "Cyber Court Theater · Act II",
    label: "场景云",
    lines: [
      "陪审团全员就位，毒酒已倒好。",
      "全场等他认怂，他却举手：“请问‘罪’的定义是什么？”",
    ],
    question: "死线都到家门口了，你还要先抠字眼？",
    quotes: {
      meme: "“未经审视的人生是不值得过的。”",
    },
    tags: ["“先问定义，别急着判。”", "“概念不过审，讨论不生效。”", "“追到答案服气为止。”"],
    photoLabel: "苏格拉底名场面",
    name: "苏格拉底",
    subtitle: "Same Type Guest / DLAH",
    image:
      "./assets/celebrity-cameos/dlah-cyber-judge-socrates-cameo-white-bg-v2.png",
    alt: "赛博判官与苏格拉底的低多边形名场面合影",
    commentary: {
      kicker: "名人类型",
      title: "苏格拉底型赛博判官",
      paragraphs: [
        "这是赛博判官的“死线前还要先定义”分支：别人已经准备投票了，他还在问这题到底怎么判。",
        "他的类型名场面不是故意抬杠，而是拒绝让混乱假装成共识。概念没过审，情绪再满也先靠边；一团乱麻，必须问成一条直线。",
      ],
      quote: "苏格拉底同款判官：死线在前，定义在先，情绪靠边。",
    },
  },
];

let verdictIndex = 0;
let activeDemoVersion = "standard";
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
      "#commentaryPanel h2, #commentaryPanel .commentary-lines p, #commentaryPanel blockquote",
      { autoAlpha: 0, y: 10 },
      { autoAlpha: 1, y: 0, duration: 0.28, stagger: 0.08 },
      "-=0.04",
    );
}

function getSceneQuestion(scene) {
  return scene.quotes?.[activeDemoVersion] || scene.question;
}

function renderTypeIntro() {
  const intro = demoVersions[activeDemoVersion].typeIntro;
  const introPanel = typeIntroText.closest(".result-intro");

  typeIntroTitle.textContent = intro.title;
  typeIntroText.textContent = intro.text;
  typeIntroPills.innerHTML = intro.pills.map((pill) => `<span>${pill}</span>`).join("");

  introPanel.classList.remove("is-copy-switching");
  void introPanel.offsetWidth;
  introPanel.classList.add("is-copy-switching");
}

function updateDemoButtons() {
  demoVersionButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.demoVersion === activeDemoVersion);
  });
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
    `<p class="scene-question">${getSceneQuestion(scene)}</p>`,
  ].join("");
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
  guestPull.querySelector(".cord-handle").textContent = "请演员";
  judgeFlowButton.textContent = "请演员";
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
  guestPull.querySelector(".cord-handle").textContent = "换个人演";
  judgeFlowButton.textContent = "换一趴";

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

demoVersionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextVersion = button.dataset.demoVersion;
    if (!demoVersions[nextVersion] || nextVersion === activeDemoVersion) return;

    activeDemoVersion = nextVersion;
    updateDemoButtons();
    renderTypeIntro();

    if (isGuestMode) {
      renderGuestScene(guestIndex);
      return;
    }

    renderTypeScene();
  });
});

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
  copyText("测完 NBTI：赛博判官。不吹不黑，纯路人，有一说一。逻辑不崩，场面随便糊。", copyResultButton);
});

updateDemoButtons();
renderTypeIntro();
renderTypeScene();
