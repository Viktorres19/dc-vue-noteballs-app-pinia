<template>
	<div
		class="card mb-4"
	>
		<div class="card-content">
			<div class="content is-flex is-justify-content-space-between">
					<div>{{ note.content }}</div>
					<div><small>{{ lengthNoteContent }}</small></div>
			</div>
		</div>
		<footer class="card-footer">
			<a href="#" class="card-footer-item">Edit</a>
			<a
					@click.prevent="handleDeleteClicked"
					href="#"
					class="card-footer-item"
			>Delete</a>
		</footer>
	</div>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({
	note: {
		type: Object,
		required: true
	}
})
const lengthNoteContent = computed(() => {
	let length = props.note.content.length
	let description = length > 1 ? 'characters' : 'character'
	return `${ length } ${description}`
})

const emit = defineEmits(['handleDelete'])

const handleDeleteClicked = () => {
	emit('handleDelete', props.note.id)
}
</script>
