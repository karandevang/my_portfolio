import { motion } from "motion/react";
import { Award, BookOpen, Code2, Rocket, Coffee, Lightbulb, FileText, Trophy } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Expert",
      description: "Proficient in building scalable applications with C#/.NET, Java, React, and Angular."
    },
    {
      icon: Rocket,
      title: "ML/AI Enthusiast",
      description: "Passionate about NLP, computer vision, and deploying AI models in production systems."
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Love tackling complex challenges with innovative solutions and clean architecture."
    },
    {
      icon: Coffee,
      title: "Team Player",
      description: "Experienced in mentoring developers and collaborating across technical teams."
    }
  ];

  const experience = [
    {
      role: "Enterprise Applications Intern",
      company: "UMass Lowell",
      location: "Lowell, MA",
      period: "Oct 2025 – Present",
      description: "Integrated and maintained DocuSign e-signature workflows within C# and .NET backend systems, reducing manual document turnaround time across 3+ administrative departments. Administered Salesforce CRM using SOQL and Developer Console to generate custom reports and metadata-driven dashboards."
    },
    {
      role: "Full-Stack Developer",
      company: "Zero to 1",
      location: "Remote",
      period: "Jul – Aug 2025",
      description: "Architected and delivered full-stack features using Java Spring Boot, Angular, and PostgreSQL with a metadata-driven configuration layer. Built an asynchronous event processing pipeline using GCP Pub/Sub and integrated SendGrid API to automate transactional email workflows."
    },
    {
      role: "Graduate Teaching Assistant - Operating Systems",
      company: "UMass Lowell",
      location: "Lowell, MA",
      period: "Jan 2025 – May 2025",
      description: "Supported 60+ students across weekly office hours and lab sessions covering process scheduling, memory management, synchronization, and concurrency in C/GO/Linux environments."
    },
    {
      role: "Software Engineer",
      company: "SpurTree Technologies Ltd",
      location: "Bangalore, India",
      period: "Aug 2022 – Jul 2024",
      description: "Designed and shipped scalable C#/.NET Core MVC applications and RESTful APIs consumed by multiple client-facing products. Architected a distributed push notification system using microservices, Azure Service Bus, and Azure DevOps CI/CD pipelines, delivering real-time alerts to 500K+ users with 99.9% uptime SLA. Mentored 3 junior developers through structured code reviews and pair programming."
    },
    {
      role: "MERN Stack Developer Intern",
      company: "Mindtree (L&T)",
      location: "Bangalore, India",
      period: "Mar – Jun 2022",
      description: "Developed web applications using MongoDB, Express.js, React, and Node.js with optimized query patterns, indexing, and efficient front-end state management."
    }
  ];

  const certifications = [
    {
      title: "Salesforce Certified Agentforce Specialist",
      issuer: "Salesforce",
      period: "2025",
      description: "Certified in Salesforce Agentforce, Einstein Data Libraries, and Prompt Engineering."
    },
    {
      title: "NPTEL Certification on Cloud Computing",
      issuer: "NPTEL",
      period: "April 2021",
      description: "Completed certification covering core topics such as cloud infrastructure, virtualization, service models (IaaS, PaaS, SaaS), and cloud security."
    },
    {
      title: "NPTEL Certification on Programming in C",
      issuer: "NPTEL",
      period: "Oct 2020",
      description: "Demonstrated the ability to solve real-world computational problems through multiple coding assignments and assessments, improving algorithmic thinking and debugging skills in C."
    }
  ];

  const education = [
    {
      degree: "M.S. Computer Science",
      school: "University of Massachusetts Lowell",
      location: "Lowell, MA",
      period: "Expected May 2026",
      description: "Coursework: Algorithms, Operating Systems, AI, NLP, Optimization, Social Computing, UI/UX"
    },
    {
      degree: "B.S. Computer Science",
      school: "Malnad College of Engineering",
      location: "Hassan, India",
      period: "Aug 2022",
      description: "Coursework: OOP, AI, Machine Learning, Relational Databases"
    }
  ];

  const publication = {
    title: "Scene Understanding Using IOT",
    journal: "International Journal of Innovative Research in Computer and Communication Engineering",
    impactFactor: "IP: 8.165",
    period: "Feb 2022 – Aug 2022",
    location: "Hassan, India",
    link: "https://lnkd.in/g6YJTBJv",
    description: "The project focuses on replicating weather conditions shown in a video in a real-life environment using Image Processing, CNN algorithms, PyTorch, and Arduino hardware to simulate temperature, precipitation, and wind conditions."
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 45, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A passionate software engineer with ~3 years of industry experience,
              dedicated to creating innovative solutions at the intersection of full-stack development and AI/ML.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
              >
                <item.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <Award className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl">Professional Experience</h2>
          </motion.div>

          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.div
                key={item.company + item.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-blue-500 rounded-full" />
                <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-2xl text-blue-400 mb-1">{item.role}</h3>
                      <div className="text-lg text-slate-300">{item.company}</div>
                      <div className="text-sm text-slate-500">{item.location}</div>
                    </div>
                    <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <BookOpen className="w-8 h-8 text-purple-400" />
            <h2 className="text-4xl">Education</h2>
          </motion.div>

          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={item.school}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-2xl text-purple-400 mb-1">{item.degree}</h3>
                    <div className="text-lg text-slate-300">{item.school}</div>
                    <div className="text-sm text-slate-500">{item.location}</div>
                  </div>
                  <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400">
                    {item.period}
                  </span>
                </div>
                <p className="text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <Trophy className="w-8 h-8 text-yellow-400" />
            <h2 className="text-4xl">Certifications</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-yellow-500/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-yellow-400 mb-1">{cert.title}</h3>
                    <div className="text-sm text-slate-400 mb-2">{cert.issuer} • {cert.period}</div>
                    <p className="text-slate-400 text-sm">{cert.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publication Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <FileText className="w-8 h-8 text-green-400" />
            <h2 className="text-4xl">Published Research</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-8 hover:border-green-500/50 transition-colors"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl text-green-400 mb-2">{publication.title}</h3>
                <div className="text-lg text-slate-300 mb-1">{publication.journal}</div>
                <div className="text-sm text-slate-400">{publication.location} • {publication.period}</div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400">
                  {publication.impactFactor}
                </span>
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  View Paper →
                </a>
              </div>
            </div>
            <p className="text-slate-400">{publication.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl mb-6">Let's Work Together</h2>
          <p className="text-xl text-slate-400 mb-8">
            I'm seeking full-time SWE roles and always interested in hearing about new projects and opportunities.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all text-lg"
          >
            Get In Touch
          </a>
        </motion.div>
      </section>
    </div>
  );
}
