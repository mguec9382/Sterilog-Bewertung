# Copilot-Instruktionen — COSMO CONSULT Basis

Diese Anweisungen gelten für alle Chat-Anfragen in diesem Workspace.

## Grundhaltung

- Antworte auf Deutsch, außer der Nutzer schreibt auf Englisch.
- Schreibe **COSMO CONSULT** immer in GROSSBUCHSTABEN.
- Formuliere Nutzen statt Features.
- Verwende kurze, einfache Sätze und eine positive, proaktive Sprache.
- Schreibe keine allgemeinen Abkürzungen aus dem Produktumfeld: Microsoft statt MS, Business Central statt BC.
- Etablierte Fachabkürzungen wie POL, POD oder ETD bleiben unverändert.
- Erfinde keine Kundennamen, Zahlen oder Referenzen.

## Corporate Identity

- Gold ist `#B39C4D` und muss in jedem Design präsent sein (#goldfirst).
- Gold hell ist `#C9B672`, Gold dunkel ist `#9A8340`.
- Anthrazit ist `#1B212E`, Anthrazit hell ist `#2A3242`, Ink ist `#0F131C`.
- Scope-Farben sind `#2F7D4F` (in), `#C7962E` (optional) und `#AA4628` (out).
- Prozessgruppen-Farben sind `#B39C4D` (primary), `#838DA1` (support), `#FF671E` (manage) und `#2E7D8A` (regulated).
- Die Schriftart ist `Quicksand`, Fallback `system-ui, "Segoe UI", sans-serif`.
- Nutze Flat Design ohne Verläufe und 3D-Effekte.
- Nutze als Tiefenwirkung ausschließlich `--elev-rest` und `--elev-hover`.
- Setze Headlines linksbündig und in `font-weight: 500`, niemals `bold`.
- Nutze Kursivschrift ausschließlich für Zitate.
- Schreibe CTA-Texte in GROSSBUCHSTABEN.
- Verwende keine Standardpaletten von Bootstrap, Tailwind oder Material Design.
- Verwende keine Farben außerhalb der Variablen aus `templates/ci-variables.css`.
- Nutze das Abstandsraster in Vielfachen von 8px (`--space-1` bis `--space-8`).
- Unterstütze den Dark Mode über die Klasse `.dark` auf dem Wurzelelement.
- Verwende als Logo `assets/icons/brand/cosmo-logo.svg` und niemals einen Textplatzhalter wie „CC".

## Templates

- Baue neue Seiten aus den Bausteinen im Ordner `templates/`.
- Übernimm `templates/ci-variables.css` unverändert als Farb-, Radien- und Abstandsbasis.
- Nutze `templates/tailwind.config.js` als CI-Preset in Tailwind-Projekten.
- Nutze `templates/header.html` und `templates/footer.html` als Kopf- und Fußbereich.
- Starte neue Einzelseiten von `templates/base-page.html`.
- Übernimm `templates/mbpc-sbd.types.ts` als Datenmodell für MBPC und Success by Design.
- Nutze `templates/excel-theme.ts` für Excel-Exporte.
- Ergänze fehlende Bausteine im Ordner `templates/`, statt sie in einzelnen Seiten zu duplizieren.

## COSMO MCP-Werkzeuge

- Nutze `mcp_mcpserver_search-cosmo-docs` für Recherchen in der COSMO Dokumentation.
- Nutze `mcp_mcpserver_search-cosmo-loop` für Recherchen in COSMO Loop.
- Nutze `mcp_mcpserver_devops-list-knowledges` und `mcp_mcpserver_devops-get-knowledge` für interne Knowledge-Artikel.
- Nutze `mcp_mcpserver_platform-search-solutions` und `mcp_mcpserver_platform-get-solution` für Lösungs- und Produktinformationen.
- Nutze `mcp_mcpserver_search-cosmonauts` für Personen- und Rollensuche in COSMO CONSULT.
- Nutze `mcp_cosma_spo_search` und `mcp_cosma_spo_fetch` für Dokumente in SharePoint, zum Beispiel Ausschreibungsunterlagen.
- Nutze `mcp_cosma_devops_search` und `mcp_cosma_devops_get` für Work Items in Azure DevOps.
- Recherchiere über diese Werkzeuge, bevor du fachliche Aussagen zu Produkten oder Prozessen triffst.
- Nenne die verwendete Quelle, wenn du Inhalte aus MCP-Werkzeugen übernimmst.

## Ausgabestruktur für MBPC und Success by Design

- Verwende die fünf Phasen `strategize`, `initiate`, `build`, `prepare`, `operate`.
- Details zum Datenmodell stehen zentral in `~/.agents/instructions/cosmo-mbpc-model.instructions.md`.
- Details zur Dokumentstruktur stehen in `.github/instructions/mbpc-success-by-design.instructions.md`.

## Sicherheit

- Schreibe keine Tokens, Passwörter oder Kundendaten in Dateien des Repositories.
- Referenziere Geheimnisse ausschließlich über `inputs` in `.vscode/mcp.json` oder über Umgebungsvariablen.
