import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="flex flex-col items-center px-6 md:px-20 py-16 md:py-28 text-center"
    >
      {/* Title */}
      <div className="mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-yellow-400">
          Gustavo Vargas
        </h1>
        <h2 className="text-2xl md:text-3xl text-secondary mt-2">
          Engineering the Shadows
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12">
        {/* Profile Image */}
        <div
          className="mb-8 md:mb-0 flex-shrink-0 transition duration-300 ease-in-out rounded-3xl"
          style={{
            boxShadow: "0 0 0 rgba(0,0,0,0)", // Sem glow inicialmente
          }}
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
            className="w-64 h-64 md:w-80 md:h-80 rounded-3xl object-cover"
          />
        </div>

        {/* About Text */}
        <div className="max-w-lg text-left">
          <h2 className="text-2xl md:text-3xl text-secondary mb-4">
            &lt;about/&gt;
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            {t("hero.about")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
