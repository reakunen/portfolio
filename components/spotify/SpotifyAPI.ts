import querystring from "querystring";

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const client_id: string = process.env.NEXT_PUBLIC_CLIENT_ID || "";
const client_secret: string = process.env.NEXT_PUBLIC_CLIENT_SECRET || "";
const refresh_token: string = process.env.NEXT_PUBLIC_REFRESH_TOKEN || "";

interface APIProps {
  client_id: string;
  client_secret: string;
  refresh_token: string;
}

const getAccessToken = async () => {
  console.log({ client_id, client_secret, refresh_token });
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });
  return response.json();
};

export const getNowPlaying = async ({
  client_id,
  client_secret,
  refresh_token,
}: APIProps): Promise<Response> => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export async function getNowPlayingItem(
  client_id: string,
  client_secret: string,
  refresh_token: string
): Promise<{
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
} | false> {
  const response = await getNowPlaying({ client_id, client_secret, refresh_token });
  if (response.status === 204 || response.status > 400) {
    return false;
  }

  const song = await response.json();
  const albumImageUrl = song.item.album.images[0].url;

  // Add type annotation for the _artist parameter
  const artist = song.item.artists.map((_artist: { name: string }) => _artist.name).join(", ");

  const isPlaying = song.is_playing;
  const songUrl = song.item.external_urls.spotify;
  const title = song.item.name;

  return {
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  };
}


const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;

export const getTopTracks = async (): Promise<any[]> => {
  const { access_token } = await getAccessToken();
  let offset = 0;
  let allTracks: any[] = [];

  while (allTracks.length < 50) {
    const response = await fetch(
      `${TOP_TRACKS_ENDPOINT}?limit=20&offset=${offset}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    if (!response.ok) {
      // Handle the error here
      throw new Error(`Failed to fetch top tracks: ${response.statusText}`);
    }

    const data = await response.json(); // Parse the JSON response
    const tracks = data.items;

    if (tracks.length === 0) {
      // No more tracks to fetch
      break;
    }

    allTracks = allTracks.concat(tracks);
    offset += 20;
  }

  return allTracks;
};
