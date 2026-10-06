/* MBPC- und Success-by-Design-Datenmodell.
   Quelle: Workshop- & Angebots-Kalkulations-Plattform (src/types.ts).
   In neuen Projekten unverändert übernehmen, damit Kalkulationen vergleichbar bleiben. */

/** Die fünf Success-by-Design-Phasen */
export type PhaseKey = 'strategize' | 'initiate' | 'build' | 'prepare' | 'operate'

export const PHASE_KEYS: PhaseKey[] = ['strategize', 'initiate', 'build', 'prepare', 'operate']

/**
 * Phasen, die tatsächlich in die Aufwands-/Kostenkalkulation einfließen.
 * „Strategize" ist bewusst ausgenommen – diese Phase wird in der Kalkulation nicht benötigt.
 */
export const CALC_PHASE_KEYS: PhaseKey[] = ['initiate', 'build', 'prepare', 'operate']

export type PhaseEffort = Record<PhaseKey, number>
export type PhaseRoleMap = Record<PhaseKey, string>

/** Erfahrungsbasierte Komplexitätsvorlagen (Summe Personentage über alle Phasen) */
export type Complexity = 'small' | 'medium' | 'complex'

export const COMPLEXITY_KEYS: Complexity[] = ['small', 'medium', 'complex']

/** Scope-Zustand je Prozess, Bereich und Feature */
export type Scope = 'in' | 'opt' | 'out' | 'unset'

/** Prozessgruppe — steuert die Akzentfarbe (--grp-*) */
export type ProcessGroup = 'primary' | 'support' | 'manage' | 'regulated'

export interface CatalogArea {
  t: string
  en: string
  hint: string
  hintEN: string
  bc: string[]
  steps: string[]
  stepsEN: string[]
  /** je Paket das zugeordnete Modul (Lizenzierung) aus dem COSMO-MBPC; leer = Business-Central-Standard */
  stepModule?: string[]
  /** je Paket der Success-by-Design-Vorschlagsaufwand (Personentage je Phase) aus dem COSMO-MBPC */
  stepEffort?: PhaseEffort[]
}

export interface CatalogProcess {
  id: string
  catId: string | number
  icon: string
  group: ProcessGroup
  nameDE: string
  nameEN: string
  intro: string
  introEN: string
  cosmo?: boolean
  areas: CatalogArea[]
}

/* ── Importierter Microsoft Business Process Catalog (workload-orientiert) ── */

/** Ein Workload (Produkt) aus dem Microsoft Business Process Catalog, z. B. „Business Central", „Field Service", „Power BI". */
export interface MbpcWorkload {
  id: string
  label: string
  family: string
  count: number
}

/** Prozess (Title 4) – unterste Ebene, mit zugeordneten Workloads. */
export interface MbpcStep {
  title: string
  workloads: string[]
}

/** Prozessbereich (Title 3). */
export interface MbpcArea {
  title: string
  steps: MbpcStep[]
}

/** End-to-End-Prozess (Title 2). */
export interface MbpcProcess {
  id: string
  title: string
  icon: string
  workloads: string[]
  areas: MbpcArea[]
}

/** Importierter Microsoft Business Process Catalog (workload-orientiert). */
export interface MbpcCatalog {
  processes: MbpcProcess[]
  workloads: MbpcWorkload[]
  families: string[]
  importedAt: string
  fileName: string
  processCount: number
  areaCount: number
  stepCount: number
}
