export function formatearCelular(value) {
  // Saca todo lo que no sea número
  let digits = value.replace(/\D/g, "").slice(0, 11);

  // CABA: 11-XXXX-XXXX (11 dígitos)
  if (digits.length === 11 && digits.startsWith("11")) {
    return `${digits.slice(0,2)}-${digits.slice(2,6)}-${digits.slice(6,11)}`;
  }
  // Interior: 3 dígitos área, 7 resto (ej: 221-123-4567)
  if (digits.length === 10) {
    return `${digits.slice(0,3)}-${digits.slice(3,6)}-${digits.slice(6,10)}`;
  }
  // Si está incompleto, va armando igual
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `${digits.slice(0,2)}-${digits.slice(2)}`;
  if (digits.length <= 10) return `${digits.slice(0,2)}-${digits.slice(2,6)}-${digits.slice(6)}`;
  return digits;
}
