import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Scene3D from '@/components/Scene3D';
import SkeletonModel from '@/components/SkeletonModel';
import GlobeModel from '@/components/GlobeModel';
import GeometryModel from '@/components/GeometryModel';
import SubjectCard from '@/components/SubjectCard';

const Index = () => {
  const anatomyContent = [
    "El esqueleto humano, en los adultos, está compuesto por 206 huesos que proporcionan estructura, protección y soporte al cuerpo. Sirve de armazón para sostener los tejidos blandos y los músculos.",
    "El sistema esquelético se divide en dos partes principales: el esqueleto axial (cráneo, columna vertebral y caja torácica) y el esqueleto apendicular (extremidades y cinturas).",
    "Los huesos son tejidos vivos que se remodelan constantemente a lo largo de la vida. Almacenan minerales como el calcio y el fósforo, producen células sanguíneas en la médula ósea y protegen los órganos vitales.",
    "El cráneo protege el cerebro, la caja torácica protege el corazón y los pulmones, mientras que la columna vertebral aloja y protege la médula espinal.",
  ];

  const geographyContent = [
    "La Tierra es el tercer planeta desde el Sol y el único conocido que alberga vida. Tiene un diámetro de aproximadamente 12.742 km y la superficie está cubierta por un 71% de agua.",
    "El planeta está dividido en siete continentes: Asia, África, América del Norte, América del Sur, la Antártida, Europa y Australia. Cada continente posee características geológicas y ecosistemas únicos.",
    "La atmósfera terrestre se compone de un 78% de nitrógeno, un 21% de oxígeno y trazas de otros gases. Esta capa protectora nos resguarda de la dañina radiación solar.",
    "El planeta gira sobre su eje una vez cada 24 horas, creando el día y la noche, y orbita alrededor del Sol una vez cada 365,25 días, creando las estaciones del año.",
  ];

  const geometryContent = [
    "La geometría es la rama de las matemáticas que estudia las formas, los tamaños, las posiciones y las propiedades del espacio. Constituye la base para comprender nuestro mundo tridimensional.",
    "Las figuras tridimensionales básicas incluyen cubos (con seis caras cuadradas), esferas (perfectamente redondas), cilindros (con base circular y superficie curva), conos (con base circular que se estrecha hasta un punto) y pirámides (con base poligonal y caras triangulares).",
    "El volumen y el área superficial son conceptos clave: un cubo de lado «a» tiene un volumen de a³ y un área superficial de 6a². Una esfera de radio «r» tiene un volumen de 4/3πr³ y un área superficial de 4πr².",
    "Comprender la geometría es esencial en arquitectura, ingeniería, gráficos por computadora y muchos otros campos donde el razonamiento espacial es crucial.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            Aprendizaje interactivo en 3D
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora la anatomía, la geografía y la geometría a través de modelos 3D interactivos. ¡Gira, haz zoom y descubre!
          </p>
        </header>

        <Tabs defaultValue="anatomy" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="anatomy">Anatomía</TabsTrigger>
            <TabsTrigger value="geography">Geografía</TabsTrigger>
            <TabsTrigger value="geometry">Geometría</TabsTrigger>
          </TabsList>

          <TabsContent value="anatomy" className="animate-in fade-in duration-500">
            <SubjectCard
              title="Esqueleto humano"
              description="Explora la estructura del sistema esquelético humano"
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
              title="Planeta Tierra"
              description="Descubre nuestro planeta y sus características"
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
              title="Formas geométricas 3D"
              description="Aprende sobre las formas geométricas fundamentales"
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
