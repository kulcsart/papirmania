import React from "react";
import Image from "next/image";

export function Gallery10() {
    return (
        <section id="galeria" className="px-[5%] py-16 md:py-24 lg:py-28 bg-secondary">
            <div className="container">
                <div className="mb-12 text-center md:mb-18 lg:mb-20">
                    <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl font-serif text-foreground">Galéria</h2>
                </div>
                <div className="gap-8 space-y-8 md:columns-3">
                    {/* Helyőrző képek, ide majd a sajátjaidat töltjük fel */}
                    <div className="relative w-full aspect-[4/3] mb-8 break-inside-avoid">
                        <Image
                            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                            alt="Galéria 1"
                            fill
                            className="object-cover rounded-sm"
                            unoptimized
                        />
                    </div>
                    <div className="relative w-full aspect-[3/4] mb-8 break-inside-avoid">
                        <Image
                            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                            alt="Galéria 2"
                            fill
                            className="object-cover rounded-sm"
                            unoptimized
                        />
                    </div>
                    <div className="relative w-full aspect-square mb-8 break-inside-avoid">
                        <Image
                            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                            alt="Galéria 3"
                            fill
                            className="object-cover rounded-sm"
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
