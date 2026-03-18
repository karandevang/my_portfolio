import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { Link } from "react-router";

export function Home() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
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
            className="absolute top-1/4 -right-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-48 -left-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6"
              >
                <span className="text-blue-400">👋 Welcome to my portfolio</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl mb-6"
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Karan Hassan Balarama
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-slate-300 mb-8"
              >
                Full-Stack Software Engineer & ML Enthusiast
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-slate-400 mb-10"
              >
                With 3 years of experience building scalable applications using C#/.NET, Java, and modern web technologies.
                Currently pursuing M.S. in Computer Science at UMass Lowell, exploring the intersection of AI/ML and distributed systems.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all group"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  Get In Touch
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex gap-4 mt-10"
              >
                <a
                  href="https://github.com/karandevang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-blue-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/karanhb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:karanhbkeerthi@gmail.com"
                  className="w-12 h-12 flex items-center justify-center bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1597239451147-f163967b8581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwY29kaW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MzUwMDUzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Workspace"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              </div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-slate-800/90 backdrop-blur-lg border border-slate-700 rounded-xl p-4 shadow-xl"
              >
                <div className="text-3xl mb-1 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  12+
                </div>
                <div className="text-sm text-slate-400">Projects Completed</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-6 -right-6 bg-slate-800/90 backdrop-blur-lg border border-slate-700 rounded-xl p-4 shadow-xl"
              >
                <div className="text-3xl mb-1 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  3+
                </div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4">
              Tech Stack
            </h2>
            <p className="text-slate-400 text-lg">
              Technologies I work with
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {[
              "Java", "Python", "C#", "TypeScript",
              "React", "Angular", ".NET Core", "Spring Boot",
              "PostgreSQL", "MongoDB", "AWS", "Azure",
              "Docker", "Git", "PyTorch", "TensorFlow",
              "FastAPI", "Node.js", "Kubernetes", "BERT",
              "Go", "Kotlin", "TFLite", "Salesforce"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-colors"
              >
                <div className="text-lg">{skill}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}