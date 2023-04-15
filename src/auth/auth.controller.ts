import { Body, Controller, ParseIntPipe, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  singUp(@Body() dto: AuthDto) {
    console.log(dto);
    return this.authService.signup();
  }

  @Post('signing')
  singIn(
    @Body('email') email: string,
    @Body('password') password: ParseIntPipe,
  ) {
    return this.authService.signin();
  }
}
