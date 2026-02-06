import { Trophy, Star, GraduationCap, Briefcase, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Achievements = () => {
  const achievements = [
    {
      icon: Code,
      text: "Solved 60+ problems on LeetCode, strengthening skills in data structures, algorithms, and problem-solving",
    },
    {
      icon: GraduationCap,
      text: "Maintained a GPA of 9.14/10, demonstrating consistent academic excellence",
    },
    {
      icon: Briefcase,
      text: "Selected as Agentic AI Intern at Woxsen University, contributing to research on symbolic computation and hybrid AI systems",
    },
    {
      icon: Star,
      text: "Successfully completed multiple AI/ML projects, including fake news detection and multilingual NLP systems",
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-secondary/30">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="section-heading">Achievements</p>
          <h2 className="text-3xl md:text-4xl font-bold">Milestones & Recognition</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex-shrink-0">
                  <achievement.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-muted-foreground">{achievement.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
