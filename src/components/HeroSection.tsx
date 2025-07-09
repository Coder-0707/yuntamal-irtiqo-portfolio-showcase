
import { Button } from "@/components/ui/button";
import { Linkedin, Instagram, Mail, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-indigo-200 rounded-full opacity-25 animate-pulse delay-500"></div>
      </div>

      <div className="text-center max-w-4xl mx-auto">
        {/* Profile Photo Placeholder */}
        <div className="w-40 h-40 mx-auto mb-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-fade-in">
          <span className="text-6xl font-bold text-white">YN</span>
        </div>

        <div className="animate-fade-in delay-300">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Yuntamal Irtiqo Ngulya
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 font-medium">
            Mahasiswa Manajemen Logistik Industri Elektronika
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Politeknik APP Jakarta | Teknologi Enthusiast | Innovation Leader
          </p>
        </div>

        {/* Social Media Buttons */}
        <div className="flex justify-center gap-4 mb-12 animate-fade-in delay-500">
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white/80 backdrop-blur-sm hover:bg-blue-50 border-blue-200 hover:border-blue-300 transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://linkedin.com', '_blank')}
          >
            <Linkedin className="w-5 h-5 mr-2 text-blue-600" />
            LinkedIn
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white/80 backdrop-blur-sm hover:bg-pink-50 border-pink-200 hover:border-pink-300 transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://instagram.com', '_blank')}
          >
            <Instagram className="w-5 h-5 mr-2 text-pink-600" />
            Instagram
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white/80 backdrop-blur-sm hover:bg-purple-50 border-purple-200 hover:border-purple-300 transition-all duration-300 hover:scale-105"
            onClick={() => window.open('mailto:yuntamal@example.com', '_blank')}
          >
            <Mail className="w-5 h-5 mr-2 text-purple-600" />
            Email
          </Button>
        </div>

        {/* Scroll Down Indicator */}
        <div className="animate-bounce cursor-pointer" onClick={scrollToAbout}>
          <ArrowDown className="w-8 h-8 mx-auto text-gray-400 hover:text-gray-600 transition-colors" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
