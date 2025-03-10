import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";
import "../styles/attendance.css";

// Register necessary components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function AttendancePlot() {
    return (
        <div className="App">
            <div style={{ maxWidth: "800px" }}>
                <Bar
                    data={{
                        labels: ["U18CSI5205L-R21", "U18CSI5205T-R21", "U18CS16203L-R21", "U18CS16203T-R21"],
                        datasets: [
                            {
                        
                                data: [100,100,94,75],
                                backgroundColor: ["aqua", "green", "red", "yellow"],
                                borderColor: ["aqua", "green", "red", "yellow"],
                                borderWidth: 0.5,
                            },
                        ],
                    }}
                    height={500}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true,
                            },
                        },
                        plugins: {
                            legend: {
                                font: {
                                        size: 15,
                                    },
                                },
                            },
                        
                    }}
                />
            </div>
        </div>
    );
}
