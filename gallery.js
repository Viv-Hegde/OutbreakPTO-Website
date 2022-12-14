/**
 * gallery.js file used by gameplay.html webpage of "Outbreak:PTO" website
 * Creator: Vivek Hegde
 *
 * This file contains methods to both automatically and manually transition to the next screenshot
 * picture in the gallery.
 */
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

  /**
   * Function to switch the current screenshot image to the previous image in the gallery.
   * If the current image is the first in the gallery the image will be switched to the last image in the gallery.
   */
  function switchLeft() {
    let newPosition = currentPosition - 1;
    if (newPosition == -1) {
      newPosition = 4;
    }
    images[currentPosition].classList.add("hidden");
    images[newPosition].classList.remove("hidden");
    currentPosition = newPosition;
  }

  /**
   * Function to switch the current screenshot image to the next image in the gallery.
   * If the current image is the last in the gallery the image will be switched to the first image in the gallery.
   */
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