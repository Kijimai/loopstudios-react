import React from "react"
import { creationsData } from "../../data/data"
import { useGlobalContext } from "../../utils/context"
const Creations = () => {
  const { viewWidth } = useGlobalContext()

  return (
    <section className="creations">
      <div className="creations-header-container">
        <h2>Our Creations</h2>
        <button className="seeAll-btn btn1">See All</button>
      </div>
      <div className="creations-content-container">
        {creationsData.map((creation, index) => {
          return (
            <div key={index} className="creation-box">
              <img
                className="creation-img"
                src={viewWidth > 768 ? creation.imgDesktop : creation.imgMobile}
                alt={creation.title}
              />
              <h3>{creation.title}</h3>
            </div>
          )
        })}
        <button className="seeAll-btn btn2">See All</button>
      </div>
    </section>
  )
}

export default Creations
