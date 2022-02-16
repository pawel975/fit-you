
export const createDiaryTable = (foodRecords) => {

    const summaryNutritions = {
        calories: 0,
        carbohydrates: 0,
        proteins: 0,
        fat: 0
    }

    // Create table basic structure elements
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    // Create table headers
    const headers = ["Name", "Kcal", "Carbohydrates", "Proteins", "Fat"];
    const headRow = document.createElement("tr");

    for (let i = 0; i < headers.length; i++) {
        const td = document.createElement("td");
        td.textContent = headers[i];
        headRow.appendChild(td);
    }
    thead.appendChild(headRow);
    
    // Populate table body with records
    foodRecords.forEach(record => {
        const categories = {
            calories: record.calories, 
            carbohydrates: record.carbohydrates,
            proteins: record.proteins,
            fat: record.fat, 
        }

        summaryNutritions.calories += Number(categories.calories);
        summaryNutritions.carbohydrates += Number(categories.carbohydrates);
        summaryNutritions.proteins += Number(categories.proteins);
        summaryNutritions.fat += Number(categories.fat);
    
        const bodyRow = document.createElement("tr");
        const td = document.createElement("td");
        bodyRow.appendChild(td);
        td.textContent = record.name;
    
        for (let i = 0; i < Object.keys(categories).length; i++) {
            let td = document.createElement("td");
            td.setAttribute("class", Object.keys(categories)[i]);
            let summaryValue = categories[Object.keys(categories)[i]] + (Object.keys(categories)[i] === "calories" ? "kcal" : "g")
            td.textContent = `${summaryValue}`
            bodyRow.appendChild(td);
        }

        tbody.appendChild(bodyRow);
    })

    // Create table summary
    const bodyRow = document.createElement("tr");
    const td = document.createElement("td");
    bodyRow.appendChild(td);
    td.setAttribute("id", "table-summary");
    td.textContent = "Summary";

    const summaryIds = {
        calories: "kcal-total", 
        carbohydrates: "carbohydrates-total", 
        proteins: "protein-total", 
        fat: "fat-total",
    };

    for (let i = 0; i < Object.keys(summaryIds).length; i++) {
        const td = document.createElement("td");
        td.setAttribute("id", Object.keys(summaryIds)[i]);
        td.textContent = `${summaryNutritions[Object.keys(summaryNutritions)[i]] + (Object.keys(summaryNutritions)[i] === "calories" ? "kcal" : "g")}`
        bodyRow.appendChild(td);
    }

    tbody.appendChild(bodyRow);

    // Add head and body to table
    table.appendChild(thead);
    table.appendChild(tbody);

    return table
}