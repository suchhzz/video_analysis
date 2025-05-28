import VideoInfoCard from '@/components/Video/VideoInfoCard'
import { Container, Box, Typography } from '@mui/material'
import PhotoInfoCard from './PhotoInfoCard'

type PhotoSidebarProps = {
    isImageShown?: boolean;
}

export default function PhotoSidebar({ isImageShown }: PhotoSidebarProps) {
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
                {isImageShown && <Box
                    sx={{
                        p: 3,
                        maxHeight: '700px',
                        overflow: 'auto',
                        '::-webkit-scrollbar': {
                            width: '6px',
                        },
                        '::-webkit-scrollbar-thumb': {
                            backgroundColor: '#b0b0b0',
                            borderRadius: '3px',
                        },
                        '::-webkit-scrollbar-track': {
                            backgroundColor: '#f0f0f0',
                        },
                    }}
                >

                    <PhotoInfoCard
                        category='people'
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, rem totam cumque asperiores sunt magnam fugiat fuga quasi accusamus laboriosam!'
                    />
                    <PhotoInfoCard
                        category='car'
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, rem totam cumque asperiores sunt magnam fugiat fuga quasi accusamus laboriosam!'
                    />
                    <PhotoInfoCard
                        category='animal'
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, rem totam cumque asperiores sunt magnam fugiat fuga quasi accusamus laboriosam!'
                    />
                    <PhotoInfoCard
                        category='text'
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, rem totam cumque asperiores sunt magnam fugiat fuga quasi accusamus laboriosam!'
                    />
                </Box>}
            </Box >
        </>
    )
}