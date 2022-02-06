const { Class } = require('../../models');
const { User } = require('../../models');
const { Op } = require('sequelize');

module.exports = {
    typeClass: async (req, res) => {
        try {
            const type = req.params.type;
            if(type === 'online') {
                const onlineClass = await Class.findAll({ 
                    include: [{
                        model: User,
                        attributes: ['id', 'name'],
                    }],
                    where : { type : '0' }
                });
                
                return res.status(200).send({ onlineClass })
            } else if(type === 'offline') {
                const offlineClass = await Class.findAll({ 
                    include: [{
                        model: User,
                        attributes: ['id', 'name'],
                    }],
                    where : { type : '1' }
                });
                
                return res.status(200).send({ offlineClass })
            } else if (type === 'latest') {
                const latestClass = await Class.findAll({ 
                    include: [{
                        model: User,
                        attributes: ['id', 'name'],
                    }],
                    order: [[ 'createdAt', 'DESC' ]],
                    limit: 10
                });
                return res.status(200).send({ latestClass })
            } else if (type === 'free') {
                const freeClass = await Class.findAll({ 
                    include: [{
                        model: User,
                        attributes: ['id', 'name'],
                    }],
                    where: { price: 0 }
                });
                return res.status(200).send({ freeClass })
            }


        } catch (err) {
            throw err;
        }

        res.end();
    },
}