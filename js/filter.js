let rellax;
document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.rellax')) {
        rellax = new Rellax('.rellax');
    }


    const btnContainer = document.getElementById("filterBtn");
    if (btnContainer) {
        const btns = btnContainer.getElementsByClassName("filter-btn");
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                const current = document.querySelector(".filter-active");
                if (current) {
                    current.classList.remove("filter-active");
                }
                this.classList.add("filter-active");
            });
        }
    }

    // 初始显示所有
    filterSelection("all");
});

function filterSelection(c) {
    const columns = document.querySelectorAll(".filter-column");
    const showAll = c === "all";

    columns.forEach(col => {
        const shouldShow = showAll || col.classList.contains(c);
        col.classList.toggle("filter-show", shouldShow);
    });

    try {
        if (rellax && typeof rellax.refresh === 'function') {
            setTimeout(() => rellax.refresh(), 50); // 添加微小延迟确保DOM更新
        }
    } catch (e) {
        console.warn("Rellax refresh error:", e);
    }
}


function w3AddClass(element, name) {
    element.classList.add(...name.split(" "));
}

function w3RemoveClass(element, name) {
    element.classList.remove(...name.split(" "));
}