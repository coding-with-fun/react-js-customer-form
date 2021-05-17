import React from "react";

const App = () => {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 30);
    currentDate = currentDate.toISOString().split("T")[0];

    return (
        <div className="container border mt-5 p-3">
            <form className="row g-3 needs-validation" noValidate>
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
                    <div className="row">
                        <div className="col w-50">
                            <label
                                htmlFor="delivery_date"
                                className="form-label"
                            >
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

                        <div className="col w-50">
                            <label
                                htmlFor="delivery_date"
                                className="form-label"
                            >
                                Delivery Time Slot
                            </label>
                            <div className="dropdown">
                                <button
                                    className="btn btn-outline-secondary dropdown-toggle w-100"
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Time Slot
                                </button>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="dropdownMenuButton1"
                                >
                                    <li>
                                        <div className="dropdown-item">
                                            Between 9am to 1pm
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dropdown-item">
                                            Between 9am to 6pm
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dropdown-item">
                                            Between 9am to 6pm (Applied for 7th
                                            to 10th May, 12th 2021)
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
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
