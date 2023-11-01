import React from "react";
import { WhyUsReasonTile } from "./WhyUsReasonTile";
export const WhyUs = () => {
    const reasons = [
        {
            reason: 'Family Tradition',
            imgSrc: require('../../../media/family-tradition.png'),
            reasonExcerpt: 'We are a proud family-run business with nearly 20 years of experience in the industry, passing down the art of ironwork through generations.'
        },
        {
            reason: 'Personalized Service and Design',
            imgSrc: require('../../../media/personalized-service.png'),
            reasonExcerpt: "As a small business, we take extra care of our clients, offering personalized attention, one-on-one consultations, and a personal touch that larger companies can't match."
        },
        {
            reason: 'Commitment to Quality',
            imgSrc: require('../../../media/commitment-to-quality.png'),
            reasonExcerpt: ' Our commitment to quality is unwavering. Every project we undertake is a reflection of our dedication to craftsmanship, durability, and timeless design.'
        },
        {
            reason: 'Client Satisfaction',
            imgSrc: require('../../../media/client-satisfaction.png'),
            reasonExcerpt: 'We prioritize your satisfaction above all else. Our focus is on delivering results that not only meet but exceed your expectations, ensuring your complete happiness with the end product.'
        },
        {
            reason: 'Local Expertise',
            imgSrc: require('../../../media/local-expertise.png'),
            reasonExcerpt: 'With deep roots in the San Fernando Valley and Los Angeles area, we understand the unique needs and tastes of our local community, allowing us to tailor our services to your preferences.'
        },
        {
            reason: 'Artistry and Innovation',
            imgSrc: require('../../../media/artistry-and-innovation.png'),
            reasonExcerpt: "At Alfredo's Ironwork, we blend traditional craftsmanship with modern innovation, creating ironwork that seamlessly combines the best of both worlds."
        },
        {
            reason: 'Fair and Transparent Pricing',
            imgSrc: require('../../../media/fair-transparent-pricing.png'),
            reasonExcerpt: 'We offer competitive and transparent pricing, ensuring you get exceptional value for your investment.'
        },
    ]
    return (
        <ul className="why-us-list">
            {reasons.map(reason => {
                return <WhyUsReasonTile reason={reason} key={Math.floor(Math.random() * (100 - 1 + 1) + 1)}/>
            })}
        </ul>
    )
}