
export const createEmptyMatchDetailsTable = () => {

    const categories = {
        Portions: "--",
        Serving: "--",
        Calories: "--",
        Carbo: "--",
        Protein: "--",
        Fat: "--",
    }
    
    const table = document.createElement("table");
    table.setAttribute("id", "food-nutrition")

    for (let i = 0; i < Object.keys(categories).length; i++) {
        const row = document.createElement("tr");
        const nameCol = document.createElement("td");
        const dataCol = document.createElement("td");
        nameCol.textContent = Object.keys(categories)[i];
        dataCol.textContent = `${categories[Object.keys(categories)[i]]}`;
        row.appendChild(nameCol);
        row.appendChild(dataCol);
        table.appendChild(row);
    }
    return table;
} 