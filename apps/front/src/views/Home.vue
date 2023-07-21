<template>
  <v-container fluid>
      <h1 class="mb-4">Posts</h1>
      <v-table>
        <thead>
        <tr>
          <th class="text-left" v-for="header in headers" :key="header" v-text="header"></th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="item in posts"
          @click="selectPost(item)"
          :key="item.id"
        >
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.body.substring(0, 50) }}</td>
        </tr>
        </tbody>
      </v-table>
    <post-details :post="currentPost" v-if="currentPost" @close="clearPost" />
  </v-container>
</template>

<script setup lang="ts">
import {onBeforeMount, reactive, ref} from "vue";
  import {Post} from "@lpi/common-types"
import {useAxios} from "../composables/use-axios";
import PostDetails from "../components/post-details.vue";
  const posts = reactive<Post[]>([]);
  const currentPost = ref<Post | null>(null)
const {  client } = useAxios()
  const headers = [
    "id",
    "title",
    "body",
  ]

 function selectPost(post: Post) {
    currentPost.value = post;
 }

function clearPost() {
  currentPost.value = null;
}

  onBeforeMount(() => {
    client.get("posts").then(v => posts.push(...v.data))
  })

</script>
