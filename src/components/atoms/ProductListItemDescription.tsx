import type { FC } from "react";
import type { ModelProductListItemDescription } from "@/components/types";

export const ProductListItemDescription: FC<ModelProductListItemDescription> = ({
	name,
	category,
	price,
}) => {
	return (
		<div className="gap flex items-center justify-between">
			<div>
				<h3 className="text-base font-bold text-gray-200">{name}</h3>
				<p className="text-sm text-gray-200">
					<span className="sr-only">Kategoria:</span>
					{category}
				</p>
			</div>

			<p className="text-xl font-bold text-gray-200">
				<span className="sr-only">Cena:</span>
				{price}
			</p>
		</div>
	);
};
