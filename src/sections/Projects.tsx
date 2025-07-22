import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2, Clock } from "lucide-react";

// Tipos
type ProjectStatus = "Concluído" | "Em andamento" | "Aguardando início";

interface Project {
  title: string;
  description: string;
  status: ProjectStatus;
  details: string;
  startDate: string;
  endDate: string;
  technologies: string[];
}

// Lista de projetos
const projects: Project[] = [
  {
    title: "AXK Website",
    description:
      "Site oficial da AXK com marketplace, área de membros e painel administrativo.",
    status: "Concluído",
    details:
      "Desenvolvido com React, .NET 9 e PostgreSQL. Lançado em Junho de 2025.",
    startDate: "2025-01-15",
    endDate: "2025-06-01",
    technologies: ["React", ".NET 9", "PostgreSQL", "Tailwind"],
  },
  {
    title: "Mental Health AI",
    description:
      "Plataforma de IA para análise de saúde mental a partir de transcrições e imagens.",
    status: "Em andamento",
    details: "Utilizando Vertex AI, .NET Core e Power BI para visualização.",
    startDate: "2025-07-01",
    endDate: "",
    technologies: ["Vertex AI", ".NET Core", "Power BI", "SQL Server"],
  },
  {
    title: "E-Sports App",
    description: "Aplicativo mobile para gerenciar torneios e equipes da AXK.",
    status: "Aguardando início",
    details: "Planejado para início no Q4 2025 com React Native e Firebase.",
    startDate: "",
    endDate: "",
    technologies: ["React Native", "Firebase", "Tailwind"],
  },
  {
    title: "E-Sports App",
    description: "Aplicativo mobile para gerenciar torneios e equipes da AXK.",
    status: "Aguardando início",
    details: "Planejado para início no Q4 2025 com React Native e Firebase.",
    startDate: "",
    endDate: "",
    technologies: ["React Native", "Firebase", "Tailwind"],
  },
];

// Configuração de status
const statusConfig: Record<
  ProjectStatus,
  { icon: React.ReactNode; color: string }
> = {
  Concluído: {
    icon: <CheckCircle className="text-green-400" />,
    color: "text-green-400",
  },
  "Em andamento": {
    icon: <Loader2 className="text-axk-blue animate-spin" />,
    color: "text-axk-blue",
  },
  "Aguardando início": {
    icon: <Clock className="text-yellow-400" />,
    color: "text-yellow-400",
  },
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="px-6 md:px-16 py-12 md:py-24 text-center -mt-16 md:-mt-32"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl text-axk-blue mb-16"
      >
        &lt;Projects /&gt;
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-left shadow-lg hover:shadow-axk transition duration-300 cursor-pointer"
            onClick={() => setActiveProject(project)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-gray-100">
              {project.title}
            </h3>
            <p className="text-gray-300 mt-2 line-clamp-2">
              {project.description}
            </p>

            {/* Status */}
            <div
              className={`flex items-center gap-2 mt-4 ${
                statusConfig[project.status].color
              }`}
            >
              {statusConfig[project.status].icon}
              <span className="font-medium">{project.status}</span>
            </div>

            {/* Button */}
            <button
              className="mt-4 px-4 py-2 bg-axk-blue text-secondary rounded-lg border border-white/30 hover:bg-axk-blue/80 hover:border-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setActiveProject(project);
              }}
            >
              View details
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="bg-gray-900 rounded-xl p-6 md:p-10 max-w-3xl w-full text-left relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Conteúdo do modal */}
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                {activeProject.title}
              </h3>
              <p className="text-gray-300 mb-4">{activeProject.details}</p>
              <p className="text-gray-400 text-sm">
                Início: {activeProject.startDate || "N/A"} <br />
                Término: {activeProject.endDate || "N/A"}
              </p>
              <p className="text-gray-400 text-sm mt-2">Tecnologias:</p>
              <ul className="list-disc list-inside text-gray-300 mb-20">
                {activeProject.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              {/* Botão Fechar */}
              <button
                className="absolute right-6 bottom-6 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors"
                onClick={() => setActiveProject(null)}
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
