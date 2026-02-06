import { Code, Brain, Database, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Query Languages",
      skills: ["Python", "JavaScript", "SQL"],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: ["Scikit-learn", "BERT", "Graph Neural Networks", "Fuzzy Logic", "NLP", "mBART", "Symbolic AI"],
    },
    {
      icon: Database,
      title: "Frameworks & Tools",
      skills: ["Flask", "Pandas", "Logic Programming", "PDF Parsing Libraries"],
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Teamwork and Collaboration", "Problem-Solving", "Critical Thinking", "Time Management"],
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="section-heading">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold">Technical Expertise</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
