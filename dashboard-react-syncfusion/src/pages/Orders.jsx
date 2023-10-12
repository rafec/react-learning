import React from "react";
import {
	GridComponent,
	ColumnsDirective,
	ColumDirective,
	Resize,
	Sort,
	ContextMenu,
	FilterComponent,
	Page,
	ExcelExport,
	PdfExport,
	Edit,
	Inject,
} from "@syncfusion/ej2-react-grids";

import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";
import { ColumnDirective } from "@syncfusion/ej2-react-kanban";

const Orders = () => {
	return (
		<div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
			<Header category="Page" title="Orders" />
			<GridComponent id="gridcomp" dataSource={ordersData}>
				<ColumnsDirective>
					{ordersGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
			</GridComponent>
		</div>
	);
};

export default Orders;
