import React from "react";

const App = () => {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 30);
    currentDate = currentDate.toISOString().split("T")[0];

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
                        defaultValue="123abc"
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
                        defaultValue="Watch"
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
                        value={currentDate}
                        required
                    />
                </div>

                <div className="container mb-3">
                    <label htmlFor="delivery_date" className="form-label">
                        Delivery Time Slot
                    </label>
                    <select class="form-select" id="delivery_date" required>
                        <option selected disabled value="">
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
                        defaultValue="testuser@yopmail.com"
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
