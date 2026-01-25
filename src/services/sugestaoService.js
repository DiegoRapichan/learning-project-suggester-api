function normalizarTexto(texto) {
  return texto.toLowerCase();
}

function buscarSugestoes(aulaInformada, base) {
  const texto = normalizarTexto(aulaInformada);

  const resultados = base
    .map((item) => {
      const score = item.palavrasChave.filter((p) => texto.includes(p)).length;

      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return resultados.slice(0, 1);
}

module.exports = { buscarSugestoes };
