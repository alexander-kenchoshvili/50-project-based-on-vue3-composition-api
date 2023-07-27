// import ExpandingCard from "../components/ExpandingCard/ExpandingCard.vue";
// import ProgressSteps from "../components/ProgresSteps/ProgresSteps.vue";
// import HomePage from "../components/HomePage/HomePage.vue";
// import RotateNavigation from "../components/RotateNavigation/RotateNavigation.vue";
// import HiddenSearch from "../components/HiddenSearch/HiddenSearch.vue";
// import BlurryLoading from "../components/BlurryLoading/BlurryLoading.vue";
// import ScrollAnimation from "../components/ScrollAnimation/ScrollAnimation.vue";
// import SplitLanding from "../components/SplitLanding/SplitLanding.vue";
// import FormWave from "../components/FormWave/FormWave.vue";
// import SoundBoard from "../components/SoundBoard/SoundBoard.vue";
// import Jokes from "../components/Jokes/Jokes.vue";
// import KeyCodes from "../components/KeyCodes/KeyCodes.vue";
// import Faq from "../components/Faq/Faq.vue";
// import RandomChoice from "../components/RandomChoice/RandomChoice.vue";
// import AnimatedNavigation from "../components/AnimatedNavigation/AnimatedNavigation.vue";
// import IncrementCounter from "../components/IncrementCounter/IncrementCounter.vue";
// import DrinkWater from "../components/DrinkWater/DrinkWater.vue";
// import MovieApp from "../components/MovieApp/MovieApp.vue";
// import BackgroundSlider from "../components/BackgroundSlider/BackgroundSlider.vue";
// import Clock from "../components/Clock/Clock.vue";
// import ButtonRipple from "../components/ButtonRipple/ButtonRipple.vue";
// import DragDropBox from "../components/DragDropBox/DragDropBox.vue";
// import Kinetic from "../components/Kinetic/Kinetic.vue";
// import DrawingApp from "../components/DrawingApp/DrawingApp.vue";
// import ContentPlaceholder from "../components/ContentPlaceholder/ContentPlaceholder.vue";
// import StickyNavbar from "../components/StickyNavbar/StickyNavbar.vue";
// import VerticalSlider from "../components/VerticalSlider/VerticalSlider.vue";
// import Notification from "../components/Notification/Notification.vue";
// import GithubProfiles from "../components/GithubProfiles/GithubProfiles.vue";
// import HeartClick from "../components/HeartClick/HeartClick.vue";
// import AutoText from "../components/AutoText/AutoText.vue";
// import PasswordGenerator from "../components/PasswordGenerator/PasswordGenerator.vue";
// import GoodCheepFast from "../components/GoodCheepFast/GoodCheepFast.vue";
// import NoteApp from "../components/NoteApp/NoteApp.vue";
// import AnimatedCountdown from "../components/AnimatedCountdown/AnimatedCountdown.vue";
// import ImageCarousel from "../components/ImageCarousel/ImageCarousel.vue";
// import Hoverboard from "../components/Hoverboard/Hoverboard.vue";
// import Pokemons from "../components/Pokemons/Pokemons.vue";
// import MobileTab from "../components/MobileTab/MobileTab.vue";
// import PasswordStrength from "../components/PasswordStrength/PasswordStrength.vue";
// import BackgroundBoxes from "../components/BackgroundBoxes/BackgroundBoxes.vue";
// import VerifyAccount from "../components/VerifyAccount/VerifyAccount.vue";
// import UserFilter from "../components/Userfilter/UserFilter.vue";
// import FeedBack from "../components/Feedback/Feedback.vue";
// import RangeSlider from "../components/RangeSlider/RangeSlider.vue";
// import NetflixNav from "../components/NetflixNav/NetflixNav.vue";
// import QuizApp from "../components/QuizApp/QuizApp.vue";
// import TestimonialBox from "../components/TestimonialBox/TestimonialBox.vue";
// import RandomImage from "../components/RandomImage/RandomImage.vue";
// import ToDo from "../components/ToDo/ToDo.vue";
// import CatchInsect from "../components/CatchInsect/CatchInsect.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/HomePage/HomePage.vue"),
  },
  {
    path: "/expanding-card",
    name: "expanding-card",
    component: () => import("../components/ExpandingCard/ExpandingCard.vue"),
  },
  {
    path: "/progres-steps",
    name: "progres-steps",
    component: () => import("../components/ProgresSteps/ProgresSteps.vue"),
  },
  {
    path: "/rotate-navigation",
    name: "rotate-navigation",
    component: () =>
      import("../components/RotateNavigation/RotateNavigation.vue"),
  },
  {
    path: "/hidden-search",
    name: "hidden-search",
    component: () => import("../components/HiddenSearch/HiddenSearch.vue"),
  },
  {
    path: "/blurry-loading",
    name: "blurry-loading",
    component: () => import("../components/BlurryLoading/BlurryLoading.vue"),
  },
  {
    path: "/scroll-animation",
    name: "scroll-animation",
    component: () =>
      import("../components/ScrollAnimation/ScrollAnimation.vue"),
  },
  {
    path: "/split-landing",
    name: "split-landing",
    component: () => import("../components/SplitLanding/SplitLanding.vue"),
  },
  {
    path: "/form-wave",
    name: "form-wave",
    component: () => import("../components/FormWave/FormWave.vue"),
  },
  {
    path: "/sound-board",
    name: "sound-board",
    component: () => import("../components/SoundBoard/SoundBoard.vue"),
  },
  {
    path: "/jokes",
    name: "jokes",
    component: () => import("../components/Jokes/Jokes.vue"),
  },
  {
    path: "/key-codes",
    name: "key-codes",
    component: () => import("../components/KeyCodes/KeyCodes.vue"),
  },
  {
    path: "/faq",
    name: "faq",
    component: () => import("../components/Faq/Faq.vue"),
  },
  {
    path: "/random-choice",
    name: "random-choice",
    component: () => import("../components/RandomChoice/RandomChoice.vue"),
  },
  {
    path: "/animated-navigation",
    name: "animated-navigation",
    component: () =>
      import("../components/AnimatedNavigation/AnimatedNavigation.vue"),
  },
  {
    path: "/increment-counter",
    name: "increment-counter",
    component: () =>
      import("../components/IncrementCounter/IncrementCounter.vue"),
  },
  {
    path: "/drink-water",
    name: "drink-water",
    component: () => import("../components/DrinkWater/DrinkWater.vue"),
  },
  {
    path: "/movie-app",
    name: "movie-app",
    component: () => import("../components/MovieApp/MovieApp.vue"),
  },
  {
    path: "/background-slider",
    name: "background-slider",
    component: () =>
      import("../components/BackgroundSlider/BackgroundSlider.vue"),
  },
  {
    path: "/clock",
    name: "clock",
    component: () => import("../components/Clock/Clock.vue"),
  },
  {
    path: "/button-ripple",
    name: "button-ripple",
    component: () => import("../components/ButtonRipple/ButtonRipple.vue"),
  },
  {
    path: "/drag-drop",
    name: "drag-drop",
    component: () => import("../components/DragDropBox/DragDropBox.vue"),
  },
  {
    path: "/drawing-app",
    name: "drawing-app",
    component: () => import("../components/DrawingApp/DrawingApp.vue"),
  },

  {
    path: "/kinetic",
    name: "kinetic",
    component: () => import("../components/Kinetic/Kinetic.vue"),
  },
  {
    path: "/content-placeholder",
    name: "content-placeholder",
    component: () =>
      import("../components/ContentPlaceholder/ContentPlaceholder.vue"),
  },
  {
    path: "/sticky-navbar",
    name: "sticky-navbar",
    component: () => import("../components/StickyNavbar/StickyNavbar.vue"),
  },
  {
    path: "/vertical-slider",
    name: "vertical-slider",
    component: () => import("../components/VerticalSlider/VerticalSlider.vue"),
  },
  {
    path: "/notification",
    name: "notification",
    component: () => import("../components/Notification/Notification.vue"),
  },
  {
    path: "/github-profiles",
    name: "github-profiles",
    component: () => import("../components/GithubProfiles/GithubProfiles.vue"),
  },
  {
    path: "/heart-click",
    name: "heart-click",
    component: () => import("../components/HeartClick/HeartClick.vue"),
  },
  {
    path: "/auto-text",
    name: "auto-text",
    component: () => import("../components/AutoText/AutoText.vue"),
  },
  {
    path: "/password-generator",
    name: "password-generator",
    component: () =>
      import("../components/PasswordGenerator/PasswordGenerator.vue"),
  },
  {
    path: "/good-cheep-fast",
    name: "good-cheep-fast",
    component: () => import("../components/GoodCheepFast/GoodCheepFast.vue"),
  },
  {
    path: "/note-app",
    name: "note-app",
    component: () => import("../components/NoteApp/NoteApp.vue"),
  },
  {
    path: "/animated-countdown",
    name: "animated-countdown",
    component: () =>
      import("../components/AnimatedCountdown/AnimatedCountdown.vue"),
  },
  {
    path: "/image-carousel",
    name: "image-carousel",
    component: () => import("../components/ImageCarousel/ImageCarousel.vue"),
  },
  {
    path: "/hoverboard",
    name: "hoverboard",
    component: () => import("../components/Hoverboard/Hoverboard.vue"),
  },
  {
    path: "/pokemons",
    name: "pokemons",
    component: () => import("../components/Pokemons/Pokemons.vue"),
  },
  {
    path: "/mobile-tab",
    name: "mobile-tab",
    component: () => import("../components/MobileTab/MobileTab.vue"),
  },
  {
    path: "/password-strength",
    name: "password-strength",
    component: () =>
      import("../components/PasswordStrength/PasswordStrength.vue"),
  },
  {
    path: "/background-boxes",
    name: "background-boxes",
    component: () =>
      import("../components/BackgroundBoxes/BackgroundBoxes.vue"),
  },
  {
    path: "/verify-account",
    name: "verify-account",
    component: () => import("../components/VerifyAccount/VerifyAccount.vue"),
  },
  {
    path: "/user-filter",
    name: "user-filter",
    component: () => import("../components/Userfilter/UserFilter.vue"),
  },
  {
    path: "/feedback",
    name: "feedback",
    component: () => import("../components/Feedback/Feedback.vue"),
  },
  {
    path: "/range-slider",
    name: "range-slider",
    component: () => import("../components/RangeSlider/RangeSlider.vue"),
  },
  {
    path: "/netflix-nav",
    name: "Netflix-Nav",
    component: () => import("../components/NetflixNav/NetflixNav.vue"),
  },
  {
    path: "/quiz-app",
    name: "quiz-app",
    component: () => import("../components/QuizApp/QuizApp.vue"),
  },
  {
    path: "/testimonial-box",
    name: "testimonial-box",
    component: () => import("../components/TestimonialBox/TestimonialBox.vue"),
  },
  {
    path: "/random-image",
    name: "random-image",
    component: () => import("../components/RandomImage/RandomImage.vue"),
  },
  {
    path: "/todo",
    name: "todo",
    component: () => import("../components/ToDo/ToDo.vue"),
  },
  {
    path: "/catch-insect",
    name: "catch-insect",
    component: () => import("../components/CatchInsect/CatchInsect.vue"),
  },
];

export default routes;
