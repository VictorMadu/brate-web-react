const usePriceTable = (marketType: "parallel" | "black") => {
  if (marketType === "parallel") return useParallelTable();
  return useBlackTable();
};

const useParallelTable = () => {};
