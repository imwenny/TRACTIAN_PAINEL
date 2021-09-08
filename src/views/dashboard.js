import React, { useEffect } from "react";
import Hooks from "./../hooks";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Constants from "./../constants";
import { useParams } from "react-router";
import { Divider } from "antd";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2%",
    flexGrow: 1,
    position: "absolute",
    width: "95%",
    left: "2%",
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height:"100%"
  },
}));

function Dashboard({ showSidebar, match }) {
  const { id } = useParams();
  const { data, loading, error } = Hooks.Search("assets", id);
  const classes = useStyles();
  return (
    <div style={{ fontWeight:"bolder"}} className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <Divider>Nível de saúde</Divider>
          <center>
            <div
              style={{
                width: 130,
                height: 150,
              }}
            >
              <CircularProgressbar
                value={parseFloat(data.healthscore)}
                text={`${data.healthscore}%`}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: "butt",
                  textSize: "16px",
                  pathTransitionDuration: 1.0,
                  pathColor: `rgba(62, 152, 199)`,
                  textColor: Constants.Colors.terciary,
                  trailColor: Constants.Colors.words,
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
            </center>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <div>
              <Divider>Status:</Divider>
              <center>
                {data.status == "inAlert" && "Em alerta"}
                {data.status == "inOperation" && "Em operação"}
                {data.status == "inDowntime" && "Desligada"}
                {!data.status && "Carregando..."}
              </center>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Divider>Máquina:</Divider>
            <center>
              <img width={200} height={200} src={data.image} />
            </center>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={10}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <div>
              <Divider>Especificações:</Divider>
              {!loading && Object.keys(data.specifications).includes("maxTemp")
                ? "Temperatura máxima em C°: " + data.specifications.maxTemp
                : ""}
              <br />
              {!loading &&
              Object.keys(data.specifications).includes("rpm") &&
              data.specifications.rpm != null
                ? "Rotações por minuto: " + data.specifications.rpm
                : ""}
              <br />
              {!loading && Object.keys(data.specifications).includes("power")
                ? "Potência em KW/h: " + data.specifications.power
                : ""}
            </div>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <div>
              <Divider>Métricas:</Divider>
              <div>
                {!loading &&
                Object.keys(data.metrics).includes("totalCollectsUptime")
                  ? "Total de Coletas Uptime: " +
                    data.metrics.totalCollectsUptime
                  : ""}
                <br />
                {!loading &&
                Object.keys(data.metrics).includes("totalUptime") &&
                data.specifications.rpm != null
                  ? "Total de Horas de Coletas Uptime: " +
                    data.metrics.totalUptime
                  : ""}
                <br />
                {!loading && Object.keys(data.metrics).includes("lastUptimeAt")
                  ? "Data da Última Coleta Uptime: " + data.metrics.lastUptimeAt
                  : ""}
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
