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
  image: null;

  @Output() prev = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private route: Router) {}

  // id type array
  Cards: any = ['Voters ID', 'Ghana card'];

  // build card form
  buildCardForm(): void {
    this.identityCard = this.formBuilder.group({
      card: ['', [Validators.required]],
      idNumber: ['', [Validators.required]],
      profilePicture: ['', [Validators.required]],
      cardImage: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.identityCard;
    this.buildCardForm();
  }

  // change card type
  changeCard(e: any) {
    this.cardName?.setValue(e.target.value, {});
  }

  // upload selfie image
  url =
    '../../../../../../../assets/images/blank-profile-picture-973460_1280.png';

  // change avatar image
  onSelectFile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
  }

  // upload id image
  onFileChanged(event: any) {
    this.image = event.target.files[0];
  }

  //  next form
  prevSection(): void {
    this.prev.emit();
  }

  onSubmit() {}
}
