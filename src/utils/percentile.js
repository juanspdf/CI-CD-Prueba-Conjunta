function percentile(p, values) {
  if (typeof p !== 'number' || !Number.isFinite(p)) throw new TypeError('p debe ser numérico');
  if (p < 0 || p > 100) throw new RangeError('p fuera de rango [0,100]');
  if (!Array.isArray(values) || values.length === 0) throw new TypeError('values debe ser arreglo con al menos 1 valor');

  for (const v of values) {
    if (typeof v !== 'number' || !Number.isFinite(v)) throw new TypeError('values debe contener solo números');
  }

  const sorted = [...values].sort((a, b) => a - b);
  const N = sorted.length;

  if (p === 0) return Number(sorted[0].toFixed(2));
  if (p === 100) return Number(sorted[N - 1].toFixed(2));

  const rank = Math.ceil((p / 100) * N);
  return Number(sorted[rank - 1].toFixed(2));
}

module.exports = percentile;
