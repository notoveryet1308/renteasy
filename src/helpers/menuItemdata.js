import list from './../images/list.png';
import speaker from './../images/speaker.png';
import quality from './../images/quality.png';

const Type = ['Apartment', 'Condo', 'House', 'Townhouse', 'Duplex', 'Loft', 'Room'];

const Beds = ['1','2','3','4','5','6','7','8','9+'];
const Baths = ['0.5','1','1.5','2','2.5','3','3.5','4','4.5','5','5.5','6','6.5','7','7.5','8','8.5','9+'];



const Featurelandlord = [
    {
        imgSrc: list,
        heading:'Create Your Listing',
        subtext:'Add your property in seconds with unlimited photos, description, and list of amenities. It’s easy and secure.' 
    },
    {
        imgSrc: speaker,
        heading:'Post Vacancies',
        subtext:"Post your rental listing on the platform to boost its visibility. Reach millions of renters through elaborate search mechanisms and interactive map."
    },
    {
        imgSrc: quality,
        heading: 'Find Quality Tenants',
        subtext: 'Receive all the crucial information on applicants. Review their applications and custom offers and pick the most suitable.'
    }
]

export {Type, Beds, Baths, Featurelandlord};