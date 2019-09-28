import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Garda from './Garda.js';
import Paper from '@material-ui/core/Paper';

import './App.css';

function App() {

 const [value, setValue] = React.useState(0);

 const handleChange = (event, newValue) => {
   setValue(newValue);
 };
  return (

    <div className="App">
      <Tabs
         value={value}
         onChange={handleChange}
         indicatorColor="primary"
         textColor="primary"
         centered
       >
         <Tab label="Lago di garda" />
         <Tab label="Previsioni vento venezia" />
         <Tab label="Maree" />
      </Tabs>
      <div hidden={value !== null &&  0 !== value} >
        <Garda />
      </div>
      <div hidden={1 !== value}>
        <Paper>
          <h2>Conche</h2>
          <iframe width="800" height="600" src="https://embed.windy.com/embed2.html?lat=45.370&lon=12.274&zoom=10&level=surface&overlay=wind&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=true&detailLat=45.456&detailLon=12.269&metricWind=kt&metricTemp=%C2%B0C&radarRange=-1" frameBorder="0" title="conche"></iframe>
        </Paper>
        <Paper>
          <h2>Irom</h2>
          <iframe width="800" height="600" src="https://embed.windy.com/embed2.html?lat=45.370&lon=12.274&zoom=10&level=surface&overlay=wind&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=true&detailLat=45.456&detailLon=12.269&metricWind=kt&metricTemp=%C2%B0C&radarRange=-1" frameBorder="0" title="irom"></iframe>
        </Paper>
      </div>
      <div hidden={2 !== value}>
        <Paper>
          <img src="https://www.comune.venezia.it/sites/default/files/publicCPSM/png/bollettino_grafico.jpg" alt="maree"/>
        </Paper>
      </div>
    </div>
  );
}

export default App;
