import React from "react";
import Image from "next/image";

export function Gallery10() {
    return (
        <section id="galeria" className="px-[5%] py-16 md:py-24 lg:py-28 bg-secondary">
            <div className="container">
                <div className="mb-12 text-center md:mb-18 lg:mb-20">
                    <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl font-serif text-foreground">Galéria</h2>
                    <p className="md:text-md text-foreground/80 font-sans">Nézd meg az elkészült munkákat és inspirálódj</p>
                </div>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    <div className="break-inside-avoid relative w-full aspect-[4/3]">
                        <Image
                            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                            alt="Galéria 1"
                            fill
                            className="object-cover rounded-sm shadow-sm"
                            unoptimized
                        />
                    </div>
                    <div className="break-inside-avoid relative w-full aspect-[3/4]">
                        <Image
                            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                            alt="Galéria 2"
                            fill
                            className="object-cover rounded-sm shadow-sm"
                            unoptimized
                        />
                    </div>
                    <div className="break-inside-avoid relative w-full aspect-square">
                        <Image
                            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                            alt="Galéria 3"
                            fill
                            className="object-cover rounded-sm shadow-sm"
                            unoptimized
                        />
                    </div>
                    <div className="break-inside-avoid relative w-full aspect-[4/3]">
                        <Image
                            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                            alt="Galéria 4"
                            fill
                            className="object-cover rounded-sm shadow-sm"
                            unoptimized
                        />
                    </div>
                    <div className="break-inside-avoid relative w-full aspect-[3/4]">
                        <Image
                            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                            alt="Galéria 5"
                            fill
                            className="object-cover rounded-sm shadow-sm"
                            unoptimized
                        />
                    </div>
                    <div className="break-inside-avoid relative w-full aspect-square">
                        <Image
                            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                            alt="Galéria 6"
                            fill
                            className="object-cover rounded-sm shadow-sm"
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
