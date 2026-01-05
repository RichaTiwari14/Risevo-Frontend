import { useState, useEffect, useMemo } from "react";
import { GetEnquiries, DeleteEnquiry } from "../services/Services";
import { Search, Trash2, MessageSquare, Mail, Phone } from "lucide-react";
import toast from "react-hot-toast";

const EnquiryList = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const response = await GetEnquiries();
      setEnquiries(response.enquiries || response || []);
    } catch {
      toast.error("Failed to fetch enquiries");
    } finally {
      setLoading(false);
    }
  };

  const filteredEnquiries = useMemo(() => {
    if (!searchQuery) return enquiries;
    const q = searchQuery.toLowerCase();
    return enquiries.filter(
      (e) =>
        e.name?.toLowerCase().includes(q) ||
        e.email?.toLowerCase().includes(q)
    );
  }, [enquiries, searchQuery]);

  const handleDelete = async (id) => {
    if (!confirm("Delete this enquiry?")) return;
    try {
      await DeleteEnquiry(id);
      setEnquiries((prev) => prev.filter((e) => e.id !== id));
      toast.success("Enquiry deleted");
    } catch {
      toast.error("Failed to delete");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="w-8 h-8 border-3 border-slate-700 border-t-indigo-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fadeIn">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Enquiries</h1>
        <p className="text-gray-400 text-sm mt-1">
          View and manage customer enquiries
        </p>
      </div>

      {/* Search */}
      <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/25 transition"
          />
        </div>
      </div>

      {/* List */}
      {filteredEnquiries.length === 0 ? (
        <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-10 text-center">
          <MessageSquare className="w-10 h-10 text-gray-500 mx-auto mb-3" />
          <p className="text-gray-400">No enquiries found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredEnquiries.map((enq) => (
            <div
              key={enq.id}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:border-indigo-400/40 hover:bg-white/10 transition"
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 grid place-items-center text-white font-medium shadow-md shadow-indigo-900/40">
                    {enq.name?.charAt(0)}
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">{enq.name}</h3>

                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        enq.is_resolved
                          ? "bg-green-500/20 text-green-300 border border-green-500/30"
                          : "bg-yellow-500/15 text-yellow-300 border border-yellow-500/30"
                      }`}
                    >
                      {enq.is_resolved ? "Resolved" : "Pending"}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleDelete(enq.id)}
                  className="p-2 rounded-lg bg-red-500/15 text-red-400 border border-red-500/30 hover:bg-red-500/25 hover:text-red-300 transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {/* Contact */}
              <div className="space-y-2 mb-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  {enq.email || "-"}
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  {enq.phone || "-"}
                </div>
              </div>

              {/* Message */}
              <div className="rounded-lg bg-slate-900/40 border border-slate-700/60 p-3">
                <p className="text-sm text-gray-300 line-clamp-3">
                  {enq.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EnquiryList;
