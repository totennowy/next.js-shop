import type { FC } from "react";
import type { ModelProductListItemImage } from "@/components/types";

export const ProductListItemImage: FC<ModelProductListItemImage> = ({ src, alt }) => {
	return (
		<div className="aspect-square border-spacing-1 overflow-hidden rounded-md bg-gray-100">
			<img
				width={320}
				height={320}
				src={src}
				alt={alt}
				className="h-full w-full border-spacing-1 object-cover object-center  p-4 transition-transform duration-300 ease-in-out hover:scale-110"
			/>
		</div>
	);
};
