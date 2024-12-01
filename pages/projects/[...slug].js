import { formatSlug, getFiles, getFileBySlug } from '@/lib/mdx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import Image from 'next/image'
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'

export async function getStaticPaths() {
  const projects = getFiles('projects')
  return {
    paths: projects.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const projectSlug = context.params.slug
  const project = await getFileBySlug('projects', context.params.slug.join('/'))
  return {
    // Passed to the page component as props
    props: { project: project },
  }
}
export default function Project({ project }) {
  const { mdxSource, toc, frontMatter } = project
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])
  const Layout = require(`@/layouts/PostSimple`).default
  return (
    <div className="mx-auto w-[90%]" data-scroll-section>
      <PageSEO
        title={`${project.frontMatter.title} - ${siteMetadata.title}`}
        description={siteMetadata.description}
      />
      <Link href={'/projects'}>
        <h1 className="playfair text-5xl text-red-800"> {'<- Projects'} </h1>
      </Link>
      <h2 className="playfair mt-6 mb-6 text-4xl"> {project.frontMatter.title}</h2>
      <div>
        <div className="projectContent ">
          <MDXLayout layout={Layout} />
        </div>
      </div>
      <div className="">
        <Swiper
          className="swiper mb-[16px] h-[400px] "
          navigation={true}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetweenSlides: 32,
            },
          }}
          modules={[Navigation]}
        >
          {/* <!-- Slides --> */}
          <SwiperSlide className="swiper-slide">
            <Image
              width={500}
              height={400}
              className="aspect-auto h-full w-full object-cover object-center"
              src={project.frontMatter.imgSrc}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image
              width={500}
              height={400}
              className="aspect-auto h-full w-full object-cover object-center"
              src={project.frontMatter.imgSrc2}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image
              width={500}
              height={400}
              className="aspect-auto h-full w-full object-cover object-center"
              src={project.frontMatter.imgSrc3}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
