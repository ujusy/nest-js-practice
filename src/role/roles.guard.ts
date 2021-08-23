import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AllowedRole } from '../role/roles.decorator';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly jwtService: JwtService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<AllowedRole>(
      'roles',
      context.getHandler(),
    );

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const raw = request.headers.authorization;

    const split = raw.split(' ');
    if (split[0] !== 'Bearer') return false;

    const token = this.jwtService.verify(split[1]);

    if (requiredRoles.includes('Any')) return true;
    return requiredRoles.includes(token.role);
  }
}
