
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Target, Award } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Users,
      title: "Ketua Acara Rekor MURI",
      description: "Memimpin proyek pemecahan rekor MURI untuk pajangan karya Industri 4.0 terbesar",
      details: "Melibatkan lebih dari 300 mahasiswa dari berbagai program studi",
      category: "Kepemimpinan",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Trophy,
      title: "Piala Ketua MPR RI 2024",
      description: "Juara 2 dan 3 kategori inovasi teknologi",
      details: "Kompetisi tingkat nasional dengan prestasi ganda",
      category: "Inovasi",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Award,
      title: "Juara 1 Kompetisi Robotik Internasional",
      description: "Kategori Maze Solving - University of Malaya",
      details: "Mengharumkan nama kampus di tingkat internasional",
      category: "Robotika",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Prestasi & Pencapaian
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Berbagai pencapaian membanggakan di tingkat nasional dan internasional
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-center mb-4">
                  <Badge variant="secondary" className="mb-3 bg-gray-100 text-gray-700">
                    {achievement.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {achievement.title}
                  </h3>
                </div>
                
                <p className="text-gray-700 mb-3 font-medium">
                  {achievement.description}
                </p>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {achievement.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 border-0 shadow-2xl max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Target className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Visi & Misi
              </h3>
              <p className="text-indigo-100 text-lg leading-relaxed">
                Menjadi profesional muda yang mampu memberikan kontribusi nyata dalam era Industri 4.0 
                melalui inovasi teknologi dan kepemimpinan yang efektif.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
