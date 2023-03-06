/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import './lunch.css';
import pulao from './pulao.jpg';
import dr from './Daal-Roti.jpg';
import dosa from './dosa.jpg';
import makeDish from '../makeDish.js';

export default function lunch(mainContent) {
  const desc1='some generic text about how great this pulao is and why you should have it.';

  const item1 = makeDish(pulao, 'Pulao', desc1, 'items item1', 'title title1', 'dimg dimg1', 'desc desc1');

  const desc2='Some generic text about how healthy this Dal Roti is.';
  const item2 = makeDish(dr, 'Dal Roti', desc2, 'items item2', 'title title2', 'dimg dimg2', 'desc desc2');

  const desc3='Dosa is probably South India\'s most beloved dish. Come try the best there is.';
  const item3 = makeDish(dosa, 'Dosa', desc3, 'items item3', 'title title3', 'dimg dimg3', 'desc desc3');
  mainContent.appendChild(item1);
  mainContent.appendChild(item2);
  mainContent.appendChild(item3);
};

