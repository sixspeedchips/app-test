import React from "react";
import Typography from "@material-ui/core/Typography";

function CardCodeTypography(inclusionTerms,classes) {

    return(
        <Typography className={classes} color="textSecondary">
        <ul>
        {inclusionTerms.map((item)=> <li>{item.inclusion}</li>)}
        </ul>
      </Typography>
    );
}

export default CardCodeTypography