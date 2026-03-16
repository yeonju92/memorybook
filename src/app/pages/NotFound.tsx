import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-9xl mb-4 text-gray-200">404</div>
        <h1 className="text-5xl tracking-tight mb-4">Page not found</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have
          been moved or deleted.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="px-8 py-6 text-lg rounded-full border-2"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
          <Button
            onClick={() => navigate("/")}
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-full"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
