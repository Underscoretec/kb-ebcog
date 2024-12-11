/* eslint-disable @typescript-eslint/no-require-imports */
const winston = require('winston');
require('winston-daily-rotate-file');
const { combine, timestamp, printf, colorize, align } = winston.format;

const fileRotateTransport = new winston.transports.DailyRotateFile({
    filename: 'logs/EBCOG-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    maxFiles: '14d',
});

export const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: combine(
        colorize({ all: true }),
        timestamp({
            format: 'YYYY-MM-DD hh:mm:ss.SSS A',
        }),
        align(),
        printf((info: any) => `[${info.timestamp}] ${info.level}: ${info.message}`)
    ),
    transports: [new winston.transports.Console(), fileRotateTransport],
});