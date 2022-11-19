import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseURL } from '../../Service/Config'

const TestimonialSection = () => {
  const [cardData, setCardData] = useState([])
  useEffect(() => {
    axios.get(`${baseURL}/all`).then(
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
                              <img src={item?.Photo?.file} alt="Author" />
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
              {/* <div className="row testimonial-active">
                <div class="col-lg-4">
                  <div class="single-testimonial mt-30 mb-30 text-center">
                    <div class="testimonial-image">
                      <img src="assets/images/author-3.jpg" alt="Author" />
                    </div>
                    <div class="testimonial-content">
                      <p class="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                      <h6 class="author-name">Isabela Moreira</h6>
                      <span class="sub-title">CEO, GrayGrids</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="single-testimonial mt-30 mb-30 text-center">
                    <div class="testimonial-image">
                      <img src="assets/images/author-1.jpg" alt="Author" />
                    </div>
                    <div class="testimonial-content">
                      <p class="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                      <h6 class="author-name">Fiona</h6>
                      <span class="sub-title">Lead Designer, UIdeck</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="single-testimonial mt-30 mb-30 text-center">
                    <div class="testimonial-image">
                      <img src="assets/images/author-2.jpg" alt="Author" />
                    </div>
                    <div class="testimonial-content">
                      <p class="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                      <h6 class="author-name">Elon Musk</h6>
                      <span class="sub-title">CEO, SpaceX</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="single-testimonial mt-30 mb-30 text-center">
                    <div class="testimonial-image">
                      <img src="assets/images/author-4.jpg" alt="Author" />
                    </div>
                    <div class="testimonial-content">
                      <p class="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                      <h6 class="author-name">Fajar Siddiq</h6>
                      <span class="sub-title">CEO, MakerFlix</span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default TestimonialSection
