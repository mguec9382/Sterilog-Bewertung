#!/usr/bin/env bash
# Legt ein neues COSMO CONSULT Projekt auf Basis dieses Repos an.
# Aufruf: cosmo-init.sh <zielverzeichnis> [--force]
set -euo pipefail

BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

usage() {
  cat <<'EOF'
Aufruf: cosmo-init.sh <zielverzeichnis> [--force]

  <zielverzeichnis>  Zielordner des neuen Projekts (wird angelegt).
  --force            Vorhandene Dateien im Ziel überschreiben.

Kopiert: .github/copilot-instructions.md, .vscode/mcp.json, templates/, assets/
Nicht kopiert: die zentralen Instruktionsdateien aus ~/.agents/instructions —
diese gelten über die Einstellung chat.instructionsFilesLocations bereits überall.
EOF
}

if [[ $# -lt 1 || "$1" == "-h" || "$1" == "--help" ]]; then
  usage
  exit 1
fi

TARGET="$1"
shift
FORCE=0
for arg in "$@"; do
  case "$arg" in
    --force) FORCE=1 ;;
    *) echo "Unbekannte Option: $arg" >&2; usage; exit 1 ;;
  esac
done

mkdir -p "$TARGET"
TARGET="$(cd "$TARGET" && pwd)"

if [[ "$TARGET" == "$BASE_DIR" ]]; then
  echo "Ziel darf nicht das Basis-Repo selbst sein." >&2
  exit 1
fi

CP_FLAGS=(-R)
[[ $FORCE -eq 0 ]] && CP_FLAGS+=(-n)

copy_item() {
  local src="$1" dest="$2"
  mkdir -p "$(dirname "$dest")"
  cp "${CP_FLAGS[@]}" "$src" "$dest"
}

copy_item "$BASE_DIR/.github/copilot-instructions.md" "$TARGET/.github/copilot-instructions.md"
copy_item "$BASE_DIR/.vscode/mcp.json" "$TARGET/.vscode/mcp.json"
copy_item "$BASE_DIR/templates" "$TARGET/"
copy_item "$BASE_DIR/assets" "$TARGET/"

echo "COSMO Basis kopiert nach: $TARGET"
echo "Nächster Schritt: Ordner in VS Code öffnen und .github/copilot-instructions.md anpassen."
