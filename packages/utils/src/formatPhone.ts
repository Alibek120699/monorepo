export const formatPhone = (phone: string): string => {
  const newPhone = phone.replace(/\D/g, '').slice(-10);
  const part1 = newPhone.slice(0, 3);
  const part2 = newPhone.slice(3, 6);
  const part3 = newPhone.slice(6, 8);
  const part4 = newPhone.slice(-2);
  return `+7 (${part1}) ${part2}-${part3}-${part4}`;
};
