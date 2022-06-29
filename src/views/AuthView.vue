<template>

  <h2>auth</h2>
  <section>
    <form @submit.prevent>
      <div class="form-control">
        <input type="text" name="password">
        <label for="password">password</label>
      </div>
      <button>sign in</button>
    </form>
  </section>

</template>