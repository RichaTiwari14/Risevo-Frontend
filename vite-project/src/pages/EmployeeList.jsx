import { useState, useEffect, useMemo } from "react";
import {
  GetEmployees,
  CreateEmployee,
  UpdateEmployee,
  DeleteEmployee,
} from "../services/Services";
import EmployeeModal from "../Components/Modals/EmployeeModal";
import { Search, Plus, Edit2, Trash2, Users } from "lucide-react";
import toast from "react-hot-toast";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalLoading, setModalLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await GetEmployees();
      setEmployees(response.employees || response || []);
    } catch {
      toast.error("Failed to fetch employees");
    } finally {
      setLoading(false);
    }
  };

  const filteredEmployees = useMemo(() => {
    if (!searchQuery) return employees;
    const q = searchQuery.toLowerCase();
    return employees.filter(
      (e) =>
        e.name?.toLowerCase().includes(q) ||
        e.email?.toLowerCase().includes(q) ||
        e.designation?.toLowerCase().includes(q)
    );
  }, [employees, searchQuery]);

  const handleSubmit = async (formData) => {
    setModalLoading(true);
    try {
      if (selectedEmployee) {
        const res = await UpdateEmployee(selectedEmployee.id, formData);
        setEmployees((p) =>
          p.map((e) =>
            e.id === selectedEmployee.id ? res.employee || res : e
          )
        );
        toast.success("Employee updated");
      } else {
        const res = await CreateEmployee(formData);
        setEmployees((p) => [...p, res.employee || res]);
        toast.success("Employee created");
      }
      setIsModalOpen(false);
      setSelectedEmployee(null);
    } catch (err) {
      toast.error(err.response?.data?.error || "Operation failed");
    } finally {
      setModalLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this employee?")) return;
    try {
      await DeleteEmployee(id);
      setEmployees((p) => p.filter((e) => e.id !== id));
      toast.success("Employee deleted");
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
          <h1 className="text-2xl font-bold text-white">Employee Management</h1>
          <p className="text-gray-400 text-sm mt-1">
            View and manage employees
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedEmployee(null);
            setIsModalOpen(true);
          }}
          className="px-4 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-indigo-900/40 hover:from-indigo-600 hover:to-purple-700 transition flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Employee
        </button>
      </div>

      {/* Search */}
      <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, email or designation..."
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
                <th className="px-6 py-3 text-left font-semibold">Employee</th>
                <th className="px-6 py-3 text-left font-semibold">Email</th>
                <th className="px-6 py-3 text-left font-semibold">
                  Designation
                </th>
                <th className="px-6 py-3 text-left font-semibold">Contact</th>
                <th className="px-6 py-3 text-left font-semibold">Actions</th>
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
                  <tr
                    key={emp.id}
                    className="border-b border-white/5 hover:bg-white/5 transition"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 grid place-items-center text-white font-medium shadow-md shadow-emerald-900/40">
                          {emp.name?.charAt(0)}
                        </div>
                        <span className="font-medium text-white">
                          {emp.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-gray-300">{emp.email}</td>

                    <td className="px-6 py-4">
                      <span className="px-2 py-1 rounded-full text-xs bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                        {emp.designation}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-gray-300">
                      {emp.contact_no}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setSelectedEmployee(emp);
                            setIsModalOpen(true);
                          }}
                          className="p-2 rounded-lg bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/25 transition"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => handleDelete(emp.id)}
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

      <EmployeeModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedEmployee(null);
        }}
        onSubmit={handleSubmit}
        employee={selectedEmployee}
        loading={modalLoading}
      />
    </div>
  );
};

export default EmployeeList;
