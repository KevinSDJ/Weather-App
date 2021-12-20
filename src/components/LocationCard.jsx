import React from "react";
import './locationCard.css';




export default function LocCard({d}){
    if(d){
        const {clouds,main,name,sys,weather,wind}= d
        return(
        <div className="L_Card">
            <div className="L_CardCont">
                <div className="L_Section1">
                    <h2 className="L_title">{name},{sys.country}</h2>
                    <div className="L_SubSection1">
                        <div>
                            Feels like {main.feels_like}°
                            <h4 className="L_feels_like">{main.temp}°</h4> 
                        </div>
                        <div className="weat_sect">
                            {weather[0].description}
                            <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt={weather[0].description}/>
                        </div>
                        
                    </div>
                </div>
                <div className="L_Section2">
                   <div className="L_dt">
                       <p className="subt_dt">Humidity</p>
                       {main.humidity} %
                   </div>
                   <div  className="L_dt">
                       <p className="subt_dt">Wind</p>
                       {wind.speed} m/s | <img style={{transform:`rotate(${wind.deg}deg)`,width:"calc(10px + 1vw)"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADoElEQVRoge2ZO4hVVxSG/zMz8VE4cXzgAwZFC9MERQsZHxkVsbBQQhxNLYkpLERTBsTOSgsTCxErNZBYiI0PRkRHZZgQX/gYSQoLi4gIPlq997PY9+hxnX3unMc+EXT+7t797/X/65519l57X2kcnzCAFUBfnRpddQaXtFsSkoZr1gkPYB7wGngDLKhLp6OuwJJ2yT3hTkk7a9QJD2AK8IL3eAV8WYdWpScAdABbgB4z9IOkpOEpkrabuT2tuXVWQTaAdcB9YNB83wU8Io1HQJfhDgL3gDX/p/FJwGGg2TK20YwPeMzHGDDcja3vm8CvwMS6zU8DhhKGHtoSAIbbJPCX4UbAg8T4MDCzLvPTgVFjaIfh9LUxH6PPzNlhxu8B00KbnwBcMkJPgcmGdypHAn+aOZOAJ4YzRMhyAn7zGNlnOPNxG9dYeA3MN3P3eXiHQplfy/sXNsYV+wsBB3OYj3HAzP0CuGg4DaC/qvkOXE0mMYpZ94Fu4GWBBF4C3SZGD25RSOIOEFVJ4DuP+CoP72cP7xqwHliFW+8t9nji9JF+2purJDBkgv3h4diN6zKeRw/0t8ZipDa2Fs8uBJfLmp+Dq8MkFnl48cblNT5GIgOe8a+MZgOYXSaBn0ygWxm8/XmMZySyP2PsttH+sWh8AUdNkF8KBykJYK/RPpLFbdcJfm0+XwljLxds3S/OIr5bogDGCDoriqKnVVzlRavm/2vHiaIokoqdB15UMVUQz/MSiyQwoYSRssjdBxVJYE4JI2WRW+tdApGBpBHDnRvKXQ5YrRGPP0ntn8BN8znVQtSI1ebz31nEdgnYjWtTaTvFYbVuFI6Au5hKthJNarygSugu5MOG7g3QWzaY7SKPB/br0/zdaJ6rEux7E6wBLAno1+otJd1Abq0SsNPTWD0Epgb0HWt14+6ZkriLp+UuGrif9CHjLNAZyHv8Q50zGk3ArkalBY6RxlkC3HcCU4HznvhHQ3iPRSbijogWo1R4J3A1b8/BAFcJfUsHzAT+9Yg1gBMUWGJxS+VJ0i8swD/AjLyxCp34cdd+pyWt9A3L7ZhnJF2X9ETS49ZYr1x/s1LSZknLMrSvSfo2iqJnRXwVQqucjpF+saugiTsB1nu5axL5BndvUxW3CbXalEiiC9gGXMBfz1lo4FaerVRcjsvfeqWT6ZW0QdJSuRpfbigjck3ZDUmDURQ9VgAES8ACPjxjJ3v4kPg4/08FxHgC4/jc8RbW7uEaG97PHAAAAABJRU5ErkJggg==" alt="wind_icon" />
                   </div>
                   <div  className="L_dt">
                       <p className="subt_dt">Clouds</p>
                       {clouds.all} %
                   </div>
                </div>
            </div>
        </div>
        )
    }else{
        return null
    }
}