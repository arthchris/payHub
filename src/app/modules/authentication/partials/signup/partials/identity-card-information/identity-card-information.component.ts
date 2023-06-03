import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-identity-card-information',
  templateUrl: './identity-card-information.component.html',
  styleUrls: ['./identity-card-information.component.scss'],
})
export class IdentityCardInformationComponent implements OnInit {
  identityCard!: FormGroup;
  submitted: boolean = false;
  show: boolean = false;
  user: any = {};
  userSubmitted: boolean = false;
  isSubmitted: boolean = false;
  cardName: any;
  section = 3;
  @Output() prev = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private route: Router // private rootFormGroup: FormGroupDirective
  ) {}

  Cards: any = ['Voters ID', 'Ghana card'];

  cardForm(): void {
    this.identityCard = this.formBuilder.group({
      card: ['', [Validators.required]],
      idNumber: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.identityCard;
    this.cardForm();
  }

  // avatar image
  url = '';

  changeCard(e: any) {
    this.cardName?.setValue(e.target.value, {});
  }

  prevSection(): void {
    this.prev.emit();
  }

  onSubmit() {}
}
