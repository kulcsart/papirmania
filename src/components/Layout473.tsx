import { Button } from "@relume_io/relume-ui";
import React from "react";
import Image from "next/image";

export function Layout473() {
    return (
        <section id="rolam" className="px-[5%] py-16 md:py-24 lg:py-28 bg-background">
            <div className="container">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-x-16">
                    <div>
                        <p className="mb-3 font-semibold md:mb-4 text-primary uppercase tracking-wider text-sm">Rólam</p>
                        <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl font-serif text-foreground">
                            Én és a papír
                        </h2>
                        <p className="md:text-md text-foreground font-sans mb-6 leading-relaxed">
                            Történetem a papír és a textil iránti gyermekkori rajongással indult. A barkácsolás, a kézműveskedés már akkor is az életem része volt, és ez a lelkesedés a felnőttkoromra sem tűnt el – sőt, egyre erősebb lett!
                            <br /><br />
                            Az évek során számos technikával megismerkedtem a varrástól, szövésen át egészen a kárpitozásig, a decoupage-ig és a falfestésig. Ez a kísérletezés máig tart, szívesen tanulok újabb és újabb technikákat. Bár sok területet szeretek, az igazi hívást a könyvkötés és a dobozkészítés jelentette.
                            <br /><br />
                            Lakberendezőként a hivatásomban is a papír és a textil a főszereplők. Szakterületem a tapéták és a lakástextíliák. A sok gyönyörű anyag és textúra, amivel nap mint nap dolgozom, folyamatosan inspirál a kézműveskedésre. Ez a két része az életemnek mára elválaszthatatlanul összefonódott, ebből született a Papírmánia.
                        </p>
                    </div>
                    <div className="relative flex">
                        <div className="relative aspect-square size-full">
                            <Image
                                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-dim.png"
                                className="object-cover rounded-sm shadow-lg rotate-1"
                                alt="Rólam portré"
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
