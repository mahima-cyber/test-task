import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseURL } from '../../Service/Config'

const TestimonialSection = () => {
  const [cardData, setCardData] = useState([])
  useEffect(() => {
    axios.get(`${baseURL}/get`).then(
      (response) => {
        var result = response.data;
        setCardData(result)
      },
      (error) => {
        console.log(error);
      }
    )
  }, [])
  console.log(12, cardData)
  return (
    <div>
      <section id="testimonial" className="testimonial-area" >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center pb-10">
                <h4 className="title">Testimonial</h4>
                <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col-lg-12">
              <div className="row testimonial-active">
                {
                  cardData?.map((item, index) => {
                    return (
                      <>
                        <div className="col-lg-4" key={index}>
                          <div className="single-testimonial mt-30 mb-30 text-center">
                            <div className="testimonial-image">
                               <img src={item.Photo} alt="Author" />
                            </div>
                            <div className="testimonial-content">
                              <p className="text">{item?.Description}</p>
                              <h6 className="author-name">{item?.Name}</h6>
                              <span className="sub-title">{item?.Post}</span>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })
                }
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default TestimonialSection
