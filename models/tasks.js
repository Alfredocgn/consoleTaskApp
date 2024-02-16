const Task = require("./task")


class Tasks {

  _list = {}

  get listArr(){
    const list = []
    Object.keys(this._list).forEach(key => {
      const task = this._list[key]
      list.push(task)
    })
    return list
  }

  constructor(){
    this._list = {}
  }

  deleteTask (id = ''){
    if(this._list[id]){
      delete this._list[id]
    }
  }

  getTasksFromArray (tasks =[]){

    tasks.forEach((task) => {
      this._list[task.id] = task
    })


  }
  
  createTask(desc =""){
    const task = new Task(desc);
    this._list[task.id] = task

  }

  fullList(){

    this.listArr.forEach((task,i) => {
      const idx = `${i+1}.`.green
      const {desc,completedOn} = task
      const state = completedOn !== null ? 'Completed'.green : 'Pending'.red

      console.log(`${idx}  ${desc} :: ${state}`)

      
    })

  }
  listPendingCompletedTasks(completed = true) {
    let contador = 0
    if(completed === true){
      const completedTasks = this.listArr.filter((task) => task.completedOn !== null ) 
      
      completedTasks.forEach((t) => {
        contador +=1
        console.log(`${contador.toString().green + '.'.green} ${t.desc} :: ${t.completedOn.green}`)
      })


    }else {
      const pendingTasks = this.listArr.filter((task) => task.completedOn === null) 
      pendingTasks.forEach((t) => {
        contador +=1
        console.log(`${contador.toString().green + '.'.green} ${t.desc} :: ${'Pending'.red}`)

      })

    }
  
  }

  toggleCompleted (ids = []){
    ids.forEach(id => {
      const task = this._list[id]
      if(!task.completedOn){
        task.completedOn = new Date().toISOString()

      }
    })
    this.listArr.forEach(task => {
      if(!ids.includes(task.id)){
        this._list[task.id].completedOn = null
      }
    })
  }
}


module.exports = Tasks