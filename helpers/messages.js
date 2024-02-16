require('colors')

const showMenu = () => {

  return new Promise(resolve => {
    console.clear()
    console.log('============================'.green)
    console.log('      Select an option      '.green)
    console.log('============================\n'.green)
  
    console.log(`${"1.".green} Create Task`)
    console.log(`${"2.".green} Add Task`)
    console.log(`${"3.".green} Show Completed Tasks`)
    console.log(`${"4.".green} Show Pending Tasks`)
    console.log(`${"5.".green} Complete Tasks`)
    console.log(`${"6.".green} Delete Task`)
    console.log(`${"0.".green} Exit\n`)
  
    const readline = require('readline').createInterface({
      input:process.stdin,
      output:process.stdout
    })
  
    readline.question('Select an option: ',(opt) => {
      readline.close()
      resolve(opt)
    })

  })

}

const pause = () => {
  return new Promise(resolve => {
    const readline = require('readline').createInterface({
      input : process.stdin,
      output: process.stdout
    })
  
    readline.question(`\nPress ${'ENTER'.green} to continue\n`,() => {
      
      readline.close()
      resolve()
    })
  

  })

}

module.exports = {
  showMenu,pause
}