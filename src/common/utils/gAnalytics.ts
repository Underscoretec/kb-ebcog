export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const trackGAPageView = (url: string): void => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};


// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const trackGAEvent = (action:string, value: any ): void => {
  const lead = `${value?.fullName} | ${value?.whatsAppNumber}`
  const data = {...value, lead}
  if(data?.email?.indexOf('@')>0 && data?.email?.indexOf(' @')<0 ){
    data.email = data.email.replace('@', ' @')
  }
  if(data?.email?.indexOf('.')>1 && data?.email?.indexOf(' .')<0 ){
    data.email = data.email.replace('.', ' .')
  }

  window.gtag("event", action,
    data);
};