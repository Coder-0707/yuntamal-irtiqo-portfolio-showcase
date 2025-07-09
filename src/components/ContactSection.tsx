
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Instagram, Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mari Berkolaborasi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Siap untuk berdiskusi tentang teknologi, inovasi, atau peluang kerjasama
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-blue-400" />
                  <span>yuntamal@example.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-green-400" />
                  <span>+62 xxx-xxxx-xxxx</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-red-400" />
                  <span>Jakarta, Indonesia</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Media Sosial</h3>
              <div className="space-y-4">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-white hover:bg-white/20 hover:text-blue-300 transition-all duration-300"
                  onClick={() => window.open('https://linkedin.com', '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-3" />
                  LinkedIn Profile
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-white hover:bg-white/20 hover:text-pink-300 transition-all duration-300"
                  onClick={() => window.open('https://instagram.com', '_blank')}
                >
                  <Instagram className="w-5 h-5 mr-3" />
                  Instagram
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-white hover:bg-white/20 hover:text-purple-300 transition-all duration-300"
                  onClick={() => window.open('mailto:yuntamal@example.com', '_blank')}
                >
                  <Mail className="w-5 h-5 mr-3" />
                  Email Langsung
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-white/20 shadow-2xl">
          <CardContent className="p-8 text-center">
            <Send className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Tertarik Berkolaborasi?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk diskusi tentang 
              proyek teknologi, peluang magang, atau kolaborasi penelitian.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open('mailto:yuntamal@example.com?subject=Kolaborasi&body=Halo Yuntamal, saya tertarik untuk berkolaborasi...', '_blank')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Kirim Email Sekarang
            </Button>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <p className="text-gray-400">
            © 2024 Yuntamal Irtiqo Ngulya. Dibuat dengan ❤️ untuk masa depan teknologi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
