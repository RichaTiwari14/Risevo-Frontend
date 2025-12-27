import { useState, useEffect, useMemo } from "react";
import {
  GetAdmins,
  CreateAdmin,
  UpdateAdmin,
  DeleteAdmin,
} from "../services/Services";
import AdminModal from "../Components/Modals/AdminModal";
import { Search, Plus, Edit2, Trash2, UserCog } from "lucide-react";
import toast from "react-hot-toast";

const AdminList = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalLoading, setModalLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const res = await GetAdmins();
      setAdmins(res.admins || res || []);
    } catch {
      toast.error("Failed to fetch admins");
    } finally {
      setLoading(false);
    }
  };

  const filteredAdmins = useMemo(() => {
    if (!searchQuery) return admins;
    const q = searchQuery.toLowerCase();
    return admins.filter(
      (a) =>
        a.name?.toLowerCase().includes(q) ||
        a.email?.toLowerCase().includes(q)
    );
  }, [admins, searchQuery]);

  const handleSubmit = async (formData) => {
    setModalLoading(true);
    try {
      if (selectedAdmin) {
        const res = await UpdateAdmin(selectedAdmin.id, formData);
        setAdmins((p) =>
          p.map((a) =>
            a.id === selectedAdmin.id ? res.admin || res : a
          )
        );
        toast.success("Admin updated");
      } else {
        const res = await CreateAdmin(formData);
        setAdmins((p) => [...p, res.admin || res]);
        toast.success("Admin created");
      }
      setIsModalOpen(false);
      setSelectedAdmin(null);
    } catch (err) {
      toast.error(err.response?.data?.error || "Operation failed");
    } finally {
      setModalLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this admin?")) return;
    try {
      await DeleteAdmin(id);
      setAdmins((p) => p.filter((a) => a.id !== id));
      toast.success("Admin deleted");
    } catch {
      toast.error("Failed to delete");
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
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Admin Management</h1>
          <p className="text-gray-400 text-sm mt-1">
            Manage administrative users & access
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedAdmin(null);
            setIsModalOpen(true);
          }}
          className="px-4 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-indigo-900/40 hover:from-indigo-600 hover:to-purple-700 transition flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Admin
        </button>
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

      {/* Table */}
      <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-white/5 border-b border-white/10">
              <tr className="text-gray-300 text-sm">
                <th className="px-6 py-3 text-left font-semibold">Admin</th>
                <th className="px-6 py-3 text-left font-semibold">Email</th>
                <th className="px-6 py-3 text-left font-semibold">Contact</th>
                <th className="px-6 py-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredAdmins.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-12">
                    <UserCog className="w-10 h-10 text-gray-600 mx-auto mb-2" />
                    <p className="text-gray-500">No admins found</p>
                  </td>
                </tr>
              ) : (
                filteredAdmins.map((admin) => (
                  <tr
                    key={admin.id}
                    className="border-b border-white/5 hover:bg-white/5 transition"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 grid place-items-center text-white font-medium shadow-md shadow-indigo-900/40">
                          {admin.name?.charAt(0) || "A"}
                        </div>
                        <span className="font-medium text-white">
                          {admin.name || "N/A"}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-gray-300">
                      {admin.email}
                    </td>

                    <td className="px-6 py-4 text-gray-300">
                      {admin.contact_no || "N/A"}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setSelectedAdmin(admin);
                            setIsModalOpen(true);
                          }}
                          className="p-2 rounded-lg bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/25 transition"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => handleDelete(admin.id)}
                          className="p-2 rounded-lg bg-red-500/15 text-red-300 border border-red-500/30 hover:bg-red-500/25 transition"
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

      <AdminModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedAdmin(null);
        }}
        onSubmit={handleSubmit}
        admin={selectedAdmin}
        loading={modalLoading}
      />
    </div>
  );
};

export default AdminList;
