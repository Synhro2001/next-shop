import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import { User } from "@/types/user/user";

type ProfileProps = {
    user: User;
};

export default function Profile({ user }: ProfileProps) {
    return (
        <section className="mx-auto w-full max-w-4xl px-4 py-8">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

                <div className="flex flex-col items-center gap-4">
                    <Avatar
                        src={user.avatar}
                        name={user.username}
                        size="lg"
                    />

                    <div className="text-center">
                        <h1 className="text-2xl font-semibold">
                            {user.username}
                        </h1>

                        <p className="text-sm text-gray-500">
                            {user.email}
                        </p>
                    </div>

                    <Button variant="primaryOutline">
                        Edit profile
                    </Button>
                </div>

            </div>
        </section>
    );
}