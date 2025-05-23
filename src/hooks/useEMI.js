// src/hooks/useEMI.js
const useEMI = (P, annualRate, N) => {
    const R = annualRate / 12 / 100;
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    return emi.toFixed(2);
  };
  export default useEMI;