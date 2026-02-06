import { FileText, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Research = () => {
  return (
    <section id="research" className="py-24 bg-secondary/30">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="section-heading">Research</p>
          <h2 className="text-3xl md:text-4xl font-bold">Academic Contributions</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                Fake News Detection System – Review Paper
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  Conducted an in-depth review of existing fake news detection techniques, 
                  covering NLP-based, multimodal, and graph-based approaches. Analyzed datasets, 
                  model architectures, evaluation metrics, and research gaps to support future 
                  advancements in misinformation detection systems.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Research;
