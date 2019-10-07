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
        <Tab label="Previsioni Irom" />
        <Tab label="Previsioni Conche" />
        <Tab label="Previsioni Sacca degli Scardovari" />
        {/* <Tab label="Maree" /> */}
      </Tabs>
      <div hidden={value !== null && 0 !== value} >
        <Garda />
      </div>
      <div hidden={1 !== value}>
        <Paper>
          <h2>Irom</h2>
          <div
            data-windywidget="forecast"
            data-spotid="7790"
            data-appid="fc0b3015a436c95a4c16ba7b0bbac44c">
          </div>

        </Paper>
        <Paper>
          <div><iframe src="https://www.3bmeteo.com/moduli_esterni/localita_7_giorni_compatto/8268/ffffff/fc9b2a/5e5e5e/ffffff/it" width="382" height="192" frameBorder="0"></iframe><br /><a href="https://www.3bmeteo.com/meteo/venezia+tessera" >Meteo Venezia Tessera</a></div>
        </Paper>
      </div>
      <div hidden={2 !== value}>
        <Paper>
          <h2>Conche</h2>
          <div
            data-windywidget="forecast"
            data-spotid="134648"
            data-appid="fd625d339478b7abaf98a950a48b6231">
          </div>
        </Paper>
        <Paper>
          <div><iframe src="https://www.3bmeteo.com/moduli_esterni/localita_7_giorni_compatto/2196/ffffff/fc9b2a/5e5e5e/ffffff/it" width="382" height="192" frameBorder="0"></iframe><br /><a href="https://www.3bmeteo.com/meteo/codevigo" >Meteo Codevigo</a></div>
        </Paper>
      </div>
      <div hidden={3 !== value}>
        <Paper>
          <h2>Sacca degli scardovari</h2>
          <div
            data-windywidget="forecast"
            data-spotid="134402"
            data-appid="16eb2b94a25143b94277cd777fd02a1c">
          </div>
        </Paper>
        <Paper>
          <div><iframe src="https://www.3bmeteo.com/moduli_esterni/localita_7_giorni_compatto/5459/ffffff/fc9b2a/5e5e5e/ffffff/it" width="382" height="192" frameBorder="0"></iframe><br /><a href="https://www.3bmeteo.com/meteo/porto+tolle" >Meteo Porto tolle</a></div>
        </Paper>
      </div>
      {/* <div hidden={4 !== value}>
        <Paper>
          <img src="https://www.comune.venezia.it/sites/default/files/publicCPSM/png/bollettino_grafico.jpg" alt="maree" />
        </Paper>
      </div> */}
    </div>
  );
}

export default App;
