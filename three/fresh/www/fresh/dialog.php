<?php
//	$user = $_GET["user"];
	$conn=mysqli_connect("10.31.158.198","root","123456","dalei");
	mysqli_query($conn,"set names 'utf8'");		
	$sql = "insert into dialog(name, pwd, email) values('2', '2233', '3333')";
	$rest = $conn->query($sql);	
//	$output;
//	if ($rest) {
//		$output = array("state"=>"success");
//	} else {
//		$output = array("state"=>"fail","errMsg"=>"该用户名已存在！");
//	}	
//	echo json_encode($output);  
	
	
	
//	echo "11a";
//	echo json_encode($user);



?>