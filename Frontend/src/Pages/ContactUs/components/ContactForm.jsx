import Button from "../../../Components/Button";
import FormField from "../../../Components/FormField/index";
import { contactFields } from "../../../config";

export default function ContactForm({ formData, handleChange, handleSubmit }) {
    return (
        <div>
            <h2 className="mb-3 font-display text-3xl text-primary">A conversation starts here.</h2>
            <p className="mb-7 text-sm leading-6 sm:leading-7 text-muted">
                Tell us what’s on your mind. This form prepares an email in your preferred email app.
            </p>
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                {contactFields.map((field) => (
                    <FormField
                        key={field.name}
                        name={field.name}
                        label={field.label}
                        type={field.type || "text"}
                        autoComplete={field.autoComplete}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required={!field.optional}
                       className={field.name === "subject" ? "sm:col-span-2" : ""}
                    />
                ))}
                <FormField
                    name="message"
                    label="Your message"
                    as="textarea"
                    rows={5}
                    placeholder="A product question, an idea, or just a hello…"
                    value={formData.message}
                    onChange={handleChange}
                    required
                   className="sm:col-span-2"
                />
                <div className="sm:col-span-2">
                    <Button type="submit" >
                        Prepare email
                    </Button>
                    <p className="mt-4 text-xs leading-5 text-muted">
                        Nothing is sent until you send it from your email app.
                    </p>
                </div>
            </form>
        </div>
    );
}
