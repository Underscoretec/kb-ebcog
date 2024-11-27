export  const menuitems = [
    { id:'1', title: "Home", url: "/" },
    {
        id:'2', title: "About Us",
        url: "#",
        submenu: [
            { id:'3', title: 'EBCOG', url: '#ebcog' },
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
        id:'10', title: "Academic Resources",
        url: "#",
        submenu: [
            { id:'11', title: 'Acadmic Calendar', url: '/acadmic-calendar' },
        ],
    },
    {
        id:'13', title: "Meet Us in Person",
        url: "#",
    },
];