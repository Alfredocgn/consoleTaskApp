
const inquirer = require('inquirer');
// import inquirer from 'inquirer';
require('colors');


const questions = [{
  type: 'list',
  name:'option',
  message: 'What do you want to do?',
  choices: [
    {
    value:'1',
    name: `${'1.'.green} Create Task`
  },
    {
    value:'2',
    name: `${'2.'.green} Task List`
  },
    {
    value:'3',
    name: `${'3.'.green} Completed Tasks`
  },
    {
    value:'4',
    name: `${'4.'.green} Pending Tasks`
  },
    {
    value:'5',
    name: `${'5.'.green} Complete Task`
  },
    {
    value:'6',
    name: `${'6.'.green} Delete Task`
  },
    {
    value:'0',
    name: `${'0.'.green} Exit`
  },
]
}]


const inquirerMenu = async () => {
  console.clear()
  console.log('============================'.green)
  console.log('      Select an option      '.white)
  console.log('============================\n'.green)

  const {option} = await inquirer.prompt(questions)
  return option

}



const inquirerPause = async () => {

  const question = [{
    type:'input',
    name: 'enter',
    message: `Press ${'enter'.green} to continue...`
  }]
  console.log('\n')
  await inquirer.prompt(question)

}

const readInput = async(message) =>{

  const question = [{
    type:'input',
    name:'desc',
    message,
    validate(value){
      if(value.length === 0){
        return 'Input cant be empty'
      }
      return true
    }
  }]

  const {desc} = await inquirer.prompt(question)
  return desc

}

const listDeleteTask = async(tasks =[] )=>{

  const choices = tasks.map((task,id) => {
    const idx = `${id+1}.`.green
    return{
      value: task.id,
      name: `${idx} ${task.desc}`
    }
  })
  choices.unshift({
    value:'0',
    name:'0.'.green + 'Return'
  })
  const questions = [
    {
      type:'list',
      name:'id',
      message:'Delete',
      choices:choices,
    }]
  const {id} = await inquirer.prompt(questions)
  return id

}

const confirmDelete = async (message) =>{
  const question = [
    {
      type:'confirm',
      name:'ok',
      message
    }
  ]
  const {ok} = await inquirer.prompt(question)
  return ok
}

const showChecklist = async(tasks =[] )=>{

  const choices = tasks.map((task,id) => {
    const idx = `${id+1}.`.green
    return{
      value: task.id,
      name: `${idx} ${task.desc}`,
      checked:(task.completedOn) ? true : false
    }
  })
  const question = [
    {
      type:'checkbox',
      name:'ids',
      message:'Select',
      choices:choices,
    }]
  const {ids} = await inquirer.prompt(question)
  return ids

}

module.exports = {inquirerMenu,inquirerPause,readInput,listDeleteTask,confirmDelete,showChecklist}