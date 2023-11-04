import React, { useState, useSyncExternalStore } from "react";
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	Tooltip,
	HiloSeries,
	DateTime,
	Logarithmic,
	Crosshair,
	Zoom,
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";
import {
	financialChartData,
	FinancialPrimaryXAxis,
	FinancialPrimaryYAxis,
} from "../../data/dummy";
// import { useStateContext } from "../../contexts/ContextProvider";

const date1 = new Date("2017, 1, 1");

// eslint-disable-next-line consistent-return
function filterValue(value) {
	if (value.x >= date1) {
		// eslint-disable-next-line no-sequences
		return value.x, value.high, value.low;
	}
}
const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
	// const { currentMode } = useStateContext();
	return (
		<div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl">
			<Header category="Chart" title="AAPLE Historical" />
			<ChartComponent
				id="financial-chart"
				primaryXAxis={FinancialPrimaryXAxis}
				primaryYAxis={FinancialPrimaryYAxis}
				chartArea={{ border: { width: 0 } }}
				tooltip={{ enable: true, shared: true }}
				crosshair={{ enable: true, lineType: "Vertical", line: { width: 0 } }}
				// background={currentMode === 'Dark' ? '#33373E' : '#fff'}
			>
				<Inject
					services={[
						HiloSeries,
						Tooltip,
						DateTime,
						Logarithmic,
						Crosshair,
						Zoom,
					]}
				/>
				<SeriesCollectionDirective>
					<SeriesDirective
						dataSource={returnValue}
						xName="x"
						yName="low"
						name="Aaple Inc"
						type="Hilo"
						low="low"
						high="high"
					/>
				</SeriesCollectionDirective>
			</ChartComponent>
		</div>
	);
};

export default Financial;
