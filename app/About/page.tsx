// "use client"
// import React, { useEffect, useState } from "react";
// import { getTopTracks } from "@/components/spotify/SpotifyAPI";

// export default function AboutPage() {
//   // Specify the type for topTracks
//   const [topTracks, setTopTracks] = useState<Array<any>>([]);

//   useEffect(() => {
//     // Fetch top tracks when the component mounts
//     getTopTracks()
//       .then((tracks) => {
//         setTopTracks(tracks);
//       })
//       .catch((error) => {
//         console.error("Error fetching top tracks:", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Top Tracks</h2>
//       <ul>
//         {topTracks.map((track, id) => (
//           <li key={track.id}>
//             <h1>{id}</h1>
//             <p>Title: {track.name}</p>
//             <img
//               src={track.album.images[0].url}
//               alt={`Cover art for ${track.name}`}
//             />
//             <p>
//               Artist(s): {track.artists.map((artist) => artist.name).join(", ")}
//             </p>
//             <p>Album: {track.album.name}</p>
//             <p>Popularity: {track.popularity}</p>
//             <p>
//               Listen on Spotify:{" "}
//               <a href={track.external_urls.spotify}>Open Link</a>
//             </p>
//             <hr />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import React from 'react'

export default function AboutPage() {
  return (
    <div>
      <h1>About Me</h1>
      <p>Just a quick glimpse. </p>
    </div>
  )
}
