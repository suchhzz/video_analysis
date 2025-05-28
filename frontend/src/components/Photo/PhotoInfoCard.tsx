import { Box, Button, Divider, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { Category, categoryConfig } from "@/config/infoCardCategories";
import { useState } from "react";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { TextFields, Pets } from '@mui/icons-material';

type PhotoInfoProps = {
    category: Category,
    description: string
}

export default function PhotoInfoCard({ category, description }:
    PhotoInfoProps
) {

    const selectedCategory = categoryConfig[category];
    const Icon = selectedCategory.icon;

    return (
        <Box
            sx={{
                p: 2,
                mb: 2,
                borderRadius: 2,
                border: '1px solid',
                // borderColor: 'grey.300',
                borderColor: selectedCategory.borderColor,
                bgcolor: 'background.paper',
                boxShadow: 1,
                transition: 'box-shadow 0.3s ease',
                '&:hover': {
                    boxShadow: 4,
                },
            }}
        >
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: '48px 1fr',
                gap: 2,
                alignItems: 'center',
            }}>
                <Icon sx={{ fontSize: 40, color: selectedCategory.mainColor }} />

                <Typography
                    variant="body1"
                    sx={{
                        lineHeight: 1.5,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    {description}
                </Typography>
            </Box>

        </Box>
    )
}
