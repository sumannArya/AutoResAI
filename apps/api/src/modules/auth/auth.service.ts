import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async register(userData: { email: string; password: string; name: string }) {
    // Hash password
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    
    // Create user (would normally interact with UsersService)
    const user = {
      id: Date.now(),
      email: userData.email,
      name: userData.name,
      password: hashedPassword,
    };

    return {
      message: 'User registered successfully',
      user: { id: user.id, email: user.email, name: user.name },
    };
  }

  async validateUser(email: string, password: string): Promise<any> {
    // Validate user credentials (would normally use UsersService)
    // This is a placeholder implementation
    return { id: 1, email, name: 'User' };
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      user: { id: user.id, email: user.email, name: user.name },
    };
  }
}
