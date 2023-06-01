import { useRef, useState } from "react";


const Homeweather = () => {
    let place= useRef();

    let [weather,setweather]=useState();
    
    let Weatherdetail=()=>{

        const url = `https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=${place.current.value}&language=en`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6f69ec1158msh6bc77e47779c7afp1f6c9fjsn705b74fba968',
            'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };
    
                fetch(url,options)
    .then((res)=>{ return res.json()})
    .then((data)=>{ console.log(data[0]);
        const url1 = `https://ai-weather-by-meteosource.p.rapidapi.com/current?place_id=${data[0].place_id}&timezone=auto&language=en&units=auto`;
        const options1 = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6f69ec1158msh6bc77e47779c7afp1f6c9fjsn705b74fba968',
                'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
            }
        };
        
        fetch(url1,options1)
            .then((res)=>{return res.json()})
            .then((data)=>{ console.log(data);
            setweather(data.current)})        
    
    })





    }
    
    
    return ( 
        <div>
            
            <input type="text" ref={place} />
            <button onClick={Weatherdetail}> submit</button>
          
{
   weather !=null && 
    <div>
       
        <div className="main"> 
        <img src="https://static.vecteezy.com/system/resources/thumbnails/001/189/147/small/moon-crescent.png" alt="" />
           <h2 id="c">{weather.temperature} <span>degree celsius</span></h2>

        <h5>cloud_cover :{weather.cloud_cover}</h5>
       <div id="detail">
        <h5>pressure :{weather.pressure}</h5>
        <h5> summary :{weather.summary}</h5>
        <h5>humidity :{weather.humidity}</h5>
        </div>
        </div>


    </div>
}



        </div>
     );
}
 
export default Homeweather;