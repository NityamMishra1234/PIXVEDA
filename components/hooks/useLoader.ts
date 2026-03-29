"use client";

import { useEffect, useState } from "react";

export default function useLoader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500); // adjust timing

        return () => clearTimeout(timer);
    }, []);

    return loading;
}