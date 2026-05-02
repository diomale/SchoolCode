function handleDivide() {
    const a = Number(document.getElementById("num1").value);
    const b = Number(document.getElementById("num2").value);

    try {
        if (b === 0) {
            throw new RangeError("Cannot divide by zero.");
        }

        const result = a / b;
        document.getElementById("output").textContent = "Result: " + result;

    } catch (error) {
        document.getElementById("output").textContent = "Error: " + error.message;
    }
}