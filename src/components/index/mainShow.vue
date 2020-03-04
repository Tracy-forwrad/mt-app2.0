<template>
	<div class="my-main">
		<!-- 顶部导航区 -->
		<ul class="impor-list clearfix">
			<li><a href="">美团外卖</a></li>
			<li><a href="">猫眼电影</a></li>
			<li><a href="">美团酒店</a></li>
			<li><a href="">民宿／公寓</a></li>
			<li><a href="">商家入驻</a></li>
			<li><a href="">美团公益</a></li>
		</ul>
		<!-- 中间大的展示区 -->
		<el-row class="inner-wrap">
			<el-col :span="5" style="margin-right: -5px">
				<div class="list-area">
					<!-- 分类列表 -->
					<category :cate="cateList" />
				</div>
			</el-col>
			<el-col class="big-img-area" :span="10" :md="8" :xs="8" :sm="8">
				<big-img-area/>
			</el-col>
			<el-col :span="4" class="little-img-area">
				<lit-img-area/>
			</el-col>
			<el-col :span="5" class="user-info-area">
				<user-info-area/>
			</el-col>
		</el-row>
		<!-- 大的场景区，分场景 -->
		<scene-area :youhuiTabs="youhuiTabs"/>
		<!-- 底部的美团导航 -->
		<meituan-nav/>
	</div>
</template>

