"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Mail, ChevronRight, MapPin, Sparkles, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F49440]/30 to-transparent"></div>

      {/* Advanced background effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#F49440]/20 to-[#FF6B35]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-[#F49440]/15 to-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-[#F49440]/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-screen"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`
             }}></div>
      </div>
      
      <div className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header section with sparkle effect */}
          {/* <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 mb-6">
              <Sparkles className="text-[#F49440] animate-spin" size={20} />
              <span className="text-gray-400 text-sm uppercase tracking-widest font-light">Let's Connect & Create</span>
              <Sparkles className="text-[#F49440] animate-spin" size={20} />
            </div>
          </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Brand Section - Enhanced with more visual impact */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-6">
                <div className="relative">
                  <h3 className="text-5xl  heading font-bold bg-white bg-clip-text text-transparent animate-gradient bg-300% leading-tight">
                    KIRAN KHAN
                  </h3>
                  {/* Glowing underline effect */}
                  <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-[#F49440] to-transparent rounded-full shadow-lg shadow-[#F49440]/50"></div>
                </div>
                
                <div className="space-y-1">
                  <p className=" text-xs uppercase tracking-[0.2em] font-medium text-[#F49440]">
                    Interdisciplinary Fibre Artist
                  </p>
                  <p className="text-gray-400 text-xs uppercase tracking-[0.15em]">
                    30+ Years of Creative Excellence
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-xl font-light max-w-lg">
                Head of department Textile Fashion & Accessories <br /> Beaconhouse
                National University (BNU). Transforming traditional crafts into contemporary art forms.
              </p>
              
              {/* Enhanced contact info with glassmorphism */}
              <div className="space-y-4 pt-6">
                <div className="group flex items-center space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#F49440]/30 transition-all duration-500 hover:bg-white/10">
                  <div className="p-2 bg-[#F49440]/20 rounded-full">
                    <MapPin size={16} className="text-[#F49440]" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Based in</p>
                    <p className="text-gray-400 text-sm">Lahore, Pakistan</p>
                  </div>
                </div>
                
                <div className="group flex items-center space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#F49440]/30 transition-all duration-500 hover:bg-white/10">
                  <div className="p-2 bg-[#F49440]/20 rounded-full">
                    <Mail size={16} className="text-[#F49440]" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a
                      href="mailto:kiranfkhan@gmail.com"
                      className="text-gray-400 text-sm hover:text-[#F49440] transition-colors duration-300"
                    >
                      kiranfkhan@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Links - Ultra modern design */}
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-4">
                <h4 className="text-3xl font-bold text-white relative">
                  Explore
                  <div className="absolute -bottom-1 left-0 w-16 h-0.5 bg-gradient-to-r from-[#F49440] to-transparent rounded-full"></div>
                </h4>
              </div>
              
              <nav className="space-y-3">
                {[
                  { href: "/", label: "Home", desc: "Welcome & Overview" },
                  { href: "/profile", label: "Profile", desc: "My Journey & Vision" },
                  { href: "/exhibitions", label: "Exhibitions", desc: "Gallery & Shows" },
                  { href: "/death-of-booti", label: "Death of Boti", desc: "Featured Project" },
                  { href: "/womenifesto", label: "Womenifesto", desc: "Empowerment Initiative" }
                ].map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="group block p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#F49440]/30 transition-all duration-500 hover:bg-white/10 hover:transform hover:translate-x-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg font-semibold text-white group-hover:text-[#F49440] transition-colors duration-300">
                            {link.label}
                          </span>
                        </div>
                        <p className="text-gray-500 text-xs group-hover:text-gray-400 transition-colors duration-300">
                          {link.desc}
                        </p>
                      </div>
                      <ArrowUpRight 
                        size={18} 
                        className="text-gray-600 group-hover:text-[#F49440] transform group-hover:rotate-45 transition-all duration-300" 
                      />
                    </div>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Social Media & Connect - Premium design */}
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-4">
                <h4 className="text-3xl font-bold text-white relative">
                  Connect
                  <div className="absolute -bottom-1 left-0 w-16 h-0.5 bg-gradient-to-r from-[#F49440] to-transparent rounded-full"></div>
                </h4>
              </div>

              <div className="space-y-8">
                <p className="text-gray-300 text-lg font-light leading-relaxed">
                  Ready to collaborate on something extraordinary? Let's bring your vision to life.
                </p>

                {/* Premium social icons */}
                <div className="grid grid-cols-3 gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-square flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-[#F49440] transition-all duration-500 transform hover:scale-110 hover:rotate-3 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F49440]/0 to-[#F49440]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Facebook size={24} className="relative z-10 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                  
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-square flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-[#F49440] transition-all duration-500 transform hover:scale-110 hover:-rotate-3 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F49440]/0 to-[#F49440]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Instagram size={24} className="relative z-10 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                  
                  <a
                    href="mailto:kiranfkhan@gmail.com"
                    className="group relative aspect-square flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-[#F49440] transition-all duration-500 transform hover:scale-110 hover:rotate-3 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F49440]/0 to-[#F49440]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Mail size={24} className="relative z-10 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                </div>

                {/* Premium CTA button */}
                <div className="pt-4">
                  <a
                    href="mailto:kiranfkhan@gmail.com"
                    className="group inline-flex items-center justify-center w-full space-x-3 px-8 py-4 bg-gradient-to-r from-[#F49440] to-[#FF6B35] text-black font-bold rounded-2xl hover:shadow-2xl hover:shadow-[#F49440]/25 transition-all duration-500 transform hover:scale-105 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                    <Mail size={20} className="relative z-10" />
                    <span className="relative font-medium text-sm z-10">Start a Conversation</span>
                    <ArrowUpRight size={18} className="relative z-10 transform group-hover:rotate-45 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Ultra premium */}
          <div className="relative mt-20 pt-8">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F49440]/30 to-transparent"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-500 text-sm font-light">
                  © {new Date().getFullYear()} Kiran Khan. All rights reserved.
                </p>
                <p className="text-gray-600 text-xs mt-1">
                  Crafted with passion & precision
                </p>
              </div>
              
              <div className="flex items-center space-x-8 text-sm">
                <Link 
                  href="/privacy" 
                  className="text-gray-500 hover:text-[#F49440] transition-colors duration-300 relative group"
                >
                  Privacy Policy
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-[#F49440] group-hover:w-full transition-all duration-300"></div>
                </Link>
                <div className="w-px h-4 bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
                <Link 
                  href="/terms" 
                  className="text-gray-500 hover:text-[#F49440] transition-colors duration-300 relative group"
                >
                  Terms of Service
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-[#F49440] group-hover:w-full transition-all duration-300"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
        .bg-300\\% {
          background-size: 300% 300%;
        }
      `}</style>
    </footer>
  );
};

export default Footer;