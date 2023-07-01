import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Apa Kabar Semuanya?';
  }

  getHello2(): string {
    return 'Apakah Anda Baik-baik Saja?';
  }

  getHello3(): string {
    return 'Sekarang sedang sibuk apa?';
  }
}
