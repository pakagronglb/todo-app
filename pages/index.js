// pages/index.js

import { useState } from 'react'

export default function Home() {

    const [todo, setTodo] = useState({ title: "", desc: "" })

    const addTodo = () => {
        let todos = localStorage.getItem("todos")
        if (todos) {
            let todosJson = JSON.parse(todos)
            if (todosJson.filter(
                value => {
                    return value.title == todo.title
                }
            ).length > 0) {
                alert("Todo with this title already exists")
            }
            else {
                todosJson.push(todo)
                localStorage
                    .setItem("todos", JSON.stringify(todosJson))
                alert("Todo has been added")
                setTodo({ title: "", desc: "" })
            }
        }
        else {
            localStorage.setItem("todos", JSON.stringify([todo]))
        }
    }

    const onChange = (e) => {

        setTodo(
            {
                ...todo,
                [e.target.name]: e.target.value
            }
        )
        console.log(todo)
    }
    return (
        <div className=" text-3xl">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 
                    mx-auto flex flex-wrap items-center">

                    <div className="rounded-lg p-8 flex flex-col 
                        md:ml-auto w-full mt-10 md:mt-0 bg-slate-100 ">
                        <h2 className="text-gray-900 text-lg 
                            font-medium title-font mb-5">
                            Add a Todo
                        </h2>
                        <div className="relative mb-4">
                            <label for="title"
                                className="leading-7 text-sm 
                                    text-gray-600">
                                Todo Title
                            </label>
                            <input onChange={onChange} value={todo.title}
                                type="text" id="title" name="title"
                                className="w-full bg-white rounded border border-gray-300
                                focus:border-green-800 focus:ring-2 
                                focus:ring-green-200 text-base outline-none
                                text-gray-700 py-1 px-3
                            leading-8 transition-colors duration-200 ease-in-out"
                                autoComplete='false' />
                        </div>
                        <div className="relative mb-4">
                            <label for="desc" className="leading-7 text-sm text-gray-600">
                                Todo Description</label>
                            <input onChange={onChange} value={todo.desc}
                                type="text" id="desc" name="desc"
                                className="w-full bg-white rounded border 
                                border-gray-300 focus:border-green-800
                            focus:ring-2 focus:ring-green-200 text-base 
                            outline-none text-gray-700 py-1 px-3
                            leading-8 transition-colors duration-200 ease-in-out" autoComplete='false' />
                        </div>
                        <button onClick={addTodo} className="text-white 
                        bg-green-800 border-0 py-2 px-8
                        focus:outline-none w-fit hover:bg-green-600
                        rounded text-lg">Add Todo</button>

                    </div>
                </div>
            </section>
        </div>
    )
}
