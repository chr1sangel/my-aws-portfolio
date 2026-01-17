import { Award, Code, Brain } from "lucide-react";

const technicalSkills = [
  "Ubiquiti",
  "Technical Documentation",
  "Analytical Troubleshooting",
  "System Administration",
  "Network Infrastructure",
  "Microsoft 365",
  "AWS Cloud",
  "Docker",
  "Linux",
  "Windows Server",
];

const softSkills = [
  "Problem-solving",
  "Critical Thinking",
  "Quick Learner",
  "Teamwork",
  "Communication",
  "Adaptability",
];

interface Certification {
  title: string;
  issuer: string;
  year: string;
}

const certifications: Certification[] = [
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    year: "2026",
  },
  {
    title: "CompTIA Network+ Exam Preparation",
    issuer: "LEORON Institute",
    year: "2025",
  },
  {
    title: "Pre Security & Intro to Cyber Security",
    issuer: "TryHackMe",
    year: "2023",
  },
];

const education = [
  {
    degree: "Software Engineering",
    institution: "UTMS Skopje",
    period: "2019 - 2024",
  },
  {
    degree: "Interior Design",
    institution: "GUC Skopje",
    period: "2015 - 2019",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Code className="w-8 h-8 text-primary" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Skills & Certifications
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-primary pl-4 py-2"
                  >
                    <h4 className="font-semibold text-foreground">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-secondary pl-4 py-2"
                  >
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground">
                      {edu.institution} • {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="mt-8 bg-card rounded-2xl p-8 shadow-lg border border-border max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              Languages
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="text-center">
                <p className="font-semibold text-foreground">Macedonian</p>
                <p className="text-sm text-muted-foreground">Native</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-semibold text-foreground">English</p>
                <p className="text-sm text-muted-foreground">Fluent</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-semibold text-foreground">Serbo-Croatian</p>
                <p className="text-sm text-muted-foreground">Fluent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
