import ProjectCard from "@/components/ProjectCard";

const projects = [
    {
        title: "Hangman Game",
        video:"/videos/project-hangman-game.mp4",
        link: "https://github.com/mengqichenn/simple-pygame-games/tree/main",
        videoPosition: "center top",
        description:
        "Une version graphique du jeu du pendu, développée avec Pygame, intégrant une interface interactive, des effets sonores, un chronomètre et un suivi des meilleurs scores. \n Ce projet m’a permis d’approfondir mes compétences en Python, notamment dans la gestion des événements et l’organisation de la logique d’un jeu, tout en découvrant la bibliothèque Pygame.",
        tools: ["Python", "Pygame package"],
    },

    {
        title: "Online resume",
        video:"/videos/project-online-resume.mp4",
        link:"https://github.com/mengqichenn/Online-Resume",
        description:
        "Un CV en ligne développé en HTML et CSS, présentant mon parcours et mes compétences à travers une interface responsive et interactive. \n Ce projet constitue ma première approche du développement web et m'a permis de découvrir les bases de la structuration d'une page HTML, de la mise en forme CSS et de l'adaptation aux différentes tailles d'écran.",
        tools: ["HTML", "CSS"],
    },

    {
        title: "Job Board",
        video:"/videos/project-job-board.mp4",
        link: "https://github.com/mengqichenn/Projet-Job-Board",
        description:
        "Talentis est un projet scolaire réalisé en équipe avec Chris et Meryeme. L’objectif était de concevoir une plateforme de recherche d’emploi permettant aux utilisateurs de consulter des offres et de gérer les informations associées. Le projet repose sur un front-end développé en HTML, CSS et JavaScript, connecté à une API Django REST Framework et à une base de données MySQL. L’ensemble de l’environnement a été configuré avec Docker afin de faciliter l’installation et le travail collaboratif. \n Cette expérience m’a permis de découvrir le fonctionnement d’une application full-stack, les échanges entre une interface utilisateur, une API et une base de données, ainsi que l’organisation d’un projet mené en équipe.",
        tools: ["Django REST framework", "JavaScript", "HTML", "CSS", "MySQL", "Docker"],
    },

    {
        title: "Porfolio",
        video:"/videos/project-porfolio.mp4",
        link: "https://github.com/mengqichenn/porfolio",
        description:
        "Ce portfolio présente mon parcours personnel et professionnel, mes projets ainsi que mon évolution vers les métiers de l’informatique et de la data. Développé avec Next.js, Tailwind CSS et DaisyUI, il m’a permis d’approfondir la création d’interfaces modernes, responsive et accessibles. \n J’y ai conçu plusieurs pages, une navigation adaptée aux différents écrans, un mode clair/sombre, une présentation détaillée de mes projets et un formulaire de contact. Ce projet évoluera au fil de ma formation afin de refléter mes nouvelles compétences, expériences et réalisations.",
        tools: ["Next.js", "Tailwind CSS", "DaisyUI"],
    },
];

export default function ProjectsPage(){
    return (
        <main className="w-full max-w-6xl mx-auto flex-1 px-6 pt-12 pb-24 sm:px-16 sm:pt-16">
            <h1 className="-mt-2 mx-10 font-editorial text-4xl sm:text-6xl">Mes projets</h1>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </main>

    );
    
}