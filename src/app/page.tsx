"use client";
import { Button, Stack } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Test() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/gene/NACA');
    }

    return (
        <Stack>
            <Button onClick={handleClick}>Click Here</Button>
        </Stack>
    )
}