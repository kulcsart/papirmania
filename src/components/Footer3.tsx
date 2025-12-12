import React from "react";
import { BiLogoFacebookCircle, BiLogoInstagram } from "react-icons/bi";

export function Footer3() {
    return (
        <footer className="px-[5%] py-12 bg-secondary border-t border-border">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h3 className="font-serif text-2xl font-bold text-foreground">Papírmánia</h3>
                        <p className="text-sm text-foreground/70 mt-2">Budapest, Magyarország</p>
                    </div>
                    <div className="flex gap-4">
                        <a href="#" className="text-foreground hover:text-primary"><BiLogoFacebookCircle className="size-6" /></a>
                        <a href="#" className="text-foreground hover:text-primary"><BiLogoInstagram className="size-6" /></a>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-border/50 text-center md:text-left text-sm text-foreground/60">
                    © 2025 Papírmánia. Minden jog fenntartva.
                </div>
            </div>
        </footer>
    );
}
