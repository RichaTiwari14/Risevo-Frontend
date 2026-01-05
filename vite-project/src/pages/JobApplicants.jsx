import { useState, useEffect, useMemo } from "react";
import { GetApplications, DeleteApplication } from "../services/Services";
import {
  Search,
  Trash2,
  User,
  Mail,
  Phone,
  FileText,
  Info,
} from "lucide-react";
import toast from "react-hot-toast";

const JobApplicationList = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await GetApplications();
      setApplications(res.applications || res || []);
    } catch {
      toast.error("Failed to fetch job applications");
    } finally {
      setLoading(false);
    }
  };

  const filteredApps = useMemo(() => {
    if (!searchQuery) return applications;
    const q = searchQuery.toLowerCase();
    return applications.filter(
      (a) =>
        a.name?.toLowerCase().includes(q) ||
        a.email?.toLowerCase().includes(q) ||
        a.career?.designation?.toLowerCase().includes(q)
    );
  }, [applications, searchQuery]);

  const handleDelete = async (id) => {
    if (!confirm("Delete this application?")) return;
    try {
      await DeleteApplication(id);
      setApplications((p) => p.filter((a) => a.id !== id));
      toast.success("Application deleted");
    } catch {
      toast.error("Failed to delete");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="w-8 h-8 border-3 border-slate-700 border-t-sky-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fadeIn">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Job Applications</h1>
        <p className="text-gray-400 text-sm mt-1">
          View and manage career applicants
        </p>
      </div>

      {/* Search */}
      <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, email or position…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-sky-400 focus:ring-4 focus:ring-sky-500/25 transition"
          />
        </div>
      </div>

      {/* List */}
      {filteredApps.length === 0 ? (
        <div className="rounded-xl border border-white/10 bg-white/5 p-10 text-center">
          <User className="w-10 h-10 text-gray-500 mx-auto mb-3" />
          <p className="text-gray-400">No applications found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:border-sky-400/40 hover:bg-white/10 transition"
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 grid place-items-center text-white font-medium shadow-md">
                    {app.name?.charAt(0)}
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">{app.name}</h3>

                    <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                      {app.career?.designation || "General Application"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">

                  {/* Resume View Icon */}
                  {app.resume && (
                    <a
                      href={app.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25 transition"
                      title="Open Resume"
                    >
                      <Info className="w-4 h-4" />
                    </a>
                  )}

                  <button
                    onClick={() => handleDelete(app.id)}
                    className="p-2 rounded-lg bg-red-500/15 text-red-300 border border-red-500/30 hover:bg-red-500/25 transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-2 mb-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  {app.email || "-"}
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  {app.contact_no || "-"}
                </div>

                <div className="text-xs text-gray-400">
                  Applied on {new Date(app.created_at).toLocaleString()}
                </div>
              </div>

              {/* Cover Letter */}
              <div className="rounded-lg bg-slate-900/40 border border-slate-700/60 p-3">
                <p className="text-sm text-gray-300 line-clamp-3">
                  {app.cover_letter}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobApplicationList;
