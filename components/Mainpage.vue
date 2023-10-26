<template>
  <div
    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-5"
  >
    <div class="font-normal underline">Go Back</div>
    <div class="text-8xl font-black italic flex">
      <div>Welcome.</div>
    </div>
    <div class="font-normal">Click and select the picture</div>
  </div>
</template>

<script setup lang="ts">
const { $anime } = useNuxtApp();

onMounted(() => {
  const animeTimeline = $anime.timeline({
    endDelay: 300,
    easing: "easeInOutQuad",
    direction: "alternate",
    loop: true,
    duration: 300,
  });
  $anime({
    targets: ".line-drawing-demo .lines path",
    strokeDashoffset: [$anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 1500,
    delay: function (el, i) {
      return i * 250;
    },
    direction: "alternate",
    loop: true,
  });
});
</script>

<style></style>
