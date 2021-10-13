export const checkString: (val: string) => Boolean = (value: string) => {
  const s2 = value.trim();
  if (!s2) return true;
  if (/([a-z])/.test(s2)) return false;
  return true;
};
