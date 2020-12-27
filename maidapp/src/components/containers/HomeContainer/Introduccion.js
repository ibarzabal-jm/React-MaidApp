import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "pink",
  },
  text: {
    fontWeight: "100px",
    textAlign: "justify",
    textIndent: "1.5rem",
  },
}));

const Introduccion = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        ¿Quienes somos?
      </Grid>
      <Grid item xs={12}>
        <p className={classes.text}>
          iULY es una pagina web creada por mí, Juan Manuel Ibarzabal Salles,
          cuyo objetivo es demostrar lo que he aprendido a lo largo de este
          2020. Mi objetivo era hacer una especie de Rappi/Pedidos ya y otras
          compañias similares de mucamas.
        </p>
        <p className={classes.text}>
          Tratando de hacerlo mucho más creíble, decidí consultar a varias
          trabajadoras cercanas a mi circulo intimo, donde me pareció
          conveniente limitar su uso a únicamente Mujeres. ¿Por qué mujeres?
          Simplemente porque hay una poca taza de violencia y una nula de abuso
          sexual. Las mucamas, (por lo menos mi suegra prefiere que le digan
          mucama antes que empleada doméstica) generalmente lidian con niños,
          gente anciana, lo último que querría yo poniendome en el lugar de una
          compañia claramente es lidiar con violadores.
        </p>
        <p className={classes.text}>
          iULY es una app cuyo objetivo es hacer más fácil, más rápida y segura
          el servicio de Limpieza de un hogar particular u oficina.
        </p>
      </Grid>
    </Grid>
  );
};

export default Introduccion;
