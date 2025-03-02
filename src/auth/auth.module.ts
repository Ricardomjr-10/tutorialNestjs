import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      global: true,
      imports: [],
      useFactory: async (confingService: ConfigService) => ({
        secret: confingService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: +confingService.get<number>('JWT_EXPIRATION_TIME'), // O + É PRA CONVERTER PRA NUMBER
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
