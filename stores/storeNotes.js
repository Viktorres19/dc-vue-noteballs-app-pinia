import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', () => {
	const notes = ref([
		{
			id: 'id1',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque corporis dolorem est eum impedit numquam pariatur quasi, quo veritatis voluptatem.'
		},
		{
			id: 'id2',
			content: 'Lorem 2 ipsum dolor sit amet, consectetur adipisicing elit. Atque corporis dolorem est eum impedit numquam pariatur quasi, quo veritatis voluptatem.'
		},
		{
			id: 'id3',
			content: 'Lorem 3 ipsum dolor sit amet, consectetur adipisicing elit. Atque corporis dolorem est eum impedit numquam pariatur quasi, quo veritatis voluptatem.'
		}
	])
	/*const doubleCount = computed(() => count.value * 2)*/
	return { notes }
})
