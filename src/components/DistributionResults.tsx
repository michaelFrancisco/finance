import { motion } from 'framer-motion';

interface Results {
  total: number;
  personal: number;
  afterPersonalTransfer: number;
  availableForDistribution: number;
  seabankNeeds: number;
  seabankWants: number;
  cimbSavings: number;
  maintainingBalance: number;
  totalDistributed: number;
  difference: number;
  percentageTotal: number;
}

interface DistributionResultsProps {
  results: Partial<Results>;
  formatCurrency: (amount: number | undefined) => string;
}

const DistributionResults = ({ results, formatCurrency }: DistributionResultsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.15,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl p-4 mb-4 space-y-3"
    >
      <div className="flex justify-between items-center pb-2 border-b border-gray-700">
        <span className="text-sm font-medium text-gray-300">Starting Amount:</span>
        <span className="font-bold text-base text-gray-100">{formatCurrency(results.total)}</span>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-blue-400 font-medium">Personal:</span>
          <span className="text-sm font-semibold text-gray-200">{formatCurrency(results.personal)}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-green-400 font-medium">SeaBank Needs:</span>
          <span className="text-sm font-semibold text-gray-200">{formatCurrency(results.seabankNeeds)}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-purple-400 font-medium">SeaBank Wants:</span>
          <span className="text-sm font-semibold text-gray-200">{formatCurrency(results.seabankWants)}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-orange-400 font-medium">CIMB Savings:</span>
          <span className="text-sm font-semibold text-gray-200">{formatCurrency(results.cimbSavings)}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400 font-medium">Maintaining Balance:</span>
          <span className="text-sm font-semibold text-gray-200">{formatCurrency(results.maintainingBalance)}</span>
        </div>
      </div>

      <div className="pt-3 border-t border-gray-700">
        <div className="flex justify-between items-center">
          <span className="text-sm font-bold text-gray-200">Total Distributed:</span>
          <span className="font-bold text-base text-gray-100">{formatCurrency(results.totalDistributed)}</span>
        </div>

        {results.difference !== undefined && Math.abs(results.difference) > 0.01 && (
          <div className="flex justify-between items-center mt-1">
            <span className="text-xs text-red-400">Difference:</span>
            <span className="text-xs text-red-400">{formatCurrency(results.difference)}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default DistributionResults;
