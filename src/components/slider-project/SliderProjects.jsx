import React from 'react';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const SliderProjects = () => {

    const slider1 = [
        {
            color: "#e3e5e7",
            src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ab53ac198408527.664189b0a37f2.png"
        },
        {
            color: "#d6d7dc",
            src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ab53ac198408527.664189b0a37f2.png"
        },
        {
            color: "#e3e3e3",
            src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ab53ac198408527.664189b0a37f2.png"
        },
        {
            color: "#21242b",
            src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ab53ac198408527.664189b0a37f2.png"
        },
        {
            color: "#21242b",
            src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ab53ac198408527.664189b0a37f2.png"
        },
        {
            color: "#21242b",
            src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ab53ac198408527.664189b0a37f2.png"
        }
    ]

    const slider2 = [
        {
            color: "#d4e3ec",
            src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ab53ac198408527.664189b0a37f2.png"
        },
        {
            color: "#e5e0e1",
            src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ab53ac198408527.664189b0a37f2.png"
        },
        {
            color: "#d7d4cf",
            src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ab53ac198408527.664189b0a37f2.png"
        },
        {
            color: "#e1dad6",
            src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ab53ac198408527.664189b0a37f2.png"
        },
        {
            color: "#21242b",
            src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ab53ac198408527.664189b0a37f2.png"
        },
        {
            color: "#21242b",
            src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ab53ac198408527.664189b0a37f2.png"
        },
        {
            color: "#21242b",
            src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ab53ac198408527.664189b0a37f2.png"
        },
        {
            color: "#21242b",
            src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ab53ac198408527.664189b0a37f2.png"
        }
    ]

    const containerMain = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerMain,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

  return (
    <div style={{height: '100%', width: '100%', }}>
 <div ref={containerMain} className={"slidingImages"}>
            <motion.div style={{x: x1}} className={"slider"}>
                    {
                        slider1.map( (project, index) => {
                            return <div key={index} className={project} style={{backgroundColor: project.color}} >
                                <div className={"imageContainer"}>
                                    <img 
                                    fill={true}
                                    alt={"image"}
                                    src={project?.src}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{x: x2}} className={"slider"}>
                    {
                        slider2.map( (project, index) => {
                            return <div key={index} className={"project-new"} style={{backgroundColor: project.color}} >
                                <div key={index} className={"imageContainer"}>
                                    <img 
                                    fill={true}
                                    alt={"image"}
                                    src={project?.src}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{height}} className={"circleContainer"}>
                    <div className={"circle"}></div>
                </motion.div>
        </div>

    </div>
  )
}

export default SliderProjects