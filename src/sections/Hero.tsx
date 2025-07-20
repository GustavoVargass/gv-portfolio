import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="flex flex-col items-center px-6 md:px-16 py-24 md:py-36 text-center relative"
    >
      {/* Title */}
      <div className="mb-24">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold text-yellow-400"
        >
          Gustavo Vargas
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-2xl md:text-3xl text-axk-blue mt-2"
        >
          Engineering the Shadows
        </motion.h2>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left md:space-x-24">
        {/* Profile Image */}
        <div
          className="mb-8 md:mb-0 flex-shrink-0 transition duration-300 ease-in-out rounded-2xl"
          style={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow =
              "0 0 20px #0DF5E3, 0 0 40px #0DF5E3")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)")
          }
        >
          <img
            src="/profile.png"
            alt="Gustavo Vargas"
            className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover"
          />
        </div>

        {/* About Text */}
        <div className="flex flex-col justify-start max-w-xl md:max-w-2xl ">
          <h3 className="text-3xl text-axk-blue mb-2 md:mt-0">
            &lt;About /&gt;
          </h3>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed whitespace-pre-line text-justify md:text-left">
            {t("hero.about")}
          </p>
        </div>
      </div>

      {/* Bat Separator */}

      <div className="w-full mt-20 flex justify-center">
        <img
          src="/separators/bat.svg"
          alt="Bat Separator"
          className="w-20 h-20 transition-colors duration-500"
          style={{
            filter: "drop-shadow(0 0 10px #FFD700)",
            // filter: darkMode
            //   ? "drop-shadow(0 0 10px #FFD700)" // glow dourado no dark
            //   : "drop-shadow(0 0 10px #1A1A1A)", // glow grafite no light
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
