import Button from "../../Components/Button";
import { authTabs } from "../../config";
import useAuthPage from "./index.function";
import LoginForm from "../../Components/LoginForm/index";
import RegisterForm from "../../Components/RegisterForm/index";
import ForgotPasswordForm from "../../Components/ForgotPasswordForm/index";

export default function Auth() {
    const { activeTab, handleTabChange } = useAuthPage();

    return (
        <div>
            <div className="mb-10 flex gap-6 border-b border-line" aria-label="Account options">
                {authTabs.map((tab) => (
                    <Button variant="plain"
                        key={tab.id}
                        type="button"
                        onClick={() => handleTabChange(tab.id)}
                        aria-pressed={activeTab === tab.id}
                       className={
                            "border-b-2 pb-3 text-sm " +
                            (activeTab === tab.id
                                ? "border-primary font-semibold text-primary"
                                : "border-transparent text-muted")
                        }
                    >
                        {tab.label}
                    </Button>
                ))}
            </div>

            {activeTab === "register" ? (
                <RegisterForm />
            ) : activeTab === "forgot" ? (
                <ForgotPasswordForm />
            ) : (
                <LoginForm />
            )}
        </div>
    );
}
