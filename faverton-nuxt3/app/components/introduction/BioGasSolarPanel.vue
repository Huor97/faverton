<script setup lang="ts">
import { onMounted, ref } from "vue";
import { gsap } from 'gsap';

const bioGazRef = ref<HTMLElement | null>(null);
const SolarPanelRef = ref<HTMLElement | null>(null);
const flashRef = ref<HTMLElement | null>(null);
const flashBioGazRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (flashRef.value) {
    gsap.from(flashRef.value, {
      opacity: 0,
      y: 20,
      stagger: 0.3,
      scrollTrigger: {
        trigger: flashRef.value,
        start: `top 58%`,
        end: `bottom 55%`,
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

onMounted(() => {
  if (flashBioGazRef.value) {
    gsap.from(flashBioGazRef.value, {
      opacity: 0,
      y: 20,
      stagger: 0.3,
      scrollTrigger: {
        trigger: flashBioGazRef.value,
        start: `top 70%`,
        end: `bottom 65%`,
        scrub: true,

        onLeave: () => {
          if (flashBioGazRef.value) {
            gsap.to(flashBioGazRef.value, { opacity: 0 });
          }
        },
        // markers: true, // Utile pour le débogage, à retirer en production
      },
    });
  }
});

onMounted(() => {
  if (bioGazRef.value) {
    gsap.fromTo(
      bioGazRef.value,
      {
        autoAlpha: 0,
        x: -50,
      },
      {
        autoAlpha: 1,
        x: 0,
        scrollTrigger: {
          trigger: bioGazRef.value,
          start: `top 55%`,
          end: `bottom 70%`,
          toggleActions: `play reverse play reverse`,
          // markers: true,
        },
      },
    );
  }
});

onMounted(() => {
  if (SolarPanelRef.value) {
    gsap.fromTo(
      SolarPanelRef.value,
      {
        autoAlpha: 0,
        x: -50,
      },
      {
        autoAlpha: 1,
        x: 0,
        scrollTrigger: {
          trigger: SolarPanelRef.value,
          start: `top 25%`,
          end: `bottom 40%`,
          toggleActions: `play reverse play reverse`,
          // markers: true,
        },
      },
    );
  }
});
</script>

<template>
  <div class="h-screen w-1/4 text-white relative container-section container-s2">
    <div
      ref="bioGazRef"
      class="bottom-80 relative left-[30vw] p-5 shadow-lg shadow-green-500/60 backdrop-blur-sm"
    >
      <p>
        <b>Bio gas.</b>
        <span class="text-slate-400">
          Lorem ipsum dolor sit amet. Magnam fugit, doloremque accusamus
          recusandae suscipit blanditiis, architecto eum ab accusantium dignissimos animi consequatur, pariatur
          qui delectus odio consectetur atque aut eius!
          Qui, error. Perspiciatis, voluptatem. Laudantium veniam deleniti temporibus.
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
      ref="flashBioGazRef"
      class="relative left-[22vw] bottom-[65vh] border-t-2 border-l-2  w-[30%] h-[100px]"
    />

    <div
      ref="SolarPanelRef"
      class="bottom-[80vh] relative left-[65vw] bottom-[10vw]  p-5 shadow-lg shadow-green-500/60 backdrop-blur-sm"
    >
      <p>
        <b>Solar panel.</b>
        <span class="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam fugit, doloremque accusamus recusandae
          suscipit blanditiis, architecto eum ab consectetur adipisicing elit, pariatur qui delectus
          odio consectetur atque aut eius!
          Qui, error. Perspiciatis, voluptatem. Laudantium veniam deleniti temporibus.
        </span>
        <NuxtLink
          class="underline underline-offset-8 hover:decoration-sky-500"
          to="introduction/objective"
          text="mor information"
        />
      </p>
    </div>
    <div
      ref="flashRef"
      class="relative left-[75vw] bottom-[80vh] border-b-2 border-r-2 w-[30%] h-[50px]"
    />
  </div>
</template>
