import { motion } from "framer-motion";
import Separator from "../components/Separator";

const technologies = [
  // Core Languages & Runtimes
  { name: "C#", icon: "/tech/c-sharp.png" },
  { name: ".NET", icon: "/tech/dotNetCore.png" },
  { name: "Python", icon: "/tech/python.png" },
  { name: "JavaScript", icon: "/tech/javaScript.png" },
  { name: "TypeScript", icon: "/tech/typescript.png" },

  // Frontend
  { name: "React", icon: "/tech/react.png" },
  { name: "HTML", icon: "/tech/html.png" },
  { name: "CSS", icon: "/tech/css.png" },
  { name: "Bootstrap", icon: "/tech/bootstrap.png" },
  { name: "Tailwind", icon: "/tech/tailwind.png" },
  { name: "JQuery", icon: "/tech/jQuery.png" },
  { name: "Vite", icon: "/tech/vite.png" },

  // Backend & APIs
  { name: "Node.js", icon: "/tech/node.png" },

  // Cloud & DevOps
  { name: "Azure", icon: "/tech/azure.png" },
  { name: "Git", icon: "/tech/git.png" },
  { name: "GitHub", icon: "/tech/github.png" },

  // Databases
  { name: "SQL", icon: "/tech/sql.png" },
  { name: "PostgreSQL", icon: "/tech/postgresSQL.png" },
];

// DUPLICA a lista para loop infinito
const loopTechnologies = [...technologies];

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
        <div className="flex gap-12 min-w-[200%] animate-infinite-scroll">
          {loopTechnologies.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex flex-col items-center gap-2 w-32 md:w-40"
            >
              {/* Quadrado fixo para o ícone */}
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white/5 rounded-lg flex items-center justify-center p-2 opacity-30 hover:opacity-100 hover:scale-105 hover:drop-shadow-glow transition-all duration-300 cursor-pointer flex-shrink-0">
                <motion.img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-lg"
                  style={{ aspectRatio: "1 / 1" }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>

              {/* Texto fora do quadrado */}
              <p className="text-gray-400 hover:text-white transition-all duration-300 text-center truncate w-full">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bat Separator */}
      <Separator />
    </section>
  );
};

export default Technologies;
