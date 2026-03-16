import { useNavigate } from "react-router";
import { Navigation } from "../components/Navigation";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Input } from "../components/ui/input";
import { MessageSquare, Search, Mail } from "lucide-react";

export function FAQPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about creating your photobook
          </p>
        </div>

        {/* Search */}
        <Card className="p-4 border-0 shadow-lg rounded-2xl bg-white mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search for answers..."
              className="pl-12 py-6 text-lg rounded-xl border-0"
            />
          </div>
        </Card>

        {/* FAQ Categories */}
        <div className="space-y-8 mb-12">
          <div>
            <h2 className="text-2xl mb-4">Getting Started</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="bg-white rounded-2xl px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg hover:no-underline py-6">
                  How many photos should I upload?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  We recommend uploading 30-100 photos for the best results. Our
                  AI will analyze all your photos and select the best ones to
                  create a cohesive story. The minimum is 10 photos, but uploading
                  more gives the AI more options to work with. Don't worry about
                  selecting them yourself – that's what our AI is for!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-2xl px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg hover:no-underline py-6">
                  What file formats are supported?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  We support all common image formats including JPG, PNG, HEIC,
                  and RAW files. For the best print quality, we recommend
                  high-resolution images (at least 1920x1080 pixels). Our system
                  will automatically optimize your photos for printing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-2xl px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg hover:no-underline py-6">
                  How long does the AI design process take?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  The AI design process typically takes 30-60 seconds. During
                  this time, our AI analyzes your photos for composition,
                  lighting, and emotional impact, selects the best images,
                  creates beautiful layouts, and applies your chosen theme. You'll
                  see real-time progress updates during the process.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <h2 className="text-2xl mb-4">Customization</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-4"
                className="bg-white rounded-2xl px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg hover:no-underline py-6">
                  Can I customize the AI-generated design?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  Absolutely! After the AI creates your first draft, you have
                  full control to customize it. You can edit the title and
                  subtitle, change the cover image, reorder photos, add or remove
                  pages, adjust layouts, toggle captions on/off, add timeline or
                  map pages, and change the theme. Think of the AI design as a
                  perfect starting point that you can refine to match your vision.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-2xl px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg hover:no-underline py-6">
                  What themes are available?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  We offer three carefully designed themes: Elegant (minimal and
                  refined), Vibrant (bold and colorful), and Classic (timeless
                  and traditional). Each theme has been professionally designed to
                  showcase travel photography beautifully. You can change themes
                  at any time during the editing process.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-2xl px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg hover:no-underline py-6">
                  Can I save my work and come back later?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  Yes! You can save your photobook as a draft at any time. Your
                  draft will be stored in your account under "My Account" →
                  "Saved Drafts" where you can continue editing whenever you're
                  ready. Drafts are saved automatically as you make changes.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <h2 className="text-2xl mb-4">Product & Quality</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-7"
                className="bg-white rounded-2xl px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg hover:no-underline py-6">
                  What is the book size and format?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  Our photobooks are 10" × 12" landscape format hardcover books.
                  This size is perfect for showcasing travel photography with
                  impact while still being easy to display and share. The base
                  book includes 24 pages (12 spreads), and you can add extra
                  spreads during the product options step.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-8"
                className="bg-white rounded-2xl px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg hover:no-underline py-6">
                  What makes your photobooks premium quality?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  Our photobooks feature professional lay-flat binding so your
                  panoramic spreads display without center creases, premium linen
                  hardcover with matte finish for durability and elegance, 200gsm
                  premium matte photo paper that brings colors to life,
                  high-resolution 300 DPI printing for stunning detail, and
                  professional printing and binding that ensures your book lasts
                  for generations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-9"
                className="bg-white rounded-2xl px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg hover:no-underline py-6">
                  Can I add extra pages?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  Yes! During the product options step, you can add extra spreads
                  for $8 per spread (2 pages). Our books can accommodate up to 50
                  spreads (100 pages) total. This is perfect if you want to
                  include more photos or add special pages like timelines or maps.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <h2 className="text-2xl mb-4">Shipping & Delivery</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-10"
                className="bg-white rounded-2xl px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg hover:no-underline py-6">
                  How long does shipping take?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  Production takes 5-7 business days from order confirmation.
                  After production, standard international shipping typically
                  takes 7-14 business days, while express shipping takes 3-5
                  business days. You'll receive tracking information once your
                  book ships. Total time from order to delivery is typically 2-3
                  weeks with standard shipping.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-11"
                className="bg-white rounded-2xl px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg hover:no-underline py-6">
                  Do you ship internationally?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  Yes! We ship to over 50 countries worldwide. Shipping costs are
                  calculated during checkout based on your location. We offer
                  free worldwide shipping on orders over $150. All packages are
                  fully tracked and insured.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-12"
                className="bg-white rounded-2xl px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg hover:no-underline py-6">
                  Can I track my order?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  Yes! You can track your order at any time from "My Orders" in
                  your account. You'll see the current status (processing,
                  printing, shipped, delivered) and receive email notifications
                  at each stage. Once shipped, you'll get a tracking number to
                  follow your package's journey.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <h2 className="text-2xl mb-4">Pricing & Payments</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-13"
                className="bg-white rounded-2xl px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg hover:no-underline py-6">
                  How much does a photobook cost?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  The base price is $89 for a 24-page (12 spreads) premium
                  hardcover photobook. You can add extra spreads for $8 per
                  spread. Optional add-ons include premium gift packaging ($12)
                  and personalized message card ($5). Shipping costs are added
                  during checkout based on your location and chosen shipping
                  method.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-14"
                className="bg-white rounded-2xl px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg hover:no-underline py-6">
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  We accept all major credit cards (Visa, Mastercard, American
                  Express, Discover). All payments are processed securely with
                  SSL encryption. Your payment information is never stored on our
                  servers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-15"
                className="bg-white rounded-2xl px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg hover:no-underline py-6">
                  What if I'm not happy with my photobook?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  We offer a 100% satisfaction guarantee. If you're not
                  completely happy with your photobook, contact us within 30 days
                  of receiving it. We'll work with you to make it right or
                  provide a full refund. Your satisfaction is our priority.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Contact Support */}
        <Card className="p-8 border-0 shadow-lg rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="w-8 h-8 text-purple-600" strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl mb-3">Still have questions?</h3>
          <p className="text-gray-700 mb-6 max-w-md mx-auto">
            Our support team is here to help you create the perfect photobook
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              className="rounded-full px-8"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Support
            </Button>
            <Button
              onClick={() => navigate("/upload")}
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8"
            >
              Start Creating
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
