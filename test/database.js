const assert = require('assert');
const databaseConfiguration = require('../database/configuration');
const mysql = require('mysql');

describe('Database', () => {
    describe('#Configuration', () => {
        it('should allow connection to the database', () => {
            const connection = mysql.createConnection(databaseConfiguration);
            connection.connect((err) => {
                assert.equal(err, null);
            });
            connection.query('SELECT 1 + 1 AS solution', (err, result, fields) => {
                assert.equal(result[0].solution, 2);
            });
            connection.end();
        });
    });
});
