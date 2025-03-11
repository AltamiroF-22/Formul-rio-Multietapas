export default function getPeriodLabel(
    isYearSelected: boolean,
    usePreposition?: boolean,
    capitalize?: boolean
  ): string {
    if (usePreposition) return isYearSelected ? "por ano" : "por mês";
    if (capitalize) return isYearSelected ? "Anual" : "Mensal";
    return isYearSelected ? "ano" : "mês";
  }
  