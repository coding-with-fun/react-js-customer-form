import React, { useState } from "react";

const App = () => {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 30);
    currentDate = currentDate.toISOString().split("T")[0];

    const initialUserValues = {
        order_no: "123abc",
        product_name: "Watch",
        delivery_date: currentDate,
        delivery_time_slot: "",
        message_card: "",
        recipient_name: "",
        recipient_contact_number: "",
        recipient_address: "",
        sender_name: "Test User",
        contact_number: "",
        email_address: "testuser@yopmail.com",
    };

    const [userValues, setUserValues] = useState(initialUserValues);

    const handleUserValues = (event) => {
        const inputValue = event.target.value;
        const inputId = event.target.id;
        let userValuesCopy = { ...userValues };

        if (
            // Check for message card data
            (inputId === "message_card" && inputValue.length > 2500) ||
            // Check for recipient name data
            (inputId === "recipient_name" && inputValue.length > 500) ||
            // Check for recipient contact number data
            (inputId === "recipient_contact_number" &&
                inputValue.length > 11) ||
            // Check for recipient address data
            (inputId === "recipient_address" && inputValue.length > 500) ||
            // Check for sender name data
            (inputId === "sender_name" && inputValue.length > 200) ||
            // Check for recipient contact number data
            (inputId === "contact_number" && inputValue.length > 11)
        ) {
            return;
        }

        userValuesCopy[inputId] = inputValue;
        setUserValues(userValuesCopy);
    };

    return (
        <div className="container mt-5">
            <form
                className="row g-3 border p-3 m-4 needs-validation"
                novalidate
            >
                <div className="mb-3">
                    <label htmlFor="order_no" className="form-label">
                        Order Number
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="order_no"
                        defaultValue={userValues.order_no}
                        disabled
                        readOnly
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="product_name" className="form-label">
                        Product Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="product_name"
                        defaultValue={userValues.product_name}
                        disabled
                        readOnly
                    />
                </div>

                <div className="container mb-3">
                    <label htmlFor="delivery_date" className="form-label">
                        Delivery Date
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="delivery_date"
                        value={userValues.delivery_date}
                        onChange={(e) => handleUserValues(e)}
                        required
                    />
                </div>

                <div className="container mb-3">
                    <label htmlFor="delivery_time_slot" className="form-label">
                        Delivery Time Slot
                    </label>
                    <select
                        className="form-select"
                        id="delivery_time_slot"
                        defaultValue={"DEFAULT"}
                        onChange={(e) => handleUserValues(e)}
                        required
                    >
                        <option disabled value="DEFAULT">
                            Time Slot
                        </option>
                        <option>Between 9am to 1pm</option>
                        <option>Between 9am to 6pm</option>
                        <option>
                            Between 9am to 6pm (Applied for 7th to 10th May,
                            12th 2021)
                        </option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="message_card" className="form-label">
                        Message Card
                    </label>
                    <textarea
                        className="form-control"
                        id="message_card"
                        rows="3"
                        value={userValues.message_card}
                        onChange={(e) => handleUserValues(e)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="recipient_name" className="form-label">
                        Recipient Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="recipient_name"
                        placeholder="Enter recipient name"
                        value={userValues.recipient_name}
                        onChange={(e) => handleUserValues(e)}
                    />
                </div>

                <div className="mb-3">
                    <label
                        htmlFor="recipient_contact_number"
                        className="form-label"
                    >
                        Recipient Contact Number
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="recipient_contact_number"
                        placeholder="Enter recipient contact number"
                        value={userValues.recipient_contact_number}
                        onChange={(e) => handleUserValues(e)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="recipient_address" className="form-label">
                        Recipient Address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="recipient_address"
                        placeholder="Enter recipient address"
                        value={userValues.recipient_address}
                        onChange={(e) => handleUserValues(e)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="sender_name" className="form-label">
                        Sender Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="sender_name"
                        placeholder="Enter sender name"
                        value={userValues.sender_name}
                        onChange={(e) => handleUserValues(e)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="contact_number" className="form-label">
                        Contact Number
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="contact_number"
                        placeholder="Enter contact number"
                        value={userValues.contact_number}
                        onChange={(e) => handleUserValues(e)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email_address" className="form-label">
                        Email Address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email_address"
                        defaultValue={userValues.email_address}
                        disabled
                        readOnly
                    />
                </div>

                <div className="col-12">
                    <button className="btn btn-primary" type="submit">
                        Submit form
                    </button>
                </div>
            </form>
        </div>
    );
};

export default App;
