import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const StadionInfo = () => {
    const [stadiumData, setStadiumData] = useState({});
    const [orderTimes, setOrderTimes] = useState([]);
    const [selectedOrderTime, setSelectedOrderTime] = useState('');
    const { id } = useParams();

    const handleOrderButtonClick = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`https://localhost:7130/api/Order`, {
                stadiumId: id,
                selectedOrderTime: selectedOrderTime
            });
    
            console.log('Order placed successfully:', response.data);
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };

    useEffect(() => {
        axios.get(`https://localhost:7130/api/Stadium/GetStadium?id=${id}`)
            .then(res => {
                console.log(res.data.result.data);
                setStadiumData(res.data.result.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
            axios.get(`https://localhost:7130/api/OrderTime`)
            .then(res => {
                console.log(res.data);
                setOrderTimes(res.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);
    return (
        <section className="stadion_sifarisi">
            <h1>Sifaris et!!!</h1>
            <div className="stadion_sifarisi_all">
                <div className="stadion_sifarisi_img">
                    <img src="http://www.azfar.az/files/stadium/main_galery_stadium_146668817525804.jpg" alt="" />
                </div>
                <div className="stadion_sifarisi_txt">
                    <div className="c">
                        <div className="d">
                            <div className="b">
                            <label htmlFor=""><i className="fa-solid fa-futbol"></i><p>Stadium</p></label>
                                <br />
                                <p><b>{stadiumData.name}</b></p>
                            </div>
                            <div className="b">
                            <label htmlFor=""><i className="fa-solid fa-futbol"></i><p>Stadium</p></label>
                                <br />
                                <select name="" id=""  value={selectedOrderTime}
                                    onChange={(e) => setSelectedOrderTime(e.target.value)}>
                                    {orderTimes.map(({ id, orderTimes: orderTimes }, index) => (
                                    <option key={index} value={id}><p>{orderTimes}</p></option>
                                    ))}
                                </select>
                            </div>
                            <div className="b">
                            <label htmlFor=""><i className="fa-solid fa-futbol"></i><p>Stadium</p></label>
                                <br />
                                <p>50$ - 60$</p>
                            </div>
                            <div className="b">
                                <label htmlFor=""><i className="fa-solid fa-futbol"></i><p>Stadium</p></label>
                                <br />
                                <p>{stadiumData.adress}</p>
                            </div>
                        </div>
                        <div className="e">
                            <div className="b">
                            <label htmlFor=""><i className="fa-solid fa-futbol"></i><p>Stadium</p></label>
                                <b />
                                <p>Длина - 40м</p>
                            </div>
                            <div className="b">
                            <label htmlFor=""><i className="fa-solid fa-futbol"></i><p>Stadium</p></label>
                                <br />
                                <p>Pulsuz cay elave olunur</p>
                            </div>
                            <div className="b">
                            <label htmlFor=""><i className="fa-solid fa-futbol"></i><p>Stadium</p></label>
                                <br />
                                <p>Pulsuz cekilis</p>
                            </div>
                            <div className="v">
                                <button onClick={(event) => handleOrderButtonClick(event)}><p>Sifaris et!</p></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StadionInfo;
