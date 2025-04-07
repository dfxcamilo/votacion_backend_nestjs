import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
     return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Patch(':cedula')
  update(@Param('cedula') cedula: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+cedula, updateUsuarioDto);
  }

  @Delete(':cedula')
  remove(@Param('cedula') cedula: string) {
     return this.usuarioService.remove(+cedula);
  }
}
