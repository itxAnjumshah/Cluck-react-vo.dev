export function About() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/happy-family-restaurant-kitchen-with-chefs-cooking.png" alt="Our kitchen" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground">
              Our <span className="text-primary">Story</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Since 1985, Cluck Cluck Chicken has been serving the community with the most delicious, crispy fried
              chicken made from our secret family recipe. What started as a small family business has grown into a
              beloved local institution.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in using only the freshest ingredients, never frozen chicken, and cooking everything to order.
              Our commitment to quality and flavor has made us the go-to spot for families looking for a delicious meal
              in a fun, welcoming atmosphere.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">38+</div>
                <div className="text-sm text-muted-foreground">Years Serving</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Fresh Daily</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
