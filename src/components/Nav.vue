<template>
    <div class="text-blue-200 bg-purple-800">
        <div class="container flex items-center justify-between mx-auto " >
            <h1 class="text-3xl font-thin tracking-tighter">Basic<span class="font-normal">Router</span></h1>
            <nav>
                <ul class="flex w-full space-x-4">
                    <router-link to="/">
                        <li class="px-4 py-8 hover:cursor-pointer hover:bg-purple-100 hover:text-purple-800">
                            Home 
                        </li>
                    </router-link>
                    <router-link to="/about">
                        <li class="px-4 py-8 hover:cursor-pointer hover:bg-purple-100 hover:text-purple-800">
                            About
                        </li>
                    </router-link>
                    <router-link to="/hello">
                        <li class="px-4 py-8 hover:cursor-pointer hover:bg-purple-100 hover:text-purple-800">
                            Hello
                        </li>
                    </router-link>
                </ul>
            </nav>
        </div>
    </div>
</template>