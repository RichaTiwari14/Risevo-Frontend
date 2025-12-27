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

      {/* Glass Card */}
      <div className="w-full max-w-md relative z-10 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/50 p-8">

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl grid place-items-center bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl shadow-indigo-900/40">
            <span className="text-2xl font-bold text-white">R</span>
          </div>

          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">
            RISEVO
          </h1>

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

        <p className="text-center text-gray-500 text-xs mt-6">
          © 2024 Risevo. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
