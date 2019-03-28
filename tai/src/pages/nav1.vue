<template>
	<div>
		<div class="kongbai">123</div>
     	<div class="pos_bottom">
			<router-link to="/nav3"><img src="../assets/pg-20.png"></router-link>
			<router-link to="/nav1"><img src="../assets/pg-19.png"></router-link>
			<router-link to="/nav2"><img src="../assets/pg-17.png"></router-link>
			<img src="../assets/pg-18.png">
		</div>
	</div>
</template>

<script>
</script>

<style>
	.pos_bottom {
		position: fixed;
		bottom: 0;
		background: #fff;
		width: 100%;
		height: 103px;
		z-index: 99999;
	}
	.kongbai {
		float: left;
		width: 100%;
		height: 553px;
	}
</style>