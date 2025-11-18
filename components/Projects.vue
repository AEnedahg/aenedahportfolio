<template>
    <section id="projects">
        <div v-for="project of projects" :key="project.id"
        :class="['flex flex-col items-center xl:relative mb-[40px]',
            project.id == 2 || project.id == 4 ? 'xl:flex-row-reverse' : 'xl:flex-row'
        ]"
        >
            <div :class="['*:font-poppins max-w-[669px] rounded-[14px]',
                project.id == 2 || project.id == 4 ? 'xl:text-right' : 'xl:text-left'
            ]">
                <h5 class="text-[16px] text-[#9857D3] font-semibold">Featured Project</h5>
                <h1 class="text-[34px] font-semibold text-[#CCD6F6]">{{ project.title }}</h1>
                <a target="_blank" :href="project.link" class="text-blue-500 underline">{{ project.title }}</a>
                <p class="text-[18px] font-medium text-[#CCD6F6] my-[30px]
                xl:relative max-w-[669px] xl:z-5
                bg-white/10 backdrop-blur-lg rounded-xl p-5 md:p-6 border border-white/10">
                {{ project.text }}</p>
                <div class="mb-[40px]">
                    <a :href="project.link" target="_blank">
                        <img src="/images/projects/click-icon.png" alt="click icon" 
                            class="size-[31px]"
                        />
                    </a>
                </div>
            </div>
            <img :src="project.img" alt="project image" :class="['w-[500px] h-[200px] xl:h-[300px] xl:object-left xl:absolute xl:z-0 object-cover',
                project.id == 2 || project.id == 4 ? 'xl:left-[80px]' : 'xl:right-[80px]'
            ]"/>
        </div>
    </section>
</template>

<script setup>
const projects = [
    {
        id : 1,
        title: 'Shopery',
        text: 'Shopery — your trusted online marketplace for quality foodstuffs and groceries. Shop fresh produce, pantry staples, and everyday essentials delivered right to your door.',
        link: 'https://shopery-phi.vercel.app/',
        img: '/images/projects/shopery.jpeg'
    },
    {
        id : 2,
        title: 'Job Pilot',
        text: 'Jobpilot — your ultimate platform for job opportunities, career insights, and professional growth. Discover top openings, expert advice, and resources to advance your career journey.',
        link: 'https://jobpilot-khaki.vercel.app/',
        img: '/images/projects/job-pilot.jpeg'
    },
      {
        id : 3,
        title: 'Spaatz',
        text: 'Welcome to our blog — your go-to space for insightful articles, tutorials, and stories on technology, design, productivity, and personal growth. Stay inspired and informed with expert opinions, how-to guides, and fresh ideas that help you learn and grow every day.',
        link: 'https://spaatz.vercel.app/',
        img: '/images/projects/spaatz.jpeg'
    }, {
        id : 4,
        title: 'Blackfyre',
        text: "Blackfyre is a cutting-edge cryptocurrency ecosystem designed for the future of decentralized finance. Built with advanced blockchain technology, it offers users a secure and transparent platform for trading, staking, and managing digital assets. Whether you’re a beginner.",
        link: 'https://blackfyre.vercel.app/',
        img: '/images/projects/blackfyre.jpeg'
    }
]
</script>