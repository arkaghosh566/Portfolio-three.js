import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { resume, profilepic } from "../assets";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const fadeUp = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div ref={sectionRef} className="pt-[60px] md:pt-0 overflow-hidden">
      <motion.div initial="hidden" animate={mainControls} variants={fadeUp}>
        <p className={styles.sectionSubText}>Introduction</p>
      </motion.div>

      <motion.div initial="hidden" animate={mainControls} variants={fadeUp}>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-10 flex flex-col md:flex-row items-center md:items-start gap-10">
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className="w-full md:w-1/3 flex flex-col items-center"
        >
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-[0_0_22.5px_7.5px_rgba(128,0,1028,1.0)]">
            <img
              src={profilepic}
              alt="Arka Ghosh"
              className="w-full h-full object-cover"
              style={{ objectFit: "cover", objectPosition: "50% 50%" }}
            />
          </div>

          <div className="mt-10 flex flex-wrap gap-5 justify-center">
            <motion.a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-md shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform transition duration-500 ease-in-out hover:scale-105 active:translate-y-1 active:shadow-none no-select inline-block"
              style={{
                boxShadow: "0px 5px 0px 0px rgba(0,0,0,0.6)",
                transition: "all ease 0.1s",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-semibold">Resume</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/arka-ghosh-aaab5a270/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-md shadow-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform transition duration-500 ease-in-out hover:scale-105 active:translate-y-1 active:shadow-none no-select inline-block"
              style={{
                boxShadow: "0px 5px 0px 0px rgba(0,0,0,0.6)",
                transition: "all ease 0.1s",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-semibold">LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://github.com/arkaghosh566"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-white bg-gradient-to-r from-gray-600 to-gray-800 rounded-md shadow-md hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transform transition duration-500 ease-in-out hover:scale-105 active:translate-y-1 active:shadow-none no-select inline-block"
              style={{
                boxShadow: "0px 5px 0px 0px rgba(0,0,0,0.6)",
                transition: "all ease 0.1s",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-semibold">GitHub</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          className="w-full md:w-2/3"
        >
          <motion.ul
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl space-y-6 list-none"
          >
            <motion.li
              className="flex items-start"
              variants={fadeIn("up", "spring", 0.1, 0.75)}
            >
              <span className="mr-4 text-2xl flex-shrink-0">👨‍💻</span>
              <span>
                I&apos;m a skilled{" "}
                <strong className="text-white">Machine Learning Engineer</strong>{" "}
                with 2.5+ years of experience developing end-to-end solutions
                using <strong className="text-white">Python</strong>,{" "}
                <strong className="text-white">TensorFlow</strong>, and{" "}
                <strong className="text-white">PyTorch</strong>. My expertise is
                in <strong className="text-white">Computer Vision</strong>,{" "}
                <strong className="text-white">Deep Learning</strong>, and{" "}
                <strong className="text-white">Generative AI</strong>.
              </span>
            </motion.li>

            <motion.li
              className="flex items-start"
              variants={fadeIn("up", "spring", 0.2, 0.75)}
            >
              <span className="mr-4 text-2xl flex-shrink-0">🎓</span>
              <span>
                I hold a{" "}
                <strong className="text-white">
                  B.Tech in Computer Science
                </strong>{" "}
                with a specialization in{" "}
                <strong className="text-white">AI &amp; Machine Learning</strong>{" "}
                from the Future Institute of Technology (MAKAUT).
              </span>
            </motion.li>

            <motion.li
              className="flex items-start"
              variants={fadeIn("up", "spring", 0.3, 0.75)}
            >
              <span className="mr-4 text-2xl flex-shrink-0">🛠️</span>
              <span>
                At{" "}
                <strong className="text-white">Procentris India</strong>, I
                build GenAI-powered systems — document translation pipelines,
                invoice and claims extraction, and fraud-detection tooling.
                Previously at <strong className="text-white">Capsitech</strong>,
                I developed{" "}
                <strong className="text-white">real-time person counters</strong>
                , <strong className="text-white">hair follicle detectors</strong>
                , and robust{" "}
                <strong className="text-white">multi-object tracking</strong>{" "}
                pipelines using YOLOv8, ResNet50, and SAM.
              </span>
            </motion.li>

            <motion.li
              className="flex items-start"
              variants={fadeIn("up", "spring", 0.4, 0.75)}
            >
              <span className="mr-4 text-2xl flex-shrink-0">🚀</span>
              <span>
                I&apos;m passionate about building{" "}
                <strong className="text-white">
                  scalable, impactful systems
                </strong>{" "}
                that solve real-world problems, and I thrive on pushing the
                boundaries of what AI can do.
              </span>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");