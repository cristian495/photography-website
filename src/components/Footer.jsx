import React from 'react'

const Footer = () => {
  return (
    <div className="container footer__container">
        <div className="footer__head">
            <h2 className='footer__title'>support@gmail.com</h2>
            <a href="mailto:support@egattor.com" className='footer__btn' ><i className='uil uil-arrow-up-right'></i></a>
        </div>
        <ul className="footer__links">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#exhibitions">Exhibitions</a></li>
        </ul>
    </div>
  )
}

export default Footer