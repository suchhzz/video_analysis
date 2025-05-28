import { Box, Container, Typography } from "@mui/material"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

export default function MainLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    const links = [
        { href: '/', label: 'Home' },
        { href: '/videos', label: 'Video' },
        { href: '/photos', label: 'Photo' },
    ];

    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    height: 50,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '3rem',
                    fontSize: '15px',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    bgcolor: '#fff',
                    zIndex: 10,
                }}
            >
                {links.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        style={{
                            fontWeight: pathname === href ? 'bold' : 'normal',
                            color: pathname === href ? '#1976d2' : 'inherit',
                        }}
                    >
                        {label}
                    </Link>
                ))}
            </Box>

            {/* Основной контент */}
            <Container maxWidth="xl" sx={{ mt: '70px', p: 2 }}>
                {children}
            </Container>
        </>
    );
}
