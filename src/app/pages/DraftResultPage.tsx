import { useNavigate } from "react-router";
import { Navigation } from "../components/Navigation";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Sparkles, BookOpen, Edit, RefreshCw, Eye } from "lucide-react";

const mockCover = "https://images.unsplash.com/photo-1721362983312-d7e7ba6c5476?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW91bCUyMGtvcmVhJTIwdHJhdmVsJTIwY2l0eSUyMG5pZ2h0fGVufDF8fHx8MTc3MzY1OTI4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const mockSpreads = [
  {
    left: "https://images.unsplash.com/photo-1719323934439-0d315c92ca0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYSUyMHBhbGFjZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzM2NTkyODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    right: "https://images.unsplash.com/photo-1544032659-d12c28f0a38a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYSUyMGhhbmJvayUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc3MzY1OTI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    left: "https://images.unsplash.com/photo-1570365473297-4a454f76ff0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYSUyMHN0cmVldCUyMGZvb2QlMjBtYXJrZXR8ZW58MXx8fHwxNzczNjU5Mjg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    right: "https://images.unsplash.com/photo-1738220387654-2fd93247f841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYSUyMGNoZXJyeSUyMGJsb3Nzb20lMjBzcHJpbmd8ZW58MXx8fHwxNzczNjU5Mjg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    left: "https://images.unsplash.com/photo-1652383584194-fd037c931497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNhbiUyMGtvcmVhJTIwdHJhdmVsJTIwdGVtcGxlfGVufDF8fHx8MTc3MzY1OTI4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    right: "https://images.unsplash.com/photo-1680002529460-b6b5acf0aa37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWp1JTIwaXNsYW5kJTIwa29yZWElMjBuYXR1cmV8ZW58MXx8fHwxNzczNjU5Mjg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function DraftResultPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-sm text-green-700">Draft Ready</span>
          </div>
          <h1 className="text-5xl tracking-tight mb-4">
            Your photobook is ready! ✨
          </h1>
          <p className="text-xl text-gray-600">
            Our AI has created a beautiful first draft for you to review
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Cover Preview */}
          <div>
            <Card className="overflow-hidden shadow-2xl rounded-2xl mb-6">
              <div className="aspect-[3/4] relative bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center p-12">
                <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src={mockCover}
                    alt="Book cover"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
                    <div className="text-white">
                      <h2 className="text-4xl mb-2">Seoul Adventures</h2>
                      <p className="text-xl text-white/90">Spring 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex items-center gap-3">
              <Button
                onClick={() => navigate("/preview")}
                className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-6 text-lg rounded-full"
              >
                <Eye className="w-5 h-5 mr-2" />
                Full Preview
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/edit")}
                className="px-6 py-6 rounded-full border-2"
              >
                <Edit className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Book Details */}
          <div>
            <Card className="p-8 border-0 shadow-lg rounded-2xl bg-white mb-6">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-purple-500" />
                <h3 className="text-2xl">Book Details</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Title</div>
                  <div className="text-xl">Seoul Adventures</div>
                </div>

                <div>
                  <div className="text-sm text-gray-600 mb-1">Subtitle</div>
                  <div className="text-xl">Spring 2026</div>
                </div>

                <div>
                  <div className="text-sm text-gray-600 mb-1">Theme</div>
                  <Badge variant="secondary" className="text-base px-4 py-1">
                    Elegant
                  </Badge>
                </div>

                <div>
                  <div className="text-sm text-gray-600 mb-1">Pages</div>
                  <div className="text-xl">24 pages (12 spreads)</div>
                </div>

                <div>
                  <div className="text-sm text-gray-600 mb-1">Photos Used</div>
                  <div className="text-xl">32 of 48 uploaded</div>
                </div>

                <div>
                  <div className="text-sm text-gray-600 mb-1">Format</div>
                  <div className="text-xl">
                    10" × 12" Landscape Hardcover
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <Button
                onClick={() => navigate("/edit")}
                variant="outline"
                className="py-6 text-lg rounded-full border-2"
              >
                <Edit className="w-5 h-5 mr-2" />
                Edit Book
              </Button>
              <Button
                variant="outline"
                className="py-6 text-lg rounded-full border-2"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Regenerate
              </Button>
            </div>

            <Button
              onClick={() => navigate("/product-options")}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white py-6 text-lg rounded-full"
            >
              Continue to Options
            </Button>
          </div>
        </div>

        {/* Spread Previews */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl">Preview Spreads</h3>
            <Button
              variant="outline"
              onClick={() => navigate("/preview")}
              className="rounded-full"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              View All Pages
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mockSpreads.map((spread, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-lg rounded-2xl cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => navigate("/preview")}
              >
                <div className="aspect-[2/1] flex">
                  <div className="flex-1 relative">
                    <ImageWithFallback
                      src={spread.left}
                      alt={`Spread ${index + 1} left`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 relative">
                    <ImageWithFallback
                      src={spread.right}
                      alt={`Spread ${index + 1} right`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-4 bg-white border-t border-gray-100">
                  <div className="text-sm text-gray-600">
                    Spread {index + 1}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
