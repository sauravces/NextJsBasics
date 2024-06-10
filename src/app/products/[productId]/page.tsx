import { Metadata } from "next";
import { resolve } from "path";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`);
    },100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function ProductsDetails({ params }: Props) {
  return (
    <>
      <h1>Product Details {params.productId}</h1>
    </>
  );
}
