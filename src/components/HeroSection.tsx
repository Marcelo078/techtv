import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroBackground from "@/assets/hero-tv-background.jpg";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero text-white py-16 md:py-24">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/80 to-primary/90 animate-gradient-shift" />
      
      {/* Floating Elements Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <Badge className="mb-4 bg-white/20 text-white border-white/40 backdrop-blur-sm animate-fade-in">
            #1 em Reviews de Televisores
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Melhores Reviews de TVs do Brasil
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in-up animation-delay-200">
            Análises detalhadas com foco em qualidade, procedência de marcas e avaliações reais de consumidores
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
            <Button size="lg" variant="secondary" asChild className="text-lg shadow-xl hover:scale-105 transition-transform">
              <Link to="#produtos">Ver Produtos</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg bg-white/10 border-white/40 text-white hover:bg-white/20 backdrop-blur-sm shadow-xl hover:scale-105 transition-transform" 
              asChild
            >
              <Link to="/sobre">Sobre Nós</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
