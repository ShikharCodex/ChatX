import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-indigo-200 px-6">
      {/* MAIN CARD */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        {/* LEFT — FORM */}
        <div className="p-12">
          {/* LOGO */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
              <MessageSquare className="size-5 text-indigo-600" />
            </div>
            <span className="font-semibold text-lg text-gray-800">ChatX</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back
          </h1>

          <p className="text-gray-500 mb-8">Sign in to continue chatting</p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* EMAIL */}
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>

              <div className="relative mt-1">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2
                  size-5 stroke-gray-500 z-10 pointer-events-none"
                />

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered w-full pl-11 bg-white text-gray-900"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
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
                  size-5 stroke-gray-500 z-10 pointer-events-none"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="input input-bordered w-full pl-11 pr-11 bg-white text-gray-900"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    })
                  }
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10"
                >
                  {showPassword ? (
                    <EyeOff className="size-5 stroke-gray-500" />
                  ) : (
                    <Eye className="size-5 stroke-gray-500" />
                  )}
                </button>
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={isLoggingIn}
              className="btn w-full bg-indigo-600 hover:bg-indigo-700 text-white border-none mt-2"
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          {/* FOOTER */}
          <p className="text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-indigo-600 font-medium hover:underline"
            >
              Create account
            </Link>
          </p>
        </div>

        {/* RIGHT — PURPLE PANEL */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-14">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Welcome back 👋
          </h2>
          <p className="text-white/85 text-center max-w-sm leading-relaxed">
            Continue your conversations, respond to messages and stay connected
            with your friends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
