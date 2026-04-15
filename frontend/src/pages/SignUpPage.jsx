import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import {
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  MessageSquare,
  User,
} from "lucide-react";
import { Link } from "react-router";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6)
      return toast.error("Password must be at least 6 characters");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) signup(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-indigo-200 px-6">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="p-12">
          {/* LOGO */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
              <MessageSquare className="text-indigo-600 size-5" />
            </div>
            <span className="font-semibold text-lg text-gray-800">ChatX</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign up</h1>
          <p className="text-gray-500 mb-8">
            Create your account to start chatting
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* FULL NAME */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Full name
              </label>

              <div className="relative mt-1">
                <User
                  className="absolute left-3 top-1/2 -translate-y-1/2
                  size-5 text-gray-500 z-10 pointer-events-none"
                />

                <input
                  type="text"
                  placeholder="John Doe"
                  className="input input-bordered w-full pl-10 bg-white text-gray-900"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>

              <div className="relative mt-1">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2
                  size-5 text-gray-500 z-10 pointer-events-none"
                />

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered w-full pl-10 bg-white text-gray-900"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>

              <div className="relative mt-1">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2
                  size-5 text-gray-500 z-10 pointer-events-none"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="input input-bordered w-full pl-10 pr-10 bg-white text-gray-900"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10"
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-gray-400" />
                  ) : (
                    <Eye className="size-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={isSigningUp}
              className="btn w-full bg-indigo-600 hover:bg-indigo-700 text-white border-none mt-4"
            >
              {isSigningUp ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Creating...
                </>
              ) : (
                "Create account"
              )}
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-600 font-medium hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>

        {/* RIGHT PANEL */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-14">
          <h2 className="text-3xl font-bold mb-4 text-center">Welcome 👋</h2>
          <p className="text-white/85 text-center max-w-sm leading-relaxed">
            Join thousands of users chatting instantly with a clean, fast and
            secure messaging experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
