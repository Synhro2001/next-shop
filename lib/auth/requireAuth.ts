import { redirect } from "next/navigation";
import { getCurrentUser } from "./auth";


export async function requireAuth() {
    const user = await getCurrentUser()
    console.log(user)
    if(!user) {
        redirect("/login")
    }

    return user
}