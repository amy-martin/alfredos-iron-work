import React from "react";
export const Services = () => {
    const services = [
        {
            title: 'Balconies',
            description: 'Beautiful custom-made balconies for your home.',
            images: [{imageURL: '../../media/balcony-1.jpg'}, {imageURL: '../../media/balcony-2.jpg'}],
        },
        {
            title: 'Railings',
            description: 'Elegant railings designed to enhance your property.',
            images: [{imageURL: '../../media/'}],
        },
        {
            title: 'Doors',
            description: 'Stunning iron doors to make a grand entrance.',
            images: [{imageURL: '../../media/'}],
          },
        {
            title: 'Gates/Fences',
            description: 'Sturdy gates and fences to secure your property.',
            images: [{imageURL: '../../media/'}],
        },
        {
            title: 'Grilles/Security Bars',
            description: 'Durable grilles and security bars for safety.',
            images: [{imageURL: '../../media/'}],
        },
        {
            title: 'Furniture/Decorative Ironwork',
            description: 'Custom iron furniture and decorative pieces.',
            images: [{imageURL: '../../media/'}],
        },
        {
            title: 'Landscape Ironwork',
            description: 'Artistic ironwork to enhance your landscape.',
            images: [{imageURL: '../../media/'}],
        },
        {
            title: 'Repairs',
            description: 'Quality repair services for iron structures.',
            images: [{imageURL: '../../media/'}],
        },
        {
            title: 'Custom/Other',
            description: 'Tailored ironwork solutions for your specific needs.',
            images: [{imageURL: '../../media/'}],
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
                        <img src={require(image.imageURL)} alt={service.title} key={index}/>
                    })}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

