const xorEncription = (input: string): string => {
    try {
        let output = "";
        const secKey = process.env.NEXT_PUBLIC_SEC_KEY;
        if (!secKey) {
            throw new Error("Security key is undefined or not set.");
        }
        for (let i = 0; i < input.length; i++) {
            const inCode = input.charCodeAt(i);
            const secCode = secKey.charCodeAt(i % secKey.length);  
            const xorCode = inCode ^ secCode;
            output += String.fromCharCode(xorCode);
        }
        return output;
    } catch (err) {
        console.error(err);
        return "";
    }
};

export const encrypt = (data: any): string => {
    const stringifyData = JSON.stringify(data);
    return xorEncription(stringifyData);
};

export const decrypt = (data: string): any => {
    const getData = xorEncription(data);
    try {
        return JSON.parse(getData);
    } catch (err) {
        console.error("Decryption failed: ", err);
        return null; 
    }
};
