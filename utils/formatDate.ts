const parseDate = (iso: string) => {
  if (!iso) return new Date(NaN);
  // Si no tiene indicador de zona horaria, asumimos UTC.
  if (!iso.endsWith('Z') && !iso.match(/[+-]\d{2}:\d{2}$/)) {
    iso = iso + 'Z';
  }
  return new Date(iso);
};

export const formatDate = (
  iso: string,
  options: {
    dateStyle?: "full" | "long" | "medium" | "short";
    timeStyle?: "full" | "long" | "medium" | "short";
  } = {}
) => {
  const {
    dateStyle = "medium",
    timeStyle = "short",
  } = options;

  if (!iso) return "";

  const date = parseDate(iso);
  if (isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("es-CO", {
    dateStyle,
    timeStyle,
  }).format(date);
};

export const formatRelativeDate = (iso: string) => {
  const date = parseDate(iso);
  if (isNaN(date.getTime())) return "";

  const now = new Date();
  const diffMs = date.getTime() - now.getTime();

  const seconds = Math.round(diffMs / 1000);
  const minutes = Math.round(seconds / 60);
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);
  const weeks = Math.round(days / 7);
  const months = Math.round(days / 30);
  const years = Math.round(days / 365);

  const rtf = new Intl.RelativeTimeFormat("es-CO", { numeric: "auto" });

  if (Math.abs(years) >= 1) return rtf.format(years, "year");
  if (Math.abs(months) >= 1) return rtf.format(months, "month");
  if (Math.abs(weeks) >= 1) return rtf.format(weeks, "week");
  if (Math.abs(days) >= 1) return rtf.format(days, "day");
  if (Math.abs(hours) >= 1) return rtf.format(hours, "hour");
  if (Math.abs(minutes) >= 1) return rtf.format(minutes, "minute");

  return rtf.format(seconds, "second");
};
