/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import './breakfast.css';
import poha from './poha.jpg';
import corn from './cornflakes.jpg';
import ap from './alooparatha.jpg';
import makeDish from '../makeDish.js';
export default function breakfast(mainContent) {
  const desc1='Poha is a very light dish for those who don\'t munch a lot. Spice your breakfast up.';
  const item1 = makeDish(poha, 'Poha', desc1, 'items item1', 'title title1', 'dimg dimg1', 'desc desc1');

  const desc2='Who doesn\'t love a good old bowl of cornflakes with milk. Come on!';
  const item2 = makeDish(corn, 'Corn Flakes', desc2, 'items item2', 'title title2', 'dimg dimg2', 'desc desc2');

  const desc3='Looking for a breakfast to fill you up? Look no mo. Aloo paratha got you covered.';
  const item3 = makeDish(ap, 'Aloo Paratha', desc3, 'items item3', 'title title3', 'dimg dimg3', 'desc desc3');

  mainContent.appendChild(item1);
  mainContent.appendChild(item2);
  mainContent.appendChild(item3);
};
