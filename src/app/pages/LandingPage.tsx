import { useNavigate } from "react-router";
import { Navigation } from "../components/Navigation";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Upload,
  Sparkles,
  Truck,
  BookOpen,
  Heart,
  Star,
  MapPin,
  Calendar,
  Globe,
  ChevronDown,
  Book,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navigation transparent />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2UwZTBlMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-sm text-gray-700">
              AI-Powered Photobook Design
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            Turn your Korea trip into a{" "}
            <span className="italic text-gray-600">premium</span> memory book
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Upload your photos, let AI create a beautiful hardcover photobook,
            and receive your memories at home.
          </p>

          <div className="flex items-center justify-center gap-4 mb-16">
            <Button
              onClick={() => navigate("/upload")}
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-full shadow-lg"
            >
              Create My Book
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg rounded-full border-2"
              onClick={() =>
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              See How It Works
              <ChevronDown className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Sample Book Mockups */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-xl rounded-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-[3/4] relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1721362983312-d7e7ba6c5476?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW91bCUyMGtvcmVhJTIwdHJhdmVsJTIwY2l0eSUyMG5pZ2h0fGVufDF8fHx8MTc3MzY1OTI4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Seoul cityscape"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white text-left">
                    <h3 className="text-2xl mb-1">Seoul Adventures</h3>
                    <p className="text-sm text-white/90">Spring 2026</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden shadow-xl rounded-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-[3/4] relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1652383584194-fd037c931497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNhbiUyMGtvcmVhJTIwdHJhdmVsJTIwdGVtcGxlfGVufDF8fHx8MTc3MzY1OTI4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Busan temple"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white text-left">
                    <h3 className="text-2xl mb-1">Busan Memories</h3>
                    <p className="text-sm text-white/90">Summer 2026</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden shadow-xl rounded-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-[3/4] relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1680002529460-b6b5acf0aa37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWp1JTIwaXNsYW5kJTIwa29yZWElMjBuYXR1cmV8ZW58MXx8fHwxNzczNjU5Mjg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Jeju island"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white text-left">
                    <h3 className="text-2xl mb-1">Jeju Escape</h3>
                    <p className="text-sm text-white/90">Winter 2026</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl tracking-tight mb-4">How it works</h2>
            <p className="text-xl text-gray-600">
              Three simple steps to your premium photobook
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                <Upload className="w-10 h-10 text-gray-900" strokeWidth={1.5} />
              </div>
              <div className="text-6xl text-gray-200 mb-4">01</div>
              <h3 className="text-2xl mb-3">Upload your photos</h3>
              <p className="text-gray-600 leading-relaxed">
                Simply drag and drop 30-100 photos from your Korea trip. Add a
                title and destination.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-gray-900" strokeWidth={1.5} />
              </div>
              <div className="text-6xl text-gray-200 mb-4">02</div>
              <h3 className="text-2xl mb-3">AI designs your book</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI selects the best photos, creates layouts, and generates
                a beautiful first draft.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                <Truck className="w-10 h-10 text-gray-900" strokeWidth={1.5} />
              </div>
              <div className="text-6xl text-gray-200 mb-4">03</div>
              <h3 className="text-2xl mb-3">Get it delivered home</h3>
              <p className="text-gray-600 leading-relaxed">
                Review, customize if needed, checkout, and receive your premium
                hardcover photobook.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Product Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl tracking-tight mb-6">
                Premium hardcover quality
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your memories deserve the finest presentation. Every book is
                professionally printed on premium paper with a luxurious
                hardcover binding.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">Lay-Flat Binding</h4>
                    <p className="text-gray-600">
                      Panoramic spreads without center creases for uninterrupted
                      viewing
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">Premium Paper</h4>
                    <p className="text-gray-600">
                      Thick, high-quality matte paper that brings your photos to
                      life
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">Durable Cover</h4>
                    <p className="text-gray-600">
                      Hardcover protection ensures your book lasts for generations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1719323934439-0d315c92ca0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYSUyMHBhbGFjZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzM2NTkyODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Premium photobook quality"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white px-8 py-4 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-sm text-gray-600 mb-1">Starting from</div>
                <div className="text-3xl">$89</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl tracking-tight mb-4">
              Why travelers love MemoryBook
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-lg rounded-2xl bg-white">
              <MapPin className="w-12 h-12 text-gray-900 mb-4" strokeWidth={1.5} />
              <h3 className="text-2xl mb-3">Location-Aware Design</h3>
              <p className="text-gray-600 leading-relaxed">
                AI automatically organizes your photos by location and date,
                creating a natural story flow
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg rounded-2xl bg-white">
              <Calendar className="w-12 h-12 text-gray-900 mb-4" strokeWidth={1.5} />
              <h3 className="text-2xl mb-3">Timeline Integration</h3>
              <p className="text-gray-600 leading-relaxed">
                Optional timeline pages show your journey through Korea day by
                day
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg rounded-2xl bg-white">
              <Globe className="w-12 h-12 text-gray-900 mb-4" strokeWidth={1.5} />
              <h3 className="text-2xl mb-3">Worldwide Shipping</h3>
              <p className="text-gray-600 leading-relaxed">
                We ship to over 50 countries. Your memories delivered to your
                doorstep
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl tracking-tight mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Premium quality at an honest price
          </p>

          <Card className="p-12 border-2 border-gray-900 rounded-3xl shadow-2xl">
            <div className="mb-8">
              <div className="text-6xl mb-2">$89</div>
              <div className="text-gray-600">20-30 pages (10-15 spreads)</div>
            </div>

            <div className="space-y-3 text-left max-w-md mx-auto mb-10">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">AI-powered photo selection & layout</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">Premium hardcover binding</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">Lay-flat professional binding</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">Free worldwide shipping over $150</span>
              </div>
            </div>

            <Button
              onClick={() => navigate("/upload")}
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-6 text-lg rounded-full w-full max-w-sm"
            >
              Start Creating
            </Button>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl tracking-tight mb-4">
              Frequently asked questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-white rounded-2xl px-6 border-0 shadow-sm"
            >
              <AccordionTrigger className="text-left text-lg hover:no-underline py-6">
                How many photos should I upload?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                We recommend uploading 30-100 photos. Our AI will select the best
                ones and create a cohesive story. Don't worry about selecting
                them yourself – that's what our AI is for!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-white rounded-2xl px-6 border-0 shadow-sm"
            >
              <AccordionTrigger className="text-left text-lg hover:no-underline py-6">
                Can I customize the AI-generated design?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                Absolutely! After the AI creates your first draft, you can edit
                the title, subtitle, reorder photos, change the cover image,
                adjust layouts, and more. You have full control.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-white rounded-2xl px-6 border-0 shadow-sm"
            >
              <AccordionTrigger className="text-left text-lg hover:no-underline py-6">
                How long does shipping take?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                Production takes 5-7 business days. International shipping
                typically takes 7-14 days depending on your location. You'll
                receive tracking information once your book ships.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-white rounded-2xl px-6 border-0 shadow-sm"
            >
              <AccordionTrigger className="text-left text-lg hover:no-underline py-6">
                What if I'm not happy with the result?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                We offer a 100% satisfaction guarantee. If you're not completely
                happy with your photobook, we'll work with you to make it right
                or provide a full refund.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-white rounded-2xl px-6 border-0 shadow-sm"
            >
              <AccordionTrigger className="text-left text-lg hover:no-underline py-6">
                Can I add extra pages?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                Yes! During the product options step, you can add extra spreads
                for $8 per spread (2 pages). Our books can accommodate up to 50
                spreads (100 pages).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl tracking-tight mb-6">
            Ready to preserve your Korea memories?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Start creating your premium photobook in just a few minutes
          </p>
          <Button
            onClick={() => navigate("/upload")}
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-6 text-lg rounded-full shadow-xl"
          >
            Create My Book
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Book className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
                <span className="text-lg">MemoryBook</span>
              </div>
              <p className="text-sm text-gray-600">
                Premium hardcover photobooks for your Korea travel memories
              </p>
            </div>
            <div>
              <h4 className="mb-4">Product</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>
                  <button onClick={() => navigate("/upload")}>
                    Create Book
                  </button>
                </div>
                <div>
                  <button onClick={() => navigate("/faq")}>FAQ</button>
                </div>
              </div>
            </div>
            <div>
              <h4 className="mb-4">Account</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>
                  <button onClick={() => navigate("/my-orders")}>
                    My Orders
                  </button>
                </div>
                <div>
                  <button onClick={() => navigate("/account")}>
                    My Account
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h4 className="mb-4">Support</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>Contact Us</div>
                <div>Shipping Info</div>
                <div>Returns</div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
            © 2026 MemoryBook. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}