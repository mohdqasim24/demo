import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/30 border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-accent rounded-full"></div>
              </div>
              <span className="text-xl font-bold text-foreground">FloraVision.</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If you don't intake access to always reliable & fresh
              product without any physical effort, we choose to
              provide full location on health life style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  GALLERY PHOTO
                </a>
              </li>
              <li>
                <a href="#offers" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  offers
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Updates */}
          <div>
            <h3 className="font-bold text-foreground mb-4">For Every Updates</h3>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter E-mail"
                className="bg-background/50 border-border"
              />
              <Button className="w-full bg-primary hover:bg-primary/90">
                SUBSCRIBE
              </Button>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="outline"
                className="border-border hover:bg-accent hover:border-accent hover:text-accent-foreground"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-border hover:bg-accent hover:border-accent hover:text-accent-foreground"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-border hover:bg-accent hover:border-accent hover:text-accent-foreground"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            I mention in all my content, All rights reserved © 2024 FloraVision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
