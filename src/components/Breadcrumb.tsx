"use client";
import { textFormatter } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const Breadcrumb: FC = () => {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <nav className="w-full px-6">
      <ul className="flex gap-4 mt-10 mr-auto font-semibold opacity-60">
        {pathnames.length !== 0 && (
          <li>
            <Link href="/">Home</Link>
          </li>
        )}
        {pathnames.length !== 0 && "/"}
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={pathname}>
              {!isLast ? (
                <Link href={routeTo}>{textFormatter(pathname)}</Link>
              ) : (
                <span>{textFormatter(pathname)}</span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
