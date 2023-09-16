/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Card = () => {
    const [courses, setCourses] = useState([]);
    const [selectCourse, setSelectCourses] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)
    const [creditHour, setCreditHour] = useState(0);
    const [remainingCredit, setRemainingCredit] = useState(20)

    useEffect(() =>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    const handleSelectCourse = (course) =>{
        const isExist = selectCourse.find(item => item.id === course.id)
        let price = course.price
        // let credit = course.credit_hour
        
        if(isExist){
            return toast('Already added')
        }
        else{
            selectCourse.forEach(item => 
                price += item.price
                // credit += course.credit_hour
                )
            let credit = course.credit_hour
            selectCourse.forEach(item => 
                credit += item.credit_hour
                // credit += course.credit_hour
                ) 
                const totalRemainingCredit = 20 - credit
                if(credit > 20 || totalRemainingCredit < 0){
                    return toast('You can not take more than 20 credit')
                }
                setTotalPrice(price)
                setCreditHour(credit)
                setRemainingCredit(totalRemainingCredit)
                console.log(creditHour)
                // setCreditHour(credit)
                
            setSelectCourses([ ...selectCourse, course])
        }
        
    }
    console.log(selectCourse)
    return (
        <div>
            <div className="grid justify-items-center lg:flex my-8 lg:gap-6">
                <div className="card-container grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        courses.map(course =>(
                            <div key={course.id} className="card w-80 h-[412px] bg-[#FFF] rounded-xl  p-5 text-left ">
                                <div className="card-img">
                                    <img src={course.cover} alt="" />

                                </div>
                                <div className="course-content space-y-4 mt-4">
                                <h1 className="text-lg font-semibold text-[#1C1B1B]">{course.title}</h1>
                                <p className="w-72 h-16"><small>{course.title_description}</small></p>
                                <div className="flex justify-between text-base font-medium mb-6">
                                    <p><span className="text-xl font-normal mr-2">$</span>Price: {course.price}</p>
                                    <p>Credit:{course.credit_hour}</p>
                                </div>
                                <div><button onClick={() => handleSelectCourse(course)} className="px-28 py-2 rounded-lg bg-[#2F80ED] border border-[#2F80ED] mb-4 text-lg text-[#FFF] font-semibold">Select</button></div>
                                </div>

                            </div>
                        ))
                    }
                   

                </div>
                <div className="cart-container mt-6  md:mt-6 lg:mt-0">
                    <ToastContainer />
                    
                    <Cart selectCourse={selectCourse} totalPrice={totalPrice} creditHour={creditHour} remainingCredit={remainingCredit}></Cart>

                </div>
                
            </div>
            
            
        </div>
    );
};

export default Card;