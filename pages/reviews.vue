<template>
    <div class="bg-gray-900 pt-10">
        <div class="mx-auto max-w-7xl text-base leading-7 text-slate-300 px-4 sm:px-6 lg:px-8">
            <!-- Realm Cards  -->
            <div class="sm:flex sm:items-baseline sm:justify-between">
                <h2 class="text-2xl font-bold tracking-tight text-gray-900">Nightingale Realm Cards</h2>
                <a href="/realm-cards" class="hidden text-sm font-semibold text-orange-500 hover:text-orange-400 sm:block">
                Browse All Realm Cards
                <span aria-hidden="true"> &rarr;</span>
                </a>
            </div>
            <p class="mt-6 text-xl leading-8 break-all">Cards allow discovering new realms in Nightingale or altering existing ones. Opening a portal requires at least two cards, which are then consumed. Activating portals or using a Realmic Transmutor also consumes cards. Craft or loot more cards to continue traversing fantastical worlds.</p>
            <p class="mt-2 text-xl leading-8 break-all">There are three types of Cards in Nightingale: <span class="text-orange-500 font-bold">Biome Cards</span>，<span class="text-orange-500 font-bold">Major Cards</span> and <span class="text-orange-500 font-bold">Minor Cards</span>.</p>
            <ul role="list" class="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                <li v-for="item in cardList" :key="item.name" class="relative">
                    <a :href="'/nightingale-cards/' + item.name.replaceAll(' ', '-')">
                        <div class="group aspect-h-6 aspect-w-5 block w-full overflow-hidden rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                            <img src="../assets/img/bg.png" :alt="item.name" class="pointer-events-none object-contain group-hover:opacity-75 lazy-img" :data-src="item.imageUrl"/>
                            <button type="button" class="absolute inset-0 focus:outline-none">
                            <span class="sr-only">View details for {{ item.name }}</span>
                            </button>
                        </div>
                        <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900 text-center">{{ item.name }}</p>
                    </a>
                </li>
            </ul>
            <!-- Creatures -->
            <div class="mt-10 sm:flex sm:items-baseline sm:justify-between">
                <h2 class="text-2xl font-bold tracking-tight text-gray-900">Nightingale Creatures</h2>
                <a href="/creatures" class="hidden text-sm font-semibold text-orange-500 hover:text-orange-400 sm:block">
                Browse All Creatures
                <span aria-hidden="true"> &rarr;</span>
                </a>
            </div>
            <p class="mt-6 text-xl leading-8 break-all">In Nightingale, you'll encounter diverse creatures while exploring the magical realms. Craft melee weapons and firearms for first-person combat. Confront fearsome beasts lurking within the portal network. Fend off attacks by the Fae's distorted human imitations called the Bound. Join players to battle colossal apex creatures in the realms' farthest corners.</p>
            <ul role="list" class="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                <li v-for="item in creatureList" :key="item.name" class="relative">
                    <a :href="'/nightingale-creatures/' + item.name.replaceAll(' ', '-')">
                        <div class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                            <img src="../assets/img/bg.png" :alt="item.name" class="pointer-events-none object-cover group-hover:opacity-75 lazy-img" :data-src="item.imageUrl"/>
                            <button type="button" class="absolute inset-0 focus:outline-none">
                            <span class="sr-only">View details for {{ item.name }}</span>
                            </button>
                        </div>
                        <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{{ item.name }}</p>
                    </a>
                </li>
            </ul>
            <!-- Structures -->
            <div class="mt-10 sm:flex sm:items-baseline sm:justify-between">
                <h2 class="text-2xl font-bold tracking-tight text-gray-900">Nightingale Structures</h2>
                <a href="/structures" class="hidden text-sm font-semibold text-orange-500 hover:text-orange-400 sm:block">
                Browse All Structures
                <span aria-hidden="true"> &rarr;</span>
                </a>
            </div>
            <p class="mt-6 text-xl leading-8 break-all">In the magical realms of Nightingale, reliable shelter from elements and creatures is vital to survival. Fortunately, you can create estates and personal empires amid the wilds. Use building items to construct the vital parts: walls for defense, archways and awnings for style, roofs for protection from rain and sunlight. Piece together the essential components to craft everything from cozy cottages to lavish fantasy palaces, establishing your foothold realm by realm. </p>
            <ul role="list" class="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                <li v-for="item in structureList" :key="item.name" class="relative">
                    <a :href="'/nightingale-structures/' + item.name.replaceAll(' ', '-')">
                        <div class="group aspect-h-6 aspect-w-5 block w-full overflow-hidden rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                            <img src="../assets/img/bg.png" :alt="item.name" class="pointer-events-none object-contain group-hover:opacity-75 lazy-img" :data-src="item.imageUrl"/>
                            <button type="button" class="absolute inset-0 focus:outline-none">
                            <span class="sr-only">View details for {{ item.name }}</span>
                            </button>
                        </div>
                        <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900 text-center">{{ item.name }}</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import DOMAIN_LIST from '../conf/index.js'
const listUrl = DOMAIN_LIST.domain + 'ft/home-list'

export default {
    name: 'Reviews',
    setup() {
        const data = reactive({
            cardList: [],
            creatureList: [],
            structureList: []
        })

        const loadImage = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target
                    img.src = img.dataset.src
                    img.addEventListener('load', () => {
                        img.classList.remove('lazy-img')
                    }, { once: true })
                    observer.unobserve(img)
                }
            })
        }

        const lazyLoadImages = () => {
            const observer = new IntersectionObserver(loadImage, {
                root: null, // 使用视窗作为根元素
                rootMargin: '0px', // 可根据需要调整边距
                threshold: 0.1 // 当目标元素 10% 可见时触发回调
            })

            const imgs = document.querySelectorAll('.lazy-img')
            imgs.forEach(img => observer.observe(img))
        }

        const fetchData = async () => {
            try {
                const {
                    data: response
                } = await useFetch(listUrl, {
                    method: 'GET'
                })
                if (response.value.error === 0) {
                    const cardListResult = response.value.data.card
                    data.cardList = cardListResult
                    const structureList = response.value.data.stru
                    data.structureList = structureList
                    const creaturesList = response.value.data.creature
                    data.creatureList = creaturesList
                    if (process.client) {
                        nextTick(() => {
                            lazyLoadImages()
                        })
                    }
                } else {
                    console.error('Request error!', response);
                }
            } catch (error) {
                console.error('Fetch error:', error)
            }
        }

        fetchData()

        return {
            ...toRefs(data)
        }
    }
}
</script>