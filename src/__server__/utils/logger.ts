import winston, { format, Logger, transports } from 'winston';
import 'winston-daily-rotate-file';

const { combine, timestamp, printf, colorize, align } = format;

// Define the type for the info object in the formatter
interface LogInfo {
    timestamp: string;
    level: string;
    message: string;
}

// Configure the daily rotate file transport
const fileRotateTransport = new transports.DailyRotateFile({
    filename: 'logs/EBCOG-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    maxFiles: '14d',
});

// Create the logger instance
export const logger: Logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: combine(
        colorize({ all: true }),
        timestamp({
            format: 'YYYY-MM-DD hh:mm:ss.SSS A',
        }),
        align(),
        printf((info: LogInfo) => `[${info.timestamp}] ${info.level}: ${info.message}`)
    ),
    transports: [new transports.Console(), fileRotateTransport],
});
