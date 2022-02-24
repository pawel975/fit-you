import { DOMelements } from './base';
import { getState, state } from './state';
import Chart from 'chart.js/auto';

export const renderHistoryChart = () => {

    const {chartCtx} = DOMelements;

    let chartLabels = [];
    let chartData = [];

    const userHistory = getState("userHistory");

    if (state !== null) {
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
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    return chart;
}