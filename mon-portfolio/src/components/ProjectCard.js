export default function ProjectCard({   
    title, 
    video,
    link,
    videoPosition = "center center", 
    description, 
    tools 
}){

    return (
        <article className="card overflow-hidden border border-base-300 bg-base-200 text-justify shadow-lg">
            <figure className="aspect-video bg-base-300">
                <video className="h-full w-full object-cover" style={{ objectPosition: videoPosition }} autoPlay loop muted playsInline>
                    <source src={video} type="video/mp4" />
                </video>
            </figure>

            <div className="card-body">
                <h2 className="card-title font-editorial text-3xl font-light">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary"> {title} 🔗</a>
                </h2>

                <p className="whitespace-pre-line leading-7 text-base-content/75">
                {description}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                    {tools.map((tool) => (
                        <span key={tool} className="badge badge-outline">
                            {tool}
                        </span>
                    ))}
                </div>

            </div>
        </article>
    );
}