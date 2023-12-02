
let increaseBtn = document.getElementById("increase-btn");
let saveBtn = document.getElementById("save-btn");
let showCount = document.getElementById("countNumber");
let showPrevious = document.getElementById("storageNumber");

let count = 0;
showCount.textContent += count;

increaseBtn.addEventListener("click",
    function () {
        count += 1;
        showCount.textContent = count; 
    }
)

saveBtn.addEventListener("click",
    function () {
        let countElement = count + " - "
        showPrevious.textContent += countElement;

        count = 0;
        showCount.textContent = 0;
    }
)