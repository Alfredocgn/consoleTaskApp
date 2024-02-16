const fs = require('fs')


const archive = './db/data.json'

const saveData = (data) =>{


  fs.writeFileSync(archive,JSON.stringify(data))

}

const readData = () => {

  if(!fs.existsSync(archive)){
    return null

  }

  const info = fs.readFileSync(archive,{encoding:'utf-8'})
  const data = JSON.parse(info)
  return data

}

module.exports ={saveData,readData}