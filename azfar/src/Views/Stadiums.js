import React, { Component, useEffect } from 'react';
import Card from '../component/Card'

const Stadiums = () => {

    
    return (
        <section class="All_stadiums">
        <h2>Stadionu sifaris ele!!!</h2>        
        <div className='stadion_sifarisi_input'>
            <input type="text" placeholder='Search the Stadium'></input>
        </div>
        
            <Card/>
            
    </section>
    );
}

export default Stadiums;
