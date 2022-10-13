import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  regexCorreo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  regexPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/

  constructor(private fb: FormBuilder) { 
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
      clave: ['', [Validators.required, Validators.pattern(this.regexPass)]],
    })
  }

  ngOnInit(): void {
  }

  loginUsuario(){
    console.log(this.loginForm.get('clave')?.value)
  }

}
