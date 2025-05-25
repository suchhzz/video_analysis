import { Box, Container, Typography } from "@mui/material"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

export default function MainLayout({ children }: {
    children: ReactNode
}) {

    const pathname = usePathname();

    const links = [
        { href: '/', label: 'Home' },
        { href: '/videos', label: 'Video' },
        { href: '/photos', label: 'Photo' },
    ]

    return (
        <>
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
                        width: '100%',
                        height: 50,
                        borderRadius: 1,
                        mb: 4,
                        pr: 5,
                        pl: 5,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '3rem',
                        fontSize: '15px',
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
                {children}
            </Container>
        </>
    )
}