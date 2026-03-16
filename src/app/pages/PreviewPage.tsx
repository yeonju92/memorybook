import { useState } from "react";
import { useNavigate } from "react-router";
import { Navigation } from "../components/Navigation";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ChevronLeft, ChevronRight, Check, ArrowLeft } from "lucide-react";

const mockPages = [
  {
    type: "cover",
    image: "https://images.unsplash.com/photo-1721362983312-d7e7ba6c5476?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW91bCUyMGtvcmVhJTIwdHJhdmVsJTIwY2l0eSUyMG5pZ2h0fGVufDF8fHx8MTc3MzY1OTI4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Seoul Adventures",
    subtitle: "Spring 2026",
  },
  {
    type: "spread",
    left: "https://images.unsplash.com/photo-1719323934439-0d315c92ca0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYSUyMHBhbGFjZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzM2NTkyODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    right: "https://images.unsplash.com/photo-1544032659-d12c28f0a38a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYSUyMGhhbmJvayUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc3MzY1OTI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    type: "spread",
    left: "https://images.unsplash.com/photo-1570365473297-4a454f76ff0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYSUyMHN0cmVldCUyMGZvb2QlMjBtYXJrZXR8ZW58MXx8fHwxNzczNjU5Mjg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    right: "https://images.unsplash.com/photo-1738220387654-2fd93247f841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYSUyMGNoZXJyeSUyMGJsb3Nzb20lMjBzcHJpbmd8ZW58MXx8fHwxNzczNjU5Mjg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    type: "spread",
    left: "https://images.unsplash.com/photo-1652383584194-fd037c931497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNhbiUyMGtvcmVhJTIwdHJhdmVsJTIwdGVtcGxlfGVufDF8fHx8MTc3MzY1OTI4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    right: "https://images.unsplash.com/photo-1680002529460-b6b5acf0aa37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWp1JTIwaXNsYW5kJTIwa29yZWElMjBuYXR1cmV8ZW58MXx8fHwxNzczNjU5Mjg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function PreviewPage() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < mockPages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentSpread = mockPages[currentPage];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/edit")}
            className="text-white hover:bg-white/10 rounded-full"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Edit
          </Button>
          <div className="flex items-center gap-4">
            <div className="text-white text-sm">
              Page {currentPage + 1} of {mockPages.length}
            </div>
            <Button
              onClick={() => navigate("/product-options")}
              className="bg-white hover:bg-gray-100 text-gray-900 rounded-full px-8"
            >
              <Check className="w-4 h-4 mr-2" />
              Looks Good
            </Button>
          </div>
        </div>

        {/* Preview Area */}
        <div className="relative">
          <Card className="bg-gray-800 border-0 p-8 rounded-3xl shadow-2xl">
            {currentSpread.type === "cover" ? (
              <div className="aspect-[3/4] max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-700 to-gray-600 p-12">
                <div className="w-full h-full bg-white rounded-lg overflow-hidden relative">
                  <ImageWithFallback
                    src={currentSpread.image}
                    alt="Book cover"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-10">
                    <div className="text-white">
                      <h2 className="text-5xl mb-3">{currentSpread.title}</h2>
                      <p className="text-2xl text-white/90">
                        {currentSpread.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="aspect-[2/1] max-w-6xl mx-auto flex gap-1 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex-1 relative bg-white">
                  <ImageWithFallback
                    src={currentSpread.left}
                    alt="Left page"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 relative bg-white">
                  <ImageWithFallback
                    src={currentSpread.right}
                    alt="Right page"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </Card>

          {/* Navigation Arrows */}
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-transform"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>

          <button
            onClick={nextPage}
            disabled={currentPage === mockPages.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-transform"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="mt-8 flex items-center justify-center gap-3 overflow-x-auto pb-4">
          {mockPages.map((page, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`flex-shrink-0 ${
                page.type === "cover" ? "w-16" : "w-32"
              } h-20 rounded-lg overflow-hidden border-2 transition-all ${
                currentPage === index
                  ? "border-white ring-2 ring-white ring-offset-2 ring-offset-gray-900"
                  : "border-gray-600 hover:border-gray-400 opacity-60 hover:opacity-100"
              }`}
            >
              {page.type === "cover" ? (
                <ImageWithFallback
                  src={page.image}
                  alt={`Cover thumbnail`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex h-full">
                  <ImageWithFallback
                    src={page.left}
                    alt={`Spread ${index} left thumbnail`}
                    className="w-1/2 h-full object-cover"
                  />
                  <ImageWithFallback
                    src={page.right}
                    alt={`Spread ${index} right thumbnail`}
                    className="w-1/2 h-full object-cover"
                  />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
