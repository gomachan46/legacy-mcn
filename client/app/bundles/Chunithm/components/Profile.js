import React, { PropTypes, Component } from 'react';
import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import CardMedia from 'material-ui/lib/card/card-media';

class Profile extends Component {
    render() {
        const { name, trophy, characterLevel, image, level, playCount, rating, point } = this.props;
        return (
            <div>
                <Card style={{"maxWidth":"400px"}}>
                    <CardTitle title={name} subtitle={trophy} />
                    <CardMedia overlay={<CardTitle title="Character Level" subtitle={characterLevel} />}>
                        <img src={image} />
                    </CardMedia>
                    <CardTitle title="Player Level" subtitle={level} />
                    <CardTitle title="Play Count" subtitle={playCount} />
                    <CardTitle title="Rating" subtitle={rating} />
                    <CardTitle title="Dolce" subtitle={point} />
                </Card>
            </div>
        )
    }
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    expire: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    point: PropTypes.number.isRequired,
    totalPoint: PropTypes.number.isRequired,
    playCount: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    highestRating: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    trophy: PropTypes.string.isRequired,
    characterLevel: PropTypes.number.isRequired
};

export default Profile;
