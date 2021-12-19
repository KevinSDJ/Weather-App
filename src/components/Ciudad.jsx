import React from 'react';
import './ciudad.css';



function CiudadDetail({ city }) {


    return (
        <div className="ciudad">
            <div className="container">
                <h2 className='inf_name_citi'>{city.name},{city.country}</h2>
                <div className='inf_sec1'>
                    <div className='sec1_temp'>
                        Feels like {city.feels_like}°
                        <p className='sec1_dt_temp'>{city.temp}°</p>
                    </div>
                    <div className='sec1_weather'>
                        {city.description}
                        <img src={`http://openweathermap.org/img/wn/${city.img}@2x.png`} alt={city.name} />
                    </div>
                </div>
                <div className='inf_sec2'>
                    <div className='c_inf_dt'>
                        <p className='subt_dtls_dt'>Clouds</p>
                        {city.clouds}%
                    </div>
                    <div className='c_inf_dt'>
                        <p className='subt_dtls_dt'>Humidity</p>
                        {city.humidity}%
                    </div>
                    <div className='c_inf_dt'>
                        <p className='subt_dtls_dt'>Pressure</p>
                        {city.pressure}hPa
                    </div>
                    <div className='c_inf_dt'>
                        <p className='subt_dtls_dt'>Wind speed</p>
                        {city.wind.speed} m/s
                    </div>
                </div>
                <hr style={{color:"white",border:"0.5px solid white"}}/>
            </div>
            
        </div>
    )

};

export default CiudadDetail;
