// Sử dụng Javascript để thực hiện các công việc sau

// Thêm 3 job bổ sung vào phần ‘job’ của trang bằng cách sao chép ‘job-card’ ban đầu.
const job1 = document.querySelector(".job-card")
const jobs = document.querySelector(".jobs")
const job2 = job1.cloneNode(true);
const job3 = job1.cloneNode(true);
const job4 = job1.cloneNode(true);
jobs.appendChild(job2);
jobs.appendChild(job3);
jobs.appendChild(job4);
// Cập nhật tiêu đề của các job mới thành : JavaScript Developer, Java Developer, Python Developer
    job2.querySelector("h3").innerText = "JavaScript Developer";
    job3.querySelector("h3").innerText = "Java Developer";
    job4.querySelector("h3").innerText = "Python Developer";

// Cập nhật Jobs listed thành tổng số công việc hiện có trong trang
    const countEl = document.querySelector("#jobs-listed span")
    const jobCards = document.querySelectorAll(".job-card")
    countEl.innerText = jobCards.length;
// Nhập tên công việc vào ô tìm kiếm để lọ.c các công việc (lọc theo tên công việc). Những công việc được tìm thấy sẽ hiển thị ra, còn lại sẽ bị ẩn đi

const searchEl = document.getElementById("search")
searchEl.addEventListener("keyup", function() {
    let value = this.value;
    Array.from(jobCards).forEach(job => {
        const jobTitle = job.querySelector("h3").innerText;
        if(jobTitle.toLowerCase().includes(value.toLowerCase())) {
            job.style.display = "block";
        }
        else {
            job.style.display = "none";
        }
    })
})
// Bấm vào Nút “All jobs” để reset ô tìm kiếm và hiển thị ra tất cả các công việc
const showAll = document.getElementById("show-all");
showAll.addEventListener("click", function() {
    searchEl.innerText = "";
    Array.from(jobCards).forEach(job => {
        job.style.display = "block";

    })
})