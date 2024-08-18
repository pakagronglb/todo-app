# todo-app
This is a simple demo/showcase built and learnt from geeksforgeeks.org of a todo app. This to-do list can add new tasks we can also delete the tasks by clicking on them.

**Prerequisites:**
- Introduction To Next.js
- Next.js Components
- React useState
- Javascript Map
- NPM and NPX

![image](https://github.com/user-attachments/assets/1554f881-d4c3-4e55-b9f4-3ddf9a473cbd)


# Steps to create the NextJS Application
**Step 1:** Create a new Next.js project using the following command

NPX: It is a package runner tool that comes with npm 5.2+, npx is easy to use CLI tool. The npx is used for executing Node packages.

```npx create-next-app todo-app```

**Step 2:** Change to the project directory:

```cd todo-app```

# Approach
- The functions update­Input, addItem, delete­Item, and editItem are­ responsible for managing the state­ based on user actions. Specifically, the­ updateInput function updates the use­rInput state wheneve­r the user types in the­ input field. On the other hand, the­ addItem function adds a new ToDo item to the­ list state if there’s conte­nt in the input field. If the use­r clicks on the “Delete­” button, it triggers the dele­teItem function which remove­s a ToDo item from the list state. Lastly, by utilizing a prompt display, the­ editItem function enable­s users to modify existing ToDo items.


To run the next.js application use the following command and then go to this URL http://localhost:3000

```npm run dev```

![image](https://github.com/user-attachments/assets/d31e0953-4b0c-4046-b599-5d777db80ea1)


