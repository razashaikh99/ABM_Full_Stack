import Button from "../../../Components/Button";
import { LockKeyhole, Info } from "lucide-react";
import { checkoutSettings } from "../../../config";
import { formatCurrency } from "../../../Utils/formatCurrency";

export default function OrderSummary({ cartItems, subtotal, shipping, total }) {
    return (
        <section className="rounded-sm border border-line bg-surface p-6 sm:p-8">
            <h2 className="mb-6 font-display text-2xl text-primary">In your bag</h2>
            <div className="mb-6 divide-y divide-line">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 py-4 first:pt-0">
                        <div className="relative h-16 w-16 shrink-0 rounded-sm border border-line bg-white p-2">
                            <img src={item.image} alt={item.name} className="h-full w-full object-contain" />
                            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                                {item.quantity}
                            </span>
                        </div>
                        <p className="min-w-0 flex-1 text-sm leading-5 sm:leading-6 text-primary">{item.name}</p>
                        <span className="text-sm font-medium text-primary">
                            {formatCurrency(item.price * item.quantity)}
                        </span>
                    </div>
                ))}
            </div>
            <dl className="space-y-3 border-y border-line py-5 text-sm">
                <div className="flex justify-between">
                    <dt className="text-muted">Subtotal</dt>
                    <dd>{formatCurrency(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                    <dt className="text-muted">Delivery</dt>
                    <dd>{formatCurrency(shipping)}</dd>
                </div>
            </dl>
            <div className="my-6 flex items-baseline justify-between text-primary">
                <span className="font-medium">
                    Total <span className="text-xs text-muted">PKR</span>
                </span>
                <span className="text-xl font-semibold">{formatCurrency(total)}</span>
            </div>
            <div className="mb-5 flex gap-3 border-l-2 border-secondary bg-white p-4">
                <Info size={17} className="mt-0.5 shrink-0 text-secondary" />
                <p className="text-xs leading-5 sm:leading-6 text-muted">
                    {checkoutSettings.unavailableMessage} No payment will be taken.
                </p>
            </div>
            <Button type="button" disabled  className="w-full">
                <LockKeyhole size={15} />
                Place order
            </Button>
        </section>
    );
}
