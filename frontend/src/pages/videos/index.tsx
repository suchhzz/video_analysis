import VideoSection from '@/components/Video/VideoSection'
import VideoSidebar from '@/components/Video/VideoSidebar'
import VideoInfoCard from '@/components/VideoInfoCard'
import { Container, Box, Typography } from '@mui/material'

export default function Video() {
    return (
        <Container
            maxWidth="xl"
            sx={{
                margin: '0 auto',
                borderRadius: '5px',
                p: 2,
            }}
        >
            <Box
                sx={{
                    border: '1px solid #f5f5f5',
                    width: '100%',
                    height: 50,
                    borderRadius: 1,
                    mb: 4,
                }}
            >
            </Box>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '60% 40%',
                    gap: 2,
                }}
            >

                <VideoSection />
                <VideoSidebar />

            </Box>
        </Container>
    )
}