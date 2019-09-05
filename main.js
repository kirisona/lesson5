/* 1. По нажатию на кнопку `"btn-msg"` должен появиться алерт с тем текстом который находится в атрибуте `data-text` у кнопки. */

let btnMessage = document.getElementById("btn-msg");

btnMessage.addEventListener("click", function(event) {
  event.preventDefault();
  alert(btnMessage.dataset.text);
});

/* 2. При наведении указателя мыши на `"btn-msg"`, кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса. */

let btnMessage2 = document.getElementById("btn-msg");

btnMessage2.addEventListener("mouseover", function(event) {
  event.preventDefault();

  btnMessage2.classList.add("modifier");
});

btnMessage2.addEventListener("mouseout", function(event) {
  event.preventDefault();

  btnMessage2.classList.toggle("modifier");
});

/* 3. При нажатии на любой узел документа показать в элементе с `id=tag` имя тега нажатого элемента. */

let targetInfo = document.getElementById("tag");
console.log(targetInfo);
window.addEventListener("click", showTagName);

function showTagName(event) {
  targetInfo.textContent = "Tag: " + event.target.tagName;
}

/* 4. При нажатии на кнопку `btn-generate` добавлять в список `ul` элемент списка `Li` с текстом `Item` + порядковый номер `Li` по списку, т.е `Item 3`, `Item 4` и т.д  */

let liGenerate = document.getElementById("btn-generate");

liGenerate.addEventListener("click", function(event) {
  event.preventDefault();

  let list = document.querySelector("ul");

  list.appendChild(document.createElement("li"));

  let listLi = document.querySelectorAll('li');

  list.lastChild.textContent = `Item ${listLi.length}`;
});
