import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MoneyDrop {
  id: number;
  x: number;
  delay: number;
  duration: number;
}

const RainingMoney = () => {
  const [drops, setDrops] = useState<MoneyDrop[]>([]);

  useEffect(() => {
    const initialDrops: MoneyDrop[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: 20 + Math.random() * 60,
      delay: Math.random() * 10,
      duration: 12 + Math.random() * 8
    }));
    setDrops(initialDrops);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50 flex justify-center will-change-transform">
      <div className="relative w-full max-w-lg">
        {drops.map((drop) => (
          <motion.div
            key={drop.id}
            className="absolute text-4xl opacity-25 will-change-transform"
            style={{ left: `${drop.x}%` }}
            initial={{ y: -80 }}
            animate={{
              y: '100vh',
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: drop.duration,
              delay: drop.delay,
              repeat: Infinity,
              ease: 'linear',
              rotate: {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }
            }}
          >
            💵
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RainingMoney;
