"use strict";

const bar = document.querySelector(".bar");
setTimeout(() => {
    bar.style.setProperty("--progress", "75%");
}, 500);