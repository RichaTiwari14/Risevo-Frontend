import { motion } from "framer-motion";

const colorMap = {
  indigo: "from-indigo-500/20 to-indigo-900/10",
  emerald: "from-emerald-500/20 to-emerald-900/10",
  blue: "from-blue-500/20 to-blue-900/10",
  purple: "from-purple-500/20 to-purple-900/10",
};

const iconColor = {
  indigo: "text-indigo-400",
  emerald: "text-emerald-400",
  blue: "text-blue-400",
  purple: "text-purple-400",
};

const StatsCard = ({ title, value, icon: Icon, color = "indigo" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.15 }}
      className={`
        rounded-xl border border-white/10 
        bg-gradient-to-b ${colorMap[color]} 
        backdrop-blur-sm shadow-lg shadow-black/30
        hover:border-${color}-400/40 hover:shadow-${color}-900/40
        p-5 transition
      `}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <h2 className="text-3xl font-bold text-white mt-1">{value}</h2>
        </div>

        <div
          className={`
            w-10 h-10 rounded-lg grid place-items-center 
            bg-white/10 border border-white/20 
            ${iconColor[color]}
          `}
        >
          <Icon className="w-5 h-5" />
        </div>
      </div>
    </motion.div>
  );
};

export default StatsCard;
