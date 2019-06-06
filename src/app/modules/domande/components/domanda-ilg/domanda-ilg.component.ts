import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Domanda} from '../../../../core/models';

@Component({
  selector: 'app-domanda-ilg',
  templateUrl: './domanda-ilg.component.html',
  styleUrls: ['./domanda-ilg.component.scss']
})
export class DomandaIlgComponent implements OnInit {

  obj: object;

  md: FormGroup;

  displayTitoli = false;
  displayRiserve = false;
  displayInvalidita = false;

  aventeFigli = false;

  domanda: Domanda;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.md = this.formBuilder.group({
      fi: this.formBuilder.group({
        istitutoFrequentato: [''],
        tipoDiploma: [''],
        provinciaIstituto: [''],
        comuneIstituto: [''],
        viaIstituto: [''],
        annoDiploma: [''],
      }),
      fl: this.formBuilder.group({
        linguaSelezionata: [''],
      }),
      ft: this.formBuilder.group({
        numeroFigliSelezionati: [[]],
      }),
      tp: this.formBuilder.group({
        titoliSelezionati: [[]],
        numeroFigliSelezionati: [''],
      }),
      fr: this.formBuilder.group({
        riserveSelezionate: [[]],
      }),
      fc: this.formBuilder.group({
        percInvalidita: [''],
        dataCertificazione: [''],
        invaliditaEnte: [''],
        ausiliProva: [''],
        tempiAggiuntiviProva: [''],
        esenzioneProvaSelettiva: [''],
      }),
    });
  }


  ngOnInit() {

    this.route.params.subscribe(
      (route) => {
        this.obj = route;
        this.domanda = this.route.snapshot.data.domanda;

        this.md.get('fi').patchValue(
          {
            istitutoFrequentato: this.domanda.TitoloDiploma.TipoDiploma,
            tipoDiploma: this.domanda.TitoloDiploma.TipoDiploma,
            provinciaIstituto: this.domanda.TitoloDiploma.Provincia,
            comuneIstituto: this.domanda.TitoloDiploma.Comune,
            viaIstituto: this.domanda.TitoloDiploma.Indirizzo,
            annoDiploma: this.domanda.TitoloDiploma.AnnoConseguimento
          }
        );

        this.md.get('fl').patchValue(
          {
            linguaSelezionata: this.domanda.Lingua.Descrizione
          }
        );


        if (this.domanda.TitoliPreferenziali.length > 0) {
          this.md.get('tp').patchValue(
            {
              titoliSelezionati: this.domanda.TitoliPreferenziali,
            }
          );

          if (this.domanda.NumeroFigli !== '' && this.domanda.NumeroFigli !== null) {
            this.aventeFigli = true;
            this.md.get('tp').patchValue(
              {
                numeroFigliSelezionati: this.domanda.NumeroFigli,
              }
            );
          }

          this.displayTitoli = true;

        }

        if (this.domanda.Riserve.length > 0) {
          this.md.get('fr').patchValue(
            {
              riserveSelezionate: this.domanda.Riserve,
            }
          );

          this.displayRiserve = true;
        }


        if (this.domanda.Invalidita.enteInvalidita !== '' && this.domanda.Invalidita.enteInvalidita !== null) {
          this.displayInvalidita = true;
          this.md.get('fc').patchValue(
            {
              percInvalidita: this.domanda.Invalidita.prcInvalidita,
              dataCertificazione: this.domanda.Invalidita.dataInvalidita,
              invaliditaEnte: this.domanda.Invalidita.enteInvalidita,
              ausiliProva: this.domanda.Invalidita.ausProva,
              tempiAggiuntiviProva: this.domanda.Invalidita.tmpAggiuntivi,
              esenzioneProvaSelettiva: this.domanda.Invalidita.eszProva,
            }
          );
        }
      }
    );


  }


  get istitutoFrequentato() {
    return this.md.get('fi.istitutoFrequentato');
  }

  get tipoDiploma() {
    return this.md.get('fi.tipoDiploma');
  }

  get provinciaIstituto() {
    return this.md.get('fi.provinciaIstituto');
  }

  get provinceDropdown() {
    return this.md.get('fi.provinceDropdown');
  }

  get comuneIstituto() {
    return this.md.get('fi.comuneIstituto');
  }

  get comuniDropdown() {
    return this.md.get('fi.comuniDropdown');
  }

  get viaIstituto() {
    return this.md.get('fi.viaIstituto');
  }

  get annoDiploma() {
    return this.md.get('fi.annoDiploma');
  }


  get linguaSelezionata() {
    return this.md.get('fl.linguaSelezionata');
  }

  /* TITOLI */

  get titoliSelezionati() {
    return this.md.get('tp.titoliSelezionati');
  }

  get numeroFigliSelezionati() {
    return this.md.get('tp.numeroFigliSelezionati');
  }


  /* RISERVE */

  get riserveSelezionate() {
    return this.md.get('fr.riserveSelezionate');
  }

  /* CATEGORIE PROTETTE */


  get appartenenza() {
    return this.md.get('fc.appartenenza');
  }

  get percInvalidita() {
    return this.md.get('fc.percInvalidita');
  }

  get dataCertificazione() {
    return this.md.get('fc.dataCertificazione');
  }

  get invaliditaEnte() {
    return this.md.get('fc.invaliditaEnte');
  }

  get ausiliProva() {
    return this.md.get('fc.ausiliProva');
  }

  get tempiAggiuntiviProva() {
    return this.md.get('fc.tempiAggiuntiviProva');
  }

  get esenzioneProvaSelettiva() {
    return this.md.get('fc.esenzioneProvaSelettiva');
  }


}
