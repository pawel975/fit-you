
// Creates headers in table body 
export const createTableHeaders = () => {
    
    const headRow = document.createElement("tr");

    const headers = ["Name", "Kcal", "Carbohydrates", "Proteins", "Fat"];

    for (let i = 0; i < headers.length; i++) {
        const td = document.createElement("td");
        td.textContent = headers[i];
        headRow.appendChild(td);
    }
    return headRow;
}

// Creates records in table body
export const createDiaryRecords = (record) => {

    const categories = {
        calories: record.calories, 
        carbohydydrates: record.carbohydrates,
        protein: record.proteins,
        fat: record.fat, 
    }

    const bodyRow = document.createElement("tr");
    const td = document.createElement("td");
    bodyRow.appendChild(td);
    td.textContent = record.name;

    for (let i = 0; i < Object.keys(categories).length; i++) {
        let td = document.createElement("td");
        td.setAttribute("class", Object.keys(categories)[i]);
        td.textContent = `${categories[Object.keys(categories)[i]] + (Object.keys(categories)[i] === "calories" ? "kcal" : "g")}`
        bodyRow.appendChild(td);
    }
    return bodyRow
}

// Creates summary in table body
export const createTableSummary = () => {

    const bodyRow = document.createElement("tr");
    const td = document.createElement("td");
    bodyRow.appendChild(td);
    td.setAttribute("id", "table-summary");
    td.textContent = "Summary";

    const summary = {
        Kcal: "kcal-total", 
        Carbohydrates: "carbohydrates-total", 
        Proteins: "protein-total", 
        Fat: "fat-total",
    };

    for (let i = 0; i < Object.keys(summary).length; i++) {
        const td = document.createElement("td");
        td.setAttribute("id", Object.keys(summary)[i]);
        td.textContent = `${summary[Object.keys(summary)[i]]}`
        bodyRow.appendChild(td);
    }
    return bodyRow

}