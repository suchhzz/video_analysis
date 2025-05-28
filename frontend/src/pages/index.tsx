import MainLayout from '@/components/layouts/MainLayout'
import { Container, Box, Typography, Button, Stack } from '@mui/material'
import Link from 'next/link'

export default function Home() {
  return (
    <MainLayout>
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'Inter', sans-serif",
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)', // ← фикс
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            p: 5,
            borderRadius: 3,
            boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
            bgcolor: 'white',
            width: '100%',
            maxWidth: 360,
          }}
        >
          <Typography
            variant="h6"
            component="h1"
            fontWeight={600}
            mb={4}
            color="text.primary"
            letterSpacing={1}
          >
            Choose Recognition Mode
          </Typography>

          <Stack spacing={2}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              href="/videos"
              sx={{
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
                bgcolor: '#1976d2',
                '&:hover': { bgcolor: '#1565c0' },
              }}
              fullWidth
            >
              Video
            </Button>

            <Button
              variant="outlined"
              size="large"
              component={Link}
              href="/photos"
              sx={{
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
                borderColor: '#1976d2',
                color: '#1976d2',
                '&:hover': {
                  borderColor: '#1565c0',
                  bgcolor: 'rgba(25, 118, 210, 0.04)',
                },
              }}
              fullWidth
            >
              Photo
            </Button>
          </Stack>
        </Box>
      </Box>
    </MainLayout>
  )
}
