import { useState, useEffect } from "react";
import { X, Loader2 } from "lucide-react";

const EmployeeModal = ({ isOpen, onClose, onSubmit, employee = null, loading }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    designation: "",
    contact_no: "",
  });

  useEffect(() => {
    if (employee) {
      setFormData({
        name: employee.name || "",
        email: employee.email || "",
        address: employee.address || "",
        designation: employee.designation || "",
        contact_no: employee.contact_no || "",
      });
    } else {
      setFormData({
        name: "",
        email: "",
        address: "",
        designation: "",
        contact_no: "",
      });
    }
  }, [employee, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950
        border border-white/10 shadow-2xl shadow-black/50 backdrop-blur-xl animate-modalIn"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h2 className="text-lg font-semibold text-white">
            {employee ? "Edit Employee" : "Add New Employee"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:bg-white/10 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Full Name */}
            <div>
              <label className="text-sm text-gray-300 block mb-1.5">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20
                text-white placeholder-white/40 focus:border-indigo-400
                focus:ring-4 focus:ring-indigo-500/25 outline-none transition"
                placeholder="Enter full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-300 block mb-1.5">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20
                text-white placeholder-white/40 focus:border-indigo-400
                focus:ring-4 focus:ring-indigo-500/25 outline-none transition"
                placeholder="Enter email address"
              />
            </div>

            {/* Designation */}
            <div>
              <label className="text-sm text-gray-300 block mb-1.5">Designation</label>
              <input
                type="text"
                value={formData.designation}
                onChange={(e) =>
                  setFormData({ ...formData, designation: e.target.value })
                }
                required
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20
                text-white placeholder-white/40 focus:border-indigo-400
                focus:ring-4 focus:ring-indigo-500/25 outline-none transition"
                placeholder="Enter designation"
              />
            </div>

            {/* Contact */}
            <div>
              <label className="text-sm text-gray-300 block mb-1.5">Contact Number</label>
              <input
                type="tel"
                value={formData.contact_no}
                onChange={(e) =>
                  setFormData({ ...formData, contact_no: e.target.value })
                }
                required
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20
                text-white placeholder-white/40 focus:border-indigo-400
                focus:ring-4 focus:ring-indigo-500/25 outline-none transition"
                placeholder="Enter contact number"
              />
            </div>
          </div>

          {/* Address (full row) */}
          <div>
            <label className="text-sm text-gray-300 block mb-1.5">Address</label>
            <textarea
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              required
              className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20
              text-white placeholder-white/40 min-h-[90px] resize-none
              focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/25
              outline-none transition"
              placeholder="Enter address"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 rounded-lg border border-white/20
              text-gray-300 hover:bg-white/10 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2.5 rounded-lg font-semibold
              bg-gradient-to-r from-indigo-500 to-purple-600 text-white
              shadow-lg shadow-indigo-900/40 hover:from-indigo-600 hover:to-purple-700
              transition flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving...
                </>
              ) : employee ? (
                "Update"
              ) : (
                "Create"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeModal;
