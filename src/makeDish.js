/* eslint-disable max-len */
// eslint-disable-next-line require-jsdoc
export default function makeDish(image, title, desc, itemClass='', titleClass='', imgClass='', descClass='') {
  const item = document.createElement('div');
  item.className=itemClass;

  const dish = new Image();
  dish.src=image;
  dish.className = imgClass;

  const dishtitle = document.createElement('div');
  dishtitle.textContent=title;
  dishtitle.className=titleClass;

  const dishdesc=document.createElement('div');
  dishdesc.textContent=desc;
  dishdesc.className =descClass;

  const els = [dishtitle, dish, dishdesc];
  els.forEach((x) =>item.appendChild(x));
  return item;
}
