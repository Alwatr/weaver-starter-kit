export function trim(content) {
  return content.trim();
}

const defaultLocale = 'fa-IR';

export function dateString(date, locale = defaultLocale, options = {year: 'numeric', month: 'long', day: 'numeric'}) {
  return new Date(date).toLocaleDateString(locale, options);
}

export function timeString(time, locale = defaultLocale, options = {hour: 'numeric', minute: 'numeric'}) {
  return new Date(time).toLocaleTimeString(locale, options);
}
