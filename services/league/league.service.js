const model = require("../../db/models");
const Sequelize = require("sequelize")




const getLeaguesByRadius = async (request) => {
    return await model.League.findAll({ 
        where: Sequelize.where(
            Sequelize.fn('ST_DWithin',
              Sequelize.col("location"),
              Sequelize.fn('ST_SetSRID',
                Sequelize.fn('ST_MakePoint',
                  request.body.longitude, request.body.latitude),
                4326),
              +request.body.radius * 0.016),
            true),
        attributes: ["id", "name", "price", "location"],
        order: [["price", "ASC"]],
        raw: true
   });
 };



 const getLeaguesByRadiusRaw = async(request) => {
    return await model.sequelize.query(
        `SELECT  name, location, price   
        FROM "Leagues" 
        WHERE ST_DWithin(location, ST_MakePoint(${request.body.longitude},${request.body.latitude})::geography, ${request.body.radius * 1609.344})
        AND price BETWEEN 0 AND ${request.body.budget}
        ORDER BY price ASC`, {
            type: model.sequelize.QueryTypes.SELECT
        }
    )
 };



 const findLeagueByName = async(name) => {
    return await model.League.findOne({
        where: {
            name: name
        }
    });
 };



 module.exports = {
     getLeaguesByRadius,
     findLeagueByName,
     getLeaguesByRadiusRaw
 }