import React from "react";
import { BiSolidStar } from "react-icons/bi";

export function Testimonial26() {
    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-background">
            <div className="container">
                <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
                    <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl font-serif text-foreground">Visszajelzések</h2>
                    <p className="md:text-md text-foreground/80">Amit a résztvevők mondtak rólunk.</p>
                </div>
                <div className="columns-1 gap-6 md:columns-2 lg:columns-3 space-y-6">
                    {/* Visszajelzés 1 */}
                    <div className="break-inside-avoid border border-border p-6 bg-secondary/30 rounded-sm">
                        <div className="mb-4 flex text-primary"><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /></div>
                        <blockquote className="md:text-md text-foreground font-serif italic mb-4">"Végre megtanultam, hogyan készítsek saját könyvet. Papírműves volt az élmény."</blockquote>
                        <p className="font-semibold text-foreground">Márta Kovács</p>
                    </div>
                    {/* Visszajelzés 2 */}
                    <div className="break-inside-avoid border border-border p-6 bg-secondary/30 rounded-sm">
                        <div className="mb-4 flex text-primary"><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /></div>
                        <blockquote className="md:text-md text-foreground font-serif italic mb-4">"A workshop során rájöttem, hogy a hulladék valóban kincs lehet. Kreatív és fenntartható."</blockquote>
                        <p className="font-semibold text-foreground">János Szabó</p>
                    </div>
                    {/* Visszajelzés 3 */}
                    <div className="break-inside-avoid border border-border p-6 bg-secondary/30 rounded-sm">
                        <div className="mb-4 flex text-primary"><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /></div>
                        <blockquote className="md:text-md text-foreground font-serif italic mb-4">"Olyan volt, mintha a papír beszélne velem. Igazi varázslat történt az kezeim között."</blockquote>
                        <p className="font-semibold text-foreground">Éva Tóth</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
