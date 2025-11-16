import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Termos() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-secondary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Termos de Uso</h1>
            <p className="text-xl text-white/90">
              Atualizado em {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
              <p className="text-foreground/80">
                Ao acessar e usar o site Melhores Reviews, você concorda em cumprir e estar vinculado 
                aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes 
                termos, não deve usar nosso site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Sobre o Serviço</h2>
              <p className="text-foreground/80 mb-4">
                O Melhores Reviews é um site de análise e comparação de produtos, focado em televisores 
                e eletrônicos. Fornecemos informações, análises e opiniões sobre produtos disponíveis 
                no mercado brasileiro.
              </p>
              <p className="text-foreground/80">
                <strong>Importante:</strong> Não somos vendedores dos produtos analisados. Funcionamos 
                como um portal informativo e de redirecionamento através de links de afiliados.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Links de Afiliados</h2>
              <p className="text-foreground/80 mb-4">
                Este site contém links de afiliados para plataformas de comércio eletrônico, 
                principalmente o Mercado Livre. Quando você clica nesses links e realiza uma compra:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Podemos receber uma comissão da venda</li>
                <li>Você não paga nada a mais por isso</li>
                <li>A transação é realizada diretamente com o vendedor/marketplace</li>
                <li>Não temos controle sobre preços, disponibilidade ou políticas do vendedor</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Isenção de Responsabilidade</h2>
              <p className="text-foreground/80 mb-4">
                O conteúdo do Melhores Reviews é fornecido "no estado em que se encontra". Fazemos 
                o possível para garantir a precisão das informações, mas:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Não garantimos a completude ou precisão absoluta das informações</li>
                <li>Não nos responsabilizamos por decisões de compra baseadas em nosso conteúdo</li>
                <li>Preços e disponibilidade podem mudar sem aviso prévio</li>
                <li>Reviews refletem nossa opinião editorial e podem ser subjetivos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Propriedade Intelectual</h2>
              <p className="text-foreground/80 mb-4">
                Todo o conteúdo publicado no Melhores Reviews, incluindo textos, imagens, gráficos 
                e layout, é protegido por direitos autorais. Você pode:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-4">
                <li>Visualizar e imprimir páginas para uso pessoal</li>
                <li>Compartilhar links para nossos artigos</li>
              </ul>
              <p className="text-foreground/80 mb-4">
                Você NÃO pode:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Copiar ou reproduzir conteúdo sem autorização</li>
                <li>Usar conteúdo para fins comerciais sem permissão</li>
                <li>Modificar ou criar trabalhos derivados</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Uso Aceitável</h2>
              <p className="text-foreground/80 mb-4">
                Ao usar nosso site, você concorda em:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Não usar o site para fins ilegais</li>
                <li>Não tentar hackear ou comprometer a segurança do site</li>
                <li>Não sobrecarregar nossos servidores com requisições excessivas</li>
                <li>Não usar bots ou scrapers sem autorização</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Modificações</h2>
              <p className="text-foreground/80">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. Mudanças 
                significativas serão comunicadas através do site. O uso continuado do site após 
                mudanças constitui aceitação dos novos termos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Lei Aplicável</h2>
              <p className="text-foreground/80">
                Estes termos são regidos pelas leis da República Federativa do Brasil. Qualquer 
                disputa será resolvida nos tribunais brasileiros.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Contato</h2>
              <p className="text-foreground/80">
                Para questões sobre estes Termos de Uso, entre em contato através do nosso site.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
