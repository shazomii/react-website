import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

import img1 from '../assets/img/portfolio/01-thumbnail.jpg';
import img2 from '../assets/img/portfolio/02-thumbnail.jpg';
import img3 from '../assets/img/portfolio/03-thumbnail.jpg';
import img4 from '../assets/img/portfolio/04-thumbnail.jpg';
import img5 from '../assets/img/portfolio/05-thumbnail.jpg';
import img6 from '../assets/img/portfolio/06-thumbnail.jpg';

const portfolio = [
    { title: 'Education', subtitle: 'Timeline for education', img: img1 },
    { title: 'Education', subtitle: 'Timeline for education', img: img2 },
    { title: 'Education', subtitle: 'Timeline for education', img: img3 },
    { title: 'Education', subtitle: 'Timeline for education', img: img4 },
    { title: 'Education', subtitle: 'Timeline for education', img: img5 },
    { title: 'Education', subtitle: 'Timeline for education', img: img6 }
]

class Portfolio extends Component {
    render() {
        return (
            <section className="bg-light page-section" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Portfolio</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        {portfolio.map((item, index) => {
                            return <PortfolioItem {...item} key={index} />
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;