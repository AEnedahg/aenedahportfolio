<template>
  <div class="w-screen bg-[#1A0B2E] h-[113px] p-4 lg:px-20 fixed top-0 left-0 z-50">
    <header class="max-w-[1440px] mx-auto flex items-center justify-between h-full">

      <NuxtLink to="/" @click.prevent="scrollTo('hero')">
        <img src="/images/logo-portfolio.png" alt="logo" class="w-[35px]" />
      </NuxtLink>

      <div @click="toggleMenu" class="lg:hidden flex flex-col justify-between h-5 w-8 cursor-pointer z-60">
        <span ref="hamOne" class="h-[3px] bg-white rounded-full w-full origin-center"></span>
        <span ref="hamTwo" class="h-[3px] bg-white rounded-full w-2/3 origin-center"></span>
        <span ref="hamThree" class="h-[3px] bg-white rounded-full w-1/3 origin-center"></span>
      </div>

      <nav ref="mobileNav" class="fixed top-0 right-0 w-[75%] h-screen bg-[#1A0B2E]/98 backdrop-blur-xl flex flex-col items-center justify-center z-50 lg:hidden">
        <div class="flex flex-col gap-y-10 text-3xl font-poppins text-white">
          <button @click="scrollTo('hero')">Home</button>
          <button @click="scrollTo('about')">About</button>
          <button @click="scrollTo('experience')">Experience</button>
          <button @click="scrollTo('projects')">Projects</button>
          <button @click="scrollTo('contact')">Contact</button>
        </div>
      </nav>

      <nav class="hidden lg:flex gap-10 text-white text-lg font-poppins">
        <button @click="scrollTo('hero')" class="hover:text-[#9857D3] transition">Home</button>
        <button @click="scrollTo('about')" class="hover:text-[#9857D3] transition">About</button>
        <button @click="scrollTo('experience')" class="hover:text-[#9857D3] transition">Experience</button>
        <button @click="scrollTo('projects')" class="hover:text-[#9857D3] transition">Projects</button>
        <button @click="scrollTo('contact')" class="hover:text-[#9857D3] transition">Contact</button>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const mobileNav = ref(null)
const hamOne = ref(null)
const hamTwo = ref(null)
const hamThree = ref(null)
const isOpen = ref(false)

let gsap = null

onMounted(async () => {
  if (process.client) {
    const { gsap: gsapCore } = await import('gsap')
    const { ScrollToPlugin } = await import('gsap/ScrollToPlugin')

    gsap = gsapCore
    gsap.registerPlugin(ScrollToPlugin)

    gsap.set(mobileNav.value, { xPercent: 100, display: 'none' })
  }
})

function scrollTo(sectionId) {
  if (!gsap || !process.client) return

  const el = document.getElementById(sectionId)
  if (el) {
    gsap.to(window, {
      duration: 1.4,
      scrollTo: { y: el, offsetY: 120 },
      ease: 'power3.inOut'
    })
  }

  if (isOpen.value) closeMenu()
}

function toggleMenu() {
  if (!gsap) return

  isOpen.value = !isOpen.value

  if (isOpen.value) {
    gsap.set(mobileNav.value, { display: 'flex' })
    gsap.to(mobileNav.value, { xPercent: 0, duration: 0.7, ease: 'power3.out' })

    gsap.to(hamOne.value, { rotate: 45, y: 8, duration: 0.4 })
    gsap.to(hamThree.value, { rotate: -45, y: -8, duration: 0.4 })
    gsap.to(hamTwo.value, { opacity: 0, duration: 0.2 })
    gsap.to([hamOne.value, hamThree.value], { width: '100%', duration: 0.3 })
  } else {
    closeMenu()
  }
}

function closeMenu() {
  if (!gsap) return

  gsap.to(mobileNav.value, {
    xPercent: 100,
    duration: 0.6,
    ease: 'power3.in',
    onComplete: () => gsap.set(mobileNav.value, { display: 'none' })
  })

  gsap.to(hamOne.value, { rotate: 0, y: 0, duration: 0.4 })
  gsap.to(hamThree.value, { rotate: 0, y: 0, width: '33%', duration: 0.4 })
  gsap.to(hamTwo.value, { opacity: 1, duration: 0.4 })

  isOpen.value = false
}
</script>

<style scoped>
.router-link-active,
button[aria-current="page"] {
  color: white;
  font-weight: 500;
}
</style>
