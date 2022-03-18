import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'Formulario-reactivo';

  public form = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['',
      [Validators.required, Validators.email]],
      password: ['',
       Validators.required
      //  , Validators.minLength(minLength:6) // Con esto declaramos que la contraseña como minimo debe de teber 6 caracteres
    ],
    });
  }

  send(): any {
    console.log(this.form.value);
  }
}
