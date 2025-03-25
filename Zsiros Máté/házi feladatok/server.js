console.log("fut a szerver.");

const express = require('express')
const dbHandler = require('./dbHandler')
require('dotenv').config()
const jwt = require('jsonwebtoken');
const cors = require('cors')

const server = express()
server.use(express.json())
server.use(cors())

const TITOK = process.env.SECRET
const PORT = process.env.PORT

dbHandler.gyumolcs.sync({alter:true})
dbHandler.gyujto.sync({alter:true})

function auth(){
    return (req,res,next) =>{
        const aUTHh = req.headers.authorization
        if(typeof(aUTHh) == 'undefined'){
            res.status(401)
            res.json({'message':'Nem létező token'})
            res.end()
            return
        }
        if(!aUTHh.startsWith('Bearer')){
            res.status(401)
            res.json({'message':'Hibás token'})
            res.end()
            return
        }
        const encodedToken = aUTHh.split(' ')[1]
        try{
            const decodedToken = jwt.verify(encodedToken,TITOK)
            req.userName = decodedToken.nev
            req.userId = decodedToken.id

            next()
        }
        catch(error){
            res.json({'message':error})
            res.end()
        }
    }
}

server.get('/fruits', async (req, res) => {

    try {
        const all = await dbHandler.gyumolcs.findAll(
            {
                attributes: ["nev", "id"],
                distinct: true
            }
        )
        res.json(all)
    } catch (error) {
        console.log(error)
        
        res.json({'message': error})
    }
    res.end()
})

server.post('/register', async(req,res) => {
    let oneUser
    try {
        oneUser = await dbHandler.gyujto.findOne({
            where:{
                nev: req.body.registerName
            }
        })
    } catch (error) {
        res.json({'message': error})
        res.end()
        return
    }

    if(oneUser){
        res.status(403)
        res.json({'message': 'Ilyen felhasználó már van.'})
        res.end()
        return
    }
    

    try {
        await dbHandler.gyujto.create({
            nev: req.body.registerName,
            jelszo: req.body.registerPassword
        })
    } catch (error) {
        res.json({'message': error})
        res.end()
        return
    }

    res.status(201)
    res.json({'message':'Sikeres regisztráció'})
    res.end()
})

server.post('/login', async (req,res) =>{
    let oneUser
    try {
        oneUser = await dbHandler.gyujto.findOne({
            where:{
                nev: req.body.loginName,
                jelszo: req.body.loginPassword
            }
        })
    } catch (error) {
        res.json({'message': error})
        res.end()
        return
    }
    if(oneUser){
        try {
            const token = jwt.sign({'nev': oneUser.nev, id:oneUser.id},TITOK,{expiresIn: '1h'})
            res.json({'message': 'Sikeres belépés, shalom!', 'token': token})
            res.end()
            return
        } catch (error) {
            res.json({'message': error})
            res.end()
            return
        }
    }
    res.status(409)
    res.json({'message':'Sikertelen bejelentkezés'})
    res.end()
})

server.get('/personalFruits', auth(), async (req,res) =>{
    try {
        const all = await dbHandler.gyumolcs.findAll({
            where:{
                uid: req.userId
            }
        })
        res.json(all)
    } catch (error) {
        res.json({'message': error})
    }
    res.end()
})

server.delete('/deleteFruit/:id', async (req,res) =>{
    let oneFruit
    try {
        oneFruit = await dbHandler.gyumolcs.findOne({
            where:{
                id: req.params.id
            }
        })
    } catch (error) {
        res.json({'message': error})
        res.end()
        return
        
    }
    if(oneFruit){
        try {
            await dbHandler.gyumolcs.destroy({
                where:{
                    id: req.params.id
                }
            })
        } catch (error) {
            res.json({'message': error})
            res.end()
        }
        res.json({'message': 'Sikeres törlés'})
        res.end()
        return
    }
    res.status(405)
    res.json({'message':'Nem létezik a krisz'})
    res.end()
})

server.post('/addFruit', auth(),async (req, res) =>{
    try {
        await dbHandler.gyumolcs.create({
            nev: req.body.gyumolcsNev,
            uid: req.userId,
            ar: req.body.gyumolcsAr,
            suly: req.body.gyumolcsSuly,
        })
        res.json({'message':'Sikeres létrehozás'})
        res.end()
    } catch (error) {
        res.json({'message': error})
        res.end()
    }
})

server.put('/addFruit', auth(),async (req, res) =>{
    try {
        await dbHandler.gyumolcs.update({
        
            ar: req.body.gyumolcsAr,
            suly: req.body.gyumolcsSuly,
        },{
            where:{
                uid: req.userId,
                nev: req.body.gyumolcsNev
        }}
        )
        res.json({'message':'Sikeres modosítás'})
    } catch (error) {
        res.json({'message': error})
    }
    res.end()
})

server.listen(PORT, () => {
    console.log(`A szerver fut a ${PORT}-as porton.`)
})