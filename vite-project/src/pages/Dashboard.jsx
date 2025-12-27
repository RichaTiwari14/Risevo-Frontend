// import { useState, useEffect } from 'react';
// import { useAuth } from '../context/AuthContext';
// import { GetDashboardData } from '../services/Services';
// import StatsCard from '../components/Cards/StatsCard';
// import { EmployeeEnquiryChart, DepartmentChart } from '../components/Charts/DashboardCharts';
// import { Users, UserCog, MessageSquare, Clock, Loader2 } from 'lucide-react';

// const Dashboard = () => {
//   const { user } = useAuth();
//   const [stats, setStats] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchDashboardData();
//   }, []);

//   const fetchDashboardData = async () => {
//     try {
//       const data = await GetDashboardData();
//       setStats(data?.stats || {});
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-96">
//         <div className="spinner"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6 animate-fadeIn">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-bold text-white">
//             Welcome back, {user?.name || 'Admin'}!
//           </h1>
//           <p className="text-gray-400 mt-1">
//             Here's what's happening today.
//           </p>
//         </div>
//         <div className="text-sm text-gray-400">
//           {new Date().toLocaleDateString('en-US', {
//             weekday: 'long',
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric'
//           })}
//         </div>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
//         <StatsCard
//           title="Total Admins"
//           value={stats?.total_admin || 0}
//           icon={UserCog}
//           color="indigo"
//         />
//         <StatsCard
//           title="Total Employees"
//           value={stats?.total_employee || 0}
//           icon={Users}
//           color="green"
//         />
//         <StatsCard
//           title="Today's Enquiries"
//           value={stats?.today_enquiry || 0}
//           icon={Clock}
//           color="blue"
//         />
//         <StatsCard
//           title="Total Enquiries"
//           value={stats?.total_enquiry || 0}
//           icon={MessageSquare}
//           color="purple"
//         />
//       </div>

//       {/* Charts */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
//         <EmployeeEnquiryChart />
//         <DepartmentChart />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { GetDashboardData } from "../services/Services";
import StatsCard from "../Components/Cards/StatsCard";
import {
  EmployeeEnquiryChart,
  DepartmentChart,
} from "../components/Charts/DashboardCharts";
import { Users, UserCog, MessageSquare, Clock } from "lucide-react";

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const data = await GetDashboardData();
      setStats(data?.stats || {});
    } catch (err) {
      console.error("Dashboard fetch failed:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="w-8 h-8 rounded-full border-3 border-slate-700 border-t-indigo-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fadeIn">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Welcome back, {user?.name || "Admin"} 👋
          </h1>
          <p className="text-gray-400 mt-1">
            Overview of today’s activity and performance
          </p>
        </div>

        <div className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-gray-300">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatsCard
          title="Total Admins"
          value={stats?.total_admin || 0}
          icon={UserCog}
          color="indigo"
        />

        <StatsCard
          title="Total Employees"
          value={stats?.total_employee || 0}
          icon={Users}
          color="emerald"
        />

        <StatsCard
          title="Today's Enquiries"
          value={stats?.today_enquiry || 0}
          icon={Clock}
          color="blue"
        />

        <StatsCard
          title="Total Enquiries"
          value={stats?.total_enquiry || 0}
          icon={MessageSquare}
          color="purple"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 shadow-lg shadow-black/30 hover:border-indigo-400/30 transition">
          <EmployeeEnquiryChart />
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 shadow-lg shadow-black/30 hover:border-indigo-400/30 transition">
          <DepartmentChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
