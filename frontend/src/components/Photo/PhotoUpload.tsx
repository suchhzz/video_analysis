import { Box, Button } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import uploadImage from '../../../api/photo'

export default function PhotoUpload() {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log("Selected file:", file);
        }
    };

    const handleUpload = async (file: File) => {
        if (!file) {
            console.error('no file selected');
        }

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await uploadImage(formData);

            if (response.status === 200) {
                console.log('file uploaded successfully');
            }

        } catch (e) {
            console.error('file upload error', e);
        }
    }

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
                startIcon={<CloudUploadIcon />}
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
