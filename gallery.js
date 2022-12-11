"use strict";
(function() {

  let currentPosition = 0;

  let images = [];


  window.addEventListener("load", init);

  /**
   * Initiates page on load
   */
  function init () {
    images = document.querySelectorAll("#screenshots div");
    let buttons = document.querySelectorAll(".navButton");
    buttons[0].addEventListener("click", switchLeft);
    buttons[1].addEventListener("click", switchRight);
    setInterval(switchRight, 3000);
  }

  function switchLeft() {
    let newPosition = currentPosition - 1;
    if (newPosition == -1) {
      newPosition = 4;
    }
    images[currentPosition].classList.add("hidden");
    images[newPosition].classList.remove("hidden");
    currentPosition = newPosition;
  }

  function switchRight() {
    let newPosition = currentPosition + 1;
    if (newPosition == 5) {
      newPosition = 0;
    }
    images[currentPosition].classList.add("hidden");
    images[newPosition].classList.remove("hidden");
    currentPosition = newPosition;
  }
})();