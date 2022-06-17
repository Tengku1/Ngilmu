const {
    sequelize,
    users
} = require('../../../models/index');
const { error_handler } = require('../../../utils/index');

module.exports = async (req, res) => {
    const {
        username,
        password,
        address
    } = req.body;

}