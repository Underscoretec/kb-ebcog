import Cookies from 'js-cookie';

const getDeviceDetails = () => {

    const ip = Cookies.get('ipAddress')


    const deviceDetails = {
        ip: ip || '',
        appName: navigator?.appName,
        appVersion: navigator?.appVersion,
        userAgent: navigator?.userAgent,
        platform: navigator?.platform,
    }
    return JSON.stringify(deviceDetails);

}

export default getDeviceDetails;