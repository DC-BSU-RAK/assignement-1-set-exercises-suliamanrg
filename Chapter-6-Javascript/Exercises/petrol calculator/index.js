// Get references to DOM elements
const costPerLiterInput = document.getElementById('cost-per-liter');
const litersInput = document.getElementById('liters');
const calculateBtn = document.getElementById('calculate-btn');
const totalCostDisplay = document.getElementById('total-cost');

// Function to calculate total cost
function calculateTotalCost() {
    // Get the values from input fields
    const costPerLiter = parseFloat(costPerLiterInput.value);
    const liters = parseFloat(litersInput.value);

    // Calculate total cost
    const totalCost = costPerLiter * liters;

    // Display the result
    totalCostDisplay.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
}

// Add an event listener to the button to trigger the calculation when clicked
calculateBtn.addEventListener('click', calculateTotalCost);
