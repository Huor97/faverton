<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

const hedroElectricRef = ref<HTMLElement | null>(null);
const flashRef = ref<HTMLElement | null>(null);
onMounted(() => {
  if (hedroElectricRef.value) {
    gsap.fromTo(
      hedroElectricRef.value,
      {
        autoAlpha: 0,
        x: -50,
      },
      {
        autoAlpha: 1,
        x: 0,
        scrollTrigger: {
          trigger: hedroElectricRef.value,
          start: `top 50%`,
          end: `bottom 60%`,
          toggleActions: `play reverse play reverse`,
          // markers: true,
        },
      },
    );
  }
});

onMounted(() => {
  if (flashRef.value) {
    gsap.from(flashRef.value, {
      opacity: 0,
      y: 20,
      stagger: 0.3,
      scrollTrigger: {
        trigger: flashRef.value,
        start: `top 53%`,
        end: `bottom 50%`,
        scrub: true,

        onLeave: () => {
          if (flashRef.value) {
            gsap.to(flashRef.value, { opacity: 0 });
          }
        },
        // markers: true, // Utile pour le débogage, à retirer en production
      },
    });
  }
});
</script>

<template>
  <div class="relative text-white w-1/4 h-screen container-section">
    <div
      ref="hedroElectricRef"
      class=" bottom-[50vw] relative flex flex-col left-[25vw] p-5 shadow-lg shadow-green-500/60 backdrop-blur-sm"
    >
      <p>
        <b>Hydro Electric.</b>
        <span class="text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam fugit, doloremque accusamus
          recusandae suscipit blanditiis, architecto eum ab accusantium dignissimos animi consequatur, pariatur
          qui delectus odio consectetur atque aut eius!
          Qui, error. Perspiciatis, voluptatem. Laudantium veniam deleniti temporibus
        </span>
        <br>
        <NuxtLink
          class="underline underline-offset-8 hover:decoration-sky-500"
          to="introduction/objective"
          text="mor information"
        />
      </p>
    </div>
    <div
      ref="flashRef"
      class="relative left-[50vw] bottom-[120vh] border-t-2 border-r-2 w-[30%] h-[50px]"
    />
  </div>
</template>
