import { useState, useEffect, useMemo } from 'react';
import { GetEnquiries, DeleteEnquiry } from '../services/Services';
import { Search, Trash2, MessageSquare, Mail, Phone } from 'lucide-react';
import toast from 'react-hot-toast';

const EnquiryList = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const response = await GetEnquiries();
      setEnquiries(response.enquiries || response || []);
    } catch (error) {
      toast.error('Failed to fetch enquiries');
    } finally {
      setLoading(false);
    }
  };

  const filteredEnquiries = useMemo(() => {
    if (!searchQuery) return enquiries;
    const query = searchQuery.toLowerCase();
    return enquiries.filter(enq => 
      enq.name?.toLowerCase().includes(query) ||
      enq.email?.toLowerCase().includes(query)
    );
  }, [enquiries, searchQuery]);

  const handleDelete = async (id) => {
    if (!confirm('Delete this enquiry?')) return;
    try {
      await DeleteEnquiry(id);
      setEnquiries(prev => prev.filter(e => e.id !== id));
      toast.success('Enquiry deleted');
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
      <div>
        <h1 className="text-2xl font-bold text-white">Enquiries</h1>
        <p className="text-gray-400 text-sm mt-1">View customer enquiries</p>
      </div>

      {/* Search */}
      <div className="card p-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            className="input-field pl-10"
            placeholder="Search enquiries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Enquiry Cards */}
      {filteredEnquiries.length === 0 ? (
        <div className="card p-10 text-center">
          <MessageSquare className="w-10 h-10 text-gray-600 mx-auto mb-2" />
          <p className="text-gray-500">No enquiries found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredEnquiries.map((enq) => (
            <div key={enq.id} className="card p-5">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-sm font-medium">{enq.name?.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{enq.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      enq.is_resolved 
                        ? 'bg-green-600/20 text-green-400' 
                        : 'bg-yellow-600/20 text-yellow-400'
                    }`}>
                      {enq.is_resolved ? 'Resolved' : 'Pending'}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(enq.id)}
                  className="p-2 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600/30"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>{enq.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>{enq.phone}</span>
                </div>
              </div>

              {/* Message */}
              <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                <p className="text-sm text-gray-300 line-clamp-3">{enq.message}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EnquiryList;