import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          You can contact me via :
          <li
            className="text-white-100 text-[14px]
              pl-1 tracking-wider"
          >
            my email address :{" "}
            <span className="green-pink-gradient">
              medimegh.mehdi99[@]gmail.com
            </span>
          </li>
          <li
            className="text-white-100 text-[14px]
              pl-1 tracking-wider"
          >
            my linkedin :{" "}
            <span>
              <a href="https://www.linkedin.com/in/mehdi-medimegh/" target="__blank">Medimegh Mehdi</a>
            </span>
          </li>
        </ul>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
