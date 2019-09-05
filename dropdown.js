/*6. Код к задаче [здесь](https://codepen.io/dmgame/pen/WLgxxo)
 * Реализовать примитивный дропдаун. Изначально все `dropdown-menu` скрыты через класс `.d-none`. При клике на `dropdown-item` должен отображаться блок `dropdown-menu` который вложен именно в тот `dropdown-item` на котором произошел клик. При повторном клике на этот же `dropdown-item` блок `dropdown-menu` должен закрыться. При клике на любой другой `dropdown-item` уже открытый `dropdown-menu` должен закрываться, а на тот который кликнули - открываться. */

let dropdownItem = document.querySelectorAll(".dropdown-item");

for (let i = 0; i < dropdownItem.length; i++) {
  dropdownItem[i].addEventListener("click", function(event) {
    let element = event.currentTarget;

    let childElement = element.querySelector("div.dropdown-menu");
    closeMenu(childElement);
    childElement.classList.toggle("d-none");
  });
}
function closeMenu(childElem) {
  let allMenu = document.querySelectorAll(".dropdown-menu");

  for (let i = 0; i < allMenu.length; i++) {
    if (allMenu[i] !== childElem && !allMenu[i].classList.contains('d-none')) {
      allMenu[i].classList.add('d-none');
    }
  }
}
