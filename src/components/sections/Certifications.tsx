import { Award, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Certifications = () => {
  const certifications = [
    { name: "Hacksavvy-24", issuer: "MGIT" },
    { name: "Core Java", issuer: "Coursera" },
    { name: "Cloud Virtualization, Containers and APIs", issuer: "Coursera" },
    { name: "Dynamic Programming, Greedy Algorithms", issuer: "Coursera" },
  ];

  return (
    <section id="certifications" className="py-24">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="section-heading">Certifications</p>
          <h2 className="text-3xl md:text-4xl font-bold">Professional Development</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{cert.name}</h3>
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  {cert.issuer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
