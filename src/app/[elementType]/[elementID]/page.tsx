"use client";
import { Box, Stack } from "@mui/material";
import { OpenElementsTabs } from "../../../components/ElementTabs/OpenElementsTabs";
import { useRouter } from "next/navigation";

export default function Test() {
    const router = useRouter();

    return (
        <Stack>
            <OpenElementsTabs handleAddTab={() => router.push('/gene/apoe')}>
                <Box></Box>
            </OpenElementsTabs>
        </Stack>
    )
}