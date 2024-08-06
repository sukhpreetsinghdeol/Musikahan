// // src/context/PlayerContext.tsx
// import React, { createContext, useContext, useState } from 'react';

// interface PlayerContextProps {
//   currentTrack: any;
//   isPlaying: boolean;
//   playTrack: (track: any) => void;
//   pauseTrack: () => void;
//   seekTo: (progress: number) => void;
// }

// const PlayerContext = createContext<PlayerContextProps | undefined>(undefined);

// export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [currentTrack, setCurrentTrack] = useState<any>(null);
//   const [isPlaying, setIsPlaying] = useState<boolean>(false);

//   const playTrack = (track: any) => {
//     setCurrentTrack(track);
//     setIsPlaying(true);
//     // Add logic to play the track
//   };

//   const pauseTrack = () => {
//     setIsPlaying(false);
//     // Add logic to pause the track
//   };

//   const seekTo = (progress: number) => {
//     // Add logic to seek to the given progress
//   };

//   return (
//     <PlayerContext.Provider value={{ currentTrack, isPlaying, playTrack, pauseTrack, seekTo }}>
//       {children}
//     </PlayerContext.Provider>
//   );
// };

// export const usePlayer = () => {
//   const context = useContext(PlayerContext);
//   if (context === undefined) {
//     throw new Error('usePlayer must be used within a PlayerProvider');
//   }
//   return context;
// };
