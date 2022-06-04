import "./industries.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Grid";

function Industries() {
  return (
    <div className="div7">
      <h3 className="div7-h3A">Industries</h3>
      <p className="div7-p">We have expetise across multiple industries</p>
      <div className="container1">
            <Grid container spacing={5} sx={{fontSize:25}}>
                <Grid item md={3}>
                    <Paper>
                          <img className="div7-img" src="./app-svg/manufacturing.png" alt=""    />
                          <p>Manufacturing</p>
                    </Paper>
                </Grid>

                <Grid item md={3}>
                    <Paper>
                          <img className="div7-img" src="app-svg/retail.png" alt="" />
                          <p>Retail</p>
                    </Paper>
                </Grid>

                <Grid item md={3}>
                     <Paper>
                           <img className="div7-img" src="app-svg/education.png" alt="" />
                           <p>Education</p>
                     </Paper>
                </Grid>

                <Grid item md={3}>
                    <Paper>
                          <img className="div7-img" src="app-svg/realestate.png" alt="" />
                          <p>Real Estate</p>
                    </Paper>
                </Grid>

                <Grid item md={3}>
                    <Paper>
                          <img className="div7-img" src="app-svg/construction.png" alt="" />
                          <p>Construction</p>
                    </Paper>
                </Grid>

                <Grid item md={3}>
                    <Paper>
                          <img className="div7-img" src="app-svg/accounting.png" alt="" />
                          <p>Accounting</p>
                    </Paper>
                </Grid>

                <Grid item md={3}>
                    <Paper>
                          <img className="div7-img" src="./app-svg/travel.png" alt="" />
                          <p>Traval and Tourism</p>
                    </Paper>
                </Grid>

                <Grid item md={3}>
                    <Paper>
                          <img className="div7-img" src="./app-svg/hotel.png" alt="" />
                          <p>Hotel and Restaurents</p>
                    </Paper>
                </Grid>
            </Grid>
      </div>

      <div className="div7-h3B">Let's talk business</div>
      <p className="div7-p">
        Tell us what you need and will offer you the best range of services.
        Also, <br />
        if you want to be a patener or sponsor, send us a message.
      </p>
      <p className="more">TALK TO OUR TEAM</p>
    </div>
  );
}
export default Industries;
