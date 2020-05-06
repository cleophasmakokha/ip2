function output(){
  var form=document.forms['action'];
  var out=document.getElementById('out');
  var gender=form['gender'].value;
  var DD=parseInt(form['day'].value);
  var MM=form['month'].value;
  var Yr=form['year'].value;
  var CC=Yr.substring(0,2);
  var YY=Yr.substring(2,4);
  CC=parseInt(CC);
  YY=parseInt(YY);
  var months=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
  var mon=['january','february','march','april','may','june','july','august','september','october','november','december'];
  var days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
  var akangirls=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
  var akanboys=['Kwasi','Kwando','Kwabena','Kwaku','Yaw','Kofi','Kwame'];

  if(month.includes(MM)||mon.includes(MM)){
    var MM=mon.indexOf(MM)+1;
    var weekday=Math.floor(((CC/4) -2*CC-1) +((5*YY/4)) +((26*(MM+1)/10)) +(DD -3))%7
    weekday=Math.abs(weekday);
    }
}
