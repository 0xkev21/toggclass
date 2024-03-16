const toggleClassList = (
  btn,
  target,
  className = 'show',
  eventtype = 'click',
  removeShown = true,
  removeOnUnfocus = true,
  ) => {
  console.log('Test');
  const removeShownItems = () => {
    const itemsToRemove = document.querySelectorAll('.'+className);
    itemsToRemove.forEach((item) => {
      if(item !== target && item !== btn)
      item.classList.remove(className);
    });
  };
  btn.addEventListener(eventtype, () => {
    if(removeShown) {
      removeShownItems();
    }
    target.classList.toggle(className);
    btn.classList.toggle(className);
  });
  if(removeOnUnfocus) {
    document.body.addEventListener('click', (e) => {
      const clickedInsideTarget = target.contains(e.target);
      if(!clickedInsideTarget && e.target !== btn) {
        target.classList.remove('show');
        btn.classList.remove('show');
      }
    });
  }
};

module.exports = toggleClassList;