import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        };
    }

    componentDidMount() {
        axios.get('https://localhost:7130/api/Stadium/GetStadiums')
            .then(res => {
                console.log(res.data);
                this.setState({ cards: res.data });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    render() {
        return (
            <div className="stadion_all">
                {this.state.cards.map(card => (
                    <Link
                        to={{
                            pathname: "/StadionInfo/" +card.id,
                            state: { stadium: card }
                        }}
                        className="stadion_bir"
                        key={card.id}
                    >
                        <div className="stadion_bir_img">
                            <img src="http://www.azfar.az/files/stadium/main_galery_stadium_146668817525804.jpg" alt="" width="100%" />
                        </div>
                        <div className="stadion_bir_txt">
                            <p>{card.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        );
    }
}

export default Card;