import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import _ from "lodash";

const useStyles = makeStyles({
  root: {
    width: "100vw"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});
function renderCell(item, column, classes) {
  if (column.content) return column.content(item);
  //   console.log(_.get(item, column.path));
  //   if(column.path)
  if (column.path === "code") {
    return (
      <Typography variant="h5" component="h2">
        {_.get(item, column.path)}
      </Typography>
    );
  }
  if (column.path === "diagnosis") {
    return (
      <Typography variant="body2" component="p">
        {_.get(item, column.path)}
      </Typography>
    );
  }
  if (column.path === "inclusionTerms") {
    const inclusionTerms = _.get(item, "inclusionTerms");
    // console.log(inclusionTerms);
    if (inclusionTerms) {
      const inclusion = _.get(inclusionTerms[0], "inclusion");
      //   console.log(inclusion);
      return (
        <Typography className={classes} color="textSecondary">
          {inclusion}
        </Typography>
      );
    }
    // console.log(_.get(_.get(item, "inclusionTerms"), "inclusion"));
  } else {
    return <h1>Null</h1>;
  }
}

// createKey = (item, column) => {
//   return item._id + (column.path || column.key);
// };

export default function SimpleCard({ columns, data }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <tbody>
      {data.map(item => (
        <Card className={classes.root}>
          <CardContent>
            {columns.map(column => renderCell(item, column, classes.pos))}
            {/* <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {columns.map(column => renderCell(item, column))}
            </Typography> */}
            {/* <Typography variant="h5" component="h2">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography> */}
          </CardContent>
          <CardActions>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
      ))}
    </tbody>
  );
}
