import useCheckoutPage from "./index.function";
import BillingForm from "./components/BillingForm";
import OrderSummary from "./components/OrderSummary";
import { Link } from "react-router-dom";

const Checkout = () => {
    const {
        formData,
        cartItems,
        billingFormRef,
        handleChange,
        handleBillingSubmit,
        subtotal,
        shipping,
        total,
        handlePlaceOrder
    } = useCheckoutPage();

    if (!cartItems.length) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                <h1 className="text-3xl font-bold text-primary mb-4">Your cart is empty</h1>

                <Link to="/shop" className="text-secondary underline">Continue shopping</Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">

            <h1 className="text-3xl font-bold text-primary mb-8 text-center">
                Checkout
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-md">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">
                        Billing Information
                    </h2>

                    <BillingForm formRef={billingFormRef} formData={formData} handleChange={handleChange} handleSubmit={handleBillingSubmit} />
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md h-fit">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">
                        Order Summary
                    </h2>

                    <OrderSummary cartItems={cartItems} subtotal={subtotal} shipping={shipping} total={total} onPlaceOrder={handlePlaceOrder} />
                </div>
            </div>
        </div>
    );
};

export default Checkout;
