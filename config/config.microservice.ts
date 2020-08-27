import { Transport } from "@nestjs/microservices";

export const GATEWAY_PORT = 3000;
export const TENDER_PORT = 3001;
export const AUTH_PORT = 3002;

export const TENDER_NAME = 'TENDER';
export const AUTH_NAME = 'AUTH';

export const TENDER_TRANSPORT = Transport.TCP;
export const AUTH_TRANSPORT = Transport.TCP
