window.onload = function () {
  const itemList = document.getElementsByClassName('box__list-task');
  if (itemList.length < 1) {
    return false;
  }

  for (let item of itemList) {
    let itemNames = item.getElementsByClassName('task-item__name');

    for (let nameDom of itemNames) {
      let name = nameDom.innerHTML;
      if (name.trim().length < 1) {
        continue;
      }

      let index = name.indexOf('https://github.com');
      if (index != 1) {
        continue;
      }

      nameDom.innerHTML = '<a href="' + name + '" target="_blank">' + name + '</a>';
    }
  }
};