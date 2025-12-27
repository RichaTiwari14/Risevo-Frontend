import { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';

const AdminModal = ({ isOpen, onClose, onSubmit, admin = null, loading }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    contact_no: ''
  });

  const isEditMode = !!admin; // Edit mode check

  useEffect(() => {
    if (admin) {
      setFormData({
        name: admin.name || '',
        email: admin.email || '',
        password: '',
        contact_no: admin.contact_no || ''
      });
    } else {
      setFormData({ name: '', email: '', password: '', contact_no: '' });
    }
  }, [admin, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = { ...formData };
    
    // Edit mode mein password mat bhejo
    if (isEditMode) {
      delete submitData.password;
    }
    
    onSubmit(submitData);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-700">
          <h2 className="text-lg font-semibold text-white">
            {isEditMode ? 'Edit Admin' : 'Add New Admin'}
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          {/* Name */}
          <div>
            <label className="text-sm font-medium text-gray-300 block mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              className="input-field"
              placeholder="Enter full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-300 block mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              className="input-field"
              placeholder="Enter email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          {/* Password - Sirf Add mode mein dikhega */}
          {!isEditMode && (
            <div>
              <label className="text-sm font-medium text-gray-300 block mb-1.5">
                Password
              </label>
              <input
                type="password"
                className="input-field"
                placeholder="Enter password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                minLength={6}
              />
            </div>
          )}

          {/* Contact */}
          <div>
            <label className="text-sm font-medium text-gray-300 block mb-1.5">
              Contact Number
            </label>
            <input
              type="tel"
              className="input-field"
              placeholder="Enter contact number"
              value={formData.contact_no}
              onChange={(e) => setFormData({ ...formData, contact_no: e.target.value })}
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-3">
            <button type="button" onClick={onClose} className="btn-secondary flex-1">
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary flex-1 flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving...
                </>
              ) : (
                isEditMode ? 'Update' : 'Create'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminModal;