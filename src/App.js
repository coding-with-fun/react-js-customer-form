import React, { useEffect, useState } from "react";
import isEmail from "validator/lib/isEmail";

const App = () => {
    let currentDate = new Date();
    currentDate = currentDate.toISOString().split("T")[0];

    let maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    maxDate = maxDate.toISOString().split("T")[0];

    let initialUserValues = {
        order_no: "",
        order_no_error: false,

        product_name: "",
        product_name_error: false,

        delivery_date: currentDate,
        delivery_date_error: false,

        maxDate,

        delivery_time_slot: "",
        delivery_time_slot_error: false,

        message_card: "",

        recipient_name: "",

        recipient_contact_number: "",
        recipient_contact_number_error: false,

        recipient_address: "",
        recipient_address_error: false,

        sender_name: "Test User",
        sender_name_error: false,

        contact_number: "",
        contact_number_error: false,

        email_address: "",
        email_address_error: false,
    };

    const [userValues, setUserValues] = useState();

    useEffect(() => {
        let searchURL = window.location.search;
        searchURL = searchURL.slice(1);

        let params = searchURL.split("&");

        params.map((param) => {
            const paramValue = param.split("=");

            if (paramValue[0] === "email") {
                initialUserValues.email_address = paramValue[1];
            }
            if (paramValue[0] === "order_id") {
                initialUserValues.order_no = paramValue[1];
            }
            if (paramValue[0] === "product_name") {
                initialUserValues.product_name = paramValue[1];
            }
            if (paramValue[0] === "token") {
                initialUserValues.token = paramValue[1];
            }

            return initialUserValues;
        });

        setUserValues(initialUserValues);
        // eslint-disable-next-line
    }, []);

    const submitFormData = () => {
        alert("Form submitted successfully");
        setUserValues(initialUserValues);
    };

    const handleSubmitUserValues = (e) => {
        e.preventDefault();
        let userValuesCopy = { ...userValues };
        let errorFlag = false;

        if (!userValuesCopy.order_no) {
            userValuesCopy["order_no_error"] = true;
            errorFlag = true;
        }

        if (!userValuesCopy.product_name) {
            userValuesCopy["product_name_error"] = true;
            errorFlag = true;
        }

        const inputDate = new Date(userValuesCopy.delivery_date);
        const todayDate = new Date(initialUserValues.delivery_date);
        let diff = inputDate - todayDate;
        diff = Math.floor(diff / 86400000);
        if (!userValuesCopy.delivery_date || diff > 30) {
            userValuesCopy["delivery_date_error"] = true;
            errorFlag = true;
        }

        if (!userValuesCopy.delivery_time_slot) {
            userValuesCopy["delivery_time_slot_error"] = true;
            errorFlag = true;
        }

        if (
            !userValuesCopy.recipient_contact_number ||
            userValuesCopy.recipient_contact_number.length < 10 ||
            userValuesCopy.recipient_contact_number.length > 11
        ) {
            userValuesCopy["recipient_contact_number_error"] = true;
            errorFlag = true;
        }

        if (!userValuesCopy.recipient_address) {
            userValuesCopy["recipient_address_error"] = true;
            errorFlag = true;
        }

        if (!userValuesCopy.sender_name) {
            userValuesCopy["sender_name_error"] = true;
            errorFlag = true;
        }

        if (
            !userValuesCopy.contact_number ||
            userValuesCopy.contact_number.length < 10 ||
            userValuesCopy.contact_number.length > 11
        ) {
            userValuesCopy["contact_number_error"] = true;
            errorFlag = true;
        }

        if (
            !userValuesCopy.email_address ||
            !isEmail(userValuesCopy.email_address)
        ) {
            userValuesCopy["email_address_error"] = true;
            errorFlag = true;
        }

        setUserValues(userValuesCopy);
        if (errorFlag) {
            return;
        }

        submitFormData();
    };

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

        // Check for delivery date
        if (inputId === "delivery_date") {
            const inputDate = new Date(inputValue);
            const todayDate = new Date(initialUserValues.delivery_date);
            let diff = inputDate - todayDate;
            diff = Math.floor(diff / 86400000);
            if (diff > 30) {
                userValuesCopy["delivery_date_error"] = true;
            } else {
                userValuesCopy["delivery_date_error"] = false;
            }
        }

        const inputFieldName = inputId + "_error";

        if (inputFieldName) {
            userValuesCopy[inputFieldName] = false;
        }

        userValuesCopy[inputId] = inputValue;
        setUserValues(userValuesCopy);
    };

    return (
        <div className="container mt-5">
            {userValues && (
                <form className="row g-3 border p-3 m-4">
                    <div className="mb-3">
                        <label htmlFor="order_no" className="form-label">
                            Order Number
                        </label>
                        <input
                            type="text"
                            className={`form-control ${
                                userValues.order_no_error ? `input-error` : ``
                            }`}
                            id="order_no"
                            defaultValue={userValues.order_no}
                            disabled
                            readOnly
                        />
                        <div
                            className={`${
                                userValues.order_no_error
                                    ? `visible error_message`
                                    : `invisible`
                            }`}
                        >
                            {userValues.order_no_error &&
                                "Please enter the order number"}
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="product_name" className="form-label">
                            Product Name
                        </label>
                        <input
                            type="text"
                            className={`form-control ${
                                userValues.product_name_error
                                    ? `input-error`
                                    : ``
                            }`}
                            id="product_name"
                            defaultValue={userValues.product_name}
                            disabled
                            readOnly
                        />
                        <div
                            className={`${
                                userValues.product_name_error
                                    ? `visible error_message`
                                    : `invisible`
                            }`}
                        >
                            {userValues.product_name_error &&
                                "Please enter the product name"}
                        </div>
                    </div>

                    <div className="container mb-3">
                        <label htmlFor="delivery_date" className="form-label">
                            Delivery Date
                        </label>
                        <input
                            type="date"
                            className={`form-control ${
                                userValues.delivery_date_error
                                    ? `input-error`
                                    : ``
                            }`}
                            id="delivery_date"
                            value={userValues.delivery_date}
                            onChange={(e) => handleUserValues(e)}
                            min={initialUserValues.delivery_date}
                            max={initialUserValues.maxDate}
                        />
                        <div
                            className={`${
                                userValues.delivery_date_error
                                    ? `visible error_message`
                                    : `invisible`
                            }`}
                        >
                            {userValues.delivery_date_error &&
                                "Delivery date should be only 30 days later from today"}
                        </div>
                    </div>

                    <div className="container mb-3">
                        <label
                            htmlFor="delivery_time_slot"
                            className="form-label"
                        >
                            Delivery Time Slot
                        </label>
                        <select
                            className={`form-select ${
                                userValues.delivery_time_slot_error
                                    ? `input-error`
                                    : ``
                            }`}
                            id="delivery_time_slot"
                            defaultValue={userValues.delivery_time_slot}
                            onChange={(e) => handleUserValues(e)}
                        >
                            <option disabled value="">
                                Time Slot
                            </option>
                            <option>Between 9am to 1pm</option>
                            <option>Between 9am to 6pm</option>
                            <option>
                                Between 9am to 6pm (Applied for 7th to 10th May,
                                12th 2021)
                            </option>
                        </select>
                        <div
                            className={`${
                                userValues.delivery_time_slot_error
                                    ? `visible error_message`
                                    : `invisible`
                            }`}
                        >
                            {userValues.delivery_time_slot_error &&
                                "Please select one time slot"}
                        </div>
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
                        <div
                            className={`input_length ${
                                userValues.message_card.length === 0
                                    ? `error_input_length`
                                    : `success_input_length`
                            }`}
                        >
                            {userValues.message_card.length} of 2500 characters
                        </div>
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
                        <div
                            className={`input_length ${
                                userValues.recipient_name.length === 0
                                    ? `error_input_length`
                                    : `success_input_length`
                            }`}
                        >
                            {userValues.recipient_name.length} of 500 characters
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="recipient_contact_number"
                            className="form-label"
                        >
                            Recipient Contact Number
                        </label>
                        <input
                            type="number"
                            className={`form-control ${
                                userValues.recipient_contact_number_error
                                    ? `input-error`
                                    : ``
                            }`}
                            id="recipient_contact_number"
                            placeholder="Enter recipient contact number"
                            value={userValues.recipient_contact_number}
                            onChange={(e) => handleUserValues(e)}
                        />
                        <div
                            className={`input_length ${
                                userValues.recipient_contact_number.length === 0
                                    ? `error_input_length`
                                    : `success_input_length`
                            }`}
                        >
                            {userValues.recipient_contact_number.length} of 11
                            characters
                        </div>
                        <div
                            className={`${
                                userValues.recipient_contact_number_error
                                    ? `visible error_message`
                                    : `invisible`
                            }`}
                        >
                            {userValues.recipient_contact_number_error &&
                                "Mobile number should be in the format 01xxxx, between 10 to 11 digits"}
                        </div>
                    </div>

                    <div className="mb-3">
                        <label
                            htmlFor="recipient_address"
                            className="form-label"
                        >
                            Recipient Address
                        </label>
                        <input
                            type="text"
                            className={`form-control ${
                                userValues.recipient_address_error
                                    ? `input-error`
                                    : ``
                            }`}
                            id="recipient_address"
                            placeholder="Enter recipient address"
                            value={userValues.recipient_address}
                            onChange={(e) => handleUserValues(e)}
                        />
                        <div
                            className={`input_length ${
                                userValues.recipient_address.length === 0
                                    ? `error_input_length`
                                    : `success_input_length`
                            }`}
                        >
                            {userValues.recipient_address.length} of 500
                            characters
                        </div>
                        <div
                            className={`${
                                userValues.recipient_address_error
                                    ? `visible error_message`
                                    : `invisible`
                            }`}
                        >
                            {userValues.recipient_address_error &&
                                "Please enter recipient address"}
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="sender_name" className="form-label">
                            Sender Name
                        </label>
                        <input
                            type="text"
                            className={`form-control ${
                                userValues.sender_name_error
                                    ? `input-error`
                                    : ``
                            }`}
                            id="sender_name"
                            placeholder="Enter sender name"
                            value={userValues.sender_name}
                            onChange={(e) => handleUserValues(e)}
                        />
                        <div
                            className={`input_length ${
                                userValues.sender_name.length === 0
                                    ? `error_input_length`
                                    : `success_input_length`
                            }`}
                        >
                            {userValues.sender_name.length} of 200 characters
                        </div>
                        <div
                            className={`${
                                userValues.sender_name_error
                                    ? `visible error_message`
                                    : `invisible`
                            }`}
                        >
                            {userValues.sender_name_error &&
                                "Please enter sender name"}
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="contact_number" className="form-label">
                            Contact Number
                        </label>
                        <input
                            type="number"
                            className={`form-control ${
                                userValues.contact_number_error
                                    ? `input-error`
                                    : ``
                            }`}
                            id="contact_number"
                            placeholder="Enter contact number"
                            value={userValues.contact_number}
                            onChange={(e) => handleUserValues(e)}
                        />
                        <div
                            className={`input_length ${
                                userValues.contact_number.length === 0
                                    ? `error_input_length`
                                    : `success_input_length`
                            }`}
                        >
                            {userValues.contact_number.length} of 11 characters
                        </div>
                        <div
                            className={`${
                                userValues.contact_number_error
                                    ? `visible error_message`
                                    : `invisible`
                            }`}
                        >
                            {userValues.contact_number_error &&
                                "Mobile number should be in the format 01xxxx, between 10 to 11 digits"}
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email_address" className="form-label">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className={`form-control ${
                                userValues.email_address_error
                                    ? `input-error`
                                    : ``
                            }`}
                            id="email_address"
                            defaultValue={userValues.email_address}
                            disabled
                            readOnly
                        />
                        <div
                            className={`${
                                userValues.email_address_error
                                    ? `visible error_message`
                                    : `invisible`
                            }`}
                        >
                            {userValues.email_address_error &&
                                "Please enter a valid email address"}
                        </div>
                    </div>

                    <div className="col-12">
                        <button
                            className="btn btn-primary"
                            type="submit"
                            onClick={handleSubmitUserValues}
                        >
                            Submit form
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default App;
