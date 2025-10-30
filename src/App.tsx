import { useState, useEffect } from 'react';
import {
  DistributionForm,
  DistributionResults,
  DistributionSettings,
  RainingMoney
} from './components';
import { Results } from './types';

const MoneyDistributionCalculator = () => {
  const [totalAmount, setTotalAmount] = useState('40000');
  const [personalAmount, setPersonalAmount] = useState('10000');
  const [maintainingBalance, setMaintainingBalance] = useState('1000');
  const [seabankNeedsPercent, setSeabankNeedsPercent] = useState('50');
  const [seabankWantsPercent, setSeabankWantsPercent] = useState('30');
  const [cimbPercent, setCimbPercent] = useState('20');
  const [results, setResults] = useState<Partial<Results>>({});
  const [showSettings, setShowSettings] = useState(false);

  const calculate = () => {
    const total = parseFloat(totalAmount) || 0;
    const personal = parseFloat(personalAmount) || 0;
    const maintaining = parseFloat(maintainingBalance) || 0;
    const needsPercent = parseFloat(seabankNeedsPercent) || 0;
    const wantsPercent = parseFloat(seabankWantsPercent) || 0;
    const savingsPercent = parseFloat(cimbPercent) || 0;

    const afterPersonalTransfer = total - personal;
    const availableForDistribution = afterPersonalTransfer - maintaining;

    const seabankNeeds = (availableForDistribution * needsPercent) / 100;
    const seabankWants = (availableForDistribution * wantsPercent) / 100;
    const cimbSavings = (availableForDistribution * savingsPercent) / 100;

    const totalDistributed = personal + seabankNeeds + seabankWants + cimbSavings + maintaining;
    const difference = total - totalDistributed;

    setResults({
      total,
      personal,
      afterPersonalTransfer,
      availableForDistribution,
      seabankNeeds,
      seabankWants,
      cimbSavings,
      maintainingBalance: maintaining,
      totalDistributed,
      difference,
      percentageTotal: needsPercent + wantsPercent + savingsPercent
    });
  };

  useEffect(() => {
    calculate();
  }, [totalAmount, personalAmount, maintainingBalance, seabankNeedsPercent, seabankWantsPercent, cimbPercent]);

  const formatCurrency = (amount: number | undefined) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      minimumFractionDigits: 2
    }).format(amount || 0);
  };

  const isPercentageValid = results.percentageTotal === 100;

  return (
    <div className="min-h-screen bg-gray-900 p-4 sm:p-6 relative">
      <RainingMoney />
      <div className="max-w-lg mx-auto relative z-10">
        <DistributionForm
          totalAmount={totalAmount}
          setTotalAmount={setTotalAmount}
          personalAmount={personalAmount}
          setPersonalAmount={setPersonalAmount}
          maintainingBalance={maintainingBalance}
          setMaintainingBalance={setMaintainingBalance}
        />

        <DistributionResults results={results} formatCurrency={formatCurrency} />

        <DistributionSettings
          showSettings={showSettings}
          setShowSettings={setShowSettings}
          seabankNeedsPercent={seabankNeedsPercent}
          setSeabankNeedsPercent={setSeabankNeedsPercent}
          seabankWantsPercent={seabankWantsPercent}
          setSeabankWantsPercent={setSeabankWantsPercent}
          cimbPercent={cimbPercent}
          setCimbPercent={setCimbPercent}
          isPercentageValid={isPercentageValid}
          percentageTotal={results.percentageTotal}
        />
      </div>
    </div>
  );
};

export default MoneyDistributionCalculator;
