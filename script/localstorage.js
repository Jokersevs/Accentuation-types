document.addEventListener("DOMContentLoaded", function () {
    const radios = document.querySelectorAll('input[type="radio"]');

    // Відновлення стану з localStorage
    radios.forEach(function (radio) {
        const name = radio.name;
        const savedValue = localStorage.getItem(name);

        if (savedValue && radio.value === savedValue) {
            radio.checked = true;
            updateCellColor(radio); // Встановлюємо колір при завантаженні
        }

        radio.addEventListener("change", function (event) {
            const selectedRadio = event.target;
            const cellId = selectedRadio.getAttribute("data-cell-id");

            // Зберігаємо значення у localStorage
            localStorage.setItem(selectedRadio.name, selectedRadio.value);

            updateCellColor(selectedRadio);
        });
    });

    function updateCellColor(radio) {
        const cellId = radio.getAttribute("data-cell-id");

        const allRelatedCells = document.querySelectorAll(
            `.cell_name[data-cell-id="${cellId}"], .underline[data-cell-id="${cellId}"]`
        );

        // Скидаємо колір для всіх варіантів з цим cellId
        allRelatedCells.forEach(cell => {
            cell.style.backgroundColor = "lightcoral";
        });

        // Встановлюємо зелений лише для обраного варіанту
        if (radio.checked) {
            allRelatedCells.forEach(cell => {
                cell.style.backgroundColor = "lightgreen";
            });
        }
    }
});

// кнопка очищення вибору
document.getElementById("resetSelections").addEventListener("click", function () {
    // Видалити всі збережені значення
    const radios = document.querySelectorAll('input[type="radio"]');

    radios.forEach(function (radio) {
        localStorage.removeItem(radio.name); // очищаємо localStorage
        radio.checked = false; // скидаємо вибір
    });

    // Скинути підсвічування
    const allCells = document.querySelectorAll(".cell_name, .underline");
    allCells.forEach(function (cell) {
        cell.style.backgroundColor = "";
    });
});

    // Якщо жодна радіокнопка з таким value не вибрана, скидаємо колір
    const elementsToReset = document.querySelectorAll(`.cell_name, .underline`);
    elementsToReset.forEach(element => {
              element.style.backgroundColor = 'lightcoral';
    });