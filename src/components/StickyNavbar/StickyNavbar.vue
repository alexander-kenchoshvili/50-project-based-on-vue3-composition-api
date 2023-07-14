<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const nav = ref(null);

const scrollHandler = () => {
  if (nav.value) {
    if (window.scrollY > nav.value.offsetHeight + 150) {
      nav.value.classList.add("active");
    } else {
      nav.value.classList.remove("active");
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", scrollHandler);
});
onUnmounted(() => {
  window.removeEventListener("scroll", scrollHandler);
});
</script>

<template>
  <div class="sticky-nav">
    <nav ref="nav" class="sticky-nav__nav">
      <div class="content">
        <h1 class="sticky-nav__logo">
          <a href="#">My Website</a>
        </h1>
        <ul>
          <li>
            <a href="#" class="current">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="sticky-nav__hero">
      <div class="content">
        <h1>Welcome To My Website</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, impedit!</p>
      </div>
    </div>
    <section class="sticky-nav__inner content">
      <h2>Content One</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim placeat
        voluptatibus, labore voluptatum iure vero facere, eum rem commodi praesentium
        repudiandae ad necessitatibus minima laborum maiores. At, quidem et! Ratione
        eligendi minus inventore sed perspiciatis autem qui asperiores vitae, ipsa labore
        consequatur accusamus eius eveniet id. Nobis at nulla sed, atque reiciendis
        distinctio voluptatibus vel. Consequuntur, eaque et dolore voluptas temporibus,
        rem accusamus natus a nostrum beatae obcaecati earum cum! Quia sit velit harum
        eveniet animi reiciendis dolor laborum aspernatur sint debitis eaque assumenda
        error, recusandae quis deleniti. Reiciendis ipsum est odio nam, officiis
        voluptatem eius illo dignissimos dolore. Aliquid!
      </p>
      <h3>Content Two</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora modi vero
        officiis asperiores aliquid at dolor dolorum corporis enim adipisci amet eius
        itaque fugiat, neque quasi ex expedita? Distinctio, perferendis ut. Reiciendis
        doloremque quam autem culpa maxime sint itaque quasi ea id nobis nisi quae sed
        debitis neque laudantium voluptatum, quaerat, incidunt aperiam nesciunt iusto,
        ratione excepturi! Sunt eligendi, doloribus optio qui debitis blanditiis quasi
        autem ea ad itaque odit aspernatur saepe impedit id, nobis a exercitationem,
        tenetur odio rem quae perferendis officiis adipisci ipsa! Exercitationem, qui hic
        eos illo quae culpa aliquam in eaque expedita. Praesentium unde minus deleniti!
      </p>
    </section>
  </div>
</template>

<style lang="scss">
.sticky-nav {
  color: #222;
  padding-bottom: 50px;

  &__nav {
    position: fixed;
    background-color: #222;
    top: 0;
    left: 0;
    right: 0;
    transition: all 0.3s ease-in-out;
    &.active {
      background-color: #fff;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      a {
        color: #000;
      }
      .content {
        padding: 10px;
      }
    }
    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.3s ease-in-out;
      padding: 20px 0;
    }
    ul {
      display: flex;
      list-style-type: none;
      align-items: center;
      justify-content: center;
    }
    a {
      color: #fff;
      text-decoration: none;
      padding: 7px 15px;
      transition: all 0.3s ease-in-out;
      &.current,
      &:hover {
        color: #c0392b;
      }
    }
  }
  &__hero {
    background-image: url("https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom center;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    margin-bottom: 20px;
    z-index: -2;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: -1;
    }
    h1 {
      font-size: 46px;
      margin: -20px 0 20px;
    }
    p {
      font-size: 20px;
      letter-spacing: 1px;
    }
  }
  &__inner {
    h2,
    h3 {
      font-size: 150%;
      margin: 10px 0;
    }
    p {
      color: #555;
      line-height: 30px;
      letter-spacing: 1.2px;
    }
  }
  .content {
    max-width: 1200px;
    margin: 0 auto;
  }
}
</style>
