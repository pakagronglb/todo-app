// pages/edit/[title].js

import React from 'react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Edit = () => {
    const router = useRouter()
    const { title } = router.query

    const [todo, setTodo] = useState({ title: "", desc: "" })


    const updateTodo = () => {
        let todos = localStorage.getItem("todos")
        if (todos) {
            let todosJson = JSON.parse(todos)
            if (todosJson.filter(value => { 
                    return value.title == title }).length > 0) {
                let index = todosJson.findIndex(value => { 
                            return value.title == title })
                todosJson[index].title = todo.title
                todosJson[index].desc = todo.desc
                localStorage.setItem("todos", JSON.stringify(todosJson))
                alert("Todo has been updated")
            }
            else {
                alert("Todo does not exist")
            }
        }
        else {
            localStorage.setItem("todos", JSON.stringify([todo]))
        }
    }


    useEffect(() => {
        let todos = localStorage.getItem("todos")
        if (todos) {
            let todosJson = JSON.parse(todos)
            let ftodo = todosJson.filter(e => title == e.title)
            console.log(ftodo)
            if (ftodo.length > 0) {

                setTodo(ftodo[0])
            }
        }


    }, [router.isReady])
    const onChange = (e) => {

        setTodo({ ...todo, [e.target.name]: e.target.value })
        console.log(todo)
    }
    return (
        <div className="my-2 text-3xl">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 
                                mx-auto flex flex-wrap 
                                items-center">
                    <div className="bg-gray-100 rounded-lg 
                                    p-8 flex flex-col 
                                    md:ml-auto w-full 
                                    mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg 
                                    font-medium title-font mb-5">
                            Update a Todo
                        </h2>
                        <div className="relative mb-4">
                            <label for="title"
                                className="leading-7 text-sm 
                                                text-gray-600">
                                Todo Title</label>
                            <input onChange={onChange} 
                                value={todo.title} 
                                type="text"
                                id="title"
                                name="title"
                                className="w-full bg-white rounded 
                                                border border-gray-300 
                                            focus:border-green-500
                                            focus:ring-2 
                                            focus:ring-indigo-200 
                                            text-base outline-none 
                                            text-gray-700 py-1 px-3
                                            leading-8 transition-colors 
                                            duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="desc"
                                className="leading-7 text-sm 
                                                text-gray-600">
                                Todo Text
                            </label>
                            <input onChange={onChange} 
                                value={todo.desc} 
                                type="text"
                                id="desc"
                                name="desc"
                                className="w-full bg-white 
                                                rounded border border-gray-300 
                                            focus:border-green-500
                                            focus:ring-2 
                                            focus:ring-indigo-200 
                                            text-base outline-none 
                                            text-gray-700 py-1 px-3
                                            leading-8 transition-colors 
                                            duration-200 ease-in-out" />
                        </div>
                        <button onClick={updateTodo} 
                                className="text-white bg-green-500 
                                        border-0 py-2 px-8
                                        focus:outline-none w-fit 
                                        hover:bg-green-600 rounded 
                                        text-lg">Update Todo</button>
                        <p className="text-xs text-gray-500 mt-3">
                            The best todo list app out there!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Edit
