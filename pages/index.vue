<template>
  <div class="w-screen h-screen bg-gray-50 relative">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div class="text-4xl font-bold flex">
        <div class="anime-title-hash mr-2">#</div>
        <div class="anime-title-d">D</div>
        <div class="anime-title-e">e</div>
        <div class="anime-title-l">l</div>
        <div class="anime-title-i">i</div>
        <div class="anime-title-g">g</div>
        <div class="anime-title-h">h</div>
        <div class="anime-title-t">t</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $anime } = useNuxtApp()

const getRandomInt = (max: number): number => {
  const negative = Math.random() > 0.5 ? 1 : -1
  const result = Math.floor(Math.random() * max * negative)
  console.log(result)
  return result;
}


onMounted(() => {
  const animeTimeline = $anime.timeline({
    endDelay: 300,
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true, duration: 300
  })
    .add(
      { targets: '.anime-title-hash', scale: "1.3", opacity: 0.8, color: '#ff3dc5' }
    )
    .add(
      { targets: '.anime-title-d', rotate: getRandomInt(20), color: "#4f5ff0" }, '-=200'
    )
    .add(
      { targets: '.anime-title-e', rotate: getRandomInt(20), color: "#4f5ff0" }, '-=200'
    )
    .add(
      { targets: '.anime-title-l', rotate: getRandomInt(20), color: "#4f5ff0" }, '-=200'
    )
    .add(
      { targets: '.anime-title-i', rotate: getRandomInt(20), color: "#4f5ff0" }, '-=200'
    )
    .add(
      { targets: '.anime-title-g', rotate: getRandomInt(20), color: "#4f5ff0" }, '-=200'
    )
    .add(
      { targets: '.anime-title-h', rotate: getRandomInt(20), color: "#4f5ff0" }, '-=200'
    )
    .add(
      { targets: '.anime-title-t', rotate: getRandomInt(20), color: "#4f5ff0" }, '-=200'
    )
})
</script>