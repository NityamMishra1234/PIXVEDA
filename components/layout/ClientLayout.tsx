"use client";

import Loader from "@/components/animations/Loader";
import FloatingContactDock from "@/components/layout/FloatingContactDock";
import Footer from "@/components/layout/Footer";
import useLoader from "../hooks/useLoader";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const loading = useLoader();

    return (
        <>
            {loading && <Loader />}
            {!loading && (
                <>
                    {children}
                    <Footer />
                    <FloatingContactDock />
                </>
            )}
        </>
    );
}
