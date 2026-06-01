"use client";

import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <div className="max-w-md w-full text-center">
    
        <div className="flex justify-center mb-6">
          <div className="p-5 rounded-full bg-error/10">
            <AlertTriangle className="w-16 h-16 text-error" />
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-3">
          Something went wrong!
        </h1>

        <p className="text-base-content/70 mb-2">
          An unexpected error occurred while loading this page.
        </p>

        {error?.message && (
          <p className="text-sm text-error mb-6">
            {error.message}
          </p>
        )}

    
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="btn btn-primary"
          >
            <RefreshCw size={18} />
            Try Again
          </button>

          <Link href="/" className="btn btn-outline">
            <Home size={18} />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}