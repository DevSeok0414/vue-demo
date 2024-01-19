<template>
  <body>
  <article class="notice">
    <div class="page-title">
      <div class="container">
        <h3>{{ title }}</h3>
      </div>
    </div>

    <!-- board seach area -->
    <div id="board-search">
      <div class="container">
        <div class="search-window">
          <form action="">
            <div class="search-wrap">
              <label for="search" class="blind">공지사항 내용 검색</label>
              <input id="search" type="search" name="" placeholder="검색어를 입력해주세요." value="">
              <button type="submit" class="btn btn-dark">검색</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- board list area -->
    <div id="board-list">
      <div class="container">
        <table class="board-table">
          <thead>
          <tr>
            <th scope="col" class="th-num">번호</th>
            <th scope="col" class="th-title">제목</th>
            <th scope="col" class="th-writer">작성자</th>
            <th scope="col" class="th-date">등록일</th>
          </tr>
          </thead>

          <tbody>
          <tr v-for="post in pagedPosts" :key="post.id">
            <td>{{ post.id }}</td>
            <th>
              <a :href="'/posts/' + post.id">{{ post.title }}</a>
            </th>
            <td>{{ post.UserId }}</td>
            <td>{{ formatDate(post.createdAt) }}</td>
          </tr>
          </tbody>

          <tfoot>

          </tfoot>
        </table>
      </div>
    </div>

  </article>
  </body>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: '공지사항2',
      posts: [],
      page: 1,
      pageSize: 10,
    }
  },
  methods: {
    getPosts() {
      axios.get("/posts", "", {
        header: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("성공\n", res.data);
        this.posts = res.data.sort((a, b) => b.id - a.id);
      })
      .catch((res) => {
        console.error("실패\n", res)
      });
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toISOString().split('T')[0];
    }
  },
  created() {
    this.page = this.$route.query.page || 1;
    this.getPosts();
  },
  computed: {
    pagedPosts() {
      const start = (this.page - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.posts.slice(start, end);
    }
  }
}


</script>

<style scoped>
@import '../assets/main.css';
</style>