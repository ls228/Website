import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react"
import image1 from '../images/projects/1.png';
import image2 from '../images/projects/2.png';
import image3 from '../images/projects/3.png';
import image4 from '../images/projects/4.png';
import image5 from '../images/projects/5.png';
import image6 from '../images/projects/6.png';
import image7 from '../images/projects/7.png';

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance])
}

const images = [image1, image2, image3, image4, image5, image6, image7];
const projectNames = [
    "Boorloo Bridge",
    "Illumina",
    "Queen's Wharf",
    "Paramatta",
    "Wintjiri Wiru",
    "Silhoutettes",
    "Intersection"
  ];

function Image({ id }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const y = useParallax(scrollYProgress, 300)

    const imageSrc = images[id - 1];
    const projectName = projectNames[id - 1];

    return (
        <section className="img-container">
            <div ref={ref}>
                <img
                    src={imageSrc}
                    alt="Project"
                />
            </div>
            <motion.h2
                // Hide until scroll progress is measured
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible" }}
                style={{ y }}
            >{projectName}</motion.h2>
        </section>
    )
}

export default function Parallax() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <div id="example" className="scroll-container">
            {[1, 2, 3, 4, 5, 6, 7].map((image) => (
                <Image key={image} id={image} />
            ))}
            <motion.div className="progress" style={{ scaleX }} />
            <StyleSheet />
        </div>
    )
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
    return (
        <style>{`
         html, body {
            scroll-snap-type: y mandatory;
        }

        scroll-container{
        scroll-snap-type: y mandatory;
        scroll-behavior: smooth;
        }


        .img-container {
            height: 100vh;
            scroll-snap-align: start;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .img-container > div {
            width: auto;
            height: 400px;
            margin: 20px;
            overflow: hidden;
        }

        .img-container img {
            width: auto;
            height: 400px;
        }

        @media (max-width: 500px) {
            .img-container > div {
                width: auto;
                height: 200px;
            }

            .img-container img {
                width: auto;
                height: 200px;
            }
        }

        .img-container h2 {
            color: white,
            margin: 0;
            font-family: "Helvetica";
            font-size: 50px;
            font-weight: 700;
            line-height: 1.2;
            position: absolute;
            display: inline-block;
            top: calc(50% - 25px);
            left: calc(50% + 120px);
        }

        .progress {
            position: fixed;
            left: 0;
            right: 0;
            height: 2px;
            background: white;
            bottom: 50px;
            transform: scaleX(0);
        }
    `}</style>
    )
}
