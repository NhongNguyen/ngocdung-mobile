// Lấy tất cả các phần tử carousel border
const carouselItems = document.querySelectorAll('.dangki-carousel-border');

// Số lượng phần tử trong carousel
const totalItems = carouselItems.length;

// Index của phần tử hiện tại
let currentItemIndex = 0;

// Hàm hiển thị phần tử tiếp theo
function showNextItem() {
    // Ẩn phần tử hiện tại
    carouselItems[currentItemIndex].style.display = 'none';

    // Tăng chỉ số hiện tại
    currentItemIndex++;

    // Nếu chỉ số vượt quá số lượng phần tử, quay lại phần tử đầu tiên
    if (currentItemIndex >= totalItems) {
        currentItemIndex = 0;
    }

    // Hiển thị phần tử tiếp theo
    carouselItems[currentItemIndex].style.display = 'block';
}

// Thiết lập thời gian chuyển đổi tự động
const interval = setInterval(showNextItem, 3000); // Thay đổi 3000 để điều chỉnh tốc độ chuyển đổi

// Tạm dừng chuyển đổi khi người dùng di chuột vào carousel
carouselItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        clearInterval(interval);
    });

    item.addEventListener('mouseleave', () => {
        interval = setInterval(showNextItem, 3000); // Thay đổi 3000 tại đây nếu cần
    });
});
