const call = <T extends any[]>(fn: (...args: T) => any, ...args: T) => {
  return fn(...args);
};

export default call;
