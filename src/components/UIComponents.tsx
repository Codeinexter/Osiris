"use client";
import { cn, nicheColors, statusColors } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export function StatCard({ label, value, icon: Icon, trend }: { label: string; value: string; icon?: LucideIcon; trend?: string }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500 font-medium">{label}</p>
          <p className="text-3xl font-bold mt-1 font-display">{value}</p>
          {trend && <p className="text-xs text-green-600 mt-1 font-medium">{trend}</p>}
        </div>
        {Icon && (
          <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-brand" />
          </div>
        )}
      </div>
    </div>
  );
}

export function TagPill({ label, type = "niche" }: { label: string; type?: "niche" | "status" }) {
  const colors = type === "status" ? statusColors : nicheColors;
  return (
    <span className={cn("inline-flex px-3 py-1 rounded-full text-xs font-medium", colors[label] || "bg-gray-100 text-gray-700")}>
      {label}
    </span>
  );
}

export function EmptyState({ title, description, action }: { title: string; description: string; action?: React.ReactNode }) {
  return (
    <div className="text-center py-16">
      <div className="w-16 h-16 rounded-full bg-gray-100 mx-auto flex items-center justify-center mb-4">
        <span className="text-2xl">📭</span>
      </div>
      <h3 className="font-display text-xl font-bold">{title}</h3>
      <p className="text-gray-500 text-sm mt-2 max-w-sm mx-auto">{description}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

export function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div className="fixed bottom-6 right-6 z-[100] bg-gray-900 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5">
      <span className="text-sm font-medium">{message}</span>
      <button onClick={onClose} className="text-gray-400 hover:text-white text-lg">×</button>
    </div>
  );
}
