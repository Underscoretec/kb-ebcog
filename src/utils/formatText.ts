import { toast } from "react-toastify";

export const formatBasePrice = (basePrice: number) => {
    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(basePrice || 0);
};


export const handleCopy = (copiedText: any, msg: any) => {
    if (copiedText) {
      navigator.clipboard
        .writeText(copiedText)
        .then(() => {
            toast.success(msg);
        })
        .catch((error) => console.error("Unable to copy", error));
    }
};

export const formatCourseName = (key:string) => {
    switch (key) {
        case 'maternalMedicine':
            return 'Maternal Medicine';
        case 'fetalMedicine_Ultrasound':
            return 'Fetal Medicine and Ultrasound';
        case 'reproductiveEndocrinology_Infertility':
            return 'Reproductive Endocrinology & Infertility';
        case 'gynaecologyEndoscopy':
            return 'Gynaecology Endoscopy';
    
        default:
            return key;
    }
}