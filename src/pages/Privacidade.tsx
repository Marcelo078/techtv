import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacidade() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-secondary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Privacidade</h1>
            <p className="text-xl text-white/90">
              Atualizada em {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Informações que Coletamos</h2>
              <p className="text-foreground/80 mb-4">
                O Melhores Reviews pode coletar as seguintes informações quando você visita nosso site:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Dados de navegação (páginas visitadas, tempo de permanência, origem do acesso)</li>
                <li>Informações técnicas (tipo de navegador, sistema operacional, endereço IP)</li>
                <li>Dados de cookies para melhorar sua experiência de navegação</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Como Usamos Suas Informações</h2>
              <p className="text-foreground/80 mb-4">
                Utilizamos as informações coletadas para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Melhorar a experiência de navegação no site</li>
                <li>Analisar o comportamento dos visitantes e otimizar o conteúdo</li>
                <li>Personalizar recomendações de produtos</li>
                <li>Fins estatísticos e de análise de audiência</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Cookies</h2>
              <p className="text-foreground/80 mb-4">
                Utilizamos cookies para melhorar sua experiência no site. Cookies são pequenos arquivos 
                de texto armazenados no seu dispositivo. Você pode configurar seu navegador para recusar 
                cookies, mas isso pode afetar algumas funcionalidades do site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Links de Afiliados</h2>
              <p className="text-foreground/80 mb-4">
                Nosso site contém links de afiliados. Quando você clica nesses links, informações sobre 
                sua navegação podem ser compartilhadas com as plataformas de afiliados (como Mercado Livre) 
                para fins de rastreamento de comissões. Essas plataformas têm suas próprias políticas de 
                privacidade.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Compartilhamento de Dados</h2>
              <p className="text-foreground/80 mb-4">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Quando necessário para cumprir obrigações legais</li>
                <li>Com plataformas de análise (como Google Analytics) para fins estatísticos</li>
                <li>Com programas de afiliados para rastreamento de comissões</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Segurança</h2>
              <p className="text-foreground/80 mb-4">
                Implementamos medidas de segurança para proteger suas informações contra acesso não autorizado, 
                alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela internet 
                é 100% seguro.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Seus Direitos (LGPD)</h2>
              <p className="text-foreground/80 mb-4">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Confirmar a existência de tratamento de dados</li>
                <li>Acessar seus dados</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar a anonimização, bloqueio ou eliminação de dados</li>
                <li>Revogar o consentimento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Alterações na Política</h2>
              <p className="text-foreground/80 mb-4">
                Podemos atualizar esta política periodicamente. Recomendamos que você revise esta página 
                regularmente para se manter informado sobre como protegemos suas informações.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Contato</h2>
              <p className="text-foreground/80 mb-4">
                Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
