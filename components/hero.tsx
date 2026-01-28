import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-card to-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              The Best <span className="text-primary">Fried Chicken</span> in Town!
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Crispy, juicy, and made with love. Our secret recipe has been delighting families for generations. Come
              taste the difference!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4">
                Order Online
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 bg-transparent"
              >
                View Menu
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/delicious-fried-chicken-bucket-with-golden-crispy-.png"
              alt="Delicious fried chicken"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-bold text-lg animate-bounce">
              Fresh Daily! 🔥
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
