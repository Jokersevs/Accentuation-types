document.getElementById("closeNotifyElement").addEventListener("click", function() {
    document.getElementById("notifyElement").style.display = "none";
});


document.addEventListener("DOMContentLoaded", function () {
    let table = document.querySelector("table");

    if (table) {
        table.addEventListener("click", function (event) {
            let cell = event.target.closest("td.trans");

            if (!cell) return;

            let targetId = cell.getAttribute("data-id");
            console.log("Натиснуто на TD з data-id:", targetId);

            if (!targetId) {
                console.warn("data-id не знайдено у натиснутій комірці.");
                return;
            }

            // Додаємо клас active до натиснутої ячейки
            cell.classList.add("active");

            let container = document.querySelector(`#${targetId}`);
            if (container) {
                console.log("Знайдено контейнер для data-id:", targetId);
                hideAllContainers();
                container.style.display = "block";
            } else {
                console.warn("Контейнер не знайдено для data-id:", targetId);
            }
        });
    }

    hideAllContainers();

    // Додаємо подію закриття контейнера
    let closeButtons = document.querySelectorAll(".close"); // Припустимо, у вас є кнопки для закриття
    closeButtons.forEach(button => {
        button.addEventListener("click", function () {
            // При закритті контейнера прибираємо активний клас з усіх ячейок
            removeActiveClass();
            hideAllContainers();
        });
    });
});

function hideAllContainers() {
    let containers = document.querySelectorAll(".description-container");
    containers.forEach(container => {
        container.style.display = "none";
    });
}

function removeActiveClass() {
    let cells = document.querySelectorAll("td.trans");
    cells.forEach(cell => {
        cell.classList.remove("active");
    });
}
