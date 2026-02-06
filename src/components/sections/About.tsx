import { GraduationCap, Award, Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { icon: GraduationCap, label: "CGPA", value: "9.14/10" },
    { icon: Award, label: "Intermediate", value: "98.7%" },
    { icon: Code2, label: "LeetCode", value: "60+ Problems" },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="section-heading">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Passionate About AI & Machine Learning
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a motivated Computer Science undergraduate at Woxsen University, 
              specializing in Artificial Intelligence and Machine Learning. With a 
              strong academic record and practical experience, I focus on building 
              data-driven solutions and deploying ML models.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans machine learning, natural language processing, 
              full-stack development, and symbolic computation. I'm passionate about 
              translating research into scalable applications and actively seek 
              opportunities to contribute to impactful AI-driven systems.
            </p>

            <div className="pt-4">
              <h3 className="font-semibold mb-3">Education</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-card">
                  <GraduationCap className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Bachelor of Technology</p>
                    <p className="text-sm text-muted-foreground">Woxsen University, Hyderabad • 2023 - 2027</p>
                    <p className="text-sm text-primary font-medium">CGPA: 9.14</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
