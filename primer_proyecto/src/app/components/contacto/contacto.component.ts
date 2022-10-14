import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
    contactoForm: FormGroup;
    regexCorreo = /\S+@\S+\.\S+/

    constructor(private fb: FormBuilder) { 
        this.contactoForm = this.fb.group({
            correo: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
            celular: ['', Validators.required],
            asunto: ['', Validators.required],
            mensaje: ['', Validators.required],
        })
    }

    ngOnInit(): void {
    }

    contacto() {
        console.log("Validación exitosa")
    }

}
