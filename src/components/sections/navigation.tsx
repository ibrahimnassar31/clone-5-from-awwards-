import Link from 'next/link';

const navLinks = [
  { name: 'Works', href: '/#works' },
  { name: 'Play', href: '/play' },
  { name: 'About', href: '/About' },
  {
    name: 'Resume',
    href: 'https://drive.google.com/file/d/1tcaYx7AKCvV2_ijayDLl0jxvXJcs-gx7/view?usp=drive_link',
    isExternal: true,
  },
];

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-24 items-center justify-between px-4">
        <Link href="/" className="font-logo text-2xl font-medium text-text-primary hover:no-underline">
          Tingting Luo
        </Link>
        <nav className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.isExternal ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-text-primary transition-opacity hover:no-underline hover:opacity-75"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="text-base text-text-primary transition-opacity hover:no-underline hover:opacity-75"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <a
            href="mailto:tingtingluo.ux@gmail.com"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-opacity hover:no-underline hover:opacity-90"
          >
            Say hi
          </a>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button would go here, but is not part of the specified scope. */}
        </div>
      </div>
    </header>
  );
}