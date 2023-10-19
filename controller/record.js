
const Player = require('../model/data');

//adding Player data
exports.postData = async (req, res, next) => {
    try {
        const name= req.body.name;
        const dob= req.body.dob;
        const photoUrl= req.body.photoUrl;
        const birthplace= req.body.birthplace;
        const career= req.body.career;
        const matchnum= req.body.matchnum;
        const score= req.body.score;
        const fifties= req.body.fifties;
        const centuries= req.body.centuries;
        const wicket= req.body.wicket;
        const average= req.body.average;
        let data = await Player.create({
            name: name,
            dob: dob,
            photoUrl: photoUrl,
            birthplace: birthplace,
            career: career,
            matchnum: matchnum,
            score: score,
            fifties: fifties,
            centuries: centuries,
            wicket: wicket,
            average: average
        });
        res.status(201).json({ datas: data });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ Error: err });
    }
}

exports.updatePlayerData = async(req,res,next) => {
    try{
    const id=req.params.id;
    const data= await Player.findByPk(id);

     data.name= req.body.name;
         data.dob= req.body.dob;
         data.photoUrl= req.body.photoUrl;
         data.birthplace= req.body.birthplace;
         data.career= req.body.career;
         data.matchnum= req.body.matchnum;
         data.score= req.body.score;
         data.fifties= req.body.fifties;
         data.centuries= req.body.centuries;
         data.wicket= req.body.wicket;
         data.average= req.body.average;

         const updateddata = await data.save();
         res.status(201).json({updateddata:updateddata})
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ Error: err });
        }
}

exports.getPlayerData = async(req,res,next) => {
    try{
        // console.log(req.body);
    const name = req.params.name;

    const datas= await Player.findAll({where:{name:name}});
    res.status(201).json({playerdata:datas[0]})
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ Error: err });
    }
}

