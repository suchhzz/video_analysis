import VideoInfoCard from '@/components/VideoInfoCard'
import { Container, Box, Typography } from '@mui/material'

export default function VideoSidebar() {
    return (
        <>
            <Box
                sx={{
                    bgcolor: '#fff',
                    borderRadius: 2,
                    p: 2,
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: 'text.primary',
                }}
            >
                <Typography sx={{ textAlign: 'center' }} >
                    Info
                </Typography>
                <Box
                    sx={{
                        p: 3,
                        maxHeight: '700px',
                        overflow: 'auto'
                    }}
                >
                    <VideoInfoCard
                        category='people'
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolorem.'
                        time="0:29"
                    />
                    <VideoInfoCard
                        category='car'
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolorem.'
                        time="0:32"
                    />
                    <VideoInfoCard
                        category='animal'
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolorem.'
                        time="0:65"
                    />
                    <VideoInfoCard
                        category='text'
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolorem.'
                        time="0:65"
                    />
                    <VideoInfoCard
                        category='text'
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolorem.'
                        time="0:65"
                    />
                    <VideoInfoCard
                        category='text'
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolorem.'
                        time="0:65"
                    />
                    <VideoInfoCard
                        category='text'
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolorem.'
                        time="0:65"
                    />
                </Box>
            </Box>
        </>
    )
}