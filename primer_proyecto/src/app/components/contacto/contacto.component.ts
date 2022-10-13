import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contacto } from 'src/app/models/contacto';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {


  contactoForm: FormGroup
  regexCorreo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  regexNumero = /^[0-9]/

  constructor(private fb: FormBuilder) {
    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
    })
  }


  ngOnInit(): void {
  }

  contactoUsuario(){
    if (this.regexCorreo.test(this.contactoForm.get('correo')?.value)) {
      
    }else{
      const DATA_USUARIO: Contacto ={
        nombre: this.contactoForm.get('nombre')?.value,
        apellido: this.contactoForm.get('apllido')?.value,
        correo: this.contactoForm.get('correo')?.value,
      }
    }
}
}