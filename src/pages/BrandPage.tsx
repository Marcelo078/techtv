import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, brands } from "@/data/products";

export default function BrandPage() {
  const { brand: brandSlug } = useParams();
  const brand = brands.find(b => b.slug === brandSlug);
  
  if (!brand) {
    return <Navigate to="/404" replace />;
  }

  const brandProducts = products.filter(p => p.brand.toLowerCase() === brand.name.toLowerCase());

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>TVs {brand.name} - Reviews e Análises Completas 2025 | Melhores Reviews</title>
        <meta name="description" content={`Análises completas de TVs ${brand.name}. Descubra se vale a pena comprar, comparações, prós e contras. ${brand.count} produtos analisados.`} />
        <meta name="keywords" content={`${brand.name}, TV ${brand.name}, ${brand.name} é boa, review ${brand.name}, análise ${brand.name}`} />
        <link rel="canonical" href={`https://melhor-reviews.lovable.app/marca/${brand.slug}`} />
      </Helmet>
      
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="gradient-hero text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">TVs {brand.name}</h1>
            <p className="text-xl mb-6">
              Análises completas e honestas de todas as TVs {brand.name} disponíveis no mercado brasileiro.
            </p>
            <p className="text-lg text-white/90">
              {brand.count} produtos analisados com avaliações reais de consumidores
            </p>
          </div>
        </section>

        {/* Brand Info */}
        <section className="py-12 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Sobre a {brand.name}</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                A {brand.name} é uma marca consolidada no mercado de televisores, oferecendo produtos com excelente custo-benefício. 
                Com tecnologia moderna e preços competitivos, tem conquistado cada vez mais consumidores brasileiros.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Nossa equipe analisa cada modelo da {brand.name} considerando qualidade de imagem, recursos smart, durabilidade 
                e principalmente o feedback real de quem já comprou.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Todos os Produtos {brand.name}</h2>
            
            {brandProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {brandProducts.map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground mb-6">
                  Em breve teremos análises de produtos {brand.name}
                </p>
                <Link to="/" className="text-primary hover:underline">
                  ← Voltar para home
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Perguntas Frequentes sobre {brand.name}</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">A {brand.name} é uma boa marca de TV?</h3>
                <p className="text-muted-foreground">
                  Sim, a {brand.name} oferece produtos com bom custo-benefício, tecnologia moderna e tem recebido 
                  avaliações positivas dos consumidores brasileiros.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Vale a pena comprar TV {brand.name}?</h3>
                <p className="text-muted-foreground">
                  Depende do seu orçamento e necessidades. A {brand.name} é especialmente indicada para quem busca 
                  um bom custo-benefício sem abrir mão de recursos modernos como Smart TV e boa qualidade de imagem.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Qual a garantia das TVs {brand.name}?</h3>
                <p className="text-muted-foreground">
                  Geralmente vem com 1 ano de garantia do fabricante, podendo ser estendida através dos parceiros de venda.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
