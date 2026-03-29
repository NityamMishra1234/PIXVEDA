"use client";

import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { motion } from "framer-motion";

function Shape() {
    return (
        <Float speed={2} rotationIntensity={0.6} floatIntensity={1}>
            <mesh>
                <torusKnotGeometry args={[1.2, 0.35, 128, 32]} />
                <meshStandardMaterial
                    color="#d95f27"
                    metalness={1}
                    roughness={0.1}
                />
            </mesh>
        </Float>
    );
}

export default function Loader() {
    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(217,95,39,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(30,107,92,0.16),transparent_26%),linear-gradient(180deg,#fcf7ef_0%,#f5efe4_52%,#f7f1e6_100%)]">

            {/* 3D Background */}
            <div className="absolute inset-0 opacity-40">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[2, 2, 2]} intensity={2} />
                    <Shape />
                </Canvas>
            </div>

            {/* Glow Effect */}
            <div className="absolute h-[400px] w-[400px] rounded-full bg-[#d95f27] blur-[120px] opacity-20" />

            {/* Text Animation */}
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative text-5xl font-bold tracking-[0.3em] text-[#181511] md:text-7xl"
            >
                PIXVEDA

                {/* Shine effect */}
                <motion.span
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className="absolute left-0 top-0 h-full w-full skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
            </motion.h1>

            {/* Bottom subtle text */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-10 text-sm tracking-widest text-[#8a2f14]"
            >
                BUILDING DIGITAL GROWTH SYSTEMS
            </motion.p>
        </div>
    );
}
