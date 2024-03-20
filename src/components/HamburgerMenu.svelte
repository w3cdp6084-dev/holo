<script lang="ts">
 import { slide } from 'svelte/transition';
 let isOpen: boolean = false;
</script>

<style>
 .menu {
   position: fixed;
   top: 0;
   left: 0;
   width: 250px;
   height: 100%;
   background-color: #fff;
   box-shadow: 0 0 5px rgba(0,0,0,0.5);
   transform: translateX(-100%);
   transition: transform 300ms ease;
 }
 .hamburger {
   cursor: pointer;
   z-index: 10;
   /* ハンバーガーアイコンのスタイリングをここに追加 */
 }
</style>

<button class="hamburger" on:click={() => isOpen = !isOpen} on:keydown={(event) => { if (event.key === 'Enter') isOpen = !isOpen; }}>
 <!-- ハンバーガーアイコンのマークアップをここに追加 -->
 ☰
</button>

{#if isOpen}
 <div class="menu" transition:slide>
   <!-- メニューコンテンツをここに追加 -->
   <ul>
     <li>Home</li>
     <li>About</li>
     <li>Services</li>
     <li>Contact</li>
   </ul>
 </div>
{/if}
