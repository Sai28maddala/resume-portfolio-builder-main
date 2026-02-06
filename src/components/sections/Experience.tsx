import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Agentic AI Intern",
      company: "Woxsen University",
      duration: "Dec 2025 – Present",
      techStack: ["Python", "Symbolic AI", "Logic Programming"],
      responsibilities: [
        "Designed rule-based symbolic reasoning modules to enhance agent decision-making beyond data-driven models",
        "Implemented logic representations, symbolic expressions, and inference mechanisms for hybrid AI systems",
        "Collaborated with faculty researchers to integrate symbolic computation into experimental AI pipelines, improving model interpretability and reasoning",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="section-heading">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold">Professional Journey</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <Badge variant="secondary" className="self-start">
                        {exp.duration}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.techStack.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
