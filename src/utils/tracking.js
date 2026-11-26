export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      campaign: "cpns_2027",
      ...params,
    });
  }
};
