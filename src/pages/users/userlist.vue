<template>
    <div class="user-list">
      <h1>User List</h1>
      <div class="user-list-container">
        <span>{{ abc }}</span>
        <span>{{ foo }}</span>

        <a-button type="primary" v-on:click="addCount()">click here to add count</a-button>

        <ul>
          <li v-for="user in users" :key="user.id" class="user-item">
            <router-link :to="'/users/' + user.id" class="user-link">
              <div class="user-avatar">{{ user.name.charAt(0) }}</div>
              <div class="user-info">
                <span class="user-name">{{ user.name }}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script lang="ts" setup>
const users = ref([
  { id: 1, name: 'User One' },
  { id: 2, name: 'User Two' },
  { id: 3, name: 'User Three' },
  // Add more users if needed for testing scroll
]);

const abc = ref<number>(0);

const foo = useFoo();

function addCount(): void {
  abc.value += 1;
}
</script>

<style scoped>
.user-list {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

.user-list h1 {
  text-align: center;
  margin-bottom: 20px;
}

.user-list-container {
  max-height: 500px;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
}

.user-item {
  list-style: none;
  margin: 10px 0;
}

.user-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.user-link:hover {
  background-color: #f0f0f0;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #007BFF;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  font-size: 18px;
  font-weight: bold;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-size: 16px;
  font-weight: 500;
}
</style>
