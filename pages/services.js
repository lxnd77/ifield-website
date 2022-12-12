import styles from '../css/services.module.css'
export default function Services() {
  return (
    <section className="container mx-auto w-[80%] bg-white" data-scroll-section id="con">
      <div className="flex flex-row">
        {/* <ul>
          <li>Assessment</li>
          <li>Design and Detailing</li>
          <li>Procurement</li>
          <li>Production</li>
          <li>Delivery and Logistics</li>
          <li>Installation</li>
        </ul> */}

        <div className={styles.list}>
          <div className={styles.row}>
            <h2 data-scroll-sticky data-scroll-target="#con">
              Assessment
            </h2>
            <ul>
              <li>On-Site Assessments</li>
              <li>On-Site Measurement</li>
              <li>Customized Solutions</li>
              <li>Specialists in Residential and Commercial Hospitality</li>
            </ul>
            <img src="assets/7.jpg" />
          </div>
          <div className={styles.row}>
            <h2 data-scroll-sticky data-scroll-target="#con">
              Design and Detailing
            </h2>
            <ul>
              <li>AUTOCAD expertise</li>
              <li>Design Consultation</li>
              <li>Production drawing</li>
            </ul>
            <img src="assets/7.jpg" />
          </div>
          <div className={styles.row}>
            <h2 data-scroll-sticky data-scroll-target="#con">
              Procurement
            </h2>
            <ul>
              <li>Sourcing</li>
              <li>Material Selection</li>
              <li>Sample Submission</li>
            </ul>
            <img src="assets/7.jpg" />
          </div>
          <div className={styles.row}>
            <h2 data-scroll-sticky data-scroll-target="#con">
              Production
            </h2>
            <ul>
              <li>In-House Manufacture</li>
              <li>Lighting and fixtures</li>
              <li>Furniture</li>
              <li>Doors</li>
              <li>Upholstery</li>
              <li>Drapery</li>
              <li>Flooring</li>
              <li>Carpets</li>
              <li>Woodwork</li>
              <li>Metalwork</li>
              <li>Glasswork</li>
              <li>Stonework</li>
            </ul>
            <img src="assets/7.jpg" />
          </div>
          <div className={styles.row}>
            <h2 data-scroll-sticky data-scroll-target="#con">
              Delivery and Logistics
            </h2>
            <ul>
              <li>Packaging and Shipping</li>
              <li>Certifications</li>
              <li>Regulation adherence</li>
              <li>Shipping Schedules</li>
              <li>Consultation</li>
            </ul>
            <img src="assets/7.jpg" />
          </div>
          <div className={styles.row}>
            <h2 data-scroll-sticky data-scroll-target="#con">
              Installation
            </h2>
            <ul>
              <li>Expert In-house Team</li>
              <li>Full Fit-out</li>
              <li>Ceilings, walls, and hard finishes</li>
              <li>Quality Control</li>
            </ul>
            <img src="assets/7.jpg" />
          </div>
        </div>
      </div>

      {/* <div id="con" className={styles.list}>
        <div className="ff">
          <div>Assessment</div>
          <div>
            <ul>
              <li>On-Site Assessments</li>
              <li>On-Site Measurement</li>
              <li>Customized Solutions</li>
              <li>Specialists in Residential and Commercial Hospitality</li>
            </ul>
          </div>
        </div>
        <div className="ff">
          <div className="">Design and Detailing</div>
          <div>
            <ul>
              <li>AUTOCAD expertise</li>
              <li>Design Consultation</li>
              <li>Production drawing</li>
            </ul>
          </div>
        </div>
        <div className="ff">
          <div className="">Procurement</div>
          <div>
            <ul>
              <li>Sourcing</li>
              <li>Material Selection</li>
              <li>Sample Submission</li>
            </ul>
          </div>
        </div>
        <div className="ff">
          <div className="">Production</div>
          <div>
            <ul>
              <li>In-House Manufacture</li>
              <li>Lighting and fixtures</li>
              <li>Furniture</li>
              <li>Doors</li>
              <li>Upholstery</li>
              <li>Drapery</li>
              <li>Flooring</li>
              <li>Carpets</li>
              <li>Woodwork</li>
              <li>Metalwork</li>
              <li>Glasswork</li>
              <li>Stonework</li>
            </ul>
          </div>
        </div>
        <div className="ff">
          <div className="">Delivery and Logistics</div>
          <div>
            <ul>
              <li>Packaging and Shipping</li>
              <li>Certifications</li>
              <li>Regulation adherence</li>
              <li>Shipping Schedules</li>
              <li>Consultation</li>
            </ul>
          </div>
        </div>
        <div className="ff">
          <div className="">Installation</div>
          <div>
            <ul>
              <li>Expert In-house Team</li>
              <li>Full Fit-out</li>
              <li>Ceilings, walls, and hard finishes</li>
              <li>Quality Control</li>
            </ul>
          </div>
        </div>
      </div> */}
    </section>
  )
}
