<template>
<section class="todoapp">
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo"
      autofocus autocomplete="off"
      placeholder="What needs to be done?"
      v-model="newTodo"
      @keyup.enter="addTodo">
  </header>
</section>
</template>
<style src="todomvc-app-css/index.css">
</style>
