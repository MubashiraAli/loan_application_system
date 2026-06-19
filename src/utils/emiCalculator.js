export function calculateEMI(
  principal,
  annualRate,
  months
) {
  const r = annualRate / 12 / 100;

  const emi =
    (principal *
      r *
      Math.pow(1 + r, months)) /
    (Math.pow(1 + r, months) - 1);

  return emi.toFixed(2);
}