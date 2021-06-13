import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h3>Schemes Of ITI</h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            <CardItem
              src='images/img-4.jpg'
              text='APPRENTICESHIP TRAINING SCHEME '            
              path='/home'
            />
            <CardItem
              src='images/img-2.jpg'
              text='  CENTRE OF EXCELLENCE SCHEME(COE)'
              label='Adventure'      
              path='/home' 
           /> 
              <CardItem
              src='images/img-6.jpg'
              text=' MODULAR EMPLOYABLE SKILL (MES)   '      
             path='/home'
            />
          </ul>
          <ul className='cards__items'>
            
            <CardItem
              src='images/img-3.jpg'
              text='PUBLIC PRIVATE PARTNERSHIP(PPP)'      
              path='/home'
            />
            <CardItem
              src='images/img-1.jpg'
              text=' Private Training Providers (PTPs)'                    
              path='/home'
            />
               <CardItem
              src='images/img-4.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'        
             path='/services'
              />            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
