import { useState, useEffect, useMemo } from 'react';
import { GetAdmins, CreateAdmin, UpdateAdmin, DeleteAdmin } from '../services/Services';
import AdminModal from '../components/Modals/AdminModal';
import { Search, Plus, Edit2, Trash2, Loader2, UserCog } from 'lucide-react';
import toast from 'react-hot-toast';

const AdminList = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalLoading, setModalLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const response = await GetAdmins();
      setAdmins(response.admins || response || []);
    } catch (error) {
      toast.error('Failed to fetch admins');
    } finally {
      setLoading(false);
    }
  };

  const filteredAdmins = useMemo(() => {
    if (!searchQuery) return admins;
    const query = searchQuery.toLowerCase();
    return admins.filter(admin => 
      admin.name?.toLowerCase().includes(query) ||
      admin.email?.toLowerCase().includes(query)
    );
  }, [admins, searchQuery]);

  const handleSubmit = async (formData) => {
    setModalLoading(true);
    try {
      if (selectedAdmin) {
        const response = await UpdateAdmin(selectedAdmin.id, formData);
        setAdmins(prev => prev.map(a => a.id === selectedAdmin.id ? (response.admin || response) : a));
        toast.success('Admin updated');
      } else {
        const response = await CreateAdmin(formData);
        setAdmins(prev => [...prev, response.admin || response]);
        toast.success('Admin created');
      }
      setIsModalOpen(false);
      setSelectedAdmin(null);
    } catch (error) {
      toast.error(error.response?.data?.error || 'Operation failed');
    } finally {
      setModalLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this admin?')) return;
    try {
      await DeleteAdmin(id);
      setAdmins(prev => prev.filter(a => a.id !== id));
      toast.success('Admin deleted');
    } catch (error) {
      toast.error('Failed to delete');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="space-y-5 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Admin Management</h1>
          <p className="text-gray-400 text-sm mt-1">Manage admin users</p>
        </div>
        <button
          onClick={() => { setSelectedAdmin(null); setIsModalOpen(true); }}
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Admin
        </button>
      </div>

      {/* Search */}
      <div className="card p-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            className="input-field pl-10"
            placeholder="Search admins..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Admin</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAdmins.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-10">
                    <UserCog className="w-10 h-10 text-gray-600 mx-auto mb-2" />
                    <p className="text-gray-500">No admins found</p>
                  </td>
                </tr>
              ) : (
                filteredAdmins.map((admin) => (
                  <tr key={admin.id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center">
                          <span className="text-sm font-medium">{admin.name?.charAt(0) || 'A'}</span>
                        </div>
                        <span className="font-medium text-white">{admin.name || 'N/A'}</span>
                      </div>
                    </td>
                    <td>{admin.email}</td>
                    <td>{admin.contact_no || 'N/A'}</td>
                    <td>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => { setSelectedAdmin(admin); setIsModalOpen(true); }}
                          className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600/30"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(admin.id)}
                          className="p-2 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600/30"
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
        onClose={() => { setIsModalOpen(false); setSelectedAdmin(null); }}
        onSubmit={handleSubmit}
        admin={selectedAdmin}
        loading={modalLoading}
      />
    </div>
  );
};

export default AdminList;