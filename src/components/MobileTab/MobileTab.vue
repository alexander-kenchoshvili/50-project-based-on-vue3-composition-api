<script setup>
import Home from "./SVG/Home.vue";
import Blog from "./SVG/Blog.vue";
import Work from "./SVG/Work.vue";
import AboutUs from "./SVG/AboutUs.vue";
import { ref } from "vue";

const activeIndex = ref(0);

const navigation = [
  {
    title: "Home",
    icon: Home,
  },
  {
    title: "Work",
    icon: Work,
  },
  {
    title: "Blog",
    icon: Blog,
  },
  {
    title: "About us",
    icon: AboutUs,
  },
];
const photos = [
  {
    imgSrc:
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  },
];

console.log(navigation);

const handleClick = (index) => {
  activeIndex.value = index;
};
</script>

<template>
  <div class="mobile-tab">
    <div class="mobile-tab__phone">
      <img
        v-for="(photo, index) in photos"
        :src="activeIndex === index ? photo.imgSrc : ''"
        alt=""
        class="mobile-tab__phone-content"
        :class="{ show: index === activeIndex }"
      />
      <nav>
        <ul>
          <li
            v-for="(item, index) in navigation"
            @click="handleClick(index)"
            :class="{ active: index === activeIndex }"
          >
            <component :is="item.icon" />
            <p>{{ item.title }}</p>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss">
.mobile-tab {
  background-color: rgba(155, 89, 182, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  &__phone {
    position: relative;
    overflow: hidden;
    border: 3px solid #eee;
    border-radius: 15px;
    height: 600px;
    width: 340px;
    &-content {
      opacity: 0;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      height: calc(100% - 60px);
      width: 100%;
      transition: opacity 0.4s ease;
      &.show {
        opacity: 1;
      }
    }
    nav {
      position: absolute;
      bottom: 0;
      left: 0;
      margin-top: -5px;
      width: 100%;
      ul {
        background-color: #fff;
        display: flex;
        list-style-type: none;
        height: 60px;
        li {
          color: #777;
          cursor: pointer;
          flex: 1;
          padding: 10px;
          text-align: center;
          transition: 0.5s;
          svg {
            path {
              transition: 0.5s;
            }
          }
          &:hover,
          &.active {
            color: #8e44ad;
            svg {
              path {
                fill: #8e44ad;
              }
            }
          }
          p {
            font-size: 12px;
            margin: 2px 0;
          }
        }
      }
    }
  }
}
</style>
