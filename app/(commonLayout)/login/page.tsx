"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-4 transition-colors">
      <Card className="w-full max-w-md shadow-2xl border border-gray-200 dark:border-gray-800">
        <CardContent className="p-8 space-y-6">
          {/* Logo + Title */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-black dark:text-white">
              Welcome Back
            </h1>
            <p className="text-sm text-muted-foreground">
              Login to continue ordering delicious meals 🍱
            </p>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="email"
                placeholder="you@example.com"
                className="pl-10"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="pl-10 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-muted-foreground"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Forgot password */}
          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm text-black dark:text-white hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <Button className="w-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition">
            Sign In
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">OR</span>
            <Separator className="flex-1" />
          </div>

          {/* Social Logins */}
          <div className="space-y-3">
            {/* Google */}
            <Button
              variant="outline"
              className="w-full border-gray-300 dark:border-gray-700"
            >
              Continue with Google
            </Button>

            {/* Facebook */}
            <Button
              variant="outline"
              className="w-full border-gray-300 dark:border-gray-700"
            >
              Continue with Facebook
            </Button>
          </div>

          {/* Register */}
          <p className="text-center text-sm text-muted-foreground">
            Don’t have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-black dark:text-white hover:underline"
            >
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
