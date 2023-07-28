const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_real = document.getElementById('temp_real');
const temp_status = document.getElementById('temp_status');


const getInfo = async(event)=>{
    event.preventDefault();
   let cityVal = cityName.value ; 
    if(cityVal == " " ){
          city_name.innerText='please enter a city name before searching';
    }
    else{
      try{
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=d569d366c256bb4906133ad9357b0e73`;
        const res = await fetch(url);
        const data = await res.json();
        const arrData =[data];

         city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        temp_real.innerText = arrData[0].main.temp;
        temp_status.innerText = arrData[0].weather[0].main;
     
      }
      catch{
        // city_name.innerText='please enter a proper city name';
      };
    }

};

submitBtn.addEventListener('click',getInfo);