import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ title, paths }) {
    return (
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 py-6 text-xs text-muted">
            <Link to="/" className="hover:text-primary">
                Home
            </Link>
            {paths?.map((item) => (
                <span className="flex items-center gap-2" key={item.link}>
                    <ChevronRight size={12} />
                    <Link to={item.link} className="hover:text-primary">
                        {item.name}
                    </Link>
                </span>
            ))}
            <ChevronRight size={12} />
            <span aria-current="page" className="text-primary">
                {title}
            </span>
        </nav>
    );
}
