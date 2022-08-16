
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
