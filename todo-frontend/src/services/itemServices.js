export const addItemServer = async (task,date) => {
  const response = await fetch("http://localhost:3000/api/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }, 
    body: JSON.stringify({task,date}),
  });

  const data = await response.json();
  return mapServerItemToLocalItem(data);
}

export const getItemsServer = async () => {
  const response = await fetch("http://localhost:3000/api/todo");
  const data = await response.json();
  return data.map(mapServerItemToLocalItem);
} 

export const markItemCompleteServer = async (id) => {
  const response = await fetch(`http://localhost:3000/api/todo/${id}/completed`, {
    method: "PUT",
  });   
  const data = await response.json();
  console.log('Response from server:', data);
  return mapServerItemToLocalItem(data);
}

export const deleteItemServer = async (id) => {
  const response = await fetch(`http://localhost:3000/api/todo/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data._id;
}


const mapServerItemToLocalItem = (serverItem) => {
  return {
    name: serverItem.task,
    duedate: serverItem.date,
    id: serverItem._id,
    completed: serverItem.completed,
    createdAt: serverItem.createdAt,
    updatedAt: serverItem.updatedAt,
  }
}

