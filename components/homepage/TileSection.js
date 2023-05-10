import Tile from './Tile'

export default function TileSection({projectsData}) {
    return (
        <section className='flex flex-col container page-w mx-auto py-8'>
            <div className="grid gap-4 grid-cols-3 auto-rows-tile mx-10">
                {projectsData.map((project, i) => (
                    <Tile key={project.projectTitle + i} {...project} />
                ))}
            </div>
        </section>
    )
}