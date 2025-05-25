import { Box, Button } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function VideoUpload() {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log("Selected file:", file);
        }
    };

    return (
        <Box
            sx={{
                backgroundColor: '#f5f5f5',
                width: '100%',
                height: '100%',
                minHeight: '500px',
                borderRadius: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Button
                variant="contained"
                component="label"
                startIcon={<CloudUploadIcon/>}
            >
                Upload
                <input
                    type="file"
                    hidden
                    onChange={handleFileChange}
                />
            </Button>
        </Box>
    );
}
