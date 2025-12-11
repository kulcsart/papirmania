"use client";
import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import clsx from "clsx";

const useRelume = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width: 991px)");
    const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
    const getMobileOverlayClassNames = clsx(
        "fixed inset-0 z-40 bg-black lg:hidden",
        { block: isMobileMenuOpen, hidden: !isMobileMenuOpen }
    );
    const NavbarWrapper = isMobile ? motion.div : "div";
    const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
    return { toggleMobileMenu, getMobileOverlayClassNames, animateMobileMenu, NavbarWrapper };
};

export function Navbar3() {
    const useActive = useRelume();
    return (
        <section id="navbar" className="grid h-auto w-full grid-cols-[1fr_max-content_1fr] items-center justify-between border-b border-border bg-background px-[5%] md:min-h-18 sticky top-0 z-50">
            <button className="flex size-12 flex-col justify-center lg:hidden" onClick={useActive.toggleMobileMenu}>
                <span className="my-[3px] h-0.5 w-6 bg-foreground lg:hidden" />
                <span className="my-[3px] h-0.5 w-6 bg-foreground lg:hidden" />
                <span className="my-[3px] h-0.5 w-6 bg-foreground lg:hidden" />
            </button>
            <AnimatePresence>
                <useActive.NavbarWrapper
                    initial="closed" animate={useActive.animateMobileMenu} exit="closed"
                    variants={{
                        closed: { x: "-100%", opacity: 1, transition: { type: "spring", duration: 0.6, bounce: 0 } },
                        open: { x: 0, opacity: 1, transition: { type: "spring", duration: 0.4, bounce: 0 } },
                    }}
                    className="absolute left-0 top-0 z-50 flex h-dvh w-[90%] flex-col border-r border-border bg-background px-[5%] pb-4 md:w-[80%] lg:visible lg:static lg:-ml-4 lg:flex lg:h-auto lg:w-auto lg:flex-row lg:border-none lg:px-0 lg:pb-0"
                >
                    <div className="mt-6 lg:hidden"><Button title="Menü" size="sm" className="w-full">Menü</Button></div>
                    <ul className="flex flex-col lg:flex-row gap-6 mt-10 lg:mt-0 lg:items-center">
                        <li><a href="#rolam" className="text-foreground font-sans hover:text-primary">Rólam</a></li>
                        <li><a href="#galeria" className="text-foreground font-sans hover:text-primary">Galéria</a></li>
                        <li><a href="#kurzusok" className="text-foreground font-sans hover:text-primary">Kézműves kurzusok</a></li>
                    </ul>
                </useActive.NavbarWrapper>
                <motion.div initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ duration: 0.2 }} className={useActive.getMobileOverlayClassNames} onClick={useActive.toggleMobileMenu} />
            </AnimatePresence>
            <a href="#" className="flex min-h-16 flex-shrink-0 items-center font-serif text-2xl font-bold">Papírmánia</a>
            <div className="flex min-h-16 items-center justify-end gap-x-4">
                <Button title="Foglalás" size="sm" className="px-4 py-1 md:px-6 md:py-2 bg-primary text-primary-foreground">Foglalás</Button>
            </div>
        </section>
    );
}
