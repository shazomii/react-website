import React, { Component } from 'react';
import ClientItem from './ClientItem';

import img1 from '../assets/img/logos/envato.jpg';
import img2 from '../assets/img/logos/creative-market.jpg';
import img3 from '../assets/img/logos/designmodo.jpg';
import img4 from '../assets/img/logos/themeforest.jpg';

const client = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 }
]

class Clients extends Component {
    render() {
        return (
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        {client.map((item, index) => {
                            return <ClientItem {...item} key={index} />
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default Clients;