<script>
	import category from '@/components/index/category.vue';
	import bigImgArea from '@/components/index/bigImgArea.vue'
	import litImgArea from '@/components/index/litImgArea.vue'
	import userInfoArea from '@/components/index/userInfoArea.vue'
	import sceneArea from '@/components/index/sceneArea.vue'
	import meituanNav from '@/components/index/meituanNav.vue'
	export default {
		data() {
			return {
				youhuiTabs: [{
					type: 'all'
				}],
				cateList: [{
						title: [{
							titleSplit: '美食',
							notLast: false
						}],
						class: 'icon-foodNew',
						id: '001',
						content: [{
							conTitle: '美食',
							id: '001-1',
							list: [{
									id: '001-1-1',
									name: '代金券'
								}, {
									id: '001-1-2',
									name: '甜点饮品'
								}, {
									id: '001-1-3',
									name: '火锅'
								}, {
									id: '001-1-4',
									name: '自助餐'
								}, {
									id: '001-1-5',
									name: '小吃快餐'
								}, {
									id: '001-1-6',
									name: '日韩料理'
								}, {
									id: '001-1-7',
									name: '西餐'
								}, {
									id: '001-1-8',
									name: '聚餐宴请'
								}, {
									id: '001-1-9',
									name: '烧烤烤肉'
								}, {
									id: '001-1-10',
									name: '东北菜'
								}, {
									id: '001-1-11',
									name: '川湘菜'
								}, {
									id: '001-1-12',
									name: '江浙菜'
								}, {
									id: '001-1-13',
									name: '香锅烤鱼'
								}, {
									id: '001-1-14',
									name: '粤港菜'
								}, {
									id: '001-1-15',
									name: '聚餐宴请'
								}, {
									id: '001-1-16',
									name: '中式烧烤/烤串'
								}, {
									id: '001-1-17',
									name: '西北菜'
								}, {
									id: '001-1-18',
									name: '咖啡酒吧茶馆'
								}, {
									id: '001-1-19',
									name: '云贵菜'
								}, {
									id: '001-1-20',
									name: '东南亚菜'
								},
								{
									id: '001-1-21',
									name: '海鲜'
								}, {
									id: '001-1-22',
									name: '素食'
								}, {
									id: '001-1-23',
									name: '台湾/客家菜'
								}, {
									id: '001-1-24',
									name: '创意菜'
								}, {
									id: '001-1-25',
									name: '汤/粥/炖菜'
								}, {
									id: '001-1-26',
									name: '蒙餐'
								}, {
									id: '001-1-27',
									name: '其他美食'
								}, {
									id: '001-1-28',
									name: '京菜鲁菜'
								}
							]
						}]
					}, {
						title: [{
							titleSplit: '外卖',
							notLast: false
						}],
						class: 'icon-waimaiNew',
						id: '002',
						content: [{
							conTitle: '外卖',
							id: '002-1',
							list: [{
								id: '001-1-1',
								name: '美团外卖'
							}]
						}]
					}, {
						title: [{
							titleSplit: '酒店',
							notLast: false
						}],
						class: 'icon-hotelNew',
						id: '003',
						content: [{
							conTitle: '酒店',
							id: '003-1',
							list: [{
									id: '003-1-1',
									name: '经济型'
								},
								{
									id: '003-1-2',
									name: '舒适/三星'
								},
								{
									id: '003-1-3',
									name: '高档/四星'
								},
								{
									id: '003-1-4',
									name: '豪华/五星'
								}
							]
						}]
					}, {
						title: [{
							titleSplit: '榛果民宿',
							notLast: false
						}],
						class: 'icon-zhenguoNew',
						id: '004',
						content: [{
							conTitle: '热门城市',
							id: '004-1',
							list: [{
									id: '004-1-1',
									name: '上海'
								},
								{
									id: '004-1-2',
									name: '成都'
								},
								{
									id: '004-1-3',
									name: '北京'
								}, {
									id: '004-1-4',
									name: '重庆'
								}, {
									id: '004-1-5',
									name: '南京'
								}, {
									id: '004-1-6',
									name: '杭州'
								}, {
									id: '004-1-7',
									name: '广州'
								}, {
									id: '004-1-8',
									name: '西安'
								}, {
									id: '004-1-9',
									name: '厦门'
								}, {
									id: '004-1-10',
									name: '武汉'
								}, {
									id: '004-1-11',
									name: '长沙'
								}, {
									id: '004-1-12',
									name: '青岛'
								}, {
									id: '004-1-13',
									name: '深圳'
								}, {
									id: '004-1-14',
									name: '天津'
								}, {
									id: '004-1-15',
									name: '苏州'
								}
							]
						}, {
							conTitle: '热门房源',
							id: '004-2',
							list: [{
									id: '004-2-1',
									name: '复式Loft'
								},
								{
									id: '004-2-2',
									name: '别墅'
								}
							]
						}]
					}, {
						title: [{
							titleSplit: '猫眼电影',
							notLast: false
						}],
						class: 'icon-maoyanNew',
						id: '005',
						content: [{
							conTitle: '美食',
							id: '001-1',
							list: [{
								id: '001-1-1',
								name: '代金券'
							}, {
								id: '001-1-2',
								name: '甜点饮品'
							}, {
								id: '001-1-3',
								name: '火锅'
							}, {
								id: '001-1-4',
								name: '自助餐'
							}, {
								name: '小吃快餐'
							}, {
								id: '001-1-6',
								name: '日韩料理'
							}, {
								id: '001-1-7',
								name: '西餐'
							}, {
								id: '001-1-8',
								name: '聚餐宴请'
							}, {
								id: '001-1-9',
								name: '烧烤烤肉'
							}, {
								id: '001-1-10',
								name: '东北菜'
							}, {
								id: '001-1-11',
								name: '川湘菜'
							}]
						}]
					},
					{
						title: [{
							titleSplit: '机票',
							notLast: true
						}, {
							titleSplit: '火车票',
							notLast: false
						}],
						class: 'icon-planeNew',
						id: '006',
						content: [{
							conTitle: '机票',
							id: '006-1',
							list: [{
									id: '006-1-1',
									name: '国内机票'
								},
								{
									id: '006-1-2',
									name: '国际/港澳台机票'
								}
							]
						}, {
							conTitle: '火车票',
							id: '006-2',
							list: [{
								id: '006-2-1',
								name: '火车票'
							}]
						}]
					},
					{
						title: [{
							titleSplit: '休闲娱乐',
							notLast: true
						}, {
							titleSplit: 'KTV',
							notLast: false
						}],
						class: 'icon-ktvNew',
						id: '007',
						content: [{

						}]
					},
					{
						title: [{
							titleSplit: '生活服务',
							notLast: false
						}],
						class: 'icon-lifeNew',
						id: '008',
					},
					{
						title: [{
							titleSplit: '丽人',
							notLast: true
						}, {
							titleSplit: '美发',
							notLast: true
						}, {
							titleSplit: '医学美容',
							notLast: false
						}],
						class: 'icon-beautyNew',
						id: '009',
					},
					{
						title: [{
							titleSplit: '结婚',
							notLast: true
						}, {
							titleSplit: '婚纱摄影',
							notLast: true
						}, {
							titleSplit: '婚宴',
							notLast: false
						}],
						class: 'icon-marriedNew',
						id: '010',
					},
					{
						title: [{
							titleSplit: '亲子',
							notLast: true
						}, {
							titleSplit: '儿童乐园',
							notLast: true
						}, {
							titleSplit: '幼教',
							notLast: false
						}],
						class: 'icon-childNew',
						id: '011',
						content: []
					},
					{
						title: [{
							titleSplit: '运动健身',
							notLast: true
						}, {
							titleSplit: '健身中心',
							notLast: false
						}],
						class: 'icon-sportNew',
						id: '012',
						content: [{
							conTitle: '运动健身',
							id: '012-1',
							list: [{
								id: '012-1-1',
								name: '健身中心'
							}, {
								id: '012-1-2',
								name: '武术场馆'
							}, {
								id: '012-1-3',
								name: '游泳馆'
							}, {
								id: '012-2-4',
								name: '羽毛球馆'
							}, {
								id: '012-2-5',
								name: '溜冰场'
							}, {
								id: '012-2-6',
								name: '射箭馆'
							}, {
								id: '012-2-7',
								name: '篮球场'
							}, {
								id: '012-2-8',
								name: '网球馆'
							}, {
								id: '012-2-9',
								name: '台球馆'
							}, {
								id: '012-2-10',
								name: '乒乓球'
							}, {
								id: '012-2-11',
								name: '足球场'
							}, {
								id: '012-2-12',
								name: '高尔夫场'
							}, {
								id: '012-2-13',
								name: '保龄球馆'
							}, {
								id: '012-2-14',
								name: '体育场馆'
							}, {
								id: '012-2-15',
								name: '马术场'
							}, {
								id: '012-2-16',
								name: '壁球馆'
							}, {
								id: '012-2-17',
								name: '更多运动'
							}]
						}]
					},
					{
						title: [{
							titleSplit: '家装',
							notLast: true
						}, {
							titleSplit: '建材',
							notLast: true
						}, {
							titleSplit: '家居',
							notLast: false
						}],
						class: 'icon-decorateNew',
						id: '013',
						content: [{
								conTitle: '装修设计',
								id: '013-1',
								list: [
									// 'KTV', '酒吧', '密室逃脱', '游乐游艺', '网吧网咖', '私人影院', 'DIY手工坊', '桌面游戏', '采摘/农家乐', '棋牌室', '轰趴馆', '真人CS', 'VR',
									// 	'其他玩乐'
									{
										id: '013-2-1',
										name: '半包装修'
									}, {
										id: '013-2-2',
										name: '全包装修'
									}, {
										id: '013-2-3',
										name: '清包装修'
									}
								]
							},
							{
								conTitle: '装修建材',
								id: '013-2',
								list: [{
									id: '013-1-1',
									name: '地板'
								}, {
									id: '013-1-2',
									name: '瓷砖石材'
								}, {
									id: '013-1-3',
									name: '橱柜'
								}, {
									id: '013-2-4',
									name: '灯饰照明'
								}, {
									id: '013-2-5',
									name: '厨卫洁具'
								}, {
									id: '013-2-6',
									name: '油漆涂料'
								}, {
									id: '013-2-7',
									name: '集成吊顶'
								}, {
									id: '013-2-8',
									name: '墙纸墙艺'
								}, {
									id: '013-2-9',
									name: '门窗'
								}, {
									id: '013-2-10',
									name: '木材板材'
								}, {
									id: '013-2-11',
									name: '家用五金'
								}, {
									id: '013-2-12',
									name: '电工电料'
								}, {
									id: '013-2-13',
									name: '楼梯'
								}, {
									id: '013-2-14',
									name: '管材管件'
								}]
							}, {
								conTitle: '家具家居',
								id: '013-3',
								list: [{
									id: '013-3-1',
									name: '家具'
								}, {
									id: '013-3-2',
									name: '床上用品/家纺'
								}, {
									id: '013-3-3',
									name: '家居饰品'
								}, {
									id: '013-3-4',
									name: '厨具餐具'
								}, {
									id: '013-3-5',
									name: '智能家居'
								}]
							}, {
								conTitle: '家装卖场',
								id: '013-4',
								list: [{
									id: '013-4-1',
									name: '灯饰卖场'
								}, {
									id: '013-4-2',
									name: '建材卖场'
								}, {
									id: '013-4-3',
									name: '家居卖场'
								}]
							}
						]
					},
					{
						title: [{
							titleSplit: '学习培训',
							notLast: true
						}, {
							titleSplit: '音乐培训',
							notLast: false
						}],
						class: 'icon-educationNew',
						id: '014',
						content: [{
								conTitle: '音乐培训',
								id: '014-1',
								list: [
									// 'KTV', '酒吧', '密室逃脱', '游乐游艺', '网吧网咖', '私人影院', 'DIY手工坊', '桌面游戏', '采摘/农家乐', '棋牌室', '轰趴馆', '真人CS', 'VR',
									// 	'其他玩乐'
									{
										id: '014-1-1',
										name: '钢琴'
									}, {
										id: '014-1-2',
										name: '吉他'
									}, {
										id: '014-1-3',
										name: '小提琴'
									}, {
										id: '014-1-4',
										name: '古筝'
									}, {
										id: '014-1-5',
										name: '架子鼓'
									}, {
										id: '014-1-6',
										name: '声乐'
									},
									{
										id: '014-1-7',
										name: '其他音乐培训'
									}
								]
							},
							{
								conTitle: '职业技术',
								id: '014-2',
								list: [{
									id: '014-2-1',
									name: '美容化妆'
								}, {
									id: '014-2-2',
									name: '会计'
								}, {
									id: '014-2-3',
									name: 'IT'
								}, {
									id: '014-2-4',
									name: '厨艺'
								}, {
									id: '014-2-5',
									name: '管理培训'
								}, {
									id: '014-2-6',
									name: '摄影培训'
								}, {
									id: '014-2-7',
									name: '司法考试'
								}, {
									id: '014-2-8',
									name: '公务员培训'
								}, {
									id: '014-2-9',
									name: '其他职业培训'
								}]
							}, {
								conTitle: '外语培训',
								id: '014-3',
								list: [{
									id: '014-3-1',
									name: '英语'
								}, {
									id: '014-3-2',
									name: '日语'
								}, {
									id: '014-3-3',
									name: '韩语'
								}, {
									id: '014-3-4',
									name: '法语'
								}, {
									id: '014-3-5',
									name: '德语'
								}, {
									id: '014-3-6',
									name: '汉语'
								}, {
									id: '014-3-7',
									name: '俄语'
								}, {
									id: '014-3-8',
									name: '西班牙语'
								}, {
									id: '014-3-9',
									name: '其他外语'
								}]
							}, {
								conTitle: '美术培训',
								id: '014-4',
								list: [{
									id: '014-4-1',
									name: '绘画'
								}, {
									id: '014-4-2',
									name: '书法'
								}, {
									id: '014-4-3',
									name: '其他美术'
								}]
							}
						]
					},
					{
						title: [{
							titleSplit: '医疗健康',
							notLast: true
						}, {
							titleSplit: '宠物',
							notLast: true
						}, {
							titleSplit: '爱车',
							notLast: false
						}],
						class: 'icon-medicalNew',
						id: '015',
						content: [{
								conTitle: '医院',
								id: '015-1',
								list: [
									// 'KTV', '酒吧', '密室逃脱', '游乐游艺', '网吧网咖', '私人影院', 'DIY手工坊', '桌面游戏', '采摘/农家乐', '棋牌室', '轰趴馆', '真人CS', 'VR',
									// 	'其他玩乐'
									{
										id: '015-1-1',
										name: '医院'
									}, {
										id: '015-1-2',
										name: '齿科口腔'
									}, {
										id: '015-1-3',
										name: '体检中心'
									}, {
										id: '015-1-4',
										name: '药店'
									}, {
										id: '015-1-5',
										name: '中医'
									}, {
										id: '015-1-6',
										name: '其他健康服务'
									}
								]
							},
							{
								conTitle: '爱车',
								id: '015-2',
								list: [{
									id: '015-2-1',
									name: '洗车'
								}, {
									id: '015-2-2',
									name: '租车'
								}, {
									id: '015-2-3',
									name: '加油站'
								}, {
									id: '015-2-4',
									name: '维修保养'
								}, {
									id: '015-2-5',
									name: '驾校'
								}, {
									id: '015-2-6',
									name: '汽车美容'
								}, {
									id: '015-2-7',
									name: '陪练'
								}, {
									id: '015-2-8',
									name: '汽车用品'
								}, {
									id: '015-2-9',
									name: '停车场'
								}, {
									id: '015-2-10',
									name: '汽车保险'
								}, {
									id: '015-2-11',
									name: '4S店/汽车销售'
								}, {
									id: '015-2-12',
									name: '更多汽车服务'
								}, {
									id: '015-2-13',
									name: '机油保养'
								}, {
									id: '015-2-14',
									name: '汽车报价'
								}, {
									id: '015-2-15',
									name: '二手车'
								}, {
									id: '015-2-16',
									name: '广告驾校'
								}, {
									id: '015-2-17',
									name: '交警队'
								}, {
									id: '015-2-18',
									name: '汽车改装'
								}, {
									id: '015-2-19',
									name: '汽车配件'
								}]
							}, {
								conTitle: '宠物',
								id: '015-3',
								list: [{
									id: '015-3-1',
									name: '宠物店'
								}, {
									id: '015-3-2',
									name: '宠物医院'
								}]
							}
						]
					},
					{
						title: [{
							titleSplit: '酒吧',
							notLast: true
						}, {
							titleSplit: '密室逃脱',
							notLast: false
						}],
						class: 'icon-barNew',
						id: '016',
						content: [{
							conTitle: '玩乐',
							id: '016-1',
							list: [
								// 'KTV', '酒吧', '密室逃脱', '游乐游艺', '网吧网咖', '私人影院', 'DIY手工坊', '桌面游戏', '采摘/农家乐', '棋牌室', '轰趴馆', '真人CS', 'VR',
								// 	'其他玩乐'
								{
									id: '016-1-1',
									name: 'KTV'
								}, {
									id: '016-1-2',
									name: '酒吧'
								}, {
									id: '016-1-3',
									name: '密室逃脱'
								}, {
									id: '016-1-4',
									name: '游乐游艺'
								}, {
									id: '016-1-5',
									name: '网吧网咖'
								}, {
									id: '016-1-6',
									name: '私人影院'
								}, {
									id: '016-1-7',
									name: 'DIY手工坊'
								}, {
									id: '016-1-8',
									name: '桌面游戏'
								}, {
									id: '016-1-9',
									name: '采摘/农家乐'
								}, {
									id: '016-1-10',
									name: '棋牌室'
								}, {
									id: '016-1-11',
									name: '轰趴馆'
								}, {
									id: '016-1-12',
									name: '真人CS'
								}, {
									id: '016-1-13',
									name: 'VR'
								}, {
									id: '016-1-14',
									name: '其他玩乐'
								}
							]
						}]
					}
				]
			}
		},
		components: {
			category,
			bigImgArea,
			litImgArea,
			userInfoArea,
			sceneArea,
			meituanNav
		}
	}
</script>

<style scoped lang="scss">
	@import '../../assets/css/index/mainShow.scss';
</style>
