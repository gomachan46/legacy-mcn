import React, { PropTypes, Component } from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Music from './Music';

class MusicList extends Component {
    getSelectedMusic() {
        return (this.props.selected != null) ? <Music {...this.props.selected} /> : null;
    }
    render() {
        const { showDetail } = this.props;
        return (
            <div>
                {this.getSelectedMusic()}
                <List>
                    {[...this.props.musicList].map((music) =>
                        <ListItem key={music.id} primaryText={music.name} onClick={() => showDetail(music.id)} />
                    )}
                </List>
            </div>
        )
    }
}

MusicList.propTypes = {
    selected: PropTypes.object,
    musicList: PropTypes.array.isRequired,
    showDetail: PropTypes.func.isRequired
};

export default MusicList;
