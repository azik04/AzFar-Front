import React, { Component, useEffect } from 'react';
import Card from '../component/Card'

const Stadiums = () => {

    
    return (
        <section class="All_stadiums">
        <h2>Stadionu sifaris ele!!!</h2>        
        <div className='stadion_sifarisi_input'>
            <input type="text"></input>
        </div>
        <div class="stadion_all">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </section>
    );
}

export default Stadiums;
