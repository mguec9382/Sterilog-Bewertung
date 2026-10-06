/* COSMO CONSULT CI-Palette für Excel-Exporte (ExcelJS).
   Quelle: Workshop- & Angebots-Kalkulations-Plattform (src/lib/excelTheme.ts). */

export const CI = {
  gold: 'B39C4D',
  goldDark: 'C7962E',
  gold20: 'F0E9D6',
  gold10: 'F7F3E8',
  anthracite: '1B212E',
  anthracite80: '2D3644',
  anthracite5: 'F2F3F5',
  white: 'FFFFFF',
  slate50: 'F8FAFC',
  slate200: 'E5E9F0',
  slate400: '94A3B8',
  slate600: '5B6577',
  green: '2F7D4F',
  orange: 'FF671E',
  red: 'AA4628',
} as const

/* CI-Schrift ist Quicksand (Web-Font der Plattform). Da Quicksand auf den wenigsten
   Rechnern als Systemschrift installiert ist, verwendet die Mappe Trebuchet MS als
   systemsicheren Ersatz (macOS + Windows). */
export const FONT = 'Trebuchet MS'
export const CI_FONT = 'Quicksand'
