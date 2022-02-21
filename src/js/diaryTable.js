import { getDayData } from ".";
import { getState, updateState } from "./state";

export const createDiaryTable = (foodRecords) => {

    const summaryNutritions = {
        weight:0,
        calories: 0,
        carbo: 0,
        proteins: 0,
        fat: 0
    }

    // Create table basic structure elements
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    // Create table headers
    const headers = ["Name", "Weight", "Kcal", "Carbo", "Proteins", "Fat"];
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
            weight: record.serving * record.servingCount,
            calories: record.calories * (record.serving/100) * record.servingCount, 
            carbo: record.carbohydrates * (record.serving/100) * record.servingCount, 
            proteins: record.proteins * (record.serving/100) * record.servingCount, 
            fat: record.fat * (record.serving/100) * record.servingCount, 
        }

        summaryNutritions.weight += Number(categories.weight);
        summaryNutritions.calories += Number(categories.calories);
        summaryNutritions.carbo += Number(categories.carbo);
        summaryNutritions.proteins += Number(categories.proteins);
        summaryNutritions.fat += Number(categories.fat);
    
        const bodyRow = document.createElement("tr");
        const td = document.createElement("td");
        bodyRow.appendChild(td);
        td.textContent = record.name;
    
        for (let i = 0; i < Object.keys(categories).length; i++) {
            let td = document.createElement("td");
            td.setAttribute("class", Object.keys(categories)[i]);
            let summaryValue = Number(categories[Object.keys(categories)[i]]).toFixed() + sufix(Object.keys(categories)[i]);
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
        weight: "weight-total",
        calories: "kcal-total", 
        carbo: "carbo-total", 
        proteins: "proteins-total", 
        fat: "fat-total",
    };

    for (let i = 0; i < Object.keys(summaryIds).length; i++) {
        const td = document.createElement("td");
        td.setAttribute("id", summaryIds[Object.keys(summaryNutritions)[i]]);
        td.textContent = `${summaryNutritions[Object.keys(summaryNutritions)[i]].toFixed() + sufix(Object.keys(summaryNutritions)[i])}`
        bodyRow.appendChild(td);
    }

    tbody.appendChild(bodyRow);
    table.appendChild(thead);
    table.appendChild(tbody);

    // Save table's nutritions summary to state
    saveSummaryToState(summaryNutritions);

    return table
}

const sufix = (nutritionType) => {
    let sufix;
    switch(nutritionType){
        case "calories":
            sufix = "kcal";
            break
        case "portions":
            sufix = "";
            break
        case "weight":
            sufix = "";
            break
        default:
            sufix = "g";
    }

    return sufix;
}

const saveSummaryToState = (nutritionSummaryObject) => {

    let diary = getState("userHistory");
    let dayData = getDayData(getState("activeDate"));

    // Assign table summary data to day data in state
    const {summary} = dayData;
    summary.kcal = nutritionSummaryObject.calories.toFixed();
    summary.carbo = nutritionSummaryObject.carbo.toFixed();
    summary.proteins = nutritionSummaryObject.proteins.toFixed();
    summary.fat = nutritionSummaryObject.fat.toFixed();

    diary.forEach(day => {
        if (day.date === getState("activeDate")) {
            day.summary = dayData.summary
        }
    })
    
    updateState("userHistory", diary);
}