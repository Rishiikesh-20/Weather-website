import express from "express";
import axios from "axios";
import bodyParser from 'body-parser';
import fs from 'fs';
import {dirname} from 'path';
import {fileURLToPath} from 'url'
const app=express();
const port =3000;
const URL='http://api.weatherapi.com/v1/';
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
const __dirname=dirname(fileURLToPath(import.meta.url));
let apiKey='';
fs.readFile(__dirname+'/public/secret.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  console.log('File content:', data);
  apiKey=data;
});


app.get('/',async (req,res)=>{
  try{
    const name='coimbatore'
    const {data}=await axios.get(URL+'forecast.json',{
      params:{
        key:apiKey,
        q:name,
        days:2,
      }
    });
    console.log(data);
    const forecast=data.forecast.forecastday;
    const hour = forecast[0].hour;
    const hour1=forecast[1].hour;
    const avgTemp=averageTemp(data);
    res.render('index.ejs',{
      name : data.location.name,
      region:data.location.region,
      localTime:data.location.localtime,
      temp:data.current.temp_c,
      condition: data.current.condition.text,
      windSpeed: data.current.wind_kph,
      humidity:data.current.humidity,
      icon : data.current.condition.icon,
      m_deg:avgTemp[0],
      a_deg:avgTemp[1],
      e_deg:avgTemp[2],
      o_deg:avgTemp[3],
      m_icon: hour[8].condition.icon,
      a_icon: hour[13].condition.icon,
      e_icon: hour[6].condition.icon,
      o_icon: hour[10].condition.icon,
      hour_day1:hour,
      hour_day2:hour1,
      sunrise: forecast[0].astro.sunrise,
      sunset: forecast[0].astro.sunset,
      moonrise:forecast[0].astro.moonrise,
      moonset:forecast[0].astro.moonset,
      moonphase:forecast[0].astro.moon_phase,
      max_temp:forecast[0].day.maxtemp_c,
      min_temp:forecast[0].day.mintemp_c,
    })
  
  }catch(error){
    res.sendStatus(401);
    console.log(error.message);
  }
  
})

app.post('/search',async (req,res)=>{
  try{
  const name=req.body.search;
  const {data}=await axios.get(URL+'forecast.json',{
    params:{
      key:apiKey,
      q:name,
      days:2,
    }
  });
  console.log(data);
  const forecast=data.forecast.forecastday;
  const hour = forecast[0].hour;
  const hour1=forecast[1].hour;
  const avgTemp=averageTemp(data);
  res.render('index.ejs',{
    name : data.location.name,
    region:data.location.region,
    localTime:data.location.localtime,
    temp:data.current.temp_c,
    condition: data.current.condition.text,
    windSpeed: data.current.wind_kph,
    humidity:data.current.humidity,
    icon : data.current.condition.icon,
    m_deg:avgTemp[0],
    a_deg:avgTemp[1],
    e_deg:avgTemp[2],
    o_deg:avgTemp[3],
    m_icon: hour[8].condition.icon,
    a_icon: hour[13].condition.icon,
    e_icon: hour[6].condition.icon,
    o_icon: hour[10].condition.icon,
    hour_day1:hour,
    hour_day2:hour1,
    sunrise: forecast[0].astro.sunrise,
    sunset: forecast[0].astro.sunset,
    moonrise:forecast[0].astro.moonrise,
    moonset:forecast[0].astro.moonset,
    moonphase:forecast[0].astro.moon_phase,
    max_temp:forecast[0].day.maxtemp_c,
    min_temp:forecast[0].day.mintemp_c,
  })

}catch(error){
  res.sendStatus(401);
  console.log(error.message);
}
})
function averageTemp(data){
  const forecast=data.forecast.forecastday;
  const hour = forecast[0].hour;
  let m_temp=0;
  let a_temp=0;
  let e_temp=0;
  let n_temp=0;
  for(let i=5;i<12;i++){
    m_temp+=hour[i].temp_c;
  }
  for(let i=12;i<18;i++){
    a_temp+=hour[i].temp_c;
  }
  for(let i=18;i<24;i++){
    e_temp+=hour[i].temp_c;
  }
  const hour1=forecast[1].hour;
  for(let i=0;i<=5;i++){
    n_temp+=hour1[i].temp_c;
  }
  m_temp=m_temp/7;
  a_temp=a_temp/6;
  e_temp=e_temp/6;
  n_temp=n_temp/6;

  m_temp=m_temp.toFixed(2);
  a_temp=a_temp.toFixed(2);
  e_temp=e_temp.toFixed(2);
  n_temp=n_temp.toFixed(2);

  return [m_temp,a_temp,e_temp,n_temp];

  
}

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`)
});