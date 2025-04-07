import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
 
       @IsNotEmpty()
       @IsString()
       nombre : string  
   
       @IsEmail()
       email: string;
   
       @IsNumber()
       edad: number
     
       
}
