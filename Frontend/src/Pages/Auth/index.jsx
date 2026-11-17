import { authTabs as tabs } from "../../config/index";
import useAuthPage from "./index.function";
import LoginForm from "../../Components/LoginForm/index";
import RegisterForm from "../../Components/RegisterForm/index";
import ForgotPasswordForm from "../../Components/ForgotPasswordForm/index";

const Auth = () => {
    const {
        activeTab,
        handleTabChange
    } = useAuthPage();

    return (
        <div className="bg-gray-50 min-h-screen">

            <section className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl">

                    <div className="flex justify-between mb-6 border-b border-gray-200">
                        {tabs.map(tab => (
                            <button key={tab.id} onClick={() => handleTabChange(tab.id)}
                                className={`flex-1 py-2 font-semibold ${activeTab === tab.id ? "text-primary border-b-2 border-primary" : "text-gray-500"}`}>
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div>{activeTab === "register" ? <RegisterForm /> : activeTab === "forgot" ? <ForgotPasswordForm /> : <LoginForm />}</div>
                </div>

            </section>
        </div>
    );
};

export default Auth;
