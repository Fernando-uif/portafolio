window.addEventListener("scroll", () => {
  const listNode: NodeList =
    document.querySelectorAll(".technologies__card-1") ||
    document.createElement("div");
  const firstElement: HTMLElement = listNode[0] as HTMLElement;
  const position = firstElement.getBoundingClientRect().top;
  const tamanioPantalla = window.innerHeight / 2;

  for (let i = 0; i < listNode.length; i++) {
    let element: HTMLElement = listNode[i] as HTMLElement;
    if (position < tamanioPantalla) {
      element.classList.add("technologies__fade_in");
      element.classList.remove("technologies__fade_out");
    } else {
      element.classList.remove("technologies__fade_in");
      element.classList.add("technologies__fade_out");
    }
  }
});

window.addEventListener("scroll", () => {
  const listNode: NodeList =
    document.querySelectorAll(".technologies__card-2") ||
    document.createElement("div");
  const firstElement: HTMLElement = listNode[0] as HTMLElement;
  const position = firstElement.getBoundingClientRect().top;
  const tamanioPantalla = window.innerHeight / 2;

  for (let i = 0; i < listNode.length; i++) {
    let element: HTMLElement = listNode[i] as HTMLElement;
    if (position < tamanioPantalla) {
      element.classList.add("technologies__fade_in");
      element.classList.remove("technologies__fade_out");
    } else {
      element.classList.remove("technologies__fade_in");
      element.classList.add("technologies__fade_out");
    }
  }
});
window.addEventListener("scroll", () => {
  const listNode: NodeList =
    document.querySelectorAll(".technologies__card-3") ||
    document.createElement("div");
  const firstElement: HTMLElement = listNode[0] as HTMLElement;
  const position = firstElement.getBoundingClientRect().top;
  const tamanioPantalla = window.innerHeight / 2;

  for (let i = 0; i < listNode.length; i++) {
    let element: HTMLElement = listNode[i] as HTMLElement;
    if (position < tamanioPantalla) {
      element.classList.add("technologies__fade_in");
      element.classList.remove("technologies__fade_out");
    } else {
      element.classList.remove("technologies__fade_in");
      element.classList.add("technologies__fade_out");
    }
  }
});
window.addEventListener("scroll", () => {
  const listNode: NodeList =
    document.querySelectorAll(".technologies__card-4") ||
    document.createElement("div");
  const firstElement: HTMLElement = listNode[0] as HTMLElement;
  const position = firstElement.getBoundingClientRect().top;
  const tamanioPantalla = window.innerHeight / 2;

  for (let i = 0; i < listNode.length; i++) {
    let element: HTMLElement = listNode[i] as HTMLElement;
    if (position < tamanioPantalla) {
      element.classList.add("technologies__fade_in");
      element.classList.remove("technologies__fade_out");
    } else {
      element.classList.remove("technologies__fade_in");
      element.classList.add("technologies__fade_out");
    }
  }
});
window.addEventListener("scroll", () => {
  const listNode: NodeList =
    document.querySelectorAll(".technologies__card-5") ||
    document.createElement("div");
  const firstElement: HTMLElement = listNode[0] as HTMLElement;
  const position = firstElement.getBoundingClientRect().top;
  const tamanioPantalla = window.innerHeight / 2;

  for (let i = 0; i < listNode.length; i++) {
    let element: HTMLElement = listNode[i] as HTMLElement;
    if (position < tamanioPantalla) {
      element.classList.add("technologies__fade_in");
      element.classList.remove("technologies__fade_out");
    } else {
      element.classList.remove("technologies__fade_in");
      element.classList.add("technologies__fade_out");
    }
  }
});
window.addEventListener("scroll", () => {
  const listNode: NodeList =
    document.querySelectorAll(".technologies__card-6") ||
    document.createElement("div");
  const firstElement: HTMLElement = listNode[0] as HTMLElement;
  const position = firstElement.getBoundingClientRect().top;
  const tamanioPantalla = window.innerHeight / 2;

  for (let i = 0; i < listNode.length; i++) {
    let element: HTMLElement = listNode[i] as HTMLElement;
    if (position < tamanioPantalla) {
      element.classList.add("technologies__fade_in");
      element.classList.remove("technologies__fade_out");
    } else {
      element.classList.remove("technologies__fade_in");
      element.classList.add("technologies__fade_out");
    }
  }
});
window.addEventListener("scroll", () => {
  const listNode: NodeList =
    document.querySelectorAll(".technologies__card-7") ||
    document.createElement("div");
  const firstElement: HTMLElement = listNode[0] as HTMLElement;
  const position = firstElement.getBoundingClientRect().top;
  const tamanioPantalla = window.innerHeight / 2;

  for (let i = 0; i < listNode.length; i++) {
    let element: HTMLElement = listNode[i] as HTMLElement;
    if (position < tamanioPantalla) {
      element.classList.add("technologies__fade_in");
      element.classList.remove("technologies__fade_out");
    } else {
      element.classList.remove("technologies__fade_in");
      element.classList.add("technologies__fade_out");
    }
  }
});
window.addEventListener("scroll", () => {
  const spanAnimations: NodeList =
    document.querySelectorAll(".spanAnimation") ||
    document.createElement("div");
  const firstElement: HTMLElement = spanAnimations[0] as HTMLElement;
  const position = firstElement.getBoundingClientRect().top;
  const tamanioPantalla = window.innerHeight / 2;
  for (let i = 0; i < spanAnimations.length; i++) {
    let element: HTMLElement = spanAnimations[i] as HTMLElement;
    if (position < tamanioPantalla) {
      element.classList.add("experience__spanAnimation");
    } else {
      element.classList.remove("experience__spanAnimation");
    }
  }
});
window.addEventListener("scroll", () => {
  const spanAnimations: NodeList =
    document.querySelectorAll(".projects__cards__container") ||
    document.createElement("div");
  const firstElement: HTMLElement = spanAnimations[0] as HTMLElement;
  const position = firstElement.getBoundingClientRect().top;
  const widthOfWindow = window.innerWidth;
  let randoNumber = +(Math.random() * 10).toFixed(0);

  if (+widthOfWindow > 475) {
    for (let i = 0; i < 2; i++) {
      let element: HTMLElement = spanAnimations[randoNumber] as HTMLElement;
      if (+position <= 100 && +position >= 50) {
        element.classList.add("projects__vibrate");
      } else if (+position >= 700 || +position >= -200) {
        element.classList.remove("projects__vibrate");
      }
    }
  } else {
    for (let i = 0; i < 2; i++) {
      let element: HTMLElement = spanAnimations[randoNumber] as HTMLElement;
      if (+position <= 100 && +position >= 50) {
        element.classList.add("projects__vibrate");
      } else if (+position >= -600) {
        element.classList.remove("projects__vibrate");
      }
    }
  }
});
window.addEventListener("scroll", () => {
  let element: HTMLDivElement =
    document.querySelector(".experience__title") ||
    document.createElement("div");
  let button: HTMLDivElement =
    document.querySelector(".header__upButton") ||
    document.createElement("div");
  const heightOfWindow = window.innerHeight;
  const position = element.getBoundingClientRect().top;
  if (position < heightOfWindow) {
    button.classList.add("header__upButton-active");
  } else {
    button.classList.remove("header__upButton-active");
  }  
});

let button: HTMLDivElement =
  document.querySelector(".header__upButton") || document.createElement("div");
button.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
