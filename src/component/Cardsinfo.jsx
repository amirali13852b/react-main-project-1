const Cardsinfo = ({ title }) => {
  return (
    <div className="flex justify-between mt-20 border-b border-gray-700/50 pb-6">
      <h1 className="text-2xl">{title}</h1>
      <a href="" className="hover:text-purple-400">See all</a>
    </div>
  );
};

export default Cardsinfo