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

      let match = /\[(?<text>.+?)\]\((?<url>.+?)\)/g.exec(name);
      if (match == null) {
        continue;
      }

      if (match.groups.url.length < 1 || match.groups.text.length < 1) {
        continue;
      }

      nameDom.innerHTML = '<a href="' + match.groups.url + '" target="_blank">' + match.groups.text + '</a>';
    }
  }
};