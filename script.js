document.addEventListener("DOMContentLoaded", function () {
    const hiddenElements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target); // หยุดสังเกตเมื่อแสดงแล้ว
                }
            });
        },
        { threshold: 0.2 } // กำหนดให้เริ่มแสดงเมื่อเห็น 20% ขององค์ประกอบ
    );

    hiddenElements.forEach(element => {
        observer.observe(element);
    });
});
