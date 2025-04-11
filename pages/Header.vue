<template>
  <header class="fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out" :class="{ 'bg-gray-900 backdrop-blur-sm shadow-lg': !top }">
    <div class="max-w-8xl mx-auto px-8 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Site branding -->
        <div class="shrink-0 mr-4">
          <!-- Logo -->
          <a class="block" href="https://thronglets.online/" title="Thronglets Game">
            <img src="../assets/img/logo.jpg" class="w-10 h-10" alt="Thronglets Game"/>
          </a>
        </div>

        <!-- Desktop navigation -->
        <nav class="hidden md:flex">
            <PopoverGroup class="lg:gap-x-12">
                <!-- Desktop menu links -->
                <ul class="flex grow justify-end flex-wrap items-center">
                    <li>
                        <router-link to="/" class="text-white px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Home</router-link>
                    </li>
                </ul>
            </PopoverGroup>

        </nav>

        <!-- Mobile menu -->
        <div class="flex md:hidden">

          <!-- Hamburger button -->
          <button class="hamburger" ref="hamburger" :class="{ active: mobileNavOpen }" aria-controls="mobile-nav" :aria-expanded="mobileNavOpen" @click="mobileNavOpen = !mobileNavOpen">
            <span class="sr-only">Menu</span>
            <svg class="w-6 h-6 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect y="4" width="24" height="2" />
              <rect y="11" width="24" height="2" />
              <rect y="18" width="24" height="2" />
            </svg>
          </button>

          <!-- Mobile navigation -->
          <transition
            enter-active-class="transition ease-out duration-200 transform"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-out duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >          
            <nav
              id="mobile-nav"
              ref="mobileNav"
              v-show="mobileNavOpen"
              class="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-gray-900"
            >
              <ul class="px-5 py-2">
                <li>
                  <router-link to="/" class="flex text-white py-2">Home</router-link>
                </li>
              </ul>
            </nav>
          </transition>

        </div>

      </div>
    </div>
  </header>
</template>

<script>
import Dropdown from './utils/Dropdown.vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'

export default {
    name: 'Header',
    components: {
        Dropdown,
        ChevronDownIcon,
        Popover,
        PopoverButton,
        PopoverGroup,
        PopoverPanel,
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
    },
    setup() {
        const { locale, setLocale } = useI18n()
        const switchLocalePath = useSwitchLocalePath()
        const mobileNav = ref()
        const hamburger = ref()
        const data = reactive({
            mobileNavOpen: false,
            top: true,
            resources: [
                { name: 'Weapons', href: '/weapons' }
            ],
            languages: [
                {
                    lang: 'en',
                    icon: '',
                    name: 'English'
                },
                {
                    lang: 'fr',
                    icon: '',
                    name: 'Français'
                },
                {
                    lang: 'de',
                    icon: '',
                    name: 'Deutsch'
                },
                {
                    lang: 'es',
                    icon: '',
                    name: 'Español'
                },
                {
                    lang: 'it',
                    icon: '',
                    name: 'Italiano'
                },
                {
                    lang: 'ja',
                    icon: '',
                    name: '日本語'
                },
                {
                    lang: 'ko',
                    icon: '',
                    name: '한국어'
                },
                {
                    lang: 'pt',
                    icon: '',
                    name: 'Português'
                },
                {
                    lang: 'zh',
                    icon: '',
                    name: '中文'
                },
            ]
        })
        const currentLocale = computed(() => {
            return data.languages.find(c => c.lang === locale.value).name
        })
        const clickOutside = (e) => {
            if (!data.mobileNavOpen || mobileNav.value.contains(e.target) || hamburger.value.contains(e.target)) return
            data.mobileNavOpen = false
        }
        const keyPress = (event) => {
            if (!data.mobileNavOpen || event.keyCode !== 27) return
            data.mobileNavOpen = false
        }
        const handleScroll = () => {
            data.top = window.pageYOffset > 10 ? false : true
        }
        onMounted(() => {
            document.addEventListener('click', clickOutside)    
            document.addEventListener('keydown', keyPress)
            document.addEventListener('scroll', handleScroll)
        })
        onBeforeUnmount(() => {
            document.removeEventListener('click', clickOutside)
            document.removeEventListener('keydown', keyPress)
            document.removeEventListener('scroll', handleScroll)
        })

        return {
            ...toRefs(data),
            switchLocalePath,
            currentLocale,
            locale,
            mobileNav,
            hamburger
        }
    }
}
</script>