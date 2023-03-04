
const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'applicant',
    host: 'ec2-54-169-182-174.ap-southeast-1.compute.amazonaws.com',
    database: 'FSD_2023_eramis',
    password: 'OxzdeuEXBM85=+xQnCV7U',
    port: 5432,
})

module.exports = {
    pool
}
