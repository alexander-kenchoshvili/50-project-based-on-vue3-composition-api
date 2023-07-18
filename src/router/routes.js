import ExpandingCard from "../components/ExpandingCard/ExpandingCard.vue";
import ProgressSteps from "../components/ProgresSteps/ProgresSteps.vue";
import HomePage from "../components/HomePage/HomePage.vue";
import RotateNavigation from "../components/RotateNavigation/RotateNavigation.vue";
import HiddenSearch from "../components/HiddenSearch/HiddenSearch.vue";
import BlurryLoading from "../components/BlurryLoading/BlurryLoading.vue";
import ScrollAnimation from "../components/ScrollAnimation/ScrollAnimation.vue";
import SplitLanding from "../components/SplitLanding/SplitLanding.vue";
import FormWave from "../components/FormWave/FormWave.vue";
import SoundBoard from "../components/SoundBoard/SoundBoard.vue";
import Jokes from "../components/Jokes/Jokes.vue";
import KeyCodes from "../components/KeyCodes/KeyCodes.vue";
import Faq from "../components/Faq/Faq.vue";
import RandomChoice from "../components/RandomChoice/RandomChoice.vue";
import AnimatedNavigation from "../components/AnimatedNavigation/AnimatedNavigation.vue";
import IncrementCounter from "../components/IncrementCounter/IncrementCounter.vue";
import DrinkWater from "../components/DrinkWater/DrinkWater.vue";
import MovieApp from "../components/MovieApp/MovieApp.vue";
import BackgroundSlider from "../components/BackgroundSlider/BackgroundSlider.vue";
import Clock from "../components/Clock/Clock.vue";
import ButtonRipple from "../components/ButtonRipple/ButtonRipple.vue";
import DragDropBox from "../components/DragDropBox/DragDropBox.vue";
import Kinetic from "../components/Kinetic/Kinetic.vue";
import DrawingApp from "../components/DrawingApp/DrawingApp.vue";
import ContentPlaceholder from "../components/ContentPlaceholder/ContentPlaceholder.vue";
import StickyNavbar from "../components/StickyNavbar/StickyNavbar.vue";
import VerticalSlider from "../components/VerticalSlider/VerticalSlider.vue";
import Notification from "../components/Notification/Notification.vue";
import GithubProfiles from "../components/GithubProfiles/GithubProfiles.vue";
import HeartClick from "../components/HeartClick/HeartClick.vue";
import AutoText from "../components/AutoText/AutoText.vue";
import PasswordGenerator from "../components/PasswordGenerator/PasswordGenerator.vue";
import GoodCheepFast from "../components/GoodCheepFast/GoodCheepFast.vue";
import NoteApp from "../components/NoteApp/NoteApp.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/expanding-card",
    name: "expanding-card",
    component: ExpandingCard,
  },
  {
    path: "/progres-steps",
    name: "progres-steps",
    component: ProgressSteps,
  },
  {
    path: "/rotate-navigation",
    name: "rotate-navigation",
    component: RotateNavigation,
  },
  {
    path: "/hidden-search",
    name: "hidden-search",
    component: HiddenSearch,
  },
  {
    path: "/blurry-loading",
    name: "blurry-loading",
    component: BlurryLoading,
  },
  {
    path: "/scroll-animation",
    name: "scroll-animation",
    component: ScrollAnimation,
  },
  {
    path: "/split-landing",
    name: "split-landing",
    component: SplitLanding,
  },
  {
    path: "/form-wave",
    name: "form-wave",
    component: FormWave,
  },
  {
    path: "/sound-board",
    name: "sound-board",
    component: SoundBoard,
  },
  {
    path: "/jokes",
    name: "jokes",
    component: Jokes,
  },
  {
    path: "/key-codes",
    name: "key-codes",
    component: KeyCodes,
  },
  {
    path: "/faq",
    name: "faq",
    component: Faq,
  },
  {
    path: "/random-choice",
    name: "random-choice",
    component: RandomChoice,
  },
  {
    path: "/animated-navigation",
    name: "animated-navigation",
    component: AnimatedNavigation,
  },
  {
    path: "/increment-counter",
    name: "increment-counter",
    component: IncrementCounter,
  },
  {
    path: "/drink-water",
    name: "drink-water",
    component: DrinkWater,
  },
  {
    path: "/movie-app",
    name: "movie-app",
    component: MovieApp,
  },
  {
    path: "/background-slider",
    name: "background-slider",
    component: BackgroundSlider,
  },
  {
    path: "/clock",
    name: "clock",
    component: Clock,
  },
  {
    path: "/button-ripple",
    name: "button-ripple",
    component: ButtonRipple,
  },
  {
    path: "/drag-drop",
    name: "drag-drop",
    component: DragDropBox,
  },
  {
    path: "/drawing-app",
    name: "drawing-app",
    component: DrawingApp,
  },

  {
    path: "/kinetic",
    name: "kinetic",
    component: Kinetic,
  },
  {
    path: "/content-placeholder",
    name: "content-placeholder",
    component: ContentPlaceholder,
  },
  {
    path: "/sticky-navbar",
    name: "sticky-navbar",
    component: StickyNavbar,
  },
  {
    path: "/vertical-slider",
    name: "vertical-slider",
    component: VerticalSlider,
  },
  {
    path: "/notification",
    name: "notification",
    component: Notification,
  },
  {
    path: "/github-profiles",
    name: "github-profiles",
    component: GithubProfiles,
  },
  {
    path: "/heart-click",
    name: "heart-click",
    component: HeartClick,
  },
  {
    path: "/auto-text",
    name: "auto-text",
    component: AutoText,
  },
  {
    path: "/password-generator",
    name: "password-generator",
    component: PasswordGenerator,
  },
  {
    path: "/good-cheep-fast",
    name: "good-cheep-fast",
    component: GoodCheepFast,
  },
  {
    path: "/note-app",
    name: "note-app",
    component: NoteApp,
  },
];

export default routes;
