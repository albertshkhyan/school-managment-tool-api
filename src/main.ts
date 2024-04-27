// src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(4000);

  // app.enableCors({
  //   origin: 'http://localhost:5173', // Client's origin
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  //   credentials: true,
  // });

  // setupPipes(app);

  console.log(`Nest application is running on: http://localhost:4000`);
}
bootstrap();
