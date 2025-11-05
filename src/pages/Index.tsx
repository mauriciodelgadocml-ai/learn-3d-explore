import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Scene3D from '@/components/Scene3D';
import SkeletonModel from '@/components/SkeletonModel';
import GlobeModel from '@/components/GlobeModel';
import GeometryModel from '@/components/GeometryModel';
import SubjectCard from '@/components/SubjectCard';

const Index = () => {
  const anatomyContent = [
    "The human skeleton is composed of 206 bones in adults, providing structure, protection, and support for the body. It serves as the framework that supports soft tissues and muscles.",
    "The skeletal system is divided into two main parts: the axial skeleton (skull, vertebral column, and rib cage) and the appendicular skeleton (limbs and girdles).",
    "Bones are living tissues that constantly remodel throughout life. They store minerals like calcium and phosphorus, produce blood cells in the bone marrow, and protect vital organs.",
    "The skull protects the brain, the rib cage shields the heart and lungs, while the vertebral column houses and protects the spinal cord.",
  ];

  const geographyContent = [
    "Earth is the third planet from the Sun and the only known planet to harbor life. It has a diameter of about 12,742 km and is covered by 71% water.",
    "The planet is divided into seven continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia. Each continent has unique geological features and ecosystems.",
    "Earth's atmosphere consists of 78% nitrogen, 21% oxygen, and trace amounts of other gases. This protective layer shields us from harmful solar radiation.",
    "The planet rotates on its axis once every 24 hours, creating day and night, and revolves around the Sun once every 365.25 days, creating our yearly seasons.",
  ];

  const geometryContent = [
    "Geometry is the branch of mathematics that studies shapes, sizes, positions, and properties of space. It forms the foundation for understanding our three-dimensional world.",
    "Basic 3D shapes include cubes (6 square faces), spheres (perfectly round), cylinders (circular bases with curved surface), cones (circular base tapering to a point), and pyramids (polygonal base with triangular faces).",
    "Volume and surface area are key concepts: a cube with side 'a' has volume a³ and surface area 6a². A sphere with radius 'r' has volume 4/3πr³ and surface area 4πr².",
    "Understanding geometry is essential in architecture, engineering, computer graphics, and many other fields where spatial reasoning is crucial.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            Interactive 3D Learning
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore anatomy, geography, and geometry through interactive 3D models. Rotate, zoom, and discover!
          </p>
        </header>

        <Tabs defaultValue="anatomy" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="anatomy">Anatomy</TabsTrigger>
            <TabsTrigger value="geography">Geography</TabsTrigger>
            <TabsTrigger value="geometry">Geometry</TabsTrigger>
          </TabsList>

          <TabsContent value="anatomy" className="animate-in fade-in duration-500">
            <SubjectCard
              title="Human Skeleton"
              description="Explore the structure of the human skeletal system"
              scene={
                <Scene3D cameraPosition={[0, 1, 8]}>
                  <SkeletonModel />
                </Scene3D>
              }
              content={anatomyContent}
            />
          </TabsContent>

          <TabsContent value="geography" className="animate-in fade-in duration-500">
            <SubjectCard
              title="Planet Earth"
              description="Discover our planet and its features"
              scene={
                <Scene3D cameraPosition={[0, 0, 15]}>
                  <GlobeModel />
                </Scene3D>
              }
              content={geographyContent}
            />
          </TabsContent>

          <TabsContent value="geometry" className="animate-in fade-in duration-500">
            <SubjectCard
              title="3D Geometric Shapes"
              description="Learn about fundamental geometric forms"
              scene={
                <Scene3D cameraPosition={[0, 0, 6]}>
                  <GeometryModel />
                </Scene3D>
              }
              content={geometryContent}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
