import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

class Database {
    private static instance: mysql.Pool;

    public static getInstance(): mysql.Pool {
        if (!this.instance) {
            this.instance = mysql.createPool({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                waitForConnections: true,
                connectionLimit: 10,
                queueLimit: 0,
            });
        }
        return this.instance;
    }
}

export default Database;