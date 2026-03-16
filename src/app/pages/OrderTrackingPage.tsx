import { useParams, useNavigate } from "react-router";
import { Navigation } from "../components/Navigation";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import {
  CheckCircle,
  Circle,
  Package,
  Printer,
  Truck,
  Home,
  Mail,
} from "lucide-react";

const statusSteps = [
  {
    id: "received",
    icon: CheckCircle,
    title: "Order Received",
    description: "We've received your order",
    date: "March 16, 2026",
    completed: true,
  },
  {
    id: "processing",
    icon: Package,
    title: "Processing",
    description: "Preparing your photobook files",
    date: "March 16, 2026",
    completed: true,
  },
  {
    id: "printing",
    icon: Printer,
    title: "In Production",
    description: "Printing and binding your book",
    date: "March 18, 2026",
    completed: true,
  },
  {
    id: "shipped",
    icon: Truck,
    title: "Shipped",
    description: "On the way to you",
    date: "Expected March 23, 2026",
    completed: false,
  },
  {
    id: "delivered",
    icon: Home,
    title: "Delivered",
    description: "Enjoy your memories",
    date: "Expected March 30, 2026",
    completed: false,
  },
];

export function OrderTrackingPage() {
  const { orderId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <Button
            variant="ghost"
            onClick={() => navigate("/my-orders")}
            className="mb-4 -ml-4"
          >
            ← Back to My Orders
          </Button>
          <h1 className="text-5xl tracking-tight mb-4">Track Your Order</h1>
          <div className="flex items-center gap-4">
            <p className="text-xl text-gray-600">Order #{orderId}</p>
            <Badge variant="secondary" className="text-base px-4 py-1">
              In Production
            </Badge>
          </div>
        </div>

        {/* Order Status Timeline */}
        <Card className="p-8 border-0 shadow-lg rounded-2xl bg-white mb-6">
          <h3 className="text-2xl mb-8">Order Status</h3>

          <div className="relative">
            {statusSteps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === statusSteps.length - 1;

              return (
                <div key={step.id} className="relative pb-12 last:pb-0">
                  {!isLast && (
                    <div
                      className={`absolute left-6 top-12 bottom-0 w-0.5 ${
                        step.completed ? "bg-green-500" : "bg-gray-200"
                      }`}
                    />
                  )}

                  <div className="flex items-start gap-6">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                        step.completed
                          ? "bg-green-100"
                          : "bg-gray-100"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          step.completed ? "text-green-600" : "text-gray-400"
                        }`}
                        strokeWidth={2}
                      />
                    </div>

                    <div className="flex-1 pt-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-xl mb-1">{step.title}</h4>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                        <div
                          className={`text-sm ${
                            step.completed ? "text-gray-900" : "text-gray-500"
                          }`}
                        >
                          {step.date}
                        </div>
                      </div>

                      {step.id === "printing" && step.completed && (
                        <div className="mt-4 p-4 bg-blue-50 rounded-xl">
                          <p className="text-sm text-blue-700">
                            Your photobook is being professionally printed on
                            premium paper with lay-flat binding. This process
                            typically takes 5-7 business days to ensure the highest
                            quality.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Order Details */}
        <Card className="p-8 border-0 shadow-lg rounded-2xl bg-white mb-6">
          <h3 className="text-2xl mb-6">Order Details</h3>

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
                <div className="text-sm text-gray-600 mb-1">Order Date</div>
                <div>March 16, 2026</div>
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
              <span>Total</span>
              <span>$104.00</span>
            </div>
          </div>
        </Card>

        {/* Shipping Details */}
        <Card className="p-8 border-0 shadow-lg rounded-2xl bg-white mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Truck className="w-6 h-6 text-gray-600" />
            <h3 className="text-2xl">Shipping Details</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-600 mb-1">Shipping Address</div>
              <div>
                <div>John Smith</div>
                <div className="text-gray-600">123 Main Street</div>
                <div className="text-gray-600">New York, NY 10001</div>
                <div className="text-gray-600">United States</div>
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Shipping Method</div>
              <div className="mb-4">Standard Shipping</div>
              <div className="text-sm text-gray-600 mb-1">
                Estimated Delivery
              </div>
              <div className="text-xl">March 30 - April 6, 2026</div>
            </div>
          </div>
        </Card>

        {/* Support */}
        <Card className="p-6 border-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h4 className="text-lg mb-2">Need Help?</h4>
              <p className="text-gray-700 mb-4">
                If you have any questions about your order, our support team is
                here to help.
              </p>
              <Button variant="outline" className="rounded-full">
                Contact Support
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
