<template>
    <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip bg-gray-900">

        <!-- Site header -->
        <Header />

        <!-- Page content -->
        <main class="grow pt-28 md:pt-36 pb-28 md:pb-36 px-4 sm:px-6">
            <slot/>
        </main>

        <!-- Site footer -->
        <Footer />

    </div>
</template>
<script>
import AOS from 'aos'
import Header from '../pages/Header.vue'
import Footer from '../pages/Footer.vue'

export default {
    components: {
        Header,
        Footer
    },
    setup() {
        const data = reactive({})

        onMounted(() => {
            AOS.init({
                once: true,
                disable: 'phone',
                duration: 700,
                easing: 'ease-out-cubic',
            }) 
        })

        return {
            ...toRefs(data)
        }
    }
}
</script>
