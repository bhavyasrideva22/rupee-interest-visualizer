
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

interface ChartProps {
  result: {
    principal: number;
    interest: number;
    totalAmount: number;
    yearlyBreakdown: Array<{
      year: number;
      interest: number;
      balance: number;
    }>;
  };
}

export const SimpleInterestChart: React.FC<ChartProps> = ({ result }) => {
  // Data for pie chart showing principal vs interest
  const pieData = [
    { name: 'Principal', value: result.principal, color: '#245e4f' },
    { name: 'Interest', value: result.interest, color: '#7ac9a7' },
  ];

  // Add index to yearly breakdown for proper chart rendering
  const barData = result.yearlyBreakdown.map((item) => ({
    ...item,
    principalAmount: result.principal
  }));

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-dark-green">Interest Growth Visualization</h3>
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {/* Bar chart showing yearly growth */}
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={barData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis dataKey="year" label={{ value: 'Years', position: 'insideBottom', offset: -5 }} />
              <YAxis 
                tickFormatter={(value) => `₹${value.toLocaleString('en-IN', { maximumFractionDigits: 0, notation: 'compact' })}`} 
                label={{ value: 'Amount (₹)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                formatter={(value) => [`₹${Number(value).toLocaleString('en-IN')}`, '']} 
                labelFormatter={(value) => `Year ${value}`}
              />
              <Legend />
              <Bar dataKey="principalAmount" name="Principal" fill="#245e4f" />
              <Bar dataKey="interest" name="Interest" fill="#7ac9a7" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Pie chart showing principal vs interest breakdown */}
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`₹${Number(value).toLocaleString('en-IN')}`, '']}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Summary table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm">
          <thead>
            <tr className="bg-mint-green/10 border-b border-mint-green/30">
              <th className="py-2 px-3 text-left font-medium text-dark-green">Year</th>
              <th className="py-2 px-3 text-right font-medium text-dark-green">Interest</th>
              <th className="py-2 px-3 text-right font-medium text-dark-green">Balance</th>
            </tr>
          </thead>
          <tbody>
            {result.yearlyBreakdown.map((item) => (
              <tr key={item.year} className="border-b border-mint-green/10 hover:bg-mint-green/5">
                <td className="py-2 px-3 text-left">{item.year}</td>
                <td className="py-2 px-3 text-right">₹{item.interest.toLocaleString('en-IN')}</td>
                <td className="py-2 px-3 text-right font-medium">₹{item.balance.toLocaleString('en-IN')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
