const { LeftModel } = require("../utils/database");

const saveLeftnav = (data)=>{
  let{
    username, // 用户名
    password, // 密码
    type, // 用户类型: dashen/laoban
    header, // 头像名称
    post, // 职位
    info, // 个人或职位简介
    company, // 公司名称
    salary // 月薪
  } = data
  const saveLeft = new LeftModel({
    username, // 用户名
    password, // 密码
    type, // 用户类型: dashen/laoban
    header, // 头像名称
    post, // 职位
    info, // 个人或职位简介
    company, // 公司名称
    salary // 月薪
  })
  return saveLeft.save()
  .then((res)=>{
    return true
  })
  .catch((err)=>{
    return false
  })
}

const findleftnav = ()=>{
  return LeftModel.find()
  .then((result)=>{
    return result
  })
}

const findleftOne = (id)=>{
  return LeftModel.findById(id)
  .then((res)=>{
    return res
  })
  .catch((err)=>{
    return err
  })
}

module.exports = {
  saveLeftnav,
  findleftnav,
  findleftOne
}






