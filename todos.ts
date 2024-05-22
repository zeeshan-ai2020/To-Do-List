import inquirer from "inquirer";

let todos:string[] = [];


async function createTodo(todos:string[]) {
    do{
        let answer = await inquirer.prompt(
            {
                type: "list",
                message: "Select an option",
                name: "option",
                choices: ["Add", "Update", "View", "Delete"],
            }
        );

        if(answer.option === "Add"){
            let addMore = await inquirer.prompt(
                {
                    type: "input",
                    message: "Add task in the list",
                    name: "addmore",
                }
            );
            let {addmore}= addMore
            todos.push(addmore);
            todos.forEach((item,index)=>{
                console.log(index+1 + " "+ item);
                
            })
            
        }
        if(answer.option === "Update"){
            let updateMore = await inquirer.prompt(
                {
                    type: "list",
                    message: "Update Task in the List",
                    name: "Todos",
                    choices: todos.map((item) => (item))
                }
            );
            let addMore = await inquirer.prompt(
                {
                    type: "input",
                    message: "Add Items in the List",
                    name: "Todo",
                }

            );
            let newTask = todos.filter((val) => val !== updateMore.Todos);
            todos = [...newTask, addMore.Todo];
        }
        if(answer.option === "View"){
            console.log("****To Do List****");
            todos.forEach((item,index)=>{
                console.log(index+1 + " "+ item);
                
            })
            console.log("******************");

        }
        if(answer.optopn === "Delete"){
            let deleteTask = inquirer.prompt(
                {
                    type: "list",
                    message: "Delete Task from the List",
                    name: "deletetask",
                    choices: todos.map((item)=> (item))
                }
            );
        }
    }while(true)
}
createTodo(todos);


