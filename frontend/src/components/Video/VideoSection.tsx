import { Box, Button } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DownloadIcon from '@mui/icons-material/Download';
import { useRef } from 'react';

export default function VideoSection() {
    const videoRef = useRef<HTMLVideoElement>(null);

    const videoClickHandler = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    }

    return (
        <Box
            sx={{
                bgcolor: '#fff',
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    borderRadius: '10px',
                    border: '1px solid #f5f5f5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                    p: 5,
                }}
            >
                <video
                    src="/assets/vids/cam-video.mp4"
                    // controls
                    ref={videoRef}
                    onClick={videoClickHandler}
                    style={{
                        width: '100%',
                        objectFit: 'contain',
                        borderRadius: 10,
                    }}
                />

                <Box
                    sx={{
                        mt: 3,
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 2,
                        width: '100%',
                    }}
                >
                    <Button
                        size="small"
                        variant="outlined"
                        color="error"
                        startIcon={<PictureAsPdfIcon />}
                    >
                        Convert to PDF
                    </Button>

                    <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        startIcon={<DownloadIcon />}
                    >
                        Download
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
