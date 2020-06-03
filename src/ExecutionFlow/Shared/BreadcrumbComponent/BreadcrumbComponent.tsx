import * as React from "react";
export class Breadcrumb {
	id!: string;
	label!: string;
	data!: any;
}

interface Props {
	items: Array<Breadcrumb>;
	currentItem: Breadcrumb;
	onAction?: (data: Breadcrumb, i: number) => void;
}

const BreadcrumbComponent = ({ items, currentItem, onAction }: Props) => {
	return (
		<nav className="hm-mb-0 hm-h-5" aria-label="breadcrumb">
			<ol  className="breadcrumb bg-transparent hm-mb-0">
				{items.map((s: Breadcrumb, i: number) => {
					return currentItem.id === s.id ? (
						<li key={i} className="breadcrumb-item active" aria-current="page">
							{s.label}
						</li>
					) : (
						<li key={i} className="breadcrumb-item">
							<a
								onClick={event => {
									event.preventDefault();
									if (onAction) {
										onAction(s, i);
									}
								}}
								href="#"
							>
								{s.label}
							</a>
						</li>
					);
				})}
			</ol>
		</nav>
	);
};

export default BreadcrumbComponent;
