import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Pogledajte fantastične recepte!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Sendvič sa kuvanim jajima i avokadom'
              label='Doručak'
              path='/products'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Uživajte u ukusu smokvi, grožđa i jabuka'
              label='Užina'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Klasična italijanska pasta sa čeri paradajzom, spanaćem i mocarelom'
              label='Ručak'
              path='/products'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Brzi, jednostavni i ukusni čoko mafini'
              label='Desert'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Lagana mix salata'
              label='Večera'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
