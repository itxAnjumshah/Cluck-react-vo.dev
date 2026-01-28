import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Visit <span className="text-primary">Us Today</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Come experience the best fried chicken in town. We can't wait to serve you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-card-foreground">
                  <MapPin className="h-6 w-6 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  123 Chicken Street
                  <br />
                  Flavor Town, FT 12345
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-card-foreground">
                  <Phone className="h-6 w-6 text-primary" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">(555) 123-CLUCK</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-card-foreground">
                  <Clock className="h-6 w-6 text-primary" />
                  Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground space-y-1">
                  <p>Monday - Thursday: 11am - 9pm</p>
                  <p>Friday - Saturday: 11am - 10pm</p>
                  <p>Sunday: 12pm - 8pm</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" className="bg-input border-border" />
                <Input placeholder="Last Name" className="bg-input border-border" />
              </div>
              <Input placeholder="Email" type="email" className="bg-input border-border" />
              <Input placeholder="Phone" type="tel" className="bg-input border-border" />
              <Textarea placeholder="Your message..." rows={4} className="bg-input border-border" />
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Send Message</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
