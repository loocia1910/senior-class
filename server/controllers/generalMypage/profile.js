const AWS = require('aws-sdk');
const fs = require('fs');
const formidable = require('formidable');
const { User } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');
require('dotenv').config();

module.exports = {
    profile: async (req, res) => {
        try {
            const form = new formidable.IncomingForm();
            form.maxFileSize = 50*1024*1024;// 50MB
    
            form.parse(req, function(err, fields, files) {
                const { login_id } = fields;
                AWS.config.update({ region : 'ap-northeast-2' });
                // console.log('files-----', files)
                
                const s3 = new AWS.S3();
                const params = {
                    Bucket: 'senior-class/userProfile',
                    Key: login_id + files.profile.originalFilename,
                    ACL: 'public-read',
                    Body: fs.createReadStream(files.profile.filepath) // 임시 디렉토리에 저장된 파일을 보낸다. 
                }

                s3.upload(params, async (err, data) => {
                    if(err) {
                        return;
                    }
                    else {
                        const db_user = await User.findOne({ where: { login_id } });
                        await db_user.update({ profile_url: data.Location });
                        res.status(200).send({ profile_url: data.Location });
                    }
    
                })
            })

        } catch (err) {
            throw err;
        }

    },
}