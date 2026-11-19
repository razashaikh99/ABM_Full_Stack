import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import useCheckoutPage from "./index.function";
import BillingForm from "./components/BillingForm";
import OrderSummary from "./components/OrderSummary";
import Breadcrumb from "../../Components/Breadcrumb/index";
import EmptyState from "../../Components/EmptyState/index";

export default function Checkout() {
    const {
        formData,
        cartItems,
        billingFormRef,
        handleChange,
        handleBillingSubmit,
        subtotal,
        shipping,
        total,
    } = useCheckoutPage();

    if (!cartItems.length)
        return (
            <EmptyState
                title="Your bag is empty."
                description="A considered home starts with a little inspiration. Find something you’ll love using every day."
            />
        );

    return (
        <div className="page-width pb-20">
            <Breadcrumb title="Checkout" />
            <div className="mb-10 flex flex-wrap items-center justify-between gap-6 border-b border-line pb-8">
                <div>
                    <p className="eyebrow mb-3">THE NEXT LITTLE STEP</p>
                    <h1 className="display-title">Make it yours.</h1>
                </div>
                <Link to="/shop" className="text-link">
                    Continue shopping
                </Link>
            </div>
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_420px]">
                <div>
                    <BillingForm
                        formRef={billingFormRef}
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleBillingSubmit}
                    />
                    <div className="mt-10 border-t border-line pt-7">
                        <h2 className="mb-3 flex items-center gap-2 text-base font-semibold text-primary">
                            <ShieldCheck size={18} />
                            Payment
                        </h2>
                        <p className="text-sm leading-6 sm:leading-7 text-muted">
                            Online payments and order submission are not yet available. You can review your
                            details and keep your bag saved for later.
                        </p>
                    </div>
                </div>
                <div className="lg:sticky lg:top-36">
                    <OrderSummary
                        cartItems={cartItems}
                        subtotal={subtotal}
                        shipping={shipping}
                        total={total}
                    />
                </div>
            </div>
        </div>
    );
}
