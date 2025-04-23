import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import { KawaiiElements } from "../components/KawaiiElements";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-gradient-to-br from-base-100 to-base-200">
      {/* Left Side - Anime Illustration */}
      <div className="hidden lg:flex flex-col items-center justify-center p-8 relative">
        <div className="absolute top-10 left-10 animate-float">
          <KawaiiElements.KawaiiStar />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-delayed">
          <KawaiiElements.KawaiiHeart />
        </div>
        <div className="absolute top-20 right-20 animate-float">
          <KawaiiElements.KawaiiFlower />
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce-slow">
          <KawaiiElements.KawaiiBunny />
        </div>
        <div className="relative">
          <KawaiiElements.AnimeGirl />
          <div className="absolute -top-8 -right-8 animate-bounce-slow">
            <KawaiiElements.KawaiiCloud />
          </div>
        </div>
        <h2 className="text-4xl font-bold mt-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Welcome Back!
        </h2>
        <p className="text-xl text-base-content/60 mt-4 text-center max-w-md">
          Sign in to continue your kawaii journey with us ✨
        </p>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8 bg-base-100 p-8 rounded-2xl shadow-xl border border-base-300">
          <div className="text-center relative">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <KawaiiElements.KawaiiStar />
            </div>
            <div className="absolute -top-8 right-0">
              <KawaiiElements.KawaiiSparkle />
            </div>
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-base-content/60 mt-2">Welcome back to your account!</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 mt-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-primary/40" />
                </div>
                <input
                  type="email"
                  className="input input-bordered w-full pl-10 focus:ring-2 ring-primary/20 transition-all"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-primary/40" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pl-10 focus:ring-2 ring-primary/20 transition-all"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-base-content/40" />
                  ) : (
                    <Eye className="h-5 w-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full hover:scale-105 transform transition-transform"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          <div className="text-center relative">
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
              <KawaiiElements.KawaiiHeart />
            </div>
            <p className="text-base-content/60">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="link link-primary hover:text-primary/80 transition-colors">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
