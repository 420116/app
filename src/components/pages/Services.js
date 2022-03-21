import React from 'react';
import { IconContext } from 'react-icons/lib';
import './Services.css'; 
import img from '../../images/hair.jpg';
import ped from '../../images/pedicure.jpeg';
import scare from '../../images/skincare.jpeg';
import makeup from '../../images/makeup.jpeg';
import svgimage from '../../images/svg-10.jpeg';
import Card from './Card';

const Services = ()=> {
  return (
    <IconContext.Provider value={{color:'#fff',size:64}}>
        <div className='services__section'>
            <div className='services__wrapper'>
                <h1 className='services__heading'>
                     Services We Offer..
                </h1>
                <p className='services__para'>
                    Treat yourself to one of our signature services. Our beloved beauty experts will wow your brows, get you glowing and so much more. You’ll leave looking and feeling better than ever before.
                </p>
                <div className='services__container'>
                    <Card img={img} label="Improve your look with our professional haircut & hairstyling services." text="Hair" buttonColor="black"/>
                    <Card img={makeup}  label="Our makeup experts will have you looking your best in less than 30 minutes." text="MakeUp" buttonColor="black"/>
                    <Card img={ped}  label="Pamper yourself with our manicure & pedicure services that will bring sensational results." text="Manicure&Pedicure" buttonColor="black"/>
                    <Card img={scare} label="We offer a full range of relaxing skin care services, including all types of facials."  text="Skin Care" buttonColor="black"/>
                    <Card img={svgimage} label="We offer a full range of relaxing skin care services, including all types of facials."  text="Hair Treatment" buttonColor="black"/>
                </div>
            </div>
        </div>
    </IconContext.Provider>
  )
};

export default Services;
