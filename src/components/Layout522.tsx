import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout522() {
    return (
        <section id="kurzusok" className="px-[5%] py-16 md:py-24 lg:py-28 bg-secondary/50">
            <div className="container">
                <div className="mb-12 md:mb-18 lg:mb-20 mx-auto max-w-lg text-center">
                    <p className="mb-3 font-semibold md:mb-4 text-primary uppercase tracking-wider text-sm">Tanulás</p>
                    <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl font-serif text-foreground">Kézműves kurzusok</h2>
                    <p className="md:text-md font-sans text-foreground/80">Ha szeretnél új kézműves technikákat tanulni, látogass el a workshopomra! Megmutatom, hogyan válhat a feleslegesnek gondolt hulladék igazi kincssé.</p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    {/* Kártya 1 */}
                    <div className="flex flex-col p-6 md:p-8 border border-border bg-background rounded-sm shadow-sm hover:shadow-md transition-all">
                        <h3 className="mb-2 text-2xl font-bold font-serif text-foreground">Hulladékból kincs</h3>
                        <p className="text-foreground/80 font-sans mb-4 text-sm">
                            Felhasználunk csomagolóanyagokat, magazinokat, tapétákat. Technikák: Papírfestés, nyomdázás, stencilezés.
                        </p>
                        <div className="mt-auto pt-4 border-t border-muted/30">
                            <p className="text-xs font-semibold uppercase text-primary mb-2">Technikák:</p>
                            <ul className="list-disc list-inside text-sm text-foreground/70 space-y-1">
                                <li>Cartonnage</li>
                                <li>Könyvkötés</li>
                                <li>Dobozkészítés</li>
                            </ul>
                        </div>
                    </div>

                    {/* Kártya 2 */}
                    <div className="flex flex-col p-6 md:p-8 border border-border bg-background rounded-sm shadow-sm hover:shadow-md transition-all">
                        <h3 className="mb-2 text-2xl font-bold font-serif text-foreground">Mit készítünk?</h3>
                        <p className="text-foreground/80 font-sans mb-4">
                            Garantáltan élmény lesz a tanulás, a végeredmény pedig egyedi és maradandó!
                        </p>
                        <ul className="mt-auto space-y-2 text-sm text-foreground/80 list-disc list-inside">
                            <li>Könyvet, füzetet</li>
                            <li>Díszeket és dekorációkat</li>
                            <li>Egyedi ajándékdobozokat</li>
                            <li>Origami táskát, borítékot</li>
                        </ul>
                    </div>

                    {/* Kártya 3 */}
                    <div className="flex flex-col p-6 md:p-8 border border-border bg-background rounded-sm shadow-sm hover:shadow-md transition-all">
                        <h3 className="mb-2 text-2xl font-bold font-serif text-foreground">Kiknek ajánlom?</h3>
                        <p className="text-foreground/80 font-sans mb-4">
                            Tökéletes választás kreatív kikapcsolódásra. Ha egyedül érkezel, nem kell aggódnod, garantált a jó hangulat!
                        </p>
                        <ul className="mt-auto space-y-2 text-sm text-foreground/80">
                            <li className="flex items-center gap-2"><span className="text-primary">•</span> Céges csapatépítésre</li>
                            <li className="flex items-center gap-2"><span className="text-primary">•</span> Iskolai csoportoknak</li>
                            <li className="flex items-center gap-2"><span className="text-primary">•</span> Baráti társaságoknak</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
