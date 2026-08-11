// src/Pages/ReturnRefundPolicy.jsx
import React from "react";
import Breadcrumb from "../Components/Common/Breadcrumb";

const ReturnRefundPolicy = () => {
    return (
        <div className="bg-gray-50 min-h-screen">

            {/* Policy Section */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                    Return & Refund Policy
                </h2>

                <div className="bg-white p-8 rounded-2xl shadow-md max-w-4xl mx-auto leading-relaxed text-gray-700">
                    <p className="mb-6">
                        At <span className="font-semibold text-primary">AlBayt Mart</span>,
                        we aim to ensure that our customers are fully satisfied with their
                        purchases. If you are not completely happy with your order, please
                        review our return and refund policy below.
                    </p>

                    <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                        1. Return Eligibility
                    </h3>
                    <ul className="list-disc list-inside space-y-2 mb-6">
                        <li>Items must be returned within 7 days of delivery.</li>
                        <li>
                            Products should be unused, unwashed, and in their original
                            packaging.
                        </li>
                        <li>
                            Returns will not be accepted for perishable or hygiene-sensitive
                            items.
                        </li>
                    </ul>

                    <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                        2. Non-Returnable Items
                    </h3>
                    <ul className="list-disc list-inside space-y-2 mb-6">
                        <li>Opened or used products</li>
                        <li>Gift cards or promotional items</li>
                        <li>Custom or personalized products</li>
                    </ul>

                    <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                        3. Refund Process
                    </h3>
                    <p className="mb-6">
                        Once your return is received and inspected, we will notify you about
                        the status of your refund. If approved, the refund will be processed
                        to your original payment method within 5–10 business days.
                    </p>

                    <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                        4. Exchange Policy
                    </h3>
                    <p className="mb-6">
                        Exchanges are only available for defective or damaged items. If you
                        need to exchange a product for the same item, please contact our
                        support team within 3 days of delivery.
                    </p>

                    <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                        5. How to Request a Return
                    </h3>
                    <p className="mb-6">
                        To initiate a return or refund, please contact our customer support
                        at{" "}
                        <a
                            href="mailto:info.albaytmart@gmail.com"
                            className="text-secondary font-medium underline"
                        >
                            info.albaytmart@gmail.com
                        </a>{" "}
                        with your order details, product image, and reason for return.
                    </p>

                    <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                        6. Contact Us
                    </h3>
                    <p>
                        If you have any questions about our Return & Refund Policy, please
                        reach out to us at{" "}
                        <a
                            href="mailto:help@albaytmart.com"
                            className="text-secondary font-medium underline"
                        >
                            info.albaytmart@gmail.com
                        </a>
                        .
                    </p>
                </div>
            </section>
        </div>
    );
};

export default ReturnRefundPolicy;
