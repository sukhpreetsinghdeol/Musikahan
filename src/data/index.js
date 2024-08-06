export const formatSecondsToMinute = seconds => {
  const minutes = Math.floor(seconds / 60); //2
  const remainingSeconds = Math.floor(seconds % 60);
  //5
  const formatedMinutes = String(minutes).padStart(2, '0'); //02
  const formatedSeconds = String(remainingSeconds).padStart(2, '0'); //05
  return `${formatedMinutes}:${formatedSeconds}`;
};

export const isExist = (songs, track) => {
  return songs.some(song => song.url === track.url);
};
