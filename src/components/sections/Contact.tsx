import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sailakshmi.maddala_2027@woxsen.edu.in",
      href: "mailto:sailakshmi.maddala_2027@woxsen.edu.in",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "maddala-venkata-sailakshmi",
      href: "https://www.linkedin.com/in/maddala-venkata-sailakshmi-46a129323",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Sai28maddala",
      href: "https://github.com/Sai28maddala",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, Telangana, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="section-heading">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm actively seeking internship and entry-level opportunities in AI/ML and Software Development. 
            Feel free to reach out!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
          {contactInfo.map((item, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                {item.href ? (
                  <a 
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium text-sm hover:text-primary transition-colors break-all"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-medium text-sm">{item.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="gap-2">
            <a href="mailto:sailakshmi.maddala_2027@woxsen.edu.in">
              <Send className="w-5 h-5" />
              Send Message
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
