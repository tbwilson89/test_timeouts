document.getElementsByClassName('x-grid3-row').map((obj)=>{
  console.log(obj.class);
})

var arrStatus = [...document.getElementsByClassName('x-grid3-col-hpColHeading_status')]
var arrAssign = [...document.getElementsByClassName('x-grid3-col-hpColHeading_assignees')]

arrStatus.map((obj)=>{
  if(obj.innerText == 'Open'){
    obj.setAttribute('style', 'background: green;')
  }
})

arrAssign.map((obj)=>{
  if(obj.innerText == 'The Hub'){
    obj.setAttribute('style', 'background: green;')
  }
})
