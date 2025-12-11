import { Button } from "@relume_io/relume-ui";
import React from "react";
import Image from "next/image";

export function Header130() {
    return (
        <section id="hero" className="px-[5%] py-16 md:py-24 lg:py-28 bg-background">
            <div className="container">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
                    <div>
                        <h1 className="mb-5 text-6xl font-bold font-serif md:mb-6 md:text-9xl lg:text-10xl text-foreground">
                            Ismerd meg a papír titkait
                        </h1>
                        <p className="md:text-md text-foreground font-sans mb-6">
                            Számomra a papír nemcsak egy alapanyag, hanem a kreativitás végtelen forrása.
                            Szeretem a papírt, szeretek új életet adni a már nem használt anyagoknak.
                        </p>
                        <div className="mt-6 flex gap-x-4 md:mt-8">
                            <Button title="Kurzusok" className="bg-primary text-white border-none hover:bg-primary/90">Kurzusok</Button>
                            <Button title="Galéria" variant="secondary" className="bg-transparent border border-muted text-foreground hover:bg-secondary">Galéria</Button>
                        </div>
                    </div>
                    <div className="relative flex">
                        <div className="relative aspect-square size-full">
                            <Image
                                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait-dim.png"
                                className="object-cover rounded-sm shadow-md"
                                alt="Hero image"
                                fill
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
