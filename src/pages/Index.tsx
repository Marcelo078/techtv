import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products, brands } from "@/data/products";
import { TrendingUp, Award, Shield, Star } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-hero text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/40">
              #1 em Reviews de Televisores
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Melhores Reviews de TVs do Brasil
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Análises detalhadas com foco em qualidade, procedência de marcas e avaliações reais de consumidores
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" asChild className="text-lg">
                <Link to="#produtos">Ver Produtos</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-white/10 border-white/40 text-white hover:bg-white/20" asChild>
                <Link to="/sobre">Sobre Nós</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-card border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-start space-x-4">
              <div className="bg-secondary/10 p-3 rounded-lg">
                <Award className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Marcas Verificadas</h3>
                <p className="text-sm text-muted-foreground">Análises de marcas confiáveis</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-secondary/10 p-3 rounded-lg">
                <Shield className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Reviews Honestos</h3>
                <p className="text-sm text-muted-foreground">Análises imparciais e detalhadas</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-secondary/10 p-3 rounded-lg">
                <Star className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Avaliações Reais</h3>
                <p className="text-sm text-muted-foreground">Baseadas em consumidores reais</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-secondary/10 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Melhores Ofertas</h3>
                <p className="text-sm text-muted-foreground">Preços atualizados diariamente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Marcas em Destaque</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                to={`/marca/${brand.slug}`}
                className="bg-card border rounded-lg p-4 text-center hover:border-secondary hover:shadow-lg transition-smooth"
              >
                <h3 className="font-semibold mb-1">{brand.name}</h3>
                <p className="text-xs text-muted-foreground">{brand.count} produtos</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="produtos" className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Produtos em Destaque</h2>
              <p className="text-muted-foreground">As melhores TVs analisadas pela nossa equipe</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/produtos">Ver Todos</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Não perca as melhores ofertas!
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Atualizamos diariamente com novas análises e ofertas exclusivas
          </p>
          <Button size="lg" variant="outline" className="bg-white text-secondary hover:bg-white/90" asChild>
            <Link to="/produtos">Explorar Produtos</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
