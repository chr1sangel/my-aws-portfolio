import { Briefcase } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "IT Coordinator",
    company: "LEORON Institute",
    period: "2025 - Present",
    location: "Skopje, North Macedonia",
    responsibilities: [
      "Coordinate IT resources and ensure efficiency across departments",
      "Oversee technical documentation and analytical troubleshooting",
      "Manage IT infrastructure and support organizational technology needs",
    ],
  },
  {
    title: "System Administrator",
    company: "Mozzart Bet",
    period: "2024 - 2025",
    location: "Skopje, North Macedonia",
    responsibilities: [
      "Managed Microsoft 365 administration and user accounts",
      "Maintained system infrastructure and network operations",
      "Provided technical support and troubleshooting for end users",
    ],
  },
  {
    title: "System Engineer",
    company: "Web Factory",
    period: "2024",
    location: "Skopje, North Macedonia",
    responsibilities: [
      "Configured and maintained Ubiquiti network equipment",
      "Implemented system solutions and network infrastructure",
      "Documented technical processes and system configurations",
    ],
  },
  {
    title: "IT Technician",
    company: "Zlatna Kopacka",
    period: "2023 - 2024",
    location: "Skopje, North Macedonia",
    responsibilities: [
      "Provided technical support for IT infrastructure",
      "Maintained hardware and software systems",
      "Resolved technical issues and supported daily operations",
    ],
  },
  {
    title: "Drone Operator & Product Developer",
    company: "Talent Business Incubator",
    period: "2022 - 2023",
    location: "Skopje, North Macedonia",
    responsibilities: [
      "Operated drone technology for various projects",
      "Developed and refined product concepts",
      "Collaborated on innovative business solutions",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Work Experience
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-md z-10" />

                {/* Content */}
                <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-1">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li
                          key={respIndex}
                          className="text-muted-foreground text-sm flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
