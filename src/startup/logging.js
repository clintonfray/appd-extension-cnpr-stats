import pkg from "winston";
const { add, transports, format, createLogger } = pkg;
import "express-async-errors";
import "winston-daily-rotate-file";

export default createLogger({
  transports: [
    new transports.Console({
      colorize: true,
      prettyPrint: true,
      handleExceptions: true,
      format: format.combine(
        format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
        format.align(),
        format.printf(
          (info) => `${info.level}: ${[info.timestamp]}: ${info.message}`
        )
      ),
    }),
    new transports.DailyRotateFile({
      colorize: true,
      prettyPrint: true,
      filename: "./logs/application-%DATE%.log",
      handleExceptions: true,
      datePattern: "YYYY-MM-DD-HH",
      prepend: true,
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
      format: format.combine(
        format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
        format.align(),
        format.printf(
          (info) => `${info.level}: ${[info.timestamp]}: ${info.message}`
        )
      ),
    }),
  ],
});
