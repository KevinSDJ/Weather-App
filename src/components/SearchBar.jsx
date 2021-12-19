import React, { useState } from "react";
import './Search.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form className="Form" onSubmit={(e) =>{
      e.preventDefault();
      onSearch(city);
      setCity("")
     }} autoComplete="off">
      <input 
        id="inp"
        className="entri"
        type="text"
        placeholder="City..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <button  className="submit" type="submit"></button>
    </form>
  );
}
