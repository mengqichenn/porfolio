
const steps = [
    {
        year: 'De ma naissance à mes 18 ans',
        title: 'Grandir en Chine',
        text: 'Originaire de Chine, j’ai grandi dans un environnement qui a nourri ma curiosité et mon ouverture sur le monde. Depuis petite, je suis inspirée par la littérature et le cinéma français, qui m’ont donné envie de découvrir ce pays. Quelques mois avant le bac, je me suis inscrite à un programme d’échange pour poursuivre mes études supérieures en France. Je commence à apprendre le français et attends avec impatience le nouveau champitre de ma vie.',
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
        text: 'J’ai décroché mon premier job dans une entreprise à taille humaien au sud de Strasbourg. Une première expérience qui m’a permis de mettre en pratique mes compétences scientifiques dans un cadre concret.',
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
            </section>
        </main>
    );
}