import { Box, Button, IconButton } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DownloadIcon from '@mui/icons-material/Download';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { useEffect, useRef, useState } from 'react';

export default function Photo() {

    const photoRef = useRef<HTMLImageElement>(null);

    return (
        <>
            <Box
                sx={{
                    position: 'relative',
                    borderRadius: 2,
                    overflow: 'hidden',
                    height: 'auto',
                    width: '100%',
                }}
            >
                <img
                    src="/assets/img/photo.jpg"
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
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}