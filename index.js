function getMonth({y, m} = {}) {
  let moment = require('moment');

  // moment.locale('en'); // week start with monday
  moment.locale('zh-cn'); // week start with sunday
  
  let curY;
  let curM;
  
  if(typeof y === 'number' && typeof m === 'number') {
    curY = y;
    curM = m;
  }else {
    curY = new Date().getFullYear();
    curM = new Date().getMonth();
  }

  let ct = moment([curY, curM]);

  let walk = ct.clone().startOf('week');
  let end = ct.clone().endOf('month').endOf('week');

  let out = [];
  while(walk.isSameOrBefore(end, 'date')) {
    // console.log(walk);
    let tmp = walk.clone();
    out.push({
      moment: tmp,
      year: tmp.year(),
      month: tmp.month(),
      formatedMonth: tmp.month() + 1,
      date: tmp.date(),
      day: tmp.day(),
      available: walk.isSame(ct, 'month')
    });
    walk.add(1, 'day');
  }
  return out;
  // console.log(out);
}
// console.log(getMonth());
// console.log(getMonth({y: 2018, m: 3}));