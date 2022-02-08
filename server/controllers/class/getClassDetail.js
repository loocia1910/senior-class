const { Class } = require('../../models');
const { User } = require('../../models');

module.exports = {
    classDetail: async (req, res) => {
        try {
            const { classId } = req.params;
            const classDetail = await Class.findOne({
                include: [{
                    model: User,
                    attributes: ['id', 'name']
                }],
                where: { id: classId }
            });
            
            res.status(200).send({ classDetail });
        } catch (err) {
            throw err;
        }
        
    },
}