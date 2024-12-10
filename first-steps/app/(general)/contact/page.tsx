import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO Description',
    keywords: ['Contact Page', 'Hugo']
   };

export default function ContactPage (){
    return (
        <div className='text-5xl'>Contact Page</div>
    )
}
