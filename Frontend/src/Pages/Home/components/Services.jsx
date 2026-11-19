import { homeServices } from "../../../config";

export default function Services() {
    return (
        <div className="border-b border-line">
            <div className="page-width grid gap-6 py-6 sm:grid-cols-3">
                {homeServices.map((service) => (
                    <div key={service.id} className="flex items-center justify-center gap-3 sm:justify-start">
                        <service.icon className="shrink-0 text-xl text-secondary" aria-hidden="true" />
                        <div>
                            <h2 className="text-sm font-semibold text-primary">{service.title}</h2>
                            <p className="mt-1 max-w-xs text-xs leading-5 text-muted">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
