import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skills = [
    { name: "Brand Identity Design", level: 95, description: "Logo design, brand guidelines, visual identity systems" },
    { name: "Digital Design", level: 90, description: "Web design, mobile UI/UX, digital marketing materials" },
    { name: "Print Design", level: 85, description: "Brochures, business cards, packaging, marketing collateral" },
    { name: "Typography", level: 88, description: "Custom lettering, font selection, typographic hierarchy" },
    { name: "Color Theory", level: 92, description: "Color psychology, palette creation, brand color systems" },
    { name: "Creative Direction", level: 87, description: "Project leadership, concept development, team guidance" },
    { name: "Adobe Creative Suite", level: 96, description: "Photoshop, Illustrator, InDesign, After Effects" },
    { name: "3D Design", level: 80, description: "Product visualization, 3D rendering, dimensional design" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-accent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Years of experience and continuous learning have shaped our specialized skill set in the design industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-background/50 backdrop-blur-sm border-accent/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-foreground flex justify-between items-center">
                  {skill.name}
                  <span className="text-accent font-bold">{skill.level}%</span>
                </CardTitle>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </CardHeader>
              <CardContent>
                <Progress 
                  value={skill.level} 
                  className="h-2"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;