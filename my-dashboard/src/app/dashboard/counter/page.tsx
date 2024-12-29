import CartCounter from "@/shopping-cart/components/CartCounter";


export const metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
};

export default function CounterPage() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <h1>Productos en el carrito</h1>
      <CartCounter value={20}/>
    </div>
  );
}