import { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';

const EmployeeModal = ({ isOpen, onClose, onSubmit, employee = null, loading }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    designation: '',
    contact_no: ''
  });

  useEffect(() => {
    if (employee) {
      setFormData({
        name: employee.name || '',
        email: employee.email || '',
        address: employee.address || '',
        designation: employee.designation || '',
        contact_no: employee.contact_no || ''
      });
    } else {
      setFormData({ name: '', email: '', address: '', designation: '', contact_no: '' });
    }
  }, [employee, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-700">
          <h2 className="text-lg font-semibold text-white">
            {employee ? 'Edit Employee' : 'Add New Employee'}
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

          <div>
            <label className="text-sm font-medium text-gray-300 block mb-1.5">
              Designation
            </label>
            <input
              type="text"
              className="input-field"
              placeholder="Enter designation"
              value={formData.designation}
              onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
              required
            />
          </div>

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

          <div>
            <label className="text-sm font-medium text-gray-300 block mb-1.5">
              Address
            </label>
            <textarea
              className="input-field min-h-[80px] resize-none"
              placeholder="Enter address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
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
                employee ? 'Update' : 'Create'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeModal;