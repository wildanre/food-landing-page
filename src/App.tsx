import { useState } from 'react'
import {
  Search,
  ShoppingCart,
  Menu,
  Star,
  Clock,
  MapPin,
  ChevronRight,
  ArrowRight
} from 'lucide-react'
import { motion } from 'framer-motion'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const MENU_ITEMS = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    price: "Rp 45.000",
    rating: 4.8,
    category: "Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Pepperoni Feast Pizza",
    price: "Rp 85.000",
    rating: 4.9,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Crispy Fried Chicken",
    price: "Rp 35.000",
    rating: 4.7,
    category: "Chicken",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Garden Fresh Salad",
    price: "Rp 30.000",
    rating: 4.5,
    category: "Healthy",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop"
  }
]

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 p-2 rounded-xl text-white">
              <ShoppingCart className="size-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">Foody<span className="text-orange-500">Go</span></span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="text-orange-500">Home</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Menu</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Special Offers</a>
            <a href="#" className="hover:text-orange-500 transition-colors">About</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
              <Input placeholder="Search favorite food..." className="pl-9 bg-slate-50 border-none focus-visible:ring-orange-500" />
            </div>
            <Button size="icon" variant="ghost" className="relative">
              <ShoppingCart className="size-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
                3
              </span>
            </Button>
            <div className="hidden md:block">
              <Button className="bg-orange-500 hover:bg-orange-600">Login</Button>
            </div>

            <Sheet>
              <SheetTrigger>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-6 mt-12">
                  <a href="#" className="text-lg font-semibold text-orange-500">Home</a>
                  <a href="#" className="text-lg font-semibold">Menu</a>
                  <a href="#" className="text-lg font-semibold">Special Offers</a>
                  <a href="#" className="text-lg font-semibold">About</a>
                  <Separator />
                  <Button className="bg-orange-500">Login</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-10 pb-20 md:pt-20 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <Badge variant="secondary" className="bg-orange-100 text-orange-600 hover:bg-orange-100 border-none px-4 py-1.5 rounded-full text-sm font-medium">
                🔥 50% Off Your First Order
              </Badge>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
                Nikmati <span className="text-orange-500">Makanan</span> Favoritmu Kapan Saja
              </h1>
              <p className="text-lg text-slate-500 max-w-[500px]">
                Ribuan pilihan menu lezat dari restoran terbaik siap diantar ke pintu rumahmu dengan cepat dan hangat.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-14 px-8 bg-orange-500 hover:bg-orange-600 text-lg rounded-2xl shadow-lg shadow-orange-200">
                  Pesan Sekarang
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 border-slate-200 text-lg rounded-2xl">
                  Lihat Menu
                </Button>
              </div>
              <div className="flex items-center gap-10 pt-4">
                <div className="space-y-1">
                  <p className="text-2xl font-bold">150k+</p>
                  <p className="text-sm text-slate-500">Review Positif</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-sm text-slate-500">Restoran Partner</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold">20+</p>
                  <p className="text-sm text-slate-500">Kota Besar</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop"
                  alt="Delicious food"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>

              {/* Decorative Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -left-8 top-1/4 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border"
              >
                <div className="size-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Clock className="size-6" />
                </div>
                <div>
                  <p className="text-sm font-bold">Fast Delivery</p>
                  <p className="text-xs text-slate-500">Under 30 mins</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-8 bottom-1/4 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border"
              >
                <div className="size-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                  <Star className="size-6 fill-yellow-600" />
                </div>
                <div>
                  <p className="text-sm font-bold">4.9/5 Rating</p>
                  <p className="text-xs text-slate-500">Customer Choice</p>
                </div>
              </motion.div>

              {/* Background Shapes */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[120%] bg-orange-100 rounded-full blur-[80px] -z-10 opacity-50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Mengapa Memilih Kami?</h2>
            <p className="text-slate-500 max-w-[600px] mx-auto text-lg">
              Kami memberikan pelayanan terbaik untuk menjamin kepuasan makan malammu.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Mudah Dipesan",
                desc: "Hanya butuh beberapa klik untuk memesan makanan favoritmu melalui website kami.",
                icon: <MapPin className="size-8" />
              },
              {
                title: "Pengiriman Tercepat",
                desc: "Tim kurir kami siap mengantar pesananmu tetap hangat dan tepat waktu.",
                icon: <Clock className="size-8" />
              },
              {
                title: "Kualitas Terbaik",
                desc: "Restoran partner kami telah melewati seleksi ketat untuk kualitas rasa dan kebersihan.",
                icon: <Star className="size-8" />
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm"
              >
                <div className="size-16 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Menu Populer Kami</h2>
              <p className="text-slate-500 text-lg">Pilihan menu terlaris minggu ini yang wajib kamu coba.</p>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {["All", "Burger", "Pizza", "Chicken", "Healthy"].map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-6 h-11 ${activeCategory === cat ? 'bg-orange-500 hover:bg-orange-600' : 'border-slate-200'}`}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MENU_ITEMS.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all">
                  <div className="relative aspect-square overflow-hidden group">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <Badge className="absolute top-4 right-4 bg-white/90 text-slate-900 border-none backdrop-blur-sm px-3 py-1">
                      <Star className="size-3 fill-yellow-500 text-yellow-500 mr-1 inline" /> {item.rating}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-2">{item.category}</p>
                    <h3 className="text-xl font-bold mb-4 line-clamp-1">{item.name}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-xl font-extrabold text-slate-900">{item.price}</p>
                      <Button size="icon" className="rounded-xl bg-slate-900 hover:bg-slate-800">
                        <ShoppingCart className="size-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="outline" size="lg" className="rounded-2xl h-14 px-8 border-slate-200 group">
              Lihat Semua Menu <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-orange-500 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-6">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                  Ayo Pesan Sekarang & Dapatkan Diskonnya!
                </h2>
                <p className="text-orange-50 text-lg opacity-90">
                  Dapatkan info promo menarik dan menu baru setiap hari langsung di email kamu.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Input
                    placeholder="Masukkan email kamu..."
                    className="h-14 bg-white/10 border-white/20 text-white placeholder:text-orange-100 rounded-2xl focus-visible:ring-white"
                  />
                  <Button className="h-14 px-8 bg-white text-orange-500 hover:bg-orange-50 font-bold text-lg rounded-2xl">
                    Subscribe
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop"
                  alt="CTA Food"
                  className="rounded-[2.5rem] shadow-2xl rotate-3"
                />
              </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 size-64 bg-orange-400 rounded-full blur-[100px] -mr-32 -mt-32 opacity-50" />
            <div className="absolute bottom-0 left-0 size-64 bg-white/10 rounded-full blur-[80px] -ml-32 -mb-32" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-24 pb-12 bg-slate-50 border-t">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-orange-500 p-2 rounded-xl text-white">
                  <ShoppingCart className="size-6" />
                </div>
                <span className="text-2xl font-bold tracking-tight">Foody<span className="text-orange-500">Go</span></span>
              </div>
              <p className="text-slate-500 leading-relaxed">
                Platform pemesanan makanan tercepat dan terpercaya di Indonesia. Kami menghadirkan rasa restoran ke rumahmu.
              </p>
              <div className="flex gap-4">
                {[1, 2, 3].map((_, i) => (
                  <a key={i} href="#" className="size-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all">
                    <span className="text-xs font-bold">Soc</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Our Menu</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Restaurants</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Support</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-slate-500">
                <li className="flex items-center gap-3">
                  <MapPin className="size-5 text-orange-500 shrink-0" />
                  <span>Jl. Makanan Enak No. 123, Jakarta, Indonesia</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="size-5 text-orange-500 shrink-0" />
                  <span>Available 24/7</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="bg-slate-200 mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p>© 2026 FoodyGo. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-600">Privacy</a>
              <a href="#" className="hover:text-slate-600">Terms</a>
              <a href="#" className="hover:text-slate-600">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
