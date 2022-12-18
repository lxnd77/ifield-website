import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { PageSEO } from '@/components/SEO'
import Image from 'next/image'
import Link from 'next/link'

export async function getStaticProps() {
  const projects = await getAllFilesFrontMatter('projects')
  return {
    props: {
      projects,
    },
  }
}

export default function Projects({ projects }) {
  return (
    <div>
      <PageSEO title={`Projects - ${siteMetadata.title}`} description={siteMetadata.description} />
      <div data-scroll-section>
        <div className="container m-8 mx-auto h-full w-[90%] p-8">
          <h1 className="playfair mb-8 text-4xl leading-normal md:mt-4 md:text-5xl">
            Our Projects
          </h1>
          <div className="flex flex-col gap-5 lg:flex-row">
            {projects.map((project) => (
              <Link key={project.title} href={project.href}>
                <div className="relative transition duration-700 ease-in-out hover:scale-105">
                  <Image
                    src={project.imgSrc}
                    width={501}
                    height={300}
                    className="h-[256px] w-full object-cover"
                    alt={project.title}
                  />
                  <div className="playfair text-lg font-bold">{project.title}</div>
                  <div className="montserrat text-sm">{project.location}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
