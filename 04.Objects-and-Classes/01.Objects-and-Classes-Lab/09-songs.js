function solve(data) {
    const numberOfSongs = data.shift();
    const categoty = data.pop();
    let songs = [];

    class Song {
        constructor(songCat, songName, songTime) {
            this.songCat = songCat;
            this.songName = songName;
            this.songTime =songTime;
        }
    }

    for (let info of data) {
        const [songCat, songName, songTime] = info.split('_');
        if (songCat === categoty | categoty === 'all') {
            let song = new Song(songCat, songName, songTime);
            songs.push(song);
        }
    }

    for (currentSong of songs) {
        console.log(currentSong.songName);
    }
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);
console.log('----------------');
solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])
