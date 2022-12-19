import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <div>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div data-scroll-section>
        <div class="container m-8 mx-auto h-full w-[90%] p-8">
          <h1 class="playfair mb-8 text-[4vw] leading-normal md:mt-4">Our Projects</h1>
          <div class="flex h-full w-full flex-row justify-around text-white">
            <div class="relative shadow-md transition duration-700 ease-in-out hover:scale-110">
              {/* <a href="/projects/chad"> */}
              <img src="/assets/projects/hilton chad2.png" class="h-[256px] w-96 object-cover" />
              <div class="absolute -bottom-6 right-0 text-black">Chad, 152 Keys</div>
              {/* </a> */}
            </div>
            <div class="relative shadow-md transition duration-700 ease-in-out hover:scale-110">
              {/* <a href="/projects/gujarat"> */}
              <img src="/assets/projects/marriot gujarat.png" class="w-96" />
              <div class="absolute -bottom-6 right-0 text-black">Marriot Gujarat, 104 Keys</div>
              {/* </a> */}
            </div>
            <div class="relative shadow-md transition duration-700 ease-in-out hover:scale-110">
              {/* <a href="/projects/nairobi"> */}
              <img src="/assets/projects/nairobi crowne plaza.png" class="w-96" />
              <div class="absolute -bottom-6 right-0 text-black">Crowne Plaza Nairobi, 94 Keys</div>
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
      <div x-data=""></div>
    </div>
  )
}
