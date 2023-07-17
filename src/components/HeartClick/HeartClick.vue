<script setup>
import Heart from "./SVG/Heart.vue";
import { ref, onMounted } from "vue";
const times = ref(0);
const showHeart = ref(false);
const heart = ref(null);

onMounted(() => {
  const h = document.querySelector(".heart-icon");
  heart.value = h;
});

const heartHandler = (e) => {
  times.value++;
  showHeart.value = true;

  const x = e.clientX;
  const y = e.clientY;

  const topOffset = e.target.offsetTop;
  const leftOffset = e.target.offsetLeft;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  if (heart.value) {
    heart.value.style.top = yInside + "px";
    heart.value.style.left = xInside + "px";
  }
  console.log(heart.value);
  setTimeout(() => (showHeart.value = false), 500);
};
</script>

<template>
  <div class="heart-click">
    <h3>Dobule click on the image to <Heart /> it</h3>
    <small
      >You liked it <span> {{ times }}</span>
    </small>
    <div @dblclick="heartHandler" class="heart-click__loveMe">
      <Heart class="heart-icon" :class="{ 'heart-click__loveMe--heart': showHeart }" />
    </div>
  </div>
</template>

<style lang="scss">
.heart-click {
  margin-top: 30px;
  text-align: center;
  h3 {
    text-align: center;
    svg {
      path {
        fill: red;
      }
    }
  }
  small {
    display: block;
    margin-bottom: 20px;
    text-align: center;
  }
  &__loveMe {
    height: 440px;
    width: 300px;
    background: url("https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80")
      no-repeat center center/cover;
    margin: auto;
    cursor: pointer;
    max-width: 100%;
    position: relative;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    overflow: hidden;
    .heart-icon {
      opacity: 0;
    }
    &--heart {
      position: absolute;
      animation: grow 0.6s linear;
      transform: translate(-50%, -50%) scale(0);

      path {
        fill: red;
      }
    }
  }

  @keyframes grow {
    to {
      transform: translate(-50%, -50%) scale(10);
      opacity: 1;
    }
  }
}
</style>
