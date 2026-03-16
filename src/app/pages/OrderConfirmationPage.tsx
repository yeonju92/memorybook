import { useNavigate } from "react-router";
import { Navigation } from "../components/Navigation";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { CheckCircle, Package, Truck, Mail, Home } from "lucide-react";

export function OrderConfirmationPage() {
  const navigate = useNavigate();
  const orderId = "MB-" + Math.random().toString(36).substring(2, 10).toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Success Message */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" strokeWidth={2} />
          </div>
          <h1 className="text-5xl tracking-tight mb-4">Order confirmed!</h1>
          <p className="text-xl text-gray-600">
            Thank you for your order. We'll start working on your photobook right
            away.
          </p>
        </div>

        {/* Order Details */}
        <Card className="p-8 border-0 shadow-lg rounded-2xl bg-white mb-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl">Order Details</h3>
            <div className="text-right">
              <div className="text-sm text-gray-600">Order Number</div>
              <div className="text-xl font-mono">{orderId}</div>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="space-y-6">
            <div>
              <div className="text-sm text-gray-600 mb-1">Book Title</div>
              <div className="text-xl">Seoul Adventures</div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-sm text-gray-600 mb-1">Product</div>
                <div>Premium Hardcover Photobook</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Format</div>
                <div>10" × 12" Landscape</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-sm text-gray-600 mb-1">Pages</div>
                <div>24 pages (12 spreads)</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Theme</div>
                <div>Elegant</div>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Photobook</span>
              <span>$89.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Shipping</span>
              <span>$15.00</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between text-xl">
              <span>Total Paid</span>
              <span>$104.00</span>
            </div>
          </div>
        </Card>

        {/* Shipping Information */}
        <Card className="p-8 border-0 shadow-lg rounded-2xl bg-white mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Truck className="w-6 h-6 text-gray-600" />
            <h3 className="text-2xl">Shipping Information</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-600 mb-1">Shipping To</div>
              <div>
                <div>John Smith</div>
                <div className="text-gray-600">123 Main Street</div>
                <div className="text-gray-600">New York, NY 10001</div>
                <div className="text-gray-600">United States</div>
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Estimated Delivery</div>
              <div className="text-xl mb-2">March 30 - April 6, 2026</div>
              <div className="text-sm text-gray-600">
                You'll receive a tracking number when your order ships
              </div>
            </div>
          </div>
        </Card>

        {/* What's Next */}
        <Card className="p-8 border-0 shadow-lg rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
          <h3 className="text-2xl mb-6">What happens next?</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg mb-1">Order Confirmation Email</h4>
                <p className="text-gray-700">
                  We've sent a confirmation email with your order details to your
                  inbox
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Package className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="text-lg mb-1">Production Begins</h4>
                <p className="text-gray-700">
                  Our team will professionally print and bind your photobook (5-7
                  business days)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="text-lg mb-1">Shipping Updates</h4>
                <p className="text-gray-700">
                  You'll receive tracking information once your book ships
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="px-8 py-6 text-lg rounded-full border-2"
          >
            <Home className="w-5 h-5 mr-2" />
            Return Home
          </Button>
          <Button
            onClick={() => navigate(`/order-tracking/${orderId}`)}
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-full"
          >
            Track Order
          </Button>
        </div>
      </div>
    </div>
  );
}
