import { useNavigate } from "react-router";
import { Navigation } from "../components/Navigation";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Package, Plus, Eye } from "lucide-react";

const mockOrders = [
  {
    id: "MB-8F3A2K9P",
    title: "Seoul Adventures",
    status: "In Production",
    statusColor: "bg-blue-100 text-blue-700",
    image: "https://images.unsplash.com/photo-1721362983312-d7e7ba6c5476?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW91bCUyMGtvcmVhJTIwdHJhdmVsJTIwY2l0eSUyMG5pZ2h0fGVufDF8fHx8MTc3MzY1OTI4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    orderDate: "March 16, 2026",
    total: "$104.00",
    estimatedDelivery: "March 30 - April 6",
  },
  {
    id: "MB-7K2P4M1S",
    title: "Busan Memories",
    status: "Delivered",
    statusColor: "bg-green-100 text-green-700",
    image: "https://images.unsplash.com/photo-1652383584194-fd037c931497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNhbiUyMGtvcmVhJTIwdHJhdmVsJTIwdGVtcGxlfGVufDF8fHx8MTc3MzY1OTI4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    orderDate: "February 10, 2026",
    total: "$89.00",
    estimatedDelivery: "Delivered Feb 28",
  },
];

export function MyOrdersPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-5xl tracking-tight mb-4">My Orders</h1>
            <p className="text-xl text-gray-600">
              Track and manage your photobook orders
            </p>
          </div>
          <Button
            onClick={() => navigate("/upload")}
            className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8"
          >
            <Plus className="w-5 h-5 mr-2" />
            Create New Book
          </Button>
        </div>

        {mockOrders.length > 0 ? (
          <div className="space-y-6">
            {mockOrders.map((order) => (
              <Card
                key={order.id}
                className="p-6 border-0 shadow-lg rounded-2xl bg-white hover:shadow-xl transition-shadow"
              >
                <div className="flex gap-6">
                  <div className="w-32 h-40 flex-shrink-0 rounded-xl overflow-hidden shadow-md">
                    <ImageWithFallback
                      src={order.image}
                      alt={order.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl">{order.title}</h3>
                          <Badge className={order.statusColor}>
                            {order.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600">
                          Order #{order.id}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl mb-1">{order.total}</div>
                        <div className="text-sm text-gray-600">
                          {order.orderDate}
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <div className="text-gray-600 mb-1">Product</div>
                        <div>Premium Hardcover • 10" × 12"</div>
                      </div>
                      <div>
                        <div className="text-gray-600 mb-1">
                          {order.status === "Delivered"
                            ? "Delivered"
                            : "Estimated Delivery"}
                        </div>
                        <div>{order.estimatedDelivery}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        onClick={() => navigate(`/order-tracking/${order.id}`)}
                        className="rounded-full"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      {order.status === "Delivered" && (
                        <Button
                          variant="outline"
                          onClick={() => navigate("/upload")}
                          className="rounded-full"
                        >
                          Reorder
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-16 border-0 shadow-lg rounded-2xl bg-white text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Package className="w-10 h-10 text-gray-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl mb-3">No orders yet</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Start creating your first premium photobook and preserve your Korea
              travel memories.
            </p>
            <Button
              onClick={() => navigate("/upload")}
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8"
            >
              Create Your First Book
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
}
