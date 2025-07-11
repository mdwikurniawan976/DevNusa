import React from 'react'
import ClientReviewCard from './ClientReviewCard'

const ClientReview = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100">
        <h1 className="text-center text-2xl text-blue-950 font-bold">What Our Happy Client Says</h1>
        <p className="mt-3 text-center font-medium text-gray-700 w-[90%] mx-auto sm:w-[70%] md:w-[50%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, libero deleniti amet excepturi ad rem.</p>
        {/* grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-16 w-[80%] mx-auto">
            <div>
                <ClientReviewCard image = "/images/u1.jpg" name = "Jessica Doe" rating ="4.7"/>
            </div>
            <div>
                <ClientReviewCard image = "/images/u2.jpg" name = "Edward Eric" rating ="4.7"/>
            </div>
            <div>
                <ClientReviewCard image = "/images/u3.jpg" name = "Sasuke Uchiha" rating ="4.9"/>
            </div>
            <div>
                <ClientReviewCard image = "/images/u4.jpg" name = "Boruto Uzumaki" rating ="4.3"/>
            </div>
        </div>
    </div>
  )
}

export default ClientReview