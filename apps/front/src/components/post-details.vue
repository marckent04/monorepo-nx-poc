<script setup lang="ts">
import {Post} from "@lpi/common-types"
import {ref, watch} from "vue";
defineProps<{ post: Post }>()
const emit = defineEmits(["close"])

const value = ref<boolean>(true)

watch(value, () => {
  emit("close");
})
</script>

<template>
  <v-dialog
   v-model="value"
   width="50%"
  >
    <v-card>
     <div>
       <h3 v-text="post.title"></h3>
       <h3 v-text="post.body"></h3>
     </div>
      <div>
        <h3>Commentaires</h3>
        <ul>
          <li>Liste des commentaires</li>
        </ul>
      </div>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>
