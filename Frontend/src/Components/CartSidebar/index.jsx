import Button from "../Button";
import { X, ShoppingBag, ShieldCheck } from "lucide-react";
import useCartSidebar from "./index.function";
import CartItem from "../CartItem/index";
import { formatCurrency } from "../../Utils/formatCurrency";

export default function CartSidebar() {
    const {
        cartItems,
        itemCount,
        totalPrice,
        handleCheckout,
        isOpen,
        onClose,
        removeFromCart,
        updateQuantity,
        closeButtonRef,
    } = useCartSidebar();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[70]">
            <Button aria-label="Dismiss cart" variant="plain" className="absolute inset-0 bg-primary/35" onClick={onClose} />
            <section
                role="dialog"
                aria-modal="true"
                aria-label="Shopping cart"
               className="absolute inset-y-0 right-0 flex w-full max-w-[480px] flex-col bg-white shadow-2xl"
            >
                <div className="flex items-center justify-between border-b border-line px-6 py-6 sm:px-8">
                    <div className="flex items-center gap-3">
                        <ShoppingBag size={22} strokeWidth={1.5} />
                        <h2 className="font-display text-3xl text-primary">Your bag</h2>
                        <span className="text-sm text-muted">({itemCount})</span>
                    </div>
                    <Button
                        ref={closeButtonRef}
                        variant="icon"
                        onClick={onClose}
                        aria-label="Close cart"
                    >
                        <X size={22} />
                    </Button>
                </div>
                <div className="flex-1 overflow-y-auto px-6 sm:px-8">
                    {cartItems.length ? (
                        cartItems.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                onRemove={removeFromCart}
                                onQuantityChange={updateQuantity}
                            />
                        ))
                    ) : (
                        <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                            <ShoppingBag size={44} strokeWidth={1} className="mb-6 text-primary/40" />
                            <h3 className="mb-3 font-display text-3xl text-primary">
                                Room for something good.
                            </h3>
                            <p className="mb-7 text-sm leading-5 sm:leading-6 text-muted">
                                Your bag is empty. Find a little something for your everyday.
                            </p>
                            <Button variant="outline" onClick={onClose}>
                                Keep exploring
                            </Button>
                        </div>
                    )}
                </div>
                <div className="border-t border-line px-6 py-6 sm:px-8">
                    <div className="mb-2 flex justify-between text-base font-semibold text-primary">
                        <span>Subtotal</span>
                        <span>{formatCurrency(totalPrice)}</span>
                    </div>
                    <p className="mb-5 text-xs leading-5 text-muted">Delivery is calculated at checkout.</p>
                    <Button
                        className="w-full"
                        disabled={!cartItems.length}
                        onClick={handleCheckout}
                    >
                        Continue to checkout
                    </Button>
                    <Button
                        onClick={onClose}
                        variant="plain"
                       className="mt-4 w-full text-center text-sm text-muted underline underline-offset-4"
                    >
                        Continue shopping
                    </Button>
                    <p className="mt-5 flex items-center justify-center gap-2 text-xs text-muted">
                        <ShieldCheck size={14} />
                        Your bag is saved on this device.
                    </p>
                </div>
            </section>
        </div>
    );
}
