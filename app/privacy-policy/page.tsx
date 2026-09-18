import Footer from '@/components/layout/footer'
import Header from '@/components/layout/Header'
import { privacyPolicyContent } from '@/constant/content';
import React from 'react'

function page() {
  const rawHTML = privacyPolicyContent;
  return (
    <main className="min-h-screen">
    <Header />
  <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[60%] mx-auto px-4 py-8">
    <div dangerouslySetInnerHTML={{ __html: rawHTML }} />
  </div>
  <Footer />
  </main>
  )
}

export default page