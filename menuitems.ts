export  const menuitems = [
    { id:'1', title: "Home", url: "/" },
    {
        id:'2', title: "About Us",
        url: "#",
        submenu: [
            { id:'3', title: 'EBCOG', url: '/#ebcog' },
            { id:'4', title: 'KnowledgeBridge', url: '#' },
        ],
    },
    {
        id:'5', title: "Diplomas",
        url: "#",
        submenu: [
            { id:'maternal-medical', title: 'Maternal Medicine', url: '/diploma/maternal-medical' },
            { id:'reproductive-endocrinology', title: 'Reproductive Endocrinology & Infertility', url: '/diploma/reproductive-endocrinology' },
            { id:'gynaecology-endoscopy', title: 'Gynaecology Endoscopy', url: '/diploma/gynaecology-endoscopy' },
            { id:'fetal-medicine-and-ultrasound', title: 'Fetal Medicine and Ultrasound', url: '/diploma/fetal-medicine-and-ultrasound' },
        ],
    },
    {
        id:'10', 
        title: "Academic Resources",
        url: "#",
        submenu: [
            { id:'11', title: 'Maternal Medicine', url: '/maternal-medicine.pdf' },
            { id:'12', title: 'Reproductive Endocrinology & Infertility', url: '/Reproductive-endocrinology-infertility.pdf' },
            { id:'13', title: 'Gynaecology Endoscopy', url: '/gynaecology-endoscopy.pdf' },
            { id:'14', title: 'Fetal Medicine and Ultrasound', url: '/fetal-medicine-and-ultrasound.pdf' },
        ],
    },
    {
        id:'13', title: "Meet Us in Person",
        url: "/meet-us-in-person",
    },
];