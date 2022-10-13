import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { Usuario } from 'src/app/models/registro';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup
  regexCorreo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  regexPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
  regexNumero = /^[0-9]+$/
  titulo_formulario = 'crea tu cuenta!'
  id: string | null;
  texto_boton = 'Registrar'

  constructor(private fb: FormBuilder, private servicioUsuario: UsuarioService, private idRoute:ActivatedRoute, private router: Router) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      tipodocumento: ['', Validators.required],
      fecha: ['', Validators.required],
      correo: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
      documento: ['', [Validators.required, Validators.pattern(this.regexNumero)]],
      contacto: ['', [Validators.required, Validators.pattern(this.regexNumero)]],
      clave: ['', [Validators.required, Validators.pattern(this.regexPass)]],
      vereficarClave: ['', Validators.required],
    })
    this.id = this.idRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.accionSolicitada()
  }



  dataUsuario(){
    const DATA_USUARIO: Usuario ={
      nombre: this.registroForm.get('nombre')?.value,
      apellido: this.registroForm.get('apellido')?.value,
      tipodocumento: this.registroForm.get('tipodocumento')?.value,
      fecha: this.registroForm.get('fecha')?.value,
      correo: this.registroForm.get('correo')?.value,
      documento: this.registroForm.get('documento')?.value,
      contacto: this.registroForm.get('contacto')?.value,
      clave: this.registroForm.get('clave')?.value
    }
    console.log(DATA_USUARIO)
        if(this.id == null){
          this.servicioUsuario.postUsuario(DATA_USUARIO).subscribe(() => {
            this.router.navigate(['/usuario-registrado'])
            Swal.fire({
              icon: 'success',
              title: 'Usuario Registrado',
            })
          }, (error) => {
            console.log(error)
          })
        }else{
          this.servicioUsuario.putUsuarios(this.id, DATA_USUARIO).subscribe(() => {
            this.router.navigate(['/usuario-registrado'])
            Swal.fire({
              icon: 'success',
              title: 'Usuario Actualizado',
            })
          }, (error) => {
            console.log(error)
          })
        }
      }

      accionSolicitada(){
        if(this.id != null){
          this.titulo_formulario = 'Actualizar usuario'
          this.texto_boton = 'Actualizar'
          this.servicioUsuario.getUsuarios(this.id).subscribe((data) => {
            console.log(data)
            this.registroForm.setValue({
              nombre: data.nombre,
              apellido: data.apellido,
              tipodocumento: data.tipodocumento,
              fecha: data.fecha,
              correo: data.correo,
              documento: data.documento,
              contacto: data.contacto,
              clave: data.clave ,
              vereficarClave: data.clave 
            })
          }, (error) => {
            console.log(error)
          })
        }
      }
    }
  


//console.log(this.registroForm.get('clave')?.value)
//    //console.log(this.registroForm.get('vereficarClave')?.value)
//    let varClave = this.registroForm.get('clave')?.value
//    let vereficar = this.registroForm.get('vereficarClave')?.value
//    if (varClave != vereficar) {
//      Swal.fire({
//        title: 'Error!',
//        text: 'sus contraseñas no coinciden',
//        icon: 'error',
//        confirmButtonText: 'Cool'
//      })
//    }else{
//      if (this.regexCorreo.test(this.registroForm.get('correo')?.value)) {
//        Swal.fire({
//          title: 'Error!',
//          text: 'sus contraseñas no coinciden',
//          icon: 'error',
//          confirmButtonText: 'Cool'
//        })
//      }else{ }}