let conf;

switch(process.env.NODE_ENV) {
    case 'production':
        conf = {
            PORT: 80,
            DBUrl: 'mongodb://localhost:27017/',
            DBName: 'seedcodeDB'
        }
        break;
    default:
        conf = {
            PORT: 9800,
            DBUrl: 'mongodb://localhost:27017/',
            DBName: 'seedcodeDB'
        }
}

export const Config = conf;