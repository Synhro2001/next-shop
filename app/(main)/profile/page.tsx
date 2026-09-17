import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth/auth";
import Profile from "@/components/layout/Profile/Profile";

export default async function ProfilePage() {
    const user = await getCurrentUser();

    if (!user) {
        redirect("/login");
    }

    return <Profile user={user} />;
}