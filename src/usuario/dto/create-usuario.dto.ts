import { IsEmail, IsNotEmpty, isNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUsuarioDto {
  
    @IsNumber()
    cedula : number

    @IsNotEmpty()
    @IsString()
    nombre : string  

    @IsEmail()
    email: string;

    @IsNumber()
    edad: number
  
    

}
