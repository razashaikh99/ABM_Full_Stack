import { Link, Outlet } from "react-router-dom";
import { logo } from "../../assets/images";
import { authLayoutConfig } from "../../config";

export default function AuthLayout() {
    return (
        <div className="min-h-screen bg-white lg:grid lg:grid-cols-2">
            <section
               className="relative hidden min-h-screen overflow-hidden bg-primary lg:block"
                aria-label="The AlBayt home"
            >
                <img
                    src={authLayoutConfig.image}
                    alt="A thoughtfully arranged kitchen filled with natural light"
                   className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/35" />

                <div className="absolute inset-x-0 bottom-0 p-12 pb-16 text-white xl:p-16">
                    <p className="mb-5 text-xs font-semibold tracking-[0.18em]">{authLayoutConfig.eyebrow}</p>

                    <h2 className="mb-6 whitespace-pre-line font-display text-5xl leading-[1.08] xl:text-6xl">
                        {authLayoutConfig.title}
                    </h2>

                    <p className="max-w-sm text-base leading-6 sm:leading-7 text-white/90">
                        {authLayoutConfig.description}
                    </p>
                </div>
            </section>

            <section className="flex min-h-screen flex-col px-6 py-8 sm:px-12 lg:px-14 xl:px-20">
                <div className="flex items-center justify-between gap-6">
                    <Link to="/" aria-label="AlBayt Mart home">
                        <img src={logo} alt="AlBayt Mart" className="h-auto w-36" />
                    </Link>

                    <Link to="/shop" className="text-sm text-muted hover:text-primary">
                        Back to shop
                    </Link>
                </div>

                <main
                    id="main-content"
                   className="mx-auto flex w-full max-w-[400px] flex-1 flex-col justify-center py-12 lg:py-14"
                >
                    <Outlet />
                </main>

                <p className="text-center text-xs leading-5 text-muted">
                    A little more ease. A little more home.
                </p>
            </section>
        </div>
    );
}
