import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const rupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
})

/** Formats a number as Indonesian Rupiah, e.g. 850000 -> "Rp 850.000". */
export function formatRupiah(value: number) {
  return rupiah.format(value)
}
