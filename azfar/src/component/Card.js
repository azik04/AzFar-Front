import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <Link to="/StadionInfo" className="stadion_bir">
            <div className="stadion_bir_img">
                <img src="http://www.azfar.az/files/stadium/main_galery_stadium_146668817525804.jpg" alt="" width="100%"/>
            </div>
            <div className="stadion_bir_txt">
                <p>267 nomreli mekteb</p>
            </div>
        </Link>
    );
}

export default Card;
