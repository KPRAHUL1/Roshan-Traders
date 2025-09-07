const StatCard = ({ icon, label, value, color, gradient }) => (
  <div className={`bg-gradient-to-br ${gradient} rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}>
    <div className={`mx-auto mb-3 inline-block p-3 rounded-full bg-white/20`}>
      {icon}
    </div>
    <h3 className={`font-bold text-2xl ${color}`}>{value}</h3>
    <p className={`text-sm font-medium ${color} opacity-80`}>{label}</p>
  </div>
)

export default StatCard;