import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

// Re-usable components
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import Clients from '../Common/Clients';
import Timeline from '../Common/Timeline';
import Team from '../Common/Team';
import Contact from './Contact';

class Home extends Component {
    render() {
        return (
            <div>
                <Header
                    title="Welcome To Our Studio!"
                    subtitle="IT'S VERY NICE TO MEET YOU"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={true}
                    image={image}
                />
                <Services />
                <Portfolio />
                <Timeline />
                <Team />
                <Clients />
                <Contact />
            </div>
        )
    }
}

export default Home;