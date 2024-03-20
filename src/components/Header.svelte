<script lang="ts">
 import HamburgerMenu from './HamburgerMenu.svelte';
</script>

<nav>
 <div class="logo">
   <!-- ロゴやブランド名など -->
 </div>
 <HamburgerMenu />
</nav>

<style>
 nav {
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 1rem;
   background-color: #333;
   color: #fff;
 }
 .logo {
   /* ロゴのスタイリング */
 }
</style>
