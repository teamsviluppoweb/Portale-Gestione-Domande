export interface ListaConcorsi {
  nomeConcorso: string;
  urlConcorso: string;
}

export interface ListaDomande {
    idDomanda: string;
    codiceFiscale: string;
    cognome: string;
    nome: string;
}

export interface Esiti {
  codiceFiscale: string;
  cognome: string;
  nome: string;
  titoloConcorso: string;
  righeEsiti?: RigheEsitiEntity[];
}
export interface RigheEsitiEntity {
  dataProva: string;
  provaTipo: ProvaTipoOrProvaEsito;
  sessione: number;
  provaEsito: ProvaTipoOrProvaEsito;
  punteggio?: null;
  linkAllegati?: null;
  assenzaMalattia?: AssenzaMalattia | null;
}
export interface ProvaTipoOrProvaEsito {
  id: number;
  descrizione: string;
}
export interface AssenzaMalattia {
  dataInizioMalattia: string;
  giorniCertificati: number;
  note: string;
  numeroProtocollo: string;
  dataProtocollo: string;
}

export interface RisultatiRicercaDomanda {
  domande?: (DomandeEntity)[] | null;
  numeroDomandateTotaleTrovate: number;
  numeroPaginaRestituito: number;
  numeroPagineTotale: number;
  pageSize: number;
}
export interface DomandeEntity {
  idDomanda: string;
  codiceFiscale: string;
  cognome: string;
  nome: string;
}
