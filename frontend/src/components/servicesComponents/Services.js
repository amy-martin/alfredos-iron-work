import React from "react";
import { Link } from "react-router-dom";
export const Services = () => {

    
    const services = [
        {
            title: 'Balconies',
            description: 'Beautiful custom-made balconies for your home.',
            images: [{imageSrc: require('../../media/balcony-examples/balcony-1.jpeg')}, {imageSrc: require('../../media/balcony-examples/balcony-2.jpeg')}, {imageSrc: require('../../media/balcony-examples/balcony-3.jpeg')},{imageSrc: require('../../media/balcony-examples/balcony-4.jpeg')},{imageSrc: require('../../media/balcony-examples/balcony-5.jpeg')},{imageSrc: require('../../media/balcony-examples/balcony-6.jpeg')},],
        },
        {
            title: 'Railings',
            description: 'Elegant railings designed to enhance your property.',
            images: [ {imageSrc: require( '../../media/railing-examples/railing-1.jpeg')},{imageSrc: require( '../../media/railing-examples/railing-2.jpeg')},{imageSrc: require( '../../media/railing-examples/railing-3.jpeg')},{imageSrc: require( '../../media/railing-examples/railing-4.jpeg')},{imageSrc: require( '../../media/railing-examples/railing-5.jpeg')},{imageSrc: require( '../../media/railing-examples/railing-6.jpeg')},],
        },
        {
            title: 'Doors',
            description: 'Stunning iron doors to make a grand entrance.',
            images: [{imageSrc:require( '../../media/door-examples/door-1.jpeg')},{imageSrc:require( '../../media/door-examples/door-2.jpeg')}, {imageSrc:require( '../../media/door-examples/door-3.jpeg')}, {imageSrc:require( '../../media/door-examples/door-4.jpeg')}, {imageSrc:require( '../../media/door-examples/door-5.jpeg')}],
          },
        {
            title: 'Gates/Fences',
            description: 'Sturdy gates and fences to secure your property.',
            images: [{imageSrc:require( '../../media/gate-examples/gate-1.jpeg')},{imageSrc:require( '../../media/gate-examples/gate-2.jpeg')}, {imageSrc:require( '../../media/gate-examples/gate-3.jpeg')}, {imageSrc:require( '../../media/gate-examples/gate-4.jpeg')}, {imageSrc:require( '../../media/gate-examples/gate-5.jpeg')}, {imageSrc:require( '../../media/gate-examples/gate-6.jpeg')}, {imageSrc:require( '../../media/gate-examples/gate-7.jpeg')}],
        },
        {
            title: 'Grilles/Security Bars',
            description: 'Durable grilles and security bars for safety.',
            images: [{imageSrc:require( '../../media/grilles-examples/grille-1.jpeg')}, {imageSrc:require( '../../media/grilles-examples/grille-2.jpeg')}, {imageSrc:require( '../../media/grilles-examples/grille-3.jpeg')}, {imageSrc:require( '../../media/grilles-examples/grille-4.jpeg')}, {imageSrc:require( '../../media/grilles-examples/grille-5.jpeg')}],
        },
        {
            title: 'Furniture/Decorative',
            description: 'Custom iron furniture and decorative pieces.',
            images: [{imageSrc:require( '../../media/decorative-examples/decorative-1.jpeg')}, {imageSrc:require( '../../media/decorative-examples/decorative-2.jpeg')}, {imageSrc:require( '../../media/decorative-examples/decorative-3.jpeg')}],
        },
        {
            title: 'Landscape Ironwork',
            description: 'Artistic ironwork to enhance your landscape.',
            images: [{imageSrc:require( '../../media/landscape-examples/landscape-2.jpeg')},{imageSrc:require( '../../media/landscape-examples/landscape-3.jpeg')},{imageSrc:require( '../../media/landscape-examples/landscape-4.jpeg')}],
        },
        {
            title: 'Repairs/Enhancements',
            description: 'Quality repair and enhancement services for iron structures.',
            images: [{imageSrc:require( '../../media/repair.jpeg')}],
        },
        {
            title: 'Custom/Other',
            description: 'Tailored ironwork solutions for your specific needs.',
            images: [{imageSrc:require( '../../media/custom-examples/custom-1.jpeg')}, {imageSrc:require( '../../media/custom-examples/custom-2.jpeg')}, {imageSrc:require( '../../media/custom-examples/custom-3.jpeg')}],
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

