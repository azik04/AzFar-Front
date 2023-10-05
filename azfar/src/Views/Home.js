import React from 'react';
import Card from '../component/Card'

const Home = () => {
    return (
        <div>
             <header className="haqqimizda">
        <div className="haqqimizda_info">
            <div className="haqqimizda_info_img">
                <img src="http://www.azfar.az/img/logo.png" alt="" width="160px"/>
                <h1>Haqqimizda</h1>
                <p>2008-ci ildə təsis edilmiş Azfar Group şirkəti tam infrastruktura malik həvəskar və peşəkar futbol meydançalarının tikintisi və idarə edilməsi üzrə ixtisaslaşmışdır.</p>
                <p>Şirkətimiz bu illər ərzində uğurla fəaliyyət göstərərək ölkəmizdə həvəskar futbolun inkişafına və idmana olan marağın artırılmasına böyük töhvə vermişdir.</p>
                <p>Bu istiqamətdə Azfar Group beynəlxalq təcrübədən (dəqiq mühəndis hesablamaları) yararlanır, müasir standartlara cavab verən tikinti materiallarından (son nəsil süni ot örtüyü, xüsusi konstruksiyalar) istifadə edir və müştərilərə təklif etdiyi xidmətlər paketini (istirahət zonası, avtodayanacaq, açıq və qapalı tipli stadionlar) daim genişləndirir.</p>
            </div>
        </div>
    </header>

    <section className="why_us">
        <div className="why_us_y">
            <h1>Niye AzFar?</h1>
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
        <h1>Stadionu sifaris ele!!!</h1>
        <div className="stadion_all">
            <Card/>
            <Card/>
            <Card/>
        </div>
    </section>
        </div>
    );
}

export default Home;
