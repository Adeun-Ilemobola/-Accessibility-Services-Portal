import { LoaderCircle, Sparkles } from "lucide-react";
import React from "react";

const PHRASES = [
  "Fetching awesomeness…",
  "Waking up the database…",
  "Polishing pixels…",
  "Mixing the colors…",
  "Chasing down the bits…",
  "Serving up your data…",
];

export default function Loading() {
  const phrase = PHRASES[Math.floor(Math.random() * PHRASES.length)]
      

  return (
    <div className="relative flex-1 flex flex-col items-center justify-center min-h-full w-full py-12">
      {/* Centered Loader + Glow together */}
      <div className="relative flex items-center justify-center w-32 h-32">
        {/* Loader Icon using text-primary */}
        <LoaderCircle
          size={64}
          className="relative z-10 animate-spin text-primary drop-shadow-lg"
          strokeWidth={1}
        />
        {/* Sparkles overlay using text-accent */}
        <Sparkles
          size={28}
          strokeWidth={1.5}
          className="absolute z-20 -top-4 -right-4 text-accent animate-bounce"
        />
      </div>
      {/* Animated Gradient Text using theme colors */}
      {( phrase) && (
        <h2
          className="mt-6 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x"
          style={{
            backgroundSize: "200% auto",
            animation: "gradient-x 2.5s linear infinite alternate",
          }}
        >
          { phrase}
        </h2>
      )}
      <style>
        {`
          @keyframes gradient-x {
            0% { background-position: 0% 50%;}
            100% { background-position: 100% 50%;}
          }
        `}
      </style>
    </div>
  );
}
