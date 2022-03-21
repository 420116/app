import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import Button from '../button';

export default function Card(props) {
  return (
    <Fragment>
        <Link to="/sign-up" className='services__container-card'>
            <div className='services__container-cardInfo'>
                <img className="card__image" src={props.img}/>
                <p>{props.text}</p>
                <label>{props.label}</label>
                <Button buttonSize="btn--wide" buttonColor={props.buttonColor}>
                    More details
                </Button>
            </div>               
        </Link>
    </Fragment>
  )
}
