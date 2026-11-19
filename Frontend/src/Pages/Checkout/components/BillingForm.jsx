import Button from "../../../Components/Button";
import FormField from "../../../Components/FormField/index";
import { billingFields } from "../../../config";

export default function BillingForm({ formRef, formData, handleChange, handleSubmit }) {
    return (
        <section>
            <h2 className="mb-2 font-display text-2xl text-primary">Your details</h2>
            <p className="mb-7 text-sm leading-5 sm:leading-6 text-muted">
                A few details to help us get your everyday essentials to you.
            </p>
            <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {billingFields.map((field) => (
                    <FormField
                        key={field.name}
                        id={"billing-" + field.name}
                        name={field.name}
                        label={field.label}
                        type={field.type || "text"}
                        value={formData[field.name]}
                        autoComplete={field.autoComplete}
                        placeholder={field.placeholder}
                        onChange={handleChange}
                        required
                       className={field.wide ? "sm:col-span-2" : ""}
                    />
                ))}
                <div className="mt-3 sm:col-span-2">
                    <Button type="submit" variant="outline">
                        Review billing details
                    </Button>
                </div>
            </form>
        </section>
    );
}
