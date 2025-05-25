import { Box, Button, IconButton } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DownloadIcon from '@mui/icons-material/Download';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { useEffect, useRef, useState } from 'react';
import Video from './Video';
import VideoUpload from './VideoUpload';

export default function VideoSection() {
    

    return (
        <Box sx={{ bgcolor: '#fff', overflow: 'hidden' }}>
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
                {/* <Video /> */}
                <VideoUpload />

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
