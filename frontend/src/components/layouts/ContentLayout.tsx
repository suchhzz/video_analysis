import { Box } from "@mui/material";
import { ReactNode } from "react";

interface ContentLayoutProps {
    content: ReactNode,
    sidebar: ReactNode
}

export default function ContentLayout({ content, sidebar }: ContentLayoutProps) {

    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: '60% 40%',
                gap: 2,
            }}
        >

            {content}
            {sidebar}

        </Box>
    )
}