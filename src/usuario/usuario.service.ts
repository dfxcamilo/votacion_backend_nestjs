import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  personas = []
  create(createUsuarioDto: CreateUsuarioDto) {
    this.personas.push(createUsuarioDto)
    return 'Usuario creado con exito....';
  }

  findAll() {
    return this.personas;
  }

  findOne(id: number) {
    return this.personas.find(item => item.cedula == id);
  }

  update(cedula: number, updateUsuarioDto: UpdateUsuarioDto) {
    let pos =  this.personas.findIndex((e)=>{
      return  e.cedula == cedula
  })
  if (pos != -1)
  {
    this.personas[pos].nombre = updateUsuarioDto.nombre
    this.personas[pos].email = updateUsuarioDto.email
    this.personas[pos].edad = updateUsuarioDto.edad
    return this.personas[pos]
  }
  else
   return null
  

  }

  remove(cedula: number) {
   let pos =  this.personas.findIndex((e)=>{
         return  e.cedula == cedula
     })
     if (pos != -1){
       let pers = this.personas[pos]
       this.personas.splice(pos,1)
       return pers

     }
     else
       return null
      
  }
}
