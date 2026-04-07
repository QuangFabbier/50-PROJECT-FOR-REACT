import smartphoneImage from '@/img/Smartphone.png';
import laptopImage from '@/img/Laptop.png';
import tabletImage from '@/img/Tablet.png';

const features = [
    {
        id: '1',
        title: 'SmartPhone',
        shortDescription: 'Smartphone có các chức năng nghe gọi',
        longDescription:
            'Smartphone có các chức năng nghe gọi cơ bản với công nghệ hiện đại mới cho phép người dùng tải các ứng dụng như mạng xã hội, chỉnh ảnh, và chụp ảnh...',
        image: smartphoneImage,
    },
    {
        id: '2',
        title: 'Laptop',
        shortDescription: 'Laptop thay máy tính bàn với đủ công năng',
        longDescription:
            'Laptop thay cho máy tính bàn, giúp người dùng dễ mang theo bên mình, sử dụng như máy tính bàn với tiện ích là dễ mang vác ',
        image: laptopImage,
    },
    {
        id: '3',
        title: 'Tablet',
        shortDescription: 'Tablet dùng như điện thoại trừ nghe gọi',
        longDescription:
            'Tablet dùng như điện thoại trừ nghe gọi, với màn hình to hơn, dễ dàng cho việc xem phim, đọc sách, hay thậm chí là màn hình phụ, không có chức năng nghe gọi ',
        image: tabletImage,
    },
];

export default features;
