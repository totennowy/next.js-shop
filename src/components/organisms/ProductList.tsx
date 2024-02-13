import type { FC } from "react";
import { ProductListItem } from "@/components/molecules/ProductListItem";
import type { ModelProductList } from "@/components/types";

export const ProductList: FC<ModelProductList> = ({ products }) => {
	return (
		<ul
			data-testid="products-list"
			className="mx-auto grid h-full w-10/12 place-items-center gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
		>
			{products.map((product) => {
				return (
					<ProductListItem
						key={product.id}
						src={product.src}
						alt={product.alt}
						name={product.name}
						category={product.category}
						price={product.price}
					/>
				);
			})}
		</ul>
	);
};
