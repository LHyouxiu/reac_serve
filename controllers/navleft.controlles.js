const navleftModel = require("../models/navleft.model");

const leftnav = async (req,res,next)=>{
  res.header('Content-Type', 'application/json; charset=utf8')
  let result = await navleftModel.saveLeftnav(req.body)
  if(result){
    res.render('position.view.ejs', {
      ret: JSON.stringify(true),
      data: JSON.stringify({msg: 'succ'})
    })
  }else{
    res.render('position.view.ejs', {
      ret: JSON.stringify(false),
      data: JSON.stringify({msg: 'fail'})
    })
  }
}

const findnavlist = async (req,res,next)=>{
  res.header('Content-Type', 'application/json; charset=utf8')
  const dataSS = await navleftModel.findleftnav()
  const dataOne = await navleftModel.findleftOne(req.query.id)
  res.render('position.view.ejs', {
    ret: JSON.stringify(true),
    data: JSON.stringify({
        mesg:'qwess',
        code:200,
        datalist:dataSS,
        dataone:dataOne
    })
  })
}

module.exports = {
  leftnav,
  findnavlist
}

