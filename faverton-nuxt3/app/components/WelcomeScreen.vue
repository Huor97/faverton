<script setup lang="ts">
import { DoubleSide } from "three";

// const svgURL = `https://raw.githubusercontent.com/`
//   + `Tresjs/assets/main/svgs/cientos_heart.svg`;
const earth = `/models/earth.glb`;
// const start = "public/Faverton logo.svg"

const boxGroupRef = ref();
const earthRef = ref();
const mouse = ref({ x: 0, y: 0 });
const currentRotation = ref({ x: 0, y: 0 });

const { onLoop } = useRenderLoop();

const updateMousePosition = (event: MouseEvent) => {
  mouse.value.x = event.clientX;
  mouse.value.y = event.clientY;
};

const updateBoxRotation = () => {
  if (boxGroupRef.value) {
    const box = boxGroupRef.value;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const dx = mouse.value.x - centerX;
    const dy = mouse.value.y - centerY;

    const targetX = Math.atan2(dy, window.innerHeight) * 0.9;
    const targetY = Math.atan2(dx, window.innerWidth) * 0.9;

    currentRotation.value.x += (targetX - currentRotation.value.x) * 0.05;
    currentRotation.value.y += (targetY - currentRotation.value.y) * 0.05;

    box.rotation.x = currentRotation.value.x;
    box.rotation.y = currentRotation.value.y;
  }
};

onLoop(() => {
  updateBoxRotation();
});

onLoop(({ elapsed }) => {
  if (earthRef.value) {
    earthRef.value.rotation.y = elapsed * 0.1;
  }
});

onMounted(() => {
  window.addEventListener(`mousemove`, updateMousePosition);
});

onUnmounted(() => {
  window.removeEventListener(`mousemove`, updateMousePosition);
});
const svgURL = `Faverton logo.svg`;
</script>

<template>
  <TresCanvas window-size>
    <TresPerspectiveCamera :position="[0, -0.4, 5]" />
    <TresGroup>
      <TresGroup ref="boxGroupRef">
        <RoundedBox
          :scale="[1.5, 1.5, 1.5]"
          :args="[1.5, 1.5, 1.5, 2, 0.03]"
        >
          <MeshGlassMaterial
            :side="DoubleSide"
            :metalness="0.05"
          />
        </RoundedBox>
        <Suspense>
          <SVG
            :src="svgURL"
            :position="[-0.4, -0.4, 1.13]"
            :scale="0.001"
          />
        </Suspense>
      </TresGroup>
      <Suspense>
        <TresGroup ref="earthRef">
          <GLTFModel
            :position="[0, -1, 0.1]"
            :scale="[0.03, 0.03, 0.03]"
            :path="earth"
          />
        </TresGroup>
      </Suspense>
      <TresAmbientLight :intensity="1" />
      <TresDirectionalLight :intensity="1" />
    </TresGroup>
  </TresCanvas>
</template>
