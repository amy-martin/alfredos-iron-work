import React from "react";
import { Link } from "react-router-dom";
export const Services = () => {
    const services = [
        {
            title: 'Balconies',
            description: 'Beautiful custom-made balconies for your home.',
            images: [{imageSrc: require('../../media/balcony-1.jpg')}, {imageSrc: require('../../media/balcony-2.jpg')}],
        },
        {
            title: 'Railings',
            description: 'Elegant railings designed to enhance your property.',
            images: [{imageSrc: require( '../../media/railing-1.jpg')}, {imageSrc: require( '../../media/railing-2.jpg')}, {imageSrc: require( '../../media/railing-4.jpg')}],
        },
        {
            title: 'Doors',
            description: 'Stunning iron doors to make a grand entrance.',
            images: [{imageSrc:require( '../../media/door-3.jpg')},{imageSrc:require( '../../media/door-1.jpg')}],
          },
        {
            title: 'Gates/Fences',
            description: 'Sturdy gates and fences to secure your property.',
            images: [{imageSrc:require( '../../media/gate-1.jpg')}, {imageSrc:require( '../../media/gate-2.jpg')}],
        },
        {
            title: 'Grilles/Security Bars',
            description: 'Durable grilles and security bars for safety.',
            images: [{imageSrc:require( '../../media/grille-1.jpg')}, {imageSrc:require( '../../media/grille-2.jpg')}, {imageSrc:require( '../../media/grille-3.jpg')}],
        },
        {
            title: 'Furniture/Decorative Ironwork',
            description: 'Custom iron furniture and decorative pieces.',
            images: [{imageSrc:require( '../../media/decorative.jpg')}, {imageSrc:require( '../../media/decorative-1.jpg')}, {imageSrc:require( '../../media/decorative-2.jpg')}, {imageSrc:require( '../../media/decorative-3.jpg')}, {imageSrc:require( '../../media/decorative-4.jpg')}],
        },
        {
            title: 'Landscape Ironwork',
            description: 'Artistic ironwork to enhance your landscape.',
            images: [{imageSrc:require( '../../media/landscape-1.jpg')}, {imageSrc:require( '../../media/landscape-2.jpg')}],
        },
        {
            title: 'Repairs/Enhancements',
            description: 'Quality repair services for iron structures.',
            images: [{imageSrc:require( '../../media/repair.jpg')}],
        },
        {
            title: 'Custom/Other',
            description: 'Tailored ironwork solutions for your specific needs.',
            images: [{imageSrc:require( '../../media/custom-1.jpg')}, {imageSrc:require( '../../media/custom-2.jpg')}],
        },
      ];

    
      return (
        <div className="services-container">
            <h2 className="title">OUR SERVICES</h2>
            <div className="services-list">
                {services.map((service, index) => (
                <div className="service" key={index}>
                    <div className="img-container">
                        {service.images.map((image, index) => {
                            return <img className='service-image' src={image.imageSrc} alt={service.title} key={index} id={`${image.imageSrc}`}/>
                        })}
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
                ))}
            </div>
            <p class="disclaimer">
                <strong>DISCLAIMER: </strong>The images displayed on this page are for illustrative purposes only and have been sourced from various online 
                platforms. They serve as examples to better illustrate the scope and capabilities of our work. For a comprehensive showcase of our actual projects and 
                craftsmanship, we invite you to explore our <Link to='/gallery'>Gallery</Link> section. There, you will find a curated collection of our completed works, providing a 
                more accurate representation of the quality and diversity of our services.We appreciate your understanding and welcome any inquiries you may 
                have regarding our portfolio or services.
            </p>

        </div>
      );
}

