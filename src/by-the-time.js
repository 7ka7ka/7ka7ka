//获取当前时间
var date = new Date();
var now = date.getTime();

//设置截止时间
var str="2019/5/6 11:00:00";
var endDate = new Date(str);
var end = endDate.getTime();

//时间差
var leftTime = end-now;

//根據時差判斷時效性
if (leftTime>0) {
   // 時間尚未達到指定時間
   //  TODO
}else {
   // 時間已達指定時間
   //  TODO
}