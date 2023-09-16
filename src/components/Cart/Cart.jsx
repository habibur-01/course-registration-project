

const Cart = ({ selectCourse, totalPrice, creditHour, remainingCredit }) => {
    
    // console.log(selectCourse)
    return (
        <div>
            <div className="w-80 h-auto bg-[#FFF] rounded-xl p-6">
                <div>
                    <h1 className="text-[#2F80ED]">Credit Hour Remaining {remainingCredit} hr</h1>
                    <div className="my-6"><hr></hr></div>
                    <div>
                        <h1 className="text-xl font-bold text-[#1C1B1B]">Course Name</h1>
                        <ol className="list-decimal text-base font-normal text-[#1C1B1B99] ml-6 mt-5">
                            {
                                selectCourse.map((element) => (
                                    <li key={element.id}>{element.title}</li>
                                ))
                            }
                        </ol>
                    </div>
                    <div className="mt-6 mb-4">
                        <hr />
                    </div>
                    <div>
                        <p>Total Credit Hour : {creditHour} </p><div className="my-4"><hr></hr></div>
                        <p>Total Price : {totalPrice} USD</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cart;