import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import data from './data';

function App() {
  const [holidays,setholidays]=useState(data);
  return (  
    <main>
      <section className="container">
        <h3>National Holidays Dates </h3>{holidays.map((holiday) => {
  return (
    <div className="holiday" key={holiday.id}>
      <img src={holiday.img}/>
      <div>{holiday.title}</div>
      <div>{holiday.date}</div>
    </div>
    
  )
})}
        <button>
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
