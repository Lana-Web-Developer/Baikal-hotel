"use strict";
const menuBtn = document.getElementById("menuBtn");
const menuList = document.getElementById("menuList");
const addressBlock = document.getElementById("address");
const additionalBlock = document.getElementById("additional-block");
const bookBtn = document.getElementById("book-btn");
const wrapper = document.querySelector(".wrapper");
const contactForm = document.createElement("form");
const formName = document.getElementById("formName");
const formTel = document.getElementById("formTel");
const formSuccess = document.createElement("div");
const formSendBtn = document.getElementById("form__btn-send");
const imgMobile = document.getElementById("img__mobile");
const imgFullscreen = document.getElementById("img__fullscreen");
const rooms = document.getElementById("rooms");
contactForm.id = "newContactForm";
contactForm.name = "newContactForm";
menuBtn.addEventListener("click", function openMenu() {
  menuList.classList.toggle("list_opened");
  if (menuBtn.classList.contains("menu__button")) {
    menuBtn.classList.toggle("menu__button");
    menuBtn.classList.toggle("menu__button_open");
    addressBlock.classList.toggle("address_opened");
    additionalBlock.style.background = "#ffffff";
    if (window.innerWidth > 767) {
      additionalBlock.style.display = "none";
    } else {
      additionalBlock.style.display = "block";
    }
  } else if (menuBtn.classList.contains("menu__button_open")) {
    menuBtn.classList.toggle("menu__button");
    menuBtn.classList.toggle("menu__button_open");
    addressBlock.classList.toggle("address_opened");
    if (window.innerWidth > 767) {
      additionalBlock.style.display = "block";
    } else {
      additionalBlock.style.display = "none";
    }
  }
});
bookBtn.addEventListener("click", function (event) {
  if (document.getElementById("newContactForm")) return;
  contactForm.className = "contactForm";
  contactForm.innerHTML =
    '<div class="form__wrapper"><h2>Заполните форму!</h2><p class="form__text">И наш специалист свяжется с вами в ближайшее время.</p><input required id="formName" class="form__name" type="text" placeholder="Ваше имя:"><input id="formTel" required class="form__tel" type="tel" placeholder="Телефон: 8999"><textarea class="form__comment" placeholder="Комментарий:"></textarea><button id="form__btn-send" class="form__btn">Забронировать</button></div>';
  wrapper.append(contactForm);
  setupFormCloseHandlers(contactForm);
});
function setupFormCloseHandlers(formElement) {
  function closeForm() {
    formElement.classList.add("fade-out");
    setTimeout(() => {
      formElement.remove();
    }, 300);
    document.removeEventListener("click", handleClickOutside);
    document.removeEventListener("keydown", handleEscapePress);
  }
  function handleClickOutside(event) {
    if (!formElement.contains(event.target) && event.target !== bookBtn) {
      closeForm();
    }
  }
  function handleEscapePress(event) {
    if (event.key === "Escape") {
      closeForm();
    }
  }
  setTimeout(() => {
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscapePress);
  }, 0);
}
window.addEventListener("DOMContentLoaded", function (e) {
  if (innerWidth > 425) {
    imgMobile.style.display = "none";
    imgFullscreen.style.display = "block";
  } else {
    imgMobile.style.display = "block";
    imgFullscreen.style.display = "none";
  }
});
