import { Box, Button, IconButton } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DownloadIcon from '@mui/icons-material/Download';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { useEffect, useRef, useState } from 'react';

export default function Video() {

    const videoRef = useRef<HTMLVideoElement>(null);
    const [progress, setProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    };

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const updateProgress = () => {
            if (video.duration) {
                setProgress((video.currentTime / video.duration) * 100);
                setCurrentTime(video.currentTime);
                setDuration(video.duration);
            }
        };

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);

        video.addEventListener('timeupdate', updateProgress);
        video.addEventListener('play', handlePlay);
        video.addEventListener('pause', handlePause);

        return () => {
            video.removeEventListener('timeupdate', updateProgress);
            video.removeEventListener('play', handlePlay);
            video.removeEventListener('pause', handlePause);
        };
    }, []);

    const handleSeek = (event: React.MouseEvent<HTMLDivElement>) => {
        const video = videoRef.current;
        if (!video) return;

        const rect = event.currentTarget.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const newTime = (clickX / rect.width) * video.duration;

        video.currentTime = newTime;
        setProgress((newTime / video.duration) * 100);
        setCurrentTime(newTime);
    };

    function formatTime(time: number) {
        if (isNaN(time)) return '00:00';
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    return (
        <>
            <Box
                sx={{
                    position: 'relative',
                    borderRadius: 2,
                    overflow: 'hidden',
                    height: 'auto',
                    width: '100%',
                    '&:hover .video-overlay': {
                        opacity: 1,
                    },
                }}
            >
                <video
                    src="/assets/vids/cam-video.mp4"
                    ref={videoRef}
                    onClick={togglePlay}
                    style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        objectFit: 'contain',
                    }}
                />
                <Box
                    className="video-overlay"
                    sx={{
                        opacity: 0,
                        position: 'absolute',
                        width: '100%',
                        height: '20%',
                        bottom: '0',
                        left: '0',
                        background: 'linear-gradient(to top, rgba(0,0,0,1), transparent)',
                        transition: 'opacity 0.3s ease',
                    }}
                >
                    <Box sx={{ position: 'relative', height: '100%', width: '100%' }}>
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: '0',
                                width: '100%',
                                mb: 2,
                                pl: 2,
                                pr: 3,
                                height: '30%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: '20px',
                            }}
                        >
                            <IconButton
                                onClick={togglePlay}
                                sx={{
                                    color: 'white',
                                    bgcolor: 'rgba(0,0,0,0.4)',
                                    '&:hover': { bgcolor: 'rgba(0,0,0,0.6)' },
                                }}
                                aria-label={isPlaying ? 'Pause' : 'Play'}
                            >
                                {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                            </IconButton>

                            <Box sx={{ color: 'white', fontSize: '0.875rem', minWidth: 70, fontVariantNumeric: 'tabular-nums' }}>
                                {formatTime(currentTime)}{'\u00A0/\u00A0'}{formatTime(duration)}
                            </Box>

                            <Box
                                onClick={handleSeek}
                                sx={{
                                    width: '100%',
                                    backgroundColor: '#ddd',
                                    borderRadius: 4,
                                    height: 8,
                                    cursor: 'pointer',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: `${progress}%`,
                                        height: '100%',
                                        bgcolor: 'primary.main',
                                        borderRadius: 4,
                                        transition: 'width 0.1s linear',
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}