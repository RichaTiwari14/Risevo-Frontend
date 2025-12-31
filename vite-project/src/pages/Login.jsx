// import { useState } from 'react';
// import { AdminLogin } from '../services/Services';
// import { useAuth } from '../context/AuthContext';
// import { Eye, EyeOff, Mail, Lock, Loader2 } from 'lucide-react';
// import toast from 'react-hot-toast';

// const Login = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const { login } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await AdminLogin(formData);
//       if (response.access) {
//         login(response.user, {
//           access: response.access,
//           refresh: response.refresh
//         });
//         toast.success('Login successful!');
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.error || 'Login failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       {/* Background Blobs */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
//       </div>

//       {/* Login Card - Glass Effect */}
//       <div className="glass w-full max-w-md p-8 relative z-10">
//         {/* Logo */}
//         <div className="text-center mb-8">
//           <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
//             <span className="text-2xl font-bold text-white">R</span>
//           </div>
//           <h1 className="text-3xl font-bold gradient-text">RISEVO</h1>
//           <p className="text-gray-400 text-sm mt-1">Admin Dashboard</p>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="text-sm font-medium text-gray-300 block mb-2">Email</label>
//             <div className="relative">
//               <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//               <input
//                 type="email"
//                 className="glass-input pl-11"
//                 placeholder="admin@risevo.com"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label className="text-sm font-medium text-gray-300 block mb-2">Password</label>
//             <div className="relative">
//               <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 className="glass-input pl-11 pr-11"
//                 placeholder="••••••••"
//                 value={formData.password}
//                 onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                 required
//               />
//               <button
//                 type="button"
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//               </button>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="btn-primary w-full py-3 flex items-center justify-center gap-2"
//             disabled={loading}
//           >
//             {loading ? (
//               <>
//                 <Loader2 className="w-5 h-5 animate-spin" />
//                 Signing in...
//               </>
//             ) : (
//               'Sign In'
//             )}
//           </button>
//         </form>

//         <p className="text-center text-gray-500 text-xs mt-6">
//           © 2024 Risevo. All rights reserved.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
import { useState } from "react";
import { AdminLogin } from "../services/Services";
import { useAuth } from "../context/AuthContext";
import { Eye, EyeOff, Mail, Lock, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

// ✅ Logo import (path apne project ke structure ke hisaab se)
import logo from "../images/logo.png";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await AdminLogin(formData);

      if (response.access) {
        login(response.user, {
          access: response.access,
          refresh: response.refresh,
        });
        toast.success("Login successful!");
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 relative">
      {/* Soft background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-purple-600/30 rounded-full blur-[110px]" />
        <div className="absolute -bottom-44 -left-32 w-96 h-96 bg-indigo-500/30 rounded-full blur-[110px]" />
      </div>

      {/* 🔙 Premium Back to Home – top left */}
      <a
        href="/"
        className="absolute top-6 left-6 z-20 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30
                   bg-gradient-to-r from-slate-900/70 via-slate-900/40 to-indigo-900/60
                   text-[13px] font-medium text-slate-50
                   shadow-[0_18px_45px_rgba(15,23,42,0.8)]
                   hover:shadow-[0_22px_55px_rgba(79,70,229,0.9)]
                   hover:border-indigo-300/80
                   hover:from-indigo-600/80 hover:via-purple-600/70 hover:to-sky-500/70
                   backdrop-blur-2xl transition-all duration-300
                   transform hover:-translate-y-[1px] hover:scale-[1.01]"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full
                         bg-gradient-to-br from-indigo-400 to-fuchsia-400
                         text-[15px] shadow-[0_0_15px_rgba(129,140,248,0.9)]">
          ←
        </span>
        <span className="tracking-[0.18em] uppercase text-[11px] text-slate-100/90">
          Back to Home
        </span>
      </a>

      {/* Glass Card */}
      <div className="w-full max-w-md relative z-10 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/50 p-8">
        {/* 
          ============================
          Purana logo section (commented)
          ============================

          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl grid place-items-center bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl shadow-indigo-900/40">
              <span className="text-2xl font-bold text-white">R</span>
            </div>

            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">
              RISEVO
            </h1>

            <p className="text-gray-400 text-sm mt-1">Admin Dashboard</p>
          </div>
        */}

        {/* ✅ New logo section: "R" hata diya, bada logo image */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex justify-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl shadow-indigo-900/40 overflow-hidden flex items-center justify-center">
              <img
                src={logo}
                alt="Risevo logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Agar neeche naam bhi chahiye ho to uncomment kar sakte ho */}
          {/*
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">
            RISEVO
          </h1>
          */}

          <p className="text-gray-400 text-sm mt-1">Admin Dashboard</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-300 block mb-2">
              Email
            </label>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="admin@risevo.com"
                className="w-full pl-11 pr-3 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/25 transition"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-300 block mb-2">
              Password
            </label>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="••••••••"
                className="w-full pl-11 pr-11 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/25 transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-indigo-900/40 hover:from-indigo-600 hover:to-purple-700 transition transform hover:-translate-y-[1px] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-[11px] sm:text-xs">
          <span className="text-slate-400/80">© Powered By </span>
          <span className="font-semibold bg-gradient-to-r from-indigo-300 via-sky-300 to-fuchsia-300 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(129,140,248,0.7)]">
            MINDBRIDGE TECH
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;