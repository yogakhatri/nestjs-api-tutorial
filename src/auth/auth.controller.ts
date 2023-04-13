import { Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  singUp(@Req() req: Request) {
    console.log(req);
    return this.authService.signup();
  }

  @Post('signin')
  singIn() {
    return this.authService.signin();
  }
}
