// Lấy tất cả các phần tử carousel border
const carouselItems1 = document.querySelectorAll('.dangki-carousel-border');
const carouselItems2 = document.querySelectorAll('.review-carousel-img');

// Số lượng phần tử trong carousel
const totalItems1 = carouselItems1.length;

const totalItems2 = carouselItems2.length;

// Index của phần tử hiện tại
let currentItemIndex1 = 0;

// Hàm hiển thị phần tử với index được chỉ định
function showItem(index) {
    // Ẩn tất cả các phần tử
    carouselItems1.forEach(item => {
        item.style.display = 'none';
    });

    // Hiển thị phần tử được chỉ định
    carouselItems1[index].style.display = 'block';
}

// Hiển thị phần tử đầu tiên khi trang được tải
showItem(currentItemIndex);

// Hàm tự động chuyển đổi carousel
function autoChangeCarousel() {
    currentItemIndex++;
    if (currentItemIndex >= totalItems1) {
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
        currentItemIndex = totalItems1 - 1;
    }
    showItem(currentItemIndex);
});

// Xử lý khi bấm vào mũi tên phải
document.querySelector('.right-arrow').addEventListener('click', () => {
    clearInterval(intervalId); // Dừng tự động chuyển đổi
    currentItemIndex++;
    if (currentItemIndex >= totalItems1) {
        currentItemIndex = 0;
    }
    showItem(currentItemIndex);
});

//

// Index của phần tử hiện tại
let currentItemIndex2 = 0;

// Hàm hiển thị phần tử với index được chỉ định
function showItem(index) {
    // Ẩn tất cả các phần tử
    carouselItems1.forEach(item => {
        item.style.display = 'none';
    });

    // Hiển thị phần tử được chỉ định
    carouselItems1[index].style.display = 'block';
}

// Hiển thị phần tử đầu tiên khi trang được tải
showItem(currentItemIndex2);

// Hàm tự động chuyển đổi carousel
function autoChangeCarousel() {
    currentItemIndex2++;
    if (currentItemIndex2 >= totalItems1) {
        currentItemIndex2 = 0;
    }
    showItem(currentItemIndex2);
}

// Thiết lập tự động chuyển đổi sau mỗi khoảng thời gian
const intervalId2 = setInterval(autoChangeCarousel, 3000); // Thay đổi 3000 để điều chỉnh thời gian chuyển đổi

// Xử lý khi bấm vào mũi tên trái
document.querySelector('.left-arrow').addEventListener('click', () => {
    clearInterval(intervalId2); // Dừng tự động chuyển đổi
    currentItemIndex2--;
    if (currentItemIndex2 < 0) {
        currentItemIndex2 = totalItems1 - 1;
    }
    showItem(currentItemIndex);
});

// Xử lý khi bấm vào mũi tên phải
document.querySelector('.right-arrow').addEventListener('click', () => {
    clearInterval(intervalId); // Dừng tự động chuyển đổi
    currentItemIndex++;
    if (currentItemIndex >= totalItems1) {
        currentItemIndex = 0;
    }
    showItem(currentItemIndex);
});

