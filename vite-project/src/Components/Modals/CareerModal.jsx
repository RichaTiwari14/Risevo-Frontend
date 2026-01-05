import { useState, useEffect } from "react";
import { X, Loader2 } from "lucide-react";

const CareerModal = ({ isOpen, onClose, onSubmit, career = null, loading }) => {
  const [formData, setFormData] = useState({
    designation: "",
    location: "",
    experience: "",
    responsibilities: "",
    qualification: "",
    is_active: true,
  });

  useEffect(() => {
    if (career) {
      setFormData({
        designation: career.designation || "",
        location: career.location || "",
        experience: career.experience || "",
        responsibilities: career.responsibilities || "",
        qualification: career.qualification || "",
        is_active: career.is_active ?? true,
      });
    } else {
      setFormData({
        designation: "",
        location: "",
        experience: "",
        responsibilities: "",
        qualification: "",
        is_active: true,
      });
    }
  }, [career, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-6" onClick={onClose}>
      <div
        className="w-full max-w-3xl rounded-2xl bg-slate-950 border border-white/10 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header */}
        <div className="flex justify-between px-6 py-4 border-b border-white/10">
          <h2 className="text-lg font-semibold text-white">
            {career ? "Edit Career" : "Add New Career"}
          </h2>
          <button onClick={onClose} className="p-2 rounded-lg text-gray-400 hover:bg-white/10 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <Input label="Designation" value={formData.designation}
              onChange={(v) => setFormData({ ...formData, designation: v })} />

            <Input label="Location" value={formData.location}
              onChange={(v) => setFormData({ ...formData, location: v })} />

            <Input label="Experience" value={formData.experience}
              onChange={(v) => setFormData({ ...formData, experience: v })} />

            <div>
              <label className="text-sm text-gray-300 block mb-1.5">Active</label>
              <select
                value={formData.is_active}
                onChange={(e) =>
                  setFormData({ ...formData, is_active: e.target.value === "true" })
                }
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white"
              >
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>
          </div>

          <TextArea label="Responsibilities"
            value={formData.responsibilities}
            onChange={(v) => setFormData({ ...formData, responsibilities: v })} />

          <TextArea label="Qualification"
            value={formData.qualification}
            onChange={(v) => setFormData({ ...formData, qualification: v })} />

          {/* Buttons */}
          <div className="flex gap-3 pt-3">
            <button type="button" onClick={onClose}
              className="flex-1 px-4 py-2.5 rounded-lg border border-white/20 text-gray-300 hover:bg-white/10">
              Cancel
            </button>

            <button type="submit" disabled={loading}
              className="flex-1 px-4 py-2.5 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 text-white flex items-center justify-center gap-2">
              {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving…</> :
                career ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Input = ({ label, value, onChange }) => (
  <div>
    <label className="text-sm text-gray-300 block mb-1.5">{label}</label>
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
      className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white"
    />
  </div>
);

const TextArea = ({ label, value, onChange }) => (
  <div>
    <label className="text-sm text-gray-300 block mb-1.5">{label}</label>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white min-h-[90px]"
    />
  </div>
);

export default CareerModal;
