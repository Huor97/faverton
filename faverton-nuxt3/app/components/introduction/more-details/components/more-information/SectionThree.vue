<script setup lang="ts">
import { gsap } from 'gsap';

const titleSectionThreeRef = ref<HTMLElement | null>(null);
const paragraphSectionThreeRef = ref<HTMLElement | null>(null);
const buttonSectionThreeRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (titleSectionThreeRef.value) {
    gsap.fromTo (
      titleSectionThreeRef.value,
      {
        autoAlpha: 0,
        y: 50,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleSectionThreeRef.value,
          start: `top 80%`,
          once: true,
        },
      },
    );
  }
});

onMounted(() => {
  if (paragraphSectionThreeRef.value) {
    gsap.fromTo (
      paragraphSectionThreeRef.value,
      {
        autoAlpha: 0,
        x: -50,
      },
      {
        autoAlpha: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: paragraphSectionThreeRef.value,
          start: `top 80%`,
          once: true,
        },
      },
    );
  }
});

onMounted(() => {
  if (buttonSectionThreeRef.value) {
    gsap.fromTo (
      buttonSectionThreeRef.value,
      {
        autoAlpha: 0,
        x: -50,
      },
      {
        autoAlpha: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: buttonSectionThreeRef.value,
          start: `top 80%`,
          once: true,
        },
      },
    );
  }
});
</script>

<template>
  <div class="w-2/4 border-r-2 border-black flex items-center justify-center">
    <h2
      ref="titleSectionThreeRef"
      class="max-w-96 text-3xl text-center font-semibold"
    >
      <span>
        Vitesse sans précédent. Fiabilité impeccable.
      </span>
    </h2>
  </div>
  <div class="w-2/4 h-full">
    <div class="h-full w-full grid gap-4 justify-center">
      <div class="pt-32">
        <p
          ref="paragraphSectionThreeRef"
          class="w-[330px] grid gap-5"
        >
          <span class="">
            Paragraphe. Vous pouvez le modifier et ajouter votre texte. Double-cliquez ici ou cliquez sur « Modifier le texte » pour ajouter votre contenu et personnaliser la police. Utilisez cet espace pour raconter une histoire et vous présenter à vos visiteurs. Vous pouvez le faire glisser-déposer où vous le souhaitez sur la page.
          </span>
          <span>
            C'est l'espace idéal pour rédiger un long texte. Utilisez-le pour donner plus d'informations sur votre entreprise. Vous pouvez présenter votre équipe et les services que vous proposez. Vous pouvez également expliquer à vos visiteurs vos motivations, votre histoire, vos objectifs, et mettre en avant vos avantages par rapport à vos concurrents. Démarquez-vous et captivez l'attention de vos visiteurs.
          </span>
        </p>
      </div>
      <div
        ref="buttonSectionThreeRef"
        class="pt-4 pb-28"
      >
        <NuxtLink

          to="/"
          text="mor information"
          class="text-3xl border-2 border-black p-2 hover:bg-sky-700 hover:text-white"
        />
      </div>
    </div>
  </div>
</template>
