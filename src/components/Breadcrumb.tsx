"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <nav className="w-full px-6">
      <ul className="flex gap-4 mt-10 mr-auto font-semibold opacity-60">
        <li>
          <Link href="/">Home</Link>
        </li>
        {pathnames.length !== 0 && "/"}
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={pathname}>
              {!isLast ? (
                <Link href={routeTo}>{capitalizeFirstLetter(pathname)}</Link>
              ) : (
                <span>{capitalizeFirstLetter(pathname)}</span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

function capitalizeFirstLetter(pathname: string) {
  return pathname.charAt(0).toUpperCase() + pathname.slice(1);
}

export default Breadcrumb;
