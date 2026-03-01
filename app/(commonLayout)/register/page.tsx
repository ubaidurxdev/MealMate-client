"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Google from "@/components/svg/Google";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { handleGoogleLogin } from "@/components/shared/SocialLogin";

type ExtendedSignUp = {
  email: string;
  name: string;
  password: string;
  role?: string;
  callbackURL?: string;
};

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const role = formData.get("role") as string;

    const { data, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      role: role,
      callbackURL: "http://localhost:3000",
    } as ExtendedSignUp);
    if (data?.user) {
      toast.success("User Created Successfully");
    }
    if (error) {
      console.log(error);
    }
  };

 

  return (
    <div className="h-[calc(100vh-68px)] flex items-center justify-center px-4">
      <Card className="w-full max-w-md border border-gray-200 dark:border-gray-800">
        <CardContent className="p-8 space-y-4">
          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight pb-4 border-b border-gray-200 dark:border-gray-800 text-black dark:text-white">
              Welcome to MealMate
            </h1>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="pl-10 mt-2"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="pl-10 mt-2"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-5 h-4 w-4 text-muted-foreground" />
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="pl-10 pr-10 mt-2"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-5 text-muted-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* User role Field */}
            <div className="space-y-2 mt-2">
              <label className="text-sm font-medium">Sign up as</label>

              <select
                name="role"
                className=" block p-2 mt-1 file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm "
              >
                <option value="Customer">Customer</option>
                <option value="Provider">Provider</option>
              </select>
            </div>

            {/* Register Button */}
            <Button className="w-full bg-black text-white mt-3 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition">
              Create Account
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">OR</span>
            <Separator className="flex-1" />
          </div>

          {/* Social Signup */}
          <Button
            variant="outline"
            onClick={handleGoogleLogin}
            className="w-full border-gray-300 dark:border-gray-700"
          >
            <Google />
            Continue with Google
          </Button>

          {/* Login Redirect */}
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-black dark:text-white hover:underline"
            >
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
