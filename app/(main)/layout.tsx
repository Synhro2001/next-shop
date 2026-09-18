import Navbar from "@/components/layout/Navbar/Navbar";
import { requireAuth } from "@/lib/auth/requireAuth";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  await requireAuth()
  
  return (
    <>
      <Navbar
        title="My Website"
        bgColor="bg-grey-100"
        textColor="text-white"
        links={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Car", href: "/car" },
          { label: "Apartment", href: "/apartment" },
          { label: "Profile", href: "/profile" },
        ]}
      />

      {children}
    </>
  );
}