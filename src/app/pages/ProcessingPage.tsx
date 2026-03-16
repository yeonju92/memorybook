import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Navigation } from "../components/Navigation";
import { Card } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Sparkles, Image, Layout, Palette, Check } from "lucide-react";

const steps = [
  {
    icon: Image,
    title: "Analyzing photos",
    description: "Detecting subjects, quality, and composition",
  },
  {
    icon: Sparkles,
    title: "Selecting best images",
    description: "Choosing the most impactful moments",
  },
  {
    icon: Layout,
    title: "Generating layouts",
    description: "Creating beautiful page spreads",
  },
  {
    icon: Palette,
    title: "Finalizing design",
    description: "Applying your chosen theme",
  },
];

export function ProcessingPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate processing steps
    const stepDuration = 2000; // 2 seconds per step
    const progressInterval = 50; // Update progress every 50ms

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + (100 / (stepDuration / progressInterval)) * steps.length;
      });
    }, progressInterval);

    const stepTimer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(stepTimer);
          setTimeout(() => navigate("/draft-result"), 1000);
          return prev;
        }
        return prev + 1;
      });
    }, stepDuration);

    return () => {
      clearInterval(progressTimer);
      clearInterval(stepTimer);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-8 animate-pulse">
            <Sparkles className="w-12 h-12 text-white" strokeWidth={1.5} />
          </div>
          <h1 className="text-5xl tracking-tight mb-4">
            Creating your photobook...
          </h1>
          <p className="text-xl text-gray-600">
            Our AI is working its magic. This will take about 30 seconds.
          </p>
        </div>

        <Card className="p-8 mb-8 border-0 shadow-lg rounded-2xl bg-white">
          <Progress value={progress} className="h-3 mb-8" />

          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === currentStep;
              const isComplete = index < currentStep;

              return (
                <div
                  key={index}
                  className={`flex items-start gap-4 transition-all ${
                    isActive
                      ? "scale-105"
                      : isComplete
                      ? "opacity-60"
                      : "opacity-30"
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all ${
                      isComplete
                        ? "bg-green-100"
                        : isActive
                        ? "bg-blue-100 animate-pulse"
                        : "bg-gray-100"
                    }`}
                  >
                    {isComplete ? (
                      <Check className="w-7 h-7 text-green-600" strokeWidth={2} />
                    ) : (
                      <Icon
                        className={`w-7 h-7 ${
                          isActive ? "text-blue-600" : "text-gray-400"
                        }`}
                        strokeWidth={1.5}
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-1">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {isActive && (
                    <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                      <span className="text-sm text-blue-700">Processing</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="p-6 border-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
          <div className="text-center">
            <p className="text-gray-700">
              💡 <strong>Did you know?</strong> Our AI analyzes composition,
              lighting, and emotional impact to select photos that tell your
              story best.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
