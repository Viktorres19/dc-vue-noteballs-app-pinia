<template>
	<div class="notes">
		<div class="card has-background-success-dark mb-5 p-4">
			<div class="field">
				<div class="control">
					<textarea
							v-model="newNote"
							class="textarea"
							placeholder="Add a new note"
							ref="newNoteRef"
					/>
				</div>
			</div>

			<div class="field is-grouped is-grouped-right">
				<div class="control">
					<button
							@click="addNote"
							:disabled="!newNote"
							class="button is-link has-background-success"
					>
						Add New Note
					</button>
				</div>
			</div>
		</div>

		<Note
				v-for="note in notes"
				:key="note.id"
				:note="note"
				@handleDelete="deleteNote"
		/>
	</div>
</template>
<script setup>
import {ref} from 'vue'
import { v4 as uuidv4 } from 'uuid'
import Note from '@/components/Notes/Note.vue'

const newNote = ref('')
const newNoteRef = ref(null)

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

const addNote = () => {
	let note = {
		id: uuidv4(),
		content: newNote.value
	}
	notes.value.unshift(note)
	newNote.value = ''
	newNoteRef.value.focus()
}
const deleteNote = id => {
	notes.value = notes.value.filter(note => note.id !== id)
}
</script>
