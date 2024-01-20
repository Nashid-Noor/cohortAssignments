/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor(){
      this.todoList=[];
    }

    add(todo) {
      this.todoList.push(todo);
    }

    remove(indexOfTodo)
    {
      this.todoList.splice(indexOfTodo,1);

    }

    update(index,updatedTodo)
    {
      console.group(this.todoList);
      for(let i=0;i<this.todoList.length;i++)
      {
        if(i==index)
        {
          this.todoList[i]=updatedTodo;
          console.group(this.todoList);
          return;
        }
      }
    }

    getAll(){
      return this.todoList;
    }

    get(indexOfTodo){
      if(indexOfTodo<this.todoList.length)
      {     
         return this.todoList[indexOfTodo];
      }
      return null;
    }

    clear()
    {
      return this.todoList.splice(0,this.todoList.length);
    }

}

module.exports = Todo;
