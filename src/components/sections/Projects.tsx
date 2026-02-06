import { ExternalLink, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Healthcare Recommendation System",
      duration: "July 2024 – Sep 2024",
      techStack: ["Python", "Pandas", "Scikit-learn", "Flask"],
      description: [
        "Designed a machine learning–based recommendation system to provide personalized healthcare suggestions using symptoms and user profiles",
        "Performed data collection, cleaning, and feature engineering on healthcare datasets",
        "Improved recommendation relevance by 30%, delivering accurate real-time medical insights",
      ],
    },
    {
      title: "Multimodal Fake News Detection System",
      duration: "Dec 2024 – Mar 2025",
      techStack: ["Python", "BERT", "Graph Neural Networks", "Fuzzy Logic"],
      description: [
        "Built a multimodal fake news detection platform analyzing text, images, and videos",
        "Implemented a hybrid architecture combining BERT, GNN, and fuzzy logic for complex misinformation scenarios",
        "Achieved higher detection accuracy on real-world datasets compared to text-only models",
      ],
    },
    {
      title: "Document Parsing for Research Journals using ML",
      duration: "July 2025 – Nov 2025",
      techStack: ["Python", "NLP", "Scikit-learn", "PDF Parsing Libraries"],
      description: [
        "Built an automated ML-based system to parse and extract structured sections from academic research papers",
        "Implemented text preprocessing, feature extraction, and section classification models",
        "Reduced manual document analysis effort by 60%, enabling faster research review and indexing",
      ],
    },
    {
      title: "Sentiment-Aware Multilingual Translation System",
      duration: "Dec 2025 – Present",
      techStack: ["Python", "mBART", "NLP", "Emotion Classification Models"],
      description: [
        "Developed a multilingual translation pipeline using mBART to preserve semantic meaning across languages",
        "Integrated emotion and sentiment classification models to maintain emotional tone during translation",
        "Improved sentiment consistency across translated outputs by 25%, enhancing contextual accuracy",
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="section-heading">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Work</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover group">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  {project.duration}
                </div>
                <CardTitle className="flex items-center justify-between">
                  <span>{project.title}</span>
                  <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <ul className="space-y-2">
                  {project.description.map((point, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
