import React from 'react';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm">
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold">M</span>
            </div>
            <span className="text-xl font-semibold">Minicaption</span>
          </div>
        </div>
        <nav className="mt-8">
          <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50">
            <span className="mr-2">📊</span>
            Overview
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50">
            <span className="mr-2">📦</span>
            Products
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50">
            <span className="mr-2">💰</span>
            Transactions
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50">
            <span className="mr-2">👥</span>
            Users
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50">
            <span className="mr-2">⚙️</span>
            Settings
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-96 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 border rounded-lg">Button text</button>
            <button className="text-gray-600">🛒</button>
            <button className="text-gray-600">🔔</button>
            <button className="text-gray-600">❔</button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-3xl font-bold">$35.8K</h2>
                <p className="text-gray-500">Overall Revenue</p>
              </div>
              <select className="border rounded-lg px-3 py-2">
                <option>Monthly</option>
                <option>Weekly</option>
                <option>Daily</option>
              </select>
            </div>
            {/* Chart will go here */}
            <div className="h-64 bg-gray-50 rounded"></div>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Completed Orders</h3>
                  <p className="text-sm text-gray-500">This week</p>
                  <div className="mt-2">
                    <span className="text-2xl font-bold">1,368</span>
                    <span className="text-green-500 ml-2">8.43% ↑</span>
                  </div>
                </div>
                <div className="p-3 bg-green-50 rounded-full">
                  <span className="text-green-500">✓</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">New Orders</h3>
                  <p className="text-sm text-gray-500">This week</p>
                  <div className="mt-2">
                    <span className="text-2xl font-bold">1,368</span>
                    <span className="text-blue-500 ml-2">8.43% ↑</span>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 rounded-full">
                  <span className="text-blue-500">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Customers & Top Products */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* Latest Customers */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Latest Customers</h3>
              <a href="#" className="text-blue-500 text-sm">View all →</a>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Neil Sims', email: 'neil.sims@example.com', amount: '$ 367' },
                { name: 'Bonnie Green', email: 'bonnie@example.com', amount: '$ 54' },
                { name: 'Michael Gought', email: 'gought@example.com', amount: '$ 3467' },
                { name: 'Thomas Lean', email: 'thomas_lean@example.com', amount: '$ 1367' },
                { name: 'Jane Cooper', email: 'jane.cooper@example.com', amount: '$ 2367' }
              ].map((customer, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">{customer.name}</p>
                      <p className="text-sm text-gray-500">{customer.email}</p>
                    </div>
                  </div>
                  <span className="text-gray-600">{customer.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Top products</h3>
              <a href="#" className="text-blue-500 text-sm">View all →</a>
            </div>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded mr-3"></div>
                    <div>
                      <p className="font-medium">Product name</p>
                      <p className="text-sm text-gray-500">Description</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 mr-4">70 sales</span>
                    <button className="text-gray-400">⋮</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transactions */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-semibold">Transactions</h3>
              <p className="text-sm text-gray-500">This is a list of latest transactions.</p>
            </div>
            <a href="#" className="text-blue-500 text-sm">View all →</a>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="py-3 px-4">Transaction</th>
                <th className="py-3 px-4">Date & time</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { from: 'Bonnie Green', date: 'Apr 23, 2021', amount: '$2300', status: 'Completed' },
                { from: '#00910', date: 'Apr 23, 2021', amount: '-$670', status: 'Completed' },
                { from: '#087651', date: 'Apr 23, 2021', amount: '$234', status: 'Cancelled' },
                { from: 'Bonnie Green', date: 'Apr 23, 2021', amount: '$5000', status: 'In progress' },
                { from: 'Jane Cooper', date: 'Apr 23, 2021', amount: '$2300', status: 'In progress' }
              ].map((transaction, index) => (
                <tr key={index} className="border-t">
                  <td className="py-3 px-4">{transaction.from.startsWith('#') ? `Payment refund to ${transaction.from}` : `Payment from ${transaction.from}`}</td>
                  <td className="py-3 px-4">{transaction.date}</td>
                  <td className="py-3 px-4">{transaction.amount}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      transaction.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      transaction.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}