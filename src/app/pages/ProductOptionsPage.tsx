import { useState } from "react";
import { useNavigate } from "react-router";
import { Navigation } from "../components/Navigation";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Switch } from "../components/ui/switch";
import { Label } from "../components/ui/label";
import {
  BookOpen,
  Plus,
  Minus,
  Gift,
  MessageSquare,
  Truck,
  Check,
} from "lucide-react";

export function ProductOptionsPage() {
  const navigate = useNavigate();
  const [extraPages, setExtraPages] = useState(0);
  const [giftPackaging, setGiftPackaging] = useState(false);
  const [messageCard, setMessageCard] = useState(false);

  const basePrice = 89;
  const extraPagePrice = 8;
  const giftPackagingPrice = 12;
  const messageCardPrice = 5;

  const subtotal =
    basePrice +
    extraPages * extraPagePrice +
    (giftPackaging ? giftPackagingPrice : 0) +
    (messageCard ? messageCardPrice : 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-5xl tracking-tight mb-4">Product options</h1>
          <p className="text-xl text-gray-600">
            Customize your photobook and add special touches
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Options */}
          <div className="lg:col-span-2 space-y-6">
            {/* Base Product */}
            <Card className="p-8 border-0 shadow-lg rounded-2xl bg-white">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-gray-900" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-2xl mb-2">Premium Hardcover</h3>
                      <Badge variant="secondary" className="mb-4">
                        10" × 12" Landscape
                      </Badge>
                    </div>
                    <div className="text-2xl">${basePrice}</div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      Lay-flat binding
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      Premium paper
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      24 pages (12 spreads)
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      Hardcover protection
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="mb-4">Material & Quality</h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <p>
                    • <strong>Cover:</strong> Premium linen hardcover with matte
                    finish
                  </p>
                  <p>
                    • <strong>Paper:</strong> 200gsm premium matte photo paper
                  </p>
                  <p>
                    • <strong>Binding:</strong> Professional lay-flat binding for
                    seamless spreads
                  </p>
                  <p>
                    • <strong>Print:</strong> High-resolution 300 DPI printing
                  </p>
                </div>
              </div>
            </Card>

            {/* Extra Pages */}
            <Card className="p-8 border-0 shadow-lg rounded-2xl bg-white">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl mb-2">Extra Pages</h3>
                  <p className="text-gray-600">
                    Add more spreads to tell your complete story
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl">${extraPagePrice}</div>
                  <div className="text-sm text-gray-600">per spread</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setExtraPages(Math.max(0, extraPages - 1))}
                  disabled={extraPages === 0}
                  className="rounded-full w-12 h-12 p-0"
                >
                  <Minus className="w-5 h-5" />
                </Button>
                <div className="flex-1 text-center">
                  <div className="text-3xl">{extraPages}</div>
                  <div className="text-sm text-gray-600">
                    extra spread{extraPages !== 1 ? "s" : ""} (
                    {extraPages * 2} pages)
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setExtraPages(Math.min(15, extraPages + 1))}
                  disabled={extraPages >= 15}
                  className="rounded-full w-12 h-12 p-0"
                >
                  <Plus className="w-5 h-5" />
                </Button>
              </div>

              {extraPages > 0 && (
                <div className="mt-4 p-4 bg-green-50 rounded-xl text-sm text-green-700">
                  Adding {extraPages} spread{extraPages !== 1 ? "s" : ""} for +$
                  {extraPages * extraPagePrice}
                </div>
              )}
            </Card>

            {/* Add-ons */}
            <Card className="p-8 border-0 shadow-lg rounded-2xl bg-white">
              <h3 className="text-2xl mb-6">Optional Add-ons</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Gift className="w-5 h-5 text-gray-600" />
                      <Label className="text-lg">Premium Gift Packaging</Label>
                    </div>
                    <p className="text-sm text-gray-600 ml-8">
                      Beautiful presentation box perfect for gifting
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-xl">${giftPackagingPrice}</div>
                    </div>
                    <Switch
                      checked={giftPackaging}
                      onCheckedChange={setGiftPackaging}
                    />
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <MessageSquare className="w-5 h-5 text-gray-600" />
                      <Label className="text-lg">Personalized Message Card</Label>
                    </div>
                    <p className="text-sm text-gray-600 ml-8">
                      Add a custom message card inside the book
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-xl">${messageCardPrice}</div>
                    </div>
                    <Switch
                      checked={messageCard}
                      onCheckedChange={setMessageCard}
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Delivery Timeline */}
            <Card className="p-8 border-0 shadow-lg rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl mb-2">Delivery Timeline</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>• Production: 5-7 business days</p>
                    <p>• International shipping: 7-14 business days</p>
                    <p>• Free worldwide shipping on orders over $150</p>
                    <p className="text-blue-700">
                      <strong>
                        Estimated delivery: March 30 - April 6, 2026
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-8 border-0 shadow-lg rounded-2xl bg-white sticky top-24">
              <h3 className="text-2xl mb-6">Order Summary</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Hardcover Photobook</span>
                  <span>${basePrice}</span>
                </div>

                {extraPages > 0 && (
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">
                      {extraPages} Extra Spread{extraPages !== 1 ? "s" : ""}
                    </span>
                    <span>${extraPages * extraPagePrice}</span>
                  </div>
                )}

                {giftPackaging && (
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Gift Packaging</span>
                    <span>${giftPackagingPrice}</span>
                  </div>
                )}

                {messageCard && (
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Message Card</span>
                    <span>${messageCardPrice}</span>
                  </div>
                )}
              </div>

              <Separator className="my-6" />

              <div className="flex items-center justify-between text-xl mb-2">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>

              <Button
                onClick={() => navigate("/checkout")}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-6 text-lg rounded-full"
              >
                Continue to Checkout
              </Button>

              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <div className="text-xs text-gray-600 space-y-2">
                  <p className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-green-600" />
                    100% satisfaction guarantee
                  </p>
                  <p className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-green-600" />
                    Secure payment
                  </p>
                  <p className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-green-600" />
                    Free returns within 30 days
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
