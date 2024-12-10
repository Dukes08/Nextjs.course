import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO Description',
    keywords: ['Pricing Page', 'Hugo']
   };

export default function PricingPage (){
    return (
        <div className='text-5xl'>Pricing Page</div>
    )
}