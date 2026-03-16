import { Link, useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Book, User, Package } from "lucide-react";

interface NavigationProps {
  transparent?: boolean;
}

export function Navigation({ transparent = false }: NavigationProps) {
  const navigate = useNavigate();

  return (
    <nav
      className={`sticky top-0 z-50 transition-all ${
        transparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-sm border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Book className="w-7 h-7 text-gray-900" strokeWidth={1.5} />
          <span className="text-xl tracking-tight">MemoryBook</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/faq"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            FAQ
          </Link>
          <Link
            to="/my-orders"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
          >
            <Package className="w-4 h-4" />
            My Orders
          </Link>
          <Link
            to="/account"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
          >
            <User className="w-4 h-4" />
            Account
          </Link>
          <Button
            onClick={() => navigate("/upload")}
            className="bg-gray-900 hover:bg-gray-800 text-white px-6 rounded-full"
          >
            Create Book
          </Button>
        </div>
      </div>
    </nav>
  );
}
