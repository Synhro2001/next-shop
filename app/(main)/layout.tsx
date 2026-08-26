import Navbar from "@/components/layout/Navbar/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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