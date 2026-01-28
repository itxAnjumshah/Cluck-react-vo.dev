export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🐔</div>
              <h3 className="text-xl font-bold text-primary">Cluck Cluck Chicken</h3>
            </div>
            <p className="text-muted-foreground">Serving the community with delicious fried chicken since 1985.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#menu" className="block text-muted-foreground hover:text-primary transition-colors">
                Menu
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">Services</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">Dine In</p>
              <p className="text-muted-foreground">Takeout</p>
              <p className="text-muted-foreground">Delivery</p>
              <p className="text-muted-foreground">Catering</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">Follow Us</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Facebook
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Cluck Cluck Chicken. All rights reserved. Made with ❤️ for chicken lovers everywhere.
          </p>
        </div>
      </div>
    </footer>
  )
}
