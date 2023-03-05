/* eslint-disable max-len */
// eslint-disable-next-line require-jsdoc
export default function makeDish(image, title, desc, itemClass='', titleClass='', imgClass='', descClass='') {
  const item = document.createElement('div');
  const itemClasses = itemClass.split(' ');
  item.classList=itemClasses;

  const dish = new Image();
  dish.src=image;
  const imgClasses = imgClass.split(' ');
  dish.classList = imgClasses;

  const dishtitle = document.createElement('div');
  dishtitle.textContent=title;
  const titleClasses = titleClass.split(' ');
  dishtitle.classList=titleClasses;

  const dishdesc=document.createElement('div');
  dishdesc.textContent=desc;
  const descClasses = descClass.split(' ');
  dishdesc.classList =descClasses;

  const els = [dishtitle, dish, dishdesc];
  els.forEach((x) =>item.appendChild(x));

  return item;
}
