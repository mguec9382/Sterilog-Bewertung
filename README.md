# COSMO CONSULT — Basis-Repository

Startpunkt für neue Projekte mit CI-konformer Copilot-Konfiguration.

## Struktur

| Pfad | Zweck |
| --- | --- |
| `.github/copilot-instructions.md` | Repo-weite Anweisungen, gelten für alle Chat-Anfragen. |
| `.github/instructions/mbpc-success-by-design.instructions.md` | Feste Ausgabestruktur für Markdown-Dokumente. |
| `.vscode/mcp.json` | Anbindung der COSMO MCP-Server. |
| `scripts/cosmo-init.sh` | Kopiert die Basis in ein neues Projektverzeichnis. |
| `templates/` | CI-konforme Bausteine für Oberflächen, Datenmodell und Dokumente. |
| `assets/icons/brand/cosmo-logo.svg` | Bildmarke für Header und Präsentationen. |

Farbwerte, Schrift, Radien, MBPC-Katalog und Success-by-Design-Phasen stammen aus der
Workshop- & Angebots-Kalkulations-Plattform und sind dort produktiv im Einsatz.

## Neues Projekt anlegen

```bash
~/Projekte/cosmo-basis/scripts/cosmo-init.sh ~/Projekte/mein-projekt
```

Vorhandene Dateien im Ziel bleiben erhalten. Mit `--force` werden sie überschrieben.

Optionaler Alias für `~/.zshrc`:

```bash
alias cosmo-init="$HOME/Projekte/cosmo-basis/scripts/cosmo-init.sh"
```

## Zentrale Instruktionen

Diese Dateien liegen außerhalb des Repos und gelten in jedem Workspace:

| Pfad | Geltung |
| --- | --- |
| `~/.agents/instructions/cosmo-html-ci.instructions.md` | HTML, CSS und Komponenten |
| `~/.agents/instructions/cosmo-mbpc-model.instructions.md` | MBPC- und Success-by-Design-Modell im Code |
| VS Code Prompts-Ordner: `cosmo-standards.instructions.md` | alle Dateien |
| VS Code Prompts-Ordner: `cosmo-ci.instructions.md`, `cosmo-mbpc.instructions.md` | Markdown |

Aktiviert über die Einstellung `chat.instructionsFilesLocations`.

## Nutzung

1. Neues Projekt über `scripts/cosmo-init.sh` anlegen.
2. Ordner als Workspace in VS Code öffnen.
3. Beim ersten Chat den COSMO Platform Token eingeben, wenn VS Code danach fragt.
4. Neue Seiten aus `templates/base-page.html` starten.
5. Neue Fachdokumente aus `templates/mbpc-mapping.md` starten.

## Anpassung

- Projektspezifische Regeln in `.github/copilot-instructions.md` ergänzen.
- Regeln für weitere Dateitypen als eigene Datei in `.github/instructions/` mit passendem `applyTo` anlegen.
- Projektübergreifende Regeln in `~/.agents/instructions/` pflegen.
