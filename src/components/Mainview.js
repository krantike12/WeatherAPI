import React, { useState } from "react";
import '../components/Mainview.css'

const Mainview = () => {

    const [inputValue, setInputValue] = useState('')
    const [weatherData, setWeatherData] = useState({})


    const fetchData = async () => {
      try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputValue + '&appid=d5d06f38168859042a64cdab1041697f&units=metric')
        const data = await response.json()
        setWeatherData(data)
        console.log(data)
      }
      
      catch (error){
       console.error("Error while fetching Data", error)
      }
      
    
    
    }

  
   // console.log()
   // console.log(`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`)


    const handleClick = () => {
      if(inputValue===""){
        alert("Please enter something first")
      }
      else{
      fetchData()
     }
    }


    return (


    <div>
           <img src="" alt=""></img>

      <div
        className="container mx-10"
        style={{
          width: "20%",
          display: "flex",
          position: "relative",
          top: "100px",
        }}
      >
        <input
          className="form-control mx-1"
          name="text"
          value={inputValue}
          placeholder="Enter City, State"
          type="text"
          onChange={(e) => {setInputValue(e.target.value)}}
        ></input>
        <button className="btn btn-dark" onClick={handleClick}>Search</button>
        
       
      </div>

      <div className="row" style={{position: "relative", top: "80px"}}>
        <div className="col sm">
          <div className="card" style={{position: "relative", top: "80px"}}>
            <div className="hero">
          {weatherData && weatherData.main && weatherData.weather && weatherData.sys && ( 
          <img className="card-image" src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather-icon"></img> )}
          {weatherData && weatherData.sys && (<h3 className="card-title">{weatherData.name || "City Not Found"} , {weatherData.sys.country || "not found"}  </h3> )}
          </div>
          {weatherData.main && weatherData.weather && (
            <div className="row pb-4">
              <div className="col sm-3 p-3 px-5" style={{display: "flex", gap: "14px" , justifyContent: "center" , alignItems: "center"}}>
              <h6 className="texts" style={{width: "115px"}}>{weatherData.main.temp_min} <br></br> Min Temp</h6>
              <div className="col"> <h6 className="texts" > {weatherData.main.temp} °C <br></br> Temperature</h6> </div>
            <h6 className="texts" style={{width: "115px"}} >{weatherData.main.temp_max} <br></br>Max Temp</h6>
            </div> </div>)}
        </div>
        </div>
        </div>
      
    </div>
    
  );

};

export default Mainview;
