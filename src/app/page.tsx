import { ProductType } from "@/types/ProductType";

async function getProdutcts(){
  const res = await fetch ('https://fakestoreapi.com/products')
  if(!res.ok){
    throw new Error('faile to fetch data')
  }

  return res.json();
}

export default async function Home() {
  const products = await getProdutcts();
  console.log(products)

  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-4 gap-10 xl:gap-6">
        {products.map((product: ProductType) =>( 
          <div key={product.id}>{product.title}</div>
        ))}
      </div>
    </div>
  )
}
