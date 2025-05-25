import MainLayout from '@/components/layouts/MainLayout'
import VideoSection from '@/components/Video/VideoSection'
import VideoSidebar from '@/components/Video/VideoSidebar'
import VideoInfoCard from '@/components/Video/VideoInfoCard'
import { Container, Box, Typography } from '@mui/material'
import ContentLayout from '@/components/layouts/ContentLayout'

export default function Photo() {
    return (
        <MainLayout>
            <ContentLayout
                content={<VideoSection />}
                sidebar={<VideoSidebar />}
            />
        </MainLayout>
    )
}