import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PortfolioBreadcrumbProps {
  page: string;
}

export function PortfolioBreadcrumb({ page }: PortfolioBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-stone-400 mb-6">
      <Link href="/portfolio" className="hover:text-stone-600 transition-colors">
        Portfolio
      </Link>
      <ChevronRight className="size-3.5" />
      <span className="text-stone-600">{page}</span>
    </nav>
  );
}
