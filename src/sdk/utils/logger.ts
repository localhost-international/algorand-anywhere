interface Logger {
  (message: string, ...data: any[]): void;
  error: (message: string, ...data: any[]) => void;
}

const createLogger = (isProduction: boolean): Logger => {
  const log: Logger = (message: string, ...data: any[]): void => {
    if (!isProduction) {
      const stackTrace = new Error().stack;
      const lineNumber = stackTrace
        ?.split("\n")[2]
        ?.match(/(?<=:)\d+(?=:)/)?.[0];
      console.log(`[${lineNumber}] ${message}`);
      if (data.length > 0) {
        console.log("Additional Data:", ...data);
      }
    }
  };
  log.error = (message: string, ...data: any[]): void => {
    if (!isProduction) {
      const stackTrace = new Error().stack;
      const lineNumber = stackTrace
        ?.split("\n")[2]
        ?.match(/(?<=:)\d+(?=:)/)?.[0];
      console.error(`[${lineNumber}] ${message}`);
      if (data.length > 0) {
        console.error("Additional Data:", ...data);
      }
    }
  };
  return log;
};

const isProduction = process.env.NODE_ENV === "production";
export const logger = createLogger(!isProduction);
