import { Button, Input, Label, Textarea } from "@relume_io/relume-ui";
import React from "react";
import Image from "next/image";

export function Contact8() {
    return (
        <section id="kapcsolat" className="px-[5%] py-16 md:py-24 lg:py-28 bg-background">
            <div className="container grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
                <div>
                    <div className="mb-6 md:mb-8">
                        <p className="mb-3 font-semibold md:mb-4 text-primary uppercase">Üzenet</p>
                        <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl font-serif text-foreground">Írj nekem</h2>
                        <p className="md:text-md text-foreground/80">Van egy ötleted vagy kérdésed a workshopokról?</p>
                    </div>
                    <form className="grid grid-cols-1 gap-6">
                        <div className="grid w-full items-center">
                            <Label htmlFor="name" className="mb-2 text-foreground">Név</Label>
                            <Input type="text" id="name" className="bg-background border-muted text-foreground" />
                        </div>
                        <div className="grid w-full items-center">
                            <Label htmlFor="email" className="mb-2 text-foreground">Email</Label>
                            <Input type="email" id="email" className="bg-background border-muted text-foreground" />
                        </div>
                        <div className="grid w-full items-center">
                            <Label htmlFor="message" className="mb-2 text-foreground">Üzenet</Label>
                            <Textarea id="message" placeholder="Írj ide" className="min-h-[11.25rem] bg-background border-muted text-foreground" />
                        </div>
                        <div><Button title="Küldés" className="bg-primary text-white hover:bg-primary/90">Küldés</Button></div>
                    </form>
                </div>
                <div className="relative aspect-square md:aspect-auto h-full w-full min-h-[400px]">
                    <Image
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait.png"
                        alt="Kapcsolat"
                        fill
                        className="object-cover rounded-sm shadow-md"
                        unoptimized
                    />
                </div>
            </div>
        </section>
    );
}
