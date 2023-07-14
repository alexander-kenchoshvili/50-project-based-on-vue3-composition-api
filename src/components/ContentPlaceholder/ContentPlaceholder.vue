<script setup>
import { ref, onMounted } from "vue";
const animated = ref(true);
const placeholderData = ref([
  {
    img: "",
    cardTitle: "",
    excerpt: "",
    profileImg: "",
    authorName: "",
    authorDate: "",
  },
]);
onMounted(() => {
  setTimeout(() => {
    placeholderData.value = [
      {
        img:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
        cardTitle: "Lorem ipsum dolor sit amet.",
        excerpt:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, veritatis.",
        profileImg: "https://randomuser.me/api/portraits/men/45.jpg",
        authorName: "John Doe",
        authorDate: "Oct 08, 2020",
      },
    ];
    animated.value = false;
  }, 2500);
});
</script>

<template>
  <div class="placeholder-card">
    <div class="placeholder-card__content">
      <div class="placeholder-card__header" :class="animated ? 'animated-bg' : ''">
        <img :src="placeholderData[0].img" alt="lorem" />
      </div>
      <div class="placeholder-card__inner">
        <h3
          class="placeholder-card__title"
          :class="[animated ? 'animated-bg' : '', animated ? 'animated-bg-text' : '']"
        >
          {{ placeholderData[0].cardTitle }}
        </h3>
        <p class="placeholder-card__excerpt">
          {{ placeholderData[0].excerpt }}
          <span
            v-for="item in 3"
            :class="[animated ? 'animated-bg' : '', animated ? 'animated-bg-text' : '']"
            >&nbsp;</span
          >
        </p>
        <div class="placeholder-card__author">
          <div
            class="placeholder-card__profile-img"
            :class="animated ? 'animated-bg' : ''"
          >
            <img :src="placeholderData[0].profileImg" alt="" />
          </div>
          <div class="placeholder-card__author-info">
            <strong
              :class="[animated ? 'animated-bg' : '', animated ? 'animated-bg-text' : '']"
              >{{ placeholderData[0].authorName }}</strong
            >
            <small
              :class="[animated ? 'animated-bg' : '', animated ? 'animated-bg-text' : '']"
              >{{ placeholderData[0].authorDate }}</small
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.placeholder-card {
  background-color: #ecf0f1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  img {
    max-width: 100%;
  }
  &__content {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;
    width: 350px;
  }
  &__header {
    height: 200px;
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
  &__inner {
    background-color: #fff;
    padding: 30px;
  }
  &__title {
    height: 20px;
    margin: 0;
  }
  &__excerpt {
    color: #777;
    margin: 10px 0 20px;
  }
  &__author {
    display: flex;
  }
  &__profile-img {
    border-radius: 50%;
    overflow: hidden;
    height: 40px;
    width: 40px;
  }
  &__author-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10px;
    width: 100px;
    small {
      color: #aaa;
      margin-top: 5px;
    }
  }

  .animated-bg {
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 10%,
      #f6f7f8 20%,
      #f6f7f8 100%
    );
    background-size: 200% 100%;
    animation: bgPos 1s linear infinite;
  }

  .animated-bg-text {
    border-radius: 50px;
    display: inline-block;
    margin: 0;
    height: 10px;
    width: 100%;
  }

  @keyframes bgPos {
    0% {
      background-position: 50% 0;
    }

    100% {
      background-position: -150% 0;
    }
  }
}
</style>
