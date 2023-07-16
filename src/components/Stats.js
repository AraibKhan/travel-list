const Stats = ({ items }) => {
  //Derived States (derived from existing state or props).
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercent = Math.round((packedItems / numItems) * 100) || 0;

  return (
    <footer className="stats">
      <em>
        {packedPercent === 100
          ? "You got everything! Ready to go✈"
          : `💼 You have ${numItems} items on your list, and you already packed
        ${packedItems} (${packedPercent}%)`}
      </em>
    </footer>
  );
};

export default Stats;
