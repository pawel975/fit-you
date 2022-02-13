
export const createDiaryTable = (foodRecord) => {

    // data to inject
    const headers = {
        calories: foodRecord.calories, 
        protein: foodRecord.proteins,
        carbohydydrates: foodRecord.carbohydrates,
        fat: foodRecord.fat, 
    }

    // Create table 
     

    // 
    const bodyRow = document.createElement("tr");
    let td = document.createElement("td");
    bodyRow.appendChild(td);
    td.textContent = foodRecord.name;

    for (let i = 0; i < Object.keys(headers).length; i++) {
        let td = document.createElement("td");
        td.setAttribute("class", Object.keys(headers)[i]);
        td.textContent = `${headers[Object.keys(headers)[i]] + (Object.keys(headers)[i] === "calories" ? "kcal" : "g")}`
        bodyRow.appendChild(td);
    }
    return bodyRow
}