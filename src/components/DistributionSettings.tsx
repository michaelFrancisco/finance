import { Settings, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DistributionSettingsProps {
  showSettings: boolean;
  setShowSettings: (show: boolean) => void;
  seabankNeedsPercent: string;
  setSeabankNeedsPercent: (value: string) => void;
  seabankWantsPercent: string;
  setSeabankWantsPercent: (value: string) => void;
  cimbPercent: string;
  setCimbPercent: (value: string) => void;
  isPercentageValid: boolean;
  percentageTotal: number | undefined;
}

const DistributionSettings = ({
  showSettings,
  setShowSettings,
  seabankNeedsPercent,
  setSeabankNeedsPercent,
  seabankWantsPercent,
  setSeabankWantsPercent,
  cimbPercent,
  setCimbPercent,
  isPercentageValid,
  percentageTotal
}: DistributionSettingsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.45,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden"
    >
      <button
        onClick={() => setShowSettings(!showSettings)}
        className="w-full px-4 py-3 flex items-center justify-between text-gray-200 hover:bg-gray-700/50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Settings size={18} />
          <span className="text-sm font-medium">Distribution Settings</span>
          <span className={`text-xs ${isPercentageValid ? 'text-green-400' : 'text-red-400'}`}>
            ({percentageTotal}%)
          </span>
        </div>
        <motion.div
          animate={{ rotate: showSettings ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 py-4 border-t border-gray-700">
              <p className="text-xs text-gray-400 mb-3">Split remaining amount across accounts (must total 100%)</p>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    Needs % <span className="text-gray-600">(SeaBank)</span>
                  </label>
                  <input
                    type="number"
                    value={seabankNeedsPercent}
                    onChange={(e) => setSeabankNeedsPercent(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-100 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    Wants % <span className="text-gray-600">(SeaBank)</span>
                  </label>
                  <input
                    type="number"
                    value={seabankWantsPercent}
                    onChange={(e) => setSeabankWantsPercent(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-100 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    Savings % <span className="text-gray-600">(CIMB)</span>
                  </label>
                  <input
                    type="number"
                    value={cimbPercent}
                    onChange={(e) => setCimbPercent(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-100 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className={`mt-3 text-xs font-medium ${isPercentageValid ? 'text-green-400' : 'text-red-400'}`}>
                Total: {percentageTotal}% {!isPercentageValid && '(Must equal 100%)'}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DistributionSettings;
