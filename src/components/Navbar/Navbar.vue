<template>
  <nav class="nav" v-if="user">
      <div>
          <p>Swx {{user.displayName}}</p>
          <p class="email">email: {{user.email}}</p>
      </div>
      <button @click="handleLogout">Atsijungti</button>
  </nav>
</template>

<script>
import useLogout from "../../composables/useLogout"
import getUser from "../../composables/getUser"

export default {
    setup() {
        const {error, logout} = useLogout();
        const { user } = getUser();

        const handleLogout = async () => {
            await logout();
            if(!error.value) {
                console.log("user logged out");
            }
        }

        return { handleLogout, user }
    }
}
</script>

<style>
    .nav {
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav p {
        margin: 2px auto;
        font-size: 16px;
        color: #444;
    }

    nav p.email{
        font-size: 14px;
        color: #999;
    }
</style>