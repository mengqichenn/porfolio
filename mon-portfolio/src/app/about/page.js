import Image from "next/image";

export default function About() {

    return (

        <main className="flex-1 bg-base-100 text-base-content">
            <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-16 sm:py-24">
                <div className="grid items-center gap-10 md:grid-cols-[18rem_1fr] md:gap-16">
                    <div className="relative mx-auto aspect-[4/5] w-70 overflow-hidden sm:w-64 md:mx-0 md:w-auto border rounded-full  border-base-300 bg-base-200 shadow-lg">
                        <Image src="/images/profile.jpg" alt="Portrait" fill className="object-cover" sizes="(min-width: 768px) 18rem, 70vw" />
                    </div>

                    <div>
                        <h1 className="-mt-2 mx-10 font-editorial text-4xl sm:text-6xl"> À propos de moi </h1>

                    </div>
                </div>

                <div className="mt-15 pt-10 border-t border-base-300 pt-8 text-lg leading-8 text-base-content/80 text-justify">
                    <p>Bonjour ! </p>
                    <p>
                        Je m’appelle Mengqi Chen et je suis étudiante en pré-MSc informatique à Epitech Montpellier, en France.
                    </p>
                    <p>
                        Originaire de Chine, je vis en France depuis 2016 ; mon parcours a été enrichi par la rencontre de ces deux cultures.
                        Diplômée en 2022 d’un master en chimie analytique, j’ai toujours été fascinée par la manière dont les données brutes peuvent devenir des informations utiles.
                    </p>

                    <p> J’ai rejoint Epitech pour approfondir mes connaissances en informatique et acquérir des compétences techniques en développement web et logiciel, systèmes et réseaux, big data ou encore cybersécurité en réalisant des projets personnels ou collaboratifs. Mon objectif est d’associer ma rigueur analytique à une expertise en data afin de développer une double compétence adaptée aux enjeux d’un monde toujours plus guidé par les données.
                    </p>
                </div>

                <section className="mt-15 pt-10 border-t border-base-300 pt-8">
                    <h2 className="font-editorial text-3xl sm:text-4xl">Centres d'intérêt</h2>

                    <ul className="mt-16 flex flex-wrap gap-3">
                        {[
                            "Cinéma",
                            "Voyages & Cultures",
                            "Lecture",
                            "Cuisine & Pâtisserie",
                            "Escape Game",
                            "Moments avec mon chat",
                        ].map((interest) => (

                            <li key={interest} className="rounded-full border border-base-300 bg-base-200 px-4 py-2 text-base-content transition-transform duration-200 hover:-translate-y-1 hover:bg-base-300">
                                {interest}
                            </li>
                        ))}
                    </ul>
                </section>

            </section>
        </main>
        
    );
}
