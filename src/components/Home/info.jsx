import React from 'react'
import InfoItem from './infoItem'
function info() {

    const infoData = [
        {
            img: "https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/services/1-38x37.png",
            title: "24 x 7 Free Support",
            desc: "Lorem ipsum Dolor Site amet"
        }, {
            img: "https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/services/2-38x37.png",
            title: "Online Shopping",
            desc: "Lorem ipsum Dolor Site amet"
        }, {
            img: "https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/services/3-38x37.png",
            title: "Gift Vouchers",
            desc: "Lorem ipsum Dolor Site amet"
        }, {
            img: "https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/services/4-38x37.png",
            title: "Free Shipping",
            desc: "Lorem ipsum Dolor Site amet"
        }
    ]
    return (
        <div>
            <div className="info mt-10 lg:mt-20 p-2">
                <div className="container grid grid-cols-1 lg:grid-cols-4 gap-4 border py-10 ">
                    {
                        infoData.map((item, index) => {
                            return <InfoItem key={index} item={item} />
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default info