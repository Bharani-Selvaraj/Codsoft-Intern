document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector('[name="display"]');
    const buttons = document.querySelectorAll("input[type='button']");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = this.value;
            if (value === "=") {
                calculate();
            } else if (value === "AC") {
                display.value = "";
            } else if (value === "DEL") {
                display.value = display.value.slice(0, -1);
            } else {
                display.value += value;
            }
        });
    });

    function calculate() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    }
});
