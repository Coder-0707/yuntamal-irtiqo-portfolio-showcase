
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Cpu, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Tentang Saya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Pendidikan</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg text-gray-700">Politeknik APP Jakarta</h4>
                  <p className="text-gray-600">Manajemen Logistik Industri Elektronika</p>
                  <p className="text-sm text-gray-500">Mahasiswa Aktif</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-700">SMK Negeri 2 Wonosobo</h4>
                  <p className="text-gray-600">Administrasi Bisnis</p>
                  <p className="text-sm text-gray-500">Lulusan</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Keahlian</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">Manajemen Inventori</Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">Akuntansi</Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">Elektronika</Badge>
                <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">Robotika</Badge>
                <Badge variant="secondary" className="bg-red-100 text-red-800 hover:bg-red-200">Industri 4.0</Badge>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Kepemimpinan</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-xl">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Profil Lengkap</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Seorang mahasiswa aktif yang tekun dan antusias terhadap efisiensi proses bisnis dan teknologi. 
              Memiliki ketertarikan mendalam pada manajemen inventori, akuntansi, serta dunia elektronika dan robotika. 
              Dikenal memiliki kepribadian yang tangguh dalam menghadapi tantangan, tidak mudah menyerah, 
              cepat belajar dari kegagalan, dan terus mendorong diri untuk berkembang lebih jauh.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mt-4">
              Aktif dalam berbagai praktikum, kegiatan kampus seperti komunitas HEXA!, 
              serta pengunggahan karya ilmiah di berbagai platform publik. Menjadi representasi mahasiswa vokasi 
              yang siap menghadapi tantangan industri 4.0 dan mampu memberikan kontribusi nyata di dalamnya.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
