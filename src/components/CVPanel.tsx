'use client';

import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';

type Props = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function CVPanel({ open, setOpen }: Props) {
    if (!open) return null;

    return (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
        >
        <div className="bg-nyc_gray p-8 rounded-lg w-[90%] md:w-[600px] shadow-xl">
            <h2 className="text-3xl font-bold text-nyc_yellow mb-4">Mon CV en 4 étages</h2>
            <ul className="space-y-2 mb-4">
            <li><strong>Formation&nbsp;:</strong> reconversion dev, autodidacte acharnée.</li>
            <li><strong>Stack&nbsp;:</strong> React, Next.js, Tailwind, GSAP…</li>
            <li><strong>Soft skills&nbsp;:</strong> storytelling, rigueur, empathie.</li>
            <li><strong>Télécharger&nbsp;:</strong> <a href="/gb-cv.pdf" className="underline">CV PDF</a></li>
            </ul>
            <button
            onClick={() => setOpen(false)}
            className="mt-4 px-4 py-2 bg-nyc_yellow text-black font-bold rounded"
            >
            Fermer
            </button>
        </div>
        </motion.div>
    );
}