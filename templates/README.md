# Templates

CI-konforme Bausteine für alle Oberflächen in diesem Repository.
Quelle der Werte: Workshop- & Angebots-Kalkulations-Plattform.

| Datei | Zweck |
| --- | --- |
| `ci-variables.css` | Farben, Typografie, Radien, Elevation, Abstandsraster, Dark Mode. Unverändert übernehmen. |
| `tailwind.config.js` | CI-Preset für Tailwind-Projekte. |
| `header.html` | Kopfbereich mit Bildmarke oben links. |
| `footer.html` | Fußbereich mit Claim und Rechtslinks. |
| `base-page.html` | Startpunkt für neue Einzelseiten. |
| `mbpc-sbd.types.ts` | Datenmodell für MBPC-Katalog und Success-by-Design-Phasen. |
| `excel-theme.ts` | CI-Palette und Schrift für Excel-Exporte. |
| `mbpc-mapping.md` | Gerüst für MBPC- und Success-by-Design-Dokumente. |

## Regeln

- Neue wiederverwendbare Bausteine hier ergänzen, nicht in Seiten duplizieren.
- Farbwerte ausschließlich über die Variablen aus `ci-variables.css` verwenden.
- Das Logo liegt unter `assets/icons/brand/cosmo-logo.svg` und wird nie durch Text ersetzt.
- Bei Single-File-HTML das Logo als Inline-SVG einbetten.
