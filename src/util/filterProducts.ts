import type { IProductItemType } from "../types/product";

export const filterProducts = (products: IProductItemType[], search: string, category:string, sort : string) => {

    const result = products.filter((product) => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" || product.product_category.name === category;

        return matchesSearch && matchesCategory;
    });

    switch (sort) {
        case "price-low":
            return result.sort((a, b) => a.price - b.price);
        case "price-high":
            return result.sort((a, b) => b.price - a.price);
        // case "rating":
        //     return result.sort((a, b) => b.rating - a.rating);
        default:
            return result;
    }
}