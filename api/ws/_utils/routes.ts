export const getErateBaseURL = () => {
  if (process.env.NODE_ENV === "test") return "ws://127.0.0.1:8080";
  if (process.env.NODE_ENV === "production") return "ws://127.0.0.1:8080";
  return "ws://127.0.0.1:8080"; // development;
};

export const ERATE_BASE = getErateBaseURL();
