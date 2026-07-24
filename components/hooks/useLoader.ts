"use client";

import { useEffect, useState } from "react";

export default function useLoader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const shown = sessionStorage.getItem("loader-shown");

        if (shown) {
            setLoading(false);
            return;
        }

        const timer = setTimeout(() => {
            sessionStorage.setItem("loader-shown", "true");
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return loading;
}