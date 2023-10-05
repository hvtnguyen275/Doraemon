import {
  SkipPrevious,
  SkipNext,
  PlayCircleFilled,
  PauseCircleFilled,
} from '@mui/icons-material';
import React from 'react';
// import '../Styles/MusicPlayer.css';
import { IconButton } from '@mui/material';
import styles from '../page.module.css';

function MusicControls({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}: any) {
  return (
    <div className={styles.audiControls}>
      <IconButton
        className={styles.prev}
        aria-label="Previous"
        onClick={onPrevClick}
      >
        <SkipPrevious />
      </IconButton>
      {isPlaying ? (
        <IconButton
          className={styles.pause}
          onClick={() => onPlayPauseClick(false)}
          aria-label="Pause"
        >
          <PauseCircleFilled />
        </IconButton>
      ) : (
        <IconButton
          className={styles.play}
          onClick={() => onPlayPauseClick(true)}
          aria-label="Play"
        >
          <PlayCircleFilled />
        </IconButton>
      )}
      <IconButton
        className={styles.next}
        aria-label="Next"
        onClick={onNextClick}
      >
        <SkipNext />
      </IconButton>
    </div>
  );
}

export default MusicControls;
