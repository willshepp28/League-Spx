
function getLeagues(Sequelize){
    return [
        // Santa Monica, Venice, Ect
        {
         name: "South Bay Youth Sports",
         email: "southbay@gmail.com",
         location: Sequelize.fn('ST_GeomFromText', 'POINT(-118.48882047444324 34.02549682312539)', 4326),
         price: 1000,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         name: "City of Santa Clarita Youth Sports",
         email: "santaclaritayouthsports@outlook.com",
         location: Sequelize.fn('ST_GeomFromText', 'POINT(-118.27081885927176 34.017494192295274)', 4326),
         price: 3000,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         name: "Kids In Sports",
         email: "kidsinsports@yahoo.com",
         location: Sequelize.fn('ST_GeomFromText', 'POINT(-118.23977338785828 34.026548741061106)', 4326),
         price: 2350,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         name: "Community Youth Sports & Art",
         email: "communityyouth@gmail.com",
         location: Sequelize.fn('ST_GeomFromText', 'POINT( -118.32491743058247 34.059548783401496)', 4326),
         price: 5575,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         name: "Challenger Sports",
         email: "challengesports@yahoo.com",
         location: Sequelize.fn('ST_GeomFromText', 'POINT(-118.40456830925989 33.898979821707485)', 4326),
         price: 1260,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         name: "Pacific Coast Youth",
         email: "pacificyouth@outlook.com",
         location: Sequelize.fn('ST_GeomFromText', 'POINT( -118.36199628789782 33.910377680083165)', 4326),
         price: 7800,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         name: "Pacific Coast Youth Football and Cheer",
         email: "pcyouthfootball@yahoo.com",
         location: Sequelize.fn('ST_GeomFromText', 'POINT(-118.31393110248902 33.9160760377838)', 4326),
         price: 1110,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         name: "Any 1 Hungry Basketball Academy",
         email: "hungry1basketball@yahoo.com",
         location: Sequelize.fn('ST_GeomFromText', 'POINT(-118.40731489128329 33.98670400734807)', 4326),
         price: 4506,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       // Commerce , CA about 20 miles from Santa Monica
       {
         name: "West Downey Little League",
         email: "westdowneylittleleague@outlook.com",
         location: Sequelize.fn('ST_GeomFromText', 'POINT(-118.15750233168534 33.94458114437438)', 4326),
         price: 3444,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         name: "Three & One Youth Soccer League",
         email: "threeoneyouth@gmail.com",
         location: Sequelize.fn('ST_GeomFromText', 'POINT(-118.13415638448677 33.963946226159734)', 4326),
         price: 800,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       // Inglewood, CA about 12 miles from Santa Monica
       {
         name: "Ladera Little League",
         email: "laderalittleleague@gmail.com",
         location: Sequelize.fn('ST_GeomFromText', 'POINT(-118.37908817218073 33.99525926727008)', 4326),
         price: 2200,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         name: "Big League Youth Baseball & Softball Academy",
         email: "bigleague@gmail.com",
         location: Sequelize.fn('ST_GeomFromText', 'POINT(-118.3566974286824 33.99335107975749)', 4326),
         price: 6900,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       // Compton, CA about 20 miles from Santa Monica
       {
         name: "MLB Youth Academy",
         email: "mlbyouthacademy@outlook.com",
         location: Sequelize.fn('ST_GeomFromText', 'POINT(-118.21292262188447 33.88001368196586)', 4326),
         price: 4532,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         name: "Compton YouthBuild",
         email: "comptonyouthbuild@gmail.com",
         location: Sequelize.fn('ST_GeomFromText', 'POINT(-118.22893701009338 33.90563089667635)', 4326),
         price: 9932,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       // Long Beach,CA about 30 mile from Santa Monica
       {
         name: "West Long Beach Little League",
         email: "westlongbeachlittleleague@gmail.com",
         location: Sequelize.fn('ST_GeomFromText', 'POINT(-118.20165503599486 33.817773780513214)', 4326),
         price: 3220,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         name: "South Bay Youth Soccer League",
         email: "southbayyouthsoccer@outlook.com",
         location: Sequelize.fn('ST_GeomFromText', 'POINT(-118.16811555955326 33.78242551186326)', 4326),
         price: 4444,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         name: "Freeman E. Fairfield / Westside Boys & Girls Clubs of Long Beach",
         email: "boysandgirlsclub@yahoo.com",
         location: Sequelize.fn('ST_GeomFromText', 'POINT(-118.19654231092754 33.79619267901416)', 4326),
         price: 2376,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       // San Bernadino, CA about 80 miles from Santa Monica
       {
         name: "San Bernadino Family YMCA",
         email: "sanbernadinoymcayouth@gmail.com",
         location: Sequelize.fn('ST_GeomFromText', 'POINT(-117.25740380470829 34.158907281838175)', 4326),
         price: 1000,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         name: "Inland Empire Soccer League",
         email: "inlandsoccer@outlook.com",
         location: Sequelize.fn('ST_GeomFromText', 'POINT(-117.17775292603083 34.14583795099742)', 4326),
         price: 1232,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         name: "Rialto Park Little League",
         email: "rialtolittleleague@yahoo.com",
         location: Sequelize.fn('ST_GeomFromText', 'POINT(-117.17775292603083 34.14583795099742)', 4326),
         price: 2100,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         name: "Del Rosa Little League",
         email: "delrosalittleleague@yahoo.com",
         location: Sequelize.fn('ST_GeomFromText', 'POINT(-117.25431142597046 34.149944800607315)', 4326),
         price: 1500,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         name: "Boys & Girls Club of San Bernardin",
         email: "boysandgirlsclubsanb@outlook.com",
         location: Sequelize.fn('ST_GeomFromText', 'POINT(-117.31202719953461 34.11639374454548)', 4326),
         price: 500,
         createdAt: new Date(),
         updatedAt: new Date()
       }
    ];
};

module.exports = getLeagues;