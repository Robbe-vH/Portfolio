import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { ContactService } from '../services.service';

@Component({
  selector: 'portfolio-ContactPagina',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactForm implements OnInit {
  FormData: FormGroup;
  constructor(private builder: FormBuilder, private contact: ContactService) { }
  ngOnInit() {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.email]),
      Comment: new FormControl('', [Validators.required])
    })
  }

  onSubmit(FormData: any) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
    .subscribe(response => {
    location.href = 'https://mailthis.to/confirm'
    console.log(response)
    }, error => {
    console.warn(error.responseText)
    console.log({ error })
    })
    }

}