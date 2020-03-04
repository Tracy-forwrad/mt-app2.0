<template>
	<el-footer>
		<div class="my-footer">
			<div class="inner-wrap clearfix">
				<div class="row clearfix">
						<div class="line-data" v-for="(lineData,index) in allData" :key="index">
							<dl v-for="(lineEveryData,eIndex) in lineData" :key="eIndex" class="row-data">
								<dt class="row-title">{{lineEveryData.title}}</dt>
								<dd class="row-content" v-for="(piece,pIndex) in lineEveryData.lineData" :key="pIndex">
									<a href="">{{piece}}</a>
								</dd>
							</dl>
						</div>
				</div>
				<div class="copyright clearfix">
					<div class="copy-info">
						<p class="info">
							<span>©美团网团购 meituan.com</span>
							<a href="">京ICP证070791号</a><a href="">京ICP备10211739号</a>
						</p>
						<p class="info">
							<a href="">广播电视节目制作经营许可证（京）字第03889号</a>
						</p>
						<p class="info">
							<a href="">食品经营许可证</a><a href="">互联网药品信息服务资格证</a>
						</p>	
						<p class="info">
							<a href="">医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号</a><a href=""></a>
						</p>
					</div>
					<div class="copy-coop">
						<p class="desc"><a href="">京公网安备11010502025545号</a></p>
						<div class="cert">
							<a href="" class="san-quick"><img src="https://p1.meituan.net/travelcube/3e7f8a17e55bace814166b667618b459366061.png@76h_76w_2e" alt=""><span>北京三快科技有限公司</span></a>
							<a href="" class="cert-com site"></a>
							<a href="" class="cert-com knet"></a>
							<a href="" class="cert-com green"></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</el-footer>
</template>

<script>
	export default {
		data() {
			return {
				allData: [
					[{
							title: '用户帮助',
							lineData: [
								'申请退款', '查看美团券密码', '常见问题', '用户协议', '隐私政策', '反诈骗公告', '消费者权益保障'
							]
						},
						{
							title: '美团服务',
							lineData: [
								'美团外卖', '美团酒店', '猫眼电影', '美团配送', '美团云', '大众点评', '美团民宿', '无人配送'
							]
						}
					],
					[{
						title: '商家合作',
						lineData: [
							'美团餐饮商户中心', '美食商家入驻(非外卖)', '美团外卖开店申请', '美团收银官网', '外卖配送加盟申请', '美团点评餐饮学院', '酒店商家入驻', '境内度假商家入驻', '美团民宿房东商家入驻',
							'商家开票申请', '美团点评智能收银机', '美团点评餐饮开放平台', '美团点评收单', '免费使用美团排队', '快驴进货商家合作', '美团闪购商家入驻'
						]
					}],
					[{
							title: '代理商加盟',
							lineData: [
								'美团外卖代理商招募', '到店餐饮代理商招募', '非餐饮代理商招募', '美团联盟', '美团收银招募线上分销商', '美团点评5S服务商招募', '美团收单渠道代理商招募'
							]
						},
						{
							title: '美团规则',
							lineData: [
								'规则中心', '规则目录', '规则评议院'
							]
						}
					],
					[{
							title: '代理商加盟',
							lineData: [
								'美团外卖代理商招募', '到店餐饮代理商招募', '非餐饮代理商招募', '美团联盟', '美团收银招募线上分销商', '美团点评5S服务商招募', '美团收单渠道代理商招募'
							]
						},
						{
							title: '美团规则',
							lineData: [
								'规则中心', '规则目录', '规则评议院'
							]
						}
					],
					[{
							title: '用户帮助',
							lineData: [
								'申请退款', '查看美团券密码', '常见问题', '用户协议', '隐私政策', '反诈骗公告', '消费者权益保障'
							]
						},
						{
							title: '美团服务',
							lineData: [
								'美团外卖', '美团酒店', '猫眼电影', '美团配送', '美团云', '大众点评', '美团民宿', '无人配送'
							]
						}
					]
				]
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../assets/css/footer/footer.scss';
</style>
