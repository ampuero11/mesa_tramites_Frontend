export interface TramiteEstado {
  status: "received" | "in_process" | "attended" | "rejected";
  cantidad: number;
}

export interface TramiteEstadisticasDto {
  total_tramites: number;
  por_estado: TramiteEstado[];
}

export interface TramiteEstadoConLabel extends TramiteEstado {
  label: string;
}
