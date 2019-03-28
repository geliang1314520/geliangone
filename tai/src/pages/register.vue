<template>
	 <div class="mian">  	
      <div class="head">
	       <router-link to="/login">
	       	 <span class="le"><</span>
	       </router-link>
	 </div>
        <div class="de"><span>注册</span></div>
       <div class="zi"><span>手机号码</span></div>
       <div class="shu1">
       	<input type="text"v-model="username">
       </div>
       <div class="zi"><span>密码</span></div>
       <div class="shu1">
       	<input type="password" v-model="password">
       </div>
       <div class="xia">
       	<button v-on:click=register()>下一步</button>
       </div>
  </div> 
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
				rePassword: '',
			}
		},
		methods: {
			//      注册方法
			register() {
				
					
						let sendDate = {
							username: this.username,
							password: this.password,
						}
						this.$http.post('/api/users/register', sendDate).then((data) => {
							if(data.body.status == 1) {
								alert(data.body.message)
							} else {
								alert(data.body.message)
								this.$router.push({path: 'login'});
								//            this.$router.go(-1)
							}
						})
				}
			

		}
	}
</script>

<style>
	.head{
		margin-left: 30px;
	}
	.le{
		font-size: 35px;
		color: white;
	}
.mian{
	padding-top: 34px;
	width: 750px;
	height: 1334px;
	background-color: #4a2864;
}
.mian span{
	margin-left: 30px;
}
.de{
	margin-left: 62px;
	margin-top: 76px;
	color: white;
	font-size: 60px;
}
.zi{
	margin-top: 52px;
	margin-left: 62px;
	color: white;
	font-size: 30px;
}
.shu1 input{
	margin-top: 20px;
	margin-left: 60px;
	color: white;
	font-size: 25px;
	width: 630px;
	height: 74px;
	background-color: #4a2864; 
	border-top: 0px solid #4a2864;
	border-left: 0px solid #4a2864;
	border-right: 0px solid #4a2864;
	border-bottom: 1px solid white;
}
.xia{
	margin-top: 550px;
	margin-left: 450px;
}
.xia button{
	color: white;
	font-size: 30px;
	background-color:#4a2864;
	width: 266px;
	height: 94px;
	border: 1px solid white;
	border-radius: 50px;
}
</style>