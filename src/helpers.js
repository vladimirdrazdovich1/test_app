export const getCityFromTimezone = (timeZone) => {
  if (!timeZone.includes('/')) return timeZone;

  return timeZone.split('/')[1];
};