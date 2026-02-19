"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

export default function Hero() {
  return (
    <section className=" overflow-hidden px-6 py-16 flex items-center justify-center">
      {/* Content */}
      <div className=" mx-auto max-w-4xl  text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Big Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl font-light leading-tight sm:text-7xl lg:text-8xl"
          >
            Order Smart.
            <br />
            <span className="font-bold text-foreground">Eat Better.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            MealMate connects customers and food providers in one seamless
            ecosystem. Browse menus, manage orders, and track delivery in real
            time.
          </motion.p>

          {/* Browse Meals Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className=""
          >
            <Button size="lg" className="px-8 py-6 mt-8 text-base rounded-full">
              <Link href={"/meals"}>Browse Meals</Link>
            </Button>
          </motion.div>

          {/* Avatars and Rating Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-col items-center gap-4"
          >
            {/* Avatar Stack */}
            <div className="flex items-center">
              <div className="flex -space-x-3">
                {[
                  { initials: "JD", fallback: "JD" },
                  { initials: "AK", fallback: "AK" },
                  { initials: "SM", fallback: "SM" },
                  { initials: "RJ", fallback: "RJ" },
                  { initials: "PL", fallback: "PL" },
                ].map((user, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <Avatar className="h-10 w-10 border-2 border-background">
                      <AvatarFallback className="text-xs bg-primary/10">
                        {user.initials}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              {/* Stars */}
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.svg
                    key={star}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + star * 0.1 }}
                    className="w-5 h-5 fill-primary text-primary"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>

              {/* Rating Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="flex items-center gap-2"
              >
                <span className="font-bold text-lg">4.8</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground">2.5k+ reviews</span>
              </motion.div>
            </div>

            {/* Trust Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="text-sm text-muted-foreground mt-2"
            >
              Trusted by 10,000+ happy customers
            </motion.p>
          </motion.div>

          {/* Simple decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-12 flex justify-center gap-8 text-xs text-muted-foreground"
          >
            <span>⚡ 15 min delivery</span>
            <span>🛡️ 100% secure</span>
            <span>🌟 24/7 support</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
