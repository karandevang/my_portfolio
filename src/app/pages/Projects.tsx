import { motion } from "motion/react";
import { ExternalLink, Github, Star, Award } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Depindot - Distributed AI Computing Marketplace",
      description: "Building a two-sided AI computing marketplace with Go backend featuring WebSocket task routing, JWT auth, and PostgreSQL. Monetizes idle Android devices for AI batch processing vs. expensive cloud alternatives. Android worker app built with Kotlin + TFLite with Green-Zone scheduling for on-device MiniLM inference. Semi-finalist in DifferenceMaker $50K Challenge (Apr 2026).",
      image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXN0cmlidXRlZCUyMHN5c3RlbXMlMjBuZXR3b3JrJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzM1MDExMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Go", "Android", "Kotlin", "TFLite", "PostgreSQL", "WebSocket", "FastAPI"],
      github: "https://github.com/karandevang",
      demo: null,
      featured: true,
      period: "2026 – Present",
      award: "Semi-finalist, DifferenceMaker $50K Challenge"
    },
    {
      title: "BakerStack - B2B E-Commerce Platform",
      description: "Full-stack B2B e-commerce platform for bakery supplies in India. Built with React + TypeScript frontend and FastAPI backend serving 40+ API endpoints. Implemented JWT-based authentication, SQLAlchemy ORM with PostgreSQL, and a modern component library (Tailwind CSS, Radix UI) with accessibility compliance.",
      image: "https://images.unsplash.com/photo-1620039423210-439be0d2b3cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBjb21tZXJjZSUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MzUwMTExNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Tailwind CSS", "Radix UI"],
      github: "https://github.com/karandevang",
      demo: null,
      featured: true,
      period: "2026 – Present",
      award: null
    },
    {
      title: "Hate Speech Detection - BERT + Syntactic Features",
      description: "Designed a hybrid NLP model fusing BERT semantic embeddings with syntactic features (POS tags, dependency parsing via spaCy) for hate speech classification on highly imbalanced datasets (~6% positive class). Achieved 30% F1-score improvement over BERT-only baseline via weighted loss functions and precision-recall threshold optimization (0.828), reaching 79% balanced accuracy and 0.48 F1-score. Built attention visualization and feature importance analysis pipeline to support human-in-the-loop content moderation workflows.",
      image: "https://images.unsplash.com/photo-1765046255479-669cf07a0230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGF0YSUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzczMzgyNjg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Python", "BERT", "spaCy", "HuggingFace", "PyTorch", "NLP"],
      github: "https://github.com/karanhb",
      demo: null,
      featured: false,
      period: "2025",
      award: null
    },
    {
      title: "Causal Inference - Antidepressants & COVID-19",
      description: "Applied backdoor adjustment and propensity score matching (PSM) to estimate Average Treatment Effect (ATE) of antidepressants on COVID-19 outcomes using large-scale observational health data. Generated Word2Vec embeddings for SNOMED condition codes to capture semantic clinical relationships, improving confounding variable adjustment accuracy by 15%. Conducted sensitivity analysis and statistical validation to ensure robustness of causal estimates.",
      image: "https://images.unsplash.com/photo-1717501219263-9aa2d6a768d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBuZXVyYWwlMjBuZXR3b3JrfGVufDF8fHx8MTc3MzQwMjU3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Python", "Word2Vec", "PSM", "Scikit-learn", "Statistics", "Healthcare AI"],
      github: "https://github.com/karanhb",
      demo: null,
      featured: false,
      period: "2024",
      award: null
    },
    {
      title: "Scene Understanding Using IoT - Published",
      description: "Developed end-to-end CV pipeline using CNN models (PyTorch) to classify environmental conditions (rain, sunlight, wind) from video input with 85% accuracy. Published in IJIRCCE (IP: 8.165). Engineered ML-to-IoT integration translating CNN predictions into real-time Arduino control signals via pyFirmata, demonstrating practical deployment of computer vision in physical systems. Hardware includes Arduino UNO, relays, heaters, water sprinklers, and air coolers/fans.",
      image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MzQyMzMzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["PyTorch", "CNN", "pyFirmata", "Arduino", "Computer Vision", "IoT"],
      github: "https://github.com/karanhb",
      demo: null,
      featured: false,
      period: "2022",
      award: "Published in IJIRCCE (IP: 8.165)"
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl mb-6">
              My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A showcase of my work spanning distributed systems, full-stack applications,
              machine learning, NLP, and IoT innovations.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl mb-8 flex items-center gap-3"
            >
              <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              Featured Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60" />
                    {project.award && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-500/20 border border-yellow-500/40 backdrop-blur rounded-full flex items-center gap-2">
                        <Award className="w-4 h-4 text-yellow-400" />
                        <span className="text-xs text-yellow-400">Award Winner</span>
                      </div>
                    )}
                    {project.period && (
                      <div className="absolute bottom-4 left-4 px-3 py-1 bg-blue-500/20 border border-blue-500/40 backdrop-blur rounded-full">
                        <span className="text-xs text-blue-400">{project.period}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.award && (
                      <div className="mb-3 text-sm text-yellow-400 flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        {project.award}
                      </div>
                    )}
                    <p className="text-slate-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl mb-8"
            >
              Research & ML Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60" />
                    {project.award && (
                      <div className="absolute top-4 right-4 px-2 py-1 bg-green-500/20 border border-green-500/40 backdrop-blur rounded text-xs text-green-400">
                        Published
                      </div>
                    )}
                    {project.period && (
                      <div className="absolute bottom-4 left-4 px-3 py-1 bg-purple-500/20 border border-purple-500/40 backdrop-blur rounded-full">
                        <span className="text-xs text-purple-400">{project.period}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl mb-2 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.award && (
                      <div className="mb-2 text-xs text-green-400">{project.award}</div>
                    )}
                    <p className="text-slate-400 text-sm mb-4 line-clamp-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs text-purple-400"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-1 text-xs text-slate-500">
                          +{project.tags.length - 4} more
                        </span>
                      )}
                    </div>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors text-sm w-full justify-center"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl mb-6">Interested in Collaborating?</h2>
          <p className="text-xl text-slate-400 mb-8">
            I'm always open to discussing new projects, research opportunities, or full-time roles.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all text-lg"
          >
            Let's Connect
          </a>
        </motion.div>
      </section>
    </div>
  );
}
