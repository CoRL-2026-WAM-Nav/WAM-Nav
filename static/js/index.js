"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("site-menu");

function closeMenu() {
  menu.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}
menuToggle.addEventListener("click", function () {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  menu.classList.toggle("is-open", open);
});
menu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", closeMenu);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") closeMenu();
});
window.addEventListener("resize", function () {
  if (window.innerWidth > 760) closeMenu();
});

function activateTab(tablist, selected, focus) {
  tablist.querySelectorAll('[role="tab"]').forEach(function (tab) {
    const active = tab === selected;
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
    const panel = document.getElementById(tab.getAttribute("aria-controls"));
    panel.hidden = !active;
    if (!active) panel.querySelectorAll("video").forEach(function (video) { video.pause(); });
  });
  if (focus) selected.focus();
}
document.querySelectorAll('[role="tablist"]').forEach(function (tablist) {
  const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () { activateTab(tablist, tab, false); });
    tab.addEventListener("keydown", function (event) {
      let next = index;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = tabs.length - 1;
      else return;
      event.preventDefault();
      activateTab(tablist, tabs[next], true);
    });
  });
});

document.querySelectorAll(".table-scroll").forEach(function (region) {
  region.addEventListener("keydown", function (event) {
    if (event.target !== region || region.scrollWidth <= region.clientWidth) return;
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      region.scrollBy({ left: event.key === "ArrowRight" ? 100 : -100, behavior: "auto" });
    }
  });
});

document.querySelectorAll("video").forEach(function (video) {
  video.addEventListener("play", function () {
    document.querySelectorAll("video").forEach(function (other) {
      if (other !== video && !other.paused) other.pause();
    });
  });
});

const figureDialog = document.getElementById("figure-dialog");
const dialogImage = document.getElementById("figure-dialog-image");
const dialogCaption = document.getElementById("figure-dialog-caption");
let lastFigureButton = null;
document.querySelectorAll("[data-zoom]").forEach(function (button) {
  button.addEventListener("click", function () {
    lastFigureButton = button;
    dialogImage.src = button.dataset.zoom;
    dialogImage.alt = button.dataset.caption;
    dialogCaption.textContent = button.dataset.caption;
    document.getElementById("open-original-figure").href = button.dataset.zoom;
    figureDialog.showModal();
  });
});
document.getElementById("close-figure").addEventListener("click", function () { figureDialog.close(); });
figureDialog.addEventListener("click", function (event) {
  if (event.target === figureDialog) {
    const rect = figureDialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) figureDialog.close();
  }
});
figureDialog.addEventListener("close", function () {
  if (lastFigureButton) lastFigureButton.focus({ preventScroll: true });
});

function copyUsingSelection(text) {
  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();
  const copied = document.execCommand("copy");
  field.remove();
  if (!copied) throw new Error("Copy was unavailable");
}
const copyButton = document.getElementById("copy-citation");
const copyStatus = document.getElementById("copy-status");
let copyTimeout;
copyButton.addEventListener("click", async function () {
  const text = document.getElementById("bibtex").textContent.trim();
  try {
    if (navigator.clipboard && window.isSecureContext) {
      try { await navigator.clipboard.writeText(text); }
      catch (_) { copyUsingSelection(text); }
    } else copyUsingSelection(text);
    copyButton.textContent = "Copied!";
    copyStatus.textContent = "BibTeX citation copied to the clipboard.";
  } catch (_) {
    copyButton.textContent = "Select citation";
    copyStatus.textContent = "Automatic copy is unavailable. The citation is selected for manual copying.";
    const range = document.createRange();
    range.selectNodeContents(document.getElementById("bibtex"));
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }
  window.clearTimeout(copyTimeout);
  copyTimeout = window.setTimeout(function () { copyButton.textContent = "Copy citation"; }, 2600);
});

if ("IntersectionObserver" in window) {
  const navLinks = Array.from(menu.querySelectorAll("a"));
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      navLinks.forEach(function (link) {
        const active = link.getAttribute("href") === "#" + entry.target.id;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-15% 0px -65% 0px", threshold: 0 });
  document.querySelectorAll("main > section[id]").forEach(function (section) { observer.observe(section); });
}
