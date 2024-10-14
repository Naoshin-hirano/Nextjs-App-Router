interface Todo {
    id: string;
    title: string;
}

export default async function Home() {
    const res = await fetch("http://localhost:3001/todos");
    const todos = await res.json();
    console.log("Todos", todos);
    return (
        <div>
            <h1>Todoリスト</h1>
            <ul>
                {todos.map((todo: Todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}
