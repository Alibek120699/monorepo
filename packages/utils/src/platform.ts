const getMobileOperatingSystem = (isNextApp: boolean = false): string => {
  const userAgent = isNextApp
    ? global.navigator.userAgent || global.navigator.vendor
    : navigator.userAgent || navigator.vendor;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return 'Windows Phone';
  }

  if (/android/i.test(userAgent)) {
    return 'Android';
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (typeof window !== 'undefined') {
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return 'iOS';
    }
  } else {
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      return 'iOS';
    }
  }

  return 'unknown';
};

export const isAndroid = () => getMobileOperatingSystem() === 'Android';
export const isIOS = () => getMobileOperatingSystem() === 'iOS';
export const isWindowsPhone = () => getMobileOperatingSystem() === 'Windows Phone';
