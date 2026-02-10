"use client";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export default function OnboardingStepper({ steps, currentStep }: { steps: string[]; currentStep: number }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {steps.map((label, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all",
            i < currentStep ? "bg-brand text-white" : i === currentStep ? "bg-brand text-white ring-4 ring-brand/20" : "bg-gray-200 text-gray-500"
          )}>
            {i < currentStep ? <Check className="w-4 h-4" /> : i + 1}
          </div>
          <span className={cn("text-xs font-medium hidden sm:inline", i <= currentStep ? "text-gray-900" : "text-gray-400")}>{label}</span>
          {i < steps.length - 1 && <div className={cn("w-8 h-0.5 mx-1", i < currentStep ? "bg-brand" : "bg-gray-200")} />}
        </div>
      ))}
    </div>
  );
}
