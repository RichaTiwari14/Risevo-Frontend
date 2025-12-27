import { useState, useEffect, useMemo } from 'react';
import { GetEmployees, CreateEmployee, UpdateEmployee, DeleteEmployee } from '../services/Services';
import EmployeeModal from '../components/Modals/EmployeeModal';
import { Search, Plus, Edit2, Trash2, Users } from 'lucide-react';
import toast from 'react-hot-toast';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalLoading, setModalLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await GetEmployees();
      setEmployees(response.employees || response || []);
    } catch (error) {
      toast.error('Failed to fetch employees');
    } finally {
      setLoading(false);
    }
  };

  const filteredEmployees = useMemo(() => {
    if (!searchQuery) return employees;
    const query = searchQuery.toLowerCase();
    return employees.filter(emp => 
      emp.name?.toLowerCase().includes(query) ||
      emp.email?.toLowerCase().includes(query) ||
      emp.designation?.toLowerCase().includes(query)
    );
  }, [employees, searchQuery]);

  const handleSubmit = async (formData) => {
    setModalLoading(true);
    try {
      if (selectedEmployee) {
        const response = await UpdateEmployee(selectedEmployee.id, formData);
        setEmployees(prev => prev.map(e => e.id === selectedEmployee.id ? (response.employee || response) : e));
        toast.success('Employee updated');
      } else {
        const response = await CreateEmployee(formData);
        setEmployees(prev => [...prev, response.employee || response]);
        toast.success('Employee created');
      }
      setIsModalOpen(false);
      setSelectedEmployee(null);
    } catch (error) {
      toast.error(error.response?.data?.error || 'Operation failed');
    } finally {
      setModalLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this employee?')) return;
    try {
      await DeleteEmployee(id);
      setEmployees(prev => prev.filter(e => e.id !== id));
      toast.success('Employee deleted');
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
          <h1 className="text-2xl font-bold text-white">Employee Management</h1>
          <p className="text-gray-400 text-sm mt-1">Manage employees</p>
        </div>
        <button
          onClick={() => { setSelectedEmployee(null); setIsModalOpen(true); }}
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Employee
        </button>
      </div>

      {/* Search */}
      <div className="card p-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            className="input-field pl-10"
            placeholder="Search employees..."
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
                <th>Employee</th>
                <th>Email</th>
                <th>Designation</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-10">
                    <Users className="w-10 h-10 text-gray-600 mx-auto mb-2" />
                    <p className="text-gray-500">No employees found</p>
                  </td>
                </tr>
              ) : (
                filteredEmployees.map((emp) => (
                  <tr key={emp.id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center">
                          <span className="text-sm font-medium">{emp.name?.charAt(0)}</span>
                        </div>
                        <span className="font-medium text-white">{emp.name}</span>
                      </div>
                    </td>
                    <td>{emp.email}</td>
                    <td>
                      <span className="px-2 py-1 rounded-full text-xs bg-indigo-600/20 text-indigo-300">
                        {emp.designation}
                      </span>
                    </td>
                    <td>{emp.contact_no}</td>
                    <td>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => { setSelectedEmployee(emp); setIsModalOpen(true); }}
                          className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600/30"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(emp.id)}
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

      <EmployeeModal
        isOpen={isModalOpen}
        onClose={() => { setIsModalOpen(false); setSelectedEmployee(null); }}
        onSubmit={handleSubmit}
        employee={selectedEmployee}
        loading={modalLoading}
      />
    </div>
  );
};

export default EmployeeList;