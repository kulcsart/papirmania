import React from "react";
import { BiLogoInstagram, BiLogoFacebookCircle } from "react-icons/bi";
export function Footer3() {
    return (
        <footer className="px-[5%] py-12 bg-background border-t border-border">
            <div className="container">
                <div className="mb-6"><h3 className="font-serif text-xl font-bold">Papírmánia</h3></div>
                <div className="flex gap-4 mb-8">
                    <a href="#"><BiLogoFacebookCircle className="size-6 text-foreground" /></a>
                    <a href="#"><BiLogoInstagram className="size-6 text-foreground" /></a>
                </div>
                <p className="text-sm text-foreground">© 2025 Papírmánia.</p>
            </div>
        </footer>
    );
}
