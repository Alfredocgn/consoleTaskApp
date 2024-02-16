const { inquirerMenu, inquirerPause, readInput, listDeleteTask, confirmDelete, showChecklist } = require('./helpers/inquirerMenu');
const { saveData, readData } = require('./helpers/saveFile');

const Tasks = require('./models/tasks');


require('colors');

console.clear()


const main = async () =>{

  let opt = '';
  const tasks = new Tasks()

  const tasksDb = readData()

  if(tasksDb){
    tasks.getTasksFromArray(tasksDb)

  }

  do {
    opt = await inquirerMenu()
    switch (opt) {
      case '1':
        const desc = await readInput('Description: ')
        tasks.createTask(desc)
        
        break;
    
      case '2':
        tasks.fullList()

        break;
      case '3':
        tasks.listPendingCompletedTasks(true)

        break;
      case '4':
        tasks.listPendingCompletedTasks(false)

        break;
      case '5':
        const ids = await showChecklist(tasks.listArr)
        tasks.toggleCompleted(ids)

        break;
      case '6':
        const id =  await listDeleteTask(tasks.listArr)
        if(id !== '0'){

          const confirm = await confirmDelete('Are you sure you want to delete?')
          if (confirm) {
            tasks.deleteTask(id)
            console.log('Task deleted correctly')
        }
        }

        break;
    }


    saveData(tasks.listArr)



    await inquirerPause()


  } while(opt !== '0')


}

main()