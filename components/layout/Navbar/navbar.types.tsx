
type NavbarLink = {
    label: string;
    href: string;
}

export type NavbarProps = {
    title?: string;
    bgColor: string;
    textColor: string;
    links: NavbarLink[];

}