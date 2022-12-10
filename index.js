/**
 * Javascript file used by "Management Principles: The Office" webpage.
 * Created by: Vivek Hegde
 * Date:December 3, 2022
 *
 * This JS file contains all the methods to add functionality to the webpage. Its functions include
 * loading the tabs, clips, descriptions, and case studies from the HTML to arrays for faster
 * operations. It also includes function to handle the behavior of the webpage when "tabs" on the
 * page are clicked.
 */
"use strict";
(function() {

  let currentTopicLevel = 0;
  let newTopicLevel;

  let tabs = [];
  let clips = [];
  let descriptions = [];
  let caseStudies = [];
  window.addEventListener("load", init);

  /**
   * Initiates page on load
   */
  function init () {
    loadTabs();
    loadClips();
    loadDescriptions();
    loadCaseStudies();
  }

  /**
   * This function loads all the "tabs" from HTML to an array and adds an event listener
   * to each "tab"
   */
  function loadTabs() {
    let topicHeads = document.querySelectorAll("#tabs div");
    topicHeads.forEach(element => {
      element.addEventListener("click", toggleViews);
      tabs.push(element);
    });
  }

  /**
   * This function loads all the clips from HTML to an array
   */
  function loadClips() {
    let tvMaterials = document.getElementById("tv-container").children;
    for (let i = 0; i < tvMaterials.length; i++) {
      clips.push(tvMaterials[i]);
    }
  }

  /**
   * This function loads all the description of clips from HTML to an array
   */
  function loadDescriptions() {
    let clipDescriptions = document.getElementById("descriptions").children;
    for (let i = 0; i < clipDescriptions.length; i++) {
      descriptions.push(clipDescriptions[i]);
    }
  }

  /**
   * This function loads all the case studies from HTML to an array
   */
  function loadCaseStudies() {
    let studies = document.querySelectorAll("#case-studies div");
    studies.forEach(element => {
      caseStudies.push(element);
    });
  }

  /**
   * This function handles the functionality when a "tab" is clicked
   */
  function toggleViews() {
    // handle tab behavior
    // Updates the styles of the selected and deselected tabs
    tabs[currentTopicLevel].classList.remove("selected");
    this.classList.add("selected");
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].classList.contains("selected")) {
        newTopicLevel = i; // Updates the reference of the clicked "tab"
      }
    }

    handleClips();
    handleDescriptions();
    handleCaseStudies();
    // update current tab index
    currentTopicLevel = newTopicLevel;
  }

  /**
   * This function handles of the functionality of all clips associated with their respective "tabs"
   */
  function handleClips() {
    //handles clips behavior
    //pause video if a different tab is selected
    if (currentTopicLevel != 0 && currentTopicLevel != newTopicLevel) {
      clips[currentTopicLevel].pause();
    }
    //update the video/text visible inside the TV
    clips[currentTopicLevel].classList.add("hidden");
    clips[newTopicLevel].classList.remove("hidden");
  }

  /**
   * This function handles the behavior of all description elements with respect to their "tabs"
   */
  function handleDescriptions() {
    //handle clips description behavior
    descriptions[currentTopicLevel].classList.add("hidden");
    descriptions[newTopicLevel].classList.remove("hidden");
  }

  /**
   * This function handles the behavior of all case studies with respect to their "tabs"
   */
  function handleCaseStudies() {
    //handle case-study behavior
    if (newTopicLevel == 0) {
      document.getElementById("case-studies").classList.add("hidden");
    } else {
      document.getElementById("case-studies").classList.remove("hidden");
      hideAllCaseStudies();
      caseStudies[newTopicLevel-1].classList.remove("hidden");
    }
  }

  /**
   * This function is a helper function that hides all the visible case study descriptions
   */
  function hideAllCaseStudies() {
    for (let i = 0; i < caseStudies.length; i++) {
      if (!caseStudies[i].classList.contains("hidden")) {
        caseStudies[i].classList.add("hidden");
      }
    }
  }
})();