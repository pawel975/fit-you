import { DOMelements } from './base';
import { getState } from './state';
import Chart from 'chart.js/auto';

const {chartCtxContainer} = DOMelements;

export const renderHistoryChart = () => {

    // Erase previous chart and create new one
    chartCtxContainer.textContent = "";
    const chartCtx = document.createElement("canvas");
    chartCtx.setAttribute("aria-label", "history-diary-label");
    chartCtx.setAttribute("role", "img");
    chartCtxContainer.appendChild(chartCtx);

    let chartLabels = [];
    let chartData = [];

    const userHistory = getState("userHistory");

    if (getState() !== null) {
        userHistory.forEach(day => {
            chartLabels.push(day.date.slice(0,5));
            chartData.push(day.summary.kcal);
        })
    }

    const chart = new Chart(chartCtx, {
        type: 'line',
        data: {
            labels: chartLabels,
            datasets: [{
                label: 'Daily eaten kcal',
                fill: "origin",
                data: chartData,
                backgroundColor: [
                    'rgba(72, 76, 208, 0.2)',
                ],
                borderColor: [
                    'rgba(72, 76, 208, 1)',
                ],
                borderWidth: 2
            }]
        },
        options: {
            animation: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    return chart;
}