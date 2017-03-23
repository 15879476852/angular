<?php
	$con = mysqli_connect("localhost", "root", "mysql", "zhiwoyaozhuang");
	mysqli_query($con, "set names 'utf8'");
	$type = $_GET["type"];
	switch ($type) {
		case 'mainpush':
			getMainpush();
			break;
		case 'newpro':
			getNewpro();
			break;
		case 'recommend':
			getRecommend();
			break;
		case 'goodslist':
			getgoodslist();
			break;
		
		default:
			
			break;
	}
	function getMainpush(){
		$sql = "select * from mainpush";
		rec($sql);
	}
	function getNewpro(){
		$sql = ("select *from newpro");
		rec($sql);
	}
	function getRecommend(){
		$sql = ("select *from recommend");
		rec($sql);
	}
	function getBrand_team(){
		$sql = ("select *from mainpush");
		rec($sql);
	}
	function getgoodslist(){
		$sql = ("select *from goodslist");
		rec($sql);
	}
	function rec($sql){
		global $con;
		$rec = $con-> query($sql);
		$goods = array();
		if($rec->num_rows>0){
			while($row = $rec->fetch_assoc()){
				$goods[] = $row;
			}
		}
		echo json_encode($goods);
	}
	$con->close();
?>