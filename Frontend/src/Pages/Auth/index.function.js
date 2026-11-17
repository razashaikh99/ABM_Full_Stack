import { useState } from "react";
import { authTabs } from "../../config/index";

export default function useAuthPage() {

    const [activeTab, setActiveTab] = useState(authTabs[0].id);

    return {
        activeTab,
        handleTabChange: setActiveTab
    };
}
