import { Send } from "lucide-react";
import { useEffect, useState } from "react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  {
    id: 2,
    content: "I'm doing great! Just working on some new features.",
    isSent: true,
  },
];

const SettingsPage = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="relative min-h-screen pt-20 px-4 overflow-hidden">
      {/* ================= BACKGROUND ANIMATION ================= */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse" />

      <div className="relative container mx-auto max-w-5xl space-y-12">
        {/* ================= HEADER ================= */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Application Settings
          </h1>
          <p className="text-base-content/70 text-sm">
            Customize your experience visually
          </p>
        </div>

        {/* ================= SETTINGS CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 🔥 THEME CARD */}
          <div
            className="
              relative p-6 rounded-2xl border border-base-300
              bg-base-100/70 backdrop-blur-xl
              shadow-xl hover:shadow-2xl
              transition-all duration-300
              hover:-translate-y-1
            "
          >
            <h3 className="font-semibold text-lg mb-2">Theme</h3>

            <p className="text-sm text-base-content/70 mb-4">
              Switch between light and dark mode
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setTheme("light")}
                className={`btn btn-sm ${
                  theme === "light" ? "btn-primary" : "btn-outline"
                }`}
              >
                ☀️ Light
              </button>

              <button
                onClick={() => setTheme("dark")}
                className={`btn btn-sm ${
                  theme === "dark" ? "btn-primary" : "btn-outline"
                }`}
              >
                🌙 Dark
              </button>
            </div>
          </div>

          {/* EXISTING CARDS */}
          {[
            { title: "Interface", desc: "Modern spacing and transitions" },
            { title: "Experience", desc: "Polished animations everywhere" },
          ].map((card, i) => (
            <div
              key={i}
              className="
                relative p-6 rounded-2xl border border-base-300
                bg-base-100/70 backdrop-blur-xl
                shadow-xl hover:shadow-2xl
                transition-all duration-300
                hover:-translate-y-1
                group
              "
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition" />

              <h3 className="font-semibold text-lg">{card.title}</h3>

              <p className="text-sm text-base-content/70 mt-1">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* ================= CHAT PREVIEW ================= */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-center">
            Live Interface Preview
          </h2>

          <div className="rounded-2xl border border-base-300 bg-base-100 shadow-2xl overflow-hidden">
            <div className="px-5 py-4 bg-base-200 flex items-center justify-between">
              <span className="font-medium">Chat Preview</span>
              <span className="text-xs text-base-content/60">UI Only</span>
            </div>

            <div className="p-6 bg-base-200">
              <div className="max-w-lg mx-auto">
                <div className="bg-base-100 rounded-2xl overflow-hidden shadow-lg">
                  <div className="p-4 border-b border-base-300 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary text-primary-content flex items-center justify-center font-medium">
                      J
                    </div>
                    <div>
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-base-content/70">Online</p>
                    </div>
                  </div>

                  <div className="p-4 space-y-4 min-h-[220px] max-h-[220px] overflow-y-auto">
                    {PREVIEW_MESSAGES.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${
                          msg.isSent ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`px-4 py-2 rounded-2xl text-sm shadow ${
                            msg.isSent
                              ? "bg-primary text-primary-content"
                              : "bg-base-200"
                          }`}
                        >
                          {msg.content}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 border-t border-base-300 bg-base-100">
                    <div className="flex gap-2">
                      <input
                        readOnly
                        value="This is a preview"
                        className="input input-bordered flex-1 h-10 text-sm"
                      />
                      <button className="btn btn-primary h-10 min-h-0">
                        <Send size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
