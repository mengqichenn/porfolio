import Image from 'next/image'

export default function Hero() {
    return (
        <section className="relative w-full h-[calc(100svh-4rem)] overflow-hidden flex items-end">
            <Image src="/images/hero.jpg" alt=""fill priority className="object-cover" style={{objectPosition: 'center 80%' }} />

            {/* Effet voile sombre en haut de la page */}
            <div className="absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-[#0a0806]/50 to-transparent" />

            {/* Voile plus sombre en bas pour le texte */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806]/90 via-[#0a0806]/40 to-transparent" />

            <div className="relative z-10 w-full px-[7vw] pb-[9vh] text-[#f4f1ea]">
                <p className="text-[clamp(.8rem,3vw,1.5rem)] tracking-[0.22em] uppercase text-[#e8d9bd] mb-4">Portfolio — 2026</p>

                <h1 className="font-hero font-light text-[clamp(2.2rem,7vw,4.2rem)] leading-[1.05] max-w-[14ch]">Bonjour !</h1>

                <h2 className="font-hero font-light text-[clamp(2.2rem,7vw,4.2rem)] leading-[1.2] max-w-[20ch]">Je suis <em className="font-hero font-light text-[clamp(2.6rem,7vw,5.2rem)] leading-[1.2] max-w-[20ch]">Mengqi Chen,</em> </h2>
                
                
                <h2 className="font-geist font-light text-[clamp(2.0rem,7vw,3.5rem)] leading-[1.2] max-w-[20ch]">future architecte des systèmes d&apos;<em className="text-[#e3b98f]">information</em></h2>

            
            </div>

        </section>
    )
}
