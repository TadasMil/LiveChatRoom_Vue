import { computed } from "vue";

export const getUserRole = (users, user) => {
  const isAdmin = computed(() => {
    const userFound = users?.value?.find(
      (item) => user?.value?.uid === item.id
    );
    return userFound?.role === "Admin";
  });

  return { isAdmin };
};
