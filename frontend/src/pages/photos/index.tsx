import MainLayout from '@/components/layouts/MainLayout'
import VideoSection from '@/components/Video/VideoSection'
import VideoSidebar from '@/components/Video/VideoSidebar'
import VideoInfoCard from '@/components/Video/VideoInfoCard'
import { Container, Box, Typography } from '@mui/material'
import ContentLayout from '@/components/layouts/ContentLayout'
import PhotoSection from '@/components/Photo/PhotoSection'
import PhotoSidebar from '@/components/Photo/PhotoSidebar'
import PhotoUpload from '@/components/Photo/PhotoUpload'

export default function Photo() {
    return (
        <MainLayout>
            <ContentLayout
                content={<PhotoSection />}
                sidebar={<PhotoSidebar />}
            />
        </MainLayout>
    )
}