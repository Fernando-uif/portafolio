"use strict";
window.addEventListener("scroll", function () {
    var listNode = document.querySelectorAll(".technologies__card-1") ||
        document.createElement("div");
    var firstElement = listNode[0];
    var position = firstElement.getBoundingClientRect().top;
    var tamanioPantalla = window.innerHeight / 2;
    for (var i = 0; i < listNode.length; i++) {
        var element = listNode[i];
        if (position < tamanioPantalla) {
            element.classList.add("technologies__fade_in");
            element.classList.remove("technologies__fade_out");
        }
        else {
            element.classList.remove("technologies__fade_in");
            element.classList.add("technologies__fade_out");
        }
    }
});
window.addEventListener("scroll", function () {
    var listNode = document.querySelectorAll(".technologies__card-2") ||
        document.createElement("div");
    var firstElement = listNode[0];
    var position = firstElement.getBoundingClientRect().top;
    var tamanioPantalla = window.innerHeight / 2;
    for (var i = 0; i < listNode.length; i++) {
        var element = listNode[i];
        if (position < tamanioPantalla) {
            element.classList.add("technologies__fade_in");
            element.classList.remove("technologies__fade_out");
        }
        else {
            element.classList.remove("technologies__fade_in");
            element.classList.add("technologies__fade_out");
        }
    }
});
window.addEventListener("scroll", function () {
    var listNode = document.querySelectorAll(".technologies__card-3") ||
        document.createElement("div");
    var firstElement = listNode[0];
    var position = firstElement.getBoundingClientRect().top;
    var tamanioPantalla = window.innerHeight / 2;
    for (var i = 0; i < listNode.length; i++) {
        var element = listNode[i];
        if (position < tamanioPantalla) {
            element.classList.add("technologies__fade_in");
            element.classList.remove("technologies__fade_out");
        }
        else {
            element.classList.remove("technologies__fade_in");
            element.classList.add("technologies__fade_out");
        }
    }
});
window.addEventListener("scroll", function () {
    var listNode = document.querySelectorAll(".technologies__card-4") ||
        document.createElement("div");
    var firstElement = listNode[0];
    var position = firstElement.getBoundingClientRect().top;
    var tamanioPantalla = window.innerHeight / 2;
    for (var i = 0; i < listNode.length; i++) {
        var element = listNode[i];
        if (position < tamanioPantalla) {
            element.classList.add("technologies__fade_in");
            element.classList.remove("technologies__fade_out");
        }
        else {
            element.classList.remove("technologies__fade_in");
            element.classList.add("technologies__fade_out");
        }
    }
});
window.addEventListener("scroll", function () {
    var listNode = document.querySelectorAll(".technologies__card-5") ||
        document.createElement("div");
    var firstElement = listNode[0];
    var position = firstElement.getBoundingClientRect().top;
    var tamanioPantalla = window.innerHeight / 2;
    for (var i = 0; i < listNode.length; i++) {
        var element = listNode[i];
        if (position < tamanioPantalla) {
            element.classList.add("technologies__fade_in");
            element.classList.remove("technologies__fade_out");
        }
        else {
            element.classList.remove("technologies__fade_in");
            element.classList.add("technologies__fade_out");
        }
    }
});
window.addEventListener("scroll", function () {
    var listNode = document.querySelectorAll(".technologies__card-6") ||
        document.createElement("div");
    var firstElement = listNode[0];
    var position = firstElement.getBoundingClientRect().top;
    var tamanioPantalla = window.innerHeight / 2;
    for (var i = 0; i < listNode.length; i++) {
        var element = listNode[i];
        if (position < tamanioPantalla) {
            element.classList.add("technologies__fade_in");
            element.classList.remove("technologies__fade_out");
        }
        else {
            element.classList.remove("technologies__fade_in");
            element.classList.add("technologies__fade_out");
        }
    }
});
window.addEventListener("scroll", function () {
    var listNode = document.querySelectorAll(".technologies__card-7") ||
        document.createElement("div");
    var firstElement = listNode[0];
    var position = firstElement.getBoundingClientRect().top;
    var tamanioPantalla = window.innerHeight / 2;
    for (var i = 0; i < listNode.length; i++) {
        var element = listNode[i];
        if (position < tamanioPantalla) {
            element.classList.add("technologies__fade_in");
            element.classList.remove("technologies__fade_out");
        }
        else {
            element.classList.remove("technologies__fade_in");
            element.classList.add("technologies__fade_out");
        }
    }
});
window.addEventListener("scroll", function () {
    var spanAnimations = document.querySelectorAll(".spanAnimation") ||
        document.createElement("div");
    var firstElement = spanAnimations[0];
    var position = firstElement.getBoundingClientRect().top;
    var tamanioPantalla = window.innerHeight / 2;
    for (var i = 0; i < spanAnimations.length; i++) {
        var element = spanAnimations[i];
        if (position < tamanioPantalla) {
            element.classList.add("experience__spanAnimation");
        }
        else {
            element.classList.remove("experience__spanAnimation");
        }
    }
});
window.addEventListener("scroll", function () {
    var spanAnimations = document.querySelectorAll(".projects__cards__container") ||
        document.createElement("div");
    var firstElement = spanAnimations[0];
    var position = firstElement.getBoundingClientRect().top;
    var widthOfWindow = window.innerWidth;
    var randoNumber = +(Math.random() * 10).toFixed(0);
    if (+widthOfWindow > 475) {
        for (var i = 0; i < 2; i++) {
            console.log(position);
            var element = spanAnimations[randoNumber];
            if (+position <= 100 && +position >= 50) {
                element.classList.add("projects__vibrate");
            }
            else if (+position >= 700 || +position >= -200) {
                element.classList.remove("projects__vibrate");
            }
        }
    }
    else {
        for (var i = 0; i < 2; i++) {
            var element = spanAnimations[randoNumber];
            if (+position <= 100 && +position >= 50) {
                element.classList.add("projects__vibrate");
            }
            else if (+position >= -600) {
                element.classList.remove("projects__vibrate");
            }
        }
    }
});
window.addEventListener("scroll", function () {
    var element = document.querySelector(".experience__title") ||
        document.createElement("div");
    var button = document.querySelector(".header__upButton") ||
        document.createElement("div");
    var heightOfWindow = window.innerHeight;
    var position = element.getBoundingClientRect().top;
    console.log({ position: position });
    console.log({ heightOfWindow: heightOfWindow });
    if (position < heightOfWindow) {
        button.classList.add("header__upButton-active");
    }
    else {
        button.classList.remove("header__upButton-active");
    }
});
var button = document.querySelector(".header__upButton") || document.createElement("div");
button.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
