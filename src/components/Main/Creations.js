import React from "react"
import { creationsData } from "../../data/data"
import { useGlobalContext } from "../../utils/context"
const Creations = () => {
  const { viewWidth } = useGlobalContext()

  return (
    <section className="creations">
      <div className="creations-inner-container">
        <h2>Our Creations</h2>
        <button className="seeAll-btn">See All</button>
        <div className="creations-content-container">
          {creationsData.map((creation, index) => {
            return (
              <div key={index} className="creation-box">
                <img
                  className="creation-img"
                  src={
                    viewWidth > 768 ? creation.imgDesktop : creation.imgMobile
                  }
                  alt={creation.title}
                />
                <h3>{creation.title}</h3>
              </div>
            )
          })}
        </div>
        <button className="seeAll-btn">See All</button>
      </div>
    </section>
  )
}

export default Creations
