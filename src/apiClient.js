const URL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=peru&api_key=3e2a31e6bcd5d57c428293b999b0b121&format=json';

function getArtists() {
  return fetch(URL)
          .then(res => res.json())
          .then(data => data.topartists.artist)
          .then(artists => artists.map(artist => {
            return {
              id: artist.mbid,
              name: artist.name,
              image: artist.image[3]['#text'],
              likes: 10,
              comments: 140,
            };
          }));
}

// export default apiCliente = {
//   getArtist: getArtist,
// };

export { getArtists };

// fetch('http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=3e2a31e6bcd5d57c428293b999b0b121&format=json')
