import { motion } from "framer-motion";
import Separator from "../components/Separator";

const technologies = [
  // Core Languages & Runtimes
  { name: "C#", icon: "/tech/CSharp.svg" },
  { name: ".NET", icon: "/tech/dotNetCore.svg" },
  { name: "Python", icon: "/tech/Python.svg" },
  { name: "JavaScript", icon: "/tech/javaScript.svg" },
  { name: "TypeScript", icon: "/tech/typeScript.svg" },
  { name: "SQL", icon: "/tech/sql.svg" },

  // Frontend
  { name: "React", icon: "/tech/react.svg" },
  { name: "HTML", icon: "/tech/html.svg" },
  { name: "CSS", icon: "/tech/css.svg" },
  { name: "Bootstrap", icon: "/tech/Bootstrap.svg" },
  { name: "Tailwind", icon: "/tech/tailwind.svg" },
  { name: "JQuery", icon: "/tech/jQuery.svg" },
  { name: "Vite", icon: "/tech/vite.svg" },

  // Backend & APIs
  { name: "Node.js", icon: "/tech/node.svg" },
  { name: "RabbitMQ", icon: "/tech/rabbitMQ.svg" },

  // Cloud & DevOps
  { name: "Azure", icon: "/tech/azure.svg" },
  { name: "Vercel", icon: "/tech/Vercel.svg" },
  { name: "Git", icon: "/tech/Git.svg" },
  { name: "GitHub", icon: "/tech/gitHub.svg" },

  // Databases
  { name: "PostgreSQL", icon: "/tech/postgresSQL.svg" },
];

// DUPLICA a lista para loop infinito
const loopTechnologies = [...technologies, ...technologies];

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="px-6 md:px-20 text-center relative -mt-16 md:-mt-32"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl text-axk-blue mb-8"
      >
        &lt;Technologies /&gt;
      </motion.h2>

      <div className="overflow-hidden">
        <motion.div
          className="flex gap-24 animate-slide"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20, // velocidade do loop
          }}
        >
          {loopTechnologies.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex flex-col items-center opacity-30 hover:opacity-100 hover:scale-110 hover:drop-shadow-glow transition-all duration-300 cursor-pointer"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-24 h-24 md:w-32 md:h-32"
              />
              <p className="text-gray-400 mt-2 hover:text-white transition-all duration-300">
                {tech.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
      {/* Bat Separator */}
      <Separator />
    </section>
  );
};

export default Technologies;
