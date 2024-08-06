import {useCallback, useEffect, useState} from 'react';
import TrackPlayer from 'react-native-track-player';

export const useTrackPlayerRepeatMode = () => {
  // repeatModeState
  const [repeatMode, setRepeatMode] = useState(null);

  //   to change Repeat
  const changeRepeatMode = useCallback(async repeatMode => {
    await TrackPlayer.setRepeatMode(repeatMode);
    // please add this line
    setRepeatMode(repeatMode);
  }, []);

  useEffect(() => {
    TrackPlayer.getRepeatMode().then(setRepeatMode);
  }, []);

  return {repeatMode, changeRepeatMode};
};
