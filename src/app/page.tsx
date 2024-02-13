import { ProductList } from "@/components/organisms/ProductList";
import { productsData } from "@/data/productsData";
import "./globals.css";

export default function Home() {
	return (
		<section className="mx-auto h-dvh w-full ">
			<ProductList products={productsData} />
		</section>
	);
}
