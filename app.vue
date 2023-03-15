<template>
  <div>
    Hi test,
    {{ some }}
  </div>
</template>

<script setup>

  await $fetch("/server/api/write?key=some",  {
    method: "POST",
    body: "Trying to store data"
  })

  const some = await $fetch("/server/api/read?key=some");

</script>