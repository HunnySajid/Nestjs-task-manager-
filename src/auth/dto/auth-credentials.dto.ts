import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class AuthCredentialsDto {
    @IsNotEmpty()
    @IsEmail()
    @IsString()
    username: string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.+[a-z]).*$/,
        {message:'Password too weak'})
    password: string;
}