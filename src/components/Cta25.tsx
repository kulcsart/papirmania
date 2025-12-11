import { Button } from "@relume_io/relume-ui";
import React from "react";
export function Cta25() {
    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-primary text-white">
            <div className="container max-w-lg text-center">
                <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl font-serif text-white">Alkossunk együtt</h2>
                <p className="md:text-md mb-8 font-sans text-white/90">Ne maradj le a következő alkalomról. Tanulj kézműves technikákat, óvd a környezetet kreatívan</p>
                <Button title="Időpontfoglalás" className="bg-white text-primary hover:bg-white/90">Megnézem az időpontokat</Button>
            </div>
        </section>
    );
}
