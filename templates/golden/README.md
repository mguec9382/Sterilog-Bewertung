# Golden Template · Kapitel 10 – Anforderungen an den Partner

Fixe Vorlage (**Must Have**) des COSMO CONSULT Golden Template für Ausschreibungs- und Angebotsseiten im Corporate Design (Gold `#B39C4D`, #goldfirst).

## Nutzen

Die Vorlage beantwortet Kapitel 10 eines Anforderungshefts sofort, konsistent und im vollständigen COSMO CONSULT Erscheinungsbild – inklusive Bilder, Kacheln, Schaubilder, Unternehmenszeitstrahl und Weltkarte. Statt jede Bewertung neu aufzubauen, wird die Vorlage je Ausschreibung nur mit den Platzhaltern des Interessenten gefüllt.

## Einbinderegel über den Fragenkatalog

Beantwortet der Fragenkatalog einer Ausschreibung ein Kapitel mit **„ja"**, wird die zugeordnete Sektion aus [golden-kapitel-10.html](golden-kapitel-10.html) in die neue HTML-Struktur eingebunden. Kapitel ohne „ja" entfallen. Die Zuordnung steht maschinenlesbar in [fragenkatalog.json](fragenkatalog.json).

| Frage | Kapitel | Titel | Anker | Status |
| --- | --- | --- | --- | --- |
| K10.1 | 10.1 | Unternehmensprofil des Anbieters | `k101` | Must Have |
| K10.2 | 10.2 | Branchen- und Projekterfahrung, Referenzen | `k102` | Must Have |
| K10.3 | 10.3 | Team und Ressourcen | `k103` | Must Have |
| K10.5 | 10.5 | Implementierungsplan | `k105` | Must Have |
| K10.6 | 10.6 | Migrationskonzept | `k106` | Must Have |
| K10.7 | 10.7 | Testkonzept sowie Release- und Deploymentplan | `k107` | Must Have |
| K10.8 | 10.8 | Schulungs- und Change-Management-Konzept | `k108` | Must Have |
| K10.9 | 10.9 | Support- und Wartungsmodell nach Go-Live | `k109` | Must Have |

Jedes Kapitel ist in der Vorlage mit einem Marker versehen: `<!-- golden:chapter id="10.1" frage="K10.1" ... -->`. Die Sektion reicht vom Marker bis zum nächsten Marker beziehungsweise bis zum Ende des Kapitel-10-Blocks.

**Bewusst nicht enthalten:**

- **10.4 Projektorganisation des Interessenten** – vollständig kundenspezifisch, wird je Ausschreibung neu erstellt.
- **10.10 Lizenz- und Preismodell** – kalkulationsspezifisch, wird je Ausschreibung aus der Kalkulationsdatei erzeugt.

## Inhaltliche Vorgaben

- **Lokalisierung und Compliance** bezieht sich fest auf **Deutschland, Österreich und die Schweiz** (DACH) mit den landesspezifischen Finanz- und Steuerprozessen je Land.
- **Nachgewiesene Präsenz** (Unterpunkt „Lokaler Support und Präsenz" sowie „Stabilität und Zukunftssicherheit") arbeitet ausschließlich mit Platzhaltern – ohne Bezug zu konkreten Unternehmen, Orten oder Jahreszahlen.
- Kennzahlen der Unternehmensgruppe (Mitarbeitende, Länder, Standorte, Kunden) sowie die Unternehmensgeschichte sind fixer Bestandteil der Vorlage und werden zentral gepflegt.

## Platzhalter

| Platzhalter | Bedeutung |
| --- | --- |
| `{{INTERESSENT}}` | Name des Interessenten, zum Beispiel Muster AG |
| `{{ALT_SYSTEM}}` | Abzulösendes Vorgängersystem, zum Beispiel Microsoft Dynamics NAV 2017 |
| `{{LAND}}` | Land der lokalen Niederlassung |
| `{{STANDORT_ORT}}` | Ort der lokalen Niederlassung |
| `{{STANDORT_REGION}}` | Regionsangabe zum Standort |
| `{{TEAM_GROESSE}}` | Größe des lokalen Stammteams |
| `{{EINTRAG_SEIT}}` | Jahr der Handelsregistereintragung der Landesgesellschaft |
| `{{KICKOFF_TERMIN}}` | Geplanter Kick-off-Termin aus dem Anforderungsheft |
| `{{ZEITRAUM_INITIATE}}` | Zeitraum der Phase Initiate & Scoping |
| `{{ZEITRAUM_BUILD}}` | Zeitraum der Phase Build & Implement |
| `{{ZEITRAUM_PREPARE}}` | Zeitraum der Phase Prepare |
| `{{ZEITRAUM_OPERATE}}` | Zeitraum ab dem Produktivstart (Phase Operate) |
| `{{GOLIVE_TERMIN}}` | Geplanter Go-live-Termin |
| `{{PT_STRATEGIZE}}` – `{{PT_OPERATE}}` | Aufwand je Success-by-Design-Phase in Personentagen |

## Pflege

Die Vorlage wurde aus der Bewertung Graphax AG (`bewertung-graphax-ag-v1.5.0.html`) erzeugt und verallgemeinert. Das Erzeugungsskript liegt im Graphax-Repository unter `scripts/build-golden-template.cjs`. Änderungen am Design oder an den festen Inhalten erfolgen zentral in dieser Vorlage – nicht in den abgeleiteten Ausschreibungsseiten.
