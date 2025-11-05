import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface SubjectCardProps {
  title: string;
  description: string;
  scene: ReactNode;
  content: string[];
}

const SubjectCard = ({ title, description, scene, content }: SubjectCardProps) => {
  return (
    <Card className="overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-[var(--shadow-medium)]">
      <CardHeader className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-primary-foreground/90">{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="h-[400px] lg:h-[500px]">
            {scene}
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Learn More</h3>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              {content.map((paragraph, index) => (
                <p key={index} className="text-sm">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubjectCard;
