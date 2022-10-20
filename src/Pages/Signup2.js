import { useState } from "react";

const Signup2 = () => {
    const customerArray=[{firstname:"Bob",lastname:"The Bob"}]
    const [customers  , setCustomers] = useState(customerArray); // Setting default value

    const handleAddCustomer = () => {
        setCustomers((prevcustomers)=>[
            ...prevcustomers, {firstname:"Bob2", lastname:"The Bob"}
        ])
        
    };

    const handleUpdateName =() =>{
        setCustomers(
            customers.map((c)=>
                c.firstname==="Bob2"
                ?{...c, lastname:"The Bobby"}
                :{...c}
            )
        )
    }

    return (
        <main>
            <ul>
                {/* // Mapping over array of existing person  */}
                {customers.map((c, index) => (
                    // Setting "index" as key because name and age can be repeated, It will be better if you assign uniqe id as key
                    <li key={index}>
                        <span>Firstname: {c.firstname}</span>{" "}
                        <span>Lastname: {c.lastname}</span>
                    </li>
                ))}
                <button onClick={handleAddCustomer}>Add Customer</button>

                <button onClick={handleUpdateName}>Update Customer</button>
            </ul>
        </main>
    );
};

export default Signup2;