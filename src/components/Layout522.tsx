import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { reader } from "@/lib/keystatic";
import Image from "next/image";
import Link from "next/link";

export async function Layout522() {
    const workshops = await reader.collections.workshops.all();

    return (
        <section id="kurzusok" className="px-[5%] py-16 md:py-24 lg:py-28 bg-secondary/50">
            <div className="container">
                <div className="mb-12 md:mb-18 lg:mb-20 mx-auto max-w-lg text-center">
                    <p className="mb-3 font-semibold md:mb-4 text-primary uppercase tracking-wider text-sm">Tanulás</p>
                    <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl font-serif text-foreground">Kézműves kurzusok</h2>
                    <p className="md:text-md font-sans text-foreground/80">Ha szeretnél új kézműves technikákat tanulni, látogass el a workshopomra! Megmutatom, hogyan válhat a feleslegesnek gondolt hulladék igazi kincssé.</p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    {workshops.length > 0 ? (
                        workshops.map((workshop) => (
                            <div key={workshop.slug} className="flex flex-col border border-border bg-background rounded-sm shadow-sm hover:shadow-md transition-all overflow-hidden">
                                {/* Borítókép mező kezelése */}
                                {workshop.entry.coverImage && (
                                    <div className="relative w-full aspect-video">
                                        <Image
                                            src={workshop.entry.coverImage}
                                            alt={workshop.entry.title}
                                            fill
                                            className="object-cover"
                                            unoptimized
                                        />
                                    </div>
                                )}

                                <div className="p-6 md:p-8 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-2xl font-bold font-serif text-foreground">{workshop.entry.title}</h3>
                                        {workshop.entry.price && (
                                            <span className="text-sm font-semibold bg-secondary px-2 py-1 rounded text-foreground/80">{workshop.entry.price}</span>
                                        )}
                                    </div>

                                    {/* Rich text helyett most csak egyszerűsítve jelenítjük meg, vagy a DocumentRenderer-t kéne használni. 
                          Itt most a design miatt feltételezzük, hogy rövid szöveg. */}
                                    <div className="text-foreground/80 font-sans mb-6 text-sm line-clamp-3">
                                        {/* Itt egyelőre placeholder, mert a RichText rendereléshez kellene a @keystatic/next/renderer. 
                            Ha gondolod, beüzemelhetem azt is, de most a layout a lényeg. */}
                                        Kattints a részletekért a teljes leíráshoz!
                                    </div>

                                    <div className="mt-auto pt-4 border-t border-muted/30 w-full">
                                        {workshop.entry.features && workshop.entry.features.length > 0 && (
                                            <>
                                                <p className="text-xs font-semibold uppercase text-primary mb-2">Jellemzők:</p>
                                                <ul className="list-disc list-inside text-sm text-foreground/70 space-y-1 mb-4">
                                                    {workshop.entry.features.slice(0, 3).map((feature, index) => (
                                                        <li key={index}>{feature}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                        <Button iconRight={<RxChevronRight />} title="Részletek" className="w-full bg-transparent border border-muted text-foreground hover:bg-secondary">
                                            Részletek
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        /* Fallback, ha nincs még feltöltve adat */
                        <div className="col-span-full text-center py-12 text-muted-foreground">
                            <p>Jelenleg nincsenek feltöltve kurzusok a rendszerben.</p>
                            <p className="text-sm">Látogasd meg a <Link href="/keystatic" className="underline text-primary">/keystatic</Link> oldalt a feltöltéshez!</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
