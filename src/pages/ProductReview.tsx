import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data/products";
import { Star, Check, X, ExternalLink, TrendingUp, Shield, Award } from "lucide-react";
import { generateProductSchema, generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-markup";

export default function ProductReview() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  const schemas = [
    generateProductSchema(product),
    generateArticleSchema({
      title: `${product.title} - Review Completo 2025`,
      description: product.description || product.title,
      image: product.image,
      datePublished: "2025-11-16T00:00:00Z",
      dateModified: "2025-11-16T00:00:00Z",
      slug: product.slug
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "https://melhor-reviews.lovable.app/" },
      { name: product.brand, url: `https://melhor-reviews.lovable.app/marca/${product.brand.toLowerCase()}` },
      { name: product.title, url: `https://melhor-reviews.lovable.app/review/${product.slug}` }
    ]),
    generateFAQSchema([
      {
        question: `A TV ${product.brand} é boa?`,
        answer: `Sim, a ${product.title} é uma excelente opção com avaliação de ${product.rating} estrelas baseada em ${product.reviewCount} avaliações reais de consumidores. Oferece ótimo custo-benefício e recursos modernos.`
      },
      {
        question: `Vale a pena comprar a ${product.title}?`,
        answer: `Sim, especialmente com o desconto atual de ${product.discount}. O produto oferece excelente relação custo-benefício e vem recebendo avaliações positivas dos consumidores.`
      },
      {
        question: `Qual o preço da ${product.title}?`,
        answer: `O preço atual é de ${product.price}, com desconto de ${product.discount} em relação ao preço anterior de ${product.oldPrice}.`
      }
    ])
  ];

  const pros = [
    "Excelente custo-benefício",
    "Boa qualidade de imagem",
    "Sistema operacional rápido e intuitivo",
    "Design moderno e elegante",
    "Conectividade completa (HDMI, USB, WiFi)"
  ];

  const cons = [
    "Ângulo de visão pode ser limitado",
    "Áudio integrado básico (recomenda-se soundbar)",
    "Controle remoto simples"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{product.title} - Review Completo 2025 | Melhores Reviews</title>
        <meta name="description" content={`Review completo da ${product.title}. Análise detalhada, prós e contras, e avaliações reais de consumidores. Vale a pena comprar em 2025?`} />
        <meta name="keywords" content={`${product.brand}, ${product.title}, review, análise, vale a pena, é boa, ${product.brand} é boa`} />
        <link rel="canonical" href={`https://melhor-reviews.lovable.app/review/${product.slug}`} />
        <meta property="og:title" content={`${product.title} - Review Completo 2025`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <meta property="og:url" content={`https://melhor-reviews.lovable.app/review/${product.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <SchemaMarkup schema={schemas} />
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="bg-muted/30 py-4 border-b">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <span>/</span>
              <Link to={`/marca/${product.brand.toLowerCase()}`} className="hover:text-foreground">{product.brand}</Link>
              <span>/</span>
              <span className="text-foreground">{product.title}</span>
            </nav>
          </div>
        </section>

        {/* Hero/Product Header */}
        <section className="py-12 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4">{product.discount}</Badge>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{product.title}</h1>
                <p className="text-xl text-muted-foreground mb-6">{product.description}</p>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-primary text-primary"
                            : "text-muted"
                        }`}
                      />
                    ))}
                    <span className="ml-2 font-semibold">{product.rating}</span>
                  </div>
                  <span className="text-muted-foreground">({product.reviewCount} avaliações)</span>
                </div>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-4xl font-bold text-primary">{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-xl text-muted-foreground line-through">{product.oldPrice}</span>
                  )}
                </div>

                <Button size="lg" className="w-full md:w-auto" asChild>
                  <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer sponsored">
                    Ver Oferta no Mercado Livre <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>

              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Review Completo: {product.brand} {product.title.split(" ")[product.title.split(" ").length - 1]} é Boa?</h2>
              <p className="text-lg leading-relaxed mb-6">
                Analisamos detalhadamente a {product.title} para responder se ela realmente vale a pena em 2025. Com {product.reviewCount} avaliações reais de consumidores e uma nota média de {product.rating} estrelas, este modelo da {product.brand} tem se destacado no mercado brasileiro.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Neste review completo, você vai descobrir todos os prós e contras, características técnicas, qualidade de imagem e som, e se o custo-benefício compensa o investimento.
              </p>
            </section>

            {/* Quick Facts */}
            <section className="mb-12 bg-muted/50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Resumo Rápido</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Avaliação</h4>
                    <p className="text-sm text-muted-foreground">{product.rating}/5 ({product.reviewCount} reviews)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Custo-Benefício</h4>
                    <p className="text-sm text-muted-foreground">Excelente</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Marca</h4>
                    <p className="text-sm text-muted-foreground">{product.brand}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Prós e Contras */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Prós e Contras</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-4 text-success flex items-center">
                      <Check className="h-5 w-5 mr-2" /> Pontos Positivos
                    </h4>
                    <ul className="space-y-3">
                      {pros.map((pro, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-4 text-destructive flex items-center">
                      <X className="h-5 w-5 mr-2" /> Pontos de Atenção
                    </h4>
                    <ul className="space-y-3">
                      {cons.map((con, index) => (
                        <li key={index} className="flex items-start">
                          <X className="h-5 w-5 text-destructive mr-2 mt-0.5 flex-shrink-0" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Detailed Analysis */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Análise Detalhada</h3>
              
              <h4 className="text-xl font-semibold mb-3">Qualidade de Imagem</h4>
              <p className="text-lg leading-relaxed mb-6">
                A {product.title} oferece uma qualidade de imagem surpreendente para sua faixa de preço. Com tecnologia moderna de processamento, entrega cores vibrantes e bom contraste, ideal para assistir filmes, séries e jogos casuais.
              </p>

              <h4 className="text-xl font-semibold mb-3">Sistema Operacional</h4>
              <p className="text-lg leading-relaxed mb-6">
                O sistema operacional é rápido e intuitivo, com acesso fácil aos principais apps de streaming como Netflix, Prime Video, YouTube e muito mais. A navegação é fluida e raramente apresenta travamentos.
              </p>

              <h4 className="text-xl font-semibold mb-3">Design e Construção</h4>
              <p className="text-lg leading-relaxed mb-6">
                Com design moderno e bordas finas, a {product.brand} se integra bem a qualquer ambiente. A construção é sólida e o acabamento demonstra boa qualidade para o preço pago.
              </p>

              <h4 className="text-xl font-semibold mb-3">Conectividade</h4>
              <p className="text-lg leading-relaxed mb-6">
                Vem equipada com múltiplas entradas HDMI, USB e conexão WiFi estável. Perfeito para conectar videogames, soundbars, pen drives e outros dispositivos.
              </p>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Perguntas Frequentes</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">A TV {product.brand} é boa para jogos?</h4>
                  <p className="text-muted-foreground">Sim, é adequada para jogos casuais. Para gamers profissionais que buscam taxas de atualização mais altas, recomendamos modelos específicos para gaming.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Qual a garantia oferecida?</h4>
                  <p className="text-muted-foreground">O produto vem com garantia de 1 ano do fabricante, podendo ser estendida através do Mercado Livre.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Preciso de soundbar?</h4>
                  <p className="text-muted-foreground">O áudio integrado é funcional, mas para uma experiência mais imersiva, recomendamos investir em uma soundbar.</p>
                </div>
              </div>
            </section>

            {/* Conclusão */}
            <section className="mb-12 bg-secondary/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Conclusão: Vale a Pena?</h3>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Sim, a {product.title} vale a pena!</strong> Especialmente considerando o desconto atual de {product.discount}. Com nota {product.rating}/5 baseada em {product.reviewCount} avaliações reais, este modelo oferece excelente custo-benefício.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                É uma escolha inteligente para quem busca uma TV com boa qualidade de imagem, sistema operacional moderno e preço acessível. A {product.brand} continua sendo uma marca confiável no mercado brasileiro.
              </p>
              <Button size="lg" className="w-full md:w-auto" asChild>
                <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer sponsored">
                  Aproveitar Oferta de {product.discount} <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </section>

            {/* Related Products */}
            <section>
              <h3 className="text-2xl font-bold mb-6">Produtos Relacionados</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {products
                  .filter(p => p.id !== product.id && p.brand === product.brand)
                  .slice(0, 3)
                  .map(relatedProduct => (
                    <Link key={relatedProduct.id} to={`/review/${relatedProduct.slug}`} className="group">
                      <Card className="hover:shadow-lg transition-smooth">
                        <CardContent className="p-4">
                          <img src={relatedProduct.image} alt={relatedProduct.title} className="w-full rounded-lg mb-3" />
                          <h4 className="font-semibold mb-2 group-hover:text-primary line-clamp-2">{relatedProduct.title}</h4>
                          <p className="text-primary font-bold">{relatedProduct.price}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
