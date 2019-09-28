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
              <img alt="previsioni" src="https://www.ilmeteo.it/portale/files/ilmeteo/ensemble/graph-8510.png" />
            </Paper>
          </Grid>
      </Grid>
      </Container>
    );
  }
}
export default Garda;
