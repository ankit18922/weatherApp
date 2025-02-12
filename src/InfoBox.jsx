import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

function InfoBox({info}) {
  const [isCelsius, setIsCelsius] = useState(true);

    let INIT_URL = "https://images.unsplash.com/photo-1462524500090-89443873e2b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    const HOT_URL = "https://images.unsplash.com/photo-1594315590298-329f49c8dcb9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1581621111812-8cc7d4a36e03?q=80&w=1967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1623567932970-576132e5d056?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const convertTemp = (temp) => (isCelsius ? temp : (temp * 9/5) + 32).toFixed(2);

    return (
        <div className="InfoBox">
          <div className='cardContainer'>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80 
          ? RAIN_URL 
          : info.temp > 15 
          ? HOT_URL 
          : COLD_URL 
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity > 80 
            ? <ThunderstormIcon/> 
            : info.temp > 15 
            ? <WbSunnyIcon/>
            : <AcUnitIcon/> 
          }
        </Typography>
        <Typography variant="body2" color="text.secondary"component={"span"}>
         <p>Temperature = {convertTemp(info.temp)}&deg;{isCelsius ? "C" : "F"}</p>
         <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {convertTemp(info.tempMin)}&deg;{isCelsius ? "C" : "F"}</p>
          <p>Max Temp = {convertTemp(info.tempMax)}&deg;{isCelsius ? "C" : "F"}</p>
          <p>Wind Speed = {info.windSpeed} m/s</p>
          <p>The Weather can be described as <i> {info.weather} </i> and  feels like {convertTemp(info.feelsLike)}&deg;{isCelsius ? "C" : "F"}</p>
        </Typography>
        <Button variant="contained" onClick={() => setIsCelsius(!isCelsius)}>
                         {isCelsius ? "Fahrenheit" : "Celsius"}
                        </Button>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}

export {InfoBox};