---
description: 'Feste Ausgabestruktur für MBPC-Abgleich und Success-by-Design-Mapping'
applyTo: '**/*.md'
---

# Ausgabestruktur MBPC und Success by Design

Gilt für Analysen, Fachkonzepte, Lastenhefte, Anforderungs- und Prozessdokumente.

## Pflichtgliederung

1. **Ausgangslage und Ziel** — Auftrag, Scope, Nicht-Scope.
2. **Abgleich mit MBPC-Prozesskategorien** — Tabelle je Anforderung.
3. **Mapping auf Success-by-Design-Phasen** — Tabelle je Anforderung.
4. **Abweichungen und Lücken** — eigener Abschnitt, nie in die Tabellen mischen.
5. **Offene Punkte und Annahmen** — je Punkt mit verantwortlicher Rolle.
6. **Nächste Schritte**.

## Tabelle MBPC-Abgleich

| ID | Anforderung | End-to-End-Prozess | Prozesskategorie | Standardabdeckung | Quelle |
| --- | --- | --- | --- | --- | --- |

- Nutze für die Standardabdeckung genau eine Stufe: `Standard`, `Konfiguration`, `Erweiterung`, `Nicht abgedeckt`.
- Nutze die End-to-End-Prozesse und Prozessgruppen aus `.github/instructions/mbpc-model.instructions.md`.
- Erfinde keine Prozesskategorie; trage bei fehlender Zuordnung `offen` ein und verweise in Abschnitt 4.

## Tabelle Success-by-Design-Mapping

| ID | Phase | Komplexität | Aufwand (PT) | Ergebnisartefakt | Risiko |
| --- | --- | --- | --- | --- | --- |

- Verwende ausschließlich die Phasen `Strategize`, `Initiate & Scoping`, `Build & Implement`, `Prepare`, `Operate`.
- Ordne jeder Anforderung genau eine Phase als Startpunkt zu.
- Nutze als Komplexität `Small` (Σ 1,5 PT), `Middle` (Σ 3,0 PT) oder `Komplex` (Σ 6,5 PT).
- Rechne `Strategize` nicht in die Aufwands- und Kostensumme ein.
- Bewerte Risiken mit `niedrig`, `mittel` oder `hoch` und begründe `hoch` in einem Satz.

## Abweichungen

- Markiere jede Abweichung vom Standard mit dem Präfix `ABW-` und einer laufenden Nummer.
- Nenne je Abweichung: Auslöser, Auswirkung, Alternative im Standard, Aufwandstendenz.
- Trenne fachliche Abweichungen und technische Abweichungen in eigenen Unterabschnitten.

## Formales

- Nutze Tabellen statt Fließtext für alle Zuordnungen.
- Vergib IDs im Format `ANF-001` und referenziere sie durchgängig.
- Kennzeichne unbestätigte Inhalte mit `(Annahme)`.
