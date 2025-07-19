import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 to-white">
      {/* Background SVG Pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' stroke=\\'%23d1fae5\\' stroke-width=\\'1\\'%3E%3Cpath d=\\'M0 0h60v60H0z\\'/%3E%3Cpath d=\\'M30 0v60M0 30h60\\'/%3E%3C/g%3E%3C/svg%3E')] bg-cover"
        ></div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-xl px-4"
      >
        <h1 className="text-7xl md:text-9xl font-bold text-emerald-600 tracking-wide drop-shadow">
          404
        </h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-deep-blue">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-600 text-md md:text-lg">
          The page you're looking for might have been moved, deleted, or never existed.
        </p>
        <Link
          to="/"
          className="inline-flex items-center mt-6 px-6 py-3 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition shadow-md"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go back home
        </Link>
      </motion.div>
    </div>
  );
}
