import React, { PropTypes, Component } from 'react';
import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import CardMedia from 'material-ui/lib/card/card-media';

class Music extends Component {
    render() {
        const { name, artist, image, scores } = this.props;
        return (
            <div>
                <Card style={{"maxWidth":"400px"}}>
                    <CardTitle title={name} subtitle={artist} />
                    <CardMedia style={{"maxWidth":"90px"}}>
                        <img src={image} />
                    </CardMedia>
                    {scores.map((score) => {
                        return (
                            <div key={score.level}>
                                <CardTitle title="level" subtitle={score.level} />
                                <CardTitle title="play count" subtitle={score.playCount} />
                                <CardTitle title="score" subtitle={score.score} />
                                <CardTitle title="updateDate" subtitle={score.updateDate} />
                            </div>
                        )
                    })}
                </Card>
            </div>
        )
    }
}

Music.propTypes = {
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    scores: PropTypes.array.isRequired
};

export default Music;
