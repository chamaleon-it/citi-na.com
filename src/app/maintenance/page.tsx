"use client";

import { motion } from "framer-motion";
import { Cpu, Clock } from "lucide-react";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen w-full bg-slate-950 flex flex-col justify-between items-center text-white relative overflow-hidden font-sans px-4">
      {/* Premium Background Grid Mesh */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(rgba(15, 118, 110, 0.15) 1px, transparent 1px), radial-gradient(rgba(200, 155, 60, 0.08) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          backgroundPosition: "0 0, 16px 16px"
        }}
      />

      {/* Glowing Ambient Ambient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-[130px] -z-10 pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.03, 0.06, 0.03]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute -bottom-40 left-1/4 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[120px] -z-10 pointer-events-none"
      />

      {/* Top spacing */}
      <div className="h-10 w-full" />

      {/* Main Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-lg bg-slate-900/40 backdrop-blur-2xl border border-white/[0.05] rounded-3xl p-8 md:p-12 text-center shadow-2xl relative z-10 my-auto"
      >
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          System Optimization Underway
        </motion.div>

        {/* Concentric Rotating Orbital Graphics */}
        <div className="relative w-28 h-28 mx-auto mb-8 flex items-center justify-center">
          {/* Outer Orbital Ring - Spins clockwise */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-emerald-500/20"
          />
          {/* Inner Orbital Ring - Spins counter-clockwise */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border border-dotted border-amber-500/30"
          />
          {/* Inner Core Circle */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 15px rgba(15, 118, 110, 0.2)",
                "0 0 30px rgba(15, 118, 110, 0.4)",
                "0 0 15px rgba(15, 118, 110, 0.2)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center relative z-10"
          >
            <Cpu className="w-7 h-7 text-emerald-400" />
          </motion.div>
        </div>

        {/* Messaging Text */}
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
          Website under Maintenance
        </h1>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
          We are currently updating our systems and polishing our digital portal to provide you with faster performance and smoother staffing solutions. We'll be back shortly.
        </p>

        {/* Premium Progress Bar */}
        <div className="space-y-2 mb-8">
          <div className="flex justify-between text-xs font-semibold tracking-wider uppercase text-slate-500 px-1">
            <span>Optimization Stage</span>
            <span className="text-amber-500">85% Complete</span>
          </div>
          <div className="w-full bg-slate-950/80 rounded-full h-2 p-[2px] border border-white/[0.04]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
              className="bg-gradient-to-r from-emerald-500 to-amber-500 h-full rounded-full shadow-inner"
            />
          </div>
        </div>
      </motion.div>

      {/* Footer Info (Plain text, no brand logo) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="w-full max-w-7xl border-t border-white/[0.03] py-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-500 relative z-10"
      >
        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5" />
          <span>Scheduled upgrade window: Jul 8, 2026</span>
        </div>
      </motion.div>
    </div>
  );
}
