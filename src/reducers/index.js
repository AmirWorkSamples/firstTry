import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {id: 0, title: 'Redshift Riders', duration:'5:05'},
        {id: 1, title: 'Lateralus', duration:'7:11'},
        {id: 2, title: 'Mindstorm', duration:'4:35'},
        {id: 3, title: 'Crazy Joey', duration:'4:03'}
    ];

};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED')
        return action.payload;
    
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});