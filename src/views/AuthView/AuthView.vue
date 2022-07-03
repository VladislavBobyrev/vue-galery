<template>

  <h2>auth</h2>
  <section class="auth">
    <form @submit.prevent>
      <div class="form-control">
        <label for="password">password</label>
        <input type="text" name="password" v-model="password">
        <small v-if="pError">{{pError}}</small>
      </div>
      <button @click="login">sign in</button>
    </form>
  </section>

</template>

<script lang='ts' setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const password = ref()
const pError = ref('')
const router = useRouter()

watch(password, () => password.value)

/* функция выполняет проверку на количество введенных символов
  вызывает actions login и направляет на главную страницу
*/
const login = () =>
{
  if (password.value.length === 4)
  {
    if (password.value === '1234')
    {
      pError.value = 'Ваш пароль не может совпадать с паролем Администратора!'
      password.value = ''
    }
    else
    {
      store.dispatch('auth/login')
      console.log('isAuthenticated', store.getters['auth/isAuthenticated'])
      // если пользователь имеет ключь в lockalStorage направляем на главную страницу
      if (store.getters['auth/isAuthenticated'])
      {
        router.push('/')
      }
    }
  }
  else
  {
    pError.value = 'Пароль должен состоять из 4 символов'
    password.value = ''
  }
}
</script>