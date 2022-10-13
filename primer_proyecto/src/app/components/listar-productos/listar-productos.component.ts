import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/registro';
import { UsuarioService } from 'src/app/services/usuario.service';
import  Swal  from "sweetalert2";

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  constructor(private servicioUsuario: UsuarioService) { }


  listaUsuario: Usuario [] = [];

  ngOnInit(): void {
    this.obtenerUsuario()
  }

  obtenerUsuario(){
    this.servicioUsuario.getUsuario().subscribe((data) => {
    console.log(data)
    this.listaUsuario = data
    }, (error) => {
        console.log(error)
    }
    )
  }

  eliminarUsuario(id: any){
    Swal.fire({
      title: 'Está seguro de eliminar este dato?',
      text: "Este proceso no sera reversible..!",
      icon: 'warning',
      iconColor: '#ff8c00',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicioUsuario.deleteUsuario(id).subscribe((data) => {
          this.obtenerUsuario()
          Swal.fire({
            title: 'Dato eliminado correctamete',
            icon: 'success',
            iconColor: '#0ec31a'
        })
          }, (error) => {
              console.log(error)
          }
          )
        
      }
    })
  }

}