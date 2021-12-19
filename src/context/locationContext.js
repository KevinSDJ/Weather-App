import React,{createContext, useState} from "react";
import App from "../containers/App";



export const LocationContex= createContext();


export const LocationProvider=()=>{
    const [location,setLocation]= useState({d:null})
    function updateL(data){
        setLocation(prev=>{
            return{...prev, d:data}
        })
    }
    return (
        <LocationContex.Provider value={{location,updateL}}>
          <App/>
        </LocationContex.Provider>
    )
}
