import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('http');

  use(req: Request, res: Response, next: NextFunction) {
    const { ip, originalUrl, url } = req;
    const userAgent = req.get('user-agent');

    res.on('finish', () => {
      this.logger.log(`${ip} ${originalUrl} ${userAgent}`);
    });
    next();
  }
}
