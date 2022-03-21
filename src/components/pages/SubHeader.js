import React,{Fragment} from 'react';
import Button from '../button';
import { Link } from 'react-router-dom';
import img from '../../images/svg-1.png';
import './SubHeader.css'

 const SubHeader = ({
     lightBg,
     topLine,
     lightText,
     lightTextDesc,
     headline,
     description,
     buttonLabel,
     alt,
     imgStart
 })=>{
  return (
    <div>
        <div className={lightBg ? 'home__hero-section':'home__hero-section darkBg'}>
            <div className='container'>
                <div className='row home__hero-row'
                style={{display:'flex',flexDirection:imgStart ==='start'?'row-reverse':'row'}}>
                    <div className='col'>
                        <div className='home__hero-img-wrapper'>
                            <img src={img} alt={alt} className="home__hero-img"/>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='home__hero-text-wrapper'>
                            <div className='top-line'>{topLine}</div>
                            <h1 className={lightText? 'heading':'heading dark'}>
                                {headline}
                            </h1>
                            <p className={lightTextDesc? 'home__hero-subtitle':'home__hero-subtitle dark'}>
                                {description}
                            </p>
                            <Link to="/sign-up">
                                <Button buttonSize='btn--wide' buttonColor='blue'>
                                    {buttonLabel}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default SubHeader;