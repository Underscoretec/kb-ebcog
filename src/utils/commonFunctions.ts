export const getCourseName = (key:string) => {
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
            break;
    }
}