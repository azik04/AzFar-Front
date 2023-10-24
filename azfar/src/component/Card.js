import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Card()  {
    useEffect(() =>{
        const Stad = async() => {
            try{
                axios.get(`https://localhost:7130/api/Stadium`).then((e)=>{
                    console.log(e.data);
                })
            }
            catch(error){
                console.log(error);
            }
        };
        Stad();
    },[1])
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
