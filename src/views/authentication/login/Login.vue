<template>
  <div id='login'>
    <h1>Login</h1>
    <form>
      <div>
        <label>E-mail</label>
        <input type="email" v-model="user.email">
      </div>

      <div>
        <label>Senha</label>
        <input type="password" v-model="user.password">
      </div>

      <button @click.prevent="handlerLogin">Entrar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    handlerLogin() {
      if (this.user.email !== '' && this.user.password !== '') {
        this.$router.push('/home');
      }
    },
  },
};
</script>

<style lang='scss'>
  #login {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-size: 23px;
    background-color: #23232366;
    border-radius: 10px;

    > form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 0 30px 30px;

      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;

        > input {
          margin-top: 10px;
          width: 370px;
          height: 40px;
          border: none;
          border-radius: 5px;
          font-size: 18px;
          padding: 0 10px;
          background: #23232366;
          color: white;

          &:focus {
            box-shadow: 0 0 0 0;
            border: 0 none;
            outline: 0;
          }
        }
      }

      > button {
          margin-top: 20px;
          background: #1b345f;
          color: white;
          font-size: 16px;
          border: none;
          border-radius: 5px;
          width: 150px;
          height: 40px;
          cursor: pointer;
        }
    }
  }
</style>
