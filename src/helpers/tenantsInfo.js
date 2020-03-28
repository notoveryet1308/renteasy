import tenant1_1 from './../images/tenants-landlord-img/tenant1-1.png';
import tenant1_2 from './../images/tenants-landlord-img/tenant1-2.png';
import tenant3_1 from './../images/tenants-landlord-img/tenant3-1.png';
import tenant3_2 from './../images/tenants-landlord-img/tenant3-2.png';
import tenant5_1 from './../images/tenants-landlord-img/tenant5-1.png';
import tenant5_2 from './../images/tenants-landlord-img/tenant5-2.png';

import signature from './../images/tenants-landlord-img/homeowner5-.png';



const TenantsInfo = [{
        heading: 'Know All Details Before Applying',
        text: 'Knowing your competition is a key point in getting the most transparent rental experience. Analyze other offers, know where you stand in the rental process and evaluate your real chances of getting a place.',
        img: [tenant1_1, tenant1_2 ]
    },
    {
        heading: 'eSign Rental Agreement',
        text: 'Your application has been approved – congratulations! No need to run across the town to sign a paper contract. We partnered with HelloSign to offer you the ability to execute legally binding documents online. Rentberry uses SSL encryption technology and provides a secure storage for your contracts.',
        img: signature
    },
    {
        heading: 'Request Tours Online',
        text: 'Found a perfect place? Schedule a tour online and make sure it matches the photos. Rentberry makes tour scheduling easy as 1-2-3. Pick a date and preferred time frame and we’ll help you synchronize your calendars with a landlord.',
        img: [tenant5_1, tenant5_2 ]
    },

    {
        heading: 'Request Maintenance Service',
        text: 'Maintenance requests are no longer headaches. Tired of making dozens of back-and-forth phone calls or writing emails about a broken sink? Should an issue occur during a long-term home renting, just describe it briefly and set the priority of your maintenance request.',
        img: [tenant3_1, tenant3_2]
    }
]

export default TenantsInfo;