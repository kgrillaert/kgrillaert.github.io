
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Activity, Cpu, BarChart2, Info, ArrowRight } from 'lucide-react';

// --- FEDERATED LEARNING DIAGRAM ---
import { Layers, Building2, Landmark, ShieldCheck, Lock, Network, Brain } from 'lucide-react';

export const FederatedLearningDiagram: React.FC = () => {
  const banks = [
    { name: 'Bank A', angle: -30 },
    { name: 'Bank B', angle: 30 },
    { name: 'Bank C', angle: 90 },
    { name: 'Bank D', angle: 150 },
    { name: 'Bank E', angle: 210 },
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-xl border border-stone-100 my-8 overflow-hidden relative min-h-[500px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.03)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="relative z-10 text-center mb-12">
        <h3 className="font-serif text-2xl mb-2 text-stone-900">The Federated Learning Network</h3>
        <p className="text-xs text-stone-400 font-bold uppercase tracking-[0.2em]">Consensus by Goose FL</p>
      </div>

      <div className="relative w-full max-w-md h-[340px] flex items-center justify-center">
        {/* Background Orbits */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute w-72 h-72 rounded-full border border-stone-200 border-dashed opacity-40"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-56 h-56 rounded-full border border-stone-200 border-dashed opacity-20"
        />

        {/* Outer Circular Aura for Center */}
        <motion.div 
           animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
           transition={{ duration: 4, repeat: Infinity }}
           className="absolute w-40 h-40 rounded-full bg-nobel-gold/20 blur-2xl"
        />

        {/* Global Hub (Center) */}
        <div className="relative z-20">
          <motion.div 
            animate={{ boxShadow: ["0 0 20px rgba(197,160,89,0.2)", "0 0 40px rgba(197,160,89,0.4)", "0 0 20px rgba(197,160,89,0.2)"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-24 h-24 rounded-full bg-gradient-to-br from-kycomm-blue to-nobel-gold flex items-center justify-center text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <Layers size={40} className="relative z-10 drop-shadow-md" />
          </motion.div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-nobel-gold uppercase tracking-widest whitespace-nowrap">Global Intelligence</div>
        </div>

        {/* Banks & Connections */}
        {banks.map((bank, index) => {
          const radius = 140;
          const x = Math.cos((bank.angle * Math.PI) / 180) * radius;
          const y = Math.sin((bank.angle * Math.PI) / 180) * radius;

          return (
            <React.Fragment key={bank.name}>
              {/* Connection Line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400" preserveAspectRatio="none">
                <g transform="translate(200, 200)">
                    <motion.line 
                       x1="0" y1="0" 
                       x2={x} y2={y} 
                       stroke="#E5E7EB" 
                       strokeWidth="1.5"
                       initial={{ pathLength: 0, opacity: 0 }}
                       animate={{ pathLength: 1, opacity: 1 }}
                       transition={{ duration: 1.5, delay: index * 0.1 }}
                    />
                    
                    {/* Moving Data Pulse */}
                    <motion.circle
                      r="3"
                      fill="#C5A059"
                      animate={{ 
                        cx: [0, x], 
                        cy: [0, y],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: index * 0.4,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.circle
                      r="3"
                      fill="#1E293B"
                      animate={{ 
                        cx: [x, 0], 
                        cy: [y, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: index * 0.4 + 1,
                        ease: "easeInOut"
                      }}
                    />
                </g>
              </svg>

              {/* Bank Node */}
              <motion.div 
                style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group"
              >
                <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                    className="w-16 h-16 rounded-xl bg-white border border-stone-200 shadow-lg flex flex-col items-center justify-center gap-1 group-hover:border-nobel-gold/50 transition-colors"
                 >
                    <Landmark size={20} className="text-stone-400 group-hover:text-nobel-gold transition-colors" />
                    <span className="text-[10px] font-bold text-stone-400 group-hover:text-stone-600 transition-colors">{bank.name}</span>
                    
                    {/* Small Status Indicator */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-nobel-gold rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                        <ShieldCheck size={8} className="text-white" />
                    </div>
                 </motion.div>
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>

      <div className="mt-16 flex items-center justify-center gap-10">
          <div className="flex flex-col items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-nobel-gold animate-pulse"></div>
            <span className="text-[9px] font-bold uppercase tracking-tighter text-stone-400">Global Model</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-kycomm-blue animate-pulse"></div>
            <span className="text-[9px] font-bold uppercase tracking-tighter text-stone-400">Local Update</span>
          </div>
      </div>
    </div>
  );
};

// --- PRIVACY PRESERVING DIAGRAM ---
export const PrivacyPreservingDiagram: React.FC = () => {
    return (
        <div className="w-full mt-24 mb-12">
            <div className="text-center mb-16">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">The Privacy Architecture</h3>
                <p className="text-stone-400 max-w-2xl mx-auto font-light leading-relaxed">
                    A multi-stage cryptographic pipeline ensuring no raw data is ever exposed or traceable.
                </p>
            </div>

            <div className="relative">
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-[40px] left-0 right-0 h-[1px] bg-stone-700/50 z-0" />
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10 w-full">
                    {/* Step 1: Local Privacy */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-[#161616] border border-stone-700 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden group">
                           {/* Server / Vault representation */}
                           <div className="absolute inset-2 border border-stone-600 rounded-xl" />
                           <div className="absolute inset-4 border border-stone-500/50 rounded-lg" />
                           <Lock size={20} className="text-stone-400 relative z-10 opacity-50" />
                           
                           {/* Pulsing data points restricted within */}
                           <motion.div 
                               className="absolute w-2 h-2 bg-nobel-gold rounded-full"
                               animate={{ x: [-8, 8, -8], y: [-8, 8, 8, -8], opacity: [0.3, 1, 0.3] }}
                               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                           />
                           <motion.div 
                               className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full"
                               animate={{ x: [8, -8, 8], y: [6, -6, 6], opacity: [0.2, 0.8, 0.2] }}
                               transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                           />
                        </div>
                        <h4 className="font-bold text-sm text-nobel-gold mb-3">1. Local Privacy</h4>
                        <p className="text-[12px] text-stone-400 leading-relaxed font-light">
                            Raw transaction records and sensitive data never leave the source financial institution.
                        </p>
                    </div>

                    {/* Step 2: Secure Aggregation */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-[#161616] border border-stone-700 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden group">
                            {/* Masked Data passing through Neutral Hub */}
                            <motion.div 
                                className="absolute left-0 w-full flex flex-col gap-1 items-center justify-center"
                                animate={{ y: [20, -20] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            >
                                <div className="w-8 h-1 bg-green-500/80 rounded" />
                                <div className="w-6 h-1 bg-green-500/60 rounded" />
                                <div className="w-10 h-1 bg-green-500/70 rounded" />
                                <div className="w-4 h-1 bg-green-500/50 rounded" />
                                <div className="w-8 h-1 bg-green-500/90 rounded" />
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-[#161616]" />
                            <div className="absolute border border-green-500/30 w-12 h-12 rounded-lg rotate-45 z-10 backdrop-blur-sm" />
                        </div>
                        <h4 className="font-bold text-sm text-nobel-gold mb-3">2. Secure Aggregation</h4>
                        <p className="text-[12px] text-stone-400 leading-relaxed font-light">
                            Using the Bonawitz protocol, model updates are cryptographically masked before transmission. The central coordinator computes the combined intelligence blindly, ensuring no single institution's contribution is ever visible.
                        </p>
                    </div>

                    {/* Step 3: Noise Injection */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-[#161616] border border-stone-700 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden group">
                            {/* Block from Step 2 */}
                            <div className="absolute border border-green-500/30 w-12 h-12 rounded-lg rotate-45 z-0" />
                            <div className="w-8 h-8 bg-green-500/20 rotate-45 absolute z-0" />

                            {/* Gaussian Noise Effect */}
                            <motion.div 
                                className="absolute inset-0 opacity-60 mix-blend-screen"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                                    backgroundSize: '100% 100%'
                                }}
                                animate={{ opacity: [0.6, 0.4, 0.7, 0.5, 0.8, 0.6] }}
                                transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                        <h4 className="font-bold text-sm text-nobel-gold mb-3">3. Noise Injection</h4>
                        <p className="text-[12px] text-stone-400 leading-relaxed font-light">
                            To mathematically guarantee that individual identities cannot be reverse-engineered, the system injects formally calibrated statistical noise (Gaussian noise) into the aggregated model.
                        </p>
                    </div>

                    {/* Step 4: Collective Intel */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-stone-900 border border-stone-700 rounded-2xl flex items-center justify-center mb-6 relative group">
                            <ShieldCheck size={32} className="text-white relative z-10" />
                            <motion.div
                                className="absolute inset-0 bg-blue-500/30 rounded-2xl blur-lg z-0"
                                animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.8, 1.2, 0.8] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.div
                                className="absolute inset-0 bg-nobel-gold/20 rounded-2xl blur-md z-0"
                                animate={{ opacity: [0, 0.5, 0], scale: [1, 1.3, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            />
                        </div>
                        <h4 className="font-bold text-sm text-nobel-gold mb-3">4. Collective Intel</h4>
                        <p className="text-[12px] text-stone-400 leading-relaxed font-light">
                            A global fraud signature is built from the aggregate of participating financial institutions, eliminating vulnerabilities without relying on insecure data pools.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- IMPACT PERFORMANCE DIAGRAM ---
const MetricCard = ({ title, value, detail, visual }: any) => {
  return (
    <div className="group relative p-6 bg-[#161616] rounded-xl border border-stone-800 hover:border-nobel-gold/30 hover:bg-stone-800/80 transition-all duration-300 overflow-hidden flex flex-col items-center text-center h-[280px]">
      {/* Front State (Visible by default) */}
      <div className="absolute inset-0 p-6 flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
        <div className="flex-1 flex items-center justify-center w-full">
          {visual ? visual : <div className="text-4xl font-serif text-nobel-gold">{value}</div>}
        </div>
        <h4 className="font-bold uppercase text-xs tracking-widest text-stone-300 mt-4">{title}</h4>
        <div className="absolute top-4 right-4 text-stone-600 transition-colors">
          <Info size={16} />
        </div>
      </div>
      
      {/* Back State (Visible on Hover) */}
      <div className="absolute inset-0 p-6 flex flex-col items-center justify-center bg-stone-900/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 border border-nobel-gold/20">
         <h4 className="font-bold uppercase text-[10px] tracking-widest text-nobel-gold mb-4">{title}</h4>
         <p className="text-[13px] text-stone-300 leading-relaxed font-light">
             {detail}
         </p>
      </div>
    </div>
  )
}

const RingChart = () => (
  <div className="relative w-32 h-32 flex items-center justify-center">
    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" fill="transparent" stroke="rgba(197,160,89,0.1)" strokeWidth="6" />
      <motion.circle
        cx="50" cy="50" r="40" fill="transparent" stroke="#C5A059" strokeWidth="6"
        strokeLinecap="round"
        initial={{ strokeDasharray: "0 251.2" }}
        whileInView={{ strokeDasharray: "226.08 251.2" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-2xl font-serif text-nobel-gold">~90%</span>
    </div>
  </div>
);

const HeartbeatPulse = () => (
  <div className="flex flex-col items-center justify-center gap-4">
    <div className="text-2xl font-serif text-nobel-gold">&lt; 200ms</div>
    <div className="w-32 h-12 flex items-center justify-center relative opacity-80">
       <svg className="w-full h-full" viewBox="0 0 100 40" fill="none" stroke="rgba(197,160,89,0.2)" strokeWidth="2">
          <path d="M 0 20 L 30 20 L 40 5 L 50 35 L 60 20 L 100 20" />
       </svg>
       <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 40" fill="none" stroke="#C5A059" strokeWidth="2" style={{ filter: "drop-shadow(0 0 4px rgba(197,160,89,0.5))" }}>
         <motion.path 
            d="M 0 20 L 30 20 L 40 5 L 50 35 L 60 20 L 100 20"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
         />
       </motion.svg>
    </div>
  </div>
);

const ParityChart = () => (
  <div className="flex items-end justify-center h-40 pt-8 gap-8 mt-2">
      {/* Small Institution */}
      <div className="flex flex-col flex-1 items-center gap-3">
          <div className="w-16 bg-stone-800 rounded-t-sm h-8 relative flex items-end justify-center pb-2 border-t border-stone-700">
             <div className="absolute -top-7 text-[10px] text-stone-500 font-medium">Low</div>
          </div>
          <div className="text-[10px] text-stone-500 uppercase tracking-widest text-center h-8">Isolated</div>
      </div>
      
      {/* Arrow */}
      <div className="flex items-center justify-center h-12 text-stone-600 mb-8">
          <ArrowRight size={20} />
      </div>
      
      {/* Networked Institution */}
       <div className="flex flex-col flex-1 items-center gap-3">
          <motion.div 
              className="w-16 bg-gradient-to-t from-nobel-gold/20 to-nobel-gold rounded-t-sm relative flex items-center justify-center shadow-[0_0_20px_rgba(197,160,89,0.2)]"
              initial={{ height: 32 }}
              whileInView={{ height: 112 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          >
             <div className="absolute -top-7 text-[10px] text-nobel-gold font-bold">Parity</div>
          </motion.div>
          <div className="text-[10px] text-nobel-gold uppercase tracking-widest text-center h-8 font-bold">KYCOMM FL Network</div>
      </div>
  </div>
);

export const ImpactPerformanceDiagram: React.FC = () => {
    return (
        <div className="bg-[#111111] text-stone-100 rounded-2xl p-8 md:p-12 shadow-2xl border border-stone-800 text-left">
            <h3 className="font-serif text-3xl mb-4 text-nobel-gold">Detection Precision: Validated Network Telemetry</h3>
            <p className="text-stone-400 text-lg mb-12 leading-relaxed max-w-3xl">
                In rigorous pilot simulations, KYComm's federated mesh proved that institutions do not need to compromise data privacy to achieve world-class security.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <MetricCard 
                    title="Fraud Catch Rate" 
                    value="~90%"
                    visual={<RingChart />}
                    detail="By evaluating dynamic Behavioral Personas in parallel, the network catches sophisticated cross-institutional fraud with accuracy equivalent to vulnerable centralized data pools."
                />
                <MetricCard 
                    title="False Positive Rate" 
                    value="< 0.1%"
                    detail="Algorithmic friction drops instantly. Fewer than 1 in 1,000 legitimate transactions are falsely flagged, drastically reducing account freeze complaints and preserving user trust."
                />
                <MetricCard 
                    title="Privacy Guarantee" 
                    value="ϵ≤1.0"
                    detail="Utilizing Differential Privacy and Secure Multiparty Computation, the system achieved a total privacy budget (epsilon) of ~0.89 over 50 training rounds, proving high-performance AI is possible with zero raw data exposure."
                />
                <MetricCard 
                    title="Sub-200ms Latency" 
                    value="< 200ms"
                    visual={<HeartbeatPulse />}
                    detail="Real-time transaction scoring ensures legitimate financial rails flow perfectly without disruption or lag."
                />
            </div>

            <div className="bg-[#161616] rounded-xl border border-stone-800 overflow-hidden flex flex-col md:flex-row">
                <div className="p-8 md:w-1/2 flex flex-col justify-center border-b md:border-b-0 md:border-r border-stone-800">
                    <h4 className="font-bold uppercase text-[10px] tracking-widest text-nobel-gold mb-3">Systemic Parity</h4>
                    <p className="text-[13px] text-stone-400 leading-relaxed font-light">
                        Because intelligence is shared globally, smaller, data-constrained institutions leap from zero independent detection capability to full parity with the network's largest players.
                    </p>
                </div>
                <div className="p-8 md:w-1/2 flex items-center justify-center bg-stone-900/50">
                    <ParityChart />
                </div>
            </div>
        </div>
    )
}

