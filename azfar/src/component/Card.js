import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Card = ({ numberOfCards }) => {
  const [cards, setCards] = useState([]);

useEffect(() => {
  axios.get('https://localhost:7130/api/Stadium/GetStadiums')
    .then(res => {
      console.log(res.data);
      setCards(res.data.slice(0, numberOfCards));
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}, [numberOfCards]);

  return (
    <div className="stadion_all">
      {cards.map(card => (
        <Link
          to={{
            pathname: `/StadionInfo/${card.id}`,
            state: { stadium: card }
          }}
          className="stadion_bir"
          key={card.id}
        >
          <div className="stadion_bir_img">
          {card.stadiumPhoto && card.stadiumPhoto[0] ? (
  <img
    src={`https://localhost:7130/api/Stadium/GetStadiums/${card.stadiumPhoto[0].stadiumPhoto}`}
    alt=""
    width="100%"
  />
) : (
  <p>No image available</p>
)}
          </div>
          <div className="stadion_bir_txt">
            <p>{card.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;