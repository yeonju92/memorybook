import { useState } from "react";
import { useNavigate } from "react-router";
import { Navigation } from "../components/Navigation";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Save,
  Eye,
  RotateCcw,
  Image as ImageIcon,
  Type,
  Layout,
  Settings,
  GripVertical,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { toast } from "sonner";

const mockPhotos = [
  "https://images.unsplash.com/photo-1721362983312-d7e7ba6c5476?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW91bCUyMGtvcmVhJTIwdHJhdmVsJTIwY2l0eSUyMG5pZ2h0fGVufDF8fHx8MTc3MzY1OTI4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1719323934439-0d315c92ca0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYSUyMHBhbGFjZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzM2NTkyODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1544032659-d12c28f0a38a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYSUyMGhhbmJvayUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc3MzY1OTI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1570365473297-4a454f76ff0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYSUyMHN0cmVldCUyMGZvb2QlMjBtYXJrZXR8ZW58MXx8fHwxNzczNjU5Mjg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1738220387654-2fd93247f841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYSUyMGNoZXJyeSUyMGJsb3Nzb20lMjBzcHJpbmd8ZW58MXx8fHwxNzczNjU5Mjg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1652383584194-fd037c931497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNhbiUyMGtvcmVhJTIwdHJhdmVsJTIwdGVtcGxlfGVufDF8fHx8MTc3MzY1OTI4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1680002529460-b6b5acf0aa37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWp1JTIwaXNsYW5kJTIwa29yZWElMjBuYXR1cmV8ZW58MXx8fHwxNzczNjU5Mjg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
];

export function EditPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("Seoul Adventures");
  const [subtitle, setSubtitle] = useState("Spring 2026");
  const [showCaptions, setShowCaptions] = useState(true);
  const [showTimeline, setShowTimeline] = useState(true);
  const [showMap, setShowMap] = useState(false);
  const [selectedCover, setSelectedCover] = useState(0);

  const handleSave = () => {
    toast.success("Changes saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="border-b border-gray-200 bg-white sticky top-[73px] z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl">Edit Your Book</h1>
            <p className="text-sm text-gray-600">
              Customize your photobook design
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={handleSave}
              className="rounded-full"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Draft
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/preview")}
              className="rounded-full"
            >
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button
              onClick={() => navigate("/product-options")}
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Editing Panel */}
          <div className="lg:col-span-1">
            <Card className="p-6 border-0 shadow-lg rounded-2xl bg-white sticky top-32">
              <Tabs defaultValue="content" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="content">
                    <Type className="w-4 h-4 mr-2" />
                    Content
                  </TabsTrigger>
                  <TabsTrigger value="layout">
                    <Layout className="w-4 h-4 mr-2" />
                    Layout
                  </TabsTrigger>
                  <TabsTrigger value="settings">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="content" className="space-y-6">
                  <div>
                    <Label htmlFor="edit-title" className="mb-2 block">
                      Book Title
                    </Label>
                    <Input
                      id="edit-title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="rounded-xl"
                    />
                  </div>

                  <div>
                    <Label htmlFor="edit-subtitle" className="mb-2 block">
                      Subtitle
                    </Label>
                    <Input
                      id="edit-subtitle"
                      value={subtitle}
                      onChange={(e) => setSubtitle(e.target.value)}
                      className="rounded-xl"
                    />
                  </div>

                  <div>
                    <Label className="mb-3 block">Cover Photo</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {mockPhotos.slice(0, 6).map((photo, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedCover(index)}
                          className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                            selectedCover === index
                              ? "border-gray-900 ring-2 ring-gray-900 ring-offset-2"
                              : "border-gray-200 hover:border-gray-400"
                          }`}
                        >
                          <ImageWithFallback
                            src={photo}
                            alt={`Cover option ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="layout" className="space-y-6">
                  <div>
                    <Label className="mb-3 block">Theme</Label>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="p-4 border-2 border-gray-900 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 text-left">
                        <div className="text-sm mb-1">Elegant</div>
                        <div className="text-xs text-gray-600">Current</div>
                      </button>
                      <button className="p-4 border-2 border-gray-200 rounded-xl bg-gradient-to-br from-amber-100 to-rose-50 text-left hover:border-gray-400 transition-colors">
                        <div className="text-sm mb-1">Vibrant</div>
                        <div className="text-xs text-gray-600">Available</div>
                      </button>
                    </div>
                  </div>

                  <div>
                    <Label className="mb-3 block">Page Count</Label>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full"
                      >
                        -
                      </Button>
                      <div className="flex-1 text-center">
                        <div className="text-2xl">24</div>
                        <div className="text-xs text-gray-600">pages</div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full"
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="settings" className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <Label className="mb-1 block">Photo Captions</Label>
                      <p className="text-sm text-gray-600">
                        Show date and location
                      </p>
                    </div>
                    <Switch
                      checked={showCaptions}
                      onCheckedChange={setShowCaptions}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <Label className="mb-1 block">Timeline Page</Label>
                      <p className="text-sm text-gray-600">
                        Add day-by-day timeline
                      </p>
                    </div>
                    <Switch
                      checked={showTimeline}
                      onCheckedChange={setShowTimeline}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <Label className="mb-1 block">Map Page</Label>
                      <p className="text-sm text-gray-600">
                        Show location map
                      </p>
                    </div>
                    <Switch checked={showMap} onCheckedChange={setShowMap} />
                  </div>

                  <Button
                    variant="outline"
                    className="w-full rounded-full"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset to AI Default
                  </Button>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Preview Area */}
          <div className="lg:col-span-2">
            <Card className="p-8 border-0 shadow-lg rounded-2xl bg-white mb-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl">Cover Preview</h3>
                <Button variant="outline" size="sm" className="rounded-full">
                  Change Image
                </Button>
              </div>
              <div className="aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-gray-700 p-8">
                <div className="w-full h-full bg-white rounded-lg overflow-hidden relative">
                  <ImageWithFallback
                    src={mockPhotos[selectedCover]}
                    alt="Book cover"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
                    <div className="text-white">
                      <h2 className="text-3xl mb-2">{title}</h2>
                      <p className="text-lg text-white/90">{subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-0 shadow-lg rounded-2xl bg-white">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl">Photo Order</h3>
                <div className="text-sm text-gray-600">
                  Drag to reorder • {mockPhotos.length} photos
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {mockPhotos.map((photo, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-lg overflow-hidden border-2 border-gray-200 hover:border-gray-400 transition-all cursor-move group relative"
                  >
                    <ImageWithFallback
                      src={photo}
                      alt={`Photo ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <GripVertical className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute top-2 left-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs">
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
