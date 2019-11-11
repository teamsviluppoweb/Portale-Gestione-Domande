export interface Domanda {
  DomandaConcorso: DomandaConcorso;
  Anagrafica: Anagrafica;
  TitoloDiploma: TitoloDiploma;
  Lingua: Lingua;
  Riserve?: (null)[] | null;
  TitoliPreferenziali?: (null)[] | null;
  NumeroFigli: string;
  Invalidita: Invalidita;
  prove?: (ProveEntity)[] | null;
}
export interface DomandaConcorso {
  IdDomanda: string;
  IdConcorso: string;
  Versione: string;
  Stato: number;
  IstanzaJSON: string;
  DataInvio: string;
  DataModifica: string;
}
export interface Anagrafica {
  CodiceFiscale: string;
  Cognome: string;
  Nome: string;
  ProvinciaNascita: string;
  ComuneNascita: string;
  DataNascita: string;
  Sesso: string;
  Residenza: string;
  Cellulare: string;
  Email: string;
  DomicilioDigitale: string;
}
export interface TitoloDiploma {
  TipoDiploma: string;
  Istituto: string;
  AnnoConseguimento: string;
  Provincia: string;
  Comune: string;
  Indirizzo: string;
}
export interface Lingua {
  Id: string;
  Descrizione: string;
}
export interface Invalidita {
  prcInvalidita: string;
  enteInvalidita: string;
  dataInvalidita: string;
  eszProva: string;
  ausProva: string;
  tmpAggiuntivi: string;
}
export interface ProveEntity {
  dataProva: string;
  nomeProva: string;
  sessione: string;
  esito: string;
  punteggio: number;
  allegati: string;
  dataInizio: string;
  durata: string;
  dataFine: string;
  nuovaData: string;
  protocolli?: (ProtocolliEntity)| null;
}
export interface ProtocolliEntity {
  id: string;
  nota: string;
  data: string;
}
