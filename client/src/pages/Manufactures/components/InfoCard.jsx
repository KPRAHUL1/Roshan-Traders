const InfoCard = ({ children, title, icon }) => (
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
    <div className="p-6 border-b border-gray-100 flex items-center space-x-3">
      <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <div className="p-6">{children}</div>
  </div>
)

export default InfoCard;