import React from 'react'

function Reviwes() {
    return (
        <div className="Reviews py-5 px-4 border-y">
            <div className="title flex justify-between  items-center">
                <h1 className='text-xs font-semibold'> Reviews (1)  </h1>


                <span onClick={() => { hovered('Reviews') }} className={` cursor-pointer ${isHover === 'Reviews' ? 'hidden' : 'block'}`} >
                    <RiArrowDownSLine size={30} />
                </span>
                <span onClick={() => { hovered('') }} className={`  cursor-pointer ${isHover === 'Reviews' ? 'block' : 'hidden'} `} >
                    <RiArrowUpSLine size={30} />
                </span>
            </div>

            <div className={`  ${isHover === 'Reviews' ? 'block' : 'hidden'}  `}>
                <ReviewsItem item={item} />
                <div className="wirte mt-10">
                    <div className="title text-xl font-medium">Write a review</div>

                    <Formik

                        initialValues={{
                            name: '',
                            message: '',
                        }}
                        validationSchema={
                            Yup.object({
                                name: Yup.string().required("Error : Please enter valid Name."),
                                message: Yup.string().required("Error: Review Text must be between 25 and 1000 characters!")
                            })
                        }
                        onSubmit={(values, { resetForm, setSubmitting }) => {
                            setTimeout(() => {
                                setSubmitting(false)
                                resetForm()
                            }, 2000);
                        }}
                    >

                        {

                            ({ values, errors, handleSubmit, handleReset, touched, handleChange, dirty, isSubmitting }) => (
                                <form onSubmit={handleSubmit} className='mt-5'>

                                    <label htmlFor="name" className='text-sm flex'> <span className='text-[#f00] mr-1 text-[10px]'><AiFillStar /></span>  Your Name</label>
                                    <input
                                        type="text"
                                        id='name'
                                        className=" border mb-3 mt-1 focus:outline-none p-2 text-sm  w-full    "
                                        value={values.name}
                                        onChange={handleChange}
                                        autoComplete="off"

                                    />
                                    {errors.name && touched.name && <div className='bg-[#FECACA] my-2 p-1 text-[#a94442] text-center'>{errors.name}</div>}

                                    <label htmlFor="message" className='text-sm flex'> <span className='text-[#f00] mr-1 text-[10px]'><AiFillStar /></span>  Your Review</label>

                                    <textarea
                                        className='w-full mb-3 mt-1 border focus:outline-none'
                                        name="message"
                                        id="message"
                                        value={values.message}
                                        onChange={handleChange}
                                        cols="30"
                                        rows="4"></textarea>

                                    {errors.name && touched.message && <div className='bg-[#FECACA] my-2 p-1 text-[#a94442] text-center'>{errors.message}</div>}

                                    <span className='flex items-center'>
                                        <label htmlFor="Rating" className='text-sm flex mr-3'> <span className='text-[#f00] mr-1 text-[10px]'><AiFillStar /></span> Rating</label>
                                        <ReactStars {...thirdExample} />
                                    </span>

                                    <div className="btn w-full flex justify-end">
                                        <button type='submit' className="add bg-[#ffd200] py-2 px-4 text-sm rounded-full hover:bg-primary hover:text-white transition-all duration-500 mr-2">Continue</button>

                                    </div>

                                </form>
                            )
                        }




                    </Formik>



                </div>
            </div>


        </div>
    )
}

export default Reviwes