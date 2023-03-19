/* eslint-disable no-irregular-whitespace */
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
        <div className="container m-8 mx-auto h-full w-[90%]">
          <div className="align-items-center w-[50%] align-middle md:flex">
            <h1 className="playfair text-[2.4rem] leading-normal md:mt-4 md:text-[4vw]">
              Our Projects
            </h1>
            <div className="my-auto h-1 w-[28%] bg-red-900"></div>
          </div>
          <div className="flex flex-col gap-5 lg:flex-row">
            {projects.map((project) => (
              <Link key={project.title} href={project.href}>
                <div className="relative transition duration-700 ease-in-out hover:scale-105">
                  <Image
                    src={project.imgSrc}
                    width={501}
                    height={300}
                    className="h-[256px] object-cover"
                    alt={project.title}
                  />
                  <div className="playfair text-lg">{project.title}</div>
                  <div className="montserrat text-sm">{project.location}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="container mt-16 flex flex-col gap-4 border-t-2 border-red-700 pt-8 md:h-[800px] md:flex-wrap	">
            <div>
              <h2 className="playfair text-bold mb-4 pt-2 text-2xl">United States of America</h2>
              <ul className="proj-list">
                <li>LaQuinta, Houston, Texas</li>
                <li>Hyatt Place, Houston, Texas</li>
                <li>Hampton Inn, Houston, Texas</li>
              </ul>
            </div>
            <div>
              <h2 className="playfair text-bold mb-4 pt-2 text-2xl">Middle East & Africa</h2>
              <ul className="proj-list">
                <li>Spring Hills 1, Bahrain</li>
                <li>Spring Hills 2, Bahrain</li>
                <li>Spring Hills 3 & 4, Bahrain</li>
                <li>Fontana Gardens, Bahrain</li>
                <li>Fontana Towers, Bahrain</li>
                <li>Juffair Towers, Bahrain</li>
                <li>Al Yamam Village, Saudi Arabia</li>
                <li>Narcissus Hotel & Resort, Riyadh</li>
                <li>Marbella Residency, Saudi Arabia</li>
                <li>Narcissus Resort & Spa, Jeddah</li>
                <li>Sequina Residency, Saudi Arabia</li>
                <li>Marriott Ikeja, Lagos, Nigeria</li>
                <li>Crowne Plaza, Nairobi</li>
                <li>Samovar Premier, Zambia</li>
                <li>Marriott Addis Ababa, Ethiopia</li>
                <li>Hilton, N'Djamena, Chad</li>
                <li>Sarovar Premiere, Somaliland</li>
                <li>Golden Tulip Resort, Zanzibar</li>
                <li>M120 Lagos, Nigeria</li>
                <li>Kofo Abayomi, Lagos, Nigeria</li>
                <li>Novotel, Lagos, Nigeria</li>
                <li>Mgallery Accor, Lagos, Nigeria</li>
              </ul>
            </div>
            <div>
              <h2 className="playfair text-bold mb-4 pt-2 text-2xl">India & South-East Asia</h2>
              <ul className="proj-list">
                <li>Aaron Regina, Goa</li>
                <li>Aqua Resorts, Goa</li>
                <li>BM Hotels, Mudra Port</li>
                <li>Chomugarh Palace, Jaipur</li>
                <li>Courtyard by Marriott, Bhopal</li>
                <li>Courtyard by Marriott, Bilaspur</li>
                <li>Courtyard by Marriott, Surat</li>
                <li>Days Inn, Neemrana</li>
                <li>Fairfield by Marriott, Lucknow</li>
                <li>Four Points Sheraton, Agra</li>
                <li>Gateway by Taj, Surat</li>
                <li>Gold Leaf, Udaipur</li>
                <li>IBIS, Jaipur</li>
                <li>IBIS, Mumbai Airport</li>
                <li>IBIS, ORR, Bangalore</li>
                <li>Lords Inn, Jodhpur</li>
                <li>Le Meridian, Indian</li>
                <li>Marriott, Surat</li>
                <li>Marriott, Jaipur</li>
                <li>Novotel, Kolkata</li>
                <li>Novotel, ORR, Bangalore</li>
                <li>Park Inn, Badrinath</li>
                <li>Park Plaza, Jodhpur</li>
                <li>Park Plaza, Mussourie</li>
                <li>Park Plaza, Zirakpur</li>
                <li>Park Prime, Jaipur</li>
                <li>Pullman, Delhi Aerocity</li>
                <li>Radisson, Rudrapur</li>
                <li>Ramada Plaza, Jairpur</li>
                <li>Renaissance, Lucknow</li>
                <li>Courtyard by Marriott, Shillong</li>
                <li>The Leaf Resort, Nepal</li>
                <li>Courtyard by Marriott, Chittagong, Bangladesh</li>
              </ul>
            </div>
            <div>
              <h2 className="playfair text-bold mb-4 pt-2 text-2xl">China</h2>
              <ul className="proj-list">
                <li>Club Zilan, Chengdu</li>
                <li>Central Park, Beijing</li>
                <li>City Plaza, GuangZhou</li>
                <li>Crowne Plaza, Suzhou</li>
                <li>Fu Hotel, ZhuZhuo</li>
                <li>Gehua New Century, Beijing</li>
                <li>Hangcheng Hotel, Lijang</li>
                <li>Howard Johnson, Chongqing</li>
                <li>Intercontinental, Huizhou</li>
                <li>Jincheng Hotel, GuangZhou</li>
                <li>Juda Hotel, Wuhan</li>
                <li>JW Marriott, Wuhan</li>
                <li>JW Marriott, Beijing</li>
                <li>JW Marriott, Shenzhen</li>
                <li>New Century Grand, Changchun</li>
                <li>New Century Grand, Kaifeng</li>
                <li>New Century Grand, Shaoxing</li>
                <li>Renaissance, ChengDu</li>
                <li>Ruiwan Hotel, Tianjin</li>
                <li>Shangri-La, Xian</li>
                <li>Sheraton Dalian</li>
                <li>Sheraton Resort, Shenzhen</li>
                <li>Sheraton, Suzhou</li>
                <li>Sheraton, Shenzhen</li>
                <li>Sofitel Wanda, Chengdu</li>
                <li>St.Regis, Shenzhen</li>
                <li>The Plaza, Jiuzhai</li>
                <li>The Westin, Beijing</li>
                <li>Wanda Vista, Kunming</li>
                <li>Regal Palace Resort Hotel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
