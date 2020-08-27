import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit,OnModuleDestroy{

    async onModuleInit() {
        return this.$connect();
    }

    async onModuleDestroy() {
        return this.$disconnect();
    }
}
