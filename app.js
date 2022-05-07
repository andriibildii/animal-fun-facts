import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';
const backgroung = (
  <img 
  className='background'
  alt='ocean'
  src='/images/ocean.jpg' 
  />
);

const showBackground = true;

const images =[];
for (const animal in animals) {
  images.push(
    <img 
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      ariaLabel={animal}
      role='button'
      onClick={displayFact}
    />
  )
};

function displayFact(e) {
  const selectedAnimale = e.target.alt;
  const animalFacts = animals[selectedAnimale];
  const randomAnimaFact = Math.floor(Math.random() * animalFacts.facts.length);
  const funFact = animalFacts.facts[randomAnimaFact];
  document.getElementById('fact').innerHTML = funFact;
}

const animalFacts = (
  <div>
    {showBackground && backgroung}
    <div className='animals'>
      {images}
    </div>
    <h1>
      {title || 'Click an animal for a fun fact'}
    </h1>
    <p id='fact'></p>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById('root'));