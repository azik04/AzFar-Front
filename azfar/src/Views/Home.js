import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../component/Card';

const Home = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');

    if (token) {
      // Include the token in the request headers
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios.get('https://localhost:7130/api/Account/user', config)
        .then(res => {
          console.log(res.data);
          setUser(res.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    } else {
      console.error('No token found. User not authenticated.');
    }
  }, []);
    return (
<div>
    <div className="haqqimizda">
        <div className="haqqimizda_info">
            <div className="haqqimizda_info_img">
                <img src="http://www.azfar.az/img/logo.png" alt="" width="160px"/>
                <h2>Haqqimizda</h2>
                <p>2008-ci ildə təsis edilmiş Azfar Group şirkəti tam infrastruktura malik həvəskar və peşəkar futbol meydançalarının tikintisi və idarə edilməsi üzrə ixtisaslaşmışdır.</p>
                <p>Şirkətimiz bu illər ərzində uğurla fəaliyyət göstərərək ölkəmizdə həvəskar futbolun inkişafına və idmana olan marağın artırılmasına böyük töhvə vermişdir.</p>
                <p>Bu istiqamətdə Azfar Group beynəlxalq təcrübədən (dəqiq mühəndis hesablamaları) yararlanır, müasir standartlara cavab verən tikinti materiallarından (son nəsil süni ot örtüyü, xüsusi konstruksiyalar) istifadə edir və müştərilərə təklif etdiyi xidmətlər paketini (istirahət zonası, avtodayanacaq, açıq və qapalı tipli stadionlar) daim genişləndirir.</p>
            </div>
            <div class="haq_a">
                <a href="http://localhost:3000/Stadiums">Stadionu sec!</a>
            </div>
        </div>
    </div>
    <section className="zelda">
    <div className="carousel" aria-label="Gallery">
        <ol className="carousel__viewport">
            <li id="carousel__slide1" tabindex="0" className="carousel__slide">
            <div class="carousel__snapper">
                <a href="#carousel__slide4" className="carousel__prev"><img src="https://victorycup.ru/wp-content/uploads/2019/01/aquatic-palace7.jpeg" width="100%" height="100%" alt=""></img></a>
                <a href="#carousel__slide2" className="carousel__next">Go to next slide</a>
            </div>
          </li>
          <li id="carousel__slide2" tabindex="0" className="carousel__slide">
            <div className="carousel__snapper"></div>
                <a href="#carousel__slide1" className="carousel__prev"><img src="https://bakuplus.az/wp-content/uploads/2023/06/hddddd.jpg" height="100%" width="100%" alt=""></img></a>
                <a href="#carousel__slide3" className="carousel__next">Go to next slide</a>
          </li>
          <li id="carousel__slide3" tabindex="0" className="carousel__slide">
            <div className="carousel__snapper"></div>
                <a href="#carousel__slide2" className="carousel__prev"><img src="https://www.mys.gov.az/uploaded/sport-venue-image/gdgccSEsnhdK_medium-9_main.jpg" width="100%" height="100%" alt=""></img></a>
                <a href="#carousel__slide4" className="carousel__next">Go to next slide</a>
          </li>
          <li id="carousel__slide4" tabindex="0" className="carousel__slide">
                <div claclassNamess="carousel__snapper"></div>
                    <a href="#carousel__slide3" className="carousel__prev"><img src="https://www.bookteq.com/wp-content/uploads/2023/02/2.png" width="100%" height="100%" alt=""></img></a>
                    <a href="#carousel__slide1" className="carousel__next">Go to first slide</a>
            </li>
        </ol>
        <aside className="carousel__navigation">
            <ol className="carousel__navigation-list">
                <li className="carousel__navigation-item">
                    <a href="#carousel__slide1" className="carousel__navigation-button">Go to slide 1</a>
                </li>
                <li className="carousel__navigation-item">
                    <a href="#carousel__slide2" className="carousel__navigation-button">Go to slide 2</a>
                </li>
                <li className="carousel__navigation-item">
                    <a href="#carousel__slide3" className="carousel__navigation-button">Go to slide 3</a>
                </li>
                <li className="carousel__navigation-item">
                    <a href="#carousel__slide4" className="carousel__navigation-button">Go to slide 4</a>
                </li>
              </ol>
        </aside>
    </div>
</section>


    <section className="why_us">
        <div className="why_us_y">
            <h2>Niye AzFar?</h2>
            <div className="types">
                <div className="type">
                    <div className="type_i">
                        <i className="fa-solid fa-medal"></i>
                    </div>
                    <div className="type_p">
                        <p>BEYNƏLXALQ TƏCRÜBƏYƏ ƏSASLANAN PEŞƏKARLIQ</p>
                    </div>
                </div>
                <div className="type">
                    <div className="type_i">
                        <i className="fa-solid fa-glass-water-droplet"></i>
                    </div>
                    <div className="type_p">
                        <p> YÜKSƏK KEYFİYYƏTLİ
                            SÜNİ OT ÖRTÜYÜ</p>
                    </div>
                </div>
                <div className="type">
                    <div className="type_i">
                        <i className="fa-solid fa-futbol"></i>
                    </div>
                    <div className="type_p">
                        <p>AÇIQ VƏ QAPALI TİPLİ STADİONLAR</p>
                    </div>
                </div>
            </div>
            <div className="types">
                <div className="type">
                    <div className="type_i">
                        <i className="fa-solid fa-couch"></i>
                    </div>
                    <div className="type_p">
                        <p>İSTİRAHƏT ZONASI</p>
                    </div>
                </div>
                <div className="type">
                    <div className="type_i">
                        <i className="fa-solid fa-square-parking"></i>
                    </div>
                    <div className="type_p">
                        <p>AVTODAYANACAQ</p>
                    </div>
                </div>
                <div className="type">
                    <div className="type_i">
                        <i className="fa-regular fa-calendar-days"></i>
                    </div>
                    <div className="type_p">
                        <p>24 SAAT XİDMƏT</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="stadion">
        <h2>Stadionu sifaris ele!!!</h2>
            <Card numberOfCards={3}/>
     
    </section>
</div>
    );
}

export default Home;
