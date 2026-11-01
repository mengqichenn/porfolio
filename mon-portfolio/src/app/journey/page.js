
const steps = [
    {
        year: 'De ma naissance à mes 18 ans',
        title: 'Grandir en Chine',
        text: 'Originaire de Chine, j’ai grandi dans un environnement qui a nourri ma curiosité et mon ouverture sur le monde. Depuis petite, je suis inspirée par la littérature et le cinéma français, qui m’ont donné envie de découvrir ce pays. Quelques mois avant le bac, je me suis inscrite à un programme d’échange pour poursuivre mes études supérieures en France. Je commence à apprendre le français et attends avec impatience le nouveau chapitre de ma vie.',
    },

    {
        year: 'novembre 2016',
        title: 'Arrivée en France',
        text: 'Je suis arrivée à Montpellier pour une année de langue avant l’insertion à l’université. Une nouvelle langue, une nouvelle culture et une grande capacité d’adaptation développée au fil des années.',
    },

    {
        year: 'juin 2022',
        title: 'Obtention de mon diplôme',
        text: 'Au bout de 5 ans d’études enrichissantes, j’ai enfin obtenu mon diplôme de Master en chimie analytique',
    },

    {
        year: '2022 - 2026',
        title: 'Premier job',
        text: 'J’ai décroché mon premier job dans une entreprise à taille humaine au sud de Strasbourg. Une première expérience qui m’a permis de mettre en pratique mes compétences scientifiques dans un cadre concret.',
    },

    {
        year: 'septembre 2026',
        title: 'Reprise d’études et intégration à Epitech',
        text: 'J’ai pris la décision de reprendre les études et de me former à l’informatique pour associer ma rigueur analytique à des compétences en développement et en data/IA.',
    },

]


export default function JourneyPage() {
    return (
        <main className="flex-1 bg-base-100 text-base-content">

            {/* Section timeline */}
            <section className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-16 sm:py-24">
                <h1 className="-mt-10 font-editorial text-4xl sm:text-6xl">
                Mon parcours
                </h1>

                <ol className="mt-16 border-l border-base-content/20">
                {steps.map((step, index) => (
                    <li
                    key={`${step.year}-${index}`}
                    className="relative pb-10 pl-8 last:pb-0"
                    >
                    <span className="absolute -left-[6px] top-6 size-3 rounded-full bg-base-content" />

                    <article className="rounded-xl border border-base-content/15 bg-base-100 p-6 transition-all duration-200 hover:-translate-y-1 hover:scale-[1.01] hover:bg-base-200 hover:shadow-lg">
                        <p className="font-mono text-sm text-base-content/60">
                        {step.year}
                        </p>

                        <h2 className="mt-2 font-editorial text-2xl">
                        {step.title}
                        </h2>

                        <p className="mt-3 leading-7 text-base-content/80">
                        {step.text}
                        </p>
                    </article>
                    </li>
                ))}
                </ol>


                {/* Section Formation */}
                <section className="mt-25 border-t border-base-content pt-15">
                    <h2 className="mt-3 font-mono uppercase tracking-[0.1em] text-xl text-base-content/80 sm:text-4xl">Formation</h2>

                    <div className="mt-8">
                        <article className="pl-10 border-t border-base-content/15 py-5 transition-all duration-200 hover:-translate-y-1 hover:rounded-2xl hover:scale-[1.01] hover:shadow-lg sm:grid sm:grid-cols-[10rem_1fr] sm:gap-6">
                            <p className="font-mono text-sm text-base-content/60"> 2026 - 2029 </p>

                            <div className="mt-2 sm:mt-0">
                                <h3 className="font-editorial text-xl">MSc - Architecte des Systèmes d'Information</h3>
                                <p className="mt-2 text-base-content/80">Epitech Montpellier</p>
                            </div>
                        </article>

                        <article className="pl-10 border-t border-base-content/15 py-5 transition-all duration-200 hover:-translate-y-1 hover:rounded-2xl hover:scale-[1.01] hover:shadow-lg sm:grid sm:grid-cols-[10rem_1fr] sm:gap-6">
                            <p className="font-mono text-sm text-base-content/60">2020 - 2022</p>

                            <div className="mt-2 sm:mt-0">
                                <h3 className="font-editorial text-xl">Master - Sciences Analytiques</h3>
                                <p className="mt-2 text-base-content/80">Université de Strasbourg</p>
                            </div>
                        </article>
                    </div>
                </section>


                {/* Section Compétences */}
                <section className="my-25 border-t border-base-content pt-15">

                    <h2 className="mt-3 font-mono uppercase tracking-[0.1em] text-xl text-base-content/80 sm:text-4xl">Compétences</h2>

                    <p className="mt-8 max-w-2xl leading-7 text-base-content/80">
                        Des compétences développées à travers mes études, mes projets personnels et collectifs.</p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        <article className="border border-base-content/15 bg-base-200 rounded-xl p-5 transition-all duration-200 hover:-translate-y-1 hover:rounded-2xl hover:scale-[1.01] hover:shadow-lg">
                            <h3 className="font-editorial text-2xl">Développement web</h3>

                            <ul className="mt-4 flex flex-wrap gap-2">
                                <li className="badge badge-outline">HTML</li>
                                <li className="badge badge-outline">CSS</li>
                                <li className="badge badge-outline">JavaScript</li>
                                <li className="badge badge-outline">Next.js</li>
                                <li className="badge badge-outline">Tailwind CSS</li>
                                <li className="badge badge-outline">Django REST Framework</li>
                            </ul>
                        </article>

                        <article className="border border-base-content/15 bg-base-200 rounded-xl p-5 transition-all duration-200 hover:-translate-y-1 hover:rounded-2xl hover:scale-[1.01] hover:shadow-lg">
                            <h3 className="font-editorial text-2xl">Programmation</h3>

                            <ul className="mt-4 flex flex-wrap gap-2">
                                <li className="badge badge-outline">Python</li>
                                <li className="badge badge-outline">Java</li>
                                <li className="badge badge-outline">Bash</li>
                                <li className="badge badge-outline">SQL</li>
                                <li className="badge badge-outline">R</li>

                            </ul>
                        </article>

                        <article className="border border-base-content/15 bg-base-200 rounded-xl p-5 transition-all duration-200 hover:-translate-y-1 hover:rounded-2xl hover:scale-[1.01] hover:shadow-lg">
                            <h3 className="font-editorial text-2xl">Données et systèmes</h3>

                            <ul className="mt-4 flex flex-wrap gap-2">
                                <li className="badge badge-outline">MySQL</li>
                                <li className="badge badge-outline">PostgreSQL</li>
                                <li className="badge badge-outline">Pandas</li>
                                <li className="badge badge-outline">NumPy</li>
                            </ul>
                        </article>

                        <article className="border border-base-content/15 bg-base-200 rounded-xl p-5 transition-all duration-200 hover:-translate-y-1 hover:rounded-2xl hover:scale-[1.01] hover:shadow-lg">
                            <h3 className="font-editorial text-2xl">Outils & environnements</h3>

                            <ul className="mt-4 flex flex-wrap gap-2">
                                <li className="badge badge-outline">Git & GitHub</li>
                                <li className="badge badge-outline">Docker</li>
                                <li className="badge badge-outline">Linux</li>
                                <li className="badge badge-outline">Travail en équipe</li>
                            </ul>
                        </article>
                    </div>
                </section>


            </section>


        </main>
    );
}