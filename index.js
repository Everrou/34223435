
let input = document.querySelector(".field__form__input");
let btn = document.querySelector(".field__form__btn");
let check = document.querySelector(".result__check__out");
let help = document.querySelector(".result__help__out");
let count = document.querySelector(".result__count__out");

let item = 0;
let randNum = 1 + Math.floor(Math.random() * 100);
let userNum;

btn.onclick = function (evt) {
  evt.preventDefault();
  userNum = input.value;
  console.log(userNum, randNum);
  if (userNum > randNum) {
    check.textContent = "Пока что не угадал айтишник";
    help.textContent = "Многовато будет айтишник";
    item++;
    count.textContent = item;
  } else if (userNum < randNum) {
    check.textContent = "Пока что не угадал айтишник";
    help.textContent = "Маловато будет айтишник";
    item++;
    count.textContent = item;
  } else {
    check.textContent = "Поздравляю! Вы угадали число айтишник";
    help.textContent = "В самый раз айтишник";
    item++;
    count.textContent = item;
  }
};