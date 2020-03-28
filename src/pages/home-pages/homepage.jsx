import React, { Component } from 'react';
import './homepage.styles.scss';
import Hero from '../../components/frontComponents/hero';
import BrandContainer from '../../components/frontComponents/brandContainer';
import FeaturedCities from './../../components/frontComponents/featuredCities';
import CustomerOffer from '../../components/customerOffer/customerOffer';
import StickyElement from '../../components/StickyComponent/StickyElement';
import ListCategory from '../../components/other/ListCategory';
import Footer from '../../components/footer/footer';
import MainNavigation from '../../components/Navigation/navigation';



export default class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
                <MainNavigation/>
                <Hero />
                <FeaturedCities />
                <BrandContainer />
                <div className="renteasy-def">
                    <h1>What is Renteasy ?</h1>
                    <div className="renteasy-text">
                        <p>Renteasy is a transparent rental application and price negotiation platform uniting tenants and landlords. It automates all the standard rental tasks from submitting personal information, customer offers and eSigning rental agreement to sending maintenance requests. Welcome to the Renteasy neighborhood – where new tenants are moving in every day!</p>

                    </div>
                    <div className='divider' />
                </div>

                <CustomerOffer/>
                <StickyElement/>
                <ListCategory/>
                <Footer/>
            </div>
        )
    }
}
