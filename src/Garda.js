import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

class Garda extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper>
              <img alt="pressione" src="http://www.meteo-allerta.it/uploads/pics/uwz-it_ora_peler_en.png" />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <div>
                <iframe src="https://www.3bmeteo.com/moduli_esterni/localita_7_giorni_compatto/2717/ffffff/fc9b2a/5e5e5e/ffffff/it" width="382" height="192" frameBorder="0"></iframe><br /><a href="https://www.3bmeteo.com/meteo/farra+dalpago" >Meteo Farra d'alpago</a></div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
export default Garda;
