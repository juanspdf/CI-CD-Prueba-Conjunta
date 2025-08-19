function calcWeightedGrade(items) {
  if (!Array.isArray(items)) throw new TypeError("items debe ser un arreglo");

  let totalWeight = 0;
  let totalScore = 0;

  for (const item of items) {
    if (typeof item.score !== "number" || typeof item.weight !== "number") {
      throw new TypeError("score y weight deben ser números");
    }
    if (item.score < 0 || item.score > 100) throw new RangeError("score fuera de rango");
    if (item.weight < 0 || item.weight > 1) throw new RangeError("weight fuera de rango");

    totalScore += item.score * item.weight;
    totalWeight += item.weight;
  }

  if (Math.abs(totalWeight - 1) > 0.001) {
    throw new RangeError("La suma de los pesos debe ser 1 ± 0.001");
  }

  return Number(totalScore.toFixed(2));
}

module.exports = calcWeightedGrade;
