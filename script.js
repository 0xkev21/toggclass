import toggleClassList from './toggleClassList.js';

const dropDownBtns = document.querySelectorAll('.down-icon');
dropDownBtns.forEach(btn => {
  const target = btn.nextElementSibling;
  toggleClassList(btn, target, 'show', 'click', true, true);
});

