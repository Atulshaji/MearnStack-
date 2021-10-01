var point_table=[
    {t_name:"csk",pld:10,won:8,loss:2,pts:16},
    {t_name:"dc",pld:11,won:8,loss:3,pts:16},
    {t_name:"rcb",pld:11,won:7,loss:4,pts:14},
    {t_name:"kkr",pld:11,won:5,loss:6,pts:10},
    {t_name:"mi",pld:11,won:5,loss:6,pts:10},
    {t_name:"pkb",pld:11,won:4,loss:7,pts:8},
    {t_name:"rr",pld:11,won:4,loss:7,pts:8},
    {t_name:"srh",pld:10,won:2,loss:8,pts:4}
]
// num of team
// console.log(point_table.length);

//team names
// var num = point_table.map(team=>team.t_name)
// console.log(num);


//print team details pts>10
// var details = point_table.filter(team=>team.pts>10)
// console.log(details);

//is kkr playing
// var is_kkr = point_table.some(team=>team.t_name=="kkr")
// console.log(is_kkr);

//sort wrt loss des
// point_table.sort((team1,team2)=>team2.loss-team1.loss)
// console.log(point_table);


//print team details of max team
// var max = point_table.reduce((team1,team2)=>team1.pts>team2.pts?team1:team2)
// console.log(max);


