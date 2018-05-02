import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { Link } from "react-router-dom";
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';



class CardWithLink extends Component {
  render() {
    return (
      <div className="button+{this.props.title}">
        <Link to={this.props.link}>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {this.props.title}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
      </div>
    );
  }
}

export default CardWithLink;
