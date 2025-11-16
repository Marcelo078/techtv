import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Users, Target, TrendingUp } from "lucide-react";

export default function Sobre() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-secondary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nós</h1>
            <p className="text-xl text-white/90">
              Transparência e qualidade em cada análise
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Quem Somos</h2>
              <div className="prose prose-lg max-w-none text-foreground/80">
                <p className="mb-4">
                  O <strong>Melhores Reviews</strong> é um portal especializado em análises detalhadas de produtos eletrônicos, 
                  com foco especial em televisores das principais marcas disponíveis no mercado brasileiro.
                </p>
                <p className="mb-4">
                  Nossa missão é fornecer informações precisas, imparciais e úteis para ajudar consumidores a 
                  tomarem decisões de compra informadas. Analisamos cada produto com base em critérios objetivos 
                  como qualidade de imagem, recursos, durabilidade e custo-benefício.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8">Nossos Valores</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border shadow-card">
                  <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Qualidade</h3>
                  <p className="text-muted-foreground">
                    Análises detalhadas e criteriosas de cada produto, sempre priorizando a qualidade da informação.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border shadow-card">
                  <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Transparência</h3>
                  <p className="text-muted-foreground">
                    Informamos claramente sobre links de afiliados e mantemos nossa independência editorial.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border shadow-card">
                  <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Objetividade</h3>
                  <p className="text-muted-foreground">
                    Reviews baseados em dados, especificações técnicas e feedback real de consumidores.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border shadow-card">
                  <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Atualização</h3>
                  <p className="text-muted-foreground">
                    Conteúdo sempre atualizado com os lançamentos mais recentes e tendências do mercado.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Nossa Metodologia</h2>
              <div className="bg-card p-8 rounded-lg border">
                <div className="prose prose-lg max-w-none text-foreground/80">
                  <p className="mb-4">
                    Cada análise em nosso site segue um processo rigoroso:
                  </p>
                  <ol className="list-decimal list-inside space-y-3 mb-6">
                    <li><strong>Pesquisa de mercado:</strong> Identificamos os produtos mais relevantes e procurados</li>
                    <li><strong>Análise técnica:</strong> Avaliamos especificações, tecnologias e recursos</li>
                    <li><strong>Avaliação de usuários:</strong> Coletamos e analisamos feedback de consumidores reais</li>
                    <li><strong>Comparação de preços:</strong> Monitoramos preços em diversas plataformas</li>
                    <li><strong>Verificação de marca:</strong> Checamos procedência, garantia e suporte</li>
                    <li><strong>Redação final:</strong> Compilamos tudo em um review completo e objetivo</li>
                  </ol>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Divulgação de Afiliados</h2>
              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded">
                <p className="text-foreground/80">
                  <strong>Transparência total:</strong> Este site contém links de afiliados para o Mercado Livre. 
                  Quando você clica nesses links e realiza uma compra, podemos receber uma pequena comissão sem 
                  nenhum custo adicional para você. Essa comissão nos ajuda a manter o site e continuar 
                  produzindo conteúdo de qualidade.
                </p>
                <p className="text-foreground/80 mt-4">
                  <strong>Importante:</strong> Nossa independência editorial é mantida. As análises e opiniões 
                  expressas são genuínas e baseadas em nossa metodologia, independentemente de qualquer 
                  programa de afiliados.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
