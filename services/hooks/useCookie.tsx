import Cookie from "js-cookie";
const useCookie = () => {
  const getItem = (key: string): string => {
    return Cookie.get(key) || "";
  };

  const setItem = (key: string, value: string): void => {
    Cookie.set(key, value);
  };

  const removeItem = (key: string): void => {
    Cookie.remove(key);
  };

  return {
    getItem,
    setItem,
    removeItem
  };
};

export default useCookie;
