import { Link } from "react-router-dom";
import { ShoppingCart, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingCart className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Melhores Reviews</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              As melhores análises de produtos com foco em qualidade, procedência de marcas e avaliações reais.
            </p>
          </div>

          {/* Marcas */}
          <div>
            <h3 className="font-semibold mb-4">Marcas</h3>
            <ul className="space-y-2">
              <li><Link to="/marca/hisense" className="text-sm text-muted-foreground hover:text-foreground">Hisense</Link></li>
              <li><Link to="/marca/philco" className="text-sm text-muted-foreground hover:text-foreground">Philco</Link></li>
              <li><Link to="/marca/aoc" className="text-sm text-muted-foreground hover:text-foreground">AOC</Link></li>
              <li><Link to="/marca/britania" className="text-sm text-muted-foreground hover:text-foreground">Britânia</Link></li>
              <li><Link to="/marca/toshiba" className="text-sm text-muted-foreground hover:text-foreground">Toshiba</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Informações</h3>
            <ul className="space-y-2">
              <li><Link to="/sobre" className="text-sm text-muted-foreground hover:text-foreground">Sobre Nós</Link></li>
              <li><Link to="/privacidade" className="text-sm text-muted-foreground hover:text-foreground">Política de Privacidade</Link></li>
              <li><Link to="/termos" className="text-sm text-muted-foreground hover:text-foreground">Termos de Uso</Link></li>
              <li><Link to="/disclaimer" className="text-sm text-muted-foreground hover:text-foreground">Isenção de Responsabilidade</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Melhores Reviews. Todos os direitos reservados.</p>
          <p className="mt-2">
            Este site contém links de afiliados. Podemos receber comissões por compras realizadas através desses links.
          </p>
        </div>
      </div>
    </footer>
  );
}
