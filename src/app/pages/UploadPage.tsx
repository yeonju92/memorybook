import { useState } from "react";
import { useNavigate } from "react-router";
import { Navigation } from "../components/Navigation";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Progress } from "../components/ui/progress";
import { Upload, X, Check, AlertCircle, Image as ImageIcon } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";

export function UploadPage() {
  const navigate = useNavigate();
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [bookTitle, setBookTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [theme, setTheme] = useState("elegant");

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFiles = Array.from(e.dataTransfer.files).filter((file) =>
      file.type.startsWith("image/")
    );
    setFiles((prev) => [...prev, ...droppedFiles]);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files).filter((file) =>
        file.type.startsWith("image/")
      );
      setFiles((prev) => [...prev, ...selectedFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (files.length < 10) {
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => navigate("/processing"), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const isValid = files.length >= 10 && bookTitle && destination;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-5xl tracking-tight mb-4">Create your photobook</h1>
          <p className="text-xl text-gray-600">
            Upload your photos and let AI create something beautiful
          </p>
        </div>

        {/* Upload Area */}
        <Card className="p-8 mb-8 border-2 border-dashed border-gray-300 bg-white rounded-2xl">
          <div
            className={`${
              dragActive ? "bg-gray-100 border-gray-400" : ""
            } transition-colors`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {files.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Upload className="w-10 h-10 text-gray-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl mb-3">Drop your photos here</h3>
                <p className="text-gray-600 mb-6">
                  or click to browse your files
                </p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileInput}
                  className="hidden"
                  id="file-input"
                />
                <label htmlFor="file-input">
                  <Button
                    asChild
                    variant="outline"
                    className="px-8 py-6 text-lg rounded-full border-2"
                  >
                    <span className="cursor-pointer">Choose Files</span>
                  </Button>
                </label>
                <p className="text-sm text-gray-500 mt-4">
                  Recommended: 30-100 photos (minimum 10)
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl">{files.length} photos selected</h3>
                      <p className="text-sm text-gray-600">
                        {files.length < 10 && "Upload at least 10 photos"}
                        {files.length >= 10 && files.length < 30 && "Good! Add more for best results"}
                        {files.length >= 30 && files.length <= 100 && "Perfect amount!"}
                        {files.length > 100 && "Consider removing some (max 100 recommended)"}
                      </p>
                    </div>
                  </div>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileInput}
                    className="hidden"
                    id="file-input-more"
                  />
                  <label htmlFor="file-input-more">
                    <Button variant="outline" asChild className="rounded-full">
                      <span className="cursor-pointer">Add More</span>
                    </Button>
                  </label>
                </div>

                <div className="grid grid-cols-6 gap-4 max-h-96 overflow-y-auto">
                  {files.map((file, index) => (
                    <div key={index} className="relative group aspect-square">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Upload ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <button
                        onClick={() => removeFile(index)}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Book Details */}
        {files.length > 0 && (
          <Card className="p-8 mb-8 border-0 shadow-lg rounded-2xl bg-white">
            <h3 className="text-2xl mb-6">Book details</h3>

            <div className="space-y-6">
              <div>
                <Label htmlFor="title" className="text-base mb-2 block">
                  Book Title *
                </Label>
                <Input
                  id="title"
                  placeholder="e.g., Seoul Adventures"
                  value={bookTitle}
                  onChange={(e) => setBookTitle(e.target.value)}
                  className="text-lg py-6 rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="destination" className="text-base mb-2 block">
                  Destination *
                </Label>
                <Input
                  id="destination"
                  placeholder="e.g., Seoul, South Korea"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="text-lg py-6 rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="subtitle" className="text-base mb-2 block">
                  Subtitle (optional)
                </Label>
                <Input
                  id="subtitle"
                  placeholder="e.g., Spring 2026"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  className="text-lg py-6 rounded-xl"
                />
              </div>

              <div>
                <Label className="text-base mb-4 block">Choose a theme</Label>
                <RadioGroup value={theme} onValueChange={setTheme}>
                  <div className="grid md:grid-cols-3 gap-4">
                    <label
                      htmlFor="elegant"
                      className={`cursor-pointer ${
                        theme === "elegant" ? "ring-2 ring-gray-900" : ""
                      } rounded-xl overflow-hidden border-2 border-gray-200 transition-all hover:border-gray-400`}
                    >
                      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                        <span className="text-2xl text-gray-400">Aa</span>
                      </div>
                      <div className="p-4 flex items-center gap-3">
                        <RadioGroupItem value="elegant" id="elegant" />
                        <div>
                          <div className="font-medium">Elegant</div>
                          <div className="text-sm text-gray-600">
                            Minimal & refined
                          </div>
                        </div>
                      </div>
                    </label>

                    <label
                      htmlFor="vibrant"
                      className={`cursor-pointer ${
                        theme === "vibrant" ? "ring-2 ring-gray-900" : ""
                      } rounded-xl overflow-hidden border-2 border-gray-200 transition-all hover:border-gray-400`}
                    >
                      <div className="aspect-video bg-gradient-to-br from-amber-100 to-rose-50 flex items-center justify-center">
                        <span className="text-2xl text-amber-600">Aa</span>
                      </div>
                      <div className="p-4 flex items-center gap-3">
                        <RadioGroupItem value="vibrant" id="vibrant" />
                        <div>
                          <div className="font-medium">Vibrant</div>
                          <div className="text-sm text-gray-600">
                            Bold & colorful
                          </div>
                        </div>
                      </div>
                    </label>

                    <label
                      htmlFor="classic"
                      className={`cursor-pointer ${
                        theme === "classic" ? "ring-2 ring-gray-900" : ""
                      } rounded-xl overflow-hidden border-2 border-gray-200 transition-all hover:border-gray-400`}
                    >
                      <div className="aspect-video bg-gradient-to-br from-slate-100 to-blue-50 flex items-center justify-center">
                        <span className="text-2xl text-slate-600">Aa</span>
                      </div>
                      <div className="p-4 flex items-center gap-3">
                        <RadioGroupItem value="classic" id="classic" />
                        <div>
                          <div className="font-medium">Classic</div>
                          <div className="text-sm text-gray-600">
                            Timeless & traditional
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </Card>
        )}

        {/* Upload Progress */}
        {uploading && (
          <Card className="p-8 mb-8 border-0 shadow-lg rounded-2xl bg-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Upload className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl mb-2">Uploading photos...</h3>
                <Progress value={uploadProgress} className="h-2" />
              </div>
              <div className="text-2xl text-gray-400">{uploadProgress}%</div>
            </div>
          </Card>
        )}

        {/* Validation Messages */}
        {files.length > 0 && files.length < 10 && !uploading && (
          <Card className="p-6 mb-8 border-0 bg-amber-50 rounded-2xl">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-lg mb-1 text-amber-900">
                  Upload at least 10 photos
                </h4>
                <p className="text-amber-700">
                  You've uploaded {files.length} photo{files.length !== 1 ? "s" : ""}. Add at least{" "}
                  {10 - files.length} more to continue.
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="px-8 py-6 text-lg rounded-full border-2"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!isValid || uploading}
            className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-6 text-lg rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {uploading ? "Uploading..." : "Continue to AI Design"}
          </Button>
        </div>

        {/* Info Box */}
        <Card className="p-6 mt-8 border-0 bg-blue-50 rounded-2xl">
          <div className="flex items-start gap-3">
            <ImageIcon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-lg mb-1 text-blue-900">Photo tips</h4>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• Upload high-resolution images (at least 1920x1080 recommended)</li>
                <li>• Mix of landscape, portrait, and detail shots works best</li>
                <li>• Our AI will automatically enhance and optimize your photos</li>
                <li>• You can edit, reorder, or remove photos after AI design</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
