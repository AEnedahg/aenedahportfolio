<template>
    <section class="pb-30" id="experience">
        <div class="*:font-preahvihear *:text-center">
            <h1 class="text-white text-[50px]">Work Experience</h1>
            <p class="text-white text-[24px]">I'm currently looking to join a 
                <span class="!text-[#A362FF]">cross-functional team</span></p>
            <small class="text-[17px] text-white text-center block">
                that values improving people's lives through accessible design</small>
        </div>
        <div class="flex flex-wrap justify-center gap-[10px] mt-10 max-w-[374px] mx-auto">
            <div v-for="skill of skills" :key="skill" 
             class="size-[44px] bg-[#251C31] rounded-full flex items-center justify-center">
                <img
                    :src="skill" alt="skill icon"
                    class="w-[21px]"
                />
            </div>
        </div>
        <div class="relative h-[400px]">
            <img src="/images/experience/experience-large-logo.png" alt="logo" 
                class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                    w-[200px]
                "
            />
            <img src="/images/experience/experience-ellipse.png" alt="purple ellipse" 
                class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                 w-[300px]
                "
            />
            <img src="/images/experience/experience-btm-img.png" alt="large image of logo" 
                class="max-w-[306px] max-h-[275px] mx-auto absolute -bottom-[20px] left-1/2
                -translate-x-1/2
                "
            />
        </div>
    </section>
</template>

<script setup>
const skills = ['/images/experience/html-icon.png',
    '/images/experience/css-icon.png',
    '/images/experience/javascript-icon.png',
    '/images/experience/tailwind-css-icon.webp',
    '/images/experience/gsap-icon.png',
    '/images/experience/vuejs-icon.png',
    '/images/experience/nuxt-icon.webp',
    '/images/experience/gitbash-icon.png',
    '/images/experience/github-icon.png',
    '/images/experience/figma-icon.png'
]
</script>