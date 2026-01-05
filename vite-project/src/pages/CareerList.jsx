import { useState, useEffect, useMemo } from "react";
import {
  GetCareers,
  CreateCareer,
  UpdateCareer,
  DeleteCareer,
} from "../services/Services";

import CareerModal from "../Components/Modals/CareerModal";
import { Search, Plus, Edit2, Trash2, Briefcase } from "lucide-react";
import toast from "react-hot-toast";

const CareerList = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalLoading, setModalLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      const res = await GetCareers();
      setCareers(res.careers || res || []);
    } catch {
      toast.error("Failed to fetch careers");
    } finally {
      setLoading(false);
    }
  };

  const filteredCareers = useMemo(() => {
    if (!searchQuery) return careers;
    const q = searchQuery.toLowerCase();
    return careers.filter(
      (c) =>
        c.designation?.toLowerCase().includes(q) ||
        c.location?.toLowerCase().includes(q) ||
        c.experience?.toLowerCase().includes(q)
    );
  }, [careers, searchQuery]);

  const handleSubmit = async (formData) => {
    setModalLoading(true);
    try {
      if (selectedCareer) {
        const res = await UpdateCareer(selectedCareer.id, formData);
        setCareers((p) =>
          p.map((c) =>
            c.id === selectedCareer.id ? res.career || res : c
          )
        );
        toast.success("Career updated");
      } else {
        const res = await CreateCareer(formData);
        setCareers((p) => [...p, res.career || res]);
        toast.success("Career created");
      }
      setIsModalOpen(false);
      setSelectedCareer(null);
    } catch (err) {
      toast.error(err.response?.data?.error || "Operation failed");
    } finally {
      setModalLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this career post?")) return;
    try {
      await DeleteCareer(id);
      setCareers((p) => p.filter((c) => c.id !== id));
      toast.success("Career deleted");
    } catch {
      toast.error("Failed to delete");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="w-8 h-8 rounded-full border-3 border-slate-700 border-t-sky-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fadeIn">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Career Management</h1>
          <p className="text-gray-400 text-sm mt-1">
            Manage job openings & positions
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedCareer(null);
            setIsModalOpen(true);
          }}
          className="px-4 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-sky-500 to-cyan-600 shadow-lg hover:from-sky-600 hover:to-cyan-700 transition flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Career
        </button>
      </div>

      {/* Search */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search designation, location or experience…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-sky-400 focus:ring-4 focus:ring-sky-500/25 transition"
          />
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-white/5 border-b border-white/10">
              <tr className="text-gray-300 text-sm">
                <th className="px-6 py-3 text-left font-semibold">Designation</th>
                <th className="px-6 py-3 text-left font-semibold">Location</th>
                <th className="px-6 py-3 text-left font-semibold">Experience</th>
                <th className="px-6 py-3 text-left font-semibold">Status</th>
                <th className="px-6 py-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredCareers.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-10">
                    <Briefcase className="w-10 h-10 text-gray-600 mx-auto mb-2" />
                    <p className="text-gray-500">No careers found</p>
                  </td>
                </tr>
              ) : (
                filteredCareers.map((c) => (
                  <tr key={c.id} className="border-b border-white/5 hover:bg-white/5">
                    <td className="px-6 py-4 text-white font-medium">
                      {c.designation}
                    </td>
                    <td className="px-6 py-4 text-gray-300">{c.location}</td>
                    <td className="px-6 py-4 text-gray-300">{c.experience}</td>

                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs border ${
                        c.is_active
                          ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                          : "bg-gray-500/15 text-gray-300 border-gray-500/30"
                      }`}>
                        {c.is_active ? "Active" : "Inactive"}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setSelectedCareer(c);
                            setIsModalOpen(true);
                          }}
                          className="p-2 rounded-lg bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/25"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => handleDelete(c.id)}
                          className="p-2 rounded-lg bg-red-500/15 text-red-300 border border-red-500/30 hover:bg-red-500/25"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <CareerModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedCareer(null);
        }}
        onSubmit={handleSubmit}
        career={selectedCareer}
        loading={modalLoading}
      />
    </div>
  );
};

export default CareerList;
