export default function JourneyPage() {
    return (
        <main className="flex-1 bg-base-100 text-base-content">
            <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-16 sm:py-24">
                <p className="-mt-10 -ml-6 font-editorial text-4xl sm:text-6xl">
                    Mon parcours
                </p>


                <ul className="timeline timeline-vertical mt-16">
                    
                    <li>
                        <div className="timeline-start timeline-box journey-card max-w-lg text-left">
                            <p className="text-sm text-base-content/60">De ma naissance à 18 ans</p>
                            <h2 className="mt-2 text-xl font-semibold">Grandir en Chine</h2>
                            <p className="mt-3 leading-7">
                                Originaire de Chine, j’ai grandi dans un environnement qui a nourri
                                ma curiosité et mon ouverture sur le monde.
                            </p>
                        </div>
                        <hr  className="bg-base-300" />
                    </li>

                    <li>
                        <hr  className="bg-base-300"  />
                        <div className="timeline-end timeline-box journey-card max-w-lg">
                            <p className="text-sm text-base-content/60">juin 2016</p>
                            <h2 className="mt-2 text-xl font-semibold">Baccalauréat</h2>
                            <p className="mt-3 leading-7">
                                Après le bac, je commence à préparer le programme d'échange pour continuer mes études en France.
                            </p>
                        </div>
                        <hr  className="bg-base-300" />
                    </li>

                    <li>
                        <hr  className="bg-base-300" />
                        <div className="timeline-start timeline-box journey-card max-w-lg text-left">
                            <p className="text-sm text-base-content/60">novembre 2016</p>
                            <h2 className="mt-2 text-xl font-semibold">Arrivée en France</h2>
                            <p className="mt-3 leading-7">
                                Une nouvelle langue, une nouvelle culture et une grande capacité
                                d’adaptation développée au fil des années.
                            </p>
                        </div>
                        <hr  className="bg-base-300" />
                    </li>

                    <li>
                        <hr  className="bg-base-300" />
                        <div className="timeline-end timeline-box journey-card max-w-lg">
                            <p className="text-sm text-base-content/60">2022</p>
                            <h2 className="mt-2 text-xl font-semibold">
                                Obtention du diplôme Master
                            </h2>
                            <p className="mt-3 leading-7">
                                Après 5 ans d'étude en chimie à l'Université de Strasbourg, j'ai été diplomée en Master chimie analytique. Ce parcours m'a permis de développer mes compétences en laboratoire.
                            </p>
                        </div>
                        <hr  className="bg-base-300" />
                    </li>

                    <li>
                        <hr  className="bg-base-300" />
                        <div className="timeline-start timeline-box journey-card max-w-lg text-left">
                            <p className="text-sm text-base-content/60">2022 - 2026</p>
                            <h2 className="mt-2 text-xl font-semibold">Premier emploi</h2>
                            <p className="mt-3 leading-7">
                                Une première expérience professionnelle qui m’a permis de mettre en
                                pratique mes compétences scientifiques dans un cadre concret.
                            </p>
                        </div>
                        <hr  className="bg-base-300" />
                    </li>

                    <li>
                        <hr  className="bg-base-300" />
                        <div className="timeline-end timeline-box journey-card max-w-lg">
                            <p className="text-sm text-base-content/60">septembre 2026</p>
                            <h2 className="mt-2 text-xl font-semibold">Intégration à Epitech</h2>
                            <p className="mt-3 leading-7">
                                Je me forme à l’informatique pour associer ma rigueur analytique à
                                des compétences en développement et en data.
                            </p>
                        </div>
                    </li>
                </ul>

            </section>
        </main>
    );
}