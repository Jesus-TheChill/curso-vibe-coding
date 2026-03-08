"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null;

  const createPageURL = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    return `${pathname}?${params.toString()}`;
  };

  const getPageNumbers = (): (number | "ellipsis")[] => {
    const pages: (number | "ellipsis")[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("ellipsis");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push("ellipsis");
      pages.push(totalPages);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();
  const btnBase = "flex items-center gap-1 px-4 py-2 rounded-lg border text-sm font-medium transition-all bg-white";
  const btnActive = "border-nordic-dark/10 text-nordic-dark hover:border-mosque hover:text-mosque";
  const btnDisabled = "border-nordic-dark/5 text-nordic-muted opacity-40 cursor-not-allowed";

  return (
    <nav aria-label="Property listings pagination" className="mt-12 flex items-center justify-center gap-1">
      {currentPage > 1 ? (
        <Link href={createPageURL(currentPage - 1)} className={`${btnBase} ${btnActive}`} aria-label="Previous page">
          <span className="material-icons text-base">chevron_left</span>
          Prev
        </Link>
      ) : (
        <span className={`${btnBase} ${btnDisabled}`}>
          <span className="material-icons text-base">chevron_left</span>
          Prev
        </span>
      )}

      {pageNumbers.map((page, index) =>
        page === "ellipsis" ? (
          <span key={`ellipsis-${index}`} className="px-3 py-2 text-sm text-nordic-muted select-none">…</span>
        ) : (
          <Link
            key={page}
            href={createPageURL(page)}
            aria-current={page === currentPage ? "page" : undefined}
            className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-all ${
              page === currentPage
                ? "bg-nordic-dark text-white shadow-sm"
                : "bg-white border border-nordic-dark/10 text-nordic-dark hover:border-mosque hover:text-mosque"
            }`}
          >
            {page}
          </Link>
        )
      )}

      {currentPage < totalPages ? (
        <Link href={createPageURL(currentPage + 1)} className={`${btnBase} ${btnActive}`} aria-label="Next page">
          Next
          <span className="material-icons text-base">chevron_right</span>
        </Link>
      ) : (
        <span className={`${btnBase} ${btnDisabled}`}>
          Next
          <span className="material-icons text-base">chevron_right</span>
        </span>
      )}
    </nav>
  );
}
