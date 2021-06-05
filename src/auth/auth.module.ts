import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from './user.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
@Module({
  imports:[
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: 'TopSecret123',
      signOptions:{
        expiresIn: 36000
      }
    }),
    TypeOrmModule.forFeature([UserRepository])
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [
    JwtStrategy,
    PassportModule
  ]
})
export class AuthModule {}
