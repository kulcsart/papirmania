"use client";
import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";

export function Navbar3() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width: 991px)");
    const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

    return (
        <section id="navbar" className="grid h-auto w-full grid-cols-[1fr_max-content_1fr] items-center justify-between border-b border-border bg-background px-[5%] md:min-h-18 sticky top-0 z-50">
            <div className="flex items-center gap-4 lg:hidden">
                <button className="flex size-12 flex-col justify-center" onClick={toggleMobileMenu}>
                    <span className="my-[3px] h-0.5 w-6 bg-foreground" />
                    <span className="my-[3px] h-0.5 w-6 bg-foreground" />
                    <span className="my-[3px] h-0.5 w-6 bg-foreground" />
                </button>
            </div>
            <Link href="/" className="flex min-h-16 flex-shrink-0 items-center font-serif text-2xl font-bold text-foreground justify-center lg:justify-start">
                Papírmánia
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex justify-center gap-8">
                <a href="#rolam" className="text-foreground hover:text-primary transition-colors">Rólam</a>
                <a href="#galeria" className="text-foreground hover:text-primary transition-colors">Galéria</a>
                <a href="#kurzusok" className="text-foreground hover:text-primary transition-colors">Kurzusok</a>
                <a href="#kapcsolat" className="text-foreground hover:text-primary transition-colors">Kapcsolat</a>
            </div>

            <div className="flex min-h-16 items-center justify-end gap-x-4">
                <Button title="Foglalás" size="sm" className="bg-primary text-white hover:bg-primary/90">Foglalás</Button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                        className="fixed inset-0 z-50 bg-background px-[5%] py-6 lg:hidden flex flex-col h-screen w-[80%] border-r border-border"
                    >
                        <div className="flex flex-col gap-6 mt-10 text-lg font-serif text-foreground">
                            <a href="#rolam" onClick={toggleMobileMenu} className="hover:text-primary">Rólam</a>
                            <a href="#galeria" onClick={toggleMobileMenu} className="hover:text-primary">Galéria</a>
                            <a href="#kurzusok" onClick={toggleMobileMenu} className="hover:text-primary">Kurzusok</a>
                            <a href="#kapcsolat" onClick={toggleMobileMenu} className="hover:text-primary">Kapcsolat</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
