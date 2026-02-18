"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-white text-black min-h-screen overflow-hidden">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#00000008,_transparent_50%),_radial-gradient(ellipse_at_bottom_left,_#00000008,_transparent_50%)]" />
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 min-h-screen flex items-center">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <span className="text-xs tracking-[0.2em] uppercase text-gray-400">
                Full-Stack Meal Ordering Platform
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl font-light leading-[1.1] sm:text-7xl"
            >
              Order Smart.
              <br />
              <span className="font-bold text-black">Eat Better.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-base text-gray-500 max-w-md leading-relaxed"
            >
              MealMate connects customers and food providers in one seamless ecosystem.
              Browse menus, manage orders, and track delivery in real time.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex gap-4"
            >
              <button className="px-8 py-3 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-900 transition-colors">
                Browse Meals
              </button>
              <button className="px-8 py-3 border border-gray-300 text-sm font-medium rounded-md hover:border-black transition-colors">
                Become a Provider →
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-16 flex gap-12"
            >
              {[
                { value: "10K+", label: "Orders Delivered" },
                { value: "500+", label: "Active Providers" },
                { value: "4.8★", label: "User Rating" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                >
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-1 tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-xl">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <span className="text-sm font-medium">Active Order</span>
                </div>
                <span className="text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                  #MM-2048
                </span>
              </div>

              {/* Order Progress */}
              <div className="space-y-5">
                {[
                  { label: "Order Placed", time: "12:30 PM", status: "completed" },
                  { label: "Preparing", time: "12:35 PM", status: "active" },
                  { label: "Ready for Pickup", time: "~12:50 PM", status: "upcoming" },
                  { label: "Delivered", time: "~1:00 PM", status: "upcoming" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        item.status === "completed" ? "bg-black" :
                        item.status === "active" ? "bg-black animate-pulse" :
                        "bg-gray-300"
                      }`} />
                      <span className={`text-sm ${
                        item.status === "completed" ? "text-black" :
                        item.status === "active" ? "text-black font-medium" :
                        "text-gray-400"
                      }`}>
                        {item.label}
                      </span>
                    </div>
                    <span className={`text-xs ${
                      item.status === "completed" ? "text-gray-600" :
                      item.status === "active" ? "text-black" :
                      "text-gray-300"
                    }`}>
                      {item.time}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Order Details */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Total Items</span>
                  <span className="text-sm font-medium">2 items</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-500">Est. Delivery</span>
                  <span className="text-sm font-medium">15-20 min</span>
                </div>
              </div>
            </div>

            {/* Floating Card - Popular Item */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl border border-gray-200 px-5 py-3 shadow-lg"
            >
              <div className="text-xs text-gray-400 mb-1">Popular today</div>
              <div className="text-sm font-medium flex items-center gap-2">
                <span>Chicken Biryani</span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-600">$14.99</span>
              </div>
            </motion.div>

            {/* Floating Card - Provider Status */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
              className="absolute -top-4 -right-4 bg-white rounded-xl border border-gray-200 px-5 py-3 shadow-lg"
            >
              <div className="text-xs text-gray-400 mb-1">Active providers</div>
              <div className="text-sm font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                <span>247 online now</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Simple scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border border-gray-300 rounded-full flex justify-center"
        >
          <div className="w-1 h-1.5 bg-gray-400 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}