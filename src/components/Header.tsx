import { ShoppingCart, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-accent rounded-full"></div>
            </div>
            <span className="text-xl md:text-2xl font-bold text-foreground">FloraVision.</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-accent transition-colors">
              Home
            </a>
            <a href="#types" className="text-muted-foreground hover:text-accent transition-colors">
              What Type
            </a>
            <a href="#price" className="text-muted-foreground hover:text-accent transition-colors">
              Price
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-foreground hover:text-accent">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hover:text-accent relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full text-[10px] flex items-center justify-center text-primary-foreground">
                0
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-3 border-t border-border animate-fade-in">
            <a
              href="#home"
              className="block text-foreground hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#types"
              className="block text-muted-foreground hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              What Type
            </a>
            <a
              href="#price"
              className="block text-muted-foreground hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Price
            </a>
            <a
              href="#contact"
              className="block text-muted-foreground hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
