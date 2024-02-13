import type { FC } from "react";
import { ProductListItemDescription } from "@/components/atoms/ProductListItemDescription";
import { ProductListItemImage } from "@/components/atoms/ProductListItemImage";
import type { ModelProductListItem } from "@/components/types";

export const ProductListItem: FC<ModelProductListItem> = ({ src, alt, name, category, price }) => {
	return (
		<li>
			<article className="flex flex-col gap-2">
				<ProductListItemImage src={src} alt={alt} />
				<ProductListItemDescription name={name} category={category} price={price} />
			</article>
		</li>
	);
};
