import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertCircle } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-secondary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Isenção de Responsabilidade</h1>
            <p className="text-xl text-white/90">
              Informações importantes sobre nosso conteúdo
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg mb-8 flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Aviso Importante</h3>
                <p className="text-foreground/80">
                  As informações contidas neste site são fornecidas para fins informativos e educacionais. 
                  Recomendamos que você faça sua própria pesquisa antes de tomar qualquer decisão de compra.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Natureza do Conteúdo</h2>
                <p className="text-foreground/80 mb-4">
                  O conteúdo publicado no Melhores Reviews consiste em:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  <li>Análises e opiniões editoriais sobre produtos</li>
                  <li>Comparações baseadas em especificações técnicas disponíveis publicamente</li>
                  <li>Compilações de avaliações de consumidores de fontes públicas</li>
                  <li>Informações de preços obtidas de plataformas de e-commerce</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Precisão das Informações</h2>
                <p className="text-foreground/80 mb-4">
                  Embora nos esforcemos para manter informações precisas e atualizadas:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  <li>Especificações técnicas podem mudar sem aviso prévio pelos fabricantes</li>
                  <li>Preços e disponibilidade variam constantemente</li>
                  <li>Ofertas e descontos podem expirar</li>
                  <li>Informações podem conter erros não intencionais</li>
                </ul>
                <p className="text-foreground/80 mt-4">
                  <strong>Recomendação:</strong> Sempre verifique as informações diretamente no site 
                  do vendedor antes de fazer uma compra.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Links de Afiliados</h2>
                <p className="text-foreground/80 mb-4">
                  Este site participa de programas de afiliados:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  <li>Recebemos comissões por vendas realizadas através de nossos links</li>
                  <li>Isso NÃO afeta o preço que você paga</li>
                  <li>Nossa independência editorial é mantida</li>
                  <li>Analisamos produtos com base em mérito, não em comissões</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Não Somos Vendedores</h2>
                <p className="text-foreground/80 mb-4">
                  <strong>Importante esclarecer:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  <li>Não vendemos produtos diretamente</li>
                  <li>Não processamos pagamentos</li>
                  <li>Não gerenciamos estoque ou entregas</li>
                  <li>Não fornecemos garantia ou suporte técnico de produtos</li>
                  <li>Não somos responsáveis por transações realizadas em sites terceiros</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Responsabilidade do Vendedor</h2>
                <p className="text-foreground/80 mb-4">
                  Todas as transações são realizadas diretamente com vendedores em marketplaces 
                  (como Mercado Livre). O vendedor é responsável por:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  <li>Precisão das descrições de produtos</li>
                  <li>Preços e condições de pagamento</li>
                  <li>Prazos e condições de entrega</li>
                  <li>Garantia e suporte pós-venda</li>
                  <li>Políticas de troca e devolução</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Opiniões e Subjetividade</h2>
                <p className="text-foreground/80">
                  Nossas análises contêm elementos de opinião e julgamento subjetivo. O que 
                  consideramos um "bom produto" pode não atender às suas necessidades específicas. 
                  Considere suas próprias prioridades e requisitos ao avaliar produtos.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Marcas Registradas</h2>
                <p className="text-foreground/80">
                  Todos os nomes de marcas, produtos e logotipos mencionados neste site são 
                  propriedade de seus respectivos donos. Seu uso aqui é apenas para fins de 
                  identificação e não implica endosso ou afiliação.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">8. Limitação de Responsabilidade</h2>
                <p className="text-foreground/80 mb-4">
                  O Melhores Reviews não será responsável por:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  <li>Decisões de compra baseadas em nosso conteúdo</li>
                  <li>Problemas com produtos adquiridos através de nossos links</li>
                  <li>Perdas financeiras resultantes de informações imprecisas</li>
                  <li>Disputas entre você e vendedores terceiros</li>
                  <li>Mudanças de preço ou indisponibilidade de produtos</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">9. Recomendação Final</h2>
                <div className="bg-secondary/10 p-6 rounded-lg">
                  <p className="text-foreground font-semibold">
                    Use nosso conteúdo como um ponto de partida para sua pesquisa, não como a 
                    única fonte de informação. Sempre:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80 mt-4">
                    <li>Verifique especificações diretamente com o vendedor</li>
                    <li>Leia avaliações de múltiplas fontes</li>
                    <li>Compare preços em diferentes plataformas</li>
                    <li>Considere suas necessidades específicas</li>
                    <li>Leia políticas de garantia e devolução</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Contato</h2>
                <p className="text-foreground/80">
                  Se você tiver dúvidas sobre esta isenção de responsabilidade ou sobre qualquer 
                  conteúdo em nosso site, entre em contato conosco.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
