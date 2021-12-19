import React,{useContext,useEffect} from 'react';
import LocCard from '../components/LocationCard';
import { LocationContex } from '../context/locationContext';
import dotenv from 'dotenv';
dotenv.config()

export default function LocationWeather() {
    let {location,updateL}= useContext(LocationContex)
    console.log(location)
    useEffect(() => {
             async function fetCh(){
            let searchLocation = await new Promise((resolve,reject)=>{
                if(window.confirm("Your location is necessary to provide you with information about your area. Do you want to grant permission?")){
                    navigator.geolocation.getCurrentPosition((pos)=>{
                        resolve({latitude:pos.coords.latitude,longitude:pos.coords.longitude})
                    },(error)=>console.log(error))
                }else{
                    reject(null)
                }
            })
            const {latitude,longitude}= searchLocation
            fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
            .then(re=>re.json())
            .then(res=>{
                updateL(res)
            })
            
        }
        !location.d&&fetCh()&&setInterval(()=>{
            async function fetCh2(){
                let searchLocation = await new Promise((resolve,reject)=>{
                     navigator.geolocation.getCurrentPosition((pos)=>{
                            resolve({latitude:pos.coords.latitude,longitude:pos.coords.longitude})
                        },(error)=>console.log(reject(error)))
                })
                const {latitude,longitude}= searchLocation
                fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
                .then(re=>re.json())
                .then(res=>{
                    updateL(res)
                })
                
            }
           fetCh2()
        },(1000*60*5))
        
       
      
    },[location, updateL])
    if(location.d){
        return(<div>
            <LocCard d={location.d}/>
        </div>)
    }else{
        return null
    }
}

