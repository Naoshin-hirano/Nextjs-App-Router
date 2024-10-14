import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import React from "react";

export default function New() {
    const createTodo = async (formData: FormData) => {
        "use server";
        console.log("フォームデータ", formData);
        const title = formData.get("title");
        await fetch("http://localhost:3001/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title }),
        });
        revalidatePath("/");
        redirect("/");
    };
    return (
        <div>
            <h1>新規作成</h1>
            <form action={createTodo}>
                <input type="text" name="title" />
                <button type="submit">作成</button>
            </form>
        </div>
    );
}
