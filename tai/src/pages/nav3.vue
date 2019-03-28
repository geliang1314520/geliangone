<template>
	<div class="main">
		<div id="head">
			<div class="head-left"><img src="../assets/pg-2.png"></div>
			<div class="head-zhong">贝太厨房</div>
			<div class="head-right"><img src="../assets/bg-4.png"><img src="../assets/bg-3.png"></div>			
		</div>
		<hr />
	</br></br></br></br></br>
		<div id="nav">
			<span class="nav1">今日推荐</span>
		</div>
		
	  <div class="tu">
	      <Carousel autoplay v-model="value2" loop>
	        <div v-for="i in src">
		        <CarouselItem>
		          <div class="demo-carousel"><img :src="i.src"></div>
		        </CarouselItem>
	      	</div>
	      </Carousel>
      </div>
		
		
		
		
		<div class="tu1">
			<img class="tu3" src="../assets/pg-6.png">
			<img class="tu2" src="../assets/pg-7.png">
			<img class="tu2" src="../assets/pg-8.png">
			<img class="tu2" src="../assets/pg-9.png">
		</div>
		
		    <Carousel v-model="value1" loop>
        <CarouselItem>
            <div class="demo-carousel">
            	<div class="gl" >
						<div class="gl2">
			     			<span class="nav1">一日三餐·早上好</span></br>
							<img src="../assets/pg-10.png">
							<img src="../assets/pg-11.png">
							<img src="../assets/pg-12.png">
						</div>
					</div>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
            	<div class="gl" >
						<div class="gl2">
			     			<span class="nav1">一日三餐·中午好</span></br>
							<img src="../assets/pg-10.png">
							<img src="../assets/pg-11.png">
							<img src="../assets/pg-12.png">
						</div>
					</div>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
            	<div class="gl">
						<div class="gl2">
			     			<span class="nav1">一日三餐·晚上好</span></br>
							<img src="../assets/pg-10.png">
							<img src="../assets/pg-11.png">
							<img src="../assets/pg-12.png">
						</div>
					</div>
            </div>
        </CarouselItem>
    </Carousel>	
    	<div class="kongbai"></div>
     	<div class="pos_bottom">
			<img src="../assets/pg-15.png">
			<router-link to="/nav1"><img src="../assets/pg-16.png"></router-link>
			<router-link to="/nav2"><img src="../assets/pg-17.png"></router-link>
			<img src="../assets/pg-18.png">
		</div>
	</div>
</template>

<script>
	    export default {
        data () {
            return {
            	value1:0,
                value2: 0,
                src:[]
                
            }
        },
         created() {
         	
            this.$http.post('/api/lubo/lubos').then((data) => {
        		this.src = data.body.data;
        		
        	})
    	}
    }
</script>

<style>
	.gl{
		background: #fff;
		margin-top: 100px;
	}
	.gl2{
		margin-top: 44px;
	}
	.gl2 img{
	  margin-left: 30px;
	}
	.gl1{
		font-size: 30px;
		margin-left: 388px;
	}
	.tu3{
		margin-left: 35px;
	}
	.tu2{
		margin-left: 70px;
	}
	.tu img{
		margin-left:35px ;
		margin-top: 46px;
	}
	.main{
		width: 100%px;
	}
	#head{
		height: 88px;
	}
	.head-left{
		float: left;
		margin-left: 10px;
		
	}
	.head-zhong{
		float: left;
		margin-top: 20px;
		margin-left: 180px;
		font-size: 30px;
		height: 50px;
		font-weight: bold;
	}
	.head-right{
		float: left;
		margin-left: 180px;
	}
	.nav2{
		font-size: 30px;
		margin-left: 488px;
	}
	.nav1{
		font-size: 30px;
		margin-left: 35px;
	}
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