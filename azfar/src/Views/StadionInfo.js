import React from 'react';

const StadionInfo = () => {
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
                                <label for=""><i className="fa-solid fa-futbol"></i><p>Stadium</p></label>
                                <br />
                                <p><b> #267 Nomreli mekteb</b></p>
                            </div>
                            <div className="b">
                                <label for=""><i className="fa-solid fa-clock"></i><p>Vaxti sec</p></label>
                                <br />
                                <select name="" id="">
                                    <option value=""><p>aa</p></option>
                                    <option value=""><p>bb</p></option>
                                </select>
                            </div>
                            <div className="b">
                                <label for=""><i className="fa-solid fa-money-bill"></i><p>Giymet</p></label>
                                <br />
                                <p>50$ - 60$</p>
                            </div>
                            <div className="b">
                                <label for=""><i className="fa-solid fa-location-dot"></i><p>Unvan</p></label>
                                <br />
                                <p>9 mkrn Mir celal kucesi 59</p>
                            </div>
                        </div>
                        <div className="e">
                            <div className="b">
                                <label for=""><i className="fa-solid fa-ruler"></i><p>Olcu</p></label>
                                <b />
                                <p>Длина - 40м</p>
                            </div>
                            <div className="b">
                                <label for=""><i className="fa-solid fa-face-surprise"></i><p>Bonus</p></label>
                                <br />
                                <p>Pulsuz cay elave olunur</p>
                            </div>
                            <div className="b">
                                <label for=""><i className="fa-solid fa-camera-retro"></i><p>Cekilis</p></label>
                                <br />
                                <p>Pulsuz cekilis</p>
                            </div>
                            <div className="v">
                                <button><p>Sifaris et!</p></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StadionInfo;
