import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO Description',
    keywords: ['About Page', 'Hugo']
   };

export default function AboutPage (){
    return (
        <div className='text-5xl'>About Page</div>
    )
}