"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Scale,
  ScaleOptionsByType,
  CartesianScaleTypeRegistry,
  CoreScaleOptions,
  Tick,
  ChartData
} from "chart.js";
import { Line } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AccuracyGraph = () => {
// @ts-ignore
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index" as "index", 
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#F8F8F6",
        titleColor: "#8C8C89",
        bodyColor: "#171717",
        borderColor: "#E5E7EB",
        borderWidth: 1,
        padding: {
          top: 6,
          bottom: 12,
          left: 12,
          right: 12,
        },
        cornerRadius: 4,
        displayColors: false,
        titleFont: {
          family: '"JetBrains Mono", monospace',
          size: 11,
        },
        bodyFont: {
          family: '"JetBrains Mono", monospace',
          size: 11,
        },
        callbacks: {
          title: (context: any) => `${context[0].label} DAYS`, // Tooltip başlığı
          label: (context: any) => {
            const label = context.dataset.label || "";
            const value = context.parsed.y;
            return `${label}: ${value > 0 ? "-" : ""}${Math.abs(value).toFixed(1)}%`;
          },
        },
      },
    },
    scales: {
      x: {
        type: 'category' as const,
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          font: {
            family: '"JetBrains Mono", monospace',
            size: 12,
          },
          color: "#9CA3AF",
          callback: function(
            this: Scale<CoreScaleOptions>,
            tickValue: string | number,
            index: number,
            ticks: Tick[]
          ): string | number | null {
            return index % 30 === 0 ? tickValue : '';
          },
        },
      },
      y: {
        type: 'linear' as const,
        display: false,
        min: 0,
        max: 100,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        tension: 0.1,
      },
      point: {
        radius: 0,
        hoverRadius: 6,
        hitRadius: 6,
      },
    },
  };

  const labels = Array.from({ length: 121 }, (_, i) => i);

  const SpotterDataArray = Array.from({ length: 120 }, () =>
    Number((Math.random() * 100).toFixed(1))
  );
  const CompetitorsDataArray = Array.from({ length: 120 }, () =>
    Number((Math.random() * 100).toFixed(1))
  );

  const data: ChartData<'line'> = {
    labels,
    datasets: [
      {
        label: "Spotter",
        data: SpotterDataArray,
        borderColor: "#008081",
        backgroundColor: "#008081",
        borderWidth: 1.5,
        cubicInterpolationMode: 'monotone' as const,
      },
      {
        label: "Competitors",
        data: CompetitorsDataArray,
        borderColor: "#f94960",
        backgroundColor: "#f94960",
        borderWidth: 1.5,
        cubicInterpolationMode: 'monotone' as const,
      },
    ],
  };

  return (
    <div className="w-full h-[200px] mt-8">
      <Line options={options} data={data} />
      <div className="flex justify-between mt-4">
        <span className="text-[12px] font-mono text-[#9CA3AF]">
          ACCURACY DROPOFF
        </span>
        <span className="text-[12px] font-mono text-[#9CA3AF]">
          DAYS AFTER INITIAL IDENTIFICATION
        </span>
      </div>
    </div>
  );
};

export default AccuracyGraph;
