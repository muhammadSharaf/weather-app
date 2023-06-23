export const formatHh = hours => {
  const temp = '0' + hours + ':00';
  return temp.slice(-5);
};
