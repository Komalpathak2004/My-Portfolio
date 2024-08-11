import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import CustomAlert from "./CustomAlert";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);
    formData.append("access_key", "cbdcb0a9-12dc-42bc-af70-86a8c3974c18"); // Your Web3Forms access key

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setAlert({
          message: "Thank you. I will get back to you as soon as possible.",
          type: "success",
        });
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setAlert({
          message: "Ahh, something went wrong. Please try again.",
          type: "error",
        });
      }
    } catch (error) {
      console.error(error);
      setAlert({
        message: "Ahh, something went wrong. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col-reverse xl:flex-row gap-5 overflow-hidden xl:mt-12">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1 bg-black-100 p-6 md:p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 md:mt-12 flex flex-col gap-6 md:gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3 md:mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-3 px-4 md:py-4 md:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3 md:mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-3 px-4 md:py-4 md:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3 md:mb-4">Your Message</span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-3 px-4 md:py-4 md:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-2 px-6 md:py-3 md:px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-1 h-[250px] md:h-[350px] lg:h-[450px]"
      >
        <EarthCanvas />
      </motion.div>

      {alert.message && (
        <CustomAlert
          message={alert.message}
          onClose={() => setAlert({ ...alert, message: "" })}
        />
      )}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
