import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const menuItems = [
  {
    category: "Signature Chicken",
    items: [
      {
        name: "Original Fried Chicken",
        description: "Our classic recipe with 11 herbs and spices",
        price: "$12.99",
        image: "/golden-fried-chicken-pieces.png",
      },
      {
        name: "Spicy Buffalo Wings",
        description: "Crispy wings tossed in our signature buffalo sauce",
        price: "$14.99",
        image: "/spicy-buffalo-chicken-wings.png",
      },
      {
        name: "Honey BBQ Chicken",
        description: "Sweet and smoky with our homemade BBQ glaze",
        price: "$13.99",
        image: "/honey-bbq-glazed-chicken.png",
      },
    ],
  },
  {
    category: "Family Meals",
    items: [
      {
        name: "Family Feast",
        description: "12 pieces of chicken, 3 sides, and 4 biscuits",
        price: "$29.99",
        image: "/family-chicken-meal-with-sides.png",
      },
      {
        name: "Chicken & Waffles",
        description: "Crispy chicken served with fluffy waffles and syrup",
        price: "$16.99",
        image: "/chicken-and-waffles-with-syrup.png",
      },
      {
        name: "Kids Happy Meal",
        description: "2 chicken tenders, fries, drink, and a toy",
        price: "$7.99",
        image: "/kids-chicken-tenders-meal-with-toy.png",
      },
    ],
  },
]

export function Menu() {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Delicious <span className="text-primary">Menu</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every dish is prepared fresh daily with the finest ingredients and our secret blend of spices
          </p>
        </div>

        {menuItems.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-primary">{category.category}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <Card key={itemIndex} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl text-card-foreground">{item.name}</CardTitle>
                      <span className="text-2xl font-bold text-primary">{item.price}</span>
                    </div>
                    <CardDescription className="text-muted-foreground mb-4">{item.description}</CardDescription>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Add to Order
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
