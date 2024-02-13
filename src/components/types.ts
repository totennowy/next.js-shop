export type ModelProductListItemImage = {
	src: string;
	alt: string;
};

export type ModelProductListItemDescription = {
	name: string;
	category: string;
	price: string;
};

export type ModelProductListItem = {
	id?: string;
	src: string;
	alt: string;
	name: string;
	category: string;
	price: string;
};

export type ModelProductList = {
	products: ModelProductListItem[];
};
