import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const monthlyData = [
  { month: 'Jan', employees: 12, enquiries: 45 },
  { month: 'Feb', employees: 19, enquiries: 52 },
  { month: 'Mar', employees: 25, enquiries: 38 },
  { month: 'Apr', employees: 32, enquiries: 65 },
  { month: 'May', employees: 28, enquiries: 48 },
  { month: 'Jun', employees: 35, enquiries: 72 },
];

const departmentData = [
  { name: 'Engineering', value: 35, color: '#6366f1' },
  { name: 'Design', value: 20, color: '#8b5cf6' },
  { name: 'Marketing', value: 15, color: '#ec4899' },
  { name: 'Sales', value: 20, color: '#14b8a6' },
  { name: 'HR', value: 10, color: '#f59e0b' },
];

export const EmployeeEnquiryChart = () => {
  return (
    <div className="card p-5">
      <h3 className="text-lg font-semibold text-white mb-4">Monthly Trends</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={monthlyData}>
            <defs>
              <linearGradient id="colorEmployees" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorEnquiries" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="month" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip 
              contentStyle={{ 
                background: '#1e293b', 
                border: '1px solid #334155',
                borderRadius: '8px'
              }}
            />
            <Area
              type="monotone"
              dataKey="employees"
              stroke="#6366f1"
              fill="url(#colorEmployees)"
              name="Employees"
            />
            <Area
              type="monotone"
              dataKey="enquiries"
              stroke="#8b5cf6"
              fill="url(#colorEnquiries)"
              name="Enquiries"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const DepartmentChart = () => {
  return (
    <div className="card p-5">
      <h3 className="text-lg font-semibold text-white mb-4">Department Distribution</h3>
      <div className="h-64 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={departmentData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {departmentData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                background: '#1e293b', 
                border: '1px solid #334155',
                borderRadius: '8px'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-2">
        {departmentData.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
            <span className="text-sm text-gray-400">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};