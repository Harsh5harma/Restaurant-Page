/* eslint-disable no-unused-vars */
console.log('gandu number 1');
import './style.css';
import breakfast from './breakfast.js';
import lunch from './lunch.js';
import dinner from './dinner.js';


const loaderFunc = (function() {
  const body = document.querySelector('body');
  body.style.margin='0px';
  const content = document.querySelector('#content');
  console.log(content);
  const header = document.createElement('div');
  const title = document.createElement('div');
  title.textContent='Ugly Restaurant';
  title.className='title';
  header.appendChild(title);
  const tabs = document.createElement('div');
  const b1 = document.createElement('button');
  b1.textContent='Breakfast';
  const b2 = document.createElement('button');
  b2.textContent='Lunch';
  const b3 = document.createElement('button');
  b3.textContent = 'Dinner';
  tabs.appendChild(b1);
  tabs.appendChild(b2);
  tabs.appendChild(b3);
  tabs.classList.add('tabs');
  header.classList.add('header');
  header.appendChild(tabs);
  const mainContent = document.createElement('div');
  mainContent.className = 'main';
  const footer = document.createElement('div');
  footer.className='footer';
  content.appendChild(header);
  content.appendChild(mainContent);
  content.append(footer);
  b1.addEventListener('click', ()=>{
    mainContent.textContent='';
    breakfast(mainContent);
  });
  b2.addEventListener('click', ()=>{
    mainContent.textContent='';
    lunch(mainContent);
  });
  b3.addEventListener('click', ()=>{
    mainContent.textContent='';
    dinner(mainContent);
  });
})();
