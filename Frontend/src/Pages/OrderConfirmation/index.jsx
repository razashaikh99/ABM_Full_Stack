import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import EmptyState from "../../Components/EmptyState/index";
import { formatCurrency } from "../../Utils/formatCurrency";
import useOrderConfirmationPage from "./index.function";

export default function OrderConfirmation() {
    const { order, total } = useOrderConfirmationPage();

    if (!order)
        return (
            <EmptyState
                title="No order to show just yet."
                description="You haven’t placed an order in this session. Browse the collection or review the essentials saved in your bag."
            />
        );

    return (
        <div className="page-width py-16">
            <div className="mx-auto max-w-xl text-center">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-surface text-primary">
                    <Check size={25} />
                </div>
                <p className="eyebrow mb-4">THANK YOU FOR CHOOSING ALBAYT</p>
                <h1 className="display-title mb-5">Good things are on their way.</h1>
                <p className="mb-8 text-sm leading-6 sm:leading-7 text-muted">Your order reference is {order.id}.</p>
                <div className="mb-8 border-y border-line py-6 text-left">
                    {order.items.map((item) => (
                        <div key={item.id} className="flex justify-between gap-5 py-3 text-sm">
                            <span>
                                {item.name} × {item.quantity}
                            </span>
                            <span>{formatCurrency(item.price * item.quantity)}</span>
                        </div>
                    ))}
                    <div className="mt-4 flex justify-between border-t border-line pt-5 font-semibold text-primary">
                        <span>Total</span>
                        <span>{total}</span>
                    </div>
                </div>
                <Button to="/shop" >
                    Continue shopping
                </Button>
            </div>
        </div>
    );
}
