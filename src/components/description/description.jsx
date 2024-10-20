
import React, { useRef } from 'react'
import '../../assets/css/work.css'
import { useInView, motion } from 'framer-motion';
import { Col, Row } from 'react-bootstrap';
import { slideUp, opacity } from './anime';

const Description = () => {

    const phrase = "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
    const description = useRef(null);
    const isInView = useInView(description)



  return (
    <div className='description section-gap' ref={description}>
    <div className='container'>
           <Row>
            <Col lg={{span: 6, offset:1}}>
            <div className='body'>
            <p>
              {
                  phrase.split(" ").map( (word, index) => {
                      return <span key={index} className={"mask"}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                  })
              }
              </p>
              </div>
            </Col>
            <Col lg={{span: 4, offset:1}}>
            <div className='small-top'>
            <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</motion.p>

            <div  data-scroll data-scroll-speed={0.1}>
                  <div >
                      <button className={"rounded-btn"}>About me</button>
                  </div>
              </div>
            </div>
           
            </Col>
           </Row>
    </div>

  </div>
  )
}

export default Description