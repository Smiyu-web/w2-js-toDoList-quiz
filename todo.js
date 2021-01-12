let input = prompt("What would you like to do?");

// dummy
const todos = ['Collect Chichen Eggs', "Clean Litter Box"];

// strat with a while loop that checks for quit input

while (input.toLowerCase() != 'quit') {

  if (input == 'new') {
    const newInput = prompt("What would you like to add?")
    todos.push(newInput);
    console.log(newInput + " is added to the list!");
  } else if (input == 'list') {
    for (let todo of todos) {
      console.log(todo);
    }
  } else if (input == 'delete') {
    const deleteIndex = prompt("Enter a index you want to delete")
    todos.splice(deleteIndex, 1);
    console.log(`'${deleteIndex}' is deleted from the list!`);
  }
  input = prompt("What would you like to do?");
}

console.log("OK QUIT THE APP");