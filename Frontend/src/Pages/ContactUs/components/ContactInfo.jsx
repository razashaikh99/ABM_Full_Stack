import { Link } from "react-router-dom";
import { contactInfoItems } from "../../../config";

export default function ContactInfo() {
    return (
        <div className="rounded-sm bg-surface p-7 sm:p-9">
            <p className="eyebrow mb-5">THE HUMAN SIDE OF HOME</p>
            <h2 className="mb-7 font-display text-3xl text-primary">We're here to help.</h2>
            <div className="space-y-7">
                {contactInfoItems.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                        <item.icon className="mt-1 shrink-0 text-base text-secondary" aria-hidden="true" />
                        <div>
                            <h3 className="mb-1 text-sm font-semibold text-primary">{item.title}</h3>
                            {item.link ? (
                                <Link
                                    to={item.link}
                                    reloadDocument
                                   className="break-all text-sm leading-6 text-muted hover:underline"
                                >
                                    {item.detail}
                                </Link>
                            ) : (
                                <p className="text-sm leading-5 sm:leading-6 text-muted">{item.detail}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
