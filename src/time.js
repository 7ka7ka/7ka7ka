/*
 *计算当前距离次日凌晨所剩时间戳
 */

//当前时间戳
var time = new Date();

//次日凌晨时间戳
var futureTime = new Date();
futureTime.setHours(0,0,0,0);
var difference  = futureTime.getTime()+(24*60*60*1000);

//当前距离次日凌晨所剩时间戳
var deltaT = (difference - time.getTime())/(24*60*60*1000);