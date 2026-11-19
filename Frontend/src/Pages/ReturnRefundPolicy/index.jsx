import Breadcrumb from "../../Components/Breadcrumb/index";
import { Link } from "react-router-dom";
import { returnPolicyConfig } from "../../config/index";

const ReturnRefundPolicy = () => {
    const { heading } = returnPolicyConfig;

    return (
        <div className="page-width pb-20">
            <Breadcrumb title="Returns & refunds" />
            <section className="mx-auto max-w-3xl pb-6 pt-4">
                <h1 className="display-title mb-10">{heading}</h1>

                <div className="border-t border-line pt-8 text-sm leading-7 sm:leading-8 text-muted">
                    <p className="mb-6">
                        At <span className="font-semibold text-primary">AlBayt Mart</span>, we aim to ensure
                        that our customers are fully satisfied with their purchases. If you are not completely
                        happy with your order, please review our return and refund policy below.
                    </p>

                    <h3 className="font-display text-2xl font-normal text-primary mt-9 mb-4">
                        1. Return Eligibility
                    </h3>

                    <ul className="list-disc list-inside space-y-2 mb-6">
                        <li>Items must be returned within 7 days of delivery.</li>

                        <li>Products should be unused, unwashed, and in their original packaging.</li>

                        <li>Returns will not be accepted for perishable or hygiene-sensitive items.</li>
                    </ul>

                    <h3 className="font-display text-2xl font-normal text-primary mt-9 mb-4">
                        2. Non-Returnable Items
                    </h3>

                    <ul className="list-disc list-inside space-y-2 mb-6">
                        <li>Opened or used products</li>

                        <li>Gift cards or promotional items</li>

                        <li>Custom or personalized products</li>
                    </ul>

                    <h3 className="font-display text-2xl font-normal text-primary mt-9 mb-4">
                        3. Refund Process
                    </h3>

                    <p className="mb-6">
                        Once your return is received and inspected, we will notify you about the status of
                        your refund. If approved, the refund will be processed to your original payment method
                        within 5–10 business days.
                    </p>

                    <h3 className="font-display text-2xl font-normal text-primary mt-9 mb-4">
                        4. Exchange Policy
                    </h3>

                    <p className="mb-6">
                        Exchanges are only available for defective or damaged items. If you need to exchange a
                        product for the same item, please contact our support team within 3 days of delivery.
                    </p>

                    <h3 className="font-display text-2xl font-normal text-primary mt-9 mb-4">
                        5. How to Request a Return
                    </h3>

                    <p className="mb-6">
                        To initiate a return or refund, please contact our customer support at{" "}
                        <Link
                            reloadDocument
                            to="mailto:info.albaytmart@gmail.com"
                           className="text-secondary font-medium underline"
                        >
                            info.albaytmart@gmail.com
                        </Link>{" "}
                        with your order details, product image, and reason for return.
                    </p>

                    <h3 className="font-display text-2xl font-normal text-primary mt-9 mb-4">
                        6. Contact Us
                    </h3>

                    <p>
                        If you have any questions about our Return & Refund Policy, please reach out to us at{" "}
                        <Link
                            reloadDocument
                            to="mailto:info.albaytmart@gmail.com"
                           className="text-secondary font-medium underline"
                        >
                            info.albaytmart@gmail.com
                        </Link>
                        .
                    </p>
                </div>
            </section>
        </div>
    );
};

export default ReturnRefundPolicy;
