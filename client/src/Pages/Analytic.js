import React from 'react';
import {Bar} from "react-chartjs-2";
import {Chart} from 'chart.js';
import {LinearScale} from 'chart.js';
import {CategoryScale} from 'chart.js';
import {BarElement} from 'chart.js';
Chart.register(BarElement);
Chart.register(CategoryScale);
Chart.register(LinearScale);

const Analytic = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'QueryPosted',
                data: [100, 98, 23, 11, 2, 12, 12, 12, 11, 45, 35, 12],
                backgroundColor: 'rgba(127, 29, 29)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    // Configuration options for the chart
    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Queries',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Month',
                },
            },
        },
    };
    let a = [1, 2, 3, 4, 2, 1, 3, 2, 2, 1, 3];
    return (
        <>
            <div class="relative overflow-x-auto shadow-md h-96 overflow-auto  m-5 sm:rounded-lg">
                <table class="w-full  text-center text-black text-xl dark:text-gray-400">
                    <thead class="text-xs text-gray-700  bg-gray-50 dark:bg-red-900 dark:text-gray-400">
                        <tr className='text-xl'>
                            <th scope="col" class="px-6 py-3">
                                Query
                            </th>
                            <th scope="col" class="px-6 py-3">
                                PostedBy
                            </th>
                            <th scope="col" class="px-6 py-3">
                                PostedOn
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Reputation
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only"></span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            a.map((elem) => {
                                return (
                                    <>

                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td scope="row" class=" px-6 py-4">
                                                Apple MacBook Pro 17"
                                            </td>
                                            <td class="px-6 py-4">
                                                Silver
                                            </td>
                                            <td class="px-6 py-4">
                                                Laptop
                                            </td>
                                            <td class="px-6 py-4">
                                                $2999
                                            </td>
                                            <td class="px-6 py-4 text-right">
                                                <a href="a" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Solutions</a>
                                            </td>
                                        </tr></>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div style={{width: '900px', height: '500px'}} className='m-auto block'>
                <h2>Bar Chart Example</h2>
                <Bar data={data} options={options} />
            </div>

        </>
    );
};

export default Analytic;