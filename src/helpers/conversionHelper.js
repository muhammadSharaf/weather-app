export const formatHh = hours => {
  const temp = '0' + hours + ':00';
  return temp.slice(-5);
};

export const convertTemperature = (value, celToFeh) => {
  if (celToFeh) {
    return Math.round((value * 9) / 5 + 32);
  }

  return Math.round(((value - 32) * 5) / 9);
};

export const convertSpeed = (value, kmhTomph) => {
  if (kmhTomph) {
    return (value / 1.609).toFixed(2);
  }

  return (value * 1.609).toFixed(2);
};
