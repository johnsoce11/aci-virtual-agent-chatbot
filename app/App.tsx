"use client";

import { useCallback } from "react";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";
import { useColorScheme } from "@/hooks/useColorScheme";
import Image from "next/image";

export default function App() {
  const { scheme, setScheme } = useColorScheme();

  const handleWidgetAction = useCallback(async (action: FactAction) => {
    if (process.env.NODE_ENV !== "production") {
      console.info("[ChatKitPanel] widget action", action);
    }
  }, []);

  const handleResponseEnd = useCallback(() => {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[ChatKitPanel] response end");
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <header className="w-full border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-6 py-6">
          <div className="flex items-center gap-6">
            <Image
              src="/logo.webp"
              alt="Logo"
              width={432}
              height={432}
              className="shadow-sm"
              priority
            />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              ACI Virtual Agent
            </h1>
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <div className="flex flex-1 items-end justify-center px-4 pb-8 pt-6">
        <div className="w-full max-w-5xl">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden">
            <ChatKitPanel
              theme={scheme}
              onWidgetAction={handleWidgetAction}
              onResponseEnd={handleResponseEnd}
              onThemeRequest={setScheme}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
