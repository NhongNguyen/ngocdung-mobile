// Lấy tất cả các phần tử carousel border
const carouselItems = document.querySelectorAll('.dangki-carousel-border');

// Số lượng phần tử trong carousel
const totalItems = carouselItems.length;

// Index của phần tử hiện tại
let currentItemIndex = 0;

// Hàm hiển thị phần tử với index được chỉ định
function showItem(index) {
    // Ẩn tất cả các phần tử
    carouselItems.forEach(item => {
        item.style.display = 'none';
    });

    // Hiển thị phần tử được chỉ định
    carouselItems[index].style.display = 'block';
}

// Hiển thị phần tử đầu tiên khi trang được tải
showItem(currentItemIndex);

// Hàm tự động chuyển đổi carousel
function autoChangeCarousel() {
    currentItemIndex++;
    if (currentItemIndex >= totalItems) {
        currentItemIndex = 0;
    }
    showItem(currentItemIndex);
}

// Thiết lập tự động chuyển đổi sau mỗi khoảng thời gian
const intervalId = setInterval(autoChangeCarousel, 3000); // Thay đổi 3000 để điều chỉnh thời gian chuyển đổi

// Xử lý khi bấm vào mũi tên trái
document.querySelector('.left-arrow').addEventListener('click', () => {
    clearInterval(intervalId); // Dừng tự động chuyển đổi
    currentItemIndex--;
    if (currentItemIndex < 0) {
        currentItemIndex = totalItems - 1;
    }
    showItem(currentItemIndex);
});

// Xử lý khi bấm vào mũi tên phải
document.querySelector('.right-arrow').addEventListener('click', () => {
    clearInterval(intervalId); // Dừng tự động chuyển đổi
    currentItemIndex++;
    if (currentItemIndex >= totalItems) {
        currentItemIndex = 0;
    }
    showItem(currentItemIndex);
});
// Lấy tất cả các phần tử carousel border
const carouselItems2 = document.querySelectorAll('.review-carousel-img');

// Số lượng phần tử trong carousel
const totalItems2 = carouselItems2.length;


// Index của phần tử hiện tại
let currentItemIndex2 = 0;

// Hàm hiển thị phần tử với index được chỉ định
function showItem2(index) {
    // Ẩn tất cả các phần tử
    carouselItems2.forEach(item => {
        item.style.display = 'none';
    });

    // Hiển thị phần tử được chỉ định
    carouselItems2[index].style.display = 'block';
}

// Hiển thị phần tử đầu tiên khi trang được tải
showItem2(currentItemIndex2);

// Xử lý khi bấm vào mũi tên trái
document.querySelector('.left-arrow').addEventListener('click', () => {
    // Giảm chỉ số hiện tại
    currentItemIndex2--;

    // Nếu chỉ số nhỏ hơn 0, quay lại phần tử cuối cùng
    if (currentItemIndex2 < 0) {
        currentItemIndex2 = totalItems2 - 1;
    }

    // Hiển thị phần tử mới
    showItem2(currentItemIndex2);
});

// Xử lý khi bấm vào mũi tên phải
document.querySelector('.right-arrow').addEventListener('click', () => {
    // Tăng chỉ số hiện tại
    currentItemIndex2++;

    // Nếu chỉ số vượt quá số lượng phần tử, quay lại phần tử đầu tiên
    if (currentItemIndex2 >= totalItems2) {
        currentItemIndex2 = 0;
    }

    // Hiển thị phần tử mới
    showItem2(currentItemIndex2);
});