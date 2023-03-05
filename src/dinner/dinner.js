/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import './dinner.css';
import pp from './Saag-Paneer-FF.jpg';
import sp from './shahi-paneer.jpg';
import sc from './soyaChaap.jpeg';
import makeDish from '../makeDish.js';
export default function dinner(mainContent) {
  // eslint-disable-next-line max-len
  const desc1='some generic text about how great this palak paneer is why you should have it.';
  const item1 = makeDish(pp, 'Palak Panner', desc1, 'items item1', 'title title1', 'dimg dimg1', 'desc desc1');

  const desc2='Some generic text about how great this shahi paneer is';
  const item2 = makeDish(sp, 'Shahi Paneer', desc2, 'items item2', 'title title2', 'dimg dimg2', 'desc desc2');

  const desc3='Trust me you will love soya chaap with rice, everyone does. If you don\'t you\' weird';
  const item3 = makeDish(sc, 'Soya Chaap', desc3, 'items item3', 'title title3', 'dimg dimg3', 'desc desc3');

  mainContent.appendChild(item1);
  mainContent.appendChild(item2);
  mainContent.appendChild(item3);
};
