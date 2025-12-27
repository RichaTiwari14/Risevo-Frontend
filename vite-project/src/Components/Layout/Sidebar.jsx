import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  LayoutDashboard,
  Users,
  UserCog,
  MessageSquare,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const menuItems = [
    { path: "/dashboard", name: "Dashboard", icon: LayoutDashboard },
    { path: "/admin-list", name: "Admin List", icon: UserCog },
    { path: "/employee-list", name: "Employee List", icon: Users },
    { path: "/enquiry-list", name: "Enquiries", icon: MessageSquare },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 flex flex-col border-r border-white/10 bg-slate-950/95 backdrop-blur-2xl">

      {/* Brand */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 grid place-items-center shadow-lg shadow-indigo-900/40">
            <span className="text-base font-bold text-white">R</span>
          </div>

          <div>
            <h1 className="text-sm font-semibold text-white tracking-wide">
              RISEVO
            </h1>
            <p className="text-[11px] text-gray-400">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-3 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `mx-3 mb-1 flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all
                ${
                  isActive
                    ? "bg-indigo-500/25 border border-indigo-400/40 text-white shadow-[0_0_10px_rgba(99,102,241,.25)]"
                    : "text-gray-400 hover:bg-white/5 hover:border hover:border-white/10 hover:text-white"
                }`
              }
            >
              <Icon className="w-4.5 h-4.5" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* User Footer */}
      <div className="p-4 border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 grid place-items-center text-white font-semibold shadow-md shadow-indigo-900/40">
            {user?.name?.charAt(0) || "U"}
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate">
              {user?.name || "User"}
            </p>
            <p className="text-[11px] text-gray-400">
              {user?.is_superuser ? "Super Admin" : "Admin"}
            </p>
          </div>
        </div>

        <button
          onClick={logout}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg border border-red-500/30 bg-red-500/10 text-red-300 hover:bg-red-500/20 hover:text-red-200 transition"
        >
          <LogOut className="w-4 h-4" />
          <span className="text-xs font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
