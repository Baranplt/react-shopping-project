import React from 'react'

function Discount() {
    const discountData = [
        {
            src: "https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/four_banner/banner_1-379x258.jpg",
            minTitle: "FLAT OFFER",
            title: "Get 20% Off",
        }, {
            src: "https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/four_banner/banner_2-379x258.jpg",
            minTitle: "Get 20% Off",
            title: "New Arrival",
        }, {
            src: "https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/four_banner/banner_3-379x258.jpg",
            minTitle: "TRENDY ITEMS",
            title: "On Discount",
        }, {
            src: "https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/four_banner/banner_4-379x258.jpg",
            minTitle: "GET  DISCOUNT",
            title: "Friday Deal",
        }
    ]
    return (

        <div className='container Discount mt-10 grid  grid-cols-1 lg:grid-cols-4 gap-6'>
            {
                discountData.map((item, index) => {
                    return (
                        <div key={index} className="discount-item ">
                            <div className="img hover:scale-105 transition-all ">
                                <img src={item.src} alt="" />
                            </div>
                            <div className="min-title">
                                {item.minTitle}
                            </div>
                            <div className="title">
                                {item.title}
                            </div>
                            <button className="btn">
                                SHOP NOW
                            </button>
                        </div>)
                })
            }

        </div>

    )

}
export default Discount