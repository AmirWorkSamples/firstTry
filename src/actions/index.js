export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

export const headerItemClick = (item) => {
    return{
        type: 'HEADER_CLICKED',
        payload: item
    };
};