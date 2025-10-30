import { Calculator } from 'lucide-react';
import { motion } from 'framer-motion';

interface DistributionFormProps {
  totalAmount: string;
  setTotalAmount: (value: string) => void;
  personalAmount: string;
  setPersonalAmount: (value: string) => void;
  maintainingBalance: string;
  setMaintainingBalance: (value: string) => void;
}

const DistributionForm = ({
  totalAmount,
  setTotalAmount,
  personalAmount,
  setPersonalAmount,
  maintainingBalance,
  setMaintainingBalance
}: DistributionFormProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl p-4 mb-4"
    >
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="text-blue-400" size={24} />
        <h1 className="text-xl font-bold text-gray-100">Money Distribution</h1>
      </div>

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Total Amount
          </label>
          <input
            type="number"
            step="0.01"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-100 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-base"
            placeholder="40000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Personal Savings
          </label>
          <input
            type="number"
            step="0.01"
            value={personalAmount}
            onChange={(e) => setPersonalAmount(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-100 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-base"
            placeholder="10000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Maintaining Balance
          </label>
          <input
            type="number"
            step="0.01"
            value={maintainingBalance}
            onChange={(e) => setMaintainingBalance(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-100 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-base"
            placeholder="1000"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default DistributionForm;
